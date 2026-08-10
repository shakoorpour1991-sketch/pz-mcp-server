---
title: zombie.characters.animals.IsoAnimal
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.IsoAnimal

`public class IsoAnimal extends IsoPlayer implements IAnimalVisual`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.characters.IsoGameCharacter
- zombie.characters.IsoLivingCharacter
- zombie.characters.IsoPlayer
- zombie.characters.animals.IsoAnimal

## Fields

### public static final int INVALID_SQUARE_XY

### public static final float SOUND_RADIUS_MULTIPLIER_WILD

### public static final Vector2 tempVector2

### public int animalId

### public int itemId

### public IsoMovingObject spottedChr

### public long attackedTimer

### public int attachBackToMother

### public long timeSinceLastUpdate

### public boolean smallEnclosure

### public AnimalDefinitions adef

### public IsoAnimal mother

### public int motherId

### public int searchRadius

### public IsoFeedingTrough eatFromTrough

### public IsoWorldInventoryObject eatFromGround

### public IsoFeedingTrough drinkFromTrough

### public IsoGridSquare drinkFromRiver

### public IsoGridSquare drinkFromPuddle

### public IsoHutch hutch

### public HashMap<String, AnimalGene> fullGenome

### public IsoGameCharacter atkTarget

### public IsoObject thumpTarget

### public IsoGameCharacter fightingOpponent

### public float stressLevel

### public int eggTimerInHutch

### public int nestBox

### public HashMap<Short,Float> playerAcceptanceList

### public IsoPlayer heldBy

### public IsoPlayer luredBy

### public boolean walkToCharLuring

### public ArrayList<String> geneticDisorder

### public InventoryItem movingToFood

### public float movingToFoodTimer

### public ArrayList<IsoFeedingTrough> ignoredTrough

### public float attachBackToMotherTimer

### public double virtualId

### public String migrationGroup

### public boolean wild

### public boolean alerted

### public IsoMovingObject alertedChr

### public boolean fromMeta

### public boolean followingWall

### public boolean shouldFollowWall

### public int attachBackToHookX

### public int attachBackToHookY

### public int attachBackToHookZ

## Constructors

### public IsoAnimal(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoAnimal(IsoCell cell,
int x,
int y,
int z,
String type,
String breedName)

**Parameters:**
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`
- `String` `type`
- `String` `breedName`

### public IsoAnimal(IsoCell cell,
int x,
int y,
int z,
String type,
String breedName,
boolean skeleton)

**Parameters:**
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`
- `String` `type`
- `String` `breedName`
- `boolean` `skeleton`

### public IsoAnimal(IsoCell cell,
int x,
int y,
int z,
String type,
AnimalBreed breed)

**Parameters:**
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`
- `String` `type`
- `AnimalBreed` `breed`

### public IsoAnimal(IsoCell cell,
int x,
int y,
int z,
String type,
AnimalBreed breed,
boolean skeleton)

**Parameters:**
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`
- `String` `type`
- `AnimalBreed` `breed`
- `boolean` `skeleton`

## Methods

### public boolean checkForChickenpocalypse()

**Returns:** `boolean`

### public boolean checkForWater()

**Returns:** `boolean`

### public String getObjectName()

**Returns:** `String`

### public boolean canUseCurrentPoseForCorpse()

**Returns:** `boolean`

### public AnimalVisual getAnimalVisual()

**Returns:** `AnimalVisual`

### public void addToWorld()

**Returns:** `void`

### public String GetAnimSetName()

**Returns:** `String`

### public void playSoundDebug()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void test()

**Returns:** `void`

### public boolean testCollideWithVehicles(BaseVehicle vehicle,
BaseVehicle.HitVars hitVars)

**Parameters:**
- `BaseVehicle` `vehicle`
- `BaseVehicle.HitVars` `hitVars`

**Returns:** `boolean`

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

### public float Hit(BaseVehicle vehicle,
float speed,
boolean isHitFromBehind,
Vector2 hitDir)

**Parameters:**
- `BaseVehicle` `vehicle`
- `float` `speed`
- `boolean` `isHitFromBehind`
- `Vector2` `hitDir`

**Returns:** `float`

### public boolean allowsTwist()

**Returns:** `boolean`

### public float getPetTimer()

**Returns:** `float`

### public IsoGridSquare getRandomSquareInZone()

**Returns:** `IsoGridSquare`

### public DesignationZone getZone()

**Returns:** `DesignationZone`

### public void stopAllMovementNow()

**Returns:** `void`

