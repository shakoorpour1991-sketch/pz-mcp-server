---
title: zombie.entity.components.fluids.FluidSample
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.fluids
---

# zombie.entity.components.fluids.FluidSample

`public class FluidSample extends Object`

**Kind:** class · **Package:** zombie.entity.components.fluids

## Inheritance
- java.lang.Object
- zombie.entity.components.fluids.FluidSample

## Methods

### public static FluidSample Alloc()

**Returns:** `FluidSample`

### public void release()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public FluidSample copy()

**Returns:** `FluidSample`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean isPureFluid()

**Returns:** `boolean`

### public float getAmount()

**Returns:** `float`

### public int size()

**Returns:** `int`

### public float getPercentage(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public Fluid getFluid(int index)

**Parameters:**
- `int` `index`

**Returns:** `Fluid`

### public FluidInstance getFluidInstance(int index)

**Parameters:**
- `int` `index`

**Returns:** `FluidInstance`

### public FluidInstance getFluidInstance(Fluid fluid)

**Parameters:**
- `Fluid` `fluid`

**Returns:** `FluidInstance`

### public Fluid getPrimaryFluid()

**Returns:** `Fluid`

### public Color getColor()

**Returns:** `Color`

### public void scaleToAmount(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public static FluidSample combine(FluidSample a,
FluidSample b)

**Parameters:**
- `FluidSample` `a`
- `FluidSample` `b`

**Returns:** `FluidSample`

### public FluidSample combineWith(FluidSample b)

**Parameters:**
- `FluidSample` `b`

**Returns:** `FluidSample`

### public static void Save(FluidSample fluidSample,
ByteBuffer output)
throws IOException

**Parameters:**
- `FluidSample` `fluidSample`
- `ByteBuffer` `output`

**Returns:** `void`

### public static FluidSample Load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `FluidSample`

### public static FluidSample Load(FluidSample fluidSample,
ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `FluidSample` `fluidSample`
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `FluidSample`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\fluids\FluidSample.html`*
