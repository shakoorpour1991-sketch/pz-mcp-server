---
title: zombie.characters.IsoZombie
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.IsoZombie

`public final class IsoZombie extends IsoGameCharacter implements IHumanVisual`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.characters.IsoGameCharacter
- zombie.characters.IsoZombie

## Fields

### public static final byte SPEED_NONE

### public static final byte SPEED_SPRINTER

### public static final byte SPEED_FAST_SHAMBLER

### public static final byte SPEED_SHAMBLER

### public static final byte SPEED_RANDOM

### public static final byte HEARING_PINPOINT

### public static final byte HEARING_NORMAL

### public static final byte HEARING_POOR

### public static final byte HEARING_RANDOM

### public static final byte HEARING_NORMAL_OR_POOR

### public static final byte THUMP_FLAG_GENERIC

### public static final byte THUMP_FLAG_WINDOW_EXTRA

### public static final byte THUMP_FLAG_WINDOW

### public static final byte THUMP_FLAG_METAL

### public static final byte THUMP_FLAG_GARAGE_DOOR

### public static final byte THUMP_FLAG_CHAINLINK_FENCE

### public static final byte THUMP_FLAG_METAL_POLE_GATE

### public static final byte THUMP_FLAG_WOOD

### public static final int AllowRepathDelayMax

### public static final boolean SPRINTER_FIXES

### public int lastTargetSeenX

### public int lastTargetSeenY

### public int lastTargetSeenZ

### public boolean ghost

### public float lungeTimer

### public long lungeSoundTime

### public IsoMovingObject target

### public float timeSinceSeenFlesh

### public int followCount

### public int zombieId

### public boolean staggerBack

### public DeadBodyAtlas.BodyTexture atlasTex

### public boolean indoorZombie

### public int thumpFlag

### public boolean thumpSent

### public static final float EAT_BODY_DIST

### public static final float EAT_BODY_TIME

### public static final float LUNGE_TIME

### public static final float CRAWLER_DAMAGE_DOT

### public static final float CRAWLER_DAMAGE_RANGE

### public int speedType

### public ZombieGroup group

### public boolean inactive

### public int strength

### public int cognition

### public int memory

### public int sight

### public int hearing

### public Object soundSourceTarget

### public float soundAttract

### public float soundAttractTimeout

### public boolean alerted

### public boolean dressInRandomOutfit

### public String pendingOutfitName

### public IsoDeadBody bodyToEat

### public IsoMovingObject eatBodyTarget

### public boolean collideWhileHit

### public int lastPlayerHit

### public static final float VISION_RADIUS_MAX

### public static final float VISION_RADIUS_MIN

### public float visionRadiusResult

### public static final float VISION_FOG_PENALTY_MAX

### public static final float VISION_RAIN_PENALTY_MAX

### public static final float VISION_DARKNESS_PENALTY_MAX

### public static final int HEARING_UNSEEN_OFFSET_MIN

### public static final int HEARING_UNSEEN_OFFSET_HEAVY_RAIN

### public static final int HEARING_UNSEEN_OFFSET_MAX

### public Imposter imposter

### public IsoMovingObject spottedLast

### public float movex

### public float movey

### public short lastRemoteUpdate

### public short onlineId

### public String spriteName

### public static final int PALETTE_COUNT

### public final Vector2 vectorToTarget

### public float allowRepathDelay

### public boolean keepItReal

### public final ParameterCharacterInside parameterCharacterInside

### public final ParameterCharacterOnFire parameterCharacterOnFire

### public final ParameterPlayerDistance parameterPlayerDistance

### public final ParameterZombieState parameterZombieState

### public boolean scratch

### public boolean laceration

### public ZombiePacket zombiePacket

### public boolean zombiePacketUpdated

### public long lastChangeOwner

### public int bloodSplatAmount

### public BodyPartType lastHitPart

### public float timeSinceRespondToSound

### public String walkVariantUse

### public String walkVariant

### public boolean lunger

### public boolean running

### public boolean crawling

### public boolean remote

### public boolean immortalTutorialZombie

## Constructors

### public IsoZombie(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoZombie(IsoCell cell,
SurvivorDesc desc,
int palette)

**Parameters:**
- `IsoCell` `cell`
- `SurvivorDesc` `desc`
- `int` `palette`

## Methods

### public void registerECSComponents()

**Returns:** `void`

### public String toString()

**Returns:** `String`

### public String getObjectName()

**Returns:** `String`

### public short getOnlineID()

**Returns:** `short`

### public boolean isRemoteZombie()

**Returns:** `boolean`

### public UdpConnection getOwner()

**Returns:** `UdpConnection`

