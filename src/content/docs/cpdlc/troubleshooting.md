---
title: CPDLC troubleshooting
description: Why the station will not come online, why a pilot cannot log on, and why nothing seems to happen.
---

## The station will not come online

| Symptom | Cause | Fix |
|---|---|---|
| **Connect** does nothing, status stays `OFFLINE` | `enabled` is `false` in `config.json` | Set it to `true` and restart the application |
| Status shows an error | `logon_code` is empty or wrong | Check it against your Hoppie account |
| Status shows an error | No network access to the ACARS server | Check your connection and `base_url` |
| Status shows `LOCK CONFLICT` | Every code you declared is taken | Wait about 100 seconds, or declare more `fallback_logons` |
| Status is `ONLINE` with the wrong code | Your first choice was taken and a fallback was adopted | Normal. The adopted code is the one in your ATIS |

## Pilots cannot log on

**Check your ATIS.** The line `CPDLC ID <code>` must be there. If it is missing, the
station is not online and no pilot can find your code.

**Check the code you are giving out.** It is the ACARS code, four letters, not your position
callsign.

**Check the flight is on the network.** A logon from an aircraft that is not in the traffic
you can see is refused with `UNABLE DUE TO AIRSPACE`. That is intentional.

## Nothing seems to happen

The Hoppie network is **polled every 45 to 75 seconds**, at deliberately irregular
intervals. That is required by the service.

The consequences are worth understanding:

- A pilot request can take **up to a minute** to appear on your label.
- Your clearance is sent immediately, but the pilot's answer arrives on the next poll.
- A logon can take a minute to be accepted.

If a pilot tells you they sent something and you cannot see it, wait one polling cycle
before concluding anything is broken.

## DLK is greyed

Hover it: the tooltip gives the reason.

| Tooltip says | Meaning |
|---|---|
| No datalink session | The flight has no dot. It never logged on to you |
| Flight not assumed | Assume it first |
| Dialogue already open | One clearance of that kind is already outstanding. Wait, or cancel it |

## The NS field does not outline when I hold D

One of the conditions is missing. In order of likelihood:

1. no next sector is set — **Ctrl + left click** the NS field to set one;
2. the flight is not assumed by you;
3. the flight has no datalink session;
4. a transfer dialogue is already open.

## A box stays orange

Orange means **refused or timed out**. It does not clear on its own, on purpose: it needs
you to notice it.

**Right-click the framed field**, clear the dialogue, and use the frequency. The aircraft is
still doing what it was doing before the clearance.

## The dot disappeared on its own

Three normal causes:

- the flight was **transferred by datalink** to the next unit;
- the flight **left the traffic feed** — landed, disconnected, out of range — and the session
  was dropped after a few polling cycles;
- the pilot **logged off**.

## Everything stopped when I changed position

Validating a different resp in PREPA switches the station code. If the new resp declares no
`cpdlc` block, or if its codes are all taken, the station may go offline. Check **Tools →
CPDLC** for the current state.

## Known limits

- The polling interval is imposed by the network. It cannot be shortened.
- Only **one station code per centre** can be held at a time, which is why fallback codes
  exist.
- Uplink and request timeouts are the application's own defaults, not values published by
  any authority.
