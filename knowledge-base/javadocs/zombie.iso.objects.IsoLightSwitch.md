---
title: zombie.iso.objects.IsoLightSwitch
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoLightSwitch

`public class IsoLightSwitch extends IsoObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoLightSwitch

## Fields

### public boolean activated

### public final ArrayList<IsoLightSource> lights

### public boolean lightRoom

### public long roomId

### public boolean streetLight

## Constructors

### public IsoLightSwitch(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoLightSwitch(IsoCell cell,
IsoGridSquare sq,
IsoSprite gid,
long roomId)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `sq`
- `IsoSprite` `gid`
- `long` `roomId`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void addLightSourceFromSprite()

**Returns:** `void`

### public boolean getCanBeModified()

**Returns:** `boolean`

### public void setCanBeModified(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public float getPower()

**Returns:** `float`

### public void setPower(float power)

**Parameters:**
- `float` `power`

**Returns:** `void`

### public void setDelta(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public float getDelta()

**Returns:** `float`

### public void setUseBattery(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setUseBatteryDirect(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getUseBattery()

**Returns:** `boolean`

### public boolean getHasBattery()

**Returns:** `boolean`

### public void setHasBattery(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public void setHasBatteryRaw(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void addBattery(IsoGameCharacter chr,
InventoryItem battery)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `battery`

**Returns:** `void`

### public DrainableComboItem removeBattery(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `DrainableComboItem`

### public boolean hasLightBulb()

**Returns:** `boolean`

### public String getBulbItem()

**Returns:** `String`

### public void setBulbItemRaw(String item)

**Parameters:**
- `String` `item`

**Returns:** `void`

### public void addLightBulb(IsoGameCharacter chr,
InventoryItem bulb)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `bulb`

**Returns:** `void`

### public InventoryItem removeLightBulb(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `InventoryItem`

### public float getPrimaryR()

**Returns:** `float`

### public float getPrimaryG()

**Returns:** `float`

### public float getPrimaryB()

**Returns:** `float`

### public void setPrimaryR(float r)

**Parameters:**
- `float` `r`

**Returns:** `void`

### public void setPrimaryG(float g)

**Parameters:**
- `float` `g`

**Returns:** `void`

### public void setPrimaryB(float b)

**Parameters:**
- `float` `b`

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

### public boolean onMouseLeftClick(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean canSwitchLight()

**Returns:** `boolean`

### public boolean setActive(boolean active)

**Parameters:**
- `boolean` `active`

**Returns:** `boolean`

### public boolean setActive(boolean active,
boolean setActiveBoolOnly)

**Parameters:**
- `boolean` `active`
- `boolean` `setActiveBoolOnly`

**Returns:** `boolean`

### public boolean setActive(boolean active,
boolean setActiveBoolOnly,
boolean ignoreSwitchCheck)

**Parameters:**
- `boolean` `active`
- `boolean` `setActiveBoolOnly`
- `boolean` `ignoreSwitchCheck`

**Returns:** `boolean`

### public boolean toggle()

**Returns:** `boolean`

### public void switchLight(boolean activated)

**Parameters:**
- `boolean` `activated`

**Returns:** `void`

### public void getCustomSettingsFromItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void setCustomSettingsToItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void syncCustomizedSettings(UdpConnection source)

**Parameters:**
- `UdpConnection` `source`

**Returns:** `void`

### public void syncIsoObjectSend(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void syncIsoObject(boolean bRemote,
byte val,
UdpConnection source,
ByteBufferReader bb)

**Parameters:**
- `boolean` `bRemote`
- `byte` `val`
- `UdpConnection` `source`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void syncIsoObject(boolean bRemote,
byte val,
UdpConnection source)

**Parameters:**
- `boolean` `bRemote`
- `byte` `val`
- `UdpConnection` `source`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean isActivated()

**Returns:** `boolean`

### public void setActivated(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public boolean couldBePoweredByGenerator()

**Returns:** `boolean`

### public float getGeneratorPowerConsumption()

**Returns:** `float`

### public static void chunkLoaded(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public ArrayList<IsoLightSource> getLights()

**Returns:** `ArrayList<IsoLightSource>`

### public boolean shouldShowOnOverlay()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoLightSwitch.html`*
