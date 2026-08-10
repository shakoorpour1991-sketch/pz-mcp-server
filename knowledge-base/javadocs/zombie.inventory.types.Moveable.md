---
title: zombie.inventory.types.Moveable
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.Moveable

`public class Moveable extends InventoryItem`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.Moveable

## Description

Turbo.

## Constructors

### public Moveable(String module,
String name,
String type,
String tex)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `type`
- `String` `tex`

### public Moveable(String module,
String name,
String type,
Item item)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `type`
- `Item` `item`

## Methods

### public String getName()

**Returns:** `String`

### public String getName(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `String`

### public String getDisplayName()

**Returns:** `String`

### public boolean CanBeDroppedOnFloor()

**Returns:** `boolean`

### public String getMovableFullName()

**Returns:** `String`

### public String getCustomNameFull()

**Returns:** `String`

### public boolean isMultiGridAnchor()

**Returns:** `boolean`

### public IsoSpriteGrid getSpriteGrid()

**Returns:** `IsoSpriteGrid`

### public String getWorldSprite()

**Returns:** `String`

### public boolean ReadFromWorldSprite(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `boolean`

### public void getCustomIcon(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `void`

### public boolean isLight()

**Returns:** `boolean`

### public void setLight(boolean isLight)

**Parameters:**
- `boolean` `isLight`

**Returns:** `void`

### public boolean isLightUseBattery()

**Returns:** `boolean`

### public void setLightUseBattery(boolean lightUseBattery)

**Parameters:**
- `boolean` `lightUseBattery`

**Returns:** `void`

### public boolean isLightHasBattery()

**Returns:** `boolean`

### public void setLightHasBattery(boolean lightHasBattery)

**Parameters:**
- `boolean` `lightHasBattery`

**Returns:** `void`

### public String getLightBulbItem()

**Returns:** `String`

### public void setLightBulbItem(String lightBulbItem)

**Parameters:**
- `String` `lightBulbItem`

**Returns:** `void`

### public float getLightPower()

**Returns:** `float`

### public void setLightPower(float lightPower)

**Parameters:**
- `float` `lightPower`

**Returns:** `void`

### public float getLightDelta()

**Returns:** `float`

### public void setLightDelta(float lightDelta)

**Parameters:**
- `float` `lightDelta`

**Returns:** `void`

### public float getLightR()

**Returns:** `float`

### public void setLightR(float lightR)

**Parameters:**
- `float` `lightR`

**Returns:** `void`

### public float getLightG()

**Returns:** `float`

### public void setLightG(float lightG)

**Parameters:**
- `float` `lightG`

**Returns:** `void`

### public float getLightB()

**Returns:** `float`

### public void setLightB(float lightB)

**Parameters:**
- `float` `lightB`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void setWorldSprite(String worldSprite)

**Parameters:**
- `String` `worldSprite`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\Moveable.html`*