### public void cancelLuring()

**Returns:** `void`

### public void updateStress()

**Returns:** `void`

### public WorldSoundManager.WorldSound getLastSoundRespondedTo()

**Returns:** `WorldSoundManager.WorldSound`

### public void respondToSound()

**Returns:** `void`

### public float calcDamage()

**Returns:** `float`

### public void HitByAnimal(IsoAnimal animal,
boolean bIgnoreDamage)

**Parameters:**
- `IsoAnimal` `animal`
- `boolean` `bIgnoreDamage`

**Returns:** `void`

### public void initializeStates()

**Returns:** `void`

### public void spotted(IsoMovingObject other,
boolean bForced,
float dist)

**Parameters:**
- `IsoMovingObject` `other`
- `boolean` `bForced`
- `float` `dist`

**Returns:** `void`

### public void drawRope(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void renderlast()

**Returns:** `void`

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

### public void renderShadow(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public BaseAnimalBehavior getBehavior()

**Returns:** `BaseAnimalBehavior`

### public void checkAlphaAndTargetAlpha(IsoPlayer other)

**Parameters:**
- `IsoPlayer` `other`

**Returns:** `void`

### public boolean shouldBecomeZombieAfterDeath()

**Returns:** `boolean`

### public void OnDeath()

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

### public void setHealth(float health)

**Parameters:**
- `float` `health` — the Health to set

**Returns:** `void`

### public void sendExtraUpdateToClients()

**Returns:** `void`

### public void killed(IsoPlayer chr)

**Parameters:**
- `IsoPlayer` `chr`

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public AnimalData getData()

**Returns:** `AnimalData`

### public String getInventoryIconTextureName()

**Returns:** `String`

### public Texture getInventoryIconTexture()

