---
title: zombie.network.GameServer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.GameServer

`public class GameServer extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.GameServer

## Fields

### public static final int MAX_PLAYERS

### public static final int TimeLimitForProcessPackets

### public static final int PacketsUpdateRate

### public static final int FPS

### public static int test

### public static int defaultPort

### public static int udpPort

### public static String ipCommandline

### public static int portCommandline

### public static int udpPortCommandline

### public static Boolean steamVacCommandline

### public static boolean guiCommandline

### public static boolean server

### public static boolean coop

### public static boolean debug

### public static boolean closed

### public static boolean softReset

### public static String seed

### public static UdpEngine udpEngine

### public static final HashMap<Short,Long> IDToAddressMap

### public static final HashMap<Short, IsoPlayer> IDToPlayerMap

### public static final Map<String,Short> UserNameToPlayerMap

### public static final ArrayList<IsoPlayer> Players

### public static float timeSinceKeepAlive

### public static final HashSet<UdpConnection> DebugPlayer

### public static int resetId

### public static final ArrayList<String> ServerMods

### public static final ArrayList<Long> WorkshopItems

### public static String[] workshopInstallFolders

### public static long[] workshopTimeStamps

### public static String serverName

### public static final DiscordBot discordBot

### public static String checksum

### public static String gameMap

### public static boolean fastForward

### public static String ip

### public static final UdpConnection[] SlotToConnection

### public static final HashMap<IsoPlayer, Long> PlayerToAddressMap

### public static final HashMap<Short,Vector2> playerToCoordsMap

### public static int countOfDroppedConnections

### public static UdpConnection removeZombiesConnection

### public static UdpConnection removeAnimalsConnection

### public static UdpConnection removeCorpsesConnection

### public static UdpConnection removeVehiclesConnection

### public static Thread mainThread

### public static final ArrayList<IsoPlayer> tempPlayers

## Constructors

### public GameServer()

## Methods

### public static void setupCoop()
throws FileNotFoundException

**Returns:** `void`

### public static void main(String[] args)

**Parameters:**
- `String[]` `args`

**Returns:** `void`

### public static void setupSteamGameServer()

**Returns:** `void`

### public static Server steamGetInternetServerDetails(GameServerDetails steamServer)

**Parameters:**
- `GameServerDetails` `steamServer`

**Returns:** `Server`

### public static String rcon(String command)

**Parameters:**
- `String` `command`

**Returns:** `String`

### public static void sendTeleport(IsoPlayer player,
float x,
float y,
float z)

**Parameters:**
- `IsoPlayer` `player`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public static void sendPlayerExtraInfo(IsoPlayer p,
UdpConnection connection)

**Parameters:**
- `IsoPlayer` `p`
- `UdpConnection` `connection`

**Returns:** `void`

### public static void sendPlayerExtraInfo(IsoPlayer p,
UdpConnection connection,
boolean isForced)

**Parameters:**
- `IsoPlayer` `p`
- `UdpConnection` `connection`
- `boolean` `isForced`

**Returns:** `void`

### public static boolean canModifyPlayerStats(UdpConnection c,
IsoPlayer player)

**Parameters:**
- `UdpConnection` `c`
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static void doMinimumInit()
throws IOException

**Returns:** `void`

### public static void startServer()
throws ConnectException

**Returns:** `void`

### public static void sendCompost(IsoCompost compost,
UdpConnection connection)

**Parameters:**
- `IsoCompost` `compost`
- `UdpConnection` `connection`

**Returns:** `void`

### public static void sendHelicopter(float x,
float y,
boolean active)

**Parameters:**
- `float` `x`
- `float` `y`
- `boolean` `active`

**Returns:** `void`

### public static void open()

**Returns:** `void`

### public static void close()

**Returns:** `void`

### public static void sendZone(Zone zone)

**Parameters:**
- `Zone` `zone`

**Returns:** `void`

### public static void addXp(IsoPlayer p,
PerkFactory.Perk perk,
float xp)

**Parameters:**
- `IsoPlayer` `p`
- `PerkFactory.Perk` `perk`
- `float` `xp`

**Returns:** `void`

### public static void addXp(IsoPlayer p,
PerkFactory.Perk perk,
float xp,
boolean noMultiplier)

**Parameters:**
- `IsoPlayer` `p`
- `PerkFactory.Perk` `perk`
- `float` `xp`
- `boolean` `noMultiplier`

**Returns:** `void`

### public static void addXp(IsoPlayer player,
PerkFactory.Perk perk,
float xp,
boolean noMultiplier,
boolean showXp)

**Parameters:**
- `IsoPlayer` `player`
- `PerkFactory.Perk` `perk`
- `float` `xp`
- `boolean` `noMultiplier`
- `boolean` `showXp`

**Returns:** `void`

### public static void addXpMultiplier(IsoPlayer p,
PerkFactory.Perk perk,
float multiplier,
int minLevel,
int maxLevel)

**Parameters:**
- `IsoPlayer` `p`
- `PerkFactory.Perk` `perk`
- `float` `multiplier`
- `int` `minLevel`
- `int` `maxLevel`

**Returns:** `void`

### public static void sendOptionsToClients()

**Returns:** `void`

### public static void sendCorpse(IsoDeadBody body)

**Parameters:**
- `IsoDeadBody` `body`

**Returns:** `void`

### public static void loadModData(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void PlayWorldSoundServer(String name,
IsoGridSquare source,
float radius,
int index)

**Parameters:**
- `String` `name`
- `IsoGridSquare` `source`
- `float` `radius`
- `int` `index`

**Returns:** `void`

### public static void PlayWorldSoundServer(String name,
boolean loop,
IsoGridSquare source,
float pitchVar,
float radius,
float maxGain,
boolean ignoreOutside)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `IsoGridSquare` `source`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `boolean` `ignoreOutside`

**Returns:** `void`

### public static void PlayWorldSoundServer(IsoGameCharacter character,
String name,
boolean loop,
IsoGridSquare source,
float pitchVar,
float radius,
float maxGain,
boolean ignoreOutside)

**Parameters:**
- `IsoGameCharacter` `character`
- `String` `name`
- `boolean` `loop`
- `IsoGridSquare` `source`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `boolean` `ignoreOutside`

**Returns:** `void`

### public static void PlayWorldSoundWavServer(String name,
boolean loop,
IsoGridSquare source,
float pitchVar,
float radius,
float maxGain,
boolean ignoreOutside)

**Parameters:**
- `String` `name`
- `boolean` `loop`
- `IsoGridSquare` `source`
- `float` `pitchVar`
- `float` `radius`
- `float` `maxGain`
- `boolean` `ignoreOutside`

**Returns:** `void`

### public static void PlaySoundAtEveryPlayer(String name,
int x,
int y,
int z)

**Parameters:**
- `String` `name`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public static void PlaySoundAtEveryPlayer(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static void PlaySoundAtEveryPlayer(String name,
int x,
int y,
int z,
boolean usePlrCoords)

**Parameters:**
- `String` `name`
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `usePlrCoords`

**Returns:** `void`

### public static void sendCharacterSound(IsoGameCharacter chr,
String soundName,
byte flags)

**Parameters:**
- `IsoGameCharacter` `chr`
- `String` `soundName`
- `byte` `flags`

**Returns:** `void`

### public static void sendCharacterSound(IsoGameCharacter chr,
String soundName,
byte flags,
ParameterMeleeHitSurface.Material material)

**Parameters:**
- `IsoGameCharacter` `chr`
- `String` `soundName`
- `byte` `flags`
- `ParameterMeleeHitSurface.Material` `material`

**Returns:** `void`

### public static void sendZombieSound(IsoZombie.ZombieSound sound,
IsoZombie zombie)

**Parameters:**
- `IsoZombie.ZombieSound` `sound`
- `IsoZombie` `zombie`

**Returns:** `void`

### public static void initClientCommandFilter()

**Returns:** `void`

### public static IsoPlayer getAnyPlayerFromConnection(IConnection connection)

**Parameters:**
- `IConnection` `connection`

**Returns:** `IsoPlayer`

### public static IsoPlayer getPlayerFromConnection(IConnection connection,
int playerIndex)

**Parameters:**
- `IConnection` `connection`
- `int` `playerIndex`

**Returns:** `IsoPlayer`

### public static IsoPlayer getPlayerByRealUserName(String username)

**Parameters:**
- `String` `username`

**Returns:** `IsoPlayer`

### public static IsoPlayer getPlayerByUserName(String username)

**Parameters:**
- `String` `username`

**Returns:** `IsoPlayer`

### public static IsoPlayer getPlayerByUserNameForCommand(String username)

**Parameters:**
- `String` `username`

**Returns:** `IsoPlayer`

### public static UdpConnection getConnectionByPlayerOnlineID(short onlineID)

**Parameters:**
- `short` `onlineID`

**Returns:** `UdpConnection`

### public static UdpConnection getConnectionFromPlayer(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `UdpConnection`

### public static UdpConnection getConnectionByIp(String ip)

**Parameters:**
- `String` `ip`

**Returns:** `UdpConnection`

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

### public static void sendSyncPlayerFields(IsoPlayer player,
byte syncParams)

**Parameters:**
- `IsoPlayer` `player`
- `byte` `syncParams`

**Returns:** `void`

### public static void sendSyncClothing(IsoPlayer player,
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

### public static void syncHumanVisual(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void syncClothingFields(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendItemsInContainer(IsoObject o,
ItemContainer container)

**Parameters:**
- `IsoObject` `o`
- `ItemContainer` `container`

**Returns:** `void`

### public static void addConnection(UdpConnection con)

**Parameters:**
- `UdpConnection` `con`

**Returns:** `void`

### public static void addDisconnect(UdpConnection con)

**Parameters:**
- `UdpConnection` `con`

**Returns:** `void`

### public static void addDelayedDisconnect(UdpConnection con)

**Parameters:**
- `UdpConnection` `con`

**Returns:** `void`

### public static void doDelayedDisconnect(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static boolean isDelayedDisconnect(UdpConnection con)

**Parameters:**
- `UdpConnection` `con`

**Returns:** `boolean`

### public static boolean isDelayedDisconnect(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public static void disconnectPlayer(IsoPlayer player,
IConnection connection)

**Parameters:**
- `IsoPlayer` `player`
- `IConnection` `connection`

**Returns:** `void`

### public static short getFreeSlot()

**Returns:** `short`

### public static void receiveClientConnect(UdpConnection connection,
ServerWorldDatabase.LogonResult r)

**Parameters:**
- `UdpConnection` `connection`
- `ServerWorldDatabase.LogonResult` `r`

**Returns:** `void`

### public static void sendMetaGrid(int cellX,
int cellY,
int roomID,
UdpConnection connection)

**Parameters:**
- `int` `cellX`
- `int` `cellY`
- `int` `roomID`
- `UdpConnection` `connection`

**Returns:** `void`

### public static void sendMetaGrid(int cellX,
int cellY,
int roomID)

**Parameters:**
- `int` `cellX`
- `int` `cellY`
- `int` `roomID`

**Returns:** `void`

### public static void setCustomVariables(IsoPlayer p,
IConnection c)

**Parameters:**
- `IsoPlayer` `p`
- `IConnection` `c`

**Returns:** `void`

### public static void sendPlayerConnected(IsoPlayer p,
IConnection c)

**Parameters:**
- `IsoPlayer` `p`
- `IConnection` `c`

**Returns:** `void`

### public static void receivePlayerConnect(ByteBufferReader bb,
IConnection connection,
String username)

**Parameters:**
- `ByteBufferReader` `bb`
- `IConnection` `connection`
- `String` `username`

**Returns:** `void`

### public static void sendInitialWorldState(IConnection c)

**Parameters:**
- `IConnection` `c`

**Returns:** `void`

### public static void sendObjectModData(IsoObject o)

**Parameters:**
- `IsoObject` `o`

**Returns:** `void`

### public static void sendSlowFactor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public static void sendObjectChange(IsoObject o,
IsoObjectChange change,
se.krka.kahlua.vm.KahluaTable tbl)

**Parameters:**
- `IsoObject` `o`
- `IsoObjectChange` `change`
- `se.krka.kahlua.vm.KahluaTable` `tbl`

**Returns:** `void`

### public static void sendObjectChange(IsoObject o,
IsoObjectChange change,
Object... objects)

**Parameters:**
- `IsoObject` `o`
- `IsoObjectChange` `change`
- `Object...` `objects`

**Returns:** `void`

### public static int RemoveItemFromMap(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `int`

### public static void sendBloodSplatter(HandWeapon weapon,
float x,
float y,
float z,
Vector2 hitDir,
boolean closeKilled,
boolean radial)

**Parameters:**
- `HandWeapon` `weapon`
- `float` `x`
- `float` `y`
- `float` `z`
- `Vector2` `hitDir`
- `boolean` `closeKilled`
- `boolean` `radial`

**Returns:** `void`

### public static void connect(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public static void disconnect(UdpConnection connection,
String description)

**Parameters:**
- `UdpConnection` `connection`
- `String` `description`

**Returns:** `void`

### public static void addIncoming(short id,
ByteBufferReader bb,
UdpConnection connection)

**Parameters:**
- `short` `id`
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`

