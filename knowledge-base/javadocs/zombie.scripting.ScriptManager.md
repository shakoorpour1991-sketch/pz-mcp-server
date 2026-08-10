---
title: zombie.scripting.ScriptManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting
---

# zombie.scripting.ScriptManager

`public final class ScriptManager extends Object implements IScriptObjectStore`

**Kind:** class · **Package:** zombie.scripting

## Inheritance
- java.lang.Object
- zombie.scripting.ScriptManager

## Fields

### public static final ScriptManager instance

### public String currentFileName

### public final HashMap<String, ScriptModule> moduleMap

### public final ArrayList<ScriptModule> moduleList

### public ScriptModule currentLoadingModule

### public static final String Base

### public static final String Base_Module

### public static final String VanillaID

## Constructors

### public ScriptManager()

## Methods

### public static void EnableDebug(ScriptType type,
boolean enable)

**Parameters:**
- `ScriptType` `type`
- `boolean` `enable`

**Returns:** `void`

### public static boolean isDebugEnabled(ScriptType type)

**Parameters:**
- `ScriptType` `type`

**Returns:** `boolean`

### public static void println(ScriptType type,
String msg)

**Parameters:**
- `ScriptType` `type`
- `String` `msg`

**Returns:** `void`

### public static void println(BaseScriptObject scriptObject,
String msg)

**Parameters:**
- `BaseScriptObject` `scriptObject`
- `String` `msg`

**Returns:** `void`

### public ArrayList<?> getScriptsForType(ScriptType type)

**Parameters:**
- `ScriptType` `type`

**Returns:** `ArrayList<?>`

### public VehicleTemplate getVehicleTemplate(String name)

**Parameters:**
- `String` `name`

**Returns:** `VehicleTemplate`

### public ArrayList<VehicleTemplate> getAllVehicleTemplates()

**Returns:** `ArrayList<VehicleTemplate>`

### public GameEntityTemplate getGameEntityTemplate(String name)

**Parameters:**
- `String` `name`

**Returns:** `GameEntityTemplate`

### public ArrayList<GameEntityTemplate> getAllGameEntityTemplates()

**Returns:** `ArrayList<GameEntityTemplate>`

### public Item getItem(String name)

**Parameters:**
- `String` `name`

**Returns:** `Item`

### public ArrayList<Item> getAllItems()

**Returns:** `ArrayList<Item>`

### public Recipe getRecipe(String name)

**Parameters:**
- `String` `name`

**Returns:** `Recipe`

### public ArrayList<Recipe> getAllRecipes()

**Returns:** `ArrayList<Recipe>`

### public UniqueRecipe getUniqueRecipe(String name)

**Parameters:**
- `String` `name`

**Returns:** `UniqueRecipe`

### public Stack<UniqueRecipe> getAllUniqueRecipes()

**Returns:** `Stack<UniqueRecipe>`

### public EvolvedRecipe getEvolvedRecipe(String name)

**Parameters:**
- `String` `name`

**Returns:** `EvolvedRecipe`

### public ArrayList<EvolvedRecipe> getAllEvolvedRecipesList()

**Returns:** `ArrayList<EvolvedRecipe>`

### public Stack<EvolvedRecipe> getAllEvolvedRecipes()

**Returns:** `Stack<EvolvedRecipe>`

### public Fixing getFixing(String name)

**Parameters:**
- `String` `name`

**Returns:** `Fixing`

### public ArrayList<Fixing> getAllFixing(ArrayList<Fixing> result)

**Parameters:**
- `ArrayList<Fixing>` `result`

**Returns:** `ArrayList<Fixing>`

### public AnimationsMesh getAnimationsMesh(String name)

**Parameters:**
- `String` `name`

**Returns:** `AnimationsMesh`

### public ArrayList<AnimationsMesh> getAllAnimationsMeshes()

**Returns:** `ArrayList<AnimationsMesh>`

### public ClockScript getClockScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `ClockScript`

### public ArrayList<ClockScript> getAllClockScripts()

**Returns:** `ArrayList<ClockScript>`

### public MannequinScript getMannequinScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `MannequinScript`

### public ArrayList<MannequinScript> getAllMannequinScripts()

**Returns:** `ArrayList<MannequinScript>`

### public ModelScript getModelScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `ModelScript`

### public ArrayList<ModelScript> getAllModelScripts()

**Returns:** `ArrayList<ModelScript>`

### public void addModelScript(ModelScript modelScript)

**Parameters:**
- `ModelScript` `modelScript`

**Returns:** `void`

### public PhysicsShapeScript getPhysicsShape(String name)

**Parameters:**
- `String` `name`

**Returns:** `PhysicsShapeScript`

### public ArrayList<PhysicsShapeScript> getAllPhysicsShapes()

**Returns:** `ArrayList<PhysicsShapeScript>`

### public GameSoundScript getGameSound(String name)

**Parameters:**
- `String` `name`

**Returns:** `GameSoundScript`

### public ArrayList<GameSoundScript> getAllGameSounds()

**Returns:** `ArrayList<GameSoundScript>`

### public SoundTimelineScript getSoundTimeline(String name)

