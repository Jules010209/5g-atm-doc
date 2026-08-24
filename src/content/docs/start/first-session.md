---
title: Your first session
description: A complete walkthrough, from opening the application to disconnecting.
---

This page assumes `config.json` and `op_config.json` are ready. If not, do those first:
[Account settings](/5g-atm-doc/start/configuration/) and [Operational
configuration](/5g-atm-doc/start/op-config/).

## 1. Choose what you are working

Open the application. Before connecting, click the **role label in the centre of the menu
bar** to open the PREPA window.

Select a **resp** or an **alias**, select a **role**, check the resolved sector list at the
bottom, and press **OK**.

Doing this first means your frequency and your datalink station are correct from the very
first second of your session.

## 2. Connect to the network

Click **CONNECT** at the right end of the menu bar. The connection panel opens with the
values from `config.json` already filled in.

| Field | Note |
|---|---|
| host / port | The IVAO world server. |
| teamspeak host / port | The voice server. It is also published in your ATIS. |
| callsign | The position you are opening, for example `LFMM_W_CTR`. |
| nom | Your name, as seen by others. |
| VID / password | Your IVAO credentials. |

Press **Connection**.

Three things then happen on their own:

1. Traffic starts appearing on the scope.
2. **Voice connects** to the TeamSpeak server, a channel named after your callsign is
   created if it does not exist, and you are moved into it. Observer positions are
   excluded.
3. **CPDLC comes online**, if datalink is enabled and configured, and your station code is
   published in your ATIS.

If the connection fails, the reason is shown in red under the buttons.

## 3. Set up your picture

Two settings decide what you see:

- The **flight level window** at the right of the menu bar filters by altitude. Set the
  lower and upper limits to your sector's vertical extent.
- **VFR**, **MIL** and **SEE ALL** toggle categories of traffic that are hidden by default.
  A blue frame means the filter is active.

Flights that concern you are never hidden by these filters, whatever you set.

Then pan and zoom to your area: **drag with the left button** to move the image, **mouse
wheel** to zoom.

## 4. Take a flight

Find an inbound flight and **left-click its callsign**. The aircraft menu opens with its
first entry already under your pointer, so a second click validates it immediately.

- If the flight is being transferred to you, the first entry is **Assume**.
- Once assumed, the label changes colour and the flight is yours.

## 5. Issue clearances

Everything is done on the label:

| To clear | Click |
|---|---|
| A level | the **CFL** field, then pick the level |
| A speed | the **speed** field |
| A heading | the **heading** field |
| A direct | the **CNAV** field, then pick the waypoint |
| An exit level | the **XFL** field |

Each opens a small menu next to the field. Pick a value, it is applied and the label
updates.

## 6. Transfer it

When the flight is leaving your airspace:

1. Set the **next sector** if it is not already known — hold **Ctrl** and left-click the
   **NS** field to choose the receiving position from the list.
2. Left-click the callsign and choose **Transfer Next**.

The receiving controller gets the offer and takes the flight. If you need to hand off to a
position that is not the planned next sector, use **Manual Trf…** in the same menu.

## 7. Disconnect

Click **DISCONNECT** in the menu bar, then **Disconnect** in the panel.

Voice is closed, every datalink session is terminated cleanly with a logoff to each
aircraft, and the network connection is closed. You can connect again in the same session
without restarting the application.

## What to read next

| If you want to | Read |
|---|---|
| Understand every field on a label | [Track and label anatomy](/5g-atm-doc/labels/anatomy/) |
| Know every mouse gesture | [Mouse and keyboard](/5g-atm-doc/reference/mouse-keyboard/) |
| Measure, extrapolate, draw rings | [Analysis tools](/5g-atm-doc/tools/analysis/) |
| Control by datalink | [CPDLC overview](/5g-atm-doc/cpdlc/overview/) |
