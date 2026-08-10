---
title: zombie.Lua.LuaManager.GlobalObject
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.Lua
---

# zombie.Lua.LuaManager.GlobalObject

`public static class LuaManager.GlobalObject extends Object`

**Kind:** class · **Package:** zombie.Lua

## Inheritance
- java.lang.Object
- zombie.Lua.LuaManager.GlobalObject

## Description

Object containing global Lua functions. The methods in this class are called from Lua as methodName() instead of qualifying them with the class name, even if they are not static.

## Constructors

### public GlobalObject()

## Methods

### public static Model loadVehicleModel(String name,
String loc,
String tex)

**Parameters:**
- `String` `name`
- `String` `loc`
- `String` `tex`

**Returns:** `Model`

### public static Model loadStaticZomboidModel(String name,
String loc,
String tex)

**Parameters:**
- `String` `name`
- `String` `loc`
- `String` `tex`

**Returns:** `Model`

### public static Model loadSkinnedZomboidModel(String name,
String loc,
String tex)

**Parameters:**
- `String` `name`
- `String` `loc`
- `String` `tex`

**Returns:** `Model`

### public static Model loadZomboidModel(String name,
String mesh,
String tex,
String shader,
boolean bStatic)

**Parameters:**
- `String` `name`
- `String` `mesh`
- `String` `tex`
- `String` `shader`
- `boolean` `bStatic`

**Returns:** `Model`

### public static void setModelMetaData(String name,
String mesh,
String tex,
String shader,
boolean bStatic)

**Parameters:**
- `String` `name`
- `String` `mesh`
- `String` `tex`
- `String` `shader`
- `boolean` `bStatic`

**Returns:** `void`

### public static void reloadModelsMatching(String meshName)

**Parameters:**
- `String` `meshName`

**Returns:** `void`

### public static SLSoundManager getSLSoundManager()

**Returns:** `SLSoundManager`

### public static RadioAPI getRadioAPI()

**Returns:** `RadioAPI`

### public static IsoGameCharacter getBehaviourDebugPlayer()

**Returns:** `IsoGameCharacter`

### public static void setBehaviorStep(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public static IsoPuddles getPuddlesManager()

**Returns:** `IsoPuddles`

### public static ArrayList<AnimalDefinitions> getAllAnimalsDefinitions()

**Returns:** `ArrayList<AnimalDefinitions>`

### public static void setPuddles(float initialPuddles)

**Parameters:**
- `float` `initialPuddles`

**Returns:** `void`

### public static float fastfloor(float coord)

**Parameters:**
- `float` `coord`

**Returns:** `float`

### public static ZomboidRadio getZomboidRadio()

**Returns:** `ZomboidRadio`

### public static String getRandomUUID()

**Returns:** `String`

### public static boolean sendItemListNet(IsoPlayer sender,
ArrayList<InventoryItem> items,
IsoPlayer receiver,
String transferID,
String custom)

**Parameters:**
- `IsoPlayer` `sender`
- `ArrayList<InventoryItem>` `items`
- `IsoPlayer` `receiver`
- `String` `transferID`
- `String` `custom`

**Returns:** `boolean`

### public static se.krka.kahlua.vm.KahluaTable convertToPZNetTable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static boolean instof(Object obj,
String name)

**Parameters:**
- `Object` `obj`
- `String` `name`

**Returns:** `boolean`

### public static String typeof(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `String`

### public static String getClassSimpleName(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `String`

### public static void serverConnect(String user,
String pass,
String server,
String localIP,
String port,
String serverPassword,
String serverName,
boolean useSteamRelay,
boolean doHash,
int authtype,
String secretKey)

**Parameters:**
- `String` `user`
- `String` `pass`
- `String` `server`
- `String` `localIP`
- `String` `port`
- `String` `serverPassword`
- `String` `serverName`
- `boolean` `useSteamRelay`
- `boolean` `doHash`
- `int` `authtype`
- `String` `secretKey`

**Returns:** `void`

### public static void serverConnectCoop(String serverSteamID)

**Parameters:**
- `String` `serverSteamID`

**Returns:** `void`

### public static void sendPing()

**Returns:** `void`

### public static void connectionManagerLog(String event,
String message)

**Parameters:**
- `String` `event`
- `String` `message`

**Returns:** `void`

### public static void forceDisconnect()

**Returns:** `void`

### public static boolean checkPermissions(IsoPlayer player,
Capability capability)

**Parameters:**
- `IsoPlayer` `player`
- `Capability` `capability`

**Returns:** `boolean`

### public static void backToSinglePlayer()

**Returns:** `void`

### public static boolean isIngameState()

**Returns:** `boolean`

### public static se.krka.kahlua.vm.KahluaTable getPerformanceLocal()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable getNetworkLocal()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable getGameLocal()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable getPerformanceRemote()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable getNetworkRemote()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable getGameRemote()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static void toggleStatisticsTransmission()

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable getMPStatus()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static boolean canConnect()

**Returns:** `boolean`

### public static String getReconnectCountdownTimer()

**Returns:** `String`

### public static void sendAnimalGenome(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public static IsoAnimal addAnimal(IsoCell cell,
int x,
int y,
int z,
String animalType,
AnimalBreed breed,
boolean skeleton)

**Parameters:**
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`
- `String` `animalType`
- `AnimalBreed` `breed`
- `boolean` `skeleton`

**Returns:** `IsoAnimal`

### public static IsoAnimal addAnimal(IsoCell cell,
int x,
int y,
int z,
String animalType,
AnimalBreed breed)

**Parameters:**
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`
- `String` `animalType`
- `AnimalBreed` `breed`

**Returns:** `IsoAnimal`

### public static void removeAnimal(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public static IsoGameCharacter getFakeAttacker()

**Returns:** `IsoGameCharacter`

### @Deprecated
public static void sendHitZombie(IsoPlayer target)

> ⚠️ **Deprecated**

**Parameters:**
- `IsoPlayer` `target`

**Returns:** `void`

### @Deprecated
public static void sendHitPlayer(IsoPlayer target,
String damage,
String range)

> ⚠️ **Deprecated**

**Parameters:**
- `IsoPlayer` `target`
- `String` `damage`
- `String` `range`

**Returns:** `void`

### @Deprecated
public static void sendHitVehicle(IsoGameCharacter target,
String damage,
boolean isTargetHitFromBehind,
String vehicleSpeed)

> ⚠️ **Deprecated**

**Parameters:**
- `IsoGameCharacter` `target`
- `String` `damage`
- `boolean` `isTargetHitFromBehind`
- `String` `vehicleSpeed`

**Returns:** `void`

### public static void requestUsers()

**Returns:** `void`

### public static void requestPVPEvents()

**Returns:** `void`

### public static void clearPVPEvents()

**Returns:** `void`

### public static ArrayList<NetworkUser> getUsers()

**Returns:** `ArrayList<NetworkUser>`

### public static void networkUserAction(String action,
String username,
String additionArgument)

**Parameters:**
- `String` `action`
- `String` `username`
- `String` `additionArgument`

**Returns:** `void`

### public static void banUnbanUserAction(String action,
String username,
String additionArgument)

**Parameters:**
- `String` `action`
- `String` `username`
- `String` `additionArgument`

**Returns:** `void`

### public static void teleportUserAction(String action,
String username,
String additionArgument)

**Parameters:**
- `String` `action`
- `String` `username`
- `String` `additionArgument`

**Returns:** `void`

### public static void teleportToHimUserAction(String action,
String username,
String additionArgument)

**Parameters:**
- `String` `action`
- `String` `username`
- `String` `additionArgument`

**Returns:** `void`

### public static void requestRoles()

**Returns:** `void`

### public static ArrayList<Role> getRoles()

**Returns:** `ArrayList<Role>`

### public static ArrayList<Capability> getCapabilities()

**Returns:** `ArrayList<Capability>`

### public static void addRole(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static void setupRole(Role role,
String description,
Color color,
se.krka.kahlua.vm.KahluaTable capabilitiesRaw)

**Parameters:**
- `Role` `role`
- `String` `description`
- `Color` `color`
- `se.krka.kahlua.vm.KahluaTable` `capabilitiesRaw`

**Returns:** `void`

### public static void deleteRole(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static void setDefaultRoleFor(String defaultId,
String roleName)

**Parameters:**
- `String` `defaultId`
- `String` `roleName`

**Returns:** `void`

### public static void moveRole(byte dir,
String roleName)

**Parameters:**
- `byte` `dir`
- `String` `roleName`

**Returns:** `void`

### public static WarManager.War getWarNearest()

**Returns:** `WarManager.War`

### public static ArrayList<WarManager.War> getWars()

**Returns:** `ArrayList<WarManager.War>`

### public static IsoHutch getHutch(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoHutch`

### public static IsoAnimal getAnimal(int id)

**Parameters:**
- `int` `id`

**Returns:** `IsoAnimal`

### public static void sendAddAnimalFromHandsInTrailer(IsoAnimal animal,
IsoPlayer player,
BaseVehicle vehicle)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public static void sendAddAnimalFromHandsInTrailer(IsoDeadBody animal,
IsoPlayer player,
BaseVehicle vehicle)

**Parameters:**
- `IsoDeadBody` `animal`
- `IsoPlayer` `player`
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public static void sendAddAnimalInTrailer(IsoAnimal animal,
IsoPlayer player,
BaseVehicle vehicle)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public static void sendAddAnimalInTrailer(IsoDeadBody animal,
IsoPlayer player,
BaseVehicle vehicle)

**Parameters:**
- `IsoDeadBody` `animal`
- `IsoPlayer` `player`
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public static void sendRemoveAnimalFromTrailer(IsoAnimal animal,
IsoPlayer player,
BaseVehicle vehicle)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public static void sendRemoveAndGrabAnimalFromTrailer(IsoAnimal animal,
IsoPlayer player,
BaseVehicle vehicle,
InventoryItem item)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `BaseVehicle` `vehicle`
- `InventoryItem` `item`

**Returns:** `void`

### public static void sendRemoveAndGrabAnimalFromTrailer(IsoDeadBody animal,
IsoPlayer player,
BaseVehicle vehicle,
InventoryItem item)

**Parameters:**
- `IsoDeadBody` `animal`
- `IsoPlayer` `player`
- `BaseVehicle` `vehicle`
- `InventoryItem` `item`

**Returns:** `void`

### public static void sendPickupAnimal(IsoAnimal animal,
IsoPlayer player,
AnimalInventoryItem item)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `AnimalInventoryItem` `item`

**Returns:** `void`

### public static void sendPickupAnimalFromTrap(IsoAnimal animal,
IsoPlayer player,
AnimalInventoryItem item)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `AnimalInventoryItem` `item`

**Returns:** `void`

### public static void sendButcherAnimal(IsoDeadBody body,
IsoPlayer player)

**Parameters:**
- `IsoDeadBody` `body`
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendFeedAnimalFromHand(IsoAnimal animal,
IsoPlayer player,
InventoryItem item)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `InventoryItem` `item`

**Returns:** `void`

### public static void sendHutchGrabAnimal(IsoAnimal animal,
IsoPlayer player,
IsoObject object,
InventoryItem item)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `IsoObject` `object`
- `InventoryItem` `item`

**Returns:** `void`

### public static void sendHutchGrabCorpseAction(IsoAnimal animal,
IsoPlayer player,
IsoObject object,
InventoryItem item)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `IsoObject` `object`
- `InventoryItem` `item`

**Returns:** `void`

