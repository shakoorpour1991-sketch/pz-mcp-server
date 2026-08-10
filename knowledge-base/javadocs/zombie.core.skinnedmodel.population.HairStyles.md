---
title: zombie.core.skinnedmodel.population.HairStyles
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.population
---

# zombie.core.skinnedmodel.population.HairStyles

`public class HairStyles extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.population

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.population.HairStyles

## Fields

### public final ArrayList<HairStyle> maleStyles

### public final ArrayList<HairStyle> femaleStyles

### public static HairStyles instance

## Constructors

### public HairStyles()

## Methods

### public static void init()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static HairStyles Parse(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `HairStyles`

### public static HairStyles parse(String filename)
throws javax.xml.bind.JAXBException,
IOException

**Parameters:**
- `String` `filename`

**Returns:** `HairStyles`

### public HairStyle FindMaleStyle(String name)

**Parameters:**
- `String` `name`

**Returns:** `HairStyle`

### public HairStyle FindFemaleStyle(String name)

**Parameters:**
- `String` `name`

**Returns:** `HairStyle`

### public String getRandomMaleStyle(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `String`

### public String getRandomFemaleStyle(String outfitName)

**Parameters:**
- `String` `outfitName`

**Returns:** `String`

### public HairStyle getAlternateForHat(HairStyle style,
String category)

**Parameters:**
- `HairStyle` `style`
- `String` `category`

**Returns:** `HairStyle`

### public ArrayList<HairStyle> getAllMaleStyles()

**Returns:** `ArrayList<HairStyle>`

### public ArrayList<HairStyle> getAllFemaleStyles()

**Returns:** `ArrayList<HairStyle>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\population\HairStyles.html`*
