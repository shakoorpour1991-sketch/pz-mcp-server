---
title: zombie.chat.ChatTab
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.chat
---

# zombie.chat.ChatTab

`public class ChatTab extends Object`

**Kind:** class · **Package:** zombie.chat

## Inheritance
- java.lang.Object
- zombie.chat.ChatTab

## Constructors

### public ChatTab(short tabID,
String titleId)

**Parameters:**
- `short` `tabID`
- `String` `titleId`

### public ChatTab(short tabID,
String titleId,
int chatID)

**Parameters:**
- `short` `tabID`
- `String` `titleId`
- `int` `chatID`

## Methods

### public void RemoveChat(int chatID)

**Parameters:**
- `int` `chatID`

**Returns:** `void`

### public String getTitleID()

**Returns:** `String`

### public String getTitle()

**Returns:** `String`

### public short getID()

**Returns:** `short`

### public boolean isEnabled()

**Returns:** `boolean`

### public void setEnabled(boolean enabled)

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### public void sendAddTabPacket(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void sendRemoveTabPacket(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\chat\ChatTab.html`*
