---
title: zombie.entity.components.spriteconfig.SpriteConfigManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.spriteconfig
---

# zombie.entity.components.spriteconfig.SpriteConfigManager

`public class SpriteConfigManager extends Object`

**Kind:** class · **Package:** zombie.entity.components.spriteconfig

## Inheritance
- java.lang.Object
- zombie.entity.components.spriteconfig.SpriteConfigManager

## Fields

### public static final String FACE_SINGLE

### public static final String FACE_N

### public static final String FACE_W

### public static final String FACE_S

### public static final String FACE_E

### public static final String FACE_N_OPEN

### public static final String FACE_W_OPEN

### public static final int FACE_ID_SINGLE

### public static final int FACE_ID_N

### public static final int FACE_ID_W

### public static final int FACE_ID_S

### public static final int FACE_ID_E

### public static final int FACE_ID_CARDINAL_MAX

### public static final int FACE_ID_N_OPEN

### public static final int FACE_ID_W_OPEN

### public static final int FACE_ID_MAX

## Constructors

### public SpriteConfigManager()

## Methods

### public static int GetFaceIdForString(String face)

**Parameters:**
- `String` `face`

**Returns:** `int`

### public static boolean HasLoadErrors()

**Returns:** `boolean`

### public static SpriteConfigManager.ObjectInfo GetObjectInfo(String name)

**Parameters:**
- `String` `name`

**Returns:** `SpriteConfigManager.ObjectInfo`

### public static SpriteConfigManager.ObjectInfo getObjectInfoFromSprite(String spriteName)

**Parameters:**
- `String` `spriteName`

**Returns:** `SpriteConfigManager.ObjectInfo`

### public static ArrayList<SpriteConfigManager.ObjectInfo> GetObjectInfoList()

**Returns:** `ArrayList<SpriteConfigManager.ObjectInfo>`

### public static void Reset()

**Returns:** `void`

### public static void InitScriptsPostTileDef()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\spriteconfig\SpriteConfigManager.html`*
