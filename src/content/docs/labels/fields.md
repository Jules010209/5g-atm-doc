---
title: Label fields
description: Every field of the label, what it shows, and what happens when you click it.
---

Almost every field is **clickable**. The rule is always the same: **left click opens the
menu for that field**, middle click marks it, right click acknowledges or cancels.

## Line 0

| Field | Shows | Left click | Middle click | Right click |
|---|---|---|---|---|
| **Ground speed** | Speed in tens of knots, `32` = 320 kt | Speed menu. **Ctrl + click** sets an individual velocity vector instead | Marks the field | Cancels a failed datalink speed clearance |
| **Assigned speed** | The speed you cleared, knots or Mach | — | — | — |
| **Vertical speed** | Rate of climb or descent in hundreds of ft/min | — | — | — |
| **Aircraft type** | ICAO type, `A320` | — | — | — |
| **Sequence number** | The number you gave the flight in an arrival sequence. Pink for sequence A, blue for sequence B, on a black ground. The letter is never written: the colour is what says which sequence | — | — | Clears the number |
| **Acknowledgement box** | A tick box, extended label only | Toggles it | — | — |
| **`1000`** | Blue, squawk 2000 | — | — | — |
| **Telephone** | The letter of agreement names no level for the next ATSU, so the exit level has to be agreed by telephone | — | — | Acknowledges the display |
| **RVSM defect** | `noW`, `exW` or `unW` at the end of the line | — | — | — |

See [Sequencing arrivals](/5g-atm-doc/control/sequencing/) for the sequence number, and
[RVSM](#rvsm-equipment) below.

## Callsign line

| Field | Shows | Left click | Middle click | Right click |
|---|---|---|---|---|
| **Datalink dot** | The flight is in a CPDLC session with you | — | — | — |
| **Callsign** | The flight identification | Aircraft menu. **Ctrl + click** adds or removes the flight from the analysis group | — | Acknowledges a not-seen flight |
| **Conflict group** | The analysis group symbol | — | Cycles the group | Removes from the group |
| **NS**, next sector | The receiving position in short form — the last two letters of the first segment of its callsign, so `LFFF_W_CTR` reads `FF`. Shown on the base label too, next to the callsign. `--` when none is known | **Ctrl + click** opens the manual transfer menu. Hold the **D** key and click to transfer by datalink | Marks the field | **Ctrl + right click** clears the next sector. On a failed datalink transfer, opens the cancel menu |
| **TaFL** | Target flight level, the highest level Coflight computes ahead of the flight. Shown as the mnemonic `TAFL` when no level is known ahead | Profile menu, to change the cruising level | — | — |

## Altitude line

| Field | Shows | Left click | Middle click | Right click |
|---|---|---|---|---|
| **AFL**, actual level | Current level, to the nearest 100 ft. Read from the flight's pressure altitude, so it is a flight level whatever the local QNH | — | — | — |
| **Vertical trend** | An arrow: climbing, descending, level | — | — | — |
| **CFL**, cleared level | The level you cleared, `APP` for an approach clearance | Level menu | Hold: contextual level filter. Short press: marks the field | Cancels a failed datalink level clearance |
| **CNAV** | The next navigation point, or the direct you cleared. A heading reads `H258`; the field is then locked to the heading menu | Waypoint menu | Marks the field | — |
| **HFL**, holding level | The level you set for a hold, `▷34`. Selected label only — mark it to bring it onto the base label | HFL menu | Marks the field, and brings it onto the base label | Acknowledges a change made by another position |

## Exit level line

| Field | Shows | Left click | Middle click | Right click |
|---|---|---|---|---|
| **XFL**, exit level | `x310`, the level at which the flight leaves your area | Exit level menu | Hold: exit level filter. Short press: marks the field | — |
| **Coordination symbol** | A note attached to the entry or exit condition | Opens the coordination menu | — | — |

The exit level is either the one you set by hand, or the one derived automatically from
the letters of agreement. The label makes no distinction between the two.

## Destination line

| Field | Shows | Left click | Middle click | Right click |
|---|---|---|---|---|
| **COPX** | The coordination point with the next sector | Coordination menu | — | — |
| **ADES** | Destination aerodrome. Hovering shows the STAR name | — | Hold: destination filter. Short press: marks the field | — |
| **STAR**, **ARWY** | Arrival procedure and runway, deployed panel | Allocation menu | — | — |

## Datalink request line

| Field | Shows | Left click | Right click |
|---|---|---|---|
| **REQ …** | A pilot request in blue, `REQ F300`, `DCT RUBAS` | Opens the quick response menu | When orange, acknowledges the late state |
| **Counter** | Number of pending requests, from 2 up | Opens the Pending Messages window | — |

See [Receiving requests](/5g-atm-doc/cpdlc/downlinks/).

## Mnemonics on line 0

| Mnemonic | Meaning |
|---|---|
| `EMRG` | Squawk 7700, general emergency |
| `HJCK` | Squawk 7500, unlawful interference |
| `RDOF` | Squawk 7600, radio failure |
| `RVMC` | Squawk 7601 |
| `SURT` | Squawk 7400 |
| `ATTN` | Squawk 5677 |
| `STCA` | Short term conflict alert |
| `TCT` | Conflict predicted on cleared trajectories |
| `CLAM` | Level deviation |
| `INTRU` | Penetration of an active segregated area |
| `STLN` | The flight was force-assumed by another position |
| `SHRQ` | A frequency request is outstanding |
| `LOST` | You marked the flight as lost. Local to your screen only |
| `IDENT` | The pilot pressed IDENT |
| `noW` | The flight is not RVSM equipped |
| `exW` | The flight is exempt from RVSM |
| `unW` | Its RVSM equipment cannot be determined from the flight plan |
| `SAR`, `HEAD`, `FFR`, `MEDEVAC` | Mission type of a state flight |

Emergency mnemonics are red. A flight carrying one is displayed whatever your filters are
set to.

## RVSM equipment

RVSM airspace runs from FL290 to FL410. A flight's equipment is read from its flight
plan: `W` in field 10a means equipped, `STS/NONRVSM` in field 18 means exempt. A flight
plan that carries no equipment field at all leaves the state unknown.

| Mnemonic | Equipment |
|---|---|
| none | Equipped, or below the RVSM band |
| `noW` | Not equipped |
| `exW` | Exempt |
| `unW` | Unknown |

The mnemonic sits at the end of line 0. It appears on the extended label whenever the
state is not "equipped", and **on the base label as well** when it becomes an alert: a
flight that is not equipped, and is either inside the RVSM band or cleared into it.

The state read from the flight plan can be wrong, or the flight plan can be silent. The
**deployed panel** carries the field: open it and set the equipment by hand. Your choice
then wins over the flight plan everywhere, including the alert.
