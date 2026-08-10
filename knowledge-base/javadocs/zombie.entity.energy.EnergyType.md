---
title: zombie.entity.energy.EnergyType
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.entity.energy
---

# zombie.entity.energy.EnergyType

`public enum EnergyType extends Enum<EnergyType>`

**Kind:** enum · **Package:** zombie.entity.energy

## Inheritance
- java.lang.Object
- java.lang.Enum<EnergyType>
- zombie.entity.energy.EnergyType

## Fields

### public static final EnergyType None

### public static final EnergyType Electric

### public static final EnergyType Mechanical

### public static final EnergyType Thermal

### public static final EnergyType Steam

### public static final EnergyType VoidEnergy

### public static final EnergyType Modded

## Methods

### public static EnergyType[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `EnergyType[]`

### public static EnergyType valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `EnergyType`

### public byte getId()

**Returns:** `byte`

### public String toStringLower()

**Returns:** `String`

### public static boolean containsNameLowercase(String name)

**Parameters:**
- `String` `name`

**Returns:** `boolean`

### public static EnergyType FromId(byte id)

**Parameters:**
- `byte` `id`

**Returns:** `EnergyType`

### public static EnergyType FromNameLower(String name)

**Parameters:**
- `String` `name`

**Returns:** `EnergyType`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\energy\EnergyType.html`*
