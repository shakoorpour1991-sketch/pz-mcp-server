---
title: zombie.core.ActionManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.ActionManager

`public class ActionManager extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.ActionManager

## Constructors

### public ActionManager()

## Methods

### public static ActionManager getInstance()

**Returns:** `ActionManager`

### public static void start(zombie.core.Action action)

**Parameters:**
- `zombie.core.Action` `action`

**Returns:** `void`

### public static void add(zombie.core.Action action)

**Parameters:**
- `zombie.core.Action` `action`

**Returns:** `void`

### public static void stop(zombie.core.Action action)

**Parameters:**
- `zombie.core.Action` `action`

**Returns:** `void`

### public static void stopPlayerActions(PlayerID playerId)

**Parameters:**
- `PlayerID` `playerId`

**Returns:** `void`

### public static void update()

**Returns:** `void`

### public static boolean isRejected(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `boolean`

### public static boolean isDone(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `boolean`

### public static boolean isLooped(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `boolean`

### public static int getDuration(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `int`

### public static IsoPlayer getPlayer(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `IsoPlayer`

### public static void remove(byte id,
boolean isCanceled)

**Parameters:**
- `byte` `id`
- `boolean` `isCanceled`

**Returns:** `void`

### public byte createNetTimedAction(IsoPlayer player,
se.krka.kahlua.vm.KahluaTable actionTable)

**Parameters:**
- `IsoPlayer` `player`
- `se.krka.kahlua.vm.KahluaTable` `actionTable`

**Returns:** `byte`

### public byte createBuildAction(IsoPlayer player,
float x,
float y,
float z,
boolean north,
String spriteName,
se.krka.kahlua.vm.KahluaTable item)

**Parameters:**
- `IsoPlayer` `player`
- `float` `x`
- `float` `y`
- `float` `z`
- `boolean` `north`
- `String` `spriteName`
- `se.krka.kahlua.vm.KahluaTable` `item`

**Returns:** `byte`

### public byte createFishingAction(IsoPlayer player,
InventoryItem item,
IsoGridSquare sq,
se.krka.kahlua.vm.KahluaTable bobber)

**Parameters:**
- `IsoPlayer` `player`
- `InventoryItem` `item`
- `IsoGridSquare` `sq`
- `se.krka.kahlua.vm.KahluaTable` `bobber`

**Returns:** `byte`

### public void setStateFromPacket(zombie.core.Action packet)

**Parameters:**
- `zombie.core.Action` `packet`

**Returns:** `void`

### public void disconnectPlayer(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public void replaceObjectInQueuedActions(IsoPlayer player,
Object oldItem,
Object newItem)

**Parameters:**
- `IsoPlayer` `player`
- `Object` `oldItem`
- `Object` `newItem`

**Returns:** `void`

### public static NetTimedAction getAction(byte id,
PlayerID playerId)

**Parameters:**
- `byte` `id`
- `PlayerID` `playerId`

**Returns:** `NetTimedAction`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\ActionManager.html`*
