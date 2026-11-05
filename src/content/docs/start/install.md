---
title: Install and update
description: What you need, which installer to take, what happens at first launch, and how g-atm updates itself.
---

g-atm installs like any desktop application. Once installed, it keeps itself up to
date: you install it once.

## What you need

| | |
|---|---|
| Computer | Windows 10 or 11, macOS, or Linux, 64-bit |
| IVAO account | A VID with an ATC rating for the position you open, and a VID on g-atm's access list |
| Network | Access to the IVAO servers, the IVAO TeamSpeak servers and the update server |
| Audio | A headset with a microphone |
| Optional | A Hoppie logon code, for [CPDLC](/5g-atm-doc/cpdlc/setup/) |
| Optional | An IVAO API key, for active special areas and sector file downloads |

## Install

Each release of g-atm carries one installer per platform:

| Platform | File to take (version 2.0.0 shown) |
|---|---|
| Windows | `g-atm_2.0.0_x64-setup.exe`, or the `g-atm_2.0.0_x64_en-US.msi` package |
| macOS, Apple Silicon | `g-atm_2.0.0_aarch64.dmg` |
| macOS, Intel | `g-atm_2.0.0_x64.dmg` |
| Linux | `g-atm_2.0.0_amd64.AppImage`, `g-atm_2.0.0_amd64.deb` or `g-atm-2.0.0-1.x86_64.rpm` |

The `.sig`, `.app.tar.gz` and `latest.json` files beside them are for the automatic
update: you do not need them.

Run the installer, then start **g-atm**. On Windows, g-atm uses the Microsoft Edge
WebView2 runtime that Windows 10 and 11 already have. It installs no driver and no
background service.

:::note
g-atm is developed and tested on Windows. The macOS and Linux builds come from the same
release, but they are less tried. On macOS and Linux the push-to-talk key works only while
a g-atm window has the keyboard focus (see [TeamSpeak](/5g-atm-doc/voice/teamspeak/)).
:::

## First launch

The first time it starts, g-atm creates its data folder and an empty `config.json` in
it (on Windows, `%APPDATA%\com.jules.g-atm\`; other systems in [Files and
folders](/5g-atm-doc/reference/files/)).

The picture is empty at first: g-atm ships no maps. Before your first session:

1. **Install a sector file**: Tools → External Applications → Sector File →
   **Install…**, or **Download** by IVAO sector ID. See [Account
   settings](/5g-atm-doc/start/configuration/#sector-files).
2. **Fill in your account**: the IVAO Connection window, and `config.json` for what
   must be kept. See [Account settings](/5g-atm-doc/start/configuration/).
3. **Install the base configuration files** below, so that OP CONF CHG PREP lists your
   positions and the hold menu offers the predefined stacks.

Then run through [Your first session](/5g-atm-doc/start/first-session/).

## Base configuration files

Two files are not created for you. Ready-made ones exist: put them in the data folder
(`%APPDATA%\com.jules.g-atm\` on Windows), g-atm closed, then start it again.

| File | What it gives you | Download |
|---|---|---|
| `op_config.json` | The roles, the French centres (Marseille, Paris, Reims, Brest, Bordeaux) with their sector files, responsibilities, callsigns, frequencies and CPDLC stations | [op_config.json](/5g-atm-doc/files/op_config.json) |
| `predefined_holds.json` | The predefined holding stacks of the French centres and airports, offered in the hold menu | [predefined_holds.json](https://raw.githubusercontent.com/vaccfr/CoFrance-v2/main/config/predefined_holds.json) (CoFrance-v2 repository) |

To download, **right click** the link, then *Save link as…*, and keep the file name
exactly as it is.

- `op_config.json` is what OP CONF CHG PREP lists: without it, you cannot choose a
  position. Each centre names the sector file it uses: install those sector files too.
  See [OP CONF and PREPA mode](/5g-atm-doc/cco/op-conf/).
- `predefined_holds.json` is optional: without it, holding still works on any waypoint
  of the route. See [Holding](/5g-atm-doc/traffic/holds/).

:::tip
If your division gives you its own files, use them instead: they replace these ones.
Both formats are described in [Files and folders](/5g-atm-doc/reference/files/).
:::

## Automatic updates

At each launch, g-atm asks the update server whether a newer version exists.

- **No update**: nothing happens, g-atm starts normally.
- **Update found**: a banner *Updating* with the version number and a progress bar
  appears. The update downloads, installs, the banner says *Restarting*, and g-atm
  starts again on the new version. There is no question to answer.
- **Server unreachable or you are offline**: g-atm starts normally. An update never
  blocks or delays the start.

Every update is signed: g-atm installs only a package signed by its publisher. You lose
nothing in an update: your settings, your window layout and your standards are written
to the data folder as you change them, and the data folder is not touched.

:::tip
Start g-atm a minute before you take your position. If an update is waiting, it installs
then, not in the middle of your session.
:::

## Uninstall

Uninstall g-atm like any other application. If the data folder is still there
afterwards, delete it yourself when you want your settings gone too: it holds your IVAO
password and your Hoppie code.
