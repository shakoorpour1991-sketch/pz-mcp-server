---
title: zombie.iso.IsoWorld
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoWorld

`public final class IsoWorld extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoWorld

## Fields

### public static final int MIN_TDEF_FILE_NUMBER_FOR_MODS

### public static final int MAX_TDEF_FILE_NUMBER_FOR_MODS

### public final IsoMetaGrid metaGrid

### public SkyBox sky

### public final Helicopter helicopter

### public final ArrayList<IsoGameCharacter> characters

### public int x

### public int y

### public IsoCell currentCell

### public static IsoWorld instance

### public int totalSurvivorsDead

### public int totalSurvivorNights

### public int survivorSurvivalRecord

### public HashMap<Integer, SurvivorDesc> survivorDescriptors

### public ArrayList<AddCoopPlayer> addCoopPlayers

### public static String mapPath

### public static boolean mapUseJar

### public static final HashMap<String, ArrayList<String>> PropertyValueMap

### public static final int WorldVersion

### public static final int WorldVersion_PreviouslyMoved

### public static final int WorldVersion_DesignationZone

### public static final int WorldVersion_PlayerExtraInfoFlags

### public static final int WorldVersion_ObjectID

### public static final int WorldVersion_CraftUpdateFoundations

### public static final int WorldVersion_AlarmDecay

### public static final int WorldVersion_FishingCheat

### public static final int WorldVersion_CharacterVoiceType

### public static final int WorldVersion_AnimalHutch

### public static final int WorldVersion_AlarmClock

### public static final int WorldVersion_VariableHeight

### public static final int WorldVersion_EnableWorldgen

### public static final int WorldVersion_CharacterVoiceOptions

### public static final int WorldVersion_ChunksWorldGeneratedBoolean

### public static final int WorldVersion_ChunksWorldModifiedBoolean

### public static final int WorldVersion_CharacterDiscomfort

### public static final int WorldVersion_HutchAndVehicleAnimalFormat

### public static final int WorldVersion_IsoCompostHealthValues

### public static final int WorldVersion_ChunksAttachmentsState

### public static final int WorldVersion_ZoneIDisUUID

### public static final int WorldVersion_SafeHouseHitPoints

### public static final int WorldVersion_FastMoveCheat

### public static final int WorldVersion_SquareSeen

### public static final int WorldVersion_TrapExplosionDuration

### public static final int WorldVersion_InventoryItemUsesInteger

### public static final int WorldVersion_ChunksAttachmentsPartial

### public static final int WorldVersion_PrintMediaRottingCorpsesBodyDamage

### public static final int WorldVersion_SafeHouseCreatedTimeAndLocation

### public static final int WorldVersion_Stats_Idleness

### public static final int WorldVersion_AnimalRottingTexture

### public static final int WorldVersion_LearnedRecipes

### public static final int WorldVersion_BodyDamageSavePoulticeValues

### public static final int WorldVersion_PlayerSaveCraftingHistory

### public static final int WorldVersion_VehicleAlarm

### public static final int WorldVersion_RecipesAndAmmoCheats

### public static final int WorldVersion_SavePlayerCheats

### public static final int WorldVersion_ItemWorldRotationFloats

### public static final int WorldVersion_MetaEntityOutsideAware

### public static final int WorldVersion_VisitedFileVersion

### public static final int WorldVersion_VariableCraftInputCounts

### public static final int WorldVersion_AnimalPetTime

### public static final int WorldVersion_RootLocale

### public static final int WorldVersion_CraftLogicParallelCrafting

### public static final int WorldVersion_PlayerAutoDrink

### public static final int WorldVersion_42_13

### public static final int WorldVersion_PlayerInsulation

### public static final int WorldVersion_SaveFireTimer

### public static final int WorldVersion_BodyDamageStatusesSync

### public static final int WorldVersion_RemoveDifficulty

### public static final int WorldVersion_AnimalWild

### public static final int WorldVersion_DeadBodyAnimalGenetics

### public static final int WorldVersion_AnimalOnlineId

### public static final int WorldVersion_BuildMaterials

### public static final int WorldVersion_ThermalDuration

### public static int savedWorldVersion

### public static boolean noZombies

### public static int totalWorldVersion

### public static int saveoffsetx

### public static int saveoffsety

### public boolean doChunkMapUpdate

### public boolean emitterUpdate

### public static CompletableFuture<Void> animationThread

## Constructors

### public IsoWorld()

## Methods

### public IsoMetaGrid getMetaGrid()

**Returns:** `IsoMetaGrid`

### public Zone registerZone(String name,
String type,
int x,
int y,
int z,
int width,
int height)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`

