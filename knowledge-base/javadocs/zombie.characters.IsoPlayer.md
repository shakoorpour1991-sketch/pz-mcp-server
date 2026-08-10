---
title: zombie.characters.IsoPlayer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.IsoPlayer

`public class IsoPlayer extends IsoLivingCharacter implements IAnimalVisual, IHumanVisual, IPositional`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.characters.IsoGameCharacter
- zombie.characters.IsoLivingCharacter
- zombie.characters.IsoPlayer

## Fields

### public PhysicsDebugRenderer physicsDebugRenderer

### public static final String DEATH_MUSIC_NAME

### public static boolean isTestAIMode

### public static final boolean NoSound

### public static int assumedPlayer

### public static int numPlayers

### public static final short MAX

### public static final IsoPlayer[] players

### public int remoteSneakLvl

### public int remoteStrLvl

### public int remoteFitLvl

### public boolean moodleCantSprint

### public List<IsoAnimal> luredAnimals

### public boolean isLuringAnimals

### public boolean spottedByPlayer

### public boolean targetedByZombie

### public float lastTargeted

### public float timeSinceOpenDoor

### public float timeSinceCloseDoor

### public boolean remote

### public Role role

### public String tagPrefix

### public boolean showTag

### public boolean factionPvp

### public short onlineId

### public int onlineChunkGridWidth

### public boolean joypadIgnoreChargingRt

### public boolean mpTorchCone

### public float mpTorchDist

### public float mpTorchStrength

### public int playerIndex

### public int serverPlayerIndex

### public float useChargeDelta

### public float contextPanic

### public float numNearbyBuildingsRooms

### public boolean isCharging

### public boolean isChargingLt

### public float maxWeightDelta

### public float currentSpeed

### public boolean deathFinished

### public boolean isSpeek

### public boolean isVoiceMute

### public final Vector2 playerMoveDir

### public fmod.fmod.BaseSoundListener soundListener

### public String username

### public boolean dirtyRecalcGridStack

### public float dirtyRecalcGridStackTime

### public float runningTime

### public float timePressedContext

### public float chargeTime

### public float closestZombie

### public final Vector2 lastAngle

### public String saveFileName

### public boolean bannedAttacking

### public int sqlId

### public byte bleedingLevel

### public String accessLevel

### public boolean autoDrink

## Constructors

### public IsoPlayer(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoPlayer(IsoCell cell,
SurvivorDesc desc,
int x,
int y,
int z,
boolean isAnimal)

**Parameters:**
- `IsoCell` `cell`
- `SurvivorDesc` `desc`
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `isAnimal`

### public IsoPlayer(IsoCell cell,
SurvivorDesc desc,
int x,
int y,
int z)

**Parameters:**
- `IsoCell` `cell`
- `SurvivorDesc` `desc`
- `int` `x`
- `int` `y`
- `int` `z`

## Methods

### public void registerECSComponents()

**Returns:** `void`

### public void setOnlineID(short value)

**Parameters:**
- `short` `value`

**Returns:** `void`

### public float getTurnDelta()

**Returns:** `float`

### public void setPerformingAnAction(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean isPerformingAnAction()

**Returns:** `boolean`

### public boolean isAttacking()

**Returns:** `boolean`

### public boolean shouldBeTurning()

**Returns:** `boolean`

### public static void invokeOnPlayerInstance(Runnable callback)

The IsoPlayer.instance thread-safe invoke.
Calls the supplied callback if the IsoPlayer.instance is non-null.
Performs this in a thread-safe manner.

It is intended that, should any thread intend to use the IsoPlayer.instance, and does not want another thread
to change the ptr in the meanwhile, it should call invokeOnPlayerInstance(Runnable callback)

eg.
IsoPlayer.invokeOnPlayerInstance(()->
{
IsoPlayer.instance.doStuff();
}

**Parameters:**
- `Runnable` `callback`

**Returns:** `void`

### public static IsoPlayer getInstance()

**Returns:** `IsoPlayer`

### public static void setInstance(IsoPlayer newInstance)

**Parameters:**
- `IsoPlayer` `newInstance`

**Returns:** `void`

### public static boolean hasInstance()

**Returns:** `boolean`

### public static int getFollowDeadCount()

**Returns:** `int`

### public static void setFollowDeadCount(int aFollowDeadCount)

**Parameters:**
- `int` `aFollowDeadCount`

**Returns:** `void`

### public static ArrayList<String> getAllFileNames()

**Returns:** `ArrayList<String>`

### public static String getUniqueFileName()

**Returns:** `String`

### public static ArrayList<IsoPlayer> getAllSavedPlayers()

**Returns:** `ArrayList<IsoPlayer>`

### public static boolean isServerPlayerIDValid(String id)

**Parameters:**
- `String` `id`

**Returns:** `boolean`

### public static int getPlayerIndex()

**Returns:** `int`

### public static IsoPlayer getPlayer(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `IsoPlayer`

### public static int getPlayerIndex(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public static void visitAllPlayers(Consumer<IsoPlayer> visitor)

**Parameters:**
- `Consumer<IsoPlayer>` `visitor`

**Returns:** `void`

### public static <C> IsoPlayer findPlayer(C compareParam,
BiPredicate<IsoPlayer, C> predicate)

