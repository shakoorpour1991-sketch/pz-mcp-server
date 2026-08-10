---
title: zombie.core.skinnedmodel.IGrappleable
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.skinnedmodel
---

# zombie.core.skinnedmodel.IGrappleable

`public interface IGrappleable`

**Kind:** interface · **Package:** zombie.core.skinnedmodel

## Methods

### void Grappled(IGrappleable arg0,
HandWeapon arg1,
float arg2,
String arg3)

**Parameters:**
- `IGrappleable` `arg0`
- `HandWeapon` `arg1`
- `float` `arg2`
- `String` `arg3`

**Returns:** `void`

### void AcceptGrapple(IGrappleable arg0,
String arg1)

**Parameters:**
- `IGrappleable` `arg0`
- `String` `arg1`

**Returns:** `void`

### void RejectGrapple(IGrappleable arg0)

**Parameters:**
- `IGrappleable` `arg0`

**Returns:** `void`

### void LetGoOfGrappled(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `void`

### void GrapplerLetGo(IGrappleable arg0,
String arg1)

**Parameters:**
- `IGrappleable` `arg0`
- `String` `arg1`

**Returns:** `void`

### GrappleOffsetBehaviour getGrappleOffsetBehaviour()

**Returns:** `GrappleOffsetBehaviour`

### void setGrappleoffsetBehaviour(GrappleOffsetBehaviour arg0)

**Parameters:**
- `GrappleOffsetBehaviour` `arg0`

**Returns:** `void`

### boolean isDoGrapple()

**Returns:** `boolean`

### void setDoGrapple(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `void`

### default void setDoGrappleLetGo()

**Returns:** `void`

### IAnimatable getAnimatable()

**Returns:** `IAnimatable`

### static IAnimatable getAnimatable(IGrappleable grappleable)

**Parameters:**
- `IGrappleable` `grappleable`

**Returns:** `IAnimatable`

### boolean isDoContinueGrapple()

**Returns:** `boolean`

### void setDoContinueGrapple(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `void`

### IGrappleable getGrappledBy()

**Returns:** `IGrappleable`

### String getGrappledByString()

**Returns:** `String`

### String getGrappledByType()

**Returns:** `String`

### boolean isGrappling()

**Returns:** `boolean`

### boolean isBeingGrappled()

**Returns:** `boolean`

### boolean isBeingGrappledBy(IGrappleable arg0)

**Parameters:**
- `IGrappleable` `arg0`

**Returns:** `boolean`

### Vector2 getAnimForwardDirection(Vector2 arg0)

**Parameters:**
- `Vector2` `arg0`

**Returns:** `Vector2`

### org.joml.Vector3f getTargetGrapplePos(org.joml.Vector3f arg0)

**Parameters:**
- `org.joml.Vector3f` `arg0`

**Returns:** `org.joml.Vector3f`

### Vector3 getTargetGrapplePos(Vector3 arg0)

**Parameters:**
- `Vector3` `arg0`

**Returns:** `Vector3`

### default void setTargetGrapplePos(org.joml.Vector3f grapplePos)

**Parameters:**
- `org.joml.Vector3f` `grapplePos`

**Returns:** `void`

### default void setTargetGrapplePos(Vector3 grapplePos)

**Parameters:**
- `Vector3` `grapplePos`

**Returns:** `void`

### void setTargetGrapplePos(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `void`

### Vector2 getTargetGrappleRotation(Vector2 arg0)

**Parameters:**
- `Vector2` `arg0`

**Returns:** `Vector2`

### default void setTargetGrappleRotation(Vector2 forward)

**Parameters:**
- `Vector2` `forward`

**Returns:** `void`

### void setTargetGrappleRotation(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `void`

### default void setGrappleDeferredOffset(org.joml.Vector3f grappleOffset)

**Parameters:**
- `org.joml.Vector3f` `grappleOffset`

**Returns:** `void`

### default void setGrappleDeferredOffset(Vector3 grappleOffset)

**Parameters:**
- `Vector3` `grappleOffset`

**Returns:** `void`

### void setGrappleDeferredOffset(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `void`

### org.joml.Vector3f getGrappleOffset(org.joml.Vector3f arg0)

**Parameters:**
- `org.joml.Vector3f` `arg0`

**Returns:** `org.joml.Vector3f`

### Vector3 getGrappleOffset(Vector3 arg0)

**Parameters:**
- `Vector3` `arg0`

**Returns:** `Vector3`

### void setForwardDirection(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `void`

### void setTargetAndCurrentDirection(float arg0,
float arg1)

**Parameters:**
- `float` `arg0`
- `float` `arg1`

**Returns:** `void`

### Vector3 getPosition(Vector3 arg0)

**Parameters:**
- `Vector3` `arg0`

**Returns:** `Vector3`

### org.lwjgl.util.vector.Vector3f getPosition(org.lwjgl.util.vector.Vector3f arg0)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `arg0`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### default void setPosition(Vector3 position)

**Parameters:**
- `Vector3` `position`

**Returns:** `void`

### void setPosition(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `void`

### float getGrapplePosOffsetForward()

**Returns:** `float`

### void setGrapplePosOffsetForward(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `void`

### float getGrappleRotOffsetYaw()

**Returns:** `float`

### void setGrappleRotOffsetYaw(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `void`

### boolean isGrapplingTarget(IGrappleable arg0)

**Parameters:**
- `IGrappleable` `arg0`

**Returns:** `boolean`

### IGrappleable getGrapplingTarget()

**Returns:** `IGrappleable`

### float getBearingToGrappledTarget()

**Returns:** `float`

### float getBearingFromGrappledTarget()

**Returns:** `float`

### String getSharedGrappleType()

**Returns:** `String`

### void setSharedGrappleType(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `void`

### String getSharedGrappleAnimNode()

**Returns:** `String`

### void setSharedGrappleAnimNode(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `void`

### float getSharedGrappleAnimTime()

**Returns:** `float`

### float getSharedGrappleAnimFraction()

**Returns:** `float`

### void setSharedGrappleAnimTime(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `void`

### void setSharedGrappleAnimFraction(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `void`

### String getGrappleResult()

**Returns:** `String`

### void setGrappleResult(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `void`

### default int getID()

**Returns:** `int`

### boolean canBeGrappled()

**Returns:** `boolean`

### boolean isPerformingAnyGrappleAnimation()

**Returns:** `boolean`

### boolean isPerformingGrappleGrabAnimation()

**Returns:** `boolean`

### void setPerformingGrappleGrabAnimation(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `void`

### boolean isPerformingGrappleAnimation()

**Returns:** `boolean`

### boolean isOnFloor()

**Returns:** `boolean`

### void setOnFloor(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `void`

### boolean isFallOnFront()

**Returns:** `boolean`

### void setFallOnFront(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `void`

### boolean isKilledByFall()

**Returns:** `boolean`

### void setKilledByFall(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `void`

### default boolean isMoving()

**Returns:** `boolean`

### void resetGrappleStateToDefault(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\IGrappleable.html`*
