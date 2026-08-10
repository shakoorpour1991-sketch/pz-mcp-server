---
title: zombie.GameWindow
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.GameWindow

`public final class GameWindow extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.GameWindow

## Fields

### public static final Input GameInput

### public static final boolean DEBUG_SAVE

### public static boolean okToSaveOnExit

### public static String lastP

### public static GameStateMachine states

### public static boolean serverDisconnected

### public static boolean loadedAsClient

### public static String kickReason

### public static boolean drawReloadingLua

### public static JoypadManager.Joypad activatedJoyPad

### public static String version

### public static volatile boolean closeRequested

### public static float averageFPS

### public static boolean luaDebuggerKeyDown

### public static FileSystem fileSystem

### public static AssetManagers assetManagers

### public static boolean gameThreadExited

### public static Thread gameThread

### public static final ArrayList<zombie.GameWindow.TexturePack> texturePacks

### public static final FileSystem.TexturePackTextures texturePackTextures

## Constructors

### public GameWindow()

## Methods

### public static boolean isIngameState()

**Returns:** `boolean`

### public static void render()

**Returns:** `void`

### public static void InitDisplay()
throws IOException,
org.lwjglx.LWJGLException

**Returns:** `void`

### public static void InitGameThread()

**Returns:** `void`

### public static void uncaughtException(Thread thread,
Throwable e)

**Parameters:**
- `Thread` `thread`
- `Throwable` `e`

**Returns:** `void`

### public static long readLong(DataInputStream in)
throws IOException

**Parameters:**
- `DataInputStream` `in`

**Returns:** `long`

### public static int readInt(DataInputStream in)
throws IOException

**Parameters:**
- `DataInputStream` `in`

**Returns:** `int`

### public static long getUpdateTime()

**Returns:** `long`

### public static void setTexturePackLookup()

**Returns:** `void`

### public static void LoadTexturePack(String pack,
int flags)

**Parameters:**
- `String` `pack`
- `int` `flags`

**Returns:** `void`

### public static void LoadTexturePack(String pack,
int flags,
String modID)

**Parameters:**
- `String` `pack`
- `int` `flags`
- `String` `modID`

**Returns:** `void`

### public static void initFonts()
throws FileNotFoundException

**Returns:** `void`

### public static void save(boolean bDoChars)
throws IOException

**Parameters:**
- `boolean` `bDoChars`

**Returns:** `void`

### public static String getCoopServerHome()

**Returns:** `String`

### public static void WriteString(ByteBuffer output,
String str)

**Parameters:**
- `ByteBuffer` `output`
- `String` `str`

**Returns:** `void`

### public static void WriteString(DataOutputStream output,
String str)
throws IOException

**Parameters:**
- `DataOutputStream` `output`
- `String` `str`

**Returns:** `void`

### public static String ReadString(ByteBuffer input)

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `String`

### public static String ReadString(DataInputStream input)
throws IOException

**Parameters:**
- `DataInputStream` `input`

**Returns:** `String`

### public static ByteBuffer getEncodedBytesUTF(String str)

**Parameters:**
- `String` `str`

**Returns:** `ByteBuffer`

### public static void WriteUUID(ByteBuffer output,
UUID uuid)

**Parameters:**
- `ByteBuffer` `output`
- `UUID` `uuid`

**Returns:** `void`

### public static UUID ReadUUID(ByteBuffer input)

**Parameters:**
- `ByteBuffer` `input`

**Returns:** `UUID`

### public static void doRenderEvent(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public static void DoLoadingText(String text)

**Parameters:**
- `String` `text`

**Returns:** `void`

### public static void doEpilepsyWarningText()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\GameWindow.html`*
