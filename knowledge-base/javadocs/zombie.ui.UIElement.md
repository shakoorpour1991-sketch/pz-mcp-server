---
title: zombie.ui.UIElement
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.UIElement

`public class UIElement extends Object implements UIElementInterface`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIElement

## Fields

### public boolean capture

### public boolean ignoreLossControl

### public String clickedValue

### public final ArrayList<UIElement> controls

### public boolean defaultDraw

### public boolean followGameWorld

### public float height

### public UIElement parent

### public boolean visible

### public float width

### public double x

### public double y

### public se.krka.kahlua.vm.KahluaTable table

### public boolean alwaysBack

### public boolean scrollChildren

### public boolean scrollWithParent

### public boolean anchorTop

### public boolean anchorLeft

### public boolean anchorRight

### public boolean anchorBottom

### public int playerContext

### public boolean alwaysOnTop

### public int maxDrawHeight

## Constructors

### public UIElement()

### public UIElement(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

## Methods

### public Double getMaxDrawHeight()

**Returns:** `Double`

### public void setMaxDrawHeight(double height)

**Parameters:**
- `double` `height`

**Returns:** `void`

### public void clearMaxDrawHeight()

**Returns:** `void`

### public Double getXScroll()

**Returns:** `Double`

### public void setXScroll(double x)

**Parameters:**
- `double` `x`

**Returns:** `void`

### public Double getYScroll()

**Returns:** `Double`

### public void setYScroll(double y)

**Parameters:**
- `double` `y`

**Returns:** `void`

### public void setAlwaysOnTop(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isAlwaysOnTop()

**Returns:** `boolean`

### public void backMost()

**Returns:** `void`

### public boolean isBackMost()

**Returns:** `boolean`

### public void AddChild(UIElement el)

**Parameters:**
- `UIElement` `el`

**Returns:** `void`

### public void RemoveChild(UIElement el)

**Parameters:**
- `UIElement` `el`

**Returns:** `void`

### public Double getScrollHeight()

**Returns:** `Double`

### public void setScrollHeight(double h)

**Parameters:**
- `double` `h`

**Returns:** `void`

### public boolean isConsumeMouseEvents()

**Returns:** `boolean`

### public void setConsumeMouseEvents(boolean bConsume)

**Parameters:**
- `boolean` `bConsume`

**Returns:** `void`

### public void ClearChildren()

**Returns:** `void`

