---
title: fmod.javafmod
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: fmod
---

# fmod.javafmod

`public class javafmod extends Object`

**Kind:** class · **Package:** fmod

## Inheritance
- java.lang.Object
- fmod.javafmod

## Constructors

### public javafmod()

## Methods

### public static int FMOD_Memory_Initialize(SWIGTYPE_p_void sWIGTYPE_p_void,
int int0,
SWIGTYPE_p_FMOD_MEMORY_ALLOC_CALLBACK sWIGTYPE_p_FMOD_MEMORY_ALLOC_CALLBACK,
SWIGTYPE_p_FMOD_MEMORY_REALLOC_CALLBACK sWIGTYPE_p_FMOD_MEMORY_REALLOC_CALLBACK,
SWIGTYPE_p_FMOD_MEMORY_FREE_CALLBACK sWIGTYPE_p_FMOD_MEMORY_FREE_CALLBACK,
SWIGTYPE_p_FMOD_MEMORY_TYPE sWIGTYPE_p_FMOD_MEMORY_TYPE)

**Parameters:**
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`
- `int` `int0`
- `SWIGTYPE_p_FMOD_MEMORY_ALLOC_CALLBACK` `sWIGTYPE_p_FMOD_MEMORY_ALLOC_CALLBACK`
- `SWIGTYPE_p_FMOD_MEMORY_REALLOC_CALLBACK` `sWIGTYPE_p_FMOD_MEMORY_REALLOC_CALLBACK`
- `SWIGTYPE_p_FMOD_MEMORY_FREE_CALLBACK` `sWIGTYPE_p_FMOD_MEMORY_FREE_CALLBACK`
- `SWIGTYPE_p_FMOD_MEMORY_TYPE` `sWIGTYPE_p_FMOD_MEMORY_TYPE`

**Returns:** `int`

### public static int FMOD_Memory_GetStats(SWIGTYPE_p_int sWIGTYPE_p_int1,
SWIGTYPE_p_int sWIGTYPE_p_int0,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_int` `sWIGTYPE_p_int1`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int0`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Debug_Initialize(SWIGTYPE_p_FMOD_DEBUG_FLAGS sWIGTYPE_p_FMOD_DEBUG_FLAGS,
SWIGTYPE_p_FMOD_DEBUG_MODE sWIGTYPE_p_FMOD_DEBUG_MODE,
SWIGTYPE_p_FMOD_DEBUG_CALLBACK sWIGTYPE_p_FMOD_DEBUG_CALLBACK,
String string)

**Parameters:**
- `SWIGTYPE_p_FMOD_DEBUG_FLAGS` `sWIGTYPE_p_FMOD_DEBUG_FLAGS`
- `SWIGTYPE_p_FMOD_DEBUG_MODE` `sWIGTYPE_p_FMOD_DEBUG_MODE`
- `SWIGTYPE_p_FMOD_DEBUG_CALLBACK` `sWIGTYPE_p_FMOD_DEBUG_CALLBACK`
- `String` `string`

**Returns:** `int`

### public static int FMOD_File_SetDiskBusy(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int FMOD_File_GetDiskBusy(SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_System_Create()

**Returns:** `int`

### public static int FMOD_System_Release(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_System_SetOutput(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_OUTPUTTYPE sWIGTYPE_p_FMOD_OUTPUTTYPE)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_OUTPUTTYPE` `sWIGTYPE_p_FMOD_OUTPUTTYPE`

**Returns:** `int`

### public static int FMOD_System_GetOutput(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_OUTPUTTYPE sWIGTYPE_p_FMOD_OUTPUTTYPE)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_OUTPUTTYPE` `sWIGTYPE_p_FMOD_OUTPUTTYPE`

**Returns:** `int`

### public static int FMOD_System_GetNumDrivers(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_System_GetDriverInfo(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0,
String string,
int int1,
SWIGTYPE_p_FMOD_GUID sWIGTYPE_p_FMOD_GUID,
SWIGTYPE_p_int sWIGTYPE_p_int1,
SWIGTYPE_p_FMOD_SPEAKERMODE sWIGTYPE_p_FMOD_SPEAKERMODE,
SWIGTYPE_p_int sWIGTYPE_p_int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`
- `String` `string`
- `int` `int1`
- `SWIGTYPE_p_FMOD_GUID` `sWIGTYPE_p_FMOD_GUID`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int1`
- `SWIGTYPE_p_FMOD_SPEAKERMODE` `sWIGTYPE_p_FMOD_SPEAKERMODE`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int0`

**Returns:** `int`

### public static int FMOD_System_SetDriver(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_System_GetDriver(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_System_SetSoftwareChannels(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_System_GetSoftwareChannels(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_System_SetSoftwareFormat(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0,
SWIGTYPE_p_FMOD_SPEAKERMODE sWIGTYPE_p_FMOD_SPEAKERMODE,
int int1)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`
- `SWIGTYPE_p_FMOD_SPEAKERMODE` `sWIGTYPE_p_FMOD_SPEAKERMODE`
- `int` `int1`

**Returns:** `int`

### public static int FMOD_System_GetSoftwareFormat(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_int sWIGTYPE_p_int1,
SWIGTYPE_p_FMOD_SPEAKERMODE sWIGTYPE_p_FMOD_SPEAKERMODE,
SWIGTYPE_p_int sWIGTYPE_p_int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int1`
- `SWIGTYPE_p_FMOD_SPEAKERMODE` `sWIGTYPE_p_FMOD_SPEAKERMODE`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int0`

**Returns:** `int`

