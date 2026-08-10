---
title: zombie.chat.defaultChats.ServerChat
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.chat.defaultChats
---

# zombie.chat.defaultChats.ServerChat

`public class ServerChat extends ChatBase`

**Kind:** class · **Package:** zombie.chat.defaultChats

## Inheritance
- java.lang.Object
- zombie.chat.ChatBase
- zombie.chat.defaultChats.ServerChat

## Constructors

### public ServerChat(ByteBufferReader bb,
ChatTab tab,
IsoPlayer owner)

**Parameters:**
- `ByteBufferReader` `bb`
- `ChatTab` `tab`
- `IsoPlayer` `owner`

### public ServerChat(int id,
ChatTab tab)

**Parameters:**
- `int` `id`
- `ChatTab` `tab`

## Methods

### public static ChatSettings getDefaultSettings()

**Returns:** `ChatSettings`

### public ChatMessage createMessage(String author,
String text,
boolean isAlert)

**Parameters:**
- `String` `author`
- `String` `text`
- `boolean` `isAlert`

**Returns:** `ChatMessage`

### public ServerChatMessage createServerMessage(String text,
boolean isAlert)

**Parameters:**
- `String` `text`
- `boolean` `isAlert`

**Returns:** `ServerChatMessage`

### public short getTabID()

**Returns:** `short`

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

### public String getMessagePrefix(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `String`

### public String getMessageTextWithPrefix(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `String`

### public void showMessage(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `void`

### public void sendMessageToChatMembers(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\chat\defaultChats\ServerChat.html`*
