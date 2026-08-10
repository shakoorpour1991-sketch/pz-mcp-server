---
title: zombie.iso.weather.fx.IsoWeatherFX
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.weather.fx
---

# zombie.iso.weather.fx.IsoWeatherFX

`public class IsoWeatherFX extends Object`

**Kind:** class · **Package:** zombie.iso.weather.fx

## Inheritance
- java.lang.Object
- zombie.iso.weather.fx.IsoWeatherFX

## Description

TurboTuTone.

## Fields

### public static int cloudId

### public static int fogId

### public static int snowId

### public static int rainId

### public static float zoomMod

## Constructors

### public IsoWeatherFX()

## Methods

### public void init()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void setDebugBounds(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isDebugBounds()

**Returns:** `boolean`

### public void setWindAngleIntensity(float intensity)

**Parameters:**
- `float` `intensity`

**Returns:** `void`

### public float getWindAngleIntensity()

**Returns:** `float`

### public float getRenderWindAngleRain()

**Returns:** `float`

### public void setWindPrecipIntensity(float intensity)

**Parameters:**
- `float` `intensity`

**Returns:** `void`

### public float getWindPrecipIntensity()

**Returns:** `float`

### public void setWindIntensity(float intensity)

**Parameters:**
- `float` `intensity`

**Returns:** `void`

### public float getWindIntensity()

**Returns:** `float`

### public void setFogIntensity(float intensity)

**Parameters:**
- `float` `intensity`

**Returns:** `void`

### public float getFogIntensity()

**Returns:** `float`

### public void setCloudIntensity(float intensity)

**Parameters:**
- `float` `intensity`

**Returns:** `void`

### public float getCloudIntensity()

**Returns:** `float`

### public void setPrecipitationIntensity(float intensity)

**Parameters:**
- `float` `intensity`

**Returns:** `void`

### public float getPrecipitationIntensity()

**Returns:** `float`

### public void setPrecipitationIsSnow(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getPrecipitationIsSnow()

**Returns:** `boolean`

### public boolean hasCloudsToRender()

**Returns:** `boolean`

### public boolean hasPrecipitationToRender()

**Returns:** `boolean`

### public boolean hasFogToRender()

**Returns:** `boolean`

### public void render()

**Returns:** `void`

### public void renderLayered(boolean doClouds,
boolean doFog,
boolean doPrecip)

**Parameters:**
- `boolean` `doClouds`
- `boolean` `doFog`
- `boolean` `doPrecip`

**Returns:** `void`

### public void renderClouds()

**Returns:** `void`

### public void renderFog()

**Returns:** `void`

### public void renderPrecipitation()

**Returns:** `void`

### public static float clamp(float min,
float max,
float val)

**Parameters:**
- `float` `min`
- `float` `max`
- `float` `val`

**Returns:** `float`

### public static float lerp(float t,
float a,
float b)

**Parameters:**
- `float` `t`
- `float` `a`
- `float` `b`

**Returns:** `float`

### public static float clerp(float t,
float a,
float b)

**Parameters:**
- `float` `t`
- `float` `a`
- `float` `b`

**Returns:** `float`

### public WeatherParticleDrawer getDrawer(int id)

**Parameters:**
- `int` `id`

**Returns:** `WeatherParticleDrawer`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\weather\fx\IsoWeatherFX.html`*
