---
title: Files and folders
description: Where g-atm keeps its files, what each one holds, which ones you edit, and what to back up.
---

Everything g-atm keeps about you lives in one **data folder**. The program itself
(installed by the installer) holds nothing personal.

## The data folder

| System | Folder |
|---|---|
| Windows | `%APPDATA%\com.jules.g-atm\` (paste it in the Explorer address bar) |
| macOS | `~/Library/Application Support/com.jules.g-atm/` |
| Linux | `~/.local/share/com.jules.g-atm/` |

g-atm creates it at the first launch.

## What is in it

| Entry | Written by | Holds |
|---|---|---|
| `config.json` | g-atm (template), you | Your IVAO account, voice settings, API key, Hoppie code, chosen sector file. **Secrets.** |
| `op_config.json` | You or your division | The roles, aliases and responsibilities listed in OP CONF CHG PREP. |
| `op_config_simu.json` | You, optional | The positions of a world-server session, read instead of `op_config.json` when the Host is not an IVAO server. |
| `standard_config.json` | g-atm | Your windows (open or not, place, size), the standards of each position, and your Local Settings. |
| `standards.json` | g-atm | A spare copy of the position standards. |
| `predefined_holds.json` | You or your division, optional | The predefined holding stacks offered in the hold menu. |
| `sectors\` | g-atm (Install, Download), or you | The sector files (`.isc`) and their include folders. |
| `airspace\` | You, optional | Your own sector volumes, replacing those shipped with g-atm. |
| `iflux\` | You, optional | Your own iFlux rules, one file per centre (`LFEE.json`), replacing the shipped ones. |
| `vid_whitelist.cache.txt` | g-atm | The last access list read, used if the network is down. |

g-atm writes no log file.

## The files you edit

Close g-atm before editing a file, keep it valid JSON (double quotes, no trailing comma),
then start g-atm again.

### config.json

Created empty at the first launch. Its fields are described in [Account
settings](/5g-atm-doc/start/configuration/#configjson). It holds your IVAO password, your
Hoppie logon code and your API key in clear text: never share it as it is.

If it cannot be read, g-atm starts with the default values.

### op_config.json

Not created for you. It describes your centre: its aliases, responsibilities, position
callsigns, frequencies and CPDLC stations. It holds no secret, so a division can share
one file with all its controllers. Its format is in [OP CONF and PREPA
mode](/5g-atm-doc/cco/op-conf/).

### op_config_simu.json

Optional, same format as `op_config.json`. g-atm reads it, when it exists, as soon as
the Host of the IVAO Connection window is not an IVAO server, and goes back to
`op_config.json` on IVAO. See [Joining a simulation](/5g-atm-doc/simulation/joining/).

### predefined_holds.json

Optional, at the root of the data folder (a copy left in `sectors\` is still read). It
fills the predefined stacks of the hold menu; without it, holding still works on any
waypoint. Keys are **prefixes of position callsigns** (`LFEE_` covers `LFEE_CTR` and
`LFEE_N_CTR`); under each, one entry per holding point:

```json
{
  "LFEE_": {
    "CMB": { "upperfl": 660, "lowerfl": 270 },
    "RANUX": { "upperfl": 370, "lowerfl": 200, "iaf": true }
  }
}
```

`upperfl` and `lowerfl` bound the levels offered for the stack; `iaf` marks a stack on an
initial approach fix. Other top-level keys, such as `$schema` or `version`, are ignored,
and a malformed entry is skipped without stopping the others. See
[Holding](/5g-atm-doc/traffic/holds/).

### airspace and iflux

g-atm ships the sector volumes it uses to compute entries, exits and flight states, and
the iFlux rules of the centres that have them. A file of the same name in `airspace\` or
`iflux\` replaces the shipped one, without reinstalling. `airspace\simu\` does the same
for the simulation volumes. Use them only if someone gives you such a file: a file in
`airspace\` is read on IVAO too.

## The files g-atm manages

### standard_config.json

Written as you go: every window moved, every standard saved, every Local Setting
changed. It is read at startup to give you your screen back.

If it cannot be read, g-atm renames it with an `.illisible` suffix (nothing is lost)
and starts with defaults. The position standards then come back from `standards.json`.

Deleting it resets your window layout and your Local Settings; your standards come back
from `standards.json`.

### sectors

Filled by **Install…** and **Download** in the Sector File menu (see [Sector
files](/5g-atm-doc/start/configuration/#sector-files)). You can also copy a sector
package there by hand. A world-server session may add "(eAIP)" copies of the packages:
they are for simulation and do not disturb the IVAO ones.

## What to back up

| File | Back it up? |
|---|---|
| `config.json` | Yes, privately. |
| `op_config.json`, `op_config_simu.json` | Yes, unless your division publishes them. |
| `standard_config.json`, `standards.json` | Yes, if you tuned your standards and layout. |
| `predefined_holds.json` | Yes, unless your division publishes it. |
| `sectors\` | No: install or download the packages again. |

## Sharing a file for help

`op_config.json`, `standard_config.json` and `predefined_holds.json` can be sent as they
are. Never send `config.json` without blanking `password`, `logon_code` and
`ivao_api_key` first.
