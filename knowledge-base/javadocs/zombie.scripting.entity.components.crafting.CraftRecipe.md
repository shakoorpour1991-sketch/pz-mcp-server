---
title: zombie.scripting.entity.components.crafting.CraftRecipe
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.entity.components.crafting
---

# zombie.scripting.entity.components.crafting.CraftRecipe

`public class CraftRecipe extends BaseScriptObject implements TaggedObjectManager.TaggedObject`

**Kind:** class · **Package:** zombie.scripting.entity.components.crafting

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.entity.components.crafting.CraftRecipe

## Fields

### public ArrayList<CraftRecipe.RequiredSkill> skillRequired

### public ArrayList<CraftRecipe.RequiredSkill> autoLearnAny

### public ArrayList<CraftRecipe.RequiredSkill> autoLearnAll

### public ArrayList<CraftRecipe.XpAward> xpAward

### public String metaRecipe

### public int researchSkillLevel

## Constructors

### public CraftRecipe()

## Methods

### public OverlayMapper getOverlayMapper()

**Returns:** `OverlayMapper`

### public boolean getExistsAsVanilla()

**Returns:** `boolean`

### public boolean isVanilla()

**Returns:** `boolean`

### public String getModID()

**Returns:** `String`

### public String getModName()

**Returns:** `String`

### public String getName()

**Returns:** `String`

### public String getTranslationName()

**Returns:** `String`

### public void overrideTranslationName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getIconName()

**Returns:** `String`

### public Texture getIconTexture()

**Returns:** `Texture`

### public void overrideIconTexture(Texture icon)

**Parameters:**
- `Texture` `icon`

**Returns:** `void`

### @Deprecated
public boolean isShapeless()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public boolean isConsumeOnFinish()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public boolean isRequiresPlayer()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### public boolean needToBeLearn()

**Returns:** `boolean`

### public boolean canBeResearched()

**Returns:** `boolean`

### public boolean canAlwaysBeResearched()

**Returns:** `boolean`

### public boolean cannotBeResearched()

**Returns:** `boolean`

### public int getTime()

**Returns:** `int`

### public int getTime(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `int`

### public TimedActionScript getTimedActionScript()

**Returns:** `TimedActionScript`

### public CraftRecipeGroup getRecipeGroup()

**Returns:** `CraftRecipeGroup`

### public String getCategory()

**Returns:** `String`

### public List<String> getTags()

**Returns:** `List<String>`

### public BitSet getTagBits()

**Returns:** `BitSet`

### public List<String> getModTags()

**Returns:** `List<String>`

### public void setTags(List<String> tags)

**Parameters:**
- `List<String>` `tags`

**Returns:** `void`

### public int getInputCount()

**Returns:** `int`

### public int getOutputCount()

**Returns:** `int`

### public ArrayList<InputScript> getInputs()

**Returns:** `ArrayList<InputScript>`

### public ArrayList<OutputScript> getOutputs()

**Returns:** `ArrayList<OutputScript>`

### public ArrayList<CraftRecipe.IOScript> getIoLines()

**Returns:** `ArrayList<CraftRecipe.IOScript>`

### public int getIndexForIO(CraftRecipe.IOScript script)

**Parameters:**
- `CraftRecipe.IOScript` `script`

**Returns:** `int`

### public CraftRecipe.IOScript getIOForIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `CraftRecipe.IOScript`

### public boolean containsIO(CraftRecipe.IOScript script)

**Parameters:**
- `CraftRecipe.IOScript` `script`

**Returns:** `boolean`

### public boolean isUsesTools()

**Returns:** `boolean`

### public InputScript getToolLeft()

**Returns:** `InputScript`

### public InputScript getToolRight()

**Returns:** `InputScript`

### public InputScript getToolBoth()

**Returns:** `InputScript`

### public InputScript getProp1()

**Returns:** `InputScript`

### public void setProp1(InputScript prop)

**Parameters:**
- `InputScript` `prop`

**Returns:** `void`

### public InputScript getProp2()

**Returns:** `InputScript`

### public void setProp2(InputScript prop)

**Parameters:**
- `InputScript` `prop`

