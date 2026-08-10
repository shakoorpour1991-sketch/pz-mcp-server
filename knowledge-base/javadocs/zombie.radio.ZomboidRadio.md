---
title: zombie.radio.ZomboidRadio
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.radio
---

# zombie.radio.ZomboidRadio

`public final class ZomboidRadio extends Object`

**Kind:** class · **Package:** zombie.radio

## Inheritance
- java.lang.Object
- zombie.radio.ZomboidRadio

## Fields

### public static final String SAVE_FILE

### public static final boolean DEBUG_MODE

### public static final boolean DEBUG_XML

### public static final boolean DEBUG_SOUND

### public static boolean postRadioSilence

### public static boolean disableBroadcasting

### public static boolean louisvilleObfuscation

## Methods

### public static boolean hasInstance()

**Returns:** `boolean`

### public static ZomboidRadio getInstance()

**Returns:** `ZomboidRadio`

### public static boolean isStaticSound(String str)

**Parameters:**
- `String` `str`

**Returns:** `boolean`

### public RadioScriptManager getScriptManager()

**Returns:** `RadioScriptManager`

### public int getDaysSinceStart()

**Returns:** `int`

### public ArrayList<WaveSignalDevice> getDevices()

**Returns:** `ArrayList<WaveSignalDevice>`

### public ArrayList<WaveSignalDevice> getBroadcastDevices()

**Returns:** `ArrayList<WaveSignalDevice>`

### public void setHasRecievedServerData(boolean state)

**Parameters:**
- `boolean` `state`

**Returns:** `void`

### public void addChannelName(String name,
int frequency,
String category)

**Parameters:**
- `String` `name`
- `int` `frequency`
- `String` `category`

**Returns:** `void`

### public void addChannelName(String name,
int frequency,
String category,
boolean overwrite)

**Parameters:**
- `String` `name`
- `int` `frequency`
- `String` `category`
- `boolean` `overwrite`

**Returns:** `void`

### public void removeChannelName(int frequency)

**Parameters:**
- `int` `frequency`

**Returns:** `void`

### public Map<Integer,String> GetChannelList(String category)

**Parameters:**
- `String` `category`

**Returns:** `Map<Integer,String>`

### public String getChannelName(int frequency)

**Parameters:**
- `int` `frequency`

**Returns:** `String`

### public int getRandomFrequency()

**Returns:** `int`

### public int getRandomFrequency(int rangemin,
int rangemax)

**Parameters:**
- `int` `rangemin`
- `int` `rangemax`

**Returns:** `int`

### public Map<String, Map<Integer,String>> getFullChannelList()

**Returns:** `Map<String, Map<Integer,String>>`

### public void WriteRadioServerDataPacket(ByteBufferWriter bb)

**Parameters:**
- `ByteBufferWriter` `bb`

**Returns:** `void`

### public void Init(int savedWorldVersion)

**Parameters:**
- `int` `savedWorldVersion`

**Returns:** `void`

### public void Save()
throws FileNotFoundException,
IOException

**Returns:** `void`

### public boolean Load()
throws FileNotFoundException,
IOException

**Returns:** `boolean`

### public void Reset()

**Returns:** `void`

### public void UpdateScripts(int hour,
int mins)

**Parameters:**
- `int` `hour`
- `int` `mins`

**Returns:** `void`

### public void render()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void DistributeTransmission(int sourceX,
int sourceY,
int channel,
String msg,
String guid,
String codes,
float r,
float g,
float b,
int signalStrength,
boolean isTV)

**Parameters:**
- `int` `sourceX`
- `int` `sourceY`
- `int` `channel`
- `String` `msg`
- `String` `guid`
- `String` `codes`
- `float` `r`
- `float` `g`
- `float` `b`
- `int` `signalStrength`
- `boolean` `isTV`

**Returns:** `void`

### public GameMode getGameMode()

**Returns:** `GameMode`

### public String getRandomBzztFzzt()

**Returns:** `String`

### public String scrambleString(String msg,
int intensity,
boolean ignoreBBcode,
String customScramble)

**Parameters:**
- `String` `msg`
- `int` `intensity`
- `boolean` `ignoreBBcode`
- `String` `customScramble`

**Returns:** `String`

### public void SendTransmission(int sourceX,
int sourceY,
ChatMessage msg,
int signalStrength)

**Parameters:**
- `int` `sourceX`
- `int` `sourceY`
- `ChatMessage` `msg`
- `int` `signalStrength`

**Returns:** `void`

### public void SendTransmission(int sourceX,
int sourceY,
int channel,
String msg,
String guid,
String codes,
float r,
float g,
float b,
int signalStrength,
boolean isTV)

**Parameters:**
- `int` `sourceX`
- `int` `sourceY`
- `int` `channel`
- `String` `msg`
- `String` `guid`
- `String` `codes`
- `float` `r`
- `float` `g`
- `float` `b`
- `int` `signalStrength`
- `boolean` `isTV`

**Returns:** `void`

### public void SendTransmission(long source,
int sourceX,
int sourceY,
int channel,
String msg,
String guid,
String codes,
float r,
float g,
float b,
int signalStrength,
boolean isTV)

**Parameters:**
- `long` `source`
- `int` `sourceX`
- `int` `sourceY`
- `int` `channel`
- `String` `msg`
- `String` `guid`
- `String` `codes`
- `float` `r`
- `float` `g`
- `float` `b`
- `int` `signalStrength`
- `boolean` `isTV`

**Returns:** `void`

### public void PlayerListensChannel(int channel,
boolean listenmode,
boolean isTV)

**Parameters:**
- `int` `channel`
- `boolean` `listenmode`
- `boolean` `isTV`

**Returns:** `void`

### public void RegisterDevice(WaveSignalDevice device)

**Parameters:**
- `WaveSignalDevice` `device`

**Returns:** `void`

### public void UnRegisterDevice(WaveSignalDevice device)

**Parameters:**
- `WaveSignalDevice` `device`

**Returns:** `void`

### public Object clone()

**Returns:** `Object`

### public String computerize(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

### public RecordedMedia getRecordedMedia()

**Returns:** `RecordedMedia`

### public void setDisableBroadcasting(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getDisableBroadcasting()

**Returns:** `boolean`

### public void setDisableMediaLineLearning(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getDisableMediaLineLearning()

**Returns:** `boolean`

### public static void ObfuscateChannelCheck(RadioChannel channel)

**Parameters:**
- `RadioChannel` `channel`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\ZomboidRadio.html`*
