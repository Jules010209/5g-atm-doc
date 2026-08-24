---
title: Receiving requests
description: The blue request line, the quick response menu, and the Pending Messages window.
---

## The request line

When a pilot sends a request, a **blue line** appears on the label under the other lines:

| On the label | The pilot asked for |
|---|---|
| `REQ F300` | Flight level 300 |
| `REQ CLB TO F380` | Climb to FL380 |
| `REQ DES TO F240` | Descent to FL240 |
| `REQ DCT RUBAS` | Direct to RUBAS |

A reason such as `DUE TO WEATHER` does not change the request; it is dropped from the
display.

## Answering: the quick response menu

**Left-click the blue line.** A small menu called `DL answer` opens directly underneath it,
with three rows.

| Row | Effect |
|---|---|
| **The clearance itself**, for example `DESCEND TO F300` or `DIRECT TO RUBAS` | Accepts. The clearance is issued and a normal uplink dialogue starts |
| **STANDBY** | Tells the pilot to wait. The request stays blue |
| **UNABLE** | Refuses. The request disappears from the label |

The first row is written as the clearance you are about to give, with the right verb:
`CLIMB`, `DESCEND` or `MAINTAIN`, worked out from the aircraft's current level when the
request does not say.

### Rows that are greyed

| Row | Greyed when | Tooltip |
|---|---|---|
| The clearance | The requested waypoint is not on the flight's route | `NOT AVLB DUE TO OFF ROUTE WP` |
| **STANDBY** | You have already sent one | `STANDBY already sent` |

A direct to a point that is not on the route can only be refused by datalink. If you want
to give it, use the frequency.

### After accepting

Accepting a request starts an ordinary uplink dialogue: the field is framed, and it goes
through the same white, yellow, orange states as any other datalink clearance. See
[Sending clearances](/5g-atm-doc/cpdlc/uplinks/).

## Controller late

If you leave a request unanswered too long, the line turns **orange**. The pilot has been
waiting.

**Right-click the orange line** to acknowledge it. Clicking it no longer opens the answer
menu: the request has expired and you should be on the frequency.

## Several requests at once

When a flight has more than one request pending, a **counter** appears next to the line. The
label keeps showing the first request; the counter tells you there are others.

**Left-click the counter** to open the **Pending Messages** window for that flight.

## The Pending Messages window

A small window listing every request from that flight.

| Column | Content |
|---|---|
| Time | When the request arrived, in UTC |
| Callsign | The flight |
| Msg | The request text, truncated with a `>` when too long. Hover for the full text |

A request you have already told to standby is shown with `(SBY)`.

**Click a row** to open the same `DL answer` menu, anchored under the request line on the
label so that you always answer with the flight in view.

The window is a real window: move it where you want, it stays there.

## Priorities

A flight with an outstanding datalink dialogue or request is **never hidden by the
filters**. You cannot lose a pending request by narrowing your level window.
