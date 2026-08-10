---
title: zombie.characters.IsoGameCharacter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.IsoGameCharacter

`public abstract class IsoGameCharacter extends IsoMovingObject implements Talker, ChatElementOwner, IAnimatable, IAnimationVariableMap, IAnimationVariableRegistry, IClothingItemListener, IActionStateChanged, IAnimEventCallback, IAnimEventWrappedBroadcaster, fmod.fmod.IFMODParameterUpdater, IGrappleableWrapper, ILuaVariableSource, ILuaGameCharacter, IStateCharacter, CharacterInputComponentEntity`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.characters.IsoGameCharacter

## Fields

### public static final int GlovesStrengthBonus

### public static final int AwkwardGlovesStrengthDivisor

### public static final float HUMANOID_WORLD_CHEST_HEIGHT

### public static final float HUMANOID_SCREEN_CHEST_HEIGHT

### public boolean doDirtBloodEtc

### public static final int RENDER_OFFSET_X

### public static final int RENDER_OFFSET_Y

### public static final float s_maxPossibleTwist

### public long vocalEvent

### public long removedFromWorldMs

### public static final float WALK_SPEED_SLOW

### public static final float WALK_SPEED_DEFAULT

### public final ArrayList<String> amputations

### public ModelInstance hair

### public ModelInstance beard

### public ModelInstance primaryHandModel

### public ModelInstance secondaryHandModel

### public final BaseCharacterSoundEmitter emitter

### public boolean callOut

### public IsoGameCharacter reanimatedCorpse

### public int reanimatedCorpseId

### public int bumpNbr

### public boolean asleep

### public boolean isResting

### public boolean blockTurning

### public boolean wasKnockedDown

### public float speedMod

### public IsoSprite legsSprite

### public float knockbackAttackMod

### public final boolean[] isVisibleToPlayer

### public float savedVehicleX

### public float savedVehicleY

### public short savedVehicleSeat

### public boolean savedVehicleRunning

### public final ArrayList<InventoryContainer> bagsWorn

### public PlayerCheats cheats

### public final IsoGameCharacter.LightInfo lightInfo

### public boolean updateEquippedTextures

### public float realx

### public float realy

### public byte realz

### public NetworkVariables.ZombieState realState

### public String overridePrimaryHandModel

### public String overrideSecondaryHandModel

### public boolean forceNullOverride

### public boolean usernameDisguised

### @Deprecated
public ArrayList<Integer> invRadioFreq

> ⚠️ **Deprecated**

### public long lastAnimalPet

### public IsoGameCharacter vbdebugHitTarget

### public final NetworkCharacter networkCharacter

### public IsoLightSource onFireLightSource

## Constructors

### public IsoGameCharacter(IsoCell cell,
float x,
float y,
float z)

**Parameters:**
- `IsoCell` `cell`
- `float` `x`
- `float` `y`
- `float` `z`

## Methods

### public void registerECSComponents()

**Returns:** `void`

### public final boolean isFalling()

**Returns:** `boolean`

### public boolean isShoveStompAnim()

**Returns:** `boolean`

### public void setShoveStompAnim(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean canUseCurrentPoseForCorpse()

**Returns:** `boolean`

### public float getRecoilVarX()

**Returns:** `float`

### public void setRecoilVarX(float recoilVarX)

**Parameters:**
- `float` `recoilVarX`

**Returns:** `void`

### public float getRecoilVarY()

**Returns:** `float`

### public void setRecoilVarY(float recoilVarY)

**Parameters:**
- `float` `recoilVarY`

**Returns:** `void`

### public void setGrappleThrowOutWindow(boolean newValue)

**Parameters:**
- `boolean` `newValue`

**Returns:** `void`

### public boolean isGrappleThrowOutWindow()

**Returns:** `boolean`

### public void setGrappleThrowOverFence(boolean newValue)

**Parameters:**
- `boolean` `newValue`

**Returns:** `void`

### public boolean isGrappleThrowOverFence()

**Returns:** `boolean`

### public void setGrappleThrowIntoContainer(boolean newValue)

**Parameters:**
- `boolean` `newValue`

**Returns:** `void`

### public boolean isGrappleThrowIntoContainer()

**Returns:** `boolean`

### public void updateRecoilVar()

**Returns:** `void`

### public void setVehicleHitLocation(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public float getMomentumScalar()

**Returns:** `float`

### public void setMomentumScalar(float val)

**Parameters:**
- `float` `val`

**Returns:** `void`

### public Vector2 getDeferredMovement(Vector2 result)

**Parameters:**
- `Vector2` `result`

**Returns:** `Vector2`

### public Vector3 getDeferredMovementFromRagdoll(Vector3 result)

**Parameters:**
- `Vector3` `result`

**Returns:** `Vector3`

### public float getDeferredAngleDelta()

**Returns:** `float`

### public float getDeferredRotationWeight()

**Returns:** `float`

### public org.joml.Vector3f getTargetGrapplePos(org.joml.Vector3f result)

**Parameters:**
- `org.joml.Vector3f` `result`

**Returns:** `org.joml.Vector3f`

### public Vector3 getTargetGrapplePos(Vector3 result)

**Parameters:**
- `Vector3` `result`

**Returns:** `Vector3`

### public void setTargetGrapplePos(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public Vector2 getTargetGrappleRotation(Vector2 result)

**Parameters:**
- `Vector2` `result`

**Returns:** `Vector2`

### public boolean isStrafing()

**Returns:** `boolean`

### public boolean isPerformingNoAimShortStrafe()

**Returns:** `boolean`

### public AnimationTrack dbgGetAnimTrack(int layerIdx,
int trackIdx)

**Parameters:**
- `int` `layerIdx`
- `int` `trackIdx`

**Returns:** `AnimationTrack`

### public String dbgGetAnimTrackName(int layerIdx,
int trackIdx)

**Parameters:**
- `int` `layerIdx`
- `int` `trackIdx`

**Returns:** `String`

### public float dbgGetAnimTrackTime(int layerIdx,
int trackIdx)

**Parameters:**
- `int` `layerIdx`
- `int` `trackIdx`

**Returns:** `float`

### public float dbgGetAnimTrackWeight(int layerIdx,
int trackIdx)

**Parameters:**
- `int` `layerIdx`
- `int` `trackIdx`

**Returns:** `float`

### public float getTwist()

The character's current twist angle, in degrees.

**Returns:** `float`

### public float getShoulderTwist()

The character's current shoulder-twist angle, in degrees.

**Returns:** `float`

### public float getMaxTwist()

The maximum twist angle, in degrees.

**Returns:** `float`

### public void setMaxTwist(float degrees)

Specify the maximum twist angle, in degrees.

**Parameters:**
- `float` `degrees`

**Returns:** `void`

### public float getExcessTwist()

The character's excess twist, in degrees.
The excess is > 0 if the character is trying to twist further than their current maximum twist.
ie. The amount that the desired twist exceeds the maximum twist.

eg. If the character is trying to twist by 90 degrees, but their maximum is set to 70, then excess = 20

**Returns:** `float`

### public int getNumTwistBones()

**Returns:** `int`

### public float getAbsoluteExcessTwist()

**Returns:** `float`

### public float getAnimAngleTwistDelta()

**Returns:** `float`

### public float getAnimAngleStepDelta()

**Returns:** `float`

### public float getTargetTwist()

The desired twist, unclamped, in degrees.

**Returns:** `float`

### public boolean isRangedWeaponEmpty()

**Returns:** `boolean`

### public void setRangedWeaponEmpty(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean hasFootInjury()

**Returns:** `boolean`

### public boolean isInTrees2(boolean ignoreBush)

**Parameters:**
- `boolean` `ignoreBush`

**Returns:** `boolean`

### public boolean isInTreesNoBush()

**Returns:** `boolean`

### public boolean isInTrees()

**Returns:** `boolean`

### public static HashMap<Integer, SurvivorDesc> getSurvivorMap()

**Returns:** `HashMap<Integer, SurvivorDesc>`

### public static int[] getLevelUpLevels()

**Returns:** `int[]`

### public static Vector2 getTempo()

**Returns:** `Vector2`

### public static Vector2 getTempo2()

**Returns:** `Vector2`

### public static ColorInfo getInf()

**Returns:** `ColorInfo`

### public BaseCharacterSoundEmitter getEmitter()

**Returns:** `BaseCharacterSoundEmitter`

### public void updateEmitter()

**Returns:** `void`

### public void doDeferredMovementFromRagdoll(Vector3 dMovement)

**Parameters:**
- `Vector3` `dMovement`

**Returns:** `void`

### public ActionContext getActionContext()

**Returns:** `ActionContext`

### public final StateMachineComponent getStateMachineComponent()

**Returns:** `StateMachineComponent`

### public String getPreviousActionContextStateName()

**Returns:** `String`

### public String getCurrentActionContextStateName()

**Returns:** `String`

### public boolean hasAnimationPlayer()

**Returns:** `boolean`

### public AnimationPlayer getAnimationPlayer()

**Returns:** `AnimationPlayer`

### public void releaseAnimationPlayer()

**Returns:** `void`

### public AdvancedAnimator getAdvancedAnimator()

**Returns:** `AdvancedAnimator`

### public ModelInstance getModelInstance()

**Returns:** `ModelInstance`

### public String getCurrentStateName()

**Returns:** `String`

### public String getPreviousStateName()

**Returns:** `String`

### public String getAnimationDebug()

**Returns:** `String`

### public String getStatisticsDebug()

**Returns:** `String`

### public String getTalkerType()

**Returns:** `String`

### public void spinToZeroAllAnimNodes()

**Returns:** `void`

### public boolean isAnimForecasted()

**Returns:** `boolean`

### public void setAnimForecasted(int timeMs)

**Parameters:**
- `int` `timeMs`

**Returns:** `void`

### public void resetModel()

**Returns:** `void`

### public void resetModelNextFrame()

**Returns:** `void`

### public void clothingItemChanged(String itemGuid)

clothingItemChanged
Called when a ClothingItem file has changed on disk, causing the OutfitManager to broadcast this event.
Checks if this item is currently used by this player's Outfit.
Reloads and re-equips if so.

**Parameters:**
- `String` `itemGuid` — The item's Globally Unique Identifier (GUID).

**Returns:** `void`

### public void reloadOutfit()

**Returns:** `void`

### public void setSceneCulled(boolean isCulled)

Specify whether this character is currently not to be drawn, as it is outside the visible area.
Eg. Zombies not seen by the player. Objects outside the rendered window etc.

**Parameters:**
- `boolean` `isCulled`

**Returns:** `void`

### public void setAddedToModelManager(ModelManager modelManager,
boolean isAdded)

**Parameters:**
- `ModelManager` `modelManager`
- `boolean` `isAdded`

**Returns:** `void`

### public boolean isAddedToModelManager()

**Returns:** `boolean`

### public void dressInRandomOutfit()

Picks a random outfit from the OutfitManager

**Returns:** `void`

### public void dressInRandomNonSillyOutfit()

**Returns:** `void`

### public void dressInNamedOutfit(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `void`

### public void dressInPersistentOutfit(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `void`

### public void dressInPersistentOutfitID(int outfitID)

**Parameters:**
- `int` `outfitID`

**Returns:** `void`

### public String getOutfitName()

**Returns:** `String`

### public void dressInClothingItem(String itemGUID)

**Parameters:**
- `String` `itemGUID`

**Returns:** `void`

### public Outfit getRandomDefaultOutfit()

**Returns:** `Outfit`

### public ModelInstance getModel()

**Returns:** `ModelInstance`

### public boolean hasActiveModel()

**Returns:** `boolean`

### public boolean hasItems(String type,
int count)

**Parameters:**
- `String` `type`
- `int` `count`

**Returns:** `boolean`

### public int getLevelUpLevels(int level)

**Parameters:**
- `int` `level`

**Returns:** `int`

### public int getLevelMaxForXp()

**Returns:** `int`

### public int getXpForLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `int`

