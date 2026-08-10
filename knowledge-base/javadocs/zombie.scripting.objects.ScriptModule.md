---
title: zombie.scripting.objects.ScriptModule
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.ScriptModule

`public final class ScriptModule extends Object implements IScriptObjectStore`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.ScriptModule

## Fields

### public String name

### public String value

### public final ArrayList<String> imports

### public boolean disabled

### public final ScriptBucket.Template<VehicleTemplate> vehicleTemplates

### public final ScriptBucket.Template<GameEntityTemplate> entityTemplates

### public final ScriptBucket<Item> items

### public final ScriptBucket<Recipe> recipes

### public final ScriptBucket<UniqueRecipe> uniqueRecipes

### public final ScriptBucket<EvolvedRecipe> evolvedRecipes

### public final ScriptBucket<Fixing> fixings

### public final ScriptBucket<AnimationsMesh> animationMeshes

### public final ScriptBucket<ClockScript> clocks

### public final ScriptBucket<MannequinScript> mannequins

### public final ScriptBucket<ModelScript> models

### public final ScriptBucket<PhysicsShapeScript> physicsShapes

### public final ScriptBucket<SpriteModel> spriteModels

### public final ScriptBucket<GameSoundScript> gameSounds

### public final ScriptBucket<SoundTimelineScript> soundTimelines

### public final ScriptBucket<VehicleScript> vehicles

### public final ScriptBucket<RuntimeAnimationScript> animations

### public final ScriptBucket<VehicleEngineRPM> vehicleEngineRpms

### public final ScriptBucket<ItemConfig> itemConfigs

### public final ScriptBucket<GameEntityScript> entities

### public final ScriptBucket<XuiConfigScript> xuiConfigScripts

### public final ScriptBucket<XuiLayoutScript> xuiLayouts

### public final ScriptBucket<XuiLayoutScript> xuiStyles

### public final ScriptBucket<XuiLayoutScript> xuiDefaultStyles

### public final ScriptBucket<XuiColorsScript> xuiGlobalColors

### public final ScriptBucket<XuiSkinScript> xuiSkinScripts

### public final ScriptBucket<ItemFilterScript> itemFilters

### public final ScriptBucket<FluidFilterScript> fluidFilters

### public final ScriptBucket<CraftRecipe> craftRecipes

### public final ScriptBucket<StringListScript> stringLists

### public final ScriptBucket<EnergyDefinitionScript> energyDefinitionScripts

### public final ScriptBucket<FluidDefinitionScript> fluidDefinitionScripts

### public final ScriptBucket<TimedActionScript> timedActionScripts

### public final ScriptBucket<RagdollScript> ragdollScripts

### public final ScriptBucket<CharacterTraitDefinitionScript> characterTraitScripts

### public final ScriptBucket<CharacterProfessionDefinitionScript> characterProfessionScripts

### public final ScriptBucket<PhysicsHitReactionScript> physicsHitReactionScripts

## Constructors

### public ScriptModule()

## Methods

### public VehicleTemplate getVehicleTemplate(String name)

**Parameters:**
- `String` `name`

**Returns:** `VehicleTemplate`

### public GameEntityTemplate getGameEntityTemplate(String name)

**Parameters:**
- `String` `name`

**Returns:** `GameEntityTemplate`

### public Item getItem(String name)

**Parameters:**
- `String` `name`

**Returns:** `Item`

### public Recipe getRecipe(String name)

**Parameters:**
- `String` `name`

**Returns:** `Recipe`

### public UniqueRecipe getUniqueRecipe(String name)

**Parameters:**
- `String` `name`

**Returns:** `UniqueRecipe`

### public EvolvedRecipe getEvolvedRecipe(String name)

**Parameters:**
- `String` `name`

**Returns:** `EvolvedRecipe`

### public Fixing getFixing(String name)

**Parameters:**
- `String` `name`

**Returns:** `Fixing`

### public AnimationsMesh getAnimationsMesh(String name)

**Parameters:**
- `String` `name`

**Returns:** `AnimationsMesh`

### public ClockScript getClockScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `ClockScript`

### public MannequinScript getMannequinScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `MannequinScript`

### public ModelScript getModelScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `ModelScript`

### public PhysicsShapeScript getPhysicsShape(String name)

**Parameters:**
- `String` `name`

**Returns:** `PhysicsShapeScript`

### public SpriteModel getSpriteModel(String name)

**Parameters:**
- `String` `name`

**Returns:** `SpriteModel`

### public GameSoundScript getGameSound(String name)

**Parameters:**
- `String` `name`

**Returns:** `GameSoundScript`

### public SoundTimelineScript getSoundTimeline(String name)

**Parameters:**
- `String` `name`

**Returns:** `SoundTimelineScript`

### public VehicleScript getVehicle(String name)

**Parameters:**
- `String` `name`

**Returns:** `VehicleScript`

### public RuntimeAnimationScript getAnimation(String name)

**Parameters:**
- `String` `name`

**Returns:** `RuntimeAnimationScript`

### public VehicleEngineRPM getVehicleEngineRPM(String name)

**Parameters:**
- `String` `name`

**Returns:** `VehicleEngineRPM`

### public ItemConfig getItemConfig(String name)

**Parameters:**
- `String` `name`

**Returns:** `ItemConfig`

### public GameEntityScript getGameEntityScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `GameEntityScript`

### public XuiConfigScript getXuiConfigScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiConfigScript`

### public XuiLayoutScript getXuiLayout(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiLayoutScript`

### public XuiLayoutScript getXuiStyle(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiLayoutScript`

### public XuiLayoutScript getXuiDefaultStyle(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiLayoutScript`

### public XuiColorsScript getXuiGlobalColors(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiColorsScript`

### public XuiSkinScript getXuiSkinScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `XuiSkinScript`

### public ItemFilterScript getItemFilter(String name)

**Parameters:**
- `String` `name`

**Returns:** `ItemFilterScript`

### public FluidFilterScript getFluidFilter(String name)

**Parameters:**
- `String` `name`

**Returns:** `FluidFilterScript`

### public CraftRecipe getCraftRecipe(String name)

**Parameters:**
- `String` `name`

**Returns:** `CraftRecipe`

### public StringListScript getStringList(String name)

**Parameters:**
- `String` `name`

**Returns:** `StringListScript`

### public EnergyDefinitionScript getEnergyDefinitionScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `EnergyDefinitionScript`

### public FluidDefinitionScript getFluidDefinitionScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `FluidDefinitionScript`

### public TimedActionScript getTimedActionScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `TimedActionScript`

### public RagdollScript getRagdollScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `RagdollScript`

### public CharacterTraitDefinitionScript getCharacterTraitScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `CharacterTraitDefinitionScript`

### public CharacterProfessionDefinitionScript getCharacterProfessionScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `CharacterProfessionDefinitionScript`

### public PhysicsHitReactionScript getPhysicsHitReactionScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `PhysicsHitReactionScript`

### public void Load(ScriptLoadMode loadMode,
String name,
String strArray)

**Parameters:**
- `ScriptLoadMode` `loadMode`
- `String` `name`
- `String` `strArray`

**Returns:** `void`

### public void ParseScriptPP(ScriptLoadMode loadMode,
String totalFile)

**Parameters:**
- `ScriptLoadMode` `loadMode`
- `String` `totalFile`

**Returns:** `void`

### public boolean CheckExitPoints()

**Returns:** `boolean`

### public String getName()

**Returns:** `String`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\ScriptModule.html`*