**Parameters:**
- `String` `name`

**Returns:** `SoundTimelineScript`

### public ArrayList<SoundTimelineScript> getAllSoundTimelines()

**Returns:** `ArrayList<SoundTimelineScript>`

### public SpriteModel getSpriteModel(String name)

**Parameters:**
- `String` `name`

**Returns:** `SpriteModel`

### public ArrayList<SpriteModel> getAllSpriteModels()

**Returns:** `ArrayList<SpriteModel>`

### public void addSpriteModel(SpriteModel spriteModel)

**Parameters:**
- `SpriteModel` `spriteModel`

**Returns:** `void`

### public VehicleScript getVehicle(String name)

**Parameters:**
- `String` `name`

**Returns:** `VehicleScript`

### public ArrayList<VehicleScript> getAllVehicleScripts()

**Returns:** `ArrayList<VehicleScript>`

### public VehicleScript getRandomVehicleScript()

**Returns:** `VehicleScript`

### public RuntimeAnimationScript getRuntimeAnimationScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `RuntimeAnimationScript`

### public ArrayList<RuntimeAnimationScript> getAllRuntimeAnimationScripts()

**Returns:** `ArrayList<RuntimeAnimationScript>`

### public VehicleEngineRPM getVehicleEngineRPM(String name)

**Parameters:**
- `String` `name`

**Returns:** `VehicleEngineRPM`

### public ArrayList<VehicleEngineRPM> getAllVehicleEngineRPMs()

**Returns:** `ArrayList<VehicleEngineRPM>`

### public ItemConfig getItemConfig(String name)

**Parameters:**
- `String` `name`

**Returns:** `ItemConfig`

### public ArrayList<ItemConfig> getAllItemConfigs()

**Returns:** `ArrayList<ItemConfig>`

### public GameEntityScript getGameEntityScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `GameEntityScript`

### public ArrayList<GameEntityScript> getAllGameEntities()

**Returns:** `ArrayList<GameEntityScript>`

### public ArrayList<CraftRecipe> getAllBuildableRecipes()

**Returns:** `ArrayList<CraftRecipe>`

### public CraftRecipe getBuildableRecipe(String recipe)

**Parameters:**
- `String` `recipe`

**Returns:** `CraftRecipe`

### public XuiConfigScript getXuiConfigScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiConfigScript`

### public ArrayList<XuiConfigScript> getAllXuiConfigScripts()

**Returns:** `ArrayList<XuiConfigScript>`

### public XuiLayoutScript getXuiLayout(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiLayoutScript`

### public ArrayList<XuiLayoutScript> getAllXuiLayouts()

**Returns:** `ArrayList<XuiLayoutScript>`

### public XuiLayoutScript getXuiStyle(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiLayoutScript`

### public ArrayList<XuiLayoutScript> getAllXuiStyles()

**Returns:** `ArrayList<XuiLayoutScript>`

### public XuiLayoutScript getXuiDefaultStyle(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiLayoutScript`

### public ArrayList<XuiLayoutScript> getAllXuiDefaultStyles()

**Returns:** `ArrayList<XuiLayoutScript>`

### public XuiColorsScript getXuiColor(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiColorsScript`

### public ArrayList<XuiColorsScript> getAllXuiColors()

**Returns:** `ArrayList<XuiColorsScript>`

### public XuiSkinScript getXuiSkinScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiSkinScript`

### public ArrayList<XuiSkinScript> getAllXuiSkinScripts()

**Returns:** `ArrayList<XuiSkinScript>`

### public ItemFilterScript getItemFilter(String name)

**Parameters:**
- `String` `name`

**Returns:** `ItemFilterScript`

### public ArrayList<ItemFilterScript> getAllItemFilters()

**Returns:** `ArrayList<ItemFilterScript>`

### public FluidFilterScript getFluidFilter(String name)

**Parameters:**
- `String` `name`

**Returns:** `FluidFilterScript`

### public ArrayList<FluidFilterScript> getAllFluidFilters()

**Returns:** `ArrayList<FluidFilterScript>`

### public CraftRecipe getCraftRecipe(String name)

**Parameters:**
- `String` `name`

**Returns:** `CraftRecipe`

### public ArrayList<CraftRecipe> getAllCraftRecipes()

**Returns:** `ArrayList<CraftRecipe>`

### public void VerifyAllCraftRecipesAreLearnable()

**Returns:** `void`

### public void checkAutoLearn(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void checkMetaRecipes(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void checkMetaRecipe(IsoGameCharacter chr,
String checkRecipe)

**Parameters:**
- `IsoGameCharacter` `chr`
- `String` `checkRecipe`

**Returns:** `void`

### public StringListScript getStringList(String name)

**Parameters:**
- `String` `name`

**Returns:** `StringListScript`

### public ArrayList<StringListScript> getAllStringLists()

**Returns:** `ArrayList<StringListScript>`

### public EnergyDefinitionScript getEnergyDefinitionScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `EnergyDefinitionScript`

### public ArrayList<EnergyDefinitionScript> getAllEnergyDefinitionScripts()

**Returns:** `ArrayList<EnergyDefinitionScript>`

