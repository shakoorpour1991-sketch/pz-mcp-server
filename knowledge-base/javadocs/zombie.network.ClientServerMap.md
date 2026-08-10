---
title: zombie.network.ClientServerMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.ClientServerMap

`public final class ClientServerMap extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.ClientServerMap

## Fields

### public int playerIndex

### public int centerX

### public int centerY

### public int width

### public boolean[] loaded

## Constructors

### public ClientServerMap(int playerIndex,
int squareX,
int squareY,
int chunkGridWidth)

**Parameters:**
- `int` `playerIndex`
- `int` `squareX`
- `int` `squareY`
- `int` `chunkGridWidth`

## Methods

### public int getMinX()

**Returns:** `int`

### public int getMinY()

**Returns:** `int`

### public int getMaxX()

**Returns:** `int`

### public int getMaxY()

**Returns:** `int`

### public boolean isValidCell(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public boolean setLoaded()

**Returns:** `boolean`

### public boolean setPlayerPosition(int squareX,
int squareY)

**Parameters:**
- `int` `squareX`
- `int` `squareY`

**Returns:** `boolean`

### public static boolean isChunkLoaded(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `boolean`

### public static void characterIn(UdpConnection connection,
int playerIndex)

**Parameters:**
- `UdpConnection` `connection`
- `int` `playerIndex`

**Returns:** `void`

### public void sendPacket(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `void`

### public static void render(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\ClientServerMap.html`*
