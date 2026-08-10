---
title: zombie.globalObjects.SGlobalObjectSystem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.globalObjects
---

# zombie.globalObjects.SGlobalObjectSystem

`public final class SGlobalObjectSystem extends GlobalObjectSystem`

**Kind:** class · **Package:** zombie.globalObjects

## Inheritance
- java.lang.Object
- zombie.globalObjects.GlobalObjectSystem
- zombie.globalObjects.SGlobalObjectSystem

## Constructors

### public SGlobalObjectSystem(String name)

**Parameters:**
- `String` `name`

## Methods

### public void setModDataKeys(se.krka.kahlua.vm.KahluaTable keys)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `keys`

**Returns:** `void`

### public void setObjectModDataKeys(se.krka.kahlua.vm.KahluaTable keys)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `keys`

**Returns:** `void`

### public void setObjectSyncKeys(se.krka.kahlua.vm.KahluaTable keys)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `keys`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void chunkLoaded(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `void`

### public void sendCommand(String command,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public void receiveClientCommand(String command,
IsoPlayer playerObj,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `String` `command`
- `IsoPlayer` `playerObj`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public void addGlobalObjectOnClient(SGlobalObject globalObject)
throws IOException

**Parameters:**
- `SGlobalObject` `globalObject`

**Returns:** `void`

### public void removeGlobalObjectOnClient(SGlobalObject globalObject)
throws IOException

**Parameters:**
- `SGlobalObject` `globalObject`

**Returns:** `void`

### public void updateGlobalObjectOnClient(SGlobalObject globalObject)
throws IOException

**Parameters:**
- `SGlobalObject` `globalObject`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getInitialStateForClient()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void OnIsoObjectChangedItself(IsoObject isoObject)

**Parameters:**
- `IsoObject` `isoObject`

**Returns:** `void`

### public void OnModDataChangeItself(IsoObject isoObject)

**Parameters:**
- `IsoObject` `isoObject`

**Returns:** `void`

### public int loadedWorldVersion()

**Returns:** `int`

### public void load(ByteBuffer bb,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`
- `int` `worldVersion`

**Returns:** `void`

### public void save(ByteBuffer bb)
throws IOException

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void load()

**Returns:** `void`

### public void save()

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\globalObjects\SGlobalObjectSystem.html`*
