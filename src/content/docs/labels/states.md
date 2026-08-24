---
title: States and colours
description: How a flight's colour tells you whether it is yours, coming to you, or none of your business.
---

Every flight belongs to one of **four families**. The family decides the colour of the
label, the leader line, the track symbol, the history dots and the speed vector — all of
them at once, so the colour is readable even without reading the text.

| Family | Colour | Meaning |
|---|---|---|
| **PREPA** | Green | Will be controlled by you. Either already inside your area, or heading into it |
| **RESP** | White | You are controlling it now |
| **SURV** | Light grey | No longer yours, but still worth watching |
| **AUTRE** | Dim grey | Of no interest to you a priori |

## How the family is decided

The software works it out from what the network tells it, plus the geometry of your area
of responsibility.

| Situation | Family |
|---|---|
| You have assumed the flight | **RESP**, white |
| Another position has offered it to you and you have not taken it yet | **PREPA**, green |
| It will enter your volumes, whoever is controlling it now | **PREPA**, green |
| Not controlled by anyone, already inside your volumes | **PREPA**, green |
| You have transferred it to the next sector, not yet taken | **SURV**, grey |
| You have released it, and it still concerns you | **SURV**, grey |
| Controlled by someone else, inside your volumes but not entering them | **SURV**, grey |
| Anything else | **AUTRE**, dim grey |

Two rows deserve a word.

**"Whoever is controlling it now."** PREPA means *destined to be controlled by the
sector*. That is about where the flight is going, not about who holds it at this instant —
and an inbound still held by the upstream sector is the normal case, since that is exactly
when you want to prepare it. A neighbour having the flight is not a reason to grey it.

**"You have released it."** A flight you have let go does not come back green, even if it
is still in your airspace or its profile clips you again later. SURV covers flights *no
longer* controlled by the sector as well as those never controlled by it.

## How entry is worked out

The client sweeps the flights against the **volumes** of your position, not against a flat
outline: the profile is compared with the floor and the ceiling of each slice. A flight
crossing your area two hundred levels above it is therefore not PREPA, which a contour
alone could never tell you.

The sweep looks **60 minutes** ahead and repeats every 20 seconds.

Until it has answered — no volumes declared for the position, or the first sweep still
outstanding — the client falls back on the displayed area of responsibility and a
15-minute extrapolation of the flight's heading. Without even that, unowned flights are
left in SURV rather than being guessed at.

Your area of responsibility comes from the sector grouping validated in the PREPA window.

## Not seen

A flight that appears and has not yet been looked at is drawn in **bold**. **Right-click
its callsign** to acknowledge it and the bold goes away. It is a reading aid: it tells you
what has arrived since you last checked.

## REV, revised data

When a field of a flight you are watching is changed by someone else, that field is shown
in **bold** until you acknowledge it. Right-click the callsign to clear it.

This applies to the exit level, the entry level and the next sector.

## STLN, stolen

Another position force-assumed a flight that was yours. The label shows `STLN` and its
ground speed turns grey — the flight is no longer yours even though nothing was
coordinated.

Hovering the mnemonic shows which position took it, and on which frequency. The state
clears when you assume the flight again, or when it is released.

`STLN` is derived from the force-assume itself, never from a frequency change alone.

## SHRQ, frequency request

You asked the flight to report its frequency. The mnemonic stays until **both** conditions
are met: the flight is assumed by you, **and** it reports the frequency of your position.
There is no timeout.

Right-click the mnemonic to hide it on your screen without cancelling the request.

## LOST

A purely local marking, put on and taken off from the aircraft menu. Nothing is sent to
the network, no other controller sees it, and it disappears when you close the
application.

## Emergencies

A flight squawking an emergency code shows a **red mnemonic** on line 0 and is displayed
**whatever your filters are set to**.

| Squawk | Mnemonic |
|---|---|
| 7500 | `HJCK` |
| 7600 | `RDOF` |
| 7601 | `RVMC` |
| 7700 | `EMRG` |
| 7400 | `SURT` |
| 5677 | `ATTN` |

## Alerts

`STCA` and `TCT` appear on line 0 as well. They are described in [STCA and
TCT](/5g-atm-doc/tools/alerts/).

## The datalink dot

A dot in front of the callsign means the flight is in a **CPDLC session with your
station**. It appears when the pilot logs on and disappears at logoff. See [CPDLC
overview](/5g-atm-doc/cpdlc/overview/).
