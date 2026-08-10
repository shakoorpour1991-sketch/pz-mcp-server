---
title: zombie.vehicles.BaseVehicle
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.BaseVehicle

`public final class BaseVehicle extends IsoMovingObject implements Thumpable, fmod.fmod.IFMODParameterUpdater, IPositional, IVehicleAlarmListener, IVehicleEngineListener, VehiclePartOwner, VehicleSoundOwner`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.IsoMovingObject
- zombie.vehicles.BaseVehicle

## Fields

### public static final int MASK1_FRONT

### public static final int MASK1_REAR

### public static final int MASK1_DOOR_RIGHT_FRONT

### public static final int MASK1_DOOR_RIGHT_REAR

### public static final int MASK1_DOOR_LEFT_FRONT

### public static final int MASK1_DOOR_LEFT_REAR

### public static final int MASK1_WINDOW_RIGHT_FRONT

### public static final int MASK1_WINDOW_RIGHT_REAR

### public static final int MASK1_WINDOW_LEFT_FRONT

### public static final int MASK1_WINDOW_LEFT_REAR

### public static final int MASK1_WINDOW_FRONT

### public static final int MASK1_WINDOW_REAR

### public static final int MASK1_GUARD_RIGHT_FRONT

### public static final int MASK1_GUARD_RIGHT_REAR

### public static final int MASK1_GUARD_LEFT_FRONT

### public static final int MASK1_GUARD_LEFT_REAR

### public static final int MASK2_ROOF

### public static final int MASK2_LIGHT_RIGHT_FRONT

### public static final int MASK2_LIGHT_LEFT_FRONT

### public static final int MASK2_LIGHT_RIGHT_REAR

### public static final int MASK2_LIGHT_LEFT_REAR

### public static final int MASK2_BRAKE_RIGHT

### public static final int MASK2_BRAKE_LEFT

### public static final int MASK2_LIGHTBAR_RIGHT

### public static final int MASK2_LIGHTBAR_LEFT

### public static final int MASK2_HOOD

### public static final int MASK2_BOOT

### public static final float PHYSICS_Z_SCALE

### public static final float RADIUS

### public static final float PLUS_RADIUS

### public static final int FADE_DISTANCE

### public static final int RANDOMIZE_CONTAINER_CHANCE

### public static final int ENGINE_SOUND_RADIUS

### public static final int AMBIENT_SOUND_RADIUS

### public static final int SIREN_WORLDSOUND_RADIUS

### public static final int SIREN_WORLDSOUND_VOLUME

### public static final float TRAILER_LINEAR_LOWER_LIMIT_X

### public static final float TRAILER_LINEAR_LOWER_LIMIT_Y

### public static final float TRAILER_LINEAR_LOWER_LIMIT_Z

### public static final float TRAILER_LINEAR_UPPER_LIMIT_X

### public static final float TRAILER_LINEAR_UPPER_LIMIT_Y

### public static final float TRAILER_LINEAR_UPPER_LIMIT_Z

### public static final float TRAILER_ANGULAR_LOWER_LIMIT_X

### public static final float TRAILER_ANGULAR_LOWER_LIMIT_Y

### public static final float TRAILER_ANGULAR_LOWER_LIMIT_Z

### public static final float TRAILER_ANGULAR_UPPER_LIMIT_X

### public static final float TRAILER_ANGULAR_UPPER_LIMIT_Y

### public static final float TRAILER_ANGULAR_UPPER_LIMIT_Z

### public static final float MINIMUM_DOT_UPRIGHT

### public static final byte noAuthorization

### public static final int POSITION_HISTORY_MAX_ENTRIES

### public static final long POSITION_HISTORY_INTERVAL_MS

### public static final double HIT_VEHICLE_MAX_DISTANCE_TILES

### public static final float MIN_HIT_SPEED_TILES_PER_SECOND

### public static final boolean YURI_FORCE_FIELD

### public static final float DOT_PRODUCT_ATTACH_TRAILER_FORWARD

### public static final float DOT_PRODUCT_ATTACH_TRAILER_UP

### public static boolean renderToTexture

### public static float centerOfMassMagic

### public static Texture vehicleShadow

### public final ArrayList<BaseVehicle.ModelInfo> models

### public IsoChunk chunk

### public boolean polyDirty

### public short vehicleId

### public int sqlId

### public boolean serverRemovedFromWorld

### public VehicleInterpolation interpolation

### public boolean waitFullUpdate

### public float throttle

### public TransmissionNumber transmissionNumber

### public final UpdateLimit transmissionChangeTime

### public boolean hasExtendOffset

### public boolean hasExtendOffsetExiting

### public float savedPhysicsZ

### public final org.joml.Quaternionf savedRot

### public final Transform jniTransform

### public boolean jniIsCollide

### public final org.joml.Vector3f jniLinearVelocity

### public BaseVehicle.Authorization netPlayerAuthorization

### public short netPlayerId

### public int netPlayerTimeout

### public int authSimulationHash

### public long authSimulationTime

### public int frontEndDurability

### public int rearEndDurability

### public float rust

### public float colorHue

### public float colorSaturation

### public float colorValue

### public int currentFrontEndDurability

### public int currentRearEndDurability

### public float collideX

### public float collideY

### public final VehiclePoly shadowCoord

### public static final int MAX_WHEELS

### public static final int PHYSICS_PARAM_COUNT

### public final BaseVehicle.WheelInfo[] wheelInfo

### public long ramSound

### public long ramSoundTime

### public boolean headlightsOn

### public boolean stoplightsOn

### public boolean windowLightsOn

### public boolean soundHornOn

### public boolean soundBackMoveOn

### public boolean previouslyEntered

### public boolean previouslyMoved

### public final LightbarLightsMode lightbarLightsMode

### public final LightbarSirenMode lightbarSirenMode

### public final BaseVehicle.ServerVehicleState[] connectionState

### public short updateFlags

### public boolean addedToWorld

### public ItemContainer ignitionSwitch

### public int keysContainerId

### public byte keySpawned

### public final org.joml.Matrix4f vehicleTransform

### public final org.joml.Matrix4f renderTransform

### public long physicActiveCheck

### public long constraintChangedTime

### public String specificDistributionId

### public int constraintTowing

### public boolean isActive

### public boolean isStatic

### public boolean isReliable

### public ArrayList<IsoAnimal> animals

### public float timeSinceLastAuth

### public static final ThreadLocal<BaseVehicle.TransformPool> TL_transform_pool

### public static final ThreadLocal<BaseVehicle.Vector3ObjectPool> TL_vector3_pool

### public static final ThreadLocal<BaseVehicle.Vector2fObjectPool> TL_vector2f_pool

### public static final ThreadLocal<BaseVehicle.Vector3fObjectPool> TL_vector3f_pool

### public static final ThreadLocal<BaseVehicle.Vector4fObjectPool> TL_vector4f_pool

### public static final ThreadLocal<BaseVehicle.Matrix4fObjectPool> TL_matrix4f_pool

### public static final ThreadLocal<BaseVehicle.QuaternionfObjectPool> TL_quaternionf_pool

## Constructors

### public BaseVehicle(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

## Methods

### public int getSqlId()

**Returns:** `int`

### public static org.joml.Matrix4f allocMatrix4f()

**Returns:** `org.joml.Matrix4f`

### public static void releaseMatrix4f(org.joml.Matrix4f v)

**Parameters:**
- `org.joml.Matrix4f` `v`

**Returns:** `void`

### public static org.joml.Quaternionf allocQuaternionf()

**Returns:** `org.joml.Quaternionf`

### public static void releaseQuaternionf(org.joml.Quaternionf q)

**Parameters:**
- `org.joml.Quaternionf` `q`

**Returns:** `void`

### public static Transform allocTransform()

**Returns:** `Transform`

### public static void releaseTransform(Transform t)

**Parameters:**
- `Transform` `t`

**Returns:** `void`

### public static Vector2 allocVector2()

**Returns:** `Vector2`

### public static void releaseVector2(Vector2 v)

**Parameters:**
- `Vector2` `v`

**Returns:** `void`

### public static Vector3 allocVector3()

**Returns:** `Vector3`

### public static void releaseVector3(Vector3 v)

**Parameters:**
- `Vector3` `v`

**Returns:** `void`

### public static org.joml.Vector2f allocVector2f()

**Returns:** `org.joml.Vector2f`

### public static void releaseVector2f(org.joml.Vector2f vector2f)

**Parameters:**
- `org.joml.Vector2f` `vector2f`

**Returns:** `void`

### public static org.joml.Vector3f allocVector3f()

**Returns:** `org.joml.Vector3f`

### public static void releaseVector4f(org.joml.Vector4f vector4f)

**Parameters:**
- `org.joml.Vector4f` `vector4f`

**Returns:** `void`

### public static org.joml.Vector4f allocVector4f()

**Returns:** `org.joml.Vector4f`

### public static void releaseVector3f(org.joml.Vector3f vector3f)

