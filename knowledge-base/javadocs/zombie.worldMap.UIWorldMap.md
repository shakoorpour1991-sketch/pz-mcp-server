---
title: zombie.worldMap.UIWorldMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.UIWorldMap

`public class UIWorldMap extends UIElement`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.ui.UIElement
- zombie.worldMap.UIWorldMap

## Constructors

### public UIWorldMap(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

## Methods

### public UIWorldMapV3 getAPI()

**Returns:** `UIWorldMapV3`

### public UIWorldMapV1 getAPIv1()

**Returns:** `UIWorldMapV1`

### public UIWorldMapV2 getAPIv2()

**Returns:** `UIWorldMapV2`

### public UIWorldMapV3 getAPIv3()

**Returns:** `UIWorldMapV3`

### public WorldMapSymbols getSymbolsDirect()

**Returns:** `WorldMapSymbols`

### public void checkSymbolsLayout()

**Returns:** `void`

### public SymbolsLayoutData getSymbolsLayoutData()

**Returns:** `SymbolsLayoutData`

### public WorldMap getWorldMap()

**Returns:** `WorldMap`

### public boolean isMapEditor()

**Returns:** `boolean`

### public void setMapEditor(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void scaleWidthToHeight()

**Returns:** `void`

### public void render()

**Returns:** `void`

### public static void setExposed(LuaManager.Exposer exposer)

**Parameters:**
- `LuaManager.Exposer` `exposer`

**Returns:** `void`

### public void DrawSymbol(Texture tex,
double pointOfRotationX,
double pointOfRotationY,
double width,
double height,
double degrees,
double scale,
boolean bMatchPerspective,
boolean bApplyZoom,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `pointOfRotationX`
- `double` `pointOfRotationY`
- `double` `width`
- `double` `height`
- `double` `degrees`
- `double` `scale`
- `boolean` `bMatchPerspective`
- `boolean` `bApplyZoom`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawTextSdf(UIFont font,
String text,
double x,
double y,
double scale,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `UIFont` `font`
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `scale`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextSdfRotated(String layerID,
String text,
double pointOfRotationX,
double pointOfRotationY,
double anchorX,
double anchorY,
double degrees,
double scale,
boolean bMatchPerspective,
boolean bApplyZoom,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `String` `layerID`
- `String` `text`
- `double` `pointOfRotationX`
- `double` `pointOfRotationY`
- `double` `anchorX`
- `double` `anchorY`
- `double` `degrees`
- `double` `scale`
- `boolean` `bMatchPerspective`
- `boolean` `bApplyZoom`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void setDoStencil(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\UIWorldMap.html`*