### public void ButtonClicked(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void DrawText(UIFont font,
String text,
double x,
double y,
double zoom,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `UIFont` `font`
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `zoom`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawText(String text,
double x,
double y,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawText(String text,
double x,
double y,
double width,
double height,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawText(UIFont font,
String text,
double x,
double y,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `UIFont` `font`
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextUntrimmed(UIFont font,
String text,
double x,
double y,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `UIFont` `font`
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextCentre(String text,
double x,
double y,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextCentre(UIFont font,
String text,
double x,
double y,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `UIFont` `font`
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextRight(String text,
double x,
double y,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextRight(UIFont font,
String text,
double x,
double y,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `UIFont` `font`
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void drawTextWithBackground(UIFont font,
String text,
double x,
double y,
double r,
double g,
double b,
double a,
double padX,
double padY,
double bgR,
double bgG,
double bgB,
double bgA)

**Parameters:**
- `UIFont` `font`
- `String` `text`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`
- `double` `padX`
- `double` `padY`
- `double` `bgR`
- `double` `bgG`
- `double` `bgB`
- `double` `bgA`

**Returns:** `void`

### public void DrawTextureAngle(Texture tex,
double centerX,
double centerY,
double angle,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `centerX`
- `double` `centerY`
- `double` `angle`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawTextureAngle(Texture tex,
double centerX,
double centerY,
double angle)

**Parameters:**
- `Texture` `tex`
- `double` `centerX`
- `double` `centerY`
- `double` `angle`

**Returns:** `void`

### public void DrawTexture(Texture tex,
double tlx,
double tly,
double trx,
double try2,
double brx,
double bry,
double blx,
double bly,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `tlx`
- `double` `tly`
- `double` `trx`
- `double` `try2`
- `double` `brx`
- `double` `bry`
- `double` `blx`
- `double` `bly`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawTexture(Texture tex,
double x,
double y,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextureCol(Texture tex,
double x,
double y,
Color col)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `Color` `col`

**Returns:** `void`

### public void DrawTextureScaled(Texture tex,
double x,
double y,
double width,
double height,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextureScaledUniform(Texture tex,
double x,
double y,
double scale,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `scale`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextureScaledAspect(Texture tex,
double x,
double y,
double width,
double height,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextureScaledAspect2(Texture tex,
double x,
double y,
double width,
double height,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextureScaledAspect3(Texture tex,
double x,
double y,
double width,
double height,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextureScaledCol(Texture tex,
double x,
double y,
double width,
double height,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawTextureScaledCol(Texture tex,
double x,
double y,
double width,
double height,
Color col)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `Color` `col`

**Returns:** `void`

### public void DrawTextureScaledColor(Texture tex,
Double x,
Double y,
Double width,
Double height,
Double r,
Double g,
Double b,
Double a)

**Parameters:**
- `Texture` `tex`
- `Double` `x`
- `Double` `y`
- `Double` `width`
- `Double` `height`
- `Double` `r`
- `Double` `g`
- `Double` `b`
- `Double` `a`

**Returns:** `void`

### public void DrawTextureColor(Texture tex,
double x,
double y,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawLine(Texture tex,
double x1,
double y1,
double x2,
double y2,
float thickness,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `x1`
- `double` `y1`
- `double` `x2`
- `double` `y2`
- `float` `thickness`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawPolygon(Texture tex,
double x1,
double y1,
double x2,
double y2,
double x3,
double y3,
double x4,
double y4,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `x1`
- `double` `y1`
- `double` `x2`
- `double` `y2`
- `double` `x3`
- `double` `y3`
- `double` `x4`
- `double` `y4`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawItemIcon(InventoryItem item,
double x,
double y,
double alpha,
double width,
double height)

**Parameters:**
- `InventoryItem` `item`
- `double` `x`
- `double` `y`
- `double` `alpha`
- `double` `width`
- `double` `height`

**Returns:** `void`

### public void DrawScriptItemIcon(Item scriptItem,
double x,
double y,
double alpha,
double width,
double height)

**Parameters:**
- `Item` `scriptItem`
- `double` `x`
- `double` `y`
- `double` `alpha`
- `double` `width`
- `double` `height`

**Returns:** `void`

### public void DrawTextureIcon(Texture tex,
double x,
double y,
double width,
double height,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTextureIconMask(Texture tex,
double yRatio,
double x,
double y,
double width,
double height,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `yRatio`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTexturePercentage(Texture tex,
double yRatio,
double x,
double y,
double width,
double height,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `yRatio`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawTexturePercentageBottomUp(Texture tex,
double yRatio,
double x,
double y,
double width,
double height,
double r,
double g,
double b,
double alpha)

**Parameters:**
- `Texture` `tex`
- `double` `yRatio`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `alpha`

**Returns:** `void`

### public void DrawSubTextureRGBA(Texture tex,
double subX,
double subY,
double subW,
double subH,
double x,
double y,
double w,
double h,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `subX`
- `double` `subY`
- `double` `subW`
- `double` `subH`
- `double` `x`
- `double` `y`
- `double` `w`
- `double` `h`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawTextureTiled(Texture tex,
double x,
double y,
double w,
double h,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `w`
- `double` `h`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawTextureTiledX(Texture tex,
double x,
double y,
double w,
double h,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `w`
- `double` `h`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawTextureTiledY(Texture tex,
double x,
double y,
double w,
double h,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `w`
- `double` `h`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawTextureTiledYOffset(Texture tex,
double x,
double y,
double w,
double h,
double r,
double g,
double b,
double a)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `w`
- `double` `h`
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public void DrawTextureIgnoreOffset(Texture tex,
double x,
double y,
int width,
int height,
Color col)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `int` `width`
- `int` `height`
- `Color` `col`

**Returns:** `void`

### public void DrawTexture_FlippedX(Texture tex,
double x,
double y,
int width,
int height,
Color col)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `int` `width`
- `int` `height`
- `Color` `col`

**Returns:** `void`

### public void DrawTexture_FlippedXIgnoreOffset(Texture tex,
double x,
double y,
int width,
int height,
Color col)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `int` `width`
- `int` `height`
- `Color` `col`

**Returns:** `void`

### public void DrawUVSliceTexture(Texture tex,
double x,
double y,
double width,
double height,
Color col,
double xStart,
double yStart,
double xEnd,
double yEnd)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`
- `Color` `col`
- `double` `xStart`
- `double` `yStart`
- `double` `xEnd`
- `double` `yEnd`

**Returns:** `void`

### public Boolean getScrollChildren()

**Returns:** `Boolean`

### public void setScrollChildren(boolean bScroll)

**Parameters:**
- `boolean` `bScroll`

**Returns:** `void`

### public Boolean getScrollWithParent()

**Returns:** `Boolean`

### public void setScrollWithParent(boolean bScroll)

**Parameters:**
- `boolean` `bScroll`

**Returns:** `void`

### public void setRenderClippedChildren(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public Double getAbsoluteX()

**Returns:** `Double`

### public Double getAbsoluteY()

**Returns:** `Double`

### public String getClickedValue()

**Returns:** `String`

### public void setClickedValue(String clickedValue)

**Parameters:**
- `String` `clickedValue` — the clickedValue to set

**Returns:** `void`

### public void bringToTop()

**Returns:** `void`

### public void onMouseUpOutside(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `void`

### public Boolean onMouseDown(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public Boolean onConsumeMouseWheel(double del,
double x,
double y)

**Parameters:**
- `double` `del`
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public Boolean onMouseWheel(double del)

**Parameters:**
- `double` `del`

**Returns:** `Boolean`

### public Boolean onConsumeMouseMove(double dx,
double dy,
double x,
double y)

**Parameters:**
- `double` `dx`
- `double` `dy`
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public Boolean onMouseMove(double dx,
double dy)

**Parameters:**
- `double` `dx`
- `double` `dy`

**Returns:** `Boolean`

### public String toString()

**Returns:** `String`

### public void onExtendMouseMoveOutside(double dx,
double dy,
double x,
double y)

**Parameters:**
- `double` `dx`
- `double` `dy`
- `double` `x`
- `double` `y`

**Returns:** `void`

### public void onMouseMoveOutside(double dx,
double dy)

**Parameters:**
- `double` `dx`
- `double` `dy`

**Returns:** `void`

### public Boolean onMouseUp(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public void onMouseButtonDown(int btn,
double x,
double y)

**Parameters:**
- `int` `btn`
- `double` `x`
- `double` `y`

**Returns:** `void`

### public boolean onConsumeMouseButtonDown(int btn,
double x,
double y)

**Parameters:**
- `int` `btn`
- `double` `x`
- `double` `y`

**Returns:** `boolean`

### public void onMouseButtonDownOutside(int btn,
double x,
double y)

**Parameters:**
- `int` `btn`
- `double` `x`
- `double` `y`

**Returns:** `void`

### public boolean onConsumeMouseButtonUp(int btn,
double x,
double y)

