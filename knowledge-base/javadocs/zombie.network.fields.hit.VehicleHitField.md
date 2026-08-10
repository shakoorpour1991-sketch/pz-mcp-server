---
title: zombie.network.fields.hit.VehicleHitField
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.VehicleHitField

`public class VehicleHitField extends Hit implements IMovable, INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.hit.Hit
- zombie.network.fields.hit.VehicleHitField

## Fields

### public float vehicleSpeed

### public boolean isTargetHitFromBehind

### public boolean isStaggerBack

### public boolean isKnockedDown

## Constructors

### public VehicleHitField()

## Methods

### public void set(boolean ignore,
float damage,
float hitForce,
float hitDirectionX,
float hitDirectionY,
float vehicleSpeed,
boolean isTargetHitFromBehind,
boolean isStaggerBack,
boolean isKnockedDown)

**Parameters:**
- `boolean` `ignore`
- `float` `damage`
- `float` `hitForce`
- `float` `hitDirectionX`
- `float` `hitDirectionY`
- `float` `vehicleSpeed`
- `boolean` `isTargetHitFromBehind`
- `boolean` `isStaggerBack`
- `boolean` `isKnockedDown`

**Returns:** `void`

### public void parse(ByteBufferReader b,
IConnection connection)

**Parameters:**
- `ByteBufferReader` `b`
- `IConnection` `connection`

**Returns:** `void`

### public void write(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void process(IsoGameCharacter wielder,
IsoGameCharacter target,
BaseVehicle vehicle)

**Parameters:**
- `IsoGameCharacter` `wielder`
- `IsoGameCharacter` `target`
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public float getSpeed()

**Returns:** `float`

### public boolean isVehicle()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\VehicleHitField.html`*
