---
title: Install and first launch
description: Requirements, installation, and what happens the first time you start g-atm.
---

## Requirements

| | |
|---|---|
| Operating system | Windows 10 or Windows 11 |
| IVAO account | An active VID with an ATC rating allowing the position you intend to open |
| Network | Outbound access to the IVAO world servers and TeamSpeak servers |
| Audio | A headset with a microphone, for voice |
| Optional | A Hoppie logon code, if you want CPDLC |

## Install

1. Download the installer for the latest release.
2. Run it and follow the prompts.
3. Start **g-atm** from the Start menu.

The application does not need administrator rights to run, and it does not install a
driver or a background service.

## First launch

The first time it starts, g-atm creates its data folder and writes an empty configuration
template into it:

```
%APPDATA%\com.jules.g-atm\
```

Paste that path into the Windows Explorer address bar to open the folder. You will find:

| File | What it holds |
|---|---|
| `config.json` | Your IVAO account, your announced position, voice settings, CPDLC settings |
| `op_config.json` | Your sector groupings, position callsigns, frequencies and datalink codes |
| `standard_config.json` | Screen state saved automatically: which windows are open and where |

`config.json` is created for you with empty fields. `op_config.json` is **not** created
automatically — you write it yourself, and the application tells you it is missing when
you open the PREPA window.

:::caution
`config.json` contains your IVAO password in clear text, and your Hoppie logon code if you
use datalink. It lives in your own user profile. Never share it, never post it in a
screenshot, never commit it to a repository.
:::

## Before you connect

Three things must be done before your first session, in this order:

1. **[Fill in `config.json`](/5g-atm-doc/start/configuration/)** — without it the Connect
   button cannot authenticate you.
2. **[Write `op_config.json`](/5g-atm-doc/start/op-config/)** — without it you can connect,
   but the software does not know which sectors you are working, which frequency to
   announce, or which datalink station to open.
3. **[Run through a first session](/5g-atm-doc/start/first-session/)** — the end-to-end
   walkthrough.

## Updating

Install the new version over the old one. Your data folder is untouched, so your account,
your operational configuration and your window layout survive the update.
