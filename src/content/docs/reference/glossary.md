---
title: Glossary
description: Every abbreviation and mnemonic used in the interface.
---

## Levels

| Term | Meaning |
|---|---|
| **AFL** | Actual flight level. What the aircraft is at now |
| **CFL** | Cleared flight level. What you cleared it to |
| **EFL** | Entry flight level. Level at which it enters your area |
| **XFL** | Exit flight level. Level at which it leaves your area |
| **RFL** | Requested flight level. The cruise level of the flight plan |
| **HFL** | Holding flight level |
| **TaFL** | Target flight level. The highest level computed ahead of the flight, up to the boundary of the ATSU. It caps the exit level: a flight cannot leave your area above a level it never reaches |

## Label fields

| Term | Meaning |
|---|---|
| **C/S** | Callsign |
| **CNAV** | Next navigation point, or the direct in force |
| **XNAV** | Exit navigation point |
| **ENAV** | Entry navigation point |
| **NS** | Next sector. The position that will take the flight |
| **COPX** | Coordination point with the next sector |
| **ADEP** / **ADES** | Departure and destination aerodromes |
| **ATYP** | Aircraft type |
| **ASSR** | Assigned squawk |
| **GS** | Ground speed |
| **iFlx** | Inbound flux |
| **STAR** | Standard arrival route |
| **ARWY** | Arrival runway |
| **EAT** | Expected approach time |
| **ETA** | Estimated time of arrival |
| **SEQ**, **SEQi** | Sequence number in a holding stack |

## States and mnemonics

| Term | Meaning |
|---|---|
| **PREPA** | Flight destined to be controlled by you. Green |
| **RESP** | Flight you are controlling. White |
| **SURV** | No longer yours, still watched. Light grey |
| **AUTRE** | Of no interest a priori. Dim grey |
| **STLN** | Stolen. Another position force-assumed the flight |
| **SHRQ** | Frequency request outstanding |
| **LOST** | Local marking, your screen only |
| **REV** | A field was revised by someone else |
| **IDENT** | The pilot pressed the IDENT button |
| **CLAM** | Level deviation |
| **INTRU** | Penetration of an active segregated area |
| **STCA** | Short term conflict alert, on radar data |
| **TCT** | Conflict predicted on cleared trajectories |
| **EMRG**, **HJCK**, **RDOF**, **RVMC**, **SURT**, **ATTN** | Emergency squawks. See [States and colours](/5g-atm-doc/labels/states/) |
| **SAR**, **HEAD**, **FFR**, **MEDEVAC** | Mission types of state flights |

## Coordination

| Term | Meaning |
|---|---|
| **XCOOR** | Local note on the exit condition, agreed by telephone |
| **ECOOR** | Local note on the entry condition |
| **LOA** | Letter of agreement between two units |
| **Point session** | Pointing a flight out to another position |
| **SCH** | Radar control positions, `_APP` and `_CTR` |
| **DELEG** | Aerodrome positions, `_DEL`, `_GND`, `_TWR`, `_FSS` |

## Tools

| Term | Meaning |
|---|---|
| **QDM** | Bearing and distance between two objects |
| **SEP** | Separation between two aircraft |
| **VV** | Velocity vector |
| **DB** | Datablock. A stored situation on the Agenda |
| **Flight leg** | The route of a flight, drawn on the image |
| **Range rings** | Concentric circles placed anywhere on the image |
| **Track ring** | A ring of a chosen radius following one track |
| **CLEAN** | Wipe the analysis leftovers |
| **DYP** | The strip-like information window |
| **SFPL** | System flight plan |
| **APL** | Arrival planning |

## Datalink

| Term | Meaning |
|---|---|
| **CPDLC** | Controller-pilot datalink communication |
| **DLK** | The key that arms a datalink action. Mapped to the **D** key held |
| **Hoppie** | The ACARS network used for datalink on IVAO |
| **Station code** | The four-letter code pilots enter to log on to you |
| **WILCO** | The pilot accepts and will comply |
| **STANDBY**, **SBY** | The pilot has seen the message and will answer later |
| **UNABLE** | The pilot refuses |
| **RTV** | A dialogue that failed. Orange |
| **CORRUPTION** | An inconsistent exchange. Red |
| **RECLAIM** | Taking a flight back after a failed datalink transfer |
| **Controller late** | You left a pilot request unanswered too long |

## Configuration

| Term | Meaning |
|---|---|
| **PREPA mode** | The window where you choose your sector grouping |
| **Alias** | A centre or group of positions in `op_config.json` |
| **Resp** | A responsibility that can be opened inside an alias |
| **Subsector** | What a resp is made of |
| **VID** | Your IVAO member number |
| **ATIS** | The information line published to the network |
| **PTT** | Push to talk |
