---
title: zombie.characters.NetworkUsers
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.NetworkUsers

`public class NetworkUsers extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.NetworkUsers

## Fields

### public static NetworkUsers instance

### public ArrayList<NetworkUser> users

## Constructors

### public NetworkUsers()

## Methods

### public ArrayList<NetworkUser> getUsers()

**Returns:** `ArrayList<NetworkUser>`

### public NetworkUser getUser(String username)

**Parameters:**
- `String` `username`

**Returns:** `NetworkUser`

### public static void send(ByteBufferWriter output,
Collection<NetworkUser> usersInt)

**Parameters:**
- `ByteBufferWriter` `output`
- `Collection<NetworkUser>` `usersInt`

**Returns:** `void`

### public void parse(ByteBufferReader input)

**Parameters:**
- `ByteBufferReader` `input`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\NetworkUsers.html`*
