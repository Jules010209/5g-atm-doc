---
title: Files and folders
description: Where g-atm keeps your settings, what each file holds, and what to back up.
---

Everything g-atm writes lives in one folder:

```
%APPDATA%\com.jules.g-atm\
```

Paste that into the Windows Explorer address bar to open it.

## What is in the folder

| Entry | Written by | Holds |
|---|---|---|
| `config.json` | You | Your IVAO account, announced position, voice settings, datalink code |
| `op_config.json` | You | Sector groupings, position callsigns, frequencies, datalink codes |
| `predefined_holds.json` | Your division | The predefined holding stacks and their level bands |
| `standard_config.json` | The application | Which windows are open and where |
| `sectors\` | The application, or you | Sector files and the navigation data they include |

### `config.json`

Created empty at first launch. Edit it with the application closed. See [Account
settings](/5g-atm-doc/start/configuration/).

Contains **secrets**: your IVAO password and your Hoppie logon code, both in clear text.

### `op_config.json`

Not created for you — write it yourself. See [Operational
configuration](/5g-atm-doc/start/op-config/).

Contains no secrets. It is the file to share with the rest of your division, since it
describes the centre, not the person.

### `predefined_holds.json`

Optional, and **at the root of the folder** — not inside `sectors\`. It fills the **PRED**
tab of the hold menu; without it, holding still works through the **WPT** tab.

Keys are **prefixes of position callsigns**, so `LFEE_` covers `LFEE_CTR` and `LFEE_X_CTR`
alike. Under each, one entry per holding point:

```json
{
  "LFEE_": {
    "CMB": { "upperfl": 660, "lowerfl": 270 },
    "RANUX": { "upperfl": 370, "lowerfl": 200, "iaf": true }
  }
}
```

`upperfl` and `lowerfl` bound the levels the HFL menu offers for that stack. `iaf` marks a
hold on an initial approach fix. Meta keys such as `$schema` and `version` are ignored, so
a file published by your division can be dropped in unchanged.

An observer position is not restricted to one prefix: it resolves across every bucket in
the file.

### `standard_config.json`

Managed by the application. Every time you move or resize a window, it is written here, and
it is read at startup to restore your layout.

Delete it to get the default layout back. It is regenerated on the next run.

## What to back up

| File | Back it up |
|---|---|
| `config.json` | Yes, but keep it private |
| `op_config.json` | Yes. It is the one that takes work to write |
| `predefined_holds.json` | Yes, if your division does not publish it |
| `standard_config.json` | Not worth it |

## Editing safely

1. **Close g-atm** before editing `config.json` or `op_config.json`.
2. Keep the JSON valid: no trailing commas, all strings in double quotes.
3. Start the application again.

If a file cannot be parsed, the application falls back to defaults rather than refusing to
start. If your settings seem to have vanished, that is the first thing to check.

## What is not stored on disk

These live only for the session and disappear when you close the application:

- LOST markings;
- coordination notes, XCOOR and ECOOR;
- field markings and acknowledgements;
- the analysis group, range rings, measurements and displayed routes;
- datablocks on the Agenda.

## Sharing a configuration for help

If someone asks for your configuration to help you troubleshoot:

- `op_config.json` can be sent as is;
- `config.json` must have `password` and `cpdlc.logon_code` blanked first.
