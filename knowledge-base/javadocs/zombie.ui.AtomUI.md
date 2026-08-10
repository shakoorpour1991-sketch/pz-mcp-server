---
title: zombie.ui.AtomUI
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.AtomUI

`public class AtomUI extends Object implements UIElementInterface`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.AtomUI

## Constructors

### public AtomUI(se.krka.kahlua.vm.KahluaTable table)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`

## Methods

### public void init()

**Returns:** `void`

### public Boolean isIgnoreLossControl()

**Returns:** `Boolean`

### public Boolean isFollowGameWorld()

**Returns:** `Boolean`

### public Boolean isDefaultDraw()

**Returns:** `Boolean`

### public void render()

**Returns:** `void`

### public Boolean isVisible()

**Returns:** `Boolean`

### public void setVisible(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public Boolean isCapture()

**Returns:** `Boolean`

### public boolean isModalVisible()

**Returns:** `boolean`

### public Double getMaxDrawHeight()

**Returns:** `Double`

### public Double getX()

**Returns:** `Double`

### public void setX(double value)

**Parameters:**
- `double` `value`

**Returns:** `void`

### public Double getY()

**Returns:** `Double`

### public void setY(double value)

**Parameters:**
- `double` `value`

**Returns:** `void`

### public Double getWidth()

**Returns:** `Double`

### public void setWidth(double value)

**Parameters:**
- `double` `value`

**Returns:** `void`

### public void setWidthSilent(double value)

**Parameters:**
- `double` `value`

**Returns:** `void`

### public Double getHeight()

**Returns:** `Double`

### public void setHeight(double value)

**Parameters:**
- `double` `value`

**Returns:** `void`

### public void setHeightSilent(double value)

**Parameters:**
- `double` `value`

**Returns:** `void`

### public void bringToTop()

**Returns:** `void`

### public boolean isOverElement(double mx,
double my)

**Parameters:**
- `double` `mx`
- `double` `my`

**Returns:** `boolean`

### public UIElementInterface getParent()

**Returns:** `UIElementInterface`

### public boolean onConsumeMouseButtonDown(int btn,
double x,
double y)

**Parameters:**
- `int` `btn`
- `double` `x`
- `double` `y`

**Returns:** `boolean`

### public boolean onConsumeMouseButtonUp(int btn,
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

### public void onMouseButtonUpOutside(int btn,
double x,
double y)

**Parameters:**
- `int` `btn`
- `double` `x`
- `double` `y`

**Returns:** `void`

### public Boolean onConsumeMouseWheel(double del,
double x,
double y)

**Parameters:**
- `double` `del`
- `double` `x`
- `double` `y`

**Returns:** `Boolean`

### public Boolean isPointOver(double screenX,
double screenY)

**Parameters:**
- `double` `screenX`
- `double` `screenY`

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

### public void update()

**Returns:** `void`

### public Boolean isMouseOver()

**Returns:** `Boolean`

### public boolean isWantKeyEvents()

**Returns:** `boolean`

### public int getRenderThisPlayerOnly()

**Returns:** `int`

### public boolean onConsumeKeyPress(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public boolean onConsumeKeyRepeat(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public boolean onConsumeKeyRelease(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public boolean isForceCursorVisible()

**Returns:** `boolean`

### public se.krka.kahlua.vm.KahluaTable getLuaLocalPosition(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public se.krka.kahlua.vm.KahluaTable getLuaAbsolutePosition(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public se.krka.kahlua.vm.KahluaTable getLuaParentPosition(double x,
double y)

**Parameters:**
- `double` `x`
- `double` `y`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public AtomUI getParentNode()

**Returns:** `AtomUI`

### public void setParentNode(AtomUI parent)

**Parameters:**
- `AtomUI` `parent`

**Returns:** `void`

### public void addNode(AtomUI el)

**Parameters:**
- `AtomUI` `el`

**Returns:** `void`

### public void removeNode(AtomUI el)

**Parameters:**
- `AtomUI` `el`

**Returns:** `void`

### public ArrayList<AtomUI> getNodes()

**Returns:** `ArrayList<AtomUI>`

### public void setPivotX(double x)

**Parameters:**
- `double` `x`

**Returns:** `void`

### public Double getPivotX()

**Returns:** `Double`

### public void setPivotY(double y)

**Parameters:**
- `double` `y`

**Returns:** `void`

### public Double getPivotY()

**Returns:** `Double`

### public void setAngle(double angle)

**Parameters:**
- `double` `angle`

**Returns:** `void`

### public Double getAngle()

**Returns:** `Double`

### public void setScaleX(double x)

**Parameters:**
- `double` `x`

**Returns:** `void`

### public Double getScaleX()

**Returns:** `Double`

### public void setScaleY(double y)

**Parameters:**
- `double` `y`

**Returns:** `void`

### public Double getScaleY()

**Returns:** `Double`

### public void setColor(double r,
double g,
double b,
double a)

**Parameters:**
- `double` `r`
- `double` `g`
- `double` `b`
- `double` `a`

**Returns:** `void`

### public se.krka.kahlua.vm.KahluaTable getColor()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public se.krka.kahlua.vm.KahluaTable getTable()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public Boolean isEnabled()

**Returns:** `Boolean`

### public void setEnabled(boolean enabled)

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### public void setAlwaysOnTop(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public boolean isAlwaysOnTop()

**Returns:** `boolean`

### public void setBackMost(boolean value)

**Parameters:**
- `boolean` `value`

**Returns:** `void`

### public boolean isBackMost()

**Returns:** `boolean`

### public String getUIName()

**Returns:** `String`

### public void setUIName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void setStencilRect()

**Returns:** `void`

### public void clearStencilRect()

**Returns:** `void`

### public void repaintStencilRect()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\AtomUI.html`*
