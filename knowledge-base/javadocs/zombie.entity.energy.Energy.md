---
title: zombie.entity.energy.Energy
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.energy
---

# zombie.entity.energy.Energy

`public class Energy extends Object`

**Kind:** class · **Package:** zombie.entity.energy

## Inheritance
- java.lang.Object
- zombie.entity.energy.Energy

## Fields

### public static final Energy Electric

### public static final Energy Mechanical

### public static final Energy Thermal

### public static final Energy Steam

### public static final Energy VoidEnergy

## Methods

### public static Energy Get(EnergyType type)

**Parameters:**
- `EnergyType` `type`

**Returns:** `Energy`

### public static Energy Get(String name)

**Parameters:**
- `String` `name`

**Returns:** `Energy`

### public static ArrayList<Energy> getAllEnergies()

**Returns:** `ArrayList<Energy>`

### public static void Init(ScriptLoadMode loadMode)
throws Exception

**Parameters:**
- `ScriptLoadMode` `loadMode`

**Returns:** `void`

### public static void PreReloadScripts()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static void saveEnergy(Energy energy,
ByteBuffer output)

**Parameters:**
- `Energy` `energy`
- `ByteBuffer` `output`

**Returns:** `void`

### public static Energy loadEnergy(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `Energy`

### public boolean isVanilla()

**Returns:** `boolean`

### public String getDisplayName()

**Returns:** `String`

### public Color getColor()

**Returns:** `Color`

### public Texture getIconTexture()

**Returns:** `Texture`

### public Texture getHorizontalBarTexture()

**Returns:** `Texture`

### public Texture getVerticalBarTexture()

**Returns:** `Texture`

### public String getEnergyTypeString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\energy\Energy.html`*
