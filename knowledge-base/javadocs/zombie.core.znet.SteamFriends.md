---
title: zombie.core.znet.SteamFriends
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.znet
---

# zombie.core.znet.SteamFriends

`public class SteamFriends extends Object`

**Kind:** class · **Package:** zombie.core.znet

## Inheritance
- java.lang.Object
- zombie.core.znet.SteamFriends

## Fields

### public static final int k_EPersonaStateOffline

### public static final int k_EPersonaStateOnline

### public static final int k_EPersonaStateBusy

### public static final int k_EPersonaStateAway

### public static final int k_EPersonaStateSnooze

### public static final int k_EPersonaStateLookingToTrade

### public static final int k_EPersonaStateLookingToPlay

## Constructors

### public SteamFriends()

## Methods

### public static void init()

**Returns:** `void`

### public static void shutdown()

**Returns:** `void`

### public static void n_Init()

**Returns:** `void`

### public static void n_Shutdown()

**Returns:** `void`

### public static String GetPersonaName()

**Returns:** `String`

### public static int GetFriendCount()

**Returns:** `int`

### public static long GetFriendByIndex(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `long`

### public static String GetFriendPersonaName(long var0)

**Parameters:**
- `long` `var0`

**Returns:** `String`

### public static int GetFriendPersonaState(long var0)

**Parameters:**
- `long` `var0`

**Returns:** `int`

### public static boolean InviteUserToGame(long var0,
String var2)

**Parameters:**
- `long` `var0`
- `String` `var2`

**Returns:** `boolean`

### public static void ActivateGameOverlay(String var0)

**Parameters:**
- `String` `var0`

**Returns:** `void`

### public static void ActivateGameOverlayToUser(String var0,
long var1)

**Parameters:**
- `String` `var0`
- `long` `var1`

**Returns:** `void`

### public static void ActivateGameOverlayToWebPage(String var0)

**Parameters:**
- `String` `var0`

**Returns:** `void`

### public static void SetPlayedWith(long var0)

**Parameters:**
- `long` `var0`

**Returns:** `void`

### public static void UpdateRichPresenceConnectionInfo(String var0,
String var1)

**Parameters:**
- `String` `var0`
- `String` `var1`

**Returns:** `void`

### public static List<SteamFriend> GetFriendList()

**Returns:** `List<SteamFriend>`

### public static int CreateSteamAvatar(long var0,
ByteBuffer var2)

**Parameters:**
- `long` `var0`
- `ByteBuffer` `var2`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\znet\SteamFriends.html`*