### public static int FMOD_System_SetDSPBufferSize(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
long long0,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `long` `long0`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_System_GetDSPBufferSize(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_System_SetFileSystem(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_FILE_OPEN_CALLBACK sWIGTYPE_p_FMOD_FILE_OPEN_CALLBACK,
SWIGTYPE_p_FMOD_FILE_CLOSE_CALLBACK sWIGTYPE_p_FMOD_FILE_CLOSE_CALLBACK,
SWIGTYPE_p_FMOD_FILE_READ_CALLBACK sWIGTYPE_p_FMOD_FILE_READ_CALLBACK,
SWIGTYPE_p_FMOD_FILE_SEEK_CALLBACK sWIGTYPE_p_FMOD_FILE_SEEK_CALLBACK,
SWIGTYPE_p_FMOD_FILE_ASYNCREAD_CALLBACK sWIGTYPE_p_FMOD_FILE_ASYNCREAD_CALLBACK,
SWIGTYPE_p_FMOD_FILE_ASYNCCANCEL_CALLBACK sWIGTYPE_p_FMOD_FILE_ASYNCCANCEL_CALLBACK,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_FILE_OPEN_CALLBACK` `sWIGTYPE_p_FMOD_FILE_OPEN_CALLBACK`
- `SWIGTYPE_p_FMOD_FILE_CLOSE_CALLBACK` `sWIGTYPE_p_FMOD_FILE_CLOSE_CALLBACK`
- `SWIGTYPE_p_FMOD_FILE_READ_CALLBACK` `sWIGTYPE_p_FMOD_FILE_READ_CALLBACK`
- `SWIGTYPE_p_FMOD_FILE_SEEK_CALLBACK` `sWIGTYPE_p_FMOD_FILE_SEEK_CALLBACK`
- `SWIGTYPE_p_FMOD_FILE_ASYNCREAD_CALLBACK` `sWIGTYPE_p_FMOD_FILE_ASYNCREAD_CALLBACK`
- `SWIGTYPE_p_FMOD_FILE_ASYNCCANCEL_CALLBACK` `sWIGTYPE_p_FMOD_FILE_ASYNCCANCEL_CALLBACK`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_System_AttachFileSystem(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_FILE_OPEN_CALLBACK sWIGTYPE_p_FMOD_FILE_OPEN_CALLBACK,
SWIGTYPE_p_FMOD_FILE_CLOSE_CALLBACK sWIGTYPE_p_FMOD_FILE_CLOSE_CALLBACK,
SWIGTYPE_p_FMOD_FILE_READ_CALLBACK sWIGTYPE_p_FMOD_FILE_READ_CALLBACK,
SWIGTYPE_p_FMOD_FILE_SEEK_CALLBACK sWIGTYPE_p_FMOD_FILE_SEEK_CALLBACK)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_FILE_OPEN_CALLBACK` `sWIGTYPE_p_FMOD_FILE_OPEN_CALLBACK`
- `SWIGTYPE_p_FMOD_FILE_CLOSE_CALLBACK` `sWIGTYPE_p_FMOD_FILE_CLOSE_CALLBACK`
- `SWIGTYPE_p_FMOD_FILE_READ_CALLBACK` `sWIGTYPE_p_FMOD_FILE_READ_CALLBACK`
- `SWIGTYPE_p_FMOD_FILE_SEEK_CALLBACK` `sWIGTYPE_p_FMOD_FILE_SEEK_CALLBACK`

**Returns:** `int`

### public static int FMOD_System_SetAdvancedSettings(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_ADVANCEDSETTINGS sWIGTYPE_p_FMOD_ADVANCEDSETTINGS)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_ADVANCEDSETTINGS` `sWIGTYPE_p_FMOD_ADVANCEDSETTINGS`

**Returns:** `int`

### public static int FMOD_System_GetAdvancedSettings(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_ADVANCEDSETTINGS sWIGTYPE_p_FMOD_ADVANCEDSETTINGS)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_ADVANCEDSETTINGS` `sWIGTYPE_p_FMOD_ADVANCEDSETTINGS`

**Returns:** `int`

### public static int FMOD_System_SetCallback(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_SYSTEM_CALLBACK sWIGTYPE_p_FMOD_SYSTEM_CALLBACK,
SWIGTYPE_p_FMOD_SYSTEM_CALLBACK_TYPE sWIGTYPE_p_FMOD_SYSTEM_CALLBACK_TYPE)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_SYSTEM_CALLBACK` `sWIGTYPE_p_FMOD_SYSTEM_CALLBACK`
- `SWIGTYPE_p_FMOD_SYSTEM_CALLBACK_TYPE` `sWIGTYPE_p_FMOD_SYSTEM_CALLBACK_TYPE`

**Returns:** `int`

### public static int FMOD_System_SetPluginPath(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
String string)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `String` `string`

**Returns:** `int`

### public static int FMOD_System_LoadPlugin(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
String string,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int,
long long0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `String` `string`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`
- `long` `long0`

**Returns:** `int`

### public static int FMOD_System_UnloadPlugin(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
long long0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `long` `long0`

**Returns:** `int`

### public static int FMOD_System_GetNumPlugins(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_PLUGINTYPE sWIGTYPE_p_FMOD_PLUGINTYPE,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_PLUGINTYPE` `sWIGTYPE_p_FMOD_PLUGINTYPE`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_System_GetPluginHandle(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_PLUGINTYPE sWIGTYPE_p_FMOD_PLUGINTYPE,
int int0,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_PLUGINTYPE` `sWIGTYPE_p_FMOD_PLUGINTYPE`
- `int` `int0`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`

**Returns:** `int`

### public static int FMOD_System_GetPluginInfo(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
long long0,
SWIGTYPE_p_FMOD_PLUGINTYPE sWIGTYPE_p_FMOD_PLUGINTYPE,
String string,
int int0,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `long` `long0`
- `SWIGTYPE_p_FMOD_PLUGINTYPE` `sWIGTYPE_p_FMOD_PLUGINTYPE`
- `String` `string`
- `int` `int0`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`

**Returns:** `int`

### public static int FMOD_System_SetOutputByPlugin(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
long long0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `long` `long0`

**Returns:** `int`

### public static int FMOD_System_GetOutputByPlugin(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`

**Returns:** `int`

### public static int FMOD_System_CreateDSPByPlugin(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
long long0,
SWIGTYPE_p_p_FMOD_DSP sWIGTYPE_p_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `long` `long0`
- `SWIGTYPE_p_p_FMOD_DSP` `sWIGTYPE_p_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_System_GetDSPInfoByPlugin(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
long long0,
SWIGTYPE_p_p_FMOD_DSP_DESCRIPTION sWIGTYPE_p_p_FMOD_DSP_DESCRIPTION)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `long` `long0`
- `SWIGTYPE_p_p_FMOD_DSP_DESCRIPTION` `sWIGTYPE_p_p_FMOD_DSP_DESCRIPTION`

**Returns:** `int`

### public static int FMOD_System_RegisterCodec(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_CODEC_DESCRIPTION sWIGTYPE_p_FMOD_CODEC_DESCRIPTION,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int,
long long0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_CODEC_DESCRIPTION` `sWIGTYPE_p_FMOD_CODEC_DESCRIPTION`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`
- `long` `long0`

**Returns:** `int`

### public static int FMOD_System_RegisterDSP(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_DSP_DESCRIPTION sWIGTYPE_p_FMOD_DSP_DESCRIPTION,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_DSP_DESCRIPTION` `sWIGTYPE_p_FMOD_DSP_DESCRIPTION`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`

**Returns:** `int`

### public static int FMOD_System_Init(int int0,
long long0,
long long1)

**Parameters:**
- `int` `int0`
- `long` `long0`
- `long` `long1`

**Returns:** `int`

### public static int FMOD_System_Close(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_System_Update()

**Returns:** `int`

### public static int FMOD_System_SetSpeakerPosition(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_SPEAKER sWIGTYPE_p_FMOD_SPEAKER,
float float0,
float float1,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_SPEAKER` `sWIGTYPE_p_FMOD_SPEAKER`
- `float` `float0`
- `float` `float1`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_System_GetSpeakerPosition(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_SPEAKER sWIGTYPE_p_FMOD_SPEAKER,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_SPEAKER` `sWIGTYPE_p_FMOD_SPEAKER`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_System_SetStreamBufferSize(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
long long0,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `long` `long0`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT`

**Returns:** `int`

### public static int FMOD_System_GetStreamBufferSize(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT`

**Returns:** `int`

### public static int FMOD_System_Set3DSettings(float float0,
float float1,
float float2)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`

**Returns:** `int`

### public static int FMOD_System_Get3DSettings(SWIGTYPE_p_float sWIGTYPE_p_float2,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_float` `sWIGTYPE_p_float2`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_System_Set3DNumListeners(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int FMOD_System_Get3DNumListeners(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_System_Set3DListenerAttributes(int int0,
float float0,
float float1,
float float2,
float float3,
float float4,
float float5,
float float6,
float float7,
float float8,
float float9,
float float10,
float float11)

**Parameters:**
- `int` `int0`
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`
- `float` `float4`
- `float` `float5`
- `float` `float6`
- `float` `float7`
- `float` `float8`
- `float` `float9`
- `float` `float10`
- `float` `float11`

**Returns:** `int`

### public static int FMOD_System_Get3DListenerAttributes(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR3,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR2,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR1,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR3`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR2`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR1`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR0`

**Returns:** `int`

### public static int FMOD_System_Set3DRolloffCallback(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_3D_ROLLOFF_CALLBACK sWIGTYPE_p_FMOD_3D_ROLLOFF_CALLBACK)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_3D_ROLLOFF_CALLBACK` `sWIGTYPE_p_FMOD_3D_ROLLOFF_CALLBACK`

**Returns:** `int`

### public static int FMOD_System_MixerSuspend(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_System_MixerResume(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_System_GetVersion(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`

**Returns:** `int`

### public static int FMOD_System_GetOutputHandle(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`

**Returns:** `int`

### public static int FMOD_System_GetChannelsPlaying(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_System_GetCPUUsage(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_float sWIGTYPE_p_float4,
SWIGTYPE_p_float sWIGTYPE_p_float3,
SWIGTYPE_p_float sWIGTYPE_p_float2,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float4`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float3`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float2`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static long FMOD_System_CreateSound(String string,
long long0)

**Parameters:**
- `String` `string`
- `long` `long0`

**Returns:** `long`

### public static long FMOD_System_CreateRecordSound(long long0,
long long1,
long long2,
long long3,
int int0)

**Parameters:**
- `long` `long0`
- `long` `long1`
- `long` `long2`
- `long` `long3`
- `int` `int0`

**Returns:** `long`

### public static long FMOD_System_SetVADMode(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `long`

### public static long FMOD_System_SetRecordVolume(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `long`

### public static long FMOD_System_CreateRAWPlaySound(long long0,
long long1,
long long2)

**Parameters:**
- `long` `long0`
- `long` `long1`
- `long` `long2`

**Returns:** `long`

### public static long FMOD_System_SetRawPlayBufferingPeriod(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `long`

### public static int FMOD_System_RAWPlayData(long long0,
short[] shorts,
long long1)

**Parameters:**
- `long` `long0`
- `short[]` `shorts`
- `long` `long1`

**Returns:** `int`

### public static int FMOD_System_RAWPlayData(long long0,
byte[] bytes,
long long1)

**Parameters:**
- `long` `long0`
- `byte[]` `bytes`
- `long` `long1`

**Returns:** `int`

### public static int FMOD_Studio_LoadSampleData(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `int`

### public static void FMOD_Studio_LoadEventSampleData(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `void`

### public static int FMOD_System_CreateStream(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
String string,
SWIGTYPE_p_FMOD_MODE sWIGTYPE_p_FMOD_MODE,
SWIGTYPE_p_FMOD_CREATESOUNDEXINFO sWIGTYPE_p_FMOD_CREATESOUNDEXINFO,
SWIGTYPE_p_p_FMOD_SOUND sWIGTYPE_p_p_FMOD_SOUND)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `String` `string`
- `SWIGTYPE_p_FMOD_MODE` `sWIGTYPE_p_FMOD_MODE`
- `SWIGTYPE_p_FMOD_CREATESOUNDEXINFO` `sWIGTYPE_p_FMOD_CREATESOUNDEXINFO`
- `SWIGTYPE_p_p_FMOD_SOUND` `sWIGTYPE_p_p_FMOD_SOUND`

**Returns:** `int`

### public static int FMOD_System_CreateDSP(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_DSP_DESCRIPTION sWIGTYPE_p_FMOD_DSP_DESCRIPTION,
SWIGTYPE_p_p_FMOD_DSP sWIGTYPE_p_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_DSP_DESCRIPTION` `sWIGTYPE_p_FMOD_DSP_DESCRIPTION`
- `SWIGTYPE_p_p_FMOD_DSP` `sWIGTYPE_p_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_System_CreateDSPByType(SWIGTYPE_p_FMOD_SYSTEM var0,
SWIGTYPE_p_FMOD_DSP_TYPE var1,
SWIGTYPE_p_p_FMOD_DSP var2)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `var0`
- `SWIGTYPE_p_FMOD_DSP_TYPE` `var1`
- `SWIGTYPE_p_p_FMOD_DSP` `var2`

**Returns:** `int`

### public static long FMOD_System_CreateChannelGroup(String string)

**Parameters:**
- `String` `string`

**Returns:** `long`

### public static int FMOD_System_CreateSoundGroup(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
String string,
SWIGTYPE_p_p_FMOD_SOUNDGROUP sWIGTYPE_p_p_FMOD_SOUNDGROUP)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `String` `string`
- `SWIGTYPE_p_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_p_FMOD_SOUNDGROUP`

**Returns:** `int`

### public static int FMOD_System_CreateReverb3D(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_p_FMOD_REVERB3D sWIGTYPE_p_p_FMOD_REVERB3D)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_p_FMOD_REVERB3D` `sWIGTYPE_p_p_FMOD_REVERB3D`

**Returns:** `int`

### public static long FMOD_System_PlaySound(long long0,
boolean boolean0)

**Parameters:**
- `long` `long0`
- `boolean` `boolean0`

**Returns:** `long`

### public static int FMOD_System_PlayDSP()

**Returns:** `int`

### public static int FMOD_System_GetChannel(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0,
SWIGTYPE_p_p_FMOD_CHANNEL sWIGTYPE_p_p_FMOD_CHANNEL)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_CHANNEL` `sWIGTYPE_p_p_FMOD_CHANNEL`

**Returns:** `int`

### public static long FMOD_System_GetMasterChannelGroup()

**Returns:** `long`

### public static int FMOD_System_GetMasterSoundGroup(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_p_FMOD_SOUNDGROUP sWIGTYPE_p_p_FMOD_SOUNDGROUP)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_p_FMOD_SOUNDGROUP`

**Returns:** `int`

### public static int FMOD_System_AttachChannelGroupToPort(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_PORT_TYPE sWIGTYPE_p_FMOD_PORT_TYPE,
SWIGTYPE_p_FMOD_PORT_INDEX sWIGTYPE_p_FMOD_PORT_INDEX,
SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_PORT_TYPE` `sWIGTYPE_p_FMOD_PORT_TYPE`
- `SWIGTYPE_p_FMOD_PORT_INDEX` `sWIGTYPE_p_FMOD_PORT_INDEX`
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_System_DetachChannelGroupFromPort(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`

**Returns:** `int`

### public static int FMOD_System_SetReverbProperties(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0,
SWIGTYPE_p_FMOD_REVERB_PROPERTIES sWIGTYPE_p_FMOD_REVERB_PROPERTIES)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`
- `SWIGTYPE_p_FMOD_REVERB_PROPERTIES` `sWIGTYPE_p_FMOD_REVERB_PROPERTIES`

**Returns:** `int`

### public static int FMOD_System_GetReverbProperties(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0,
SWIGTYPE_p_FMOD_REVERB_PROPERTIES sWIGTYPE_p_FMOD_REVERB_PROPERTIES)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`
- `SWIGTYPE_p_FMOD_REVERB_PROPERTIES` `sWIGTYPE_p_FMOD_REVERB_PROPERTIES`

