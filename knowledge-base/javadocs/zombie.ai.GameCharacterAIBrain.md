---
title: zombie.ai.GameCharacterAIBrain
source: Unofficial PZ JavaDocs 42.16.0
version: 42.16.0
kind: class
package: zombie.ai
---

# zombie.ai.GameCharacterAIBrain

`public final class GameCharacterAIBrain extends Object`

**Kind:** class · **Package:** zombie.ai

## Inheritance
- java.lang.Object
- zombie.ai.GameCharacterAIBrain

## Fields

### public final ArrayList<IsoGameCharacter> spottedCharacters

### public boolean stepBehaviors

### public Stance stance

### public boolean controlledByAdvancedPathfinder

### public boolean isInMeta

### public final HashMap<Vector3, ArrayList<Vector3>> blockedMemories

### public final Vector2 aiFocusPoint

### public final Vector3 nextPathTarget

### public IsoMovingObject aiTarget

### public boolean nextPathNodeInvalidated

### public final AIBrainPlayerControlVars humanControlVars

### public ArrayList<IsoZombie> teammateChasingZombies

### public ArrayList<IsoZombie> chasingZombies

### public boolean allowLongTermTick

### public boolean isAi

## Constructors

### public GameCharacterAIBrain(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

## Methods

### public IsoGameCharacter getCharacter()

**Returns:** `IsoGameCharacter`

### public void update()

**Returns:** `void`

### public void postUpdateHuman(IsoPlayer isoPlayer)

**Parameters:**
- `IsoPlayer` `isoPlayer`

**Returns:** `void`

### public String getOrder()

**Returns:** `String`

### public void setOrder(String order)

**Parameters:**
- `String` `order`

**Returns:** `void`

### public SurvivorGroup getGroup()

**Returns:** `SurvivorGroup`

### public int getCloseZombieCount()

**Returns:** `int`

### public IsoZombie getClosestChasingZombie(boolean recurse)

**Parameters:**
- `boolean` `recurse`

**Returns:** `IsoZombie`

### public IsoZombie getClosestChasingZombie()

**Returns:** `IsoZombie`

### public ArrayList<IsoZombie> getClosestChasingZombies(int num)

**Parameters:**
- `int` `num`

**Returns:** `ArrayList<IsoZombie>`

### public void AddBlockedMemory(int ttx,
int tty,
int ttz)

**Parameters:**
- `int` `ttx`
- `int` `tty`
- `int` `ttz`

**Returns:** `void`

### public boolean HasBlockedMemory(int lx,
int ly,
int lz,
int x,
int y,
int z)

**Parameters:**
- `int` `lx`
- `int` `ly`
- `int` `lz`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public void renderlast()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.16.0 (42.16.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\GameCharacterAIBrain.html`*
