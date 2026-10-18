# Case Study — I Tested 30+ Trading Strategies Against Real Market Data. None Had an Edge.

> **Type:** Technology case study · **Audience:** developers, data-curious founders, and retail traders who build their own bots · **Reading time:** ~8 min
> **Code:** [Forex-ML-System](https://github.com/BrayanSO/Forex-ML-System/tree/validacion-estrategias)

| | |
|---|---|
| **Context / goal** | Find out, with evidence, whether any strategy could profitably trade gold and other CFDs on a retail broker (XM, MetaTrader 5) before risking real money. |
| **The problem** | YouTube and Telegram are full of strategies that "win 90% of the time". Almost none show a verifiable test. Testing them honestly is harder than it looks: costs, look-ahead bias and small samples all produce fake winners. |
| **My role / process** | I designed the research method, defined every rule *before* looking at results, directed an AI coding agent (Claude Code) to implement each test, and reviewed every number it produced — including catching three bugs that would have made losing strategies look profitable. |
| **Result** | A reproducible validation lab (tick-level backtest engine, 86 unit tests, paper and demo trading) and a clear, documented conclusion: no strategy beat the broker's costs. |

---

## 1. The question

I started with a simple question: *is there anything a retail trader can systematically exploit in gold, oil, stock indices and FX?*

The candidates came from everywhere: machine-learning models I trained myself, classic technical analysis (Fibonacci, Smart Money Concepts, liquidity sweeps, opening-range breakouts), session and weekend patterns, signals from a paid Telegram channel, and the most popular strategy videos on YouTube — including one with 2.3 million views.

## 2. Why "just backtest it" is not enough

Most strategy videos show a handful of hand-picked chart examples. A credible test needs to answer three things that those examples skip:

1. **What does it really cost?** On a CFD broker you buy at the *ask* and sell at the *bid*. The spread is paid on every trade, and it widens exactly when the market gets interesting (opens, news, weekends).
2. **Could the rule have been known at that moment?** Using a candle's close to decide a trade that "starts" at its open is look-ahead bias, and it is surprisingly easy to introduce.
3. **Is the result bigger than luck?** A strategy with 20 trades and a positive average proves nothing. I required a t-statistic above 2 *and* a positive result in two separate periods.

## 3. The method

**Data.** 347 million real ticks (bid and ask) from 9 markets over one year, plus four years of 15-minute bars for 28 markets, stored in Parquet and SQLite.

**A backtest engine I could trust.** Every simulated order fills at the first tick after a 300 ms latency, buys at the ask, exits at the bid, and counts the stop-loss first if stop-loss and take-profit are hit in the same tick. Before using it, I validated the engine with **random entries**: with no edge, the only expected result is the cost of the spread. The engine measured −0.095 R per trade against an expected −0.086 R (z = −0.8) — no detectable bias.

**Rules fixed in advance.** Each strategy was written as exact rules *before* running it. Subjective instructions ("wait for a strong candle") were turned into numbers and documented.

**Two periods.** Every test was split into a *development* period (2022–2024) and a *validation* period (2025–2026). A strategy only counted as positive if it made money in both and was statistically significant in validation.

## 4. Results

| Family | Example claim | Trades tested | Result per trade (validation) |
|---|---|---|---|
| Machine learning (LightGBM, 40 features) | Calibrated probabilities | 1,180 | −0.08 R |
| Fibonacci retracements, 28 markets | "Institutional entries" | 112 variants | 0 profitable; average −0.18 R |
| Supply & demand zones + "basket" | "24 wins in a row" | 25,808 | −0.12 R (basket: −0.07 R, 69% win rate) |
| EMA20 + stochastic scalping | "90% win rate" | 16,676 | −0.17 R (67% win rate) |
| MACD + 200 EMA, structured entries | "87% win rate" | 3,768 | −0.03 R (74% win rate) |
| Most-viewed strategy on YouTube (2.3M views) | "The only strategy you'll ever need" | 3,690 | +0.01 R (t = 0.3, indistinguishable from zero) |
| Opening Range Breakout, 15 min | "Simple daily breakout" | 2,261 | +0.01 R (t = 0.4) |

*R = profit or loss measured in units of the amount risked. −0.10 R means losing 10% of the risk on an average trade.*

The pattern repeated across all 30+ methods: **zero or negative after costs**, and in several cases negative *even without costs*.

## 5. The three bugs that almost fooled me

The most valuable part of the project was not a result — it was learning where results lie.

1. **Overlapping trades.** The first run of the 2.3M-view strategy showed **+0.07 R with t = 4** — the first "winner" of the whole project. Before celebrating, I checked the distribution: the profit came entirely from a few huge winners, and the code allowed several simultaneous trades in the same market, counting the same rally many times. With one trade at a time, the edge disappeared.
2. **Silently dropped data.** The adapter between the ML model and the backtest engine dropped every decision that had an empty feature. Some features are empty *by design* (for example, "distance to the London high" before London closes), so it kept only 25% of the decisions. A model that looked slightly profitable was, on all decisions, flat.
3. **A Monday-only feature bug.** The live paper-trading bot loaded three days of history. On Mondays, that cut Friday in half, so "yesterday's high and low" were wrong — and Monday happened to be the bot's best day. The live result went from +4.3 R to −3.4 R once those trades were excluded.

Each bug got a regression test so it cannot come back.

## 6. What I shipped

- A tick-level backtesting engine, validated against random entries.
- A paper-trading bot and a demo-account bot with a risk manager (no martingale, daily and weekly loss limits, drawdown halt).
- Forward "shadow" tests that record what a strategy would have done without placing orders, plus Telegram alerts if any of them ever becomes consistently profitable.
- A monthly retraining job that evaluates a new model and **only reports** — it can never put a model into live trading on its own.
- 86 unit tests.

## 7. Lessons

- **A high win rate is not an edge.** Strategies advertised at 87–90% did win often (67–74%) and still lost money, because each loss erased several wins.
- **Costs decide short-term trading.** The spread at market open is 3–10× the normal spread; most "opening patterns" were the spread itself, not the price.
- **Distrust your first positive result.** Every one I found was a bug until proven otherwise.
- **Working with an AI agent multiplies output, not judgment.** The agent wrote most of the code quickly; deciding what to test, defining the rules and questioning results stayed my job.

*This project is research, not financial advice.*
