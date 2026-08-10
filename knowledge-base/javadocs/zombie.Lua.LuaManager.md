---
title: zombie.Lua.LuaManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.Lua
---

# zombie.Lua.LuaManager

`public final class LuaManager extends Object`

**Kind:** class · **Package:** zombie.Lua

## Inheritance
- java.lang.Object
- zombie.Lua.LuaManager

## Fields

### public static se.krka.kahlua.converter.KahluaConverterManager converterManager

### public static se.krka.kahlua.j2se.J2SEPlatform platform

### public static se.krka.kahlua.vm.KahluaTable env

### public static se.krka.kahlua.vm.KahluaThread thread

### public static se.krka.kahlua.vm.KahluaThread debugthread

### public static se.krka.kahlua.integration.LuaCaller caller

### public static se.krka.kahlua.integration.LuaCaller debugcaller

### public static LuaManager.Exposer exposer

### public static ArrayList<String> loaded

### public static HashMap<String,Object> loadedReturn

### public static boolean checksumDone

### public static ArrayList<String> loadList

## Constructors

### public LuaManager()

## Methods

### public static void outputTable(se.krka.kahlua.vm.KahluaTable t,
int nTabs)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `t`
- `int` `nTabs`

**Returns:** `void`

### public static void init()

**Returns:** `void`

### public static void LoadDirBase(String sub)
throws Exception

**Parameters:**
- `String` `sub`

**Returns:** `void`

### public static void LoadDirBase(String sub,
boolean onlyChecksum)
throws Exception

**Parameters:**
- `String` `sub`
- `boolean` `onlyChecksum`

**Returns:** `void`

### public static void initChecksum()
throws Exception

**Returns:** `void`

### public static void finishChecksum()

**Returns:** `void`

### public static void LoadDirBase()
throws Exception

**Returns:** `void`

### public static void searchFolders(URI base,
File fo)
throws IOException

**Parameters:**
- `URI` `base`
- `File` `fo`

**Returns:** `void`

### public static String getLuaCacheDir()

**Returns:** `String`

### public static String getSandboxCacheDir()

**Returns:** `String`

### public static boolean isIndieStoneUrl(String url)

**Parameters:**
- `String` `url`

**Returns:** `boolean`

### public static void fillContainer(ItemContainer container,
IsoPlayer isoPlayer)

**Parameters:**
- `ItemContainer` `container`
- `IsoPlayer` `isoPlayer`

**Returns:** `void`

### public static void updateOverlaySprite(IsoObject obj)

**Parameters:**
- `IsoObject` `obj`

**Returns:** `void`

### public static se.krka.kahlua.vm.LuaClosure getDotDelimitedClosure(String path)

**Parameters:**
- `String` `path`

**Returns:** `se.krka.kahlua.vm.LuaClosure`

### public static IsoGridSquare AdjacentFreeTileFinder(IsoGridSquare test,
IsoPlayer player)

**Parameters:**
- `IsoGridSquare` `test`
- `IsoPlayer` `player`

**Returns:** `IsoGridSquare`

### public static Object RunLua(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `Object`

### public static Object RunLua(String filename,
boolean bRewriteEvents)

**Parameters:**
- `String` `filename`
- `boolean` `bRewriteEvents`

**Returns:** `Object`

### public static Object getFunctionObject(String functionName)

**Parameters:**
- `String` `functionName`

**Returns:** `Object`

### public static Object getFunctionObject(String functionName,
DebugType logger)

**Parameters:**
- `String` `functionName`
- `DebugType` `logger`

**Returns:** `Object`

### public static Object getTableObject(String tableName)

**Parameters:**
- `String` `tableName`

**Returns:** `Object`

### public static Object getTableObject(String tableName,
DebugType logger)

**Parameters:**
- `String` `tableName`
- `DebugType` `logger`

**Returns:** `Object`

### public static Object get(Object key)

**Parameters:**
- `Object` `key`

**Returns:** `Object`

### public static void call(String func,
Object param1)

**Parameters:**
- `String` `func`
- `Object` `param1`

**Returns:** `void`

### public static String getHourMinuteJava()

**Returns:** `String`

### public static void releaseAllVideoTextures()

**Returns:** `void`

### public static se.krka.kahlua.vm.KahluaTable copyTable(se.krka.kahlua.vm.KahluaTable from)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `from`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static se.krka.kahlua.vm.KahluaTable copyTable(se.krka.kahlua.vm.KahluaTable to,
se.krka.kahlua.vm.KahluaTable from)

**Parameters:**
- `se.krka.kahlua.vm.KahluaTable` `to`
- `se.krka.kahlua.vm.KahluaTable` `from`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public static StackTraceElement[] insertAnyLuaTraceElements(StackTraceElement[] stackTraceElementsRaw)

**Parameters:**
- `StackTraceElement[]` `stackTraceElementsRaw`

**Returns:** `StackTraceElement[]`

### public static se.krka.kahlua.vm.LuaCallFrame[] getLuaStackTraceCallFrames(se.krka.kahlua.vm.Coroutine coroutine)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `coroutine`

**Returns:** `se.krka.kahlua.vm.LuaCallFrame[]`

### public static String[] getLuaStackTraceStrings(se.krka.kahlua.vm.Coroutine coroutine)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `coroutine`

**Returns:** `String[]`

### public static StackTraceElement[] getLuaStackStrace(se.krka.kahlua.vm.Coroutine coroutine)

**Parameters:**
- `se.krka.kahlua.vm.Coroutine` `coroutine`

**Returns:** `StackTraceElement[]`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\Lua\LuaManager.html`*
