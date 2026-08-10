---
title: zombie.entity.EngineSystem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity
---

# zombie.entity.EngineSystem

`public abstract class EngineSystem extends Object`

**Kind:** class · **Package:** zombie.entity

## Inheritance
- java.lang.Object
- zombie.entity.EngineSystem

## Constructors

### public EngineSystem()

### public EngineSystem(boolean updater,
boolean simulationUpdater,
int updatePriority)

**Parameters:**
- `boolean` `updater`
- `boolean` `simulationUpdater`
- `int` `updatePriority`

### public EngineSystem(boolean updater,
boolean simulationUpdater,
int updatePriority,
boolean renderer,
int renderLastPriority)

**Parameters:**
- `boolean` `updater`
- `boolean` `simulationUpdater`
- `int` `updatePriority`
- `boolean` `renderer`
- `int` `renderLastPriority`

## Methods

### public final boolean isEnabled()

**Returns:** `boolean`

### public final void setEnabled(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public final void setUpdater(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public final void setSimulationUpdater(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public final void setRenderer(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public final Engine getEngine()

**Returns:** `Engine`

### public void addedToEngine(Engine engine)

**Parameters:**
- `Engine` `engine`

**Returns:** `void`

### public void removedFromEngine(Engine engine)

**Parameters:**
- `Engine` `engine`

**Returns:** `void`

### public final int getUpdatePriority()

**Returns:** `int`

### public final boolean isUpdater()

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public final int getUpdateSimulationPriority()

**Returns:** `int`

### public final boolean isSimulationUpdater()

**Returns:** `boolean`

### public void updateSimulation()

**Returns:** `void`

### public final int getRenderLastPriority()

**Returns:** `int`

### public final boolean isRenderer()

**Returns:** `boolean`

### public void renderLast()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\EngineSystem.html`*
