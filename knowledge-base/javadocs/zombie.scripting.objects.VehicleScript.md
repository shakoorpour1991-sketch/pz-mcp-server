---
title: zombie.scripting.objects.VehicleScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.VehicleScript

`public final class VehicleScript extends BaseScriptObject implements IModelAttachmentOwner`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.objects.VehicleScript

## Fields

### public final ArrayList<ModelAttachment> attachments

### public float maxSpeed

### public float maxSpeedReverse

### public boolean isSmallVehicle

### public ImmutableColor leftSirenCol

### public ImmutableColor rightSirenCol

### public int gearRatioCount

### public final float[] gearRatio

### public boolean textureMaskEnable

### public static final int PHYSICS_SHAPE_BOX

### public static final int PHYSICS_SHAPE_SPHERE

### public static final int PHYSICS_SHAPE_MESH

## Constructors

### public VehicleScript()

## Methods

### public void InitLoadPP(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void Load(String name,
String totalFile)
throws Exception

**Parameters:**
- `String` `name`
- `String` `totalFile`

**Returns:** `void`

### public String getFileName()

**Returns:** `String`

### public void Loaded()

**Returns:** `void`

### public void toBullet()

**Returns:** `void`

### public void copyAreasFrom(VehicleScript other,
String spec)

**Parameters:**
- `VehicleScript` `other`
- `String` `spec`

**Returns:** `void`

### public void copyPartsFrom(VehicleScript other,
String spec)

**Parameters:**
- `VehicleScript` `other`
- `String` `spec`

**Returns:** `void`

### public void copyPhysicsFrom(VehicleScript other,
String spec)

**Parameters:**
- `VehicleScript` `other`
- `String` `spec`

**Returns:** `void`

### public void copyPassengersFrom(VehicleScript other,
String spec)

**Parameters:**
- `VehicleScript` `other`
- `String` `spec`

**Returns:** `void`

### public void copySoundFrom(VehicleScript other,
String spec)

**Parameters:**
- `VehicleScript` `other`
- `String` `spec`

**Returns:** `void`

### public void copyWheelsFrom(VehicleScript other,
String spec)

**Parameters:**
- `VehicleScript` `other`
- `String` `spec`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public String getFullName()

**Returns:** `String`

### public String getFullType()

**Returns:** `String`

### public VehicleScript.Model getModel()

**Returns:** `VehicleScript.Model`

### public org.joml.Vector3f getModelOffset()

**Returns:** `org.joml.Vector3f`

### public float getModelScale()

**Returns:** `float`

### public void setModelScale(float scale)

**Parameters:**
- `float` `scale`

**Returns:** `void`

### public int getModelCount()

**Returns:** `int`

### public VehicleScript.Model getModelByIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehicleScript.Model`

### public VehicleScript.Model getModelById(String id,
ArrayList<VehicleScript.Model> models)

**Parameters:**
- `String` `id`
- `ArrayList<VehicleScript.Model>` `models`

**Returns:** `VehicleScript.Model`

### public VehicleScript.Model getModelById(String id)

**Parameters:**
- `String` `id`

**Returns:** `VehicleScript.Model`

### public int getAttachmentCount()

**Returns:** `int`

### public ModelAttachment getAttachment(int index)

**Parameters:**
- `int` `index`

**Returns:** `ModelAttachment`

### public ModelAttachment getAttachmentById(String id)

**Parameters:**
- `String` `id`

**Returns:** `ModelAttachment`

### public ModelAttachment addAttachment(ModelAttachment attach)

**Parameters:**
- `ModelAttachment` `attach`

**Returns:** `ModelAttachment`

### public ModelAttachment removeAttachment(ModelAttachment attach)

**Parameters:**
- `ModelAttachment` `attach`

**Returns:** `ModelAttachment`

### public ModelAttachment addAttachmentAt(int index,
ModelAttachment attach)

**Parameters:**
- `int` `index`
- `ModelAttachment` `attach`

**Returns:** `ModelAttachment`

### public ModelAttachment removeAttachment(int index)

**Parameters:**
- `int` `index`