**Returns:** `Zone`

### @Deprecated
public Zone registerZoneNoOverlap(String name,
String type,
int x,
int y,
int z,
int width,
int height)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`

**Returns:** `Zone`

### public void removeZonesForLotDirectory(String lotDir)

**Parameters:**
- `String` `lotDir`

**Returns:** `void`

### public BaseSoundEmitter getFreeEmitter()

**Returns:** `BaseSoundEmitter`

### public BaseSoundEmitter getFreeEmitter(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `BaseSoundEmitter`

### public void takeOwnershipOfEmitter(BaseSoundEmitter emitter)

**Parameters:**
- `BaseSoundEmitter` `emitter`

**Returns:** `void`

### public void setEmitterOwner(BaseSoundEmitter emitter,
IsoObject object)

**Parameters:**
- `BaseSoundEmitter` `emitter`
- `IsoObject` `object`

**Returns:** `void`

### public void returnOwnershipOfEmitter(BaseSoundEmitter emitter)

**Parameters:**
- `BaseSoundEmitter` `emitter`

**Returns:** `void`

### public Zone registerVehiclesZone(String name,
String type,
int x,
int y,
int z,
int width,
int height,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `Zone`

### public Zone registerMannequinZone(String name,
String type,
int x,
int y,
int z,
int width,
int height,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `Zone`

### public void registerRoomTone(String name,
String type,
int x,
int y,
int z,
int width,
int height,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `String` `name`
- `String` `type`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `width`
- `int` `height`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `void`

### public void registerSpawnOrigin(int x,
int y,
int width,
int height,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `void`

### public void registerWaterFlow(float x,
float y,
float flow,
float speed)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `flow`
- `float` `speed`

**Returns:** `void`

### public void registerWaterZone(float x1,
float y1,
float x2,
float y2,
float shore,
float waterGround)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `shore`
- `float` `waterGround`

**Returns:** `void`

### public void checkVehiclesZones()

**Returns:** `void`

### public void setGameMode(String mode)

**Parameters:**
- `String` `mode`

**Returns:** `void`

### public String getGameMode()

**Returns:** `String`

### public void setPreset(String mode)

**Parameters:**
- `String` `mode`

**Returns:** `void`

### public String getPreset()

**Returns:** `String`

### public void setWorld(String world)

**Parameters:**
- `String` `world`

**Returns:** `void`

### public void setMap(String world)

**Parameters:**
- `String` `world`

**Returns:** `void`

### public String getMap()

**Returns:** `String`

### public void renderTerrain()

**Returns:** `void`

### public int getFrameNo()

**Returns:** `int`

### public IsoSurvivor CreateRandomSurvivor(SurvivorDesc desc,
IsoGridSquare sq,
IsoPlayer player)

**Parameters:**
- `SurvivorDesc` `desc`
- `IsoGridSquare` `sq`
- `IsoPlayer` `player`

**Returns:** `IsoSurvivor`

### public void CreateSwarm(int num,
int x1,
int y1,
int x2,
int y2)

**Parameters:**
- `int` `num`
- `int` `x1`
- `int` `y1`
- `int` `x2`
- `int` `y2`

**Returns:** `void`

### public void ForceKillAllZombies()

**Returns:** `void`

### public static int readInt(RandomAccessFile in)
throws EOFException,
IOException

**Parameters:**
- `RandomAccessFile` `in`

**Returns:** `int`

### public static String readString(RandomAccessFile in)
throws EOFException,
IOException

**Parameters:**
- `RandomAccessFile` `in`

**Returns:** `String`

### public static int readInt(InputStream in)
throws EOFException,
IOException

**Parameters:**
- `InputStream` `in`

**Returns:** `int`

### public static String readString(InputStream in,
StringBuilder input)
throws IOException

**Parameters:**
- `InputStream` `in`
- `StringBuilder` `input`

**Returns:** `String`

### public void LoadTileDefinitions(IsoSpriteManager sprMan,
String filename,
int fileNumber)

**Parameters:**
- `IsoSpriteManager` `sprMan`
- `String` `filename`
- `int` `fileNumber`

**Returns:** `void`

### public void LoadTileDefinitionsPropertyStrings(IsoSpriteManager sprMan,
String filename,
int fileNumber)

**Parameters:**
- `IsoSpriteManager` `sprMan`
- `String` `filename`
- `int` `fileNumber`

**Returns:** `void`

### public boolean LoadPlayerForInfo()
throws FileNotFoundException,
IOException

**Returns:** `boolean`

### public void init()
throws FileNotFoundException,
IOException,
WorldDictionaryException

**Returns:** `void`

### public List<CharacterTrait> getLuaTraits()

**Returns:** `List<CharacterTrait>`

### public void addLuaTrait(CharacterTrait trait)

**Parameters:**
- `CharacterTrait` `trait`

**Returns:** `void`

### public SurvivorDesc getLuaPlayerDesc()

**Returns:** `SurvivorDesc`

### public void setLuaPlayerDesc(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `void`

### public void KillCell()

**Returns:** `void`

### public void setDrawWorld(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void sceneCullZombies()

**Returns:** `void`

### public void sceneCullAnimals()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void DrawPlayerCone()

**Returns:** `void`

### public void DrawPlayerCone2()

**Returns:** `void`

### public void FinishAnimation()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public IsoCell getCell()

**Returns:** `IsoCell`

### public int getWorldSquareY()

**Returns:** `int`

### public int getWorldSquareX()

**Returns:** `int`

### public IsoMetaChunk getMetaChunk(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `IsoMetaChunk`

### public IsoMetaChunk getMetaChunkFromTile(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `IsoMetaChunk`

### public float getGlobalTemperature()

Utility method for ClimateManager.getTemperature()

**Returns:** `float`

### public String getWeather()

**Returns:** `String`

### public void setWeather(String weather)

**Parameters:**
- `String` `weather`

**Returns:** `void`

### public int getLuaSpawnCellX()

**Returns:** `int`

### @Deprecated
public void setLuaSpawnCellX(int luaSpawnCellX)

> ⚠️ **Deprecated**

**Parameters:**
- `int` `luaSpawnCellX`

**Returns:** `void`

### public int getLuaSpawnCellY()

**Returns:** `int`

### @Deprecated
public void setLuaSpawnCellY(int luaSpawnCellY)

> ⚠️ **Deprecated**

**Parameters:**
- `int` `luaSpawnCellY`

**Returns:** `void`

### public int getLuaPosX()

**Returns:** `int`

### public void setLuaPosX(int luaPosX)

**Parameters:**
- `int` `luaPosX`

**Returns:** `void`

### public int getLuaPosY()

**Returns:** `int`

### public void setLuaPosY(int luaPosY)

**Parameters:**
- `int` `luaPosY`

**Returns:** `void`

### public int getLuaPosZ()

**Returns:** `int`

### public void setLuaPosZ(int luaPosZ)

**Parameters:**
- `int` `luaPosZ`

**Returns:** `void`

### public void setSpawnRegion(String spawnRegionName)

**Parameters:**
- `String` `spawnRegionName`

**Returns:** `void`

### public String getSpawnRegion()

**Returns:** `String`

### public String getWorld()

**Returns:** `String`

### public void transmitWeather()

**Returns:** `void`

### public boolean isValidSquare(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public ArrayList<RandomizedZoneStoryBase> getRandomizedZoneList()

**Returns:** `ArrayList<RandomizedZoneStoryBase>`

### public RandomizedZoneStoryBase getRandomizedZoneStoryByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `RandomizedZoneStoryBase`

### public ArrayList<RandomizedBuildingBase> getRandomizedBuildingList()

**Returns:** `ArrayList<RandomizedBuildingBase>`

### public ArrayList<RandomizedVehicleStoryBase> getRandomizedVehicleStoryList()

**Returns:** `ArrayList<RandomizedVehicleStoryBase>`

### public RandomizedVehicleStoryBase getRandomizedVehicleStoryByName(String name)

**Parameters:**
- `String` `name`

**Returns:** `RandomizedVehicleStoryBase`

### public RandomizedBuildingBase getRBBasic()

**Returns:** `RandomizedBuildingBase`

### public RandomizedWorldBase getRandomizedWorldBase()

**Returns:** `RandomizedWorldBase`

### public static boolean getZombiesDisabled()

**Returns:** `boolean`

### public static boolean getZombiesEnabled()

**Returns:** `boolean`

### public ClimateManager getClimateManager()

**Returns:** `ClimateManager`

### public IsoPuddles getPuddlesManager()

**Returns:** `IsoPuddles`

### public static int getWorldVersion()

**Returns:** `int`

### public HashMap<String, ArrayList<UUID>> getSpawnedZombieZone()

**Returns:** `HashMap<String, ArrayList<UUID>>`

### public int getTimeSinceLastSurvivorInHorde()

**Returns:** `int`

### public void setTimeSinceLastSurvivorInHorde(int timeSinceLastSurvivorInHorde)

**Parameters:**
- `int` `timeSinceLastSurvivorInHorde`

**Returns:** `void`

### public float getWorldAgeDays()

**Returns:** `float`

### public HashMap<String, ArrayList<String>> getAllTiles()

**Returns:** `HashMap<String, ArrayList<String>>`

### public ArrayList<String> getAllTilesName()

**Returns:** `ArrayList<String>`

### public ArrayList<String> getAllTiles(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `ArrayList<String>`

### public boolean isHydroPowerOn()

**Returns:** `boolean`

### public void setHydroPowerOn(boolean on)

**Parameters:**
- `boolean` `on`

**Returns:** `void`

### public ArrayList<String> getTileImageNames()

**Returns:** `ArrayList<String>`

### public static void parseDistributions()

**Returns:** `void`

### public void setRules(Rules rules)

**Parameters:**
- `Rules` `rules`

**Returns:** `void`

### public Rules getRules()

**Returns:** `Rules`

### public void setWgChunk(WorldGenChunk wgChunk)

**Parameters:**
- `WorldGenChunk` `wgChunk`

**Returns:** `void`

### public WorldGenChunk getWgChunk()

**Returns:** `WorldGenChunk`

### public void setBlending(Blending blending)

**Parameters:**
- `Blending` `blending`

**Returns:** `void`

### public Blending getBlending()

**Returns:** `Blending`

### public void setAttachmentsHandler(AttachmentsHandler attachmentsHandler)

**Parameters:**
- `AttachmentsHandler` `attachmentsHandler`

**Returns:** `void`

### public AttachmentsHandler getAttachmentsHandler()

**Returns:** `AttachmentsHandler`

### public void setZoneGenerator(ZoneGenerator zoneGenerator)

**Parameters:**
- `ZoneGenerator` `zoneGenerator`

**Returns:** `void`

### public ZoneGenerator getZoneGenerator()

**Returns:** `ZoneGenerator`

### public void setBiomeMap(BiomeMap biomeMap)

**Parameters:**
- `BiomeMap` `biomeMap`

**Returns:** `void`

### public BiomeMap getBiomeMap()

**Returns:** `BiomeMap`

### public void setZombieVoronois(List<ZombieVoronoi> zombieVoronois)

**Parameters:**
- `List<ZombieVoronoi>` `zombieVoronois`

**Returns:** `void`

### public List<ZombieVoronoi> getZombieVoronois()

**Returns:** `List<ZombieVoronoi>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoWorld.html`*
