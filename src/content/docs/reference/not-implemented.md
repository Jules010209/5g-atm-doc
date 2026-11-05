---
title: What g-atm does not do
description: "The parts of 4-Flight that g-atm leaves out, and why: by choice, because IVAO does not carry them, or because the booklet does not define them."
---

g-atm follows the 4-Flight booklets closely, but not everything in them exists here.
This page lists what is missing, grouped by the reason. Where a chapter of this guide
meets one of these limits, it says so in a *Not in g-atm* box.

## Left out by choice

These parts of the booklet were deliberately not built.

- **Degraded modes and the backup screen.** Nothing of the degraded-mode chapter is
  built: the backup HMI used when radar data, tracking, flight data processing or the
  network fail, and the reduced modes of the main screen (the *REDUCED* alerts of the
  Global Menu, the "!" icon, the Service Area and its orange band, the *DLINK* band).
  The System Warning window, which is part of the main screen, is built.
- **Defence tools.** The chapter for military control positions (Planned and Active Mil
  Lists, assigning a flight to a cabin, the TSSR field) is not built: g-atm is for civil
  control.

## Not carried by IVAO

The real system rests on links and data that the IVAO network does not have.

- **No CoFlight and no OLDI.** There is no flight data processing shared between
  centres and no automatic coordination messages. What depends on them is absent: the
  *transferred* state a few seconds after a shoot, the NS OLDI cases, XFLs received
  from an OLDI centre, the SKIP of the first sector of a centre.
- **Sharing between g-atm positions only.** POINT, NEGO, FL?, iCoor, suite highlights,
  LOST, holds and the other data a suite or a centre shares travel between g-atm
  positions. With a controller on another client, they stay on your screen.
- **No Mode S downlink.** IVAO carries position, altitude, ground speed and squawk only.
  g-atm derives the heading, indicated speed and Mach from these and a wind model. The
  level selected by the pilot does not exist, so **DSAM** never fires on IVAO. On a
  [world server](/5g-atm-doc/simulation/joining/) the Mode S data is sent and DSAM works.
- **One radar source.** The radar sources of the Status menu (ARTAS, MSTS, Radar
  By-Pass) can be ticked, but there is only one source: the choice changes nothing.
- **No real correlator and no IFPS.** A pilot's position packets carry the callsign, so
  tracks are correlated from the start; decorrelation comes only from a lost track or a
  plan created at the position. VFR plans correlate like the others.
- **CPDLC dialogues stay with their station.** In 4F, an open datalink dialogue follows
  the flight to the next suite. On Hoppie a dialogue belongs to the station that opened
  it, so it stays with you; the transfer confirmation warns you.
- **No supervisor and no second screen of your own.** Gestures that belong to a
  supervisor or need another working position of the same controller are not offered:
  going back to FREE by giving away all your sectors, moving a position to another CWP.
  You leave a position by closing the session.
- **Traffic in PREPA mode.** On the real position, a position being prepared shows its
  future traffic in grey with only SEP and QDM. In g-atm, the OP CONF choice applies
  directly.
- **Active areas need an IVAO API key.** Without one, no special area is drawn and APW
  never fires.

## Not defined in the booklet

Some entries appear on the booklet's screenshots without any description. g-atm draws
them, and they do nothing:

- **Radar Menu → Tools → Mark LAT-LONG** and **Find LAT-LONG**: they close the menu.
- **Tools → OPSUP**: no submenu opens.
- The **HVI** button and the slider of the STAMAN window.
- The "0" row of the Point Session sector list is not reproduced.

Also left as the booklet leaves them: the oceanic clearance chapter, announced but
never written (the 3.0 booklet is the edition "without OCL"), and the different look of
extrapolated FPASD and holding flights, mentioned but not shown.

## Centre data that g-atm does not have

Some behaviours depend on parameters each real centre sets. Where the data does not
exist, g-atm uses a neutral value (see [Local
Settings](/5g-atm-doc/reference/local-settings/#site-parameters-you-cannot-change)):

- iFlux codes by flow exist for Reims (LFEE) only; elsewhere the iFlux is the ADES.
- No message is attached to special SSR codes (Ne-SSR): the booklet gives none.
- No APW exemption by flow, no APW look-ahead per area.
- Military areas are not tagged mandatory or optional per responsibility.
- No "VV/SSR volume" of codes is defined, so this filtering exception never applies.
- Switch and STAY are not shown in the Sector List.
- Letters of agreement come from the IVAO sector files. At the time of writing, only the
  Marseille file declares them, so COPX and agreed exit levels are richest there.

## The workstation itself

- **The dedicated keyboard** is replaced by PC keys: see [Mouse and
  keyboard](/5g-atm-doc/reference/mouse-keyboard/).
- **The main window keeps the system title bar** (it shows the version number); the
  real screen starts at the Global Menu.