### public final void DoDeath(HandWeapon weapon,
IsoGameCharacter wielder)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`

**Returns:** `void`

### public void DoDeath(HandWeapon weapon,
IsoGameCharacter wielder,
boolean isGory)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `boolean` `isGory`

**Returns:** `void`

### public void doDeathSplatterAndSounds(HandWeapon weapon,
IsoGameCharacter wielder,
boolean isGory)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `boolean` `isGory`

**Returns:** `void`

### public boolean onDeath_ShouldDoSplatterAndSounds(HandWeapon weapon,
IsoGameCharacter wielder,
boolean isGory)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `boolean` `isGory`

**Returns:** `boolean`

### public void clearFallDamage()

**Returns:** `void`

### public float getImpactIsoSpeed()

**Returns:** `float`

### public void DoLand(float impactIsoSpeed)

**Parameters:**
- `float` `impactIsoSpeed`

**Returns:** `void`

### public <T> PZArrayList<ItemContainer> getContextWorldContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate)

**Returns:** `PZArrayList<ItemContainer>`

### public <T> PZArrayList<ItemContainer> getContextWorldContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate,
PZArrayList<ItemContainer> containerList)

**Returns:** `PZArrayList<ItemContainer>`

### public <T> PZArrayList<ItemContainer> getContextWorldContainersInObjects(IsoObject[] contextObjects,
T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate,
PZArrayList<ItemContainer> containerList)

**Returns:** `PZArrayList<ItemContainer>`

### public PZArrayList<ItemContainer> getContextWorldSuitableContainersToDropCorpseInObjects(IsoObject[] contextObjects)

**Parameters:**
- `IsoObject[]` `contextObjects`

**Returns:** `PZArrayList<ItemContainer>`

### public PZArrayList<ItemContainer> getSuitableContainersToDropCorpseInSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `PZArrayList<ItemContainer>`

### public PZArrayList<ItemContainer> getSuitableContainersToDropCorpseInSquare(IsoGridSquare square,
PZArrayList<ItemContainer> foundContainers)

**Parameters:**
- `IsoGridSquare` `square`
- `PZArrayList<ItemContainer>` `foundContainers`

**Returns:** `PZArrayList<ItemContainer>`

### public PZArrayList<ItemContainer> getSuitableContainersToDropCorpse()

**Returns:** `PZArrayList<ItemContainer>`

### public PZArrayList<ItemContainer> getSuitableContainersToDropCorpse(PZArrayList<ItemContainer> foundContainers)

**Parameters:**
- `PZArrayList<ItemContainer>` `foundContainers`

**Returns:** `PZArrayList<ItemContainer>`

### public PZArrayList<ItemContainer> getContextWorldContainersWithHumanCorpse(IsoObject[] contextObjects)

**Parameters:**
- `IsoObject[]` `contextObjects`

**Returns:** `PZArrayList<ItemContainer>`

### public PZArrayList<ItemContainer> getSuitableContainersWithHumanCorpseInSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `PZArrayList<ItemContainer>`

### public PZArrayList<ItemContainer> getSuitableContainersWithHumanCorpseInSquare(IsoGridSquare square,
PZArrayList<ItemContainer> foundContainers)

**Parameters:**
- `IsoGridSquare` `square`
- `PZArrayList<ItemContainer>` `foundContainers`

**Returns:** `PZArrayList<ItemContainer>`

### public static boolean canDropCorpseInto(IsoGameCharacter chr,
ItemContainer container)

**Parameters:**
- `IsoGameCharacter` `chr`
- `ItemContainer` `container`

**Returns:** `boolean`

### public static boolean canGrabCorpseFrom(IsoGameCharacter chr,
ItemContainer container)

**Parameters:**
- `IsoGameCharacter` `chr`
- `ItemContainer` `container`

**Returns:** `boolean`

### public boolean canAccessContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `boolean`

### public String getContainerToolTip(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `String`

### public IsoGameCharacter getFollowingTarget()

**Returns:** `IsoGameCharacter`

### public void setFollowingTarget(IsoGameCharacter followingTarget)

**Parameters:**
- `IsoGameCharacter` `followingTarget` — the FollowingTarget to set

**Returns:** `void`

### public ArrayList<IsoMovingObject> getLocalList()

**Returns:** `ArrayList<IsoMovingObject>`

### public ArrayList<IsoMovingObject> getLocalNeutralList()

**Returns:** `ArrayList<IsoMovingObject>`

### public ArrayList<IsoMovingObject> getLocalGroupList()

**Returns:** `ArrayList<IsoMovingObject>`

### public ArrayList<IsoMovingObject> getLocalRelevantEnemyList()

**Returns:** `ArrayList<IsoMovingObject>`

### public float getDangerLevels()

**Returns:** `float`

### public void setDangerLevels(float dangerLevels)

**Parameters:**
- `float` `dangerLevels` — the dangerLevels to set

**Returns:** `void`

### public ArrayList<IsoGameCharacter.PerkInfo> getPerkList()

**Returns:** `ArrayList<IsoGameCharacter.PerkInfo>`

### public float getLeaveBodyTimedown()

**Returns:** `float`

### public void setLeaveBodyTimedown(float leaveBodyTimedown)

**Parameters:**
- `float` `leaveBodyTimedown` — the leaveBodyTimedown to set

**Returns:** `void`

### public boolean isAllowConversation()

**Returns:** `boolean`

### public void setAllowConversation(boolean allowConversation)

**Parameters:**
- `boolean` `allowConversation` — the AllowConversation to set

**Returns:** `void`

### public float getReanimateTimer()

**Returns:** `float`

### public void setReanimateTimer(float reanimateTimer)

**Parameters:**
- `float` `reanimateTimer` — the ReanimateTimer to set

**Returns:** `void`

### public int getReanimAnimFrame()

**Returns:** `int`

### public void setReanimAnimFrame(int reanimAnimFrame)

**Parameters:**
- `int` `reanimAnimFrame` — the ReanimAnimFrame to set

**Returns:** `void`

### public int getReanimAnimDelay()

**Returns:** `int`

### public void setReanimAnimDelay(int reanimAnimDelay)

**Parameters:**
- `int` `reanimAnimDelay` — the ReanimAnimDelay to set

**Returns:** `void`

### public boolean isReanim()

**Returns:** `boolean`

### public void setReanim(boolean reanim)

**Parameters:**
- `boolean` `reanim` — the Reanim to set

**Returns:** `void`

### public boolean isVisibleToNPCs()

**Returns:** `boolean`

### public void setVisibleToNPCs(boolean visibleToNpcs)

**Parameters:**
- `boolean` `visibleToNpcs` — the VisibleToNPCs to set

**Returns:** `void`

### public int getDieCount()

**Returns:** `int`

### public void setDieCount(int dieCount)

**Parameters:**
- `int` `dieCount` — the DieCount to set

**Returns:** `void`

### public float getLlx()

**Returns:** `float`

### public void setLlx(float llx)

**Parameters:**
- `float` `llx` — the llx to set

**Returns:** `void`

### public float getLly()

**Returns:** `float`

### public void setLly(float lly)

**Parameters:**
- `float` `lly` — the lly to set

**Returns:** `void`

### public float getLlz()

**Returns:** `float`

### public void setLlz(float llz)

**Parameters:**
- `float` `llz` — the llz to set

**Returns:** `void`

### public int getRemoteID()

**Returns:** `int`

### public void setRemoteID(int remoteId)

**Parameters:**
- `int` `remoteId` — the RemoteID to set

**Returns:** `void`

### public int getNumSurvivorsInVicinity()

**Returns:** `int`

### public void setNumSurvivorsInVicinity(int numSurvivorsInVicinity)

**Parameters:**
- `int` `numSurvivorsInVicinity` — the NumSurvivorsInVicinity to set

**Returns:** `void`

### public float getLevelUpMultiplier()

**Returns:** `float`

### public void setLevelUpMultiplier(float levelUpMultiplier)

**Parameters:**
- `float` `levelUpMultiplier` — the LevelUpMultiplier to set

**Returns:** `void`

### public IsoGameCharacter.XP getXp()

**Returns:** `IsoGameCharacter.XP`

### @Deprecated
public void setXp(IsoGameCharacter.XP xp)

> ⚠️ **Deprecated**

**Parameters:**
- `IsoGameCharacter.XP` `xp` — the xp to set

**Returns:** `void`

### public int getLastLocalEnemies()

**Returns:** `int`

### public void setLastLocalEnemies(int lastLocalEnemies)

**Parameters:**
- `int` `lastLocalEnemies` — the LastLocalEnemies to set

**Returns:** `void`

### public ArrayList<IsoMovingObject> getVeryCloseEnemyList()

**Returns:** `ArrayList<IsoMovingObject>`

### public HashMap<String, IsoGameCharacter.Location> getLastKnownLocation()

**Returns:** `HashMap<String, IsoGameCharacter.Location>`

### public IsoGameCharacter getAttackedBy()

**Returns:** `IsoGameCharacter`

### public void setAttackedBy(IsoGameCharacter attackedBy)

**Parameters:**
- `IsoGameCharacter` `attackedBy` — the AttackedBy to set

**Returns:** `void`

### public boolean isIgnoreStaggerBack()

**Returns:** `boolean`

### public void setIgnoreStaggerBack(boolean ignoreStaggerBack)

**Parameters:**
- `boolean` `ignoreStaggerBack` — the IgnoreStaggerBack to set

**Returns:** `void`

### public int getTimeThumping()

**Returns:** `int`

### public void setTimeThumping(int timeThumping)

**Parameters:**
- `int` `timeThumping` — the TimeThumping to set

**Returns:** `void`

### public int getPatienceMax()

**Returns:** `int`

### public void setPatienceMax(int patienceMax)

**Parameters:**
- `int` `patienceMax` — the PatienceMax to set

**Returns:** `void`

### public int getPatienceMin()

**Returns:** `int`

### public void setPatienceMin(int patienceMin)

**Parameters:**
- `int` `patienceMin` — the PatienceMin to set

**Returns:** `void`

### public int getPatience()

**Returns:** `int`

### public void setPatience(int patience)

**Parameters:**
- `int` `patience` — the Patience to set

**Returns:** `void`

### public Stack<BaseAction> getCharacterActions()

**Returns:** `Stack<BaseAction>`

### public boolean hasTimedActions()

**Returns:** `boolean`

### public boolean isCurrentActionPathfinding()

**Returns:** `boolean`

### public boolean isCurrentActionAllowedWhileDraggingCorpses()

**Returns:** `boolean`

### public boolean checkCurrentAction(Invokers.Params1.Boolean.ICallback<BaseAction> checkPredicate)

**Parameters:**
- `Invokers.Params1.Boolean.ICallback<BaseAction>` `checkPredicate`

**Returns:** `boolean`

### public boolean isImpactFromBehind(Vector2 impactDir)

**Parameters:**
- `Vector2` `impactDir`

**Returns:** `boolean`

### public boolean isImpactFromBehind(float impactDirX,
float impactDirY)

**Parameters:**
- `float` `impactDirX`
- `float` `impactDirY`

**Returns:** `boolean`

### public static boolean isImpactFromBehind(float chrForwardX,
float chrForwardY,
float impactDirX,
float impactDirY)

**Parameters:**
- `float` `chrForwardX`
- `float` `chrForwardY`
- `float` `impactDirX`
- `float` `impactDirY`

**Returns:** `boolean`

### @Deprecated
public Vector2 getForwardDirection()

> ⚠️ **Deprecated**

**Returns:** `Vector2`

### public float getForwardDirectionX()

**Returns:** `float`

### public float getForwardDirectionY()

**Returns:** `float`

### public Vector2 getForwardDirection(Vector2 forwardDirection)

**Parameters:**
- `Vector2` `forwardDirection`

**Returns:** `Vector2`

### public void setForwardDirection(Vector2 dir)

**Parameters:**
- `Vector2` `dir` — The character's new forward direction.

**Returns:** `void`

### public void setTargetAndCurrentDirection(float directionX,
float directionY)

**Parameters:**
- `float` `directionX`
- `float` `directionY`

**Returns:** `void`

### public void setForwardDirection(float directionX,
float directionY)

**Parameters:**
- `float` `directionX`
- `float` `directionY`

**Returns:** `void`

### public void zeroForwardDirectionX()

**Returns:** `void`

### public void zeroForwardDirectionY()

**Returns:** `void`

### public float getDirectionAngleRadians()

**Returns:** `float`

### public float getDirectionAngle()

The forward direction angle, in degrees.

**Returns:** `float`

### public void setDirectionAngle(float angleDegrees)

**Parameters:**
- `float` `angleDegrees`

**Returns:** `void`

### public float getAnimAngle()

**Returns:** `float`

### public float getAnimAngleRadians()

**Returns:** `float`

### @Deprecated
public Vector2 getAnimVector(Vector2 animForwardDirection)

> ⚠️ **Deprecated**

**Parameters:**
- `Vector2` `animForwardDirection`

**Returns:** `Vector2`

### public Vector2 getAnimForwardDirection(Vector2 forwardDirection)

**Parameters:**
- `Vector2` `forwardDirection`

**Returns:** `Vector2`

### public float getLookAngleRadians()

**Returns:** `float`

### public Vector2 getLookVector(Vector2 vector2)

**Parameters:**
- `Vector2` `vector2`

**Returns:** `Vector2`

### public float getLookDirectionX()

**Returns:** `float`

### public float getLookDirectionY()

**Returns:** `float`

### public boolean isAnimatingBackwards()

**Returns:** `boolean`

### public IsoDirections getForwardMovementIsoDirection()

**Returns:** `IsoDirections`

### public void setAnimatingBackwards(boolean isAnimatingBackwards)

**Parameters:**
- `boolean` `isAnimatingBackwards`

**Returns:** `void`

### public boolean isDraggingCorpse()

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

### public float getDotWithForwardDirection(Vector3 bonePos)

**Parameters:**
- `Vector3` `bonePos`

**Returns:** `float`

### public float getDotWithForwardDirection(float targetX,
float targetY)

**Parameters:**
- `float` `targetX`
- `float` `targetY`

**Returns:** `float`

### public IsoDirections getCardinalDirection()

**Returns:** `IsoDirections`

### public boolean isAsleep()

**Returns:** `boolean`

### public void setAsleep(boolean asleep)

**Parameters:**
- `boolean` `asleep` — the Asleep to set

**Returns:** `void`

### public boolean isResting()

**Returns:** `boolean`

### public void setIsResting(boolean isResting)

**Parameters:**
- `boolean` `isResting`

**Returns:** `void`

### public int getZombieKills()

**Returns:** `int`

### public void setZombieKills(int zombieKills)

**Parameters:**
- `int` `zombieKills` — the ZombieKills to set

**Returns:** `void`

### public int getLastZombieKills()

**Returns:** `int`

### public void setLastZombieKills(int lastZombieKills)

**Parameters:**
- `int` `lastZombieKills` — the LastZombieKills to set

**Returns:** `void`

### public float getForceWakeUpTime()

**Returns:** `float`

### public void setForceWakeUpTime(float forceWakeUpTime)

**Parameters:**
- `float` `forceWakeUpTime` — the ForceWakeUpTime to set

**Returns:** `void`

### public void forceAwake()

**Returns:** `void`

### public BodyDamage getBodyDamage()

**Returns:** `BodyDamage`

### public BodyDamage getBodyDamageRemote()

**Returns:** `BodyDamage`

### public void resetBodyDamageRemote()

**Returns:** `void`

### public State getDefaultState()

**Returns:** `State`

### public void setDefaultState(State defaultState)

**Parameters:**
- `State` `defaultState` — the defaultState to set

**Returns:** `void`

### public SurvivorDesc getDescriptor()

**Returns:** `SurvivorDesc`

### public void setDescriptor(SurvivorDesc descriptor)

**Parameters:**
- `SurvivorDesc` `descriptor` — the descriptor to set

**Returns:** `void`

### public String getFullName()

**Returns:** `String`

### public BaseVisual getVisual()

**Returns:** `BaseVisual`

### public ItemVisuals getItemVisuals()

**Returns:** `ItemVisuals`

### public void getItemVisuals(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public boolean isUsingWornItems()

**Returns:** `boolean`

### public Stack<IsoBuilding> getFamiliarBuildings()

**Returns:** `Stack<IsoBuilding>`

### public AStarPathFinderResult getFinder()

**Returns:** `AStarPathFinderResult`

### public float getFireKillRate()

**Returns:** `float`

### public void setFireKillRate(float fireKillRate)

**Parameters:**
- `float` `fireKillRate` — the FireKillRate to set

**Returns:** `void`

### public int getFireSpreadProbability()

**Returns:** `int`

### public void setFireSpreadProbability(int fireSpreadProbability)

**Parameters:**
- `int` `fireSpreadProbability` — the FireSpreadProbability to set

**Returns:** `void`

### public float getHealth()

**Returns:** `float`

### public void setHealth(float health)

**Parameters:**
- `float` `health` — the Health to set

**Returns:** `void`

### public boolean isOnDeathDone()

**Returns:** `boolean`

### public void setOnDeathDone(boolean done)

**Parameters:**
- `boolean` `done`

**Returns:** `void`

### public boolean isOnKillDone()

**Returns:** `boolean`

### public void setOnKillDone(boolean done)

**Parameters:**
- `boolean` `done`

**Returns:** `void`

### public boolean isDeathDragDown()

**Returns:** `boolean`

### public void setDeathDragDown(boolean dragDown)

**Parameters:**
- `boolean` `dragDown`

**Returns:** `void`

### public boolean isPlayingDeathSound()

**Returns:** `boolean`

### public void setPlayingDeathSound(boolean playing)

**Parameters:**
- `boolean` `playing`

**Returns:** `void`

### public String getHurtSound()

**Returns:** `String`

### public void setHurtSound(String hurtSound)

**Parameters:**
- `String` `hurtSound` — the hurtSound to set

**Returns:** `void`

### @Deprecated
public boolean isIgnoreMovementForDirection()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### public ItemContainer getInventory()

**Returns:** `ItemContainer`

### public void setInventory(ItemContainer inventory)

**Parameters:**
- `ItemContainer` `inventory` — the inventory to set

**Returns:** `void`

### public boolean isPrimaryEquipped(String item)

**Parameters:**
- `String` `item`

**Returns:** `boolean`

### public InventoryItem getPrimaryHandItem()

**Returns:** `InventoryItem`

### public void setPrimaryHandItem(InventoryItem leftHandItem)

**Parameters:**
- `InventoryItem` `leftHandItem` — the leftHandItem to set

**Returns:** `void`

### public HandWeapon getAttackingWeapon()

**Returns:** `HandWeapon`

### public void initWornItems(String bodyLocationGroupName)

**Parameters:**
- `String` `bodyLocationGroupName`

**Returns:** `void`

### public WornItems getWornItems()

**Returns:** `WornItems`

### public void setWornItems(WornItems other)

**Parameters:**
- `WornItems` `other`

**Returns:** `void`

### public InventoryItem getWornItem(ItemBodyLocation itemBodyLocation)

**Parameters:**
- `ItemBodyLocation` `itemBodyLocation`

**Returns:** `InventoryItem`

### public void setWornItem(ItemBodyLocation location,
InventoryItem item)

**Parameters:**
- `ItemBodyLocation` `location`
- `InventoryItem` `item`

**Returns:** `void`

### public void setWornItem(ItemBodyLocation location,
InventoryItem item,
boolean forceDropTooHeavy)

**Parameters:**
- `ItemBodyLocation` `location`
- `InventoryItem` `item`
- `boolean` `forceDropTooHeavy`

**Returns:** `void`

### public void removeWornItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void removeWornItem(InventoryItem item,
boolean forceDropTooHeavy)

**Parameters:**
- `InventoryItem` `item`
- `boolean` `forceDropTooHeavy`

**Returns:** `void`

### public void clearWornItems()

**Returns:** `void`

### public BodyLocationGroup getBodyLocationGroup()

**Returns:** `BodyLocationGroup`

### public void onWornItemsChanged()

**Returns:** `void`

### public void initAttachedItems(String groupName)

**Parameters:**
- `String` `groupName`

**Returns:** `void`

### public AttachedItems getAttachedItems()

**Returns:** `AttachedItems`

### public void setAttachedItems(AttachedItems other)

**Parameters:**
- `AttachedItems` `other`

**Returns:** `void`

### public InventoryItem getAttachedItem(String location)

**Parameters:**
- `String` `location`

**Returns:** `InventoryItem`

### public void setAttachedItem(String location,
InventoryItem item)

**Parameters:**
- `String` `location`
- `InventoryItem` `item`

**Returns:** `void`

### public void removeAttachedItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void clearAttachedItems()

**Returns:** `void`

### public AttachedLocationGroup getAttachedLocationGroup()

**Returns:** `AttachedLocationGroup`

### public ClothingWetness getClothingWetness()

**Returns:** `ClothingWetness`

### public ClothingWetnessSync getClothingWetnessSync()

**Returns:** `ClothingWetnessSync`

### public InventoryItem getClothingItem_Head()

**Returns:** `InventoryItem`

### public void setClothingItem_Head(InventoryItem item)

**Parameters:**
- `InventoryItem` `item` — the ClothingItem_Head to set

**Returns:** `void`

### public InventoryItem getClothingItem_Torso()

**Returns:** `InventoryItem`

### public void setClothingItem_Torso(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public InventoryItem getClothingItem_Back()

**Returns:** `InventoryItem`

### public void setClothingItem_Back(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public InventoryItem getClothingItem_Hands()

**Returns:** `InventoryItem`

### public void setClothingItem_Hands(InventoryItem item)

**Parameters:**
- `InventoryItem` `item` — the ClothingItem_Hands to set

**Returns:** `void`

### public InventoryItem getClothingItem_Legs()

**Returns:** `InventoryItem`

### public void setClothingItem_Legs(InventoryItem item)

**Parameters:**
- `InventoryItem` `item` — the ClothingItem_Legs to set

**Returns:** `void`

### public InventoryItem getClothingItem_Feet()

**Returns:** `InventoryItem`

### public void setClothingItem_Feet(InventoryItem item)

**Parameters:**
- `InventoryItem` `item` — the ClothingItem_Feet to set

**Returns:** `void`

### public int getNextWander()

**Returns:** `int`

### public void setNextWander(int nextWander)

**Parameters:**
- `int` `nextWander` — the NextWander to set

**Returns:** `void`

### public boolean isOnFire()

**Returns:** `boolean`

### public void setOnFire(boolean onFire)

**Parameters:**
- `boolean` `onFire` — the OnFire to set

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public int getPathIndex()

**Returns:** `int`

### public void setPathIndex(int pathIndex)

**Parameters:**
- `int` `pathIndex` — the pathIndex to set

**Returns:** `void`

### public int getPathTargetX()

**Returns:** `int`

### public int getPathTargetY()

**Returns:** `int`

### public int getPathTargetZ()

**Returns:** `int`

### public InventoryItem getSecondaryHandItem()

**Returns:** `InventoryItem`

### public void setSecondaryHandItem(InventoryItem rightHandItem)

**Parameters:**
- `InventoryItem` `rightHandItem` — the rightHandItem to set

**Returns:** `void`

### public boolean isHandItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isPrimaryHandItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isSecondaryHandItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isItemInBothHands(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean removeFromHands(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public Color getSpeakColour()

**Returns:** `Color`

### public void setSpeakColour(Color speakColour)

**Parameters:**
- `Color` `speakColour` — the SpeakColour to set

**Returns:** `void`

### public void setSpeakColourInfo(ColorInfo info)

**Parameters:**
- `ColorInfo` `info`

**Returns:** `void`

### public float getSlowFactor()

**Returns:** `float`

### public void setSlowFactor(float slowFactor)

**Parameters:**
- `float` `slowFactor` — the slowFactor to set

**Returns:** `void`

### public float getSlowTimer()

**Returns:** `float`

### public void setSlowTimer(float slowTimer)

**Parameters:**
- `float` `slowTimer` — the slowTimer to set

**Returns:** `void`

### public boolean isbUseParts()

**Returns:** `boolean`

### public void setbUseParts(boolean useParts)

**Parameters:**
- `boolean` `useParts` — the bUseParts to set

**Returns:** `void`

### public boolean isSpeaking()

**Returns:** `boolean`

### public void setSpeaking(boolean speaking)

**Parameters:**
- `boolean` `speaking` — the Speaking to set

**Returns:** `void`

### public float getSpeakTime()

**Returns:** `float`

### public void setSpeakTime(int speakTime)

**Parameters:**
- `int` `speakTime` — the SpeakTime to set

**Returns:** `void`

### public float getSpeedMod()

**Returns:** `float`

### public void setSpeedMod(float speedMod)

**Parameters:**
- `float` `speedMod` — the speedMod to set

**Returns:** `void`

### public float getStaggerTimeMod()

**Returns:** `float`

### public void setStaggerTimeMod(float staggerTimeMod)

**Parameters:**
- `float` `staggerTimeMod` — the staggerTimeMod to set

**Returns:** `void`

### public StateMachine getStateMachine()

**Returns:** `StateMachine`

### public Moodles getMoodles()

**Returns:** `Moodles`

### public Stats getStats()

**Returns:** `Stats`

### public Stack<String> getUsedItemsOn()

**Returns:** `Stack<String>`

### public HandWeapon getUseHandWeapon()

**Returns:** `HandWeapon`

### public void setUseHandWeapon(HandWeapon useHandWeapon)

**Parameters:**
- `HandWeapon` `useHandWeapon` — the useHandWeapon to set

**Returns:** `void`

### public IsoSprite getLegsSprite()

**Returns:** `IsoSprite`

### public void setLegsSprite(IsoSprite legsSprite)

**Parameters:**
- `IsoSprite` `legsSprite` — the legsSprite to set

**Returns:** `void`

### public IsoGridSquare getAttackTargetSquare()

**Returns:** `IsoGridSquare`

### public void setAttackTargetSquare(IsoGridSquare attackTargetSquare)

**Parameters:**
- `IsoGridSquare` `attackTargetSquare` — the attackTargetSquare to set

**Returns:** `void`

### public float getBloodImpactX()

**Returns:** `float`

### public void setBloodImpactX(float bloodImpactX)

**Parameters:**
- `float` `bloodImpactX` — the BloodImpactX to set

**Returns:** `void`

### public float getBloodImpactY()

**Returns:** `float`

### public void setBloodImpactY(float bloodImpactY)

**Parameters:**
- `float` `bloodImpactY` — the BloodImpactY to set

**Returns:** `void`

### public float getBloodImpactZ()

**Returns:** `float`

### public void setBloodImpactZ(float bloodImpactZ)

**Parameters:**
- `float` `bloodImpactZ` — the BloodImpactZ to set

**Returns:** `void`

### public IsoSprite getBloodSplat()

**Returns:** `IsoSprite`

### public void setBloodSplat(IsoSprite bloodSplat)

**Parameters:**
- `IsoSprite` `bloodSplat` — the bloodSplat to set

**Returns:** `void`

### @Deprecated
public boolean isbOnBed()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public void setbOnBed(boolean onBed)

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `onBed` — the bOnBed to set

**Returns:** `void`

### public boolean isOnBed()

**Returns:** `boolean`

### public void setOnBed(boolean bOnBed)

**Parameters:**
- `boolean` `bOnBed`

**Returns:** `void`

### public Vector2 getMoveForwardVec()

**Returns:** `Vector2`

### public void setMoveForwardVec(Vector2 moveForwardVec)

**Parameters:**
- `Vector2` `moveForwardVec` — the moveForwardVec to set

**Returns:** `void`

### public boolean isPathing()

**Returns:** `boolean`

### public void setPathing(boolean pathing)

**Parameters:**
- `boolean` `pathing` — the pathing to set

**Returns:** `void`

### public Stack<IsoGameCharacter> getLocalEnemyList()

**Returns:** `Stack<IsoGameCharacter>`

### public Stack<IsoGameCharacter> getEnemyList()

**Returns:** `Stack<IsoGameCharacter>`

### public CharacterTraits getCharacterTraits()

**Returns:** `CharacterTraits`

### public int getMaxWeight()

**Returns:** `int`

### public void setMaxWeight(int maxWeight)

**Parameters:**
- `int` `maxWeight` — the maxWeight to set

**Returns:** `void`

### public int getMaxWeightBase()

**Returns:** `int`

### public void setMaxWeightBase(int maxWeightBase)

**Parameters:**
- `int` `maxWeightBase` — the maxWeightBase to set

**Returns:** `void`

### public float getSleepingTabletDelta()

**Returns:** `float`

### public void setSleepingTabletDelta(float sleepingTabletDelta)

**Parameters:**
- `float` `sleepingTabletDelta` — the SleepingTabletDelta to set

**Returns:** `void`

### public float getBetaEffect()

**Returns:** `float`

### public void setBetaEffect(float betaEffect)

**Parameters:**
- `float` `betaEffect` — the BetaEffect to set

**Returns:** `void`

### public float getDepressEffect()

**Returns:** `float`

### public void setDepressEffect(float depressEffect)

**Parameters:**
- `float` `depressEffect` — the DepressEffect to set

**Returns:** `void`

### public float getSleepingTabletEffect()

**Returns:** `float`

### public void setSleepingTabletEffect(float sleepingTabletEffect)

**Parameters:**
- `float` `sleepingTabletEffect` — the SleepingTabletEffect to set

**Returns:** `void`

### public float getBetaDelta()

**Returns:** `float`

### public void setBetaDelta(float betaDelta)

**Parameters:**
- `float` `betaDelta` — the BetaDelta to set

**Returns:** `void`

### public float getDepressDelta()

**Returns:** `float`

### public void setDepressDelta(float depressDelta)

**Parameters:**
- `float` `depressDelta` — the DepressDelta to set

**Returns:** `void`

### public float getPainEffect()

**Returns:** `float`

### public void setPainEffect(float painEffect)

**Parameters:**
- `float` `painEffect` — the PainEffect to set

**Returns:** `void`

### public float getPainDelta()

**Returns:** `float`

### public void setPainDelta(float painDelta)

**Parameters:**
- `float` `painDelta` — the PainDelta to set

**Returns:** `void`

### public boolean isbDoDefer()

**Returns:** `boolean`

### public void setbDoDefer(boolean doDefer)

**Parameters:**
- `boolean` `doDefer` — the bDoDefer to set

**Returns:** `void`

### public IsoGameCharacter.Location getLastHeardSound()

**Returns:** `IsoGameCharacter.Location`

### public void setLastHeardSound(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public boolean isClimbing()

**Returns:** `boolean`

### public void setbClimbing(boolean climbing)

**Parameters:**
- `boolean` `climbing` — the bClimbing to set

**Returns:** `void`

### public boolean isLastCollidedW()

**Returns:** `boolean`

### public void setLastCollidedW(boolean lastCollidedW)

**Parameters:**
- `boolean` `lastCollidedW` — the lastCollidedW to set

**Returns:** `void`

### public boolean isLastCollidedN()

**Returns:** `boolean`

### public void setLastCollidedN(boolean lastCollidedN)

**Parameters:**
- `boolean` `lastCollidedN` — the lastCollidedN to set

**Returns:** `void`

### public float getFallTime()

**Returns:** `float`

### public FallSeverity getFallSpeedSeverity()

**Returns:** `FallSeverity`

### public void setFallTime(float fallTime)

**Parameters:**
- `float` `fallTime` — the fallTime to set

**Returns:** `void`

### public float getLastFallSpeed()

**Returns:** `float`

### public void setLastFallSpeed(float lastFallSpeed)

**Parameters:**
- `float` `lastFallSpeed` — the lastFallSpeed to set

**Returns:** `void`

### public boolean isbFalling()

**Returns:** `boolean`

### public void setbFalling(boolean falling)

**Parameters:**
- `boolean` `falling` — the bFalling to set

**Returns:** `void`

### public BuildingDef getCurrentBuildingDef()

**Returns:** `BuildingDef`

### public RoomDef getCurrentRoomDef()

**Returns:** `RoomDef`

### public float getTorchStrength()

**Returns:** `float`

### public AnimEventBroadcaster getAnimEventBroadcaster()

**Returns:** `AnimEventBroadcaster`

### public void OnAnimEvent(AnimLayer sender,
AnimationTrack track,
AnimEvent event)

**Parameters:**
- `AnimLayer` `sender`
- `AnimationTrack` `track`
- `AnimEvent` `event`

**Returns:** `void`

### public void onRagdollSimulationStarted()

**Returns:** `void`

### public float getHammerSoundMod()

**Returns:** `float`

### public float getWeldingSoundMod()

**Returns:** `float`

### public float getBarricadeTimeMod()

**Returns:** `float`

### public float getMetalBarricadeStrengthMod()

**Returns:** `float`

### public float getBarricadeStrengthMod()

**Returns:** `float`

### public float getSneakSpotMod()

**Returns:** `float`

### public float getNimbleMod()

**Returns:** `float`

### public float getFatigueMod()

**Returns:** `float`

### public float getLightfootMod()

**Returns:** `float`

### public float getPacingMod()

**Returns:** `float`

### public float getHyperthermiaMod()

**Returns:** `float`

### public float getHittingMod()

**Returns:** `float`

### public float getShovingMod()

**Returns:** `float`

### public float getRecoveryMod()

**Returns:** `float`

### public float getWeightMod()

**Returns:** `float`

### public int getHitChancesMod()

**Returns:** `int`

### public float getSprintMod()

**Returns:** `float`

### public int getPerkLevel(PerkFactory.Perk perks)

Return the current lvl of a perk (skill)

**Parameters:**
- `PerkFactory.Perk` `perks`

**Returns:** `int`

### public void setPerkLevelDebug(PerkFactory.Perk perks,
int level)

**Parameters:**
- `PerkFactory.Perk` `perks`
- `int` `level`

**Returns:** `void`

### public void LoseLevel(PerkFactory.Perk perk)

**Parameters:**
- `PerkFactory.Perk` `perk`

**Returns:** `void`

### public void LevelPerk(PerkFactory.Perk perk,
boolean removePick)

Level up a perk (max lvl 5)

**Parameters:**
- `PerkFactory.Perk` `perk` — the perk to lvl up
- `boolean` `removePick` — did we remove a skill pts ? (for example passiv skill automatically lvl up, without consuming
skill pts)

**Returns:** `void`

### public void LevelPerk(PerkFactory.Perk perk)

Level up a perk (max lvl 5)

**Parameters:**
- `PerkFactory.Perk` `perk` — the perk to lvl up (a skill points is removed)

**Returns:** `void`

### public void level0(PerkFactory.Perk perk)

**Parameters:**
- `PerkFactory.Perk` `perk`

**Returns:** `void`

### public IsoGameCharacter.Location getLastKnownLocationOf(String character)

**Parameters:**
- `String` `character`

**Returns:** `IsoGameCharacter.Location`

### public void ReadLiterature(Literature literature)

Used when you read a book, magazine or newspaper

**Parameters:**
- `Literature` `literature` — the book to read

**Returns:** `void`

### public void OnDeath()

**Returns:** `void`

### public void splatBloodFloorBig()

**Returns:** `void`

### public void splatBloodFloor()

**Returns:** `void`

### public int getThreatLevel()

**Returns:** `int`

### public boolean isDead()

**Returns:** `boolean`

### public boolean isAlive()

**Returns:** `boolean`

### public boolean isEditingRagdoll()

**Returns:** `boolean`

### public void setEditingRagdoll(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public boolean isRagdoll()

**Returns:** `boolean`

### public boolean isFullyRagdolling()

**Returns:** `boolean`

### public void setRagdollFall(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public boolean isRagdollFall()

**Returns:** `boolean`

### public boolean isVehicleCollision()

**Returns:** `boolean`

### public void setVehicleCollision(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public boolean useRagdollVehicleCollision()

**Returns:** `boolean`

### public boolean isUpright()

**Returns:** `boolean`

### public boolean isOnBack()

**Returns:** `boolean`

### public boolean usePhysicHitReaction()

**Returns:** `boolean`

### public void setUsePhysicHitReaction(boolean usePhysicHitReaction)

**Parameters:**
- `boolean` `usePhysicHitReaction`

**Returns:** `void`

### public boolean isRagdollSimulationActive()

**Returns:** `boolean`

### public void Seen(Stack<IsoMovingObject> seenList)

**Parameters:**
- `Stack<IsoMovingObject>` `seenList`

**Returns:** `void`

### public boolean CanSee(IsoMovingObject obj)

**Parameters:**
- `IsoMovingObject` `obj`

**Returns:** `boolean`

### public boolean CanSee(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `boolean`

### public IsoGridSquare getLowDangerInVicinity(int attempts,
int range)

**Parameters:**
- `int` `attempts`
- `int` `range`

**Returns:** `IsoGridSquare`

### public boolean hasEquipped(String string)

**Parameters:**
- `String` `string`

**Returns:** `boolean`

### public boolean hasEquippedTag(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `boolean`

### public boolean hasWornTag(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `boolean`

### public void setForwardIsoDirection(IsoDirections directions)

**Parameters:**
- `IsoDirections` `directions`

**Returns:** `void`

### public void setForwardDirectionFromIsoDirection()

**Returns:** `void`

### public void setForwardDirectionFromAnimAngle()

**Returns:** `void`

### public void Callout(boolean doAnim)

**Parameters:**
- `boolean` `doAnim`

**Returns:** `void`

### public void Callout()

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

### public ChatElement getChatElement()

**Returns:** `ChatElement`

### public void StartAction(BaseAction act)

**Parameters:**
- `BaseAction` `act`

**Returns:** `void`

### public void QueueAction(BaseAction act)

**Parameters:**
- `BaseAction` `act`

**Returns:** `void`

### public void StopAllActionQueue()

**Returns:** `void`

### public void StopAllActionQueueRunning()

**Returns:** `void`

### public void StopAllActionQueueAiming()

**Returns:** `void`

### public void StopAllActionQueueWalking()

**Returns:** `void`

### public String GetAnimSetName()

**Returns:** `String`

### public void SleepingTablet(float sleepingTabletDelta)

**Parameters:**
- `float` `sleepingTabletDelta`

**Returns:** `void`

### public void BetaBlockers(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public void BetaAntiDepress(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public void PainMeds(float delta)

**Parameters:**
- `float` `delta`

**Returns:** `void`

### public void initSpritePartsEmpty()

**Returns:** `void`

### public void InitSpriteParts(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `void`

### public boolean hasTrait(CharacterTrait characterTrait)

**Parameters:**
- `CharacterTrait` `characterTrait`

**Returns:** `boolean`

### public boolean hasTrait(CharacterTrait... characterTrait)

**Parameters:**
- `CharacterTrait...` `characterTrait`

**Returns:** `boolean`

### public void ApplyInBedOffset(boolean apply)

**Parameters:**
- `boolean` `apply`

**Returns:** `void`

### public void Dressup(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `void`

### public void setPathSpeed(float speed)

**Parameters:**
- `float` `speed`

**Returns:** `void`

### public void PlayAnim(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

### public void PlayAnimWithSpeed(String string,
float framesSpeedPerFrame)

**Parameters:**
- `String` `string`
- `float` `framesSpeedPerFrame`

**Returns:** `void`

### public void PlayAnimUnlooped(String string)

**Parameters:**
- `String` `string`

**Returns:** `void`

### public void DirectionFromVector(Vector2 vecA)

**Parameters:**
- `Vector2` `vecA`

**Returns:** `void`

### public void DoFootstepSound(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public void DoFootstepSound(float volume)

**Parameters:**
- `float` `volume`

**Returns:** `void`

### public boolean Eat(InventoryItem info,
float percentage)

**Parameters:**
- `InventoryItem` `info`
- `float` `percentage`

**Returns:** `boolean`

### public boolean EatOnClient(InventoryItem info,
float percentage)

**Parameters:**
- `InventoryItem` `info`
- `float` `percentage`

**Returns:** `boolean`

### public boolean Eat(InventoryItem info,
float percentage,
boolean useUtensil)

**Parameters:**
- `InventoryItem` `info`
- `float` `percentage`
- `boolean` `useUtensil`

**Returns:** `boolean`

### public boolean Eat(InventoryItem info)

**Parameters:**
- `InventoryItem` `info`

**Returns:** `boolean`

### public boolean DrinkFluid(InventoryItem info,
float percentage)

**Parameters:**
- `InventoryItem` `info`
- `float` `percentage`

**Returns:** `boolean`

### public boolean DrinkFluid(InventoryItem info,
float percentage,
boolean useUtensil)

**Parameters:**
- `InventoryItem` `info`
- `float` `percentage`
- `boolean` `useUtensil`

**Returns:** `boolean`

### public boolean DrinkFluid(FluidContainer fluidCont,
float percentage)

**Parameters:**
- `FluidContainer` `fluidCont`
- `float` `percentage`

**Returns:** `boolean`

### public boolean DrinkFluid(FluidContainer fluidCont,
float percentage,
boolean useUtensil)

**Parameters:**
- `FluidContainer` `fluidCont`
- `float` `percentage`
- `boolean` `useUtensil`

**Returns:** `boolean`

### public boolean DrinkFluid(InventoryItem info)

**Parameters:**
- `InventoryItem` `info`

**Returns:** `boolean`

### public void FireCheck()

**Returns:** `void`

### public String getPrimaryHandType()

**Returns:** `String`

### public float getChestHeight()

**Returns:** `float`

### public float getAimOriginPosX()

**Returns:** `float`

### public float getAimOriginPosY()

**Returns:** `float`

### public float getAimOriginPosZ()

**Returns:** `float`

### public float getGlobalMovementMod(boolean bDoNoises)

**Parameters:**
- `boolean` `bDoNoises`

**Returns:** `float`

### public float getMovementSpeed()

**Returns:** `float`

### public String getSecondaryHandType()

**Returns:** `String`

### public boolean HasItem(String string)

**Parameters:**
- `String` `string`

**Returns:** `boolean`

### public void changeState(State state)

**Parameters:**
- `State` `state`

**Returns:** `void`

### public State getCurrentState()

**Returns:** `State`

### public boolean isCurrentState(State state)

**Parameters:**
- `State` `state`

**Returns:** `boolean`

### public boolean isCurrentGameClientState(State state)

**Parameters:**
- `State` `state`

**Returns:** `boolean`

### public <T> void set(State.Param<T> state,
T value)

**Returns:** `void`

### public <T> T get(State.Param<T> state)

**Returns:** `T`

### public <T> T get(State.Param<T> state,
T defaultT)

**Returns:** `T`

### public <T> T remove(State.Param<T> state)

**Returns:** `T`

### public void clear(State state)

**Parameters:**
- `State` `state`

**Returns:** `void`

### public void clear(Class<? extends State> clazz)

**Parameters:**
- `Class<? extends State>` `clazz`

**Returns:** `void`

### public Map<State.Param<?>, Object> getStateMachineParams(Class<?> clazz)

**Parameters:**
- `Class<?>` `clazz`

**Returns:** `Map<State.Param<?>, Object>`

### public void setStateMachineLocked(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public float Hit(HandWeapon weapon,
IsoGameCharacter wielder,
float damageSplit,
boolean bIgnoreDamage,
float modDelta)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `float` `damageSplit`
- `boolean` `bIgnoreDamage`
- `float` `modDelta`

**Returns:** `float`

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

### public float processHitDamage(HandWeapon weapon,
IsoGameCharacter wielder,
float damageSplit,
boolean bIgnoreDamage,
float modDelta)

**Parameters:**
- `HandWeapon` `weapon`
- `IsoGameCharacter` `wielder`
- `float` `damageSplit`
- `boolean` `bIgnoreDamage`
- `float` `modDelta`

**Returns:** `float`

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

### public boolean IsAttackRange(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `boolean`

### public boolean isMeleeAttackRange(HandWeapon handWeapon,
IsoMovingObject isoMovingObject,
Vector3 bonePos)

**Parameters:**
- `HandWeapon` `handWeapon`
- `IsoMovingObject` `isoMovingObject`
- `Vector3` `bonePos`

**Returns:** `boolean`

### public boolean IsSpeaking()

**Returns:** `boolean`

### public boolean IsSpeakingNPC()

**Returns:** `boolean`

### public void MoveForward(float dist,
float x,
float y,
float soundDelta)

**Parameters:**
- `float` `dist`
- `float` `x`
- `float` `y`
- `float` `soundDelta`

**Returns:** `void`

### public void pathToCharacter(IsoGameCharacter target)

**Parameters:**
- `IsoGameCharacter` `target`

**Returns:** `void`

### public void pathToLocation(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void pathToLocationF(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void pathToSound(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public boolean CanAttack()

**Returns:** `boolean`

### public boolean isEnduranceSufficientForAction()

**Returns:** `boolean`

### public void ReduceHealthWhenBurning()

**Returns:** `void`

### @Deprecated
public void DrawSneezeText()

> ⚠️ **Deprecated**

**Returns:** `void`

### public IsoSpriteInstance getSpriteDef()

**Returns:** `IsoSpriteInstance`

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

### public void renderServerGUI()

**Returns:** `void`

### public boolean isSeatedInVehicle()

**Returns:** `boolean`

### public void renderObjectPicker(float x,
float y,
float z,
ColorInfo lightInfo)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `lightInfo`

**Returns:** `void`

### public ShadowParams calculateShadowParams(ShadowParams sp)

**Parameters:**
- `ShadowParams` `sp`

**Returns:** `ShadowParams`

### public static ShadowParams calculateShadowParams(AnimationPlayer animationPlayer,
float animalSize,
boolean bRagdoll,
ShadowParams sp)

**Parameters:**
- `AnimationPlayer` `animationPlayer`
- `float` `animalSize`
- `boolean` `bRagdoll`
- `ShadowParams` `sp`

**Returns:** `ShadowParams`

### public void renderShadow(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void checkUpdateModelTextures()

**Returns:** `void`

### public boolean isMaskClicked(int x,
int y,
boolean flip)

**Parameters:**
- `int` `x`
- `int` `y`
- `boolean` `flip`

**Returns:** `boolean`

### public void setHaloNote(String str)

**Parameters:**
- `String` `str`

**Returns:** `void`

### public void setHaloNote(String str,
float dispTime)

**Parameters:**
- `String` `str`
- `float` `dispTime`

**Returns:** `void`

### public void setHaloNote(String str,
int r,
int g,
int b,
float dispTime)

**Parameters:**
- `String` `str`
- `int` `r`
- `int` `g`
- `int` `b`
- `float` `dispTime`

**Returns:** `void`

### public float getHaloTimerCount()

**Returns:** `float`

### public void DoSneezeText()

**Returns:** `void`

### public String getSayLine()

**Returns:** `String`

### public void setSayLine(String sayLine)

**Parameters:**
- `String` `sayLine` — the sayLine to set

**Returns:** `void`

### public ChatMessage getLastChatMessage()

**Returns:** `ChatMessage`

### public void setLastChatMessage(ChatMessage lastChatMessage)

**Parameters:**
- `ChatMessage` `lastChatMessage`

**Returns:** `void`

### public String getLastSpokenLine()

**Returns:** `String`

### public void setLastSpokenLine(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### public void SayDebug(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public void SayDebug(int n,
String text)

**Parameters:**
- `int` `n`
- `String` `text`

**Returns:** `void`

### public int getMaxChatLines()

**Returns:** `int`

### public void Say(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### public void Say(String line,
float r,
float g,
float b,
UIFont font,
float baseRange,
String customTag)

**Parameters:**
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`
- `UIFont` `font`
- `float` `baseRange`
- `String` `customTag`