**Returns:** `IsoPlayer`

### public static <C> boolean anyPlayer(C compareParam,
BiPredicate<IsoPlayer, C> predicate)

**Returns:** `boolean`

### public static <ComponentType extends ECSComponent>
void visitAllPlayersWithComponent(Class<ComponentType> componentClass,
BiConsumer<IsoPlayer, ComponentType> visitor)

**Returns:** `void`

### public final int getIndex()

**Returns:** `int`

### @Deprecated
public final int getPlayerNum()

> ⚠️ **Deprecated**

**Returns:** `int`

### public static boolean allPlayersDead()

**Returns:** `boolean`

### public static ArrayList<IsoPlayer> getPlayers()

**Returns:** `ArrayList<IsoPlayer>`

### public static boolean allPlayersAsleep()

**Returns:** `boolean`

### public static boolean getCoopPVP()

**Returns:** `boolean`

### public static void setCoopPVP(boolean enabled)

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### public void TestAnimalSpotPlayer(IsoAnimal chr)

**Parameters:**
- `IsoAnimal` `chr`

**Returns:** `void`

### public void TestZombieSpotPlayer(IsoMovingObject chr)

**Parameters:**
- `IsoMovingObject` `chr`

**Returns:** `void`

### public float getPathSpeed()

**Returns:** `float`

### public boolean isGhostMode()

**Returns:** `boolean`

### public void setGhostMode(boolean aGhostMode,
boolean isForced)

**Parameters:**
- `boolean` `aGhostMode`
- `boolean` `isForced`

**Returns:** `void`

### public void setGhostMode(boolean aGhostMode)

**Parameters:**
- `boolean` `aGhostMode`

**Returns:** `void`

### public boolean isSeeEveryone()

**Returns:** `boolean`

### public void moveUnmodded(float dirX,
float dirY)

**Parameters:**
- `float` `dirX`
- `float` `dirY`

**Returns:** `void`

### public void nullifyAiming()

**Returns:** `void`

### public String GetAnimSetName()

**Returns:** `String`

### public boolean IsInMeleeAttack()

**Returns:** `boolean`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void setExtraInfoFlags(byte flags,
boolean isForced)

**Parameters:**
- `byte` `flags`
- `boolean` `isForced`

**Returns:** `void`

### public byte getExtraInfoFlags()

**Returns:** `byte`

### public boolean calculateShowAdminTag()

**Returns:** `boolean`

### public String getDescription(String separatorStr)

**Parameters:**
- `String` `separatorStr`

**Returns:** `String`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save()
throws IOException

**Returns:** `void`

### public void save(String fileName)
throws IOException

**Parameters:**
- `String` `fileName`

**Returns:** `void`

### public void load(String fileName)
throws IOException

**Parameters:**
- `String` `fileName`

**Returns:** `void`

### public void loadChange(IsoObjectChange change,
ByteBufferReader bb)

