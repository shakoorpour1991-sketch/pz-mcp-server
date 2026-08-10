---
title: zombie.characters.IsoGameCharacter.XP
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.IsoGameCharacter.XP

`public class IsoGameCharacter.XP extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.IsoGameCharacter.XP

## Fields

### public int level

### public int lastlevel

### public float totalXp

### public HashMap<PerkFactory.Perk, Float> xpMap

### public HashMap<PerkFactory.Perk, IsoGameCharacter.XPMultiplier> xpMapMultiplier

## Constructors

### public XP(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

## Methods

### public void addXpMultiplier(PerkFactory.Perk perks,
float multiplier,
int minLevel,
int maxLevel)

**Parameters:**
- `PerkFactory.Perk` `perks`
- `float` `multiplier`
- `int` `minLevel`
- `int` `maxLevel`

**Returns:** `void`

### public HashMap<PerkFactory.Perk, IsoGameCharacter.XPMultiplier> getMultiplierMap()

**Returns:** `HashMap<PerkFactory.Perk, IsoGameCharacter.XPMultiplier>`

### public float getMultiplier(PerkFactory.Perk perk)

**Parameters:**
- `PerkFactory.Perk` `perk`

**Returns:** `float`

### public int getPerkBoost(PerkFactory.Perk type)

**Parameters:**
- `PerkFactory.Perk` `type`

**Returns:** `int`

### public void setPerkBoost(PerkFactory.Perk perk,
int level)

**Parameters:**
- `PerkFactory.Perk` `perk`
- `int` `level`

**Returns:** `void`

### public int getLevel()

**Returns:** `int`

### public void setLevel(int newlevel)

**Parameters:**
- `int` `newlevel`

**Returns:** `void`

### public float getTotalXp()

**Returns:** `float`

### public void AddXP(PerkFactory.Perk type,
float amount)

**Parameters:**
- `PerkFactory.Perk` `type`
- `float` `amount`

**Returns:** `void`

### public void AddXPHaloText(PerkFactory.Perk type,
float amount)

**Parameters:**
- `PerkFactory.Perk` `type`
- `float` `amount`

**Returns:** `void`

### public void AddXP(PerkFactory.Perk type,
float amount,
boolean noMultiplier)

**Parameters:**
- `PerkFactory.Perk` `type`
- `float` `amount`
- `boolean` `noMultiplier`

**Returns:** `void`

### public void AddXP(PerkFactory.Perk type,
float amount,
boolean noMultiplier,
boolean haloText)

**Parameters:**
- `PerkFactory.Perk` `type`
- `float` `amount`
- `boolean` `noMultiplier`
- `boolean` `haloText`

**Returns:** `void`

### public void AddXPNoMultiplier(PerkFactory.Perk type,
float amount)

**Parameters:**
- `PerkFactory.Perk` `type`
- `float` `amount`

**Returns:** `void`

### public void AddXP(PerkFactory.Perk type,
float amount,
boolean callLua,
boolean doXPBoost,
boolean remote)

**Parameters:**
- `PerkFactory.Perk` `type`
- `float` `amount`
- `boolean` `callLua`
- `boolean` `doXPBoost`
- `boolean` `remote`

**Returns:** `void`

### public void AddXP(PerkFactory.Perk type,
float amount,
boolean callLua,
boolean doXPBoost,
boolean remote,
boolean haloText)

**Parameters:**
- `PerkFactory.Perk` `type`
- `float` `amount`
- `boolean` `callLua`
- `boolean` `doXPBoost`
- `boolean` `remote`
- `boolean` `haloText`

**Returns:** `void`

### public float getXP(PerkFactory.Perk type)

**Parameters:**
- `PerkFactory.Perk` `type`

**Returns:** `float`

### @Deprecated
public void AddXP(HandWeapon weapon,
int amount)

> ⚠️ **Deprecated**

**Parameters:**
- `HandWeapon` `weapon`
- `int` `amount`

**Returns:** `void`

### public void setTotalXP(float xp)

**Parameters:**
- `float` `xp`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void setXPToLevel(PerkFactory.Perk key,
int perkLevel)

**Parameters:**
- `PerkFactory.Perk` `key`
- `int` `perkLevel`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\IsoGameCharacter.XP.html`*
