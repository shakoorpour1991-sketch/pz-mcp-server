---
title: zombie.worldMap.network.WorldMapSymbolNetworkInfo
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap.network
---

# zombie.worldMap.network.WorldMapSymbolNetworkInfo

`public final class WorldMapSymbolNetworkInfo extends Object`

**Kind:** class · **Package:** zombie.worldMap.network

## Inheritance
- java.lang.Object
- zombie.worldMap.network.WorldMapSymbolNetworkInfo

## Constructors

### public WorldMapSymbolNetworkInfo()

## Methods

### public boolean equals(Object obj)

**Parameters:**
- `Object` `obj`

**Returns:** `boolean`

### public void setID(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public String getAuthor()

**Returns:** `String`

### public void setAuthor(String username)

**Parameters:**
- `String` `username`

**Returns:** `void`

### public boolean isVisibleToEveryone()

**Returns:** `boolean`

### public void setVisibleToEveryone(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isVisibleToFaction()

**Returns:** `boolean`

### public void setVisibleToFaction(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isVisibleToSafehouse()

**Returns:** `boolean`

### public void setVisibleToSafehouse(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void addPlayer(String username)

**Parameters:**
- `String` `username`

**Returns:** `void`

### public int getPlayerCount()

**Returns:** `int`

### public String getPlayerByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

### public boolean hasPlayer(String username)

**Parameters:**
- `String` `username`

**Returns:** `boolean`

### public void clearPlayers()

**Returns:** `void`

### public void save(ByteBuffer bb)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void load(ByteBuffer bb,
int worldVersion,
int symbolsVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`
- `int` `worldVersion`
- `int` `symbolsVersion`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\network\WorldMapSymbolNetworkInfo.html`*
