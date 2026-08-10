---
title: zombie.iso.areas.SafeHouse
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas
---

# zombie.iso.areas.SafeHouse

`public class SafeHouse extends Invite`

**Kind:** class · **Package:** zombie.iso.areas

## Inheritance
- java.lang.Object
- zombie.characters.Invite
- zombie.iso.areas.SafeHouse

## Constructors

### public SafeHouse(int x,
int y,
int w,
int h,
String player)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `String` `player`

## Methods

### public static void init()

**Returns:** `void`

### public static SafeHouse addSafeHouse(int x,
int y,
int w,
int h,
String player)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`
- `String` `player`

**Returns:** `SafeHouse`

### public static SafeHouse addSafeHouse(IsoGridSquare square,
IsoPlayer player)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoPlayer` `player`

**Returns:** `SafeHouse`

### public static SafeHouse hasSafehouse(String username)

**Parameters:**
- `String` `username`

**Returns:** `SafeHouse`

### public static SafeHouse getSafehouseByOwner(String username)

**Parameters:**
- `String` `username`

**Returns:** `SafeHouse`

### public static SafeHouse hasSafehouse(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `SafeHouse`

### public static void updateSafehousePlayersConnected()

**Returns:** `void`

### public void updatePlayersConnected()

**Returns:** `void`

### public static SafeHouse getSafeHouse(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `SafeHouse`

### public static SafeHouse getSafeHouse(String title)

**Parameters:**
- `String` `title`

**Returns:** `SafeHouse`

### public static SafeHouse getSafeHouse(int x,
int y,
int w,
int h)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `SafeHouse`

### public static SafeHouse getSafehouseOverlapping(int x1,
int y1,
int x2,
int y2)

**Parameters:**
- `int` `x1`
- `int` `y1`
- `int` `x2`
- `int` `y2`

**Returns:** `SafeHouse`

### public static SafeHouse getSafehouseOverlapping(int x1,
int y1,
int x2,
int y2,
SafeHouse ignore)

**Parameters:**
- `int` `x1`
- `int` `y1`
- `int` `x2`
- `int` `y2`
- `SafeHouse` `ignore`

**Returns:** `SafeHouse`

### public static SafeHouse isSafeHouse(IsoGridSquare square,
String username,
boolean doDisableSafehouse)

Return if the square is a safehouse non allowed for the player You need to be
on a safehouse AND not be allowed to return the safe If you're allowed,
you'll have null in return If username is null, you basically just return if
there's a safehouse here

**Parameters:**
- `IsoGridSquare` `square`
- `String` `username`
- `boolean` `doDisableSafehouse`

**Returns:** `SafeHouse`

### public static boolean isSafehouseAllowTrepass(IsoGridSquare square,
IsoPlayer player)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static boolean isSafehouseAllowInteract(IsoGridSquare square,
IsoPlayer player)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static boolean isSafehouseAllowLoot(IsoGridSquare square,
IsoPlayer player)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static boolean isSafehouseAllowClaimWar(SafeHouse safehouse,
IsoPlayer player)

**Parameters:**
- `SafeHouse` `safehouse`
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static void clearSafehouseList()

**Returns:** `void`

### public boolean playerAllowed(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public boolean playerAllowed(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public void addPlayer(String player)

**Parameters:**
- `String` `player`

**Returns:** `void`

### public void removePlayer(String player)

**Parameters:**
- `String` `player`

**Returns:** `void`

### public static void removeSafeHouse(SafeHouse safeHouse)

**Parameters:**
- `SafeHouse` `safeHouse`

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public static SafeHouse load(ByteBuffer bb,
int worldVersion)

**Parameters:**
- `ByteBuffer` `bb`
- `int` `worldVersion`

**Returns:** `SafeHouse`

### public static String canBeSafehouse(IsoGridSquare clickedSquare,
IsoPlayer player)

**Parameters:**
- `IsoGridSquare` `clickedSquare`
- `IsoPlayer` `player`

**Returns:** `String`

### public void checkTrespass(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public SafeHouse alreadyHaveSafehouse(String username)

**Parameters:**
- `String` `username`

**Returns:** `SafeHouse`

### public SafeHouse alreadyHaveSafehouse(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `SafeHouse`

