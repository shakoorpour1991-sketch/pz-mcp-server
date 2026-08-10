---
title: zombie.chat.defaultChats.SayChat
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.chat.defaultChats
---

# zombie.chat.defaultChats.SayChat

`public class SayChat extends RangeBasedChat`

**Kind:** class · **Package:** zombie.chat.defaultChats

## Inheritance
- java.lang.Object
- zombie.chat.ChatBase
- zombie.chat.defaultChats.RangeBasedChat
- zombie.chat.defaultChats.SayChat

## Constructors

### public SayChat(ByteBufferReader bb,
ChatTab tab,
IsoPlayer owner)

**Parameters:**
- `ByteBufferReader` `bb`
- `ChatTab` `tab`
- `IsoPlayer` `owner`

### public SayChat(int id,
ChatTab tab)

**Parameters:**
- `int` `id`
- `ChatTab` `tab`

### public SayChat()

## Methods

### public static ChatSettings getDefaultSettings()

**Returns:** `ChatSettings`

### public ChatMessage createInfoMessage(String text)

**Parameters:**
- `String` `text`

**Returns:** `ChatMessage`

### public ChatMessage createCalloutMessage(String text)

**Parameters:**
- `String` `text`

**Returns:** `ChatMessage`

### public String getMessageTextWithPrefix(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\chat\defaultChats\SayChat.html`*
