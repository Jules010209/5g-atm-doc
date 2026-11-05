---
title: Local Settings
description: The site parameters you choose under Tools → External Applications → Local Settings, their defaults, and what each one changes.
---

On a real 4-Flight position, some behaviours are set by each centre ("site
parameters"). In g-atm you choose them yourself, once, under **Tools → External
Applications → Local Settings**. Your choice is kept from one launch to the next and
applies to every position you open on this computer.

## Using the menu

Hover **Local Settings** to open its submenu, then click an entry:

- a single entry (STAMAN, Athis Rule, XFL Exit Indicators) is a box: click to tick or
  untick it;
- a group of entries (FL Tint, DSAM Delay, Range Rings) works like a radio button: click
  the value you want, the tick moves to it.

The change applies at once. g-atm writes it to `standard_config.json` in the data folder
(see [Files and folders](/5g-atm-doc/reference/files/)).

## The settings

| Menu entry | Default | What it changes |
|---|---|---|
| **STAMAN** | off | Gives your position the Stack Manager windows (Tools → Stack Manager Windows). A position's standard configuration can also give it STAMAN. See [STAMAN](/5g-atm-doc/traffic/staman/). |
| **Athis Rule (STAR, Short STARs)** | off | On: the STAR shows in the selected label and in the base label when it is in REV, and every point of the STAR has a short STAR (the Paris rule). Off: no short STARs; the extended label still shows the STAR. See [Runway and STAR](/5g-atm-doc/traffic/runway-star/). |
| **XFL Exit Indicators** | on | When the XFL is hidden because it equals the CFL, ▲ (exit through the ceiling) or ▼ (through the floor) stays alone on line 3 of the base label, to remind you to shoot to the sector above or below. Off: nothing is left on that line. See [Label fields](/5g-atm-doc/labels/fields/). |
| **FL Tint: Brown and Grey** / **Brown** / **None** | Brown | Background of the levels in the CFL, EFL and XFL menus. Brown: the level is entirely outside your volume. Grey: partly outside. With *Brown*, only the brown is shown; with *None*, no tint. See [Changing a level](/5g-atm-doc/profile/levels/). |
| **DSAM Delay: 10 s** / **15 s** | 10 s | After you enter a CFL, how long the DSAM alert (pilot-selected level different from the CFL) waits for the pilot to set the new level. See [Monitoring and other alerts](/5g-atm-doc/alerts/monitoring/). |
| **Range Rings: 5 NM** / **10 NM** | 5 NM | The interval of new Range Rings. The interval of a placed set can still be changed from the Radar Menu. See [Range Rings](/5g-atm-doc/conflicts/range-rings/). |

:::tip
Why brown alone by default: an IVAO position often holds a whole grouping, and at most
levels some part of it is not covered. With grey on, almost the whole level list turned
grey and the tint no longer told you anything.
:::

:::note
DSAM needs the level selected by the pilot, which the IVAO network does not carry. On
IVAO the alert never fires; it works on a [world server](/5g-atm-doc/simulation/joining/),
which sends it.
:::

## Flight Leg Phase Colors

Just below Local Settings in the same menu, **Flight Leg Phase Colors** (default off) draws
the climbing part of a Flight Leg in green and the descending part in blue. It is a
g-atm addition, not a 4F function. It is kept with the Local Settings. See [Flight
Leg](/5g-atm-doc/labels/flight-leg/).

## Site parameters you cannot change

Some site parameters have no menu: g-atm uses a fixed value.

| Parameter | Value in g-atm |
|---|---|
| iCoor preset texts | EVOLUTIF, MIL_OK, MIL_N3, REL_ALL, REL_F, REL_T, xSPD |
| Messages of special SSR codes (Ne-SSR) | none: the booklet gives no code |
| APW buffer around an area | 2 NM and 500 ft |
| APW look-ahead | 3 minutes |
| Flows exempted from APW | none |
| Quick Range Rings | 25 circles (125 NM radius at 5 NM) |
| HFL of a holding flight | in the selected label (and in base through a Suite Highlight) |
| Letter of the holding stack | in the selected label |

## Resetting

There is no reset entry: pick the default values again from the table above. If
`standard_config.json` is deleted, Local Settings go back to their defaults too, along
with your window layout.
