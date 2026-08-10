---
title: zombie.core.Core
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.Core

`public final class Core extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.Core

## Fields

### public static boolean IS_DEV

### public static final float PZWorldToBulletZScale

### public static final float characterHeight

### public static final float characterRangedAimPointHeight

### public static final float characterMeleeAimPointHeight

### public static final boolean bDemo

### public static boolean tutorial

### public static int dirtyGlobalLightsCount

### public String steamServerVersion

### public static boolean altMoveMethod

### public final MultiTextureFBO2 offscreenBuffer

### public static boolean optionModsEnabled

### public static int tileScale

### public static float blinkAlpha

### public static boolean blinkAlphaIncrease

### public boolean animalCheat

### public boolean displayPlayerModel

### public boolean displayCursor

### public final MatrixStack projectionMatrixStack

### public final MatrixStack modelViewMatrixStack

### public static final org.lwjgl.util.vector.Vector3f UnitVector3f

### public static final org.lwjgl.util.vector.Vector3f _UNIT_Z

### public static int width

### public static int height

### public static float initialWidth

### public static float initialHeight

### public static int maxJukeBoxesActive

### public static int numJukeBoxesActive

### public static String gameMode

### public static boolean addZombieOnCellLoad

### public static String preset

### public static boolean debug

### public static boolean antiCheats

### public static boolean useViewports

### public static boolean useGameViewport

### public static boolean imGui

### public static UITextEntryInterface currentTextEntryBox

### public static final Core.KeyBinding KEYBINDING_EMPTY

### public final boolean useShaders

### public static final int iPerfSkybox_High

### public static final int iPerfSkybox_Medium

### public static final int iPerfSkybox_Static

### public static final int iPerfPuddles_None

### public static final int iPerfPuddles_GroundOnly

### public static final int iPerfPuddles_GroundWithRuts

### public static final int iPerfPuddles_All

### public int vidMem

### public float uiRenderAccumulator

### public boolean uiRenderThisFrame

### public int version

### public int fileversion

### public static String gameMap

### public static String gameSaveWorld

### public static boolean safeMode

### public static boolean safeModeForced

### public static boolean soundDisabled

### public int frameStage

### public static int xx

### public static int yy

### public static int zz

### public final HashMap<Integer,Float> floatParamMap

### public static final float ModelScale

### public static final float scale

### public static boolean lastStand

### public static String challengeId

### public static boolean exiting

## Constructors

### public Core()

## Methods

### public int getOptionCount()

**Returns:** `int`

### public ConfigOption getOptionByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `ConfigOption`

### public boolean isMultiThread()

**Returns:** `boolean`

### public void setChallenge(boolean bChallenge)

**Parameters:**
- `boolean` `bChallenge`

**Returns:** `void`

### public boolean isChallenge()

**Returns:** `boolean`

### public String getChallengeID()

**Returns:** `String`

### public boolean getOptionTieredZombieUpdates()

**Returns:** `boolean`

### public void setOptionTieredZombieUpdates(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public void setFramerate(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public void setMultiThread(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public static boolean isUseGameViewport()

**Returns:** `boolean`

### public static boolean isImGui()

**Returns:** `boolean`

### public static boolean isUseViewports()

**Returns:** `boolean`

### public boolean loadedShader()

**Returns:** `boolean`

### public static int getGLMajorVersion()

**Returns:** `int`

### public boolean getUseShaders()

**Returns:** `boolean`

### public int getPerfSkybox()

**Returns:** `int`

### public int getPerfSkyboxOnLoad()

**Returns:** `int`

### public void setPerfSkybox(int val)

**Parameters:**
- `int` `val`

**Returns:** `void`

### public boolean getPerfReflections()

**Returns:** `boolean`

### public boolean getPerfReflectionsOnLoad()

**Returns:** `boolean`

### public boolean getUseOpenGL21()

**Returns:** `boolean`

### public void setPerfReflections(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public int getPerfPuddles()

**Returns:** `int`

### public int getPerfPuddlesOnLoad()

**Returns:** `int`

### public void setPerfPuddles(int val)

**Parameters:**
- `int` `val`

**Returns:** `void`

### public int getVidMem()

**Returns:** `int`

### public void setVidMem(int mem)

**Parameters:**
- `int` `mem`

**Returns:** `void`

### public void setUseShaders(boolean bUse)

**Parameters:**
- `boolean` `bUse`

**Returns:** `void`

### public void shadersOptionChanged()

**Returns:** `void`

### public void initGlobalShader()

**Returns:** `void`

### public void initShaders()

**Returns:** `void`

### public static String getGLVersion()

**Returns:** `String`

### public String getGameMode()

**Returns:** `String`

### public void setGameMode(String gameMode)

**Parameters:**
- `String` `gameMode`

**Returns:** `void`

### public static Core getInstance()

**Returns:** `Core`

### public static void getOpenGLVersions()

**Returns:** `void`

### public boolean getDebug()

**Returns:** `boolean`

### public static void setFullScreen(boolean bool)

**Parameters:**
- `boolean` `bool`

**Returns:** `void`

### public static int[] flipPixels(int[] imgPixels,
int imgw,
int imgh)

**Parameters:**
- `int[]` `imgPixels`
- `int` `imgw`
- `int` `imgh`

**Returns:** `int[]`

### public void TakeScreenshot()

**Returns:** `void`

### public void TakeScreenshot(int width,
int height,
int readBuffer)

**Parameters:**
- `int` `width`
- `int` `height`
- `int` `readBuffer`

**Returns:** `void`

### public void TakeScreenshot(int x,
int y,
int width,
int height,
int readBuffer)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `int` `readBuffer`

**Returns:** `void`

### public void TakeFullScreenshot(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `void`

### public static boolean supportNPTTexture()

**Returns:** `boolean`

### public boolean supportsFBO()

**Returns:** `boolean`

### public void MoveMethodToggle()

**Returns:** `void`

### public void EndFrameText(int nPlayer)

**Parameters:**
- `int` `nPlayer`

**Returns:** `void`

### public void EndFrame(int nPlayer)

**Parameters:**
- `int` `nPlayer`

**Returns:** `void`

### public void EndFrame()

**Returns:** `void`

### public void EndFrameUI()

**Returns:** `void`

### public static void UnfocusActiveTextEntryBox()

**Returns:** `void`

### public int getOffscreenWidth(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public int getOffscreenHeight(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `int`

### public int getOffscreenTrueWidth()

**Returns:** `int`

### public int getOffscreenTrueHeight()

**Returns:** `int`

### public int getScreenHeight()

**Returns:** `int`

### public int getScreenWidth()

**Returns:** `int`

### public void setResolutionAndFullScreen(int w,
int h,
boolean fullScreen)

**Parameters:**
- `int` `w`
- `int` `h`
- `boolean` `fullScreen`

**Returns:** `void`

### public void setResolution(String res)

**Parameters:**
- `String` `res`

**Returns:** `void`

### public boolean loadOptions_OLD()
throws IOException

**Returns:** `boolean`

### public boolean loadOptions()
throws IOException

**Returns:** `boolean`

### public boolean isDefaultOptions()

**Returns:** `boolean`

### public boolean isDedicated()

**Returns:** `boolean`

### public static String getMyDocumentFolder()

**Returns:** `String`

### public void saveOptions_OLD()
throws IOException

**Returns:** `void`

### public void saveOptions()
throws IOException

**Returns:** `void`

### public void setWindowed(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isFullScreen()

**Returns:** `boolean`

### public se.krka.kahlua.vm.KahluaTable getScreenModes()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static void setDisplayMode(int width,
int height,
boolean fullscreen)

**Parameters:**
- `int` `width`
- `int` `height`
- `boolean` `fullscreen`

**Returns:** `void`

### public boolean isDoingTextEntry()

**Returns:** `boolean`

### public void updateKeyboard()

**Returns:** `void`

### public void quit()

**Returns:** `void`

### public void exitToMenu()

**Returns:** `void`

### public void quitToDesktop()

**Returns:** `void`

### public boolean supportRes(int width,
int height)
throws org.lwjglx.LWJGLException

**Parameters:**
- `int` `width`
- `int` `height`

**Returns:** `boolean`

### public void init(int width,
int height)
throws org.lwjglx.LWJGLException

**Parameters:**
- `int` `width`
- `int` `height`

**Returns:** `void`

### public static void setInitialSize()

**Returns:** `void`

### public void setScreenSize(int width,
int height)

**Parameters:**
- `int` `width`
- `int` `height`

**Returns:** `void`

### public static boolean supportCompressedTextures()

**Returns:** `boolean`

### public void StartFrame()

**Returns:** `void`

### public void StartFrame(int nPlayer,
boolean clear)

**Parameters:**
- `int` `nPlayer`
- `boolean` `clear`

**Returns:** `void`

### public TextureFBO getOffscreenBuffer()

**Returns:** `TextureFBO`

### public TextureFBO getOffscreenBuffer(int nPlayer)

**Parameters:**
- `int` `nPlayer`

**Returns:** `TextureFBO`

### public void setLastRenderedFBO(TextureFBO fbo)

**Parameters:**
- `TextureFBO` `fbo`

**Returns:** `void`

### public void DoStartFrameStuff(int w,
int h,
float zoom,
int player)

**Parameters:**
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`

