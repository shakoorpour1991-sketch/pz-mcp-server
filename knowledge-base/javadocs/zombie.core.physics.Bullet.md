---
title: zombie.core.physics.Bullet
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.physics
---

# zombie.core.physics.Bullet

`public class Bullet extends Object`

**Kind:** class · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- zombie.core.physics.Bullet

## Fields

### public static final byte TO_ADD_VEHICLE

### public static final byte TO_SCROLL_CHUNKMAP

### public static final byte TO_ACTIVATE_CHUNKMAP

### public static final byte TO_INIT_WORLD

### public static final byte TO_UPDATE_CHUNK

### public static final byte TO_DEBUG_DRAW_WORLD

### public static final byte TO_STEP_SIMULATION

### public static final byte TO_UPDATE_PLAYER_LIST

### public static final byte TO_END

### public static ByteBuffer cmdBuf

### public static final HashMap<String,Integer> physicsShapeNameToIndex

## Constructors

### public Bullet()

## Methods

### public static void init()

**Returns:** `void`

### public static void CatchToBullet(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public static String getPZBulletVersion()

**Returns:** `String`

### public static void initPZBullet()

**Returns:** `void`

### public static boolean isWorldInit()

**Returns:** `boolean`

### public static void initWorld(int var0,
int var1,
int var2,
int var3,
int var4,
int var5,
boolean var6)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`
- `int` `var4`
- `int` `var5`
- `boolean` `var6`

**Returns:** `void`

### public static void destroyWorld()

**Returns:** `void`

### public static void activateChunkMap(int var0,
int var1,
int var2,
int var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `void`

### public static void deactivateChunkMap(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void initWorld(int minCellX,
int minCellY,
int maxCellX,
int maxCellY,
int offsetX,
int offsetY,
int wx,
int wy,
int chunkGridWidth)

**Parameters:**
- `int` `minCellX`
- `int` `minCellY`
- `int` `maxCellX`
- `int` `maxCellY`
- `int` `offsetX`
- `int` `offsetY`
- `int` `wx`
- `int` `wy`
- `int` `chunkGridWidth`

**Returns:** `void`

### public static void startLoadingPhysicsMeshes()

**Returns:** `void`

### public static void initPhysicsMeshes()

**Returns:** `void`

### public static float[] transformPhysicsMeshPoints(org.joml.Vector3f translate,
org.joml.Vector3f rotate,
float scale,
org.joml.Matrix4f meshXfrm,
float[] points,
boolean bSwapYZ)

**Parameters:**
- `org.joml.Vector3f` `translate`
- `org.joml.Vector3f` `rotate`
- `float` `scale`
- `org.joml.Matrix4f` `meshXfrm`
- `float[]` `points`
- `boolean` `bSwapYZ`

**Returns:** `float[]`

### public static float[] transformPhysicsMeshPoints(org.joml.Matrix4f xfrm,
float[] points,
boolean bSwapYZ)

**Parameters:**
- `org.joml.Matrix4f` `xfrm`
- `float[]` `points`
- `boolean` `bSwapYZ`

**Returns:** `float[]`

### public static org.joml.Matrix4f translationRotateScale(org.joml.Vector3f translate,
org.joml.Vector3f rotate,
float scale,
org.joml.Matrix4f result)

**Parameters:**
- `org.joml.Vector3f` `translate`
- `org.joml.Vector3f` `rotate`
- `float` `scale`
- `org.joml.Matrix4f` `result`

**Returns:** `org.joml.Matrix4f`

### public static org.joml.Matrix4f postMultiplyTranslateRotateScale(org.joml.Vector3f translate,
org.joml.Vector3f rotate,
float scale,
org.joml.Matrix4f result)

**Parameters:**
- `org.joml.Vector3f` `translate`
- `org.joml.Vector3f` `rotate`
- `float` `scale`
- `org.joml.Matrix4f` `result`

**Returns:** `org.joml.Matrix4f`

### public static void updatePlayerList(ArrayList<IsoPlayer> players)

**Parameters:**
- `ArrayList<IsoPlayer>` `players`

**Returns:** `void`

### public static void beginUpdateChunk(IsoChunk chunk,
int level)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `level`

**Returns:** `void`

### public static void updateChunk(int x,
int y,
int numShapes,
byte[] shapes)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `numShapes`
- `byte[]` `shapes`

**Returns:** `void`

### public static void endUpdateChunk()

**Returns:** `void`

### public static void scrollChunkMap(int var0,
int var1)

**Parameters:**
- `int` `var0`
- `int` `var1`

**Returns:** `void`

### public static void scrollChunkMapLeft(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static void scrollChunkMapRight(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static void scrollChunkMapUp(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static void scrollChunkMapDown(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public static void setVehicleActive(BaseVehicle vehicle,
boolean isActive)

**Parameters:**
- `BaseVehicle` `vehicle`
- `boolean` `isActive`

**Returns:** `void`

### public static int setVehicleStatic(BaseVehicle vehicle,
boolean isStatic)

**Parameters:**
- `BaseVehicle` `vehicle`
- `boolean` `isStatic`

**Returns:** `int`

### public static boolean updatePhysicsForLevelIfNeeded(int wx,
int wy,
int level)

**Parameters:**
- `int` `wx`
- `int` `wy`
- `int` `level`

**Returns:** `boolean`

### public static void onVehicleConstraintImpulse(int constraintID,
int vidA,
int vidB,
float impulse)

**Parameters:**
- `int` `constraintID`
- `int` `vidA`
- `int` `vidB`
- `float` `impulse`

**Returns:** `void`

### public static void setChunkMinMaxLevel(int var0,
int var1,
int var2,
int var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `void`

### public static void addVehicle(int var0,
float var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7,
String var8)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`
- `String` `var8`