**Parameters:**
- `IsoObjectChange` `change`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public static void UpdateRemovedEmitters()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public void setVehicle4TestCollision(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public boolean isSaveFileInUse()

**Returns:** `boolean`

### public void removeSaveFile()

**Returns:** `void`

### public boolean isSaveFileIPValid()

**Returns:** `boolean`

### public String getObjectName()

**Returns:** `String`

### public float getScreenChestHeight()

**Returns:** `float`

### public Vector2 getAimVector(Vector2 vec)

**Parameters:**
- `Vector2` `vec`

**Returns:** `Vector2`

### public float getGlobalMovementMod(boolean bDoNoises)

**Parameters:**
- `boolean` `bDoNoises`

**Returns:** `float`

### public boolean isInTrees2(boolean ignoreBush)

**Parameters:**
- `boolean` `ignoreBush`

**Returns:** `boolean`

### public float getMoveSpeed()

**Returns:** `float`

### public void setMoveSpeed(float moveSpeed)

**Parameters:**
- `float` `moveSpeed`

**Returns:** `void`

### public float getTorchStrength()

**Returns:** `float`

### public float getInvAimingMod()

**Returns:** `float`

### public float getAimingMod()

**Returns:** `float`

### public float getReloadingMod()

**Returns:** `float`

### public float getAimingRangeMod()

**Returns:** `float`

### public boolean isPathfindRunning()

**Returns:** `boolean`

### public void setPathfindRunning(boolean newvalue)

**Parameters:**
- `boolean` `newvalue`

**Returns:** `void`

### public boolean isBannedAttacking()

**Returns:** `boolean`

### public void setBannedAttacking(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public float getInvAimingRangeMod()

**Returns:** `float`

### public void render(float x,
float y,
float z,
ColorInfo col,
boolean bDoChild,
boolean bWallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoChild`
- `boolean` `bWallLightingPass`
- `Shader` `shader`

**Returns:** `void`

### public void renderlast()

**Returns:** `void`

### public void setIgnoreMovement(boolean ignoreMovement)

**Parameters:**
- `boolean` `ignoreMovement`

**Returns:** `void`

### public float onHitByVehicleApplyDamage(BaseVehicle vehicle,
float impactSpeed)

**Parameters:**
- `BaseVehicle` `vehicle`
- `float` `impactSpeed`

**Returns:** `float`

### public void applyDamageFromVehicleHit(BaseVehicle vehicle,
float vehicleSpeed,
float damage)

**Parameters:**
- `BaseVehicle` `vehicle`
- `float` `vehicleSpeed`
- `float` `damage`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void setNpc(boolean isNpc)

**Parameters:**
- `boolean` `isNpc`

**Returns:** `void`

### public void processWakingUp()

**Returns:** `void`

### public void updateEnduranceWhileSitting()

**Returns:** `void`

### public void updateEnduranceWhileInVehicle()

**Returns:** `void`

### public void postupdate()

**Returns:** `void`

### public boolean isSolidForSeparate()

**Returns:** `boolean`

### public boolean isPushableForSeparate()

**Returns:** `boolean`

### public boolean isPushedByForSeparate(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `boolean`

### public void updateMovementRates()

**Returns:** `void`

### public void pressedAttack()

**Returns:** `void`

### public void setAttackVariationX(float attackVariationX)

**Parameters:**
- `float` `attackVariationX`

**Returns:** `void`

### public void setAttackVariationY(float attackVariationY)

**Parameters:**
- `float` `attackVariationY`

**Returns:** `void`

### public boolean canPerformHandToHandCombat()

**Returns:** `boolean`

### public void clearHandToHandAttack()

**Returns:** `void`

### public void setAttackAnimThrowTimer(long dt)

**Parameters:**
- `long` `dt`

**Returns:** `void`

### public boolean isAttackAnimThrowTimeOut()

**Returns:** `boolean`

### public boolean isAiming()

**Returns:** `boolean`

### public int calculateCritChance(IsoGameCharacter target)

**Parameters:**
- `IsoGameCharacter` `target`

**Returns:** `int`

### public boolean isAimControlActive()

**Returns:** `boolean`

### public boolean isGettingUp()

**Returns:** `boolean`

### public UpdateSchedulerSimulationLevel getMinimumSimulationLevel()

**Returns:** `UpdateSchedulerSimulationLevel`

### public boolean allowsTwist()

**Returns:** `boolean`

### public Vector2 getInputMoveVector(Vector2 out)

**Parameters:**
- `Vector2` `out`

**Returns:** `Vector2`

### public IsoGameCharacter getClosestTo(IsoGameCharacter closestTo)

**Parameters:**
- `IsoGameCharacter` `closestTo`

**Returns:** `IsoGameCharacter`

### public void hitConsequences(HandWeapon weapon,
IsoGameCharacter wielder,
boolean bIgnoreDamage,
float damage,
boolean bRemote)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `boolean` `bIgnoreDamage`
- `float` `damage`
- `boolean` `bRemote`

**Returns:** `void`

### public void checkActionGroup()

**Returns:** `void`

### public BaseVehicle getUseableVehicle()

**Returns:** `BaseVehicle`

### public boolean isNearVehicle()

**Returns:** `boolean`

### public BaseVehicle getNearVehicle()

**Returns:** `BaseVehicle`

### public void setAngleFromAim()

**Returns:** `void`

### public void calculateContext()

**Returns:** `void`

### public boolean isSafeToClimbOver(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `boolean`

### public boolean canPlaceCorpseOnSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean canThrowCorpseOver(IsoGridSquare fromSq,
IsoDirections dir)

**Parameters:**
- `IsoGridSquare` `fromSq`
- `IsoDirections` `dir`

**Returns:** `boolean`

### public boolean canThrowCorpseOver(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `boolean`

### public boolean doContext()

**Returns:** `boolean`

### public IsoObject getContextDoorOrWindowOrWindowFrame(IsoDirections assumedDir)

**Parameters:**
- `IsoDirections` `assumedDir`

**Returns:** `IsoObject`

### public boolean hopFence(IsoDirections dir,
boolean bTest)

**Parameters:**
- `IsoDirections` `dir`
- `boolean` `bTest`

**Returns:** `boolean`

### public boolean canClimbOverWall(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `boolean`

### public boolean doContextClimbOverWall(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `boolean`

### public boolean climbOverWall(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `boolean`

### public boolean AttemptAttack()

**Returns:** `boolean`

### public boolean DoAttack(float chargeDelta)

**Parameters:**
- `float` `chargeDelta`

**Returns:** `boolean`

### public boolean DoAttack(float chargeDelta,
String clickSound)

**Parameters:**
- `float` `chargeDelta`
- `String` `clickSound`

**Returns:** `boolean`

### public void updateLOS()

**Returns:** `void`

### public boolean checkCanSeeClient(UdpConnection remoteConnection)

**Parameters:**
- `UdpConnection` `remoteConnection`

**Returns:** `boolean`

### public boolean checkCanSeeClient(IsoPlayer remoteChr)

**Parameters:**
- `IsoPlayer` `remoteChr`

**Returns:** `boolean`

### public String getTimeSurvived()

**Returns:** `String`

### public boolean IsUsingAimWeapon()

**Returns:** `boolean`

### public int getSleepingPillsTaken()

**Returns:** `int`

### public void setSleepingPillsTaken(int sleepingPillsTaken)

If you've take more than 10 sleeping pills you lose some health If you're
drunk, 1 pills = 2

**Parameters:**
- `int` `sleepingPillsTaken`

**Returns:** `void`

### public void resetSleepingPillsTaken()

**Returns:** `void`

### public boolean isOutside()

**Returns:** `boolean`

### public double getLastSeenZomboidTime()

**Returns:** `double`

### public float getPlayerClothingTemperature()

Return the amount of temperature given by clothes wear

**Returns:** `float`

### public float getPlayerClothingInsulation()

**Returns:** `float`

### public InventoryItem getActiveLightItem()

**Returns:** `InventoryItem`

### public boolean isTorchCone()

**Returns:** `boolean`

### public float getTorchDot()

**Returns:** `float`

### public float getLightDistance()

**Returns:** `float`

### public boolean pressedMovement(boolean ignoreBlock)

**Parameters:**
- `boolean` `ignoreBlock`

**Returns:** `boolean`

### public boolean pressedCancelAction()

**Returns:** `boolean`

### public boolean checkWalkTo()

**Returns:** `boolean`

### public boolean pressedAim()

**Returns:** `boolean`

### public boolean isDoingActionThatCanBeCancelled()

**Returns:** `boolean`

### public long getSteamID()

**Returns:** `long`

### public void setSteamID(long steamId)

**Parameters:**
- `long` `steamId`

**Returns:** `void`

### public boolean isTargetedByZombie()

**Returns:** `boolean`

### public boolean isMaskClicked(int x,
int y,
boolean flip)

**Parameters:**
- `int` `x`
- `int` `y`
- `boolean` `flip`

**Returns:** `boolean`

### public int getOffSetXUI()

**Returns:** `int`

### public void setOffSetXUI(int offSetXUi)

**Parameters:**
- `int` `offSetXUi`

**Returns:** `void`

### public int getOffSetYUI()

**Returns:** `int`

### public void setOffSetYUI(int offSetYUi)

**Parameters:**
- `int` `offSetYUi`

**Returns:** `void`

### public String getUsername()

**Returns:** `String`

### public String getUsername(Boolean canShowFirstname)

**Parameters:**
- `Boolean` `canShowFirstname`

**Returns:** `String`

### public String getUsername(Boolean canShowFirstname,
Boolean canShowDisguisedName)

**Parameters:**
- `Boolean` `canShowFirstname`
- `Boolean` `canShowDisguisedName`

**Returns:** `String`

### public void setUsername(String newUsername)

**Parameters:**
- `String` `newUsername`

**Returns:** `void`

### public void updateUsername()

**Returns:** `void`

### public short getOnlineID()

**Returns:** `short`

### public boolean isLocalPlayer()

**Returns:** `boolean`

### public static boolean isLocalPlayer(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public static boolean isLocalPlayer(Object characterObject)

**Parameters:**
- `Object` `characterObject`

**Returns:** `boolean`

### public static void setLocalPlayer(int index,
IsoPlayer newPlayerObj)

**Parameters:**
- `int` `index`
- `IsoPlayer` `newPlayerObj`

**Returns:** `void`

### public static IsoPlayer getLocalPlayerByOnlineID(short id)

**Parameters:**
- `short` `id`

**Returns:** `IsoPlayer`

### public boolean isOnlyPlayerAsleep()

**Returns:** `boolean`

### public void setHasObstacleOnPath(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public boolean isRemoteAndHasObstacleOnPath()

**Returns:** `boolean`

### public void OnDeath()

**Returns:** `void`

### public boolean isNoClip()

**Returns:** `boolean`

### public void setNoClip(boolean noClip,
boolean isForced)

**Parameters:**
- `boolean` `noClip`
- `boolean` `isForced`

**Returns:** `void`

### public void setNoClip(boolean noClip)

**Parameters:**
- `boolean` `noClip`

**Returns:** `void`

### @Deprecated
public void setAuthorizeMeleeAction(boolean enabled)

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### @Deprecated
public boolean isAuthorizeMeleeAction()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public void setAuthorizeShoveStomp(boolean enabled)

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### @Deprecated
public boolean isAuthorizeShoveStomp()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### public void setAuthorizedHandToHandAction(boolean enabled)

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### public boolean isAuthorizedHandToHandAction()

**Returns:** `boolean`

### public void setAuthorizedHandToHand(boolean enabled)

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### public boolean isAuthorizedHandToHand()

**Returns:** `boolean`

### public boolean isBlockMovement()

**Returns:** `boolean`

### public void setBlockMovement(boolean blockMovement)

**Parameters:**
- `boolean` `blockMovement`

**Returns:** `void`

### public void startReceivingBodyDamageUpdates(IsoPlayer other)

**Parameters:**
- `IsoPlayer` `other`

**Returns:** `void`

### public void stopReceivingBodyDamageUpdates(IsoPlayer other)

**Parameters:**
- `IsoPlayer` `other`

**Returns:** `void`

### public Nutrition getNutrition()

**Returns:** `Nutrition`

### public Fitness getFitness()

**Returns:** `Fitness`

### public void updateRemotePlayerInVehicle()

**Returns:** `void`

### public ParameterCharacterMovementSpeed getParameterCharacterMovementSpeed()

**Returns:** `ParameterCharacterMovementSpeed`

### public void setMeleeHitSurface(ParameterMeleeHitSurface.Material material)

**Parameters:**
- `ParameterMeleeHitSurface.Material` `material`

**Returns:** `void`

### public void setMeleeHitSurface(String material)

**Parameters:**
- `String` `material`

**Returns:** `void`

### public void setVehicleHitLocation(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void DoFootstepSound(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public long playGainExperienceLevelSound()

**Returns:** `long`

### public long playerVoiceSound(String suffix)

**Parameters:**
- `String` `suffix`

**Returns:** `long`

### public long transmitPlayerVoiceSound(String suffix)

**Parameters:**
- `String` `suffix`

**Returns:** `long`

### public long stopPlayerVoiceSound(String suffix)

**Parameters:**
- `String` `suffix`

**Returns:** `long`

### public void updateVocalProperties()

**Returns:** `void`

### public boolean isPlayingAttackLoopSound(String soundName)

**Parameters:**
- `String` `soundName`

**Returns:** `boolean`

### public void startAttackLoopSound(String soundName)

**Parameters:**
- `String` `soundName`

**Returns:** `void`

### public long playRangedWeaponShootSound(String soundName)

**Parameters:**
- `String` `soundName`

**Returns:** `long`

### public void playBloodSplatterSound()

**Returns:** `void`

### public ByteBufferWriter createPlayerStats(ByteBufferWriter b,
String adminUsername)

**Parameters:**
- `ByteBufferWriter` `b`
- `String` `adminUsername`

**Returns:** `ByteBufferWriter`

### public String setPlayerStats(ByteBufferReader bb,
String adminUsername)

**Parameters:**
- `ByteBufferReader` `bb`
- `String` `adminUsername`

**Returns:** `String`

### public boolean isAllChatMuted()

**Returns:** `boolean`

### public void setAllChatMuted(boolean allChatMuted)

**Parameters:**
- `boolean` `allChatMuted`

**Returns:** `void`

### @Deprecated
public String getAccessLevel()

> ⚠️ **Deprecated**

**Returns:** `String`

### public Role getRole()

**Returns:** `Role`

### public boolean isAccessLevel(String level)

**Parameters:**
- `String` `level`

**Returns:** `boolean`

### public void setRole(String newLvl)

**Parameters:**
- `String` `newLvl`

**Returns:** `void`

### public void addMechanicsItem(String itemid,
VehiclePart part,
Long milli)

**Parameters:**
- `String` `itemid`
- `VehiclePart` `part`
- `Long` `milli`

**Returns:** `void`

### public float getZombieRelevenceScore(IsoZombie z)

**Parameters:**
- `IsoZombie` `z`

**Returns:** `float`

### public BaseVisual getVisual()

**Returns:** `BaseVisual`

### public HumanVisual getHumanVisual()

**Returns:** `HumanVisual`

### public AnimalVisual getAnimalVisual()

**Returns:** `AnimalVisual`

### public String getAnimalType()

**Returns:** `String`

### public float getAnimalSize()

**Returns:** `float`

### public ItemVisuals getItemVisuals()

**Returns:** `ItemVisuals`

### public void getItemVisuals(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public void dressInNamedOutfit(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `void`

### public void dressInClothingItem(String itemGUID)

**Parameters:**
- `String` `itemGUID`

**Returns:** `void`

### public void onWornItemsChanged()

**Returns:** `void`

### public Vector2 getLastAngle()

**Returns:** `Vector2`

### public void setLastAngle(Vector2 lastAngle)

**Parameters:**
- `Vector2` `lastAngle`

**Returns:** `void`

### public int getDialogMood()

**Returns:** `int`

### public void setDialogMood(int dialogMood)

**Parameters:**
- `int` `dialogMood`

**Returns:** `void`

### public int getPing()

**Returns:** `int`

### public void setPing(int ping)

**Parameters:**
- `int` `ping`

**Returns:** `void`

### public IsoMovingObject getDragObject()

**Returns:** `IsoMovingObject`

### public void setDragObject(IsoMovingObject dragObject)

**Parameters:**
- `IsoMovingObject` `dragObject`

**Returns:** `void`

### public float getAsleepTime()

**Returns:** `float`

### public void setAsleepTime(float asleepTime)

**Parameters:**
- `float` `asleepTime`

**Returns:** `void`

### public Stack<IsoMovingObject> getSpottedList()

**Returns:** `Stack<IsoMovingObject>`

### public int getTicksSinceSeenZombie()

**Returns:** `int`

### public void setTicksSinceSeenZombie(int ticksSinceSeenZombie)

**Parameters:**
- `int` `ticksSinceSeenZombie`

**Returns:** `void`

### public boolean isWaiting()

**Returns:** `boolean`

### public void setWaiting(boolean waiting)

**Parameters:**
- `boolean` `waiting`

**Returns:** `void`

### public IsoSurvivor getDragCharacter()

**Returns:** `IsoSurvivor`

### public void setDragCharacter(IsoSurvivor dragCharacter)

**Parameters:**
- `IsoSurvivor` `dragCharacter`

**Returns:** `void`

### public float getHeartDelay()

**Returns:** `float`

### public void setHeartDelay(float heartDelay)

**Parameters:**
- `float` `heartDelay`

**Returns:** `void`

### public float getHeartDelayMax()

**Returns:** `float`

### public void setHeartDelayMax(int heartDelayMax)

**Parameters:**
- `int` `heartDelayMax`

**Returns:** `void`

### public double getHoursSurvived()

**Returns:** `double`

### public void setHoursSurvived(double hrs)

**Parameters:**
- `double` `hrs`

**Returns:** `void`

### public float getMaxWeightDelta()

**Returns:** `float`

### public void setMaxWeightDelta(float maxWeightDelta)

**Parameters:**
- `float` `maxWeightDelta`

**Returns:** `void`

### public boolean isbChangeCharacterDebounce()

**Returns:** `boolean`

### public void setbChangeCharacterDebounce(boolean changeCharacterDebounce)

**Parameters:**
- `boolean` `changeCharacterDebounce`

**Returns:** `void`

### public int getFollowID()

**Returns:** `int`

### public void setFollowID(int followId)

**Parameters:**
- `int` `followId`

**Returns:** `void`

### public boolean isbSeenThisFrame()

**Returns:** `boolean`

### public void setbSeenThisFrame(boolean seenThisFrame)

**Parameters:**
- `boolean` `seenThisFrame`

**Returns:** `void`

### public boolean isbCouldBeSeenThisFrame()

**Returns:** `boolean`

### public void setbCouldBeSeenThisFrame(boolean couldBeSeenThisFrame)

**Parameters:**
- `boolean` `couldBeSeenThisFrame`

**Returns:** `void`

### public float getTimeSinceLastStab()

**Returns:** `float`

### public void setTimeSinceLastStab(float timeSinceLastStab)

**Parameters:**
- `float` `timeSinceLastStab`

**Returns:** `void`

### public Stack<IsoMovingObject> getLastSpotted()

**Returns:** `Stack<IsoMovingObject>`

### public void setLastSpotted(Stack<IsoMovingObject> lastSpotted)

**Parameters:**
- `Stack<IsoMovingObject>` `lastSpotted`

**Returns:** `void`

### public int getClearSpottedTimer()

**Returns:** `int`

### public void setClearSpottedTimer(int clearSpottedTimer)

**Parameters:**
- `int` `clearSpottedTimer`

**Returns:** `void`

### public boolean IsRunning()

**Returns:** `boolean`

### public void InitSpriteParts()

**Returns:** `void`

### public String getTagPrefix()

**Returns:** `String`

### public void setTagPrefix(String newTag)

**Parameters:**
- `String` `newTag`

**Returns:** `void`

### public ColorInfo getTagColor()

**Returns:** `ColorInfo`

### public void setTagColor(ColorInfo tagColor)

**Parameters:**
- `ColorInfo` `tagColor`

**Returns:** `void`

### public String getDisplayName()

**Returns:** `String`

### public String getDisguisedDisplayName()

**Returns:** `String`

### public void resetDisplayName()

**Returns:** `void`

### public void setDisplayName(String displayName)

**Parameters:**
- `String` `displayName`

**Returns:** `void`

### public boolean isSeeNonPvpZone()

**Returns:** `boolean`

### public boolean isSeeDesignationZone()

**Returns:** `boolean`

### public void setSeeDesignationZone(boolean seeMetaAnimalZone)

**Parameters:**
- `boolean` `seeMetaAnimalZone`

**Returns:** `void`

### public void addSelectedZoneForHighlight(Double id)

**Parameters:**
- `Double` `id`

**Returns:** `void`

### public void setSelectedZoneForHighlight(Double id)

**Parameters:**
- `Double` `id`

**Returns:** `void`

### public Double getSelectedZoneForHighlight()

**Returns:** `Double`

### public ArrayList<Double> getSelectedZonesForHighlight()

**Returns:** `ArrayList<Double>`

### public void resetSelectedZonesForHighlight()

**Returns:** `void`

### public void setSeeNonPvpZone(boolean seeNonPvpZone)

**Parameters:**
- `boolean` `seeNonPvpZone`

**Returns:** `void`

### public boolean checkZonesInterception(int x1,
int x2,
int y1,
int y2)

**Parameters:**
- `int` `x1`
- `int` `x2`
- `int` `y1`
- `int` `y2`

**Returns:** `boolean`

### public boolean isShowTag()

**Returns:** `boolean`

### public void setShowTag(boolean show)

**Parameters:**
- `boolean` `show`

**Returns:** `void`

### public boolean isFactionPvp()

**Returns:** `boolean`

### public void setFactionPvp(boolean pvp)

**Parameters:**
- `boolean` `pvp`

**Returns:** `void`

### public boolean isForceOverrideAnim()

**Returns:** `boolean`

### public void setForceOverrideAnim(boolean forceOverride)

**Parameters:**
- `boolean` `forceOverride`

**Returns:** `void`

### public Long getMechanicsItem(String itemId)

**Parameters:**
- `String` `itemId`

**Returns:** `Long`

### public boolean isWearingNightVisionGoggles()

**Returns:** `boolean`

### public void setWearingNightVisionGoggles(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void OnAnimEvent(AnimLayer sender,
AnimationTrack track,
AnimEvent event)

**Parameters:**
- `AnimLayer` `sender`
- `AnimationTrack` `track`
- `AnimEvent` `event`

**Returns:** `void`

### public void setAddedToModelManager(ModelManager modelManager,
boolean isAdded)

**Parameters:**
- `ModelManager` `modelManager`
- `boolean` `isAdded`

**Returns:** `void`

### public boolean isTimedActionInstant()

**Returns:** `boolean`

### public boolean isSkeleton()

**Returns:** `boolean`

### public void addWorldSoundUnlessInvisible(int radius,
int volume,
boolean bStressHumans)

**Parameters:**
- `int` `radius`
- `int` `volume`
- `boolean` `bStressHumans`

**Returns:** `void`

### public int getMoodleLevel(MoodleType type)

**Parameters:**
- `MoodleType` `type`

**Returns:** `int`

### public boolean isAttackStarted()

**Returns:** `boolean`

### public void setAttackStarted(boolean attackStarted)

**Parameters:**
- `boolean` `attackStarted`

**Returns:** `void`

### public boolean isBehaviourMoving()

**Returns:** `boolean`

### public boolean isJustMoved()

**Returns:** `boolean`

### public void setJustMoved(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean isPlayerMoving()

**Returns:** `boolean`

### public float getTimedActionTimeModifier()

**Returns:** `float`

### public boolean isLookingWhileInVehicle()

**Returns:** `boolean`

### public void setInitiateAttack(boolean initiate)

**Parameters:**
- `boolean` `initiate`

**Returns:** `void`

### public boolean isInitiateAttack()

**Returns:** `boolean`

### public boolean isIgnoreContextKey()

**Returns:** `boolean`

### public void setIgnoreContextKey(boolean ignoreContextKey)

**Parameters:**
- `boolean` `ignoreContextKey`

**Returns:** `void`

### public boolean isIgnoreAutoVault()

**Returns:** `boolean`

### public void setIgnoreAutoVault(boolean ignoreAutoVault)

**Parameters:**
- `boolean` `ignoreAutoVault`

**Returns:** `void`

### public boolean isAttackType(AttackType attackType)

**Parameters:**
- `AttackType` `attackType`

**Returns:** `boolean`

### public AttackType getAttackType()

**Returns:** `AttackType`

### public void setAttackType(AttackType attackType)

**Parameters:**
- `AttackType` `attackType`

**Returns:** `void`

### public boolean canSeeAll()

**Returns:** `boolean`

### public void setCanSeeAll(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isCheatPlayerSeeEveryone()

**Returns:** `boolean`

### public float getRelevantAndDistance(float x,
float y,
float relevantRange)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `relevantRange`

**Returns:** `float`

### public boolean canHearAll()

**Returns:** `boolean`

### public void setCanHearAll(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public ArrayList<String> getAlreadyReadBook()

**Returns:** `ArrayList<String>`

### public void setMoodleCantSprint(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setAttackFromBehind(boolean attackFromBehind)

**Parameters:**
- `boolean` `attackFromBehind`

**Returns:** `void`

### public boolean isAttackFromBehind()

**Returns:** `boolean`

### public void onKilled(IsoGameCharacter killer,
HandWeapon attackingWeapon,
boolean isGory)

**Parameters:**
- `IsoGameCharacter` `killer`
- `HandWeapon` `attackingWeapon`
- `boolean` `isGory`

**Returns:** `void`

### public NetworkPlayerAI getNetworkCharacterAI()

**Returns:** `NetworkPlayerAI`

### public void preupdate()

**Returns:** `void`

### public boolean allowsInvisibleAnimationSkips()

**Returns:** `boolean`

### public void setFishingStage(String stage)

**Parameters:**
- `String` `stage`

**Returns:** `void`

### public void setFitnessSpeed()

**Returns:** `void`

### public boolean isClimbOverWallSuccess()

**Returns:** `boolean`

### public void setClimbOverWallSuccess(boolean climbOverWallSuccess)

**Parameters:**
- `boolean` `climbOverWallSuccess`

**Returns:** `void`

### public boolean isClimbOverWallStruggle()

**Returns:** `boolean`

### public void setClimbOverWallStruggle(boolean climbOverWallStruggle)

**Parameters:**
- `boolean` `climbOverWallStruggle`

**Returns:** `void`

### public boolean isSkipResolveCollision()

**Returns:** `boolean`

### public MusicIntensityEvents getMusicIntensityEvents()

**Returns:** `MusicIntensityEvents`

### public void triggerMusicIntensityEvent(String id)

**Parameters:**
- `String` `id`

**Returns:** `void`

### public MusicThreatStatuses getMusicThreatStatuses()

**Returns:** `MusicThreatStatuses`

### public void addAttachedAnimal(IsoAnimal anim)

**Parameters:**
- `IsoAnimal` `anim`

**Returns:** `void`

### public List<IsoAnimal> getAttachedAnimals()

**Returns:** `List<IsoAnimal>`

### public void removeAttachedAnimal(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void removeAllAttachedAnimals()

**Returns:** `void`

### public boolean hasAttachedAnimals()

**Returns:** `boolean`

### public void checkAnimalAttachedToRope(InventoryItem newPrimaryItem)

**Parameters:**
- `InventoryItem` `newPrimaryItem`

**Returns:** `void`

### public void lureAnimal(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public List<IsoAnimal> getLuredAnimals()

**Returns:** `List<IsoAnimal>`

### public void stopLuringAnimals(boolean eatFood)

**Parameters:**
- `boolean` `eatFood`

**Returns:** `void`

### public void setIsLuringAnimals(boolean luring)

**Parameters:**
- `boolean` `luring`

**Returns:** `void`

### public int getVoiceType()

**Returns:** `int`

### public void setVoiceType(int voiceType)

**Parameters:**
- `int` `voiceType`

**Returns:** `void`

### public void setVoicePitch(float voicePitch)

**Parameters:**
- `float` `voicePitch`

**Returns:** `void`

### public boolean isFarming()

**Returns:** `boolean`

### public void setIsFarming(boolean isFarmingBool)

**Parameters:**
- `boolean` `isFarmingBool`

**Returns:** `void`

### public boolean tooDarkToRead()

**Returns:** `boolean`

### public boolean isWalking()

**Returns:** `boolean`

### public boolean isInvPageDirty()

**Returns:** `boolean`

### public void setInvPageDirty(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public float getVoicePitch()

**Returns:** `float`

### public void setCombatSpeed(float combatSpeed)

**Parameters:**
- `float` `combatSpeed`

**Returns:** `void`

### public float getCombatSpeed()

**Returns:** `float`

### public boolean isMeleePressed()

**Returns:** `boolean`

### public boolean isGrapplePressed()

**Returns:** `boolean`

### public void setRole(Role newRole)

**Parameters:**
- `Role` `newRole`

**Returns:** `void`

### public boolean wasLastAttackHandToHand()

**Returns:** `boolean`

### public void setLastAttackWasHandToHand(boolean lastAttackWasHandToHand)

**Parameters:**
- `boolean` `lastAttackWasHandToHand`

**Returns:** `void`

### public void petAnimal()

**Returns:** `void`

### public IsoAnimal getUseableAnimal()

**Returns:** `IsoAnimal`

### public LuaTimedActionNew getTimedActionToRetrigger()

**Returns:** `LuaTimedActionNew`

### public void setTimedActionToRetrigger(LuaTimedActionNew timedActionToRetrigger)

**Parameters:**
- `LuaTimedActionNew` `timedActionToRetrigger`

**Returns:** `void`

### public PlayerCraftHistory getPlayerCraftHistory()

**Returns:** `PlayerCraftHistory`

### public boolean isFavouriteRecipe(String recipe)

**Parameters:**
- `String` `recipe`

**Returns:** `boolean`

### public boolean isFavouriteRecipe(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `boolean`

### public boolean isUnwanted(String item)

**Parameters:**
- `String` `item`

**Returns:** `boolean`

### public void setUnwanted(String item,
Boolean unwanted)

**Parameters:**
- `String` `item`
- `Boolean` `unwanted`

**Returns:** `void`

### public static String getUnwantedModDataString(String item)

**Parameters:**
- `String` `item`

**Returns:** `String`

### public int getTimeSinceLastNetData()

**Returns:** `int`

### public void setTimeSinceLastNetData(int timeSinceLastNetData)

**Parameters:**
- `int` `timeSinceLastNetData`

**Returns:** `void`

### public long getLastRemoteUpdate()

**Returns:** `long`

### public void setLastRemoteUpdate(long lastRemoteUpdate)

**Parameters:**
- `long` `lastRemoteUpdate`

**Returns:** `void`

### public boolean getAutoDrink()

**Returns:** `boolean`

### public void setAutoDrink(boolean autoDrink)

**Parameters:**
- `boolean` `autoDrink`

**Returns:** `void`

### public short getAnticheatMask(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `short`

### public void setLastCheatToggleMillis(long lastCheatToggleMillis)

**Parameters:**
- `long` `lastCheatToggleMillis`

**Returns:** `void`

### public static void forEachPlayer(Invokers.Params1.ICallback<IsoPlayer> visitor)

**Parameters:**
- `Invokers.Params1.ICallback<IsoPlayer>` `visitor`

**Returns:** `void`

### public void syncVisuals()

**Returns:** `void`

### public IsoDeadBody findClosestCorpseOnGroundToPickup()

**Returns:** `IsoDeadBody`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\IsoPlayer.html`*
