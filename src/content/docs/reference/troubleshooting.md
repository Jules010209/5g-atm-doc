---
title: Troubleshooting
description: The problems people actually run into, and what to do about them.
---

## Connection

**Connect fails immediately with `invalid credentials`.**
A required field is empty. Check callsign, VID, password and host in `config.json` or in the
Connect menu.

**Connect times out.**
Wrong world server, no network access, or a missing `software_key` in `config.json`.

**I disconnected and now I cannot reconnect.**
Click **CONNECT** again in the menu bar. A disconnect followed by a connect works within the
same session; you do not need to restart the application.

**My settings are back to defaults.**
`config.json` could not be parsed. Look for a trailing comma or a missing quote, and check
that every string is in double quotes.

## The picture

**I see no traffic at all.**
In order: are you connected, is your flight level window wide enough, and is your position
in the right place? The announced `latitude` and `longitude` in `config.json` decide where
your position sits and therefore what the network sends you.

**I see far too much traffic.**
Narrow the flight level window. That is the primary tool. Then check that SEE ALL is off.

**A flight I need has disappeared.**
Almost certainly the level window. Flights that concern you are never hidden — but a flight
that is not yet yours and is outside your band will be. Widen the band, or mark one of its
fields, which forces it visible.

**The screen is full of rings, routes and measurements.**
**Radar menu → Clean → RR-Flight Leg / Lost Tracks.**

**Labels overlap and I cannot read them.**
Turn on **Track Label Anti-Overlap** in the Radar menu, or drag the labels by hand.

## PREPA and sectors

**`op_config.json introuvable`.**
The file does not exist. Create it in the data folder. See [Operational
configuration](/5g-atm-doc/start/op-config/).

**`Secteur «X» inconnu`.**
The name is neither a resp of the alias nor a sector known to the map data. Check the
spelling.

**OK is greyed in the PREPA window.**
You have not selected both a responsibility — or an alias — and a role. Hover the button:
the tooltip says what is missing.

**My announced frequency is wrong.**
It comes from the resp you validated in PREPA, not from `config.json`. Validate the right
one; the change is applied immediately, without reconnecting.

## Control

**Transfer Next does nothing.**
No next sector is set. **Ctrl + left click** the NS field and choose the position.

**I cannot find the position I want to transfer to.**
The manual transfer menu shows one family at a time. Switch between **SCH** and **DELEG**
at the top. If both are empty, no position of that kind is online.

**A flight shows STLN.**
Another controller force-assumed it. It is no longer yours. Hover the mnemonic to see who
took it.

**The SHRQ mnemonic will not go away.**
It clears only when the flight is assumed by you **and** reports your position's frequency.
There is no timeout. Right-click it to hide it locally.

## Voice

**Nobody hears me.**
Check the PTT key is captured, that the level meter moves when you speak, and that the right
input device is selected. Use **Mic test** to hear yourself.

**Voice never connects.**
Check the `teamspeak host` in the Connect menu. Observer positions, `_OBS`, do not get a
channel created.

**PTT does not work when another window is focused.**
It is a global shortcut, so it should. If it does not, another application has taken the
same key. Set a different one in the TeamSpeak panel.

## Datalink

See the dedicated page: [CPDLC
troubleshooting](/5g-atm-doc/cpdlc/troubleshooting/).

The single most common cause of "nothing is happening" is the polling interval: the network
is polled every 45 to 75 seconds, and that cannot be shortened.

## Windows

**A list window has vanished.**
It may be on a monitor you no longer have. Delete `standard_config.json` to reset every
window to its default place.

**A window will not close.**
The Modify SFPL window closes with its **×** only, on purpose, so a long edit is never lost
by a stray click.

## When a menu entry does nothing

Check whether it is **greyed**. A number of entries exist for fidelity with 4-Flight but are
not implemented. The full list is in [What is
g-atm](/5g-atm-doc/start/overview/#inactive-functions).
