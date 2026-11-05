---
title: Glossary
description: The 4-Flight and g-atm terms, abbreviations and mnemonics used in the interface and in this guide.
---

The terms of the interface and of this guide, grouped by subject. Mnemonics are written
as the screen writes them.

## Position and configuration

| Term | Meaning |
|---|---|
| **4F** | 4-Flight, the system of the French en-route centres that g-atm reproduces. |
| **ATSU** | A control centre. |
| **CWP** | Controller Working Position: your screen. |
| **Suite** | The positions working the same sectors (radar and planner controller). |
| **OE** | The field in the centre of the Global Menu showing your responsibility and role, for example `RAW/TACTICAL`. Click it to open OP CONF CHG PREP. |
| **OP CONF CHG PREP** | The window where you choose your responsibility and role (PREPA mode). |
| **FREE** | A position with no responsibility chosen yet. The OE field reads `------/------`. |
| **Resp** | A responsibility: a sector or a group of sectors you can hold, defined in `op_config.json`. |
| **Alias** | A centre or grouping of resps in `op_config.json`, for example `LFMM`. |
| **Role** | Your role at the position, for example `TACTICAL`. |
| **CCO** | Change of operational configuration: splitting or grouping sectors. |
| **Comm Resp**, **CR** | The sector responsible for communication with a flight. |
| **AoR**, **AoI** | Area of responsibility; area of interest around it. |
| **Standard Configuration** | The saved layout and display settings of a position, recalled with Conf. STD. |
| **Local Settings** | The site parameters you choose for your computer. See [Local Settings](/5g-atm-doc/reference/local-settings/). |

## Flight states

| Term | Meaning |
|---|---|
| **PREPA** | A flight coming to you. Green. *Coordinated* once its entry conditions are known. |
| **Assumable** | A PREPA flight transferred to you: green label, white callsign. |
| **RESP** | A flight you control. White. |
| **Shot** (shooté) | A flight you transferred: white label, grey callsign, until the next sector assumes it. |
| **SURV** | No longer yours, still worth watching. Light grey. |
| **AUTRE** | Of no interest a priori. Dim grey. |
| **STLN** | Stolen: another position took the flight with Force Assume. |
| **Seen / Not Seen** | A flight you have, or have not yet, acknowledged by right click. |
| **REV** | A field changed by someone else or by the system, shown until you acknowledge it. |
| **NSRL** | Not Seen Rev List: the list of flights not seen or in REV. |
| **FPASD** | A flight plan shown without its radar track. |
| **LKP** | Last Known Position: orange marker of a lost correlated track. |
| **LT** | Lost Track: grey marker of a lost uncorrelated track. |
| **LOST** | A flight marked LOST by a position (Callsign Menu → Lost), shown to the g-atm positions of the centre. |

## Levels

| Term | Meaning |
|---|---|
| **AFL** | Actual flight level. |
| **CFL** | Cleared flight level. |
| **RFL** | Requested (filed) flight level. Cannot be changed. |
| **ECL** | The en-route cruise level the profile aims for at each point. Can be changed. |
| **TaFL** | Target flight level: the highest ECL ahead of the flight, up to the exit of the centre. |
| **EFL** | Entry flight level into your sector. |
| **XFL** | Exit flight level from your sector. |
| **ELO** | Estimated level at a transition between two sectors. |
| **SFL** | Level selected by the pilot, from Mode S (not available on IVAO). |
| **HFL** | Holding flight level. |
| **E.DESC** | Emergency descent, set from the CFL menu. |
| **EXPEDITE** | Expedite climb or descent, set from the CFL menu. |

## Label fields

| Term | Meaning |
|---|---|
| **C/S** | Callsign. |
| **CNAV** | Current navigation point: the next point, or the direct in force. |
| **ENAV** / **XNAV** | Entry / exit navigation point of your sector. |
| **NS** | Next sector. |
| **iNS** | Indicator of crossed or skipped sectors (called NEXT in the older booklet). Its tooltip names them. |
| **COPX** | Coordination point with the next sector. |
| **Xdata** / **Edata** | The exit / entry field of the label: XCOOR or ECOOR if set, otherwise the point of the letter of agreement (**xPREF**), otherwise XNAV / ENAV. |
| **iFlux** | The exit flow of a flight at centre level, coded in a few letters; the ADES when no rule applies. |
| **ADEP** / **ADES** | Departure / destination aerodrome. |
| **ATYP** | Aircraft type. |
| **ASSR** | Assigned SSR code. |
| **GS** | Ground speed. |
| **AHDG** | Assigned heading. |
| **ASP** | Assigned speed. |
| **VRCD** | Assigned vertical rate (climb or descent). |
| **AMID** | Menu to give several clearances at once. |
| **ARWY** | Arrival runway. |
| **STAR** | Standard arrival route. **Short STAR**: a STAR starting at one of its points (Athis rule). |
| **NRAC** | Number of aircraft of a patrol. |
| **STAY** | A flight staying in an area (training, survey…) before going on. |

## Markings and notes

