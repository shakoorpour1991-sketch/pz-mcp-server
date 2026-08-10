---
title: zombie.scripting.itemConfig.SelectorBucket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.itemConfig
---

# zombie.scripting.itemConfig.SelectorBucket

`public class SelectorBucket extends Object`

**Kind:** class · **Package:** zombie.scripting.itemConfig

## Inheritance
- java.lang.Object
- zombie.scripting.itemConfig.SelectorBucket

## Constructors

### public SelectorBucket(int[] selectorIds,
SelectorBucketScript script,
SelectorBucket[] children,
Randomizer randomizer)

**Parameters:**
- `int[]` `selectorIds`
- `SelectorBucketScript` `script`
- `SelectorBucket[]` `children`
- `Randomizer` `randomizer`

## Methods

### public SelectorType getSelectorType()

**Returns:** `SelectorType`

### public int[] getSelectorIDs()

**Returns:** `int[]`

### public SituatedType getSelectorSituated()

**Returns:** `SituatedType`

### public int getSelectorWorldAge()

**Returns:** `int`

### public Randomizer getRandomizer()

**Returns:** `Randomizer`

### public String getOrigSelectorString()

**Returns:** `String`

### public boolean containsSelectorID(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean hasSelectorIDs()

**Returns:** `boolean`

### public boolean Resolve(GameEntity entity,
ItemPickInfo info)

**Parameters:**
- `GameEntity` `entity`
- `ItemPickInfo` `info`

**Returns:** `boolean`

### public boolean ResolveOnCreate(GameEntity entity)

**Parameters:**
- `GameEntity` `entity`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\itemConfig\SelectorBucket.html`*