**Parameters:**
- `org.joml.Vector3f` `vector3f`

**Returns:** `void`

### public static void LoadAllVehicleTextures()

**Returns:** `void`

### public static void LoadVehicleTextures(VehicleScript script)

**Parameters:**
- `VehicleScript` `script`

**Returns:** `void`

### public static Texture LoadVehicleTexture(String name)

**Parameters:**
- `String` `name`

**Returns:** `Texture`

### public static Texture LoadVehicleTexture(String name,
int flags)

**Parameters:**
- `String` `name`
- `int` `flags`

**Returns:** `Texture`

### public void setNetPlayerAuthorization(BaseVehicle.Authorization netPlayerAuthorization,
int netPlayerId)

**Parameters:**
- `BaseVehicle.Authorization` `netPlayerAuthorization`
- `int` `netPlayerId`

**Returns:** `void`

### public boolean isNetPlayerAuthorization(BaseVehicle.Authorization netPlayerAuthorization)

**Parameters:**
- `BaseVehicle.Authorization` `netPlayerAuthorization`

**Returns:** `boolean`

### public boolean isNetPlayerId(short netPlayerId)

**Parameters:**
- `short` `netPlayerId`

**Returns:** `boolean`

### public short getNetPlayerId()

**Returns:** `short`

### public String getAuthorizationDescription()

**Returns:** `String`

### public static float getFakeSpeedModifier()

**Returns:** `float`

### public boolean isLocalPhysicSim()

**Returns:** `boolean`

### public void addImpulse(org.joml.Vector3f impulse,
org.joml.Vector3f relPos)

**Parameters:**
- `org.joml.Vector3f` `impulse`
- `org.joml.Vector3f` `relPos`

**Returns:** `void`

### public void setEngineSpeed(double speed)

**Parameters:**
- `double` `speed`

**Returns:** `void`

### public void addEngineSpeed(double speed)

**Parameters:**
- `double` `speed`

**Returns:** `void`

### public double getEngineSpeed()

**Returns:** `double`

### public String getTransmissionNumberLetter()

**Returns:** `String`

### public int getTransmissionNumber()

**Returns:** `int`

### public TransmissionNumber getTransmissionNumberEnum()

**Returns:** `TransmissionNumber`

### public void setClientForce(float force)

**Parameters:**
- `float` `force`

**Returns:** `void`

### public float getClientForce()

**Returns:** `float`

### public float getForce()

**Returns:** `float`

### public boolean shouldAnimRecorderBeActive()

**Returns:** `boolean`

### public String getObjectName()

**Returns:** `String`

### public void createPhysics()

**Returns:** `void`

### public void createPhysics(boolean spawnSwap)

**Parameters:**
- `boolean` `spawnSwap`

**Returns:** `void`

### public boolean isPreviouslyEntered()

**Returns:** `boolean`

### public void setPreviouslyEntered(boolean bool)

**Parameters:**
- `boolean` `bool`

**Returns:** `void`

### public boolean isPreviouslyMoved()

**Returns:** `boolean`

### public void setPreviouslyMoved(boolean bool)

**Parameters:**
- `boolean` `bool`

**Returns:** `void`

### public boolean getKeySpawned()

**Returns:** `boolean`

### public void putKeyToZombie(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `void`

### public void putKeyToContainer(ItemContainer container,
IsoGridSquare sq,
IsoObject obj)

**Parameters:**
- `ItemContainer` `container`
- `IsoGridSquare` `sq`
- `IsoObject` `obj`

**Returns:** `void`

### public void putKeyToContainerServer(InventoryItem item,
IsoGridSquare sq,
IsoObject obj)

**Parameters:**
- `InventoryItem` `item`
- `IsoGridSquare` `sq`
- `IsoObject` `obj`

**Returns:** `void`

### public void putKeyToWorld(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void addKeyToWorld()

**Returns:** `void`

### public void addKeyToWorld(boolean crashed)

**Parameters:**
- `boolean` `crashed`

**Returns:** `void`

### public void addKeyToGloveBox()

**Returns:** `void`

### public void addBuildingKeyToGloveBox(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public InventoryItem createVehicleKey()

**Returns:** `InventoryItem`

### public boolean addKeyToSquare(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public boolean addKeyToSquare(IsoGridSquare sq,
boolean crashed)

**Parameters:**
- `IsoGridSquare` `sq`
- `boolean` `crashed`

**Returns:** `boolean`

### public boolean addKeyToSquare2(IsoGridSquare sq,
int x2)

**Parameters:**
- `IsoGridSquare` `sq`
- `int` `x2`

**Returns:** `boolean`

### public boolean addKeyToSquare2(IsoGridSquare sq,
int x2,
boolean crashed)

**Parameters:**
- `IsoGridSquare` `sq`
- `int` `x2`
- `boolean` `crashed`

**Returns:** `boolean`

### public void toggleLockedDoor(VehiclePart part,
IsoGameCharacter chr,
boolean locked)

**Parameters:**
- `VehiclePart` `part`
- `IsoGameCharacter` `chr`
- `boolean` `locked`

**Returns:** `void`

### public boolean canLockDoor(VehiclePart part,
IsoGameCharacter chr)

**Parameters:**
- `VehiclePart` `part`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean canUnlockDoor(VehiclePart part,
IsoGameCharacter chr)

**Parameters:**
- `VehiclePart` `part`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean canOpenDoor(VehiclePart part,
IsoGameCharacter chr)

**Parameters:**
- `VehiclePart` `part`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public void setGeneralPartCondition(float baseQuality,
float chanceToSpawnDamaged)

**Parameters:**
- `float` `baseQuality`
- `float` `chanceToSpawnDamaged`

**Returns:** `void`

### public CarController getController()

**Returns:** `CarController`

### public SurroundVehicle getSurroundVehicle()

**Returns:** `SurroundVehicle`

### public int getSkinCount()

**Returns:** `int`

### public int getSkinIndex()

**Returns:** `int`

### public void setSkinIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void updateSkin()

**Returns:** `void`

### public Texture getShadowTexture()

**Returns:** `Texture`

### public VehicleScript getScript()

**Returns:** `VehicleScript`

### public int getEngineCondition()

**Returns:** `int`

### public BaseVehicle.engineStateTypes getEngineState()

**Returns:** `BaseVehicle.engineStateTypes`

### public boolean isEngineSounding()

**Returns:** `boolean`

### public boolean isAlarmSounding()

**Returns:** `boolean`

### public boolean isBrakePedalPressed()

**Returns:** `boolean`

### public boolean isGasPedalPressed()

**Returns:** `boolean`

### public ParameterVehicleRoadMaterial.Material getRoadMaterial()

**Returns:** `ParameterVehicleRoadMaterial.Material`

### public String getChosenAlarmSound()

**Returns:** `String`

### public boolean isBackupBeeperSounding()

**Returns:** `boolean`

### public boolean isDoorAlarmSounding()

**Returns:** `boolean`

### public boolean isHornSounding()

**Returns:** `boolean`

### public BaseSoundEmitter getVehicleSoundEmitter()

**Returns:** `BaseSoundEmitter`

### public void setScript(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public boolean isListenerInRange(float range)

**Parameters:**
- `float` `range`

**Returns:** `boolean`

### public String getScriptName()

**Returns:** `String`

### public void setScriptName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void setScript()

**Returns:** `void`

### public void scriptReloaded()

**Returns:** `void`

### public void scriptReloaded(boolean spawnSwap)

**Parameters:**
- `boolean` `spawnSwap`

**Returns:** `void`

### public String getSkin()

**Returns:** `String`

### public BaseVehicle.ModelInfo setModelVisible(VehiclePart part,
VehicleScript.Model scriptModel,
boolean visible)

**Parameters:**
- `VehiclePart` `part`
- `VehicleScript.Model` `scriptModel`
- `boolean` `visible`

**Returns:** `BaseVehicle.ModelInfo`

### public int getMaxPassengers()

**Returns:** `int`

### public boolean setPassenger(int seat,
IsoGameCharacter chr,
org.joml.Vector3f offset)

**Parameters:**
- `int` `seat`
- `IsoGameCharacter` `chr`
- `org.joml.Vector3f` `offset`

**Returns:** `boolean`

### public boolean clearPassenger(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `boolean`

### public boolean hasPassenger()

**Returns:** `boolean`

### public BaseVehicle.Passenger getPassenger(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `BaseVehicle.Passenger`

### public IsoGameCharacter getCharacter(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `IsoGameCharacter`

### public int getSeat(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public boolean isDriver(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public org.joml.Vector3f getWorldPos(org.joml.Vector3f localPos,
org.joml.Vector3f worldPos,
VehicleScript script)

**Parameters:**
- `org.joml.Vector3f` `localPos`
- `org.joml.Vector3f` `worldPos`
- `VehicleScript` `script`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getWorldPos(float localX,
float localY,
float localZ,
org.joml.Vector3f worldPos,
VehicleScript script)

