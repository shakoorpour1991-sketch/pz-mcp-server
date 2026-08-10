---
title: zombie.entity.components.fluids.PoisonEffect
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.entity.components.fluids
---

# zombie.entity.components.fluids.PoisonEffect

`public enum PoisonEffect extends Enum<PoisonEffect>`

**Kind:** enum · **Package:** zombie.entity.components.fluids

## Inheritance
- java.lang.Object
- java.lang.Enum<PoisonEffect>
- zombie.entity.components.fluids.PoisonEffect

## Fields

### public static final PoisonEffect None

### public static final PoisonEffect Mild

### public static final PoisonEffect Medium

### public static final PoisonEffect Severe

### public static final PoisonEffect Extreme

### public static final PoisonEffect Deadly

## Methods

### public static PoisonEffect[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `PoisonEffect[]`

### public static PoisonEffect valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `PoisonEffect`

### public int getLevel()

**Returns:** `int`

### public int getPlayerEffect()

**Returns:** `int`

### public static PoisonEffect FromLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `PoisonEffect`

### public String toStringLower()

**Returns:** `String`

### public static PoisonEffect FromNameLower(String name)

**Parameters:**
- `String` `name`

**Returns:** `PoisonEffect`

### public static boolean containsNameLowercase(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\fluids\PoisonEffect.html`*
