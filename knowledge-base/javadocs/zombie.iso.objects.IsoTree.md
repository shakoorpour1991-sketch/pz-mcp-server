---
title: zombie.iso.objects.IsoTree
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoTree

`public class IsoTree extends IsoObject implements IHasHealth`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoTree

## Fields

### public float fadeAlpha

### public static final int SIZE_JUMBO

### public static final int SIZE_JUMBO_L

### public static final int SIZE_JUMBO_XL

### public static final int SIZE_JUMBO_XXL

### public static final int MAX_SIZE

### public int size

### public boolean renderFlag

### public boolean wasFaded

### public boolean useTreeShader

## Constructors

### public IsoTree()

### public IsoTree(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoTree(IsoGridSquare sq,
String gid)

**Parameters:**
- `IsoGridSquare` `sq`
- `String` `gid`

### public IsoTree(IsoGridSquare sq,
IsoSprite gid)

**Parameters:**
- `IsoGridSquare` `sq`
- `IsoSprite` `gid`

## Methods

### public static IsoTree getNew()

**Returns:** `IsoTree`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void initTree()

**Returns:** `void`

### public String getObjectName()

**Returns:** `String`

### public void Damage(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public void HitByVehicle(BaseVehicle vehicle,
float amount)

**Parameters:**
- `BaseVehicle` `vehicle`
- `float` `amount`

**Returns:** `void`

### public void WeaponHitEffects(IsoGameCharacter owner,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HandWeapon` `weapon`

**Returns:** `void`

### public void WeaponHit(IsoGameCharacter owner,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HandWeapon` `weapon`

**Returns:** `void`

### public void setHealth(int health)

**Parameters:**
- `int` `health`

**Returns:** `void`

### public int getHealth()

**Returns:** `int`

### public int getMaxHealth()

**Returns:** `int`

### public int getSize()

**Returns:** `int`

### public float getSlowFactor(IsoMovingObject chr)

**Parameters:**
- `IsoMovingObject` `chr`

**Returns:** `float`

### public void render(float x,
float y,
float z,
ColorInfo col,
boolean bDoAttached,
boolean bWallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoAttached`
- `boolean` `bWallLightingPass`
- `Shader` `shader`

**Returns:** `void`

### public void setSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite` — the sprite to set

**Returns:** `void`

### public boolean isMaskClicked(int x,
int y,
boolean flip)

**Parameters:**
- `int` `x`
- `int` `y`
- `boolean` `flip`

**Returns:** `boolean`

### public static void setChopTreeCursorLocation(int playerIndex,
int x,
int y,
int z)

**Parameters:**
- `int` `playerIndex`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void checkChopTreeIndicator()

**Returns:** `void`

### public static void checkChopTreeIndicators(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static void renderChopTreeIndicators()

**Returns:** `void`

### public IsoGridSquare getRenderSquare()

**Returns:** `IsoGridSquare`

### public void reset()

**Returns:** `void`

### public void dropWood()

**Returns:** `void`

### public void toppleTree()

**Returns:** `void`

### public void toppleTree(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `void`

### public int getLogYield()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoTree.html`*