**Returns:** `void`

### public void SayWhisper(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### public void SayShout(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### public void SayRadio(String line,
float r,
float g,
float b,
UIFont font,
float baseRange,
int channel,
String customTag)

**Parameters:**
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`
- `UIFont` `font`
- `float` `baseRange`
- `int` `channel`
- `String` `customTag`

**Returns:** `void`

### public void addLineChatElement(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### public void addLineChatElement(String line,
float r,
float g,
float b)

**Parameters:**
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void addLineChatElement(String line,
float r,
float g,
float b,
UIFont font,
float baseRange,
String customTag)

**Parameters:**
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`
- `UIFont` `font`
- `float` `baseRange`
- `String` `customTag`

**Returns:** `void`

### public void addLineChatElement(String line,
float r,
float g,
float b,
UIFont font,
float baseRange,
String customTag,
boolean bbcode,
boolean img,
boolean icons,
boolean colors,
boolean fonts,
boolean equalizeHeights)

**Parameters:**
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`
- `UIFont` `font`
- `float` `baseRange`
- `String` `customTag`
- `boolean` `bbcode`
- `boolean` `img`
- `boolean` `icons`
- `boolean` `colors`
- `boolean` `fonts`
- `boolean` `equalizeHeights`

**Returns:** `void`

### public int getUserNameHeight()

**Returns:** `int`

### public void updateTextObjects()

**Returns:** `void`

### public static void getNameCoords(float x,
float y,
float z,
float offX,
float offY,
float zoom,
Vector2 coord)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `offX`
- `float` `offY`
- `float` `zoom`
- `Vector2` `coord`

**Returns:** `void`

### public void renderlast()

**Returns:** `void`

### public void drawLine(Vector2 startPos,
Vector2 dir,
float length,
float r,
float g,
float b)

**Parameters:**
- `Vector2` `startPos`
- `Vector2` `dir`
- `float` `length`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public Vector2 calcCarForwardVector()

**Returns:** `Vector2`

### public boolean carMovingBackward(Vector2 carSpeed)

**Parameters:**
- `Vector2` `carSpeed`

**Returns:** `boolean`

### public Vector2 calcCarPositionOffset(boolean movingBackward)

**Parameters:**
- `boolean` `movingBackward`

**Returns:** `Vector2`

### public float calcLengthMultiplier(Vector2 carSpeed,
boolean movingBackward)

**Parameters:**
- `Vector2` `carSpeed`
- `boolean` `movingBackward`

**Returns:** `float`

### public Vector2 calcCarSpeedVector(Vector2 offset)

**Parameters:**
- `Vector2` `offset`

**Returns:** `Vector2`

### public Vector2 calcCarSpeedVector()

**Returns:** `Vector2`

### public Vector2 calcCarToPlayerVector(IsoGameCharacter target,
Vector2 offset)

**Parameters:**
- `IsoGameCharacter` `target`
- `Vector2` `offset`

**Returns:** `Vector2`

### public Vector2 calcCarToPlayerVector(IsoGameCharacter target)

**Parameters:**
- `IsoGameCharacter` `target`

**Returns:** `Vector2`

### public float calcConeAngleOffset(IsoGameCharacter target,
boolean movingBackward)

**Parameters:**
- `IsoGameCharacter` `target`
- `boolean` `movingBackward`

**Returns:** `float`

### public float calcConeAngleMultiplier(IsoGameCharacter target,
boolean movingBackward)

**Parameters:**
- `IsoGameCharacter` `target`
- `boolean` `movingBackward`

**Returns:** `float`

### public void drawDirectionLine(Vector2 dir,
float length,
float r,
float g,
float b)

**Parameters:**
- `Vector2` `dir`
- `float` `length`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void drawDirectionLine(Vector3 dir,
float length,
float r,
float g,
float b)

**Parameters:**
- `Vector3` `dir`
- `float` `length`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void drawDebugTextBelow(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public Radio getEquipedRadio()

**Returns:** `Radio`

### public void setDefaultState()

**Returns:** `void`

### public void SetOnFire()

**Returns:** `void`

### public void StopBurning()

**Returns:** `void`

### public void SpreadFireMP()

**Returns:** `void`

### public void SpreadFire()

**Returns:** `void`

### public void Throw(HandWeapon weapon)

**Parameters:**
- `HandWeapon` `weapon`

**Returns:** `void`

### public boolean helmetFall(boolean hitHead)

**Parameters:**
- `boolean` `hitHead`

**Returns:** `boolean`

### public void smashCarWindow(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void smashWindow(IsoWindow w)

**Parameters:**
- `IsoWindow` `w`

**Returns:** `void`

### public void openWindow(IsoWindow w)

**Parameters:**
- `IsoWindow` `w`

**Returns:** `void`

### public void closeWindow(IsoWindow w)

**Parameters:**
- `IsoWindow` `w`

**Returns:** `void`

### public void climbThroughWindow(IsoWindow w)

**Parameters:**
- `IsoWindow` `w`

**Returns:** `void`

### public void climbThroughWindow(IsoWindow w,
Integer startingFrame)

**Parameters:**
- `IsoWindow` `w`
- `Integer` `startingFrame`

**Returns:** `void`

### public boolean isClosingWindow(IsoWindow window)

**Parameters:**
- `IsoWindow` `window`

**Returns:** `boolean`

### public boolean isClimbingThroughWindow(IsoWindow window)

**Parameters:**
- `IsoWindow` `window`

**Returns:** `boolean`

### public void climbThroughWindowFrame(IsoWindowFrame windowFrame)

**Parameters:**
- `IsoWindowFrame` `windowFrame`

**Returns:** `void`

### public void climbSheetRope()

**Returns:** `void`

### public void climbDownSheetRope()

**Returns:** `void`

### public boolean canClimbSheetRope(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public boolean canClimbDownSheetRopeInCurrentSquare()

**Returns:** `boolean`

### public boolean canClimbDownSheetRope(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public void climbThroughWindow(IsoThumpable w)

**Parameters:**
- `IsoThumpable` `w`

**Returns:** `void`

### public void climbThroughWindow(IsoThumpable w,
Integer startingFrame)

**Parameters:**
- `IsoThumpable` `w`
- `Integer` `startingFrame`

**Returns:** `void`

### public void climbOverFence(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `void`

### public boolean isAboveTopOfStairs()

**Returns:** `boolean`

### public void throwGrappledTargetOutWindow(IsoObject windowObject)

**Parameters:**
- `IsoObject` `windowObject`

**Returns:** `void`

### public void throwGrappledOverFence(IsoObject hoppableObject,
IsoDirections dir)

**Parameters:**
- `IsoObject` `hoppableObject`
- `IsoDirections` `dir`

**Returns:** `void`

### public void throwGrappledIntoInventory(ItemContainer targetContainer)

**Parameters:**
- `ItemContainer` `targetContainer`

**Returns:** `void`

### public void pickUpCorpseItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void pickUpCorpse(IsoDeadBody body,
String dragType)

**Parameters:**
- `IsoDeadBody` `body`
- `String` `dragType`

**Returns:** `void`

### public float calculateGrappleEffectivenessFromTraits()

**Returns:** `float`

### public void preupdate()

**Returns:** `void`

### public boolean allowsInvisibleAnimationSkips()

**Returns:** `boolean`

### public void updateHandEquips()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean isPushedByForSeparate(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `boolean`

### public void setHitDir(Vector2 hitDir)

**Parameters:**
- `Vector2` `hitDir` — the hitDir to set

**Returns:** `void`

### public UpdateSchedulerSimulationLevel getMinimumSimulationLevel()

**Returns:** `UpdateSchedulerSimulationLevel`

### public String getHitDirEnum()

**Returns:** `String`

### public double getHoursSurvived()

**Returns:** `double`

### public boolean shouldSnapZToCurrentSquare()

**Returns:** `boolean`

### public boolean shouldBeFalling()

**Returns:** `boolean`

### public float getHeightAboveFloor()

**Returns:** `float`

### public float calculateBaseSpeed()

**Returns:** `float`

### public float calculateCombatSpeed()

**Returns:** `float`

### public void updateSpeedModifiers()

**Returns:** `void`

### public void updateDiscomfortModifiers()

**Returns:** `void`

### public void DoFloorSplat(IsoGridSquare sq,
String id,
boolean bFlip,
float offZ,
float alpha)

**Parameters:**
- `IsoGridSquare` `sq`
- `String` `id`
- `boolean` `bFlip`
- `float` `offZ`
- `float` `alpha`

**Returns:** `void`

### public boolean onMouseLeftClick(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public void faceDirection(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `void`

### public final boolean faceLocation(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public boolean faceLocationF(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public boolean isFacingLocation(float x,
float y,
float dot)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `dot`

**Returns:** `boolean`

### public boolean isFacingObject(IsoObject object,
float dot)

**Parameters:**
- `IsoObject` `object`
- `float` `dot`

**Returns:** `boolean`

### public void splatBlood(int dist,
float alpha)

**Parameters:**
- `int` `dist`
- `float` `alpha`

**Returns:** `void`

### public boolean isOutside()

**Returns:** `boolean`

### public final boolean isFemale()

**Returns:** `boolean`

### public final void setFemale(boolean isFemale)

**Parameters:**
- `boolean` `isFemale`

**Returns:** `void`

### public final void setCharacterGender(CharacterGender characterGender)

**Parameters:**
- `CharacterGender` `characterGender`

**Returns:** `void`

### public final CharacterGender getCharacterGender()

**Returns:** `CharacterGender`

### public boolean isZombie()

**Returns:** `boolean`

### public int getLastHitCount()

**Returns:** `int`

### public void setLastHitCount(int hitCount)

**Parameters:**
- `int` `hitCount`

**Returns:** `void`

### public int getSurvivorKills()

**Returns:** `int`

### public void setSurvivorKills(int survivorKills)

**Parameters:**
- `int` `survivorKills`

**Returns:** `void`

### public int getAge()

**Returns:** `int`

### public void setAge(int age)

**Parameters:**
- `int` `age`

**Returns:** `void`

### public void exert(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public IsoGameCharacter.PerkInfo getPerkInfo(PerkFactory.Perk perk)

**Parameters:**
- `PerkFactory.Perk` `perk`

**Returns:** `IsoGameCharacter.PerkInfo`

### public boolean isEquipped(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isEquippedClothing(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isAttachedItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public void faceThisObject(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void facePosition(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void faceThisObjectAlt(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void setAnimated(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public long playHurtSound()

**Returns:** `long`

### public void playDeadSound()

**Returns:** `void`

### public void saveChange(IsoObjectChange change,
se.krka.kahlua.vm.KahluaTable tbl,
ByteBufferWriter bb)

**Parameters:**
- `IsoObjectChange` `change`
- `se.krka.kahlua.vm.KahluaTable` `tbl`
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public void loadChange(IsoObjectChange change,
ByteBufferReader bb)

**Parameters:**
- `IsoObjectChange` `change`
- `ByteBufferReader` `bb`

**Returns:** `void`

### public int getAlreadyReadPages(String fullType)

**Parameters:**
- `String` `fullType`

**Returns:** `int`

### public void setAlreadyReadPages(String fullType,
int pages)

**Parameters:**
- `String` `fullType`
- `int` `pages`

**Returns:** `void`

### public void updateLightInfo()

**Returns:** `void`

### public IsoGameCharacter.LightInfo initLightInfo2()

**Returns:** `IsoGameCharacter.LightInfo`

### public IsoGameCharacter.LightInfo getLightInfo2()

**Returns:** `IsoGameCharacter.LightInfo`

### public void postupdate()

**Returns:** `void`

### public float getAnimationTimeDelta()

**Returns:** `float`

### public void updateForServerGui()

**Returns:** `void`

### public boolean isAnimationUpdatingThisFrame()

**Returns:** `boolean`

### public void clearHitInfo()

**Returns:** `void`

### public boolean shouldBeTurning()

**Returns:** `boolean`

### public boolean shouldBeTurning90()

**Returns:** `boolean`

### public boolean shouldBeTurningAround()

**Returns:** `boolean`

### public boolean isTurning()

**Returns:** `boolean`

### public boolean isTurningAround()

**Returns:** `boolean`

### public boolean isTurning90()

**Returns:** `boolean`

### public boolean hasPath()

**Returns:** `boolean`

### public float getMeleeDelay()

**Returns:** `float`

### public void setMeleeDelay(float delay)

**Parameters:**
- `float` `delay`

**Returns:** `void`

### public float getRecoilDelay()

**Returns:** `float`

### public void setRecoilDelay(float recoilDelay)

**Parameters:**
- `float` `recoilDelay`

**Returns:** `void`

### public float getAimingDelay()

**Returns:** `float`

### public void setAimingDelay(float aimingDelay)

**Parameters:**
- `float` `aimingDelay`

**Returns:** `void`

### public void resetAimingDelay()

**Returns:** `void`

### public void updateAimingDelay()

**Returns:** `void`

### public float getBeenMovingFor()

**Returns:** `float`

### public void setBeenMovingFor(float beenMovingFor)

**Parameters:**
- `float` `beenMovingFor`

**Returns:** `void`

### public String getClickSound()

**Returns:** `String`

### public void setClickSound(String clickSound)

**Parameters:**
- `String` `clickSound`

**Returns:** `void`

### public int getMeleeCombatMod()

**Returns:** `int`

### public int getWeaponLevel()

**Returns:** `int`

### public int getWeaponLevel(HandWeapon weapon)

**Parameters:**
- `HandWeapon` `weapon`

**Returns:** `int`

### public int getMaintenanceMod()

**Returns:** `int`

### public BaseVehicle getVehicle()

**Returns:** `BaseVehicle`

### public void setVehicle(BaseVehicle v)

**Parameters:**
- `BaseVehicle` `v`

**Returns:** `void`

### public boolean isUnderVehicle()

**Returns:** `boolean`

### public boolean isUnderVehicleRadius(float radius)

**Parameters:**
- `float` `radius`

**Returns:** `boolean`

### public boolean isBeingSteppedOn()

**Returns:** `boolean`

### public float getReduceInfectionPower()

**Returns:** `float`

### public void setReduceInfectionPower(float reduceInfectionPower)

**Parameters:**
- `float` `reduceInfectionPower`

**Returns:** `void`

### public float getInventoryWeight()

**Returns:** `float`

### public void dropHandItems()

**Returns:** `void`

### public void dropHeldItems(int x,
int y,
int z,
boolean heavy,
boolean isThrow)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `heavy`
- `boolean` `isThrow`

**Returns:** `void`

### public boolean shouldBecomeZombieAfterDeath()

**Returns:** `boolean`

### public void modifyTraitXPBoost(CharacterTrait characterTrait,
boolean isRemovingTrait)

**Parameters:**
- `CharacterTrait` `characterTrait`
- `boolean` `isRemovingTrait`

**Returns:** `void`

### public void modifyTraitXPBoost(CharacterTraitDefinition trait,
boolean isRemovingTrait)

**Parameters:**
- `CharacterTraitDefinition` `trait`
- `boolean` `isRemovingTrait`

**Returns:** `void`

### public void applyTraits(List<CharacterTrait> luaTraits)

**Parameters:**
- `List<CharacterTrait>` `luaTraits`

**Returns:** `void`

### public void applyProfessionRecipes()

**Returns:** `void`

### public void applyCharacterTraitsRecipes()

**Returns:** `void`

### public InventoryItem createKeyRing()

**Returns:** `InventoryItem`

### public InventoryItem createKeyRing(ItemKey itemKey)

**Parameters:**
- `ItemKey` `itemKey`

**Returns:** `InventoryItem`

### public void autoDrink()

**Returns:** `void`

### public InventoryItem getWaterSource(ArrayList<InventoryItem> items)

**Parameters:**
- `ArrayList<InventoryItem>` `items`

**Returns:** `InventoryItem`

### public List<String> getKnownRecipes()

**Returns:** `List<String>`

### public boolean isRecipeKnown(Recipe recipe)

**Parameters:**
- `Recipe` `recipe`

**Returns:** `boolean`

### public boolean isRecipeKnown(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `boolean`

### public boolean isRecipeKnown(CraftRecipe recipe,
boolean ignoreSandbox)

**Parameters:**
- `CraftRecipe` `recipe`
- `boolean` `ignoreSandbox`

**Returns:** `boolean`

### public boolean isRecipeKnown(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public boolean isRecipeKnown(String name,
boolean ignoreSandbox)

**Parameters:**
- `String` `name`
- `boolean` `ignoreSandbox`

**Returns:** `boolean`

### public boolean isRecipeActuallyKnown(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `boolean`

### public boolean isRecipeActuallyKnown(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public boolean learnRecipe(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public boolean learnRecipe(String name,
boolean checkMetaRecipe)

**Parameters:**
- `String` `name`
- `boolean` `checkMetaRecipe`

**Returns:** `boolean`

### public void addKnownMediaLine(String guid)

**Parameters:**
- `String` `guid`

**Returns:** `void`

### public void removeKnownMediaLine(String guid)

**Parameters:**
- `String` `guid`

**Returns:** `void`

### public void clearKnownMediaLines()

**Returns:** `void`

### public boolean isKnownMediaLine(String guid)

**Parameters:**
- `String` `guid`

**Returns:** `boolean`

### public boolean isMoving()

**Returns:** `boolean`

### public boolean isBehaviourMoving()

**Returns:** `boolean`

### public boolean isPlayerMoving()

**Returns:** `boolean`

### public void setMoving(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean isAttacking()

**Returns:** `boolean`

### public boolean isZombieAttacking()

**Returns:** `boolean`

### public boolean isZombieAttacking(IsoMovingObject other)

**Parameters:**
- `IsoMovingObject` `other`

**Returns:** `boolean`

### public int compareMovePriority(IsoGameCharacter other)

**Parameters:**
- `IsoGameCharacter` `other`

**Returns:** `int`

### public long playSound(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public long playSoundLocal(String file)

**Parameters:**
- `String` `file`

**Returns:** `long`

### public void stopOrTriggerSound(long eventInstance)

**Parameters:**
- `long` `eventInstance`

**Returns:** `void`

### public long playDropItemSound(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `long`

### public long playWeaponHitArmourSound(int partIndex,
boolean bullet)

**Parameters:**
- `int` `partIndex`
- `boolean` `bullet`

**Returns:** `long`

### public void addWorldSoundUnlessInvisible(int radius,
int volume,
boolean bStressHumans)

**Parameters:**
- `int` `radius`
- `int` `volume`
- `boolean` `bStressHumans`

**Returns:** `void`

### public boolean isKnownPoison(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isKnownPoison(Item item)

**Parameters:**
- `Item` `item`

**Returns:** `boolean`

### public int getLastHourSleeped()

**Returns:** `int`

### public void setLastHourSleeped(int lastHourSleeped)

**Parameters:**
- `int` `lastHourSleeped`

**Returns:** `void`

### public void setTimeOfSleep(float timeOfSleep)

**Parameters:**
- `float` `timeOfSleep`

**Returns:** `void`

### public void setDelayToSleep(float delay)

**Parameters:**
- `float` `delay`

**Returns:** `void`

### public String getBedType()

**Returns:** `String`

### public void setBedType(String bedType)

**Parameters:**
- `String` `bedType`

**Returns:** `void`

### public void enterVehicle(BaseVehicle v,
int seat,
org.joml.Vector3f offset)

**Parameters:**
- `BaseVehicle` `v`
- `int` `seat`
- `org.joml.Vector3f` `offset`

**Returns:** `void`

### public float Hit(BaseVehicle vehicle,
float speed,
boolean isHitFromBehind,
float hitDirX,
float hitDirY,
boolean pushedBack,
float collisionPosOnVehicleX,
float collisionPosOnVehicleY)

**Parameters:**
- `BaseVehicle` `vehicle`
- `float` `speed`
- `boolean` `isHitFromBehind`
- `float` `hitDirX`
- `float` `hitDirY`
- `boolean` `pushedBack`
- `float` `collisionPosOnVehicleX`
- `float` `collisionPosOnVehicleY`

**Returns:** `float`

### public Path getPath2()

**Returns:** `Path`

### public void setPath2(Path path)

**Parameters:**
- `Path` `path`

**Returns:** `void`

### public PathFindBehavior2 getPathFindBehavior2()

**Returns:** `PathFindBehavior2`

### public MapKnowledge getMapKnowledge()

**Returns:** `MapKnowledge`

### public IsoObject getBed()

**Returns:** `IsoObject`

### public void setBed(IsoObject bed)

**Parameters:**
- `IsoObject` `bed`

**Returns:** `void`

### public boolean avoidDamage()

**Returns:** `boolean`

### public void setAvoidDamage(boolean avoid)

**Parameters:**
- `boolean` `avoid`

**Returns:** `void`

### public boolean isReading()

**Returns:** `boolean`

### public void setReading(boolean isReading)

**Parameters:**
- `boolean` `isReading`

**Returns:** `void`

### public float getTimeSinceLastSmoke()

**Returns:** `float`

### public void setTimeSinceLastSmoke(float timeSinceLastSmoke)

**Parameters:**
- `float` `timeSinceLastSmoke`

**Returns:** `void`

### public boolean isInvisible()

**Returns:** `boolean`

### public void setInvisible(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setInvisible(boolean b,
boolean isForced)

**Parameters:**
- `boolean` `b`
- `boolean` `isForced`

**Returns:** `void`

### public boolean isCanUseBrushTool()

**Returns:** `boolean`

### public void setCanUseBrushTool(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean canUseLootZed()

**Returns:** `boolean`

### public void setCanUseLootZed(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean canUseLootLog()

**Returns:** `boolean`

### public void setCanUseLootLog(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean canUseDebugContextMenu()

**Returns:** `boolean`

### public void setCanUseDebugContextMenu(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isDriving()

**Returns:** `boolean`

### public boolean isInARoom()

**Returns:** `boolean`

### public boolean isGodMod()

**Returns:** `boolean`

### public boolean isInvulnerable()

**Returns:** `boolean`

### public void setInvulnerable(boolean invulnerable)

**Parameters:**
- `boolean` `invulnerable`

**Returns:** `void`

### public void setZombiesDontAttack(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isZombiesDontAttack()

**Returns:** `boolean`

### public void setGodMod(boolean b,
boolean isForced)

**Parameters:**
- `boolean` `b`
- `boolean` `isForced`

**Returns:** `void`

### public void setGodMod(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isUnlimitedCarry()

**Returns:** `boolean`

### public void setUnlimitedCarry(boolean unlimitedCarry)

**Parameters:**
- `boolean` `unlimitedCarry`

**Returns:** `void`

### public boolean isBuildCheat()

**Returns:** `boolean`

### public void setBuildCheat(boolean buildCheat)

**Parameters:**
- `boolean` `buildCheat`

**Returns:** `void`

### public boolean isFarmingCheat()

**Returns:** `boolean`

### public void setFarmingCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isFishingCheat()

**Returns:** `boolean`

### public void setFishingCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isHealthCheat()

**Returns:** `boolean`

### public void setHealthCheat(boolean healthCheat)

**Parameters:**
- `boolean` `healthCheat`

**Returns:** `void`

### public boolean isMechanicsCheat()

**Returns:** `boolean`

### public void setMechanicsCheat(boolean mechanicsCheat)

**Parameters:**
- `boolean` `mechanicsCheat`

**Returns:** `void`

### public boolean isFastMoveCheat()

**Returns:** `boolean`

### public void setFastMoveCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isMovablesCheat()

**Returns:** `boolean`

### public void setMovablesCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isAnimalCheat()

**Returns:** `boolean`

### public void setAnimalCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isAnimalExtraValuesCheat()

**Returns:** `boolean`

### public void setAnimalExtraValuesCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isAlwaysDayCheat()

**Returns:** `boolean`

### public void setAlwaysDayCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isTimedActionInstantCheat()

**Returns:** `boolean`

### public void setTimedActionInstantCheat(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isTimedActionInstant()

**Returns:** `boolean`

### public boolean isShowAdminTag()

**Returns:** `boolean`

### public void setShowAdminTag(boolean showAdminTag)

**Parameters:**
- `boolean` `showAdminTag`

**Returns:** `void`

### public boolean isCheatSet(CheatType cheat)

**Parameters:**
- `CheatType` `cheat`

**Returns:** `boolean`

### public Iterable<IAnimationVariableSlot> getGameVariables()

Description copied from interface: IAnimationVariableSource

**Returns:** `Iterable<IAnimationVariableSlot>`

### public IAnimationVariableSlot getVariable(AnimationVariableHandle handle)

Description copied from interface: IAnimationVariableSource

**Parameters:**
- `AnimationVariableHandle` `handle`

**Returns:** `IAnimationVariableSlot`

### public void setVariable(IAnimationVariableSlot var)

Description copied from interface: IAnimationVariableMap

**Parameters:**
- `IAnimationVariableSlot` `var`

**Returns:** `void`

### public IAnimationVariableSlot setVariable(String key,
String value)

**Parameters:**
- `String` `key`
- `String` `value`

**Returns:** `IAnimationVariableSlot`

### public IAnimationVariableSlot setVariable(String key,
boolean value)

**Parameters:**
- `String` `key`
- `boolean` `value`

**Returns:** `IAnimationVariableSlot`

### public IAnimationVariableSlot setVariable(String key,
float value)

**Parameters:**
- `String` `key`
- `float` `value`

**Returns:** `IAnimationVariableSlot`

### public <EnumType extends Enum<EnumType>>
IAnimationVariableSlot setVariableEnum(String key,
EnumType value)

**Returns:** `IAnimationVariableSlot`

### public IAnimationVariableSlot setVariable(AnimationVariableHandle handle,
boolean value)

**Parameters:**
- `AnimationVariableHandle` `handle`
- `boolean` `value`

**Returns:** `IAnimationVariableSlot`

### public void clearVariable(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

### public void clearVariables()

**Returns:** `void`

### public IAnimationVariableSource getSubVariableSource(String subVariableSourceName)

**Parameters:**
- `String` `subVariableSourceName`

**Returns:** `IAnimationVariableSource`

### public AnimationVariableSource getGameVariablesInternal()

**Returns:** `AnimationVariableSource`

### public AnimationVariableSource startPlaybackGameVariables()

**Returns:** `AnimationVariableSource`

### public void endPlaybackGameVariables(AnimationVariableSource playbackVars)

**Parameters:**
- `AnimationVariableSource` `playbackVars`

**Returns:** `void`

### public void playbackSetCurrentStateSnapshot(ActionStateSnapshot snapshot)

**Parameters:**
- `ActionStateSnapshot` `snapshot`

**Returns:** `void`

### public ActionStateSnapshot playbackRecordCurrentStateSnapshot()

**Returns:** `ActionStateSnapshot`

### public String GetVariable(String key)

**Parameters:**
- `String` `key`

**Returns:** `String`

### public void SetVariable(String key,
String value)

**Parameters:**
- `String` `key`
- `String` `value`

**Returns:** `void`

### public void ClearVariable(String key)

**Parameters:**
- `String` `key`

**Returns:** `void`

### public void actionStateChanged(ActionContext sender)

**Parameters:**
- `ActionContext` `sender`

**Returns:** `void`

### public boolean isFallOnFront()

**Returns:** `boolean`

### public void setFallOnFront(boolean fallOnFront)

**Parameters:**
- `boolean` `fallOnFront`

**Returns:** `void`

### public boolean isHitFromBehind()

**Returns:** `boolean`

### public void setHitFromBehind(boolean hitFromBehind)

**Parameters:**
- `boolean` `hitFromBehind`

**Returns:** `void`

### public boolean isKilledBySlicingWeapon()

**Returns:** `boolean`

### public boolean testCollideWithVehicles(BaseVehicle vehicle,
BaseVehicle.HitVars hitVars)

**Parameters:**
- `BaseVehicle` `vehicle`
- `BaseVehicle.HitVars` `hitVars`

**Returns:** `boolean`

### public boolean shouldBePushedBackByVehicleHit()

**Returns:** `boolean`

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

### public void reportEvent(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void StartTimedActionAnim(String event)

**Parameters:**
- `String` `event`

**Returns:** `void`

### public void StartTimedActionAnim(String event,
String type)

**Parameters:**
- `String` `event`
- `String` `type`

**Returns:** `void`

### public void StopTimedActionAnim()

**Returns:** `void`

### public boolean hasHitReaction()

**Returns:** `boolean`

### public String getHitReaction()

**Returns:** `String`

### public void setHitReaction(String hitReaction)

**Parameters:**
- `String` `hitReaction`

**Returns:** `void`

### public void CacheEquipped()

**Returns:** `void`

### public InventoryItem GetPrimaryEquippedCache()

**Returns:** `InventoryItem`

### public InventoryItem GetSecondaryEquippedCache()

**Returns:** `InventoryItem`

### public void ClearEquippedCache()

**Returns:** `void`

### public boolean isObjectBehind(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `boolean`

### public boolean isBehind(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public void resetEquippedHandsModels()

**Returns:** `void`

### public AnimatorDebugMonitor getDebugMonitor()

**Returns:** `AnimatorDebugMonitor`

### public void setDebugMonitor(AnimatorDebugMonitor monitor)

**Parameters:**
- `AnimatorDebugMonitor` `monitor`

**Returns:** `void`

### public boolean isAimAtFloor()

**Returns:** `boolean`

### public void setAimAtFloor(boolean aimAtFloor)

**Parameters:**
- `boolean` `aimAtFloor`

**Returns:** `void`

### public void setAimAtFloor(boolean aimAtFloor,
float targetDistance)

**Parameters:**
- `boolean` `aimAtFloor`
- `float` `targetDistance`

**Returns:** `void`

### public float aimAtFloorTargetDistance()

**Returns:** `float`

### public float getAimAtFloorAmount()

**Returns:** `float`

### public float getCurrentVerticalAimAngle()

**Returns:** `float`

### public void setCurrentVerticalAimAngle(float verticalAimAngleDegrees)

**Parameters:**
- `float` `verticalAimAngleDegrees`

**Returns:** `void`

### public void setTargetVerticalAimAngle(float verticalAimAngleDegrees)

**Parameters:**
- `float` `verticalAimAngleDegrees`

**Returns:** `void`

### public float getTargetVerticalAimAngle()

**Returns:** `float`

### public boolean isDeferredMovementEnabled()

**Returns:** `boolean`

### public void setDeferredMovementEnabled(boolean deferredMovementEnabled)

**Parameters:**
- `boolean` `deferredMovementEnabled`

**Returns:** `void`

### public String testDotSide(IsoMovingObject target)

**Parameters:**
- `IsoMovingObject` `target`

**Returns:** `String`

### public Side testDotSideEnum(IsoMovingObject target)

**Parameters:**
- `IsoMovingObject` `target`

**Returns:** `Side`

### public void addBasicPatch(BloodBodyPartType part)

**Parameters:**
- `BloodBodyPartType` `part`

**Returns:** `void`

### public boolean addHole(BloodBodyPartType part)

**Parameters:**
- `BloodBodyPartType` `part`

**Returns:** `boolean`

### public boolean addHole(BloodBodyPartType part,
boolean allLayers)

**Parameters:**
- `BloodBodyPartType` `part`
- `boolean` `allLayers`

**Returns:** `boolean`

### public void addDirt(BloodBodyPartType part,
Integer nbr,
boolean allLayers)

**Parameters:**
- `BloodBodyPartType` `part`
- `Integer` `nbr`
- `boolean` `allLayers`

**Returns:** `void`

### public void addLotsOfDirt(BloodBodyPartType part,
Integer nbr,
boolean allLayers)

**Parameters:**
- `BloodBodyPartType` `part`
- `Integer` `nbr`
- `boolean` `allLayers`

**Returns:** `void`

### public void addBlood(BloodBodyPartType part,
boolean scratched,
boolean bitten,
boolean allLayers)

**Parameters:**
- `BloodBodyPartType` `part`
- `boolean` `scratched`
- `boolean` `bitten`
- `boolean` `allLayers`

**Returns:** `void`

### public boolean bodyPartIsSpiked(Integer part)

**Parameters:**
- `Integer` `part`

**Returns:** `boolean`

### public boolean bodyPartIsSpikedBehind(Integer part)

**Parameters:**
- `Integer` `part`

**Returns:** `boolean`

### public float getBodyPartClothingDefense(Integer part,
boolean bite,
boolean bullet)

**Parameters:**
- `Integer` `part`
- `boolean` `bite`
- `boolean` `bullet`

**Returns:** `float`

### public boolean isBumped()

**Returns:** `boolean`

### public boolean isBumpDone()

**Returns:** `boolean`

### public void setBumpDone(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean isBumpFall()

**Returns:** `boolean`

### public void setBumpFall(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public boolean isBumpStaggered()

**Returns:** `boolean`

### public void setBumpStaggered(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public String getBumpType()

**Returns:** `String`

### public void setBumpType(String bumpType)

**Parameters:**
- `String` `bumpType`

**Returns:** `void`

### public String getBumpFallType()

**Returns:** `String`

### public void setBumpFallType(String val)

**Parameters:**
- `String` `val`

**Returns:** `void`

### public IsoGameCharacter getBumpedChr()

**Returns:** `IsoGameCharacter`

### public void setBumpedChr(IsoGameCharacter bumpedChr)

**Parameters:**
- `IsoGameCharacter` `bumpedChr`

**Returns:** `void`

### public long getLastBump()

**Returns:** `long`

### public void setLastBump(long lastBump)

**Parameters:**
- `long` `lastBump`

**Returns:** `void`

### public void postAnimationFinishing(String state)

**Parameters:**
- `String` `state`

**Returns:** `void`

### public boolean isSitOnGround()

**Returns:** `boolean`

### public void setSitOnGround(boolean sitOnGround)

**Parameters:**
- `boolean` `sitOnGround`

**Returns:** `void`

### public boolean isSittingOnFurniture()

**Returns:** `boolean`

### public void setSittingOnFurniture(boolean isSittingOnFurniture)

**Parameters:**
- `boolean` `isSittingOnFurniture`

**Returns:** `void`

### public IsoObject getSitOnFurnitureObject()

**Returns:** `IsoObject`

### public void setSitOnFurnitureObject(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public IsoDirections getSitOnFurnitureDirection()

**Returns:** `IsoDirections`

### public void setSitOnFurnitureDirection(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `void`

### public boolean isSitOnFurnitureObject(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `boolean`

### public boolean shouldIgnoreCollisionWithSquare(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean canStandAt(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `boolean`

### public State tryGetAIState(String stateName)

**Parameters:**
- `String` `stateName`

**Returns:** `State`

### public boolean isRunning()

**Returns:** `boolean`

### public void setRunning(boolean bRunning)

**Parameters:**
- `boolean` `bRunning`

**Returns:** `void`

### public boolean isSprinting()

**Returns:** `boolean`

### public void setSprinting(boolean bSprinting)

**Parameters:**
- `boolean` `bSprinting`

**Returns:** `void`

### public boolean canSprint()

**Returns:** `boolean`

### public void postUpdateModelTextures()

**Returns:** `void`

### public ModelInstanceTextureCreator getTextureCreator()

**Returns:** `ModelInstanceTextureCreator`

### public void setTextureCreator(ModelInstanceTextureCreator textureCreator)

**Parameters:**
- `ModelInstanceTextureCreator` `textureCreator`

**Returns:** `void`

### public void postUpdateEquippedTextures()

**Returns:** `void`

### public ArrayList<ModelInstance> getReadyModelData()

**Returns:** `ArrayList<ModelInstance>`

### public boolean getIgnoreMovement()

**Returns:** `boolean`

### public void setIgnoreMovement(boolean ignoreMovement)

**Parameters:**
- `boolean` `ignoreMovement`

**Returns:** `void`

### public boolean isAutoWalk()

**Returns:** `boolean`

### public void setAutoWalk(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setAutoWalkDirection(Vector2 v)

**Parameters:**
- `Vector2` `v`

**Returns:** `void`

### public Vector2 getAutoWalkDirection(Vector2 out)

**Parameters:**
- `Vector2` `out`

**Returns:** `Vector2`

### public boolean isSneaking()

**Returns:** `boolean`

### public void setSneaking(boolean bSneaking)

**Parameters:**
- `boolean` `bSneaking`

**Returns:** `void`

### public float getSneakLimpSpeedScale()

**Returns:** `float`

### public void setSneakLimpSpeedScale(float sneakLimpSpeedScale)

**Parameters:**
- `float` `sneakLimpSpeedScale`

**Returns:** `void`

### public float getMoveDelta()

**Returns:** `float`

### public void setMoveDelta(float moveDelta)

**Parameters:**
- `float` `moveDelta`

**Returns:** `void`

### public float getTurnDelta()

**Returns:** `float`

### public void setTurnDelta(float turnDelta)

**Parameters:**
- `float` `turnDelta`

**Returns:** `void`

### public float getChopTreeSpeed()

**Returns:** `float`

### public boolean testDefense(IsoZombie zomb)

Test if we're able to defend a zombie bite
Can only happen if zombie is attacking from front
Calcul include current weapon skills, fitness invalid input: '&' strength

**Parameters:**
- `IsoZombie` `zomb`

**Returns:** `boolean`

### public int getSurroundingAttackingZombies()

**Returns:** `int`

### public int getSurroundingAttackingZombies(boolean includeCrawlers)

**Parameters:**
- `boolean` `includeCrawlers`

**Returns:** `int`

### public boolean checkIsNearVehicle()

**Returns:** `boolean`

### public float checkIsNearWall()

**Returns:** `float`

### public float getBeenSprintingFor()

**Returns:** `float`

### public void setBeenSprintingFor(float beenSprintingFor)

**Parameters:**
- `float` `beenSprintingFor`

**Returns:** `void`

### public boolean isHideWeaponModel()

**Returns:** `boolean`

### public void setHideWeaponModel(boolean hideWeaponModel)

**Parameters:**
- `boolean` `hideWeaponModel`

**Returns:** `void`

### public boolean isHideEquippedHandL()

**Returns:** `boolean`

### public void setHideEquippedHandL(boolean hideEquippedHandL)

**Parameters:**
- `boolean` `hideEquippedHandL`

**Returns:** `void`

### public boolean isHideEquippedHandR()

**Returns:** `boolean`

### public void setHideEquippedHandR(boolean hideEquippedHandR)

**Parameters:**
- `boolean` `hideEquippedHandR`

**Returns:** `void`

### public void setIsAiming(boolean isAiming)

**Parameters:**
- `boolean` `isAiming`

**Returns:** `void`

### public void setFireMode(String fireMode)

**Parameters:**
- `String` `fireMode`

**Returns:** `void`

### public String getFireMode()

**Returns:** `String`

### public boolean isAiming()

**Returns:** `boolean`

### public boolean isTwisting()

**Returns:** `boolean`

### public boolean allowsTwist()

**Returns:** `boolean`

### public float getShoulderTwistWeight()

**Returns:** `float`

### public void resetBeardGrowingTime()

**Returns:** `void`

### public void resetHairGrowingTime()

**Returns:** `void`

### public void fallenOnKnees()

**Returns:** `void`

### public void fallenOnKnees(boolean hardFall)

**Parameters:**
- `boolean` `hardFall`

**Returns:** `void`

### public void addVisualDamage(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `void`

### public ItemVisual addBodyVisualFromItemType(String itemType)

**Parameters:**
- `String` `itemType`

**Returns:** `ItemVisual`

### public boolean isCriticalHit()

**Returns:** `boolean`

### public void setCriticalHit(boolean isCrit)

**Parameters:**
- `boolean` `isCrit`

**Returns:** `void`

### public float getRunSpeedModifier()

**Returns:** `float`

### public boolean isNpc()

**Returns:** `boolean`

### public void setMetabolicTarget(Metabolics m)

**Parameters:**
- `Metabolics` `m`

**Returns:** `void`

### public void setMetabolicTarget(float target)

**Parameters:**
- `float` `target`

**Returns:** `void`

### public double getThirstMultiplier()

**Returns:** `double`

### public double getHungerMultiplier()

**Returns:** `double`

### public double getFatiqueMultiplier()

**Returns:** `double`

### public float getTimedActionTimeModifier()

**Returns:** `float`

### public boolean addHoleFromZombieAttacks(BloodBodyPartType part,
boolean scratch)

**Parameters:**
- `BloodBodyPartType` `part`
- `boolean` `scratch`

**Returns:** `boolean`

### public float getTotalBlood()

**Returns:** `float`

### public void attackFromWindowsLunge(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `void`

### public boolean DoSwingCollisionBoneCheck(IsoGameCharacter zombie,
int bone,
float tempoLengthTest)

**Parameters:**
- `IsoGameCharacter` `zombie`
- `int` `bone`
- `float` `tempoLengthTest`

**Returns:** `boolean`

### public boolean isInvincible()

**Returns:** `boolean`

### public void setInvincible(boolean invincible)

**Parameters:**
- `boolean` `invincible`

**Returns:** `void`

### public BaseVehicle getNearVehicle()

**Returns:** `BaseVehicle`

### public boolean isNearSirenVehicle()

**Returns:** `boolean`

### public void dropHeavyItems()

**Returns:** `void`

### public boolean isHeavyItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public boolean isCanShout()

**Returns:** `boolean`

### public void setCanShout(boolean canShout)

**Parameters:**
- `boolean` `canShout`

**Returns:** `void`

### public boolean isKnowAllRecipes()

**Returns:** `boolean`

### public void setKnowAllRecipes(boolean knowAllRecipes)

**Parameters:**
- `boolean` `knowAllRecipes`

**Returns:** `void`

### public boolean isUnlimitedAmmo()

**Returns:** `boolean`

### public void setUnlimitedAmmo(boolean unlimitedAmmo)

**Parameters:**
- `boolean` `unlimitedAmmo`

**Returns:** `void`

### public boolean isUnlimitedEndurance()

**Returns:** `boolean`

### public void setUnlimitedEndurance(boolean unlimitedEndurance)

**Parameters:**
- `boolean` `unlimitedEndurance`

**Returns:** `void`

### public ArrayList<InventoryItem> getActiveLightItems(ArrayList<InventoryItem> items)

**Parameters:**
- `ArrayList<InventoryItem>` `items`

**Returns:** `ArrayList<InventoryItem>`

### public SleepingEventData getOrCreateSleepingEventData()

**Returns:** `SleepingEventData`

### public void playEmote(String emote)

**Parameters:**
- `String` `emote`

**Returns:** `void`

### public String getAnimationStateName()

**Returns:** `String`

### public String getActionStateName()

**Returns:** `String`

### public boolean shouldWaitToStartTimedAction()

**Returns:** `boolean`

### public void setPersistentOutfitID(int outfitID)

**Parameters:**
- `int` `outfitID`

**Returns:** `void`

### public void setPersistentOutfitID(int outfitID,
boolean init)

**Parameters:**
- `int` `outfitID`
- `boolean` `init`

**Returns:** `void`

### public int getPersistentOutfitID()

**Returns:** `int`

### public boolean isPersistentOutfitInit()

**Returns:** `boolean`

### public boolean isDoingActionThatCanBeCancelled()

**Returns:** `boolean`

### public boolean causesDamageToVehicleWhenHit(BaseVehicle impactingVehicle)

**Parameters:**
- `BaseVehicle` `impactingVehicle`

**Returns:** `boolean`

### public boolean isDoDeathSound()

**Returns:** `boolean`

### public void setDoDeathSound(boolean doDeathSound)

**Parameters:**
- `boolean` `doDeathSound`

**Returns:** `void`

### public boolean isKilledByFall()

**Returns:** `boolean`

### public void setKilledByFall(boolean killedByFall)

**Parameters:**
- `boolean` `killedByFall`

**Returns:** `void`

### public void updateEquippedRadioFreq()

**Returns:** `void`

### public void updateEquippedItemSounds()

**Returns:** `void`

### public FMODParameterList getFMODParameters()

**Returns:** `FMODParameterList`

### public void startEvent(long eventInstance,
GameSoundClip clip,
boolean remote,
BitSet parameterSet)

**Parameters:**
- `long` `eventInstance`
- `GameSoundClip` `clip`
- `boolean` `remote`
- `BitSet` `parameterSet`

**Returns:** `void`

### public void updateEvent(long eventInstance,
GameSoundClip clip)

**Parameters:**
- `long` `eventInstance`
- `GameSoundClip` `clip`

**Returns:** `void`

### public void stopEvent(long eventInstance,
GameSoundClip clip,
boolean remote,
BitSet parameterSet)

**Parameters:**
- `long` `eventInstance`
- `GameSoundClip` `clip`
- `boolean` `remote`
- `BitSet` `parameterSet`

**Returns:** `void`

### public void playBloodSplatterSound()

**Returns:** `void`

### public void setHeadLookAround(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isHeadLookAround()

**Returns:** `boolean`

### public void setHeadLookAroundDirection(float lookHorizontal,
float lookVertical)

**Parameters:**
- `float` `lookHorizontal`
- `float` `lookVertical`

**Returns:** `void`

### public float getHeadLookHorizontal()

**Returns:** `float`

### public float getHeadLookVertical()

**Returns:** `float`

### public float getHeadLookAngleMax()

**Returns:** `float`

### public void addBloodFromVehicleImpact(float speed)

**Parameters:**
- `float` `speed`

**Returns:** `void`

### public boolean isKnockedDown()

**Returns:** `boolean`

### public void setKnockedDown(boolean knockedDown)

**Parameters:**
- `boolean` `knockedDown`

**Returns:** `void`

### public boolean isStaggerBack()

**Returns:** `boolean`

### public void readInventory(ByteBufferReader b)

**Parameters:**
- `ByteBufferReader` `b`

**Returns:** `void`

### public final void Kill(IsoGameCharacter killer)

**Parameters:**
- `IsoGameCharacter` `killer`

**Returns:** `void`

### public final void Kill(HandWeapon handWeapon,
IsoGameCharacter killer)

**Parameters:**
- `HandWeapon` `handWeapon`
- `IsoGameCharacter` `killer`

**Returns:** `void`

### public final void Kill(IsoGameCharacter killer,
boolean bGory)

**Parameters:**
- `IsoGameCharacter` `killer`
- `boolean` `bGory`

**Returns:** `void`

### public final void Kill(IsoGameCharacter killer,
HandWeapon attackingWeapon,
boolean isGory,
CharacterDiedListener onDiedListener)

**Parameters:**
- `IsoGameCharacter` `killer`
- `HandWeapon` `attackingWeapon`
- `boolean` `isGory`
- `CharacterDiedListener` `onDiedListener`

**Returns:** `void`

### public void onKilled(IsoGameCharacter killer,
HandWeapon attackingWeapon,
boolean isGory)

**Parameters:**
- `IsoGameCharacter` `killer`
- `HandWeapon` `attackingWeapon`
- `boolean` `isGory`

**Returns:** `void`

### public final void die()

**Returns:** `void`

### public final IsoDeadBody dieNetwork(IsoGameCharacter killer,
HandWeapon attackingWeapon,
boolean isGory,
CharacterDiedListener onDiedListener)

**Parameters:**
- `IsoGameCharacter` `killer`
- `HandWeapon` `attackingWeapon`
- `boolean` `isGory`
- `CharacterDiedListener` `onDiedListener`

**Returns:** `IsoDeadBody`

### public void addOnDiedListener(CharacterDiedListener onDiedListener,
boolean autoRemoveOnInvoke)

**Parameters:**
- `CharacterDiedListener` `onDiedListener`
- `boolean` `autoRemoveOnInvoke`

**Returns:** `void`

### public final void clearDiedBody()

**Returns:** `void`

### public InventoryItem becomeCorpseItem(ItemContainer placeInContainer,
IsoGameCharacter chr)

**Parameters:**
- `ItemContainer` `placeInContainer`
- `IsoGameCharacter` `chr`

**Returns:** `InventoryItem`

### public float getMass()

**Returns:** `float`

### public static int getWeightAsCorpse()

**Returns:** `int`

### public HitReactionNetworkAI getHitReactionNetworkAI()

**Returns:** `HitReactionNetworkAI`

### public NetworkCharacterAI getNetworkCharacterAI()

**Returns:** `NetworkCharacterAI`

### public boolean wasLocal()

**Returns:** `boolean`

### public final boolean isLocal()

**Returns:** `boolean`

### public final boolean isRemote()

**Returns:** `boolean`

### public boolean isNetworkVehicleCollisionActive(BaseVehicle testVehicle)

**Parameters:**
- `BaseVehicle` `testVehicle`

**Returns:** `boolean`

### public void doNetworkHitByVehicle(BaseVehicle hitByVehicle,
BaseVehicle.HitVars hitVars)

**Parameters:**
- `BaseVehicle` `hitByVehicle`
- `BaseVehicle.HitVars` `hitVars`

**Returns:** `void`

### public boolean isSkipResolveCollision()

**Returns:** `boolean`

### public boolean isPerformingAttackAnimation()

**Returns:** `boolean`

### public void setPerformingAttackAnimation(boolean attackAnim)

**Parameters:**
- `boolean` `attackAnim`

**Returns:** `void`

### public boolean isPerformingShoveAnimation()

**Returns:** `boolean`

### public void setPerformingShoveAnimation(boolean shoveAnim)

**Parameters:**
- `boolean` `shoveAnim`

**Returns:** `void`

### public boolean isPerformingStompAnimation()

**Returns:** `boolean`

### public void setPerformingStompAnimation(boolean stompAnim)

**Parameters:**
- `boolean` `stompAnim`

**Returns:** `void`

### public boolean isPerformingHostileAnimation()

**Returns:** `boolean`

### public Float getNextAnimationTranslationLength()

**Returns:** `Float`

### public void calcHitDir(IsoGameCharacter wielder,
HandWeapon weapon,
Vector2 out)

**Parameters:**
- `IsoGameCharacter` `wielder`
- `HandWeapon` `weapon`
- `Vector2` `out`

**Returns:** `void`

### public void calcHitDir(Vector2 out)

**Parameters:**
- `Vector2` `out`

**Returns:** `void`

### public Safety getSafety()

**Returns:** `Safety`

### public void setSafety(Safety safety)

**Parameters:**
- `Safety` `safety`

**Returns:** `void`

### public void burnCorpse(IsoDeadBody corpse)

**Parameters:**
- `IsoDeadBody` `corpse`

**Returns:** `void`

### public void setIsAnimal(boolean v)

**Parameters:**
- `boolean` `v`

**Returns:** `void`

### public boolean isAnimal()

**Returns:** `boolean`

### public boolean isAnimalRunningToDeathPosition()

**Returns:** `boolean`

### public float getPerkToUnit(PerkFactory.Perk perk)

**Parameters:**
- `PerkFactory.Perk` `perk`

**Returns:** `float`

### public HashMap<String,Integer> getReadLiterature()

**Returns:** `HashMap<String,Integer>`

### public boolean isLiteratureRead(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public void addReadLiterature(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void addReadLiterature(String name,
int day)

**Parameters:**
- `String` `name`
- `int` `day`

**Returns:** `void`

### public void addReadPrintMedia(String mediaId)

**Parameters:**
- `String` `mediaId`

**Returns:** `void`

### public boolean isPrintMediaRead(String mediaId)

**Parameters:**
- `String` `mediaId`

**Returns:** `boolean`

### public HashSet<String> getReadPrintMedia()

**Returns:** `HashSet<String>`

### public boolean hasReadMap(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `boolean`

### public void addReadMap(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void setMusicIntensityEventModData(String key,
Object value)

**Parameters:**
- `String` `key`
- `Object` `value`

**Returns:** `void`

### public Object getMusicIntensityEventModData(String key)

**Parameters:**
- `String` `key`

**Returns:** `Object`

### public boolean isWearingTag(ItemTag itemTag)

**Parameters:**
- `ItemTag` `itemTag`

**Returns:** `boolean`

### public float getCorpseSicknessDefense()

**Returns:** `float`

### public float getCorpseSicknessDefense(float rate)

**Parameters:**
- `float` `rate`

**Returns:** `float`

### public float getCorpseSicknessDefense(float rate,
boolean drain)

**Parameters:**
- `float` `rate`
- `boolean` `drain`

**Returns:** `float`

### public boolean isProtectedFromToxic()

**Returns:** `boolean`

### public boolean isProtectedFromToxic(boolean drain)

**Parameters:**
- `boolean` `drain`

**Returns:** `boolean`

### public boolean isOverEncumbered()

**Returns:** `boolean`

### public void updateWornItemsVisionModifier()

**Returns:** `void`

### public float getWornItemsVisionModifier()

**Returns:** `float`

### public float getWornItemsVisionMultiplier()

**Returns:** `float`

### public void updateWornItemsHearingModifier()

**Returns:** `void`

### public float getWornItemsHearingModifier()

**Returns:** `float`

### public float getWornItemsHearingMultiplier()

**Returns:** `float`

### public float getHearDistanceModifier()

**Returns:** `float`

### public float getWeatherHearingMultiplier()

**Returns:** `float`

### public float getEffectiveFatigue()

**Returns:** `float`

### public float getDetectionRange()

**Returns:** `float`

### public void setLastHitCharacter(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public IsoGameCharacter getLastHitCharacter()

**Returns:** `IsoGameCharacter`

### public void triggerCough()

**Returns:** `void`

### public boolean hasDirtyClothing(Integer part)

**Parameters:**
- `Integer` `part`

**Returns:** `boolean`

### public boolean hasBloodyClothing(Integer part)

**Parameters:**
- `Integer` `part`

**Returns:** `boolean`

### public IAnimatable getAnimatable()

**Returns:** `IAnimatable`

### public IGrappleable getGrappleable()

**Returns:** `IGrappleable`

### public BaseGrappleable getWrappedGrappleable()

**Returns:** `BaseGrappleable`

### public boolean canBeGrappled()

**Returns:** `boolean`

### public boolean isPerformingGrappleAnimation()

**Returns:** `boolean`

### public String getShoutType()

**Returns:** `String`

### public String getShoutItemModel()

**Returns:** `String`

### public boolean isWearingGlasses()

**Returns:** `boolean`

### public boolean isWearingVisualAid()

**Returns:** `boolean`

### public float getClothingDiscomfortModifier()

**Returns:** `float`

### public float getVehicleDiscomfortModifier()

**Returns:** `float`

### public void updateVisionEffectTargets()

**Returns:** `void`

### public void updateVisionEffects()

**Returns:** `void`

### public float getBlurFactor()

**Returns:** `float`

### public boolean isDisguised()

**Returns:** `boolean`

### public void updateDisguisedState()

**Returns:** `void`

### public void OnClothingUpdated()

**Returns:** `void`

### public void OnEquipmentUpdated()

**Returns:** `void`

### public float getCorpseSicknessRate()

**Returns:** `float`

### public void setCorpseSicknessRate(float rate)

**Parameters:**
- `float` `rate`

**Returns:** `void`

### public void spikePartIndex(int bodyPartIndex)

**Parameters:**
- `int` `bodyPartIndex`

**Returns:** `void`

### public void spikePart(BodyPartType partType)

**Parameters:**
- `BodyPartType` `partType`

**Returns:** `void`

### public IsoGameCharacter getReanimatedCorpse()

**Returns:** `IsoGameCharacter`

### public void applyDamage(float damageAmount)

**Parameters:**
- `float` `damageAmount`

**Returns:** `void`

### public boolean canRagdoll()

**Returns:** `boolean`

### public RagdollController getRagdollController()

**Returns:** `RagdollController`

### public void releaseRagdollController()

**Returns:** `void`

### public BallisticsController getBallisticsController()

**Returns:** `BallisticsController`

### public void updateBallistics()

**Returns:** `void`

### public void releaseBallisticsController()

**Returns:** `void`

### public BallisticsTarget getBallisticsTarget()

**Returns:** `BallisticsTarget`

### public BallisticsTarget ensureExistsBallisticsTarget(IsoGameCharacter isoGameCharacter)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`