### public void setOwner(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public IsoPlayer getOwnerPlayer()

**Returns:** `IsoPlayer`

### public void setOwnerPlayer(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void setVehicle4TestCollision(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void initializeStates()

**Returns:** `void`

### public float getUnbalancedLevel()

**Returns:** `float`

### public void setUnbalancedLevel(float unbalancedLevel)

**Parameters:**
- `float` `unbalancedLevel`

**Returns:** `void`

### public void actionStateChanged(ActionContext sender)

**Parameters:**
- `ActionContext` `sender`

**Returns:** `void`

### public String GetAnimSetName()

**Returns:** `String`

### public void InitSpritePartsZombie()

**Returns:** `void`

### public void InitSpritePartsZombie(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `void`

### public void pathToCharacter(IsoGameCharacter target)

**Parameters:**
- `IsoGameCharacter` `target`

**Returns:** `void`

### public void pathToLocationF(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void collideWith(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public float Hit(HandWeapon weapon,
IsoGameCharacter wielder,
float damageSplit,
boolean bIgnoreDamage,
float modDelta,
boolean bRemote)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `float` `damageSplit`
- `boolean` `bIgnoreDamage`
- `float` `modDelta`
- `boolean` `bRemote`

**Returns:** `float`

### public void onMouseLeftClick()

**Returns:** `void`

### public void onZombieGrappleEnded()

**Returns:** `void`

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

### public boolean isRespondingToPlayerSound()

**Returns:** `boolean`

### public boolean isMovingToPlayerSound()

**Returns:** `boolean`

### public void RespondToSound()

**Returns:** `void`

### public void setTurnAlertedValues(int soundX,
int soundY)

**Parameters:**
- `int` `soundX`
- `int` `soundY`

**Returns:** `void`

### public boolean getAttackDidDamage()

**Returns:** `boolean`

### public void setAttackDidDamage(boolean attackDidDamage)

**Parameters:**
- `boolean` `attackDidDamage`

**Returns:** `void`

### public String getAttackOutcome()

**Returns:** `String`

### public void setAttackOutcome(String attackOutcome)

**Parameters:**
- `String` `attackOutcome`

**Returns:** `void`

### public void setReanimatedForGrappleOnly(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean isReanimatedForGrappleOnly()

**Returns:** `boolean`

### public void clearAggroList()

**Returns:** `void`

### public void addAggro(IsoMovingObject other,
float damage)

**Parameters:**
- `IsoMovingObject` `other`
- `float` `damage`

**Returns:** `void`

### public boolean isLeadAggro(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `boolean`

### public void spottedNew(IsoMovingObject other,
boolean bForced)

**Parameters:**
- `IsoMovingObject` `other`
- `boolean` `bForced`

**Returns:** `void`

### public void spottedOld(IsoMovingObject other,
boolean bForced)

**Parameters:**
- `IsoMovingObject` `other`
- `boolean` `bForced`

**Returns:** `void`

### public void spotted(IsoMovingObject other,
boolean bForced)

**Parameters:**
- `IsoMovingObject` `other`
- `boolean` `bForced`

**Returns:** `void`

### public void moveUnmodded(float dirX,
float dirY)

**Parameters:**
- `float` `dirX`
- `float` `dirY`

**Returns:** `void`

### public void DoFootstepSound(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public void addFootstepParametersIfNeeded()

**Returns:** `void`

### public void DoFootstepSound(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public void preupdate()

**Returns:** `void`

### public boolean allowsInvisibleAnimationSkips()

**Returns:** `boolean`

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

### public void update()

**Returns:** `void`

### public int getVoiceChoice()

**Returns:** `int`

### public String getVoiceSoundName()

**Returns:** `String`

### public String getBiteSoundName()

**Returns:** `String`

### public void updateVocalProperties()

**Returns:** `void`

### public void setVehicleHitLocation(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void getZombieWalkTowardSpeed(float speed,
float dist,
Vector2 temp)

**Parameters:**
- `float` `speed`
- `float` `dist`
- `Vector2` `temp`

**Returns:** `void`

### public void getZombieLungeSpeed()

**Returns:** `void`

### public boolean tryThump(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public void Wander()

**Returns:** `void`

### public void DoZombieInventory()

**Returns:** `void`

### public void DoCorpseInventory()

**Returns:** `void`

### public void DoZombieStats()

**Returns:** `void`

### public void setWalkType(String walkType)

**Parameters:**
- `String` `walkType`

**Returns:** `void`

### public static int getSpeedTypeFromWalkType(String walkType)

**Parameters:**
- `String` `walkType`

**Returns:** `int`

