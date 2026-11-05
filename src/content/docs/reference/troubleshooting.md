---
title: Troubleshooting
description: The problems people run into with g-atm, what causes them, and what to do.
---

The common problems, by area. For voice and datalink, the dedicated pages go further:
[TeamSpeak](/5g-atm-doc/voice/teamspeak/#when-something-is-wrong) and [CPDLC
troubleshooting](/5g-atm-doc/cpdlc/troubleshooting/).

## Connection

**`invalid credentials` under the Connection button.**
A field of the IVAO Connection window is empty: Host, Port, Callsign, Name, VID or
Password all must be filled.

**`VID … is not authorized to use this application`.**
Your VID is not on g-atm's access list. Ask the maintainer to add it. The list is read
again at each connection: once you are added, press Connection again, no restart needed.

**`timeout`.**
The server did not answer within eight seconds. Check the Host and Port, your network
connection, and that the server is up.

**My VID, password or callsign are gone at the next launch.**
The IVAO Connection window keeps what you type for the session only (except Voice host
and Voice port). Write the values in `config.json` to keep them. See [Account
settings](/5g-atm-doc/start/configuration/).

**All my settings are back to their defaults.**
`config.json` could not be read. Look for a missing quote or a trailing comma.

**I disconnected; can I reconnect?**
Yes: press **Connection** again. No restart needed.

## Traffic and picture

**The picture has no map.**
No sector file is loaded. Open **Tools → External Applications → Sector File** and tick
one; if the list says *No .isc files*, install or download a package first. With several
files and none chosen, g-atm loads none. See [Sector
files](/5g-atm-doc/start/configuration/#sector-files).

**Download fails with HTTP 401 or 403.**
Downloading a sector package needs your IVAO API key in `config.json`. A 404 means the
sector ID does not exist.

**I see no traffic.**
In order: are you connected; is the level band of the Filter Area wide enough; is the
right sector file loaded? The network sends you traffic around the centre of the loaded
sector file.

**I see far too much traffic.**
Narrow the level band, and check that **See ALL** (`F10`) is off.

**A flight I need has disappeared.**
Almost always the level band, or the VFR (`F9`) and MIL (`F8`) filters. Flights that
concern you are never hidden; a flight not yet yours and outside the band is. Widen the
band, or mark one of its fields: a marked flight is forced visible.

**The picture is full of rings, measures and routes.**
Press **CLEAN** (`End`), or use **Radar Menu → Clean**.

**Labels overlap.**
Tick **Track Label Anti-Overlap** in the Radar Menu, or drag the labels.

**I announce 122.800.**
No position is validated in OP CONF CHG PREP. Validate yours: the frequency changes at
once, without reconnecting.

## OP CONF CHG PREP

**The lists are empty, or the window says `op_config.json introuvable`.**
There is no `op_config.json` in the data folder. Get your centre's file and put it there.
On a Host that is not an IVAO server, g-atm reads `op_config_simu.json` first, if it
exists. See [OP CONF and PREPA mode](/5g-atm-doc/cco/op-conf/).

**OK stays greyed.**
Hover it: the tooltip says what is missing (a resp or an alias, and a role).

**An error in red under the lists.**
A name in `op_config.json` is neither a resp nor a sector of the sector file, or two
resps refer to each other. See [OP CONF and PREPA mode](/5g-atm-doc/cco/op-conf/).

## Control

**Transfer Next does nothing.**
Transfer Next shoots to the next sector of the flight's profile, and only if that sector
is served. When it is not, **left click** the NS field and pick the position in the
Manual Transfer menu. Transfer Next appears only on flights you control.

**The position I want is not in the Manual Transfer menu.**
The menu has two tabs: **SCH** for the positions on the flight's planned route, **DELEG**
for the others. If neither lists it, it is not online.

**A flight shows STLN.**
Another position took it with Force Assume. It is no longer yours.

**The SHRQ mnemonic will not go away.**
It goes from every position when the flight is assumed, and from the position that
received the request when it shoots the flight. **Right click** it to hide it on your
screen; it stays in the selected label.

**My POINT, NEGO or iCoor does not reach the other controller.**
These work between g-atm positions only. A controller on another client does not
receive them.

**DSAM never shows.**
It needs the level selected by the pilot, which IVAO does not carry. It works only on a
[world server](/5g-atm-doc/simulation/joining/).

## Windows

**A window opens where I did not expect it.**
A window whose saved place is on a screen that is no longer there opens at its default
place. Move it, then save your standard if you want to keep it there.

**The Modify SFPL window does not close when I click elsewhere.**
That is on purpose, so that a long edit is not lost: close it with its cross.

**I want my default layout back.**
Close g-atm and delete `standard_config.json` from the data folder. You lose your window
layout and your [Local Settings](/5g-atm-doc/reference/local-settings/); your position
standards come back from `standards.json`.

## Updates

**g-atm restarted on its own at launch.**
An update was installed: the *Updating* banner showed it. Nothing is lost.

**The update did not come.**
g-atm checks at launch and starts anyway if the update server cannot be reached. Start
it again later, or install the new version from the
[Releases page](https://github.com/Jules010209/5g-atm/releases).

## A menu entry does nothing

Some entries are drawn because the booklet shows them, with nothing behind them (OPSUP,
Mark LAT-LONG, Find LAT-LONG…). The list and the reasons are in [What g-atm does not
do](/5g-atm-doc/reference/not-implemented/).
