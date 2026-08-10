---
title: zombie.vehicles.VehicleAlarm
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehicleAlarm

`public final class VehicleAlarm extends Object`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.vehicles.VehicleAlarm

## Constructors

### public VehicleAlarm(VehiclePartOwner owner)

**Parameters:**
- `VehiclePartOwner` `owner`

## Methods

### public void setOwner(VehiclePartOwner owner)

**Parameters:**
- `VehiclePartOwner` `owner`

**Returns:** `void`

### public void setListener(IVehicleAlarmListener listener)

**Parameters:**
- `IVehicleAlarmListener` `listener`

**Returns:** `void`

### public void setStartTime(double worldAgeHours)

**Parameters:**
- `double` `worldAgeHours`

**Returns:** `void`

### public double getStartTime()

**Returns:** `double`

### public void setChosenSound(String sound)

**Parameters:**
- `String` `sound`

**Returns:** `void`

### public String getChosenSound()

**Returns:** `String`

### public boolean isActive()

**Returns:** `boolean`

### public boolean isSoundOn()

**Returns:** `boolean`

### public void trigger()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void chooseSound()

**Returns:** `void`

### public boolean isChosenSoundLooping()

**Returns:** `boolean`

### public void onAlarmStart()

**Returns:** `void`

### public void onAlarmStop()

**Returns:** `void`

### public boolean isLightsOn()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehicleAlarm.html`*
