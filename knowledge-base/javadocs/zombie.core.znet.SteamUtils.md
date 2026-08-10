---
title: zombie.core.znet.SteamUtils
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.znet
---

# zombie.core.znet.SteamUtils

`public class SteamUtils extends Object`

**Kind:** class · **Package:** zombie.core.znet

## Inheritance
- java.lang.Object
- zombie.core.znet.SteamUtils

## Fields

### public static final int k_EGamepadTextInputModeNormal

### public static final int k_EGamepadTextInputModePassword

### public static final int k_EGamepadTextInputLineModeSingleLine

### public static final int k_EGamepadTextInputLineModeMultipleLines

### public static final int k_EFloatingGamepadTextInputModeSingleLine

### public static final int k_EFloatingGamepadTextInputModeMultipleLines

### public static final int k_EFloatingGamepadTextInputModeEmail

### public static final int k_EFloatingGamepadTextInputModeNumeric

## Constructors

### public SteamUtils()

## Methods

### public static void init()

**Returns:** `void`

### public static void shutdown()

**Returns:** `void`

### public static void runLoop()

**Returns:** `void`

### public static boolean isSteamModeEnabled()

**Returns:** `boolean`

### public static boolean isOverlayEnabled()

**Returns:** `boolean`

### public static String convertSteamIDToString(long steamID)

**Parameters:**
- `long` `steamID`

**Returns:** `String`

### public static boolean isValidSteamID(String s)

**Parameters:**
- `String` `s`

**Returns:** `boolean`

### public static long convertStringToSteamID(String s)

**Parameters:**
- `String` `s`

**Returns:** `long`

### public static void addJoinRequestCallback(IJoinRequestCallback callback)

**Parameters:**
- `IJoinRequestCallback` `callback`

**Returns:** `void`

### public static void removeJoinRequestCallback(IJoinRequestCallback callback)

**Parameters:**
- `IJoinRequestCallback` `callback`

**Returns:** `void`

### public static boolean isRunningOnSteamDeck()

**Returns:** `boolean`

### public static boolean showGamepadTextInput(boolean password,
boolean multipleLines,
String description,
int maxChars,
String existingText)

**Parameters:**
- `boolean` `password`
- `boolean` `multipleLines`
- `String` `description`
- `int` `maxChars`
- `String` `existingText`

**Returns:** `boolean`

### public static boolean showFloatingGamepadTextInput(boolean multipleLines,
int x,
int y,
int width,
int height)

**Parameters:**
- `boolean` `multipleLines`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

**Returns:** `boolean`

### public static boolean isFloatingGamepadTextInputVisible()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\znet\SteamUtils.html`*
