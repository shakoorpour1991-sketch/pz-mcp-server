---
title: zombie.ai.states.ClimbSheetRopeState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.ClimbSheetRopeState

`public final class ClimbSheetRopeState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.ClimbSheetRopeState

## Fields

### public static final float FallChanceBase

### public static final float FallChanceMultiplier

### public static final float ClimbSpeed

### public static final float ClimbSlowdown

### public static final State.Param<Float> SPEED

### public static final State.Param<Boolean> CLIMB

## Methods

### public static ClimbSheetRopeState instance()

**Returns:** `ClimbSheetRopeState`

### public void enter(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public void execute(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public void exit(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public void setParams(IsoGameCharacter isoGameCharacter,
State.Stage stage)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `State.Stage` `stage`

**Returns:** `void`

### public static void createClimbData(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public static void setIdealDirection(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public static void applyIdealDirection(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public void debug(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public boolean isProcessedOnEnter()

**Returns:** `boolean`

### public void processOnEnter(IsoGameCharacter owner,
Map<Object,Object> delegate)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Map<Object,Object>` `delegate`

**Returns:** `void`

### public boolean isProcessedOnExit()

**Returns:** `boolean`

### public void processOnExit(IsoGameCharacter owner,
Map<Object,Object> delegate)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Map<Object,Object>` `delegate`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\ClimbSheetRopeState.html`*
