---
title: Clearances
description: Levels, speeds, headings, directs and exit levels, all issued from the label.
---

Every clearance is issued the same way: **click the field on the label, pick a value**. The
menu opens next to the field it belongs to.

## Cleared level

**Left-click the CFL field.** The level menu opens above it.

| Element | What it is |
|---|---|
| **R** button at the top | The requested level from the flight plan. Click it to clear the flight directly to its cruise level |
| **Level list** | Scrollable list of levels. Click one to clear it |
| **DLK** button | Arms datalink. See below |
| **F** input at the bottom | Type a level in hundreds of feet, `350`, and press Enter |

The list highlights the currently cleared level, so you can see at a glance what the flight
is already on.

| Key | Action |
|---|---|
| **↑** / **↓** | Move through the list |
| **Enter** | Validate |
| **Escape** | Close |

Accepted range: FL010 to FL410.

### Preparing a level

**Middle click a level** in the list to *prepare* it instead of clearing it. The menu
closes, nothing is sent, and the level is kept as a prepared clearance for that flight.
**Ctrl + middle click** removes a prepared level.

Use it when you have decided what you will give but do not want to give it yet.

### Sending it by datalink

Click **DLK** to arm it — it turns blue — then click the level. The clearance goes out over
CPDLC instead of being applied silently.

DLK is greyed when it cannot be used, and the reason is in its tooltip: the flight is not
in a datalink session, it is not assumed by you, or a level dialogue is already open for
it. See [Sending clearances](/5g-atm-doc/cpdlc/uplinks/).

## Speed

**Left-click the ground speed field.** The speed menu works like the level menu: a list, a
manual entry, a DLK button.

Both knots and Mach are supported. The label shows which one is in force with a small
symbol next to the value.

**Ctrl + left click** on the same field does something else entirely: it sets an individual
velocity vector for that flight. Watch which modifier you are holding.

## Heading

**Left-click the heading field**, in the deployed panel. Same layout: list, manual entry,
validation with Enter.

A heading is shown in the CNAV field as `H245`, so you can tell a heading from a direct at
a glance.

## Direct to a waypoint

**Left-click the CNAV field.** The waypoint menu lists the points remaining on the flight's
route. Pick one and the flight is cleared direct to it.

You can also type a point name. If the point is not on the route, it is still accepted —
the route is redrawn from the current position to it.

The CNAV field then shows the point you cleared. When the aircraft passes it, the field
moves on to the next point of the route on its own.

A direct can be sent by datalink with the **DLK** button, exactly like a level.

## Exit level

**Left-click the XFL field.** The exit level is the level at which the flight will leave
your area of responsibility. It is system data shared with the next sector, not a clearance
to the pilot.

Two sources feed it:

- what you set by hand in this menu;
- what the letters of agreement imply, derived automatically from the coordination point.

The label shows the effective value and makes no distinction between the two.

The XFL is hidden when it equals the cleared level or the entry level, because it then says
nothing new. Mark the field to force it to stay visible.

## Cruising level, the TaFL

The exit level says where a flight leaves you. The **TaFL** says how high it gets: it is
the highest level computed ahead of the flight, up to the boundary of the ATSU. To change
a flight's **cruising level**, this is the field to change — not the cleared level, which
is a clearance, and not the exit level, which is a consequence.

**Left click the TaFL field**, on the callsign line, to open the **PROFILE** menu. Scroll
to the level you want and left click it. `F` at the bottom takes a level typed by hand.

Changing the TaFL changes the profile: the flight climbs or descends towards the new
level, and **the exit level and the sectors it crosses may change with it**. A strategic
constraint already placed on the flight is kept — the profile evolves after it.

### Immediate

The **Immediate** button, above the manual entry, changes where the modification starts.

| Immediate | The modification applies from |
|---|---|
| off, the default | The flight's entry into your sector |
| on | The flight's present position |

You want it when the flight is **not yet in your sector** and you need the change to take
effect now rather than at your boundary.

Arm the button first, then pick the level: the button sets the application point, the
level click is what commits.

:::caution
An immediate TaFL modification can take the flight out of the profile computed for it
altogether. The flight plan is modified, not merely annotated.
:::

## Approach clearance

A cleared level of `APP` on the label means the flight has been cleared for approach.

## What is local and what is shared

| Action | Visible to others |
|---|---|
| Cleared level, speed, heading, direct | Yes, as assigned data on the flight |
| Exit level | Yes, to the next sector |
| Prepared level | No |
| Marking, LOST, acknowledgements | No |
| Analysis group, range rings, measurements | No |
