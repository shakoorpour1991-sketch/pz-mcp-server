---
title: "ItemPickerContainer properties"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, mapping]
---

# ItemPickerContainer properties

Reference documentation for ItemPickerContainer procedural list entry
properties. Those are used to define the procedural distributions which
will be used for the containers of the rooms.

## forceForItems

If the container's room has one of those tiles, this procedural
distribution entry will be forced to spawn.

**Type:**

- Main: `array`
- Separator: `;`

## forceForRooms

If the building of the container has one of those rooms, this procedural
distribution entry will be forced to spawn.

**Type:**

- Main: `array`
- Separator: `;`

## forceForTiles

If the square of the container has one of those tiles, this procedural
distribution entry will be forced to spawn.

**Type:**

- Main: `array`
- Separator: `;`

## forceForZones

**Type:**

- Main: `array`
- Separator: `;`

> [!WARNING]
> This property does nothing and has no effect.

## max

The maximum number of times this procedural distribution entry can
spawn.

## min

A minimum value of 1 will force this entry to spawn.

## name

The procedural distribution entry name.

## weightChance
