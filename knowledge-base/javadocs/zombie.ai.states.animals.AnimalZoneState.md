---
title: zombie.ai.states.animals.AnimalZoneState
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.states.animals
---

# zombie.ai.states.animals.AnimalZoneState

`public final class AnimalZoneState extends State`

**Kind:** class · **Package:** zombie.ai.states.animals

## Inheritance
- java.lang.Object
- zombie.ai.State
- zombie.ai.states.animals.AnimalZoneState

## Fields

### public static final State.Param<String> ACTION

### public static final State.Param<zombie.ai.states.animals.AnimalZoneState.ZoneState> STATE

## Methods

### public static AnimalZoneState instance()

**Returns:** `AnimalZoneState`

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

### public boolean isMoving(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\states\animals\AnimalZoneState.html`*
