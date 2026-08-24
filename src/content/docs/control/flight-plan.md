---
title: Flight plan
description: Reading and modifying a flight plan, and the DYP Info strip.
---

The **Flight Plan ▸** submenu of the aircraft menu holds everything related to the filed
plan.

| Entry | What it does |
|---|---|
| **Route Mod…** | Greyed, not implemented |
| **Modify…** | Opens the Modify SFPL window |
| **Dyp Info…** | Opens a static DYP strip pinned to this flight |

## Modify SFPL

A popup window showing the filed flight plan in editable fields, laid out in three columns.

| Group | Fields |
|---|---|
| Rules and type | Flight rules, flight type, number of aircraft |
| Equipment | Communication, surveillance, RVSM |
| Aircraft | Type, wake turbulence category, true airspeed, requested level |
| Route | Departure, EOBT, destination, total EET, alternate |
| Text | The route itself, read-only, plus the operational text |

Mandatory fields are circled in red when they are empty or invalid.

At the bottom, **Refresh** reloads the plan from the network and **OK** sends your changes.

:::note
This window closes with its **×** only. Clicking outside it does not close it, so a long
edit is never lost by accident.
:::

## DYP Info

The DYP strip shows the same information as the extended label, in a denser format closer
to a paper strip, plus data that is not directly about your sector: the succession of
sectors the flight will cross and the exit level for each of them.

There are two kinds, with identical content.

### Dynamic DYP

Opened from **Tools → DyP Info** in the menu bar. There is only one, and it **follows your
mouse**: hover a label and the strip fills with that flight. Move away and the last flight
hovered stays displayed.

Use it as a permanent reading pane while you work.

### Static DYP

Opened from **Flight Plan → Dyp Info…** in the aircraft menu. It is **pinned to that
flight** and placed at your cursor. Up to **five** can be open at once.

Use it to keep two or three flights side by side while you sort out a situation.

### Tabs

| Tab | Content |
|---|---|
| **PRINCIPAL** | Identity, type, equipment, levels, route summary |
| **ROUTE** | The route in full, with the sectors crossed |
| **MISC** | Everything else |

Missing equipment is shown in yellow, as `no8`, `noR` or `noW`.

Where IVAO does not carry the data at all — centre entry and exit estimates, operational
text — the field is shown with a dim placeholder. Nothing is invented.

## Route display

Two ways to see a flight's route on the radar image:

- **Flight Leg** in the track menu, opened with Ctrl + left click on the track symbol;
- **Flight Leg Auto** in the Radar menu, which shows the route of any flight you hover.

Displayed routes are cleared along with the rest by **Clean**.
