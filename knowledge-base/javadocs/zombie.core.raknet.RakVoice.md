---
title: zombie.core.raknet.RakVoice
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.raknet
---

# zombie.core.raknet.RakVoice

`public class RakVoice extends Object`

**Kind:** class · **Package:** zombie.core.raknet

## Inheritance
- java.lang.Object
- zombie.core.raknet.RakVoice

## Constructors

### public RakVoice()

## Methods

### public static void RVInit(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void RVInitServer(boolean var0,
int var1,
int var2,
int var3,
int var4,
float var5,
float var6,
boolean var7)

**Parameters:**
- `boolean` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `int` `var4`
- `float` `var5`
- `float` `var6`
- `boolean` `var7`

**Returns:** `void`

### public static void RVDeinit()

**Returns:** `void`

### public static int GetComplexity()

**Returns:** `int`

### public static void SetComplexity(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void RequestVoiceChannel(long var0)

**Parameters:**
- `long` `var0`

**Returns:** `void`

### public static void CloseAllChannels()

**Returns:** `void`

### public static int GetBufferSizeBytes()

**Returns:** `int`

### public static boolean GetServerVOIPEnable()

**Returns:** `boolean`

### public static int GetSampleRate()

**Returns:** `int`

### public static int GetSendFramePeriod()

**Returns:** `int`

### public static int GetBuffering()

**Returns:** `int`

### public static float GetMinDistance()

**Returns:** `float`

### public static float GetMaxDistance()

**Returns:** `float`

### public static boolean GetIs3D()

**Returns:** `boolean`

### public static void CloseVoiceChannel(long var0)

**Parameters:**
- `long` `var0`

**Returns:** `void`

### public static boolean ReceiveFrame(long var0,
byte[] var2)

**Parameters:**
- `long` `var0`
- `byte[]` `var2`

**Returns:** `boolean`

### public static void SendFrame(long var0,
long var2,
byte[] var4,
long var5)

**Parameters:**
- `long` `var0`
- `long` `var2`
- `byte[]` `var4`
- `long` `var5`

**Returns:** `void`

### public static void SetLoopbackMode(boolean var0)

**Parameters:**
- `boolean` `var0`

**Returns:** `void`

### public static void SetVoiceBan(long var0,
boolean var2)

**Parameters:**
- `long` `var0`
- `boolean` `var2`

**Returns:** `void`

### public static void SetChannelsRouting(long var0,
boolean var2,
int[] var3,
short var4)

**Parameters:**
- `long` `var0`
- `boolean` `var2`
- `int[]` `var3`
- `short` `var4`

**Returns:** `void`

### public static boolean GetChannelStatistics(long var0,
long[] var2)

**Parameters:**
- `long` `var0`
- `long[]` `var2`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\raknet\RakVoice.html`*
