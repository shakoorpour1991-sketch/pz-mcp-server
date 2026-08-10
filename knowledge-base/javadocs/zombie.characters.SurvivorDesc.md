---
title: zombie.characters.SurvivorDesc
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.SurvivorDesc

`public final class SurvivorDesc extends Object implements IHumanVisual`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.SurvivorDesc

## Fields

### public static final ArrayList<Color> TrouserCommonColors

### public static final ArrayList<ImmutableColor> HairCommonColors

## Constructors

### public SurvivorDesc()

### public SurvivorDesc(boolean bNew)

**Parameters:**
- `boolean` `bNew`

### public SurvivorDesc(SurvivorDesc other)

**Parameters:**
- `SurvivorDesc` `other`

## Methods

### public HumanVisual getHumanVisual()

**Returns:** `HumanVisual`

### public void getItemVisuals(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public boolean isFemale()

**Returns:** `boolean`

### public boolean isZombie()

**Returns:** `boolean`

### public boolean isSkeleton()

**Returns:** `boolean`

### public WornItems getWornItems()

**Returns:** `WornItems`

### public void setWornItem(ItemBodyLocation itemBodyLocation,
InventoryItem item)

**Parameters:**
- `ItemBodyLocation` `itemBodyLocation`
- `InventoryItem` `item`

**Returns:** `void`

### public InventoryItem getWornItem(ItemBodyLocation itemBodyLocation)

**Parameters:**
- `ItemBodyLocation` `itemBodyLocation`

**Returns:** `InventoryItem`

### public void dressInNamedOutfit(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `void`

### public String getVoicePrefix()

**Returns:** `String`

### public void setVoicePrefix(String voicePrefix)

**Parameters:**
- `String` `voicePrefix`

**Returns:** `void`

### public int getVoiceType()

**Returns:** `int`

### public void setVoiceType(int voiceType)

**Parameters:**
- `int` `voiceType`

**Returns:** `void`

### public float getVoicePitch()

**Returns:** `float`

### public void setVoicePitch(float voicePitch)

**Parameters:**
- `float` `voicePitch`

**Returns:** `void`

### public SurvivorGroup getGroup()

**Returns:** `SurvivorGroup`

### public boolean isLeader()

**Returns:** `boolean`

### public static int getIDCount()

**Returns:** `int`

### public void setProfessionSkills(CharacterProfessionDefinition characterProfessionDefinition)

**Parameters:**
- `CharacterProfessionDefinition` `characterProfessionDefinition`

**Returns:** `void`

### public HashMap<PerkFactory.Perk, Integer> getXPBoostMap()

**Returns:** `HashMap<PerkFactory.Perk, Integer>`

### public se.krka.kahlua.vm.KahluaTable getMeta()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public int getCalculatedToughness()

**Returns:** `int`

### public static void setIDCount(int aIDCount)

**Parameters:**
- `int` `aIDCount` — the IDCount to set

**Returns:** `void`

### public boolean isDead()

**Returns:** `boolean`

### public void setDead(boolean dead)

**Parameters:**
- `boolean` `dead`

**Returns:** `void`

### public void meet(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `void`

### public boolean hasObservation(String o)

**Parameters:**
- `String` `o`

**Returns:** `boolean`

### public void load(ByteBuffer input,
int worldVersion,
IsoGameCharacter chr)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public String getDescription(String newStr)

**Parameters:**
- `String` `newStr`

**Returns:** `String`

### public void addObservation(String obv)

**Parameters:**
- `String` `obv`

**Returns:** `void`

### public int getMetCount(SurvivorDesc descriptor)

**Parameters:**
- `SurvivorDesc` `descriptor`

**Returns:** `int`

### public String getFullname()

**Returns:** `String`

### public String getForename()

**Returns:** `String`

### public void setForename(String forename)

**Parameters:**
- `String` `forename` — the forename to set

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public void setID(int id)

**Parameters:**
- `int` `id` — the ID to set

**Returns:** `void`

### public IsoGameCharacter getInstance()

**Returns:** `IsoGameCharacter`

### public void setInstance(IsoGameCharacter instance)

