---
title: zombie.chat.ChatElement
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.chat
---

# zombie.chat.ChatElement

`public class ChatElement extends Object implements Talker`

**Kind:** class · **Package:** zombie.chat

## Inheritance
- java.lang.Object
- zombie.chat.ChatElement

## Description

Turbo
shared display of chat lines functionallity for iso objects invalid input: '&' players (characters)

## Fields

### public static boolean doBackDrop

### public static NineGridTexture backdropTexture

## Constructors

### public ChatElement(ChatElementOwner chatowner,
int numberoflines,
String talkertype)

**Parameters:**
- `ChatElementOwner` `chatowner`
- `int` `numberoflines`
- `String` `talkertype`

## Methods

### public void setMaxChatLines(int num)

**Parameters:**
- `int` `num`

**Returns:** `void`

### public int getMaxChatLines()

**Returns:** `int`

### public void setMaxCharsPerLine(int maxChars)

**Parameters:**
- `int` `maxChars`

**Returns:** `void`

### public boolean IsSpeaking()

**Returns:** `boolean`

### public boolean IsSpeakingNPC()

**Returns:** `boolean`

### public String getTalkerType()

**Returns:** `String`

### public void setTalkerType(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public String getSayLine()

**Returns:** `String`

### public String getSayLineTag()

**Returns:** `String`

### public void setHistoryRange(float range)

**Parameters:**
- `float` `range`

**Returns:** `void`

### public void setUseEuclidean(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getHasChatToDisplay()

**Returns:** `boolean`

### public void SayDebug(int n,
String text)

**Parameters:**
- `int` `n`
- `String` `text`

**Returns:** `void`

### public void Say(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### public void addChatLine(String msg,
float r,
float g,
float b,
float baseRange)

**Parameters:**
- `String` `msg`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `baseRange`

**Returns:** `void`

### public void addChatLine(String msg,
float r,
float g,
float b)

**Parameters:**
- `String` `msg`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void addChatLine(String msg,
float r,
float g,
float b,
UIFont font,
float baseRange,
String customTag,
boolean bbcode,
boolean img,
boolean icons,
boolean colors,
boolean fonts,
boolean equalizeHeights)

**Parameters:**
- `String` `msg`
- `float` `r`
- `float` `g`
- `float` `b`
- `UIFont` `font`
- `float` `baseRange`
- `String` `customTag`
- `boolean` `bbcode`
- `boolean` `img`
- `boolean` `icons`
- `boolean` `colors`
- `boolean` `fonts`
- `boolean` `equalizeHeights`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void renderBatched(int playerNum,
int x,
int y)

**Parameters:**
- `int` `playerNum`
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void renderBatched(int playerNum,
int x,
int y,
boolean ignoreRadioLines)

**Parameters:**
- `int` `playerNum`
- `int` `x`
- `int` `y`
- `boolean` `ignoreRadioLines`

**Returns:** `void`

### public void clear(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static void RenderBatch(int playerNum)

**Parameters:**
- `int` `playerNum`

**Returns:** `void`

### public static void NoRender(int playerNum)

**Parameters:**
- `int` `playerNum`

**Returns:** `void`

### public static void addNoLogText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\chat\ChatElement.html`*