### public static void sendHutchRemoveAnimalAction(IsoAnimal animal,
IsoPlayer player,
IsoObject object)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`
- `IsoObject` `object`

**Returns:** `void`

### public static void sendCorpse(IsoDeadBody body)

**Parameters:**
- `IsoDeadBody` `body`

**Returns:** `void`

### public static ArrayList<Item> getAllItems()

**Returns:** `ArrayList<Item>`

### public static void scoreboardUpdate()

**Returns:** `void`

### public static void save(boolean doCharacter)

**Parameters:**
- `boolean` `doCharacter`

**Returns:** `void`

### public static void saveGame()

**Returns:** `void`

### public static ArrayList<Recipe> getAllRecipes()

**Returns:** `ArrayList<Recipe>`

### public static void requestUserlog(String user)

**Parameters:**
- `String` `user`

**Returns:** `void`

### public static void addUserlog(String user,
String type,
String text)

**Parameters:**
- `String` `user`
- `String` `type`
- `String` `text`

**Returns:** `void`

### public static void removeUserlog(String user,
String type,
String text)

**Parameters:**
- `String` `user`
- `String` `type`
- `String` `text`

**Returns:** `void`

### public static String tabToX(String a,
int tabX)

**Parameters:**
- `String` `a`
- `int` `tabX`

**Returns:** `String`

### public static boolean isType(Object obj,
String name)

**Parameters:**
- `Object` `obj`
- `String` `name`

**Returns:** `boolean`

### public static float isoToScreenX(int player,
float x,
float y,
float z)

**Parameters:**
- `int` `player`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `float`

### public static float isoToScreenY(int player,
float x,
float y,
float z)

**Parameters:**
- `int` `player`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `float`

### public static float screenToIsoX(int player,
float x,
float y,
float z)

**Parameters:**
- `int` `player`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `float`

### public static float screenToIsoY(int player,
float x,
float y,
float z)

**Parameters:**
- `int` `player`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `float`

### public static BaseAmbientStreamManager getAmbientStreamManager()

**Returns:** `BaseAmbientStreamManager`

### public static SleepingEvent getSleepingEvent()

**Returns:** `SleepingEvent`

### public static void setPlayerButtonsActive(int id,
boolean bActive)

**Parameters:**
- `int` `id`
- `boolean` `bActive`

**Returns:** `void`

### public static void setIgnoreInputsForDirection(int id,
boolean bActive)

**Parameters:**
- `int` `id`
- `boolean` `bActive`

**Returns:** `void`

### public static void setJoypadIgnoreAim(int id,
boolean bActive)

**Parameters:**
- `int` `id`
- `boolean` `bActive`

**Returns:** `void`

### public static void setJoypadIgnoreAimUntilCentered(int id,
boolean bActive)

**Parameters:**
- `int` `id`
- `boolean` `bActive`

**Returns:** `void`

### public static void setActivePlayer(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public static IsoPlayer getPlayer()

Gets the current player. To support splitscreen, getSpecificPlayer() should be preferred instead.

**Returns:** `IsoPlayer`

### public static int getNumActivePlayers()

**Returns:** `int`

### public static void playServerSound(String sound,
IsoGridSquare sq)

**Parameters:**
- `String` `sound`
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static int getMaxActivePlayers()

**Returns:** `int`

### public static int getPlayerScreenLeft(int player)

**Parameters:**
- `int` `player`

**Returns:** `int`

### public static int getPlayerScreenTop(int player)

**Parameters:**
- `int` `player`

**Returns:** `int`

### public static int getPlayerScreenWidth(int player)

**Parameters:**
- `int` `player`

**Returns:** `int`

### public static int getPlayerScreenHeight(int player)

**Parameters:**
- `int` `player`

**Returns:** `int`

### public static IsoPlayer getPlayerByOnlineID(int id)

**Parameters:**
- `int` `id`

**Returns:** `IsoPlayer`

### public static void initUISystem()

**Returns:** `void`

### public static PerformanceSettings getPerformance()

**Returns:** `PerformanceSettings`

### public static WorldSoundManager getWorldSoundManager()

**Returns:** `WorldSoundManager`

### public static AnimalChunk getAnimalChunk(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `AnimalChunk`

### public static void AddWorldSound(IsoPlayer player,
int radius,
int volume)

**Parameters:**
- `IsoPlayer` `player`
- `int` `radius`
- `int` `volume`

**Returns:** `void`

### public static void AddNoiseToken(IsoGridSquare sq,
int radius)

**Parameters:**
- `IsoGridSquare` `sq`
- `int` `radius`

**Returns:** `void`

### public static void pauseSoundAndMusic()

**Returns:** `void`

### public static void resumeSoundAndMusic()

**Returns:** `void`

### public static boolean isDemo()

**Returns:** `boolean`

### public static long getTimeInMillis()

**Returns:** `long`

### public static se.krka.kahlua.vm.Coroutine getCurrentCoroutine()

**Returns:** `se.krka.kahlua.vm.Coroutine`

### public static Object reloadLuaFile(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `Object`

### public static Object reloadServerLuaFile(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `Object`

### public static void setSpawnRegion(String spawnRegionName)

**Parameters:**
- `String` `spawnRegionName`

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable getServerSpawnRegions()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static ServerOptions getServerOptions()

**Returns:** `ServerOptions`

### public static String getServerName()

**Returns:** `String`

### public static String getServerIP()

**Returns:** `String`

### public static String getServerPort()

**Returns:** `String`

### public static boolean isShowConnectionInfo()

**Returns:** `boolean`

### public static void setShowConnectionInfo(boolean enabled)

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### public static boolean isShowServerInfo()

**Returns:** `boolean`

### public static void setShowServerInfo(boolean enabled)

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### public static IsoPlayer getSpecificPlayer(int player)

**Parameters:**
- `int` `player`

**Returns:** `IsoPlayer`

### public static float getCameraOffX()

**Returns:** `float`

### public static se.krka.kahlua.vm.KahluaTable getLatestSave()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static boolean isCurrentExecutionPoint(String file,
int line)

**Parameters:**
- `String` `file`
- `int` `line`

**Returns:** `boolean`

### public static void toggleBreakOnChange(se.krka.kahlua.vm.KahluaTable table,
Object key)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`
- `Object` `key`

**Returns:** `void`

### public static boolean isDebugEnabled()

**Returns:** `boolean`

### public static void toggleBreakOnRead(se.krka.kahlua.vm.KahluaTable table,
Object key)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`
- `Object` `key`

**Returns:** `void`

### public static void toggleBreakpoint(String file,
int line)

**Parameters:**
- `String` `file`
- `int` `line`

**Returns:** `void`

### public static void sendVisual(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendSyncPlayerFields(IsoPlayer player,
byte syncParams)

**Parameters:**
- `IsoPlayer` `player`
- `byte` `syncParams`

**Returns:** `void`

### public static void sendClothing(IsoPlayer player,
ItemBodyLocation location,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `player`
- `ItemBodyLocation` `location`
- `InventoryItem` `item`

**Returns:** `void`

### public static void syncVisuals(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void syncClothingFields(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendEquip(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendDamage(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendPlayerEffects(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendItemStats(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public static boolean hasDataReadBreakpoint(se.krka.kahlua.vm.KahluaTable table,
Object key)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`
- `Object` `key`

**Returns:** `boolean`