**Returns:** `void`

### public static void smashWindow(IsoWindow isoWindow)

**Parameters:**
- `IsoWindow` `isoWindow`

**Returns:** `void`

### public static void removeBrokenGlass(IsoWindow isoWindow)

**Parameters:**
- `IsoWindow` `isoWindow`

**Returns:** `void`

### public static void sendHitCharacter(HitCharacter packet,
PacketTypes.PacketType packetType,
UdpConnection connection)

**Parameters:**
- `HitCharacter` `packet`
- `PacketTypes.PacketType` `packetType`
- `UdpConnection` `connection`

**Returns:** `void`

### public static void sendCharacterDeath(IsoDeadBody body)

**Parameters:**
- `IsoDeadBody` `body`

**Returns:** `void`

### public static void sendItemStats(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public static void sendSyncItemFields(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public static void receiveEatBody(ByteBufferReader bb,
UdpConnection connection,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`
- `short` `packetType`

**Returns:** `void`

### public static void receiveSyncRadioData(ByteBufferReader bb,
UdpConnection connection,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`
- `short` `packetType`

**Returns:** `void`

### public static void sendWorldSound(WorldSoundManager.WorldSound sound,
UdpConnection connection)

**Parameters:**
- `WorldSoundManager.WorldSound` `sound`
- `UdpConnection` `connection`

