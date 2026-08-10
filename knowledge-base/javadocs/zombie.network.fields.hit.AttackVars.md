---
title: zombie.network.fields.hit.AttackVars
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.fields.hit
---

# zombie.network.fields.hit.AttackVars

`public class AttackVars extends Object implements INetworkPacketField`

**Kind:** class · **Package:** zombie.network.fields.hit

## Inheritance
- java.lang.Object
- zombie.network.fields.hit.AttackVars

## Fields

### public boolean aimAtFloor

### public boolean closeKill

### public boolean doShove

### public boolean doGrapple

### public float useChargeDelta

### public int recoilDelay

### public final PZArrayList<HitInfo> targetsStanding

### public final PZArrayList<HitInfo> targetsProne

### public MovingObject targetOnGround

### public MovingObject targetStanding

### public float targetDistance

### public boolean isProcessed

## Constructors

### public AttackVars()

## Methods

### public void setWeapon(HandWeapon weapon)

**Parameters:**
- `HandWeapon` `weapon`

**Returns:** `void`

### public HandWeapon getWeapon(IsoLivingCharacter owner)

**Parameters:**
- `IsoLivingCharacter` `owner`

**Returns:** `HandWeapon`

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

### public int getPacketSizeBytes()

**Returns:** `int`

### public void copy(AttackVars original)

**Parameters:**
- `AttackVars` `original`

**Returns:** `void`

### public void clear()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\fields\hit\AttackVars.html`*
