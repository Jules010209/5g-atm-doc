---
title: CPDLC troubleshooting
description: Why the station will not come online, why a pilot cannot log on, why DLK is greyed, and why a request or an answer does not show.
---

Most datalink problems come from the station, from the rights on the flight, or from the
network's slow rhythm. Start with the state of the station: **Tools → External
Applications → CPDLC Station**, and the messages of the **System Warning Window**.

## The station will not come online

The first line of the CPDLC Station menu gives the state. When the datalink server itself
answers, the System Warning Window also gives the reason, in the application's words
(partly in French).

| Station line | System Warning Window | Cause | Fix |
|---|---|---|---|
| `LOGGED OFF` after connecting to the network | — | Datalink is not enabled, or the logon code is empty: the station is never started by itself | Set `enabled` to `true` and fill `logon_code` in `config.json`, then restart g-atm. See [Setting up datalink](/5g-atm-doc/cpdlc/setup/) |
| `ERROR WITH ‹code›` after a manual **Connect** | — | Same; or a station code in `op_config.json` is too short, too long or contains `_` | Same; use 3 to 7 letters or digits |
| `ERROR WITH null` | — | No position is known to take a code from | Connect to the network, or validate a position in PREPA |
| `ERROR WITH …` | `CPDLC ERROR (…)` with the server's reason | The datalink server refused the station, for example a wrong logon code | Check the code against your Hoppie account |
| `ERROR WITH …` | `CPDLC ERROR (hoppie injoignable: …)` | The server cannot be reached | Check your connection, and `base_url` |
| `‹code› CALLSIGN IN USE` | `CPDLC ‹code› LOCK-CONFLICT (…)` | Every code you declared is held by other controllers | Wait about 100 seconds after one is released, or declare more `fallback_logons` |
| `LOGGED WITH` another code than expected | — | Your first code was taken; a fallback was adopted | Normal. The code in your ATIS is the adopted one |

The station also goes offline when you disconnect from the network, and may switch code
when you validate another position in PREPA.

## Pilots cannot log on

- **Check your ATIS.** It must carry `CPDLC ID ‹code›`. If the line is missing, the
  station is not online.
- **Check the code you give out**: the station code, not your position callsign.
- **Check the flight is in your traffic.** A logon from a flight g-atm does not receive
  is refused with `UNABLE DUE TO AIRSPACE`.

## Nothing seems to happen

The Hoppie network is polled every 45 to 75 seconds, at random intervals, as the service
requires; every 20 seconds for two minutes after you send something. A logon, a request or
an answer can take up to a minute to show. Wait one cycle before concluding that
something is broken.

## DLK is greyed

Hover it. The tooltip gives the reason (in French):

| Tooltip | Meaning |
|---|---|
| `Vol sans session Datalink` | The flight is not logged on to your station (no lightning bolt) |
| `Vol non assumé — CPDLC réservé à la suite qui le tient` | You have not assumed the flight. A shot flight no longer counts |
| `Dialogue déjà en cours` | A dialogue of the same kind is still open with this flight. Wait for the answer, or acknowledge the failed one |

When DLK is armed, other buttons grey on purpose: E.DESC and EXPEDITE (CFL menu), min and
max (ASP menu), Double (Waypoint menu). None of them can go by datalink. A point typed in
the Waypoint menu does nothing while DLK is armed: pick it in the list.

## A pilot says they sent a request, and you see nothing

| Cause | What to check |
|---|---|
| You are looking at the base label | The request line shows only in the selected label. In the base label, only the lightning bolt turns blue |
| You have not assumed the flight | Requests show only on the position that has it assumed |
| No sector of your centre has assumed it yet | The request was rejected automatically; the pilot received `CPDLC TRANSFER NOT COMPLETED - REPEAT REQUEST` |
| The request is not a level or a direct | It was answered automatically with `SERVICE UNAVAILABLE` |
| The network has not delivered it yet | Wait one polling cycle |

## A frame stays orange or red

That is on purpose: a failed dialogue waits for you to notice it. **Right click** the
framed field; for a `TIMEOUT`, choose **CANCEL** in the menu that opens. Then go back to
the frequency: acknowledging restores nothing. See [Sending
clearances](/5g-atm-doc/cpdlc/uplinks/#acknowledging-a-failed-dialogue).

A failed datalink **transfer** leaves the flight shot in the system: reclaim it and
transfer it by voice. See [Transfer and Comm Resp](/5g-atm-doc/cpdlc/transfer/).

## A clearance goes to TIMEOUT after 40 seconds

The 40-second limit applies only to aircraft that send technical acknowledgements, which
today means simulated aircraft. Their acknowledgement did not come in time. The usual
limit for a pilot answer is 119 seconds.

## The lightning bolt disappeared

| Cause | |
|---|---|
| The pilot logged off | Any open dialogue turns orange (`TRANSMISSION FAILED`) and waits for you |
| The flight left the traffic | After three polls without it, its session, dialogues and requests are dropped |
| You ended its session | **Logoff ‹callsign›** in the CPDLC Station menu |
| The station went offline | Every flight received the end of its session |

After a successful datalink transfer, the bolt **stays**: the aircraft is still logged
on, to the next centre.

## Known limits

- The polling rhythm is imposed by the Hoppie service. It cannot be shortened.
- The network allows one station per code: two positions of one centre need two codes.
- A dialogue stays with the station that opened it; it does not follow the flight to the
  next position.
- The pilot answer limits (119 s and 40 s) come from the 4-Flight booklet. The booklet
  gives no value for an unanswered pilot request: g-atm uses 250 seconds, after the
  published datalink guidance.
