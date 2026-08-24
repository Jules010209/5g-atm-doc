---
title: Marking and acknowledging
description: Force a field to stay visible, colour it for yourself or for your successor, and clear what you have already looked at.
---

## Marking a field

Marking makes a field **stand out and stay visible**, even when the occultation rules would
normally hide it. It is a memory aid for you, not a clearance and not a message: nothing
leaves your screen.

| Gesture | Result |
|---|---|
| **Middle click** on a field | Marks it in **ochre** — a *suite* marking, meant for whoever takes the position after you |
| **Ctrl + middle click** on a field | Marks it in **pink** — a *local* marking, meant for yourself |
| **Middle click again** | Removes the marking |

Fields that can be marked: cleared level, exit level, ground speed, next navigation point,
next sector, destination.

A marked field is forced onto the base label. Mark the exit level of a flight you must not
forget, and it stays in front of you even when the software would have hidden it as
redundant.

## Middle click held: the filters

The middle button does two different things depending on how long you hold it:

| Duration | Result |
|---|---|
| **Short press and release** | Marks the field |
| **Press and hold** | Runs a filter for as long as you hold |

| Field held | Filter |
|---|---|
| **CFL**, cleared level | Shows only flights at, or cleared to, that level |
| **XFL**, exit level | Shows only flights leaving at that level |
| **ADES**, destination | Shows only flights to that destination |

Release the button and the picture comes back. It is a way to answer a question — *who
else is at FL350?* — without changing anything.

## Acknowledging

**Right-click the callsign** to acknowledge a flight. That single gesture clears:

- the **not seen** bold, on a flight that has just appeared;
- the **REV** bold, on a field changed by someone else.

It is an acknowledgement of *display*, not of the underlying data. Nothing is sent.

## Right click on a field

Right click means "clear this" or "deal with this failure", depending on the field:

| Field | Right click |
|---|---|
| **Callsign** | Acknowledges not-seen and REV |
| **NS**, next sector | **Ctrl + right click** clears the next sector |
| **CFL**, **speed**, **NS** with a failed datalink clearance | Opens the cancel menu for that clearance |
| **Datalink request line**, when orange | Acknowledges the late state |
| **SHRQ** mnemonic | Hides it locally |
| **Conflict group** symbol | Removes the flight from the group |

## The analysis group

Up to **8 flights** can be put in a local analysis group. It is a working set: you build it
when you want to study a situation, and you empty it when you are done.

| Gesture | Result |
|---|---|
| **Left click** a track symbol | Adds or removes it |
| **Ctrl + left click** a callsign | Adds or removes it |
| **Middle click** the conflict group symbol | Cycles through the group symbols |
| **Right click** the conflict group symbol | Removes the flight from the group |

Once several flights are grouped, dragging one of their track symbols extrapolates them all
along their routes. See [Analysis tools](/5g-atm-doc/tools/analysis/).
