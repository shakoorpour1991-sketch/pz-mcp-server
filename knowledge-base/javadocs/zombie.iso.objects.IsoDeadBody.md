---
title: zombie.iso.objects.IsoDeadBody
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoDeadBody

`public final class IsoDeadBody extends IsoMovingObject implements Talker, IAnimalVisual, IHumanVisual, IIdentifiable, IGrappleableWrapper, IItemProvider, IPositional`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.iso.objects.IsoDeadBody

## Fields

### public static final int MAX_ROT_STAGES

### public static final int MAX_ROT_STAGES_ANIMALS

### public String animalAnimSet

### public float weight

### public String corpseItem

### public String customName

### public String invIcon

### public boolean ragdollFall

### public AnimationPlayer animationPlayer

### public String rottenTexture

### public String skelInvIcon

### public boolean speaking

### public String sayLine

## Constructors

### public IsoDeadBody(IsoGameCharacter died)

**Parameters:**
- `IsoGameCharacter` `died`

### public IsoDeadBody(IsoGameCharacter died,
boolean wasCorpseAlready)

**Parameters:**
- `IsoGameCharacter` `died`
- `boolean` `wasCorpseAlready`

### public IsoDeadBody(IsoGameCharacter died,
boolean wasCorpseAlready,
boolean bAddToSquareAndWorld)

**Parameters:**
- `IsoGameCharacter` `died`
- `boolean` `wasCorpseAlready`
- `boolean` `bAddToSquareAndWorld`

### public IsoDeadBody(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

## Methods

### public ObjectID getObjectID()

**Returns:** `ObjectID`

### public long getObjectIDAsLong()

**Returns:** `long`

### public static boolean isDead(short characterOnlineID)

**Parameters:**
- `short` `characterOnlineID`

**Returns:** `boolean`

### public String getObjectName()

**Returns:** `String`

### public String toString()

**Returns:** `String`

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

### public List<AnimalGene> getAnimalGenome()

**Returns:** `List<AnimalGene>`

### public List<String> getAnimalGeneticDisorder()

**Returns:** `List<String>`

### public void getItemVisuals(ItemVisuals itemVisuals)

**Parameters:**
- `ItemVisuals` `itemVisuals`

**Returns:** `void`

### public boolean isFemale()

**Returns:** `boolean`

### public boolean isZombie()

**Returns:** `boolean`

### public boolean isCrawling()

**Returns:** `boolean`

### public void setCrawling(boolean crawling)

**Parameters:**
- `boolean` `crawling`

**Returns:** `void`

### public boolean isFakeDead()

**Returns:** `boolean`

### public void setFakeDead(boolean fakeDead)

**Parameters:**
- `boolean` `fakeDead`

**Returns:** `void`

### public boolean isSkeleton()

**Returns:** `boolean`

### public void setWornItems(WornItems other)

**Parameters:**
- `WornItems` `other`

**Returns:** `void`

### public WornItems getWornItems()

**Returns:** `WornItems`

### public void setAttachedItems(AttachedItems other)

**Parameters:**
- `AttachedItems` `other`

**Returns:** `void`

### public AttachedItems getAttachedItems()

**Returns:** `AttachedItems`

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

### public float getInventoryWeight()

**Returns:** `float`

### public InventoryItem getItem()

**Returns:** `InventoryItem`

### public float getInitialItemAge(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `float`

### public float getDeathTime()

**Returns:** `float`

### public void setDeathTime(float worldAgeHours)

**Parameters:**
- `float` `worldAgeHours`

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

### public void softReset()

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

### public void renderlast()

**Returns:** `void`

### public DeadBodyAtlas.BodyTexture getAtlasTexture()

**Returns:** `DeadBodyAtlas.BodyTexture`

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

### public void renderShadow()

**Returns:** `void`

### public static void renderShadow(float x,
float y,
float z,
org.joml.Vector3f forward,
float w,
float fm,
float bm,
ColorInfo lightInfo,
float alpha)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `org.joml.Vector3f` `forward`
- `float` `w`
- `float` `fm`
- `float` `bm`
- `ColorInfo` `lightInfo`
- `float` `alpha`

**Returns:** `void`

### public static void renderShadow(float x,
float y,
float z,
org.joml.Vector3f forward,
float w,
float fm,
float bm,
ColorInfo lightInfo,
float alpha,
boolean isAnimal)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `org.joml.Vector3f` `forward`
- `float` `w`
- `float` `fm`
- `float` `bm`
- `ColorInfo` `lightInfo`
- `float` `alpha`
- `boolean` `isAnimal`

**Returns:** `void`

### public ShadowParams getShadowParams()

**Returns:** `ShadowParams`

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

### public boolean isMouseOver(float screenX,
float screenY)

**Parameters:**
- `float` `screenX`
- `float` `screenY`

**Returns:** `boolean`

### public org.joml.Vector2f getGrabHeadPosition(org.joml.Vector2f out)

**Parameters:**
- `org.joml.Vector2f` `out`

**Returns:** `org.joml.Vector2f`

### public org.joml.Vector2f getGrabLegsPosition(org.joml.Vector2f out)

**Parameters:**
- `org.joml.Vector2f` `out`

**Returns:** `org.joml.Vector2f`

### public void Burn()

**Returns:** `void`

### public void setContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container` — the container to set

**Returns:** `void`

### public void checkClothing(InventoryItem removedItem)

**Parameters:**
- `InventoryItem` `removedItem`

**Returns:** `void`

### public boolean IsSpeaking()

**Returns:** `boolean`

### public void Say(String line)

**Parameters:**
- `String` `line`