**Parameters:**
- `float` `localX`
- `float` `localY`
- `float` `localZ`
- `org.joml.Vector3f` `worldPos`
- `VehicleScript` `script`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getWorldPos(org.joml.Vector3f localPos,
org.joml.Vector3f worldPos)

**Parameters:**
- `org.joml.Vector3f` `localPos`
- `org.joml.Vector3f` `worldPos`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getWorldPos(float localX,
float localY,
float localZ,
org.joml.Vector3f worldPos)

**Parameters:**
- `float` `localX`
- `float` `localY`
- `float` `localZ`
- `org.joml.Vector3f` `worldPos`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getLocalPos(org.joml.Vector3f worldPos,
org.joml.Vector3f localPos)

**Parameters:**
- `org.joml.Vector3f` `worldPos`
- `org.joml.Vector3f` `localPos`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getLocalPos(float worldX,
float worldY,
float worldZ,
org.joml.Vector3f localPos)

**Parameters:**
- `float` `worldX`
- `float` `worldY`
- `float` `worldZ`
- `org.joml.Vector3f` `localPos`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getPassengerLocalPos(int seat,
org.joml.Vector3f v)

**Parameters:**
- `int` `seat`
- `org.joml.Vector3f` `v`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getPassengerWorldPos(int seat,
org.joml.Vector3f out)

**Parameters:**
- `int` `seat`
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getPassengerPositionWorldPos(VehicleScript.Position posn,
org.joml.Vector3f out)

**Parameters:**
- `VehicleScript.Position` `posn`
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getPassengerPositionWorldPos(float x,
float y,
float z,
org.joml.Vector3f out)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public VehicleScript.Anim getPassengerAnim(int seat,
String id)

**Parameters:**
- `int` `seat`
- `String` `id`

**Returns:** `VehicleScript.Anim`

### public VehicleScript.Position getPassengerPosition(int seat,
String id)

**Parameters:**
- `int` `seat`
- `String` `id`

**Returns:** `VehicleScript.Position`

### public VehiclePart getPassengerDoor(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `VehiclePart`

### public VehiclePart getPassengerDoor2(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `VehiclePart`

### public boolean isPositionOnLeftOrRight(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public boolean haveOneDoorUnlocked()

Check if one of the seat door is unlocked

**Returns:** `boolean`

### public String getPassengerArea(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `String`

### public void playPassengerAnim(int seat,
String animId)

**Parameters:**
- `int` `seat`
- `String` `animId`

**Returns:** `void`

### public void playPassengerAnim(int seat,
String animId,
IsoGameCharacter chr)

**Parameters:**
- `int` `seat`
- `String` `animId`
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void playPassengerSound(int seat,
String animId)

**Parameters:**
- `int` `seat`
- `String` `animId`

**Returns:** `void`

### public void playPartAnim(VehiclePart part,
String animId)

**Parameters:**
- `VehiclePart` `part`
- `String` `animId`

**Returns:** `void`

### public void playActorAnim(VehiclePart part,
String animId,
IsoGameCharacter chr)

**Parameters:**
- `VehiclePart` `part`
- `String` `animId`
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void playPartSound(VehiclePart part,
IsoPlayer player,
String animId)

**Parameters:**
- `VehiclePart` `part`
- `IsoPlayer` `player`
- `String` `animId`

**Returns:** `void`

### public void setCharacterPosition(IsoGameCharacter chr,
int seat,
String positionId)

**Parameters:**
- `IsoGameCharacter` `chr`
- `int` `seat`
- `String` `positionId`

**Returns:** `void`

### public void transmitCharacterPosition(int seat,
String positionId)

**Parameters:**
- `int` `seat`
- `String` `positionId`

**Returns:** `void`

### public void setCharacterPositionToAnim(IsoGameCharacter chr,
int seat,
String animId)

**Parameters:**
- `IsoGameCharacter` `chr`
- `int` `seat`
- `String` `animId`

**Returns:** `void`

### public int getPassengerSwitchSeatCount(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `int`

### public VehicleScript.Passenger.SwitchSeat getPassengerSwitchSeat(int seat,
int index)

**Parameters:**
- `int` `seat`
- `int` `index`

**Returns:** `VehicleScript.Passenger.SwitchSeat`

### public String getSwitchSeatAnimName(int seatFrom,
int seatTo)

**Parameters:**
- `int` `seatFrom`
- `int` `seatTo`

**Returns:** `String`

### public float getSwitchSeatAnimRate(int seatFrom,
int seatTo)

**Parameters:**
- `int` `seatFrom`
- `int` `seatTo`

**Returns:** `float`

### public String getSwitchSeatSound(int seatFrom,
int seatTo)

**Parameters:**
- `int` `seatFrom`
- `int` `seatTo`

**Returns:** `String`

### public boolean canSwitchSeat(int seatFrom,
int seatTo)

**Parameters:**
- `int` `seatFrom`
- `int` `seatTo`

**Returns:** `boolean`

### public void switchSeat(IsoGameCharacter chr,
int seatTo)

**Parameters:**
- `IsoGameCharacter` `chr`
- `int` `seatTo`

**Returns:** `void`

### public void playSwitchSeatAnim(int seatFrom,
int seatTo)

**Parameters:**
- `int` `seatFrom`
- `int` `seatTo`

**Returns:** `void`

### public boolean isSeatOccupied(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `boolean`

### public boolean isSeatInstalled(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `boolean`

### public boolean isSeatHoldingItems(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `boolean`

### public boolean isSeatHoldingItems(VehiclePart seat)

**Parameters:**
- `VehiclePart` `seat`

**Returns:** `boolean`

### public ArrayList<VehiclePart> getAllSeatParts()

**Returns:** `ArrayList<VehiclePart>`

### public ArrayList<VehiclePart> getAllSeatParts(ArrayList<VehiclePart> results)

**Parameters:**
- `ArrayList<VehiclePart>` `results`

**Returns:** `ArrayList<VehiclePart>`

### public boolean isPointLeftOfCenter(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `boolean`

### public int getBestSeat(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public float getEnterSeatDistance(int seat,
float x,
float y)

**Parameters:**
- `int` `seat`
- `float` `x`
- `float` `y`

**Returns:** `float`

### public void updateHasExtendOffsetForExit(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void updateHasExtendOffsetForExitEnd(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void updateHasExtendOffset(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public VehiclePart getUseablePart(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `VehiclePart`

### public VehiclePart getUseablePart(IsoGameCharacter chr,
boolean checkDir)

**Parameters:**
- `IsoGameCharacter` `chr`
- `boolean` `checkDir`

**Returns:** `VehiclePart`

### public float distanceToManhatten(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `float`

### public VehiclePart getClosestWindow(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `VehiclePart`

### public Vector2 getFacingPosition(IsoGameCharacter chr,
Vector2 out)

**Parameters:**
- `IsoGameCharacter` `chr`
- `Vector2` `out`

**Returns:** `Vector2`

### public boolean enter(int seat,
IsoGameCharacter chr,
org.joml.Vector3f offset)

**Parameters:**
- `int` `seat`
- `IsoGameCharacter` `chr`
- `org.joml.Vector3f` `offset`

**Returns:** `boolean`

### public boolean enter(int seat,
IsoGameCharacter chr)

**Parameters:**
- `int` `seat`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean enterRSync(int seat,
IsoGameCharacter chr,
BaseVehicle v)

**Parameters:**
- `int` `seat`
- `IsoGameCharacter` `chr`
- `BaseVehicle` `v`

**Returns:** `boolean`

### public boolean exit(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean exitRSync(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean hasRoof(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `boolean`

### public boolean showPassenger(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `boolean`

### public boolean showPassenger(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

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

### public void softReset()

**Returns:** `void`

### public void trySpawnKey()

**Returns:** `void`

### public void trySpawnKey(boolean crashed)

**Parameters:**
- `boolean` `crashed`

**Returns:** `void`

### public boolean shouldCollideWithCharacters()

**Returns:** `boolean`

### public boolean shouldCollideWithObjects()

**Returns:** `boolean`

### public void breakingObjects()

**Returns:** `void`

### public void damageObjects(float damage)

**Parameters:**
- `float` `damage`

**Returns:** `void`

### public void update()

**Returns:** `void`

### public boolean shouldUpdateInMeta()

**Returns:** `boolean`

### public UpdateSchedulerSimulationLevel getMinimumSimulationLevel()

**Returns:** `UpdateSchedulerSimulationLevel`

### public void applyAccumulatedImpulsesFromHitObjectsToPhysics()

**Returns:** `void`

### public void applyAllImpulsesFromProneCharacters()

**Returns:** `void`

### public float getFudgedMass()

**Returns:** `float`

### public boolean isInvalidChunkAround()

**Returns:** `boolean`

### public boolean isInvalidChunkAhead()

**Returns:** `boolean`

### public boolean isInvalidChunkBehind()

**Returns:** `boolean`

### public boolean isInvalidChunkAround(boolean moveW,
boolean moveE,
boolean moveN,
boolean moveS)