**Returns:** `BallisticsTarget`

### public void releaseBallisticsTarget()

**Returns:** `void`

### public boolean canReachTo(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean canUseAsGenericCraftingSurface(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `boolean`

### public PZArrayList<HitInfo> getHitInfoList()

**Returns:** `PZArrayList<HitInfo>`

### public AimingMode getAimingMode()

**Returns:** `AimingMode`

### public void updateHasTargetFlag()

**Returns:** `void`

### public boolean isUnarmed()

**Returns:** `boolean`

### public boolean isMeleeWeaponEquipped()

**Returns:** `boolean`

### public boolean isRangedWeaponEquipped()

**Returns:** `boolean`

### public boolean isAimingFirearmEquipped()

**Returns:** `boolean`

### public AttackVars getAttackVars()

**Returns:** `AttackVars`

### public void addCombatMuscleStrain(InventoryItem weapon)

**Parameters:**
- `InventoryItem` `weapon`

**Returns:** `void`

### public void addCombatMuscleStrain(InventoryItem weapon,
int hitCount)

**Parameters:**
- `InventoryItem` `weapon`
- `int` `hitCount`

**Returns:** `void`

### public void addCombatMuscleStrain(InventoryItem item,
int hitCount,
float multiplier)

**Parameters:**
- `InventoryItem` `item`
- `int` `hitCount`
- `float` `multiplier`

