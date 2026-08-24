---
title: Operational configuration
description: Describe your sectors, positions, frequencies and datalink codes in op_config.json, then select them in the PREPA window.
---

`config.json` says **who you are**. `op_config.json` says **what you are working**: which
sectors your position covers, on which frequency, under which callsign, with which
datalink station.

```
%APPDATA%\com.jules.g-atm\op_config.json
```

This file is not created for you. Write it once for your centre and it will serve every
session.

## What it is for

En-route centres split and merge sectors during the day. One controller may work a single
sector at 06:00 and five sectors merged into one position at 14:00. `op_config.json`
describes all the groupings you might work, and the **PREPA** window lets you pick the one
in force right now.

Choosing a grouping sets, in one action:

- the **sectors** you are responsible for, which drives the label filtering and the flight
  lists;
- the **position callsign**, which is the key used to apply LOAs and coordination;
- the **frequency announced** to the network;
- the **CPDLC station code** published in your ATIS.

## Structure

```json
{
  "roles": ["TACTICAL", "PLANNER", "SUPERVISOR"],
  "config": [
    {
      "alias": "LFMM",
      "resps": [
        {
          "sector": "W",
          "callsign": "LFMM_W_CTR",
          "frequency": "132.365",
          "cpdlc": { "logon": "LFM1", "fallback_logons": ["LFM2", "LFMM"] },
          "subsectors": ["WU", "WL"]
        },
        {
          "sector": "E",
          "callsign": "LFMM_E_CTR",
          "frequency": "125.100",
          "cpdlc": { "logon": "LFM3" },
          "subsectors": ["EU", "EL"]
        },
        {
          "sector": "MM",
          "callsign": "LFMM_CTR",
          "frequency": "128.200",
          "cpdlc": { "logon": "LFMM" },
          "subsectors": ["W", "E"]
        }
      ]
    }
  ]
}
```

### `roles`

A flat list of the roles you can hold at a position. The role you pick is shown in the
centre of the menu bar. It is a working label, it changes nothing else.

### `config`

A list of **aliases**. An alias is a centre or a group of positions, for example `LFMM`.
Each alias contains its **resps** — the responsibilities that can be opened inside it.

### An `alias`

| Field | Required | Meaning |
|---|---|---|
| `alias` | yes | Name of the centre or group, as shown in the PREPA window. |
| `sectorfile` | optional | The sector file this alias is written for. |
| `resps` | yes | The responsibilities that can be opened inside it. |

#### `sectorfile`

Naming a sector file has two effects, and they go together.

The alias is **only offered while that file is loaded**. An `op_config.json` describing
every centre in the country stops offering Reims positions while you are working
Marseille.

And its unknown `subsectors` become **warnings instead of refusals**. Declaring the file
says *this alias is written for it*: a name that is not in it is a leftover in your
configuration, and there is no reason for it to stop you taking the position. The sectors
that do resolve light up.

The comparison ignores the path, the case and the `.isc` extension, so
`CRNA E - Reims.isc` and `CRNA E - Reims` are both accepted — but the **stem must match
exactly**. Leave the field out and you get the original behaviour: always offered, and any
unknown name blocks.

### A `resp`

| Field | Required | Meaning |
|---|---|---|
| `sector` | yes | Name of the responsibility, as shown in the PREPA window. |
| `subsectors` | yes | What this responsibility is made of. Each entry is either the name of another resp of the same alias, or the name of a real sector from the map data. |
| `callsign` | recommended | Position callsign, for example `LFMM_W_CTR`. Used as the key for LOAs and coordination. |
| `frequency` | recommended | Frequency announced to the network once this resp is validated. |
| `cpdlc` | optional | Datalink station: `logon` plus optional `fallback_logons`. |

### How `subsectors` are resolved

The rule is applied in this order, for every name listed:

1. If the name is **another resp** of the same alias, it is expanded recursively.
2. Otherwise, if the name is a **real sector** from the map data, it is kept as is.
3. Otherwise it is an **error**, reported in the PREPA window.

In the example above, `MM` lists `W` and `E`. Both are resps, so they expand to `WU`,
`WL`, `EU`, `EL` — the four real sectors. Duplicates are dropped, the order you wrote is
preserved, and circular references are detected and reported.

### The `cpdlc` block

```json
"cpdlc": { "logon": "LFM1", "fallback_logons": ["LFM2", "LFMM"] }
```

The Hoppie network only allows **one station per code at a time**. `logon` is the code you
want; if another controller already holds it, g-atm tries each `fallback_logons` entry in
order until one is free.

Station codes are ACARS callsigns: **four letters, no underscore**. `LFM1` is valid,
`LFMM_W_CTR` is not.

## The PREPA window

Click the **role label in the centre of the menu bar** to open `OP CONF CHG PREP`.

The window has three lists and a button:

| Area | What it shows |
|---|---|
| **RESPS** | Every resp of every alias. Pick one to work that responsibility alone. |
| **ALIAS** | The aliases themselves. Pick one to work the whole grouping. |
| **ROLE** | Your role, from the `roles` list. |

RESPS and ALIAS are **mutually exclusive**: selecting one clears the other.

Under the lists, the software shows the **resolved sector list** — exactly which sectors
you will be responsible for. If anything cannot be resolved, the reason appears in red:
unknown alias, unknown resp, unknown sector name, circular reference, or an empty result.

**OK** stays greyed until you have selected a resp or an alias **and** a role. The tooltip
on the greyed button tells you what is missing.

### What happens when you press OK

- If the selected position belongs to an alias whose `sectorfile` is **not the one
  loaded**, that file is loaded first and the selection is applied once it is ready — one
  click, not two.
- The sector list is applied to label filtering and to the flight lists.
- The role label in the menu bar is updated.
- The frequency of the selected resp is **announced to the network immediately**, without
  reconnecting.
- If datalink is configured and you are connected, the CPDLC station switches to the
  logon code of the selected resp.

You can reopen PREPA and validate a different grouping at any time during the session.
That is how you split or merge sectors live.

:::note
When you select a whole **alias**, the callsign, frequency and datalink station are taken
from the resp whose expansion covers the entire alias — `MM` in the example. If no single
resp covers everything, those three values are left unset and you keep the ones from your
connection.
:::

## When something is wrong

| Message | Meaning |
|---|---|
| `op_config.json introuvable (AppData)` | The file does not exist yet. Create it in the data folder. |
| `structure invalide (roles[] et config[] attendus)` | The top level must contain both a `roles` array and a `config` array. |
| `Secteur «X» inconnu` | `X` is neither a resp of the alias nor a sector present in the map data. Check the spelling. |
| `Référence circulaire` | Two resps list each other in their `subsectors`. |
| `Aucun secteur résolu` | The resp expands to nothing. Its `subsectors` is empty or all entries failed. |
