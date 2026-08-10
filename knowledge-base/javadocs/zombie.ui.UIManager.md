---
title: zombie.ui.UIManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ui
---

# zombie.ui.UIManager

`public final class UIManager extends Object`

**Kind:** class · **Package:** zombie.ui

## Inheritance
- java.lang.Object
- zombie.ui.UIManager

## Fields

### public static int lastMouseX

### public static int lastMouseY

### public static IsoObjectPicker.ClickObject picked

### public static Clock clock

### public static final ArrayList<UIElementInterface> UI

### public static ObjectTooltip toolTip

### public static Texture mouseArrow

### public static Texture mouseExamine

### public static Texture mouseAttack

### public static Texture mouseGrab

### public static SpeedControls speedControls

### public static UIDebugConsole debugConsole

### public static final MoodlesUI[] MoodleUI

### public static boolean fadeBeforeUi

### public static final ActionProgressBar[] ProgressBar

### public static float fadeAlpha

### public static int fadeInTimeMax

### public static int fadeInTime

### public static boolean fadingOut

### public static Texture lastMouseTexture

### public static IsoObject lastPicked

### public static final ArrayList<String> DoneTutorials

### public static float lastOffX

### public static float lastOffY

### public static ModalDialog modal

### public static boolean doTick

### public static boolean visibleAllUi

### public static TextureFBO uiFbo

### public static boolean useUiFbo

### public static boolean uiTextureContentsValid

### public static Texture black

### public static boolean suspend

### public static float lastAlpha

### public static final Vector2 PickedTileLocal

### public static final Vector2 PickedTile

### public static IsoObject rightDownObject

### public static long uiUpdateTimeMS

### public static long uiUpdateIntervalMS

### public static long uiRenderTimeMS

### public static long uiRenderIntervalMS

### public static final ArrayList<UIElementInterface> toTop

### public static se.krka.kahlua.vm.KahluaThread defaultthread

### public static se.krka.kahlua.vm.KahluaThread previousThread

### public static String luaDebuggerAction

### public static final int DEBUGGER_FPS

## Constructors

### public UIManager()

## Methods

### public static void AddUI(UIElementInterface el)

**Parameters:**
- `UIElementInterface` `el`

**Returns:** `void`

### public static void RemoveElement(UIElementInterface el)

**Parameters:**
- `UIElementInterface` `el`

**Returns:** `void`

### public static void clearArrays()

**Returns:** `void`

### public static void closeContainers()

**Returns:** `void`

### public static void CloseContainers()

**Returns:** `void`

### public static void DrawTexture(Texture tex,
double x,
double y)

**Parameters:**
- `Texture` `tex`
- `double` `x`
- `double` `y`

**Returns:** `void`

### public static void DrawTexture(Texture tex,
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

### public static void FadeIn(double seconds)

**Parameters:**
- `double` `seconds`

**Returns:** `void`

### public static void FadeOut(double seconds)

**Parameters:**
- `double` `seconds`

**Returns:** `void`

### public static void CreateFBO(int width,
int height)

**Parameters:**
- `int` `width`
- `int` `height`

**Returns:** `void`

### public static TextureFBO createTexture(float x,
float y,
boolean test)
throws Exception

**Parameters:**
- `float` `x`
- `float` `y`
- `boolean` `test`

**Returns:** `TextureFBO`

### public static void init()

**Returns:** `void`

### public static void render()

**Returns:** `void`

### public static void renderFadeOverlay()

**Returns:** `void`

### public static void resize()

**Returns:** `void`

### public static Vector2 getTileFromMouse(double mx,
double my,
double z)

**Parameters:**
- `double` `mx`
- `double` `my`
- `double` `z`

**Returns:** `Vector2`

### public static void update()

**Returns:** `void`

### public static Double getLastMouseX()

**Returns:** `Double`

### public static void setLastMouseX(double aLastMouseX)

**Parameters:**
- `double` `aLastMouseX` — the lastMouseX to set

**Returns:** `void`

### public static Double getLastMouseY()

**Returns:** `Double`

### public static void setLastMouseY(double aLastMouseY)

**Parameters:**
- `double` `aLastMouseY` — the lastMouseY to set

**Returns:** `void`

### public static IsoObjectPicker.ClickObject getPicked()

**Returns:** `IsoObjectPicker.ClickObject`

### public static void setPicked(IsoObjectPicker.ClickObject aPicked)

**Parameters:**
- `IsoObjectPicker.ClickObject` `aPicked` — the Picked to set

**Returns:** `void`

### public static Clock getClock()

**Returns:** `Clock`

### public static void setClock(Clock aClock)

**Parameters:**
- `Clock` `aClock` — the clock to set

**Returns:** `void`

### public static ArrayList<UIElementInterface> getUI()

**Returns:** `ArrayList<UIElementInterface>`

### public static void setUI(ArrayList<UIElementInterface> aUI)

**Parameters:**
- `ArrayList<UIElementInterface>` `aUI`

**Returns:** `void`

### public static ObjectTooltip getToolTip()

**Returns:** `ObjectTooltip`