### public void setSpeedTypeFromWalkType()

**Returns:** `void`

### public void DoZombieSpeeds(float spMod)

**Parameters:**
- `float` `spMod`

**Returns:** `void`

### public boolean isFakeDead()

**Returns:** `boolean`

### public void setFakeDead(boolean bFakeDead)

**Parameters:**
- `boolean` `bFakeDead`

**Returns:** `void`

### public boolean isForceFakeDead()

**Returns:** `boolean`

### public void setForceFakeDead(boolean bForceFakeDead)

**Parameters:**
- `boolean` `bForceFakeDead`

**Returns:** `void`

### public float onHitByVehicle(BaseVehicle vehicle,
float impactSpeed,
Vector2 hitDir,
Vector2 impactPosOnVehicle)

**Parameters:**
- `BaseVehicle` `vehicle`
- `float` `impactSpeed`
- `Vector2` `hitDir`
- `Vector2` `impactPosOnVehicle`

**Returns:** `float`

### public void addBloodFromVehicleImpact(float speed)

**Parameters:**
- `float` `speed`

**Returns:** `void`

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

### public long playHurtSound()

**Returns:** `long`

### public void removeFromWorld()

**Returns:** `void`

### public void resetForReuse()

**Returns:** `void`

### public boolean wasFakeDead()

**Returns:** `boolean`

### public void setWasFakeDead(boolean wasFakeDead)

**Parameters:**
- `boolean` `wasFakeDead`

**Returns:** `void`

### public void setCrawler(boolean crawling)

**Parameters:**
- `boolean` `crawling`

**Returns:** `void`

### public boolean isBecomeCrawler()

**Returns:** `boolean`

### public void setBecomeCrawler(boolean crawler)

**Parameters:**
- `boolean` `crawler`

**Returns:** `void`

### public boolean isReanimate()

**Returns:** `boolean`

### public void setReanimate(boolean reanimate)

**Parameters:**
- `boolean` `reanimate`

**Returns:** `void`

### public boolean isReanimatedPlayer()

**Returns:** `boolean`

### public void setReanimatedPlayer(boolean reanimated)

**Parameters:**
- `boolean` `reanimated`

**Returns:** `void`

### public IsoPlayer getReanimatedPlayer()

**Returns:** `IsoPlayer`

### public void setFemaleEtc(boolean female)

**Parameters:**
- `boolean` `female`

**Returns:** `void`

### public void addRandomBloodDirtHolesEtc()

**Returns:** `void`

### public void useDescriptor(SharedDescriptors.Descriptor sharedDesc)

**Parameters:**
- `SharedDescriptors.Descriptor` `sharedDesc`

**Returns:** `void`

### public SharedDescriptors.Descriptor getSharedDescriptor()

**Returns:** `SharedDescriptors.Descriptor`

### public int getSharedDescriptorID()

**Returns:** `int`

### public int getScreenProperX(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public int getScreenProperY(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public BaseVisual getVisual()

**Returns:** `BaseVisual`

### public HumanVisual getHumanVisual()

**Returns:** `HumanVisual`

### public ItemVisuals getItemVisuals()

**Returns:** `ItemVisuals`

### public void getItemVisuals(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public boolean isUsingWornItems()

**Returns:** `boolean`

### public void setAsSurvivor()

**Returns:** `void`

### public void dressInRandomOutfit()

Description copied from class: IsoGameCharacter

**Returns:** `void`

### public void dressInNamedOutfit(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `void`

### public void dressInPersistentOutfitID(int outfitID)

**Parameters:**
- `int` `outfitID`

**Returns:** `void`

### public void dressInClothingItem(String itemGUID)

**Parameters:**
- `String` `itemGUID`

**Returns:** `void`

### public boolean onDeath_ShouldDoSplatterAndSounds(HandWeapon weapon,
IsoGameCharacter wielder,
boolean isGory)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `boolean` `isGory`

**Returns:** `boolean`

### public void onWornItemsChanged()

**Returns:** `void`

### public void clothingItemChanged(String itemGuid)

Description copied from class: IsoGameCharacter

**Parameters:**
- `String` `itemGuid` — The item's Globally Unique Identifier (GUID).

**Returns:** `void`

### public boolean WanderFromWindow()

**Returns:** `boolean`

### public boolean isUseless()

**Returns:** `boolean`

### public void setUseless(boolean useless)

**Parameters:**
- `boolean` `useless`

**Returns:** `void`

### public void setImmortalTutorialZombie(boolean immortal)

**Parameters:**
- `boolean` `immortal`

**Returns:** `void`

### public boolean isTargetInCone(float dist,
float dot)

