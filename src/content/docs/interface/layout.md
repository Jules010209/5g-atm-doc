---
title: Screen layout
description: How the working position is organised on screen.
---

The position is made of three things: a **menu bar**, a **radar image**, and a set of
**windows** that you open when you need them.

```
┌────────────────────────────────────────────────────────────────────────┐
│ 12:04:31 │ Status  ARTAS  Set Up  Tools │  LFMM_W / TACTICAL  ⚠ ✉ │ … │ ← menu bar
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│                              radar image                               │
│                    sectors · tracks · labels · tools                   │
│                                                                        │
│            ┌──────────────┐                    ┌─────────────┐         │
│            │ Sector List  │                    │   Agenda    │         │ ← windows
│            └──────────────┘                    └─────────────┘         │
└────────────────────────────────────────────────────────────────────────┘
```

## The menu bar

A single fixed strip at the top. It carries the clock, the application menus, your
operational identity, the display filters and the network connection button. It never
scrolls and never hides. See [Menu bar](/5g-atm-doc/interface/menu-bar/).

## The radar image

Everything else. Sector boundaries, routes and points are drawn underneath; tracks and
their labels are drawn on top.

There is no toolbar over the image. Two menus are reached by gesture instead:

| Gesture | Opens |
|---|---|
| **Ctrl + left click** on empty radar | the **Radar menu** — display settings and analysis tools |
| **Ctrl + left click** on a track symbol | the **Track menu** — tools for that one flight |
| **Left click** on a label field | the menu for that field |

This is the core idea of the interface: **the object you click decides the menu you get**.

## Windows

Lists, the Agenda, DYP Info, the TeamSpeak panel and the CPDLC Pending Messages boxes open
as **real windows of their own**, not as panels floating inside the radar image. You can
move them anywhere, including onto a second monitor, and they stay where you put them
between sessions.

They are opened from **Tools** in the menu bar, or automatically when something needs your
attention. See [Windows](/5g-atm-doc/interface/windows/).

## Menus that open at the pointer

Menus are placed so that their **first entry is already under your mouse** when they open.
A second click therefore validates the most common action without moving your hand — the
gesture behaves like a double click.

This applies to the aircraft menu, the manual transfer menu and the field menus. It is
deliberate: the working method assumes you rarely need anything but the first entry.

## Colour conventions

| Colour | Meaning |
|---|---|
| Blue | Something is selected, active or armed |
| White | A normal, healthy state |
| Yellow | Waiting, pending, standby |
| Orange | Refused or failed, needs your attention |
| Red | Alert, corruption, emergency |

The same convention is used for filter buttons, menu selections, label states and datalink
boxes.
