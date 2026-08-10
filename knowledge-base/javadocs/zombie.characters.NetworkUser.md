---
title: zombie.characters.NetworkUser
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.NetworkUser

`public class NetworkUser extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.NetworkUser

## Fields

### public boolean inWhitelist

### public String ipBanned

### public String steamIdBanned

### public String world

### public String username

### public String lastConnection

### public Role role

### public NetworkUser.AuthType authType

### public String steamid

### public String displayName

### public boolean online

### public int warningPoints

### public int suspicionPoints

### public int kicks

### public short ping

## Constructors

### public NetworkUser()

### public NetworkUser(String world,
String username,
String lastConnection,
Role role,
int authType,
String steamid,
String displayName,
boolean online)

**Parameters:**
- `String` `world`
- `String` `username`
- `String` `lastConnection`
- `Role` `role`
- `int` `authType`
- `String` `steamid`
- `String` `displayName`
- `boolean` `online`

## Methods

### public String getFirstBannedIPForUser(String username)

**Parameters:**
- `String` `username`

**Returns:** `String`

### public String isSteamIdBanned(String steamId)

**Parameters:**
- `String` `steamId`

**Returns:** `String`

### public String getSteamIdBanned()

**Returns:** `String`

### public String getIpBanned()

**Returns:** `String`

### public String getWorld()

**Returns:** `String`

### public String getUsername()

**Returns:** `String`

### public String getLastConnection()

**Returns:** `String`

### public Role getRole()

**Returns:** `Role`

### public NetworkUser.AuthType getAuthType()

**Returns:** `NetworkUser.AuthType`

### public String getAuthTypeName()

**Returns:** `String`

### public String getSteamid()

**Returns:** `String`

### public String getDisplayName()

**Returns:** `String`

### public boolean isOnline()

**Returns:** `boolean`

### public UdpConnection.ConnectionType getConnectionType()

**Returns:** `UdpConnection.ConnectionType`

### public void setConnectionType(UdpConnection.ConnectionType connectionType)

**Parameters:**
- `UdpConnection.ConnectionType` `connectionType`

**Returns:** `void`

### public boolean isConnectedDirectly()

**Returns:** `boolean`

### public void setWarningPoints(int warningPoints)

**Parameters:**
- `int` `warningPoints`

**Returns:** `void`

### public int getWarningPoints()

**Returns:** `int`

### public void setSuspicionPoints(int suspicionPoints)

**Parameters:**
- `int` `suspicionPoints`

**Returns:** `void`

### public int getSuspicionPoints()

**Returns:** `int`

### public void setKicks(int kicks)

**Parameters:**
- `int` `kicks`

**Returns:** `void`

### public int getKicks()

**Returns:** `int`

### public void setInWhitelist(boolean inWhitelist)

**Parameters:**
- `boolean` `inWhitelist`

**Returns:** `void`

### public boolean isInWhitelist()

**Returns:** `boolean`

### public void setPing(short ping)

**Parameters:**
- `short` `ping`

**Returns:** `void`

### public short getPing()

**Returns:** `short`

### public void send(ByteBufferWriter output)

**Parameters:**
- `ByteBufferWriter` `output`

**Returns:** `void`

### public void parse(ByteBufferReader input)

**Parameters:**
- `ByteBufferReader` `input`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\NetworkUser.html`*