**Returns:** `void`

### public void DoStartFrameStuff(int w,
int h,
float zoom,
int player,
boolean isTextFrame)

**Parameters:**
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`
- `boolean` `isTextFrame`

**Returns:** `void`

### public void DoEndFrameStuffFx(int w,
int h,
int player)

**Parameters:**
- `int` `w`
- `int` `h`
- `int` `player`

**Returns:** `void`

### public void DoStartFrameStuffSmartTextureFx(int w,
int h,
int player)

**Parameters:**
- `int` `w`
- `int` `h`
- `int` `player`

**Returns:** `void`

### public void ChangeWorldViewport(int w,
int h,
int player)

**Parameters:**
- `int` `w`
- `int` `h`
- `int` `player`

**Returns:** `void`

### public void StartFrameFlipY(int w,
int h,
float zoom,
int player)

**Parameters:**
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`

**Returns:** `void`

### public void DoStartFrameNoZoom(int w,
int h,
float zoom,
int player,
boolean isTextFrame,
boolean isFx,
boolean isSmartTexture)

**Parameters:**
- `int` `w`
- `int` `h`
- `float` `zoom`
- `int` `player`
- `boolean` `isTextFrame`
- `boolean` `isFx`
- `boolean` `isSmartTexture`

**Returns:** `void`

### public void DoPushIsoStuff(float ox,
float oy,
float oz,
float useangle,
boolean vehicle)

**Parameters:**
- `float` `ox`
- `float` `oy`
- `float` `oz`
- `float` `useangle`
- `boolean` `vehicle`

**Returns:** `void`

### public void DoPushIsoStuff2D(float ox,
float oy,
float oz,
float useangle,
boolean vehicle)

**Parameters:**
- `float` `ox`
- `float` `oy`
- `float` `oz`
- `float` `useangle`
- `boolean` `vehicle`

**Returns:** `void`

### public void DoPushIsoParticleStuff(float ox,
float oy,
float oz)

**Parameters:**
- `float` `ox`
- `float` `oy`
- `float` `oz`

**Returns:** `void`

### public void DoPopIsoStuff()

**Returns:** `void`

### public void DoEndFrameStuff(int w,
int h)

**Parameters:**
- `int` `w`
- `int` `h`

**Returns:** `void`

### public void RenderOffScreenBuffer()

**Returns:** `void`

### public void StartFrameText(int nPlayer)

**Parameters:**
- `int` `nPlayer`

**Returns:** `void`

### public boolean StartFrameUI()

**Returns:** `boolean`

### public void reinitKeyMaps()

**Returns:** `void`

### public boolean invalidBindingShiftCtrl(Core.KeyBinding keyB)

**Parameters:**
- `Core.KeyBinding` `keyB`

**Returns:** `boolean`

### public boolean isKey(String keyName,
Integer key)

