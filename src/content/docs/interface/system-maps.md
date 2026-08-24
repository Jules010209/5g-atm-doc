---
title: System Maps
description: Choosing which maps of the sector file are drawn on the radar image.
---

The sector file carries far more cartography than any one position needs: every sector
fill, every airway, every procedure of every aerodrome. **System Maps Main** is where you
choose what is actually drawn.

**Set Up → System Maps** opens it, in its own window.

## The two panes

The window is split. On the left, a **tree** of what the sector file holds. On the right,
the **maps of whatever you selected in the tree**, each with a check box.

Selecting a node in the tree changes what the right pane lists; it does not draw
anything. Drawing is the check boxes.

| Tree node | The right pane then lists |
|---|---|
| **Maps** | Every map of the sector file |
| **Sectors** | The sector fills |
| **Geo** | The geographical background |
| **Navigation** | Everything else — beacons, airways |
| **Airports** | Every map of every aerodrome |
| An **aerodrome** | All of its maps together |
| A **map family** of an aerodrome — SID, STAR, MVA, runways, taxiways, stands, VFR | Its procedures **one by one** |

## One procedure at a time

The last row of that table is the one worth knowing. Above the map-family level, a row is
a whole family: checking **STAR** under LFSB draws all of its STARs at once.

Select the family itself and the right pane breaks it out, one row per procedure — so you
can draw `ELBEG8B` alone and leave the other thirty off.

A procedure is often written in several branches in the sector file, one per path. They
are one procedure to you, so they are one row, and they light up together. Unnamed paths
each keep their own row, since nothing says they belong together.

## Filtering

The box above the tree filters it. Useful on a national sector file, where the aerodrome
list is long.

## What is never offered

Some layers are computation data rather than cartography — the sector limits, for
instance, which the client uses to work out whether a flight concerns you. They do not
appear in the tree because there is nothing to look at.
