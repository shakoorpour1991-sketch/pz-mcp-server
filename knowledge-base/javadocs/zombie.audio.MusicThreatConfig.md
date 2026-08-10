---
title: zombie.audio.MusicThreatConfig
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.audio
---

# zombie.audio.MusicThreatConfig

`public final class MusicThreatConfig extends Object`

**Kind:** class · **Package:** zombie.audio

## Inheritance
- java.lang.Object
- zombie.audio.MusicThreatConfig

## Constructors

### public MusicThreatConfig()

## Methods

### public static MusicThreatConfig getInstance()

**Returns:** `MusicThreatConfig`

### public void initStatuses(se.krka.kahlua.j2se.KahluaTableImpl statusesTable)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `statusesTable`

**Returns:** `void`

### public int getStatusCount()

**Returns:** `int`

### public String getStatusIdByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `String`

### public float getStatusIntensityByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `float`

### public float getStatusIntensity(String id)

**Parameters:**
- `String` `id`

**Returns:** `float`

### public void setStatusIntensityOverride(String id,
float intensity)

**Parameters:**
- `String` `id`
- `float` `intensity`

**Returns:** `void`

### public float getStatusIntensityOverride(String id)

**Parameters:**
- `String` `id`

**Returns:** `float`

### public boolean isStatusIntensityOverridden(String id)

**Parameters:**
- `String` `id`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\audio\MusicThreatConfig.html`*
