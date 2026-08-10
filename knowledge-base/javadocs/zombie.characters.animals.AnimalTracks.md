---
title: zombie.characters.animals.AnimalTracks
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.AnimalTracks

`public class AnimalTracks extends Object`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.characters.animals.AnimalTracks

## Fields

### public String animalType

### public long addedTime

### public String trackType

### public IsoDirections dir

### public int x

### public int y

### public int minSkill

### public boolean addedToWorld

## Constructors

### public AnimalTracks()

## Methods

### public static AnimalTracks addAnimalTrack(VirtualAnimal animal,
AnimalTracksDefinitions.AnimalTracksType trackType)

**Parameters:**
- `VirtualAnimal` `animal`
- `AnimalTracksDefinitions.AnimalTracksType` `trackType`

**Returns:** `AnimalTracks`

### public static AnimalTracks addAnimalTrackAtPos(VirtualAnimal animal,
int x,
int y,
AnimalTracksDefinitions.AnimalTracksType trackType,
long timeMinus)

**Parameters:**
- `VirtualAnimal` `animal`
- `int` `x`
- `int` `y`
- `AnimalTracksDefinitions.AnimalTracksType` `trackType`
- `long` `timeMinus`

**Returns:** `AnimalTracks`

### public static void broadcastAnimalTrackToAdminsDebug(AnimalTracks track,
boolean state)

**Parameters:**
- `AnimalTracks` `track`
- `boolean` `state`

**Returns:** `void`

### public boolean canFindTrack(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public void addTrackingExp(IsoGameCharacter chr,
boolean success)

**Parameters:**
- `IsoGameCharacter` `chr`
- `boolean` `success`

**Returns:** `void`

### public static String getTrackStr(String trackType)

**Parameters:**
- `String` `trackType`

**Returns:** `String`

### public static ArrayList<AnimalTracks> getAndFindNearestTracks(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `ArrayList<AnimalTracks>`

### public static ArrayList<AnimalTracks> getNearestTracks(int x,
int y,
int radius)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `radius`

**Returns:** `ArrayList<AnimalTracks>`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public String getTrackType()

**Returns:** `String`

### public String getTrackAge(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `String`

### public IsoDirections getDir()

**Returns:** `IsoDirections`

### public int getMinSkill()

**Returns:** `int`

### public String getTrackItem()

**Returns:** `String`

### public String getTrackSprite()

**Returns:** `String`

### public boolean isAddedToWorld()

**Returns:** `boolean`

### public void setAddedToWorld(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public InventoryItem addItemToWorld()

**Returns:** `InventoryItem`

### public ArrayList<IsoAnimalTrack> getAllIsoTracks()

**Returns:** `ArrayList<IsoAnimalTrack>`

### public ArrayList<IsoAnimalTrack> addToWorld()

**Returns:** `ArrayList<IsoAnimalTrack>`

### public IsoAnimalTrack getIsoAnimalTrack()

**Returns:** `IsoAnimalTrack`

### public String getFreshnessString(int trackingLevel)

**Parameters:**
- `int` `trackingLevel`

**Returns:** `String`

### public int getTrackAgeDays()

**Returns:** `int`

### public int getTrackHours()

**Returns:** `int`

### public boolean isItem()

**Returns:** `boolean`

### public IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public String getTimestamp()

**Returns:** `String`

### public String getAnimalType()

**Returns:** `String`

### public InventoryItem getItem()

**Returns:** `InventoryItem`

### public void setItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\AnimalTracks.html`*
