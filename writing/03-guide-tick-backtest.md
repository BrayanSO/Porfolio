# How to Build a Realistic Tick-Level Backtest in Python with MetaTrader 5

> **Type:** How-to guide / walkthrough · **Audience:** Python developers building or testing trading bots · **Time:** ~45 min · **Level:** intermediate
> **Full implementation:** [`forex_bot/backtesting/engine.py`](https://github.com/BrayanSO/Forex-ML-System/blob/validacion-estrategias/forex_bot/backtesting/engine.py)

| | |
|---|---|
| **Context / goal** | Give developers a backtest they can trust: one that charges the real spread, cannot see the future, and has been checked for bias. |
| **The problem** | Most tutorials backtest on candle closes with zero costs. Those results are systematically too optimistic, especially for short-term strategies. |
| **My role / process** | I designed the execution rules, built the engine with an AI coding agent, and validated it with a random-entry test before trusting any result. This guide distills the essentials into ~80 lines. |
| **Result** | A step-by-step guide with runnable code and a validation test that tells you if your engine is lying. |

---

## What you will build

A small engine that:

1. Downloads real **tick** data (bid and ask) from MetaTrader 5.
2. Enters a trade on the **first tick after your decision plus latency**.
3. Exits at the **correct side** of the spread (longs sell at the bid, shorts buy back at the ask).
4. Checks the stop-loss **before** the take-profit if both are hit in the same tick.
5. Proves it has **no bias** with random entries.

## Prerequisites

- Windows with the MetaTrader 5 terminal installed and logged in (a demo account is fine).
- Python 3.10+ and: `pip install MetaTrader5 pandas numpy`

## Step 1 — Download ticks (and avoid the time-zone trap)

MetaTrader 5 returns tick times in the **broker's server time**, but `copy_ticks_range` expects `datetime` objects in **UTC**. If you pass local times, you will silently get the wrong window or nothing at all. The simplest fix is to treat server time as if it were UTC on the way in:

```python
from datetime import datetime, timezone
import MetaTrader5 as mt5
import pandas as pd

def to_utc(ts):
    """Server-time timestamp -> datetime tagged as UTC (what MT5 expects)."""
    return pd.Timestamp(ts).to_pydatetime().replace(tzinfo=timezone.utc)

def load_ticks(symbol, start, end):
    if not mt5.initialize():
        raise RuntimeError(mt5.last_error())
    raw = mt5.copy_ticks_range(symbol, to_utc(start), to_utc(end), mt5.COPY_TICKS_ALL)
    mt5.shutdown()
    df = pd.DataFrame(raw)[["time_msc", "bid", "ask"]]
    return df[(df.bid > 0) & (df.ask > 0)].reset_index(drop=True)

ticks = load_ticks("GOLD#", "2026-10-05", "2026-10-06")   # use your broker's symbol name
```

> **Tip:** one day of gold is roughly a million ticks. Save each day to Parquet (`df.to_parquet(...)`) so you only download once.

## Step 2 — Fill orders the way a broker does

The decision happens at a moment `t`. The order reaches the broker after a latency (300 ms is a realistic default for a Python bot). It fills at the **first tick after that**: longs pay the ask, shorts receive the bid.

```python
import numpy as np

def fill(ticks, t_ms, side, latency_ms=300):
    """side = +1 long, -1 short. Returns (tick index, fill price) or None."""
    t = ticks.time_msc.to_numpy()
    i = int(np.searchsorted(t, t_ms + latency_ms))
    if i >= len(t):
        return None
    price = ticks.ask.iat[i] if side == 1 else ticks.bid.iat[i]
    return i, price
```

## Step 3 — Exit on the correct side, stop-loss first

A long position closes at the **bid**; a short closes at the **ask**. If one tick touches both the stop-loss and the take-profit, assume the worse outcome. Stops can also slip: fill at the tick price, not at the stop level.

```python
def run_trade(ticks, i0, side, entry, sl, tp, max_ticks=500_000):
    exit_side = ticks.bid.to_numpy() if side == 1 else ticks.ask.to_numpy()
    path = exit_side[i0 + 1 : i0 + 1 + max_ticks]
    hit_sl = (path <= sl) if side == 1 else (path >= sl)
    hit_tp = (path >= tp) if side == 1 else (path <= tp)
    j_sl = int(np.argmax(hit_sl)) if hit_sl.any() else None
    j_tp = int(np.argmax(hit_tp)) if hit_tp.any() else None
    risk = abs(entry - sl)
    if j_sl is not None and (j_tp is None or j_sl <= j_tp):
        return side * (path[j_sl] - entry) / risk          # stop: real tick price (slippage included)
    if j_tp is not None:
        return side * (tp - entry) / risk                  # target: exactly at the limit
    return side * (path[-1] - entry) / risk                # time exit
```

The function returns the result in **R** (units of risk), which makes strategies with different stop sizes comparable.

## Step 4 — Prove the engine is unbiased

This is the step most people skip. Take **random** entries with a symmetric stop and target. With no edge, a random walk hits either barrier equally often, so the only expected result is the **cost of the spread**:

```
expected R ≈ − spread_at_entry / risk_distance
```

```python
rng = np.random.default_rng(7)
results, costs = [], []
for _ in range(2000):
    i = int(rng.integers(0, len(ticks) - 50_000))
    side = int(rng.choice([1, -1]))
    got = fill(ticks, int(ticks.time_msc.iat[i]), side)
    if got is None:
        continue
    k, entry = got
    d = 3.0                                               # symmetric distance in price units
    r = run_trade(ticks, k, side, entry, entry - side * d, entry + side * d)
    results.append(r)
    costs.append((ticks.ask.iat[k] - ticks.bid.iat[k]) / d)

results, costs = np.array(results), np.array(costs)
diff = results + costs
z = diff.mean() / (diff.std(ddof=1) / np.sqrt(len(diff)))
print(f"measured {results.mean():+.4f} R | expected {-costs.mean():+.4f} R | z = {z:+.2f}")
```

If `|z| < 2`, the engine shows no detectable bias. In my full engine, one year of gold gave **−0.095 R measured vs −0.086 R expected (z = −0.8)**.

## Step 5 — Common pitfalls (each one bit me)

| Pitfall | Symptom | Fix |
|---|---|---|
| Several open trades in the same market | One rally counted many times; inflated t-statistics | Allow one trade per market until the previous one exits |
| `dropna()` on features | Most decisions silently discarded | Only require the columns the rule really needs |
| Using bid-only candles for direction | "Price always rises after the open" | The spread is normalizing, not the price. Check with ticks and the mid price |
| Not enough history in live mode | Features differ from the backtest on some days | Compare live features to backtest features for the same timestamps |

## Next steps

- Add commissions and overnight swap for multi-day trades.
- Split your data into development and validation periods, and fix your rules before looking at validation.
- Run a Monte Carlo on the trade results to estimate the probability of a large drawdown.

*Educational content, not financial advice.*