**Returns:** `void`

### public void addRightLegMuscleStrain(float painfactor)

**Parameters:**
- `float` `painfactor`

**Returns:** `void`

### public void addBackMuscleStrain(float painfactor)

**Parameters:**
- `float` `painfactor`

**Returns:** `void`

### public void addNeckMuscleStrain(float painfactor)

**Parameters:**
- `float` `painfactor`

**Returns:** `void`

### public void addArmMuscleStrain(float painfactor)

**Parameters:**
- `float` `painfactor`

**Returns:** `void`

### public void addLeftArmMuscleStrain(float painfactor)

**Parameters:**
- `float` `painfactor`

**Returns:** `void`

### public void addBothArmMuscleStrain(float painfactor)

**Parameters:**
- `float` `painfactor`

**Returns:** `void`

### public void addStiffness(BodyPartType partType,
float stiffness)

**Parameters:**
- `BodyPartType` `partType`
- `float` `stiffness`

**Returns:** `void`

### public int getClimbingFailChanceInt()

**Returns:** `int`

### public float getClimbingFailChanceFloat()

**Returns:** `float`

### public float nearbyZombieClimbPenalty()

**Returns:** `float`

### public boolean isClimbingRope()

**Returns:** `boolean`

### public void fallFromRope()

**Returns:** `void`

