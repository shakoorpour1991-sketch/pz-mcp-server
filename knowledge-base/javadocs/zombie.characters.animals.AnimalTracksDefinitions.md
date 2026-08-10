---
title: zombie.characters.animals.AnimalTracksDefinitions
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.animals
---

# zombie.characters.animals.AnimalTracksDefinitions

`public class AnimalTracksDefinitions extends Object`

**Kind:** class · **Package:** zombie.characters.animals

## Inheritance
- java.lang.Object
- zombie.characters.animals.AnimalTracksDefinitions

## Fields

### public static HashMap<String, AnimalTracksDefinitions> tracksDefinitions

### public String type

### public HashMap<String, AnimalTracksDefinitions.AnimalTracksType> tracks

### public HashMap<String,Integer> trackChance

### public int skillToIdentify

### public String trackType

### public int chanceToFindTrack

## Constructors

### public AnimalTracksDefinitions()

## Methods

### public static AnimalTracksDefinitions.AnimalTracksType getRandomTrack(String animalType,
String action)

**Parameters:**
- `String` `animalType`
- `String` `action`

**Returns:** `AnimalTracksDefinitions.AnimalTracksType`

### public static AnimalTracksDefinitions.AnimalTracksType getTrackType(String animal,
String type)

**Parameters:**
- `String` `animal`
- `String` `type`

**Returns:** `AnimalTracksDefinitions.AnimalTracksType`

### public static HashMap<String, AnimalTracksDefinitions> getTracksDefinition()

**Returns:** `HashMap<String, AnimalTracksDefinitions>`

### public static void loadTracksDefinitions()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\animals\AnimalTracksDefinitions.html`*
