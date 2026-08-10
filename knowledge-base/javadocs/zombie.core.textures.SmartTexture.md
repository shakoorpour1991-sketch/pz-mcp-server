---
title: zombie.core.textures.SmartTexture
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.SmartTexture

`public class SmartTexture extends Texture`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.asset.Asset
- zombie.core.textures.Texture
- zombie.core.textures.SmartTexture

## Description

Created by LEMMY on 6/30/2016.

## Fields

### public final ArrayList<TextureCombinerCommand> commands

### public Texture result

## Constructors

### public SmartTexture()

## Methods

### public TextureCombinerCommand getFirstFromCategory(int cat)

**Parameters:**
- `int` `cat`

**Returns:** `TextureCombinerCommand`

### public void addOverlayPatches(String tex,
String mask,
int category)

**Parameters:**
- `String` `tex`
- `String` `mask`
- `int` `category`

**Returns:** `void`

### public void addOverlay(String tex,
String mask,
float intensity,
int category)

**Parameters:**
- `String` `tex`
- `String` `mask`
- `float` `intensity`
- `int` `category`

**Returns:** `void`

### public void addDirtOverlay(String tex,
String mask,
float intensity,
int category)

**Parameters:**
- `String` `tex`
- `String` `mask`
- `float` `intensity`
- `int` `category`

**Returns:** `void`

### public void addOverlay(String tex,
SmartShader shader)

**Parameters:**
- `String` `tex`
- `SmartShader` `shader`

**Returns:** `void`

### public void addTintedOverlay(String tex,
String mask,
float intensity,
int category,
float r,
float g,
float b)

**Parameters:**
- `String` `tex`
- `String` `mask`
- `float` `intensity`
- `int` `category`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void addRect(String tex,
int x,
int y,
int w,
int h)

**Parameters:**
- `String` `tex`
- `int` `x`
- `int` `y`
- `int` `w`
- `int` `h`

**Returns:** `void`

### public void destroy()

Description copied from class: Texture

**Returns:** `void`

### public void addTint(String tex,
int category,
float r,
float g,
float b)

**Parameters:**
- `String` `tex`
- `int` `category`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void addTint(Texture tex,
int category,
float r,
float g,
float b)

**Parameters:**
- `Texture` `tex`
- `int` `category`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void addHue(String tex,
int category,
float h)

**Parameters:**
- `String` `tex`
- `int` `category`
- `float` `h`

**Returns:** `void`

### public void addHue(Texture tex,
int category,
float h)

**Parameters:**
- `Texture` `tex`
- `int` `category`
- `float` `h`

**Returns:** `void`

### public Texture addHole(BloodBodyPartType part)

**Parameters:**
- `BloodBodyPartType` `part`

**Returns:** `Texture`

### public void removeHole(String bodyTex,
BloodBodyPartType part)

**Parameters:**
- `String` `bodyTex`
- `BloodBodyPartType` `part`

**Returns:** `void`

### public void removeHole(Texture bodyTex,
BloodBodyPartType part)

**Parameters:**
- `Texture` `bodyTex`
- `BloodBodyPartType` `part`

**Returns:** `void`

### public void removeHole(Texture bodyTex,
Texture maskTex,
BloodBodyPartType part)

**Parameters:**
- `Texture` `bodyTex`
- `Texture` `maskTex`
- `BloodBodyPartType` `part`

**Returns:** `void`

### public void mask(String tex,
String maskTex,
int category)

**Parameters:**
- `String` `tex`
- `String` `maskTex`
- `int` `category`

**Returns:** `void`

### public void mask(Texture tex,
Texture maskTex,
int category)

**Parameters:**
- `Texture` `tex`
- `Texture` `maskTex`
- `int` `category`

**Returns:** `void`

### public void maskHue(String tex,
String maskTex,
int category,
float h)

**Parameters:**
- `String` `tex`
- `String` `maskTex`
- `int` `category`
- `float` `h`

**Returns:** `void`

### public void maskHue(Texture tex,
Texture maskTex,
int category,
float h)

**Parameters:**
- `Texture` `tex`
- `Texture` `maskTex`
- `int` `category`
- `float` `h`

**Returns:** `void`

### public void maskTint(String tex,
String maskTex,
int category,
float r,
float g,
float b)

**Parameters:**
- `String` `tex`
- `String` `maskTex`
- `int` `category`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void maskTint(Texture tex,
Texture maskTex,
int category,
float r,
float g,
float b)

**Parameters:**
- `Texture` `tex`
- `Texture` `maskTex`
- `int` `category`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public void addMaskedTexture(CharacterMask mask,
String masksFolder,
String base,
int category,
ImmutableColor tint,
float hue)

**Parameters:**
- `CharacterMask` `mask`
- `String` `masksFolder`
- `String` `base`
- `int` `category`
- `ImmutableColor` `tint`
- `float` `hue`

**Returns:** `void`

### public void addMaskedTexture(CharacterMask mask,
String masksFolder,
Texture base,
int category,
ImmutableColor tint,
float hue)

