# Your Eval Is a Backtest: Three Ways It Lies to You

> **Type:** Technical article · **Audience:** AI engineers and researchers who build evals, benchmarks and RL environments · **Reading time:** ~7 min
> **Based on:** [Forex-ML-System](https://github.com/BrayanSO/Forex-ML-System/tree/validacion-estrategias) and its [case study](01-case-study-trading-strategies.md)

| | |
|---|---|
| **Context / goal** | Show AI builders that the failure modes of a trading backtest are the same ones that inflate agent evals, using real bugs as evidence. |
| **The problem** | An eval is a measurement, and measurements fail quietly. A harness that drops errors, counts correlated attempts as independent, or breaks on one slice of tasks can turn a weak agent into a strong one on paper. |
| **My role / process** | I validated 30+ trading strategies on 347M real market ticks and found three bugs that each produced a convincing fake result. I mapped each one to its equivalent in agent evaluation and wrote the checks that would have caught it. |
| **Result** | A practical checklist and a short Python snippet any eval team can apply before trusting a score. |

---

## A backtest is an eval with money attached

A backtest asks: *if this policy had acted in this environment, what reward would it have earned?* That is exactly what an agent eval asks. The vocabulary changes, the structure does not:

| Trading backtest | Agent eval / RL environment |
|---|---|
| Strategy | Policy or agent |
| Market data | Environment and task set |
| Profit per trade (in R) | Reward or score per task |
| Development vs. validation period | Train / dev / held-out test split |
| Look-ahead bias | Leakage: the agent sees the answer, or the grader rewards something it shouldn't |
| Spread and commissions | The floor score a do-nothing agent already gets |

I learned these failure modes the expensive way: building a lab that tested more than 30 trading strategies. **Every positive result I found was a bug.** Here are the three that came closest to fooling me, and what each one looks like in an eval.

## Lie #1: Counting the same success many times

**What happened.** The most-viewed trading strategy on YouTube (2.3 million views) produced the first "winner" of the whole project: **+0.07 R per trade with a t-statistic of 4**. By any normal standard, that is significant.

Before celebrating, I looked at where the profit came from. A handful of huge winners carried the entire result. The code allowed several trades to be open at the same time in the same market, so one strong rally was counted as many separate wins. Those trades were not independent observations. They were the same event, measured again and again.

With one trade at a time, the result fell to **+0.01 R, t = 0.3**: indistinguishable from zero.

**The eval version.** You run 5 attempts per task across 100 tasks and compute a confidence interval as if you had 500 independent samples. But attempts on the same task are correlated: if the task is easy, all 5 pass. The same happens with near-duplicate tasks generated from one template, or with several checkpoints from one training run. Your error bars shrink, and a noise-level improvement looks real.

**The check.** Aggregate to the independent unit first (one number per task), and compute uncertainty over *tasks*, not attempts. If a result is only significant when you count attempts, it is not significant.

## Lie #2: The denominator that quietly shrinks

**What happened.** A machine-learning model looked slightly profitable. The adapter between the model and the backtest engine had a line that dropped any decision with an empty feature. Some features are empty *by design*: "distance to the London session high" does not exist before London closes. That one line silently discarded **75% of the decisions**. On all decisions, the model was flat.

No error, no warning. The number was simply computed on the 25% of cases that happened to be easy to process.

**The eval version.** The harness skips tasks that time out, crash the sandbox, or return output the parser cannot read, and reports accuracy over what remains. If failures concentrate on hard tasks (and they usually do), the score goes *up* when the environment gets *worse*. Two agents compared on different surviving subsets are not being compared at all.

**The check.** Fix the expected denominator before running. Score every task, including errors and timeouts, as an explicit failure. Report the number of tasks completed next to the score, every time.

## Lie #3: A bug that only exists on Mondays

**What happened.** My live paper-trading bot loaded three days of history at startup. On Mondays, three calendar days back lands in the middle of Friday, so "yesterday's high and low" were computed from half a session. The bug only touched one day of the week, and Monday happened to be the bot's best day. Once those trades were excluded, the live result went from **+4.3 R to −3.4 R**.

The aggregate number looked healthy. The breakdown by day of the week is what exposed it.

**The eval version.** An environment or grader bug that only affects one slice: tasks that need a particular tool version, pages that load slowly, a date-dependent task, a grader that accepts an empty answer for one task family. The overall score blends the broken slice with the healthy ones, so nothing looks wrong unless you split it.

**The check.** Break every score down by task family, environment version and difficulty. Investigate any slice whose result is very different from the rest, especially when it is the slice that is *helping*.

## Before all three: measure the null agent

The single most useful check in the whole project came before testing any strategy. I ran the backtest engine with **random entries**. A strategy with no edge should lose exactly the cost of trading, and nothing else. The engine measured **−0.095 R per trade against an expected −0.086 R (z = −0.8)**: no detectable bias. Only then did I trust it to judge real strategies.

Evals have the same need. Before scoring a real agent, score an agent that does nothing, or acts at random. If a do-nothing agent scores above zero, the grader is rewarding something other than the task: a format, a default answer, a side effect of the environment. If it scores where you expect, you have a baseline that every real result must clearly beat.

## A minimal sanity check in Python

This assumes one row per attempt, where crashes and timeouts are already recorded as a score of 0 rather than dropped:

```python
import numpy as np
import pandas as pd


def summarize_eval(results: pd.DataFrame, expected_tasks: int, n_boot: int = 2000, seed: int = 0):
    """results: one row per attempt, columns task_id, family, score (errors scored as 0)."""
    # Lie #2: the denominator must not shrink
    missing = expected_tasks - results["task_id"].nunique()
    assert missing == 0, f"{missing} tasks have no result"

    # Lie #1: one number per independent unit (the task), not per attempt
    per_task = results.groupby("task_id")["score"].mean()

    rng = np.random.default_rng(seed)
    boots = [rng.choice(per_task.values, size=len(per_task), replace=True).mean() for _ in range(n_boot)]
    low, high = np.percentile(boots, [2.5, 97.5])

    # Lie #3: look at the slices, not only the total
    by_family = results.groupby("family")["score"].agg(["mean", "count"])

    return {"score": per_task.mean(), "ci95": (low, high), "tasks": len(per_task), "by_family": by_family}
```

Run it on your null agent first. Then run it on your real agent, and compare the confidence intervals, not just the means.

## The checklist

Before trusting an eval score, ask:

1. **What does a do-nothing agent score?** If you don't know, you don't know what the real score means.
2. **How many tasks are in the denominator?** Is it the number you planned, and are errors counted as failures?
3. **What is the independent unit?** Uncertainty should be computed over tasks, not attempts or near-duplicates.
4. **Does the result hold on every slice?** A strong total can hide one broken family that carries it.
5. **Was it decided before you looked?** Metrics, thresholds and the held-out split should be fixed before the first run. I tested 112 Fibonacci variants; reporting the best one from the development period would have been a textbook way to fool myself. Each had to pass the held-out validation period too, and none did.

In my project, every one of these checks turned a "winner" back into what it really was. That outcome was disappointing for trading. For measurement, it was the point: the most valuable thing an eval can do is tell you the truth while it is still cheap to hear.

*The trading results described here come from research on a demo account and are not financial advice.*
