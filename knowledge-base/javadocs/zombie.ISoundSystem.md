---
title: zombie.ISoundSystem
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: zombie
---

# zombie.ISoundSystem

`public interface ISoundSystem`

**Kind:** interface · **Package:** zombie

## Methods

### void init()

**Returns:** `void`

### void update()

**Returns:** `void`

### void purge()

**Returns:** `void`

### void fadeOutAll(float var1)

**Parameters:**
- `float` `var1`

**Returns:** `void`

### ISoundSystem.ISoundInstance playSound(ISoundSystem.SoundFormat var1,
String var2,
String var3,
int var4,
boolean var5,
boolean var6,
float var7)

**Parameters:**
- `ISoundSystem.SoundFormat` `var1`
- `String` `var2`
- `String` `var3`
- `int` `var4`
- `boolean` `var5`
- `boolean` `var6`
- `float` `var7`

**Returns:** `ISoundSystem.ISoundInstance`

### ISoundSystem.ISoundInstance playSound(ISoundSystem.SoundFormat var1,
String var2,
String var3,
int var4,
boolean var5,
boolean var6,
float var7,
float var8)

**Parameters:**
- `ISoundSystem.SoundFormat` `var1`
- `String` `var2`
- `String` `var3`
- `int` `var4`
- `boolean` `var5`
- `boolean` `var6`
- `float` `var7`
- `float` `var8`

**Returns:** `ISoundSystem.ISoundInstance`

### ISoundSystem.ISoundInstance playSound(ISoundSystem.SoundFormat var1,
String var2,
String var3,
int var4,
boolean var5,
boolean var6,
float var7,
float var8,
float var9)

**Parameters:**
- `ISoundSystem.SoundFormat` `var1`
- `String` `var2`
- `String` `var3`
- `int` `var4`
- `boolean` `var5`
- `boolean` `var6`
- `float` `var7`
- `float` `var8`
- `float` `var9`

**Returns:** `ISoundSystem.ISoundInstance`

### ISoundSystem.ISoundInstance playSound(ISoundSystem.SoundFormat var1,
String var2,
String var3,
boolean var4,
boolean var5,
float var6)

**Parameters:**
- `ISoundSystem.SoundFormat` `var1`
- `String` `var2`
- `String` `var3`
- `boolean` `var4`
- `boolean` `var5`
- `float` `var6`

**Returns:** `ISoundSystem.ISoundInstance`

### ISoundSystem.ISoundInstance playSound(ISoundSystem.SoundFormat var1,
String var2,
String var3,
boolean var4,
boolean var5,
float var6,
float var7)

**Parameters:**
- `ISoundSystem.SoundFormat` `var1`
- `String` `var2`
- `String` `var3`
- `boolean` `var4`
- `boolean` `var5`
- `float` `var6`
- `float` `var7`

**Returns:** `ISoundSystem.ISoundInstance`

### ISoundSystem.ISoundInstance playSound(ISoundSystem.SoundFormat var1,
String var2,
String var3,
boolean var4,
boolean var5,
float var6,
float var7,
float var8)

**Parameters:**
- `ISoundSystem.SoundFormat` `var1`
- `String` `var2`
- `String` `var3`
- `boolean` `var4`
- `boolean` `var5`
- `float` `var6`
- `float` `var7`
- `float` `var8`

**Returns:** `ISoundSystem.ISoundInstance`

### void cacheSound(ISoundSystem.SoundFormat var1,
String var2,
String var3,
int var4)

**Parameters:**
- `ISoundSystem.SoundFormat` `var1`
- `String` `var2`
- `String` `var3`
- `int` `var4`

**Returns:** `void`

### void cacheSound(ISoundSystem.SoundFormat var1,
String var2,
String var3)

**Parameters:**
- `ISoundSystem.SoundFormat` `var1`
- `String` `var2`
- `String` `var3`

**Returns:** `void`

### void clearSoundCache()

**Returns:** `void`

### int countInstances(String var1)

**Parameters:**
- `String` `var1`

**Returns:** `int`

### void setInstanceLimit(String var1,
int var2,
ISoundSystem.InstanceFailAction var3)

**Parameters:**
- `String` `var1`
- `int` `var2`
- `ISoundSystem.InstanceFailAction` `var3`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ISoundSystem.html`*
