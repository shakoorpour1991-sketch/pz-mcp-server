---
title: zombie.ai.astar.Mover
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.ai.astar
---

# zombie.ai.astar.Mover

`public interface Mover`

**Kind:** interface · **Package:** zombie.ai.astar

## Description

A tagging interface for an object representing the entity in the game that
is going to moving along the path. This allows us to pass around entity/state
information to determine whether a particular tile is blocked, or how much
cost to apply on a particular tile.

For instance, a Mover might represent a tank or plane on a game map. Passing round
this entity allows us to determine whether rough ground on a map should effect
the unit's cost for moving through the tile.

## Methods

### int getID()

**Returns:** `int`

### int getPathFindIndex()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\astar\Mover.html`*
