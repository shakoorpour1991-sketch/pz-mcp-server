---
title: zombie.core.skinnedmodel.BaseGrappleable
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel
---

# zombie.core.skinnedmodel.BaseGrappleable

`public class BaseGrappleable extends Object implements IGrappleable`

**Kind:** class · **Package:** zombie.core.skinnedmodel

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.BaseGrappleable

## Constructors

### public BaseGrappleable()

### public BaseGrappleable(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

### public BaseGrappleable(IsoDeadBody deadBody)

**Parameters:**
- `IsoDeadBody` `deadBody`

## Methods

### public IAnimatable getAnimatable()

**Returns:** `IAnimatable`

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

### public void RejectGrapple(IGrappleable grappleRejector)

**Parameters:**
- `IGrappleable` `grappleRejector`

**Returns:** `void`

### public void AcceptGrapple(IGrappleable grappleAcceptor,
String grappleType)

**Parameters:**
- `IGrappleable` `grappleAcceptor`
- `String` `grappleType`

**Returns:** `void`

### public void LetGoOfGrappled(String grappleResult)

**Parameters:**
- `String` `grappleResult`

**Returns:** `void`

### public void GrapplerLetGo(IGrappleable grappler,
String grappleResult)

**Parameters:**
- `IGrappleable` `grappler`
- `String` `grappleResult`

**Returns:** `void`

### public void resetGrappleStateToDefault(String grappleResult)

**Parameters:**
- `String` `grappleResult`

**Returns:** `void`

### public boolean isBeingGrappled()

**Returns:** `boolean`

### public boolean isBeingGrappledBy(IGrappleable grappledBy)

**Parameters:**
- `IGrappleable` `grappledBy`

**Returns:** `boolean`

### public Vector2 getAnimForwardDirection(Vector2 forwardDirection)

**Parameters:**
- `Vector2` `forwardDirection`

**Returns:** `Vector2`

### public org.joml.Vector3f getTargetGrapplePos(org.joml.Vector3f result)

**Parameters:**
- `org.joml.Vector3f` `result`

**Returns:** `org.joml.Vector3f`

### public Vector3 getTargetGrapplePos(Vector3 result)

**Parameters:**
- `Vector3` `result`

**Returns:** `Vector3`

### public void setTargetGrapplePos(org.joml.Vector3f grapplePos)

**Parameters:**
- `org.joml.Vector3f` `grapplePos`

**Returns:** `void`

### public void setTargetGrapplePos(Vector3 grapplePos)

**Parameters:**
- `Vector3` `grapplePos`

**Returns:** `void`

### public Vector2 getTargetGrappleRotation(Vector2 result)

**Parameters:**
- `Vector2` `result`

**Returns:** `Vector2`

### public void setTargetGrappleRotation(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### public void setTargetGrapplePos(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public void setGrappleDeferredOffset(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public org.joml.Vector3f getGrappleOffset(org.joml.Vector3f result)

**Parameters:**
- `org.joml.Vector3f` `result`

**Returns:** `org.joml.Vector3f`

### public Vector3 getGrappleOffset(Vector3 result)

**Parameters:**
- `Vector3` `result`

**Returns:** `Vector3`

### public void setForwardDirection(float directionX,
float directionY)

**Parameters:**
- `float` `directionX`
- `float` `directionY`

**Returns:** `void`

### public void setTargetAndCurrentDirection(float directionX,
float directionY)

**Parameters:**
- `float` `directionX`
- `float` `directionY`

**Returns:** `void`

### public Vector3 getPosition(Vector3 position)

**Parameters:**
- `Vector3` `position`

**Returns:** `Vector3`

### public org.lwjgl.util.vector.Vector3f getPosition(org.lwjgl.util.vector.Vector3f position)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `position`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public void setPosition(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### public IGrappleable getGrappledBy()

**Returns:** `IGrappleable`

### public String getGrappledByString()

**Returns:** `String`

### public String getGrappledByType()

**Returns:** `String`

### public boolean isGrappling()

**Returns:** `boolean`

### public boolean isGrapplingTarget(IGrappleable grapplingTarget)

**Parameters:**
- `IGrappleable` `grapplingTarget`

