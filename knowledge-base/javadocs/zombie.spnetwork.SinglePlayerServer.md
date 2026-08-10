---
title: zombie.spnetwork.SinglePlayerServer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.spnetwork
---

# zombie.spnetwork.SinglePlayerServer

`public final class SinglePlayerServer extends Object`

**Kind:** class · **Package:** zombie.spnetwork

## Inheritance
- java.lang.Object
- zombie.spnetwork.SinglePlayerServer

## Fields

### public static final SinglePlayerServer.UdpEngineServer udpEngine

## Constructors

### public SinglePlayerServer()

## Methods

### public static void addIncoming(short id,
ByteBuffer bb,
UdpConnection connection)

**Parameters:**
- `short` `id`
- `ByteBuffer` `bb`
- `UdpConnection` `connection`

**Returns:** `void`

### public static void sendObjectChange(IsoObject o,
IsoObjectChange change,
se.krka.kahlua.vm.KahluaTable tbl)

**Parameters:**
- `IsoObject` `o`
- `IsoObjectChange` `change`
- `se.krka.kahlua.vm.KahluaTable` `tbl`

**Returns:** `void`

### public static void sendObjectChange(IsoObject o,
IsoObjectChange change,
Object... objects)

**Parameters:**
- `IsoObject` `o`
- `IsoObjectChange` `change`
- `Object...` `objects`

**Returns:** `void`

### public static void sendServerCommand(String module,
String command,
se.krka.kahlua.vm.KahluaTable args,
UdpConnection c)

**Parameters:**
- `String` `module`
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`
- `UdpConnection` `c`

**Returns:** `void`

### public static void sendServerCommand(String module,
String command,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `String` `module`
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public static void update()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\spnetwork\SinglePlayerServer.html`*
