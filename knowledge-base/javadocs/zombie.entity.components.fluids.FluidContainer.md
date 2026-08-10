---
title: zombie.entity.components.fluids.FluidContainer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.fluids
---

# zombie.entity.components.fluids.FluidContainer

`public class FluidContainer extends Component`

**Kind:** class · **Package:** zombie.entity.components.fluids

## Inheritance
- java.lang.Object
- zombie.entity.Component
- zombie.entity.components.fluids.FluidContainer

## Fields

### public static final int MAX_FLUIDS

### public static final String DEF_CONTAINER_NAME

### public static final float DEFAULT_TRANSFER_RATE

## Methods

### public static FluidContainer CreateContainer()

**Returns:** `FluidContainer`

### public static void DisposeContainer(FluidContainer container)

**Parameters:**
- `FluidContainer` `container`

**Returns:** `void`

### public FluidContainer copy()

**Returns:** `FluidContainer`

### public void copyFluidsFrom(FluidContainer other)

**Parameters:**
- `FluidContainer` `other`

**Returns:** `void`

### public String getCustomDrinkSound()

**Returns:** `String`

### public void setInputLocked(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isInputLocked()

**Returns:** `boolean`

### public boolean canPlayerEmpty()

**Returns:** `boolean`

### public void setCanPlayerEmpty(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public float getRainCatcher()

**Returns:** `float`

### public void setRainCatcher(float rainCatcher)

**Parameters:**
- `float` `rainCatcher`

**Returns:** `void`

### public boolean isFilledWithCleanWater()

**Returns:** `boolean`

### public boolean isHiddenAmount()

**Returns:** `boolean`

### public void DoTooltip(ObjectTooltip tooltipUI)

**Parameters:**
- `ObjectTooltip` `tooltipUI`

**Returns:** `void`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public String getContainerName()

**Returns:** `String`

### public void setContainerName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getTranslatedContainerName()

**Returns:** `String`

### public String getUiName()

**Returns:** `String`

### public SealedFluidProperties getProperties()

**Returns:** `SealedFluidProperties`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean isFull()

**Returns:** `boolean`

### public float getCapacity()

**Returns:** `float`

### public float getFreeCapacity()

**Returns:** `float`

### public float getFilledRatio()

**Returns:** `float`

### public Color getColor()

**Returns:** `Color`

### public float getAmount()

**Returns:** `float`

### public float getPoisonRatio()

**Returns:** `float`

### public boolean isPoisonous()

**Returns:** `boolean`

### public PoisonEffect getPoisonEffect()

**Returns:** `PoisonEffect`

### public boolean isTainted()

**Returns:** `boolean`

### public void setCapacity(float capacity)

**Parameters:**
- `float` `capacity`

**Returns:** `void`

### public void adjustAmount(float newAmount)

**Parameters:**
- `float` `newAmount`

**Returns:** `void`

### public void adjustSpecificFluidAmount(Fluid fluid,
float newAmount)

**Parameters:**
- `Fluid` `fluid`
- `float` `newAmount`

**Returns:** `void`

### public float getSpecificFluidAmount(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `float`

### public FluidSample createFluidSample()

**Returns:** `FluidSample`

### public FluidSample createFluidSample(float scaleAmount)

**Parameters:**
- `float` `scaleAmount`

**Returns:** `FluidSample`

### public FluidSample createFluidSample(FluidSample sample,
float scaleAmount)

**Parameters:**
- `FluidSample` `sample`
- `float` `scaleAmount`

**Returns:** `FluidSample`

### public boolean isPureFluid(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `boolean`

### public boolean isPrimaryFluidType(FluidType fluidType)

**Parameters:**
- `FluidType` `fluidType`

**Returns:** `boolean`

### public boolean isPrimaryFluidType(String fluidType)

**Parameters:**
- `String` `fluidType`

**Returns:** `boolean`

### public Fluid getPrimaryFluid()

**Returns:** `Fluid`

### public float getPrimaryFluidAmount()

**Returns:** `float`

### public boolean isPrimaryFluid(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `boolean`

### public boolean isWaterSource()

**Returns:** `boolean`

### public boolean isWaterOnlySource()

**Returns:** `boolean`

### public boolean isPerceivedFluidToPlayer(Fluid fluid,
IsoGameCharacter character)

**Parameters:**
- `Fluid` `fluid`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean isMixture()

**Returns:** `boolean`

