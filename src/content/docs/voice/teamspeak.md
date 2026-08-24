---
title: TeamSpeak
description: Voice is connected with your network session. How to set it up and what the panel does.
---

Voice is built into g-atm. There is no second application to launch and no server to type
in every time.

## It connects on its own

When you connect to the network:

1. Voice connects to the TeamSpeak server given in the Connect menu.
2. A channel named after your **callsign** is created, if it does not already exist.
3. You are moved into it.

When you disconnect from the network, voice is closed.

:::note
Observer positions, callsigns ending in `_OBS`, do not get a channel created and are not
moved. An observer joins existing channels manually.
:::

The server is set **once**, in the `teamspeak host` and `ts port` fields of the Connect
menu. It is saved back to `config.json`, and it is also the server published in your ATIS,
so pilots see the correct one.

## The panel

**Tools → External Applications → Teamspeak.**

The panel has no connect button and no server field: the session follows your network
connection. What it does carry:

### Audio

| Setting | What it does |
|---|---|
| **Input** | Microphone. `System default` uses the Windows device |
| **Output** | Speakers or headset |
| **Rescan** | Re-reads the list of audio devices, after plugging in a headset |

### PTT

The push-to-talk key. Click **Set**, press the key you want, and it is captured.

It is a **global** shortcut: it works even when g-atm is not the focused window, so you can
transmit while looking at charts in another application.

### VHF effect

A checkbox. When on, received voice goes through a bandpass filter, compression and static
modelled on a VHF radio. Turn it off for clean audio.

### Mic test

Routes your microphone to your speakers so you can check your audio **without a server**.
It is disabled while connected.

### TX indicator and level meter

`TX` lights while you transmit, and the bar shows your microphone level. If the bar does
not move when you speak, the wrong input device is selected.

### Save settings

Writes the audio settings back to `config.json` so they are used next time.

### Users and channels

Two lists: who is connected, and which channels exist. A user transmitting is marked `TX`.
Clicking a channel fills its ID into the field below, so you can switch to it, with a
password if one is needed.

## Troubleshooting

| Symptom | Check |
|---|---|
| No one hears you | The PTT key is captured, the level meter moves when you speak, the correct input device is selected |
| You hear nothing | Output device, Windows volume, and that you are in the right channel |
| Voice never connects | The `teamspeak host` in the Connect menu, and that your callsign is not an `_OBS` position |
| The channel was not created | Same: `_OBS` positions do not create one |
| PTT does nothing in another window | The shortcut may be taken by another application. Set a different one |
| Audio sounds harsh | Turn off **VHF effect** |
