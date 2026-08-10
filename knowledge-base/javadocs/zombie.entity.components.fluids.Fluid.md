---
title: zombie.entity.components.fluids.Fluid
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.fluids
---

# zombie.entity.components.fluids.Fluid

`public class Fluid extends Object`

**Kind:** class · **Package:** zombie.entity.components.fluids

## Inheritance
- java.lang.Object
- zombie.entity.components.fluids.Fluid

## Fields

### public static final Fluid Water

### public static final Fluid TaintedWater

### public static final Fluid Petrol

### public static final Fluid Alcohol

### public static final Fluid PoisonPotent

### public static final Fluid Beer

### public static final Fluid Whiskey

### public static final Fluid SodaPop

### public static final Fluid Coffee

### public static final Fluid Tea

### public static final Fluid Wine

### public static final Fluid Bleach

### public static final Fluid Blood

### public static final Fluid Honey

### public static final Fluid Mead

### public static final Fluid Acid

### public static final Fluid SpiffoJuice

### public static final Fluid SecretFlavoring

### public static final Fluid CarbonatedWater

### public static final Fluid CleaningLiquid

### public static final Fluid CowMilk

### public static final Fluid SheepMilk

### public static final Fluid AnimalBlood

### public static final Fluid AnimalGrease

### public static final Fluid Dye

### public static final Fluid HairDye

### public static final Fluid AnimalMilk

## Methods

### public static Fluid Get(FluidType type)

**Parameters:**
- `FluidType` `type`

**Returns:** `Fluid`

### public static Fluid Get(String name)

**Parameters:**
- `String` `name`

**Returns:** `Fluid`

### public static ArrayList<Fluid> getAllFluids()

**Returns:** `ArrayList<Fluid>`

### public static ArrayList<Item> getAllFluidItemsDebug()

**Returns:** `ArrayList<Item>`

### public static boolean FluidsInitialized()

**Returns:** `boolean`

### public static void Init(ScriptLoadMode loadMode)
throws Exception

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public static void PreReloadScripts()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static void saveFluid(Fluid fluid,
ByteBuffer output)

**Parameters:**
- `Fluid` `fluid`
- `ByteBuffer` `output`

**Returns:** `void`

### public static Fluid loadFluid(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `Fluid`

### public boolean isVanilla()

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

### public FluidInstance getInstance()

**Returns:** `FluidInstance`

### public FluidType getFluidType()

**Returns:** `FluidType`

### public String getFluidTypeString()

**Returns:** `String`

### public Color getColor()

**Returns:** `Color`

### public com.google.common.collect.ImmutableSet<FluidCategory> getCategories()

**Returns:** `com.google.common.collect.ImmutableSet<FluidCategory>`

### public boolean isCategory(FluidCategory category)

**Parameters:**
- `FluidCategory` `category`

**Returns:** `boolean`

### public String getDisplayName()

**Returns:** `String`

### public String getTranslatedName()

**Returns:** `String`

### public String getTranslatedNameLower()

**Returns:** `String`

### public boolean canBlendWith(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `boolean`

### public SealedFluidProperties getProperties()

**Returns:** `SealedFluidProperties`

### public PoisonInfo getPoisonInfo()

**Returns:** `PoisonInfo`

### public boolean isPoisonous()

**Returns:** `boolean`

### public FluidDefinitionScript getScript()

**Returns:** `FluidDefinitionScript`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\fluids\Fluid.html`*
