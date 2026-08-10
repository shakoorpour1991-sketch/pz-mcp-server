---
title: zombie.core.physics.WorldSimulation
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.physics
---

# zombie.core.physics.WorldSimulation

`public final class WorldSimulation extends Object`

**Kind:** class · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- zombie.core.physics.WorldSimulation

## Fields

### public static WorldSimulation instance

### public HashMap<Integer, IsoMovingObject> physicsObjectMap

### public boolean created

### public float offsetX

### public float offsetY

### public long time

### public float periodSec

## Constructors

### public WorldSimulation()

## Methods

### public void create()

**Returns:** `void`

### public void destroy()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void activateChunkMap(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void deactivateChunkMap(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void scrollGroundLeft(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void scrollGroundRight(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void scrollGroundUp(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void scrollGroundDown(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static TextureDraw.GenericDrawer getDrawer(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `TextureDraw.GenericDrawer`

### public int getBulletFrameNo()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\WorldSimulation.html`*
