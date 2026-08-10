---
title: zombie.vehicles.VehiclePartOwner
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.vehicles
---

# zombie.vehicles.VehiclePartOwner

`public interface VehiclePartOwner extends IVehicleEngineListener`

**Kind:** interface · **Package:** zombie.vehicles

## Methods

### float getX()

**Returns:** `float`

### float getY()

**Returns:** `float`

### float getZ()

**Returns:** `float`

### int getXi()

**Returns:** `int`

### int getYi()

**Returns:** `int`

### int getZi()

**Returns:** `int`

### IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### default IsoGameCharacter getDriver()

**Returns:** `IsoGameCharacter`

### default IsoGameCharacter getDriverRegardlessOfTow()

**Returns:** `IsoGameCharacter`

### VehicleParts getParts()

**Returns:** `VehicleParts`

### default int getPartCount()

**Returns:** `int`

### default VehiclePart getPartByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehiclePart`

### default VehiclePart getPartByPartId(VehiclePart id)

**Parameters:**
- `VehiclePart` `id`

**Returns:** `VehiclePart`

### default VehiclePart getPartById(String id)

**Parameters:**
- `String` `id`

**Returns:** `VehiclePart`

### default int getPartIndex(String id)

**Parameters:**
- `String` `id`

**Returns:** `int`

### default VehiclePart getTrunkDoorPart()

**Returns:** `VehiclePart`

### default VehiclePart getTrunkPart()

**Returns:** `VehiclePart`

### default VehiclePart getTrailerTrunkPart()

**Returns:** `VehiclePart`

### default int getNumberOfPartsWithContainers()

**Returns:** `int`

### default VehiclePart getHeater()

**Returns:** `VehiclePart`

### VehicleScript getScript()

**Returns:** `VehicleScript`

### default VehiclePart getBattery()

**Returns:** `VehiclePart`

### default VehiclePart getEngine()

**Returns:** `VehiclePart`

### default VehiclePart getGasTank()

**Returns:** `VehiclePart`

### default float getGasRemaining()

**Returns:** `float`

### LightbarLightsMode getLightbarLightsModeObject()

**Returns:** `LightbarLightsMode`

### default int getLightbarLightsMode()

**Returns:** `int`

### default void setLightbarLightsMode(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### LightbarSirenMode getLightbarSirenModeObject()

**Returns:** `LightbarSirenMode`

### default void setLightbarSirenMode(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### default float getBatteryCharge()

**Returns:** `float`

### boolean getHeadlightsOn()

**Returns:** `boolean`

### default int windowsOpen()

**Returns:** `int`

### void setEngineFeature(int var1,
int var2,
int var3)

**Parameters:**
- `int` `var1`
- `int` `var2`
- `int` `var3`

**Returns:** `void`

### boolean isEngineWorking()

**Returns:** `boolean`

### float getBrakeSpeedBetweenUpdate()

**Returns:** `float`

### BaseVehicle.ModelInfo setModelVisible(VehiclePart var1,
VehicleScript.Model var2,
boolean var3)

**Parameters:**
- `VehiclePart` `var1`
- `VehicleScript.Model` `var2`
- `boolean` `var3`

**Returns:** `BaseVehicle.ModelInfo`

### void updateDamageOverlayLater()

**Returns:** `void`

### void updateTotalMass()

**Returns:** `void`

### void updateBulletStats()

**Returns:** `void`

### void updatePartStats()

**Returns:** `void`

### void transmitEngine()

**Returns:** `void`

### void transmitPartCondition(VehiclePart var1)

**Parameters:**
- `VehiclePart` `var1`

**Returns:** `void`

### void transmitPartDoor(VehiclePart var1)

**Parameters:**
- `VehiclePart` `var1`

**Returns:** `void`

### void transmitPartItem(VehiclePart var1)

**Parameters:**
- `VehiclePart` `var1`

**Returns:** `void`

### void transmitPartLight(VehiclePart var1)

**Parameters:**
- `VehiclePart` `var1`

**Returns:** `void`

### void transmitPartModData(VehiclePart var1)

**Parameters:**
- `VehiclePart` `var1`

**Returns:** `void`

### void transmitPartUsedDelta(VehiclePart var1)

**Parameters:**
- `VehiclePart` `var1`

**Returns:** `void`

### void transmitPartWindow(VehiclePart var1)

**Parameters:**
- `VehiclePart` `var1`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehiclePartOwner.html`*