**Parameters:**
- `IsoGameCharacter` `instance` — the Instance to set

**Returns:** `void`

### public String getSurname()

**Returns:** `String`

### public void setSurname(String surname)

**Parameters:**
- `String` `surname` — the surname to set

**Returns:** `void`

### public String getInventoryScript()

**Returns:** `String`

### public void setInventoryScript(String inventoryScript)

**Parameters:**
- `String` `inventoryScript` — the InventoryScript to set

**Returns:** `void`

### public String getTorso()

**Returns:** `String`

### public void setTorso(String torso)

**Parameters:**
- `String` `torso` — the torso to set

**Returns:** `void`

### public HashMap<Integer,Integer> getMetCount()

**Returns:** `HashMap<Integer,Integer>`

### public float getBravery()

**Returns:** `float`

### public void setBravery(float bravery)

**Parameters:**
- `float` `bravery` — the bravery to set

**Returns:** `void`

### public float getLoner()

**Returns:** `float`

### public void setLoner(float loner)

**Parameters:**
- `float` `loner` — the loner to set

**Returns:** `void`

### public float getAggressiveness()

**Returns:** `float`

### public void setAggressiveness(float aggressiveness)

**Parameters:**
- `float` `aggressiveness` — the aggressiveness to set

**Returns:** `void`

### public float getCompassion()

**Returns:** `float`

### public void setCompassion(float compassion)

**Parameters:**
- `float` `compassion` — the compassion to set

**Returns:** `void`

### public float getTemper()

**Returns:** `float`

### public void setTemper(float temper)

**Parameters:**
- `float` `temper` — the temper to set

**Returns:** `void`

### public float getFriendliness()

**Returns:** `float`

### public void setFriendliness(float friendliness)

**Parameters:**
- `float` `friendliness` — the friendliness to set

**Returns:** `void`

### public float getFavourindoors()

**Returns:** `float`

### public void setFavourindoors(float favourindoors)

**Parameters:**
- `float` `favourindoors` — the favourindoors to set

**Returns:** `void`

### public float getLoyalty()

**Returns:** `float`

### public void setLoyalty(float loyalty)

**Parameters:**
- `float` `loyalty` — the loyalty to set

**Returns:** `void`

### public boolean isCharacterProfession(CharacterProfession characterProfession)

**Parameters:**
- `CharacterProfession` `characterProfession`

**Returns:** `boolean`

### public CharacterProfession getCharacterProfession()

**Returns:** `CharacterProfession`

### public void setCharacterProfession(CharacterProfession characterProfession)

**Parameters:**
- `CharacterProfession` `characterProfession`

**Returns:** `void`

### public boolean isAggressive()

**Returns:** `boolean`

### public ArrayList<ObservationFactory.Observation> getObservations()

**Returns:** `ArrayList<ObservationFactory.Observation>`

### public boolean isFriendly()

**Returns:** `boolean`

### public SurvivorFactory.SurvivorType getType()

**Returns:** `SurvivorFactory.SurvivorType`

### public void setType(SurvivorFactory.SurvivorType type)

**Parameters:**
- `SurvivorFactory.SurvivorType` `type`

**Returns:** `void`

### public void setFemale(boolean bFemale)

**Parameters:**
- `boolean` `bFemale`

**Returns:** `void`

### public void setCharacterGender(CharacterGender characterGender)

**Parameters:**
- `CharacterGender` `characterGender`

**Returns:** `void`

### public CharacterGender getCharacterGender()

**Returns:** `CharacterGender`

### public ArrayList<String> getExtras()

**Returns:** `ArrayList<String>`

### public ArrayList<ImmutableColor> getCommonHairColor()

**Returns:** `ArrayList<ImmutableColor>`

### public static void addTrouserColor(ColorInfo color)

**Parameters:**
- `ColorInfo` `color`

**Returns:** `void`

### public static void addHairColor(ColorInfo color)

**Parameters:**
- `ColorInfo` `color`

**Returns:** `void`

### public static Color getRandomSkinColor()

**Returns:** `Color`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\SurvivorDesc.html`*