**Returns:** `void`

### public static void kick(IConnection connection,
String description,
String reason)

**Parameters:**
- `IConnection` `connection`
- `String` `description`
- `String` `reason`

**Returns:** `void`

### public static void startRain()

**Returns:** `void`

### public static void stopRain()

**Returns:** `void`

### public static void sendWeather()

**Returns:** `void`

### public static void sendWorldMapPlayerPosition()

**Returns:** `void`

### public static void receiveWorldMapPlayerPosition(ByteBufferReader bb,
UdpConnection connection,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`
- `short` `packetType`

**Returns:** `void`

### public static void syncClock()

**Returns:** `void`

### public static void sendServerCommand(String module,
String command,
se.krka.kahlua.vm.KahluaTable args,
UdpConnection c)

**Parameters:**
- `String` `module`
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`
- `UdpConnection` `c`

**Returns:** `void`

### public static void sendServerCommand(String module,
String command,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `String` `module`
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public static void sendServerCommandToRelevant(float x,
float y,
String module,
String command,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `float` `x`
- `float` `y`
- `String` `module`
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public static void sendServerCommandV(String module,
String command,
Object... objects)

**Parameters:**
- `String` `module`
- `String` `command`
- `Object...` `objects`

**Returns:** `void`

### public static void sendServerCommand(IsoPlayer player,
String module,
String command,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `IsoPlayer` `player`
- `String` `module`
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public static ArrayList<IsoPlayer> getPlayers(ArrayList<IsoPlayer> players)

**Parameters:**
- `ArrayList<IsoPlayer>` `players`

**Returns:** `ArrayList<IsoPlayer>`

### public static ArrayList<IsoPlayer> getPlayers()

**Returns:** `ArrayList<IsoPlayer>`

### public static int getPlayerCount()

**Returns:** `int`

### public static String addUser(String newUsername,
String newUserPassword)

