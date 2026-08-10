---
title: zombie.core.textures.TextureCombinerCommand
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.TextureCombinerCommand

`public final class TextureCombinerCommand extends Object`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.TextureCombinerCommand

## Fields

### public static final int DEFAULT_SRC_A

### public static final int DEFAULT_DST_A

### public int x

### public int y

### public int w

### public int h

### public Texture mask

### public Texture tex

### public int blendSrc

### public int blendDest

### public int blendSrcA

### public int blendDestA

### public SmartShader shader

### public ArrayList<TextureCombinerShaderParam> shaderParams

### public static final ObjectPool<TextureCombinerCommand> pool

## Constructors

### public TextureCombinerCommand()

## Methods

### public String toString()

**Returns:** `String`

### public TextureCombinerCommand initSeparate(Texture tex,
SmartShader shader,
int src,
int dest,
int srcA,
int destA)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `int` `src`
- `int` `dest`
- `int` `srcA`
- `int` `destA`

**Returns:** `TextureCombinerCommand`

### public TextureCombinerCommand init(Texture tex,
SmartShader shader,
int src,
int dest)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `int` `src`
- `int` `dest`

**Returns:** `TextureCombinerCommand`

### public TextureCombinerCommand init(Texture tex,
SmartShader shader)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`

**Returns:** `TextureCombinerCommand`

### public TextureCombinerCommand init(Texture tex,
SmartShader shader,
Texture mask,
int src,
int dest)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `Texture` `mask`
- `int` `src`
- `int` `dest`

**Returns:** `TextureCombinerCommand`

### public TextureCombinerCommand init(Texture tex,
SmartShader shader,
int x,
int y,
int w,
int h)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `TextureCombinerCommand`

### public TextureCombinerCommand initSeparate(Texture tex,
SmartShader shader,
ArrayList<TextureCombinerShaderParam> params,
Texture mask,
int src,
int dest,
int srcA,
int destA)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `ArrayList<TextureCombinerShaderParam>` `params`
- `Texture` `mask`
- `int` `src`
- `int` `dest`
- `int` `srcA`
- `int` `destA`

**Returns:** `TextureCombinerCommand`

### public TextureCombinerCommand init(Texture tex,
SmartShader shader,
ArrayList<TextureCombinerShaderParam> params,
Texture mask,
int src,
int dest)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `ArrayList<TextureCombinerShaderParam>` `params`
- `Texture` `mask`
- `int` `src`
- `int` `dest`

**Returns:** `TextureCombinerCommand`

### public TextureCombinerCommand init(Texture tex,
SmartShader shader,
ArrayList<TextureCombinerShaderParam> params)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `ArrayList<TextureCombinerShaderParam>` `params`

**Returns:** `TextureCombinerCommand`

### public static TextureCombinerCommand get()

**Returns:** `TextureCombinerCommand`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\TextureCombinerCommand.html`*
