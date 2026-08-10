---
title: zombie.characters.PlayerCraftHistory
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.PlayerCraftHistory

`public class PlayerCraftHistory extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.PlayerCraftHistory

## Constructors

### public PlayerCraftHistory(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

## Methods

### public PlayerCraftHistory.CraftHistoryEntry getCraftHistoryFor(String craftType)

**Parameters:**
- `String` `craftType`

**Returns:** `PlayerCraftHistory.CraftHistoryEntry`

### public void addCraftHistoryCraftedEvent(String craftType)

**Parameters:**
- `String` `craftType`

**Returns:** `void`

### public void cleanupHistory()

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input)

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\PlayerCraftHistory.html`*
