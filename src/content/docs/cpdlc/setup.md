---
title: Setting up datalink
description: Enabling CPDLC, choosing the station code, bringing the station online, and what pilots see when they log on.
---

Before any datalink exchange, g-atm must hold a **station** on the datalink network. You
set it up once; afterwards it comes online by itself when you connect.

## 1. Enable datalink in your account settings

Datalink is off by default. In `config.json`, the `cpdlc` block needs:

| Field | Value |
|---|---|
| `enabled` | `true`. With `false`, nothing datalink ever starts |
| `logon_code` | Your personal Hoppie logon code, requested once from the Hoppie ACARS site |
| `base_url` | Leave the default unless your division runs a compatible server |

See [Account settings](/5g-atm-doc/start/configuration/) for the file itself.

:::caution
The logon code is a secret tied to your Hoppie account. Never show it in a screenshot, a
chat or a shared file.
:::

The same two settings (`enabled` and a logon code) are needed in a simulation session,
even though the code is then never sent: the station is the world server's. See [Joining a
simulation](/5g-atm-doc/simulation/joining/).

## 2. The station code

The **station code** is what pilots type in their aircraft to log on. It is not your
position callsign: ACARS codes are usually four characters (g-atm accepts 3 to 7 letters
or digits), never with `_`. `LFM1` is valid, `LFMM_W_CTR` is not.

Each position of the operational configuration can declare its code, and fallback codes,
in `op_config.json`:

```json
"cpdlc": { "logon": "LFM1", "fallback_logons": ["LFM2", "LFMM"] }
```

The network allows **one station per code**. If `LFM1` is already held by another
controller, g-atm tries `LFM2`, then `LFMM`, and keeps the first one that is free. A
released code becomes free again about 100 seconds later.

When the position you validated declares no code, g-atm uses the centre part of your
callsign: `LFMM` for `LFMM_W_CTR`. See [OP CONF and PREPA mode](/5g-atm-doc/cco/op-conf/)
for the operational configuration.

## 3. Bring the station online

With datalink enabled, the station comes online **by itself when you connect to the
network**. When you validate another position in PREPA, the station switches to that
position's code if it differs. When you disconnect, the station goes offline.

To check it, or to do it by hand: **Tools → External Applications → CPDLC Station**.

| Entry | Meaning |
|---|---|
| First line (read only) | The state of the station, see below |
| **Connect** / **Disconnect** | Brings the station online, or takes it offline |
| **Logoff ‹callsign›** | One entry per flight logged on to you: ends that flight's datalink session |

| First line | State |
|---|---|
| `LOGGED OFF` | The station is offline. No datalink at all |
| `LOGGING IN WITH LFM1` | Trying the code |
| `LOGGED WITH LFM1` | Online. The code shown is the one actually held, perhaps a fallback |
| `LFM1 CALLSIGN IN USE` | Every code you declared is held by someone else |
| `ERROR WITH LFM1` | The station could not come online |

The states the station reports are also written in the **System Warning Window** of the
Global Menu (for example `CPDLC LFM1 ONLINE`), with the server's reason when it refuses.
See [Global Menu](/5g-atm-doc/position/global-menu/) and, when it goes wrong, [CPDLC
troubleshooting](/5g-atm-doc/cpdlc/troubleshooting/).

Once the station is online, your ATIS carries the line `CPDLC ID LFM1`. That is how pilots
find the code to use.

## What happens when a pilot logs on

1. The pilot enters your station code in the aircraft and sends a logon request.
2. g-atm accepts it automatically if the flight is in the traffic you receive. The
   aircraft gets `LOGON ACCEPTED`, then your station as its current ATC unit.
3. A **lightning bolt** appears after the callsign on the label.

A logon from a flight that is not in your traffic is refused with `UNABLE DUE TO
AIRSPACE`.

## How a session ends

| Cause | What the aircraft receives |
|---|---|
| You choose **Logoff ‹callsign›** in the CPDLC Station menu | `CONTROLLER TERMINATED CPDLC`, then a logoff |
| You take the station offline, or disconnect from the network | The same, for every flight logged on |
| You transfer the flight by datalink and the pilot accepts | A logoff from your station; the aircraft moves to the next unit |
| The pilot logs off | — (any dialogue still open with that flight turns orange, `TRANSMISSION FAILED`, and waits for your acknowledgement) |
| The flight is missing from the traffic for three polls in a row | — (session, dialogues and requests are dropped) |
