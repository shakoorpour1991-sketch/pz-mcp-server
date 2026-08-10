---
title: zombie.characters.NetworkCharacterAI
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.NetworkCharacterAI

`public abstract class NetworkCharacterAI extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.NetworkCharacterAI

## Fields

### public final NetworkCharacterAI.SpeedChecker speedChecker

### public byte predictionType

### public boolean usePathFind

### public boolean forcePathFinder

### public Vector2 direction

### public Vector2 distance

### public float targetX

### public float targetY

### public int targetZ

### public boolean moved

### public int switchTime

### public long hitTimestamp

### public final AttackRateChecker attackRateChecker

### public final Vector3 tempTarget

### public final NetworkState state

## Constructors

### public NetworkCharacterAI(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

## Methods

### public HitReactionNetworkAI getHitReaction()

**Returns:** `HitReactionNetworkAI`

### public NetworkState getState()

**Returns:** `NetworkState`

### public void resetState()

**Returns:** `void`

### public void postUpdate()

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public void setLocal(boolean wasLocal)

**Parameters:**
- `boolean` `wasLocal`

**Returns:** `void`

### public boolean wasLocal()

**Returns:** `boolean`

### public void setPerformingAction(String animation)

**Parameters:**
- `String` `animation`

**Returns:** `void`

### public String getPerformingAction()

**Returns:** `String`

### public void setAction(BaseAction action)

**Parameters:**
- `BaseAction` `action`

**Returns:** `void`

### public BaseAction getAction()

**Returns:** `BaseAction`

### public void startAction()

**Returns:** `void`

### public void stopAction()

**Returns:** `void`

### public void setOverride(boolean override,
String primaryHandModel,
String secondaryHandModel)

**Parameters:**
- `boolean` `override`
- `String` `primaryHandModel`
- `String` `secondaryHandModel`

**Returns:** `void`

### public void setVehicleHit(INetworkPacket packet)

**Parameters:**
- `INetworkPacket` `packet`

**Returns:** `void`

### public boolean isHitByVehicle()

**Returns:** `boolean`

### public boolean isVehicleHitTimeout()

**Returns:** `boolean`

### public void hitByVehicle()

**Returns:** `void`

### public void setCorpse(INetworkPacket packet,
IsoGridSquare square,
int squareIndex)

**Parameters:**
- `INetworkPacket` `packet`
- `IsoGridSquare` `square`
- `int` `squareIndex`

**Returns:** `void`

### public void setRemoveCorpse(INetworkPacket packet)

**Parameters:**
- `INetworkPacket` `packet`

**Returns:** `void`

### public boolean isDeadBodyTimeout()

**Returns:** `boolean`

### public void onDied()

**Returns:** `void`

### public boolean isCollisionEnabled()

**Returns:** `boolean`

### public boolean isNoCollisionTimeout()

**Returns:** `boolean`

### public void setNoCollision(long interval)

**Parameters:**
- `long` `interval`

**Returns:** `void`

### public void resetSpeedLimiter()

**Returns:** `void`

### public short getOnlineID()

**Returns:** `short`

### public abstract IsoPlayer getRelatedPlayer()

**Returns:** `IsoPlayer`

### public abstract Multiplayer.DebugFlagsOG.IsoGameCharacterOG getBooleanDebugOptions()

**Returns:** `Multiplayer.DebugFlagsOG.IsoGameCharacterOG`

### public IsoHutch getHutch()

**Returns:** `IsoHutch`

### public BaseVehicle getVehile()

**Returns:** `BaseVehicle`

### public boolean isDead()

**Returns:** `boolean`

### public IsoGameCharacter getCharacter()

**Returns:** `IsoGameCharacter`

### public void syncDamage()

**Returns:** `void`

### public void syncStats()

**Returns:** `void`

### public void syncXp()

**Returns:** `void`

### public void syncHealth()

**Returns:** `void`

### public AnimalPacket getAnimalPacket()

**Returns:** `AnimalPacket`

### public void setAnimalPacket(UdpConnection receiver)

**Parameters:**
- `UdpConnection` `receiver`

**Returns:** `void`

### public PlayerPacket getPlayerPacket()

**Returns:** `PlayerPacket`

### public boolean isXpCheckerIntervalPassed()

**Returns:** `boolean`

### public float setXp(PerkFactory.Perk perk,
float value)

**Parameters:**
- `PerkFactory.Perk` `perk`
- `float` `value`

**Returns:** `float`

### public int setXpBoost(PerkFactory.Perk perk,
int value)

**Parameters:**
- `PerkFactory.Perk` `perk`
- `int` `value`

**Returns:** `int`

### public float setXpMultiplier(PerkFactory.Perk perk,
float value)

**Parameters:**
- `PerkFactory.Perk` `perk`
- `float` `value`

**Returns:** `float`

### public void updateXpChecker()

**Returns:** `void`

### public boolean hasHitIntervalPassed()

**Returns:** `boolean`

### public void resetHitInterval()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\NetworkCharacterAI.html`*