**Parameters:**
- `boolean` `moveW`
- `boolean` `moveE`
- `boolean` `moveN`
- `boolean` `moveS`

**Returns:** `boolean`

### public void postupdate()

**Returns:** `void`

### public boolean shouldSnapZToCurrentSquare()

**Returns:** `boolean`

### public void damageFromHitChr(int dmgFront,
int dmgBack)

**Parameters:**
- `int` `dmgFront`
- `int` `dmgBack`

**Returns:** `void`

### public void authorizationClientCollide(IsoPlayer driver)

**Parameters:**
- `IsoPlayer` `driver`

**Returns:** `void`

### public void authorizationServerCollide(short playerId,
boolean isCollide)

**Parameters:**
- `short` `playerId`
- `boolean` `isCollide`

**Returns:** `void`

### public void authorizationServerOnSeat(IsoPlayer player,
boolean enter)

**Parameters:**
- `IsoPlayer` `player`
- `boolean` `enter`

**Returns:** `void`

### public boolean hasAuthorization(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `boolean`

### public void netPlayerFromServerUpdate(BaseVehicle.Authorization authorization,
short authorizationPlayer)

**Parameters:**
- `BaseVehicle.Authorization` `authorization`
- `short` `authorizationPlayer`

**Returns:** `void`

### public Transform getWorldTransform(Transform out)

**Parameters:**
- `Transform` `out`

**Returns:** `Transform`

### public void setWorldTransform(Transform in)

**Parameters:**
- `Transform` `in`

**Returns:** `void`

### public void flipUpright()

**Returns:** `void`

### public void setAngles(float degreesX,
float degreesY,
float degreesZ)

**Parameters:**
- `float` `degreesX`
- `float` `degreesY`
- `float` `degreesZ`

**Returns:** `void`

### public float getAngleX()

**Returns:** `float`

### public float getAngleY()

**Returns:** `float`

### public float getAngleZ()

**Returns:** `float`

### public void setDebugZ(float z)

**Parameters:**
- `float` `z`

**Returns:** `void`

### public void setPhysicsActive(boolean active)

**Parameters:**
- `boolean` `active`

**Returns:** `void`

### public void setPhysicsActive(boolean active,
boolean setStatic)

**Parameters:**
- `boolean` `active`
- `boolean` `setStatic`

**Returns:** `void`

### public boolean isPhysicsActive()

**Returns:** `boolean`

### public float getDebugZ()

**Returns:** `float`

### public VehiclePoly getPoly()

**Returns:** `VehiclePoly`

### public VehiclePoly getPolyPlusRadius()

**Returns:** `VehiclePoly`

### public org.joml.Vector3f getForwardVector(org.joml.Vector3f out)

**Parameters:**
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getUpVector(org.joml.Vector3f out)

**Parameters:**
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public float getUpVectorDot()

**Returns:** `float`

### public boolean isStopped()

**Returns:** `boolean`

### public void setSpeedKmHour(float speedKmHour)

**Parameters:**
- `float` `speedKmHour`

**Returns:** `void`

### public float getCurrentSpeedKmHour()

**Returns:** `float`

### public float getCurrentAbsoluteSpeedKmHour()

**Returns:** `float`

### public org.joml.Vector3f getLinearVelocity(org.joml.Vector3f out)

**Parameters:**
- `org.joml.Vector3f` `out`

**Returns:** `org.joml.Vector3f`

### public float getSpeed2D()

**Returns:** `float`

### public boolean isAtRest()

**Returns:** `boolean`

### public void updatePhysics()

**Returns:** `void`

### public void checkSurroundingChunks()

**Returns:** `void`

### public void updatePhysicsNetwork()

**Returns:** `void`

### public void checkPhysicsValidWithServer()

**Returns:** `void`

### public void updateControls()

**Returns:** `void`

### public boolean isKeyboardControlled()

**Returns:** `boolean`

### public int getJoypad()

**Returns:** `int`

### public void Damage(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public void HitByVehicle(BaseVehicle vehicle,
float amount)

**Parameters:**
- `BaseVehicle` `vehicle`
- `float` `amount`

**Returns:** `void`

### public void crash(float delta,
boolean front)

**Parameters:**
- `float` `delta`
- `boolean` `front`

**Returns:** `void`

### public void addDamageFrontHitAChr(int dmg)

When hitting a character (zombie or player) damage aren't the same as hitting a wall.
damaged will be mainly focus on windshield/hood, not on doors/windows like when hitting a wall.

**Parameters:**
- `int` `dmg`

**Returns:** `void`

### public void addDamageRearHitAChr(int dmg)

When hitting a character (zombie or player) damage aren't the same as hitting a wall.
damaged will be mainly focus on windshield/truckbed, not on doors/windows like when hitting a wall.

**Parameters:**
- `int` `dmg`

**Returns:** `void`

### public float getClosestPointOnExtents(float x,
float y,
org.joml.Vector2f closest)

**Parameters:**
- `float` `x`
- `float` `y`
- `org.joml.Vector2f` `closest`

**Returns:** `float`

### public float getClosestPointOnPoly(float x,
float y,
org.joml.Vector2f closest)

**Parameters:**
- `float` `x`
- `float` `y`
- `org.joml.Vector2f` `closest`

**Returns:** `float`

### public float getClosestPointOnPoly(BaseVehicle other,
org.joml.Vector2f pointSelf,
org.joml.Vector2f pointOther)

**Parameters:**
- `BaseVehicle` `other`
- `org.joml.Vector2f` `pointSelf`
- `org.joml.Vector2f` `pointOther`

**Returns:** `float`

### public boolean intersectLineWithExtents(float x1,
float y1,
float x2,
float y2,
float adjust,
org.joml.Vector2f intersection)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `adjust`
- `org.joml.Vector2f` `intersection`

**Returns:** `boolean`

### public boolean intersectLineWithPoly(float x1,
float y1,
float x2,
float y2,
org.joml.Vector2f intersection)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `org.joml.Vector2f` `intersection`

**Returns:** `boolean`

### public boolean isCharacterAdjacentTo(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public Vector2 testCollisionWithCharacter(IsoGameCharacter chr,
float circleRadius,
Vector2 outCollisionPos)

**Parameters:**
- `IsoGameCharacter` `chr`
- `float` `circleRadius`
- `Vector2` `outCollisionPos`

**Returns:** `Vector2`

### public int testCollisionWithProneCharacter(IsoGameCharacter chr,
boolean doSound,
Vector2 outImpactPosOnVehicle)

**Parameters:**
- `IsoGameCharacter` `chr`
- `boolean` `doSound`
- `Vector2` `outImpactPosOnVehicle`

**Returns:** `int`

### public int testCollisionWithCorpse(IsoDeadBody body,
boolean doSound)

**Parameters:**
- `IsoDeadBody` `body`
- `boolean` `doSound`

**Returns:** `int`

### public int testCollisionWithProneCharacter(IsoMovingObject chr,
float angleX,
float angleY,
boolean doSound,
Vector2 outImpactPosOnVehicle)

**Parameters:**
- `IsoMovingObject` `chr`
- `float` `angleX`
- `float` `angleY`
- `boolean` `doSound`
- `Vector2` `outImpactPosOnVehicle`

**Returns:** `int`

### public Vector2 testCollisionWithObject(IsoObject obj,
float circleRadius,
Vector2 out)

**Parameters:**
- `IsoObject` `obj`
- `float` `circleRadius`
- `Vector2` `out`

**Returns:** `Vector2`

### public boolean testCollisionWithVehicle(BaseVehicle obj)

**Parameters:**
- `BaseVehicle` `obj`

**Returns:** `boolean`

### public void applyImpulseFromHitObject(IsoObject obj,
float mul)

**Parameters:**
- `IsoObject` `obj`
- `float` `mul`

**Returns:** `void`

### public void applyImpulseFromHitPedestrian(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void applyImpulseFromHitPlant(IsoObject obj,
float mul)

**Parameters:**
- `IsoObject` `obj`
- `float` `mul`

**Returns:** `void`

### public void applyImpulseGeneric(float fromX,
float fromY,
float fromZ,
float impulseDirX,
float impulseDirY,
float impulseDirZ,
float impulseStrength)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `fromZ`
- `float` `impulseDirX`
- `float` `impulseDirY`
- `float` `impulseDirZ`
- `float` `impulseStrength`

**Returns:** `void`

### public float hitCharacter(IsoGameCharacter chr,
Vector2 impactPosOnVehicle)

**Parameters:**
- `IsoGameCharacter` `chr`
- `Vector2` `impactPosOnVehicle`

**Returns:** `float`

### public boolean isPersistentContact(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public void hitAnimal(IsoAnimal chr)

**Parameters:**
- `IsoAnimal` `chr`

**Returns:** `void`

### public int calculateDamageWithCharacter(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public boolean blocked(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public boolean isIntersectingSquare(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public boolean isIntersectingSquare(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public boolean isIntersectingSquareWithShadow(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public boolean circleIntersects(float x,
float y,
float z,
float radius)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `radius`