**Returns:** `boolean`

### public IGrappleable getGrapplingTarget()

**Returns:** `IGrappleable`

### public float getBearingToGrappledTarget()

**Returns:** `float`

### public float getBearingFromGrappledTarget()

**Returns:** `float`

### public String getSharedGrappleType()

**Returns:** `String`

### public void setSharedGrappleType(String sharedGrappleType)

**Parameters:**
- `String` `sharedGrappleType`

**Returns:** `void`

### public String getSharedGrappleAnimNode()

**Returns:** `String`

### public void setSharedGrappleAnimNode(String sharedGrappleAnimNode)

**Parameters:**
- `String` `sharedGrappleAnimNode`

**Returns:** `void`

### public float getSharedGrappleAnimTime()

**Returns:** `float`

### public float getSharedGrappleAnimFraction()

**Returns:** `float`

### public void setSharedGrappleAnimTime(float grappleAnimTime)

**Parameters:**
- `float` `grappleAnimTime`

**Returns:** `void`

### public void setSharedGrappleAnimFraction(float grappleAnimFraction)

**Parameters:**
- `float` `grappleAnimFraction`

**Returns:** `void`

### public String getGrappleResult()

**Returns:** `String`

### public void setGrappleResult(String grappleResult)

**Parameters:**
- `String` `grappleResult`

**Returns:** `void`

### public IGrappleable getParentGrappleable()

**Returns:** `IGrappleable`

### public boolean canBeGrappled()

**Returns:** `boolean`

### public void setGrapplePosOffsetForward(float grappleOffsetForward)

**Parameters:**
- `float` `grappleOffsetForward`

**Returns:** `void`

### public float getGrapplePosOffsetForward()

**Returns:** `float`

### public void setGrappleRotOffsetYaw(float grappleOffsetYaw)

**Parameters:**
- `float` `grappleOffsetYaw`

**Returns:** `void`

### public float getGrappleRotOffsetYaw()

**Returns:** `float`

### public GrappleOffsetBehaviour getGrappleOffsetBehaviour()

**Returns:** `GrappleOffsetBehaviour`

### public void setGrappleoffsetBehaviour(GrappleOffsetBehaviour newBehaviour)

**Parameters:**
- `GrappleOffsetBehaviour` `newBehaviour`

**Returns:** `void`

### public boolean isDoGrapple()

**Returns:** `boolean`

### public boolean isPickingUpBody()

**Returns:** `boolean`

### public boolean isPuttingDownBody()

**Returns:** `boolean`

### public void setDoGrapple(boolean doGrapple)

**Parameters:**
- `boolean` `doGrapple`

**Returns:** `void`

### public boolean isDoContinueGrapple()

**Returns:** `boolean`

### public void setDoContinueGrapple(boolean doContinueGrapple)

**Parameters:**
- `boolean` `doContinueGrapple`

**Returns:** `void`

### public boolean isPerformingAnyGrappleAnimation()

**Returns:** `boolean`

### public boolean isPerformingGrappleGrabAnimation()

**Returns:** `boolean`

### public void setPerformingGrappleGrabAnimation(boolean grappleGrabAnim)

**Parameters:**
- `boolean` `grappleGrabAnim`

**Returns:** `void`

### public boolean isPerformingGrappleAnimation()

**Returns:** `boolean`

### public boolean isOnFloor()

**Returns:** `boolean`

### public void setOnFloor(boolean onFloor)

**Parameters:**
- `boolean` `onFloor`

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

### public void setOnGrappledBeginCallback(Invokers.Params0.ICallback onGrappleBegin)

**Parameters:**
- `Invokers.Params0.ICallback` `onGrappleBegin`

**Returns:** `void`

### public void setOnGrappledEndCallback(Invokers.Params0.ICallback onGrappleBegin)

**Parameters:**
- `Invokers.Params0.ICallback` `onGrappleBegin`

**Returns:** `void`

### public static void RegisterGrappleVariables(IAnimationVariableCallbackMap variableMap,
IGrappleable grappleable)

**Parameters:**
- `IAnimationVariableCallbackMap` `variableMap`
- `IGrappleable` `grappleable`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\BaseGrappleable.html`*
