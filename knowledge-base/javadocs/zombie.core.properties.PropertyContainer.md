---
title: zombie.core.properties.PropertyContainer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.properties
---

# zombie.core.properties.PropertyContainer

`public final class PropertyContainer extends gnu.trove.map.hash.TShortShortHashMap`

**Kind:** class · **Package:** zombie.core.properties

## Inheritance
- java.lang.Object
- gnu.trove.impl.hash.THash
- gnu.trove.impl.hash.TPrimitiveHash
- gnu.trove.impl.hash.TShortShortHash
- gnu.trove.map.hash.TShortShortHashMap
- zombie.core.properties.PropertyContainer

## Fields

### public static List<Object> sorted

## Constructors

### public PropertyContainer()

## Methods

### public void CreateKeySet()

**Returns:** `void`

### public void AddProperties(PropertyContainer other)

**Parameters:**
- `PropertyContainer` `other`

**Returns:** `void`

### public void Clear()

**Returns:** `void`

### public boolean has(IsoFlagType flag)

**Parameters:**
- `IsoFlagType` `flag`

**Returns:** `boolean`

### public boolean has(Double flag)

**Parameters:**
- `Double` `flag`

**Returns:** `boolean`

### public void set(String tilePropertyKey)

**Parameters:**
- `String` `tilePropertyKey`

**Returns:** `void`

### public void set(IsoPropertyType type,
String propValue)

**Parameters:**
- `IsoPropertyType` `type`
- `String` `propValue`

**Returns:** `void`

### public void set(String propName,
String propValue)

**Parameters:**
- `String` `propName`
- `String` `propValue`

**Returns:** `void`

### public void set(IsoPropertyType type,
String propValue,
boolean checkIsoFlagType)

**Parameters:**
- `IsoPropertyType` `type`
- `String` `propValue`
- `boolean` `checkIsoFlagType`

**Returns:** `void`

### public void set(String propName,
String propValue,
boolean checkIsoFlagType)

**Parameters:**
- `String` `propName`
- `String` `propValue`
- `boolean` `checkIsoFlagType`

**Returns:** `void`

### public void set(IsoFlagType flag)

**Parameters:**
- `IsoFlagType` `flag`

**Returns:** `void`

### public void set(IsoFlagType flag,
String ignored)

**Parameters:**
- `IsoFlagType` `flag`
- `String` `ignored`

**Returns:** `void`

### public void unset(String propName)

**Parameters:**
- `String` `propName`

**Returns:** `void`

### public void unset(IsoFlagType flag)

**Parameters:**
- `IsoFlagType` `flag`

**Returns:** `void`

### public String get(IsoPropertyType type)

**Parameters:**
- `IsoPropertyType` `type`

**Returns:** `String`

### public String get(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public boolean propertyEquals(IsoPropertyType type,
String value)

**Parameters:**
- `IsoPropertyType` `type`
- `String` `value`

**Returns:** `boolean`

### public boolean propertyEquals(String name,
String value)

**Parameters:**
- `String` `name`
- `String` `value`

**Returns:** `boolean`

### public boolean has(IsoPropertyType isoPropertyType)

**Parameters:**
- `IsoPropertyType` `isoPropertyType`

**Returns:** `boolean`

### public boolean has(IsoPropertyType... isoPropertyType)

**Parameters:**
- `IsoPropertyType...` `isoPropertyType`

**Returns:** `boolean`

### public boolean has(String isoPropertyType)

**Parameters:**
- `String` `isoPropertyType`

**Returns:** `boolean`

### public ArrayList<IsoFlagType> getFlagsList()

**Returns:** `ArrayList<IsoFlagType>`

### public ArrayList<String> getPropertyNames()

**Returns:** `ArrayList<String>`

### public int getSurface()

**Returns:** `int`

### public boolean isSurfaceOffset()

**Returns:** `boolean`

### public boolean isTable()

**Returns:** `boolean`

### public boolean isTableTop()

**Returns:** `boolean`

### public int getStackReplaceTileOffset()

**Returns:** `int`

### public int getItemHeight()

**Returns:** `int`

### public IsoDirections getSlopedSurfaceDirection()

**Returns:** `IsoDirections`

### public int getSlopedSurfaceHeightMin()

**Returns:** `int`

### public int getSlopedSurfaceHeightMax()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\properties\PropertyContainer.html`*
