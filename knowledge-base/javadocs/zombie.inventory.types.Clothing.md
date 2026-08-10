---
title: zombie.inventory.types.Clothing
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.Clothing

`public class Clothing extends InventoryItem`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.Clothing

## Fields

### public float bloodLevel

### public static final int CONDITION_PER_HOLES

## Constructors

### public Clothing(String module,
String name,
String itemType,
String texName,
String palette,
String spriteName)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `String` `texName`
- `String` `palette`
- `String` `spriteName`

### public Clothing(String module,
String name,
String itemType,
Item item,
String palette,
String spriteName)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `Item` `item`
- `String` `palette`
- `String` `spriteName`

## Methods

### public String getCategory()

**Returns:** `String`

### public boolean IsClothing()

**Returns:** `boolean`

### public void Unwear()

**Returns:** `void`

### public void Unwear(boolean drop)

**Parameters:**
- `boolean` `drop`

**Returns:** `void`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public boolean isDirty()

**Returns:** `boolean`

### public boolean isBloody()

**Returns:** `boolean`

### public String getName()

**Returns:** `String`

### public String getName(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `String`

### public void update()

**Returns:** `void`

### public void updateWetness()

**Returns:** `void`

### public void updateWetness(boolean bIgnoreEquipped)

**Parameters:**
- `boolean` `bIgnoreEquipped`

**Returns:** `void`

### public float getBulletDefense()

**Returns:** `float`

### public void setBulletDefense(float bulletDefense)

**Parameters:**
- `float` `bulletDefense`

**Returns:** `void`

### public void flushWetness()

**Returns:** `void`

### public boolean finishupdate()

**Returns:** `boolean`

### public void Use(boolean bCrafting,
boolean bInContainer)

**Parameters:**
- `boolean` `bCrafting`
- `boolean` `bInContainer`

**Returns:** `void`

### public boolean CanStack(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public static Clothing CreateFromSprite(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `Clothing`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public String getSpriteName()

**Returns:** `String`

### public void setSpriteName(String spriteName)

**Parameters:**
- `String` `spriteName` — the SpriteName to set

**Returns:** `void`

### public String getPalette()

**Returns:** `String`

### public void setPalette(String palette)

**Parameters:**
- `String` `palette` — the palette to set

**Returns:** `void`

### public float getTemperature()

**Returns:** `float`

### public void setTemperature(float temperature)

**Parameters:**
- `float` `temperature`

**Returns:** `void`

### public void setDirtiness(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public void setBloodLevel(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public float getDirtiness()

**Returns:** `float`

### public float getBloodlevel()

**Returns:** `float`

### public float getBloodlevelForPart(BloodBodyPartType part)

**Parameters:**
- `BloodBodyPartType` `part`

**Returns:** `float`

### public float getBloodLevel()

**Returns:** `float`

### public float getBloodLevelForPart(BloodBodyPartType part)

**Parameters:**
- `BloodBodyPartType` `part`

**Returns:** `float`

### public float getWeight()

**Returns:** `float`

### public void setWetness(float percent)

**Parameters:**
- `float` `percent`

**Returns:** `void`

### public float getWetness()

**Returns:** `float`

### public float getWeightWet()

**Returns:** `float`

### public void setWeightWet(float weight)

**Parameters:**
- `float` `weight`

**Returns:** `void`

### public int getConditionLowerChance()

**Returns:** `int`

### public void setConditionLowerChance(int conditionLowerChance)

**Parameters:**
- `int` `conditionLowerChance`

**Returns:** `void`

### public void setCondition(int condition)

**Parameters:**
- `int` `condition` — the Condition to set

**Returns:** `void`

### public float getClothingDirtynessIncreaseLevel()

**Returns:** `float`

### public float getInsulation()

**Returns:** `float`

### public void setInsulation(float insulation)

**Parameters:**
- `float` `insulation`

**Returns:** `void`

### public float getStompPower()

**Returns:** `float`

### public void setStompPower(float stompPower)

**Parameters:**
- `float` `stompPower`

**Returns:** `void`

### public float getRunSpeedModifier()

**Returns:** `float`

### public void setRunSpeedModifier(float runSpeedModifier)

**Parameters:**
- `float` `runSpeedModifier`

**Returns:** `void`

### public float getCombatSpeedModifier()

**Returns:** `float`

### public void setCombatSpeedModifier(float combatSpeedModifier)

**Parameters:**
- `float` `combatSpeedModifier`

**Returns:** `void`

### public Boolean isRemoveOnBroken()

**Returns:** `Boolean`

### public void setRemoveOnBroken(Boolean removeOnBroken)

**Parameters:**
- `Boolean` `removeOnBroken`

**Returns:** `void`

### public Boolean getCanHaveHoles()

**Returns:** `Boolean`

### public void setCanHaveHoles(Boolean canHaveHoles)

**Parameters:**
- `Boolean` `canHaveHoles`

**Returns:** `void`

### public boolean isCosmetic()

**Returns:** `boolean`

### public String toString()

**Returns:** `String`

### public float getBiteDefense()

**Returns:** `float`

### public void setBiteDefense(float biteDefense)

