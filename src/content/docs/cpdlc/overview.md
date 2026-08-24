---
title: CPDLC overview
description: What datalink gives you, how a session starts, and what the dot on a label means.
---

CPDLC lets you exchange clearances and requests with a pilot **in writing**, without using
the frequency. On IVAO it runs over the **Hoppie ACARS network**, which is what pilot
add-ons use for datalink.

## What you can do with it

| | |
|---|---|
| **Receive logons** | A pilot enters your station code in the aircraft and requests a connection |
| **Send clearances** | Cleared level, speed, and direct to a waypoint |
| **Receive requests** | Level and direct requests, answered from a two-click menu |
| **Transfer** | Hand a flight to the next sector by datalink instead of by voice |
| **Check Stuck Micro** | Ask every connected flight to check for a stuck microphone |

## How a session starts

1. Your station is **online** and its code is published in your ATIS as
   `CPDLC ID LFM1`.
2. The pilot enters that code in the aircraft and sends a logon request.
3. g-atm accepts it, and the aircraft receives `LOGON ACCEPTED` followed by the name of
   your unit.
4. A **dot appears in front of the callsign** on the label.

A logon is **refused** when the aircraft is not in the traffic you can see. There is no
point holding a datalink session with a flight that is not on the network.

## The dot

The dot in front of the callsign means exactly one thing: **this flight is in a CPDLC
session with your station**. No dot, no datalink — every datalink function is greyed for
that flight.

## How a session ends

| Cause | What happens |
|---|---|
| You choose **CPDLC Logoff** in the aircraft menu | The aircraft receives an end-of-session message and a logoff |
| You **transfer the flight by datalink** | The session moves to the next unit |
| You take the station **offline** | Every session is terminated cleanly, one by one |
| You **disconnect from the network** | Same |
| The flight leaves the traffic feed | The session is dropped after a few polling cycles |

The application never leaves a session dangling. Every path out sends the aircraft a proper
logoff.

## Things worth knowing

**Messages are not instant.** The network is polled every 45 to 75 seconds, deliberately
irregular, as required by the Hoppie service. A pilot request can therefore take up to a
minute to appear on your screen, and your clearance can take as long to reach the aircraft.
This is normal, and it is why datalink is used for planning, not for anything urgent.

**One station code at a time.** The network only allows one controller per code. If yours
is already taken, g-atm tries the fallback codes you configured. See [Setting up
datalink](/5g-atm-doc/cpdlc/setup/).

**Datalink never replaces the frequency.** If a dialogue fails or times out, the label
tells you, and the answer is to pick up the microphone.

## Where to go next

| | |
|---|---|
| Get datalink working | [Setting up datalink](/5g-atm-doc/cpdlc/setup/) |
| Send a level, a speed, a direct | [Sending clearances](/5g-atm-doc/cpdlc/uplinks/) |
| Answer a pilot request | [Receiving requests](/5g-atm-doc/cpdlc/downlinks/) |
| Hand a flight over | [Datalink transfer](/5g-atm-doc/cpdlc/transfer/) |
