---
title: zombie.core.physics.RagdollBodyPart
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.core.physics
---

# zombie.core.physics.RagdollBodyPart

`public enum RagdollBodyPart extends Enum<RagdollBodyPart>`

**Kind:** enum · **Package:** zombie.core.physics

## Inheritance
- java.lang.Object
- java.lang.Enum<RagdollBodyPart>
- zombie.core.physics.RagdollBodyPart

## Fields

### public static final RagdollBodyPart BODYPART_PELVIS

### public static final RagdollBodyPart BODYPART_SPINE

### public static final RagdollBodyPart BODYPART_HEAD

### public static final RagdollBodyPart BODYPART_LEFT_UPPER_LEG

### public static final RagdollBodyPart BODYPART_LEFT_LOWER_LEG

### public static final RagdollBodyPart BODYPART_RIGHT_UPPER_LEG

### public static final RagdollBodyPart BODYPART_RIGHT_LOWER_LEG

### public static final RagdollBodyPart BODYPART_LEFT_UPPER_ARM

### public static final RagdollBodyPart BODYPART_LEFT_LOWER_ARM

### public static final RagdollBodyPart BODYPART_RIGHT_UPPER_ARM

### public static final RagdollBodyPart BODYPART_RIGHT_LOWER_ARM

### public static final RagdollBodyPart BODYPART_COUNT

## Methods

### public static RagdollBodyPart[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `RagdollBodyPart[]`

### public static RagdollBodyPart valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `RagdollBodyPart`

### public static RagdollBodyPart getRandomPart()

**Returns:** `RagdollBodyPart`

### public static boolean isHead(int value)

**Parameters:**
- `int` `value`

**Returns:** `boolean`

### public static boolean isLeg(int value)

**Parameters:**
- `int` `value`

**Returns:** `boolean`

### public static boolean isArm(int value)

**Parameters:**
- `int` `value`

**Returns:** `boolean`

### public static int getBodyPartType(int value)

**Parameters:**
- `int` `value`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\physics\RagdollBodyPart.html`*
