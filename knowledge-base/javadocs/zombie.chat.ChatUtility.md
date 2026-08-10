---
title: zombie.chat.ChatUtility
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.chat
---

# zombie.chat.ChatUtility

`public final class ChatUtility extends Object`

**Kind:** class · **Package:** zombie.chat

## Inheritance
- java.lang.Object
- zombie.chat.ChatUtility

## Methods

### public static float getScrambleValue(IsoObject src,
IsoPlayer dest,
float baseRange)

**Parameters:**
- `IsoObject` `src`
- `IsoPlayer` `dest`
- `float` `baseRange`

**Returns:** `float`

### public static float getScrambleValue(float srcX,
float srcY,
float srcZ,
IsoGridSquare srcSquare,
IsoPlayer dest,
float baseRange)

**Parameters:**
- `float` `srcX`
- `float` `srcY`
- `float` `srcZ`
- `IsoGridSquare` `srcSquare`
- `IsoPlayer` `dest`
- `float` `baseRange`

**Returns:** `float`

### public static boolean playerWithinBounds(IsoObject source,
IsoObject dest,
float dist)

**Parameters:**
- `IsoObject` `source`
- `IsoObject` `dest`
- `float` `dist`

**Returns:** `boolean`

### public static boolean playerWithinBounds(float srcX,
float srcY,
IsoObject dest,
float dist)

**Parameters:**
- `float` `srcX`
- `float` `srcY`
- `IsoObject` `dest`
- `float` `dist`

**Returns:** `boolean`

### public static float getDistance(IsoObject source,
IsoPlayer dest)

**Parameters:**
- `IsoObject` `source`
- `IsoPlayer` `dest`

**Returns:** `float`

### public static float getDistance(float srcX,
float srcY,
IsoPlayer dest)

**Parameters:**
- `float` `srcX`
- `float` `srcY`
- `IsoPlayer` `dest`

**Returns:** `float`

### public static UdpConnection findConnection(short playerOnlineID)

**Parameters:**
- `short` `playerOnlineID`

**Returns:** `UdpConnection`

### public static UdpConnection findConnection(String playerName)

**Parameters:**
- `String` `playerName`

**Returns:** `UdpConnection`

### public static IsoPlayer findPlayer(int playerOnlineID)

**Parameters:**
- `int` `playerOnlineID`

**Returns:** `IsoPlayer`

### public static String findPlayerName(int playerOnlineID)

**Parameters:**
- `int` `playerOnlineID`

**Returns:** `String`

### public static IsoPlayer findPlayer(String playerNickname)

**Parameters:**
- `String` `playerNickname`

**Returns:** `IsoPlayer`

### public static ArrayList<ChatType> getAllowedChatStreams()

**Returns:** `ArrayList<ChatType>`

### public static boolean chatStreamEnabled(ChatType type)

**Parameters:**
- `ChatType` `type`

**Returns:** `boolean`

### public static void InitAllowedChatIcons()

**Returns:** `void`

### public static String parseStringForChatBubble(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

### public static String parseStringForChatLog(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\chat\ChatUtility.html`*