**Parameters:**
- `CharacterMask` `mask`
- `String` `masksFolder`
- `Texture` `base`
- `int` `category`
- `ImmutableColor` `tint`
- `float` `hue`

**Returns:** `void`

### public void addTexture(String base,
int category,
ImmutableColor tint,
float hue)

**Parameters:**
- `String` `base`
- `int` `category`
- `ImmutableColor` `tint`
- `float` `hue`

**Returns:** `void`

### public WrappedBuffer getData()

Description copied from class: Texture

**Returns:** `WrappedBuffer`

### public void bind()

Description copied from class: Texture

**Returns:** `void`

### public int getID()

Description copied from interface: ITexture

**Returns:** `int`

### public void calculate()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public void add(String tex)

**Parameters:**
- `String` `tex`

**Returns:** `void`

### public void add(Texture tex)

**Parameters:**
- `Texture` `tex`

**Returns:** `void`

### public void add(String tex,
SmartShader shader,
ArrayList<TextureCombinerShaderParam> params)

**Parameters:**
- `String` `tex`
- `SmartShader` `shader`
- `ArrayList<TextureCombinerShaderParam>` `params`

**Returns:** `void`

### public void add(Texture tex,
SmartShader shader,
ArrayList<TextureCombinerShaderParam> params)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `ArrayList<TextureCombinerShaderParam>` `params`

**Returns:** `void`

### public void add(String tex,
SmartShader shader,
String maskTex,
int srcBlend,
int destBlend)

**Parameters:**
- `String` `tex`
- `SmartShader` `shader`
- `String` `maskTex`
- `int` `srcBlend`
- `int` `destBlend`

**Returns:** `void`

### public void add(Texture tex,
SmartShader shader,
Texture maskTex,
int srcBlend,
int destBlend)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `Texture` `maskTex`
- `int` `srcBlend`
- `int` `destBlend`

**Returns:** `void`

### public void add(String tex,
SmartShader shader,
int srcBlend,
int destBlend)

**Parameters:**
- `String` `tex`
- `SmartShader` `shader`
- `int` `srcBlend`
- `int` `destBlend`

**Returns:** `void`

### public void add(Texture tex,
SmartShader shader,
int srcBlend,
int destBlend)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `int` `srcBlend`
- `int` `destBlend`

**Returns:** `void`

### public void addSeparate(String tex,
SmartShader shader,
int srcBlend,
int destBlend,
int srcBlendA,
int destBlendA)

**Parameters:**
- `String` `tex`
- `SmartShader` `shader`
- `int` `srcBlend`
- `int` `destBlend`
- `int` `srcBlendA`
- `int` `destBlendA`

**Returns:** `void`

### public void addSeparate(Texture tex,
SmartShader shader,
int srcBlend,
int destBlend,
int srcBlendA,
int destBlendA)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `int` `srcBlend`
- `int` `destBlend`
- `int` `srcBlendA`
- `int` `destBlendA`

**Returns:** `void`

### public void add(String tex,
SmartShader shader,
String maskTex,
ArrayList<TextureCombinerShaderParam> params,
int srcBlend,
int destBlend)

**Parameters:**
- `String` `tex`
- `SmartShader` `shader`
- `String` `maskTex`
- `ArrayList<TextureCombinerShaderParam>` `params`
- `int` `srcBlend`
- `int` `destBlend`

**Returns:** `void`

### public void add(Texture tex,
SmartShader shader,
Texture maskTex,
ArrayList<TextureCombinerShaderParam> params,
int srcBlend,
int destBlend)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `Texture` `maskTex`
- `ArrayList<TextureCombinerShaderParam>` `params`
- `int` `srcBlend`
- `int` `destBlend`

**Returns:** `void`

### public void addSeparate(String tex,
SmartShader shader,
String maskTex,
ArrayList<TextureCombinerShaderParam> params,
int srcBlend,
int destBlend,
int srcBlendA,
int destBlendA)

**Parameters:**
- `String` `tex`
- `SmartShader` `shader`
- `String` `maskTex`
- `ArrayList<TextureCombinerShaderParam>` `params`
- `int` `srcBlend`
- `int` `destBlend`
- `int` `srcBlendA`
- `int` `destBlendA`

**Returns:** `void`

### public void addSeparate(Texture tex,
SmartShader shader,
Texture maskTex,
ArrayList<TextureCombinerShaderParam> params,
int srcBlend,
int destBlend,
int srcBlendA,
int destBlendA)

**Parameters:**
- `Texture` `tex`
- `SmartShader` `shader`
- `Texture` `maskTex`
- `ArrayList<TextureCombinerShaderParam>` `params`
- `int` `srcBlend`
- `int` `destBlend`
- `int` `srcBlendA`
- `int` `destBlendA`

**Returns:** `void`

### public void saveOnRenderThread(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `void`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean isFailure()

**Returns:** `boolean`

### public boolean isReady()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\SmartTexture.html`*