**Returns:** `void`

### public String getAnimation()

**Returns:** `String`

### public void setAnimation(String animationString)

**Parameters:**
- `String` `animationString`

**Returns:** `void`

### public boolean hasOnTickInputs()

**Returns:** `boolean`

### public boolean hasOnTickOutputs()

**Returns:** `boolean`

### public boolean hasLuaCall(CraftRecipe.LuaCall luaCall)

**Parameters:**
- `CraftRecipe.LuaCall` `luaCall`

**Returns:** `boolean`

### public String getLuaCallString(CraftRecipe.LuaCall luaCall)

**Parameters:**
- `CraftRecipe.LuaCall` `luaCall`

**Returns:** `String`

### public String getTooltip()

**Returns:** `String`

### public boolean isAllowBatchCraft()

**Returns:** `boolean`

### public boolean isCanWalk()

**Returns:** `boolean`

### public void InitLoadPP(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void Load(String name,
String body)
throws Exception

**Parameters:**
- `String` `name`
- `String` `body`

**Returns:** `void`

### public void Load(String name,
ScriptParser.Block block)
throws Exception

**Parameters:**
- `String` `name`
- `ScriptParser.Block` `block`

**Returns:** `void`

### public void PreReload()

**Returns:** `void`

### public void OnScriptsLoaded(ScriptLoadMode loadMode)
throws Exception

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public void OnPostWorldDictionaryInit()
throws Exception

**Returns:** `void`

### public ArrayList<String> getRequiredSkills()

**Returns:** `ArrayList<String>`

### public ArrayList<String> getAutoLearnAnySkills()

**Returns:** `ArrayList<String>`

### public ArrayList<String> getAutoLearnAllSkills()

**Returns:** `ArrayList<String>`

### public void checkAutoLearnAnySkills(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void checkAutoLearnAnySkills(IsoGameCharacter chr,
boolean textSpam)

**Parameters:**
- `IsoGameCharacter` `chr`
- `boolean` `textSpam`

**Returns:** `void`

### public void checkAutoLearnAllSkills(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void checkAutoLearnAllSkills(IsoGameCharacter chr,
boolean textSpam)

**Parameters:**
- `IsoGameCharacter` `chr`
- `boolean` `textSpam`

**Returns:** `void`

### public void checkMetaRecipe(IsoGameCharacter chr,
String checkedRecipe)

**Parameters:**
- `IsoGameCharacter` `chr`
- `String` `checkedRecipe`

**Returns:** `void`

### public void checkMetaRecipe(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public int getRequiredSkillCount()

**Returns:** `int`

### public CraftRecipe.RequiredSkill getRequiredSkill(int index)

**Parameters:**
- `int` `index`

**Returns:** `CraftRecipe.RequiredSkill`

### public int getAutoLearnAnySkillCount()

**Returns:** `int`

### public int getAutoLearnAllSkillCount()

**Returns:** `int`

### public CraftRecipe.RequiredSkill getAutoLearnAnySkill(int index)

**Parameters:**
- `int` `index`

**Returns:** `CraftRecipe.RequiredSkill`

### public CraftRecipe.RequiredSkill getAutoLearnAllSkill(int index)

**Parameters:**
- `int` `index`

**Returns:** `CraftRecipe.RequiredSkill`

### public String getMetaRecipe()

**Returns:** `String`

### public int getXPAwardCount()

**Returns:** `int`

### public CraftRecipe.XpAward getXPAward(int index)

**Parameters:**
- `int` `index`

**Returns:** `CraftRecipe.XpAward`

### public void clearRequiredSkills()

**Returns:** `void`

### public void addRequiredSkill(PerkFactory.Perk perk,
int level)

**Parameters:**
- `PerkFactory.Perk` `perk`
- `int` `level`

**Returns:** `void`

### public boolean canUseItem(InventoryItem item,
IsoGameCharacter character)

**Parameters:**
- `InventoryItem` `item`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean canUseItem(String item)

**Parameters:**
- `String` `item`

**Returns:** `boolean`

### public boolean OnTestItem(InventoryItem inventoryItem,
IsoGameCharacter character)

