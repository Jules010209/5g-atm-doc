# Screenshot shot list

Not part of the published site. Working list of the images the guide needs, and where each
one goes. Send the files and they get inserted at the marked spot.

Suggested location once they exist: `src/assets/screenshots/<name>.png`.

## Priority 1 — the guide is noticeably weaker without these

| Name | Page | Insert at | What to capture |
|---|---|---|---|
| `radar-overview` | index, `interface/layout` | Under "The radar image" | Full application window, connected, real traffic, a few labels visible |
| `label-base` | `labels/anatomy` | Replacing the ASCII block under "The base label" | One base label, zoomed, ideally with a CFL and an XFL shown |
| `label-extended` | `labels/anatomy` | Under "The extended label" | The same flight hovered |
| `label-deployed` | `labels/anatomy` | Under "The deployed panel" | The deployed panel open, tab bar visible |
| `aircraft-menu` | `control/assume-transfer` | Under "The aircraft menu" | The callsign menu open on an assumed flight, so every entry is enabled |
| `cfl-menu` | `control/clearances` | Under "Cleared level" | The level menu open, DLK visible |
| `man-transfer` | `control/assume-transfer` | Under "The manual transfer menu" | The menu open with SCH selected and positions listed |
| `menu-bar` | `interface/menu-bar` | Top of the page | The menu bar alone, full width, connected |
| `tools-menu` | `interface/menu-bar` | Under "Tools" | The Tools menu open, submenus visible |
| `radar-menu` | `interface/radar-menu` | Top of the page | The Radar menu open on the image |

## Priority 2 — useful, each illustrates one section

| Name | Page | Insert at | What to capture |
|---|---|---|---|
| `prepa-window` | `start/op-config` | Under "The PREPA window" | OP CONF CHG PREP with a resp and a role selected, resolved sectors visible |
| `connect-panel` | `start/first-session` | Under "Connect to the network" | The connection panel, credentials blanked |
| `sector-list` | `tools/lists` | Under "Flight lists" | The Sector List with a few flights |
| `agenda` | `tools/lists` | Under "Agenda" | The Agenda with at least one datablock |
| `dyp-info` | `control/flight-plan` | Under "DYP Info" | A DYP strip, PRINCIPAL tab |
| `teamspeak-panel` | `voice/teamspeak` | Under "The panel" | The TeamSpeak panel, connected, users and channels listed |
| `range-rings` | `tools/analysis` | Under "Range rings" | A selected set with its handles and its information box |
| `qdm-sep` | `tools/analysis` | Under "QDM" | A QDM and a SEP drawn between tracks |
| `states-colours` | `labels/states` | Under the family table | Four labels side by side, one per family, if such a moment can be captured |

## Priority 2b — features added since the first pass

| Name | Page | Insert at | What to capture |
|---|---|---|---|
| `system-maps` | `interface/system-maps` | Under "The two panes" | The System Maps window, an aerodrome expanded, a map family selected so the right pane lists procedures one by one |
| `sequence-menu` | `control/sequencing` | Under "Giving a number" | The Manual Sequencing menu open, columns A and B visible, one cell hovered |
| `label-sequence` | `control/sequencing` | Replacing the ASCII block under "Reading it on the label" | Two labels side by side, one with a pink number and one with a blue one |
| `hold-menu` | `control/hold` | Under "Opening the hold menu" | The hold menu with the WPT tab active and route points listed |
| `hfl-menu` | `control/hold` | Under "The holding level, HFL" | The HFL menu, ideally with one level reserved and greyed |
| `profile-menu` | `control/clearances` | Under "Cruising level, the TaFL" | The PROFILE menu open, the current level on its black row, Immediate visible |
| `rvsm-menu` | `labels/fields` | Under "RVSM equipment" | The RVSM menu open, showing the three choices |
| `label-now` | `labels/fields` | Under "RVSM equipment" | A base label carrying the `noW` mnemonic |
| `messages-box` | `control/messages` | Top of the page | The message box with the frequency channel selected and a few messages |
| `mail-unread` | `control/messages` | Under the intro | The menu bar with the envelope on its blue phase |
| `nsrl` | `tools/lists` | Under "The NSRL" | The NotSeen/Rev window with a few flights |
| `sector-file-menu` | `interface/menu-bar` | Under "Sector File" | Set Up → Sector File open, the `.isc` list visible with one marked as loaded |

## Priority 3 — CPDLC, needs a datalink session

| Name | Page | Insert at | What to capture |
|---|---|---|---|
| `cpdlc-dot` | `cpdlc/overview` | Under "The dot" | A label with the datalink dot |
| `cpdlc-box-states` | `cpdlc/uplinks` | Under "Reading the box" | A framed CFL. Ideally one shot per colour: white, yellow, orange |
| `cpdlc-request` | `cpdlc/downlinks` | Under "The request line" | A label with a blue REQ line |
| `dl-answer` | `cpdlc/downlinks` | Under "Answering" | The DL answer menu open under a request line |
| `pending-messages` | `cpdlc/downlinks` | Under "The Pending Messages window" | The window with two or more requests |
| `cpdlc-transfer` | `cpdlc/transfer` | Under "The DLK key" | The NS field outlined while D is held |
| `cpdlc-menu` | `cpdlc/setup` | Under "Bring the station online" | Tools → CPDLC open, status line showing ONLINE |

## Notes

- Blank the VID, password and Hoppie code in anything showing a configuration panel.
- Real callsigns from the network are fine; they are public.
- PNG, captured at the application's native size rather than scaled up.
