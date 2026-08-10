---
title: zombie.iso.Particles
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.Particles

`public abstract class Particles extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.Particles

## Fields

### public static int particleSystemsCount

### public static int particleSystemsLast

### public static final ArrayList<Particles> ParticleSystems

### public static IGLBufferObject funcs

## Constructors

### public Particles()

## Methods

### public static int addParticle(Particles p)

**Parameters:**
- `Particles` `p`

**Returns:** `int`

### public static void deleteParticle(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public static void init()

**Returns:** `void`

### public void initBuffers()

**Returns:** `void`

### public void destroy()

**Returns:** `void`

### public abstract void reloadShader()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public FloatBuffer getMVPMatrix()

**Returns:** `FloatBuffer`

### public void getGeometry(int val1)

**Parameters:**
- `int` `val1`

**Returns:** `void`

### public void getGeometryFire(int val1)

**Parameters:**
- `int` `val1`

**Returns:** `void`

### public float getShaderTime()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\Particles.html`*
