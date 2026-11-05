---
title: System Maps
description: Choosing which maps of the sector file are drawn on the radar image, in the System Maps window.
---

A sector file holds far more maps than one position needs: every sector, every airway,
every procedure of every aerodrome. The **System Maps** window is where you choose what
the radar image draws.

## Open and close it

Press the **MAPS** key (`Home`). The same key closes it. You can also close it with the
cross in its title bar.

The window is titled **System Maps Main**. It is a separate window: move it by its title
bar, to any screen. See [Windows and screens](/5g-atm-doc/position/windows/).

## The two panes

| Pane | What it holds |
|---|---|
| **Left: the tree** | The maps of the sector file, in folders. Left click a folder to select it; click the small knob in front of it to open or close it |
| **Right: the list** | The maps of the selected folder, each with a check box. Its header repeats the folder's name |

Selecting a folder in the tree draws nothing: it only changes the list. Drawing is the
check boxes. Left click a row of the list to tick or untick it.

The **Filter** field above the list keeps only the rows whose name contains what you
type.

## What the tree offers

| Folder | The list then shows |
|---|---|
| **Maps** | Every map of the sector file |
| **Sectors** | The sector drawings |
| **Geo** | The geographical background |
| **Navigation** | The rest: navaids, VORs, NDBs, upper and lower airways, airspace, airports |
| **Airports** | Every map of every aerodrome |
| An aerodrome (`LFXX`) | All its maps together |
| A map family of an aerodrome: Runways, Taxiways, Stands, SID, STAR, VFR, VFR routes, MVA | Its procedures **one by one** |

Above the family level, one row is a whole family: ticking **STAR** under an aerodrome
draws all its STARs. Select the family itself and the list gives one row per procedure,
so you can draw one STAR and leave the others off.

A procedure written in several branches in the sector file is one row, and its branches
light up together. Unnamed paths keep one row each.

Some layers are computing data, not maps (the sector limits g-atm uses to know whether a
flight concerns you): they are not offered. Layers the sector file draws with fixed
colours and no name are always on, and not offered either.

## Other ways maps change

- **Set Up → UIR Optional Maps Display** and **FIR Optional Maps Display** tick the upper
  and lower airways. See [Global Menu](/5g-atm-doc/position/global-menu/).
- Your **sector drawings** light up with the mapping when you take a position. See
  [OP CONF and PREPA mode](/5g-atm-doc/cco/op-conf/).
- The **standard configuration** saves the maps you chose and brings them back. See
  [CLEAN and standard configuration](/5g-atm-doc/position/clean-standard/).

:::note[Next version]
In the next release, each secondary image has its own maps, starting from those of the
standard. The **MAPS** key opens System Maps for the image under the pointer, and the
title says which: **System Maps Main** or **System Maps RAW1**. The sector drawings lit
by the mapping stay those of the main image, in every image.
:::

---

*4-Flight booklet 3.0: §1.2 (p. 2); §16.7 (p. 209), MAPS key.*
