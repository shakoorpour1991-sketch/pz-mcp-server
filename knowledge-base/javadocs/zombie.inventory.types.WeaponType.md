---
title: zombie.inventory.types.WeaponType
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.inventory.types
---

# zombie.inventory.types.WeaponType

`public enum WeaponType extends Enum<WeaponType>`

**Kind:** enum · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- java.lang.Enum<WeaponType>
- zombie.inventory.types.WeaponType

## Fields

### public static final WeaponType UNARMED

### public static final WeaponType TWO_HANDED

### public static final WeaponType ONE_HANDED

### public static final WeaponType HEAVY

### public static final WeaponType KNIFE

### public static final WeaponType SPEAR

### public static final WeaponType HANDGUN

### public static final WeaponType FIREARM

### public static final WeaponType THROWING

### public static final WeaponType CHAINSAW

## Methods

### public static WeaponType[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `WeaponType[]`

### public static WeaponType valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `WeaponType`

### public static WeaponType getWeaponType(HandWeapon weapon)

**Parameters:**
- `HandWeapon` `weapon`

**Returns:** `WeaponType`

### public static WeaponType getWeaponType(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `WeaponType`

### public static WeaponType getWeaponType(IsoGameCharacter chr,
InventoryItem inv1,
InventoryItem inv2)

**Parameters:**
- `IsoGameCharacter` `chr`
- `InventoryItem` `inv1`
- `InventoryItem` `inv2`

**Returns:** `WeaponType`

### public String getType()

**Returns:** `String`

### public WeightedList<AttackType> getPossibleAttack()

**Returns:** `WeightedList<AttackType>`

### public boolean isCanMiss()

**Returns:** `boolean`

### public boolean isRanged()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\WeaponType.html`*
