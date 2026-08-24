---
title: Setting up datalink
description: Getting a Hoppie code, choosing your station code, and bringing the station online.
---

## 1. Get a Hoppie logon code

Datalink runs on the Hoppie ACARS network. Request a logon code once from the Hoppie ACARS
site; it is personal and permanent.

## 2. Enable it in `config.json`

```json
"cpdlc": {
  "logon_code": "your-hoppie-code",
  "base_url": "https://www.hoppie.nl/acars/system/connect.html",
  "enabled": true
}
```

`enabled` must be `true`. With `false`, every datalink function stays inert whatever else
is configured.

Keep `base_url` as it is unless your division runs its own compatible server.

:::caution
The logon code is a secret. It is stored in clear text in `config.json`. Do not share the
file and do not show it in a screenshot.
:::

## 3. Choose your station code

The **station code** is what pilots type in the aircraft. It is not your position callsign:
ACARS callsigns are **four letters, no underscore**. `LFM1` is valid, `LFMM_W_CTR` is not.

Declare it per position in `op_config.json`:

```json
"cpdlc": { "logon": "LFM1", "fallback_logons": ["LFM2", "LFMM"] }
```

The network allows **one controller per code**. If `LFM1` is already held by someone else,
g-atm tries `LFM2`, then `LFMM`, and adopts the first free one. Without fallbacks, the
station stays offline until the code is released, which takes about 100 seconds after the
other controller leaves.

If your position declares no `cpdlc` block, the station code falls back to the centre part
of your callsign.

## 4. Bring the station online

Once `enabled` is `true` and a code is available, **the station comes online on its own when
you connect to the network** — not before. There is nothing to click.

To do it manually, or to check the state: **Tools → CPDLC**.

| Line | Meaning |
|---|---|
| Status line | Read-only. `ONLINE LFM1`, `OFFLINE`, `CONNECTING`, or an error |
| **Connect** / **Disconnect** | Brings the station online or takes it offline |
| **Check Stuck Micro** | Greyed unless online |

Hovering the status line shows the last error, when there is one.

## 5. Check your ATIS

Once online, your ATIS carries a third line:

```
CPDLC ID LFM1
```

That is how pilots discover which code to use. If the line is missing, the station is not
online.

## Changing position during a session

Validating a different resp in the PREPA window **switches the station** to that resp's
code, without disconnecting from the network. Sessions with flights you are still working
are unaffected.

## Station states

| State | Meaning |
|---|---|
| `OFFLINE` | Not connected. No datalink at all |
| `CONNECTING` | Trying the codes in order |
| `ONLINE <code>` | Working. The code shown is the one actually adopted |
| `LOCK CONFLICT` | Every code you declared is held by someone else. It clears on its own when one is released |
| `ERROR` | Network or configuration problem. Hover for the reason |

## Testing without the live network

`base_url` accepts any compatible server, including one running on your own machine. That
is how the datalink chain can be exercised end to end without touching the public network.
