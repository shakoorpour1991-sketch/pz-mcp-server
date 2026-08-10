---
title: zombie.scripting.ui.XuiScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.ui
---

# zombie.scripting.ui.XuiScript

`public class XuiScript extends Object`

**Kind:** class · **Package:** zombie.scripting.ui

## Inheritance
- java.lang.Object
- zombie.scripting.ui.XuiScript

## Fields

### public final String xuiUuid

### public final XuiScript.XuiString xuiKey

### public final XuiScript.XuiString xuiLuaClass

### public final XuiScript.XuiString xuiStyle

### public final XuiScript.XuiString xuiCustomDebug

### public final XuiScript.XuiUnit x

### public final XuiScript.XuiUnit y

### public final XuiScript.XuiUnit width

### public final XuiScript.XuiUnit height

### public final XuiScript.XuiVector vector

### public final XuiScript.XuiVectorPosAlign posAlign

### public final XuiScript.XuiFloat minimumWidth

### public final XuiScript.XuiFloat minimumHeight

### public final XuiScript.XuiFloat maximumWidth

### public final XuiScript.XuiFloat maximumHeight

### public final XuiScript.XuiUnit paddingTop

### public final XuiScript.XuiUnit paddingRight

### public final XuiScript.XuiUnit paddingBottom

### public final XuiScript.XuiUnit paddingLeft

### public final XuiScript.XuiSpacing padding

### public final XuiScript.XuiUnit marginTop

### public final XuiScript.XuiUnit marginRight

### public final XuiScript.XuiUnit marginBottom

### public final XuiScript.XuiUnit marginLeft

### public final XuiScript.XuiSpacing margin

### public final XuiScript.XuiTranslateString title

### public final XuiScript.XuiTranslateString name

### public final XuiScript.XuiFontType font

### public final XuiScript.XuiFontType font2

### public final XuiScript.XuiFontType font3

### public final XuiScript.XuiTexture icon

### public final XuiScript.XuiUnit iconX

### public final XuiScript.XuiUnit iconY

### public final XuiScript.XuiUnit iconWidth

### public final XuiScript.XuiUnit iconHeight

### public final XuiScript.XuiVector iconVector

### public final XuiScript.XuiTexture image

### public final XuiScript.XuiUnit imageX

### public final XuiScript.XuiUnit imageY

### public final XuiScript.XuiUnit imageWidth

### public final XuiScript.XuiUnit imageHeight

### public final XuiScript.XuiVector imageVector

### public final XuiScript.XuiBoolean anchorLeft

### public final XuiScript.XuiBoolean anchorRight

### public final XuiScript.XuiBoolean anchorTop

### public final XuiScript.XuiBoolean anchorBottom

### public final XuiScript.XuiStringList animationList

### public final XuiScript.XuiFloat animationTime

### public final XuiScript.XuiTexture textureBackground

### public final XuiScript.XuiTexture texture

### public final XuiScript.XuiTexture textureOverride

### public final XuiScript.XuiTexture tickTexture

### public final XuiScript.XuiColor textColor

### public final XuiScript.XuiColor backgroundColor

### public final XuiScript.XuiColor backgroundColorMouseOver

### public final XuiScript.XuiColor borderColor

### public final XuiScript.XuiColor textureColor

### public final XuiScript.XuiColor choicesColor

### public final XuiScript.XuiColor gridColor

### public final XuiScript.XuiBoolean displayBackground

### public final XuiScript.XuiBoolean background

### public final XuiScript.XuiBoolean drawGrid

### public final XuiScript.XuiBoolean drawBackground

### public final XuiScript.XuiBoolean drawBorder

### public final XuiScript.XuiTranslateString tooltip

### public final XuiScript.XuiColor hsbFactor

### public final XuiScript.XuiBoolean moveWithMouse

### public final XuiScript.XuiBoolean mouseOver

### public final XuiScript.XuiTranslateString mouseOverText

### public final XuiScript.XuiTextAlign textAlign

### public final XuiScript.XuiBoolean doHighlight

### public final XuiScript.XuiColor backgroundColorHl

### public final XuiScript.XuiColor borderColorHl

### public final XuiScript.XuiBoolean doValidHighlight

### public final XuiScript.XuiColor backgroundColorHlVal

### public final XuiScript.XuiColor borderColorHlVal

### public final XuiScript.XuiBoolean doInvalidHighlight

### public final XuiScript.XuiColor backgroundColorHlInv

### public final XuiScript.XuiColor borderColorHlInv

