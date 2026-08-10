---
title: zombie.iso.objects.IsoFire
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoFire

`public class IsoFire extends IsoObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoFire

## Fields

### public static final int LIGHT_RADIUS_MINIMUM

### public static final int LIGHT_RADIUS_LOW

### public static final int LIGHT_RADIUS_MEDIUM

### public static final int LIGHT_RADIUS_HIGH

### public static final int NUM_FRAMES_FIRE

### public static final int NUM_FRAMES_SMOKE

### public static final int MaxLife

### public static final int MinLife

### public int age

### public int energy

### public int life

### public int lifeStage

### public int lifeStageDuration

### public int lifeStageTimer

### public int spreadDelay

### public int spreadTimer

### public int numFlameParticles

### public boolean perm

### public boolean smoke

### public IsoLightSource lightSource

### public int lightRadius

### public float lightOscillator

### public static final float LIGHT_R

### public static final float LIGHT_G

### public static final float LIGHT_B

## Constructors

### public IsoFire(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoFire(IsoCell cell,
IsoGridSquare gridSquare)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`

### public IsoFire(IsoCell cell,
IsoGridSquare gridSquare,
boolean canBurnAnywhere,
int startingEnergy,
int setLife,
boolean isSmoke)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `boolean` `canBurnAnywhere`
- `int` `startingEnergy`
- `int` `setLife`
- `boolean` `isSmoke`

### public IsoFire(IsoCell cell,
IsoGridSquare gridSquare,
boolean canBurnAnywhere,
int startingEnergy,
int setLife)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `boolean` `canBurnAnywhere`
- `int` `startingEnergy`
- `int` `setLife`

### public IsoFire(IsoCell cell,
IsoGridSquare gridSquare,
boolean canBurnAnywhere,
int startingEnergy)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `gridSquare`
- `boolean` `canBurnAnywhere`
- `int` `startingEnergy`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void load(ByteBuffer b,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `b`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public static boolean CanAddSmoke(IsoGridSquare gridSquare,
boolean canBurnAnywhere)

**Parameters:**
- `IsoGridSquare` `gridSquare`
- `boolean` `canBurnAnywhere`

**Returns:** `boolean`

### public static boolean CanAddFire(IsoGridSquare gridSquare,
boolean canBurnAnywhere)

**Parameters:**
- `IsoGridSquare` `gridSquare`
- `boolean` `canBurnAnywhere`

**Returns:** `boolean`

### public static boolean CanAddFire(IsoGridSquare gridSquare,
boolean canBurnAnywhere,
boolean smoke)

**Parameters:**
- `IsoGridSquare` `gridSquare`
- `boolean` `canBurnAnywhere`
- `boolean` `smoke`

**Returns:** `boolean`

### public static boolean Fire_IsSquareFlamable(IsoGridSquare gridSquare)

**Parameters:**
- `IsoGridSquare` `gridSquare`

**Returns:** `boolean`

### public void Spread()

**Returns:** `void`

### public boolean TestCollide(IsoMovingObject obj,
IsoGridSquare passedObjectSquare)

**Parameters:**
- `IsoMovingObject` `obj`
- `IsoGridSquare` `passedObjectSquare`

**Returns:** `boolean`

### public IsoObject.VisionResult TestVision(IsoGridSquare from,
IsoGridSquare to)

**Parameters:**
- `IsoGridSquare` `from`
- `IsoGridSquare` `to`

**Returns:** `IsoObject.VisionResult`

### public void update()

**Returns:** `void`

### public void updateFromTimer(float timer)

**Parameters:**
- `float` `timer`

**Returns:** `void`

### public void render(float x,
float y,
float z,
ColorInfo col,
boolean bDoChild,
boolean bWallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoChild`
- `boolean` `bWallLightingPass`
- `Shader` `shader`

**Returns:** `void`

### public void extinctFire()

**Returns:** `void`

### public void setSpreadDelay(int spreadDelay)

The more this number is low, the faster it's gonna spread

**Parameters:**
- `int` `spreadDelay`

**Returns:** `void`

### public int getSpreadDelay()

The more this number is low, the faster it's gonna spread

**Returns:** `int`

### public void setLife(int life)

Up this number to make the fire life longer

**Parameters:**
- `int` `life`

**Returns:** `void`

### public int getLife()

**Returns:** `int`

### public int getEnergy()

**Returns:** `int`

### public boolean isPermanent()

**Returns:** `boolean`

### public void setLifeStage(int lifeStage)

**Parameters:**
- `int` `lifeStage`

**Returns:** `void`

### public void setLightRadius(int radius)

**Parameters:**
- `int` `radius`

**Returns:** `void`

### public int getLightRadius()

**Returns:** `int`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void saveChange(IsoObjectChange change,
se.krka.kahlua.vm.KahluaTable tbl,
ByteBufferWriter bb)

**Parameters:**
- `IsoObjectChange` `change`
- `se.krka.kahlua.vm.KahluaTable` `tbl`
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public void loadChange(IsoObjectChange change,
ByteBufferReader bb)

**Parameters:**
- `IsoObjectChange` `change`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public boolean isCampfire()

**Returns:** `boolean`

### public boolean hasAnimatedAttachments()

**Returns:** `boolean`

### public void renderAnimatedAttachments(float x,
float y,
float z,
ColorInfo col)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoFire.html`*
