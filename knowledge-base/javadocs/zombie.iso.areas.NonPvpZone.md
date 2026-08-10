---
title: zombie.iso.areas.NonPvpZone
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas
---

# zombie.iso.areas.NonPvpZone

`public final class NonPvpZone extends Object`

**Kind:** class · **Package:** zombie.iso.areas

## Inheritance
- java.lang.Object
- zombie.iso.areas.NonPvpZone

## Fields

### public static final ArrayList<NonPvpZone> nonPvpZoneList

## Constructors

### public NonPvpZone()

### public NonPvpZone(String title,
int x,
int y,
int x2,
int y2)

**Parameters:**
- `String` `title`
- `int` `x`
- `int` `y`
- `int` `x2`
- `int` `y2`

## Methods

### public static NonPvpZone addNonPvpZone(String title,
int x,
int y,
int x2,
int y2)

**Parameters:**
- `String` `title`
- `int` `x`
- `int` `y`
- `int` `x2`
- `int` `y2`

**Returns:** `NonPvpZone`

### public static void removeNonPvpZone(String title)

**Parameters:**
- `String` `title`

**Returns:** `void`

### public static NonPvpZone getZoneByTitle(String title)

**Parameters:**
- `String` `title`

**Returns:** `NonPvpZone`

### public static NonPvpZone getNonPvpZone(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `NonPvpZone`

### public static ArrayList<NonPvpZone> getAllZones()

**Returns:** `ArrayList<NonPvpZone>`

### public static boolean isInNonPvpZone(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public void syncNonPvpZone(boolean remove)

**Parameters:**
- `boolean` `remove`

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public int getX()

**Returns:** `int`

### public void setX(int x)

**Parameters:**
- `int` `x`

**Returns:** `void`

### public int getY()

**Returns:** `int`

### public void setY(int y)

**Parameters:**
- `int` `y`

**Returns:** `void`

### public int getX2()

**Returns:** `int`

### public void setX2(int x2)

**Parameters:**
- `int` `x2`

**Returns:** `void`

### public int getY2()

**Returns:** `int`

### public void setY2(int y2)

**Parameters:**
- `int` `y2`

**Returns:** `void`

### public String getTitle()

**Returns:** `String`

### public void setTitle(String title)

**Parameters:**
- `String` `title`

**Returns:** `void`

### public int getSize()

**Returns:** `int`

### public void setSize(int size)

**Parameters:**
- `int` `size`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\NonPvpZone.html`*