### public static boolean hasDataBreakpoint(se.krka.kahlua.vm.KahluaTable table,
Object key)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`
- `Object` `key`

**Returns:** `boolean`

### public static boolean hasBreakpoint(String file,
int line)

**Parameters:**
- `String` `file`
- `int` `line`

**Returns:** `boolean`

### public static int getLoadedLuaCount()

**Returns:** `int`

### public static String getLoadedLua(int n)

**Parameters:**
- `int` `n`

**Returns:** `String`

### public static boolean isServer()

**Returns:** `boolean`

### public static boolean isServerSoftReset()

**Returns:** `boolean`

### public static boolean isClient()

**Returns:** `boolean`

### public static boolean isMultiplayer()

**Returns:** `boolean`

### public static boolean canSeePlayerStats()

**Returns:** `boolean`

### @Deprecated
public static String getAccessLevel()

> ⚠️ **Deprecated**

**Returns:** `String`

### @Deprecated
public static boolean haveAccess(String access)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `access`

**Returns:** `boolean`

### public static ArrayList<IsoPlayer> getOnlinePlayers()

**Returns:** `ArrayList<IsoPlayer>`

### public static boolean getDebug()

**Returns:** `boolean`

### public static float getCameraOffY()

**Returns:** `float`

### public static se.krka.kahlua.vm.KahluaTable createRegionFile()

Create a dynamic table containing all spawnpoints.lua we find in vanilla
folder + in loaded mods

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable getMapDirectoryTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static void deleteSave(String folder)

**Parameters:**
- `String` `folder`

**Returns:** `void`

### public static void sendPlayerExtraInfo(IsoPlayer p)

**Parameters:**
- `IsoPlayer` `p`

**Returns:** `void`

### public static String getServerAddressFromArgs()

**Returns:** `String`

### public static String getServerPasswordFromArgs()

**Returns:** `String`

### @Deprecated
public static String getServerListFile()

> ⚠️ **Deprecated**

**Returns:** `String`

### public static void addServerToAccountList(Server server)

**Parameters:**
- `Server` `server`

**Returns:** `void`

### public static void updateServerToAccountList(Server server)

**Parameters:**
- `Server` `server`

**Returns:** `void`

### public static void deleteServerToAccountList(Server server)

**Parameters:**
- `Server` `server`

**Returns:** `void`

### public static void addAccountToAccountList(Server server,
Account account)

**Parameters:**
- `Server` `server`
- `Account` `account`

**Returns:** `void`

### public static void updateAccountToAccountList(Account account)

**Parameters:**
- `Account` `account`

**Returns:** `void`

### public static void deleteAccountToAccountList(Account account)

**Parameters:**
- `Account` `account`

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable getServerList()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static void ping(String username,
String pwd,
String ip,
String port,
boolean doHash)

**Parameters:**
- `String` `username`
- `String` `pwd`
- `String` `ip`
- `String` `port`
- `boolean` `doHash`

**Returns:** `void`

### public static void getCustomizationData(String username,
String pwd,
String ip,
String port,
String serverPassword,
String serverName,
boolean doHash)

**Parameters:**
- `String` `username`
- `String` `pwd`
- `String` `ip`
- `String` `port`
- `String` `serverPassword`
- `String` `serverName`
- `boolean` `doHash`

**Returns:** `void`

### public static CombatConfig getCombatConfig()

**Returns:** `CombatConfig`

### public static void stopPing()

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable transformIntoKahluaTable(HashMap<Object,Object> map)

**Parameters:**
- `HashMap<Object,Object>` `map`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static ArrayList<File> getSaveDirectory(String folder)

**Parameters:**
- `String` `folder`

**Returns:** `ArrayList<File>`

### public static se.krka.kahlua.vm.KahluaTable getFullSaveDirectoryTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static String getSaveName(File file)

**Parameters:**
- `File` `file`

**Returns:** `String`

### public static se.krka.kahlua.vm.KahluaTable getSaveDirectoryTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static String getCurrentSaveName()

**Returns:** `String`

### public static List<String> getMods()

**Returns:** `List<String>`

### public static void doChallenge(se.krka.kahlua.vm.KahluaTable challenge)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `challenge`

**Returns:** `void`

### public static void doTutorial(se.krka.kahlua.vm.KahluaTable tutorial)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `tutorial`

**Returns:** `void`

### public static void setMinMaxZombiesPerChunk(float min,
float max)

**Parameters:**
- `float` `min`
- `float` `max`

**Returns:** `void`

### public static void deleteAllGameModeSaves(String gameMode)

**Parameters:**
- `String` `gameMode`

**Returns:** `void`

### public static void sledgeDestroy(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public static void getBannedIPs()

**Returns:** `void`

### public static void getBannedSteamIDs()

**Returns:** `void`

### public static void getTickets(String author)

**Parameters:**
- `String` `author`

**Returns:** `void`

### public static void addTicket(String author,
String message,
int ticketID)

**Parameters:**
- `String` `author`
- `String` `message`
- `int` `ticketID`

**Returns:** `void`

### public static void viewedTicket(String author,
int ticketID)

**Parameters:**
- `String` `author`
- `int` `ticketID`

**Returns:** `void`

### public static void removeTicket(int ticketID)

**Parameters:**
- `int` `ticketID`

**Returns:** `void`

### public static void acceptFactionInvite(Faction faction,
String host,
String invited,
boolean isAccepted)

**Parameters:**
- `Faction` `faction`
- `String` `host`
- `String` `invited`
- `boolean` `isAccepted`

**Returns:** `void`

### public static void sendFactionChangeOwner(Faction faction,
String username)

**Parameters:**
- `Faction` `faction`
- `String` `username`

**Returns:** `void`

### public static void sendFactionChangeTag(Faction faction)

**Parameters:**
- `Faction` `faction`

**Returns:** `void`

### public static void sendFactionChangeTitle(Faction faction,
String title)

**Parameters:**
- `Faction` `faction`
- `String` `title`

**Returns:** `void`

### public static void sendFactionCreate(String title,
String host)

**Parameters:**
- `String` `title`
- `String` `host`

**Returns:** `void`

### public static void sendFactionDisband(Faction faction)

**Parameters:**
- `Faction` `faction`

**Returns:** `void`

### public static void sendFactionInvite(Faction faction,
String host,
String invited)

**Parameters:**
- `Faction` `faction`
- `String` `host`
- `String` `invited`

**Returns:** `void`

### public static void sendFactionRemoveMember(Faction faction,
String username)

**Parameters:**
- `Faction` `faction`
- `String` `username`

**Returns:** `void`

### public static void sendFactionStatsChange(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendSafehouseInvite(SafeHouse safehouse,
String host,
String invited)

**Parameters:**
- `SafeHouse` `safehouse`
- `String` `host`
- `String` `invited`

**Returns:** `void`

### public static void acceptSafehouseInvite(SafeHouse safehouse,
String host,
String invited,
boolean isAccepted)

**Parameters:**
- `SafeHouse` `safehouse`
- `String` `host`
- `String` `invited`
- `boolean` `isAccepted`

**Returns:** `void`

### public static void sendSafehouseChangeMember(SafeHouse safehouse,
String player)

**Parameters:**
- `SafeHouse` `safehouse`
- `String` `player`

**Returns:** `void`

### public static void sendSafehouseChangeOwner(SafeHouse safehouse,
String username)

**Parameters:**
- `SafeHouse` `safehouse`
- `String` `username`

**Returns:** `void`

### public static void sendSafehouseChangeRespawn(SafeHouse safehouse,
String player,
boolean doRemove)

**Parameters:**
- `SafeHouse` `safehouse`
- `String` `player`
- `boolean` `doRemove`

**Returns:** `void`

### public static void sendSafehouseChangeTitle(SafeHouse safehouse,
String title)

**Parameters:**
- `SafeHouse` `safehouse`
- `String` `title`

**Returns:** `void`

### public static void sendSafezoneClaim(String username,
int x,
int y,
int h,
int w,
String title)

**Parameters:**
- `String` `username`
- `int` `x`
- `int` `y`
- `int` `h`
- `int` `w`
- `String` `title`

**Returns:** `void`

### public static void sendSafehouseClaim(IsoGridSquare square,
IsoPlayer player,
String title)

**Parameters:**
- `IsoGridSquare` `square`
- `IsoPlayer` `player`
- `String` `title`

**Returns:** `void`

### public static void sendSafehouseRelease(SafeHouse safehouse)

**Parameters:**
- `SafeHouse` `safehouse`

**Returns:** `void`

### public static void createHordeFromTo(float spawnX,
float spawnY,
float targetX,
float targetY,
int count)

**Parameters:**
- `float` `spawnX`
- `float` `spawnY`
- `float` `targetX`
- `float` `targetY`
- `int` `count`

**Returns:** `void`

### public static void createHordeInAreaTo(int spawnX,
int spawnY,
int spawnW,
int spawnH,
int targetX,
int targetY,
int count)

**Parameters:**
- `int` `spawnX`
- `int` `spawnY`
- `int` `spawnW`
- `int` `spawnH`
- `int` `targetX`
- `int` `targetY`
- `int` `count`

**Returns:** `void`

### public static void spawnHorde(float x,
float y,
float x2,
float y2,
float z,
int count)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `x2`
- `float` `y2`
- `float` `z`
- `int` `count`

**Returns:** `void`

### public static IsoZombie createZombie(float x,
float y,
float z,
SurvivorDesc desc,
int palette,
IsoDirections dir)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `SurvivorDesc` `desc`
- `int` `palette`
- `IsoDirections` `dir`

**Returns:** `IsoZombie`

### public static void triggerEvent(String event)

**Parameters:**
- `String` `event`

**Returns:** `void`

### public static void triggerEvent(String event,
Object param)

**Parameters:**
- `String` `event`
- `Object` `param`

**Returns:** `void`

### public static void triggerEvent(String event,
Object param,
Object param2)

**Parameters:**
- `String` `event`
- `Object` `param`
- `Object` `param2`

**Returns:** `void`

### public static void triggerEvent(String event,
Object param,
Object param2,
Object param3)

**Parameters:**
- `String` `event`
- `Object` `param`
- `Object` `param2`
- `Object` `param3`

**Returns:** `void`

### public static void triggerEvent(String event,
Object param,
Object param2,
Object param3,
Object param4)

**Parameters:**
- `String` `event`
- `Object` `param`
- `Object` `param2`
- `Object` `param3`
- `Object` `param4`

**Returns:** `void`

### public static void debugLuaTable(Object param,
int depth)

**Parameters:**
- `Object` `param`
- `int` `depth`

**Returns:** `void`

### public static void debugLuaTable(Object param)

**Parameters:**
- `Object` `param`

**Returns:** `void`

### public static void sendItemsInContainer(IsoObject obj,
ItemContainer container)

**Parameters:**
- `IsoObject` `obj`
- `ItemContainer` `container`

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable getModDirectoryTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static ChooseGameInfo.Mod getModInfoByID(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `ChooseGameInfo.Mod`

### public static ChooseGameInfo.Mod getModInfo(String modDir)

**Parameters:**
- `String` `modDir`

**Returns:** `ChooseGameInfo.Mod`

### public static ArrayList<String> getMapFoldersForMod(String modID)

**Parameters:**
- `String` `modID`

**Returns:** `ArrayList<String>`

### public static boolean spawnpointsExistsForMod(String modID,
String mapFolder)

**Parameters:**
- `String` `modID`
- `String` `mapFolder`

**Returns:** `boolean`

### public static String getFileSeparator()

Returns the OS-defined file separator. It is not generally needed to use this, as most functions that expect a filepath string will parse them in an OS-independent way.

**Returns:** `String`

### public static ScriptManager getScriptManager()

**Returns:** `ScriptManager`

### public static boolean checkSaveFolderExists(String f)

**Parameters:**
- `String` `f`

**Returns:** `boolean`

### public static String getAbsoluteSaveFolderName(String f)

**Parameters:**
- `String` `f`

**Returns:** `String`

### public static boolean checkSaveFileExists(String f)

**Parameters:**
- `String` `f`

**Returns:** `boolean`

### public static boolean checkSavePlayerExists()

**Returns:** `boolean`

### public static boolean cacheFileExists(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `boolean`

### public static boolean fileExists(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `boolean`

### public static boolean serverFileExists(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `boolean`

### public static void takeScreenshot()

**Returns:** `void`

### public static void takeScreenshot(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `void`

### public static boolean checkStringPattern(String pattern)

**Parameters:**
- `String` `pattern`

**Returns:** `boolean`

### public static InventoryItem instanceItem(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `InventoryItem`

### public static InventoryItem instanceItem(String item)

**Parameters:**
- `String` `item`

**Returns:** `InventoryItem`

### public static InventoryItem instanceItem(String item,
float useDelta)

**Parameters:**
- `String` `item`
- `float` `useDelta`

**Returns:** `InventoryItem`

### public static InventoryItem instanceItem(ItemKey item)

**Parameters:**
- `ItemKey` `item`

**Returns:** `InventoryItem`

### public static Item createNewScriptItem(String base,
String name,
String display,
String type,
String icon)

**Parameters:**
- `String` `base`
- `String` `name`
- `String` `display`
- `String` `type`
- `String` `icon`

**Returns:** `Item`

### public static Item cloneItemType(String newName,
String oldName)

**Parameters:**
- `String` `newName`
- `String` `oldName`

**Returns:** `Item`

### public static String moduleDotType(String module,
String type)

**Parameters:**
- `String` `module`
- `String` `type`

**Returns:** `String`

### public static Object require(String f)

**Parameters:**
- `String` `f`

**Returns:** `Object`

### public static SpriteRenderer getRenderer()

**Returns:** `SpriteRenderer`

### public static GameTime getGameTime()

**Returns:** `GameTime`

### public static Double getMaxPlayers()

**Returns:** `Double`

### public static void callLua(String func,
Object param1)

**Parameters:**
- `String` `func`
- `Object` `param1`

**Returns:** `void`

### public static ArrayList<Object> callLuaReturn(String func,
ArrayList<Object> params)

**Parameters:**
- `String` `func`
- `ArrayList<Object>` `params`

**Returns:** `ArrayList<Object>`

### public static Boolean callLuaBool(String func,
Object params)

**Parameters:**
- `String` `func`
- `Object` `params`

**Returns:** `Boolean`

### public static IsoWorld getWorld()

**Returns:** `IsoWorld`

### public static IsoCell getCell()

**Returns:** `IsoCell`

### public static Double getCellSizeInChunks()

**Returns:** `Double`

### public static Double getCellSizeInSquares()

**Returns:** `Double`

### public static Double getChunkSizeInSquares()

**Returns:** `Double`

### public static Double getMinimumWorldLevel()

**Returns:** `Double`

### public static Double getMaximumWorldLevel()

**Returns:** `Double`

### public static SandboxOptions getSandboxOptions()

**Returns:** `SandboxOptions`

### public static DataOutputStream getFileOutput(String filename)

Gets an output stream for a file in the Lua cache.

**Parameters:**
- `String` `filename` — Path, relative to the Lua cache root, to write to. '..' is not allowed.

**Returns:** `DataOutputStream`

### public static String getLastStandPlayersDirectory()

**Returns:** `String`

### public static List<String> getLastStandPlayerFileNames()

**Returns:** `List<String>`

### @Deprecated
public static List<BufferedReader> getAllSavedPlayers()
throws IOException

> ⚠️ **Deprecated**

**Returns:** `List<BufferedReader>`

### public static List<String> getSandboxPresets()

**Returns:** `List<String>`

### public static void deleteSandboxPreset(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static BufferedReader getFileReader(String filename,
boolean createIfNull)
throws IOException

Gets a file reader for a file in the Lua cache.

**Parameters:**
- `String` `filename` — Path, relative to the Lua cache root, to read from. '..' is not allowed.
- `boolean` `createIfNull` — Whether to create the file if it does not exist. The created file will be empty.

**Returns:** `BufferedReader`

### public static BufferedReader getModFileReader(String modId,
String filename,
boolean createIfNull)
throws IOException

Gets a file reader for a file in a mod's directory.

**Parameters:**
- `String` `modId` — ID of the target mod. If null, the path will be relative to the local mods directory.
- `String` `filename` — Path, relative to the mod's common folder, to read from. '..' is not allowed.
- `boolean` `createIfNull` — Whether to create the file if it does not exist. The created file will be empty.

**Returns:** `BufferedReader`

### public static ArrayList<String> listFilesInZomboidLuaDirectory(String directory)
throws IOException

**Parameters:**
- `String` `directory`

**Returns:** `ArrayList<String>`

### public static ArrayList<String> listFilesInModDirectory(String modID,
String directory)
throws IOException

**Parameters:**
- `String` `modID`
- `String` `directory`

**Returns:** `ArrayList<String>`

### public static void refreshAnimSets(boolean reload)

**Parameters:**
- `boolean` `reload`

**Returns:** `void`

### public static void reloadActionGroups()

**Returns:** `void`

### public static LuaManager.GlobalObject.LuaFileWriter getModFileWriter(String modId,
String filename,
boolean createIfNull,
boolean append)

Gets a file writer for a file in a mod's directory. Note: it is generally unwise to write to a mod's lua or scripts directories, as this will change the checksum.

**Parameters:**
- `String` `modId` — ID of the target mod. If null, the path will be relative to the local mods directory.
- `String` `filename` — Path, relative to the mod's common folder, to write to. '..' is not allowed.
- `boolean` `createIfNull` — Whether to create the file if it does not exist. The created file will be empty.
- `boolean` `append` — Whether to open the file in append mode. If true, the writer will write after the file's current contents. If false, the current contents of the file will be erased.

**Returns:** `LuaManager.GlobalObject.LuaFileWriter`

### public static void updateFire()

**Returns:** `void`

### public static void deletePlayerFromDatabase(String savedir,
String player,
String world)

**Parameters:**
- `String` `savedir`
- `String` `player`
- `String` `world`

**Returns:** `void`

### public static boolean checkPlayerExistsInDatabase(String savedir,
String player,
String world)

**Parameters:**
- `String` `savedir`
- `String` `player`
- `String` `world`

**Returns:** `boolean`

### public static void deletePlayerSave(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `void`

### public static int getControllerCount()

**Returns:** `int`

### public static boolean isControllerConnected(int index)

**Parameters:**
- `int` `index`

**Returns:** `boolean`

### public static String getControllerGUID(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `String`

### public static String getControllerName(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `String`

### public static float getControllerAxisValue(int c,
int axis)

**Parameters:**
- `int` `c`
- `int` `axis`

**Returns:** `float`

### public static float getControllerDeadZone(int c,
int axis)

**Parameters:**
- `int` `c`
- `int` `axis`

**Returns:** `float`

### public static void setControllerDeadZone(int c,
int axis,
float value)

**Parameters:**
- `int` `c`
- `int` `axis`
- `float` `value`

**Returns:** `void`

### public static void saveControllerSettings(int c)

**Parameters:**
- `int` `c`

**Returns:** `void`

### public static float getControllerPovX(int c)

**Parameters:**
- `int` `c`

**Returns:** `float`

### public static float getControllerPovY(int c)

**Parameters:**
- `int` `c`

**Returns:** `float`

### public static void reloadControllerConfigFiles()

**Returns:** `void`

### public static boolean isJoypadDown(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `boolean`

### public static boolean isJoypadLTPressed(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `boolean`

### public static boolean isJoypadRTPressed(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `boolean`

### public static boolean isJoypadLeftStickButtonPressed(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `boolean`

### public static boolean isJoypadRightStickButtonPressed(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `boolean`

### public static float getJoypadAimingAxisX(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `float`

### public static float getJoypadAimingAxisY(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `float`

### public static float getJoypadMovementAxisX(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `float`

### public static float getJoypadMovementAxisY(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `float`

### public static boolean wasMouseActiveMoreRecentlyThanJoypad()

**Returns:** `boolean`

### public static void activateJoypadOnSteamDeck()

**Returns:** `void`

### public static boolean reactivateJoypadAfterResetLua()

**Returns:** `boolean`

### public static boolean isJoypadConnected(int index)

**Parameters:**
- `int` `index`

**Returns:** `boolean`

### public static int toInt(double val)

**Parameters:**
- `double` `val`

**Returns:** `int`

### public static String getClientUsername()

**Returns:** `String`

### public static void setPlayerJoypad(int player,
int joypad,
IsoPlayer playerObj,
String username,
boolean allowNewPlayer)

**Parameters:**
- `int` `player`
- `int` `joypad`
- `IsoPlayer` `playerObj`
- `String` `username`
- `boolean` `allowNewPlayer`

**Returns:** `void`

### public static void setPlayerMouse(IsoPlayer playerObj)

**Parameters:**
- `IsoPlayer` `playerObj`

**Returns:** `void`

### public static void revertToKeyboardAndMouse()

**Returns:** `void`

### public static void revertToKeyboardAndMouseFromMainMenu()

**Returns:** `void`

### public static boolean isJoypadUp(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `boolean`

### public static boolean isJoypadLeft(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `boolean`

### public static boolean isJoypadRight(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `boolean`

### public static boolean isJoypadLBPressed(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `boolean`

### public static boolean isJoypadRBPressed(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `boolean`

### public static int getButtonCount(int joypad)

**Parameters:**
- `int` `joypad`

**Returns:** `int`

### public static void setDebugToggleControllerPluggedIn(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public static String lineSeparator()

**Returns:** `String`

### public static LuaManager.GlobalObject.LuaFileWriter getFileWriter(String filename,
boolean createIfNull,
boolean append)

Gets a file writer for a file in the Lua cache.

**Parameters:**
- `String` `filename` — Path, relative to the Lua cache root, to write to. '..' is not allowed.
- `boolean` `createIfNull` — Whether to create the file if it does not exist.
- `boolean` `append` — Whether to open the file in append mode. If true, the writer will write after the file's current contents. If false, the current contents of the file will be erased.

**Returns:** `LuaManager.GlobalObject.LuaFileWriter`

### public static void createStory(String storyName)

**Parameters:**
- `String` `storyName`

**Returns:** `void`

### public static void createWorld(String worldName)

**Parameters:**
- `String` `worldName`

**Returns:** `void`

### public static String sanitizeWorldName(String worldName)

**Parameters:**
- `String` `worldName`

**Returns:** `String`

### public static void forceChangeState(GameState state)

**Parameters:**
- `GameState` `state`

**Returns:** `void`

### public static void endFileOutput()

**Returns:** `void`

### public static DataInputStream getFileInput(String filename)

Gets an input stream for a file in the Lua cache.

**Parameters:**
- `String` `filename` — Path, relative to the Lua cache root, to write to. '..' is not allowed.

**Returns:** `DataInputStream`

### public static DataInputStream getGameFilesInput(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `DataInputStream`

### public static BufferedReader getGameFilesTextInput(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `BufferedReader`

### public static void endTextFileInput()

**Returns:** `void`

### public static void endFileInput()

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable getFunctionsForFile(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static int getLineNumber(se.krka.kahlua.vm.LuaCallFrame c)

**Parameters:**
- `se.krka.kahlua.vm.LuaCallFrame` `c`

**Returns:** `int`

### public static double ZombRand(double max)

Returns a pseudorandom integer between 0 and max - 1.

**Parameters:**
- `double` `max` — Exclusive upper bound of the integer value.

**Returns:** `double`

### public static double ZombRandBetween(double min,
double max)

Returns a pseudorandom integer between min and max - 1. No difference from ZombRand(min, max).

**Parameters:**
- `double` `min` — Inclusive lower bound of the random integer.
- `double` `max` — Exclusive upper bound of the random integer.

**Returns:** `double`

### public static double ZombRand(double min,
double max)

Returns a pseudorandom integer between min and max - 1.

**Parameters:**
- `double` `min` — Inclusive lower bound of the random integer.
- `double` `max` — Exclusive upper bound of the random integer.

**Returns:** `double`

### public static float ZombRandFloat(float min,
float max)

Returns a pseudorandom float between min and max.

**Parameters:**
- `float` `min` — Lower bound of the random float.
- `float` `max` — The upper bound of the random float.

**Returns:** `float`

### public static String getShortenedFilename(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

### public static boolean isKeyDown(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean isKeyDown(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `boolean`

### public static boolean wasKeyDown(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean wasKeyDown(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `boolean`

### public static boolean isKeyPressed(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean isKeyPressed(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `boolean`

### public static BaseSoundBank getBaseSoundBank()

**Returns:** `BaseSoundBank`

### public static BaseSoundBank getFMODSoundBank()

**Returns:** `BaseSoundBank`

### public static boolean isSoundPlaying(Object sound)

**Parameters:**
- `Object` `sound`

**Returns:** `boolean`

### public static void stopSound(long sound)

**Parameters:**
- `long` `sound`

**Returns:** `void`

### public static boolean isShiftKeyDown()

**Returns:** `boolean`

### public static boolean isCtrlKeyDown()

**Returns:** `boolean`

### public static boolean isAltKeyDown()

**Returns:** `boolean`

### public static boolean isMetaKeyDown()

**Returns:** `boolean`

### public static void setZoomLevels(Double... zooms)

**Parameters:**
- `Double...` `zooms`

**Returns:** `void`

### public static Core getCore()

**Returns:** `Core`

### public static boolean isAnimationRecorderActive()

**Returns:** `boolean`

### public static void setAnimationRecorderActive(boolean setActive)

**Parameters:**
- `boolean` `setActive`

**Returns:** `void`

### public static String getISUIStackTrace(int maxDepth)

**Parameters:**
- `int` `maxDepth`

**Returns:** `String`

### public static String getGameVersion()

**Returns:** `String`

### public static GameVersion getBreakModGameVersion()

**Returns:** `GameVersion`

### public static IsoGridSquare getSquare(double x,
double y,
double z)

**Parameters:**
- `double` `x`
- `double` `y`
- `double` `z`

**Returns:** `IsoGridSquare`

### public static DebugOptions getDebugOptions()

**Returns:** `DebugOptions`

### public static void setShowPausedMessage(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public static String getFilenameOfCallframe(se.krka.kahlua.vm.LuaCallFrame c)

**Parameters:**
- `se.krka.kahlua.vm.LuaCallFrame` `c`

**Returns:** `String`

### public static String getFilenameOfClosure(se.krka.kahlua.vm.LuaClosure c)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `c`

**Returns:** `String`

### public static int getFirstLineOfClosure(se.krka.kahlua.vm.LuaClosure c)

**Parameters:**
- `se.krka.kahlua.vm.LuaClosure` `c`

**Returns:** `int`

### public static int getLocalVarCount(se.krka.kahlua.vm.Coroutine c)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `c`

**Returns:** `int`

### public static int getLocalVarCount(se.krka.kahlua.vm.LuaCallFrame callFrame)

**Parameters:**
- `se.krka.kahlua.vm.LuaCallFrame` `callFrame`

**Returns:** `int`

### public static boolean isSystemLinux()

**Returns:** `boolean`

### public static boolean isSystemMacOS()

**Returns:** `boolean`

### public static boolean isSystemWindows()

**Returns:** `boolean`

### public static boolean isModActive(ChooseGameInfo.Mod mod)

**Parameters:**
- `ChooseGameInfo.Mod` `mod`

**Returns:** `boolean`

### public static void openURl(String url)

**Parameters:**
- `String` `url`

**Returns:** `void`

### public static boolean isDesktopOpenSupported()

**Returns:** `boolean`

### public static void showFolderInDesktop(String folder)

**Parameters:**
- `String` `folder`

**Returns:** `void`

### public static ArrayList<String> getActivatedMods()

Gets the list of currently activated mods. Remember that in B42+, mod ids are prefixed with a \ character.

**Returns:** `ArrayList<String>`

### public static void toggleModActive(ChooseGameInfo.Mod mod,
boolean active)

**Parameters:**
- `ChooseGameInfo.Mod` `mod`
- `boolean` `active`

**Returns:** `void`

### public static void saveModsFile()

**Returns:** `void`

### public static void manipulateSavefile(String folder,
String action)

**Parameters:**
- `String` `folder`
- `String` `action`

**Returns:** `void`

### public static String getLocalVarName(se.krka.kahlua.vm.Coroutine c,
int n)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `c`
- `int` `n`

**Returns:** `String`

### public static String getLocalVarName(se.krka.kahlua.vm.LuaCallFrame callFrame,
int n)

**Parameters:**
- `se.krka.kahlua.vm.LuaCallFrame` `callFrame`
- `int` `n`

**Returns:** `String`

### public static int getLocalVarStack(se.krka.kahlua.vm.Coroutine c,
int n)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `c`
- `int` `n`

**Returns:** `int`

### public static int getLocalVarStackIndex(se.krka.kahlua.vm.LuaCallFrame callFrame,
int n)

**Parameters:**
- `se.krka.kahlua.vm.LuaCallFrame` `callFrame`
- `int` `n`

**Returns:** `int`

### public static int getCallframeTop(se.krka.kahlua.vm.Coroutine c)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `c`

**Returns:** `int`

### public static int getCoroutineTop(se.krka.kahlua.vm.Coroutine c)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `c`

**Returns:** `int`

### public static Object getCoroutineObjStack(se.krka.kahlua.vm.Coroutine c,
int n)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `c`
- `int` `n`

**Returns:** `Object`

### public static Object getCoroutineObjStackWithBase(se.krka.kahlua.vm.Coroutine c,
int n)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `c`
- `int` `n`

**Returns:** `Object`

### public static String localVarName(se.krka.kahlua.vm.Coroutine c,
int n)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `c`
- `int` `n`

**Returns:** `String`

### public static se.krka.kahlua.vm.LuaCallFrame getCoroutineCallframeStack(se.krka.kahlua.vm.Coroutine c,
int n)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `c`
- `int` `n`

**Returns:** `se.krka.kahlua.vm.LuaCallFrame`

### public static ArrayList<String> getLuaStackTrace()

**Returns:** `ArrayList<String>`

### public static void createTile(String tile,
IsoGridSquare square)

**Parameters:**
- `String` `tile`
- `IsoGridSquare` `square`

**Returns:** `void`

### public static int getNumClassFunctions(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `int`

### public static Method getClassFunction(Object o,
int i)

**Parameters:**
- `Object` `o`
- `int` `i`

**Returns:** `Method`

### public static int getNumClassFields(Object o)

**Parameters:**
- `Object` `o`

**Returns:** `int`

### public static Field getClassField(Object o,
int i)

**Parameters:**
- `Object` `o`
- `int` `i`

**Returns:** `Field`

### public static IsoDirections getDirectionTo(IsoGameCharacter chara,
IsoObject objTarget)

**Parameters:**
- `IsoGameCharacter` `chara`
- `IsoObject` `objTarget`

**Returns:** `IsoDirections`

### public static float translatePointXInOverheadMapToWindow(float x,
UIElement ui,
float zoom,
float xpos)

**Parameters:**
- `float` `x`
- `UIElement` `ui`
- `float` `zoom`
- `float` `xpos`

**Returns:** `float`

### public static float translatePointYInOverheadMapToWindow(float y,
UIElement ui,
float zoom,
float ypos)

**Parameters:**
- `float` `y`
- `UIElement` `ui`
- `float` `zoom`
- `float` `ypos`

**Returns:** `float`

### public static float translatePointXInOverheadMapToWorld(float x,
UIElement ui,
float zoom,
float xpos)

**Parameters:**
- `float` `x`
- `UIElement` `ui`
- `float` `zoom`
- `float` `xpos`

**Returns:** `float`

### public static float translatePointYInOverheadMapToWorld(float y,
UIElement ui,
float zoom,
float ypos)

**Parameters:**
- `float` `y`
- `UIElement` `ui`
- `float` `zoom`
- `float` `ypos`

**Returns:** `float`

### public static void drawOverheadMap(UIElement ui,
int level,
float zoom,
float xpos,
float ypos)

**Parameters:**
- `UIElement` `ui`
- `int` `level`
- `float` `zoom`
- `float` `xpos`
- `float` `ypos`

**Returns:** `void`

### public static void assaultPlayer()

**Returns:** `void`

### public static IsoRegionsRenderer isoRegionsRenderer()

**Returns:** `IsoRegionsRenderer`

### public static ZombiePopulationRenderer zpopNewRenderer()

**Returns:** `ZombiePopulationRenderer`

### public static void zpopSpawnTimeToZero(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public static void zpopClearZombies(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public static void zpopSpawnNow(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public static void addVirtualZombie(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public static void luaDebug()

**Returns:** `void`

### public static void setAggroTarget(int id,
int x,
int y)

**Parameters:**
- `int` `id`
- `int` `x`
- `int` `y`

**Returns:** `void`

### public static void debugFullyStreamedIn(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public static Object getClassFieldVal(Object o,
Field field)

**Parameters:**
- `Object` `o`
- `Field` `field`

**Returns:** `Object`

### public static String getMethodParameter(Method o,
int i)

**Parameters:**
- `Method` `o`
- `int` `i`

**Returns:** `String`

### public static int getMethodParameterCount(Method o)

**Parameters:**
- `Method` `o`

**Returns:** `int`

### public static void breakpoint()

**Returns:** `void`

### public static int getLuaDebuggerErrorCount()

**Returns:** `int`

### public static ArrayList<String> getLuaDebuggerErrors()

**Returns:** `ArrayList<String>`

### public static void doLuaDebuggerAction(String action)

**Parameters:**
- `String` `action`

**Returns:** `void`

### public static boolean isQuitCooldown()

**Returns:** `boolean`

### public static int getGameSpeed()

**Returns:** `int`

### public static void setGameSpeed(int newSpeed)

**Parameters:**
- `int` `newSpeed`

**Returns:** `void`

### public static void stepForward()

**Returns:** `void`

### public static boolean isGamePaused()

**Returns:** `boolean`

### public static int getMouseXScaled()

**Returns:** `int`

### public static int getMouseYScaled()

**Returns:** `int`

### public static int getMouseX()

**Returns:** `int`

### public static void setMouseXY(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public static boolean isMouseButtonDown(int number)

**Parameters:**
- `int` `number`

**Returns:** `boolean`

### public static boolean isMouseButtonPressed(int number)

**Parameters:**
- `int` `number`

**Returns:** `boolean`

### public static int getMouseY()

**Returns:** `int`

### public static BaseSoundManager getSoundManager()

**Returns:** `BaseSoundManager`

### public static String getLastPlayedDate(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `String`

### public static Texture getTextureFromSaveDir(String filename,
String saveName)

**Parameters:**
- `String` `filename`
- `String` `saveName`

**Returns:** `Texture`

### public static se.krka.kahlua.vm.KahluaTable getSaveInfo(String saveDir)

**Parameters:**
- `String` `saveDir`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static boolean renameSaveFile(String gameMode,
String oldName,
String newName)

**Parameters:**
- `String` `gameMode`
- `String` `oldName`
- `String` `newName`

**Returns:** `boolean`

### public static void setSavefilePlayer1(String gameMode,
String saveDir,
int sqlID)

**Parameters:**
- `String` `gameMode`
- `String` `saveDir`
- `int` `sqlID`

**Returns:** `void`

### public static int getServerSavedWorldVersion(String saveFolder)

**Parameters:**
- `String` `saveFolder`

**Returns:** `int`

### public static se.krka.kahlua.vm.KahluaTable getZombieInfo(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable getPlayerInfo(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable getMapInfo(String mapDir)

**Parameters:**
- `String` `mapDir`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable getVehicleInfo(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static ArrayList<String> getLotDirectories()

**Returns:** `ArrayList<String>`

### public static void useTextureFiltering(boolean bUse)

**Parameters:**
- `boolean` `bUse`

**Returns:** `void`

### public static Texture getTexture(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `Texture`

### public static Texture tryGetTexture(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `Texture`

### public static void sendSecretKey(String username,
String pwd,
String ip,
int port,
String serverPassword,
boolean doHash,
int authType,
String secretKey)

**Parameters:**
- `String` `username`
- `String` `pwd`
- `String` `ip`
- `int` `port`
- `String` `serverPassword`
- `boolean` `doHash`
- `int` `authType`
- `String` `secretKey`

**Returns:** `void`

### public static void stopSendSecretKey()

**Returns:** `void`

### public static String generateSecretKey()

**Returns:** `String`

### public static void sendGoogleAuth(String username,
String code)

**Parameters:**
- `String` `username`
- `String` `code`

**Returns:** `void`

### public static Texture createQRCodeTex(String user,
String key)
throws com.google.zxing.WriterException,
IOException

**Parameters:**
- `String` `user`
- `String` `key`

**Returns:** `Texture`

### public static VideoTexture getVideo(String filename,
int width,
int height)

**Parameters:**
- `String` `filename`
- `int` `width`
- `int` `height`

**Returns:** `VideoTexture`

### public static TextManager getTextManager()

**Returns:** `TextManager`

### public static void setProgressBarValue(IsoPlayer player,
int value)

**Parameters:**
- `IsoPlayer` `player`
- `int` `value`

**Returns:** `void`

### public static String getText(String txt)

**Parameters:**
- `String` `txt`

**Returns:** `String`

### public static String getText(String txt,
Object arg1)

**Parameters:**
- `String` `txt`
- `Object` `arg1`

**Returns:** `String`

### public static String getText(String txt,
Object arg1,
Object arg2)

**Parameters:**
- `String` `txt`
- `Object` `arg1`
- `Object` `arg2`

**Returns:** `String`

### public static String getText(String txt,
Object arg1,
Object arg2,
Object arg3)

**Parameters:**
- `String` `txt`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`