**Returns:** `void`

### public static void removeVehicle(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void controlVehicle(int var0,
float var1,
float var2,
float var3)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`

**Returns:** `void`

### public static void setVehicleActive(int var0,
boolean var1)

**Parameters:**
- `int` `var0`
- `boolean` `var1`

**Returns:** `void`

### public static void applyCentralForceToVehicle(int var0,
float var1,
float var2,
float var3)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`

**Returns:** `void`

### public static void applyTorqueToVehicle(int var0,
float var1,
float var2,
float var3)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`

**Returns:** `void`

### public static void teleportVehicle(int var0,
float var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`

**Returns:** `void`

### public static void setTireInflation(int var0,
int var1,
float var2)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `float` `var2`

**Returns:** `void`

### public static void setTireRemoved(int var0,
int var1,
boolean var2)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `boolean` `var2`

**Returns:** `void`

### public static void stepSimulation(float var0,
int var1,
float var2)

**Parameters:**
- `float` `var0`
- `int` `var1`
- `float` `var2`

**Returns:** `void`

### public static int getVehicleCount()

**Returns:** `int`

### public static int getVehiclePhysics(int var0,
float[] var1)

**Parameters:**
- `int` `var0`
- `float[]` `var1`

**Returns:** `int`

### public static int getOwnVehiclePhysics(int var0,
float[] var1)

**Parameters:**
- `int` `var0`
- `float[]` `var1`

**Returns:** `int`

### public static int setOwnVehiclePhysics(int var0,
float[] var1,
boolean var2)

**Parameters:**
- `int` `var0`
- `float[]` `var1`
- `boolean` `var2`

**Returns:** `int`

### public static int setVehicleParams(int var0,
float[] var1)

**Parameters:**
- `int` `var0`
- `float[]` `var1`

**Returns:** `int`

### public static int setVehicleMass(int var0,
float var1)

**Parameters:**
- `int` `var0`
- `float` `var1`

**Returns:** `int`

### public static int getObjectPhysics(float[] var0)

**Parameters:**
- `float[]` `var0`

**Returns:** `int`

### public static void createServerCell(int var0,
int var1)

**Parameters:**
- `int` `var0`
- `int` `var1`

**Returns:** `void`

### public static void removeServerCell(int var0,
int var1)

**Parameters:**
- `int` `var0`
- `int` `var1`

**Returns:** `void`

### public static int addPhysicsObject(float var0,
float var1)

**Parameters:**
- `float` `var0`
- `float` `var1`

**Returns:** `int`

### public static void defineVehicleScript(String var0,
float[] var1)

**Parameters:**
- `String` `var0`
- `float[]` `var1`

**Returns:** `void`

### public static void defineVehiclePhysicsMesh(String var0,
int var1,
float[] var2)

**Parameters:**
- `String` `var0`
- `int` `var1`
- `float[]` `var2`

**Returns:** `void`

### public static void setVehicleVelocityMultiplier(int var0,
float var1,
float var2)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`

**Returns:** `void`

### public static int setVehicleStatic(int var0,
boolean var1)

**Parameters:**
- `int` `var0`
- `boolean` `var1`

**Returns:** `int`

### public static int addHingeConstraint(int var0,
int var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`

**Returns:** `int`

