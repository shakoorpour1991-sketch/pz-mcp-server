---
title: zombie.characters.NetworkTeleport
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.characters
---

# zombie.characters.NetworkTeleport

`public class NetworkTeleport extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.NetworkTeleport

## Fields

### public static boolean enable

### public static boolean enableInstantTeleport

### public float ndirection

## Constructors

### public NetworkTeleport(IsoGameCharacter chr,
NetworkTeleport.Type type,
float x,
float y,
byte z,
float _duration)

**Parameters:**
- `IsoGameCharacter` `chr`
- `NetworkTeleport.Type` `type`
- `float` `x`
- `float` `y`
- `byte` `z`
- `float` `_duration`

## Methods

### public void process(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void stop(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static boolean teleport(IsoGameCharacter chr,
NetworkTeleport.Type type,
float x,
float y,
byte z,
float _duration)

**Parameters:**
- `IsoGameCharacter` `chr`
- `NetworkTeleport.Type` `type`
- `float` `x`
- `float` `y`
- `byte` `z`
- `float` `_duration`

**Returns:** `boolean`

### public static boolean teleport(IsoGameCharacter chr,
PlayerPacket packet,
float _duration)

**Parameters:**
- `IsoGameCharacter` `chr`
- `PlayerPacket` `packet`
- `float` `_duration`

**Returns:** `boolean`

### public static void update(IsoGameCharacter chr,
PlayerPacket packet)

**Parameters:**
- `IsoGameCharacter` `chr`
- `PlayerPacket` `packet`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\NetworkTeleport.html`*
