---
title: Filters and CLEAN
description: Reducing what is on the screen without losing what matters.
---

Three independent mechanisms decide what is drawn: the **flight level window**, the
**category buttons**, and the **exceptions** that override both.

## The flight level window

Two values at the right of the menu bar, a lower and an upper limit. Only flights inside
that band are shown.

This filter is **sovereign**: it is applied last and nothing bypasses it — not SEE ALL, not
an STCA alert. Set it to your sector's vertical extent and everything above and below
disappears.

## VFR, MIL, SEE ALL

VFR and military traffic are **hidden by default**.

| Button | Effect when on |
|---|---|
| **VFR** | Shows VFR traffic |
| **MIL** | Shows military traffic |
| **SEE ALL** | Reveals both, ignoring the two buttons above |

A blue frame means the button is on. SEE ALL reveals categories; it does **not** widen the
level window.

## The exceptions

A flight is displayed **whatever the filters say** when any of these is true:

- it concerns your position — you have assumed it, it has been offered to you, or it is
  coordinated inbound;
- it squawks an **emergency** code;
- it is in your **analysis group** or in a **conflict group**;
- it has an **individual velocity vector**, a **track ring** or its **route displayed**;
- it is part of a **measurement** you have drawn, or of a datablock;
- one of its fields is **marked**;
- it is **holding**;
- it has a **pending inbound coordination**;
- you are **hovering** its label;
- it has an **open datalink transfer dialogue**.

The principle is simple: **anything you have touched, or anything that concerns you, is
never hidden from you.**

A flight in an emergency is the one case that also overrides the level window.

## Contextual filters, middle button held

Hold the middle button on a field to filter on its value for as long as you hold:

| Field | Shows only |
|---|---|
| **CFL** | Flights at, or cleared to, that level |
| **XFL** | Flights leaving at that level |
| **ADES** | Flights to that destination |

Release and the picture comes back. It answers a question without changing your settings.

## CLEAN

Analysis tools leave things on the screen: range rings, measurements, displayed routes,
lost tracks. **Clean** wipes them in one action.

**Radar menu → Clean → RR-Flight Leg / Lost Tracks.**

It is behind a submenu on purpose, so you cannot wipe your working picture with a stray
click.

Clean removes **display leftovers only**. It never releases a flight, never cancels a
clearance and never changes any operational data.

## What Clean does not touch

| | Removed by Clean |
|---|---|
| Range rings | Yes |
| Measurements: QDM, SEP | Yes |
| Displayed flight legs | Yes |
| Lost tracks | Yes |
| Analysis group | No |
| Individual velocity vectors | No |
| Field markings | No |
| Coordination notes | No |
