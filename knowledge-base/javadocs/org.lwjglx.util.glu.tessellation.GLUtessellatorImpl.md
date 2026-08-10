---
title: org.lwjglx.util.glu.tessellation.GLUtessellatorImpl
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.util.glu.tessellation
---

# org.lwjglx.util.glu.tessellation.GLUtessellatorImpl

`public class GLUtessellatorImpl extends Object implements GLUtessellator`

**Kind:** class · **Package:** org.lwjglx.util.glu.tessellation

## Inheritance
- java.lang.Object
- org.lwjglx.util.glu.tessellation.GLUtessellatorImpl

## Fields

### public static final int TESS_MAX_CACHE

## Constructors

### public GLUtessellatorImpl()

## Methods

### public static GLUtessellator gluNewTess()

**Returns:** `GLUtessellator`

### public void gluDeleteTess()

**Returns:** `void`

### public void gluTessProperty(int int0,
double double0)

**Parameters:**
- `int` `int0`
- `double` `double0`

**Returns:** `void`

### public void gluGetTessProperty(int int0,
double[] doubles,
int int1)

**Parameters:**
- `int` `int0`
- `double[]` `doubles`
- `int` `int1`

**Returns:** `void`

### public void gluTessNormal(double double0,
double double1,
double double2)

**Parameters:**
- `double` `double0`
- `double` `double1`
- `double` `double2`

**Returns:** `void`

### public void gluTessCallback(int int0,
GLUtessellatorCallback gLUtessellatorCallback)

**Parameters:**
- `int` `int0`
- `GLUtessellatorCallback` `gLUtessellatorCallback`

**Returns:** `void`

### public void gluTessVertex(double[] doubles1,
int int1,
Object object)

**Parameters:**
- `double[]` `doubles1`
- `int` `int1`
- `Object` `object`

**Returns:** `void`

### public void gluTessBeginPolygon(Object object)

**Parameters:**
- `Object` `object`

**Returns:** `void`

### public void gluTessBeginContour()

**Returns:** `void`

### public void gluTessEndContour()

**Returns:** `void`

### public void gluTessEndPolygon()

**Returns:** `void`

### public void gluBeginPolygon()

**Returns:** `void`

### public void gluNextContour(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `void`

### public void gluEndPolygon()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\util\glu\tessellation\GLUtessellatorImpl.html`*
