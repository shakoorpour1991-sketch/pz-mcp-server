---
title: zombie.iso.areas.DesignationZoneAnimal
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas
---

# zombie.iso.areas.DesignationZoneAnimal

`public final class DesignationZoneAnimal extends DesignationZone`

**Kind:** class · **Package:** zombie.iso.areas

## Inheritance
- java.lang.Object
- zombie.iso.areas.DesignationZone
- zombie.iso.areas.DesignationZoneAnimal

## Fields

### public static final ArrayList<DesignationZoneAnimal> designationAnimalZoneList

### public static final String ZONE_TYPE

### public static final float ZONE_COLOR_R

### public static final float ZONE_COLOR_G

### public static final float ZONE_COLOR_B

### public static final float ZONE_SELECTED_COLOR_R

### public static final float ZONE_SELECTED_COLOR_G

### public static final float ZONE_SELECTED_COLOR_B

### public final ArrayList<IsoFeedingTrough> troughs

### public final ArrayList<IsoHutch> hutchs

### public final ArrayList<IsoWorldInventoryObject> foodOnGround

### public final ArrayList<IsoGridSquare> nearWaterSquares

### public static final String FENCE_WEST

### public static final String FENCE_NORTH

### public static final String FENCE_NORTHCORNER

## Constructors

### public DesignationZoneAnimal(String name,
int x,
int y,
int z,
int x2,
int y2,
boolean doSync)

**Parameters:**
- `String` `name`
- `int` `x`
- `int` `y`
- `int` `z`
- `int` `x2`
- `int` `y2`
- `boolean` `doSync`

## Methods

### public static ArrayList<DesignationZoneAnimal> getAllDZones(ArrayList<DesignationZoneAnimal> currentList,
DesignationZoneAnimal zone,
DesignationZoneAnimal previousZone)

**Parameters:**
- `ArrayList<DesignationZoneAnimal>` `currentList`
- `DesignationZoneAnimal` `zone`
- `DesignationZoneAnimal` `previousZone`

**Returns:** `ArrayList<DesignationZoneAnimal>`

### public void createSurroundingFence()

**Returns:** `void`

### public static boolean isItemFood(IsoWorldInventoryObject item)

**Parameters:**
- `IsoWorldInventoryObject` `item`

**Returns:** `boolean`

### public static boolean isItemDung(IsoWorldInventoryObject item)

**Parameters:**
- `IsoWorldInventoryObject` `item`

**Returns:** `boolean`

### public static boolean isItemFeather(IsoWorldInventoryObject item)

**Parameters:**
- `IsoWorldInventoryObject` `item`

**Returns:** `boolean`

### public static void addItemOnGround(IsoWorldInventoryObject item,
IsoGridSquare sq)

**Parameters:**
- `IsoWorldInventoryObject` `item`
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void addFoodOnGround(IsoWorldInventoryObject item)

**Parameters:**
- `IsoWorldInventoryObject` `item`

**Returns:** `void`

### public void check()

**Returns:** `void`

### public void doMeta(int hours)

**Parameters:**
- `int` `hours`

**Returns:** `void`

### public static String getType()

**Returns:** `String`

### public static ArrayList<DesignationZoneAnimal> getAllZones()

**Returns:** `ArrayList<DesignationZoneAnimal>`

### public static DesignationZoneAnimal getZone(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `DesignationZoneAnimal`

### public static DesignationZoneAnimal getZoneById(double zoneID)

**Parameters:**
- `double` `zoneID`

**Returns:** `DesignationZoneAnimal`

### public static DesignationZoneAnimal getZoneF(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `DesignationZoneAnimal`

### public static DesignationZoneAnimal getZone(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `DesignationZoneAnimal`

### public static void removeZone(DesignationZoneAnimal zone,
boolean doSync)

**Parameters:**
- `DesignationZoneAnimal` `zone`
- `boolean` `doSync`

**Returns:** `void`

### public static void removeItemFromGround(IsoWorldInventoryObject item)

**Parameters:**
- `IsoWorldInventoryObject` `item`

**Returns:** `void`

### public void addAnimal(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void removeAnimal(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void addCorpse(IsoDeadBody corpse)

**Parameters:**
- `IsoDeadBody` `corpse`

**Returns:** `void`

### public void removeCorpse(IsoDeadBody corpse)

**Parameters:**
- `IsoDeadBody` `corpse`

**Returns:** `void`

### public ArrayList<IsoAnimal> getAnimals()

**Returns:** `ArrayList<IsoAnimal>`

### public ArrayList<IsoDeadBody> getCorpses()

**Returns:** `ArrayList<IsoDeadBody>`

### public ArrayList<IsoDeadBody> getCorpsesConnected()

**Returns:** `ArrayList<IsoDeadBody>`

### public ArrayList<IsoFeedingTrough> getTroughs()

**Returns:** `ArrayList<IsoFeedingTrough>`

### public ArrayList<IsoHutch> getHutchs()

**Returns:** `ArrayList<IsoHutch>`

### public ArrayList<IsoAnimal> getAnimalsConnected()

**Returns:** `ArrayList<IsoAnimal>`

### public ArrayList<IsoFeedingTrough> getTroughsConnected()

**Returns:** `ArrayList<IsoFeedingTrough>`

### public ArrayList<IsoHutch> getHutchsConnected()

**Returns:** `ArrayList<IsoHutch>`

### public ArrayList<IsoWorldInventoryObject> getFoodOnGround()

**Returns:** `ArrayList<IsoWorldInventoryObject>`

### public ArrayList<IsoWorldInventoryObject> getFoodOnGroundConnected()

**Returns:** `ArrayList<IsoWorldInventoryObject>`

### public ArrayList<IsoGridSquare> getNearWaterSquaresConnected()

**Returns:** `ArrayList<IsoGridSquare>`

### public int getFullZoneSize()

**Returns:** `int`

### public static void addNewRoof(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public ArrayList<Position3D> getRoofAreas()

**Returns:** `ArrayList<Position3D>`

### public ArrayList<Position3D> getRoofAreasConnected()

**Returns:** `ArrayList<Position3D>`

### public static void Reset()

**Returns:** `void`

### public int getNbOfDung()

**Returns:** `int`

### public int getNbOfFeather()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\DesignationZoneAnimal.html`*
