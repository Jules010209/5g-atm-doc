---
title: Track and label anatomy
description: What is drawn for each flight, and the three label formats.
---

## The track

Each flight is drawn as a set of elements, all optional except the symbol itself.

| Element | What it is |
|---|---|
| **Track symbol** | The current radar position. Click it to add the flight to the analysis group |
| **History dots** | The previous positions, 5, 10 or 15 of them. Their spacing shows the ground speed at a glance |
| **Trail** | The path already flown |
| **Speed vector** | A line ahead of the symbol showing where the aircraft will be in 1, 3 or 6 minutes |
| **Leader line** | The short line joining the symbol to its label |
| **Label** | The text block described below |

History dots and speed vectors are switched on globally in the [Radar
menu](/5g-atm-doc/interface/radar-menu/). A speed vector can also be set on a single
flight with **Ctrl + left click on its ground speed field**.

## Three label formats

The same flight shows more or less information depending on what you are doing with it.

| Format | How you get it | What it is for |
|---|---|---|
| **Base** | Always | The working format. Only what is needed to control |
| **Extended** | **Hover** the label | The same flight with its full identity and coordination data |
| **Deployed** | **Mouse wheel** over the label | A panel of detailed tabs |

The deployed panel closes on its own when the pointer leaves the label. Rolling the wheel
again cycles through its tabs.

## The base label

```
 46 STCA
●AFR1234
 350↑330 RUBAS
 x310
```

Read from top to bottom:

**Line 0 — ground speed and warnings.** The ground speed in tens of knots, then every
mnemonic that needs your attention: emergency codes, STCA, TCT, CLAM, INTRU, STLN, SHRQ,
LOST, IDENT, holding data. A squawk of 2000 is shown as a blue `1000`.

**Callsign line.** The callsign, preceded by the datalink dot if the flight is in a CPDLC
session with you, followed by the conflict group symbol if you put it in one.

**Altitude line.** The current level, the vertical trend, the cleared level, and the next
navigation point.

**Exit level line.** The exit level as `x310`, shown only when it carries information — see
occultation below.

**Datalink request line.** A blue line such as `REQ F300` when a pilot has sent a request,
with a counter when there is more than one.

Lines that carry nothing are not drawn at all. A cruising flight with nothing pending is
three short lines.

## The extended label

Hovering adds, on the same lines:

- an **acknowledgement box** at the left of line 0;
- the **assigned speed**, the **vertical speed**, the **aircraft type**, the mission type
  for a state flight;
- the **next sector** and the **TaFL** on the callsign line;
- the **exit level**, the **coordination point** and the **destination** on their own line.

## The deployed panel

Roll the mouse wheel over a label. A panel opens under it with a tab bar. Roll again to
move from tab to tab.

| Tab | Content |
|---|---|
| **Level 1** | Heading, ground speed, Mach, altitude, departure and destination, STAR and arrival runway, next sector and its frequency |
| **Traj** | Trajectory data |
| **Info** | Complementary information |
| **Id** | Identification |
| **Misc** | Miscellaneous |

Move the pointer off the label and the panel disappears. It is a reading tool, not a
window: it is never left open.

## Occultation

4-Flight hides a field when it says nothing new, so that a label stays as short as
possible. Three rules apply, on the **base label only**:

| Field | Hidden when |
|---|---|
| **CFL**, cleared level | The aircraft is stable at it, within 200 ft |
| **XFL**, exit level | It equals the cleared level or the entry level |
| **EFL**, entry level | The aircraft is already at it, within 200 ft |

A hidden field is not lost. Hover the label and it comes back, and marking it forces it to
stay visible. See [Marking and acknowledging](/5g-atm-doc/labels/marking/).

## Moving a label

**Drag the label** to place it where you want. Automatic anti-overlap, if it is on, gives
way to your choice.

Labels are also placed automatically to avoid covering each other; switch that off with
**Track Label Anti-Overlap** in the Radar menu.
