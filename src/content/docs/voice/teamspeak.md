---
title: TeamSpeak
description: How voice connects with your session, the Teamspeak window, push-to-talk, audio devices and the local test.
---

Voice is built into g-atm: it talks to the IVAO TeamSpeak servers itself, with no
second program to run. It connects and disconnects with your network session; the
Teamspeak window is only for settings and monitoring.

## Voice follows your session

When you press **Connection** in the IVAO Connection window:

1. g-atm logs in to the **Voice host** of that window, under your callsign, with your
   VID and IVAO password.
2. It looks for a channel named after your callsign (for example `LFMM_W_CTR`), creates
   it if it does not exist, and moves you into it.

When you disconnect from the network, voice is closed with it.

The Voice host is set in the IVAO Connection window, saved to `config.json` when you
connect, and published in your ATIS so that pilots find you. See [Account
settings](/5g-atm-doc/start/configuration/).

:::note
An observer callsign (ending in `_OBS`) gets no channel: g-atm leaves it where the
server puts it. Use **Join** in the Teamspeak window to move.
:::

## The Teamspeak window

Open it with **Tools → External Applications → Teamspeak**. It is a separate window that
you can place anywhere. Closing it does not cut the voice.

### Status

The first line says **CONNECTED**, **CONNECTING** or **DISCONNECTED**, with the voice
server below it, and the identity in use (callsign and VID).

While voice is not connected, a **RECONNECT** button is shown. If voice dropped while
your network session is still open (server lost, computer woken from sleep), it
reconnects the voice and your channel without touching the network session.

### Audio devices

| Control | What it does |
|---|---|
| **Input** | The microphone. `System default` follows the system setting. |
| **Output** | The headset. `System default` follows the system setting. |
| **Rescan** | Reads the device list again, after you plug in a headset. |

The devices are taken when voice connects. After changing them, press **Save settings**,
then **RECONNECT** or reconnect your session to use them.

### Push-to-talk

The **PTT** row shows your push-to-talk key (default **Ctrl + Shift + Space**).

1. Click **Set**. The field says *Press a key…*
2. Press the key or combination you want (Escape cancels).

The new key works at once; **Save settings** keeps it for the next launch.

On Windows the key works everywhere, even when another program has the focus, and it
keeps its normal use in other programs: choosing Space does not take Space away from
your other applications. On macOS and Linux it works only while a g-atm window has the
keyboard focus.

:::tip
If your PTT key is also a 4F key (Space is the AMID key, for example), push-to-talk wins:
the 4F function does not fire while it is your PTT key. See [Mouse and
keyboard](/5g-atm-doc/reference/mouse-keyboard/).
:::

### VHF effect

When ticked, received voice goes through a radio effect modelled on a VHF receiver.
Untick it for clean audio. It applies at once; **Save settings** keeps it.

### Local test

**Local test** sends your microphone to your headset so you can check both. Nothing is
transmitted. It works before you connect, and in session too: there, pressing your PTT
key still transmits normally while the test runs. Press **Stop local test** to end it.

### TX lamp and level meter

**TX** lights while you transmit (connected and PTT pressed). The bar shows your
microphone level: if it does not move when you speak, check the **Input** device.

### Mute

| Button | What it does |
|---|---|
| **Mute mic** | Your PTT no longer transmits. The button reads *Mic muted* while on. |
| **Mute headset** | Received voice is no longer played. The button reads *Headset muted* while on. |

### Save settings

Writes the devices, the PTT key and the VHF effect to `config.json`. *Saved ✓* confirms
it.

### Users and channels

- **Users** lists who is in your channel. **TX** marks the one transmitting.
- **Channels** lists the channels of the server. Hover one to see its number, codec and
  size; click it to put its number in **Ch. ID**.
- **Ch. ID**, **Password (optional)** and **Join** move you to another channel.

If your channel uses a codec g-atm does not support, the window says *Unsupported
channel codec* and voice is inactive in it: join another channel.

## When something is wrong

| Symptom | Check |
|---|---|
| *Requires an active IVAO World Server connection.* | Voice needs the network session: connect first. |
| *IVAO credentials incomplete* | Callsign, VID and password must all be filled in the IVAO Connection window. |
| Voice never connects | The Voice host and Voice port in the IVAO Connection window. |
| Nobody hears you | The TX lamp lights when you press PTT; the level meter moves when you speak; **Mute mic** is off; the right **Input** is selected. Use **Local test**. |
| You hear nothing | **Mute headset** is off; the right **Output**; the system volume; that you are in the right channel. |
| PTT does nothing in another program | On macOS and Linux this is expected. On Windows, pick another key with **Set**. |
| Audio sounds harsh | Untick **VHF effect**. |
| *Local test could not start* | The selected devices: pick them again, or **Rescan**. |
