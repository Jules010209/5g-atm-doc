---
title: What is g-atm
description: What the software does, who it is for, and what it does not do.
---

g-atm is an air traffic control client for the **IVAO** network. It is modelled on
**4-Flight**, the system used by French en-route control centres, and reproduces its
screen, its labels, its menus and its working methods as closely as a simulation client
can.

If you have controlled with another IVAO client before, expect a different philosophy.
There is no floating toolbar full of buttons. Almost everything is done **on the label
itself**: you click the field you want to change, a small menu opens next to it, you pick
a value. The radar image stays clean and the information you need is attached to the
flight it belongs to.

## Who it is for

Controllers working an **en-route (CTR) or approach (APP) position** on IVAO who want the
4-Flight working environment. It assumes you already know how to control: this guide
explains the software, not the job.

## What it gives you

- A **radar picture** with sector maps, tracks, speed vectors, history dots and trails.
- **4-Flight labels** in three formats (base, extended, selected), with the real field
  layout, the real occultation rules and the real mnemonics.
- **Flight ownership**: assume, release, transfer, inbound offers, manual transfer to any
  online position.
- **Clearances** issued from the label: cleared level, speed, heading, direct to a
  waypoint, exit level.
- **Coordination**: point session, coordination notes, frequency requests, next sector.
- **Analysis tools**: QDM, SEP, range rings, extrapolation, velocity vectors, history
  dots, CLEAN.
- **Safety nets**: STCA on radar tracks and TCT on cleared trajectories.
- **Flight lists**: sector list, departure and arrival lists, Agenda, DYP Info.
- **Integrated voice** over the IVAO TeamSpeak servers, connected automatically with your
  network session.
- **CPDLC datalink** through the Hoppie ACARS network: pilot logons, clearances, pilot
  requests, and datalink transfer.

## What it is not

- **Not a pilot client.** It only connects as an ATC position.
- **Not a tower or ground position.** Nothing prevents you from connecting as one, but the
  screen, the labels and the tools are built for radar control.
- **Not the real 4-Flight.** It is a reconstruction based on the public *4F pour les nuls*
  documentation, adapted to what the IVAO protocol actually carries. Some real-world
  functions have no equivalent on IVAO and are therefore absent or inert.
- **Not a substitute for your division's rules.** Local procedures, LOAs and phraseology
  remain yours to follow.

## Inactive functions

Several menu entries exist because they exist in 4-Flight, but are **greyed out**: they
are placeholders and clicking them does nothing.

| Location | Greyed entries |
|---|---|
| Menu bar → Tools | Create SFPL…, OPSUP, Notepad |
| Tools → Flight Lists | Holding Lists, Lost List, FL Negotiations, NotSeen/Rev, Sector Uncorrelated APL |
| Radar menu | Views (2nd radar windows), Maps → Define/Recall, Tools → Mark/Find LAT-LONG |
| Track menu | Create APL…, Tracking Radar Window, Correlation, Label Fields |
| Menu bar | Status, ARTAS |

If an entry is greyed, it is not broken — it is simply not implemented.

## Platform

Windows desktop application. It is distributed as a normal installer and runs as a native
window, not in a browser.
