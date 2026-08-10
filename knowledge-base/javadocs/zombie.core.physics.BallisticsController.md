---
title: zombie.core.physics.BallisticsController
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.physics
---

# zombie.core.physics.BallisticsController

`public final class BallisticsController extends PooledObject`

**Kind:** class · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.physics.BallisticsController

## Fields

### public static final int maxBallisticsCameraTargetsArraySize

### public static final int maxBallisticsSpreadLocationsArraySize

## Methods

### public static BallisticsController alloc()

**Returns:** `BallisticsController`

### public int getID()

**Returns:** `int`

### public void setIsoGameCharacter(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean updateAimingVector(IsoGameCharacter isoGameCharacter,
BallisticsController.AimingVectorParameters parameters)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `BallisticsController.AimingVectorParameters` `parameters`

**Returns:** `boolean`

### public void debugRender()

**Returns:** `void`

### public float calculateMuzzlePosition(Vector3 muzzlePosition,
Vector3 muzzleDirectionUnnormalized)

**Parameters:**
- `Vector3` `muzzlePosition`
- `Vector3` `muzzleDirectionUnnormalized`

**Returns:** `float`

### public void setRange(float range)

**Parameters:**
- `float` `range`

**Returns:** `void`

### public void getTargets(float range)

**Parameters:**
- `float` `range`

**Returns:** `void`

### public float[] getBallisticsSpreadData()

**Returns:** `float[]`

### public float[] getBallisticsTargets()

**Returns:** `float[]`

### public float[] getCachedBallisticsTargets()

**Returns:** `float[]`

### public float[] getCachedBallisticsTargetSpreadData()

**Returns:** `float[]`

### public void getSpreadData(float range,
float spread,
float weightCenter,
int numberOfBullets)

**Parameters:**
- `float` `range`
- `float` `spread`
- `float` `weightCenter`
- `int` `numberOfBullets`

**Returns:** `void`

### public void getCameraTargets(float range,
boolean parts)

**Parameters:**
- `float` `range`
- `boolean` `parts`

**Returns:** `void`

### public float[] getCameraTargets()

**Returns:** `float[]`

### public boolean isValidTarget(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean isValidCachedTarget(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean isTarget(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean isCachedTarget(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean isCameraTarget(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean isCachedCameraTarget(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public int getTargetedBodyPart(int id)

**Parameters:**
- `int` `id`

**Returns:** `int`

### public int getCachedTargetedBodyPart(int id)

**Parameters:**
- `int` `id`

**Returns:** `int`

### public boolean isSpreadTarget(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean isCachedSpreadTarget(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public boolean hasSpreadData()

**Returns:** `boolean`

### public int getNumberOfSpreadData()

**Returns:** `int`

### public int getNumberOfCachedSpreadData()

**Returns:** `int`

### public void releaseController()

**Returns:** `void`

### public void postUpdate()

**Returns:** `void`

### public int getNumberOfCameraTargets()

**Returns:** `int`

### public int spreadCount(int id)

**Parameters:**
- `int` `id`

**Returns:** `int`

### public int cachedSpreadCount(int id)

**Parameters:**
- `int` `id`

**Returns:** `int`

### public void clearCacheTargets()

**Returns:** `void`

### public int getNumberOfTargets()

**Returns:** `int`

### public int getCachedNumberOfTargets()

**Returns:** `int`

### public boolean hasBallisticsTarget()

**Returns:** `boolean`

### public void renderlast()

**Returns:** `void`

### public Vector3 getMuzzlePosition()

**Returns:** `Vector3`

### public Vector3 getMuzzleDirection()

**Returns:** `Vector3`

### public Vector3 getIsoAimingPosition()

**Returns:** `Vector3`

### public void setBallisticsTargetHitLocation(int id,
HitInfo hitInfo)

**Parameters:**
- `int` `id`
- `HitInfo` `hitInfo`

**Returns:** `void`

### public void setBallisticsCameraTargetHitLocation(int id,
HitInfo hitInfo)

**Parameters:**
- `int` `id`
- `HitInfo` `hitInfo`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\BallisticsController.html`*