| Term | Meaning |
|---|---|
| **Suite Highlight** | A field marked with a rust background, seen by your suite. Middle click. |
| **Local Highlight** | A field marked in pink, your screen only. Ctrl + middle click. |
| **Warning** | A coloured symbol on a track (blue, orange, yellow). |
| **Track Ring** | A ring of a chosen radius that follows one track. |
| **Icoop** | Cooperation indicator. Acknowledging it acknowledges the flight. |
| **iCoor** | A free note on a flight, shared with your suite (envelope icon). |
| **REL_ALL**, **REL_F**, **REL_T** | Preset iCoor texts for a released flight: released altogether, in level (REL_F), in heading or speed (REL_T). |
| **MIL_OK**, **MIL_N3**, **EVOLUTIF**, **xSPD** | Other preset iCoor texts. |
| **XCOOR** / **ECOOR** | Exit / entry point or heading agreed by telephone, noted on the label. |
| **Notepad** | A sticky note on the picture. |

## Coordination and frequency

| Term | Meaning |
|---|---|
| **Assume** | Take a flight transferred to you. |
| **Shoot** | Transfer a flight to the next sector. **Transfer Next** in the Callsign Menu. |
| **Man Trf** | Manual transfer to any position. |
| **SCH** / **DELEG** | Tabs of the Manual Transfer menu: positions on the flight's planned route / all the others. |
| **Force Assume** | Take a flight that was not transferred to you. |
| **Force ACT** | Force a flight to be served to the next sector. |
| **SKIP** | Hand the management of a PREPA coordinated flight back to the previous sector. |
| **SHRQ** | Shoot request: you ask the position holding a flight to transfer it to you. |
| **Reclaim** | Take back a flight you shot, before it is assumed. |
| **POINT** | Point a flight out to another position. **PS**: a point in progress. |
| **NEGO** | Negotiate the exit or entry level with the next or previous sector. |
| **FL?** | Ask another position for a level. |
| **LOA** | Letter of agreement between two sectors or units. |

## Alerts

| Term | Meaning |
|---|---|
| **STCA** | Short-term conflict alert, on radar positions. |
| **TCT** | Conflict predicted on the cleared trajectories. |
| **APW** | Area Proximity Warning: a flight in, or about to enter, an active military area or TSA. |
| **CLAM** | The flight leaves its cleared level. |
| **DSAM** | The pilot's selected level differs from the CFL. |
| **INTRU** | A flight in your airspace, or about to enter it, for which your sector is not served. |
| **HCT** | A flight entering a holding volume. |
| **CODE**, **@FID**, **DUPE** | Correlation alerts: wrong code, wrong flight identity, two tracks on the same code. |
| **EMRG**, **HJCK**, **RDOF**, **RVMC**, **SURT**, **ATTN** | Mnemonics of the special SSR codes 7700, 7500, 7600, 7601, 7400 and 5677. |
| **Window Framing** | A window hiding a label in alert gets a coloured frame. |

## Tools

| Term | Meaning |
|---|---|
| **Group** | Up to eight flights selected for analysis. |
| **QDM** | Bearing and distance between two objects. |
| **SEP** | Minimum separation between two flights on their routes. |
| **CPA** | Closest point of approach. |
| **VV** | Velocity (speed) vector. |
| **Range Rings** | Concentric circles placed on the picture. |
| **Flight Leg** | The route of a flight drawn on the picture. |
| **Agenda**, **DB** | The timeline window, and the Datablocks (stored situations) on it. |
| **DyP Info** | The window showing all the data of a flight (from DYnamic Presentation). |
| **CLEAN** | Clear the analysis leftovers. |
| **FIND** | Find a flight by callsign or SSR code, ADEP and ADES. |
| **System Maps** | The window to choose the maps shown. |
| **SFPL**, **APL** | System flight plan; reduced plan created for a track with no plan. |

## Arrivals

| Term | Meaning |
|---|---|
| **SEQ** | Sequence number of an arrival. |
| **EAT** | Expected approach time. |
| **IAF** | Initial approach fix. |
| **STAMAN** | Stack Manager: the window that manages a holding stack. |
| **HVI** | Holding volume. |

## Datalink

| Term | Meaning |
|---|---|
| **CPDLC** | Controller-pilot datalink communication. |
| **DLK** | The button, and the CPDLC key (`Alt`), that send the next clearance by datalink. |
| **Hoppie** | The ACARS network used for datalink on IVAO. |
| **Logon code** | Your personal Hoppie code (secret). |
| **Station** | The four-letter code pilots log on to, for example `LFM1`. |
| **WILCO**, **UNABLE**, **STANDBY** | Pilot answers: will comply, cannot comply, answer later. |
| **RTV** | A dialogue that failed (timeout). |
| **CORRUPTION** | An inconsistent datalink exchange. |
| **PILOT LATE** / **Controller late** | An answer awaited too long from the pilot / from you. |
| **Check Stuck Micro** | Message to all datalink flights about a stuck transmitter. |

## g-atm and IVAO

| Term | Meaning |
|---|---|
| **VID** | Your IVAO member number. |
| **Access list** | The VIDs allowed to open an IVAO session with g-atm. |
| **ATIS** | The information line your position publishes. |
| **PTT** | Push to talk. |
| **Peer** | Another g-atm position. Coordination and suite data are shared between peers only. |
| **World server** | A g-atm training server with robot positions. See [Joining a simulation](/5g-atm-doc/simulation/joining/). |
| **eAIP sectors** | The real French sectors, used on a world server. |
| **OLDI**, **CoFlight** | Real-world links and flight data processing that IVAO does not have. |