**Returns:** `String`

### public static String getText(String txt,
Object arg1,
Object arg2,
Object arg3,
Object arg4)

**Parameters:**
- `String` `txt`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`
- `Object` `arg4`

**Returns:** `String`

### public static String getTextList(String txt,
List<String> args)

**Parameters:**
- `String` `txt`
- `List<String>` `args`

**Returns:** `String`

### public static String getTextOrNull(String txt)

**Parameters:**
- `String` `txt`

**Returns:** `String`

### public static String getTextOrNull(String txt,
Object arg1)

**Parameters:**
- `String` `txt`
- `Object` `arg1`

**Returns:** `String`

### public static String getTextOrNull(String txt,
Object arg1,
Object arg2)

**Parameters:**
- `String` `txt`
- `Object` `arg1`
- `Object` `arg2`

**Returns:** `String`

### public static String getTextOrNull(String txt,
Object arg1,
Object arg2,
Object arg3)

**Parameters:**
- `String` `txt`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`

**Returns:** `String`

### public static String getTextOrNull(String txt,
Object arg1,
Object arg2,
Object arg3,
Object arg4)

**Parameters:**
- `String` `txt`
- `Object` `arg1`
- `Object` `arg2`
- `Object` `arg3`
- `Object` `arg4`

**Returns:** `String`

