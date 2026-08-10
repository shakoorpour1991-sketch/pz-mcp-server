---
title: zombie.chat.defaultChats.GeneralChat
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.chat.defaultChats
---

# zombie.chat.defaultChats.GeneralChat

`public class GeneralChat extends ChatBase`

**Kind:** class · **Package:** zombie.chat.defaultChats

## Inheritance
- java.lang.Object
- zombie.chat.ChatBase
- zombie.chat.defaultChats.GeneralChat

## Constructors

### public GeneralChat(ByteBufferReader bb,
ChatTab tab,
IsoPlayer owner)

**Parameters:**
- `ByteBufferReader` `bb`
- `ChatTab` `tab`
- `IsoPlayer` `owner`

### public GeneralChat(int id,
ChatTab tab,
boolean discordEnabled)

**Parameters:**
- `int` `id`
- `ChatTab` `tab`
- `boolean` `discordEnabled`

### public GeneralChat()

## Methods

### public static ChatSettings getDefaultSettings()

**Returns:** `ChatSettings`

### public void sendMessageToChatMembers(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `void`

### public void sendToDiscordGeneralChatDisabled()

**Returns:** `void`

### public String getMessagePrefix(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `String`

### public void packMessage(ByteBufferWriter b,
ChatMessage msg)

**Parameters:**
- `ByteBufferWriter` `b`
- `ChatMessage` `msg`

**Returns:** `void`

### public ChatMessage unpackMessage(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `ChatMessage`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\chat\defaultChats\GeneralChat.html`*
