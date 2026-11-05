---
title: Moving around the picture
description: Zoom, pan, the three parametrised views, the range field, and moving a label.
---

You set the picture with the mouse: the wheel zooms, a drag moves the image. Three saved
views and the range field take you to a known picture in one action.

## Zoom

Turn the **mouse wheel** over the radar image: forward zooms in, backward zooms out. The
point under the pointer stays where it is, so put the pointer on the area you want to
enlarge before you turn the wheel.

## Pan

**Drag** an empty part of the image with the left button: the image follows the pointer.
Only the left button pans.

A drag that starts on a chain head of the analysis group extrapolates the group instead
(see [Group, SEP, QDM, CPA](/5g-atm-doc/conflicts/group-sep-qdm/)). While a Range Rings tool
is armed, the image does not pan.

## The range field

The field at the right end of the Filter Area shows the extent of the picture, in NM,
across its smaller side. It follows the zoom.

- Click the chevron next to it for a list: 25, 50, 75, 100, 150, 200, 300, 400 or 600 NM.
- Or click in the field, type a value, then `Enter`. `Escape` gives up.

The picture keeps its centre.

## Parametrised views 1 to 3

Each position has three views: a zoom and a centre each. Recall them with the keys:

| 4F key | PC key |
|---|---|
| **VUE 1** | `F1` |
| **VUE 2** | `F2` |
| **VUE 3** | `F3` |

On the real position these views come from offline parameters, sector by sector. In
g-atm you save them yourself:

1. Set the picture as you want it.
2. **Tools → External Applications → Standard Configuration → Save Current as View 1**
   (or 2, or 3).

The view is saved with the standard of your position (sector and role): another
position has its own three views. Until you save a view 1, **VUE 1** gives the standard
picture of the position. **VUE 2** and **VUE 3** do nothing until you save them.

## Armed tools

While a tool waits for its click (QDM, SEP, Range Rings), the pointer is a crosshair.
A **right click** leaves the tool without creating anything.

## Moving a label

**Drag** the label with the left button and drop it where you want. The middle and right
buttons do not move it.

- You can grab the label by any part, field included: dropping it does not open the
  field's menu.
- The leader line stretches to follow the label. About 10 seconds later, automatic
  placement takes over again and the leader returns to its default length.
- The standard configuration recall puts every label back in its standard position.

To see a flight's label in its selected format, hover it. Label formats are described in
[Label formats and tabs](/5g-atm-doc/labels/formats/).

---

*4-Flight booklet 3.0: §1.3.a–b (p. 3), §1.5 (p. 6).*
