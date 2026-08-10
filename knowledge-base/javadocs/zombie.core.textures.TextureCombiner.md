---
title: zombie.core.textures.TextureCombiner
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.TextureCombiner

`public final class TextureCombiner extends Object`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureCombiner

## Fields

### public static final TextureCombiner instance

### public static int count

## Constructors

### public TextureCombiner()

## Methods

### public void init()
throws Exception

**Returns:** `void`

### public void combineStart()

**Returns:** `void`

### public void combineEnd()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void overlay(Texture tex2)

**Parameters:**
- `Texture` `tex2`

**Returns:** `void`

### public Texture combine(Texture tex1,
Texture tex2)
throws Exception

**Parameters:**
- `Texture` `tex1`
- `Texture` `tex2`

**Returns:** `Texture`

### public static int[] flipPixels(int[] imgPixels,
int imgw,
int imgh)

**Parameters:**
- `int[]` `imgPixels`
- `int` `imgw`
- `int` `imgh`

**Returns:** `int[]`

### public void releaseTexture(Texture tex)

**Parameters:**
- `Texture` `tex`

**Returns:** `void`

### public Texture combine(ArrayList<TextureCombinerCommand> cmdList)
throws Exception,
org.lwjglx.opengl.OpenGLException

**Parameters:**
- `ArrayList<TextureCombinerCommand>` `cmdList`

**Returns:** `Texture`

### public static int getResultingHeight(ArrayList<TextureCombinerCommand> cmdList)

**Parameters:**
- `ArrayList<TextureCombinerCommand>` `cmdList`

**Returns:** `int`

### public static int getResultingWidth(ArrayList<TextureCombinerCommand> cmdList)

**Parameters:**
- `ArrayList<TextureCombinerCommand>` `cmdList`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\TextureCombiner.html`*
