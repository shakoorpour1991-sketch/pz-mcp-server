---
title: zombie.ai.states.SmashWindowState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states
---

# zombie.ai.states.SmashWindowState

`public final class SmashWindowState extends State`

**Kind:** class · **Package:** zombie.ai.states

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.SmashWindowState

## Fields

### public static final State.Param<Boolean> SCRATCHED

### public static final State.Param<IsoWindow> ISO_WINDOW

### public static final State.Param<VehicleWindow> VEHICLE_WINDOW

### public static final State.Param<BaseVehicle> VEHICLE

### public static final State.Param<VehiclePart> VEHICLE_PART

### public static final State.Param<Boolean> CLIMB_THROUGH_WINDOW

## Methods

### public static SmashWindowState instance()

**Returns:** `SmashWindowState`

### public void enter(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void execute(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void exit(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public void animEvent(IsoGameCharacter owner,
AnimLayer layer,
AnimationTrack track,
AnimEvent event)

**Parameters:**
- `IsoGameCharacter` `owner`
- `AnimLayer` `layer`
- `AnimationTrack` `track`
- `AnimEvent` `event`

**Returns:** `void`

### public boolean isDoingActionThatCanBeCancelled()

**Returns:** `boolean`

### public boolean isProcessedOnEnter()

**Returns:** `boolean`

### public void processOnEnter(IsoGameCharacter owner,
Map<Object,Object> delegate)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Map<Object,Object>` `delegate`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\SmashWindowState.html`*
