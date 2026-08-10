---
title: zombie.characters.Faction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.Faction

`public final class Faction extends Invite`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.Invite
- zombie.characters.Faction

## Fields

### public static ArrayList<Faction> factions

## Constructors

### public Faction()

### public Faction(String name,
String owner)

**Parameters:**
- `String` `name`
- `String` `owner`

## Methods

### public static ArrayList<Faction> getFactions()

**Returns:** `ArrayList<Faction>`

### public static boolean canCreateFaction(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public boolean canCreateTag()

**Returns:** `boolean`

### public static boolean isInSameFaction(IsoPlayer player,
IsoPlayer other)

**Parameters:**
- `IsoPlayer` `player`
- `IsoPlayer` `other`

**Returns:** `boolean`

### public static boolean isInSameFaction(IsoPlayer player,
String username)

**Parameters:**
- `IsoPlayer` `player`
- `String` `username`

**Returns:** `boolean`

### public static boolean isAlreadyInFaction(String username)

**Parameters:**
- `String` `username`

**Returns:** `boolean`

### public static boolean isAlreadyInFaction(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public void removePlayer(String player)

**Parameters:**
- `String` `player`

**Returns:** `void`

### public static boolean factionExist(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public static boolean tagExist(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public static Faction getPlayerFaction(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `Faction`

### public static Faction getPlayerFaction(String username)

**Parameters:**
- `String` `username`

**Returns:** `Faction`

### public static Faction getFaction(String name)

**Parameters:**
- `String` `name`

**Returns:** `Faction`

### public boolean isOwner(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public boolean isMember(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public void writeToBuffer(ByteBufferWriter bb,
boolean remove)

**Parameters:**
- `ByteBufferWriter` `bb`
- `boolean` `remove`

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void addPlayer(String pName)

**Parameters:**
- `String` `pName`

**Returns:** `void`

### public ArrayList<String> getPlayers()

**Returns:** `ArrayList<String>`

### public ColorInfo getTagColor()

**Returns:** `ColorInfo`

### public void setTagColor(ColorInfo tagColor)

**Parameters:**
- `ColorInfo` `tagColor`

**Returns:** `void`

### public String getTag()

**Returns:** `String`

### public void setTag(String tag)

**Parameters:**
- `String` `tag`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getOwner()

**Returns:** `String`

### public void setOwner(String owner)

**Parameters:**
- `String` `owner`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\Faction.html`*
