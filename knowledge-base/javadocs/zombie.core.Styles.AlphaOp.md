---
title: zombie.core.Styles.AlphaOp
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.core.Styles
---

# zombie.core.Styles.AlphaOp

`public enum AlphaOp extends Enum<AlphaOp>`

**Kind:** enum · **Package:** zombie.core.Styles

## Inheritance
- java.lang.Object
- java.lang.Enum<AlphaOp>
- zombie.core.Styles.AlphaOp

## Description

What to do with the alpha to the colours of a sprite

## Fields

### public static final AlphaOp PREMULTIPLY

### public static final AlphaOp KEEP

### public static final AlphaOp ZERO

## Methods

### public static AlphaOp[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `AlphaOp[]`

### public static AlphaOp valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `AlphaOp`

### public final void op(org.lwjgl.util.ReadableColor c,
int alpha,
FloatBuffer dest)

**Parameters:**
- `org.lwjgl.util.ReadableColor` `c`
- `int` `alpha`
- `FloatBuffer` `dest`

**Returns:** `void`

### public final void op(int c,
int alpha,
FloatBuffer dest)

**Parameters:**
- `int` `c`
- `int` `alpha`
- `FloatBuffer` `dest`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\Styles\AlphaOp.html`*