**Parameters:**
- `String` `keyName`
- `Integer` `key`

**Returns:** `boolean`

### public int getKey(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `int`

### public Core.KeyBinding getKeyBinding(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `Core.KeyBinding`

### public Core.KeyBinding getKeyBinding(int keyId)

**Parameters:**
- `int` `keyId`

**Returns:** `Core.KeyBinding`

### public void addKeyBinding(String keyName,
int key,
int altKey,
boolean shift,
boolean ctrl,
boolean alt)

**Parameters:**
- `String` `keyName`
- `int` `key`
- `int` `altKey`
- `boolean` `shift`
- `boolean` `ctrl`
- `boolean` `alt`

**Returns:** `void`

### public int getAltKey(String keyName)

**Parameters:**
- `String` `keyName`

**Returns:** `int`

### public static boolean isLastStand()

**Returns:** `boolean`

### public String getVersion()

**Returns:** `String`

### public String getBulletVersion()

**Returns:** `String`

### public String getGitSha()

**Returns:** `String`

### public String getGitRevision()

**Returns:** `String`

### public static String getGitRevisionString()

**Returns:** `String`

### public GameVersion getGameVersion()

**Returns:** `GameVersion`

### public GameVersion getBreakModGameVersion()

**Returns:** `GameVersion`

### public String getSteamServerVersion()

**Returns:** `String`

### public void DoFrameReady()

**Returns:** `void`

### public float getCurrentPlayerZoom()

**Returns:** `float`

### public float getZoom(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `float`

### public float getNextZoom(int playerIndex,
int del)

**Parameters:**
- `int` `playerIndex`
- `int` `del`

**Returns:** `float`

### public float getMinZoom()

**Returns:** `float`

### public float getMaxZoom()

**Returns:** `float`

### public void doZoomScroll(int playerIndex,
int del)

**Parameters:**
- `int` `playerIndex`
- `int` `del`

**Returns:** `void`

### public String getSaveFolder()

**Returns:** `String`

### public boolean getOptionZoom()

**Returns:** `boolean`

### public void setOptionZoom(boolean zoom)

**Parameters:**
- `boolean` `zoom`

**Returns:** `void`

### public void zoomOptionChanged(boolean inGame)

**Parameters:**
- `boolean` `inGame`

**Returns:** `void`

### public void zoomLevelsChanged()

**Returns:** `void`

### public boolean isZoomEnabled()

**Returns:** `boolean`

### public void setZoomEnalbed(boolean val)

**Parameters:**
- `boolean` `val`

**Returns:** `void`

### public void initFBOs()

**Returns:** `void`

### public boolean getAutoZoom(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void setAutoZoom(int playerIndex,
boolean auto)

**Parameters:**
- `int` `playerIndex`
- `boolean` `auto`

**Returns:** `void`

### public boolean getOptionVSync()

**Returns:** `boolean`

### public void setOptionVSync(boolean sync)

**Parameters:**
- `boolean` `sync`

**Returns:** `void`

### public int getOptionSoundVolume()

**Returns:** `int`

### public float getRealOptionSoundVolume()

**Returns:** `float`

### public void setOptionSoundVolume(int volume)

**Parameters:**
- `int` `volume`

**Returns:** `void`

### public int getOptionMusicVolume()

**Returns:** `int`

### public void setOptionMusicVolume(int volume)

**Parameters:**
- `int` `volume`

**Returns:** `void`

### public int getOptionAmbientVolume()

**Returns:** `int`

### public void setOptionAmbientVolume(int volume)

**Parameters:**
- `int` `volume`

**Returns:** `void`

### public int getOptionJumpScareVolume()

**Returns:** `int`

### public void setOptionJumpScareVolume(int volume)

**Parameters:**
- `int` `volume`

**Returns:** `void`

### public int getOptionMusicActionStyle()

**Returns:** `int`

### public void setOptionMusicActionStyle(int v)

**Parameters:**
- `int` `v`

**Returns:** `void`

### public int getOptionMusicLibrary()

**Returns:** `int`

### public void setOptionMusicLibrary(int m)

**Parameters:**
- `int` `m`

**Returns:** `void`

### public int getOptionVehicleEngineVolume()

**Returns:** `int`

### public void setOptionVehicleEngineVolume(int volume)

**Parameters:**
- `int` `volume`

**Returns:** `void`

### public boolean getOptionStreamerMode()

**Returns:** `boolean`

### public void setOptionStreamerMode(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionVoiceEnable()

**Returns:** `boolean`

### public void setOptionVoiceEnable(boolean option)

**Parameters:**
- `boolean` `option`

**Returns:** `void`

### public void setOptionVoiceEnable(boolean option,
boolean bRestartClient)

**Parameters:**
- `boolean` `option`
- `boolean` `bRestartClient`

**Returns:** `void`

### public int getOptionVoiceMode()

**Returns:** `int`

### public void setOptionVoiceMode(int option)

**Parameters:**
- `int` `option`

**Returns:** `void`

### public int getOptionVoiceVADMode()

**Returns:** `int`

### public void setOptionVoiceVADMode(int option)

**Parameters:**
- `int` `option`

**Returns:** `void`

### public int getOptionVoiceAGCMode()

**Returns:** `int`

### public void setOptionVoiceAGCMode(int option)

**Parameters:**
- `int` `option`

**Returns:** `void`

### public int getOptionVoiceVolumeMic()

**Returns:** `int`

### public void setOptionVoiceVolumeMic(int option)

**Parameters:**
- `int` `option`

**Returns:** `void`

### public int getOptionVoiceVolumePlayers()

**Returns:** `int`

### public void setOptionVoiceVolumePlayers(int option)

**Parameters:**
- `int` `option`

**Returns:** `void`

### public String getOptionVoiceRecordDeviceName()

**Returns:** `String`

### public void setOptionVoiceRecordDeviceName(String option)

**Parameters:**
- `String` `option`

**Returns:** `void`

### public int getOptionVoiceRecordDevice()

**Returns:** `int`

### public void setOptionVoiceRecordDevice(int option)

**Parameters:**
- `int` `option`

