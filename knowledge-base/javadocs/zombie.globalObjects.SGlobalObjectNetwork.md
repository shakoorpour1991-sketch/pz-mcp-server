---
title: zombie.globalObjects.SGlobalObjectNetwork
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.globalObjects
---

# zombie.globalObjects.SGlobalObjectNetwork

`public final class SGlobalObjectNetwork extends Object`

**Kind:** class · **Package:** zombie.globalObjects

## Inheritance
- java.lang.Object
- zombie.globalObjects.SGlobalObjectNetwork

## Fields

### public static final byte PACKET_ServerCommand

### public static final byte PACKET_ClientCommand

### public static final byte PACKET_NewLuaObjectAt

### public static final byte PACKET_RemoveLuaObjectAt

### public static final byte PACKET_UpdateLuaObjectAt

## Constructors

### public SGlobalObjectNetwork()

## Methods

### public static void receive(ByteBufferReader bb,
IsoPlayer player)

**Parameters:**
- `ByteBufferReader` `bb`
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendServerCommand(String systemName,
String command,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `String` `systemName`
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public static void addGlobalObjectOnClient(SGlobalObject globalObject)
throws IOException

**Parameters:**
- `SGlobalObject` `globalObject`

**Returns:** `void`

### public static void removeGlobalObjectOnClient(GlobalObject globalObject)

**Parameters:**
- `GlobalObject` `globalObject`

**Returns:** `void`

### public static void updateGlobalObjectOnClient(SGlobalObject globalObject)
throws IOException

**Parameters:**
- `SGlobalObject` `globalObject`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\globalObjects\SGlobalObjectNetwork.html`*
