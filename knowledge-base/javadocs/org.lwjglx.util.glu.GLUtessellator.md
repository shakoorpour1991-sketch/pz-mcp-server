---
title: org.lwjglx.util.glu.GLUtessellator
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.lwjglx.util.glu
---

# org.lwjglx.util.glu.GLUtessellator

`public interface GLUtessellator`

**Kind:** interface · **Package:** org.lwjglx.util.glu

## Methods

### void gluDeleteTess()

**Returns:** `void`

### void gluTessProperty(int var1,
double var2)

**Parameters:**
- `int` `var1`
- `double` `var2`

**Returns:** `void`

### void gluGetTessProperty(int var1,
double[] var2,
int var3)

**Parameters:**
- `int` `var1`
- `double[]` `var2`
- `int` `var3`

**Returns:** `void`

### void gluTessNormal(double var1,
double var3,
double var5)

**Parameters:**
- `double` `var1`
- `double` `var3`
- `double` `var5`

**Returns:** `void`

### void gluTessCallback(int var1,
GLUtessellatorCallback var2)

**Parameters:**
- `int` `var1`
- `GLUtessellatorCallback` `var2`

**Returns:** `void`

### void gluTessVertex(double[] var1,
int var2,
Object var3)

**Parameters:**
- `double[]` `var1`
- `int` `var2`
- `Object` `var3`

**Returns:** `void`

### void gluTessBeginPolygon(Object var1)

**Parameters:**
- `Object` `var1`

**Returns:** `void`

### void gluTessBeginContour()

**Returns:** `void`

### void gluTessEndContour()

**Returns:** `void`

### void gluTessEndPolygon()

**Returns:** `void`

### void gluBeginPolygon()

**Returns:** `void`

### void gluNextContour(int var1)

**Parameters:**
- `int` `var1`

**Returns:** `void`

### void gluEndPolygon()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\util\glu\GLUtessellator.html`*
