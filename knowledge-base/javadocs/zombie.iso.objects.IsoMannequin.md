---
title: zombie.iso.objects.IsoMannequin
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoMannequin

`public class IsoMannequin extends IsoObject implements IHumanVisual`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoMannequin

## Constructors

### public IsoMannequin(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoMannequin(IsoCell cell,
IsoGridSquare square,
IsoSprite sprite)

**Parameters:**
- `IsoCell` `cell`
- `IsoGridSquare` `square`
- `IsoSprite` `sprite`

## Methods

### public String getObjectName()

**Returns:** `String`

### public HumanVisual getHumanVisual()

**Returns:** `HumanVisual`

### public void getItemVisuals(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public boolean isFemale()

**Returns:** `boolean`

### public boolean isZombie()

**Returns:** `boolean`

### public boolean isSkeleton()

**Returns:** `boolean`

### public boolean isItemAllowedInContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `boolean`

### public String getMannequinScriptName()

**Returns:** `String`

### public void setMannequinScriptName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getPose()

**Returns:** `String`

### public void setRenderDirection(IsoDirections newDir)

**Parameters:**
- `IsoDirections` `newDir`

**Returns:** `void`

### public void rotate(IsoDirections newDir)

**Parameters:**
- `IsoDirections` `newDir`

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

### public void getVariables(Map<String,String> vars)

**Parameters:**
- `Map<String,String>` `vars`

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

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void saveState(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void loadState(ByteBuffer input)
throws IOException

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

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

### public void renderFxMask(float x,
float y,
float z,
boolean bDoAttached)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `boolean` `bDoAttached`

**Returns:** `void`

### public boolean shouldRenderEachFrame()

**Returns:** `boolean`

### public void checkRenderDirection(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public DeadBodyAtlas.BodyTexture getAtlasTexture()

**Returns:** `DeadBodyAtlas.BodyTexture`

### public void renderShadow(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void wearItem(InventoryItem item,
IsoGameCharacter chr)

**Parameters:**
- `InventoryItem` `item`
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void checkClothing(InventoryItem removedItem)

**Parameters:**
- `InventoryItem` `removedItem`

**Returns:** `void`

### public String getAnimSetName()

**Returns:** `String`

### public String getAnimStateName()

**Returns:** `String`

### public void getCustomSettingsFromItem(InventoryItem item)
throws IOException

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void setCustomSettingsToItem(InventoryItem item)
throws IOException

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public static boolean isMannequinSprite(IsoSprite sprite)

**Parameters:**
- `IsoSprite` `sprite`

**Returns:** `boolean`

### public static void renderMoveableItem(Moveable item,
int x,
int y,
int z,
IsoDirections dir)

**Parameters:**
- `Moveable` `item`
- `int` `x`
- `int` `y`
- `int` `z`
- `IsoDirections` `dir`

**Returns:** `void`

### public static void renderMoveableObject(IsoMannequin mannequin,
int x,
int y,
int z,
IsoDirections dir)

**Parameters:**
- `IsoMannequin` `mannequin`
- `int` `x`
- `int` `y`
- `int` `z`
- `IsoDirections` `dir`

**Returns:** `void`

### public static IsoDirections getDirectionFromItem(Moveable item,
int playerIndex)

**Parameters:**
- `Moveable` `item`
- `int` `playerIndex`

**Returns:** `IsoDirections`

### public WornItems getWornItems()

**Returns:** `WornItems`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoMannequin.html`*