**Returns:** `ModelAttachment`

### public void beforeRenameAttachment(ModelAttachment attachment)

**Parameters:**
- `ModelAttachment` `attachment`

**Returns:** `void`

### public void afterRenameAttachment(ModelAttachment attachment)

**Parameters:**
- `ModelAttachment` `attachment`

**Returns:** `void`

### public VehicleScript.LightBar getLightbar()

**Returns:** `VehicleScript.LightBar`

### public VehicleScript.Sounds getSounds()

**Returns:** `VehicleScript.Sounds`

### public boolean getHasSiren()

**Returns:** `boolean`

### public org.joml.Vector3f getExtents()

**Returns:** `org.joml.Vector3f`

### public org.joml.Vector3f getPhysicsChassisShape()

**Returns:** `org.joml.Vector3f`

### public boolean hasPhysicsChassisShape()

**Returns:** `boolean`

### public boolean useChassisPhysicsCollision()

**Returns:** `boolean`

### public org.joml.Vector2f getShadowExtents()

**Returns:** `org.joml.Vector2f`

### public org.joml.Vector2f getShadowOffset()

**Returns:** `org.joml.Vector2f`

### public org.joml.Vector2f getExtentsOffset()

**Returns:** `org.joml.Vector2f`

### public float getMass()

**Returns:** `float`

### public org.joml.Vector3f getCenterOfMassOffset()

**Returns:** `org.joml.Vector3f`

### public float getEngineForce()

**Returns:** `float`

### public float getEngineIdleSpeed()

**Returns:** `float`

### public int getEngineQuality()

**Returns:** `int`

### public int getEngineLoudness()

**Returns:** `int`

### public float getRollInfluence()

**Returns:** `float`

### public float getSteeringIncrement()

**Returns:** `float`

### public float getSteeringClamp(float speed)

**Parameters:**
- `float` `speed`

**Returns:** `float`

### public float getSuspensionStiffness()

**Returns:** `float`

### public float getSuspensionDamping()

**Returns:** `float`

### public float getSuspensionCompression()

**Returns:** `float`

### public float getSuspensionRestLength()

**Returns:** `float`

### public float getSuspensionTravel()

**Returns:** `float`

### public float getWheelFriction()

**Returns:** `float`

### public int getWheelCount()

**Returns:** `int`

### public int getCrawlThroughWheel()

**Returns:** `int`

### public VehicleScript.Wheel getWheel(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehicleScript.Wheel`

### public VehicleScript.Wheel getCrawlThroughWheel(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehicleScript.Wheel`

### public VehicleScript.Wheel getWheelById(String id)

**Parameters:**
- `String` `id`

**Returns:** `VehicleScript.Wheel`

### public int getIndexOfWheelById(String id)

**Parameters:**
- `String` `id`

**Returns:** `int`

### public int getPassengerCount()

**Returns:** `int`

### public VehicleScript.Passenger getPassenger(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehicleScript.Passenger`

### public VehicleScript.Passenger getPassengerById(String id)

**Parameters:**
- `String` `id`

**Returns:** `VehicleScript.Passenger`

### public int getPassengerIndex(String id)

**Parameters:**
- `String` `id`

**Returns:** `int`

### public int getPhysicsShapeCount()

**Returns:** `int`

### public VehicleScript.PhysicsShape getPhysicsShape(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehicleScript.PhysicsShape`

### public VehicleScript.PhysicsShape addPhysicsShape(String type)

**Parameters:**
- `String` `type`

**Returns:** `VehicleScript.PhysicsShape`

### public VehicleScript.PhysicsShape removePhysicsShape(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehicleScript.PhysicsShape`

### public int getFrontEndHealth()

**Returns:** `int`

### public int getRearEndHealth()

**Returns:** `int`

### public int getStorageCapacity()

**Returns:** `int`

### public VehicleScript.Skin getTextures()

**Returns:** `VehicleScript.Skin`

### public int getSkinCount()

**Returns:** `int`

### public VehicleScript.Skin getSkin(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehicleScript.Skin`

### public int getAreaCount()

**Returns:** `int`

