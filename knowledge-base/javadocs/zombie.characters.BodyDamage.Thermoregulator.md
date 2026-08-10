---
title: zombie.characters.BodyDamage.Thermoregulator
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters.BodyDamage
---

# zombie.characters.BodyDamage.Thermoregulator

`public final class Thermoregulator extends Object`

**Kind:** class · **Package:** zombie.characters.BodyDamage

## Inheritance
- java.lang.Object
- zombie.characters.BodyDamage.Thermoregulator

## Description

TurboTuTone.
Thermoregulator for living bodies.

## Fields

### public static final float THERMAL_COLD_DAMAGE_MOD

## Constructors

### public Thermoregulator(BodyDamage parent)

**Parameters:**
- `BodyDamage` `parent`

## Methods

### public static void setSimulationMultiplier(float multiplier)

**Parameters:**
- `float` `multiplier`

**Returns:** `void`

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void reset()

**Returns:** `void`

### public int getNodeSize()

**Returns:** `int`

### public Thermoregulator.ThermalNode getNode(int index)

**Parameters:**
- `int` `index`

**Returns:** `Thermoregulator.ThermalNode`

### public Thermoregulator.ThermalNode getNodeForType(BodyPartType type)

**Parameters:**
- `BodyPartType` `type`

**Returns:** `Thermoregulator.ThermalNode`

### public Thermoregulator.ThermalNode getNodeForBloodType(BloodBodyPartType type)

**Parameters:**
- `BloodBodyPartType` `type`

**Returns:** `Thermoregulator.ThermalNode`

### public float getBodyHeatDelta()

**Returns:** `float`

### public double getFluidsMultiplier()

**Returns:** `double`

### public double getEnergyMultiplier()

**Returns:** `double`

### public double getFatigueMultiplier()

**Returns:** `double`

### public float getMovementModifier()

**Returns:** `float`

### public float getCombatModifier()

**Returns:** `float`

### public float getCoreTemperature()

**Returns:** `float`

### public float getHeatGeneration()

**Returns:** `float`

### public float getMetabolicRate()

**Returns:** `float`

### public float getMetabolicTarget()

**Returns:** `float`

### public float getMetabolicRateReal()

**Returns:** `float`

### public float getSetPoint()

**Returns:** `float`

### public float getCoreHeatDelta()

**Returns:** `float`

### public float getCoreRateOfChange()

**Returns:** `float`

### public float getExternalAirTemperature()

**Returns:** `float`

### public float getCoreTemperatureUI()

**Returns:** `float`

### public float getHeatGenerationUI()

**Returns:** `float`

### public boolean thermalChevronUp()

**Returns:** `boolean`

### public int thermalChevronCount()

**Returns:** `int`

### public float getCatchAColdDelta()

**Returns:** `float`

### public float getTimedActionTimeModifier()

**Returns:** `float`

### public static float getSkinCelciusMin()

**Returns:** `float`

### public static float getSkinCelciusFavorable()

**Returns:** `float`

### public static float getSkinCelciusMax()

**Returns:** `float`

### public void setMetabolicTarget(Metabolics meta)

**Parameters:**
- `Metabolics` `meta`

**Returns:** `void`

### public void setMetabolicTarget(float target)

**Parameters:**
- `float` `target`

**Returns:** `void`

### public float getSimulationMultiplier()

**Returns:** `float`

### public float getDefaultMultiplier()

**Returns:** `float`

### public float getMetabolicRateIncMultiplier()

**Returns:** `float`

### public float getMetabolicRateDecMultiplier()

**Returns:** `float`

### public float getBodyHeatMultiplier()

**Returns:** `float`

### public float getCoreHeatExpandMultiplier()

**Returns:** `float`

### public float getCoreHeatContractMultiplier()

**Returns:** `float`

### public float getSkinCelciusMultiplier()

**Returns:** `float`

### public float getTemperatureAir()

**Returns:** `float`

### public float getTemperatureAirAndWind()

**Returns:** `float`

### public float getDbg_totalHeatRaw()

**Returns:** `float`

### public float getDbg_totalHeat()

**Returns:** `float`

### public float getCoreCelcius()

**Returns:** `float`

### public float getDbg_primTotal()

**Returns:** `float`

### public float getDbg_secTotal()

**Returns:** `float`

### public float getThermalDamage()

**Returns:** `float`

### public void update()

**Returns:** `void`

### public float getEnergy()

**Returns:** `float`

### public float getBodyFluids()

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\BodyDamage\Thermoregulator.html`*