### public static String getItemText(String txt)

**Parameters:**
- `String` `txt`

**Returns:** `String`

### public static String getRadioText(String txt)

**Parameters:**
- `String` `txt`

**Returns:** `String`

### public static String getTextMediaEN(String txt)

**Parameters:**
- `String` `txt`

**Returns:** `String`

### public static String getItemNameFromFullType(String fullType)

**Parameters:**
- `String` `fullType`

**Returns:** `String`

### public static Item getItem(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `Item`

### public static String getItemStaticModel(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `String`

### public static boolean isItemFood(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `boolean`

### public static String getItemFoodType(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `String`

### public static boolean isItemFresh(String itemType,
float age)

**Parameters:**
- `String` `itemType`
- `float` `age`

**Returns:** `boolean`

### public static int getItemCount(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `int`

### public static float getItemWeight(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `float`

### public static float getItemActualWeight(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `float`

### public static int getItemConditionMax(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `int`

### public static String getItemEvolvedRecipeName(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `String`

### public static boolean hasItemTag(String itemType,
ItemTag itemTag)

**Parameters:**
- `String` `itemType`
- `ItemTag` `itemTag`

**Returns:** `boolean`

### public static String getItemDisplayName(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `String`

### public static String getItemName(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `String`

### public static String getItemTextureName(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `String`

### public static ArrayList<AnimalTracks> getAndFindNearestTracks(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `ArrayList<AnimalTracks>`

### public static Texture getItemTex(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `Texture`

### public static String getRecipeDisplayName(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public static String getMyDocumentFolder()

**Returns:** `String`

### public static IsoSpriteManager getSpriteManager(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `IsoSpriteManager`

### public static IsoSprite getSprite(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `IsoSprite`

### public static void getServerModData()

**Returns:** `void`

### public static boolean isXBOXController()

**Returns:** `boolean`

### public static boolean isPlaystationController(int id)

**Parameters:**
- `int` `id`

**Returns:** `boolean`

### public static void sendClientCommand(String module,
String command,
se.krka.kahlua.vm.KahluaTable args)

Sends a command to the server, triggering the OnClientCommand event on the server. Does nothing if called on the server.

**Parameters:**
- `String` `module` — Module of the command. It is conventional to use the name of your mod as the module for all of your commands.
- `String` `command` — Name of the command.
- `se.krka.kahlua.vm.KahluaTable` `args` — Arguments to pass to the server. Non-POD elements of the table will be lost.

**Returns:** `void`

### public static void sendClientCommand(IsoPlayer player,
String module,
String command,
se.krka.kahlua.vm.KahluaTable args)

Sends a command to the server, triggering the OnClientCommand event on the server. Does nothing if called on the server.

**Parameters:**
- `IsoPlayer` `player` — The local player to associate the command with. If the player is not local, no command will be sent.
- `String` `module` — Module of the command. It is conventional to use the name of your mod as the module for all of your commands.
- `String` `command` — Name of the command.
- `se.krka.kahlua.vm.KahluaTable` `args` — Arguments to pass to the server. Non-POD elements of the table will be lost.

**Returns:** `void`

### public static void sendServerCommand(String module,
String command,
se.krka.kahlua.vm.KahluaTable args)

Sends a command to all clients, triggering the OnServerCommand event on every client. Does nothing if called on the client.

**Parameters:**
- `String` `module` — Module of the command. It is conventional to use the name of your mod as the module for all of your commands.
- `String` `command` — Name of the command.
- `se.krka.kahlua.vm.KahluaTable` `args` — Arguments to pass to the clients. Non-POD elements of the table will be lost.

**Returns:** `void`

### public static void sendServerCommand(IsoPlayer player,
String module,
String command,
se.krka.kahlua.vm.KahluaTable args)

Sends a command to a specific client, triggering the OnServerCommand event on the client. Does nothing if called on the client.

**Parameters:**
- `IsoPlayer` `player` — The player to send the command to. Only that player's client will receive the command.
- `String` `module` — Module of the command. It is conventional to use the name of your mod as the module for all of your commands.
- `String` `command` — Name of the command.
- `se.krka.kahlua.vm.KahluaTable` `args` — Arguments to pass to the client. Non-POD elements of the table will be lost.

**Returns:** `void`

### public void sendServerCommandV(String module,
String command,
Object... values)

**Parameters:**
- `String` `module`
- `String` `command`
- `Object...` `values`