### public FluidDefinitionScript getFluidDefinitionScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `FluidDefinitionScript`

### public ArrayList<FluidDefinitionScript> getAllFluidDefinitionScripts()

**Returns:** `ArrayList<FluidDefinitionScript>`

### public TimedActionScript getTimedActionScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `TimedActionScript`

### public ArrayList<TimedActionScript> getAllTimedActionScripts()

**Returns:** `ArrayList<TimedActionScript>`

### public RagdollScript getRagdollScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `RagdollScript`

### public PhysicsHitReactionScript getPhysicsHitReactionScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `PhysicsHitReactionScript`

### public CharacterTraitDefinitionScript getCharacterTraitScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `CharacterTraitDefinitionScript`

### public CharacterProfessionDefinitionScript getCharacterProfessionScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `CharacterProfessionDefinitionScript`

### public void update()

**Returns:** `void`

### public void LoadFile(ScriptLoadMode loadMode,
String filename,
boolean bLoadJar)
throws FileNotFoundException

**Parameters:**
- `ScriptLoadMode` `loadMode`
- `String` `filename`
- `boolean` `bLoadJar`

**Returns:** `void`

### public void ParseScript(ScriptLoadMode loadMode,
String totalFile)

**Parameters:**
- `ScriptLoadMode` `loadMode`
- `String` `totalFile`

**Returns:** `void`

### public void searchFolders(URI base,
File fo,
ArrayList<String> loadList)

**Parameters:**
- `URI` `base`
- `File` `fo`
- `ArrayList<String>` `loadList`

**Returns:** `void`

### public static String getItemName(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public ScriptModule getModule(String name)

**Parameters:**
- `String` `name`

**Returns:** `ScriptModule`

### public ScriptModule getModule(String name,
boolean defaultToBase)

**Parameters:**
- `String` `name`
- `boolean` `defaultToBase`

**Returns:** `ScriptModule`

### public ScriptModule getModuleNoDisableCheck(String name)

**Parameters:**
- `String` `name`

**Returns:** `ScriptModule`

### public Item FindItem(String name)

**Parameters:**
- `String` `name`

**Returns:** `Item`

### public Item FindItem(String name,
boolean moduleDefaultsToBase)

**Parameters:**
- `String` `name`
- `boolean` `moduleDefaultsToBase`

**Returns:** `Item`

### public boolean isDrainableItemType(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `boolean`

### public void CheckExitPoints()

**Returns:** `void`

### public ArrayList<Item> getItemsTag(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `ArrayList<Item>`

### public ArrayList<Item> getItemsByType(String type)

**Parameters:**
- `String` `type`

**Returns:** `ArrayList<Item>`

### public void Reset()

**Returns:** `void`

### public String getChecksum()

**Returns:** `String`

### public static String getCurrentLoadFileMod()

**Returns:** `String`

### public static String getCurrentLoadFileAbsPath()

**Returns:** `String`

### public static String getCurrentLoadFileName()

**Returns:** `String`

### public void Load()
throws IOException

**Returns:** `void`

### public void ReloadScripts(ScriptType type)

**Parameters:**
- `ScriptType` `type`

**Returns:** `void`

### public void ReloadScripts(EnumSet<ScriptType> types)

**Parameters:**
- `EnumSet<ScriptType>` `types`

**Returns:** `void`

### public void LoadedAfterLua()

**Returns:** `void`

### public void PostTileDefinitions()

**Returns:** `void`

### public void PostWorldDictionaryInit()

**Returns:** `void`

### public boolean hasLoadErrors()

**Returns:** `boolean`

### public boolean hasLoadErrors(boolean onlyCritical)

**Parameters:**
- `boolean` `onlyCritical`

**Returns:** `boolean`

### public static void resolveGetItemTypes(ArrayList<String> sourceItems,
ArrayList<Item> scriptItems)

**Parameters:**
- `ArrayList<String>` `sourceItems`
- `ArrayList<Item>` `scriptItems`

**Returns:** `void`

### public ArrayList<Recipe> getAllRecipesFor(String result)

**Parameters:**
- `String` `result`

**Returns:** `ArrayList<Recipe>`

### public String getItemTypeForClothingItem(String clothingItem)

**Parameters:**
- `String` `clothingItem`

**Returns:** `String`

### public Item getItemForClothingItem(String clothingName)

**Parameters:**
- `String` `clothingName`

**Returns:** `Item`

### public ArrayList<String> getZedDmgMap()

**Returns:** `ArrayList<String>`

### public String resolveItemType(ScriptModule module,
String itemType)

**Parameters:**
- `ScriptModule` `module`
- `String` `itemType`

**Returns:** `String`

### public String resolveModelScript(ScriptModule module,
String modelScriptName)

**Parameters:**
- `ScriptModule` `module`
- `String` `modelScriptName`

**Returns:** `String`

### public Item getSpecificItem(String name)

Attempts to get the specific item of "module.type" without defaulting to module "Base".

**Parameters:**
- `String` `name`

**Returns:** `Item`

### public GameEntityScript getSpecificEntity(String name)

**Parameters:**
- `String` `name`

**Returns:** `GameEntityScript`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\ScriptManager.html`*
