---
title: zombie.iso.objects.IsoBarricade
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoBarricade

`public class IsoBarricade extends IsoObject implements Thumpable, IHasHealth`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoBarricade

## Fields

### public static final int MAX_PLANKS

### public static final int PLANK_HEALTH

### public static final int METAL_BAR_HEALTH

### public static final int METAL_HEALTH

### public static final int METAL_HEALTH_DAMAGED

## Constructors

### public IsoBarricade(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoBarricade(IsoGridSquare gridSquare,
IsoDirections dir)

**Parameters:**
- `IsoGridSquare` `gridSquare`
- `IsoDirections` `dir`

## Methods

### public String getObjectName()

**Returns:** `String`

### public void addPlank(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void addPlank(IsoGameCharacter chr,
InventoryItem plank)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `plank`

**Returns:** `void`

### public InventoryItem removePlank(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `InventoryItem`

### public int getNumPlanks()

**Returns:** `int`

### public boolean canAddPlank()

**Returns:** `boolean`

### public void addMetalBar(IsoGameCharacter chr,
InventoryItem metalBar)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `metalBar`

**Returns:** `void`

### public InventoryItem removeMetalBar(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `InventoryItem`

### public void addMetal(IsoGameCharacter chr,
InventoryItem metal)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `metal`

**Returns:** `void`

### public boolean isMetalBar()

**Returns:** `boolean`

### public InventoryItem removeMetal(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `InventoryItem`

### public boolean isMetal()

**Returns:** `boolean`

### public boolean isBlockVision()

**Returns:** `boolean`

### public boolean isDestroyed()

**Returns:** `boolean`

### public IsoObject.VisionResult TestVision(IsoGridSquare from,
IsoGridSquare to)

**Parameters:**
- `IsoGridSquare` `from`
- `IsoGridSquare` `to`

**Returns:** `IsoObject.VisionResult`

### public void Thump(IsoMovingObject thumper,
int thumpEventCount)

**Parameters:**
- `IsoMovingObject` `thumper`
- `int` `thumpEventCount`

**Returns:** `void`

### public Thumpable getThumpableFor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `Thumpable`

### public Vector2 getFacingPosition(Vector2 pos)

**Parameters:**
- `Vector2` `pos`

**Returns:** `Vector2`

### public void WeaponHit(IsoGameCharacter owner,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `owner`
- `HandWeapon` `weapon`

**Returns:** `void`

### public void Damage(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public void syncIsoObjectSend(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void syncIsoObjectReceive(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void syncIsoObject(boolean bRemote,
byte val,
UdpConnection source,
ByteBufferReader bb)

**Parameters:**
- `boolean` `bRemote`
- `byte` `val`
- `UdpConnection` `source`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public float getThumpCondition()

**Returns:** `float`

### public void setHealth(int health)

**Parameters:**
- `int` `health`

**Returns:** `void`

### public int getHealth()

**Returns:** `int`

### public int getMaxHealth()

**Returns:** `int`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

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

### public BarricadeAble getBarricadedObject()

**Returns:** `BarricadeAble`

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

### public static IsoBarricade GetBarricadeOnSquare(IsoGridSquare square,
IsoDirections dir)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoDirections` `dir`

**Returns:** `IsoBarricade`

### public static IsoBarricade GetBarricadeForCharacter(BarricadeAble obj,
IsoGameCharacter chr)

**Parameters:**
- `BarricadeAble` `obj`
- `IsoGameCharacter` `chr`

**Returns:** `IsoBarricade`

### public static IsoBarricade GetBarricadeOppositeCharacter(BarricadeAble obj,
IsoGameCharacter chr)

**Parameters:**
- `BarricadeAble` `obj`
- `IsoGameCharacter` `chr`

**Returns:** `IsoBarricade`

### public static IsoBarricade AddBarricadeToObject(BarricadeAble to,
boolean addOpposite)

**Parameters:**
- `BarricadeAble` `to`
- `boolean` `addOpposite`

**Returns:** `IsoBarricade`

### public static IsoBarricade AddBarricadeToObject(BarricadeAble to,
IsoGameCharacter chr)

**Parameters:**
- `BarricadeAble` `to`
- `IsoGameCharacter` `chr`

**Returns:** `IsoBarricade`

### public boolean canAttackBypassIsoBarricade(IsoGameCharacter isoGameCharacter,
HandWeapon handWeapon)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `HandWeapon` `handWeapon`

**Returns:** `boolean`

### public static void barricadeCurrentCellWithMetalPlate()

**Returns:** `void`

### public static void barricadeCurrentCellWithMetalBars()

**Returns:** `void`

### public static void barricadeCurrentCellWithPlanks(int numberOfPlanks)

**Parameters:**
- `int` `numberOfPlanks`

**Returns:** `void`

### public void addFromCraftRecipe(IsoGameCharacter chr,
ArrayList<InventoryItem> items)

**Parameters:**
- `IsoGameCharacter` `chr`
- `ArrayList<InventoryItem>` `items`

**Returns:** `void`

### public float getLightTransmission()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoBarricade.html`*
