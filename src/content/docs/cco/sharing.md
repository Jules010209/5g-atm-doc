---
title: Sharing between positions
description: What g-atm positions of the same centre show each other beyond the IVAO network, what stays on your own position, and what a controller on another client does not see.
---

On the real 4F, positions are linked by the system: the radar controller and the planner
of a sector see the same markings, and every position of the centre sees the same hold or
LOST mention. IVAO carries none of this. g-atm positions of the same centre exchange it
between themselves, in private messages that other clients ignore.

## Who shares with whom

- **Same centre**: two positions whose callsigns have the same prefix before the first `_`
  (`LFMM_W_CTR` and `LFMM_E_CTR`). g-atm introduces itself to each controller position of
  the centre that appears, and again whenever your own position changes.
- **g-atm only**: nothing is sent to a position that has not answered as g-atm. A controller
  on another client receives one request that his client ignores, and sees none of what
  follows. Observers and positions of other centres are not listened to.
- **Your suite**: the positions that hold the **same responsibility** as you (the first half
  of the OE field, see [OP CONF and PREPA mode](/5g-atm-doc/cco/op-conf/)). Typically the radar
  controller and the planner of a sector.

There is nothing to turn on: sharing starts by itself once both positions are connected.
What is shared inside a suite needs both positions to hold the same responsibility.

When a position joins, or comes back after a cut, it receives everything currently shared:
it sees what the others see, not only what changes after it arrives. When two positions
change the same thing, the last change wins, on every position.

## Inside your suite

A flight assumed by another position of your suite is **RESP** on your picture: its state,
colour and REVs are those of a flight you hold. What the network allows only to the callsign
that assumed it (assume, transfer, clearances) stays with that position.

The positions of your suite also share:

| Object | See |
|---|---|
| Icoop acknowledged | [iCoop, iCoor, Xcoor, Ecoor, Notepad](/5g-atm-doc/markings/notes/) |
| Suite-Highlight (the Local Highlight stays yours) | [Highlights, warnings, Track Ring](/5g-atm-doc/markings/highlights/) |
| Warning (moon, diamond, star) | [Highlights, warnings, Track Ring](/5g-atm-doc/markings/highlights/) |
| iCoor: the note a planner leaves for the radar controller, and back | [iCoop, iCoor, Xcoor, Ecoor, Notepad](/5g-atm-doc/markings/notes/) |
| Datablocks marked `S` (suite) appear in the other Agenda | [Agenda and Datablocks](/5g-atm-doc/conflicts/agenda/) |
| Prepa NS and masked NS | [Manual transfer, NS, DELEG](/5g-atm-doc/frequency/transfer/) |
| Sequence number | [Sequencing arrivals](/5g-atm-doc/traffic/sequencing/) |

A change made by your partner raises a REV on your position, as the booklet describes; the
position that made it gets none.

## Across the centre

Every g-atm position of the centre shares:

| Object | What the others see |
|---|---|
| LOST | The LOST mention set by any position (see [SKIP, SHRQ, Reclaim, LOST, Comm Resp](/5g-atm-doc/frequency/skip-shrq/)) |
| Clearance extras | Emergency descent, Expedite, second point of a double direct, minimum or maximum speed and rate |
| OPText | The operational text of the flight |
| APL | An abbreviated plan entered at a position |
| Hold | Point, HFL, EAT, clearance passed, cancellation. An HFL changed elsewhere arrives as a REV (see [Holding](/5g-atm-doc/traffic/holds/)) |
| Comm Resp | The Comm Resp of a flight held by a position |
| Negotiation in progress | Sectors not involved see the padlock mention (see [NEGO and FL?](/5g-atm-doc/coordination/nego/)) |
| Force ACT | The next sector sees the flight coordinated (see [Next sector and Force ACT](/5g-atm-doc/coordination/next-sector/)) |

## What stays on your position

- Local Highlight, Ecoor and Xcoor, prepared data.
- Locked SEP measurements.
- Levels reserved in a stack, your acknowledgement of an EAT, the entry of a flight into a
  hold volume: each position sees these for itself.
- Seen and Not Seen.
- CPDLC dialogues: a dialogue belongs to the station that opened it and does not follow the
  flight to another position.

## At a configuration change

When responsibilities move between suites (a split or a grouping), the position that gives
sectors copies some of its objects to the position that receives them. The copies replace
what the receiver had.

| Copied to the receiver | Not copied |
|---|---|
| Datablocks, iCoor, warnings, Suite-Highlights, Prepa NS, masked NS, sequence numbers | Local Highlight, Ecoor and Xcoor, acknowledged Icoop, prepared data, locked SEP |

Flights whose Comm Resp is a responsibility the giver no longer holds are transferred to the
g-atm radar controller who now holds it: see
[Splitting, grouping, roles](/5g-atm-doc/cco/regrouping/#what-happens-to-the-flights).

## What a controller on another client sees

Only what IVAO carries: assumes, transfers, the flight plan and the usual private messages.
He does not see your suite markings, your iCoor, your sequence numbers or your holds, and
nothing is copied to him at a configuration change. Coordinate with him by voice or text.

---

*4-Flight booklet 3.0: §14.1.c.i (p. 183–184).*
