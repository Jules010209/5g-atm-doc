---
title: Account settings
description: "The IVAO Connection window, config.json, sector files and the optional codes and keys: what each setting does and where it is kept."
---

Your account settings say **who you are** and **where you connect**: IVAO credentials,
voice server, Hoppie code, API key, sector file. You set them in the IVAO Connection
window, in the Sector File menu, in the Teamspeak window, and in one file, `config.json`.

What you **work** (sectors, position callsign, frequency) is not here: it comes from
`op_config.json` and the OP CONF CHG PREP window. See [OP CONF and PREPA
mode](/5g-atm-doc/cco/op-conf/).

## The IVAO Connection window

Open it with **Tools → External Applications → IVAO Connection**. It opens under the
Global Menu.

| Field | What it is |
|---|---|
| **Host** | The IVAO world server, for example `worldserver.eu-west-2.ivao.aero` (the default). |
| **Port** | `6809`. |
| **Voice host** | The TeamSpeak server for voice. It is also published in your ATIS, so pilots know where to find you. Default `ts-1.eu-west-2.ivao.aero`. |
| **Voice port** | `8767`. |
| **Callsign** | The station you open on the network, for example `LFMM_W_CTR`. Voice uses it as your nickname and as the name of your channel. |
| **Name** | Your name, as other users see it. |
| **VID** | Your IVAO VID. |
| **Password** | Your IVAO password. It is also your TeamSpeak login. |

**Connection** opens the session; **Disconnect** closes it. A failure is written in red
under the buttons.

A **Host** that is not an IVAO server (a name not ending in `.ivao.aero`) is treated as
a simulation server. See [Joining a simulation](/5g-atm-doc/simulation/joining/).

All fields are filled from `config.json` when g-atm starts. When you press
**Connection**, g-atm saves **Voice host** and **Voice port** back to `config.json`. The
other fields are used for this session only: to keep a host, callsign, name, VID or
password from one launch to the next, write it in `config.json`.

:::caution
Do not share a screenshot of this window with the fields filled in: it shows your VID.
:::

### What the connection does not take from this window

- **The frequency you announce** comes from the position you validate in OP CONF CHG
  PREP, and follows every change of position without reconnecting. With no position
  validated, g-atm announces `122.800`.
- **The point you announce** (where the network centres the traffic it sends you) is the
  centre of the loaded sector file. `config.json` gives it only when no sector file is
  loaded.

## config.json

`config.json` is in the g-atm data folder: on Windows,
`%APPDATA%\com.jules.g-atm\config.json` (other systems: [Files and
folders](/5g-atm-doc/reference/files/)). g-atm creates it empty at the first launch.

To edit it: **close g-atm**, open the file in a text editor, keep it valid JSON (double
quotes, no trailing comma), save, start g-atm again. If the file cannot be read, g-atm
starts with the default values.

It has five blocks. The shape, with placeholders:

```json
{
  "ivao": {
    "host": "worldserver.eu-west-2.ivao.aero",
    "port": 6809,
    "callsign": "LFXX_CTR",
    "name": "Your Name",
    "vid": "your VID",
    "password": "your IVAO password",
    "software_key": "",
    "latitude": 42.75,
    "longitude": 6.225
  },
  "voice": {
    "host": "ts-1.eu-west-2.ivao.aero",
    "port": 8767,
    "nickname": "",
    "ptt_shortcut": "Control+Shift+Space",
    "input_device": "",
    "output_device": "",
    "vhf_effect": true
  },
  "api": { "ivao_api_key": "" },
  "cpdlc": {
    "logon_code": "",
    "base_url": "https://www.hoppie.nl/acars/system/connect.html",
    "enabled": false
  },
  "sectors": { "file": "" }
}
```

### ivao

| Key | What it does |
|---|---|
| `host`, `port`, `callsign`, `name`, `vid`, `password` | The values the IVAO Connection window opens with. |
| `software_key` | The client key that signs your IVAO login. When it is empty, g-atm still connects, with an empty signature. |
| `latitude`, `longitude` | The point announced to the network when no sector file is loaded, in decimal degrees. With a sector file loaded, its centre is used instead. |

### voice

These keys are written by the **Save settings** button of the
[Teamspeak window](/5g-atm-doc/voice/teamspeak/); you rarely edit them by hand.

| Key | What it does |
|---|---|
| `host`, `port` | The voice server, as in the Voice host and Voice port fields. |
| `nickname` | Written by Save settings with your callsign. Voice always logs in under your callsign. |
| `ptt_shortcut` | The push-to-talk key, such as `Control+Shift+Space` (the default), `F13` or `Alt+A`. |
| `input_device`, `output_device` | Microphone and headset by name. Empty means the system default. |
| `vhf_effect` | `true` plays received voice through the VHF radio effect. |

### api

| Key | What it does |
|---|---|
| `ivao_api_key` | Your IVAO API key. With it, g-atm draws the special areas active now and raises the APW alert on them, and the Sector File menu can **Download** a sector package by its IVAO ID. Without it, none of these work. |

### cpdlc

Datalink is **off** until you set it up here. The full procedure is in [Setting up
datalink](/5g-atm-doc/cpdlc/setup/).

| Key | What it does |
|---|---|
| `enabled` | `true` lets g-atm open a CPDLC station. |
| `logon_code` | Your personal Hoppie logon code. |
| `base_url` | The Hoppie ACARS address. Keep the default. |

With both `enabled` and a `logon_code`, the station comes online by itself when you
connect to the network. You can also take it online or offline in **Tools → External
Applications → CPDLC Station**.

### sectors

| Key | What it does |
|---|---|
| `file` | The sector file loaded at startup. The Sector File menu writes it when you pick a file. Empty: g-atm loads the only file of the folder, and loads none if there are several. |

:::caution
`config.json` holds your IVAO password, your Hoppie logon code and your API key in
clear text. Keep it private. If you send it to someone for help, blank `password`,
`logon_code` and `ivao_api_key` first.
:::

## Sector files

g-atm ships no maps: the picture, the sector limits and the fixes come from an IVAO
(Aurora) sector file, an `.isc` file and its include folders, kept in the `sectors`
folder of the data folder.

Open **Tools → External Applications → Sector File**:

| Entry | What it does |
|---|---|
| **Install…** | Pick a sector package on your disk (`.zip` or `.isc`). Its files are copied into the `sectors` folder and its sector files join the list. |
| **Sector ID** and **Download** | Type the IVAO ID of a sector package and press **Download** (or Enter): g-atm downloads the latest version and installs it. Needs your IVAO API key. |
| The list | One row per `.isc` file. The ticked one is loaded. Click another to load it at once, without restarting. Your choice is kept for the next launch. |

After an install or a download, a short line says how many sector files were added, or
that the package was already up to date.

You rarely need to pick the file by hand: when you validate a position in OP CONF CHG
PREP whose alias names a sector file, g-atm loads that file first.
