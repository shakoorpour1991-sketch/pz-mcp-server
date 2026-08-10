---
title: zombie.chat.ChatManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.chat
---

# zombie.chat.ChatManager

`public class ChatManager extends Object`

**Kind:** class · **Package:** zombie.chat

## Inheritance
- java.lang.Object
- zombie.chat.ChatManager

## Methods

### public static ChatManager getInstance()

**Returns:** `ChatManager`

### public boolean isSinglePlayerMode()

**Returns:** `boolean`

### public boolean isWorking()

**Returns:** `boolean`

### public void init(boolean isSinglePlayer,
IsoPlayer owner)

**Parameters:**
- `boolean` `isSinglePlayer`
- `IsoPlayer` `owner`

**Returns:** `void`

### public void processInitPlayerChatPacket(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void setFullyConnected()

**Returns:** `void`

### public void processAddTabPacket(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void processRemoveTabPacket(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void processJoinChatPacket(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void processLeaveChatPacket(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void processPlayerNotFound(String destPlayerName)

**Parameters:**
- `String` `destPlayerName`

**Returns:** `void`

### public ChatMessage unpackMessage(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `ChatMessage`

### public void processChatMessagePacket(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void updateChatSettings(String fontSize,
boolean showTimestamp,
boolean showTitle)

**Parameters:**
- `String` `fontSize`
- `boolean` `showTimestamp`
- `boolean` `showTitle`

**Returns:** `void`

### public void showInfoMessage(String msg)

**Parameters:**
- `String` `msg`

**Returns:** `void`

### public void showInfoMessage(String author,
String msg)

**Parameters:**
- `String` `author`
- `String` `msg`

**Returns:** `void`

### public void sendMessageToChat(String author,
ChatType type,
String msg)

**Parameters:**
- `String` `author`
- `ChatType` `type`
- `String` `msg`

**Returns:** `void`

### public void sendMessageToChat(ChatType type,
String msg)

**Parameters:**
- `ChatType` `type`
- `String` `msg`

**Returns:** `void`

### public void sendWhisperMessage(String destPlayerName,
String msg)

**Parameters:**
- `String` `destPlayerName`
- `String` `msg`

**Returns:** `void`

### public Boolean isPlayerCanUseChat(ChatType chat)

**Parameters:**
- `ChatType` `chat`

**Returns:** `Boolean`

### public void focusOnTab(Short id)

**Parameters:**
- `Short` `id`

**Returns:** `void`

### public String getTabName(short tabID)

**Parameters:**
- `short` `tabID`

**Returns:** `String`

### public ChatTab getFocusTab()

**Returns:** `ChatTab`

### public void showRadioMessage(ChatMessage msg)

**Parameters:**
- `ChatMessage` `msg`

**Returns:** `void`

### public void showRadioMessage(String text,
int channel)

**Parameters:**
- `String` `text`
- `int` `channel`

**Returns:** `void`

### public void showStaticRadioSound(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public ChatMessage createRadiostationMessage(String text,
int channel)

**Parameters:**
- `String` `text`
- `int` `channel`

**Returns:** `ChatMessage`

### public void showServerChatMessage(String msg)

**Parameters:**
- `String` `msg`

**Returns:** `void`

### public void addMessage(String msgAuthor,
String msg)
throws RuntimeException

**Parameters:**
- `String` `msgAuthor`
- `String` `msg`

**Returns:** `void`

### public static void UpdateClient()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\chat\ChatManager.html`*