**Returns:** `void`

### public void sendClientCommandV(IsoPlayer player,
String module,
String command,
Object... values)

**Parameters:**
- `IsoPlayer` `player`
- `String` `module`
- `String` `command`
- `Object...` `values`

**Returns:** `void`

### public static void addVariableToSyncList(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

### public static String getOnlineUsername()

**Returns:** `String`

### public static boolean isValidUserName(String user)

**Parameters:**
- `String` `user`

**Returns:** `boolean`

### public static String getHourMinute()

**Returns:** `String`

### public static void SendCommandToServer(String command)

**Parameters:**
- `String` `command`

**Returns:** `void`

### public static boolean isAdmin()

**Returns:** `boolean`

### @Deprecated
public static boolean canModifyPlayerScoreboard()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public static boolean isAccessLevel(String accessLevel)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `accessLevel`

**Returns:** `boolean`

### public static void sendHumanVisual(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void stopFire(Object obj)

**Parameters:**
- `Object` `obj`

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable sortBrowserList(se.krka.kahlua.j2se.KahluaTableImpl table,
String sortType,
boolean sortDown,
se.krka.kahlua.j2se.KahluaTableImpl filterTable)

**Parameters:**
- `se.krka.kahlua.j2se.KahluaTableImpl` `table`
- `String` `sortType`
- `boolean` `sortDown`
- `se.krka.kahlua.j2se.KahluaTableImpl` `filterTable`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static GameClient getGameClient()

**Returns:** `GameClient`

### public static void sendRequestInventory(int id,
String username)

**Parameters:**
- `int` `id`
- `String` `username`

**Returns:** `void`

### public static void InvMngGetItem(long itemId,
String itemType,
int playerID,
String username)

**Parameters:**
- `long` `itemId`
- `String` `itemType`
- `int` `playerID`
- `String` `username`

**Returns:** `void`

### public static void InvMngRemoveItem(long itemId,
int playerID,
String username)

**Parameters:**
- `long` `itemId`
- `int` `playerID`
- `String` `username`

**Returns:** `void`

### public static void InvMngUpdateItem(InventoryItem item,
int playerID)

**Parameters:**
- `InventoryItem` `item`
- `int` `playerID`

**Returns:** `void`

### public static ArrayList<IsoPlayer> getConnectedPlayers()

**Returns:** `ArrayList<IsoPlayer>`

### public static IsoPlayer getPlayerFromUsername(String username)

**Parameters:**
- `String` `username`

**Returns:** `IsoPlayer`

### public static boolean isCoopHost()

**Returns:** `boolean`

### public static void setAdmin()

**Returns:** `void`

### public static void addWarningPoint(String user,
String reason,
int amount)

**Parameters:**
- `String` `user`
- `String` `reason`
- `int` `amount`

**Returns:** `void`

### public static void disconnect()

**Returns:** `void`

### public static void writeLog(String loggerName,
String logs)

**Parameters:**
- `String` `loggerName`
- `String` `logs`

**Returns:** `void`

### public static void doKeyPress(boolean doIt)

**Parameters:**
- `boolean` `doIt`

**Returns:** `void`

### public static Stack<EvolvedRecipe> getEvolvedRecipes()

**Returns:** `Stack<EvolvedRecipe>`

### public static Zone getZone(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `Zone`

### public static ArrayList<Zone> getZones(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `ArrayList<Zone>`

### public static VehicleZone getVehicleZoneAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `VehicleZone`

### public static int getCellMinX()

**Returns:** `int`

### public static int getCellMaxX()

**Returns:** `int`

### public static int getCellMinY()

**Returns:** `int`

### public static int getCellMaxY()

**Returns:** `int`

### public static String replaceWith(String toReplace,
String regex,
String by)

**Parameters:**
- `String` `toReplace`
- `String` `regex`
- `String` `by`

**Returns:** `String`

### public static long getTimestamp()

**Returns:** `long`

### public static long getTimestampMs()

**Returns:** `long`

### public static void forceSnowCheck()

**Returns:** `void`

### public static long getGametimeTimestamp()

**Returns:** `long`

### public static boolean canInviteFriends()

**Returns:** `boolean`

### public static void inviteFriend(String steamID)

**Parameters:**
- `String` `steamID`

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable getFriendsList()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static Boolean getSteamModeActive()

**Returns:** `Boolean`

### public static Boolean getStreamModeActive()

**Returns:** `Boolean`

### public static Boolean getRemotePlayModeActive()

**Returns:** `Boolean`

### public static boolean isValidSteamID(String s)

**Parameters:**
- `String` `s`

**Returns:** `boolean`

### public static String getCurrentUserSteamID()

**Returns:** `String`

### public static String getCurrentUserProfileName()

**Returns:** `String`

### public static boolean getSteamScoreboard()

**Returns:** `boolean`

### public static boolean isSteamOverlayEnabled()

**Returns:** `boolean`

### public static void activateSteamOverlayToWorkshop()

**Returns:** `void`

### public static void activateSteamOverlayToWorkshopUser()

**Returns:** `void`

### public static void activateSteamOverlayToWorkshopItem(String itemID)

**Parameters:**
- `String` `itemID`

**Returns:** `void`

### public static void activateSteamOverlayToWebPage(String url)

**Parameters:**
- `String` `url`

**Returns:** `void`

### public static String getSteamProfileNameFromSteamID(String steamID)

**Parameters:**
- `String` `steamID`

**Returns:** `String`

### public static Texture getSteamAvatarFromSteamID(String steamID)

**Parameters:**
- `String` `steamID`

**Returns:** `Texture`

### public static String getSteamIDFromUsername(String username)

**Parameters:**
- `String` `username`

**Returns:** `String`

### public static void resetRegionFile()

**Returns:** `void`

### public static String getSteamProfileNameFromUsername(String username)

**Parameters:**
- `String` `username`

**Returns:** `String`

### public static Texture getSteamAvatarFromUsername(String username)

**Parameters:**
- `String` `username`

**Returns:** `Texture`

### public static ArrayList<SteamWorkshopItem> getSteamWorkshopStagedItems()

**Returns:** `ArrayList<SteamWorkshopItem>`

### public static ArrayList<String> getSteamWorkshopItemIDs()

**Returns:** `ArrayList<String>`

### public static ArrayList<ChooseGameInfo.Mod> getSteamWorkshopItemMods(String itemIDStr)

**Parameters:**
- `String` `itemIDStr`

**Returns:** `ArrayList<ChooseGameInfo.Mod>`

### public static boolean isSteamRunningOnSteamDeck()

**Returns:** `boolean`

### public static boolean showSteamGamepadTextInput(boolean password,
boolean multiLine,
String description,
int maxChars,
String existingText)

**Parameters:**
- `boolean` `password`
- `boolean` `multiLine`
- `String` `description`
- `int` `maxChars`
- `String` `existingText`

**Returns:** `boolean`

### public static boolean showSteamFloatingGamepadTextInput(boolean multiLine,
int x,
int y,
int width,
int height)

**Parameters:**
- `boolean` `multiLine`
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`

**Returns:** `boolean`

### public static boolean isFloatingGamepadTextInputVisible()

**Returns:** `boolean`

### public static void sendPlayerStatsChange(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendPersonalColor(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void requestTrading(IsoPlayer you,
IsoPlayer other)

**Parameters:**
- `IsoPlayer` `you`
- `IsoPlayer` `other`

**Returns:** `void`

### public static void acceptTrading(IsoPlayer you,
IsoPlayer other,
boolean accept)

**Parameters:**
- `IsoPlayer` `you`
- `IsoPlayer` `other`
- `boolean` `accept`

**Returns:** `void`

### public static void requestMedicalCheck(IsoPlayer target,
IsoPlayer requester)

**Parameters:**
- `IsoPlayer` `target`
- `IsoPlayer` `requester`

**Returns:** `void`

### public static void acceptMedicalCheck(IsoPlayer target,
IsoPlayer requester)

**Parameters:**
- `IsoPlayer` `target`
- `IsoPlayer` `requester`

**Returns:** `void`

### public static void tradingUISendAddItem(IsoPlayer you,
IsoPlayer other,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `you`
- `IsoPlayer` `other`
- `InventoryItem` `item`

**Returns:** `void`

### public static void tradingUISendRemoveItem(IsoPlayer you,
IsoPlayer other,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `you`
- `IsoPlayer` `other`
- `InventoryItem` `item`

**Returns:** `void`

### public static void tradingUISendUpdateState(IsoPlayer you,
IsoPlayer other,
int state)

**Parameters:**
- `IsoPlayer` `you`
- `IsoPlayer` `other`
- `int` `state`

**Returns:** `void`

### public static void sendWarManagerUpdate(int onlineID,
String attacker,
WarManager.State state)

**Parameters:**
- `int` `onlineID`
- `String` `attacker`
- `WarManager.State` `state`

**Returns:** `void`

### public static String getTwoLetters(String input)

**Parameters:**
- `String` `input`

**Returns:** `String`

### public static se.krka.kahlua.vm.KahluaTable splitString(String input,
int maxSize)

**Parameters:**
- `String` `input`
- `int` `maxSize`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static void querySteamWorkshopItemDetails(ArrayList<String> itemIDs,
se.krka.kahlua.vm.LuaClosure functionObj,
Object arg1)

**Parameters:**
- `ArrayList<String>` `itemIDs`
- `se.krka.kahlua.vm.LuaClosure` `functionObj`
- `Object` `arg1`

**Returns:** `void`

### public static void connectToServerStateCallback(String button)

**Parameters:**
- `String` `button`

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable getPublicServersList()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static void steamRequestInternetServersList()

**Returns:** `void`

### public static void steamReleaseInternetServersRequest()

**Returns:** `void`

### public static int steamRequestInternetServersCount()

**Returns:** `int`

### public static Server steamGetInternetServerDetails(int index)

**Parameters:**
- `int` `index`

**Returns:** `Server`

### public static boolean steamRequestServerRules(String host,
int port)

**Parameters:**
- `String` `host`
- `int` `port`

**Returns:** `boolean`

### public static String getHostByName(String hostname)

**Parameters:**
- `String` `hostname`

**Returns:** `String`

### public static boolean steamRequestServerDetails(String host,
int port)

**Parameters:**
- `String` `host`
- `int` `port`

**Returns:** `boolean`

### public static boolean isPublicServerListAllowed()

**Returns:** `boolean`

### public static boolean isSteamServerBrowserEnabled()

**Returns:** `boolean`

### public static void testSound()

**Returns:** `void`

### public static ArrayList<String> getFMODEventPathList()

**Returns:** `ArrayList<String>`

### public static void debugSetRoomType(Double roomType)

**Parameters:**
- `Double` `roomType`

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable copyTable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable mergeTable(se.krka.kahlua.vm.KahluaTable... tables)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable...` `tables`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable copyTable(se.krka.kahlua.vm.KahluaTable to,
se.krka.kahlua.vm.KahluaTable from)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `to`
- `se.krka.kahlua.vm.KahluaTable` `from`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static void renderIsoCircle(float x,
float y,
float z,
float radius,
int segments,
int thickness,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `radius`
- `int` `segments`
- `int` `thickness`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void renderIsoRect(float x,
float y,
float z,
float radius,
float r,
float g,
float b,
float a,
int thickness)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `radius`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `int` `thickness`

**Returns:** `void`

### public static void renderLine(float x,
float y,
float z,
float tx,
float ty,
float tz,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `tx`
- `float` `ty`
- `float` `tz`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void renderIsoLine(float x,
float y,
float z,
float tx,
float ty,
float tz,
int thickness,
float r,
float g,
float b,
float a)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `tx`
- `float` `ty`
- `float` `tz`
- `int` `thickness`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void configureLighting(float darkStep)

**Parameters:**
- `float` `darkStep`

**Returns:** `void`

### public static void invalidateLighting()

**Returns:** `void`

### public static void testHelicopter()

**Returns:** `void`

### public static void endHelicopter()

**Returns:** `void`

### public static ServerSettingsManager getServerSettingsManager()

**Returns:** `ServerSettingsManager`

### public static void rainConfig(String cmd,
int arg)

**Parameters:**
- `String` `cmd`
- `int` `arg`

**Returns:** `void`

### public static void sendSwitchSeat(BaseVehicle vehicle,
IsoGameCharacter chr,
int seatFrom,
int seatTo)

**Parameters:**
- `BaseVehicle` `vehicle`
- `IsoGameCharacter` `chr`
- `int` `seatFrom`
- `int` `seatTo`

