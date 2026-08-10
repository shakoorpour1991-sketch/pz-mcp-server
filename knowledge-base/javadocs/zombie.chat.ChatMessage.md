---
title: zombie.chat.ChatMessage
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.chat
---

# zombie.chat.ChatMessage

`public class ChatMessage extends Object implements Cloneable`

**Kind:** class · **Package:** zombie.chat

## Inheritance
- java.lang.Object
- zombie.chat.ChatMessage

## Constructors

### public ChatMessage(ChatBase chat,
String text)

**Parameters:**
- `ChatBase` `chat`
- `String` `text`

### public ChatMessage(ChatBase chat,
LocalDateTime datetime,
String text)

**Parameters:**
- `ChatBase` `chat`
- `LocalDateTime` `datetime`
- `String` `text`

## Methods

### public boolean isShouldAttractZombies()

**Returns:** `boolean`

### public void setShouldAttractZombies(boolean shouldAttractZombies)

**Parameters:**
- `boolean` `shouldAttractZombies`

**Returns:** `void`

### public boolean isLocal()

**Returns:** `boolean`

### public void setLocal(boolean local)

**Parameters:**
- `boolean` `local`

**Returns:** `void`

### public String getTextWithReplacedParentheses()

**Returns:** `String`

### public void setScrambledText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public int getRadioChannel()

**Returns:** `int`

### public void setRadioChannel(int radioChannel)

**Parameters:**
- `int` `radioChannel`

**Returns:** `void`

### public boolean isServerAuthor()

**Returns:** `boolean`

### public void setServerAuthor(boolean serverAuthor)

**Parameters:**
- `boolean` `serverAuthor`

**Returns:** `void`

### public boolean isFromDiscord()

**Returns:** `boolean`

### public void makeFromDiscord()

**Returns:** `void`

### public boolean isOverHeadSpeech()

**Returns:** `boolean`

### public void setOverHeadSpeech(boolean overHeadSpeech)

**Parameters:**
- `boolean` `overHeadSpeech`

**Returns:** `void`

### public boolean isShowInChat()

**Returns:** `boolean`

### public void setShowInChat(boolean showInChat)

**Parameters:**
- `boolean` `showInChat`

**Returns:** `void`

### public LocalDateTime getDatetime()

**Returns:** `LocalDateTime`

### public String getDatetimeStr()

**Returns:** `String`

### public void setDatetime(LocalDateTime datetime)

**Parameters:**
- `LocalDateTime` `datetime`

**Returns:** `void`

### public boolean isShowAuthor()

**Returns:** `boolean`

### public String getAuthor()

**Returns:** `String`

### public void setAuthor(String author)

**Parameters:**
- `String` `author`

**Returns:** `void`

### public ChatBase getChat()

**Returns:** `ChatBase`

### public int getChatID()

**Returns:** `int`

### public String getText()

**Returns:** `String`

### public void setText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public String getTextWithPrefix()

**Returns:** `String`

### public boolean isScramble()

**Returns:** `boolean`

### public String getCustomTag()

**Returns:** `String`

### public void setCustomTag(String customTag)

**Parameters:**
- `String` `customTag`

**Returns:** `void`

### public Color getTextColor()

**Returns:** `Color`

### public void setTextColor(Color textColor)

**Parameters:**
- `Color` `textColor`

**Returns:** `void`

### public boolean isCustomColor()

**Returns:** `boolean`

### public void pack(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public ChatMessage clone()

**Returns:** `ChatMessage`

### public boolean isServerAlert()

**Returns:** `boolean`

### public void setServerAlert(boolean serverAlert)

**Parameters:**
- `boolean` `serverAlert`

**Returns:** `void`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\chat\ChatMessage.html`*