**Returns:** `boolean`

### public void updateLights()

**Returns:** `void`

### public void fixLightbarModelLighting(IsoLightSource ls,
org.joml.Vector3f lightPos)

**Parameters:**
- `IsoLightSource` `ls`
- `org.joml.Vector3f` `lightPos`

**Returns:** `void`

### public void updateDamageOverlayLater()

**Returns:** `void`

### public void doDamageOverlay()

**Returns:** `void`

### public float getBloodIntensity(String id)

**Parameters:**
- `String` `id`

**Returns:** `float`

### public void setBloodIntensity(String id,
float intensity)

**Parameters:**
- `String` `id`
- `float` `intensity`

**Returns:** `void`

### public void transmitBlood()

**Returns:** `void`

### public void doBloodOverlay()

**Returns:** `void`

### public boolean isOnScreen()

**Returns:** `boolean`

### public void render(float x,
float y,
float z,
ColorInfo col,
boolean bDoAttached,
boolean bWallLightingPass,
Shader shader)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `col`
- `boolean` `bDoAttached`
- `boolean` `bWallLightingPass`
- `Shader` `shader`

**Returns:** `void`

### public void renderlast()

**Returns:** `void`

### public void renderShadow()

**Returns:** `void`

### public boolean isEnterBlocked(IsoGameCharacter chr,
int seat)

**Parameters:**
- `IsoGameCharacter` `chr`
- `int` `seat`

**Returns:** `boolean`

### public boolean isExitBlocked(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `boolean`

### public boolean isExitBlocked(IsoGameCharacter chr,
int seat)

**Parameters:**
- `IsoGameCharacter` `chr`
- `int` `seat`

**Returns:** `boolean`

### public boolean isPassengerUseDoor2(IsoGameCharacter chr,
int seat)

**Parameters:**
- `IsoGameCharacter` `chr`
- `int` `seat`

**Returns:** `boolean`

### public boolean isEnterBlocked2(IsoGameCharacter chr,
int seat)

**Parameters:**
- `IsoGameCharacter` `chr`
- `int` `seat`

**Returns:** `boolean`

### public boolean isExitBlocked2(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `boolean`

### public Vector2 areaPositionWorld(VehicleScript.Area area)

**Parameters:**
- `VehicleScript.Area` `area`

**Returns:** `Vector2`

### public Vector2 areaPositionWorld(VehicleScript.Area area,
Vector2 out)

**Parameters:**
- `VehicleScript.Area` `area`
- `Vector2` `out`

**Returns:** `Vector2`

### public Vector2 areaPositionWorld4PlayerInteract(VehicleScript.Area area)

**Parameters:**
- `VehicleScript.Area` `area`

**Returns:** `Vector2`

### public Vector2 areaPositionWorld4PlayerInteract(VehicleScript.Area area,
Vector2 out)

**Parameters:**
- `VehicleScript.Area` `area`
- `Vector2` `out`

**Returns:** `Vector2`

### public void getWheelForwardVector(int wheelIndex,
org.joml.Vector3f out)

**Parameters:**
- `int` `wheelIndex`
- `org.joml.Vector3f` `out`

**Returns:** `void`

### public void onEngineStateChanged(BaseVehicle.engineStateTypes oldState,
BaseVehicle.engineStateTypes newState,
VehicleEngineStateChangeReason reason)

**Parameters:**
- `BaseVehicle.engineStateTypes` `oldState`
- `BaseVehicle.engineStateTypes` `newState`
- `VehicleEngineStateChangeReason` `reason`

**Returns:** `void`

### public void tryStartEngine(boolean haveKey)

**Parameters:**
- `boolean` `haveKey`

**Returns:** `void`

### public void tryStartEngine()

**Returns:** `void`

### public void engineDoIdle()

**Returns:** `void`

### public void engineDoStarting()

**Returns:** `void`

### public boolean isStarting()

**Returns:** `boolean`

### public void engineDoRetryingStarting()

**Returns:** `void`

### public void engineDoStartingSuccess()

**Returns:** `void`

### public void engineDoStartingFailed()

**Returns:** `void`

### public void engineDoStartingFailed(String sound)

**Parameters:**
- `String` `sound`

**Returns:** `void`

### public void engineDoStartingFailed(VehicleEngineStateChangeReason reason)

**Parameters:**
- `VehicleEngineStateChangeReason` `reason`

**Returns:** `void`

### public void engineDoStartingFailedNoPower()

**Returns:** `void`

### public void engineDoRunning()

**Returns:** `void`

### public void engineDoStalling()

**Returns:** `void`

### public void engineDoShuttingDown()

**Returns:** `void`

### public void engineDoShuttingDown(String sound)

**Parameters:**
- `String` `sound`

**Returns:** `void`

### public void engineDoShuttingDown(VehicleEngineStateChangeReason reason)

**Parameters:**
- `VehicleEngineStateChangeReason` `reason`

**Returns:** `void`

### public void shutOff()

**Returns:** `void`

### public void shutOff(String sound)

**Parameters:**
- `String` `sound`

**Returns:** `void`

### public void resumeRunningAfterLoad()

**Returns:** `void`

### public boolean isEngineStarted()

**Returns:** `boolean`

### public boolean isEngineRunning()

**Returns:** `boolean`

### public boolean isEngineWorking()

**Returns:** `boolean`

### public boolean isOperational()

**Returns:** `boolean`

### public boolean isDriveable()

**Returns:** `boolean`

### public BaseSoundEmitter getEmitter()

**Returns:** `BaseSoundEmitter`

### public long playSoundImpl(String file,
IsoObject parent)

**Parameters:**
- `String` `file`
- `IsoObject` `parent`

**Returns:** `long`

### public int stopSound(long channel)

**Parameters:**
- `long` `channel`

**Returns:** `int`

### public void playSound(String sound)

**Parameters:**
- `String` `sound`

**Returns:** `void`

### public void checkVehicleSoundsExists()

**Returns:** `void`

### public void updateSounds()

**Returns:** `void`

### public void updateParts()

**Returns:** `void`

### public void drainBatteryUpdateHack()

**Returns:** `void`

### public boolean getHeadlightsOn()

**Returns:** `boolean`

### public void setHeadlightsOn(boolean on)

**Parameters:**
- `boolean` `on`

**Returns:** `void`

### public boolean getWindowLightsOn()

**Returns:** `boolean`

### public void setWindowLightsOn(boolean on)

**Parameters:**
- `boolean` `on`

**Returns:** `void`

### public boolean getHeadlightCanEmmitLight()

**Returns:** `boolean`

### public boolean getStoplightsOn()

**Returns:** `boolean`

### public void setStoplightsOn(boolean on)

**Parameters:**
- `boolean` `on`

**Returns:** `void`

### public boolean hasHeadlights()

**Returns:** `boolean`

### public void addToWorld()

**Returns:** `void`

### public void addToWorld(boolean crashed)

**Parameters:**
- `boolean` `crashed`

**Returns:** `void`

### public void removeFromWorld()

**Returns:** `void`

### public void permanentlyRemove()

**Returns:** `void`

### public void setEngineFeature(int quality,
int loudness,
int engineForce)

**Parameters:**
- `int` `quality`
- `int` `loudness`
- `int` `engineForce`

**Returns:** `void`

### public int getEngineQuality()

**Returns:** `int`

### public int getEngineLoudness()

**Returns:** `int`

### public int getEnginePower()

**Returns:** `int`

### public VehicleParts getParts()

**Returns:** `VehicleParts`

### public void adoptParts(VehicleParts partsNew)

**Parameters:**
- `VehicleParts` `partsNew`

**Returns:** `void`

### public VehiclePart getPartForSeatContainer(int seat)

**Parameters:**
- `int` `seat`

**Returns:** `VehiclePart`

### public <T> PZArrayList<ItemContainer> getVehicleItemContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate)

**Returns:** `PZArrayList<ItemContainer>`

### public <T> PZArrayList<ItemContainer> getVehicleItemContainers(T paramToCompare,
Invokers.Params2.Boolean.ICallback<T, ItemContainer> isValidPredicate,
PZArrayList<ItemContainer> containerList)

**Returns:** `PZArrayList<ItemContainer>`

### public void transmitPartCondition(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartItem(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartLight(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartModData(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartUsedDelta(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartDoor(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public void transmitPartWindow(VehiclePart part)

**Parameters:**
- `VehiclePart` `part`

**Returns:** `void`

### public int getLightCount()

**Returns:** `int`

### public VehiclePart getLightByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehiclePart`

### public String getZone()

**Returns:** `String`

### public void setZone(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public boolean isInArea(String areaId,
IsoGameCharacter chr)

**Parameters:**
- `String` `areaId`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public float getAreaDist(String areaId,
float x,
float y,
float z)

**Parameters:**
- `String` `areaId`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `float`

### public float getAreaDist(String areaId,
IsoGameCharacter chr)

