---
title: zombie.core.opengl.MatrixStack
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.opengl
---

# zombie.core.opengl.MatrixStack

`public final class MatrixStack extends Object`

**Kind:** class · **Package:** zombie.core.opengl

## Inheritance
- java.lang.Object
- zombie.core.opengl.MatrixStack

## Constructors

### public MatrixStack(int id)

**Parameters:**
- `int` `id`

## Methods

### public org.joml.Matrix4f alloc()

**Returns:** `org.joml.Matrix4f`

### public void release(org.joml.Matrix4f matrix)

**Parameters:**
- `org.joml.Matrix4f` `matrix`

**Returns:** `void`

### public void push(org.joml.Matrix4f m)

**Parameters:**
- `org.joml.Matrix4f` `m`

**Returns:** `void`

### public void pop()

**Returns:** `void`

### public org.joml.Matrix4f peek()

**Returns:** `org.joml.Matrix4f`

### public boolean isEmpty()

**Returns:** `boolean`

### public void clear()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\opengl\MatrixStack.html`*