**Returns:** `void`

### public int getMicVolumeIndicator()

**Returns:** `int`

### public boolean getMicVolumeError()

**Returns:** `boolean`

### public boolean getServerVOIPEnable()

**Returns:** `boolean`

### public void setTestingMicrophone(boolean testing)

**Parameters:**
- `boolean` `testing`

**Returns:** `void`

### public int getOptionReloadDifficulty()

**Returns:** `int`

### public void setOptionReloadDifficulty(int d)

**Parameters:**
- `int` `d`

**Returns:** `void`

### public boolean getOptionRackProgress()

**Returns:** `boolean`

### public void setOptionRackProgress(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public int getOptionFontSize()

**Returns:** `int`

### public void setOptionFontSize(int size)

**Parameters:**
- `int` `size`

**Returns:** `void`

### public int getOptionFontSizeReal()

**Returns:** `int`

### public int getOptionMoodleSize()

**Returns:** `int`

### public void setOptionMoodleSize(int size)

**Parameters:**
- `int` `size`

**Returns:** `void`

### public int getOptionSidebarSize()

**Returns:** `int`

### public void setOptionSidebarSize(int size)

**Parameters:**
- `int` `size`

**Returns:** `void`

### public int getOptionActionProgressBarSize()

**Returns:** `int`

### public void setOptionActionProgressBarSize(int size)

**Parameters:**
- `int` `size`

**Returns:** `void`

### public String getOptionContextMenuFont()

**Returns:** `String`

### public void setOptionContextMenuFont(String font)

**Parameters:**
- `String` `font`

**Returns:** `void`

### public String getOptionCodeFontSize()

**Returns:** `String`

### public void setOptionCodeFontSize(String font)

**Parameters:**
- `String` `font`

**Returns:** `void`

### public String getOptionInventoryFont()

**Returns:** `String`

### public void setOptionInventoryFont(String font)

**Parameters:**
- `String` `font`

**Returns:** `void`

### public int getOptionInventoryContainerSize()

**Returns:** `int`

### public void setOptionInventoryContainerSize(int size)

**Parameters:**
- `int` `size`

**Returns:** `void`

### public String getOptionTooltipFont()

**Returns:** `String`

### public void setOptionTooltipFont(String font)

**Parameters:**
- `String` `font`

**Returns:** `void`

### public String getOptionMeasurementFormat()

**Returns:** `String`

### public void setOptionMeasurementFormat(String format)

**Parameters:**
- `String` `format`

**Returns:** `void`

### public int getOptionClockFormat()

**Returns:** `int`

### public int getOptionClockSize()

**Returns:** `int`

### public void setOptionClockFormat(int fmt)

**Parameters:**
- `int` `fmt`

**Returns:** `void`

### public void setOptionClockSize(int size)

**Parameters:**
- `int` `size`

**Returns:** `void`

### public boolean getOptionClock24Hour()

**Returns:** `boolean`

### public void setOptionClock24Hour(boolean b24Hour)

**Parameters:**
- `boolean` `b24Hour`

**Returns:** `void`

### public boolean getOptionModsEnabled()

**Returns:** `boolean`

### public void setOptionModsEnabled(boolean enabled)

**Parameters:**
- `boolean` `enabled`

**Returns:** `void`

### public int getOptionBloodDecals()

**Returns:** `int`

### public void setOptionBloodDecals(int n)

**Parameters:**
- `int` `n`

**Returns:** `void`

### public boolean getOptionFocusloss()

**Returns:** `boolean`

### public void setOptionFocusloss(boolean pause)

**Parameters:**
- `boolean` `pause`

**Returns:** `void`

### public boolean getOptionMapViewPause()

**Returns:** `boolean`

### public void setOptionMapViewPause(boolean pause)

**Parameters:**
- `boolean` `pause`

**Returns:** `void`

### public boolean getOptionBorderlessWindow()

**Returns:** `boolean`

### public void setOptionBorderlessWindow(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionLockCursorToWindow()

**Returns:** `boolean`

### public void setOptionLockCursorToWindow(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean allowOptionTextureCompression()

**Returns:** `boolean`

### public boolean getOptionTextureCompression()

**Returns:** `boolean`

### public void setOptionTextureCompression(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionTexture2x()

**Returns:** `boolean`

### public void setOptionTexture2x(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionHighResPlacedItems()

**Returns:** `boolean`

### public void setOptionHighResPlacedItems(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public int getOptionMaxTextureSize()

**Returns:** `int`

### public void setOptionMaxTextureSize(int v)

**Parameters:**
- `int` `v`

**Returns:** `void`

### public int getOptionMaxVehicleTextureSize()

**Returns:** `int`

### public void setOptionMaxVehicleTextureSize(int v)

**Parameters:**
- `int` `v`

**Returns:** `void`

### public int getMaxTextureSizeFromFlags(int flags)

**Parameters:**
- `int` `flags`

**Returns:** `int`

### public int getMaxTextureSizeFromOption(int option)

**Parameters:**
- `int` `option`

**Returns:** `int`

### public int getMaxTextureSize()

**Returns:** `int`

### public int getMaxVehicleTextureSize()

**Returns:** `int`

### public boolean getOptionModelTextureMipmaps()

**Returns:** `boolean`

### public void setOptionModelTextureMipmaps(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public String getOptionZoomLevels1x()

**Returns:** `String`

### public void setOptionZoomLevels1x(String levels)

**Parameters:**
- `String` `levels`

**Returns:** `void`

### public String getOptionZoomLevels2x()

**Returns:** `String`

### public void setOptionZoomLevels2x(String levels)

**Parameters:**
- `String` `levels`

**Returns:** `void`

### public ArrayList<Integer> getDefaultZoomLevels()

**Returns:** `ArrayList<Integer>`

### public String getOptionScreenFilter()

**Returns:** `String`

### public void setOptionScreenFilter(String value)

**Parameters:**
- `String` `value`

**Returns:** `void`

### public int getScreenFilter()

**Returns:** `int`

### public void setOptionActiveController(int controllerIndex,
boolean active)

