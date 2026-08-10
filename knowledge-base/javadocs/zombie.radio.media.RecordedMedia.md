---
title: zombie.radio.media.RecordedMedia
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.radio.media
---

# zombie.radio.media.RecordedMedia

`public class RecordedMedia extends Object`

**Kind:** class · **Package:** zombie.radio.media

## Inheritance
- java.lang.Object
- zombie.radio.media.RecordedMedia

## Description

TurboTuTone.

## Fields

### public static boolean disableLineLearning

### public static final int VERSION1

### public static final int VERSION2

### public static final int VERSION

### public static final String SAVE_FILE

## Constructors

### public RecordedMedia()

## Methods

### public void init()

**Returns:** `void`

### public static byte getMediaTypeForCategory(String category)

**Parameters:**
- `String` `category`

**Returns:** `byte`

### public ArrayList<String> getCategories()

**Returns:** `ArrayList<String>`

### public ArrayList<MediaData> getAllMediaForType(byte type)

**Parameters:**
- `byte` `type`

**Returns:** `ArrayList<MediaData>`

### public ArrayList<MediaData> getAllMediaForCategory(String category)

**Parameters:**
- `String` `category`

**Returns:** `ArrayList<MediaData>`

### public MediaData register(String category,
String id,
String itemDisplayName,
int spawning)

**Parameters:**
- `String` `category`
- `String` `id`
- `String` `itemDisplayName`
- `int` `spawning`

**Returns:** `MediaData`

### public MediaData getMediaDataFromIndex(short index)

**Parameters:**
- `short` `index`

**Returns:** `MediaData`

### public short getIndexForMediaData(MediaData data)

**Parameters:**
- `MediaData` `data`

**Returns:** `short`

### public MediaData getMediaData(String id)

**Parameters:**
- `String` `id`

**Returns:** `MediaData`

### public MediaData getRandomFromCategory(String cat)

**Parameters:**
- `String` `cat`

**Returns:** `MediaData`

### public void load()
throws IOException

**Returns:** `void`

### public void save()
throws IOException

**Returns:** `void`

### public static String toAscii(String string)

**Parameters:**
- `String` `string`

**Returns:** `String`

### public boolean hasListenedToLine(IsoPlayer player,
String guid)

**Parameters:**
- `IsoPlayer` `player`
- `String` `guid`

**Returns:** `boolean`

### public boolean hasListenedToAll(IsoPlayer player,
MediaData mediaData)

**Parameters:**
- `IsoPlayer` `player`
- `MediaData` `mediaData`

**Returns:** `boolean`

### public void sendRequestData(ByteBuffer bb)

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public static void receiveRequestData(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public void handleLegacyListenedLines(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\media\RecordedMedia.html`*
