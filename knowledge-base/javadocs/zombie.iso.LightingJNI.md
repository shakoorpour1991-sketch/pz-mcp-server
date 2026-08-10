---
title: zombie.iso.LightingJNI
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.LightingJNI

`public final class LightingJNI extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.LightingJNI

## Fields

### public static final int ROOM_SPAWN_DIST

### public static boolean init

### public static final int[][] ForcedVis

## Constructors

### public LightingJNI()

## Methods

### public static void doInvalidateGlobalLights(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static void init()

**Returns:** `void`

### public static float calculateVisionCone(IsoGameCharacter player)

**Parameters:**
- `IsoGameCharacter` `player`

**Returns:** `float`

### public static void updatePlayer(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static void updateChunk(int playerIndex,
IsoChunk mchunk)

**Parameters:**
- `int` `playerIndex`
- `IsoChunk` `mchunk`

**Returns:** `void`

### public static void preUpdate()

**Returns:** `void`

### public static void update()

**Returns:** `void`

### public static void getTorches(ArrayList<IsoGameCharacter.TorchInfo> out)

**Parameters:**
- `ArrayList<IsoGameCharacter.TorchInfo>` `out`

**Returns:** `void`

### public static int getUpdateCounter(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public static void stop()

**Returns:** `void`

### public static void configure(float var0)

**Parameters:**
- `float` `var0`

**Returns:** `void`

### public static void scrollLeft(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void scrollRight(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void scrollUp(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void scrollDown(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void stateBeginUpdate(int var0,
int var1,
int var2,
int var3,
int var4)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `int` `var4`

**Returns:** `void`

### public static void stateEndFrame(float var0,
float var1,
float var2,
float var3,
float var4,
float var5,
float var6,
boolean var7,
float var8,
int var9)

**Parameters:**
- `float` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `boolean` `var7`
- `float` `var8`
- `int` `var9`

**Returns:** `void`

### public static void stateEndUpdate()

**Returns:** `void`

### public static int stateUpdateCounter(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `int`

### public static void teleport(int var0,
int var1,
int var2)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`

**Returns:** `void`

### public static void DoLightingUpdateNew(long var0,
boolean var2)

**Parameters:**
- `long` `var0`
- `boolean` `var2`

**Returns:** `void`

### public static boolean WaitingForMain()

**Returns:** `boolean`

### public static void playerSet(float var0,
float var1,
float var2,
float var3,
float var4,
boolean var5,
boolean var6,
boolean var7,
boolean var8,
float var9,
float var10,
float var11)

**Parameters:**
- `float` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `boolean` `var5`
- `boolean` `var6`
- `boolean` `var7`
- `boolean` `var8`
- `float` `var9`
- `float` `var10`
- `float` `var11`

**Returns:** `void`

### public static boolean chunkLightingDone(int var0,
int var1)

**Parameters:**
- `int` `var0`
- `int` `var1`

**Returns:** `boolean`

### public static boolean getChunkDirty(int var0,
int var1,
int var2,
int var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `boolean`

### public static void chunkBeginUpdate(int var0,
int var1,
int var2,
int var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `void`

### public static void chunkEndUpdate()

**Returns:** `void`

### public static void chunkLevelBeginUpdate(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void chunkLevelEndUpdate()

**Returns:** `void`

### public static void squareSetNull(int var0,
int var1,
int var2)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`

**Returns:** `void`

### public static void squareBeginUpdate(int var0,
int var1,
int var2)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`

**Returns:** `void`

### public static void squareSet(int var0,
boolean var1,
boolean var2,
boolean var3,
int var4,
long var5,
long var7,
int var9,
boolean var10)

**Parameters:**
- `int` `var0`
- `boolean` `var1`
- `boolean` `var2`
- `boolean` `var3`
- `int` `var4`
- `long` `var5`
- `long` `var7`
- `int` `var9`
- `boolean` `var10`

**Returns:** `void`

### public static void squareSetLightTransmission(float var0,
float var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7,
float var8,
float var9,
float var10,
float var11,
float var12,
float var13,
float var14,
float var15,
float var16,
float var17,
float var18,
float var19)

