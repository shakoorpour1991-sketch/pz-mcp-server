---
title: zombie.network.Userlog
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.Userlog

`public class Userlog extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.Userlog

## Constructors

### public Userlog(String username,
String type,
String text,
String issuedBy,
int amount,
String lastUpdate)

**Parameters:**
- `String` `username`
- `String` `type`
- `String` `text`
- `String` `issuedBy`
- `int` `amount`
- `String` `lastUpdate`

### public Userlog(ByteBufferReader input)

**Parameters:**
- `ByteBufferReader` `input`

## Methods

### public String getUsername()

**Returns:** `String`

### public String getType()

**Returns:** `String`

### public String getText()

**Returns:** `String`

### public String getIssuedBy()

**Returns:** `String`

### public int getAmount()

**Returns:** `int`

### public void setAmount(int amount)

**Parameters:**
- `int` `amount`

**Returns:** `void`

### public String getLastUpdate()

**Returns:** `String`

### public void write(ByteBufferWriter output)

**Parameters:**
- `ByteBufferWriter` `output`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\Userlog.html`*