### public static void setToolTip(ObjectTooltip aToolTip)

**Parameters:**
- `ObjectTooltip` `aToolTip` — the toolTip to set

**Returns:** `void`

### public static Texture getMouseArrow()

**Returns:** `Texture`

### public static void setMouseArrow(Texture aMouseArrow)

**Parameters:**
- `Texture` `aMouseArrow` — the mouseArrow to set

**Returns:** `void`

### public static Texture getMouseExamine()

**Returns:** `Texture`

### public static void setMouseExamine(Texture aMouseExamine)

**Parameters:**
- `Texture` `aMouseExamine` — the mouseExamine to set

**Returns:** `void`

### public static Texture getMouseAttack()

**Returns:** `Texture`

### public static void setMouseAttack(Texture aMouseAttack)

**Parameters:**
- `Texture` `aMouseAttack` — the mouseAttack to set

**Returns:** `void`

### public static Texture getMouseGrab()

**Returns:** `Texture`

### public static void setMouseGrab(Texture aMouseGrab)

**Parameters:**
- `Texture` `aMouseGrab` — the mouseGrab to set

**Returns:** `void`

### public static SpeedControls getSpeedControls()

**Returns:** `SpeedControls`

### public static void setSpeedControls(SpeedControls aSpeedControls)

**Parameters:**
- `SpeedControls` `aSpeedControls` — the speedControls to set

**Returns:** `void`

### public static UIDebugConsole getDebugConsole()

**Returns:** `UIDebugConsole`

### public static void setDebugConsole(UIDebugConsole aDebugConsole)

**Parameters:**
- `UIDebugConsole` `aDebugConsole` — the DebugConsole to set

**Returns:** `void`

### public static MoodlesUI getMoodleUI(double index)

**Parameters:**
- `double` `index`

**Returns:** `MoodlesUI`

### public static void setMoodleUI(double index,
MoodlesUI aMoodleUI)

**Parameters:**
- `double` `index`
- `MoodlesUI` `aMoodleUI` — the MoodleUI to set

**Returns:** `void`

### public static boolean isbFadeBeforeUI()

**Returns:** `boolean`

### public static void setbFadeBeforeUI(boolean abFadeBeforeUI)

**Parameters:**
- `boolean` `abFadeBeforeUI` — the bFadeBeforeUI to set

**Returns:** `void`

### public static ActionProgressBar getProgressBar(double index)

**Parameters:**
- `double` `index`

**Returns:** `ActionProgressBar`

### public static void setProgressBar(double index,
ActionProgressBar aProgressBar)

**Parameters:**
- `double` `index`
- `ActionProgressBar` `aProgressBar` — the ProgressBar to set

**Returns:** `void`

### public static Double getFadeAlpha()

**Returns:** `Double`

### public static void setFadeAlpha(double aFadeAlpha)

**Parameters:**
- `double` `aFadeAlpha` — the FadeAlpha to set

**Returns:** `void`

### public static Double getFadeInTimeMax()

**Returns:** `Double`

### public static void setFadeInTimeMax(double aFadeInTimeMax)

**Parameters:**
- `double` `aFadeInTimeMax` — the FadeInTimeMax to set

**Returns:** `void`

### public static Double getFadeInTime()

**Returns:** `Double`

### public static void setFadeInTime(double aFadeInTime)

**Parameters:**
- `double` `aFadeInTime` — the FadeInTime to set

**Returns:** `void`

### public static Boolean isFadingOut()

**Returns:** `Boolean`

### public static void setFadingOut(boolean aFadingOut)

**Parameters:**
- `boolean` `aFadingOut` — the FadingOut to set

**Returns:** `void`

### public static Texture getLastMouseTexture()

**Returns:** `Texture`

### public static void setLastMouseTexture(Texture aLastMouseTexture)

**Parameters:**
- `Texture` `aLastMouseTexture` — the lastMouseTexture to set

**Returns:** `void`

### public static IsoObject getLastPicked()

**Returns:** `IsoObject`

### public static void setLastPicked(IsoObject aLastPicked)

**Parameters:**
- `IsoObject` `aLastPicked` — the LastPicked to set

**Returns:** `void`

### public static ArrayList<String> getDoneTutorials()

**Returns:** `ArrayList<String>`

### public static void setDoneTutorials(ArrayList<String> aDoneTutorials)

**Parameters:**
- `ArrayList<String>` `aDoneTutorials` — the DoneTutorials to set

**Returns:** `void`

### public static float getLastOffX()

**Returns:** `float`

### public static void setLastOffX(float aLastOffX)

**Parameters:**
- `float` `aLastOffX` — the lastOffX to set

**Returns:** `void`

### public static float getLastOffY()

**Returns:** `float`

### public static void setLastOffY(float aLastOffY)

**Parameters:**
- `float` `aLastOffY` — the lastOffY to set

**Returns:** `void`

### public static ModalDialog getModal()

**Returns:** `ModalDialog`

### public static void setModal(ModalDialog aModal)

**Parameters:**
- `ModalDialog` `aModal` — the Modal to set

**Returns:** `void`

### public static Texture getBlack()