**Parameters:**
- `String` `areaId`
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public Vector2 getAreaCenter(String areaId)

**Parameters:**
- `String` `areaId`

**Returns:** `Vector2`

### public Vector2 getAreaCenter(String areaId,
Vector2 out)

**Parameters:**
- `String` `areaId`
- `Vector2` `out`

**Returns:** `Vector2`

### public Vector2 getAreaFacingPosition(String areaId,
Vector2 out)

**Parameters:**
- `String` `areaId`
- `Vector2` `out`

**Returns:** `Vector2`

### public boolean isInBounds(float worldX,
float worldY)

**Parameters:**
- `float` `worldX`
- `float` `worldY`

**Returns:** `boolean`

### public boolean canAccessContainer(int partIndex,
IsoGameCharacter chr)

**Parameters:**
- `int` `partIndex`
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean canInstallPart(IsoGameCharacter chr,
VehiclePart part)

**Parameters:**
- `IsoGameCharacter` `chr`
- `VehiclePart` `part`

**Returns:** `boolean`

### public boolean canUninstallPart(IsoGameCharacter chr,
VehiclePart part)

**Parameters:**
- `IsoGameCharacter` `chr`
- `VehiclePart` `part`

**Returns:** `boolean`

### public short getId()

**Returns:** `short`

### public void setTireInflation(int wheelIndex,
float inflation)

**Parameters:**
- `int` `wheelIndex`
- `float` `inflation`

**Returns:** `void`

### public void setTireRemoved(int wheelIndex,
boolean removed)

**Parameters:**
- `int` `wheelIndex`
- `boolean` `removed`

**Returns:** `void`

### public org.joml.Vector3f chooseBestAttackPosition(IsoGameCharacter target,
IsoGameCharacter attacker,
org.joml.Vector3f worldPos)

**Parameters:**
- `IsoGameCharacter` `target`
- `IsoGameCharacter` `attacker`
- `org.joml.Vector3f` `worldPos`

**Returns:** `org.joml.Vector3f`

### public BaseVehicle.MinMaxPosition getMinMaxPosition()

**Returns:** `BaseVehicle.MinMaxPosition`

### public String getVehicleType()

**Returns:** `String`

### public void setVehicleType(String type)

**Parameters:**
- `String` `type`

**Returns:** `void`

### public float getMaxSpeed()

**Returns:** `float`

### public void setMaxSpeed(float maxSpeed)

**Parameters:**
- `float` `maxSpeed`

**Returns:** `void`

### public void lockServerUpdate(long lockTimeMs)

**Parameters:**
- `long` `lockTimeMs`

**Returns:** `void`

### public void changeTransmission(TransmissionNumber newTransmission)

Change transmission, slow down the car if you change shift for a superior one

**Parameters:**
- `TransmissionNumber` `newTransmission`

**Returns:** `void`

### public void tryHotwire(int electricityLevel)

Try to hotwire a car Calcul is: 100-Engine quality (capped to 5) + Skill modifier: electricityLvl * 4 % of
hotwiring the car Failing may cause the ignition to break

**Parameters:**
- `int` `electricityLevel`

**Returns:** `void`

### public void cheatHotwire(boolean hotwired,
boolean broken)

**Parameters:**
- `boolean` `hotwired`
- `boolean` `broken`

**Returns:** `void`

### public boolean isKeyIsOnDoor()

**Returns:** `boolean`

### public void setKeyIsOnDoor(boolean keyIsOnDoor)

**Parameters:**
- `boolean` `keyIsOnDoor`

**Returns:** `void`

### public boolean isHotwired()

**Returns:** `boolean`

### public void setHotwired(boolean hotwired)

**Parameters:**
- `boolean` `hotwired`

**Returns:** `void`

### public boolean isHotwiredBroken()

**Returns:** `boolean`

### public void setHotwiredBroken(boolean hotwiredBroken)

**Parameters:**
- `boolean` `hotwiredBroken`

**Returns:** `void`

### public IsoGameCharacter getDriver()

**Returns:** `IsoGameCharacter`

### public IsoGameCharacter getDriverRegardlessOfTow()

**Returns:** `IsoGameCharacter`

### public IsoPlayer getPVPPlayerDriver()

**Returns:** `IsoPlayer`

### public boolean isKeysInIgnition()

**Returns:** `boolean`

### public void setKeysInIgnition(boolean keysOnContact)

**Parameters:**
- `boolean` `keysOnContact`

**Returns:** `void`

### public void putKeyInIgnition(InventoryItem key,
int containerID)

**Parameters:**
- `InventoryItem` `key`
- `int` `containerID`

**Returns:** `void`

### public void removeKeyFromIgnition()

**Returns:** `void`

### public void putKeyOnDoor(InventoryItem key)

**Parameters:**
- `InventoryItem` `key`

**Returns:** `void`

### public void removeKeyFromDoor()

**Returns:** `void`

### public void syncKeyInIgnition(boolean inIgnition,
boolean onDoor,
InventoryItem key)

**Parameters:**
- `boolean` `inIgnition`
- `boolean` `onDoor`
- `InventoryItem` `key`

**Returns:** `void`

### public void setChosenAlarmSound(String soundName)

**Parameters:**
- `String` `soundName`

**Returns:** `void`

### public void chooseAlarmSound()

**Returns:** `void`

### public void onVehicleAlarmEvent(VehicleAlarmEvent event)

**Parameters:**
- `VehicleAlarmEvent` `event`

**Returns:** `void`

### public void onAlarmStart()

**Returns:** `void`

### public void onAlarmStop()

**Returns:** `void`

### public void onHornStart()

**Returns:** `void`

### public void onHornStop()

**Returns:** `void`

### public boolean hasBackSignal()

**Returns:** `boolean`

### public boolean isBackSignalEmitting()

**Returns:** `boolean`

### public void onBackMoveSignalStart()

**Returns:** `void`

### public void onBackMoveSignalStop()

**Returns:** `void`

### public LightbarLightsMode getLightbarLightsModeObject()

**Returns:** `LightbarLightsMode`

### public void setLightbarLightsMode(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### public void setLightbarSirenMode(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### public HashMap<String,String> getChoosenParts()

**Returns:** `HashMap<String,String>`

### public float getMass()

**Returns:** `float`

### public void setMass(float mass)

**Parameters:**
- `float` `mass`

**Returns:** `void`

### public float getInitialMass()

**Returns:** `float`

### public void setInitialMass(float initialMass)

**Parameters:**
- `float` `initialMass`

**Returns:** `void`

### public void updateTotalMass()

**Returns:** `void`

### public float getBrakingForce()

**Returns:** `float`

### public void setBrakingForce(float brakingForce)

**Parameters:**
- `float` `brakingForce`

**Returns:** `void`

### public float getBaseQuality()

**Returns:** `float`

### public void setBaseQuality(float baseQuality)

**Parameters:**
- `float` `baseQuality`

**Returns:** `void`

### public float getCurrentSteering()

**Returns:** `float`

### public void setCurrentSteering(float currentSteering)

**Parameters:**
- `float` `currentSteering`

**Returns:** `void`

### public boolean isDoingOffroad()

**Returns:** `boolean`

### public boolean isBraking()

**Returns:** `boolean`

### public void setBraking(boolean isBraking)

**Parameters:**
- `boolean` `isBraking`

**Returns:** `void`

### public void updatePartStats()

Update the stats of the part depending on condition

**Returns:** `void`

### public void transmitEngine()

**Returns:** `void`

### public void setRust(float rust)

**Parameters:**
- `float` `rust`

**Returns:** `void`

### public float getRust()

**Returns:** `float`

### public void transmitRust()

**Returns:** `void`

### public void transmitAlarmed()

**Returns:** `void`

### public void transmitColorHSV()

**Returns:** `void`

### public void transmitSkinIndex()

**Returns:** `void`

### public void updateBulletStats()

**Returns:** `void`

### public void setActiveInBullet(boolean active)

Used in mechanics UI, we enable the vehicle in Bullet when starting mechanics so physic will be updated. When
we close the UI, we should
disable it in Bullet, expect if the engine is running.

**Parameters:**
- `boolean` `active`

**Returns:** `void`

### public boolean areAllDoorsLocked()

**Returns:** `boolean`

### public boolean isAnyDoorLocked()

**Returns:** `boolean`

### public float getRemainingFuelPercentage()

**Returns:** `float`

### public int getMechanicalID()

**Returns:** `int`

### public void setMechanicalID(int mechanicalId)

**Parameters:**
- `int` `mechanicalId`

**Returns:** `void`

### public boolean needPartsUpdate()

**Returns:** `boolean`

### public void setNeedPartsUpdate(boolean needPartsUpdate)

**Parameters:**
- `boolean` `needPartsUpdate`

**Returns:** `void`

### public boolean isAlarmed()

**Returns:** `boolean`

### public void setAlarmed(boolean alarmed)

**Parameters:**
- `boolean` `alarmed`

