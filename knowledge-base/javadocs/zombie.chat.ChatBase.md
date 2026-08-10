---
title: zombie.chat.ChatBase
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.chat
---

# zombie.chat.ChatBase

`public abstract class ChatBase extends Object`

**Kind:** class · **Package:** zombie.chat

## Inheritance
- java.lang.Object
- zombie.chat.ChatBase

## Constructors

### public ChatBase(ByteBufferReader bb,
ChatType type,
ChatTab tab,
IsoPlayer owner)

**Parameters:**
- `ByteBufferReader` `bb`
- `ChatType` `type`
- `ChatTab` `tab`
- `IsoPlayer` `owner`

### public ChatBase(int id,
ChatType type,
ChatTab tab)

Should be called only on server side of chat system

**Parameters:**
- `int` `id` — meta information about chat. Many parameters depends on that
- `ChatType` `type` — this tab will transferred to clients when it will connecting
- `ChatTab` `tab`

## Methods

### public boolean isEnabled()

**Returns:** `boolean`

### public ChatMode getMode()

**Returns:** `ChatMode`

### public ChatType getType()

**Returns:** `ChatType`

### public int getID()

**Returns:** `int`

### public String getTitleID()

**Returns:** `String`

### public Color getColor()

**Returns:** `Color`

### public short getTabID()

**Returns:** `short`

### public float getRange()

**Returns:** `float`

### public boolean isSendingToRadio()

**Returns:** `boolean`

### public float getZombieAttractionRange()

**Returns:** `float`

### public void setSettings(ChatSettings settings)

**Parameters:**
- `ChatSettings` `settings`

**Returns:** `void`

### public void setFontSize(String fontSize)

**Parameters:**
- `String` `fontSize`

**Returns:** `void`

### public void setShowTimestamp(boolean showTimestamp)

**Parameters:**
- `boolean` `showTimestamp`

**Returns:** `void`

### public void setShowTitle(boolean showTitle)

**Parameters:**
- `boolean` `showTitle`

**Returns:** `void`

### public void close()

**Returns:** `void`

### public ChatMessage unpackMessage(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `ChatMessage`

### public void packMessage(ByteBufferWriter b,
ChatMessage msg)

**Parameters:**
- `ByteBufferWriter` `b`
- `ChatMessage` `msg`

**Returns:** `void`

### public ChatMessage createMessage(String text)

Message creator. Every chat know how to create its own message

**Parameters:**
- `String` `text` — text of the message

**Returns:** `ChatMessage`

### public ServerChatMessage createServerMessage(String text)

**Parameters:**
- `String` `text`

**Returns:** `ServerChatMessage`

### public void showMessage(String text,
String author)

**Parameters:**
- `String` `text`
- `String` `author`

**Returns:** `void`

### public void showMessage(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `void`

### public String getMessageTextWithPrefix(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `String`

### public void sendMessageToChatMembers(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `void`

### public void sendMessageToChatMembers(ServerChatMessage msg)

**Parameters:**
- `ServerChatMessage` `msg`

**Returns:** `void`

### public void sendMessageToPlayer(UdpConnection connection,
ChatMessage msg)

**Parameters:**
- `UdpConnection` `connection`
- `ChatMessage` `msg`

**Returns:** `void`

### public void sendMessageToPlayer(short playerID,
ChatMessage msg)

**Parameters:**
- `short` `playerID`
- `ChatMessage` `msg`

**Returns:** `void`

### public String getMessagePrefix(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `String`

### public void addMember(short playerID)

**Parameters:**
- `short` `playerID`

**Returns:** `void`

### public void leaveMember(Short playerID)

**Parameters:**
- `Short` `playerID`

**Returns:** `void`

### public void removeMember(Short playerID)

**Parameters:**
- `Short` `playerID`

**Returns:** `void`

### public void syncMembersByUsernames(ArrayList<String> players)

**Parameters:**
- `ArrayList<String>` `players`

**Returns:** `void`

### public ArrayList<Short> getJustAddedMembers()

**Returns:** `ArrayList<Short>`

### public ArrayList<Short> getJustRemovedMembers()

**Returns:** `ArrayList<Short>`

### public void sendPlayerJoinChatPacket(UdpConnection playerConnection)

**Parameters:**
- `UdpConnection` `playerConnection`

**Returns:** `void`

### public void sendPlayerLeaveChatPacket(short playerID)

**Parameters:**
- `short` `playerID`

**Returns:** `void`

### public void sendPlayerLeaveChatPacket(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void sendToServer(ChatMessage msg,
DeviceData deviceData)

**Parameters:**
- `ChatMessage` `msg`
- `DeviceData` `deviceData`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\chat\ChatBase.html`*
