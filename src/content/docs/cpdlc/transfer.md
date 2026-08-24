---
title: Datalink transfer
description: Handing a flight to the next unit over CPDLC, with the D key.
---

A flight in a datalink session can be transferred **by datalink** rather than by voice: the
aircraft is told which frequency to contact, and its CPDLC session moves to the next unit.

## The DLK key

Real 4-Flight positions have a physical **DLK** key on the keyboard. There is no such key on
a standard keyboard, so g-atm maps it to the **D key held down**.

```
Hold D  +  left click on the NS field  →  datalink transfer
```

Hold **D** and the NS field of every eligible flight is **outlined with a dashed frame**.
That is your confirmation that the gesture is armed and that this flight can take it.

Release **D** and the outlines disappear. Nothing is sent until you click.

Requiring a key held is deliberate: it makes a datalink transfer impossible to trigger by
accident, and it keeps it visibly different from a voice transfer.

## What is sent

One click sends two messages, in order:

1. **CONTACT** — the frequency and the name of the next unit.
2. **HANDOVER** — the transfer of the CPDLC session itself to that unit.

The pilot therefore gets the frequency change and the datalink handover together, which is
what real traffic looks like.

## Requirements

The gesture does nothing unless all of these are true:

- the flight is **in a datalink session** with your station;
- the flight is **assumed by you**;
- a **next sector is set** on the label;
- no transfer dialogue is already open for that flight.

If the NS field does not get a dashed outline while you hold **D**, one of these is missing.

## Reading the state

Once sent, the NS field is **framed**, with the same colours as any other datalink
dialogue.

| Colour | State | What to do |
|---|---|---|
| **White** | Sent | Wait for the pilot |
| **Yellow** | Standby | The pilot has seen it |
| **Orange** | Refused or timed out | **Reclaim the flight** |
| **Red** | Corruption | Same |

## RECLAIM

An **orange** or **red** transfer box means the flight did not go. It is still yours, and it
is still on your frequency.

**Right-click the NS field** to open the cancel menu and clear the dialogue, then transfer
the flight **by voice**. Do not assume the pilot changed frequency.

## After a successful transfer

The datalink session moves to the receiving unit and the **dot disappears** from your
label. The flight is no longer in session with you, so datalink clearances are no longer
available on it — which is correct, it is not yours any more.

The network transfer itself — the offer the next controller accepts — is a separate action:
**Transfer Next** in the aircraft menu. Datalink transfer moves the *datalink session*, the
network transfer moves *responsibility*. In practice you do both.

## Without datalink

A flight with no dot has no datalink session and cannot be transferred this way. Use
**Transfer Next**, or **Manual Trf…** for a position that is not the planned next sector.
See [Assume, release, transfer](/5g-atm-doc/control/assume-transfer/).