**Returns:** `void`

### public static BaseVehicle getVehicleById(int id)

**Parameters:**
- `int` `id`

**Returns:** `BaseVehicle`

### public static void removeVehicle(IsoPlayer player,
BaseVehicle baseVehicle)

**Parameters:**
- `IsoPlayer` `player`
- `BaseVehicle` `baseVehicle`

**Returns:** `void`

### public static void removeAllVehicles(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void addBloodSplat(IsoGridSquare sq,
int nbr)

**Parameters:**
- `IsoGridSquare` `sq`
- `int` `nbr`

**Returns:** `void`

### public void addBloodSplat(IsoGridSquare sq,
int nbr,
float xoffset,
float yoffset)

**Parameters:**
- `IsoGridSquare` `sq`
- `int` `nbr`
- `float` `xoffset`
- `float` `yoffset`

**Returns:** `void`

### public static void addCarCrash()

**Returns:** `void`

### public static IsoDeadBody createRandomDeadBody(IsoGridSquare square,
int blood)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `blood`

**Returns:** `IsoDeadBody`

### public void addZombieSitting(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addZombiesEating(int x,
int y,
int z,
int totalZombies,
boolean skeletonBody)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `totalZombies`
- `boolean` `skeletonBody`

**Returns:** `void`

### public ArrayList<IsoZombie> addZombiesInOutfitArea(int x1,
int y1,
int x2,
int y2,
int z,
int totalZombies,
String outfit,
Integer femaleChance)

**Parameters:**
- `int` `x1`
- `int` `y1`
- `int` `x2`
- `int` `y2`
- `int` `z`
- `int` `totalZombies`
- `String` `outfit`
- `Integer` `femaleChance`

**Returns:** `ArrayList<IsoZombie>`

### public static ArrayList<IsoZombie> addZombiesInOutfit(int x,
int y,
int z,
int totalZombies,
String outfit,
Integer femaleChance)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `totalZombies`
- `String` `outfit`
- `Integer` `femaleChance`

**Returns:** `ArrayList<IsoZombie>`

### public static ArrayList<IsoZombie> addZombiesInOutfit(int x,
int y,
int z,
int totalZombies,
String outfit,
Integer femaleChance,
boolean isCrawler,
boolean isFallOnFront,
boolean isFakeDead,
boolean isKnockedDown,
boolean isInvulnerable,
boolean isSitting,
float health)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `totalZombies`
- `String` `outfit`
- `Integer` `femaleChance`
- `boolean` `isCrawler`
- `boolean` `isFallOnFront`
- `boolean` `isFakeDead`
- `boolean` `isKnockedDown`
- `boolean` `isInvulnerable`
- `boolean` `isSitting`
- `float` `health`

**Returns:** `ArrayList<IsoZombie>`

### public static ArrayList<IsoZombie> addZombiesInOutfit(int x,
int y,
int z,
int totalZombies,
String outfit,
Integer femaleChance,
boolean isCrawler,
boolean isFallOnFront,
boolean isFakeDead,
boolean isKnockedDown,
boolean isInvulnerable,
boolean isSitting,
float health,
boolean isAnimRecording)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `totalZombies`
- `String` `outfit`
- `Integer` `femaleChance`
- `boolean` `isCrawler`
- `boolean` `isFallOnFront`
- `boolean` `isFakeDead`
- `boolean` `isKnockedDown`
- `boolean` `isInvulnerable`
- `boolean` `isSitting`
- `float` `health`
- `boolean` `isAnimRecording`

**Returns:** `ArrayList<IsoZombie>`

### public static ArrayList<IsoZombie> addZombiesInOutfit(int x,
int y,
int z,
int totalZombies,
String outfit,
Integer femaleChance,
boolean isCrawler,
boolean isFallOnFront,
boolean isFakeDead,
boolean isKnockedDown,
boolean isInvulnerable,
boolean isSitting,
float health,
boolean isAnimRecording,
float heightOffset)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `totalZombies`
- `String` `outfit`
- `Integer` `femaleChance`
- `boolean` `isCrawler`
- `boolean` `isFallOnFront`
- `boolean` `isFakeDead`
- `boolean` `isKnockedDown`
- `boolean` `isInvulnerable`
- `boolean` `isSitting`
- `float` `health`
- `boolean` `isAnimRecording`
- `float` `heightOffset`

**Returns:** `ArrayList<IsoZombie>`

### public static ArrayList<IsoZombie> addZombiesInOutfit(int x,
int y,
int z,
int totalZombies,
String outfit,
Integer femaleChance,
boolean isCrawler,
boolean isFallOnFront,
boolean isFakeDead,
boolean isKnockedDown,
boolean isInvulnerable,
boolean isSitting,
float health,
boolean isAnimRecording,
float heightOffset,
boolean isRagdolling)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `totalZombies`
- `String` `outfit`
- `Integer` `femaleChance`
- `boolean` `isCrawler`
- `boolean` `isFallOnFront`
- `boolean` `isFakeDead`
- `boolean` `isKnockedDown`
- `boolean` `isInvulnerable`
- `boolean` `isSitting`
- `float` `health`
- `boolean` `isAnimRecording`
- `float` `heightOffset`
- `boolean` `isRagdolling`

**Returns:** `ArrayList<IsoZombie>`

### public static ArrayList<IsoZombie> addZombiesInOutfit(int x,
int y,
int z,
int totalZombies,
String outfit,
Integer femaleChance,
boolean isCrawler,
boolean isFallOnFront,
boolean isFakeDead,
boolean isKnockedDown,
boolean isInvulnerable,
boolean isSitting,
float health,
boolean isAnimRecording,
float heightOffset,
boolean isRagdolling,
boolean onFire)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `totalZombies`
- `String` `outfit`
- `Integer` `femaleChance`
- `boolean` `isCrawler`
- `boolean` `isFallOnFront`
- `boolean` `isFakeDead`
- `boolean` `isKnockedDown`
- `boolean` `isInvulnerable`
- `boolean` `isSitting`
- `float` `health`
- `boolean` `isAnimRecording`
- `float` `heightOffset`
- `boolean` `isRagdolling`
- `boolean` `onFire`

**Returns:** `ArrayList<IsoZombie>`

### public ArrayList<IsoZombie> addZombiesInBuilding(BuildingDef def,
int totalZombies,
String outfit,
RoomDef room,
Integer femaleChance)

**Parameters:**
- `BuildingDef` `def`
- `int` `totalZombies`
- `String` `outfit`
- `RoomDef` `room`
- `Integer` `femaleChance`

**Returns:** `ArrayList<IsoZombie>`

### public static BaseVehicle addVehicleDebug(String scriptName,
IsoDirections dir,
Integer skinIndex,
IsoGridSquare sq)

**Parameters:**
- `String` `scriptName`
- `IsoDirections` `dir`
- `Integer` `skinIndex`
- `IsoGridSquare` `sq`

**Returns:** `BaseVehicle`

### public static BaseVehicle addVehicle(String script,
int x,
int y,
int z)

**Parameters:**
- `String` `script`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `BaseVehicle`

### public static void attachTrailerToPlayerVehicle(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static String getKeyName(int key)

**Parameters:**
- `int` `key`

**Returns:** `String`

### public static int getKeyCode(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `int`

### public static void queueCharEvent(String eventChar)

**Parameters:**
- `String` `eventChar`

**Returns:** `void`

### public static void queueKeyEvent(int lwjglKeyCode)

**Parameters:**
- `int` `lwjglKeyCode`

**Returns:** `void`

### public static void addAllVehicles()

**Returns:** `void`

### public static void addAllBurntVehicles()

**Returns:** `void`

### public static void addAllSmashedVehicles()

**Returns:** `void`

### public static void addAllVehicles(Predicate<VehicleScript> predicate)

**Parameters:**
- `Predicate<VehicleScript>` `predicate`

**Returns:** `void`

### public static BaseVehicle addPhysicsObject()

**Returns:** `BaseVehicle`

### public static void toggleVehicleRenderToTexture()

**Returns:** `void`

### public static void reloadSoundFiles()

**Returns:** `void`

### public static AnimationViewerState getAnimationViewerState()

**Returns:** `AnimationViewerState`

### public static AttachmentEditorState getAttachmentEditorState()

**Returns:** `AttachmentEditorState`

### public static EditVehicleState getEditVehicleState()

**Returns:** `EditVehicleState`

### public static SpriteModelEditorState getSpriteModelEditorState()

**Returns:** `SpriteModelEditorState`

### public static void showAnimationViewer()

**Returns:** `void`

### public static void showAttachmentEditor()

**Returns:** `void`

### public static void showChunkDebugger()

**Returns:** `void`

### public static TileGeometryState getTileGeometryState()

**Returns:** `TileGeometryState`

### public static void showGlobalObjectDebugger()

**Returns:** `void`

### public static void showSeamEditor()

**Returns:** `void`

### public static SeamEditorState getSeamEditorState()

**Returns:** `SeamEditorState`

### public static void showSpriteModelEditor()

**Returns:** `void`

### public static void showVehicleEditor(String scriptName)

**Parameters:**
- `String` `scriptName`

**Returns:** `void`

### public static void showWorldMapEditor(String value)

**Parameters:**
- `String` `value`

**Returns:** `void`

### public static void reloadVehicles()

**Returns:** `void`

### public static void reloadEngineRPM()

**Returns:** `void`

### public static void reloadXui()

**Returns:** `void`

### public static void reloadScripts(ScriptType type)

**Parameters:**
- `ScriptType` `type`

**Returns:** `void`

### public static void reloadEntityScripts()

**Returns:** `void`

### public static void reloadEntitiesDebug()

**Returns:** `void`

### public static void reloadEntityDebug(GameEntity entity)

**Parameters:**
- `GameEntity` `entity`

**Returns:** `void`

### public static void reloadEntityFromScriptDebug(GameEntity entity)

**Parameters:**
- `GameEntity` `entity`

**Returns:** `void`

### public static ArrayList<GameEntity> getIsoEntitiesDebug()

**Returns:** `ArrayList<GameEntity>`

### public static String proceedPM(String command)

**Parameters:**
- `String` `command`

**Returns:** `String`

### public static void processSayMessage(String message)

**Parameters:**
- `String` `message`

**Returns:** `void`

### public static void processGeneralMessage(String message)

**Parameters:**
- `String` `message`

**Returns:** `void`

### public static void processShoutMessage(String message)

**Parameters:**
- `String` `message`

**Returns:** `void`

### public static void ProceedFactionMessage(String message)

**Parameters:**
- `String` `message`

**Returns:** `void`

### public static void ProcessSafehouseMessage(String message)

**Parameters:**
- `String` `message`

**Returns:** `void`

### public static void ProcessAdminChatMessage(String message)

**Parameters:**
- `String` `message`

**Returns:** `void`

### public static void showWrongChatTabMessage(int actualTabID,
int rightTabID,
String chatCommand)

**Parameters:**
- `int` `actualTabID`
- `int` `rightTabID`
- `String` `chatCommand`

**Returns:** `void`

### public static void focusOnTab(Short id)

**Parameters:**
- `Short` `id`

**Returns:** `void`

### public static void updateChatSettings(String fontSize,
boolean showTimestamp,
boolean showTitle)

**Parameters:**
- `String` `fontSize`
- `boolean` `showTimestamp`
- `boolean` `showTitle`

**Returns:** `void`

### public static Boolean checkPlayerCanUseChat(String chatCommand)

**Parameters:**
- `String` `chatCommand`

**Returns:** `Boolean`

### public static void reloadVehicleTextures(String scriptName)

**Parameters:**
- `String` `scriptName`

**Returns:** `void`

### public static void useStaticErosionRand(boolean use)

**Parameters:**
- `boolean` `use`

**Returns:** `void`

### public static ClimateManager getClimateManager()

**Returns:** `ClimateManager`

### public static ClimateMoon getClimateMoon()

**Returns:** `ClimateMoon`

### public static WorldMarkers getWorldMarkers()

**Returns:** `WorldMarkers`

### public static IsoMarkers getIsoMarkers()

**Returns:** `IsoMarkers`

### public static ErosionMain getErosion()

**Returns:** `ErosionMain`

### public static ArrayList<String> getAllOutfits(boolean female)

**Parameters:**
- `boolean` `female`

**Returns:** `ArrayList<String>`

### public static ArrayList<String> getAllVehicles()

**Returns:** `ArrayList<String>`