**Returns:** `Texture`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave,
boolean serialize)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`
- `boolean` `serialize`

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

### public void init(AnimalBreed breed)

**Parameters:**
- `AnimalBreed` `breed`

**Returns:** `void`

### public boolean canGoThere(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public String getAnimalType()

**Returns:** `String`

### public float getAnimalSize()

**Returns:** `float`

### public float getAnimalOriginalSize()

**Returns:** `float`

### public void setAgeDebug(int newAge)

**Parameters:**
- `int` `newAge`

**Returns:** `void`

### public boolean haveEnoughMilkToFeedFrom()

**Returns:** `boolean`

### public IsoAnimal addBaby()

**Returns:** `IsoAnimal`

### public void unloaded()

**Returns:** `void`

### public void updateLastTimeSinceUpdate()

**Returns:** `void`

### public void debugAgeAway(int hour)

**Parameters:**
- `int` `hour`

**Returns:** `void`

### public void updateStatsAway(int hours)

**Parameters:**
- `int` `hours`

**Returns:** `void`

### public boolean checkKilledByMetaPredator(int hour)

**Parameters:**
- `int` `hour`

**Returns:** `boolean`

### public boolean isBaby()

**Returns:** `boolean`

### public boolean shearAnimal(IsoGameCharacter chr,
InventoryItem shear)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `shear`

**Returns:** `boolean`

### public String getMilkType()

**Returns:** `String`

### public InventoryItem addDebugBucketOfMilk(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `InventoryItem`

### public InventoryItem milkAnimal(IsoGameCharacter chr,
InventoryItem bucket)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `bucket`

**Returns:** `InventoryItem`

### public void setMaxSizeDebug()

**Returns:** `void`

### public boolean addEgg(boolean meta)

**Parameters:**
- `boolean` `meta`

**Returns:** `boolean`

### public Food createEgg()

**Returns:** `Food`

### public void randomizeAge()

**Returns:** `void`

### public boolean isAnimalMoving()

**Returns:** `boolean`

### public boolean isGeriatric()

**Returns:** `boolean`

### public String getAgeText(boolean cheat,
int skillLvl)

**Parameters:**
- `boolean` `cheat`
- `int` `skillLvl`

**Returns:** `String`

### public String getHealthText(boolean cheat,
int skillLvl)

**Parameters:**
- `boolean` `cheat`
- `int` `skillLvl`

**Returns:** `String`

### public String getAppearanceText(boolean cheat)

**Parameters:**
- `boolean` `cheat`

**Returns:** `String`

### public void copyFrom(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void fertilize(IsoAnimal male,
boolean force)

**Parameters:**
- `IsoAnimal` `male`
- `boolean` `force`

**Returns:** `void`

### public boolean isAnimalEating()

**Returns:** `boolean`

### public boolean isAnimalAttacking()

**Returns:** `boolean`

### public void setAnimalAttackingOnClient(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public boolean isAnimalSitting()

**Returns:** `boolean`

### public boolean isInvincible()

**Returns:** `boolean`

### public boolean isAnimalRunningToDeathPosition()

**Returns:** `boolean`

### public void setIsInvincible(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public String getCustomName()

**Returns:** `String`

### public void setCustomName(String customName)

**Parameters:**
- `String` `customName`

**Returns:** `void`

### public float getHunger()

**Returns:** `float`

### public float getThirst()

**Returns:** `float`

### public String getBabyType()

**Returns:** `String`

### public boolean hasUdder()

**Returns:** `boolean`

### public AnimalBreed getBreed()

**Returns:** `AnimalBreed`

### public boolean canBeMilked()

**Returns:** `boolean`

### public boolean canBeSheared()

**Returns:** `boolean`

### public int getEggsPerDay()

**Returns:** `int`

### public IsoHutch getHutch()

**Returns:** `IsoHutch`

### public int getNestBoxIndex()

**Returns:** `int`

### public void setData(AnimalData newData)

**Parameters:**
- `AnimalData` `newData`

**Returns:** `void`

### public boolean hasGeneticDisorder(String gd)

**Parameters:**
- `String` `gd`

**Returns:** `boolean`

### public String getFullName()

**Returns:** `String`

### public HashMap<String, AnimalGene> getFullGenome()

**Returns:** `HashMap<String, AnimalGene>`

### public void copyGenome(Collection<AnimalGene> genome)

**Parameters:**
- `Collection<AnimalGene>` `genome`

**Returns:** `void`

### public ArrayList<AnimalGene> getFullGenomeList()

**Returns:** `ArrayList<AnimalGene>`

### public AnimalAllele getUsedGene(String name)

**Parameters:**
- `String` `name`

**Returns:** `AnimalAllele`

### public int getAge()

**Returns:** `int`

### public boolean canDoAction()

**Returns:** `boolean`

### public float getMeatRatio()

**Returns:** `float`

### public String getMate()

**Returns:** `String`

### public AnimalZone getAnimalZone()

**Returns:** `AnimalZone`

### public void setAnimalZone(AnimalZone zone)

**Parameters:**
- `AnimalZone` `zone`

**Returns:** `void`

### public boolean hasAnimalZone()

**Returns:** `boolean`

### public boolean isMoveForwardOnZone()

**Returns:** `boolean`

### public void setMoveForwardOnZone(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isExistInTheWorld()

**Returns:** `boolean`

### public void changeStress(float inc)

**Parameters:**
- `float` `inc`

**Returns:** `void`

### public float getEggGeneMod()

**Returns:** `float`

### public void setDebugStress(float stress)

**Parameters:**
- `float` `stress`

**Returns:** `void`

### public void setDebugAcceptance(IsoPlayer chr,
float acceptance)

**Parameters:**
- `IsoPlayer` `chr`
- `float` `acceptance`

**Returns:** `void`

### public ArrayList<InventoryItem> getAllPossibleFoodFromInv(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `ArrayList<InventoryItem>`

### public ArrayList<String> getEatTypePossibleFromHand()

**Returns:** `ArrayList<String>`

### public void addAcceptance(IsoPlayer chr,
float acceptance)

**Parameters:**
- `IsoPlayer` `chr`
- `float` `acceptance`

**Returns:** `void`

### public void feedFromHand(IsoPlayer chr,
InventoryItem food)

**Parameters:**
- `IsoPlayer` `chr`
- `InventoryItem` `food`

**Returns:** `void`

### public boolean petTimerDone()

**Returns:** `boolean`

### public void petAnimal(IsoPlayer chr)

**Parameters:**
- `IsoPlayer` `chr`

**Returns:** `void`

### public float getStress()

**Returns:** `float`

### public String getStressTxt(boolean cheat,
int skillLvl)

**Parameters:**
- `boolean` `cheat`
- `int` `skillLvl`

**Returns:** `String`

### public void fleeTo(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public float getAcceptanceLevel(IsoPlayer chr)

**Parameters:**
- `IsoPlayer` `chr`

**Returns:** `float`

### public boolean canBeFeedByHand()

**Returns:** `boolean`

### public void tryLure(IsoPlayer chr,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `chr`
- `InventoryItem` `item`

**Returns:** `void`

### public ArrayList<InventoryItem> getPossibleLuringItems(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `ArrayList<InventoryItem>`

### public void eatFromLured(IsoPlayer chr,
InventoryItem item)

**Parameters:**
- `IsoPlayer` `chr`
- `InventoryItem` `item`

**Returns:** `void`

### public Position3D getAttachmentWorldPos(String attachmentName,
Position3D pos)

**Parameters:**
- `String` `attachmentName`
- `Position3D` `pos`

**Returns:** `Position3D`

### public Position3D getAttachmentWorldPos(String attachmentName)

**Parameters:**
- `String` `attachmentName`

**Returns:** `Position3D`

### public void carCrash(float delta,
boolean front)

**Parameters:**
- `float` `delta`
- `boolean` `front`

**Returns:** `void`

### public String getMilkAnimPreset()

**Returns:** `String`

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

### public void pathToTrough(IsoFeedingTrough trough)

**Parameters:**
- `IsoFeedingTrough` `trough`

**Returns:** `void`

### public boolean shouldBreakObstaclesDuringPathfinding()

**Returns:** `boolean`

### public float getFeelersize()

**Returns:** `float`

### public boolean animalShouldThump()

**Returns:** `boolean`

### public boolean tryThump(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public float getAnimalTrailerSize()

**Returns:** `float`

### public boolean canBePet()

**Returns:** `boolean`

### public void debugRandomIdleAnim()

**Returns:** `void`

### public void debugRandomHappyAnim()

**Returns:** `void`

### public DesignationZoneAnimal getDZone()

**Returns:** `DesignationZoneAnimal`

### public void setDZone(DesignationZoneAnimal dZone)

**Parameters:**
- `DesignationZoneAnimal` `dZone`

**Returns:** `void`

### public ArrayList<DesignationZoneAnimal> getConnectedDZone()

**Returns:** `ArrayList<DesignationZoneAnimal>`

### public boolean haveMatingSeason()

**Returns:** `boolean`

### public boolean isInMatingSeason()

**Returns:** `boolean`

### public int getMinAgeForBaby()

**Returns:** `int`

### public boolean isHeld()

**Returns:** `boolean`

### public void pathFailed()

**Returns:** `void`

### public AnimalSoundState getAnimalSoundState(String slot)

**Parameters:**
- `String` `slot`

**Returns:** `AnimalSoundState`

### public void playDeadSound()

**Returns:** `void`

### public void updateVocalProperties()

**Returns:** `void`

### public void playNextFootstepSound()

**Returns:** `void`

### public void onPlayBreedSoundEvent(String id)

**Parameters:**
- `String` `id`

**Returns:** `void`

### public long playBreedSound(String id)

**Parameters:**
- `String` `id`

**Returns:** `long`

### public void playStressedSound()

**Returns:** `void`

### public void updateLoopingSounds()

**Returns:** `void`

### public void updateRunLoopingSound()

**Returns:** `void`

### public void updateWalkLoopingSound()

**Returns:** `void`

### public IsoAnimal getMother()

**Returns:** `IsoAnimal`

### public void setMother(IsoAnimal mom)

**Parameters:**
- `IsoAnimal` `mom`

**Returns:** `void`

### public boolean canBePicked(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean canBeKilledWithoutWeapon()

**Returns:** `boolean`

### public int getAnimalID()

**Returns:** `int`

### public void setAnimalID(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public void setItemID(int itemId)

**Parameters:**
- `int` `itemId`

**Returns:** `void`

### public int getItemID()

**Returns:** `int`

### public String getNextStageAnimalType()

**Returns:** `String`

### public void debugForceEgg()

**Returns:** `void`

### public boolean isWild()

**Returns:** `boolean`

### public void setWild(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void alertOtherAnimals(IsoMovingObject chr,
boolean alert)

**Parameters:**
- `IsoMovingObject` `chr`
- `boolean` `alert`

**Returns:** `void`

### public void debugForceSit()

**Returns:** `void`

### public boolean isAlerted()

**Returns:** `boolean`

### public void setIsAlerted(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean shouldFollowWall()

**Returns:** `boolean`

### public void setShouldFollowWall(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean readyToBeMilked()

**Returns:** `boolean`

### public boolean readyToBeSheared()

**Returns:** `boolean`

### public boolean haveHappyAnim()

**Returns:** `boolean`

### public boolean canHaveEggs()

**Returns:** `boolean`

### public boolean needHutch()

**Returns:** `boolean`

### public boolean canPoop()

**Returns:** `boolean`

### public int getMinClutchSize()

**Returns:** `int`

### public int getMaxClutchSize()

**Returns:** `int`

### public int getCurrentClutchSize()

**Returns:** `int`

### public boolean attackOtherMales()

**Returns:** `boolean`

### public boolean shouldAnimalStressAboveGround()

**Returns:** `boolean`

### public boolean canClimbStairs()

**Returns:** `boolean`

### public void forceWanderNow()

**Returns:** `void`

### public boolean canClimbFences()

**Returns:** `boolean`

### public void climbOverFence(IsoDirections dir)

**Parameters:**
- `IsoDirections` `dir`

**Returns:** `void`

### public boolean needMom()

**Returns:** `boolean`

### public int getFertilizedTimeMax()

**Returns:** `int`

### public boolean isLocalPlayer()

**Returns:** `boolean`

### public float getThirstBoost()

**Returns:** `float`

### public float getHungerBoost()

**Returns:** `float`

### public void removeBaby(IsoAnimal baby)

**Parameters:**
- `IsoAnimal` `baby`

**Returns:** `void`

### public void remove()

**Returns:** `void`

### public void delete()

**Returns:** `void`

### public InventoryItem canEatFromTrough(IsoFeedingTrough trough)

**Parameters:**
- `IsoFeedingTrough` `trough`

**Returns:** `InventoryItem`

### public float getThumpDelay()

**Returns:** `float`

### public float getBloodQuantity()

**Returns:** `float`

### public int getFeatherNumber()

**Returns:** `int`

### public String getFeatherItem()

**Returns:** `String`

### public boolean isHappy()

**Returns:** `boolean`

### public boolean shouldBeSkeleton()

**Returns:** `boolean`

### public void setShouldBeSkeleton(boolean shouldBeSkeleton)

**Parameters:**
- `boolean` `shouldBeSkeleton`

**Returns:** `void`

### public ArrayList<String> getGeneticDisorder()

**Returns:** `ArrayList<String>`

### public void copyGeneticDisorder(Collection<String> disorders)

**Parameters:**
- `Collection<String>` `disorders`

**Returns:** `void`

### public ArrayList<IsoAnimal> getBabies()

**Returns:** `ArrayList<IsoAnimal>`

### public boolean canRagdoll()

**Returns:** `boolean`

### public float getZoneAcceptance()

**Returns:** `float`

### public float getPlayerAcceptance(IsoPlayer chr)

**Parameters:**
- `IsoPlayer` `chr`

**Returns:** `float`

### public static void addAnimalPart(AnimalPart part,
IsoPlayer player,
IsoDeadBody carcass)

**Parameters:**
- `AnimalPart` `part`
- `IsoPlayer` `player`
- `IsoDeadBody` `carcass`

**Returns:** `void`

### public static void modifyMeat(Food item,
float size,
float meatRatio)

**Parameters:**
- `Food` `item`
- `float` `size`
- `float` `meatRatio`

**Returns:** `void`

### public boolean shouldStartFollowWall()

**Returns:** `boolean`

### public float getCorpseSize()

**Returns:** `float`

### public float getCorpseLength()

**Returns:** `float`

### public void setOnHook(boolean onhook)

**Parameters:**
- `boolean` `onhook`

**Returns:** `void`

### public boolean isOnHook()

**Returns:** `boolean`

### public AnimalDefinitions getAdef()

**Returns:** `AnimalDefinitions`

### public IsoButcherHook getHook()

**Returns:** `IsoButcherHook`

### public void setHook(IsoButcherHook hook)

**Parameters:**
- `IsoButcherHook` `hook`

**Returns:** `void`

### public void reattachBackToHook()

**Returns:** `void`

### public String getTypeAndBreed()

**Returns:** `String`

### public static IsoAnimal createAnimalFromCorpse(IsoDeadBody body)

**Parameters:**
- `IsoDeadBody` `body`

**Returns:** `IsoAnimal`

### public void updateLOS()

**Returns:** `void`

### public boolean canBePutInHutch(IsoHutch hutch)

**Parameters:**
- `IsoHutch` `hutch`

**Returns:** `boolean`

### public boolean shouldCreateZone()

**Returns:** `boolean`

### public void setIsRoadKill(boolean roadKill)

**Parameters:**
- `boolean` `roadKill`

**Returns:** `void`

### public boolean isRoadKill()

**Returns:** `boolean`

### public int getLastCellSavedToX()

**Returns:** `int`

### public int getLastCellSavedToY()

**Returns:** `int`

### public void setLastCellSavedTo(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public String getFeedByHandAnim()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\IsoAnimal.html`*