### public static boolean allowSafeHouse(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static int getOnlineID(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `int`

### public String getId()

**Returns:** `String`

### public int getX()

**Returns:** `int`

### public void setX(int x)

**Parameters:**
- `int` `x`

**Returns:** `void`

### public int getY()

**Returns:** `int`

### public void setY(int y)

**Parameters:**
- `int` `y`

**Returns:** `void`

### public int getW()

**Returns:** `int`

### public void setW(int w)

**Parameters:**
- `int` `w`

**Returns:** `void`

### public int getH()

**Returns:** `int`

### public void setH(int h)

**Parameters:**
- `int` `h`

**Returns:** `void`

### public int getX2()

**Returns:** `int`

### public int getY2()

**Returns:** `int`

### public boolean containsLocation(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public ArrayList<String> getPlayers()

**Returns:** `ArrayList<String>`

### public void setPlayers(ArrayList<String> players)

**Parameters:**
- `ArrayList<String>` `players`

**Returns:** `void`

### public ArrayList<String> getPlayersRespawn()

**Returns:** `ArrayList<String>`

### public static ArrayList<SafeHouse> getSafehouseList()

**Returns:** `ArrayList<SafeHouse>`

### public String getOwner()

**Returns:** `String`

### public void setOwner(String owner)

**Parameters:**
- `String` `owner`

**Returns:** `void`

### public boolean isOwner(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public boolean isOwner(String username)

**Parameters:**
- `String` `username`

**Returns:** `boolean`

### public long getLastVisited()

**Returns:** `long`

### public void setLastVisited(long lastVisited)

**Parameters:**
- `long` `lastVisited`

**Returns:** `void`

### public long getDatetimeCreated()

**Returns:** `long`

### public String getDatetimeCreatedStr()

**Returns:** `String`

### public void setDatetimeCreated(long datetimeCreated)

**Parameters:**
- `long` `datetimeCreated`

**Returns:** `void`

### public String getLocation()

**Returns:** `String`

### public void setLocation(String location)

**Parameters:**
- `String` `location`

**Returns:** `void`

### public String getTitle()

**Returns:** `String`

### public void setTitle(String title)

**Parameters:**
- `String` `title`

**Returns:** `void`

### public int getPlayerConnected()

**Returns:** `int`

### public void setPlayerConnected(int playerConnected)

**Parameters:**
- `int` `playerConnected`

**Returns:** `void`

### public int getOpenTimer()

**Returns:** `int`

### public void setOpenTimer(int openTimer)

**Parameters:**
- `int` `openTimer`

**Returns:** `void`

### public int getHitPoints()

**Returns:** `int`

### public void setHitPoints(int hitPoints)

**Parameters:**
- `int` `hitPoints`

**Returns:** `void`

### public void setRespawnInSafehouse(boolean b,
String username)

**Parameters:**
- `boolean` `b`
- `String` `username`

**Returns:** `void`

### public boolean isRespawnInSafehouse(String username)

**Parameters:**
- `String` `username`

**Returns:** `boolean`

### public static boolean isPlayerAllowedOnSquare(IsoPlayer player,
IsoGridSquare sq)

**Parameters:**
- `IsoPlayer` `player`
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public int getOnlineID()

**Returns:** `int`

### public void setOnlineID(int value)

**Parameters:**
- `int` `value`

**Returns:** `void`

### public static SafeHouse getSafeHouse(int onlineID)

**Parameters:**
- `int` `onlineID`

**Returns:** `SafeHouse`

### public static boolean isInSameSafehouse(String player1,
String player2)

**Parameters:**
- `String` `player1`
- `String` `player2`

**Returns:** `boolean`

### public static boolean intersects(int startX,
int startY,
int endX,
int endY)

**Parameters:**
- `int` `startX`
- `int` `startY`
- `int` `endX`
- `int` `endY`

**Returns:** `boolean`

### public static void hitPoint(int onlineID)

**Parameters:**
- `int` `onlineID`

**Returns:** `void`

### public static void kickUserFromSafehouse(SafeHouse safeHouse,
String username)

**Parameters:**
- `SafeHouse` `safeHouse`
- `String` `username`

**Returns:** `void`

### public static boolean hasNotSurvivedEnoughToClaim(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static void update()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\SafeHouse.html`*
