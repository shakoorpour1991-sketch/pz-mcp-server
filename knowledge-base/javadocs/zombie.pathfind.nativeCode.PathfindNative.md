---
title: zombie.pathfind.nativeCode.PathfindNative
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind.nativeCode
---

# zombie.pathfind.nativeCode.PathfindNative

`public class PathfindNative extends Object`

**Kind:** class · **Package:** zombie.pathfind.nativeCode

## Inheritance
- java.lang.Object
- zombie.pathfind.nativeCode.PathfindNative

## Fields

### public static final PathfindNative instance

### public static boolean useNativeCode

## Constructors

### public PathfindNative()

## Methods

### public static void init()

**Returns:** `void`

### public static void initWorld(int var0,
int var1,
int var2,
int var3,
boolean var4)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `boolean` `var4`

**Returns:** `void`

### public static void destroyWorld()

**Returns:** `void`

### public static void freeMemoryAtExit()

**Returns:** `void`

### public static void update()

**Returns:** `void`

### public static void updateChunk(int var0,
int var1,
int var2,
ByteBuffer var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `ByteBuffer` `var3`

**Returns:** `void`

### public static void removeChunk(int var0,
int var1)

**Parameters:**
- `int` `var0`
- `int` `var1`

**Returns:** `void`

### public static void updateSquare(int var0,
int var1,
int var2,
int var3,
int var4,
short var5,
int var6,
float var7,
float var8)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `int` `var4`
- `short` `var5`
- `int` `var6`
- `float` `var7`
- `float` `var8`

**Returns:** `void`

### public static void addVehicle(ByteBuffer var0)

**Parameters:**
- `ByteBuffer` `var0`

**Returns:** `void`

### public static void removeVehicle(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void teleportVehicle(ByteBuffer var0)

**Parameters:**
- `ByteBuffer` `var0`

**Returns:** `void`

### public static int findPath(ByteBuffer var0,
ByteBuffer var1)

**Parameters:**
- `ByteBuffer` `var0`
- `ByteBuffer` `var1`

**Returns:** `int`

### public void init(IsoMetaGrid metaGrid)

**Parameters:**
- `IsoMetaGrid` `metaGrid`

**Returns:** `void`

### public void stop()

**Returns:** `void`

### public void checkUseNativeCode()

**Returns:** `void`

### public void addChunkToWorld(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void removeChunkFromWorld(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void squareChanged(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public void addVehicle(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void removeVehicle(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void updateVehicle(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public PathFindRequest addRequest(IPathfinder pathfinder,
Mover mover,
float startX,
float startY,
float startZ,
float targetX,
float targetY,
float targetZ)

**Parameters:**
- `IPathfinder` `pathfinder`
- `Mover` `mover`
- `float` `startX`
- `float` `startY`
- `float` `startZ`
- `float` `targetX`
- `float` `targetY`
- `float` `targetZ`

**Returns:** `PathFindRequest`

### public void cancelRequest(Mover mover)

**Parameters:**
- `Mover` `mover`

**Returns:** `void`

### public void updateMain()

**Returns:** `void`

### public int findPath(PathFindRequest request,
ByteBuffer pathBB,
boolean bRender)

**Parameters:**
- `PathFindRequest` `request`
- `ByteBuffer` `pathBB`
- `boolean` `bRender`

**Returns:** `int`

### public void render()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\nativeCode\PathfindNative.html`*