### public static ArrayList<String> getAllHairStyles(boolean female)

**Parameters:**
- `boolean` `female`

**Returns:** `ArrayList<String>`

### public static HairStyles getHairStylesInstance()

**Returns:** `HairStyles`

### public static BeardStyles getBeardStylesInstance()

**Returns:** `BeardStyles`

### public static ArrayList<String> getAllBeardStyles()

**Returns:** `ArrayList<String>`

### public static VoiceStyles getVoiceStylesInstance()

**Returns:** `VoiceStyles`

### public static ArrayList<VoiceStyle> getAllVoiceStyles()

**Returns:** `ArrayList<VoiceStyle>`

### public static se.krka.kahlua.vm.KahluaTable getAllItemsForBodyLocation(String bodyLocation)

**Parameters:**
- `String` `bodyLocation`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static ArrayList<String> getAllDecalNamesForItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `ArrayList<String>`

### public void screenZoomIn()

**Returns:** `void`

### public void screenZoomOut()

**Returns:** `void`

### public void addSound(IsoObject source,
int x,
int y,
int z,
int radius,
int volume)

**Parameters:**
- `IsoObject` `source`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `radius`
- `int` `volume`

**Returns:** `void`

### public void sendPlaySound(String sound,
boolean loop,
IsoMovingObject object)

**Parameters:**
- `String` `sound`
- `boolean` `loop`
- `IsoMovingObject` `object`

**Returns:** `void`

### public void sendIconFound(IsoPlayer player,
String type,
float distanceTraveled)

**Parameters:**
- `IsoPlayer` `player`
- `String` `type`
- `float` `distanceTraveled`

**Returns:** `void`

### public void sendForageRequestZone(IsoPlayer player,
String focus)

**Parameters:**
- `IsoPlayer` `player`
- `String` `focus`

**Returns:** `void`

### public void sendForagePool(IsoPlayer player,
String zoneId,
se.krka.kahlua.vm.KahluaTable icons)

**Parameters:**
- `IsoPlayer` `player`
- `String` `zoneId`
- `se.krka.kahlua.vm.KahluaTable` `icons`

**Returns:** `void`

### public void sendForageSpot(IsoPlayer player,
String iconID)

**Parameters:**
- `IsoPlayer` `player`
- `String` `iconID`

**Returns:** `void`

### public int getLoosingXpValue()

**Returns:** `int`

### public int getLoosingXpTick(Object timer)

**Parameters:**
- `Object` `timer`

**Returns:** `int`

### public void addXpNoMultiplier(IsoPlayer player,
PerkFactory.Perk perk,
float amount)

**Parameters:**
- `IsoPlayer` `player`
- `PerkFactory.Perk` `perk`
- `float` `amount`

**Returns:** `void`

### public void addXp(IsoPlayer player,
PerkFactory.Perk perk,
float amount)

**Parameters:**
- `IsoPlayer` `player`
- `PerkFactory.Perk` `perk`
- `float` `amount`

**Returns:** `void`

### public void addXpMultiplier(IsoPlayer player,
PerkFactory.Perk perk,
float multiplier,
int minLevel,
int maxLevel)

**Parameters:**
- `IsoPlayer` `player`
- `PerkFactory.Perk` `perk`
- `float` `multiplier`
- `int` `minLevel`
- `int` `maxLevel`

**Returns:** `void`

### public void syncBodyPart(BodyPart bodyPart,
long syncParams)

**Parameters:**
- `BodyPart` `bodyPart`
- `long` `syncParams`

**Returns:** `void`

### public void syncPlayerStats(IsoPlayer player,
int syncParams)

**Parameters:**
- `IsoPlayer` `player`
- `int` `syncParams`

**Returns:** `void`

### public void sendPlayerStat(IsoPlayer player,
CharacterStat stat)

**Parameters:**
- `IsoPlayer` `player`
- `CharacterStat` `stat`

**Returns:** `void`

### public void sendPlayerNutrition(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void SyncXp(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public String checkServerName(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public void Render3DItem(InventoryItem item,
IsoGridSquare sq,
float xoffset,
float yoffset,
float zoffset,
float rotation)

Draws an item's model in the world. Only works when certain render state is set.

**Parameters:**
- `InventoryItem` `item` — The item to render.
- `IsoGridSquare` `sq` — The square to draw the item on.
- `float` `xoffset` — Offset on the x axis to draw the model.
- `float` `yoffset` — Offset on the y axis to draw the model.
- `float` `zoffset` — Offset on the z axis to draw the model.
- `float` `rotation` — Yaw rotation of the model in degrees.

**Returns:** `void`

### public ContainerOverlays getContainerOverlays()

**Returns:** `ContainerOverlays`

### public TileOverlays getTileOverlays()

**Returns:** `TileOverlays`

### public void NewMapBinaryFile(String cmd)
throws IOException

**Parameters:**
- `String` `cmd`

**Returns:** `void`

### public Double getAverageFSP()

**Returns:** `Double`

### public long getCPUTime()

**Returns:** `long`

### public long getGPUTime()

**Returns:** `long`

### public long getCPUWait()

**Returns:** `long`

### public long getGPUWait()

**Returns:** `long`

### public int getServerFPS()

**Returns:** `int`

### public static byte createItemTransaction(IsoPlayer player,
se.krka.kahlua.j2se.KahluaTableImpl table,
ItemContainer src,
ItemContainer dst)

**Parameters:**
- `IsoPlayer` `player`
- `se.krka.kahlua.j2se.KahluaTableImpl` `table`
- `ItemContainer` `src`
- `ItemContainer` `dst`

**Returns:** `byte`

### public static void removeItemTransaction(byte id,
boolean isCanceled)

**Parameters:**
- `byte` `id`
- `boolean` `isCanceled`

**Returns:** `void`

### public static boolean isItemTransactionConsistent(InventoryItem item,
ItemContainer src,
ItemContainer dst,
String extra,
IsoPlayer player)

**Parameters:**
- `InventoryItem` `item`
- `ItemContainer` `src`
- `ItemContainer` `dst`
- `String` `extra`
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static boolean isItemTransactionDone(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `boolean`

### public static boolean isItemTransactionRejected(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `boolean`

### public static int getItemTransactionDuration(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `int`

### public static boolean isActionDone(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `boolean`

### public static boolean isActionRejected(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `boolean`

### public static int getActionDuration(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `int`

### public static void removeAction(byte id,
boolean isCanceled)

**Parameters:**
- `byte` `id`
- `boolean` `isCanceled`

**Returns:** `void`

### public static void emulateAnimEvent(NetTimedAction action,
long duration,
String event,
String parameter)

**Parameters:**
- `NetTimedAction` `action`
- `long` `duration`
- `String` `event`
- `String` `parameter`

**Returns:** `void`

### public static void emulateAnimEventOnce(NetTimedAction action,
long duration,
String event,
String parameter)

**Parameters:**
- `NetTimedAction` `action`
- `long` `duration`
- `String` `event`
- `String` `parameter`

**Returns:** `void`

### public static boolean detectBadWords(String text)

**Parameters:**
- `String` `text`

**Returns:** `boolean`

### public static boolean profanityFilterCheck(String text)

**Parameters:**
- `String` `text`

**Returns:** `boolean`

### public static void showDebugInfoInChat(String msg)

**Parameters:**
- `String` `msg`

**Returns:** `void`

### public static byte createBuildAction(IsoPlayer player,
float x,
float y,
float z,
boolean north,
String spriteName,
se.krka.kahlua.vm.KahluaTable item)

**Parameters:**
- `IsoPlayer` `player`
- `float` `x`
- `float` `y`
- `float` `z`
- `boolean` `north`
- `String` `spriteName`
- `se.krka.kahlua.vm.KahluaTable` `item`

**Returns:** `byte`

### public static byte startFishingAction(IsoPlayer player,
InventoryItem item,
IsoGridSquare sq,
se.krka.kahlua.vm.KahluaTable bobber)

**Parameters:**
- `IsoPlayer` `player`
- `InventoryItem` `item`
- `IsoGridSquare` `sq`
- `se.krka.kahlua.vm.KahluaTable` `bobber`

**Returns:** `byte`

### public static void syncItemActivated(IsoPlayer player,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `player`
- `InventoryItem` `item`

**Returns:** `void`

### public void syncItemModData(IsoPlayer player,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `player`
- `InventoryItem` `item`

**Returns:** `void`

### public void syncItemFields(IsoPlayer player,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `player`
- `InventoryItem` `item`

**Returns:** `void`

### public void syncHandWeaponFields(IsoPlayer player,
HandWeapon item)

**Parameters:**
- `IsoPlayer` `player`
- `HandWeapon` `item`

**Returns:** `void`

### public InventoryItem getPickedUpFish(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `InventoryItem`

### public static void sendAddItemToContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `void`

### public static void sendAddItemsToContainer(ItemContainer container,
ArrayList<InventoryItem> items)

**Parameters:**
- `ItemContainer` `container`
- `ArrayList<InventoryItem>` `items`

**Returns:** `void`

### public static void sendAttachedItem(IsoGameCharacter character,
String location,
InventoryItem item)

**Parameters:**
- `IsoGameCharacter` `character`
- `String` `location`
- `InventoryItem` `item`

**Returns:** `void`

### public static void sendReplaceItemInContainer(ItemContainer container,
InventoryItem oldItem,
InventoryItem newItem)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `oldItem`
- `InventoryItem` `newItem`

**Returns:** `void`

### public static void sendRemoveItemFromContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `void`

### public static void sendRemoveItemsFromContainer(ItemContainer container,
ArrayList<InventoryItem> items)

**Parameters:**
- `ItemContainer` `container`
- `ArrayList<InventoryItem>` `items`

**Returns:** `void`

### public static void replaceItemInContainer(ItemContainer container,
InventoryItem oldItem,
InventoryItem newItem)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `oldItem`
- `InventoryItem` `newItem`

**Returns:** `void`

### public static void log(DebugType type,
String message)

**Parameters:**
- `DebugType` `type`
- `String` `message`

**Returns:** `void`

### public static void teleportPlayers(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void checkModsNeedUpdate(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public static SearchMode getSearchMode()

**Returns:** `SearchMode`

### public static void transmitBigWaterSplash(int x,
int y,
float dx,
float dy)

**Parameters:**
- `int` `x`
- `int` `y`
- `float` `dx`
- `float` `dy`

**Returns:** `void`

### public static void addAreaHighlight(int x1,
int y1,
int x2,
int y2,
int z,
float r,
float g,
float b,
float a)

**Parameters:**
- `int` `x1`
- `int` `y1`
- `int` `x2`
- `int` `y2`
- `int` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void addAreaHighlightForPlayer(int playerIndex,
int x1,
int y1,
int x2,
int y2,
int z,
float r,
float g,
float b,
float a)

**Parameters:**
- `int` `playerIndex`
- `int` `x1`
- `int` `y1`
- `int` `x2`
- `int` `y2`
- `int` `z`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public static void configRoomFade(float seconds,
float percent)

**Parameters:**
- `float` `seconds`
- `float` `percent`

**Returns:** `void`

### public static void timSort(se.krka.kahlua.vm.KahluaTable table,
Object functionObject)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`
- `Object` `functionObject`

**Returns:** `void`

### public static Object javaListRemoveAt(List<?> javaList,
int index)

**Parameters:**
- `List<?>` `javaList`
- `int` `index`

**Returns:** `Object`

### public static void sendDebugStory(IsoGridSquare square,
int type,
String name)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `type`
- `String` `name`

**Returns:** `void`

### public static void displayLUATable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

**Returns:** `void`

### public static void showTimers(String clazzStr)

**Parameters:**
- `String` `clazzStr`

**Returns:** `void`

### public static void showTimersTotal(String clazzStr)

**Parameters:**
- `String` `clazzStr`

**Returns:** `void`

### public static void resetTimers(String clazzStr)

**Parameters:**
- `String` `clazzStr`

**Returns:** `void`

### public static void getTimerKept(String clazzStr,
String field)

**Parameters:**
- `String` `clazzStr`
- `String` `field`

**Returns:** `void`

### public static List<CheatType> getCheatTypes()

**Returns:** `List<CheatType>`

### public static List<WorldMapStreet> getStreets(WorldMapStreets worldMapStreets)

**Parameters:**
- `WorldMapStreets` `worldMapStreets`

**Returns:** `List<WorldMapStreet>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\Lua\LuaManager.GlobalObject.html`*