### public boolean isWearingGloves()

**Returns:** `boolean`

### public boolean isWearingAwkwardGloves()

**Returns:** `boolean`

### public float getClimbRopeSpeed(boolean down)

**Parameters:**
- `boolean` `down`

**Returns:** `float`

### public void setClimbRopeTime(float time)

**Parameters:**
- `float` `time`

**Returns:** `void`

### public float getClimbRopeTime()

**Returns:** `float`

### public boolean hasAwkwardHands()

**Returns:** `boolean`

### public void triggerContextualAction(String action)

**Parameters:**
- `String` `action`

**Returns:** `void`

### public void triggerContextualAction(String action,
Object param1)

**Parameters:**
- `String` `action`
- `Object` `param1`

**Returns:** `void`

### public void triggerContextualAction(String action,
Object param1,
Object param2)

**Parameters:**
- `String` `action`
- `Object` `param1`
- `Object` `param2`

**Returns:** `void`

### public void triggerContextualAction(String action,
Object param1,
Object param2,
Object param3)

**Parameters:**
- `String` `action`
- `Object` `param1`
- `Object` `param2`
- `Object` `param3`

**Returns:** `void`

### public void triggerContextualAction(String action,
Object param1,
Object param2,
Object param3,
Object param4)

**Parameters:**
- `String` `action`
- `Object` `param1`
- `Object` `param2`
- `Object` `param3`
- `Object` `param4`