**Returns:** `void`

### public void setVehicleAlarm(VehicleAlarm vehicleAlarm1)

**Parameters:**
- `VehicleAlarm` `vehicleAlarm1`

**Returns:** `void`

### public VehicleAlarm getVehicleAlarmObject()

**Returns:** `VehicleAlarm`

### public boolean isAlarmActive()

**Returns:** `boolean`

### public boolean isAlarmSoundOn()

**Returns:** `boolean`

### public void triggerAlarm()

**Returns:** `void`

### public boolean isMechanicUIOpen()

**Returns:** `boolean`

### public void setMechanicUIOpen(boolean mechanicUiOpen)

**Parameters:**
- `boolean` `mechanicUiOpen`

**Returns:** `void`

### public void damagePlayers(float damage)

**Parameters:**
- `float` `damage`

**Returns:** `void`

### public void addRandomDamageFromCrash(IsoGameCharacter chr,
float damage)

**Parameters:**
- `IsoGameCharacter` `chr`
- `float` `damage`

**Returns:** `void`

### public boolean isTrunkLocked()

**Returns:** `boolean`

### public void setTrunkLocked(boolean locked)

**Parameters:**
- `boolean` `locked`

**Returns:** `void`

### public VehiclePart getNearestBodyworkPart(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `VehiclePart`

### public double getSirenStartTime()

**Returns:** `double`

### public void setSirenStartTime(double worldAgeHours)

**Parameters:**
- `double` `worldAgeHours`

**Returns:** `void`

### public void repair()

**Returns:** `void`

### public boolean isAnyListenerInside()

**Returns:** `boolean`

### public boolean isSirenActive()

**Returns:** `boolean`

### public boolean isSirenSounding()

**Returns:** `boolean`

### public LightbarSirenMode getLightbarSirenModeObject()

**Returns:** `LightbarSirenMode`

### public float getMaxWheelSteering()

**Returns:** `float`

### public float getMinWheelSkid()

**Returns:** `float`

### public boolean isAnyTireMissing()

**Returns:** `boolean`

### public boolean couldCrawlerAttackPassenger(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public boolean isGoodCar()

**Returns:** `boolean`

### public void setGoodCar(boolean isGoodCar)

**Parameters:**
- `boolean` `isGoodCar`

**Returns:** `void`

### public InventoryItem getCurrentKey()

**Returns:** `InventoryItem`

### public void setCurrentKey(InventoryItem currentKey)

**Parameters:**
- `InventoryItem` `currentKey`

**Returns:** `void`

### public boolean isInForest()

**Returns:** `boolean`

### public boolean shouldNotHaveLoot()

**Returns:** `boolean`

### public boolean isInTrafficJam()

**Returns:** `boolean`

### public float getOffroadEfficiency()

Give the offroad efficiency of the car, based on car's script + where the vehicle is (in forest you get more
damage than vegitation)
Currently x2 to balance things

**Returns:** `float`

### public void applyImpulseFromHitCorpse(IsoDeadBody chr)

**Parameters:**
- `IsoDeadBody` `chr`

**Returns:** `void`

### public boolean isDoColor()

**Returns:** `boolean`

### public void setDoColor(boolean doColor)

**Parameters:**
- `boolean` `doColor`

**Returns:** `void`

### public float getBrakeSpeedBetweenUpdate()

**Returns:** `float`

### public IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public void setColor(float value,
float saturation,
float hue)

**Parameters:**
- `float` `value`
- `float` `saturation`
- `float` `hue`

**Returns:** `void`

### public void setColorHSV(float hue,
float saturation,
float value)

**Parameters:**
- `float` `hue`
- `float` `saturation`
- `float` `value`

**Returns:** `void`

### public float getColorHue()

**Returns:** `float`

### public float getColorSaturation()

**Returns:** `float`

### public float getColorValue()

**Returns:** `float`

### public boolean isRemovedFromWorld()

**Returns:** `boolean`

### public float getInsideTemperature()

**Returns:** `float`

### public AnimationPlayer getAnimationPlayer()

**Returns:** `AnimationPlayer`

### public void releaseAnimationPlayers()

**Returns:** `void`

### public void setAddThumpWorldSound(boolean add)

**Parameters:**
- `boolean` `add`

**Returns:** `void`

### public void createImpulse(org.joml.Vector3f vec)

**Parameters:**
- `org.joml.Vector3f` `vec`

**Returns:** `void`

### public void Thump(IsoMovingObject thumper,
int thumpEventCount)

**Parameters:**
- `IsoMovingObject` `thumper`
- `int` `thumpEventCount`

**Returns:** `void`

### public void WeaponHit(IsoGameCharacter chr,
HandWeapon weapon)

**Parameters:**
- `IsoGameCharacter` `chr`
- `HandWeapon` `weapon`

**Returns:** `void`

### public Thumpable getThumpableFor(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `Thumpable`

### public float getThumpCondition()

**Returns:** `float`

### public boolean isRegulator()

**Returns:** `boolean`

### public void setRegulator(boolean regulator)

**Parameters:**
- `boolean` `regulator`

**Returns:** `void`

### public float getRegulatorSpeed()

**Returns:** `float`

### public void setRegulatorSpeed(float regulatorSpeed)

**Parameters:**
- `float` `regulatorSpeed`

**Returns:** `void`

### public float getCurrentSpeedForRegulator()

**Returns:** `float`

### public void setVehicleTowing(BaseVehicle vehicleB,
String attachmentA,
String attachmentB)

**Parameters:**
- `BaseVehicle` `vehicleB`
- `String` `attachmentA`
- `String` `attachmentB`

**Returns:** `void`

### public void setVehicleTowedBy(BaseVehicle vehicleA,
String attachmentA,
String attachmentB)

**Parameters:**
- `BaseVehicle` `vehicleA`
- `String` `attachmentA`
- `String` `attachmentB`

**Returns:** `void`

### public BaseVehicle getVehicleTowing()

**Returns:** `BaseVehicle`

### public BaseVehicle getVehicleTowedBy()

**Returns:** `BaseVehicle`

### public BaseVehicle getTowingPartner()

**Returns:** `BaseVehicle`

### public boolean attachmentExist(String attachmentName)

**Parameters:**
- `String` `attachmentName`

**Returns:** `boolean`

### public org.joml.Vector3f getAttachmentLocalPos(String attachmentName,
org.joml.Vector3f v)

**Parameters:**
- `String` `attachmentName`
- `org.joml.Vector3f` `v`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getAttachmentWorldPos(String attachmentName,
org.joml.Vector3f v)

**Parameters:**
- `String` `attachmentName`
- `org.joml.Vector3f` `v`

**Returns:** `org.joml.Vector3f`

### public void setForceBrake()

**Returns:** `void`

### public org.joml.Vector3f getTowingLocalPos(String attachmentName,
org.joml.Vector3f v)

**Parameters:**
- `String` `attachmentName`
- `org.joml.Vector3f` `v`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getTowedByLocalPos(String attachmentName,
org.joml.Vector3f v)

**Parameters:**
- `String` `attachmentName`
- `org.joml.Vector3f` `v`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getTowingWorldPos(String attachmentName,
org.joml.Vector3f v)

**Parameters:**
- `String` `attachmentName`
- `org.joml.Vector3f` `v`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getTowedByWorldPos(String attachmentName,
org.joml.Vector3f v)

**Parameters:**
- `String` `attachmentName`
- `org.joml.Vector3f` `v`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getPlayerTrailerLocalPos(String attachmentName,
boolean left,
org.joml.Vector3f v)

**Parameters:**
- `String` `attachmentName`
- `boolean` `left`
- `org.joml.Vector3f` `v`

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getPlayerTrailerWorldPos(String attachmentName,
boolean left,
org.joml.Vector3f v)

**Parameters:**
- `String` `attachmentName`
- `boolean` `left`
- `org.joml.Vector3f` `v`

**Returns:** `org.joml.Vector3f`

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

### public void addPointConstraint(IsoPlayer player,
BaseVehicle vehicleB,
String attachmentA,
String attachmentB)

**Parameters:**
- `IsoPlayer` `player`
- `BaseVehicle` `vehicleB`
- `String` `attachmentA`
- `String` `attachmentB`

**Returns:** `void`

### public void addPointConstraint(IsoPlayer player,
BaseVehicle vehicleB,
String attachmentA,
String attachmentB,
Boolean remote)

**Parameters:**
- `IsoPlayer` `player`
- `BaseVehicle` `vehicleB`
- `String` `attachmentA`
- `String` `attachmentB`
- `Boolean` `remote`

**Returns:** `void`

### public void authorizationChanged(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `void`

### public void constraintChanged()

**Returns:** `void`

### public void breakConstraint(boolean forgetID,
boolean remote)

**Parameters:**
- `boolean` `forgetID`
- `boolean` `remote`

**Returns:** `void`

### public boolean breakConstraintOnServer()

**Returns:** `boolean`

### public void beginAttachingTrailer()

