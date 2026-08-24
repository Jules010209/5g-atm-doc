---
title: Account settings
description: Every field of config.json, the file that holds your IVAO account, your announced position, your voice settings and your datalink code.
---

`config.json` holds everything that identifies **you**. It is read when the application
starts and when you connect.

```
%APPDATA%\com.jules.g-atm\config.json
```

Edit it with any text editor. The file must stay valid JSON: no trailing commas, all
strings in double quotes. **Close g-atm before editing it**, then start it again.

## Complete example

```json
{
  "ivao": {
    "host": "worldserver.eu-west-2.ivao.aero",
    "port": 6809,
    "callsign": "LFMM_W_CTR",
    "name": "Jean Dupont",
    "vid": "123456",
    "password": "your-ivao-password",
    "software_key": "your-software-key",
    "latitude": 43.95,
    "longitude": 4.85
  },
  "voice": {
    "host": "ts-1.eu-west-2.ivao.aero",
    "port": 8767,
    "nickname": "Jean Dupont",
    "ptt_shortcut": "Control+Shift+Space",
    "input_device": "",
    "output_device": "",
    "vhf_effect": true
  },
  "api": {
    "ivao_api_key": ""
  },
  "cpdlc": {
    "logon_code": "",
    "base_url": "https://www.hoppie.nl/acars/system/connect.html",
    "enabled": false
  }
}
```

## The `ivao` block

| Field | Meaning |
|---|---|
| `host` | IVAO world server. Use the one closest to you. Also editable in the Connect menu. |
| `port` | Always `6809`. |
| `callsign` | The position you open, for example `LFMM_W_CTR`. Also editable in the Connect menu. |
| `name` | The name shown to other users on the network. |
| `vid` | Your IVAO VID. |
| `password` | Your IVAO password. |
| `software_key` | Client authentication key. Without it the network refuses the connection. |
| `latitude` / `longitude` | The geographic point announced as the centre of your position, in decimal degrees. It decides where other clients draw your position and how far your range extends. |

:::note
The **announced frequency** is not in this file. It comes from the position you validate
in the PREPA window, so that splitting or merging sectors changes the frequency you
publish without reconnecting. See [Operational
configuration](/5g-atm-doc/start/op-config/).
:::

## The `voice` block

| Field | Meaning |
|---|---|
| `host` | TeamSpeak server used for voice. Also editable in the Connect menu, and published in your ATIS. |
| `port` | Always `8767`. |
| `nickname` | Name shown in the voice channel. Leave empty to use your network name. |
| `ptt_shortcut` | Push-to-talk key, as a shortcut string such as `Control+Shift+Space`, `F13` or `Alt+A`. It is a **global** shortcut: it works even when g-atm is not the focused window. |
| `input_device` | Microphone. Empty means the Windows default device. |
| `output_device` | Speakers or headset. Empty means the Windows default device. |
| `vhf_effect` | `true` applies the VHF radio filter to received voice, so transmissions sound like a real frequency. Set to `false` for clean audio. |

## The `api` block

| Field | Meaning |
|---|---|
| `ivao_api_key` | Optional IVAO API key. Leave empty unless you have been given one. |

## The `cpdlc` block

Datalink is **off by default**. See [Setting up datalink](/5g-atm-doc/cpdlc/setup/) for the
full procedure.

| Field | Meaning |
|---|---|
| `logon_code` | Your personal Hoppie logon code. Request it once from the Hoppie ACARS site. |
| `base_url` | The ACARS endpoint. Keep the default unless your division runs its own compatible server. |
| `enabled` | Set to `true` to allow the application to use datalink at all. With `false`, every CPDLC function stays inert. |

:::caution
Your IVAO password and your Hoppie logon code are both in this file, unencrypted. Keep it
private. If you send a configuration file to someone for troubleshooting, blank those two
fields first.
:::

## When something is wrong

| Symptom | Cause |
|---|---|
| Connect fails immediately with `invalid credentials` | A required field is empty: callsign, VID, password or host. |
| Connect times out | Wrong host, no network access, or a missing `software_key`. |
| The application starts with default values | The file is not valid JSON and could not be parsed. Check for a trailing comma or a missing quote. |
| Voice never connects | Wrong `host`, or the position is an observer callsign. |