**Returns:** `int`

### public static int FMOD_System_LockDSP(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_System_UnlockDSP(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_System_GetRecordNumDrivers()

**Returns:** `int`

### public static int FMOD_System_GetRecordDriverInfo(int int0,
FMOD_DriverInfo fMOD_DriverInfo)

**Parameters:**
- `int` `int0`
- `FMOD_DriverInfo` `fMOD_DriverInfo`

**Returns:** `int`

### public static int FMOD_System_GetRecordPosition(int int0,
FMODRecordPosition fMODRecordPosition)

**Parameters:**
- `int` `int0`
- `FMODRecordPosition` `fMODRecordPosition`

**Returns:** `int`

### public static int FMOD_System_RecordStart(int int0,
long long0,
boolean boolean0)

**Parameters:**
- `int` `int0`
- `long` `long0`
- `boolean` `boolean0`

**Returns:** `int`

### public static int FMOD_System_RecordStop(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int FMOD_System_IsRecording(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_System_CreateGeometry(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0,
int int1,
SWIGTYPE_p_p_FMOD_GEOMETRY sWIGTYPE_p_p_FMOD_GEOMETRY)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`
- `int` `int1`
- `SWIGTYPE_p_p_FMOD_GEOMETRY` `sWIGTYPE_p_p_FMOD_GEOMETRY`

**Returns:** `int`

### public static int FMOD_System_SetGeometrySettings(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_System_GetGeometrySettings(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_System_LoadGeometry(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_void sWIGTYPE_p_void,
int int0,
SWIGTYPE_p_p_FMOD_GEOMETRY sWIGTYPE_p_p_FMOD_GEOMETRY)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_GEOMETRY` `sWIGTYPE_p_p_FMOD_GEOMETRY`

**Returns:** `int`

### public static int FMOD_System_GetGeometryOcclusion(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR1,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR0,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR1`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR0`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_System_SetNetworkProxy(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
String string)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `String` `string`

**Returns:** `int`

