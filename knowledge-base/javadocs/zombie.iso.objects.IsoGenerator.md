---
title: zombie.iso.objects.IsoGenerator
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoGenerator

`public class IsoGenerator extends IsoObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoGenerator

## Fields

### public static final float ClothingAppliancePowerConsumption

### public static final float TelevisionPowerConsumption

### public static final float RadioPowerConsumption

### public static final float StovePowerConsumption

### public static final float FridgeFreezerPowerConsumption

### public static final float SingleFridgeOrFreezerPowerConsumption

### public static final float LightSwitchPowerConsumption

### public static final float PipedFuelPowerConsumption

### public static final float BatteryChargerPowerConsumption

### public static final float StackedWasherDryerPowerConsumption

### public float fuel

### public boolean activated

### public int condition

### public boolean connected

## Constructors

### public IsoGenerator(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoGenerator(InventoryItem item,
IsoCell cell,
IsoGridSquare sq)

**Parameters:**
- `InventoryItem` `item`
- `IsoCell` `cell`
- `IsoGridSquare` `sq`

## Methods

### public int getMinAffectedLevel()

**Returns:** `int`

### public int getMaxAffectedLevel()

**Returns:** `int`

### public void setInfoFromItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public String getGeneratorItemType()

**Returns:** `String`

### public void update()

**Returns:** `void`

### public void setSurroundingElectricity()

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void remove()

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public String getObjectName()

**Returns:** `String`

### public boolean shouldShowOnOverlay()

**Returns:** `boolean`

### public double getBasePowerConsumption()

**Returns:** `double`

### public String getBasePowerConsumptionString()

**Returns:** `String`

### public float getFuel()

**Returns:** `float`

### public float getFuelPercentage()

**Returns:** `float`

### public float getMaxFuel()

**Returns:** `float`

### public void setFuel(float fuel)

**Parameters:**
- `float` `fuel`

**Returns:** `void`

### public boolean isActivated()

**Returns:** `boolean`

### public void setActivated(boolean activated)

**Parameters:**
- `boolean` `activated`

**Returns:** `void`

### public void failToStart()

**Returns:** `void`

### public int getCondition()

**Returns:** `int`

### public void setCondition(int condition)

**Parameters:**
- `int` `condition`

**Returns:** `void`

### public boolean isConnected()

**Returns:** `boolean`

### public void setConnected(boolean connected)

**Parameters:**
- `boolean` `connected`

**Returns:** `void`

### public void syncIsoObjectSend(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void syncIsoObjectReceive(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public static void chunkLoaded(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public static void updateSurroundingNow()

**Returns:** `void`

### public static void updateGenerator(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static boolean isPoweringSquare(int generatorX,
int generatorY,
int generatorZ,
int x,
int y,
int z)

**Parameters:**
- `int` `generatorX`
- `int` `generatorY`
- `int` `generatorZ`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public ArrayList<String> getItemsPowered()

**Returns:** `ArrayList<String>`

### public float getTotalPowerUsing()

**Returns:** `float`

### public String getTotalPowerUsingString()

**Returns:** `String`

### public void setTotalPowerUsing(float totalPowerUsing)

**Parameters:**
- `float` `totalPowerUsing`

**Returns:** `void`

### public String getSoundPrefix()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoGenerator.html`*