### public FluidFilter getWhitelist()

**Returns:** `FluidFilter`

### public FluidFilter getBlacklist()

**Returns:** `FluidFilter`

### public void Empty()

**Returns:** `void`

### public void Empty(boolean bRecalculate)

**Parameters:**
- `boolean` `bRecalculate`

**Returns:** `void`

### public boolean canAddFluid(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `boolean`

### public void addFluid(String fluidType,
float amount)

**Parameters:**
- `String` `fluidType`
- `float` `amount`

**Returns:** `void`

### public void addFluid(FluidType fluidType,
float amount)

**Parameters:**
- `FluidType` `fluidType`
- `float` `amount`

**Returns:** `void`

### public void addFluid(Fluid fluid,
float amount)

**Parameters:**
- `Fluid` `fluid`
- `float` `amount`

**Returns:** `void`

### public void removeFluid()

**Returns:** `void`

### public FluidConsume removeFluid(boolean createFluidConsume)

**Parameters:**
- `boolean` `createFluidConsume`

**Returns:** `FluidConsume`

### public void removeFluid(float remove)

**Parameters:**
- `float` `remove`

**Returns:** `void`

### public FluidConsume removeFluid(float remove,
boolean createFluidConsume)

**Parameters:**
- `float` `remove`
- `boolean` `createFluidConsume`

**Returns:** `FluidConsume`

### public FluidConsume removeFluid(float remove,
boolean createFluidConsume,
FluidConsume fluidConsume)

**Parameters:**
- `float` `remove`
- `boolean` `createFluidConsume`
- `FluidConsume` `fluidConsume`

**Returns:** `FluidConsume`

### public boolean contains(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `boolean`

### public float getRatioForFluid(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `float`

### public boolean isCategory(FluidCategory category)

**Parameters:**
- `FluidCategory` `category`

**Returns:** `boolean`

### public boolean isAllCategory(FluidCategory category)

**Parameters:**
- `FluidCategory` `category`

**Returns:** `boolean`

### public void transferTo(FluidContainer other)

**Parameters:**
- `FluidContainer` `other`

**Returns:** `void`

### public void transferTo(FluidContainer other,
float amount)

**Parameters:**
- `FluidContainer` `other`
- `float` `amount`

**Returns:** `void`

### public void transferFrom(FluidContainer other)

**Parameters:**
- `FluidContainer` `other`

**Returns:** `void`

### public void transferFrom(FluidContainer other,
float amount)

**Parameters:**
- `FluidContainer` `other`
- `float` `amount`

**Returns:** `void`

### public static String GetTransferReason(FluidContainer source,
FluidContainer target)

**Parameters:**
- `FluidContainer` `source`
- `FluidContainer` `target`

**Returns:** `String`

### public static String GetTransferReason(FluidContainer source,
FluidContainer target,
boolean testFirst)

**Parameters:**
- `FluidContainer` `source`
- `FluidContainer` `target`
- `boolean` `testFirst`

**Returns:** `String`

### public static boolean CanTransfer(FluidContainer source,
FluidContainer target)

**Parameters:**
- `FluidContainer` `source`
- `FluidContainer` `target`

**Returns:** `boolean`

### public static void Transfer(FluidContainer source,
FluidContainer target)

**Parameters:**
- `FluidContainer` `source`
- `FluidContainer` `target`

**Returns:** `void`

### public static void Transfer(FluidContainer source,
FluidContainer target,
float amount)

**Parameters:**
- `FluidContainer` `source`
- `FluidContainer` `target`
- `float` `amount`

**Returns:** `void`

### public static void Transfer(FluidContainer source,
FluidContainer target,
float amount,
boolean keepSource)

**Parameters:**
- `FluidContainer` `source`
- `FluidContainer` `target`
- `float` `amount`
- `boolean` `keepSource`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void unsealIfNotFull()

**Returns:** `void`

### public void unseal()

**Returns:** `void`

### public boolean isQualifiesForMetaStorage()

**Returns:** `boolean`

### public void setWhitelist(FluidFilter ff)

**Parameters:**
- `FluidFilter` `ff`

**Returns:** `void`

### public boolean isTaintedStatusKnown()

**Returns:** `boolean`

### public void setNonSavedFieldsFromItemScript(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public boolean isMultiTileMoveable()

**Returns:** `boolean`

### public float getTransferRate()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\fluids\FluidContainer.html`*
