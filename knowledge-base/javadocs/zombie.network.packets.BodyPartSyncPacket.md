---
title: zombie.network.packets.BodyPartSyncPacket
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.packets
---

# zombie.network.packets.BodyPartSyncPacket

`public class BodyPartSyncPacket extends Object implements INetworkPacket`

**Kind:** class · **Package:** zombie.network.packets

## Inheritance
- java.lang.Object
- zombie.network.packets.BodyPartSyncPacket

## Fields

### public static final long BD_Health

### public static final long BD_bandaged

### public static final long BD_bitten

### public static final long BD_bleeding

### public static final long BD_IsBleedingStemmed

### public static final long BD_IsCauterized

### public static final long BD_scratched

### public static final long BD_stitched

### public static final long BD_deepWounded

### public static final long BD_IsInfected

### public static final long BD_IsFakeInfected

### public static final long BD_bandageLife

### public static final long BD_scratchTime

### public static final long BD_biteTime

### public static final long BD_alcoholicBandage

### public static final long BD_woundInfectionLevel

### public static final long BD_infectedWound

### public static final long BD_bleedingTime

### public static final long BD_deepWoundTime

### public static final long BD_haveGlass

### public static final long BD_stitchTime

### public static final long BD_alcoholLevel

### public static final long BD_additionalPain

### public static final long BD_bandageType

### public static final long BD_getBandageXp

### public static final long BD_getStitchXp

### public static final long BD_getSplintXp

### public static final long BD_fractureTime

### public static final long BD_splint

### public static final long BD_splintFactor

### public static final long BD_haveBullet

### public static final long BD_burnTime

### public static final long BD_needBurnWash

### public static final long BD_lastTimeBurnWash

### public static final long BD_splintItem

### public static final long BD_plantainFactor

### public static final long BD_comfreyFactor

### public static final long BD_garlicFactor

### public static final long BD_cut

### public static final long BD_cutTime

### public static final long BD_stiffness

### public static final long BD_BodyDamage

## Constructors

### public BodyPartSyncPacket()

## Methods

### public void setData(Object... values)

**Parameters:**
- `Object...` `values`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\packets\BodyPartSyncPacket.html`*
