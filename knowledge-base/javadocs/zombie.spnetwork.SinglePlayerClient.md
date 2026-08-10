---
title: zombie.spnetwork.SinglePlayerClient
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.spnetwork
---

# zombie.spnetwork.SinglePlayerClient

`public final class SinglePlayerClient extends Object`

**Kind:** class · **Package:** zombie.spnetwork

## Inheritance
- java.lang.Object
- zombie.spnetwork.SinglePlayerClient

## Fields

### public static final UdpEngine udpEngine

### public static final UdpConnection connection

## Constructors

### public SinglePlayerClient()

## Methods

### public static void addIncoming(short id,
ByteBuffer bb)

**Parameters:**
- `short` `id`
- `ByteBuffer` `bb`

**Returns:** `void`

### public static void update()
throws Exception

**Returns:** `void`

### public static void sendClientCommand(IsoPlayer player,
String module,
String command,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `IsoPlayer` `player`
- `String` `module`
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\spnetwork\SinglePlayerClient.html`*