**Parameters:**
- `int` `controllerIndex`
- `boolean` `active`

**Returns:** `void`

### public boolean getOptionActiveController(String guid)

**Parameters:**
- `String` `guid`

**Returns:** `boolean`

### public boolean isOptionShowChatTimestamp()

**Returns:** `boolean`

### public void setOptionShowChatTimestamp(boolean optionShowChatTimestamp)

**Parameters:**
- `boolean` `optionShowChatTimestamp`

**Returns:** `void`

### public boolean isOptionShowChatTitle()

**Returns:** `boolean`

### public String getOptionChatFontSize()

**Returns:** `String`

### public void setOptionChatFontSize(String optionChatFontSize)

**Parameters:**
- `String` `optionChatFontSize`

**Returns:** `void`

### public void setOptionShowChatTitle(boolean optionShowChatTitle)

**Parameters:**
- `boolean` `optionShowChatTitle`

**Returns:** `void`

### public float getOptionMinChatOpaque()

**Returns:** `float`

### public void setOptionMinChatOpaque(float optionMinChatOpaque)

**Parameters:**
- `float` `optionMinChatOpaque`

**Returns:** `void`

### public float getOptionMaxChatOpaque()

**Returns:** `float`

### public void setOptionMaxChatOpaque(float optionMaxChatOpaque)

**Parameters:**
- `float` `optionMaxChatOpaque`

**Returns:** `void`

### public float getOptionChatFadeTime()

**Returns:** `float`

### public void setOptionChatFadeTime(float optionChatFadeTime)

**Parameters:**
- `float` `optionChatFadeTime`

**Returns:** `void`

### public boolean getOptionChatOpaqueOnFocus()

**Returns:** `boolean`

### public void setOptionChatOpaqueOnFocus(boolean optionChatOpaqueOnFocus)

**Parameters:**
- `boolean` `optionChatOpaqueOnFocus`

**Returns:** `void`

### public boolean getOptionTemperatureDisplayCelsius()

**Returns:** `boolean`

### public boolean getOptionUIFBO()

**Returns:** `boolean`

### public void setOptionUIFBO(boolean use)

**Parameters:**
- `boolean` `use`

**Returns:** `void`

### public boolean getOptionMeleeOutline()

**Returns:** `boolean`

### public void setOptionMeleeOutline(boolean toggle)

**Parameters:**
- `boolean` `toggle`

**Returns:** `void`

### public int getOptionUIRenderFPS()

**Returns:** `int`

### public void setOptionUIRenderFPS(int fps)

**Parameters:**
- `int` `fps`

**Returns:** `void`

### public void setOptionRadialMenuKeyToggle(boolean toggle)

**Parameters:**
- `boolean` `toggle`

**Returns:** `void`

### public boolean getOptionRadialMenuKeyToggle()

**Returns:** `boolean`

### public void setOptionReloadRadialInstant(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean getOptionReloadRadialInstant()

**Returns:** `boolean`

### public void setOptionPanCameraWhileAiming(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean getOptionPanCameraWhileAiming()

**Returns:** `boolean`

### public void setOptionPanCameraWhileDriving(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean getOptionPanCameraWhileDriving()

**Returns:** `boolean`

### public String getOptionCycleContainerKey()

**Returns:** `String`

### public void setOptionCycleContainerKey(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public boolean getOptionDropItemsOnSquareCenter()

**Returns:** `boolean`

### public void setOptionDropItemsOnSquareCenter(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionTimedActionGameSpeedReset()

**Returns:** `boolean`

### public void setOptionTimedActionGameSpeedReset(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public int getOptionShoulderButtonContainerSwitch()

**Returns:** `int`

### public void setOptionShoulderButtonContainerSwitch(int v)

**Parameters:**
- `int` `v`

**Returns:** `void`

### public int getOptionControllerButtonStyle()

**Returns:** `int`

### public void setOptionControllerButtonStyle(int v)

**Parameters:**
- `int` `v`

**Returns:** `void`

### public void onOptionControllerButtonStyleChanged(ConfigOption sender)

**Parameters:**
- `ConfigOption` `sender`

**Returns:** `void`

### public String getOptionControllerButtonStyleString()

**Returns:** `String`

### public void setOptionGamepadBindingPreset(String newValue)

**Parameters:**
- `String` `newValue`

**Returns:** `void`

### public void onOptionGamepadBindingPresetChanged(ConfigOption sender)

**Parameters:**
- `ConfigOption` `sender`

**Returns:** `void`

### public String getOptionGamepadBindingPreset()

**Returns:** `String`

### public boolean getOptionSingleContextMenu(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `boolean`

### public void setOptionSingleContextMenu(int playerIndex,
boolean b)

**Parameters:**
- `int` `playerIndex`
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionAutoDrink()

**Returns:** `boolean`

### public void setOptionAutoDrink(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean getOptionAutoRevealPrintMediaMapLocations()

**Returns:** `boolean`

### public void setOptionAutoRevealPrintMediaMapLocations(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean getOptionAutoWalkContainer()

**Returns:** `boolean`

### public void setOptionAutoWalkContainer(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean getOptionCorpseShadows()

**Returns:** `boolean`

### public void setOptionCorpseShadows(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean getOptionLeaveKeyInIgnition()

**Returns:** `boolean`

### public void setOptionLeaveKeyInIgnition(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public int getOptionSearchModeOverlayEffect()

**Returns:** `int`

### public void setOptionSearchModeOverlayEffect(int v)

**Parameters:**
- `int` `v`

**Returns:** `void`

### public int getOptionSimpleClothingTextures()

**Returns:** `int`

### public void setOptionSimpleClothingTextures(int v)

**Parameters:**
- `int` `v`

**Returns:** `void`

### public boolean isOptionSimpleClothingTextures(boolean bZombie)

**Parameters:**
- `boolean` `bZombie`

**Returns:** `boolean`

### public boolean getOptionSimpleWeaponTextures()

**Returns:** `boolean`

### public void setOptionSimpleWeaponTextures(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public int getOptionIgnoreProneZombieRange()

**Returns:** `int`