**Returns:** `void`

### public void stopAttachingTrailer()

**Returns:** `void`

### public boolean isAttachingTrailer()

**Returns:** `boolean`

### public boolean canAttachTrailer(BaseVehicle vehicleB,
String attachmentA,
String attachmentB)

**Parameters:**
- `BaseVehicle` `vehicleB`
- `String` `attachmentA`
- `String` `attachmentB`

**Returns:** `boolean`

### public boolean canAttachTrailer(BaseVehicle vehicleB,
String attachmentA,
String attachmentB,
boolean reconnect)

**Parameters:**
- `BaseVehicle` `vehicleB`
- `String` `attachmentA`
- `String` `attachmentB`
- `boolean` `reconnect`

**Returns:** `boolean`

### public void positionTrailer(BaseVehicle trailer)

**Parameters:**
- `BaseVehicle` `trailer`

**Returns:** `void`

### public String getTowAttachmentSelf()

**Returns:** `String`

### public String getTowAttachmentOther()

**Returns:** `String`

### public VehicleEngineRPM getVehicleEngineRPM()

**Returns:** `VehicleEngineRPM`

### public boolean isBeingTowedBackwards()

**Returns:** `boolean`

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

### public VehicleSounds getVehicleSounds()

**Returns:** `VehicleSounds`

### public void setVehicleSounds(VehicleSounds vehicleSounds1)

**Parameters:**
- `VehicleSounds` `vehicleSounds1`

**Returns:** `void`

### public BaseVehicle setSmashed(String location)

**Parameters:**
- `String` `location`

**Returns:** `BaseVehicle`

### public BaseVehicle setSmashed(String location,
boolean flipped)

**Parameters:**
- `String` `location`
- `boolean` `flipped`

**Returns:** `BaseVehicle`

### public boolean isCollided(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public BaseVehicle.HitVars checkNetworkCollision(IsoGameCharacter target)

**Parameters:**
- `IsoGameCharacter` `target`

**Returns:** `BaseVehicle.HitVars`

### public void onHitLandmine(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public void onJump()

**Returns:** `void`

### public boolean updateNetworkHitByVehicle(IsoGameCharacter target)

**Parameters:**
- `IsoGameCharacter` `target`

**Returns:** `boolean`

### public float getAnimalTrailerSize()

**Returns:** `float`

### public ArrayList<IsoAnimal> getAnimals()

**Returns:** `ArrayList<IsoAnimal>`

### public void addAnimalFromHandsInTrailer(IsoAnimal animal,
IsoPlayer player)

**Parameters:**
- `IsoAnimal` `animal`
- `IsoPlayer` `player`

**Returns:** `void`

### public void addAnimalFromHandsInTrailer(IsoDeadBody body,
IsoPlayer player)

**Parameters:**
- `IsoDeadBody` `body`
- `IsoPlayer` `player`

**Returns:** `void`

### public void addAnimalInTrailer(IsoDeadBody body)

**Parameters:**
- `IsoDeadBody` `body`

**Returns:** `void`

### public void addAnimalInTrailer(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public IsoObject removeAnimalFromTrailer(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `IsoObject`

### public void replaceGrownAnimalInTrailer(IsoAnimal current,
IsoAnimal grown)

**Parameters:**
- `IsoAnimal` `current`
- `IsoAnimal` `grown`

**Returns:** `void`

### public float getCurrentTotalAnimalSize()

**Returns:** `float`

### public void setCurrentTotalAnimalSize(float totalAnimalSize)

**Parameters:**
- `float` `totalAnimalSize`

**Returns:** `void`

### public void keyNamerVehicle(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public static void keyNamerVehicle(InventoryItem item,
BaseVehicle vehicle)

**Parameters:**
- `InventoryItem` `item`
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public boolean checkZombieKeyForVehicle(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `boolean`

### public boolean checkZombieKeyForVehicle(IsoZombie zombie,
String vehicleType)

**Parameters:**
- `IsoZombie` `zombie`
- `String` `vehicleType`

**Returns:** `boolean`

### public boolean checkForSpecialMatchOne(String one,
String two,
String three)

**Parameters:**
- `String` `one`
- `String` `two`
- `String` `three`

**Returns:** `boolean`

### public boolean checkForSpecialMatchTwo(String one,
String two,
String three)

**Parameters:**
- `String` `one`
- `String` `two`
- `String` `three`

**Returns:** `boolean`

### public boolean checkIfGoodVehicleForKey()

**Returns:** `boolean`

### public boolean trySpawnVehicleKeyOnZombie(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `boolean`

### public boolean trySpawnVehicleKeyInObject(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `boolean`

### public boolean checkSquareForVehicleKeySpot(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean checkSquareForVehicleKeySpot(IsoGridSquare square,
boolean crashed)

**Parameters:**
- `IsoGridSquare` `square`
- `boolean` `crashed`

**Returns:** `boolean`

### public boolean checkSquareForVehicleKeySpotContainer(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean checkSquareForVehicleKeySpotZombie(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public void forceVehicleDistribution(String distribution)

**Parameters:**
- `String` `distribution`

**Returns:** `void`

### public boolean canLightSmoke(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public ArrayList<String> getZombieType()

**Returns:** `ArrayList<String>`

### public String getRandomZombieType()

**Returns:** `String`

### public boolean hasZombieType(String outfit)

**Parameters:**
- `String` `outfit`

**Returns:** `boolean`

### public String getFirstZombieType()

**Returns:** `String`

### public boolean notKillCrops()

**Returns:** `boolean`

### public boolean hasLighter()

**Returns:** `boolean`

### public boolean leftSideFuel()

**Returns:** `boolean`

### public boolean rightSideFuel()

**Returns:** `boolean`

### public boolean isCreated()

**Returns:** `boolean`

### public float getTotalContainerItemWeight()

**Returns:** `float`

### public boolean isSirening()

**Returns:** `boolean`

### public org.joml.Vector3f getIntersectPoint(org.joml.Vector3f start,
org.joml.Vector3f end,
org.joml.Vector3f result)

**Parameters:**
- `org.joml.Vector3f` `start`
- `org.joml.Vector3f` `end`
- `org.joml.Vector3f` `result`

**Returns:** `org.joml.Vector3f`

### public VehiclePart getNearestVehiclePart(float x,
float y,
float z,
boolean useDestroyed)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `boolean` `useDestroyed`

**Returns:** `VehiclePart`

### public boolean isInArea(String areaId,
org.joml.Vector3f chr)

**Parameters:**
- `String` `areaId`
- `org.joml.Vector3f` `chr`

**Returns:** `boolean`

### public boolean processHit(IsoGameCharacter isoGameCharacter,
HandWeapon weapon,
float damage)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `HandWeapon` `weapon`
- `float` `damage`

**Returns:** `boolean`

### public boolean canAddAnimalInTrailer(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `boolean`

### public boolean canAddAnimalInTrailer(IsoDeadBody animal)

**Parameters:**
- `IsoDeadBody` `animal`

**Returns:** `boolean`

### public boolean isBurnt()

**Returns:** `boolean`

### public boolean isSmashed()

**Returns:** `boolean`

### public boolean isBurntOrSmashed()

**Returns:** `boolean`

### public float getSpecialKeyRingChance()

**Returns:** `float`

### public boolean hasLiveBattery()

**Returns:** `boolean`

### public void setDebugPhysicsRender(boolean addedToWorld)

**Parameters:**
- `boolean` `addedToWorld`

**Returns:** `void`

### public boolean testTouchingVehicle(IsoGameCharacter isoGameCharacter,
RagdollController ragdollController)

**Parameters:**
- `IsoGameCharacter` `isoGameCharacter`
- `RagdollController` `ragdollController`

**Returns:** `boolean`

### public IsoGameCharacter getCurrentOrLastKnownDriver()

**Returns:** `IsoGameCharacter`

### public IsoGridSquare getSquareForArea(String areaId)

**Parameters:**
- `String` `areaId`

**Returns:** `IsoGridSquare`

### public void partsClear()

**Returns:** `void`

### public float getThrottle()

**Returns:** `float`

### public boolean validateHitVehicleDistance(float playerX,
float playerY)

**Parameters:**
- `float` `playerX`
- `float` `playerY`

**Returns:** `boolean`

### public void setLocked(boolean locked)

**Parameters:**
- `boolean` `locked`

**Returns:** `void`

### public boolean getNameCoordForPlayer(IsoGameCharacter player,
float zoom,
Vector2 coord)

**Parameters:**
- `IsoGameCharacter` `player`
- `float` `zoom`
- `Vector2` `coord`

**Returns:** `boolean`

### public TextDrawHorizontal getNameAlignmentForPlayer(IsoGameCharacter player)

**Parameters:**
- `IsoGameCharacter` `player`

**Returns:** `TextDrawHorizontal`

### public String getNamePrefixForPlayer(IsoGameCharacter player)

**Parameters:**
- `IsoGameCharacter` `player`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\BaseVehicle.html`*