**Parameters:**
- `float` `biteDefense`

**Returns:** `void`

### public float getScratchDefense()

**Returns:** `float`

### public void setScratchDefense(float scratchDefense)

**Parameters:**
- `float` `scratchDefense`

**Returns:** `void`

### public float getNeckProtectionModifier()

**Returns:** `float`

### public void setNeckProtectionModifier(float neckProtectionModifier)

**Parameters:**
- `float` `neckProtectionModifier`

**Returns:** `void`

### public int getChanceToFall()

**Returns:** `int`

### public void setChanceToFall(int chanceToFall)

**Parameters:**
- `int` `chanceToFall`

**Returns:** `void`

### public float getWindresistance()

**Returns:** `float`

### public void setWindresistance(float windresistance)

**Parameters:**
- `float` `windresistance`

**Returns:** `void`

### public float getWaterResistance()

**Returns:** `float`

### public void setWaterResistance(float waterResistance)

**Parameters:**
- `float` `waterResistance`

**Returns:** `void`

### public int getHolesNumber()

**Returns:** `int`

### public int getPatchesNumber()

**Returns:** `int`

### public float getDefForPart(BloodBodyPartType part,
boolean bite,
boolean bullet)

**Parameters:**
- `BloodBodyPartType` `part`
- `boolean` `bite`
- `boolean` `bullet`

**Returns:** `float`

### public static int getBiteDefenseFromItem(IsoGameCharacter chr,
InventoryItem fabric)

Used from lua tooltip when repairing clothing

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `fabric`

**Returns:** `int`

### public static int getScratchDefenseFromItem(IsoGameCharacter chr,
InventoryItem fabric)

Used from lua tooltip when repairing clothing

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `fabric`

**Returns:** `int`

### public Clothing.ClothingPatch getPatchType(BloodBodyPartType part)

**Parameters:**
- `BloodBodyPartType` `part`

**Returns:** `Clothing.ClothingPatch`

### public void removePatch(BloodBodyPartType part)

**Parameters:**
- `BloodBodyPartType` `part`

**Returns:** `void`

### public void removeAllPatches()

**Returns:** `void`

### public boolean canFullyRestore(IsoGameCharacter chr,
BloodBodyPartType part,
InventoryItem fabric)

**Parameters:**
- `IsoGameCharacter` `chr`
- `BloodBodyPartType` `part`
- `InventoryItem` `fabric`

**Returns:** `boolean`

### public void fullyRestore()

**Returns:** `void`

### public void addPatchForSync(int partIdx,
int tailorLvl,
int fabricType,
boolean hasHole)

**Parameters:**
- `int` `partIdx`
- `int` `tailorLvl`
- `int` `fabricType`
- `boolean` `hasHole`

**Returns:** `void`

### public void addPatch(IsoGameCharacter chr,
BloodBodyPartType part,
InventoryItem fabric)

**Parameters:**
- `IsoGameCharacter` `chr`
- `BloodBodyPartType` `part`
- `InventoryItem` `fabric`

**Returns:** `void`

### public ArrayList<BloodBodyPartType> getCoveredParts()

**Returns:** `ArrayList<BloodBodyPartType>`

### public int getNbrOfCoveredParts()

**Returns:** `int`

### public float getCondLossPerHole()

**Returns:** `float`

### public void copyPatchesTo(Clothing newClothing)

**Parameters:**
- `Clothing` `newClothing`

**Returns:** `void`

### public String getClothingExtraSubmenu()

**Returns:** `String`

### public boolean canBe3DRender()

**Returns:** `boolean`

### public boolean isWorn()

**Returns:** `boolean`

### public void addRandomHole()

**Returns:** `void`

### public void addRandomDirt()

**Returns:** `void`

### public void addRandomBlood()

**Returns:** `void`

### public void randomizeCondition(int wetChance,
int dirtChance,
int bloodChance,
int holeChance)

**Parameters:**
- `int` `wetChance`
- `int` `dirtChance`
- `int` `bloodChance`
- `int` `holeChance`

**Returns:** `void`

### public boolean hasFilter()

**Returns:** `boolean`

### public void setNoFilter()

**Returns:** `void`

### public String getFilterType()

**Returns:** `String`

### public void setFilterType(String filterType)

**Parameters:**
- `String` `filterType`

**Returns:** `void`

### public boolean hasTank()

**Returns:** `boolean`

### public void setNoTank()

**Returns:** `void`

### public String getTankType()

**Returns:** `String`

### public void setTankType(String tankType)

**Parameters:**
- `String` `tankType`

**Returns:** `void`

### public String getAlternateModelName()

**Returns:** `String`

### public float getUsedDelta()

**Returns:** `float`

### public void setUsedDelta(float usedDelta)

**Parameters:**
- `float` `usedDelta`

**Returns:** `void`

### public float getUseDelta()

**Returns:** `float`

### public void drainGasMask()

**Returns:** `void`

### public void drainGasMask(float rate)

**Parameters:**
- `float` `rate`

**Returns:** `void`

### public void drainSCBA()

**Returns:** `void`

### public float getCorpseSicknessDefense()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\Clothing.html`*