### public static int addPointConstraint(int var0,
int var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`

**Returns:** `int`

### public static int add6DofConstraint(int var0,
int var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7,
float var8,
float var9,
float var10,
float var11,
float var12,
float var13,
float var14,
float var15,
float var16,
float var17,
float var18,
float var19)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`
- `float` `var8`
- `float` `var9`
- `float` `var10`
- `float` `var11`
- `float` `var12`
- `float` `var13`
- `float` `var14`
- `float` `var15`
- `float` `var16`
- `float` `var17`
- `float` `var18`
- `float` `var19`

**Returns:** `int`

### public static int addRopeConstraint(int var0,
int var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7,
float var8)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`
- `float` `var8`

**Returns:** `int`

### public static void setConstraintERP(int var0,
float var1,
int var2)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `int` `var2`

**Returns:** `void`

### public static void removeConstraint(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void clearPhysicsMeshes()

**Returns:** `void`

### public static void definePhysicsMesh(int var0,
boolean var1,
float[] var2)

**Parameters:**
- `int` `var0`
- `boolean` `var1`
- `float[]` `var2`

**Returns:** `void`

### public static void initializeRagdollPose(int var0,
float[] var1,
float var2,
float var3,
float var4,
float var5)

**Parameters:**
- `int` `var0`
- `float[]` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`

**Returns:** `void`

### public static void initializeRagdollSkeleton(int var0,
int[] var1)

**Parameters:**
- `int` `var0`
- `int[]` `var1`

**Returns:** `void`

### public static void addRagdoll(int var0,
float var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`

**Returns:** `void`

### public static void addRagdoll(int id,
org.lwjgl.util.vector.Vector3f worldPosition,
org.lwjgl.util.vector.Quaternion worldRotation)

**Parameters:**
- `int` `id`
- `org.lwjgl.util.vector.Vector3f` `worldPosition`
- `org.lwjgl.util.vector.Quaternion` `worldRotation`

**Returns:** `void`

### public static void removeRagdoll(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static int simulateRagdoll(int var0,
float[] var1)

**Parameters:**
- `int` `var0`
- `float[]` `var1`

**Returns:** `int`

### public static int simulateRagdollWithRigidBodyOutput(int var0,
float[] var1,
float[] var2)

**Parameters:**
- `int` `var0`
- `float[]` `var1`
- `float[]` `var2`

**Returns:** `int`

### public static int updateSkeletonFromNetworkPhysics(int var0,
float[] var1,
float[] var2)

**Parameters:**
- `int` `var0`
- `float[]` `var1`
- `float[]` `var2`

**Returns:** `int`

### public static void getCorrectedWorldSpace(int var0,
float[] var1)

**Parameters:**
- `int` `var0`
- `float[]` `var1`

**Returns:** `void`

### public static void setRagdollLocalTransformRotation(int var0,
float var1,
float var2,
float var3,
float var4)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`

**Returns:** `void`

### public static void updateRagdoll(int var0,
float var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`

**Returns:** `void`

### public static void updateRagdoll(int id,
org.lwjgl.util.vector.Vector3f worldPosition,
org.lwjgl.util.vector.Quaternion worldRotation)

**Parameters:**
- `int` `id`
- `org.lwjgl.util.vector.Vector3f` `worldPosition`
- `org.lwjgl.util.vector.Quaternion` `worldRotation`

**Returns:** `void`

### public static void updateRagdollSkeletonTransforms(int var0,
int var1,
float[] var2)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `float[]` `var2`

**Returns:** `void`

### public static void updateRagdollSkeletonPreviousTransforms(int var0,
int var1,
float var2,
float[] var3)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `float` `var2`
- `float[]` `var3`

**Returns:** `void`

### public static int getRagdollSimulationState(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `int`

### public static void resetSkeletonPose(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void setRagdollActive(int var0,
boolean var1)

**Parameters:**
- `int` `var0`
- `boolean` `var1`

**Returns:** `void`

### public static void drawDebugSingleBone(int var0,
boolean var1)

**Parameters:**
- `int` `var0`
- `boolean` `var1`

**Returns:** `void`

### public static void drawDebugRagdollSkeleton(int var0,
boolean var1,
boolean var2)

**Parameters:**
- `int` `var0`
- `boolean` `var1`
- `boolean` `var2`

**Returns:** `void`

### public static void drawDebugRagdollBodyParts(int var0,
boolean var1,
boolean var2)

**Parameters:**
- `int` `var0`
- `boolean` `var1`
- `boolean` `var2`

**Returns:** `void`

### public static void highlightRagdollBodyPart(int var0,
int var1)

**Parameters:**
- `int` `var0`
- `int` `var1`

**Returns:** `void`

### public static void applyForce(int var0,
int var1,
float[] var2)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `float[]` `var2`

**Returns:** `void`

### public static void applyImpulse(int var0,
int var1,
float[] var2)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `float[]` `var2`

**Returns:** `void`

### public static void detachConstraint(int var0,
int var1)

**Parameters:**
- `int` `var0`
- `int` `var1`

**Returns:** `void`

### public static void updateBallistics(int var0,
float var1,
float var2,
float var3)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`

