---
title: zombie.characters.NetworkZombieAI
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.NetworkZombieAI

`public class NetworkZombieAI extends NetworkCharacterAI`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.NetworkCharacterAI
- zombie.characters.NetworkZombieAI

## Fields

### public final IsoZombie zombie

### public boolean isClimbing

### public final NetworkZombieMind mindSync

### public final ObjectID reanimatedBodyId

### public boolean wasSeparated

### public boolean debugInterfaceActive

## Constructors

### public NetworkZombieAI(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

## Methods

### public void reset()

**Returns:** `void`

### public IsoPlayer getRelatedPlayer()

**Returns:** `IsoPlayer`

### public Multiplayer.DebugFlagsOG.IsoGameCharacterOG getBooleanDebugOptions()

**Returns:** `Multiplayer.DebugFlagsOG.IsoGameCharacterOG`

### public void extraUpdate()

**Returns:** `void`

### public void set(ZombiePacket packet)

**Parameters:**
- `ZombiePacket` `packet`

**Returns:** `void`

### public void parse(ZombiePacket packet)

**Parameters:**
- `ZombiePacket` `packet`

**Returns:** `void`

### public void preupdate()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\NetworkZombieAI.html`*