**Parameters:**
- `float` `dist`
- `float` `dot`

**Returns:** `boolean`

### public boolean isCrawling()

**Returns:** `boolean`

### public boolean isCanCrawlUnderVehicle()

**Returns:** `boolean`

### public void setCanCrawlUnderVehicle(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isCanWalk()

**Returns:** `boolean`

### public void setCanWalk(boolean bCanStand)

**Parameters:**
- `boolean` `bCanStand`

**Returns:** `void`

### public void initCanCrawlUnderVehicle()

**Returns:** `void`

### public boolean shouldGetUpFromCrawl()

**Returns:** `boolean`

### public void toggleCrawling()

**Returns:** `void`

### public void knockDown(boolean hitFromBehind)

**Parameters:**
- `boolean` `hitFromBehind`

**Returns:** `void`

### public void addItemToSpawnAtDeath(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void clearItemsToSpawnAtDeath()

**Returns:** `void`

### public IsoMovingObject getEatBodyTarget()

**Returns:** `IsoMovingObject`

### public float getEatSpeed()

**Returns:** `float`

### public void setEatBodyTarget(IsoMovingObject target,
boolean force)

**Parameters:**
- `IsoMovingObject` `target`
- `boolean` `force`

**Returns:** `void`

### public void setEatBodyTarget(IsoMovingObject target,
boolean force,
float eatSpeed)

**Parameters:**
- `IsoMovingObject` `target`
- `boolean` `force`
- `float` `eatSpeed`

**Returns:** `void`

### public int getCrawlerType()

**Returns:** `int`

### public void setCrawlerType(int crawlerType)

**Parameters:**
- `int` `crawlerType`

**Returns:** `void`

### public void addRandomVisualBandages()

Possibly add visual bandages (bloody) on the zombie
TODO: Make InventoryItem linked to it in DeadBodyAtlas to being able to remove them (like primary/secondary weapons)

**Returns:** `void`

### public void addVisualBandage(BodyPartType bodyPart,
boolean bloody)

**Parameters:**
- `BodyPartType` `bodyPart`
- `boolean` `bloody`

**Returns:** `void`

### public void addRandomVisualDamages()

Add some random visual damage (clothing actually) to the zombies.
Those items won't appear in inventory.

**Returns:** `void`

### public String getPlayerAttackPosition()

**Returns:** `String`

### public void setPlayerAttackPosition(String playerAttackPosition)

**Parameters:**
- `String` `playerAttackPosition`

**Returns:** `void`

### public boolean isSitAgainstWall()

**Returns:** `boolean`

### public void setSitAgainstWall(boolean sitAgainstWall)

**Parameters:**
- `boolean` `sitAgainstWall`

**Returns:** `void`

### public boolean isSkeleton()

**Returns:** `boolean`

### public boolean isZombie()

**Returns:** `boolean`

### public void setSkeleton(boolean isSkeleton)

**Parameters:**
- `boolean` `isSkeleton`

**Returns:** `void`

### public int getHitTime()

**Returns:** `int`

### public void setHitTime(int hitTime)

**Parameters:**
- `int` `hitTime`

**Returns:** `void`

### public int getThumpTimer()

**Returns:** `int`

### public void setThumpTimer(int thumpTimer)

**Parameters:**
- `int` `thumpTimer`

**Returns:** `void`

### public IsoMovingObject getTarget()

**Returns:** `IsoMovingObject`

### public void setTargetSeenTime(float seconds)

**Parameters:**
- `float` `seconds`

**Returns:** `void`

### public float getTargetSeenTime()

**Returns:** `float`

### public boolean isTargetVisible()

**Returns:** `boolean`

### public float getTurnDelta()

**Returns:** `float`

### public boolean isAttacking()

**Returns:** `boolean`

### public boolean isZombieAttacking()

**Returns:** `boolean`

### public boolean isZombieAttacking(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `boolean`

### public int getHitHeadWhileOnFloor()

**Returns:** `int`

### public String getRealState()

**Returns:** `String`

### public void setHitHeadWhileOnFloor(int hitHeadWhileOnFloor)

**Parameters:**
- `int` `hitHeadWhileOnFloor`

**Returns:** `void`

### public boolean isHitLegsWhileOnFloor()

**Returns:** `boolean`

### public void setHitLegsWhileOnFloor(boolean hitLegsWhileOnFloor)

**Parameters:**
- `boolean` `hitLegsWhileOnFloor`

**Returns:** `void`

### public void makeInactive(boolean binactive)

**Parameters:**
- `boolean` `binactive`

**Returns:** `void`

### public float getFootstepVolume()

**Returns:** `float`