**Parameters:**
- `float` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`
- `float` `var8`
- `float` `var9`
- `float` `var10`
- `float` `var11`
- `float` `var12`
- `float` `var13`
- `float` `var14`
- `float` `var15`
- `float` `var16`
- `float` `var17`
- `float` `var18`
- `float` `var19`

**Returns:** `void`

### public static void squareAddCurtain(int var0,
boolean var1)

**Parameters:**
- `int` `var0`
- `boolean` `var1`

**Returns:** `void`

### public static void squareAddDoor(boolean var0,
boolean var1,
boolean var2)

**Parameters:**
- `boolean` `var0`
- `boolean` `var1`
- `boolean` `var2`

**Returns:** `void`

### public static void squareAddThumpable(boolean var0,
boolean var1,
boolean var2,
boolean var3)

**Parameters:**
- `boolean` `var0`
- `boolean` `var1`
- `boolean` `var2`
- `boolean` `var3`

**Returns:** `void`

### public static void squareAddWindow(boolean var0,
boolean var1,
boolean var2)

**Parameters:**
- `boolean` `var0`
- `boolean` `var1`
- `boolean` `var2`

**Returns:** `void`

### public static void squareEndUpdate()

**Returns:** `void`

### public static int getVertLight(int var0,
int var1,
int var2,
int var3,
int var4)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `int` `var4`

**Returns:** `int`

### public static float getLightInfo(int var0,
int var1,
int var2,
int var3,
int var4)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `int` `var4`

**Returns:** `float`

### public static float getDarkMulti(int var0,
int var1,
int var2,
int var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `float`

### public static float getTargetDarkMulti(int var0,
int var1,
int var2,
int var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `float`

### public static boolean getSeen(int var0,
int var1,
int var2,
int var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `boolean`

### public static boolean getCanSee(int var0,
int var1,
int var2,
int var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `boolean`

### public static boolean getCouldSee(int var0,
int var1,
int var2,
int var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `boolean`

### public static boolean getSquareLighting(int var0,
int var1,
int var2,
int var3,
int[] var4)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `int[]` `var4`

**Returns:** `boolean`

### public static boolean getSquareDirty(int var0,
int var1,
int var2,
int var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `boolean`

### public static void addLight(int var0,
int var1,
int var2,
int var3,
int var4,
float var5,
float var6,
float var7,
int var8,
boolean var9)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `int` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`
- `int` `var8`
- `boolean` `var9`

**Returns:** `void`

### public static void addTempLight(int var0,
int var1,
int var2,
int var3,
int var4,
float var5,
float var6,
float var7,
int var8)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `int` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`
- `int` `var8`

**Returns:** `void`

### public static void removeLight(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void setLightActive(int var0,
boolean var1)

**Parameters:**
- `int` `var0`
- `boolean` `var1`

**Returns:** `void`

### public static void setLightColor(int var0,
float var1,
float var2,
float var3)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`

**Returns:** `void`

### public static void addRoomLight(int var0,
long var1,
long var3,
int var5,
int var6,
int var7,
int var8,
int var9,
boolean var10)

**Parameters:**
- `int` `var0`
- `long` `var1`
- `long` `var3`
- `int` `var5`
- `int` `var6`
- `int` `var7`
- `int` `var8`
- `int` `var9`
- `boolean` `var10`

**Returns:** `void`

### public static void removeRoomLight(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void setRoomLightActive(int var0,
boolean var1)

**Parameters:**
- `int` `var0`
- `boolean` `var1`

**Returns:** `void`

### public static void updateTorch(int var0,
float var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7,
float var8,
float var9,
float var10,
boolean var11,
float var12,
int var13)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`
- `float` `var8`
- `float` `var9`
- `float` `var10`
- `boolean` `var11`
- `float` `var12`
- `int` `var13`

**Returns:** `void`

### public static void removeTorch(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static int getVisibleRoomCount(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `int`

### public static int getVisibleRooms(int var0,
long[] var1)

**Parameters:**
- `int` `var0`
- `long[]` `var1`

**Returns:** `int`

### public static void destroy()

**Returns:** `void`

### public static ArrayList<LightingJNI.VisibleRoom> getVisibleRooms(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `ArrayList<LightingJNI.VisibleRoom>`

### public static boolean isRoomVisible(int playerIndex,
int cellX,
int cellY,
long metaID)

**Parameters:**
- `int` `playerIndex`
- `int` `cellX`
- `int` `cellY`
- `long` `metaID`

**Returns:** `boolean`

### public static void buildingsChanged()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\LightingJNI.html`*
