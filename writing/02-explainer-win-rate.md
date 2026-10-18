# Why a Strategy That Wins 90% of the Time Can Still Lose Money

> **Type:** Product explainer / technical blog post · **Audience:** beginners and developers building trading tools · **Reading time:** ~5 min

| | |
|---|---|
| **Context / goal** | Explain, without heavy math, why "win rate" — the number most strategy ads lead with — says almost nothing about profitability. |
| **The problem** | Beginners equate "wins often" with "makes money". Sellers of strategies exploit that confusion. |
| **My role / process** | I tested four high-win-rate strategies from popular videos on 4 years of real market data, then turned the results into a simple mental model with one formula and one table. |
| **Result** | A short explainer that a non-technical reader can apply to any strategy in under a minute. |

---

## The one number that matters

Every trade has two sizes: how much you **risk** (distance to your stop-loss) and how much you **target** (distance to your take-profit). Their ratio is the *reward-to-risk* ratio, or **RR**.

If you target 1 for every 1 you risk, RR = 1. If you target 0.25 for every 1 you risk, RR = 0.25.

To break even, your win rate must be at least:

```
break-even win rate = 1 / (1 + RR)
```

| Reward-to-risk (RR) | You need to win at least… |
|---|---|
| 3 | 25% |
| 1 | 50% |
| 0.5 | 67% |
| 0.25 | **80%** |

That's the trick behind most "90% win rate" claims: a tiny target and a large stop. You win often, but each loss wipes out several wins.

## And then there are costs

On a CFD broker you buy at the **ask** and sell at the **bid**. The gap between them — the **spread** — is paid on every trade. The smaller your target, the larger the share of it the spread eats.

A real example from my tests on gold: a "very short" trade with a take-profit of 1 spread and a stop-loss of 2 spreads, so RR = 0.5 and you need to win 67% of the time. But you enter at the ask and exit at the bid, so the *price* has to travel **2 spreads up** to reach the target and only **1 spread down** to reach the stop. The target is twice as far away as the stop while paying half as much — a losing combination before the first trade. On a live demo account it won **25%** of 48 trades.

## What the data says

I turned four popular "high win rate" strategies into exact rules and tested them on real prices with real spreads:

| Strategy (as advertised) | Win rate measured | Result per trade |
|---|---|---|
| EMA20 + stochastic scalping ("90% win rate") | 67% | −0.17 R |
| MACD + 200 EMA, structured entries ("87% win rate") | 74% | −0.03 R |
| Supply & demand "basket" (adds to losing trades) | 69% | −0.07 R |
| Tiny take-profit, 2× stop-loss (live demo) | 25% | −0.38 USD per trade on 0.01 lots |

*R = result in units of the amount risked.*

All four win more often than they lose. All four lose money.

## How to check any strategy in one minute

1. **Find the RR.** Compare the take-profit distance to the stop-loss distance.
2. **Compute the break-even win rate** with `1 / (1 + RR)`.
3. **Add the cost.** Subtract the spread from the target and add it to the stop.
4. **Ask for the full test,** not examples: how many trades, over what period, and with which costs.

If a strategy only shows its win rate, it is showing you the least important number.

*Educational content, not financial advice.*
