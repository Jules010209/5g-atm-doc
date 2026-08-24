---
title: Lists and Agenda
description: The flight lists, their columns, and the Agenda time line.
---

## Flight lists

Opened from **Tools → Flight Lists**. Each list is a window of its own that you can place
anywhere and that comes back where you left it.

| List | Contains |
|---|---|
| **Sector List** | Every flight concerning your position |
| **Departure list** | Departures from one aerodrome. One window per aerodrome |
| **Arrival list** | Arrivals at one aerodrome. One window per aerodrome |
| **NotSeen/Rev**, the NSRL | Flights you have not looked at yet, and flights whose data someone else changed |

### Columns

Columns can be shown or hidden per list. Only the callsign is compulsory.

**Sector list**

| Column | Meaning |
|---|---|
| `C/S` | Callsign |
| `adep` / `ades` | Departure and destination |
| `iFlx` | Inbound flux |
| `cr` | Correlation |
| `cfl` / `efl` / `xfl` | Cleared, entry and exit levels |
| `ns` | Next sector |
| `atyp` | Aircraft type |

**NotSeen/Rev**

| Column | Meaning |
|---|---|
| `etn` | Estimated time of entry into your volumes. The column that opens the row, as in the manual |
| `C/S`, `adep`, `ades`, `iFlx`, `ns`, `efl`, `xfl`, `atyp`, `assr` | As above |

**Arrival list**

| Column | Meaning |
|---|---|
| `C/S`, `atyp`, `ades`, `iFlx`, `ns`, `efl`, `xfl` | As above |
| `rwy` | Arrival runway. Click to allocate |
| `star` | Arrival procedure. Click to allocate |
| `eta` | Estimated time of arrival |
| `seq` | Sequence number, in the colour of its sequence. Click to change — see [Sequencing arrivals](/5g-atm-doc/control/sequencing/) |
| `eat` | Expected approach time. Click to change |
| `hfl` | Holding level. Click to change |
| `ovl` | Overload |
| `assr` | Assigned squawk |

**Departure list**

| Column | Meaning |
|---|---|
| `C/S`, `atyp`, `adep`, `ades`, `cfl`, `assr` | As above |
| `act` | Activation. Click to activate the plan |

### Working in a list

| Gesture | Effect |
|---|---|
| **Hover a row** | Highlights the flight on the radar |
| **Left click a row** | Opens the aircraft menu, as if you had clicked the callsign |
| **Right click a row** | Acknowledges the flight |
| **Left click an interactive cell** | Opens the menu for that field |
| **↑** / **↓** | Reorder the arrival sequence. The flight moves within **its own** sequence, and only that sequence is renumbered |
| **Enter** | Validate an entry |

Anything you do from a list has exactly the same effect as doing it on the label.

### The NSRL

**Tools → Flight Lists → NotSeen/Rev.** Its purpose is to catch what you would otherwise
have to notice by eye: a flight that has appeared and has not been acknowledged, or a
field another position has changed and you have not seen. It lists them **whatever your
zoom and filters** are, which is the point — a flight off the edge of the image is exactly
the one you would miss.

A flight leaves the list when you acknowledge it: right click its callsign, in the list or
on the label.

Flights whose state makes them nobody's business are never listed — a flight you have
shot, one in SURV or AUTRE, or an uncoordinated PREPA.

## Agenda

**Tools → Agenda.** The Agenda is described in 4-Flight as *the fridge door you stick
post-its on*.

It is a **vertical time line**: the past at the bottom, the future at the top, with the
current time highlighted. You place **datablocks** on it — snapshots of a situation you
want to come back to.

### Time scale

A control at the top changes the scale, in steps. Past time is readable **up to 5 minutes
back**; beyond that, a datablock is no longer reachable.

### A datablock

Up to **8 flights**, exactly like the analysis group.

| Element | What it does |
|---|---|
| **S / L badge** | `L` local to you, `S` shared with the position |
| **Clock** | Drag it to extrapolate the group and move it along the time line, up to 30 minutes |
| **Recall** | Brings the group back to the radar |
| **Warnings ◇ ★ ☽** | Marks the group, or OFF for none |
| **Cross** | Deletes the datablock |
| **Bin** | Removes one flight from it |

### Creating one

Put flights in the analysis group by clicking their track symbols, drag one of them to
extrapolate, and **release while holding Ctrl**. The situation is stored as a datablock at
the time you were looking at.

A flight belonging to a datablock is never hidden by the filters.
