---
title: Menu bar
description: Every element of the top bar, from left to right.
---

## Left side

### Clock

Local system time, updated every second.

### Status, ARTAS

Present for fidelity, **not implemented**. Clicking them does nothing.

### Set Up

A drop-down with the two settings that come before any session.

| Entry | What it does |
|---|---|
| **Sector File ▸** | Install, download and load sector files |
| **System Maps** | Opens [System Maps](/5g-atm-doc/interface/system-maps/), where you choose which maps are drawn |

#### Sector File

| Entry | What it does |
|---|---|
| **Install…** | Picks an Aurora sector package from disk and unpacks it into your sectors folder |
| **Sector ID** + **Download** | Fetches a sector from IVAO by its identifier |
| The list below | Every `.isc` found. Click one to load it |

Installing or downloading only adds files to the folder; loading is the click on the name.
The one currently loaded is marked.

### Tools

The main application menu.

| Entry | What it does |
|---|---|
| **Create SFPL…** | Greyed, not implemented |
| **OPSUP** | Greyed, not implemented |
| **Agenda** | Opens or closes the Agenda window |
| **DyP Info** | Opens or closes the dynamic DYP Info window |
| **Notepad** | Greyed, not implemented |
| **Flight Lists ▸** | Sector, departure and arrival lists |
| **External Applications ▸** | TeamSpeak panel |
| **CPDLC ▸** | Datalink station status and control |

#### Flight Lists

| Entry | What it does |
|---|---|
| **Sector List** | Checkbox. Opens the list of flights concerning your position |
| **Departure Lists ▸** | One entry per departure aerodrome of your area |
| **Arrival Lists ▸** | One entry per arrival aerodrome of your area |
| **NotSeen/Rev** | Checkbox. Opens the NSRL — flights not yet acknowledged, and flights whose data changed |
| **Holding Lists**, **Lost List**, **FL Negotiations**, **Sector Uncorrelated APL** | Greyed, not implemented |

Each list is a checkbox: ticked means the window is open. See [Lists and
Agenda](/5g-atm-doc/tools/lists/).

#### External Applications

| Entry | What it does |
|---|---|
| **Teamspeak** | Checkbox. Opens the voice panel |

#### CPDLC

| Entry | What it does |
|---|---|
| **Check Stuck Micro** | Sends the stuck microphone message to every flight in datalink session. Greyed unless the station is online |
| *status line* | Read-only. Shows the station state and its code, for example `ONLINE LFM1` |
| **Connect / Disconnect** | Brings the datalink station online or takes it offline |

See [CPDLC overview](/5g-atm-doc/cpdlc/overview/).

## Centre

### Role label

Shows your current operational identity, for example `LFMM_W / TACTICAL`. **Click it to
open the PREPA window** and change your sector grouping, your position or your role. See
[Operational configuration](/5g-atm-doc/start/op-config/).

### Warning indicator

Static indicator.

### Messages

The envelope opens the message box: private conversations with other positions, and
**frequency channels** that everyone tuned to the frequency reads. Your own frequency is
always there and cannot be closed.

The envelope **blinks blue** while a message is waiting, and stops when you open the box.

See [Text messages](/5g-atm-doc/control/messages/).

## Right side

### DEFAULT

Label of the current display configuration.

### Flight level window

Two values, a lower and an upper limit. Only flights inside that band are displayed.

This is the primary decluttering tool: set it to your sector's vertical extent and
everything above and below disappears. Flights that concern you are **never** removed by
this filter, whatever the values.

### VFR · MIL · SEE ALL

Three toggle buttons, off by default. A **blue frame and a blue background** mean the
filter is on.

| Button | Effect when on |
|---|---|
| **VFR** | Shows VFR traffic |
| **MIL** | Shows military traffic |
| **SEE ALL** | Shows everything, ignoring the other filters |

See [Filters and CLEAN](/5g-atm-doc/tools/filters/).

### CONNECT / DISCONNECT

Opens the network connection panel. The label follows your state: `CONNECT` when offline,
`DISCONNECT` when connected.

Inside the panel:

| Field | Note |
|---|---|
| host, port | IVAO world server |
| teamspeak host, ts port | Voice server, also published in your ATIS |
| callsign | Position you are opening |
| nom | Your name on the network |
| VID, password | Your IVAO credentials |

**Connection** connects; **Disconnect** closes the session. Errors appear in red under the
buttons.

The values are pre-filled from `config.json`. Anything you change in the TeamSpeak fields
is saved back to the file when you connect.
