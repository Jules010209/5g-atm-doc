---
title: Mouse and keyboard
description: Every gesture, in one place.
---

## On the radar image

| Gesture | Effect |
|---|---|
| Left drag | Pan the image |
| Mouse wheel | Zoom, centred on the pointer |
| Left click on a track symbol | Add or remove from the analysis group, up to 8 |
| Drag a grouped track symbol | Extrapolate the whole group along their routes |
| Ctrl + release while extrapolating | Store the situation as a datablock |
| **Ctrl + left click** on empty image | Open the Radar menu |
| **Ctrl + left click** on a track symbol | Open the Track menu |
| Left click on empty image | Deselect the current range rings |
| Left click on a range ring circle | Select that set of rings |
| Escape | Cancel the armed tool, or deselect the rings |
| Delete | Delete the selected range rings |

## On a label

| Gesture | Effect |
|---|---|
| Hover | Extended format |
| Mouse wheel | Open the deployed panel, then cycle its tabs |
| Drag | Move the label |
| Left click on a field | Open that field's menu |
| Middle click on a field | Mark it, ochre — for your successor |
| **Ctrl + middle click** on a field | Mark it, pink — for yourself |
| Middle click held on CFL, XFL or ADES | Contextual filter, while held |

## Per field

| Field | Left click | Ctrl + left click | Middle click | Right click | Ctrl + right click |
|---|---|---|---|---|---|
| **Callsign** | Aircraft menu | Add or remove from the analysis group | — | Acknowledge not-seen and REV | — |
| **Ground speed** | Speed menu | Individual velocity vector | Mark | Cancel a failed datalink speed | — |
| **CFL** | Level menu | — | Mark, or hold to filter | Cancel a failed datalink level | — |
| **CNAV** | Waypoint menu | — | Mark | — | — |
| **XFL** | Exit level menu | — | Mark, or hold to filter | — | — |
| **ADES** | — | — | Mark, or hold to filter | — | — |
| **NS** | Datalink transfer, with **D** held | Manual transfer menu | Mark | Cancel a failed datalink transfer | Clear the next sector |
| **Conflict group** | — | — | Cycle the group | Remove from the group |  — |
| **SEQi** | Hold menu | Open the holding list for the stack | — | — | — |
| **HFL** | HFL menu | — | Mark, and bring it onto the base label | Acknowledge a change made elsewhere | — |
| **TaFL** | Profile menu, to change the cruising level | — | — | — | — |
| **Sequence number** | — | — | — | Clear the number | — |
| **Datalink request line** | Quick response menu | — | — | Acknowledge, when orange | — |
| **Request counter** | Pending Messages window | — | — | — | — |
| **SHRQ** mnemonic | — | — | — | Hide it locally | — |

## Keyboard

| Key | Where | Effect |
|---|---|---|
| **D**, held | Radar | Arms datalink transfer. Eligible NS fields are outlined |
| **Escape** | Anywhere | Close the menu, cancel the armed tool |
| **Delete** | Radar | Delete the selected range rings |
| **↑** / **↓** | In a menu or a list | Move the selection |
| **Enter** | In a menu or a list | Validate |
| Push-to-talk key | Anywhere, even outside the application | Transmit on the frequency |

The push-to-talk key is set in the TeamSpeak panel or in `config.json`. Its default is
`Control+Shift+Space`.

## In a list window

| Gesture | Effect |
|---|---|
| Hover a row | Highlight the flight on the radar |
| Left click a row | Open the aircraft menu |
| Right click a row | Acknowledge the flight |
| Left click an interactive cell | Open that field's menu |
| ↑ / ↓ | Reorder, where allowed |

## In the manual transfer menu

| Gesture | Effect |
|---|---|
| Left click **SCH** | List radar positions: `_APP`, `_CTR` |
| Left click **DELEG** | List aerodrome positions: `_DEL`, `_GND`, `_TWR`, `_FSS` |
| Hover a position | Show its frequency |
| ↑ / ↓, Enter | Move and validate |
| Escape | Close |

## In a value menu

Level, speed, heading, exit level menus all behave the same:

| Gesture | Effect |
|---|---|
| Left click a value | Issue it |
| Middle click a value | Prepare it, without issuing |
| Ctrl + middle click a value | Remove the prepared value |
| Type in the field, Enter | Issue a value not in the list |
| Click **DLK**, then a value | Send it by datalink |

Two menus depart from that:

| Menu | Difference |
|---|---|
| **HFL** | No DLK and no RFL — neither means anything for a hold. **Middle click reserves** the level in the stack instead of preparing it; middle click again releases it |
| **PROFILE**, the TaFL | No DLK and no RFL. An **Immediate** button instead: arm it before picking the level to make the change effective from the flight's present position rather than from your sector boundary |