**Returns:** `void`

### public String getSayLine()

**Returns:** `String`

### public String getTalkerType()

**Returns:** `String`

### public void addToWorld()

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public static void updateBodies()

**Returns:** `void`

### public void changeRotStage(int newStage)

**Parameters:**
- `int` `newStage`

**Returns:** `void`

### public float getReanimateTime()

**Returns:** `float`

### public void setReanimateTime(float hours)

**Parameters:**
- `float` `hours`

**Returns:** `void`

### public void reanimateLater()

**Returns:** `void`

### public void reanimateNow()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void Grappled(IGrappleable grappler,
HandWeapon weapon,
float grappleEffectiveness,
String grappleType)

**Parameters:**
- `IGrappleable` `grappler`
- `HandWeapon` `weapon`
- `float` `grappleEffectiveness`
- `String` `grappleType`

**Returns:** `void`

### public IsoGameCharacter reanimate()

**Returns:** `IsoGameCharacter`

### public static void Reset()

**Returns:** `void`

### public void Collision(Vector2 collision,
IsoObject object)

**Parameters:**
- `Vector2` `collision`
- `IsoObject` `object`

**Returns:** `void`

### public boolean isFallOnFront()

**Returns:** `boolean`

### public void setFallOnFront(boolean fallOnFront)

**Parameters:**
- `boolean` `fallOnFront`

**Returns:** `void`

### public boolean isKilledByFall()

**Returns:** `boolean`

### public void setKilledByFall(boolean killedByFall)

**Parameters:**
- `boolean` `killedByFall`

**Returns:** `void`

### public InventoryItem getPrimaryHandItem()

**Returns:** `InventoryItem`

### public void setPrimaryHandItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public InventoryItem getSecondaryHandItem()

**Returns:** `InventoryItem`

### public void setSecondaryHandItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public float getAngle()

**Returns:** `float`

### public String getOutfitName()

**Returns:** `String`

### public String getDescription()

**Returns:** `String`

### public String readInventory(ByteBuffer b)

**Parameters:**
- `ByteBuffer` `b`

**Returns:** `String`

### public short getCharacterOnlineID()

**Returns:** `short`

### public void setCharacterOnlineID(short onlineID)

**Parameters:**
- `short` `onlineID`

**Returns:** `void`

### public boolean isPlayer()

**Returns:** `boolean`

### public static void removeDeadBody(ObjectID id)

**Parameters:**
- `ObjectID` `id`

**Returns:** `void`

### public IsoGridSquare getRenderSquare()

**Returns:** `IsoGridSquare`

### public void renderDebugData()

**Returns:** `void`

### public boolean isAnimal()

**Returns:** `boolean`

### public float getWeight()

**Returns:** `float`

### public String getCorpseItem()

**Returns:** `String`

### public String getCustomName()

**Returns:** `String`

### public void setAnimalData(IsoAnimal died)

**Parameters:**
- `IsoAnimal` `died`

**Returns:** `void`

### public SurvivorDesc getDescriptor()

**Returns:** `SurvivorDesc`

### public Vector2 getAnimForwardDirection(Vector2 forwardDirection)

**Parameters:**
- `Vector2` `forwardDirection`

**Returns:** `Vector2`

### public void setForwardDirection(float directionX,
float directionY)

**Parameters:**
- `float` `directionX`
- `float` `directionY`

**Returns:** `void`

### public boolean isPerformingGrappleAnimation()

**Returns:** `boolean`

### public void setForwardDirectionAngle(float angle)

**Parameters:**
- `float` `angle`

**Returns:** `void`

### public IAnimatable getAnimatable()

**Returns:** `IAnimatable`

### public IGrappleable getWrappedGrappleable()

**Returns:** `IGrappleable`

### public TwistableBoneTransform[] getDiedBoneTransforms()

**Returns:** `TwistableBoneTransform[]`

### public String getCarcassName()

**Returns:** `String`

### public String getBreed()

**Returns:** `String`

### public boolean hasAnimalParts()

**Returns:** `boolean`

### public boolean isAnimalSkeleton()

**Returns:** `boolean`

### public void invalidateCorpse()

**Returns:** `void`

### public void setInvalidateNextRender(boolean invalidate)

**Parameters:**
- `boolean` `invalidate`

**Returns:** `void`

### public String getInvIcon()

**Returns:** `String`

### public String getPickUpSound()

**Returns:** `String`

### public void setOnHook(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public boolean isOnHook()

**Returns:** `boolean`

### public IsoGameCharacter getKilledBy()

**Returns:** `IsoGameCharacter`

### public void setKilledBy(IsoGameCharacter killedBy)

**Parameters:**
- `IsoGameCharacter` `killedBy`

**Returns:** `void`

### public static void removeDeadBodies(UdpConnection removeCorpsesConnection)

**Parameters:**
- `UdpConnection` `removeCorpsesConnection`

**Returns:** `void`

### public void writeInventory(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public InventoryItem becomeCorpseItem(boolean isRemote)

**Parameters:**
- `boolean` `isRemote`

**Returns:** `InventoryItem`

### public void setDoRender(boolean doRender)

**Parameters:**
- `boolean` `doRender`

**Returns:** `void`

### public boolean canBeGrabbedFrom(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public boolean canBeGrabbed()

**Returns:** `boolean`

### public static boolean canPickUpBodyFromSquare(IsoGridSquare fromSquare,
IsoGridSquare toSquare)

**Parameters:**
- `IsoGridSquare` `fromSquare`
- `IsoGridSquare` `toSquare`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoDeadBody.html`*
