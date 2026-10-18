# Social Posts — LinkedIn & X

> **Type:** short-form technical communication · **Audience:** tech and data community on LinkedIn and X

| | |
|---|---|
| **Context / goal** | Share the findings of a long research project in formats people actually read: a launch-style LinkedIn post, a "lessons learned" post, and an X thread. |
| **The problem** | Turning weeks of statistics into something scannable in 10 seconds, without overselling. |
| **My role / process** | Picked the single most surprising finding per post, led with it, and kept every number traceable to the [case study](01-case-study-trading-strategies.md). |
| **Result** | Three ready-to-publish posts. |

---

## LinkedIn — project announcement

> I spent the last weeks testing 30+ trading strategies against real market data — including YouTube's most viewed one (2.3M views).
>
> Result: none of them beat the broker's costs.
>
> What I built along the way:
> 🔹 a tick-level backtest engine (347M real ticks, validated with random entries)
> 🔹 paper and demo trading bots with a risk manager
> 🔹 forward "shadow" tests that alert me on Telegram if anything ever starts working
>
> The most useful skill wasn't coding — an AI agent (Claude Code) wrote most of it. It was deciding what to test, fixing the rules before seeing results, and questioning every number.
>
> Full case study 👇
> https://github.com/BrayanSO/Porfolio/blob/main/writing/01-case-study-trading-strategies.md
>
> #Python #DataScience #AI #TechnicalWriting

---

## LinkedIn — lessons learned

> My research project produced its first profitable strategy: +0.07 R per trade, t = 4.
>
> It was a bug.
>
> The code allowed several open trades in the same market, so one big rally was counted again and again. One trade at a time → the "edge" disappeared.
>
> Two more results fooled me before I caught them:
> 1️⃣ A filter silently discarded 75% of the data
> 2️⃣ A live bot computed one feature wrong — only on Mondays
>
> My rule now: every positive result is a bug until proven otherwise.
>
> What's the bug that almost fooled you? 👇
>
> #DataScience #Python #Debugging

---

## X — thread (4 posts)

> **1/** "This strategy wins 90% of the time." I tested it on 4 years of real data. It won 67% of the time — and lost money. 🧵
>
> **2/** The trick: a tiny take-profit and a big stop-loss. With a 1:4 ratio you need to win 80% just to break even. Every loss erases 4 wins.
>
> **3/** Then the broker's spread eats part of every tiny win. I tested 4 "high win rate" strategies: 67–74% win rates, all negative.
>
> **4/** Before trusting a strategy, ask for 3 numbers: reward-to-risk, number of trades tested, and the costs included. Win rate alone tells you almost nothing. Full write-up: https://github.com/BrayanSO/Porfolio/blob/main/writing/02-explainer-win-rate.md