**Parameters:**
- `int` `btn`
- `double` `x`
- `double` `y`

**Returns:** `boolean`

### public void onMouseButtonUpOutside(int btn,
double x,
double y)

**Parameters:**
- `int` `btn`
- `double` `x`
- `double` `y`

**Returns:** `void`

### public void onresize()

**Returns:** `void`

### public void onResize()

**Returns:** `void`

### public Boolean onRightMouseDown(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public Boolean onRightMouseUp(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public void RemoveControl(UIElement el)

**Parameters:**
- `UIElement` `el`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void BringToTop(UIElement el)

**Parameters:**
- `UIElement` `el`

**Returns:** `void`

### public Boolean isCapture()

**Returns:** `Boolean`

### public void setCapture(boolean capture)

**Parameters:**
- `boolean` `capture` — the capture to set

**Returns:** `void`

### public boolean isModalVisible()

**Returns:** `boolean`

### public Boolean isIgnoreLossControl()

**Returns:** `Boolean`

### public void setIgnoreLossControl(boolean ignoreLossControl)

**Parameters:**
- `boolean` `ignoreLossControl` — the IgnoreLossControl to set

**Returns:** `void`

### public ArrayList<UIElement> getControls()

**Returns:** `ArrayList<UIElement>`

### public void setControls(Vector<UIElement> controls)

**Parameters:**
- `Vector<UIElement>` `controls` — the Controls to set

**Returns:** `void`

### public Boolean isDefaultDraw()

**Returns:** `Boolean`

### public void setDefaultDraw(boolean defaultDraw)

**Parameters:**
- `boolean` `defaultDraw` — the defaultDraw to set

**Returns:** `void`

### public Boolean isFollowGameWorld()

**Returns:** `Boolean`

### public void setFollowGameWorld(boolean followGameWorld)

**Parameters:**
- `boolean` `followGameWorld` — the followGameWorld to set

**Returns:** `void`

### public int getRenderThisPlayerOnly()

**Returns:** `int`

### public void setRenderThisPlayerOnly(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public Double getHeight()

**Returns:** `Double`

### public void setHeight(double height)

**Parameters:**
- `double` `height` — the height to set

**Returns:** `void`

### public UIElement getParent()

**Returns:** `UIElement`

### public void setParent(UIElement parent)

**Parameters:**
- `UIElement` `parent` — the Parent to set

**Returns:** `void`

### public Boolean isVisible()

**Returns:** `Boolean`

### public void setVisible(boolean visible)

**Parameters:**
- `boolean` `visible` — the visible to set

**Returns:** `void`

### public boolean isReallyVisible()

**Returns:** `boolean`

### public Double getWidth()

**Returns:** `Double`

### public void setWidth(double width)

**Parameters:**
- `double` `width` — the width to set

**Returns:** `void`

### public Double getX()

**Returns:** `Double`

### public void setX(double x)

**Parameters:**
- `double` `x` — the x to set

**Returns:** `void`

### public Double getXScrolled(UIElement parent)

**Parameters:**
- `UIElement` `parent`