### public void setOptionIgnoreProneZombieRange(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public float getIgnoreProneZombieRange()

**Returns:** `float`

### @Deprecated
public void ResetLua(boolean sp,
String reason)
throws IOException

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `sp`
- `String` `reason`

**Returns:** `void`

### public void ResetLua(String activeMods,
String reason)
throws IOException

**Parameters:**
- `String` `activeMods`
- `String` `reason`

**Returns:** `void`

### public void DelayResetLua(String activeMods,
String reason)

**Parameters:**
- `String` `activeMods`
- `String` `reason`

**Returns:** `void`

### public void CheckDelayResetLua()
throws IOException

**Returns:** `void`

### public boolean isShowPing()

**Returns:** `boolean`

### public void setShowPing(boolean showPing)

**Parameters:**
- `boolean` `showPing`

**Returns:** `void`

### public boolean isForceSnow()

**Returns:** `boolean`

### public void setForceSnow(boolean forceSnow)

**Parameters:**
- `boolean` `forceSnow`

**Returns:** `void`

### public boolean isZombieGroupSound()

**Returns:** `boolean`

### public void setZombieGroupSound(boolean zombieGroupSound)

**Parameters:**
- `boolean` `zombieGroupSound`

**Returns:** `void`

### public String getBlinkingMoodle()

**Returns:** `String`

### public void setBlinkingMoodle(String blinkingMoodle)

**Parameters:**
- `String` `blinkingMoodle`

**Returns:** `void`

### public boolean isTutorialDone()

**Returns:** `boolean`

### public void setTutorialDone(boolean done)

**Parameters:**
- `boolean` `done`

**Returns:** `void`

### public boolean isVehiclesWarningShow()

**Returns:** `boolean`

### public void setVehiclesWarningShow(boolean done)

**Parameters:**
- `boolean` `done`

**Returns:** `void`

### public void initPoisonousBerry()

**Returns:** `void`

### public void initPoisonousMushroom()

**Returns:** `void`

### public String getPoisonousBerry()

**Returns:** `String`

### public void setPoisonousBerry(String poisonousBerry)

**Parameters:**
- `String` `poisonousBerry`

**Returns:** `void`

### public String getPoisonousMushroom()

**Returns:** `String`

### public void setPoisonousMushroom(String poisonousMushroom)

**Parameters:**
- `String` `poisonousMushroom`

**Returns:** `void`

### public boolean isDoneNewSaveFolder()

**Returns:** `boolean`

### public void setDoneNewSaveFolder(boolean doneNewSaveFolder)

**Parameters:**
- `boolean` `doneNewSaveFolder`

**Returns:** `void`

### public static int getTileScale()

**Returns:** `int`

### public boolean isSelectingAll()

**Returns:** `boolean`

### public void setIsSelectingAll(boolean isSelectingAll)

**Parameters:**
- `boolean` `isSelectingAll`

**Returns:** `void`

### public boolean getContentTranslationsEnabled()

**Returns:** `boolean`

### public void setContentTranslationsEnabled(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isShowYourUsername()

**Returns:** `boolean`

### public void setShowYourUsername(boolean showYourUsername)

**Parameters:**
- `boolean` `showYourUsername`

**Returns:** `void`

### public boolean isPopulateServerListOnStart()

**Returns:** `boolean`

### public void setPopulateServerListOnStart(boolean populateServerListOnStart)

**Parameters:**
- `boolean` `populateServerListOnStart`

**Returns:** `void`

### public ColorInfo getMpTextColor()

**Returns:** `ColorInfo`

### public void setMpTextColor(ColorInfo mpTextColor)

**Parameters:**
- `ColorInfo` `mpTextColor`

**Returns:** `void`

### public boolean isAzerty()

**Returns:** `boolean`

### public void setAzerty(boolean isAzerty)

**Parameters:**
- `boolean` `isAzerty`

**Returns:** `void`

### public ColorInfo getObjectHighlitedColor()

**Returns:** `ColorInfo`

### public void setObjectHighlitedColor(ColorInfo objectHighlitedColor)

**Parameters:**
- `ColorInfo` `objectHighlitedColor`

**Returns:** `void`

### public ColorInfo getWorldItemHighlightColor()

**Returns:** `ColorInfo`

### public void setWorldItemHighlightColor(ColorInfo colorInfo)

**Parameters:**
- `ColorInfo` `colorInfo`

**Returns:** `void`

### public ColorInfo getGoodHighlitedColor()

**Returns:** `ColorInfo`

### public void setGoodHighlitedColor(ColorInfo goodHighlitedColor)

**Parameters:**
- `ColorInfo` `goodHighlitedColor`

**Returns:** `void`

### public ColorInfo getBadHighlitedColor()

**Returns:** `ColorInfo`

### public void setBadHighlitedColor(ColorInfo badHighlitedColor)

**Parameters:**
- `ColorInfo` `badHighlitedColor`

**Returns:** `void`

### public boolean getOptionColorblindPatterns()

**Returns:** `boolean`

### public void setOptionColorblindPatterns(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean getOptionEnableDyslexicFont()

**Returns:** `boolean`

### public void setOptionEnableDyslexicFont(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean getOptionDisableLightningDuringStorms()

**Returns:** `boolean`

### public void setOptionDisableLightningDuringStorms(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public String getSeenUpdateText()

**Returns:** `String`

### public void setSeenUpdateText(String seenUpdateText)

**Parameters:**
- `String` `seenUpdateText`

**Returns:** `void`

### public boolean isToggleToAim()

**Returns:** `boolean`

### public void setToggleToAim(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public boolean isToggleToRun()

**Returns:** `boolean`

### public void setToggleToRun(boolean toggleToRun)

**Parameters:**
- `boolean` `toggleToRun`

**Returns:** `void`

### public int getXAngle(int width,
float angle)

**Parameters:**
- `int` `width`
- `float` `angle`

**Returns:** `int`

### public int getYAngle(int width,
float angle)

**Parameters:**
- `int` `width`
- `float` `angle`

**Returns:** `int`

### public boolean isCelsius()

**Returns:** `boolean`

