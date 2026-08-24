---
title: Analysis tools
description: Measuring, drawing rings, extrapolating positions and showing routes.
---

## QDM, bearing and distance

**Radar menu → QDM**, or **QDM** in the track menu for a flight.

The cursor becomes a crosshair. Click **two objects**; the measurement is drawn and stays
on the screen.

An end can be a track, or — for QDM only — a **point on the map**: click anywhere that is
not a track and the measurement is anchored to that geographic point.

## SEP, separation

**Radar menu → SEP**, or **SEP** in the track menu.

Same gesture, but both ends must be **aircraft**. Clicking the same aircraft twice does
nothing; the tool waits for a different one.

## Cancelling and clearing

| To | Do |
|---|---|
| Cancel a measurement in progress | **Escape** |
| Remove all measurements | **Radar menu → Clean** |

## Range rings

Concentric circles centred anywhere on the image, used to judge distances at a glance.

### Quick placement

**Radar menu → Tools → Quick Range Rings**, then **click where you want the centre**. A
full set of circles appears immediately: 25 circles at the default 5 Nm spacing.

### Custom placement

**Radar menu → Tools → Custom Range Rings**, then three clicks:

1. **Click the centre.**
2. **Move out and click** to set the overall size.
3. **Move around and click** to set the end of the arc.

Between the second and third click, the angle you sweep defines the arc. Sweep almost
nothing and you get **full circles** instead of an arc.

### Selecting and modifying

**Left-click one of the circles** to select the set. Handles appear:

| Handle | Drag it to |
|---|---|
| The square at the centre | Move the whole set |
| The outer handle | Change the size |
| The angle handles | Change the start and the end of the arc |

With a set selected, **Ctrl + click at its centre** opens the Radar menu with a **Range
Rings → Interval** entry: **5 Nm** or **10 Nm** between circles.

| Key | Action |
|---|---|
| **Delete** | Deletes the selected set |
| **Escape** | Deselects it |

### The information box

While you create, drag or select a set, a small box shows the **latitude and longitude of
the point you are pointing at**, and the **bearing and distance from the centre** of the
circles. Click on a circle and the distance shown is that circle's radius.

The box stays as long as the set is selected.

## Track ring

**Track menu → Track Ring**, on a single flight. Draws a ring of a chosen radius in
nautical miles around that track, and it follows the aircraft.

A flight carrying a track ring is never hidden by the filters.

## Velocity vectors

A line ahead of the track showing where the aircraft will be in 1, 3 or 6 minutes.

| To | Do |
|---|---|
| Turn them on for everyone | **Radar menu → Velocity Vectors** |
| Change the length | The submenu: 1, 3 or 6 minutes |
| Set one on a single flight | **Ctrl + left click on its ground speed field**, or **Track menu → Individual VV** |
| Remove all individual ones | **Radar menu → Velocity Vectors → Cancel Ind.** |

## History dots

The previous positions of each track: 5, 10 or 15 of them. Their spacing is a direct
reading of ground speed, and a bend in the trail shows a turn before the label does.

**Radar menu → History Dots.**

## Extrapolation

The most powerful analysis tool, and the least obvious.

1. **Left-click two or more track symbols** to put them in the analysis group, up to 8.
2. **Press and drag** on one of the grouped track symbols.

The grouped flights are moved forward **along their routes**, together, as you drag. It
answers the question *where will these two be relative to each other in six minutes* by
showing it, rather than by computing a number.

Release to return them to their real positions.

If a flight's route has not been loaded yet, the first drag loads it; drag again.

**Ctrl + release** while extrapolating leaves the picture in place as a datablock.

## Flight legs

| To | Do |
|---|---|
| Show one flight's route | **Track menu → Flight Leg** |
| Show the route of any flight you hover | **Radar menu → Flight Leg Auto** |

Displayed routes are cleared by **Clean**.
