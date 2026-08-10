---
title: zombie.core.physics.RagdollController
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.physics
---

# zombie.core.physics.RagdollController

`public final class RagdollController extends PooledObject`

**Kind:** class · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.core.physics.RagdollController

## Fields

### public static final float MovementThreshold

### public static final float MovementThresholdTime

### public static float vehicleCollisionFriction

## Methods

### public static RagdollController alloc()

**Returns:** `RagdollController`

### public RagdollStateData getRagdollStateData()

**Returns:** `RagdollStateData`

### public boolean isIsoPlayer()

**Returns:** `boolean`

### public boolean isSimulationSleeping()

**Returns:** `boolean`

### public boolean isSimulationActive()

**Returns:** `boolean`

### public IsoGameCharacter getGameCharacterObject()

**Returns:** `IsoGameCharacter`

### public void setGameCharacterObject(IsoGameCharacter gameCharacterObject)

**Parameters:**
- `IsoGameCharacter` `gameCharacterObject`

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public RagdollControllerDebugRenderer.DebugDrawSettings getDebugDrawSettings()

**Returns:** `RagdollControllerDebugRenderer.DebugDrawSettings`

### public boolean isInitialized()

**Returns:** `boolean`

### public boolean isFirstFrame()

**Returns:** `boolean`

### public boolean isUpright()

**Returns:** `boolean`

### public boolean isOnBack()

**Returns:** `boolean`

### public Vector3 getHeadPosition(Vector3 headPosition)

**Parameters:**
- `Vector3` `headPosition`

**Returns:** `Vector3`

### public Vector3 getPelvisPosition(Vector3 pelvisPosition)

**Parameters:**
- `Vector3` `pelvisPosition`

**Returns:** `Vector3`

### public float getPelvisPositionX()

**Returns:** `float`

### public float getPelvisPositionY()

**Returns:** `float`

### public float getPelvisPositionZ()

**Returns:** `float`

### public Vector3 getDesiredCharacterPosition(Vector3 desiredCharacterPosition)

**Parameters:**
- `Vector3` `desiredCharacterPosition`

**Returns:** `Vector3`

### public float getDesiredCharacterPositionX()

**Returns:** `float`

### public float getDesiredCharacterPositionY()

**Returns:** `float`

### public float getDesiredCharacterPositionZ()

**Returns:** `float`

### public void reinitialize()

**Returns:** `void`

### public static org.lwjgl.util.vector.Vector3f pzSpaceToBulletSpace(org.lwjgl.util.vector.Vector3f result)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `result`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public void setActive(boolean active)

**Parameters:**
- `boolean` `active`

**Returns:** `void`

### public void addToWorld()

**Returns:** `void`

### public void updateRagdollSkeleton()

**Returns:** `void`

### public void update(float deltaT,
org.lwjgl.util.vector.Vector3f ragdollWorldPosition,
org.lwjgl.util.vector.Quaternion ragdollWorldRotation)

**Parameters:**
- `float` `deltaT`
- `org.lwjgl.util.vector.Vector3f` `ragdollWorldPosition`
- `org.lwjgl.util.vector.Quaternion` `ragdollWorldRotation`

**Returns:** `void`

### public void postUpdate(float deltaT)

**Parameters:**
- `float` `deltaT`

**Returns:** `void`

### public void debugRender()

**Returns:** `void`

### public void simulateRagdoll(int id,
org.lwjgl.util.vector.Vector3f ragdollWorldPosition,
org.lwjgl.util.vector.Vector3f ragdollWorldPositionPZBullet,
org.lwjgl.util.vector.Quaternion ragdollWorldRotationPZBullet,
float[] skeletonBuffer,
float[] rigidBodyBuffer)

**Parameters:**
- `int` `id`
- `org.lwjgl.util.vector.Vector3f` `ragdollWorldPosition`
- `org.lwjgl.util.vector.Vector3f` `ragdollWorldPositionPZBullet`
- `org.lwjgl.util.vector.Quaternion` `ragdollWorldRotationPZBullet`
- `float[]` `skeletonBuffer`
- `float[]` `rigidBodyBuffer`

**Returns:** `void`

### public static org.lwjgl.util.vector.Quaternion getRagdollLocalRotation(org.lwjgl.util.vector.Quaternion result)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `result`

**Returns:** `org.lwjgl.util.vector.Quaternion`

### public void updateSimulationStateID()

**Returns:** `void`

### public void onReleased()

**Returns:** `void`

### public int getNumberOfBones()

**Returns:** `int`

### public AnimationPlayer getAnimationPlayer()

**Returns:** `AnimationPlayer`

### public boolean isSimulationDirectionCalculated()

**Returns:** `boolean`

### public Vector2 getCalculatedSimulationDirection(Vector2 result)

**Parameters:**
- `Vector2` `result`

**Returns:** `Vector2`

### public float getCalculatedSimulationDirectionAngle()

**Returns:** `float`

### public float getSimulationRenderedAngle()

**Returns:** `float`

### public float getSimulationCharacterForwardAngle()

**Returns:** `float`

### public static int getNumberOfActiveSimulations()

**Returns:** `int`

### public static boolean checkForActiveRagdoll(IsoGridSquare isoGridSquare)

**Parameters:**
- `IsoGridSquare` `isoGridSquare`

**Returns:** `boolean`

### public void vehicleCollision(IsoZombie isoZombie,
BaseVehicle collidedVehicle)

**Parameters:**
- `IsoZombie` `isoZombie`
- `BaseVehicle` `collidedVehicle`

**Returns:** `void`

### public static void setVehicleRagdollBodyDynamics(RagdollBodyDynamics ragdollBodyDynamics)

**Parameters:**
- `RagdollBodyDynamics` `ragdollBodyDynamics`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\RagdollController.html`*