### public boolean isFacingTarget()

**Returns:** `boolean`

### public boolean isTargetLocationKnown()

**Returns:** `boolean`

### public boolean shouldDoFenceLunge()

**Returns:** `boolean`

### public boolean isProne()

**Returns:** `boolean`

### public boolean isGettingUp()

**Returns:** `boolean`

### public void setTarget(IsoMovingObject t)

**Parameters:**
- `IsoMovingObject` `t`

**Returns:** `void`

### public boolean isAlwaysKnockedDown()

**Returns:** `boolean`

### public void setAlwaysKnockedDown(boolean alwaysKnockedDown)

**Parameters:**
- `boolean` `alwaysKnockedDown`

**Returns:** `void`

### public void setDressInRandomOutfit(boolean dressInRandom)

**Parameters:**
- `boolean` `dressInRandom`

**Returns:** `void`

### public void setBodyToEat(IsoDeadBody body)

**Parameters:**
- `IsoDeadBody` `body`

**Returns:** `void`

### public boolean isForceEatingAnimation()

**Returns:** `boolean`

### public void setForceEatingAnimation(boolean forceEatingAnimation)

**Parameters:**
- `boolean` `forceEatingAnimation`

**Returns:** `void`

### public boolean isOnlyJawStab()

**Returns:** `boolean`

### public void setOnlyJawStab(boolean onlyJawStab)

**Parameters:**
- `boolean` `onlyJawStab`

**Returns:** `void`

### public boolean isNoTeeth()

**Returns:** `boolean`

### public boolean cantBite()

**Returns:** `boolean`

### public void setNoTeeth(boolean noTeeth)

**Parameters:**
- `boolean` `noTeeth`

**Returns:** `void`

### public void setThumpFlag(int v)

**Parameters:**
- `int` `v`

**Returns:** `void`

### public void setThumpCondition(float condition)

**Parameters:**
- `float` `condition`

**Returns:** `void`

### public void setThumpCondition(int condition,
int maxCondition)

**Parameters:**
- `int` `condition`
- `int` `maxCondition`

**Returns:** `void`

### public float getThumpCondition()

**Returns:** `float`

### public boolean isStaggerBack()

**Returns:** `boolean`

### public void setStaggerBack(boolean bStaggerBack)

**Parameters:**
- `boolean` `bStaggerBack`

**Returns:** `void`

### public boolean isKnifeDeath()

**Returns:** `boolean`

### public void setKnifeDeath(boolean bKnifeDeath)

**Parameters:**
- `boolean` `bKnifeDeath`

**Returns:** `void`

### public boolean isJawStabAttach()

**Returns:** `boolean`

### public void setJawStabAttach(boolean bJawStabAttach)

**Parameters:**
- `boolean` `bJawStabAttach`

**Returns:** `void`

### public void onKilled(IsoGameCharacter killer,
HandWeapon handWeapon,
boolean bGory)

**Parameters:**
- `IsoGameCharacter` `killer`
- `HandWeapon` `handWeapon`
- `boolean` `bGory`

**Returns:** `void`

### public NetworkZombieAI getNetworkCharacterAI()

**Returns:** `NetworkZombieAI`

### public boolean isSkipResolveCollision()

**Returns:** `boolean`

### public boolean shouldZombieHaveKey(boolean allowBandits)

**Parameters:**
- `boolean` `allowBandits`

**Returns:** `boolean`

### public void doZombieSpeed()

**Returns:** `void`

### public void doZombieSpeed(int zombieSpeed)

**Parameters:**
- `int` `zombieSpeed`

**Returns:** `void`

### public void doCrawlerSpeed(int zombieSpeed)

**Parameters:**
- `int` `zombieSpeed`

**Returns:** `void`

### public void doSprinter()

**Returns:** `void`

### public void doFastShambler()

**Returns:** `void`

### public void doFakeShambler(int zombieSpeed)

**Parameters:**
- `int` `zombieSpeed`

**Returns:** `void`

### public void doShambler()

**Returns:** `void`

### public int getSpeedType()

**Returns:** `int`

### public String getLastHitPart()

**Returns:** `String`

### public boolean shouldDressInRandomOutfit()

**Returns:** `boolean`

### public String getOutfitName()

**Returns:** `String`

### public IsoGridSquare getHeadSquare(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `IsoGridSquare`

### public boolean couldSeeHeadSquare(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public boolean canSeeHeadSquare(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `boolean`

### public String getWalkType()

**Returns:** `String`

### public boolean helmetFallFromVisuals(boolean hitHead)

**Parameters:**
- `boolean` `hitHead`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\IsoZombie.html`*
