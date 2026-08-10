---
title: zombie.core.skinnedmodel.IGrappleableWrapper
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.skinnedmodel
---

# zombie.core.skinnedmodel.IGrappleableWrapper

`public interface IGrappleableWrapper extends IGrappleable`

**Kind:** interface · **Package:** zombie.core.skinnedmodel

## Methods

### IGrappleable getWrappedGrappleable()

**Returns:** `IGrappleable`

### default boolean isDoGrapple()

**Returns:** `boolean`

### default void setDoGrapple(boolean doGrapple)

**Parameters:**
- `boolean` `doGrapple`

**Returns:** `void`

### default boolean isDoContinueGrapple()

**Returns:** `boolean`

### default void setDoContinueGrapple(boolean doContinueGrapple)

**Parameters:**
- `boolean` `doContinueGrapple`

**Returns:** `void`

### default void Grappled(IGrappleable grappler,
HandWeapon weapon,
float grappleEffectiveness,
String grappleType)

**Parameters:**
- `IGrappleable` `grappler`
- `HandWeapon` `weapon`
- `float` `grappleEffectiveness`
- `String` `grappleType`

**Returns:** `void`

### default void RejectGrapple(IGrappleable grappleRejector)

**Parameters:**
- `IGrappleable` `grappleRejector`

**Returns:** `void`

### default void AcceptGrapple(IGrappleable grappleAcceptor,
String grappleType)

**Parameters:**
- `IGrappleable` `grappleAcceptor`
- `String` `grappleType`

**Returns:** `void`

### default void LetGoOfGrappled(String grappleResult)

**Parameters:**
- `String` `grappleResult`

**Returns:** `void`

### default void GrapplerLetGo(IGrappleable grappler,
String grappleResult)

**Parameters:**
- `IGrappleable` `grappler`
- `String` `grappleResult`

**Returns:** `void`

### default GrappleOffsetBehaviour getGrappleOffsetBehaviour()

**Returns:** `GrappleOffsetBehaviour`

### default void setGrappleoffsetBehaviour(GrappleOffsetBehaviour newBehaviour)

**Parameters:**
- `GrappleOffsetBehaviour` `newBehaviour`

**Returns:** `void`

### default boolean isBeingGrappled()

**Returns:** `boolean`

### default boolean isBeingGrappledBy(IGrappleable grappledBy)

**Parameters:**
- `IGrappleable` `grappledBy`

**Returns:** `boolean`

### default IGrappleable getGrappledBy()

**Returns:** `IGrappleable`

### default String getGrappledByString()

**Returns:** `String`

### default String getGrappledByType()

**Returns:** `String`

### default boolean isGrappling()

**Returns:** `boolean`

### default boolean isGrapplingTarget(IGrappleable grapplingTarget)

**Parameters:**
- `IGrappleable` `grapplingTarget`

**Returns:** `boolean`

### default IGrappleable getGrapplingTarget()

**Returns:** `IGrappleable`

### default float getBearingToGrappledTarget()

**Returns:** `float`

### default float getBearingFromGrappledTarget()

**Returns:** `float`

### default String getSharedGrappleType()

**Returns:** `String`

### default void setSharedGrappleType(String sharedGrappleType)

**Parameters:**
- `String` `sharedGrappleType`

**Returns:** `void`

### default String getSharedGrappleAnimNode()

**Returns:** `String`

### default void setSharedGrappleAnimNode(String sharedGrappleAnimNode)

**Parameters:**
- `String` `sharedGrappleAnimNode`

**Returns:** `void`

### default float getSharedGrappleAnimTime()

**Returns:** `float`

### default float getSharedGrappleAnimFraction()

**Returns:** `float`

### default void setSharedGrappleAnimTime(float grappleAnimTime)

**Parameters:**
- `float` `grappleAnimTime`

**Returns:** `void`

### default void setSharedGrappleAnimFraction(float grappleAnimFraction)

**Parameters:**
- `float` `grappleAnimFraction`

**Returns:** `void`

### default String getGrappleResult()

**Returns:** `String`

### default void setGrappleResult(String grappleResult)

**Parameters:**
- `String` `grappleResult`

**Returns:** `void`

### default void setGrapplePosOffsetForward(float grappleOffsetForward)

**Parameters:**
- `float` `grappleOffsetForward`

**Returns:** `void`

### default float getGrappleRotOffsetYaw()

**Returns:** `float`

### default void setGrappleRotOffsetYaw(float grappleOffsetYaw)

**Parameters:**
- `float` `grappleOffsetYaw`

**Returns:** `void`

### default float getGrapplePosOffsetForward()

**Returns:** `float`

### default void setTargetAndCurrentDirection(float directionX,
float directionY)

**Parameters:**
- `float` `directionX`
- `float` `directionY`

**Returns:** `void`

### default org.joml.Vector3f getTargetGrapplePos(org.joml.Vector3f result)

**Parameters:**
- `org.joml.Vector3f` `result`

**Returns:** `org.joml.Vector3f`

### default Vector3 getTargetGrapplePos(Vector3 result)

**Parameters:**
- `Vector3` `result`

**Returns:** `Vector3`

### default void setTargetGrapplePos(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### default void setTargetGrappleRotation(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `void`

### default Vector2 getTargetGrappleRotation(Vector2 result)

**Parameters:**
- `Vector2` `result`

**Returns:** `Vector2`

### default org.joml.Vector3f getGrappleOffset(org.joml.Vector3f result)

**Parameters:**
- `org.joml.Vector3f` `result`

**Returns:** `org.joml.Vector3f`

### default Vector3 getGrappleOffset(Vector3 result)

**Parameters:**
- `Vector3` `result`

**Returns:** `Vector3`

### default void setGrappleDeferredOffset(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `void`

### default boolean canBeGrappled()

**Returns:** `boolean`

### default boolean isPerformingAnyGrappleAnimation()

**Returns:** `boolean`

### default boolean isPerformingGrappleGrabAnimation()

**Returns:** `boolean`

### default void setPerformingGrappleGrabAnimation(boolean grappleGrabAnim)

**Parameters:**
- `boolean` `grappleGrabAnim`

**Returns:** `void`

### default boolean isOnFloor()

**Returns:** `boolean`

### default void setOnFloor(boolean onFloor)

**Parameters:**
- `boolean` `onFloor`

**Returns:** `void`

### default void resetGrappleStateToDefault(String grappleResult)

**Parameters:**
- `String` `grappleResult`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\IGrappleableWrapper.html`*
