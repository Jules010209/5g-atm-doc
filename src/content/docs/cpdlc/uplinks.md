---
title: Sending clearances
description: Issuing a level, a speed or a direct by datalink, and reading the state of the dialogue.
---

## The DLK button

Three menus can send their value by datalink: **level**, **speed** and **direct**. Each has
a **DLK** button at the bottom.

1. **Click DLK.** It turns blue: datalink is armed.
2. **Click the value.** The clearance goes out over CPDLC instead of being applied
   silently.

DLK is greyed when the clearance cannot be sent. Hover it and the tooltip says why:

| Reason | Fix |
|---|---|
| The flight is not in a datalink session | Nothing to do, use the frequency |
| The flight is not assumed by you | Assume it first |
| A dialogue of that kind is already open | Wait for the current one to close |

That last rule matters: **one dialogue per kind of clearance at a time**. You cannot have
two level clearances outstanding on the same flight.

## Reading the box

Once sent, the field carrying the clearance is **framed**, and the frame's colour is the
state of the dialogue. The value shown inside the box is **what you sent**, not what the
aircraft is doing.

| Colour | State | Meaning |
|---|---|---|
| **White** | Sent | Waiting for the pilot's answer |
| **Yellow** | Standby | The pilot answered `STANDBY`. They have seen it and will answer later |
| **Orange** | Unable | The pilot refused, or the dialogue timed out. **Your action is required** |
| **Red** | Corruption | The exchange is inconsistent. Treat it as failed |

Each kind of clearance frames its own field:

| Clearance | Field framed |
|---|---|
| Cleared level | CFL |
| Speed | Ground speed |
| Direct | CNAV |

So you can see at a glance which clearance is in which state, on the label itself.

## When it succeeds

The pilot answers `WILCO`, the box disappears and the clearance is applied to the flight
exactly as if you had issued it normally. There is nothing to acknowledge.

## When it fails

An **orange** or **red** box needs you.

**Right-click the framed field.** A cancel menu opens, and the dialogue is cleared from
your screen. Then **go back to voice**: the clearance was not accepted, and the aircraft is
still doing what it was doing before.

The same gesture works on all three fields, and on the next sector field for a failed
transfer.

## Timeouts

A dialogue that gets no answer within about two minutes turns **orange** on its own. The
message may never have reached the aircraft, or the pilot may have ignored it. Either way,
cancel it and use the frequency.

## Check Stuck Micro

**Tools → CPDLC → Check Stuck Micro** sends the stuck microphone message to **every flight
currently in a datalink session** with your station.

Use it when a carrier is blocking the frequency: the flights that can read datalink get the
message even though nobody can talk.

A dialogue box reports what happened. When no flight is in session it says so plainly
rather than pretending to have sent something.

The entry is greyed when the station is offline.

## Ending a session

**CPDLC Logoff** in the aircraft menu ends the session with that flight: the aircraft
receives an end-of-session message followed by a logoff, and the dot disappears from the
label.

The entry is greyed when the flight has no session with you.
