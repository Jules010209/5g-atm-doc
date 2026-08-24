---
title: Coordination
description: Point session, coordination notes, next sector and frequency requests.
---

Coordination in g-atm covers what you agree with the neighbouring sector, and what you note
down so that you — or your successor — do not forget it.

## Next sector

The **NS** field on the label carries the position that will take the flight. It is filled
automatically from the letters of agreement when the route allows it, and by hand
otherwise.

| Gesture | Effect |
|---|---|
| **Ctrl + left click** on NS | Opens the manual transfer menu to choose the position |
| **Ctrl + right click** on NS | Clears it |
| Hover NS | Shows the frequency of that position |

Setting the next sector is what makes **Transfer Next** possible in the aircraft menu.

## Letters of agreement

The exit level and the next sector are derived from the LOA files of the sector package,
matched on the flight's departure, destination, coordination point and the position that
will take it.

The file is read **top to bottom, and the first line that matches wins** — the same rule
Aurora applies. Order therefore matters: put the specific cases first and the catch-all
last, exactly as you would write them for Aurora.

### Levels that are not levels

Four values in the XFL column of an LOA are markers rather than transfer levels. None of
them is ever displayed as an exit level, because `x00` or `x89` would mean nothing.

| Value | Means |
|---|---|
| `000` | No level is agreed. **Coordinate by telephone** |
| `660` | The agreement sets no exit level at all |
| `888` | The flow is forbidden by the sector |
| `999` | The level depends on the configuration in force |

`000` puts a **telephone symbol** on line 0, in the colours of the squawk field, so the
flight that still needs a phone call is visible without opening anything. Right click it
to acknowledge the display.

For all four, the label falls back to the **ELO** — the exit level the client proposes
from the flight's own profile — shown in brackets, `(x35)`. It is a proposal, not an
agreement.

## Point session

**Point** in the aircraft menu opens the point session menu. It is used to point a flight
out to another position.

## Coordination notes: XCOOR and ECOOR

Some things are agreed on the telephone and have no place in any protocol field. That is
what coordination notes are for.

| Note | Where it sits | Available when |
|---|---|---|
| **XCOOR** | On the exit line, over the exit navigation field | The flight is assumed, assumable, or coordinated inbound |
| **ECOOR** | On the entry line | Only on a coordinated inbound flight |

Click the coordination field to open the menu, type the point or heading you agreed, and
validate.

What you type is displayed **over** the corresponding field. It changes nothing else: not
the cleared route, not the trajectory, not the next sector's screen. Filling in your XCOOR
never fills in the next sector's ECOOR — it is a note, and notes are local.

A small symbol marks a field carrying a note. On the base label only the symbol is shown;
hovering reveals the text. On the extended label the text is shown in full.

Notes are stored on your screen only, like LOST. They disappear when the flight leaves.

| Key | Action |
|---|---|
| **Enter** | Validate |
| **Escape** | Close without changing anything |
| **↑** / **↓** | Move through the proposals |

Validating an empty note deletes it.

## Frequency requests, SHRQ

**SHRQ** in the aircraft menu asks a flight to report the frequency it is working. It is
available at any moment, on any flight, whatever its transfer state.

The request carries the frequency of **your validated position** as the expected answer.
The mnemonic on the label clears only when both conditions are true:

1. the flight is assumed by you, **and**
2. it reports the frequency of your position.

There is no timeout. Right-click the mnemonic to hide it locally without cancelling the
request.

This is why validating your position in the PREPA window matters: without it, the software
has no target frequency to compare against.

## Inbound coordination

A flight with a pending inbound coordination is shown in its own state. Deal with it from
the aircraft menu like any other offer: **Assume** to take it, **Refuse** to send it back.

## What is shared and what is not

| | Shared with other positions |
|---|---|
| Next sector | Yes |
| Exit level | Yes |
| Assume, release, transfer, refuse | Yes |
| SHRQ | Yes, it is a request to the flight |
| XCOOR / ECOOR notes | **No** |
| LOST | **No** |
| Marking and acknowledgements | **No** |
