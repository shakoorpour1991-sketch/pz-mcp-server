---
title: zombie.scripting.objects.PhysicsHitReactionScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.PhysicsHitReactionScript

`public final class PhysicsHitReactionScript extends BaseScriptObject`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.objects.PhysicsHitReactionScript

## Fields

### public static final ArrayList<PhysicsHitReaction> physicsHitReactionList

## Constructors

### public PhysicsHitReactionScript()

## Methods

### public void InitLoadPP(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void Load(String name,
String totalFile)
throws Exception

**Parameters:**
- `String` `name`
- `String` `totalFile`

**Returns:** `void`

### public static void writeToFile()

**Returns:** `void`

### public static float getImpulse(RagdollBodyPart bodyPart,
String physicsObject)

**Parameters:**
- `RagdollBodyPart` `bodyPart`
- `String` `physicsObject`

**Returns:** `float`

### public static float getImpulse(RagdollBodyPart bodyPart,
AmmoType ammoType)

**Parameters:**
- `RagdollBodyPart` `bodyPart`
- `AmmoType` `ammoType`

**Returns:** `float`

### public static float getUpwardImpulse(RagdollBodyPart bodyPart,
AmmoType ammoType)

**Parameters:**
- `RagdollBodyPart` `bodyPart`
- `AmmoType` `ammoType`

**Returns:** `float`

### public static float getUpwardImpulse(RagdollBodyPart bodyPart,
String physicsObject)

**Parameters:**
- `RagdollBodyPart` `bodyPart`
- `String` `physicsObject`

**Returns:** `float`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\PhysicsHitReactionScript.html`*
