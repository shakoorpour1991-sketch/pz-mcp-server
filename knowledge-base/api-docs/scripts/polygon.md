---
title: "polygon"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# polygon

Soft Override  
Unknown

[box](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/box.html),
[cylinder](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/cylinder.html)
and
[polygon](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/polygon.html)
are used in
[tileGeometry.txt](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/root-tilegeometry.html)
to define the tile depth of a tile.

You can find more information
[here](https://pzwiki.net/wiki/Tile_depth).

## Hierarchy

This block can be a child of the following blocks:

- [tile](./tile.md)

## ID

This block should have no ID.

## Parameters

#### plane

Type  
string

Allowed values  
`XY` \| `XZ` \| `YZ`

No description provided.

#### points

Type  
object (object: integer-\>\>integer, kv: 'x', pairs: ' ')

Defines the points of the polygon. the format needs to be
`X1xY1 X2xY2 X3xY3` and so on. The first point (X1, Y1) is connected to
the second point (X2, Y2), the second point (X2, Y2) is connected to the
third point (X3, Y3), and so on. The last point is connected to the
first point, creating a closed shape.

You can have as many points as you want.

#### rotate

Type  
array (array of integer, separator: 'x')

No description provided.

#### translate

Type  
array (array of integer, separator: 'x')

No description provided.
