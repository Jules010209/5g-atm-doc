---
title: Moving around the scope
description: Pan, zoom, and what the radar image is made of.
---

## Pan

**Press the left button on an empty part of the image and drag.** The image follows the
pointer. Release to stop.

Dragging is ignored when a tool is armed — while placing range rings, or between the two
clicks of a QDM or SEP measurement — so a measurement is never turned into a pan by
accident.

## Zoom

**Mouse wheel.** Forward zooms in, backward zooms out. The zoom is centred on the pointer,
so put the cursor on the area you want to enlarge before scrolling.

## The pointer tells you the mode

| Cursor | Meaning |
|---|---|
| Normal arrow | Nothing armed. Clicks select and drag |
| Crosshair | A tool is armed: QDM, SEP, or a range ring waiting to be placed |

Press **Escape** to cancel an armed tool.

## What is drawn

From bottom to top:

1. **Sector geometry** — boundaries of your sectors and of the neighbouring ones.
2. **Maps** — routes, points, special areas.
3. **Analysis leftovers** — range rings, measurements, displayed flight legs.
4. **Trails and history dots** — where each aircraft has been.
5. **Track symbols and speed vectors**.
6. **Labels**, with their leader lines.

The static background is cached, so panning and zooming stay smooth even with a busy
picture.

## Selecting flights on the image

| Gesture | Effect |
|---|---|
| **Left click on a track symbol** | Adds or removes the flight from the local analysis group, up to 8 flights |
| **Ctrl + left click on a track symbol** | Opens the Track menu |
| **Left click on empty image** | Deselects the current range rings |
| **Ctrl + left click on empty image** | Opens the Radar menu |

The analysis group is a working set: once several flights are in it, dragging one of their
track symbols extrapolates their positions along their routes. See [Analysis
tools](/5g-atm-doc/tools/analysis/).

## Decluttering

Three independent mechanisms, in order of how often you will use them:

1. The **flight level window** in the menu bar.
2. The **VFR / MIL / SEE ALL** buttons.
3. **Clean** in the Radar menu, to wipe the analysis leftovers.

Flights that concern your position are never hidden by 1 or 2.