### public VehicleScript.Area getArea(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehicleScript.Area`

### public VehicleScript.Area getAreaById(String id)

**Parameters:**
- `String` `id`

**Returns:** `VehicleScript.Area`

### public int getIndexOfAreaById(String id)

**Parameters:**
- `String` `id`

**Returns:** `int`

### public int getPartCount()

**Returns:** `int`

### public VehicleScript.Part getPart(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehicleScript.Part`

### public VehicleScript.Part getPartById(String id)

**Parameters:**
- `String` `id`

**Returns:** `VehicleScript.Part`

### public int getIndexOfPartById(String id)

**Parameters:**
- `String` `id`

**Returns:** `int`

### public boolean globMatch(String pattern,
String str)

**Parameters:**
- `String` `pattern`
- `String` `str`

**Returns:** `boolean`

### public int getGearRatioCount()

**Returns:** `int`

### public int getSeats()

**Returns:** `int`

### public void setSeats(int seats)

**Parameters:**
- `int` `seats`

**Returns:** `void`

### public int getMechanicType()

**Returns:** `int`

### public void setMechanicType(int mechanicType)

**Parameters:**
- `int` `mechanicType`

**Returns:** `void`

### public int getEngineRepairLevel()

**Returns:** `int`

### public int getHeadlightConfigLevel()

**Returns:** `int`

### public void setEngineRepairLevel(int engineRepairLevel)

**Parameters:**
- `int` `engineRepairLevel`

**Returns:** `void`

### public float getPlayerDamageProtection()

**Returns:** `float`

### public void setPlayerDamageProtection(float playerDamageProtection)

**Parameters:**
- `float` `playerDamageProtection`

**Returns:** `void`

### public float getForcedHue()

**Returns:** `float`

### public void setForcedHue(float forcedHue)

**Parameters:**
- `float` `forcedHue`

**Returns:** `void`

### public float getForcedSat()

**Returns:** `float`

### public void setForcedSat(float forcedSat)

**Parameters:**
- `float` `forcedSat`

**Returns:** `void`

### public float getForcedVal()

**Returns:** `float`

### public void setForcedVal(float forcedVal)

**Parameters:**
- `float` `forcedVal`

**Returns:** `void`

### public String getEngineRPMType()

**Returns:** `String`

### public void setEngineRPMType(String engineRpmType)

**Parameters:**
- `String` `engineRpmType`

**Returns:** `void`

### public float getOffroadEfficiency()

**Returns:** `float`

### public void setOffroadEfficiency(float offroadEfficiency)

**Parameters:**
- `float` `offroadEfficiency`

**Returns:** `void`

### public gnu.trove.list.array.TFloatArrayList getCrawlOffsets()

**Returns:** `gnu.trove.list.array.TFloatArrayList`

### public float getAnimalTrailerSize()

**Returns:** `float`

### public ArrayList<String> getZombieType()

**Returns:** `ArrayList<String>`

### public ArrayList<String> getSpecialKeyRing()

**Returns:** `ArrayList<String>`

### public String getRandomZombieType()

**Returns:** `String`

### public String getRandomSpecialKeyRing()

**Returns:** `String`

### public boolean hasSpecialKeyRing()

**Returns:** `boolean`

### public String getFirstZombieType()

**Returns:** `String`

### public boolean hasZombieType(String outfit)

**Parameters:**
- `String` `outfit`

**Returns:** `boolean`

### public boolean notKillCrops()

**Returns:** `boolean`

### public boolean hasLighter()

**Returns:** `boolean`

### public String getCarMechanicsOverlay()

**Returns:** `String`

### public void setCarMechanicsOverlay(String overlay)

**Parameters:**
- `String` `overlay`

**Returns:** `void`

### public String getCarModelName()

**Returns:** `String`

### public void setCarModelName(String overlay)

**Parameters:**
- `String` `overlay`

**Returns:** `void`

### public int getSpecialLootChance()

**Returns:** `int`

### public int getSpecialKeyRingChance()

**Returns:** `int`

### public boolean neverSpawnKey()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\VehicleScript.html`*
