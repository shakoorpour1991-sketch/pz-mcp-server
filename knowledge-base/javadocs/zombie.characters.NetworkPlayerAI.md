---
title: zombie.characters.NetworkPlayerAI
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.NetworkPlayerAI

`public class NetworkPlayerAI extends NetworkCharacterAI`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.NetworkCharacterAI
- zombie.characters.NetworkPlayerAI

## Fields

### public final UpdateLimit reliable

### public boolean needToMovingUsingPathFinder

### public boolean moving

### public short lastBooleanVariables

### public boolean disconnected

### public int hitsPerShot

### public int ammoBeforeShot

### public float walkSpeed

### public float runSpeed

### public Prediction prediction

## Constructors

### public NetworkPlayerAI(IsoPlayer character)

**Parameters:**
- `IsoPlayer` `character`

## Methods

### public IsoPlayer getRelatedPlayer()

**Returns:** `IsoPlayer`

### public Multiplayer.DebugFlagsOG.IsoGameCharacterOG getBooleanDebugOptions()

**Returns:** `Multiplayer.DebugFlagsOG.IsoGameCharacterOG`

### public void needToUpdate()

**Returns:** `void`

### public void set(AnimalPacket packet,
UdpConnection receiver)

**Parameters:**
- `AnimalPacket` `packet`
- `UdpConnection` `receiver`

**Returns:** `void`

### public PacketTypes.PacketType set(PlayerPacket packet)

**Parameters:**
- `PlayerPacket` `packet`

**Returns:** `PacketTypes.PacketType`

### public void parse(AnimalPacket packet)

**Parameters:**
- `AnimalPacket` `packet`

**Returns:** `void`

### public void parse(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void parse(PlayerPacket packet)

**Parameters:**
- `PlayerPacket` `packet`

**Returns:** `void`

### public boolean isPressedMovement()

**Returns:** `boolean`

### public void setPressedMovement(boolean pressedMovement)

**Parameters:**
- `boolean` `pressedMovement`

**Returns:** `void`

### public boolean isPressedCancelAction()

**Returns:** `boolean`

### public void setPressedCancelAction(boolean pressedCancelAction)

**Parameters:**
- `boolean` `pressedCancelAction`

**Returns:** `void`

### public void setCheckAccessLevelDelay(long delay)

**Parameters:**
- `long` `delay`

**Returns:** `void`

### public boolean doCheckAccessLevel()

**Returns:** `boolean`

### @Deprecated
public void update()

> ⚠️ **Deprecated**

**Returns:** `void`

### public boolean isDismantleAllowed()

**Returns:** `boolean`

### public boolean isDisconnected()

**Returns:** `boolean`

### public void setDisconnected(boolean disconnected)

**Parameters:**
- `boolean` `disconnected`

**Returns:** `void`

### public boolean isReliable()

**Returns:** `boolean`

### public void resetState()

**Returns:** `void`

### public void syncDamage()

**Returns:** `void`

### public void syncStats()

**Returns:** `void`

### public void syncXp()

**Returns:** `void`

### public void syncHealth()

**Returns:** `void`

### public void setAnimalPacket(UdpConnection receiver)

**Parameters:**
- `UdpConnection` `receiver`

**Returns:** `void`

### public void setShotID(byte shotID)

**Parameters:**
- `byte` `shotID`

**Returns:** `void`

### public byte getShotID()

**Returns:** `byte`

### public void onShot()

**Returns:** `void`

### public boolean isAnimalNeedExtraUpdate(UdpConnection connection,
boolean isAnimalOnScreen)

**Parameters:**
- `UdpConnection` `connection`
- `boolean` `isAnimalOnScreen`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\NetworkPlayerAI.html`*
