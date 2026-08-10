---
title: zombie.iso.objects.IsoWorldInventoryObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoWorldInventoryObject

`public class IsoWorldInventoryObject extends IsoObject implements IItemProvider`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoWorldInventoryObject

## Fields

### public InventoryItem item

### public float xoff

### public float yoff

### public float zoff

### public boolean removeProcess

### public double dropTime

### public boolean ignoreRemoveSandbox

## Constructors

### public IsoWorldInventoryObject(InventoryItem item,
IsoGridSquare sq,
float xoff,
float yoff,
float zoff)

**Parameters:**
- `InventoryItem` `item`
- `IsoGridSquare` `sq`
- `float` `xoff`
- `float` `yoff`
- `float` `zoff`

### public IsoWorldInventoryObject(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

## Methods

### public void swapItem(InventoryItem newItem)

**Parameters:**
- `InventoryItem` `newItem`

**Returns:** `void`

### public void saveChange(IsoObjectChange change,
se.krka.kahlua.vm.KahluaTable tbl,
ByteBufferWriter bb)

**Parameters:**
- `IsoObjectChange` `change`
- `se.krka.kahlua.vm.KahluaTable` `tbl`
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public void loadChange(IsoObjectChange change,
ByteBufferReader bb)

**Parameters:**
- `IsoObjectChange` `change`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public boolean isPureWater(boolean includeTainted)

**Parameters:**
- `boolean` `includeTainted`

**Returns:** `boolean`

### public boolean hasWater()

**Returns:** `boolean`

### public float getFluidAmount()

**Returns:** `float`

### public void emptyFluid()

**Returns:** `void`

### public float useFluid(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `float`

### public void addFluid(FluidType fluidType,
float amount)

**Parameters:**
- `FluidType` `fluidType`
- `float` `amount`

**Returns:** `void`

### public boolean canTransferFluidFrom(FluidContainer other)

**Parameters:**
- `FluidContainer` `other`

**Returns:** `boolean`

### public boolean canTransferFluidTo(FluidContainer other)

**Parameters:**
- `FluidContainer` `other`

**Returns:** `boolean`

### public float transferFluidTo(FluidContainer target,
float amount)

**Parameters:**
- `FluidContainer` `target`
- `float` `amount`

**Returns:** `float`

### public float transferFluidFrom(FluidContainer source,
float amount)

**Parameters:**
- `FluidContainer` `source`
- `float` `amount`

**Returns:** `float`

### public float getFluidCapacity()

**Returns:** `float`

### public boolean isFluidInputLocked()

**Returns:** `boolean`

### public boolean isTaintedWater()

**Returns:** `boolean`

### public String getFluidUiName()

**Returns:** `String`

### public String getCustomMenuOption()

**Returns:** `String`

### public void update()

**Returns:** `void`

### public void updateSprite()

**Returns:** `void`

### public boolean finishupdate()

**Returns:** `boolean`

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

### public void softReset()

**Returns:** `void`

### public String getObjectName()

**Returns:** `String`

### public void DoTooltip(ObjectTooltip tooltipUI)

**Parameters:**
- `ObjectTooltip` `tooltipUI`

**Returns:** `void`

### public void render(float x,
float y,
float z,
ColorInfo col,
boolean bDoChild,
boolean bWallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoChild`
- `boolean` `bWallLightingPass`
- `Shader` `shader`

**Returns:** `void`

### public void renderObjectPicker(float x,
float y,
float z,
ColorInfo lightInfo)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `lightInfo`

**Returns:** `void`

### public InventoryItem getItem()

**Returns:** `InventoryItem`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void removeFromSquare()

**Returns:** `void`

### public float getScreenPosX(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public float getScreenPosY(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public void setIgnoreRemoveSandbox(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isIgnoreRemoveSandbox()

**Returns:** `boolean`

### public void setExtendedPlacement(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isExtendedPlacement()

**Returns:** `boolean`

### public float getWorldPosX()

**Returns:** `float`

### public float getWorldPosY()

**Returns:** `float`

### public float getWorldPosZ()

**Returns:** `float`

### public static float getSurfaceAlpha(IsoGridSquare square,
float zoff)

**Parameters:**
- `IsoGridSquare` `square`
- `float` `zoff`

**Returns:** `float`

### public static float getSurfaceAlpha(IsoGridSquare square,
float zoff,
boolean bTargetAlpha)

**Parameters:**
- `IsoGridSquare` `square`
- `float` `zoff`
- `boolean` `bTargetAlpha`

**Returns:** `float`

### public void setOffset(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

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

### public IsoGridSquare getRenderSquare()

**Returns:** `IsoGridSquare`

### public void setHighlighted(int playerIndex,
boolean bHighlight,
boolean bRenderOnce)

**Parameters:**
- `int` `playerIndex`
- `boolean` `bHighlight`
- `boolean` `bRenderOnce`

**Returns:** `void`

### public boolean couldBePoweredByGenerator()

**Returns:** `boolean`

### public float getOffX()

**Returns:** `float`

### public float getOffY()

**Returns:** `float`

### public float getOffZ()

**Returns:** `float`

### public void setOffX(float newoff)

**Parameters:**
- `float` `newoff`

**Returns:** `void`

### public void setOffY(float newoff)

**Parameters:**
- `float` `newoff`

**Returns:** `void`

### public void setOffZ(float newoff)

**Parameters:**
- `float` `newoff`

**Returns:** `void`

### public void syncExtendedPlacement()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoWorldInventoryObject.html`*
