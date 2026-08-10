---
title: zombie.iso.weather.WeatherShader
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather
---

# zombie.iso.weather.WeatherShader

`public class WeatherShader extends Shader`

**Kind:** class · **Package:** zombie.iso.weather

## Inheritance
- java.lang.Object
- zombie.core.opengl.Shader
- zombie.iso.weather.WeatherShader

## Fields

### public int timeOfDay

### public static final int texdVarsSize

## Constructors

### public WeatherShader(String name)

**Parameters:**
- `String` `name`

## Methods

### public void startMainThread(TextureDraw texd,
int playerIndex)

**Parameters:**
- `TextureDraw` `texd`
- `int` `playerIndex`

**Returns:** `void`

### public void startThumbnail(TextureDraw texd,
int playerIndex,
int thumbWidth,
int thumbHeight,
float zoom)

**Parameters:**
- `TextureDraw` `texd`
- `int` `playerIndex`
- `int` `thumbWidth`
- `int` `thumbHeight`
- `float` `zoom`

**Returns:** `void`

### public void startRenderThread(TextureDraw texd)

**Parameters:**
- `TextureDraw` `texd`

**Returns:** `void`

### public void onCompileSuccess(ShaderProgram sender)

**Parameters:**
- `ShaderProgram` `sender`

**Returns:** `void`

### public void postRender(TextureDraw texd)

**Parameters:**
- `TextureDraw` `texd`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\WeatherShader.html`*
