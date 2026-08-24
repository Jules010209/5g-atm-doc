---
title: Windows
description: How the auxiliary windows behave, where they are saved, and how to get them back.
---

Lists, the Agenda, DYP Info, the TeamSpeak panel and the CPDLC Pending Messages boxes are
**separate windows of the operating system**, not panels drawn inside the radar image.

That has three consequences you will notice immediately:

- They can be moved **anywhere**, including a second monitor.
- They are **always on top** of the radar, so a window you opened never disappears behind
  it.
- They have **no title bar of their own**: you move them by dragging their header strip.

## Moving and resizing

| Action | How |
|---|---|
| Move | Drag the header strip at the top of the window |
| Resize | Drag an edge or a corner, for windows that allow it |
| Close | The **×** in the header, or the same menu entry that opened it |

Some windows resize themselves to fit their content — the DYP strip and the CPDLC Pending
Messages boxes grow and shrink as their content changes.

## Position is remembered

Every move and every resize is saved to:

```
%APPDATA%\com.jules.g-atm\standard_config.json
```

When you start the application again, the windows that were open at the last shutdown are
reopened at the same size and the same place. You arrange your position once.

## Closing behaviour

Closing a window with its **×**, and closing it from the menu entry that opened it, do the
same thing. Closing it from the Windows taskbar or with Alt+F4 also unticks the
corresponding menu entry, so the two stay in sync.

## The list of windows

| Window | Opened from | Page |
|---|---|---|
| Sector List | Tools → Flight Lists | [Lists and Agenda](/5g-atm-doc/tools/lists/) |
| Departure list, per aerodrome | Tools → Flight Lists → Departure Lists | [Lists and Agenda](/5g-atm-doc/tools/lists/) |
| Arrival list, per aerodrome | Tools → Flight Lists → Arrival Lists | [Lists and Agenda](/5g-atm-doc/tools/lists/) |
| Agenda | Tools → Agenda | [Lists and Agenda](/5g-atm-doc/tools/lists/) |
| DYP Info, dynamic | Tools → DyP Info | [Flight plan](/5g-atm-doc/control/flight-plan/) |
| DYP Info, static, per flight | Aircraft menu → Flight Plan → Dyp Info… | [Flight plan](/5g-atm-doc/control/flight-plan/) |
| TeamSpeak | Tools → External Applications → Teamspeak | [TeamSpeak](/5g-atm-doc/voice/teamspeak/) |
| Pending Messages, per flight | Clicking the request counter on a label | [Receiving requests](/5g-atm-doc/cpdlc/downlinks/) |
| Modify SFPL | Aircraft menu → Flight Plan → Modify… | [Flight plan](/5g-atm-doc/control/flight-plan/) |

## Menus are not windows

The small menus that open next to a label field — level, speed, heading, direct, transfer —
are **not** windows. They live inside the radar image, they close when you click elsewhere,
and they are never remembered.
