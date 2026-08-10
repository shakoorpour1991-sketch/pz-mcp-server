---
title: zombie.network.chat.ChatServer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.chat
---

# zombie.network.chat.ChatServer

`public class ChatServer extends Object`

**Kind:** class · **Package:** zombie.network.chat

## Inheritance
- java.lang.Object
- zombie.network.chat.ChatServer

## Methods

### public static ChatServer getInstance()

**Returns:** `ChatServer`

### public static boolean isInited()

**Returns:** `boolean`

### public void init()

**Returns:** `void`

### public void initPlayer(short playerID)

**Parameters:**
- `short` `playerID`

**Returns:** `void`

### public void processMessageFromPlayerPacket(ByteBufferReader bb,
UdpConnection connection)

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`

**Returns:** `void`

### public void processPlayerStartWhisperChatPacket(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public ChatMessage unpackChatMessage(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `ChatMessage`

### public void disconnectPlayer(short playerID)

**Parameters:**
- `short` `playerID`

**Returns:** `void`

### public void joinAdminChat(short playerID)

**Parameters:**
- `short` `playerID`

**Returns:** `void`

### public void leaveAdminChat(short playerID)

**Parameters:**
- `short` `playerID`

**Returns:** `void`

### public FactionChat createFactionChat(String name)

**Parameters:**
- `String` `name`

**Returns:** `FactionChat`

### public SafehouseChat createSafehouseChat(String safehouseID)

**Parameters:**
- `String` `safehouseID`

**Returns:** `SafehouseChat`

### public void removeFactionChat(String factionName)

**Parameters:**
- `String` `factionName`

**Returns:** `void`

### public void removeSafehouseChat(String safehouseName)

**Parameters:**
- `String` `safehouseName`

**Returns:** `void`

### public void syncFactionChatMembers(String factionName,
String factionOwner,
ArrayList<String> players)

**Parameters:**
- `String` `factionName`
- `String` `factionOwner`
- `ArrayList<String>` `players`

**Returns:** `void`

### public void syncSafehouseChatMembers(String safehouseID,
String safehouseOwner,
ArrayList<String> players)

**Parameters:**
- `String` `safehouseID`
- `String` `safehouseOwner`
- `ArrayList<String>` `players`

**Returns:** `void`

### public void sendServerAlertMessageToServerChat(String author,
String msg)

**Parameters:**
- `String` `author`
- `String` `msg`

**Returns:** `void`

### public void sendServerAlertMessageToServerChat(String msg)

**Parameters:**
- `String` `msg`

**Returns:** `void`

### public ChatMessage createRadiostationMessage(String text,
int radioChannel)

**Parameters:**
- `String` `text`
- `int` `radioChannel`

**Returns:** `ChatMessage`

### public void sendMessageToServerChat(UdpConnection connection,
String msg)

**Parameters:**
- `UdpConnection` `connection`
- `String` `msg`

**Returns:** `void`

### public void sendMessageToServerChat(String msg)

**Parameters:**
- `String` `msg`

**Returns:** `void`

### public void sendMessageFromDiscordToGeneralChat(String author,
String msg)

**Parameters:**
- `String` `author`
- `String` `msg`

**Returns:** `void`

### public void sendMessageToAdminChat(String msg)

**Parameters:**
- `String` `msg`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\chat\ChatServer.html`*
