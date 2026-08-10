---
title: zombie.network.BodyDamageSync
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.BodyDamageSync

`public class BodyDamageSync extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.BodyDamageSync

## Fields

### public static final byte BD_Health

### public static final byte BD_bandaged

### public static final byte BD_bitten

### public static final byte BD_bleeding

### public static final byte BD_IsBleedingStemmed

### public static final byte BD_IsCauterized

### public static final byte BD_scratched

### public static final byte BD_stitched

### public static final byte BD_deepWounded

### public static final byte BD_IsInfected

### public static final byte BD_IsFakeInfected

### public static final byte BD_bandageLife

### public static final byte BD_scratchTime

### public static final byte BD_biteTime

### public static final byte BD_alcoholicBandage

### public static final byte BD_woundInfectionLevel

### public static final byte BD_infectedWound

### public static final byte BD_bleedingTime

### public static final byte BD_deepWoundTime

### public static final byte BD_haveGlass

### public static final byte BD_stitchTime

### public static final byte BD_alcoholLevel

### public static final byte BD_additionalPain

### public static final byte BD_bandageType

### public static final byte BD_getBandageXp

### public static final byte BD_getStitchXp

### public static final byte BD_getSplintXp

### public static final byte BD_fractureTime

### public static final byte BD_splint

### public static final byte BD_splintFactor

### public static final byte BD_haveBullet

### public static final byte BD_burnTime

### public static final byte BD_needBurnWash

### public static final byte BD_lastTimeBurnWash

### public static final byte BD_splintItem

### public static final byte BD_plantainFactor

### public static final byte BD_comfreyFactor

### public static final byte BD_garlicFactor

### public static final byte BD_cut

### public static final byte BD_cutTime

### public static final byte BD_stiffness

### public static final byte BD_MaxParam

### public static final byte BD_BodyDamage

### public static final byte BD_START

### public static final byte BD_END

### public static BodyDamageSync instance

## Constructors

### public BodyDamageSync()

## Methods

### public void startSendingUpdates(short localId,
short remoteID)

**Parameters:**
- `short` `localId`
- `short` `remoteID`

**Returns:** `void`

### public void stopSendingUpdates(short localIndex,
short remoteID)

**Parameters:**
- `short` `localIndex`
- `short` `remoteID`

**Returns:** `void`

### public void startReceivingUpdates(IsoPlayer remotePlayer)

**Parameters:**
- `IsoPlayer` `remotePlayer`

**Returns:** `void`

### public void stopReceivingUpdates(IsoPlayer remotePlayer)

**Parameters:**
- `IsoPlayer` `remotePlayer`

**Returns:** `void`

### public void update()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\BodyDamageSync.html`*
