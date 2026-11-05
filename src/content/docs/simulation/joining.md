---
title: Joining a simulation
description: How to join a g-atm world-server training session with your normal installation, and what changes while you are on it.
---

A **world server** is a local traffic server for training: it replays a real day or a
scenario, every position nobody holds is played by a robot, and nothing reaches IVAO.
You join it with your normal g-atm, the way you join IVAO: only two addresses change.

This page is for participants. Hosting a session is described in `SIMULATION.md`, in the
g-atm repository.

## What the host gives you

- the server **address** (a name or an IP address);
- its **port** (the FSD port, `6809` unless the host says otherwise);
- the **session password**, if the session has one;
- the **positions** of the session, and how you will talk to each other: the world
  server has no voice.

## Join

1. Open **Tools → External Applications → IVAO Connection**.
2. Set **Host** and **Voice host** to the server address, and **Port** to its port.
3. Set **Callsign** to a position of the session, for example `LFMM_W_CTR`.
4. Leave **Name** and **VID** as they are. In **Password**, type the session password if
   there is one.
5. Press **Connection**. The robot that held your position hands it to you, with its
   coordinations in progress.
6. Choose your position in OP CONF CHG PREP, as on IVAO
   ([OP CONF and PREPA mode](/5g-atm-doc/cco/op-conf/)).

To give the position back, disconnect: the robot takes it again about two minutes later.

To go back to IVAO, put the IVAO addresses back in **Host** and **Voice host**
(`worldserver.eu-west-2.ivao.aero` and `ts-1.eu-west-2.ivao.aero` by default).

:::caution
Change the **Voice host** too. Left on IVAO, g-atm would join the IVAO TeamSpeak under
your simulation callsign.
:::

:::note
Your password goes to the world server as it would go to IVAO. A session without a
session password does not read it: you can type anything else there. Your VID must
still be on g-atm's access list.
:::

## What changes on a world server

g-atm recognises a world server before it connects (this can delay the connection by up
to three seconds on a server that is neither IVAO nor a world server). Everything else
works as on IVAO, with these differences:

| What | On a world server |
|---|---|
| **Datalink** | CPDLC goes to the server's own station, not to Hoppie, under a session code: your Hoppie logon code is never sent there. You still need datalink enabled with a logon code in `config.json`, as for IVAO ([Setting up datalink](/5g-atm-doc/cpdlc/setup/)). |
| **OP CONF positions** | g-atm reads `op_config_simu.json` instead of `op_config.json`, if you have one in the data folder. Your IVAO `op_config.json` is kept for IVAO. |
| **Sector volumes** | g-atm uses its simulation volumes (the French sectors of the eAIP) for the regions that have them, and its IVAO volumes elsewhere. On IVAO it never uses them. |
| **Mode S** | The server sends each aircraft's Mode S data (selected level, heading, speeds, vertical rate), so the Mode S line and the alerts that need it, such as DSAM, work. |
| **Shared notes** | The rate you assign is flown by the pilot and seen by the other positions. Your XCOOR becomes the next sector's ECOOR, and the other way round; a robot neighbour acts on them as if you had phoned. On IVAO these notes stay on your screen. |
| **Traffic** | The server sends you the flights near your sectors or concerning them (40 NM around by default, set by the host). |
| **Weather** | g-atm reads the real METAR and takes its runways from it. The host aligns the robots on the real runway in use. |
| **Voice** | None: the session has no TeamSpeak. |

The choice of `op_config_simu.json` and of the volumes follows the **Host** field: it
switches as soon as you type a host that is not an IVAO server (a name not ending in
`.ivao.aero`), and switches back when you return to IVAO.

## Holding an eAIP sector

With your IVAO files you can hold the IVAO positions of the session. To hold the real
French sectors of the eAIP, alone or grouped, you need two things from the host:

- the session's position file, saved in your data folder as `op_config_simu.json`;
- the "(eAIP)" copies of the sector packages, laid beside your IVAO packages in your
  `sectors` folder. The `gatm-simserver eaip` command of the server's tool lays them;
  ask the host for the tool or for the files.

Then, in OP CONF CHG PREP, the eAIP sectors and groupings are listed, and validating one
loads its "(eAIP)" sector file.

See [Files and folders](/5g-atm-doc/reference/files/) for where these files go.