**Returns:** `Texture`

### public static void setBlack(Texture aBlack)

**Parameters:**
- `Texture` `aBlack` — the black to set

**Returns:** `void`

### public static float getLastAlpha()

**Returns:** `float`

### public static void setLastAlpha(float aLastAlpha)

**Parameters:**
- `float` `aLastAlpha` — the lastAlpha to set

**Returns:** `void`

### public static Vector2 getPickedTileLocal()

**Returns:** `Vector2`

### public static void setPickedTileLocal(Vector2 aPickedTileLocal)

**Parameters:**
- `Vector2` `aPickedTileLocal` — the PickedTileLocal to set

**Returns:** `void`

### public static Vector2 getPickedTile()

**Returns:** `Vector2`

### public static void setPickedTile(Vector2 aPickedTile)

**Parameters:**
- `Vector2` `aPickedTile` — the PickedTile to set

**Returns:** `void`

### public static IsoObject getRightDownObject()

**Returns:** `IsoObject`

### public static void setRightDownObject(IsoObject aRightDownObject)

**Parameters:**
- `IsoObject` `aRightDownObject` — the RightDownObject to set

**Returns:** `void`

### public static boolean isShowPausedMessage()

**Returns:** `boolean`

### public static void setShowPausedMessage(boolean showPausedMessage)

**Parameters:**
- `boolean` `showPausedMessage`

**Returns:** `void`

### public static void setShowLuaDebuggerOnError(boolean show)

**Parameters:**
- `boolean` `show`

**Returns:** `void`

### public static boolean isShowLuaDebuggerOnError()

**Returns:** `boolean`

### public static void debugBreakpoint(String filename,
long pc)

**Parameters:**
- `String` `filename`
- `long` `pc`

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaThread getDefaultThread()

**Returns:** `se.krka.kahlua.vm.KahluaThread`

### public static Double getDoubleClickInterval()

**Returns:** `Double`

### public static Double getDoubleClickDist()

**Returns:** `Double`

### public static Boolean isDoubleClick(double x1,
double y1,
double x2,
double y2,
double clickTime)

**Parameters:**
- `double` `x1`
- `double` `y1`
- `double` `x2`
- `double` `y2`
- `double` `clickTime`

**Returns:** `Boolean`

### public static void setPlayerInventory(int playerIndex,
UIElementInterface inventory,
UIElementInterface loot)

**Parameters:**
- `int` `playerIndex`
- `UIElementInterface` `inventory`
- `UIElementInterface` `loot`

**Returns:** `void`

### public static void setPlayerInventoryTooltip(int playerIndex,
UIElementInterface inventory,
UIElementInterface loot)

**Parameters:**
- `int` `playerIndex`
- `UIElementInterface` `inventory`
- `UIElementInterface` `loot`

**Returns:** `void`

### public static boolean isMouseOverInventory()

**Returns:** `boolean`

### public static void updateBeforeFadeOut()

**Returns:** `void`

### public static void setVisibleAllUI(boolean visible)

**Parameters:**
- `boolean` `visible`

**Returns:** `void`

### public static void setFadeBeforeUI(int playerIndex,
boolean bFadeBeforeUI)

**Parameters:**
- `int` `playerIndex`
- `boolean` `bFadeBeforeUI`

**Returns:** `void`

### public static float getFadeAlpha(double playerIndex)

**Parameters:**
- `double` `playerIndex`

**Returns:** `float`

### public static void setFadeTime(double playerIndex,
double fadeTime)

**Parameters:**
- `double` `playerIndex`
- `double` `fadeTime`

**Returns:** `void`

### public static void FadeIn(double playerIndex,
double seconds)

**Parameters:**
- `double` `playerIndex`
- `double` `seconds`

**Returns:** `void`

### public static void FadeOut(double playerIndex,
double seconds)

**Parameters:**
- `double` `playerIndex`
- `double` `seconds`

**Returns:** `void`

### public static boolean isFBOActive()

**Returns:** `boolean`

### public static double getMillisSinceLastUpdate()

**Returns:** `double`

### public static double getSecondsSinceLastUpdate()

**Returns:** `double`

### public static double getMillisSinceLastRender()

**Returns:** `double`

### public static double getSecondsSinceLastRender()

**Returns:** `double`

### public static boolean onKeyPress(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean onKeyRepeat(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean onKeyRelease(int key)

**Parameters:**
- `int` `key`

**Returns:** `boolean`

### public static boolean isForceCursorVisible()

**Returns:** `boolean`

### public static Object tableget(se.krka.kahlua.vm.KahluaTable table,
Object key)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `table`
- `Object` `key`

**Returns:** `Object`

### public static float getBlinkAlpha(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public static int getSyncedIconIndex(int playerIndex,
int maxIndex)

**Parameters:**
- `int` `playerIndex`
- `int` `maxIndex`

**Returns:** `int`

### public static int resetSyncedIconIndex(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public static boolean isRendering()

**Returns:** `boolean`

### public static boolean isUpdating()

**Returns:** `boolean`

### public static boolean isModalVisible()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ui\UIManager.html`*