### public final XuiScript.XuiBoolean storeItem

### public final XuiScript.XuiBoolean doBackDropTex

### public final XuiScript.XuiColor backDropTexCol

### public final XuiScript.XuiBoolean doToolTip

### public final XuiScript.XuiBoolean mouseEnabled

### public final XuiScript.XuiBoolean allowDropAlways

### public final XuiScript.XuiTranslateString toolTipTextItem

### public final XuiScript.XuiTranslateString toolTipTextLocked

### public final XuiScript.XuiColor backgroundEmpty

### public final XuiScript.XuiColor backgroundHover

### public final XuiScript.XuiColor borderInput

### public final XuiScript.XuiColor borderOutput

### public final XuiScript.XuiColor borderValid

### public final XuiScript.XuiColor borderInvalid

### public final XuiScript.XuiColor borderLocked

### public final XuiScript.XuiBoolean doBorderLocked

### public final XuiScript.XuiBoolean pin

### public final XuiScript.XuiBoolean resizable

### public final XuiScript.XuiBoolean enableHeader

### public final XuiScript.XuiFloat scaledWidth

### public final XuiScript.XuiFloat scaledHeight

## Constructors

### public XuiScript(String xuiLayoutName,
boolean readAltKeys,
String xuiLuaClass)

**Parameters:**
- `String` `xuiLayoutName`
- `boolean` `readAltKeys`
- `String` `xuiLuaClass`

### public XuiScript(String xuiLayoutName,
boolean readAltKeys,
String xuiLuaClass,
XuiScriptType type)

**Parameters:**
- `String` `xuiLayoutName`
- `boolean` `readAltKeys`
- `String` `xuiLuaClass`
- `XuiScriptType` `type`

## Methods

### public String getXuiUUID()

**Returns:** `String`

### public String getXuiKey()

**Returns:** `String`

### public XuiScript setXuiKey(String xuiKey)

**Parameters:**
- `String` `xuiKey`

**Returns:** `XuiScript`

### public String getXuiLuaClass()

**Returns:** `String`

### public XuiScript setXuiLuaClass(String xuiLuaClass)

**Parameters:**
- `String` `xuiLuaClass`

**Returns:** `XuiScript`

### public String getXuiStyle()

**Returns:** `String`

### public XuiScript setXuiStyle(String xuiStyle)

**Parameters:**
- `String` `xuiStyle`

**Returns:** `XuiScript`

### public String getXuiCustomDebug()

**Returns:** `String`

### public XuiScript.XuiVector getVector()

**Returns:** `XuiScript.XuiVector`

### public XuiScript.XuiSpacing getPadding()

**Returns:** `XuiScript.XuiSpacing`

### public XuiScript.XuiSpacing getMargin()

**Returns:** `XuiScript.XuiSpacing`

### public XuiScript.XuiVectorPosAlign getPosAlign()

**Returns:** `XuiScript.XuiVectorPosAlign`

### public XuiScript.XuiFloat getMinimumWidth()

**Returns:** `XuiScript.XuiFloat`

### public XuiScript.XuiFloat getMinimumHeight()

**Returns:** `XuiScript.XuiFloat`

### public XuiScript.XuiTranslateString getTitle()

**Returns:** `XuiScript.XuiTranslateString`

### public XuiScript.XuiTranslateString getName()

**Returns:** `XuiScript.XuiTranslateString`

### public XuiScript.XuiFontType getFont()

**Returns:** `XuiScript.XuiFontType`

### public XuiScript.XuiFontType getFont2()

**Returns:** `XuiScript.XuiFontType`

### public XuiScript.XuiFontType getFont3()

**Returns:** `XuiScript.XuiFontType`

### public XuiScript.XuiTexture getIcon()

**Returns:** `XuiScript.XuiTexture`

### public XuiScript.XuiVector getIconVector()

**Returns:** `XuiScript.XuiVector`

### public XuiScript.XuiBoolean getAnchorLeft()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiBoolean getAnchorRight()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiBoolean getAnchorTop()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiBoolean getAnchorBottom()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiStringList getAnimationList()

**Returns:** `XuiScript.XuiStringList`

### public XuiScript.XuiFloat getAnimationTime()

**Returns:** `XuiScript.XuiFloat`

### public XuiScript.XuiTexture getTextureBackground()

**Returns:** `XuiScript.XuiTexture`

### public XuiScript.XuiTexture getTexture()

**Returns:** `XuiScript.XuiTexture`

### public XuiScript.XuiTexture getTextureOverride()

