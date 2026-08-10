---
title: zombie.scripting.ScriptType
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.scripting
---

# zombie.scripting.ScriptType

`public enum ScriptType extends Enum<ScriptType>`

**Kind:** enum · **Package:** zombie.scripting

## Inheritance
- java.lang.Object
- java.lang.Enum<ScriptType>
- zombie.scripting.ScriptType

## Fields

### public static final ScriptType EntityComponent

### public static final ScriptType VehicleTemplate

### public static final ScriptType EntityTemplate

### public static final ScriptType Item

### public static final ScriptType Recipe

### public static final ScriptType UniqueRecipe

### public static final ScriptType EvolvedRecipe

### public static final ScriptType Fixing

### public static final ScriptType AnimationMesh

### public static final ScriptType Mannequin

### public static final ScriptType Model

### public static final ScriptType SpriteModel

### public static final ScriptType Sound

### public static final ScriptType SoundTimeline

### public static final ScriptType Vehicle

### public static final ScriptType RuntimeAnimation

### public static final ScriptType VehicleEngineRPM

### public static final ScriptType ItemConfig

### public static final ScriptType Entity

### public static final ScriptType XuiLayout

### public static final ScriptType XuiStyle

### public static final ScriptType XuiDefaultStyle

### public static final ScriptType XuiColor

### public static final ScriptType XuiSkin

### public static final ScriptType XuiConfig

### public static final ScriptType ItemFilter

### public static final ScriptType CraftRecipe

### public static final ScriptType FluidFilter

### public static final ScriptType StringList

### public static final ScriptType EnergyDefinition

### public static final ScriptType FluidDefinition

### public static final ScriptType PhysicsShape

### public static final ScriptType TimedAction

### public static final ScriptType Ragdoll

### public static final ScriptType PhysicsHitReaction

### public static final ScriptType Clock

### public static final ScriptType CharacterTraitDefinition

### public static final ScriptType CharacterProfessionDefinition

## Methods

### public static ScriptType[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `ScriptType[]`

### public static ScriptType valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `ScriptType`

### public boolean isTemplate()

**Returns:** `boolean`

### public boolean isCritical()

**Returns:** `boolean`

### public String getScriptTag()

**Returns:** `String`

### public boolean hasFlag(ScriptType.Flags flag)

**Parameters:**
- `ScriptType.Flags` `flag`

**Returns:** `boolean`

### public boolean hasFlags(EnumSet<ScriptType.Flags> flags)

**Parameters:**
- `EnumSet<ScriptType.Flags>` `flags`

**Returns:** `boolean`

### public boolean isVerbose()

**Returns:** `boolean`

### public void setVerbose(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public static ArrayList<ScriptType> GetEnumListLua()

**Returns:** `ArrayList<ScriptType>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\ScriptType.html`*
