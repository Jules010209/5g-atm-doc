---
title: STCA and TCT
description: The two conflict alerts, what triggers them, and what they do not do.
---

Two safety nets run continuously, once per second, on every flight displayed. Both show
their result as a mnemonic on **line 0** of the label.

## STCA — short term conflict alert

STCA works on **radar data only**: current positions, tracks, ground speeds and vertical
rates, extrapolated forward in a straight line. It knows nothing about clearances or
routes.

Default parameters:

| Parameter | Value |
|---|---|
| Horizontal threshold | 4.5 Nm |
| Vertical threshold | 750 ft |
| Look-ahead | 120 s |
| Minimum ground speed considered | 70 kt |

When two flights are predicted to lose separation inside the look-ahead window, both
labels show **STCA**.

The alert **clears on its own** as soon as the loss of separation is no longer predicted.
There is nothing to acknowledge.

## TCT — trajectory conflict

TCT works on **cleared trajectories**: the routes and the levels you have actually issued.
It sees a conflict that STCA cannot see yet, because it looks at where the flights are
going, not only at where they are pointing.

Two levels:

| Level | Display |
|---|---|
| **1** | Critical — flashing |
| **2** | Orange |

TCT only considers flights that are **controlled**, so it does not fire on traffic that is
none of your business.

## Both at once

A flight can carry both. They are shown on the same line, STCA first, then TCT, exactly as
they appear in 4-Flight.

## What alerts do not do

:::caution
An alert does **not** override the flight level window. If a conflicting flight is outside
your level band, it stays hidden. The band is sovereign.
:::

That is deliberate: your level window is the definition of the airspace you are working.
An alert on traffic you are not responsible for should not force it into your picture.

Emergency squawks are the exception — those override every filter.

## Analysing a conflict

When an alert fires, the fastest way to understand it:

1. **Left-click both track symbols** to put them in the analysis group.
2. **Drag one of them** to extrapolate both along their routes and watch how the geometry
   develops.
3. Use **SEP** between the two for a numerical separation.

See [Analysis tools](/5g-atm-doc/tools/analysis/).