**Parameters:**
- `String` `newUsername`
- `String` `newUserPassword`

**Returns:** `String`

### public static String changeRole(String adminName,
UdpConnection adminConnection,
String user,
String newAccessLevelName)
throws SQLException

**Parameters:**
- `String` `adminName`
- `UdpConnection` `adminConnection`
- `String` `user`
- `String` `newAccessLevelName`

**Returns:** `String`

### public static void sendAmbient(String name,
int x,
int y,
int radius,
float volume)

**Parameters:**
- `String` `name`
- `int` `x`
- `int` `y`
- `int` `radius`
- `float` `volume`

**Returns:** `void`

### public static void sendChangeSafety(Safety safety)

**Parameters:**
- `Safety` `safety`

**Returns:** `void`

### public static void updateOverlayForClients(IsoObject object,
String spriteName,
float r,
float g,
float b,
float a,
UdpConnection playerConnection)

**Parameters:**
- `IsoObject` `object`
- `String` `spriteName`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`
- `UdpConnection` `playerConnection`

**Returns:** `void`

### public static void sendReanimatedZombieID(IsoPlayer player,
IsoZombie zombie)

**Parameters:**
- `IsoPlayer` `player`
- `IsoZombie` `zombie`

**Returns:** `void`

### public static void receiveRadioServerData(ByteBufferReader bb,
UdpConnection connection,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`
- `short` `packetType`

