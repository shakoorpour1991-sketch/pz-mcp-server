---
title: zombie.entity.components.fluids.FluidFilter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.fluids
---

# zombie.entity.components.fluids.FluidFilter

`public class FluidFilter extends Object`

**Kind:** class · **Package:** zombie.entity.components.fluids

## Inheritance
- java.lang.Object
- zombie.entity.components.fluids.FluidFilter

## Constructors

### public FluidFilter()

## Methods

### public void setFilterScript(String filterScriptName)

**Parameters:**
- `String` `filterScriptName`

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public void seal()

**Returns:** `void`

### public boolean isSealed()

**Returns:** `boolean`

### public FluidFilter copy()

**Returns:** `FluidFilter`

### public FluidFilter.FilterType getFilterType()

**Returns:** `FluidFilter.FilterType`

### public FluidFilter setFilterType(FluidFilter.FilterType filterType)

**Parameters:**
- `FluidFilter.FilterType` `filterType`

**Returns:** `FluidFilter`

### public FluidFilter add(FluidCategory category)

**Parameters:**
- `FluidCategory` `category`

**Returns:** `FluidFilter`

### public FluidFilter remove(FluidCategory category)

**Parameters:**
- `FluidCategory` `category`

**Returns:** `FluidFilter`

### public boolean contains(FluidCategory category)

**Parameters:**
- `FluidCategory` `category`

**Returns:** `boolean`

### public FluidFilter add(FluidType fluid)

**Parameters:**
- `FluidType` `fluid`

**Returns:** `FluidFilter`

### public FluidFilter add(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `FluidFilter`

### public FluidFilter add(String fluid)

**Parameters:**
- `String` `fluid`

**Returns:** `FluidFilter`

### public FluidFilter remove(FluidType fluid)

**Parameters:**
- `FluidType` `fluid`

**Returns:** `FluidFilter`

### public FluidFilter remove(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `FluidFilter`

### public FluidFilter remove(String fluid)

**Parameters:**
- `String` `fluid`

**Returns:** `FluidFilter`

### public boolean contains(FluidType fluid)

**Parameters:**
- `FluidType` `fluid`

**Returns:** `boolean`

### public boolean contains(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `boolean`

### public boolean contains(String fluid)

**Parameters:**
- `String` `fluid`

**Returns:** `boolean`

### public boolean allows(FluidType fluidType)

**Parameters:**
- `FluidType` `fluidType`

**Returns:** `boolean`

### public boolean allows(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `boolean`

### public boolean allows(String fluidString)

**Parameters:**
- `String` `fluidString`

**Returns:** `boolean`

### public String getFilterDisplayName()

**Returns:** `String`

### public String getFilterTooltipText()

**Returns:** `String`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\fluids\FluidFilter.html`*
