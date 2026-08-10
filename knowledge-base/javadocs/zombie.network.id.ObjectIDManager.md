---
title: zombie.network.id.ObjectIDManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.id
---

# zombie.network.id.ObjectIDManager

`public class ObjectIDManager extends Object`

**Kind:** class · **Package:** zombie.network.id

## Inheritance
- java.lang.Object
- zombie.network.id.ObjectIDManager

## Methods

### public static ObjectIDManager getInstance()

**Returns:** `ObjectIDManager`

### public void clear()

**Returns:** `void`

### public void load(DataInputStream input,
int worldVersion)
throws IOException

**Parameters:**
- `DataInputStream` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void checkForSaveDataFile(boolean force)

**Parameters:**
- `boolean` `force`

**Returns:** `void`

### public static IIdentifiable get(ObjectID id)

**Parameters:**
- `ObjectID` `id`

**Returns:** `IIdentifiable`

### public void remove(ObjectID id)

**Parameters:**
- `ObjectID` `id`

**Returns:** `void`

### public void addObject(IIdentifiable object)

**Parameters:**
- `IIdentifiable` `object`

**Returns:** `void`

### public static ObjectID createObjectID(ObjectIDType type)

**Parameters:**
- `ObjectIDType` `type`

**Returns:** `ObjectID`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\id\ObjectIDManager.html`*