**Returns:** `void`

### public static void receiveRadioDeviceDataState(ByteBufferReader bb,
UdpConnection connection,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`
- `short` `packetType`

**Returns:** `void`

### public static void sendIsoWaveSignal(long source,
int sourceX,
int sourceY,
int channel,
String msg,
String guid,
String codes,
float r,
float g,
float b,
int signalStrength,
boolean isTV)

**Parameters:**
- `long` `source`
- `int` `sourceX`
- `int` `sourceY`
- `int` `channel`
- `String` `msg`
- `String` `guid`
- `String` `codes`
- `float` `r`
- `float` `g`
- `float` `b`
- `int` `signalStrength`
- `boolean` `isTV`

**Returns:** `void`

### public static void receivePlayerListensChannel(ByteBufferReader bb,
UdpConnection connection,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`
- `short` `packetType`

**Returns:** `void`

### public static void sendAlarm(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public static void sendToxicBuilding(int x,
int y,
boolean toxic)

**Parameters:**
- `int` `x`
- `int` `y`
- `boolean` `toxic`

**Returns:** `void`

### public static boolean isSpawnBuilding(BuildingDef def)

**Parameters:**
- `BuildingDef` `def`

**Returns:** `boolean`

### public static void sendTickets(String author,
UdpConnection connection)
throws SQLException

**Parameters:**
- `String` `author`
- `UdpConnection` `connection`

**Returns:** `void`

### public static boolean sendItemListNet(UdpConnection ignore,
IsoPlayer sender,
ArrayList<InventoryItem> items,
IsoPlayer receiver,
String sessionID,
String custom)

**Parameters:**
- `UdpConnection` `ignore`
- `IsoPlayer` `sender`
- `ArrayList<InventoryItem>` `items`
- `IsoPlayer` `receiver`
- `String` `sessionID`
- `String` `custom`

**Returns:** `boolean`

### public String getPoisonousBerry()

**Returns:** `String`

### public void setPoisonousBerry(String poisonousBerry)

**Parameters:**
- `String` `poisonousBerry`

**Returns:** `void`

### public String getPoisonousMushroom()

**Returns:** `String`

### public void setPoisonousMushroom(String poisonousMushroom)

**Parameters:**
- `String` `poisonousMushroom`

**Returns:** `void`

### public String getDifficulty()

**Returns:** `String`

### public void setDifficulty(String difficulty)

**Parameters:**
- `String` `difficulty`

**Returns:** `void`

### public static void transmitBrokenGlass(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

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

### public static void receiveBigWaterSplash(ByteBufferReader bb,
UdpConnection connection,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `connection`
- `short` `packetType`

**Returns:** `void`

### public static void transmitFishingData(int seed,
int trashSeed,
gnu.trove.map.hash.TLongIntHashMap noiseFishPointDisabler,
gnu.trove.map.hash.TLongObjectHashMap<FishSchoolManager.ChumData> chumPoints)

**Parameters:**
- `int` `seed`
- `int` `trashSeed`
- `gnu.trove.map.hash.TLongIntHashMap` `noiseFishPointDisabler`
- `gnu.trove.map.hash.TLongObjectHashMap<FishSchoolManager.ChumData>` `chumPoints`

**Returns:** `void`

### public static boolean isServerDropPackets()

**Returns:** `boolean`

### public static void sendRadioPostSilence()

**Returns:** `void`

### public static void sendRadioPostSilence(UdpConnection c)

**Parameters:**
- `UdpConnection` `c`

**Returns:** `void`

### public static void sendSneezingCoughing(IsoPlayer player,
int sneezingCoughing,
byte sneezeVar)

**Parameters:**
- `IsoPlayer` `player`
- `int` `sneezingCoughing`
- `byte` `sneezeVar`

**Returns:** `void`

### public static boolean isPlayerConnected(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\GameServer.html`*
