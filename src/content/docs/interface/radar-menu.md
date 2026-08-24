---
title: Radar menu
description: The menu opened with Ctrl and a left click on the radar image, entry by entry.
---

Hold **Ctrl** and **left-click on an empty part of the radar image**. The Radar menu opens
at the pointer. It carries everything that affects the display as a whole, plus the
measuring tools.

Clicking a track instead of empty image opens the [Track
menu](#the-track-menu-ctrl--click-on-a-track), which is a different menu.

## Entries

### Close UIR

Closes the menu.

### QDM

Arms the bearing and distance tool. Then click two objects. See [Analysis
tools](/5g-atm-doc/tools/analysis/).

### SEP

Arms the separation tool between two aircraft.

### Range Rings

**Only present when a set of range rings is selected.** Its `Interval` submenu sets the
spacing between circles: **5 Nm** or **10 Nm**. The current value is shown next to the
entry.

To reach it, select a set of rings by clicking one of its circles, then Ctrl + click at
its centre.

### Clean

Submenu with a single entry, **RR-Flight Leg / Lost Tracks**. It clears the analysis
leftovers from the image in one action: range rings, displayed flight legs, measurements
and lost tracks.

It is deliberately behind a submenu so you cannot trigger it by accident.

### Velocity Vectors

A checkbox plus a submenu. The checkbox turns the vectors on and off for all traffic; the
value next to it is the current length in minutes.

| Submenu | Effect |
|---|---|
| **1**, **3**, **6** | Vector length, in minutes of flight |
| **Cancel Ind.** | Removes every individually-set vector. Greyed when there is none |

An individual vector can be set on one flight with **Ctrl + left click on its ground speed
field**, without changing the global setting.

### History Dots

A checkbox plus a submenu. Shows the past positions of each track.

| Submenu | Effect |
|---|---|
| **5**, **10**, **15** | Number of past positions displayed |

### Track Label Anti-Overlap

Checkbox. When on, labels are moved automatically to avoid covering each other.

You can always drag a label by hand; the automatic placement gives way to your choice.

### Flight Leg Auto

Checkbox. When on, hovering a flight shows its route automatically.

### Find…

Search entry.

### Views

**Greyed.** `2:nd Radar Window 1` and `2:nd Radar Window 2`, with their `Define` and
`Recall` options, are not implemented.

### Maps

Map layer selection.

### Tools

| Entry | What it does |
|---|---|
| **Mark LAT-LONG** | Greyed, not implemented |
| **Find LAT-LONG** | Greyed, not implemented |
| **Custom Range Rings** | Arms the guided placement: centre, then size, then arc |
| **Quick Range Rings** | Arms the immediate placement: one click drops a full set of circles |

See [Analysis tools](/5g-atm-doc/tools/analysis/) for how to use them.

### Setup

Display settings.

## The track menu, Ctrl + click on a track

Same gesture, but on a track symbol. This menu applies to that flight only.

| Entry | What it does |
|---|---|
| **Create APL…** | Greyed, not implemented |
| **QDM** | Starts a bearing measurement from this flight |
| **SEP** | Starts a separation measurement from this flight |
| **Flight Leg** | Shows or hides this flight's route |
| **Individual VV** | Sets a velocity vector for this flight only |
| **Track Ring** | Draws a ring of a chosen radius around this track, in nautical miles |
| **Tracking Radar Window** | Greyed, not implemented |
| **Correlation** | Greyed, not implemented |
| **Label Fields** | Greyed, not implemented |