**Returns:** `XuiScript.XuiTexture`

### public XuiScript.XuiTexture getTickTexture()

**Returns:** `XuiScript.XuiTexture`

### public XuiScript.XuiColor getTextColor()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBackgroundColor()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBackgroundColorMouseOver()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBorderColor()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getTextureColor()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getChoicesColor()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getGridColor()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiBoolean getDisplayBackground()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiBoolean getBackground()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiBoolean getDrawGrid()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiBoolean getDrawBackground()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiBoolean getDrawBorder()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiTranslateString getTooltip()

**Returns:** `XuiScript.XuiTranslateString`

### public XuiScript.XuiTranslateString getMouseOverText()

**Returns:** `XuiScript.XuiTranslateString`

### public XuiScript.XuiColor getHsbFactor()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiBoolean getMoveWithMouse()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiTextAlign getTextAlign()

**Returns:** `XuiScript.XuiTextAlign`

### public XuiScript.XuiBoolean getDoHighlight()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiColor getBackgroundColorHL()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBorderColorHL()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiBoolean getDoValidHighlight()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiColor getBackgroundColorHLVal()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBorderColorHLVal()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiBoolean getDoInvalidHighlight()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiColor getBackgroundColorHLInv()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBorderColorHLInv()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiBoolean getStoreItem()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiBoolean getDoBackDropTex()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiColor getBackDropTexCol()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiBoolean getDoToolTip()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiBoolean getMouseEnabled()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiBoolean getAllowDropAlways()

**Returns:** `XuiScript.XuiBoolean`

### public XuiScript.XuiTranslateString getToolTipTextItem()

**Returns:** `XuiScript.XuiTranslateString`

### public XuiScript.XuiTranslateString getToolTipTextLocked()

**Returns:** `XuiScript.XuiTranslateString`

### public XuiScript.XuiColor getBackgroundEmpty()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBackgroundHover()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBorderInput()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBorderOutput()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBorderValid()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBorderInvalid()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiColor getBorderLocked()

**Returns:** `XuiScript.XuiColor`

### public XuiScript.XuiBoolean getDoBorderLocked()

**Returns:** `XuiScript.XuiBoolean`

### public String getXuiLayoutName()

**Returns:** `String`

### public String toString()

**Returns:** `String`

### public XuiScript getStyle()

**Returns:** `XuiScript`

### public void setStyle(XuiScript style)

**Parameters:**
- `XuiScript` `style`

**Returns:** `void`

### public XuiScript getDefaultStyle()

**Returns:** `XuiScript`

### public void setDefaultStyle(XuiScript defaultStyle)

**Parameters:**
- `XuiScript` `defaultStyle`

**Returns:** `void`

### public boolean isLayout()

**Returns:** `boolean`

### public boolean isAnyStyle()

**Returns:** `boolean`

### public boolean isStyle()

**Returns:** `boolean`

### public boolean isDefaultStyle()

**Returns:** `boolean`

### public XuiScriptType getScriptType()

**Returns:** `XuiScriptType`

### public XuiScript.XuiVar<?,?> getVar(String key)

**Parameters:**
- `String` `key`

**Returns:** `XuiScript.XuiVar<?,?>`

### public ArrayList<XuiScript.XuiVar<?,?>> getVars()

**Returns:** `ArrayList<XuiScript.XuiVar<?,?>>`

### public void addChild(XuiScript child)

**Parameters:**
- `XuiScript` `child`

**Returns:** `void`

### public ArrayList<XuiScript> getChildren()

**Returns:** `ArrayList<XuiScript>`

### public static String ReadLuaClassValue(ScriptParser.Block block)

**Parameters:**
- `ScriptParser.Block` `block`

**Returns:** `String`

### public static XuiScript CreateScriptForClass(String xuiLayoutName,
String luaClass,
boolean readAltKeys,
XuiScriptType scriptType)

**Parameters:**
- `String` `xuiLayoutName`
- `String` `luaClass`
- `boolean` `readAltKeys`
- `XuiScriptType` `scriptType`

**Returns:** `XuiScript`

### public void Load(ScriptParser.Block block)

**Parameters:**
- `ScriptParser.Block` `block`

**Returns:** `void`

### public boolean loadVar(String key,
String val)

**Parameters:**
- `String` `key`
- `String` `val`

**Returns:** `boolean`

### public boolean loadVar(String key,
String val,
boolean allowNull)

**Parameters:**
- `String` `key`
- `String` `val`
- `boolean` `allowNull`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\ui\XuiScript.html`*
