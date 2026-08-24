---
title: Sequencing arrivals
description: Giving arriving flights a sequence number, reading it on the label, and reordering the sequence from the arrival list.
---

When you are sequencing several arrivals, you can give each flight a number by hand. The
number is yours: nothing computes it, and nothing checks it.

## Giving a number

**Sequence…** in the aircraft menu opens the Manual Sequencing menu: two columns, **A**
and **B**, each holding the numbers 1 to 9. Left click a number in the column you want.
The menu closes.

There are two sequences because an approach often runs two: one per runway, or one per
initial approach fix. They are independent — a number in A says nothing about a number
in B.

## Reading it on the label

The number appears in line 0, between the ground speed and the aircraft type:

```
45 2 CRJ9
AFR147B
240 -
NERKI CDG
```

It is **pink** for sequence A and **blue** for sequence B, on a black ground. The letter
is never written: the colour is the only thing that says which sequence the flight is in,
which is why two flights can carry the same number without any ambiguity.

**Right click the field** to clear the number.

## The sequence field is manual

This is worth stating plainly, because it is not what a computed sequence would do:

- the number of flights in a sequence is **not limited**;
- two flights **may carry the same number** in the same sequence;
- nothing renumbers anything when a flight leaves.

The field records your decision and displays it. If you want the numbers to mean
something, you keep them meaningful.

## From the arrival list

The **seq** column of the Arrival List shows the same number, in the same colour. Click
it to open the same menu.

Selecting a row and pressing **↑** or **↓** moves the flight within **its own sequence**
and renumbers that sequence from 1. Sequence A and sequence B are reordered separately —
moving a flight in B leaves A untouched, and never moves the flight from one to the
other. Renumbering stops at 9.
