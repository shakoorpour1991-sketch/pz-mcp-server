---
title: zombie.iso.ChunkSaveWorker
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.ChunkSaveWorker

`public class ChunkSaveWorker extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.ChunkSaveWorker

## Fields

### public static final ChunkSaveWorker instance

### public final ConcurrentLinkedQueue<zombie.iso.ChunkSaveWorker.QueuedSave> toSaveQueue

### public boolean saving

## Constructors

### public ChunkSaveWorker()

## Methods

### public void Update(IsoChunk aboutToLoad)

**Parameters:**
- `IsoChunk` `aboutToLoad`

**Returns:** `void`

### public void SaveNow(ArrayList<IsoChunk> aboutToLoad)

**Parameters:**
- `ArrayList<IsoChunk>` `aboutToLoad`

**Returns:** `void`

### public void SaveNow()

**Returns:** `void`

### public void AddHotSave(IsoChunk ch)

**Parameters:**
- `IsoChunk` `ch`

**Returns:** `void`

### public void Add(IsoChunk ch)

**Parameters:**
- `IsoChunk` `ch`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\ChunkSaveWorker.html`*