### public void setCelsius(boolean celsius)

**Parameters:**
- `boolean` `celsius`

**Returns:** `void`

### public boolean isInDebug()

**Returns:** `boolean`

### public boolean isRiversideDone()

**Returns:** `boolean`

### public void setRiversideDone(boolean riversideDone)

**Parameters:**
- `boolean` `riversideDone`

**Returns:** `void`

### public boolean isNoSave()

**Returns:** `boolean`

### public void setNoSave(boolean noSave)

**Parameters:**
- `boolean` `noSave`

**Returns:** `void`

### public boolean isShowFirstTimeVehicleTutorial()

**Returns:** `boolean`

### public void setShowFirstTimeVehicleTutorial(boolean showFirstTimeVehicleTutorial)

**Parameters:**
- `boolean` `showFirstTimeVehicleTutorial`

**Returns:** `void`

### public boolean getOptionDisplayAsCelsius()

**Returns:** `boolean`

### public void setOptionDisplayAsCelsius(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean isShowFirstTimeWeatherTutorial()

**Returns:** `boolean`

### public void setShowFirstTimeWeatherTutorial(boolean showFirstTimeWeatherTutorial)

**Parameters:**
- `boolean` `showFirstTimeWeatherTutorial`

**Returns:** `void`

### public boolean getOptionDoVideoEffects()

**Returns:** `boolean`

### public void setOptionDoVideoEffects(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionDoWindSpriteEffects()

**Returns:** `boolean`

### public void setOptionDoWindSpriteEffects(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionDoDoorSpriteEffects()

**Returns:** `boolean`

### public void setOptionDoDoorSpriteEffects(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionDoContainerOutline()

**Returns:** `boolean`

### public void setOptionDoContainerOutline(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setOptionUpdateSneakButton(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionUpdateSneakButton()

**Returns:** `boolean`

### public boolean isShowFirstTimeSneakTutorial()

**Returns:** `boolean`

### public void setShowFirstTimeSneakTutorial(boolean showFirstTimeSneakTutorial)

**Parameters:**
- `boolean` `showFirstTimeSneakTutorial`

**Returns:** `void`

### public double getShownWelcomeMessageVersion()

**Returns:** `double`

### public void setShownWelcomeMessageVersion(double value)

**Parameters:**
- `double` `value`

**Returns:** `void`

### public boolean isShowFirstTimeSearchTutorial()

**Returns:** `boolean`

### public void setShowFirstTimeSearchTutorial(boolean showFirstTimeSearchTutorial)

**Parameters:**
- `boolean` `showFirstTimeSearchTutorial`

**Returns:** `void`

### public int getTermsOfServiceVersion()

**Returns:** `int`

### public void setTermsOfServiceVersion(int v)

**Parameters:**
- `int` `v`

**Returns:** `void`

### public void setOptiondblTapJogToSprint(boolean dbltap)

**Parameters:**
- `boolean` `dbltap`

**Returns:** `void`

### public boolean isOptiondblTapJogToSprint()

**Returns:** `boolean`

### public boolean isToggleToSprint()

**Returns:** `boolean`

### public void setToggleToSprint(boolean toggleToSprint)

**Parameters:**
- `boolean` `toggleToSprint`

**Returns:** `void`

### public int getIsoCursorVisibility()

**Returns:** `int`

### public void setIsoCursorVisibility(int isoCursorVisibility)

**Parameters:**
- `int` `isoCursorVisibility`

**Returns:** `void`

### public boolean getOptionShowCursorWhileAiming()

**Returns:** `boolean`

### public void setOptionShowCursorWhileAiming(boolean show)

**Parameters:**
- `boolean` `show`

**Returns:** `void`

### public boolean gotNewBelt()

**Returns:** `boolean`

### public void setGotNewBelt(boolean gotit)

**Parameters:**
- `boolean` `gotit`

**Returns:** `void`

### public void setAnimPopupDone(boolean done)

**Parameters:**
- `boolean` `done`

**Returns:** `void`

### public boolean isAnimPopupDone()

**Returns:** `boolean`

### public void setModsPopupDone(boolean done)

**Parameters:**
- `boolean` `done`

**Returns:** `void`

### public boolean isModsPopupDone()

**Returns:** `boolean`

### public boolean isRenderPrecipIndoors()

**Returns:** `boolean`

### public void setRenderPrecipIndoors(boolean optionRenderPrecipIndoors)

**Parameters:**
- `boolean` `optionRenderPrecipIndoors`

**Returns:** `void`

### public float getOptionPrecipitationSpeedMultiplier()

**Returns:** `float`

### public void setOptionPrecipitationSpeedMultiplier(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public boolean isCollideZombies()

**Returns:** `boolean`

### public void setCollideZombies(boolean collideZombies)

**Parameters:**
- `boolean` `collideZombies`

**Returns:** `void`

### public boolean isFlashIsoCursor()

**Returns:** `boolean`

### public void setFlashIsoCursor(boolean flashIsoCursor)

**Parameters:**
- `boolean` `flashIsoCursor`

**Returns:** `void`

### public boolean isOptionProgressBar()

**Returns:** `boolean`

### public void setOptionProgressBar(boolean optionProgressBar)

**Parameters:**
- `boolean` `optionProgressBar`

**Returns:** `void`

### public void setOptionLanguageName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getOptionLanguageName()

**Returns:** `String`

### public int getOptionRenderPrecipitation()

**Returns:** `int`

### public void setOptionRenderPrecipitation(int optionRenderPrecipitation)

**Parameters:**
- `int` `optionRenderPrecipitation`

**Returns:** `void`

### public void setOptionAutoProneAtk(boolean optionAutoProneAtk)

**Parameters:**
- `boolean` `optionAutoProneAtk`

**Returns:** `void`

### public boolean isOptionAutoProneAtk()

**Returns:** `boolean`

### public void setOption3DGroundItem(boolean option3Dgrounditem)

**Parameters:**
- `boolean` `option3Dgrounditem`

**Returns:** `void`

### public boolean isOption3DGroundItem()

**Returns:** `boolean`

