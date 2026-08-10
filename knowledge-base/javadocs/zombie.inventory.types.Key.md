---
title: zombie.inventory.types.Key
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.Key

`public final class Key extends InventoryItem`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.Key

## Fields

### public static final Key.HighlightDoor[] highlightDoor

## Constructors

### public Key(String module,
String name,
String type,
String tex)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `type`
- `String` `tex`

## Methods

### public void takeKeyId()

Get the key number of the building and set it to the key

**Returns:** `void`

### public static void setHighlightDoors(int playerNum,
InventoryItem item)

**Parameters:**
- `int` `playerNum`
- `InventoryItem` `item`

**Returns:** `void`

### public int getKeyId()

**Returns:** `int`

### public void setKeyId(int keyId)

**Parameters:**
- `int` `keyId`

**Returns:** `void`

### public String getCategory()

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

### public boolean isPadlock()

**Returns:** `boolean`

### public void setPadlock(boolean padlock)

**Parameters:**
- `boolean` `padlock`

**Returns:** `void`

### public int getNumberOfKey()

**Returns:** `int`

### public void setNumberOfKey(int numberOfKey)

**Parameters:**
- `int` `numberOfKey`

**Returns:** `void`

### public boolean isDigitalPadlock()

**Returns:** `boolean`

### public void setDigitalPadlock(boolean digitalPadlock)

**Parameters:**
- `boolean` `digitalPadlock`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\Key.html`*
