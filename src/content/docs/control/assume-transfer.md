---
title: Assume, release, transfer
description: Taking a flight, giving it back, and handing it to the next position.
---

## The aircraft menu

**Left-click a callsign.** The menu opens with its first entry already under the pointer,
so a second click validates it straight away.

| Entry | Available when | What it does |
|---|---|---|
| **Transfer Next** | The flight is assumed | Offers the flight to the position set as next sector |
| **Assume** / **Release** | Always | Takes the flight, or gives it back |
| **Manual Trf…** | The flight is assumed | Opens the manual transfer menu, to hand off to any online position |
| **Refuse** | An inbound offer is pending | Refuses the offer |
| **SHRQ** | Always | Asks the flight to report its frequency |
| **Point** | Always | Opens the point session menu |
| **LOST** / **Cancel LOST** | Always | Local marking, see below |
| **Sequence…** | Always | Gives the flight a number in an arrival sequence. See [Sequencing arrivals](/5g-atm-doc/control/sequencing/) |
| **Hold** | Always | Opens the hold menu |
| **CPDLC Logoff** | The flight is in a datalink session with you | Ends the session cleanly |
| **Flight Plan ▸** | Always | Route Mod…, Modify…, Dyp Info… |

## Assuming a flight

A flight offered to you turns **green** and shows an inbound transfer state. Click its
callsign, then **Assume**. The label turns **white**: it is yours.

You can assume a flight that was not offered to you. That is a *force assume*, and the
controller who had it will see `STLN` on their screen.

## Releasing

**Release** hands the flight back without offering it to anyone. Use it when you took a
flight by mistake, or when the flight leaves controlled airspace.

The client announces it on your frequency channel:

```
TVP7604, Switch to UNICOM 122.800, good day.
```

A released flight goes to **SURV**, grey — not back to green. It is a flight *no longer*
controlled by the sector, even if it is still inside your airspace. See [States and
colours](/5g-atm-doc/labels/states/).

## Transferring to the next sector

The normal case, in two steps:

1. **Set the next sector**, if it is not already known. Hold **Ctrl** and left-click the
   **NS** field on the label, then pick the receiving position.
2. **Transfer Next** in the aircraft menu.

The flight turns grey as soon as it is offered, and leaves your responsibility when the
receiving controller assumes it.

The client announces the transfer on your frequency channel, using the receiving
position's frequency from the network's ATC list:

```
TAR681, Contact LFML_TWR on 133.100, good day.
```

If that position is not online, the transfer still goes through and nothing is announced.
See [Text messages](/5g-atm-doc/control/messages/).

To clear a next sector you set by mistake: **Ctrl + right click** on the NS field.

## The manual transfer menu

Opened either by **Ctrl + left click on the NS field**, or by **Manual Trf…** in the
aircraft menu. It lists the positions currently online, and opens with the pointer already
on the first one.

Two buttons at the top decide which positions are listed:

| Button | Lists |
|---|---|
| **SCH** | Radar control positions: `_APP` and `_CTR` |
| **DELEG** | Aerodrome positions: `_DEL`, `_GND`, `_TWR`, `_FSS` |

Only one of the two is active at a time. Click the other to switch.

Hovering a position shows its frequency. Click it to set it as the next sector.

| Key | Action |
|---|---|
| **↑** / **↓** | Move through the list |
| **Enter** | Validate the highlighted position |
| **Escape** | Close without changing anything |

If the list is empty, no position of that family is online.

## Inbound offers

When another controller transfers a flight to you, it turns green and shows the pending
state. You have two choices:

- **Assume** to take it;
- **Refuse** to send it back to them.

## SHRQ, asking for a frequency

**SHRQ** in the aircraft menu asks the flight to report the frequency it is on. It is
available at any time, on any flight.

The mnemonic stays on the label until the flight is **both** assumed by you **and**
reporting the frequency of your position. There is no timeout: it clears on facts, not on
a timer.

Right-click the mnemonic to hide it on your screen without cancelling the request.

## LOST

**LOST** marks a flight on your screen only. Nothing is sent to the network, no other
controller sees it. **Cancel LOST** removes it.

## Transfer by datalink

If the flight is in a CPDLC session with you, you can transfer it over datalink instead of
by voice: hold the **D** key and left-click the NS field. See [Datalink
transfer](/5g-atm-doc/cpdlc/transfer/).
