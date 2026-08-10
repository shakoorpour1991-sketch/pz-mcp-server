---
title: zombie.characters.BodyDamage.Fitness
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.BodyDamage
---

# zombie.characters.BodyDamage.Fitness

`public final class Fitness extends Object`

**Kind:** class · **Package:** zombie.characters.BodyDamage

## Inheritance
- java.lang.Object
- zombie.characters.BodyDamage.Fitness

## Constructors

### public Fitness(IsoGameCharacter parent)

**Parameters:**
- `IsoGameCharacter` `parent`

## Methods

### public void update()

We update every 10 in game minutes to facilitate calculs

**Returns:** `void`

### public void setCurrentExercise(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public void exerciseRepeat()

**Returns:** `void`

### public void incRegularity()

Increase the regularity when you've done a repeat of an exercice
Depend on fitness (using logarithm), the more fitness, the LESS regularity you get
Regularity will influence on the stiffness you get once you've finished an exercise

**Returns:** `void`

### public void reduceEndurance()

Reduce endurance, using metabolics (to know what kind of exercise it is, some are more exhausting than others), regularity, current carrying weight.

**Returns:** `void`

### public void incFutureStiffness()

We setup a timer after finishing an exercice, 12h after, we gonna start to increase stiffness (add pains in muscles)
When adding the stiffness, we decrease slowly our vars while increasing pain, untill no more stiffness is to be added.
Stiffness induced will depend on regularity, fatigue.
Numbers approx: At 0 regularity, 60min exercises should gives almost 4h of stiffness (gets additional pain)

**Returns:** `void`

### public void incStats()

**Returns:** `void`

### public void resetValues()

**Returns:** `void`

### public void removeStiffnessValue(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public boolean onGoingStiffness()

**Returns:** `boolean`

### public int getCurrentExeStiffnessTimer(String type)

**Parameters:**
- `String` `type`

**Returns:** `int`

### public Fitness.FitnessExercise getCurrentExe()

**Returns:** `Fitness.FitnessExercise`

### public float getCurrentExeStiffnessInc(String type)

**Parameters:**
- `String` `type`

**Returns:** `float`

### public IsoGameCharacter getParent()

**Returns:** `IsoGameCharacter`

### public void setParent(IsoGameCharacter parent)

**Parameters:**
- `IsoGameCharacter` `parent`

**Returns:** `void`

### public float getRegularity(String type)

**Parameters:**
- `String` `type`

**Returns:** `float`

### public HashMap<String,Float> getRegularityMap()

**Returns:** `HashMap<String,Float>`

### public void setRegularityMap(HashMap<String,Float> regularityMap)

**Parameters:**
- `HashMap<String,Float>` `regularityMap`

**Returns:** `void`

### public void init()

**Returns:** `void`

### public void initRegularityMapProfession()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\BodyDamage\Fitness.html`*
