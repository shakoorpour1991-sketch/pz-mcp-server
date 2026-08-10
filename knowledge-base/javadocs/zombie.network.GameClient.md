---
title: zombie.network.GameClient
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.GameClient

`public class GameClient extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.GameClient

## Fields

### public static final GameClient instance

### public static final int DEFAULT_PORT

### public static final long REMOTE_PLAYER_TIMEOUT

### public static boolean client

### public static boolean clientSave

### public static UdpConnection connection

### public static int count

### public static String ip

### public static String serverName

### public static String localIP

### public static String password

### public static String googleKey

### public static boolean allChatMuted

### public static String username

### public static String serverPassword

### public static boolean useSteamRelay

### public static int authType

### public UdpEngine udpEngine

### public byte id

### public float timeSinceKeepAlive

### public static int port

### public boolean playerConnectSent

### public static String checksum

### public static boolean checksumValid

### public static List<Long> pingsList

### public static String gameMap

### public static boolean fastForward

### public static final ClientServerMap[] loadedCells

### public static final int DEBUG_PING

### public static boolean coopInvite

### public final ArrayList<IsoPlayer> connectedPlayers

### public boolean idMapDirty

### public static final int sendZombieWithoutNeighbor

### public static final int sendZombieWithNeighbor

### public final UpdateLimit sendZombieTimer

### public final UpdateLimit sendZombieRequestsTimer

### public static long steamID

### public static final Map<Short,Vector2> positions

### public se.krka.kahlua.vm.KahluaTable serverSpawnRegions

### public boolean connected

### public int timeSinceLastUpdate

### public int ping

### public static float serverPredictedAhead

### public static final HashMap<Short, IsoPlayer> IDToPlayerMap

### public static final gnu.trove.map.hash.TShortObjectHashMap<IsoZombie> IDToZombieMap

### public static boolean ingame

### public static boolean askPing

### public static boolean askCustomizationData

### public static boolean sendQR

### public final ArrayList<String> serverMods

### public ErosionConfig erosionConfig

### public static Calendar startAuth

### public static String poisonousBerry

### public static String poisonousMushroom

## Constructors

### public GameClient()

## Methods

### public IsoPlayer getPlayerByOnlineID(short id)

**Parameters:**
- `short` `id`

**Returns:** `IsoPlayer`

### public void init()

**Returns:** `void`

### public void startClient()

**Returns:** `void`

### public String generateSecretKey()

**Returns:** `String`

### public String getGoogleAuthenticatorBarCode(String secretKey,
String account,
String issuer)

**Parameters:**
- `String` `secretKey`
- `String` `account`
- `String` `issuer`

**Returns:** `String`

### public String getQR(String name,
String key)

**Parameters:**
- `String` `name`
- `String` `key`

**Returns:** `String`

### public void Shutdown()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void smashWindow(IsoWindow isoWindow)

**Parameters:**
- `IsoWindow` `isoWindow`

**Returns:** `void`

### public void removeBrokenGlass(IsoWindow isoWindow)

**Parameters:**
- `IsoWindow` `isoWindow`

**Returns:** `void`

### public void delayPacket(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public static void receiveAddBrokenGlass(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void sendBrokenGlass(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void sendPlayerDamage(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendBigWaterSplash(int x,
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
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void sendFishingDataRequest()

**Returns:** `void`

### public static void receiveFishingData(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static boolean IsClientPaused()

**Returns:** `boolean`

### public static void setIsClientPaused(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public static void receiveChatMessageToPlayer(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receivePlayerConnectedToChat(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receivePlayerJoinChat(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveInvMngRemoveItem(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveInvMngGetItem(ByteBufferReader bb,
short packetType)
throws IOException

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveInvMngReqItem(ByteBufferReader bb,
short packetType)
throws IOException

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void invMngRequestItem(int itemId,
String itemType,
short playerID,
String username)

**Parameters:**
- `int` `itemId`
- `String` `itemType`
- `short` `playerID`
- `String` `username`

**Returns:** `void`

### public static void invMngRequestRemoveItem(int itemId,
short playerID,
String username)

**Parameters:**
- `int` `itemId`
- `short` `playerID`
- `String` `username`

**Returns:** `void`

### public static void invMngRequestUpdateItem(InventoryItem item,
short playerID)

**Parameters:**
- `InventoryItem` `item`
- `short` `playerID`

**Returns:** `void`

### public static void receiveChangeTextColor(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receivePlaySoundEveryPlayer(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveAddAlarm(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveToxicBuilding(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public void sendGetAnimalTracks(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public static void sendChangeSafety(Safety safety)

**Parameters:**
- `Safety` `safety`

**Returns:** `void`

### public void addDisconnectPacket(int packet)

**Parameters:**
- `int` `packet`

**Returns:** `void`

### public void connectionLost()

**Returns:** `void`

### public static void SendCommandToServer(String command)

**Parameters:**
- `String` `command`

**Returns:** `void`

### public static void receiveStopRain(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveWeather(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveWorldMapPlayerPosition(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveWorldMap(ByteBufferReader bb,
short packetType)
throws IOException

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public void setRequest(GameClient.RequestState request)

**Parameters:**
- `GameClient.RequestState` `request`

**Returns:** `void`

### public void GameLoadingRequestData()

**Returns:** `void`

### public static void receiveSendCustomColor(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveUpdateItemSprite(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getServerSpawnRegions()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static void sendZombieHit(IsoZombie wielder,
IsoPlayer target,
boolean didDamage,
String hitReaction,
int bodyPart)

**Parameters:**
- `IsoZombie` `wielder`
- `IsoPlayer` `target`
- `boolean` `didDamage`
- `String` `hitReaction`
- `int` `bodyPart`

**Returns:** `void`

### public static void sendAttackCollisionCheck(IsoPlayer wielder,
HandWeapon weapon,
int hitCount)

**Parameters:**
- `IsoPlayer` `wielder`
- `HandWeapon` `weapon`
- `int` `hitCount`

**Returns:** `void`

### public static void sendForageItemFound(IsoPlayer player,
String type,
float amount)

**Parameters:**
- `IsoPlayer` `player`
- `String` `type`
- `float` `amount`

**Returns:** `void`

### public static void sendPlayerHit(IsoGameCharacter wielder,
IsoObject target,
HandWeapon weapon,
float damage,
boolean ignoreDamage,
float range,
boolean isCriticalHit,
List<TracerInfo> tracers,
boolean helmetFall,
boolean hitHead,
boolean hitLegs,
boolean removeKnife)

**Parameters:**
- `IsoGameCharacter` `wielder`
- `IsoObject` `target`
- `HandWeapon` `weapon`
- `float` `damage`
- `boolean` `ignoreDamage`
- `float` `range`
- `boolean` `isCriticalHit`
- `List<TracerInfo>` `tracers`
- `boolean` `helmetFall`
- `boolean` `hitHead`
- `boolean` `hitLegs`
- `boolean` `removeKnife`

**Returns:** `void`

### public static void sendVehicleHit(IsoPlayer wielder,
IsoGameCharacter target,
BaseVehicle vehicle,
float damage,
boolean isTargetHitFromBehind,
float vehicleSpeed)

**Parameters:**
- `IsoPlayer` `wielder`
- `IsoGameCharacter` `target`
- `BaseVehicle` `vehicle`
- `float` `damage`
- `boolean` `isTargetHitFromBehind`
- `float` `vehicleSpeed`

**Returns:** `void`

### public static void sendEatBody(IsoZombie zombie,
IsoMovingObject target)

**Parameters:**
- `IsoZombie` `zombie`
- `IsoMovingObject` `target`

**Returns:** `void`

### public static void receiveEatBody(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveSyncRadioData(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public void sendWorldSound(WorldSoundManager.WorldSound sound)

**Parameters:**
- `WorldSoundManager.WorldSound` `sound`

**Returns:** `void`

### public void sendLoginQueueRequest()

**Returns:** `void`

### public void sendLoginQueueDone(long dt)

**Parameters:**
- `long` `dt`

**Returns:** `void`

### public static boolean canSeePlayerStats()

**Returns:** `boolean`

### public void sendPersonalColor(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void sendChangedPlayerStats(IsoPlayer otherPlayer)

**Parameters:**
- `IsoPlayer` `otherPlayer`

**Returns:** `void`

### public static void receiveChangePlayerStats(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public void sendPlayerConnect(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void sendCreatePlayer(byte playerIndex)

**Parameters:**
- `byte` `playerIndex`

**Returns:** `void`

### public void sendPlayer2(IsoPlayer isoPlayer)

**Parameters:**
- `IsoPlayer` `isoPlayer`

**Returns:** `void`

### public void sendPlayer(IsoPlayer isoPlayer)

**Parameters:**
- `IsoPlayer` `isoPlayer`

**Returns:** `void`

### public void heartBeat()

**Returns:** `void`

### public static IsoZombie getZombie(short id)

**Parameters:**
- `short` `id`

**Returns:** `IsoZombie`

### public static void sendPlayerExtraInfo(IsoPlayer p)

**Parameters:**
- `IsoPlayer` `p`

**Returns:** `void`

### public void setResetID(int resetId)

**Parameters:**
- `int` `resetId`

**Returns:** `void`

### public void loadResetID()

**Returns:** `void`

### public ArrayList<IsoPlayer> getPlayers()

**Returns:** `ArrayList<IsoPlayer>`

### public static void receiveSyncIsoObject(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receivePlayerTimeout(short playerID)

**Parameters:**
- `short` `playerID`

**Returns:** `void`

### public void disconnect(boolean doResetDisconnectTimer)

**Parameters:**
- `boolean` `doResetDisconnectTimer`

**Returns:** `void`

### public void resetDisconnectTimer()

**Returns:** `void`

### public String getReconnectCountdownTimer()

**Returns:** `String`

### public boolean canConnect()

**Returns:** `boolean`

### public void addIncoming(short id,
ByteBufferReader bb)

**Parameters:**
- `short` `id`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void doDisconnect(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

### public void removeZombieFromCache(IsoZombie z)

**Parameters:**
- `IsoZombie` `z`

**Returns:** `void`

### public void sendWorldMessage(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### public void doConnect(String user,
String pass,
String serverIP,
String localIP,
String port,
String serverPassword,
String serverName,
boolean useSteamRelay,
int authType)

**Parameters:**
- `String` `user`
- `String` `pass`
- `String` `serverIP`
- `String` `localIP`
- `String` `port`
- `String` `serverPassword`
- `String` `serverName`
- `boolean` `useSteamRelay`
- `int` `authType`

**Returns:** `void`

### public void doConnect(String user,
String pass,
String serverIP,
String localIP,
String port,
String serverPassword,
String serverName,
boolean useSteamRelay,
int authType,
String googleKey)

**Parameters:**
- `String` `user`
- `String` `pass`
- `String` `serverIP`
- `String` `localIP`
- `String` `port`
- `String` `serverPassword`
- `String` `serverName`
- `boolean` `useSteamRelay`
- `int` `authType`
- `String` `googleKey`

**Returns:** `void`

### public void doConnectCoop(String serverSteamID)

**Parameters:**
- `String` `serverSteamID`

**Returns:** `void`

### public static void receiveAddAmbient(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public void sendClientCommand(IsoPlayer player,
String module,
String command,
se.krka.kahlua.vm.KahluaTable args)

**Parameters:**
- `IsoPlayer` `player`
- `String` `module`
- `String` `command`
- `se.krka.kahlua.vm.KahluaTable` `args`

**Returns:** `void`

### public void sendClientCommandV(IsoPlayer player,
String module,
String command,
Object... objects)

**Parameters:**
- `IsoPlayer` `player`
- `String` `module`
- `String` `command`
- `Object...` `objects`

**Returns:** `void`

### public void sendAttachedItem(IsoGameCharacter character,
String location,
InventoryItem item)

**Parameters:**
- `IsoGameCharacter` `character`
- `String` `location`
- `InventoryItem` `item`

**Returns:** `void`

### public void sendVisual(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void receiveBloodSplatter(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveZombieSound(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public void eatFood(IsoPlayer player,
Food food,
float percentage)

**Parameters:**
- `IsoPlayer` `player`
- `Food` `food`
- `float` `percentage`

**Returns:** `void`

### public void drink(IsoPlayer player,
float drink)

**Parameters:**
- `IsoPlayer` `player`
- `float` `drink`

**Returns:** `void`

### public void addToItemRemoveSendBuffer(IsoObject parent,
ItemContainer container,
InventoryItem item)

**Parameters:**
- `IsoObject` `parent`
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `void`

### public void sendAddedRemovedItems(boolean force)

**Parameters:**
- `boolean` `force`

**Returns:** `void`

### public void checkAddedRemovedItems(IsoObject aboutToRemove)

**Parameters:**
- `IsoObject` `aboutToRemove`

**Returns:** `void`

### public static void sendRemoveItemFromContainer(ItemContainer container,
InventoryItem item)

**Parameters:**
- `ItemContainer` `container`
- `InventoryItem` `item`

**Returns:** `void`

### public void sendItemStats(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void PlayWorldSound(String name,
int x,
int y,
byte z)

**Parameters:**
- `String` `name`
- `int` `x`
- `int` `y`
- `byte` `z`

**Returns:** `void`

### public void StopSound(IsoMovingObject object,
String soundName,
boolean trigger)

**Parameters:**
- `IsoMovingObject` `object`
- `String` `soundName`
- `boolean` `trigger`

**Returns:** `void`

### public void startLocalServer()
throws Exception

**Returns:** `void`

### public static void sendPing()

**Returns:** `void`

### public IsoPlayer getPlayerFromUsername(String username)

**Parameters:**
- `String` `username`

**Returns:** `IsoPlayer`

### public static void destroy(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public static void sendStopFire(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void receiveRadioDeviceDataState(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void sendRadioServerDataRequest()

**Returns:** `void`

### public static void receiveRadioServerData(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveRadioPostSilence(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void sendIsoWaveSignal(int sourceX,
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

### public static void sendPlayerListensChannel(int channel,
boolean listenmode,
boolean isTV)

**Parameters:**
- `int` `channel`
- `boolean` `listenmode`
- `boolean` `isTV`

**Returns:** `void`

### public static void sendCompost(IsoCompost isoCompost)

**Parameters:**
- `IsoCompost` `isoCompost`

**Returns:** `void`

### public void requestUserlog(String username)

**Parameters:**
- `String` `username`

**Returns:** `void`

### public void addUserlog(String user,
String type,
String text)

**Parameters:**
- `String` `user`
- `String` `type`
- `String` `text`

**Returns:** `void`

### public void removeUserlog(String user,
String type,
String text)

**Parameters:**
- `String` `user`
- `String` `type`
- `String` `text`

**Returns:** `void`

### public void addWarningPoint(String user,
String reason,
int amount)

**Parameters:**
- `String` `user`
- `String` `reason`
- `int` `amount`

**Returns:** `void`

### public ArrayList<IsoPlayer> getConnectedPlayers()

**Returns:** `ArrayList<IsoPlayer>`

### public static void sendNonPvpZone(NonPvpZone nonPvpZone,
boolean remove)

**Parameters:**
- `NonPvpZone` `nonPvpZone`
- `boolean` `remove`

**Returns:** `void`

### public static void getBannedIPs()

**Returns:** `void`

### public static void getBannedSteamIDs()

**Returns:** `void`

### public static boolean sendItemListNet(IsoPlayer sender,
ArrayList<InventoryItem> items,
IsoPlayer receiver,
String sessionID,
String custom)

**Parameters:**
- `IsoPlayer` `sender`
- `ArrayList<InventoryItem>` `items`
- `IsoPlayer` `receiver`
- `String` `sessionID`
- `String` `custom`

**Returns:** `boolean`

### public static void receiveSendItemListNet(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public void requestTrading(IsoPlayer you,
IsoPlayer other)

**Parameters:**
- `IsoPlayer` `you`
- `IsoPlayer` `other`

**Returns:** `void`

### public void acceptTrading(IsoPlayer you,
IsoPlayer other,
boolean accept)

**Parameters:**
- `IsoPlayer` `you`
- `IsoPlayer` `other`
- `boolean` `accept`

**Returns:** `void`

### public void tradingUISendAddItem(IsoPlayer you,
IsoPlayer other,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `you`
- `IsoPlayer` `other`
- `InventoryItem` `item`

**Returns:** `void`

### public void tradingUISendRemoveItem(IsoPlayer you,
IsoPlayer other,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `you`
- `IsoPlayer` `other`
- `InventoryItem` `item`

**Returns:** `void`

### public void tradingUISendUpdateState(IsoPlayer you,
IsoPlayer other,
int state)

**Parameters:**
- `IsoPlayer` `you`
- `IsoPlayer` `other`
- `int` `state`

**Returns:** `void`

### public static void receiveSpawnRegion(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveClimateManagerPacket(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveIsoRegionServerPacket(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void sendIsoRegionDataRequest()

**Returns:** `void`

### public void sendSandboxOptionsToServer(SandboxOptions options)

**Parameters:**
- `SandboxOptions` `options`

**Returns:** `void`

### public static void receiveSandboxOptions(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveChunkObjectState(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receivePlayerLeaveChat(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveInitPlayerChat(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveAddChatTab(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receiveRemoveChatTab(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void receivePlayerNotFound(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void sendPerks(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public static void receiveSyncPerks(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void sendEquippedRadioFreq(IsoPlayer plyr)

**Parameters:**
- `IsoPlayer` `plyr`

**Returns:** `void`

### public static void receiveSyncEquippedRadioFreq(ByteBufferReader bb,
short packetType)

**Parameters:**
- `ByteBufferReader` `bb`
- `short` `packetType`

**Returns:** `void`

### public static void rememberPlayerPosition(IsoPlayer player,
float x,
float y)

**Parameters:**
- `IsoPlayer` `player`
- `float` `x`
- `float` `y`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\GameClient.html`*