**Returns:** `void`

### public boolean isActuallyAttackingWithMeleeWeapon()

**Returns:** `boolean`

### public boolean isDoStomp()

**Returns:** `boolean`

### public boolean isShoving()

**Returns:** `boolean`

### public void teleportTo(int newX,
int newY)

**Parameters:**
- `int` `newX`
- `int` `newY`

**Returns:** `void`

### public void teleportTo(float newX,
float newY)

**Parameters:**
- `float` `newX`
- `float` `newY`

**Returns:** `void`

### public void teleportTo(float newX,
float newY,
int newZ)

**Parameters:**
- `float` `newX`
- `float` `newY`
- `int` `newZ`

**Returns:** `void`

### public void teleportTo(int newX,
int newY,
int newZ)

**Parameters:**
- `int` `newX`
- `int` `newY`
- `int` `newZ`

**Returns:** `void`

### public void ensureNotInVehicle()

**Returns:** `void`

### public void forgetRecipes()

**Returns:** `void`

### public boolean isWeaponReady()

**Returns:** `boolean`

### public void climbThroughWindow(IsoObject isoObject)

**Parameters:**
- `IsoObject` `isoObject`

**Returns:** `void`

### public ClimbSheetRopeState.ClimbData getClimbData()

**Returns:** `ClimbSheetRopeState.ClimbData`

### public void setClimbData(ClimbSheetRopeState.ClimbData climbData)

**Parameters:**
- `ClimbSheetRopeState.ClimbData` `climbData`

**Returns:** `void`

### public float getIdleSquareTime()

**Returns:** `float`

### public boolean isCurrentlyIdle()

**Returns:** `boolean`

### public boolean isCurrentlyBusy()

**Returns:** `boolean`

### public void flagForHotSave()

**Returns:** `void`

### public ArrayList<ItemContainer> getContainers()

**Returns:** `ArrayList<ItemContainer>`

### public boolean hasRecipeAtHand(CraftRecipe recipe)

**Parameters:**
- `CraftRecipe` `recipe`

**Returns:** `boolean`

### public PlayerCheats getCheats()

**Returns:** `PlayerCheats`

### public VisibilityData calculateVisibilityData()

**Returns:** `VisibilityData`

### public boolean hasFullInventory()

**Returns:** `boolean`

### public float getFreeInventoryCapacity()

**Returns:** `float`

### public void onFireLightSourceCheck()

**Returns:** `void`

### public void removeOnFireLightSource()

**Returns:** `void`

### public boolean isInventive()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\IsoGameCharacter.html`*