### public static int FMOD_System_GetNetworkProxy(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
String string,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `String` `string`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_System_SetNetworkTimeout(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_System_GetNetworkTimeout(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_System_SetUserData(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_void sWIGTYPE_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`

**Returns:** `int`

### public static int FMOD_System_GetUserData(SWIGTYPE_p_FMOD_SYSTEM sWIGTYPE_p_FMOD_SYSTEM,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_SYSTEM` `sWIGTYPE_p_FMOD_SYSTEM`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`

**Returns:** `int`

### public static int FMOD_Sound_Release(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `int`

### public static int FMOD_RAWPlaySound_Release(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `int`

### public static int FMOD_RecordSound_Release(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `int`

### public static int FMOD_Sound_GetSystemObject(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_p_FMOD_SYSTEM sWIGTYPE_p_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_p_FMOD_SYSTEM` `sWIGTYPE_p_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_Sound_Lock(long long0,
long long1,
long long2,
byte[] bytes0,
byte[] bytes1,
Long long3,
Long long4,
long[] longs)

**Parameters:**
- `long` `long0`
- `long` `long1`
- `long` `long2`
- `byte[]` `bytes0`
- `byte[]` `bytes1`
- `Long` `long3`
- `Long` `long4`
- `long[]` `longs`

**Returns:** `int`

### public static int FMOD_Sound_GetData(long long0,
byte[] bytes,
FMODSoundData fMODSoundData)

**Parameters:**
- `long` `long0`
- `byte[]` `bytes`
- `FMODSoundData` `fMODSoundData`

**Returns:** `int`

### public static int FMOD_Sound_Unlock(long long0,
long[] longs)

**Parameters:**
- `long` `long0`
- `long[]` `longs`

**Returns:** `int`

### public static int FMOD_Sound_SetDefaults(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
float float0,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `float` `float0`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Sound_GetDefaults(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_float sWIGTYPE_p_float,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Sound_Set3DMinMaxDistance(long long0,
float float0,
float float1)

**Parameters:**
- `long` `long0`
- `float` `float0`
- `float` `float1`

**Returns:** `int`

### public static int FMOD_Sound_Get3DMinMaxDistance(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static long FMOD_Studio_System_Create()

**Returns:** `long`

### public static void FMOD_Studio_StartEvent(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `void`

### public static long FMOD_Studio_GetTimelinePosition(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `long`

### public static long FMOD_Studio_System_GetBus(String string)

**Parameters:**
- `String` `string`

**Returns:** `long`

### public static long FMOD_Studio_System_GetEvent(String string)

**Parameters:**
- `String` `string`

**Returns:** `long`

### public static long FMOD_Studio_System_CreateEventInstance(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `long`

### public static long FMOD_Studio_System_LoadBankFile(String string)

**Parameters:**
- `String` `string`

**Returns:** `long`

### public static int FMOD_Studio_System_SetParameterByID(FMOD_STUDIO_PARAMETER_ID fmod_studio_parameter_id,
float float0,
boolean boolean0)

**Parameters:**
- `FMOD_STUDIO_PARAMETER_ID` `fmod_studio_parameter_id`
- `float` `float0`
- `boolean` `boolean0`

**Returns:** `int`

### public static int FMOD_Studio_System_SetParameterByName(String string,
float float0,
boolean boolean0)

**Parameters:**
- `String` `string`
- `float` `float0`
- `boolean` `boolean0`

**Returns:** `int`

### public static boolean FMOD_Studio_Bus_GetMute(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `boolean`

### public static boolean FMOD_Studio_Bus_GetPaused(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `boolean`

### public static float FMOD_Studio_Bus_GetVolume(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `float`

### public static int FMOD_Studio_Bus_SetMute(long long0,
boolean boolean0)

**Parameters:**
- `long` `long0`
- `boolean` `boolean0`

**Returns:** `int`

### public static int FMOD_Studio_Bus_SetPaused(long long0,
boolean boolean0)

**Parameters:**
- `long` `long0`
- `boolean` `boolean0`

**Returns:** `int`

### public static int FMOD_Studio_Bus_SetVolume(long long0,
float float0)

**Parameters:**
- `long` `long0`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Studio_Bus_StopAllEvents(long long0,
boolean boolean0)

**Parameters:**
- `long` `long0`
- `boolean` `boolean0`

**Returns:** `int`

### public static int FMOD_Sound_Set3DConeSettings(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
float float0,
float float1,
float float2)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `float` `float0`
- `float` `float1`
- `float` `float2`

**Returns:** `int`

### public static int FMOD_Sound_Get3DConeSettings(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_float sWIGTYPE_p_float2,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float2`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_Sound_Set3DCustomRolloff(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Sound_Get3DCustomRolloff(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_p_FMOD_VECTOR sWIGTYPE_p_p_FMOD_VECTOR,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_p_FMOD_VECTOR` `sWIGTYPE_p_p_FMOD_VECTOR`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Sound_SetSubSound(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND1,
int int0,
SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND1`
- `int` `int0`
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND0`

**Returns:** `int`

### public static int FMOD_Sound_GetSubSound(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
int int0,
SWIGTYPE_p_p_FMOD_SOUND sWIGTYPE_p_p_FMOD_SOUND)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_SOUND` `sWIGTYPE_p_p_FMOD_SOUND`

**Returns:** `int`

### public static int FMOD_Sound_GetSubSoundParent(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_p_FMOD_SOUND sWIGTYPE_p_p_FMOD_SOUND)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_p_FMOD_SOUND` `sWIGTYPE_p_p_FMOD_SOUND`

**Returns:** `int`

### public static int FMOD_Sound_GetName(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
String string,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `String` `string`
- `int` `int0`

**Returns:** `int`

### public static long FMOD_Sound_GetLength(long long0,
long long1)

**Parameters:**
- `long` `long0`
- `long` `long1`

**Returns:** `long`

### public static int FMOD_Sound_GetFormat(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_FMOD_SOUND_TYPE sWIGTYPE_p_FMOD_SOUND_TYPE,
SWIGTYPE_p_FMOD_SOUND_FORMAT sWIGTYPE_p_FMOD_SOUND_FORMAT,
SWIGTYPE_p_int sWIGTYPE_p_int1,
SWIGTYPE_p_int sWIGTYPE_p_int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_FMOD_SOUND_TYPE` `sWIGTYPE_p_FMOD_SOUND_TYPE`
- `SWIGTYPE_p_FMOD_SOUND_FORMAT` `sWIGTYPE_p_FMOD_SOUND_FORMAT`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int1`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int0`

**Returns:** `int`

### public static int FMOD_Sound_GetNumSubSounds(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Sound_GetNumTags(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_int sWIGTYPE_p_int1,
SWIGTYPE_p_int sWIGTYPE_p_int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int1`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int0`

**Returns:** `int`

### public static int FMOD_Sound_GetTag(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
String string,
int int0,
SWIGTYPE_p_FMOD_TAG sWIGTYPE_p_FMOD_TAG)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `String` `string`
- `int` `int0`
- `SWIGTYPE_p_FMOD_TAG` `sWIGTYPE_p_FMOD_TAG`

**Returns:** `int`

### public static int FMOD_Sound_GetOpenState(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_FMOD_OPENSTATE sWIGTYPE_p_FMOD_OPENSTATE,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL1,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_FMOD_OPENSTATE` `sWIGTYPE_p_FMOD_OPENSTATE`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL1`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL0`

**Returns:** `int`

### public static int FMOD_Sound_ReadData(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_void sWIGTYPE_p_void,
long long0,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`
- `long` `long0`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`

**Returns:** `int`

### public static int FMOD_Sound_SeekData(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
long long0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `long` `long0`

**Returns:** `int`

### public static int FMOD_Sound_SetSoundGroup(long long0,
long long1)

**Parameters:**
- `long` `long0`
- `long` `long1`

**Returns:** `int`

### public static int FMOD_Sound_GetSoundGroup(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_p_FMOD_SOUNDGROUP sWIGTYPE_p_p_FMOD_SOUNDGROUP)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_p_FMOD_SOUNDGROUP`

**Returns:** `int`

### public static int FMOD_Sound_GetNumSyncPoints(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Sound_GetSyncPoint(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
int int0,
SWIGTYPE_p_p_FMOD_SYNCPOINT sWIGTYPE_p_p_FMOD_SYNCPOINT)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_SYNCPOINT` `sWIGTYPE_p_p_FMOD_SYNCPOINT`

**Returns:** `int`

### public static int FMOD_Sound_GetSyncPointInfo(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_FMOD_SYNCPOINT sWIGTYPE_p_FMOD_SYNCPOINT,
String string,
int int0,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_FMOD_SYNCPOINT` `sWIGTYPE_p_FMOD_SYNCPOINT`
- `String` `string`
- `int` `int0`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT`

**Returns:** `int`

### public static int FMOD_Sound_AddSyncPoint(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
long long0,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT,
String string,
SWIGTYPE_p_p_FMOD_SYNCPOINT sWIGTYPE_p_p_FMOD_SYNCPOINT)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `long` `long0`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT`
- `String` `string`
- `SWIGTYPE_p_p_FMOD_SYNCPOINT` `sWIGTYPE_p_p_FMOD_SYNCPOINT`

**Returns:** `int`

### public static int FMOD_Sound_DeleteSyncPoint(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_FMOD_SYNCPOINT sWIGTYPE_p_FMOD_SYNCPOINT)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_FMOD_SYNCPOINT` `sWIGTYPE_p_FMOD_SYNCPOINT`

**Returns:** `int`

### public static int FMOD_Sound_SetMode(long long0,
int int0)

**Parameters:**
- `long` `long0`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Sound_GetMode(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_FMOD_MODE sWIGTYPE_p_FMOD_MODE)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_FMOD_MODE` `sWIGTYPE_p_FMOD_MODE`

**Returns:** `int`

### public static int FMOD_Sound_SetLoopCount(long long0,
int int0)

**Parameters:**
- `long` `long0`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Sound_GetLoopCount(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Sound_SetLoopPoints(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
long long0,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT1,
long long1,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `long` `long0`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT1`
- `long` `long1`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT0`

**Returns:** `int`

### public static int FMOD_Sound_GetLoopPoints(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int1,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT1,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int0,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int1`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT1`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int0`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT0`

**Returns:** `int`

### public static int FMOD_Sound_GetMusicNumChannels(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Sound_SetMusicChannelVolume(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
int int0,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `int` `int0`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Sound_GetMusicChannelVolume(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
int int0,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `int` `int0`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Sound_SetMusicSpeed(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Sound_GetMusicSpeed(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Sound_SetUserData(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_void sWIGTYPE_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`

**Returns:** `int`

### public static int FMOD_Sound_GetUserData(SWIGTYPE_p_FMOD_SOUND sWIGTYPE_p_FMOD_SOUND,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUND` `sWIGTYPE_p_FMOD_SOUND`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`

**Returns:** `int`

### public static int FMOD_Channel_GetSystemObject(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_p_FMOD_SYSTEM sWIGTYPE_p_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_p_FMOD_SYSTEM` `sWIGTYPE_p_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_Channel_Stop(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `int`

### public static int FMOD_Channel_SetPaused(long long0,
boolean boolean0)

**Parameters:**
- `long` `long0`
- `boolean` `boolean0`

**Returns:** `int`

### public static int FMOD_Channel_GetPaused(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Channel_SetVolume(long long0,
float float0)

