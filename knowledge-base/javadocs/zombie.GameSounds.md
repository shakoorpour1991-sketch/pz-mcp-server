---
title: zombie.GameSounds
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.GameSounds

`public final class GameSounds extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.GameSounds

## Fields

### public static final int VERSION

### public static boolean soundIsPaused

### public static final boolean VCA_VOLUME

## Constructors

### public GameSounds()

## Methods

### public static void addSound(GameSound sound)

**Parameters:**
- `GameSound` `sound`

**Returns:** `void`

### public static boolean isKnownSound(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public static GameSound getSound(String name)

**Parameters:**
- `String` `name`

**Returns:** `GameSound`

### public static GameSound getOrCreateSound(String name)

**Parameters:**
- `String` `name`

**Returns:** `GameSound`

### public static void ScriptsLoaded()

**Returns:** `void`

### public static void OnReloadSound(GameSoundScript scriptSound)

**Parameters:**
- `GameSoundScript` `scriptSound`

**Returns:** `void`

### public static ArrayList<String> getCategories()

**Returns:** `ArrayList<String>`

### public static ArrayList<GameSound> getSoundsInCategory(String category)

**Parameters:**
- `String` `category`

**Returns:** `ArrayList<GameSound>`

### public static void loadINI()

**Returns:** `void`

### public static void saveINI()

**Returns:** `void`

### public static void previewSound(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static void stopPreview()

**Returns:** `void`

### public static boolean isPreviewPlaying()

**Returns:** `boolean`

### public static void fix3DListenerPosition(boolean inMenu)

**Parameters:**
- `boolean` `inMenu`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\GameSounds.html`*
