---
title: zombie.entity.components.fluids.FluidConsume
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.fluids
---

# zombie.entity.components.fluids.FluidConsume

`public class FluidConsume extends SealedFluidProperties`

**Kind:** class · **Package:** zombie.entity.components.fluids

## Inheritance
- java.lang.Object
- zombie.entity.components.fluids.SealedFluidProperties
- zombie.entity.components.fluids.FluidConsume

## Methods

### public static FluidConsume Alloc()

**Returns:** `FluidConsume`

### public void release()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public static FluidConsume combine(FluidConsume a,
FluidConsume b)

**Parameters:**
- `FluidConsume` `a`
- `FluidConsume` `b`

**Returns:** `FluidConsume`

### public FluidConsume combineWith(FluidConsume b)

**Parameters:**
- `FluidConsume` `b`

**Returns:** `FluidConsume`

### public float getAmount()

**Returns:** `float`

### public PoisonEffect getPoisonEffect()

**Returns:** `PoisonEffect`

### public static void Save(FluidConsume fluidConsume,
ByteBuffer output)
throws IOException

**Parameters:**
- `FluidConsume` `fluidConsume`
- `ByteBuffer` `output`

**Returns:** `void`

### public static FluidConsume Load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `FluidConsume`

### public static FluidConsume Load(FluidConsume fluidConsume,
ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `FluidConsume` `fluidConsume`
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `FluidConsume`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\fluids\FluidConsume.html`*
