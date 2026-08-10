---
title: zombie.characters.Role
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.Role

`public class Role extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.Role

## Constructors

### public Role(String name)

**Parameters:**
- `String` `name`

## Methods

### public int getId()

**Returns:** `int`

### public void setId(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getDescription()

**Returns:** `String`

### public void setDescription(String v)

**Parameters:**
- `String` `v`

**Returns:** `void`

### public Color getColor()

**Returns:** `Color`

### public void setColor(Color v)

**Parameters:**
- `Color` `v`

**Returns:** `void`

### public boolean isReadOnly()

**Returns:** `boolean`

### public void setReadOnly()

**Returns:** `void`

### public int getPosition()

**Returns:** `int`

### public void setPosition(int position)

**Parameters:**
- `int` `position`

**Returns:** `void`

### public ArrayList<String> getDefaults()

**Returns:** `ArrayList<String>`

### public boolean addCapability(Capability capability)

**Parameters:**
- `Capability` `capability`

**Returns:** `boolean`

### public boolean removeCapability(Capability capability)

**Parameters:**
- `Capability` `capability`

**Returns:** `boolean`

### public void cleanCapability()

**Returns:** `void`

### public HashSet<Capability> getCapabilities()

**Returns:** `HashSet<Capability>`

### public void send(ByteBufferWriter output)

**Parameters:**
- `ByteBufferWriter` `output`

**Returns:** `void`

### public void parse(ByteBufferReader input)

**Parameters:**
- `ByteBufferReader` `input`

**Returns:** `void`

### public static boolean hasCapability(IsoMovingObject target,
Capability capability)

**Parameters:**
- `IsoMovingObject` `target`
- `Capability` `capability`

**Returns:** `boolean`

### public boolean hasCapability(Capability capability)

**Parameters:**
- `Capability` `capability`

**Returns:** `boolean`

### public static boolean isUsingDebugMode()

**Returns:** `boolean`

### public boolean hasAdminTool()

**Returns:** `boolean`

### public boolean hasAdminPower()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\Role.html`*