**Returns:** `void`

### public static void updateBallisticsMuzzleAimDirection(int var0,
float var1,
float var2,
float var3)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`

**Returns:** `void`

### public static void setBallisticsSize(int var0,
float var1)

**Parameters:**
- `int` `var0`
- `float` `var1`

**Returns:** `void`

### public static void setBallisticsColor(int var0,
float var1,
float var2,
float var3)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`

**Returns:** `void`

### public static int getBallisticsTargets(int var0,
float var1,
int var2,
float[] var3)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `int` `var2`
- `float[]` `var3`

**Returns:** `int`

### public static int getBallisticsTargetsSpreadData(int var0,
float var1,
float var2,
float var3,
int var4,
int var5,
float[] var6)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `int` `var4`
- `int` `var5`
- `float[]` `var6`

**Returns:** `int`

### public static int getBallisticsCameraTargets(int var0,
float var1,
int var2,
boolean var3,
float[] var4)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `int` `var2`
- `boolean` `var3`
- `float[]` `var4`

**Returns:** `int`

### public static void setBallisticsRange(int var0,
float var1)

**Parameters:**
- `int` `var0`
- `float` `var1`

**Returns:** `void`

### public static void removeBallistics(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `void`

### public static void updateBallisticsAimReticlePosition(int var0,
float var1,
float var2,
float var3)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`

**Returns:** `void`

### public static void updateBallisticsAimReticleRotation(int var0,
float var1,
float var2,
float var3,
float var4)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`

**Returns:** `void`

### public static void updateBallisticsAimReticleQuaternion(int var0,
float var1,
float var2,
float var3,
float var4)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`

**Returns:** `void`

### public static void updateBallisticsAimReticleRotate(int var0,
float var1,
float var2,
float var3,
float var4)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`

**Returns:** `void`

### public static void updateBallisticsTargetSkeleton(int var0,
int var1,
float[] var2)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `float[]` `var2`

**Returns:** `void`

### public static void updateBallisticsTarget(int var0,
float var1,
float var2,
float var3,
float var4,
float var5,
float var6,
float var7,
boolean var8)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`
- `float` `var4`
- `float` `var5`
- `float` `var6`
- `float` `var7`
- `boolean` `var8`

**Returns:** `void`

### public static void setBallisticsTargetAxis(int var0,
float var1,
float var2,
float var3)

**Parameters:**
- `int` `var0`
- `float` `var1`
- `float` `var2`
- `float` `var3`

**Returns:** `void`

### public static int addBallisticsTarget(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `int`

### public static int removeBallisticsTarget(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `int`

### public static int getTargetedBodyPart(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `int`

### public static void setRagdollMass(float var0)

**Parameters:**
- `float` `var0`

**Returns:** `void`

### public static boolean checkWheelCollision(int var0,
int var1,
int var2)

**Parameters:**
- `int` `var0`
- `int` `var1`
- `int` `var2`

**Returns:** `boolean`

### public static boolean defineRagdollConstraints(float[] var0,
boolean var1)

**Parameters:**
- `float[]` `var0`
- `boolean` `var1`

**Returns:** `boolean`

### public static boolean defineRagdollAnchors(float[] var0,
boolean var1)

**Parameters:**
- `float[]` `var0`
- `boolean` `var1`

**Returns:** `boolean`

### public static boolean defineRagdollBodyPartInfo(float[] var0,
boolean var1)

**Parameters:**
- `float[]` `var0`
- `boolean` `var1`

**Returns:** `boolean`

### public static boolean defineRagdollBodyDynamics(float[] var0,
boolean var1)

**Parameters:**
- `float[]` `var0`
- `boolean` `var1`

**Returns:** `boolean`

### public static boolean setRagdollBodyDynamics(int var0,
float[] var1)

**Parameters:**
- `int` `var0`
- `float[]` `var1`

**Returns:** `boolean`

### public static boolean resetRagdollBodyDynamics(int var0)

**Parameters:**
- `int` `var0`

**Returns:** `boolean`

### public static void setBallisticsTargetAdjustingShapeScale(float var0,
float var1,
float var2)

**Parameters:**
- `float` `var0`
- `float` `var1`
- `float` `var2`

**Returns:** `void`

### public static void setBallisticsTargetAllPartsColor(float var0,
float var1,
float var2)

**Parameters:**
- `float` `var0`
- `float` `var1`
- `float` `var2`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\Bullet.html`*