**Parameters:**
- `long` `long0`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_GetVolume(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Channel_SetVolumeRamp(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Channel_GetVolumeRamp(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static float FMOD_Channel_GetAudibility(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `float`

### public static int FMOD_Channel_SetPitch(long long0,
float float0)

**Parameters:**
- `long` `long0`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_SetPitch(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_GetPitch(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Channel_SetMute(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Channel_GetMute(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Channel_SetReverbProperties(long long0,
int int0,
float float0)

**Parameters:**
- `long` `long0`
- `int` `int0`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_GetReverbProperties(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
int int0,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `int` `int0`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Channel_SetLowPassGain(long long0,
float float0)

**Parameters:**
- `long` `long0`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_GetLowPassGain(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Channel_SetMode(long long0,
long long1)

**Parameters:**
- `long` `long0`
- `long` `long1`

**Returns:** `int`

### public static int FMOD_Channel_GetMode(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_MODE sWIGTYPE_p_FMOD_MODE)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_MODE` `sWIGTYPE_p_FMOD_MODE`

**Returns:** `int`

### public static int FMOD_Channel_SetCallback(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_CHANNELCONTROL_CALLBACK sWIGTYPE_p_FMOD_CHANNELCONTROL_CALLBACK)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_CHANNELCONTROL_CALLBACK` `sWIGTYPE_p_FMOD_CHANNELCONTROL_CALLBACK`

**Returns:** `int`

### public static boolean FMOD_Channel_IsPlaying(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `boolean`

### public static int FMOD_Channel_SetPan(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_SetMixLevelsOutput(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
float float0,
float float1,
float float2,
float float3,
float float4,
float float5,
float float6,
float float7)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`
- `float` `float4`
- `float` `float5`
- `float` `float6`
- `float` `float7`

**Returns:** `int`

### public static int FMOD_Channel_SetMixLevelsInput(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Channel_SetMixMatrix(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float,
int int0,
int int1,
int int2)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`
- `int` `int0`
- `int` `int1`
- `int` `int2`

**Returns:** `int`

### public static int FMOD_Channel_GetMixMatrix(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float,
SWIGTYPE_p_int sWIGTYPE_p_int1,
SWIGTYPE_p_int sWIGTYPE_p_int0,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int1`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int0`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Channel_GetDSPClock(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_unsigned_long_long sWIGTYPE_p_unsigned_long_long1,
SWIGTYPE_p_unsigned_long_long sWIGTYPE_p_unsigned_long_long0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_unsigned_long_long` `sWIGTYPE_p_unsigned_long_long1`
- `SWIGTYPE_p_unsigned_long_long` `sWIGTYPE_p_unsigned_long_long0`

**Returns:** `int`

### public static int FMOD_Channel_SetDelay(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
BigInteger bigInteger0,
BigInteger bigInteger1,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `BigInteger` `bigInteger0`
- `BigInteger` `bigInteger1`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Channel_GetDelay(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_unsigned_long_long sWIGTYPE_p_unsigned_long_long1,
SWIGTYPE_p_unsigned_long_long sWIGTYPE_p_unsigned_long_long0,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_unsigned_long_long` `sWIGTYPE_p_unsigned_long_long1`
- `SWIGTYPE_p_unsigned_long_long` `sWIGTYPE_p_unsigned_long_long0`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Channel_AddFadePoint(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
BigInteger bigInteger,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `BigInteger` `bigInteger`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_RemoveFadePoints(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
BigInteger bigInteger0,
BigInteger bigInteger1)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `BigInteger` `bigInteger0`
- `BigInteger` `bigInteger1`

**Returns:** `int`

### public static int FMOD_Channel_GetFadePoints(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int,
SWIGTYPE_p_unsigned_long_long sWIGTYPE_p_unsigned_long_long,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`
- `SWIGTYPE_p_unsigned_long_long` `sWIGTYPE_p_unsigned_long_long`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Channel_GetDSP(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
int int0,
SWIGTYPE_p_p_FMOD_DSP sWIGTYPE_p_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_DSP` `sWIGTYPE_p_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_Channel_AddDSP(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
int int0,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `int` `int0`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_Channel_RemoveDSP(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_Channel_GetNumDSPs(SWIGTYPE_p_FMOD_CHANNEL var0,
SWIGTYPE_p_int var1)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `var0`
- `SWIGTYPE_p_int` `var1`

**Returns:** `int`

### public static int FMOD_Channel_SetDSPIndex(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Channel_GetDSPIndex(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Channel_OverridePanDSP(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_Channel_Set3DAttributes(long long0,
float float0,
float float1,
float float2,
float float3,
float float4,
float float5)

**Parameters:**
- `long` `long0`
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`
- `float` `float4`
- `float` `float5`

**Returns:** `int`

### public static int FMOD_Channel_Get3DAttributes(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR1,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR1`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR0`

**Returns:** `int`

### public static int FMOD_Channel_Set3DMinMaxDistance(long long0,
float float0,
float float1)

**Parameters:**
- `long` `long0`
- `float` `float0`
- `float` `float1`

**Returns:** `int`

### public static int FMOD_Channel_Get3DMinMaxDistance(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_Channel_Set3DConeSettings(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
float float0,
float float1,
float float2)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `float` `float0`
- `float` `float1`
- `float` `float2`

**Returns:** `int`

### public static int FMOD_Channel_Get3DConeSettings(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float2,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float2`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_Channel_Set3DConeOrientation(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`

**Returns:** `int`

### public static int FMOD_Channel_Get3DConeOrientation(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`

**Returns:** `int`

### public static int FMOD_Channel_Set3DCustomRolloff(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Channel_Get3DCustomRolloff(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_p_FMOD_VECTOR sWIGTYPE_p_p_FMOD_VECTOR,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_p_FMOD_VECTOR` `sWIGTYPE_p_p_FMOD_VECTOR`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Channel_Set3DOcclusion(long long0,
float float0,
float float1)

**Parameters:**
- `long` `long0`
- `float` `float0`
- `float` `float1`

**Returns:** `int`

### public static int FMOD_Channel_Get3DOcclusion(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_Channel_Set3DSpread(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_Get3DSpread(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Channel_Set3DLevel(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_Get3DLevel(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Channel_Set3DDopplerLevel(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_Get3DDopplerLevel(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Channel_Set3DDistanceFilter(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL,
float float0,
float float1)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`
- `float` `float0`
- `float` `float1`

**Returns:** `int`

### public static int FMOD_Channel_Get3DDistanceFilter(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_Channel_SetUserData(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_void sWIGTYPE_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`

**Returns:** `int`

### public static int FMOD_Channel_GetUserData(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`

**Returns:** `int`

### public static int FMOD_Channel_SetFrequency(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Channel_GetFrequency(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_Channel_SetPriority(long long0,
int int0)

**Parameters:**
- `long` `long0`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Channel_GetPriority(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Channel_SetPosition(long long0,
long long1)

**Parameters:**
- `long` `long0`
- `long` `long1`

**Returns:** `int`

### public static long FMOD_Channel_GetPosition(long long0,
int int0)

**Parameters:**
- `long` `long0`
- `int` `int0`

**Returns:** `long`

### public static int FMOD_Channel_SetChannelGroup(long long0,
long long1)

**Parameters:**
- `long` `long0`
- `long` `long1`

**Returns:** `int`

### public static int FMOD_Channel_GetChannelGroup(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_p_FMOD_CHANNELGROUP sWIGTYPE_p_p_FMOD_CHANNELGROUP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_p_FMOD_CHANNELGROUP`

**Returns:** `int`

### public static int FMOD_Channel_SetLoopCount(long long0,
int int0)

**Parameters:**
- `long` `long0`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Channel_GetLoopCount(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Channel_SetLoopPoints(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
long long0,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT1,
long long1,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `long` `long0`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT1`
- `long` `long1`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT0`

**Returns:** `int`

### public static int FMOD_Channel_GetLoopPoints(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int1,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT1,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int0,
SWIGTYPE_p_FMOD_TIMEUNIT sWIGTYPE_p_FMOD_TIMEUNIT0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int1`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT1`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int0`
- `SWIGTYPE_p_FMOD_TIMEUNIT` `sWIGTYPE_p_FMOD_TIMEUNIT0`

**Returns:** `int`

### public static boolean FMOD_Channel_IsVirtual(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `boolean`

### public static int FMOD_Channel_GetCurrentSound(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_p_FMOD_SOUND sWIGTYPE_p_p_FMOD_SOUND)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_p_FMOD_SOUND` `sWIGTYPE_p_p_FMOD_SOUND`

**Returns:** `int`

### public static int FMOD_Channel_GetIndex(SWIGTYPE_p_FMOD_CHANNEL sWIGTYPE_p_FMOD_CHANNEL,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNEL` `sWIGTYPE_p_FMOD_CHANNEL`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetSystemObject(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_p_FMOD_SYSTEM sWIGTYPE_p_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_p_FMOD_SYSTEM` `sWIGTYPE_p_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Stop(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetPaused(long long0,
boolean boolean0)

**Parameters:**
- `long` `long0`
- `boolean` `boolean0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetPaused(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetVolume(long long0,
float float0)

**Parameters:**
- `long` `long0`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetVolume(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetVolumeRamp(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetVolumeRamp(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetAudibility(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetPitch(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetPitch(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetMute(long long0,
boolean boolean0)

**Parameters:**
- `long` `long0`
- `boolean` `boolean0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetMute(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetReverbProperties(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
int int0,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `int` `int0`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetReverbProperties(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
int int0,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `int` `int0`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetLowPassGain(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetLowPassGain(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetMode(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_MODE sWIGTYPE_p_FMOD_MODE)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_MODE` `sWIGTYPE_p_FMOD_MODE`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetMode(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_MODE sWIGTYPE_p_FMOD_MODE)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_MODE` `sWIGTYPE_p_FMOD_MODE`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetCallback(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_CHANNELCONTROL_CALLBACK sWIGTYPE_p_FMOD_CHANNELCONTROL_CALLBACK)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_CHANNELCONTROL_CALLBACK` `sWIGTYPE_p_FMOD_CHANNELCONTROL_CALLBACK`

**Returns:** `int`

### public static int FMOD_ChannelGroup_IsPlaying(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetPan(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetMixLevelsOutput(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
float float0,
float float1,
float float2,
float float3,
float float4,
float float5,
float float6,
float float7)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`
- `float` `float4`
- `float` `float5`
- `float` `float6`
- `float` `float7`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetMixLevelsInput(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetMixMatrix(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float,
int int0,
int int1,
int int2)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`
- `int` `int0`
- `int` `int1`
- `int` `int2`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetMixMatrix(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float,
SWIGTYPE_p_int sWIGTYPE_p_int1,
SWIGTYPE_p_int sWIGTYPE_p_int0,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int1`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int0`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetDSPClock(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_unsigned_long_long sWIGTYPE_p_unsigned_long_long1,
SWIGTYPE_p_unsigned_long_long sWIGTYPE_p_unsigned_long_long0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_unsigned_long_long` `sWIGTYPE_p_unsigned_long_long1`
- `SWIGTYPE_p_unsigned_long_long` `sWIGTYPE_p_unsigned_long_long0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetDelay(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
BigInteger bigInteger0,
BigInteger bigInteger1,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `BigInteger` `bigInteger0`
- `BigInteger` `bigInteger1`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetDelay(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_unsigned_long_long sWIGTYPE_p_unsigned_long_long1,
SWIGTYPE_p_unsigned_long_long sWIGTYPE_p_unsigned_long_long0,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_unsigned_long_long` `sWIGTYPE_p_unsigned_long_long1`
- `SWIGTYPE_p_unsigned_long_long` `sWIGTYPE_p_unsigned_long_long0`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_ChannelGroup_AddFadePoint(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
BigInteger bigInteger,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `BigInteger` `bigInteger`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_RemoveFadePoints(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
BigInteger bigInteger0,
BigInteger bigInteger1)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `BigInteger` `bigInteger0`
- `BigInteger` `bigInteger1`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetFadePoints(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int,
SWIGTYPE_p_unsigned_long_long sWIGTYPE_p_unsigned_long_long,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`
- `SWIGTYPE_p_unsigned_long_long` `sWIGTYPE_p_unsigned_long_long`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetDSP(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
int int0,
SWIGTYPE_p_p_FMOD_DSP sWIGTYPE_p_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_DSP` `sWIGTYPE_p_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_ChannelGroup_AddDSP(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
int int0,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `int` `int0`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_ChannelGroup_RemoveDSP(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetNumDSPs(SWIGTYPE_p_FMOD_CHANNELGROUP var0,
SWIGTYPE_p_int var1)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `var0`
- `SWIGTYPE_p_int` `var1`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetDSPIndex(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetDSPIndex(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_ChannelGroup_OverridePanDSP(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Set3DAttributes(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR1,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR1`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Get3DAttributes(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR1,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR1`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Set3DMinMaxDistance(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
float float0,
float float1)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `float` `float0`
- `float` `float1`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Get3DMinMaxDistance(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Set3DConeSettings(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
float float0,
float float1,
float float2)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `float` `float0`
- `float` `float1`
- `float` `float2`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Get3DConeSettings(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float2,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float2`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Set3DConeOrientation(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Get3DConeOrientation(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Set3DCustomRolloff(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Get3DCustomRolloff(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_p_FMOD_VECTOR sWIGTYPE_p_p_FMOD_VECTOR,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_p_FMOD_VECTOR` `sWIGTYPE_p_p_FMOD_VECTOR`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Set3DOcclusion(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
float float0,
float float1)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `float` `float0`
- `float` `float1`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Get3DOcclusion(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Set3DSpread(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Get3DSpread(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Set3DLevel(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Get3DLevel(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Set3DDopplerLevel(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Get3DDopplerLevel(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Set3DDistanceFilter(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL,
float float0,
float float1)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`
- `float` `float0`
- `float` `float1`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Get3DDistanceFilter(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_SetUserData(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_void sWIGTYPE_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetUserData(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`

**Returns:** `int`

### public static int FMOD_ChannelGroup_Release(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`

**Returns:** `int`

### public static int FMOD_ChannelGroup_AddGroup(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP1,
SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP0,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL,
SWIGTYPE_p_p_FMOD_DSPCONNECTION sWIGTYPE_p_p_FMOD_DSPCONNECTION)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP1`
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP0`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`
- `SWIGTYPE_p_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_p_FMOD_DSPCONNECTION`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetNumGroups(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetGroup(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
int int0,
SWIGTYPE_p_p_FMOD_CHANNELGROUP sWIGTYPE_p_p_FMOD_CHANNELGROUP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_p_FMOD_CHANNELGROUP`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetParentGroup(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_p_FMOD_CHANNELGROUP sWIGTYPE_p_p_FMOD_CHANNELGROUP)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_p_FMOD_CHANNELGROUP`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetName(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
String string,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `String` `string`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetNumChannels(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_ChannelGroup_GetChannel(SWIGTYPE_p_FMOD_CHANNELGROUP sWIGTYPE_p_FMOD_CHANNELGROUP,
int int0,
SWIGTYPE_p_p_FMOD_CHANNEL sWIGTYPE_p_p_FMOD_CHANNEL)

**Parameters:**
- `SWIGTYPE_p_FMOD_CHANNELGROUP` `sWIGTYPE_p_FMOD_CHANNELGROUP`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_CHANNEL` `sWIGTYPE_p_p_FMOD_CHANNEL`

**Returns:** `int`

### public static int FMOD_SoundGroup_Release(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`

**Returns:** `int`

### public static int FMOD_SoundGroup_GetSystemObject(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
SWIGTYPE_p_p_FMOD_SYSTEM sWIGTYPE_p_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `SWIGTYPE_p_p_FMOD_SYSTEM` `sWIGTYPE_p_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_SoundGroup_SetMaxAudible(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_SoundGroup_GetMaxAudible(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_SoundGroup_SetMaxAudibleBehavior(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
SWIGTYPE_p_FMOD_SOUNDGROUP_BEHAVIOR sWIGTYPE_p_FMOD_SOUNDGROUP_BEHAVIOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `SWIGTYPE_p_FMOD_SOUNDGROUP_BEHAVIOR` `sWIGTYPE_p_FMOD_SOUNDGROUP_BEHAVIOR`

**Returns:** `int`

### public static int FMOD_SoundGroup_GetMaxAudibleBehavior(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
SWIGTYPE_p_FMOD_SOUNDGROUP_BEHAVIOR sWIGTYPE_p_FMOD_SOUNDGROUP_BEHAVIOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `SWIGTYPE_p_FMOD_SOUNDGROUP_BEHAVIOR` `sWIGTYPE_p_FMOD_SOUNDGROUP_BEHAVIOR`

**Returns:** `int`

### public static int FMOD_SoundGroup_SetMuteFadeSpeed(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_SoundGroup_GetMuteFadeSpeed(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_SoundGroup_SetVolume(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_SoundGroup_GetVolume(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_SoundGroup_Stop(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`

**Returns:** `int`

### public static int FMOD_SoundGroup_GetName(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
String string,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `String` `string`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_SoundGroup_GetNumSounds(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_SoundGroup_GetSound(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
int int0,
SWIGTYPE_p_p_FMOD_SOUND sWIGTYPE_p_p_FMOD_SOUND)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_SOUND` `sWIGTYPE_p_p_FMOD_SOUND`

**Returns:** `int`

### public static int FMOD_SoundGroup_GetNumPlaying(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_SoundGroup_SetUserData(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
SWIGTYPE_p_void sWIGTYPE_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`

**Returns:** `int`

### public static int FMOD_SoundGroup_GetUserData(SWIGTYPE_p_FMOD_SOUNDGROUP sWIGTYPE_p_FMOD_SOUNDGROUP,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_SOUNDGROUP` `sWIGTYPE_p_FMOD_SOUNDGROUP`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`

**Returns:** `int`

### public static int FMOD_DSP_Release(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_DSP_GetSystemObject(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_p_FMOD_SYSTEM sWIGTYPE_p_p_FMOD_SYSTEM)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_p_FMOD_SYSTEM` `sWIGTYPE_p_p_FMOD_SYSTEM`

**Returns:** `int`

### public static int FMOD_DSP_AddInput(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP1,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP0,
SWIGTYPE_p_p_FMOD_DSPCONNECTION sWIGTYPE_p_p_FMOD_DSPCONNECTION,
SWIGTYPE_p_FMOD_DSPCONNECTION_TYPE sWIGTYPE_p_FMOD_DSPCONNECTION_TYPE)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP1`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP0`
- `SWIGTYPE_p_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_p_FMOD_DSPCONNECTION`
- `SWIGTYPE_p_FMOD_DSPCONNECTION_TYPE` `sWIGTYPE_p_FMOD_DSPCONNECTION_TYPE`

**Returns:** `int`

### public static int FMOD_DSP_DisconnectFrom(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP1,
SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP0,
SWIGTYPE_p_FMOD_DSPCONNECTION sWIGTYPE_p_FMOD_DSPCONNECTION)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP1`
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP0`
- `SWIGTYPE_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_FMOD_DSPCONNECTION`

**Returns:** `int`

### public static int FMOD_DSP_DisconnectAll(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL1,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL1`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL0`

**Returns:** `int`

### public static int FMOD_DSP_GetNumInputs(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_DSP_GetNumOutputs(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_DSP_GetInput(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
SWIGTYPE_p_p_FMOD_DSP sWIGTYPE_p_p_FMOD_DSP,
SWIGTYPE_p_p_FMOD_DSPCONNECTION sWIGTYPE_p_p_FMOD_DSPCONNECTION)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_DSP` `sWIGTYPE_p_p_FMOD_DSP`
- `SWIGTYPE_p_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_p_FMOD_DSPCONNECTION`

**Returns:** `int`

### public static int FMOD_DSP_GetOutput(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
SWIGTYPE_p_p_FMOD_DSP sWIGTYPE_p_p_FMOD_DSP,
SWIGTYPE_p_p_FMOD_DSPCONNECTION sWIGTYPE_p_p_FMOD_DSPCONNECTION)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_DSP` `sWIGTYPE_p_p_FMOD_DSP`
- `SWIGTYPE_p_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_p_FMOD_DSPCONNECTION`

**Returns:** `int`

### public static int FMOD_DSP_SetActive(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_DSP_GetActive(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_DSP_SetBypass(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_DSP_GetBypass(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_DSP_SetWetDryMix(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
float float0,
float float1,
float float2)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `float` `float0`
- `float` `float1`
- `float` `float2`

**Returns:** `int`

### public static int FMOD_DSP_GetWetDryMix(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_float sWIGTYPE_p_float2,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float2`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_DSP_SetChannelFormat(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_CHANNELMASK sWIGTYPE_p_FMOD_CHANNELMASK,
int int0,
SWIGTYPE_p_FMOD_SPEAKERMODE sWIGTYPE_p_FMOD_SPEAKERMODE)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_CHANNELMASK` `sWIGTYPE_p_FMOD_CHANNELMASK`
- `int` `int0`
- `SWIGTYPE_p_FMOD_SPEAKERMODE` `sWIGTYPE_p_FMOD_SPEAKERMODE`

**Returns:** `int`

### public static int FMOD_DSP_GetChannelFormat(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_CHANNELMASK sWIGTYPE_p_FMOD_CHANNELMASK,
SWIGTYPE_p_int sWIGTYPE_p_int,
SWIGTYPE_p_FMOD_SPEAKERMODE sWIGTYPE_p_FMOD_SPEAKERMODE)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_CHANNELMASK` `sWIGTYPE_p_FMOD_CHANNELMASK`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`
- `SWIGTYPE_p_FMOD_SPEAKERMODE` `sWIGTYPE_p_FMOD_SPEAKERMODE`

**Returns:** `int`

### public static int FMOD_DSP_GetOutputChannelFormat(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_CHANNELMASK sWIGTYPE_p_FMOD_CHANNELMASK1,
int int0,
SWIGTYPE_p_FMOD_SPEAKERMODE sWIGTYPE_p_FMOD_SPEAKERMODE1,
SWIGTYPE_p_FMOD_CHANNELMASK sWIGTYPE_p_FMOD_CHANNELMASK0,
SWIGTYPE_p_int sWIGTYPE_p_int,
SWIGTYPE_p_FMOD_SPEAKERMODE sWIGTYPE_p_FMOD_SPEAKERMODE0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_CHANNELMASK` `sWIGTYPE_p_FMOD_CHANNELMASK1`
- `int` `int0`
- `SWIGTYPE_p_FMOD_SPEAKERMODE` `sWIGTYPE_p_FMOD_SPEAKERMODE1`
- `SWIGTYPE_p_FMOD_CHANNELMASK` `sWIGTYPE_p_FMOD_CHANNELMASK0`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`
- `SWIGTYPE_p_FMOD_SPEAKERMODE` `sWIGTYPE_p_FMOD_SPEAKERMODE0`

**Returns:** `int`

### public static int FMOD_DSP_Reset(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_DSP_SetParameterFloat(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_DSP_SetParameterInt(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
int int1)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `int` `int1`

**Returns:** `int`

### public static int FMOD_DSP_SetParameterBool(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_DSP_SetParameterData(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
SWIGTYPE_p_void sWIGTYPE_p_void,
long long0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`
- `long` `long0`

**Returns:** `int`

### public static int FMOD_DSP_GetParameterFloat(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
SWIGTYPE_p_float sWIGTYPE_p_float,
String string,
int int1)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`
- `String` `string`
- `int` `int1`

**Returns:** `int`

### public static int FMOD_DSP_GetParameterInt(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
SWIGTYPE_p_int sWIGTYPE_p_int,
String string,
int int1)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`
- `String` `string`
- `int` `int1`

**Returns:** `int`

### public static int FMOD_DSP_GetParameterBool(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL,
String string,
int int1)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`
- `String` `string`
- `int` `int1`

**Returns:** `int`

### public static int FMOD_DSP_GetParameterData(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int,
String string,
int int1)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`
- `String` `string`
- `int` `int1`

**Returns:** `int`

### public static int FMOD_DSP_GetNumParameters(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_DSP_GetParameterInfo(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
SWIGTYPE_p_p_FMOD_DSP_PARAMETER_DESC sWIGTYPE_p_p_FMOD_DSP_PARAMETER_DESC)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `SWIGTYPE_p_p_FMOD_DSP_PARAMETER_DESC` `sWIGTYPE_p_p_FMOD_DSP_PARAMETER_DESC`

**Returns:** `int`

### public static int FMOD_DSP_GetDataParameterIndex(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
int int0,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `int` `int0`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_DSP_ShowConfigDialog(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_void sWIGTYPE_p_void,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_DSP_GetInfo(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
String string,
SWIGTYPE_p_unsigned_int sWIGTYPE_p_unsigned_int,
SWIGTYPE_p_int sWIGTYPE_p_int2,
SWIGTYPE_p_int sWIGTYPE_p_int1,
SWIGTYPE_p_int sWIGTYPE_p_int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `String` `string`
- `SWIGTYPE_p_unsigned_int` `sWIGTYPE_p_unsigned_int`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int2`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int1`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int0`

**Returns:** `int`

### public static int FMOD_DSP_GetType(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_DSP_TYPE sWIGTYPE_p_FMOD_DSP_TYPE)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_DSP_TYPE` `sWIGTYPE_p_FMOD_DSP_TYPE`

**Returns:** `int`

### public static int FMOD_DSP_GetIdle(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_DSP_SetUserData(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_void sWIGTYPE_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`

**Returns:** `int`

### public static int FMOD_DSP_GetUserData(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`

**Returns:** `int`

### public static int FMOD_DSP_SetMeteringEnabled(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL1,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL1`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL0`

**Returns:** `int`

### public static int FMOD_DSP_GetMeteringEnabled(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL1,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL1`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL0`

**Returns:** `int`

### public static int FMOD_DSP_GetMeteringInfo(SWIGTYPE_p_FMOD_DSP sWIGTYPE_p_FMOD_DSP,
SWIGTYPE_p_FMOD_DSP_METERING_INFO sWIGTYPE_p_FMOD_DSP_METERING_INFO1,
SWIGTYPE_p_FMOD_DSP_METERING_INFO sWIGTYPE_p_FMOD_DSP_METERING_INFO0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSP` `sWIGTYPE_p_FMOD_DSP`
- `SWIGTYPE_p_FMOD_DSP_METERING_INFO` `sWIGTYPE_p_FMOD_DSP_METERING_INFO1`
- `SWIGTYPE_p_FMOD_DSP_METERING_INFO` `sWIGTYPE_p_FMOD_DSP_METERING_INFO0`

**Returns:** `int`

### public static int FMOD_DSPConnection_GetInput(SWIGTYPE_p_FMOD_DSPCONNECTION sWIGTYPE_p_FMOD_DSPCONNECTION,
SWIGTYPE_p_p_FMOD_DSP sWIGTYPE_p_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_FMOD_DSPCONNECTION`
- `SWIGTYPE_p_p_FMOD_DSP` `sWIGTYPE_p_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_DSPConnection_GetOutput(SWIGTYPE_p_FMOD_DSPCONNECTION sWIGTYPE_p_FMOD_DSPCONNECTION,
SWIGTYPE_p_p_FMOD_DSP sWIGTYPE_p_p_FMOD_DSP)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_FMOD_DSPCONNECTION`
- `SWIGTYPE_p_p_FMOD_DSP` `sWIGTYPE_p_p_FMOD_DSP`

**Returns:** `int`

### public static int FMOD_DSPConnection_SetMix(SWIGTYPE_p_FMOD_DSPCONNECTION sWIGTYPE_p_FMOD_DSPCONNECTION,
float float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_FMOD_DSPCONNECTION`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_DSPConnection_GetMix(SWIGTYPE_p_FMOD_DSPCONNECTION sWIGTYPE_p_FMOD_DSPCONNECTION,
SWIGTYPE_p_float sWIGTYPE_p_float)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_FMOD_DSPCONNECTION`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`

**Returns:** `int`

### public static int FMOD_DSPConnection_SetMixMatrix(SWIGTYPE_p_FMOD_DSPCONNECTION sWIGTYPE_p_FMOD_DSPCONNECTION,
SWIGTYPE_p_float sWIGTYPE_p_float,
int int0,
int int1,
int int2)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_FMOD_DSPCONNECTION`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`
- `int` `int0`
- `int` `int1`
- `int` `int2`

**Returns:** `int`

### public static int FMOD_DSPConnection_GetMixMatrix(SWIGTYPE_p_FMOD_DSPCONNECTION sWIGTYPE_p_FMOD_DSPCONNECTION,
SWIGTYPE_p_float sWIGTYPE_p_float,
SWIGTYPE_p_int sWIGTYPE_p_int1,
SWIGTYPE_p_int sWIGTYPE_p_int0,
int int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_FMOD_DSPCONNECTION`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int1`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int0`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_DSPConnection_GetType(SWIGTYPE_p_FMOD_DSPCONNECTION sWIGTYPE_p_FMOD_DSPCONNECTION,
SWIGTYPE_p_FMOD_DSPCONNECTION_TYPE sWIGTYPE_p_FMOD_DSPCONNECTION_TYPE)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_FMOD_DSPCONNECTION`
- `SWIGTYPE_p_FMOD_DSPCONNECTION_TYPE` `sWIGTYPE_p_FMOD_DSPCONNECTION_TYPE`

**Returns:** `int`

### public static int FMOD_DSPConnection_SetUserData(SWIGTYPE_p_FMOD_DSPCONNECTION sWIGTYPE_p_FMOD_DSPCONNECTION,
SWIGTYPE_p_void sWIGTYPE_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_FMOD_DSPCONNECTION`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`

**Returns:** `int`

### public static int FMOD_DSPConnection_GetUserData(SWIGTYPE_p_FMOD_DSPCONNECTION sWIGTYPE_p_FMOD_DSPCONNECTION,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_DSPCONNECTION` `sWIGTYPE_p_FMOD_DSPCONNECTION`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`

**Returns:** `int`

### public static int FMOD_Geometry_Release(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`

**Returns:** `int`

### public static int FMOD_Geometry_AddPolygon(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
float float0,
float float1,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL,
int int0,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `float` `float0`
- `float` `float1`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`
- `int` `int0`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Geometry_GetNumPolygons(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Geometry_GetMaxPolygons(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_int sWIGTYPE_p_int1,
SWIGTYPE_p_int sWIGTYPE_p_int0)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int1`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int0`

**Returns:** `int`

### public static int FMOD_Geometry_GetPolygonNumVertices(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
int int0,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `int` `int0`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Geometry_SetPolygonVertex(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
int int0,
int int1,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `int` `int0`
- `int` `int1`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`

**Returns:** `int`

### public static int FMOD_Geometry_GetPolygonVertex(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
int int0,
int int1,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `int` `int0`
- `int` `int1`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`

**Returns:** `int`

### public static int FMOD_Geometry_SetPolygonAttributes(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
int int0,
float float0,
float float1,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `int` `int0`
- `float` `float0`
- `float` `float1`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Geometry_GetPolygonAttributes(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
int int0,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `int` `int0`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Geometry_SetActive(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Geometry_GetActive(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Geometry_SetRotation(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR1,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR0)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR1`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR0`

**Returns:** `int`

### public static int FMOD_Geometry_GetRotation(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR1,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR0)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR1`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR0`

**Returns:** `int`

### public static int FMOD_Geometry_SetPosition(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`

**Returns:** `int`

### public static int FMOD_Geometry_GetPosition(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`

**Returns:** `int`

### public static int FMOD_Geometry_SetScale(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`

**Returns:** `int`

### public static int FMOD_Geometry_GetScale(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`

**Returns:** `int`

### public static int FMOD_Geometry_Save(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_void sWIGTYPE_p_void,
SWIGTYPE_p_int sWIGTYPE_p_int)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`
- `SWIGTYPE_p_int` `sWIGTYPE_p_int`

**Returns:** `int`

### public static int FMOD_Geometry_SetUserData(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_void sWIGTYPE_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`

**Returns:** `int`

### public static int FMOD_Geometry_GetUserData(SWIGTYPE_p_FMOD_GEOMETRY sWIGTYPE_p_FMOD_GEOMETRY,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_GEOMETRY` `sWIGTYPE_p_FMOD_GEOMETRY`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`

**Returns:** `int`

### public static int FMOD_Reverb3D_Release(SWIGTYPE_p_FMOD_REVERB3D sWIGTYPE_p_FMOD_REVERB3D)

**Parameters:**
- `SWIGTYPE_p_FMOD_REVERB3D` `sWIGTYPE_p_FMOD_REVERB3D`

**Returns:** `int`

### public static int FMOD_Reverb3D_Set3DAttributes(SWIGTYPE_p_FMOD_REVERB3D sWIGTYPE_p_FMOD_REVERB3D,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR,
float float0,
float float1)

**Parameters:**
- `SWIGTYPE_p_FMOD_REVERB3D` `sWIGTYPE_p_FMOD_REVERB3D`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`
- `float` `float0`
- `float` `float1`

**Returns:** `int`

### public static int FMOD_Reverb3D_Get3DAttributes(SWIGTYPE_p_FMOD_REVERB3D sWIGTYPE_p_FMOD_REVERB3D,
SWIGTYPE_p_FMOD_VECTOR sWIGTYPE_p_FMOD_VECTOR,
SWIGTYPE_p_float sWIGTYPE_p_float1,
SWIGTYPE_p_float sWIGTYPE_p_float0)

**Parameters:**
- `SWIGTYPE_p_FMOD_REVERB3D` `sWIGTYPE_p_FMOD_REVERB3D`
- `SWIGTYPE_p_FMOD_VECTOR` `sWIGTYPE_p_FMOD_VECTOR`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float1`
- `SWIGTYPE_p_float` `sWIGTYPE_p_float0`

**Returns:** `int`

### public static int FMOD_Reverb3D_SetProperties(SWIGTYPE_p_FMOD_REVERB3D sWIGTYPE_p_FMOD_REVERB3D,
SWIGTYPE_p_FMOD_REVERB_PROPERTIES sWIGTYPE_p_FMOD_REVERB_PROPERTIES)

**Parameters:**
- `SWIGTYPE_p_FMOD_REVERB3D` `sWIGTYPE_p_FMOD_REVERB3D`
- `SWIGTYPE_p_FMOD_REVERB_PROPERTIES` `sWIGTYPE_p_FMOD_REVERB_PROPERTIES`

**Returns:** `int`

### public static int FMOD_Reverb3D_GetProperties(SWIGTYPE_p_FMOD_REVERB3D sWIGTYPE_p_FMOD_REVERB3D,
SWIGTYPE_p_FMOD_REVERB_PROPERTIES sWIGTYPE_p_FMOD_REVERB_PROPERTIES)

**Parameters:**
- `SWIGTYPE_p_FMOD_REVERB3D` `sWIGTYPE_p_FMOD_REVERB3D`
- `SWIGTYPE_p_FMOD_REVERB_PROPERTIES` `sWIGTYPE_p_FMOD_REVERB_PROPERTIES`

**Returns:** `int`

### public static int FMOD_Reverb3D_SetActive(SWIGTYPE_p_FMOD_REVERB3D sWIGTYPE_p_FMOD_REVERB3D,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_REVERB3D` `sWIGTYPE_p_FMOD_REVERB3D`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Reverb3D_GetActive(SWIGTYPE_p_FMOD_REVERB3D sWIGTYPE_p_FMOD_REVERB3D,
SWIGTYPE_p_FMOD_BOOL sWIGTYPE_p_FMOD_BOOL)

**Parameters:**
- `SWIGTYPE_p_FMOD_REVERB3D` `sWIGTYPE_p_FMOD_REVERB3D`
- `SWIGTYPE_p_FMOD_BOOL` `sWIGTYPE_p_FMOD_BOOL`

**Returns:** `int`

### public static int FMOD_Reverb3D_SetUserData(SWIGTYPE_p_FMOD_REVERB3D sWIGTYPE_p_FMOD_REVERB3D,
SWIGTYPE_p_void sWIGTYPE_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_REVERB3D` `sWIGTYPE_p_FMOD_REVERB3D`
- `SWIGTYPE_p_void` `sWIGTYPE_p_void`

**Returns:** `int`

### public static int FMOD_Reverb3D_GetUserData(SWIGTYPE_p_FMOD_REVERB3D sWIGTYPE_p_FMOD_REVERB3D,
SWIGTYPE_p_p_void sWIGTYPE_p_p_void)

**Parameters:**
- `SWIGTYPE_p_FMOD_REVERB3D` `sWIGTYPE_p_FMOD_REVERB3D`
- `SWIGTYPE_p_p_void` `sWIGTYPE_p_p_void`

**Returns:** `int`

### public static void FMOD_System_SetReverbDefault(int int1,
int int0)

**Parameters:**
- `int` `int1`
- `int` `int0`

**Returns:** `void`

### public static int FMOD_Studio_EventInstance3D(long long0,
float float0,
float float1,
float float2)

**Parameters:**
- `long` `long0`
- `float` `float0`
- `float` `float1`
- `float` `float2`

**Returns:** `int`

### public static int FMOD_Studio_SetNumListeners(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static void FMOD_Studio_Listener3D(int int0,
float float0,
float float1,
float float2,
float float3,
float float4,
float float5,
float float6,
float float7,
float float8,
float float9,
float float10,
float float11)

**Parameters:**
- `int` `int0`
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`
- `float` `float4`
- `float` `float5`
- `float` `float6`
- `float` `float7`
- `float` `float8`
- `float` `float9`
- `float` `float10`
- `float` `float11`

**Returns:** `void`

### public static int FMOD_Studio_EventInstance_SetCallback(long long0,
FMOD_STUDIO_EVENT_CALLBACK fmod_studio_event_callback,
int int0)

**Parameters:**
- `long` `long0`
- `FMOD_STUDIO_EVENT_CALLBACK` `fmod_studio_event_callback`
- `int` `int0`

**Returns:** `int`

### public static int FMOD_Studio_EventInstance_SetParameterByID(long long0,
FMOD_STUDIO_PARAMETER_ID fmod_studio_parameter_id,
float float0,
boolean boolean0)

**Parameters:**
- `long` `long0`
- `FMOD_STUDIO_PARAMETER_ID` `fmod_studio_parameter_id`
- `float` `float0`
- `boolean` `boolean0`

**Returns:** `int`

### public static int FMOD_Studio_EventInstance_SetParameterByID(long long0,
FMOD_STUDIO_PARAMETER_ID fmod_studio_parameter_id,
float float0)

**Parameters:**
- `long` `long0`
- `FMOD_STUDIO_PARAMETER_ID` `fmod_studio_parameter_id`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Studio_EventInstance_SetParameterByName(long long0,
String string,
float float0)

**Parameters:**
- `long` `long0`
- `String` `string`
- `float` `float0`

**Returns:** `int`

### public static float FMOD_Studio_GetParameter(long long0,
String string)

**Parameters:**
- `long` `long0`
- `String` `string`

**Returns:** `float`

### public static int FMOD_Studio_GetPlaybackState(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `int`

### public static int FMOD_Studio_EventInstance_SetVolume(long long0,
float float0)

**Parameters:**
- `long` `long0`
- `float` `float0`

**Returns:** `int`

### public static int FMOD_Studio_ReleaseEventInstance(long long0)

**Parameters:**
- `long` `long0`

**Returns:** `int`

### public static int FMOD_Studio_EventInstance_Stop(long long0,
boolean boolean0)

**Parameters:**
- `long` `long0`
- `boolean` `boolean0`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\fmod\javafmod.html`*
