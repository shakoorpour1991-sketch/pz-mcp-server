---
title: zombie.vehicles.VehicleWindow
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehicleWindow

`public final class VehicleWindow extends Object`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VehicleWindow

## Constructors

### public VehicleWindow(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

## Methods

### public void init(VehicleScript.Window scriptWindow)

**Parameters:**
- `VehicleScript.Window` `scriptWindow`

**Returns:** `void`

### public int getHealth()

**Returns:** `int`

### public boolean isDestroyed()

**Returns:** `boolean`

### public boolean isOpenable()

**Returns:** `boolean`

### public boolean isOpen()

**Returns:** `boolean`

### public void setOpen(boolean open)

**Parameters:**
- `boolean` `open`

**Returns:** `void`

### public void setOpenDelta(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public float getOpenDelta()

**Returns:** `float`

### public VehiclePart getPart()

**Returns:** `VehiclePart`

### public boolean isHittable()

**Returns:** `boolean`

### public void hit(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void damage(int amount)

**Parameters:**
- `int` `amount`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehicleWindow.html`*
