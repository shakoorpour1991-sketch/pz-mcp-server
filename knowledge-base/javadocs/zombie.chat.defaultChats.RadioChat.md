---
title: zombie.chat.defaultChats.RadioChat
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.chat.defaultChats
---

# zombie.chat.defaultChats.RadioChat

`public class RadioChat extends RangeBasedChat`

**Kind:** class · **Package:** zombie.chat.defaultChats

## Inheritance
- java.lang.Object
- zombie.chat.ChatBase
- zombie.chat.defaultChats.RangeBasedChat
- zombie.chat.defaultChats.RadioChat

## Constructors

### public RadioChat(ByteBufferReader bb,
ChatTab tab,
IsoPlayer owner)

**Parameters:**
- `ByteBufferReader` `bb`
- `ChatTab` `tab`
- `IsoPlayer` `owner`

### public RadioChat(int id,
ChatTab tab)

**Parameters:**
- `int` `id`
- `ChatTab` `tab`

### public RadioChat()

## Methods

### public static ChatSettings getDefaultSettings()

**Returns:** `ChatSettings`

### public ChatMessage createMessage(String text)

Description copied from class: ChatBase

**Parameters:**
- `String` `text` — text of the message

**Returns:** `ChatMessage`

### public ChatMessage createBroadcastingMessage(String text,
int channel)

**Parameters:**
- `String` `text`
- `int` `channel`

**Returns:** `ChatMessage`

### public ChatMessage createStaticSoundMessage(String text)

**Parameters:**
- `String` `text`

**Returns:** `ChatMessage`

### public void showMessage(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `void`

### public void sendToServer(ChatMessage msg,
DeviceData deviceData)

**Parameters:**
- `ChatMessage` `msg`
- `DeviceData` `deviceData`

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

### public String getMessagePrefix(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\chat\defaultChats\RadioChat.html`*
