---
title: zombie.inventory.types.Radio
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.Radio

`public final class Radio extends Moveable implements Talker, IUpdater, WaveSignalDevice`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.Moveable
- zombie.inventory.types.Radio

## Description

Turbo

## Constructors

### public Radio(String module,
String name,
String itemType,
String texName)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `String` `texName`

## Methods

### public DeviceData getDeviceData()

**Returns:** `DeviceData`

### public void setDeviceData(DeviceData data)

**Parameters:**
- `DeviceData` `data`

**Returns:** `void`

### public void doReceiveSignal(int distance)

**Parameters:**
- `int` `distance`

**Returns:** `void`

### public void AddDeviceText(String line,
float r,
float g,
float b,
String guid,
String codes,
int distance)

**Parameters:**
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`
- `String` `guid`
- `String` `codes`
- `int` `distance`

**Returns:** `void`

### public void AddDeviceText(ChatMessage msg,
float r,
float g,
float b,
String guid,
String codes,
int distance)

**Parameters:**
- `ChatMessage` `msg`
- `float` `r`
- `float` `g`
- `float` `b`
- `String` `guid`
- `String` `codes`
- `int` `distance`

**Returns:** `void`

### public boolean HasPlayerInRange()

**Returns:** `boolean`

### public boolean ReadFromWorldSprite(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `boolean`

### public float getDelta()

**Returns:** `float`

### public void setDelta(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public float getZ()

**Returns:** `float`

### public IsoPlayer getPlayer()

**Returns:** `IsoPlayer`

### public void render()

**Returns:** `void`

### public void renderlast()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean IsSpeaking()

**Returns:** `boolean`

### public void Say(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### public String getSayLine()

**Returns:** `String`

### public String getTalkerType()

**Returns:** `String`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void setCanBeEquipped(ItemBodyLocation canBeEquipped)

**Parameters:**
- `ItemBodyLocation` `canBeEquipped`

**Returns:** `void`

### public ItemBodyLocation canBeEquipped()

**Returns:** `ItemBodyLocation`

### public String getClothingExtraSubmenu()

**Returns:** `String`

### public void OnAddedToContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `void`

### public float getCurrentUsesFloat()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\Radio.html`*
