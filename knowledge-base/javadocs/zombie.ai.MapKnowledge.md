---
title: zombie.ai.MapKnowledge
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai
---

# zombie.ai.MapKnowledge

`public final class MapKnowledge extends Object`

**Kind:** class · **Package:** zombie.ai

## Inheritance
- java.lang.Object
- zombie.ai.MapKnowledge

## Constructors

### public MapKnowledge()

## Methods

### public ArrayList<KnownBlockedEdges> getKnownBlockedEdges()

**Returns:** `ArrayList<KnownBlockedEdges>`

### public KnownBlockedEdges getKnownBlockedEdges(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `KnownBlockedEdges`

### public KnownBlockedEdges getOrCreateKnownBlockedEdges(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `KnownBlockedEdges`

### public void setKnownBlockedEdgeW(int x,
int y,
int z,
boolean blocked)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `blocked`

**Returns:** `void`

### public void setKnownBlockedEdgeN(int x,
int y,
int z,
boolean blocked)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `blocked`

**Returns:** `void`

### public void setKnownBlockedDoor(IsoDoor object,
boolean blocked)

**Parameters:**
- `IsoDoor` `object`
- `boolean` `blocked`

**Returns:** `void`

### public void setKnownBlockedDoor(IsoThumpable object,
boolean blocked)

**Parameters:**
- `IsoThumpable` `object`
- `boolean` `blocked`

**Returns:** `void`

### public void setKnownBlockedWindow(IsoWindow object,
boolean blocked)

**Parameters:**
- `IsoWindow` `object`
- `boolean` `blocked`

**Returns:** `void`

### public void setKnownBlockedWindowFrame(IsoWindowFrame object,
boolean blocked)

**Parameters:**
- `IsoWindowFrame` `object`
- `boolean` `blocked`

**Returns:** `void`

### public void forget()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\MapKnowledge.html`*