**Returns:** `Double`

### public Double getYScrolled(UIElement parent)

**Parameters:**
- `UIElement` `parent`

**Returns:** `Double`

### public boolean isEnabled()

**Returns:** `boolean`

### public void setEnabled(boolean en)

**Parameters:**
- `boolean` `en`

**Returns:** `void`

### public Double getY()

**Returns:** `Double`

### public void setY(double y)

**Parameters:**
- `double` `y` — the y to set

**Returns:** `void`

### public boolean isOverElement(double mx,
double my)

**Parameters:**
- `double` `mx`
- `double` `my`

**Returns:** `boolean`

### public void suspendStencil()

**Returns:** `void`

### public void resumeStencil()

**Returns:** `void`

### public void setStencilRect(double x,
double y,
double width,
double height)

**Parameters:**
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`

**Returns:** `void`

### public void setStencilCircle(double x,
double y,
double width,
double height)

**Parameters:**
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`

**Returns:** `void`

### public void clearStencilRect()

**Returns:** `void`

### public void repaintStencilRect(double x,
double y,
double width,
double height)

**Parameters:**
- `double` `x`
- `double` `y`
- `double` `width`
- `double` `height`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public void setTable(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table` — the table to set

**Returns:** `void`

### public void setHeightSilent(double height)

**Parameters:**
- `double` `height`

**Returns:** `void`

### public void setWidthSilent(double width)

**Parameters:**
- `double` `width`

**Returns:** `void`

### public void setHeightOnly(double height)

**Parameters:**
- `double` `height`

**Returns:** `void`

### public void setWidthOnly(double width)

**Parameters:**
- `double` `width`

**Returns:** `void`

### public boolean isAnchorTop()

**Returns:** `boolean`

### public void setAnchorTop(boolean anchorTop)

**Parameters:**
- `boolean` `anchorTop` — the anchorTop to set

**Returns:** `void`

### public void ignoreWidthChange()

**Returns:** `void`

### public void ignoreHeightChange()

**Returns:** `void`

### public Boolean isAnchorLeft()

**Returns:** `Boolean`

### public void setAnchorLeft(boolean anchorLeft)

**Parameters:**
- `boolean` `anchorLeft` — the anchorLeft to set

**Returns:** `void`

### public Boolean isAnchorRight()

**Returns:** `Boolean`

### public void setAnchorRight(boolean anchorRight)

**Parameters:**
- `boolean` `anchorRight` — the anchorRight to set

**Returns:** `void`

### public Boolean isAnchorBottom()

**Returns:** `Boolean`

### public void setAnchorBottom(boolean anchorBottom)

**Parameters:**
- `boolean` `anchorBottom` — the anchorBottom to set

**Returns:** `void`

### public int getPlayerContext()

**Returns:** `int`

### public void setPlayerContext(int nPlayer)

**Parameters:**
- `int` `nPlayer`

**Returns:** `void`

### public String getUIName()

**Returns:** `String`

### public void setUIName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public Double clampToParentX(double x)

**Parameters:**
- `double` `x`

**Returns:** `Double`

### public Double clampToParentY(double y)

**Parameters:**
- `double` `y`

**Returns:** `Double`

### public Boolean isPointOver(double screenX,
double screenY)

**Parameters:**
- `double` `screenX`
- `double` `screenY`

**Returns:** `Boolean`

### public Boolean isMouseOver()

**Returns:** `Boolean`

### public void setWantKeyEvents(boolean want)

**Parameters:**
- `boolean` `want`

**Returns:** `void`

### public boolean isWantKeyEvents()

**Returns:** `boolean`

### public void setWantExtraMouseEvents(boolean want)

**Parameters:**
- `boolean` `want`

**Returns:** `void`

### public boolean isWantExtraMouseEvents()

**Returns:** `boolean`

### public boolean isKeyConsumed(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public boolean onConsumeKeyPress(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public void onKeyPress(int key)

**Parameters:**
- `int` `key`

**Returns:** `void`

### public boolean onConsumeKeyRepeat(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public void onKeyRepeat(int key)

**Parameters:**
- `int` `key`

**Returns:** `void`

### public boolean onConsumeKeyRelease(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public void onKeyRelease(int key)

**Parameters:**
- `int` `key`

**Returns:** `void`

### public boolean isForceCursorVisible()

**Returns:** `boolean`

### public void setForceCursorVisible(boolean force)

**Parameters:**
- `boolean` `force`

**Returns:** `void`

### public void StartOutline(Texture tex,
float outlineThickness,
float r,
float g,
float b,
float a)

**Parameters:**
- `Texture` `tex`
- `float` `outlineThickness`
- `float` `r`
- `float` `g`
- `float` `b`
- `float` `a`

**Returns:** `void`

### public void EndOutline()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\UIElement.html`*