**Parameters:**
- `InventoryItem` `inventoryItem`
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean hasTag(CraftRecipeTag craftRecipeTag)

**Parameters:**
- `CraftRecipeTag` `craftRecipeTag`

**Returns:** `boolean`

### public boolean isCanBeDoneFromFloor()

**Returns:** `boolean`

### public boolean canBeDoneInDark()

**Returns:** `boolean`

### public boolean isAnySurfaceCraft()

**Returns:** `boolean`

### public boolean isInHandCraftCraft()

**Returns:** `boolean`

### public boolean isAutoRotate()

**Returns:** `boolean`

### public int getHighestRelevantSkillLevel(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `int`

### public int getHighestRelevantSkillLevel(IsoGameCharacter character,
boolean includeAutoLearn)

**Parameters:**
- `IsoGameCharacter` `character`
- `boolean` `includeAutoLearn`

**Returns:** `int`

### public PerkFactory.Perk getHighestRelevantSkill(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `PerkFactory.Perk`

### public PerkFactory.Perk getHighestRelevantSkillFromXpAward(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `PerkFactory.Perk`

### public static void onLuaFileReloaded()

**Returns:** `void`

### public String getOnAddToMenu()

**Returns:** `String`

### public boolean involvesSkill(PerkFactory.Perk skill)

**Parameters:**
- `PerkFactory.Perk` `skill`

**Returns:** `boolean`

### public boolean involvesSkill(PerkFactory.Perk skill,
boolean includeAutoLearn)

**Parameters:**
- `PerkFactory.Perk` `skill`
- `boolean` `includeAutoLearn`

**Returns:** `boolean`

### public boolean isSmithing()

**Returns:** `boolean`

### public boolean canOutputItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean canOutputItem(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `boolean`

### public void setResearchSkillLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `void`

### public int getResearchSkillLevel()

**Returns:** `int`

### public int getResearchSkillLevel(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public int normalizeSkillLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `int`

### public int getHighestSkillRequirement()

**Returns:** `int`

### public int getHighestSkillRequirement(boolean includeAutoLearn)

**Parameters:**
- `boolean` `includeAutoLearn`

**Returns:** `int`

### public PerkFactory.Perk getHighestPerkRequirement()

**Returns:** `PerkFactory.Perk`

### public boolean canResearch(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean canResearch(IsoGameCharacter chr,
boolean blacklistKnown)

**Parameters:**
- `IsoGameCharacter` `chr`
- `boolean` `blacklistKnown`

**Returns:** `boolean`

### public boolean isResearchAll()

**Returns:** `boolean`

### public String generateDebugText()

**Returns:** `String`

### public String generateDebugText(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `String`

### public void addXP(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public void addXP(IsoGameCharacter character,
boolean showXP)

**Parameters:**
- `IsoGameCharacter` `character`
- `boolean` `showXP`

**Returns:** `void`

### public boolean canBenefitFromRecipeAtHand(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean couldBenefitFromRecipeAtHand(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean validateBenefitFromRecipeAtHand(IsoGameCharacter chr,
ArrayList<ItemContainer> containers)

**Parameters:**
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `boolean`

### public boolean validateBenefitFromRecipeAtHand(HandcraftLogic logic)

**Parameters:**
- `HandcraftLogic` `logic`

**Returns:** `boolean`

### public boolean hasRecipeAtHand(IsoGameCharacter chr,
ArrayList<ItemContainer> containers)

**Parameters:**
- `IsoGameCharacter` `chr`
- `ArrayList<ItemContainer>` `containers`

**Returns:** `boolean`

### public boolean hasRecipeAtHand(HandcraftLogic logic)

**Parameters:**
- `HandcraftLogic` `logic`

**Returns:** `boolean`

### public String getFavouriteModDataString(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `String`

### public boolean isFavourite(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean hasPlayerLearned(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public boolean characterHasRequiredSkills(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean requiresSpecificWorkstation()

**Returns:** `boolean`

### public boolean isBuildableRecipe()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\entity\components\crafting\CraftRecipe.html`*