### public Object getOptionOnStartup(String name)

**Parameters:**
- `String` `name`

**Returns:** `Object`

### public void setOptionOnStartup(String name,
Object value)

**Parameters:**
- `String` `name`
- `Object` `value`

**Returns:** `void`

### public void countMissing3DItems()

**Returns:** `void`

### public boolean getOptionShowItemModInfo()

**Returns:** `boolean`

### public void setOptionShowItemModInfo(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionShowCraftingXP()

**Returns:** `boolean`

### public void setOptionShowCraftingXP(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionShowSurvivalGuide()

**Returns:** `boolean`

### public void setOptionShowSurvivalGuide(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionShowFirstAnimalZoneInfo()

**Returns:** `boolean`

### public void setOptionShowFirstAnimalZoneInfo(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionEnableLeftJoystickRadialMenu()

**Returns:** `boolean`

### public void setOptionEnableLeftJoystickRadialMenu(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionMacOSIgnoreMouseWheelAcceleration()

**Returns:** `boolean`

### public void setOptionMacOSIgnoreMouseWheelAcceleration(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getOptionMacOSMapHorizontalMouseWheelToVertical()

**Returns:** `boolean`

### public void setOptionMacOSMapHorizontalMouseWheelToVertical(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public String getVersionNumber()

**Returns:** `String`

### public void setAnimalCheat(boolean cheat)

**Parameters:**
- `boolean` `cheat`

**Returns:** `void`

### public void setDisplayPlayerModel(boolean display)

**Parameters:**
- `boolean` `display`

**Returns:** `void`

### public boolean isDisplayPlayerModel()

**Returns:** `boolean`

### public void setDisplayCursor(boolean display)

**Parameters:**
- `boolean` `display`

**Returns:** `void`

### public boolean isDisplayCursor()

**Returns:** `boolean`

### public boolean getOptionShowAimTexture()

**Returns:** `boolean`

### public void setOptionShowAimTexture(boolean show)

**Parameters:**
- `boolean` `show`

**Returns:** `void`

### public boolean getOptionShowReticleTexture()

**Returns:** `boolean`

### public void setOptionShowReticleTexture(boolean show)

**Parameters:**
- `boolean` `show`

**Returns:** `void`

### public boolean getOptionShowValidTargetReticleTexture()

**Returns:** `boolean`

### public void setOptionShowValidTargetReticleTexture(boolean show)

**Parameters:**
- `boolean` `show`

**Returns:** `void`

### public int getOptionReticleMode()

**Returns:** `int`

### public void setOptionReticleMode(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### public void setOptionAimTextureIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public int getOptionAimTextureIndex()

**Returns:** `int`

### public void setOptionReticleTextureIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public int getOptionReticleTextureIndex()

**Returns:** `int`

### public void setOptionValidTargetReticleTextureIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public int getOptionValidTargetReticleTextureIndex()

**Returns:** `int`

### public void setOptionCrosshairTextureIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `void`

### public int getOptionCrosshairTextureIndex()

**Returns:** `int`

### public ColorInfo getTargetColor()

**Returns:** `ColorInfo`

### public void setTargetColor(ColorInfo colorInfo)

**Parameters:**
- `ColorInfo` `colorInfo`

**Returns:** `void`

### public ColorInfo getNoTargetColor()

**Returns:** `ColorInfo`

### public void setNoTargetColor(ColorInfo colorInfo)

**Parameters:**
- `ColorInfo` `colorInfo`

**Returns:** `void`

### public int getOptionMaxCrosshairOffset()

**Returns:** `int`

### public void setOptionMaxCrosshairOffset(int maxCrosshairOffset)

**Parameters:**
- `int` `maxCrosshairOffset`

**Returns:** `void`

### public boolean getOptionReticleCameraZoom()

**Returns:** `boolean`

### public void setOptionReticleCameraZoom(boolean optionReticleCameraZoom)

**Parameters:**
- `boolean` `optionReticleCameraZoom`

**Returns:** `void`

### public float getIsoCursorAlpha()

**Returns:** `float`

### public String debugOutputMissingItemSpawn()
throws Exception

**Returns:** `String`

### public String debugOutputMissingCLothingSpawn()
throws Exception

**Returns:** `String`

### public String debugOutputMissingSpawn(String directory,
String category)
throws Exception

**Parameters:**
- `String` `directory`
- `String` `category`

**Returns:** `String`

### public String getSelectedMap()

**Returns:** `String`

### public void setSelectedMap(String selectedMap)

**Parameters:**
- `String` `selectedMap`

**Returns:** `void`

### public int getConsoleDotTxtSizeKB()

**Returns:** `int`

### public void setConsoleDotTxtSizeKB(int kilobytes)

**Parameters:**
- `int` `kilobytes`

**Returns:** `void`

### public void setConsoleDotTxtSizeKB(String kilobytesString)

**Parameters:**
- `String` `kilobytesString`

**Returns:** `void`

### public boolean getOptionUsePhysicsHitReaction()

**Returns:** `boolean`

### public void setOptionUsePhysicsHitReaction(boolean usePhysicsHitReaction)

**Parameters:**
- `boolean` `usePhysicsHitReaction`

**Returns:** `void`

### public int getMaxActiveRagdolls()

**Returns:** `int`

### public void setMaxActiveRagdolls(int maxActiveRagdolls)

**Parameters:**
- `int` `maxActiveRagdolls`

**Returns:** `void`

### public double getOptionWorldMapBrightness()

**Returns:** `double`

### public void setOptionWorldMapBrightness(double d)

**Parameters:**
- `double` `d`

**Returns:** `void`

### public boolean getOptionShowWelcomeMessage()

**Returns:** `boolean`

### public void setOptionShowWelcomeMessage(boolean showWelcomeMessage)

**Parameters:**
- `boolean` `showWelcomeMessage`

**Returns:** `void`

### public Account getAccountUsed()

**Returns:** `Account`

### public void setAccountUsed(Account accountUsed)

**Parameters:**
- `Account` `accountUsed`

**Returns:** `void`

### public static boolean isDevMode()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\Core.html`*
