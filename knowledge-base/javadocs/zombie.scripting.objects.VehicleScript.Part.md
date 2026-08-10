---
title: zombie.scripting.objects.VehicleScript.Part
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.VehicleScript.Part

`public static final class VehicleScript.Part extends Object`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.VehicleScript.Part

## Fields

### public String id

### public String parent

### public ArrayList<String> itemType

### public VehicleScript.Container container

### public String area

### public String mechanicArea

### public String wheel

### public gnu.trove.map.hash.THashMap<String, se.krka.kahlua.vm.KahluaTable> tables

### public gnu.trove.map.hash.THashMap<String,String> luaFunctions

### public ArrayList<VehicleScript.Model> models

### public boolean setAllModelsVisible

### public VehicleScript.Door door

### public VehicleScript.Window window

### public ArrayList<VehicleScript.Anim> anims

### public String category

### public boolean specificItem

### public boolean mechanicRequireKey

### public boolean repairMechanic

### public boolean hasLightsRear

## Constructors

### public Part()

## Methods

### public boolean isMechanicRequireKey()

**Returns:** `boolean`

### public void setMechanicRequireKey(boolean mechanicRequireKey)

**Parameters:**
- `boolean` `mechanicRequireKey`

**Returns:** `void`

### public boolean isRepairMechanic()

**Returns:** `boolean`

### public void setRepairMechanic(boolean repairMechanic)

**Parameters:**
- `boolean` `repairMechanic`

**Returns:** `void`

### public String getId()

**Returns:** `String`

### public int getModelCount()

**Returns:** `int`

### public VehicleScript.Model getModel(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehicleScript.Model`

### public float getDurability()

**Returns:** `float`

### public String getMechanicArea()

**Returns:** `String`

### public VehicleScript.Anim getAnimById(String id)

**Parameters:**
- `String` `id`

**Returns:** `VehicleScript.Anim`

### public VehicleScript.Model getModelById(String id)

**Parameters:**
- `String` `id`

**Returns:** `VehicleScript.Model`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\VehicleScript.Part.html`*
