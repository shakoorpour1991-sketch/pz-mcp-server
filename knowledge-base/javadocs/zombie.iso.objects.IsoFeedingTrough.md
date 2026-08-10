---
title: zombie.iso.objects.IsoFeedingTrough
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoFeedingTrough

`public final class IsoFeedingTrough extends IsoObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoFeedingTrough

## Fields

### public ArrayList<IsoAnimal> linkedAnimals

### public boolean north

## Constructors

### public IsoFeedingTrough(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoFeedingTrough(IsoGridSquare square,
String spriteName,
IsoGridSquare linkedSquare)

**Parameters:**
- `IsoGridSquare` `square`
- `String` `spriteName`
- `IsoGridSquare` `linkedSquare`

## Methods

### public void checkContainer()

**Returns:** `void`

### public boolean isItemAllowedInContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `boolean`

### public void checkZone()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void checkIsoRegion()

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void checkWaterFromRain()

**Returns:** `void`

### public String getObjectName()

**Returns:** `String`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void setContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container` — the container to set

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void initWithDef()

**Returns:** `void`

### public void doDef(se.krka.kahlua.j2se.KahluaTableImpl def)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `def`

**Returns:** `void`

### public void checkOverlayFull(boolean transmit)

**Parameters:**
- `boolean` `transmit`

**Returns:** `void`

### public void checkOverlayAfterAnimalEat()

**Returns:** `void`

### public void onFoodAdded()

**Returns:** `void`

### public void onRemoveFood()

**Returns:** `void`

### public float getFeedAmount(String type)

**Parameters:**
- `String` `type`

**Returns:** `float`

### public void updateLuaObject()

**Returns:** `void`

### public ArrayList<String> getAllFeedingTypes()

**Returns:** `ArrayList<String>`

### public int getLinkedX()

**Returns:** `int`

### public int getLinkedY()

**Returns:** `int`

### public void setLinkedX(int x)

**Parameters:**
- `int` `x`

**Returns:** `void`

### public void setLinkedY(int y)

**Parameters:**
- `int` `y`

**Returns:** `void`

### public IsoFeedingTrough getMasterTrough()

**Returns:** `IsoFeedingTrough`

### public float getMaxWater()

**Returns:** `float`

### public void setMaxWater(float maxWater)

**Parameters:**
- `float` `maxWater`

**Returns:** `void`

### public float getWater()

**Returns:** `float`

### public void removeWater(float water)

**Parameters:**
- `float` `water`

**Returns:** `void`

### public void addWater(FluidType type,
float amount)

**Parameters:**
- `FluidType` `type`
- `float` `amount`

**Returns:** `void`

### public ArrayList<IsoAnimal> getLinkedAnimals()

**Returns:** `ArrayList<IsoAnimal>`

### public void setLinkedAnimals(ArrayList<IsoAnimal> linkedAnimals)

**Parameters:**
- `ArrayList<IsoAnimal>` `linkedAnimals`

**Returns:** `void`

### public boolean isEmptyFeed()

**Returns:** `boolean`

### public int getMaxFeed()

**Returns:** `int`

### public void setMaxFeed(int maxFeed)

**Parameters:**
- `int` `maxFeed`

**Returns:** `void`

### public void setDef(se.krka.kahlua.j2se.KahluaTableImpl def)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `def`

**Returns:** `void`

### public void setNorth(boolean north)

**Parameters:**
- `boolean` `north`

**Returns:** `void`

### public void addLinkedAnimal(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public float getCurrentFeedAmount()

**Returns:** `float`

### public void createFluidContainer()

**Returns:** `void`

### public void removeFluidContainer()

**Returns:** `void`

### public void onFluidContainerUpdate()

**Returns:** `void`

### public void handleBurning()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoFeedingTrough.html`*
