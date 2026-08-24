---
title: Holding
description: Putting a flight in a hold, setting its holding level, reserving levels in a stack, and cancelling the constraint.
---

## Opening the hold menu

**Hold** in the aircraft menu. The menu has two tabs.

| Tab | Lists |
|---|---|
| **PRED** | The predefined holding stacks of your area |
| **WPT** | The points remaining on the flight's route, for a hold that is not predefined |

Left click a point to apply the constraint. The menu closes.

Whichever tab you use, **the flight's route has to pass through the point**. That is why
WPT lists the route rather than the whole navigation database — and why a route
modification is sometimes needed first.

At the bottom, **Cancel &lt;point&gt;** removes the constraint currently in force; it
reads `Cancel -----` and is greyed when there is none.

### Nothing in PRED

The predefined stacks come from a `predefined_holds.json` in your application data
folder, resolved by the prefix of your position callsign. If the file is absent the PRED
tab is empty — holding still works, through WPT. See
[Files and folders](/5g-atm-doc/reference/files/).

## What appears on the label

Once a flight is holding, line 0 carries its holding data:

| Element | Meaning |
|---|---|
| **SEQi** | A circular-arrows symbol: the flight is holding |
| **Stack letter** | The first letter of the stack, next to the SEQi |
| **EAT** | Expected approach time |
| **HCT** | Overlap alert — two holding flights too close vertically |

These are **blue** until they have been passed to the pilot.

**Ctrl + left click on the SEQi field** opens the holding list for that stack.

## The holding level, HFL

**HFL** is the level you want the flight to hold at. Click the field to open its menu.

The HFL menu is the level menu you already know, without the DLK button and without the
RFL row — neither means anything for a hold. It opens centred on the current holding
level, or on the exit level if none is set yet.

A **predefined** stack bounds the menu to the band configured for it, so you cannot
select a level the stack does not own. A WPT hold offers the full range.

The HFL follows the ordinary occultation rule: it is hidden when it equals the cleared
level, because it then says nothing new. It is shown on the **selected label**; mark the
field to bring it onto the base label as well.

### Reserving a level

**Middle click a level** in the HFL menu to reserve it in that stack. The level then
shows greyed for every flight — it is spoken for. Middle click it again to release it.

The level a flight currently holds is never greyed for that flight: it is the one
occupying the reservation.

## A second constraint

A flight can carry a second holding constraint. Opening the hold menu when one constraint
is already in force opens it directly on the **WPT** tab, ready for the second point, and
the point already set keeps its marker in the list so you can see what is in force.
