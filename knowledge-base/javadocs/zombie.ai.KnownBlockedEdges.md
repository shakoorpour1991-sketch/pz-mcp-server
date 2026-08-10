---
title: zombie.ai.KnownBlockedEdges
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai
---

# zombie.ai.KnownBlockedEdges

`public final class KnownBlockedEdges extends Object`

**Kind:** class · **Package:** zombie.ai

## Inheritance
- java.lang.Object
- zombie.ai.KnownBlockedEdges

## Fields

### public int x

### public int y

### public int z

### public boolean w

### public boolean n

## Constructors

### public KnownBlockedEdges()

## Methods

### public KnownBlockedEdges init(KnownBlockedEdges other)

**Parameters:**
- `KnownBlockedEdges` `other`

**Returns:** `KnownBlockedEdges`

### public KnownBlockedEdges init(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `KnownBlockedEdges`

### public KnownBlockedEdges init(int x,
int y,
int z,
boolean w,
boolean n)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `w`
- `boolean` `n`

**Returns:** `KnownBlockedEdges`

### public boolean isBlocked(int otherX,
int otherY)

**Parameters:**
- `int` `otherX`
- `int` `otherY`

**Returns:** `boolean`

### public static KnownBlockedEdges alloc()

**Returns:** `KnownBlockedEdges`

### public static void releaseAll(ArrayList<KnownBlockedEdges> objs)

**Parameters:**
- `ArrayList<KnownBlockedEdges>` `objs`

**Returns:** `void`

### public void release()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\KnownBlockedEdges.html`*
