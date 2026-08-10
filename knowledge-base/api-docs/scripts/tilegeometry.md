---
title: "tileGeometry"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# tileGeometry

Soft Override  
Unknown

Used to define tile geometries for each
[tile](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/tile.html)
in a
[tileset](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/tileset.html).

## Hierarchy

This block can be a child of the following blocks:

- ROOT-TileGeometry

This block can have the following child blocks:

- [tileset](./tileset.md)

## ID

This block should have no ID.

## Parameters

#### VERSION

Type  
integer

Allowed values  
`1` \| `2`

The version of the tile geometry file format. The vanilla files use
version `2`.

If the value is `1`:

- coordinates will be parsed as is

If the value is `2`:

- coordinates will be divided by 10000
