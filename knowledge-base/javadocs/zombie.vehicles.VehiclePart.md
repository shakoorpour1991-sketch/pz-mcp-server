---
title: zombie.vehicles.VehiclePart
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.vehicles
---

# zombie.vehicles.VehiclePart

`public final class VehiclePart extends GameEntity implements ChatElementOwner, WaveSignalDevice`

**Kind:** class · **Package:** zombie.vehicles

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.vehicles.VehiclePart

## Constructors

### public VehiclePart(VehiclePartOwner vehicle)

**Parameters:**
- `VehiclePartOwner` `vehicle`

## Methods

### public VehiclePartOwner getOwner()

**Returns:** `VehiclePartOwner`

### public BaseVehicle getVehicle()

**Returns:** `BaseVehicle`

### public void setScriptPart(VehicleScript.Part scriptPart)

**Parameters:**
- `VehicleScript.Part` `scriptPart`

**Returns:** `void`

### public VehicleScript.Part getScriptPart()

**Returns:** `VehicleScript.Part`

### public ItemContainer getItemContainer()

**Returns:** `ItemContainer`

### public void setItemContainer(ItemContainer container)

**Parameters:**
- `ItemContainer` `container`

**Returns:** `void`

### public boolean hasModData()

**Returns:** `boolean`

### public se.krka.kahlua.vm.KahluaTable getModData()

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public float getLastUpdated()

**Returns:** `float`

### public void setLastUpdated(float hours)

**Parameters:**
- `float` `hours`

**Returns:** `void`

### public String getId()

**Returns:** `String`

### public int getIndex()

**Returns:** `int`

### public String getArea()

**Returns:** `String`

### public ArrayList<String> getItemType()

**Returns:** `ArrayList<String>`

### public se.krka.kahlua.vm.KahluaTable getTable(String id)

**Parameters:**
- `String` `id`

**Returns:** `se.krka.kahlua.vm.KahluaTable`

### public <T extends InventoryItem> T getInventoryItem()

**Returns:** `T`

### public void setInventoryItem(InventoryItem item,
int mechanicSkill)

**Parameters:**
- `InventoryItem` `item`
- `int` `mechanicSkill`

**Returns:** `void`

### public void setInventoryItem(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public boolean isInventoryItemUninstalled()

**Returns:** `boolean`

### public boolean isSetAllModelsVisible()

**Returns:** `boolean`

### public void setAllModelsVisible(boolean visible)

**Parameters:**
- `boolean` `visible`

**Returns:** `void`

### public void doInventoryItemStats(InventoryItem newItem,
int mechanicSkill)

**Parameters:**
- `InventoryItem` `newItem`
- `int` `mechanicSkill`

**Returns:** `void`

### public void setRandomCondition(InventoryItem item)

**Parameters:**
- `InventoryItem` `item`

**Returns:** `void`

### public void setGeneralCondition(InventoryItem item,
float baseQuality,
float chanceToSpawnDamaged)

**Parameters:**
- `InventoryItem` `item`
- `float` `baseQuality`
- `float` `chanceToSpawnDamaged`

**Returns:** `void`

### public static float getNumberByCondition(float number,
float cond,
float min)

**Parameters:**
- `float` `number`
- `float` `cond`
- `float` `min`

**Returns:** `float`

### public boolean isContainer()

**Returns:** `boolean`

### public int getContainerCapacity()

**Returns:** `int`

### public int getContainerCapacity(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public void setContainerCapacity(int cap)

**Parameters:**
- `int` `cap`

**Returns:** `void`

### public String getContainerContentType()

**Returns:** `String`

### public float getContainerContentAmount()

**Returns:** `float`

### public void setContainerContentAmount(float amount)

**Parameters:**
- `float` `amount`

**Returns:** `void`

### public void setContainerContentAmount(float amount,
boolean force,
boolean noUpdateMass)

**Parameters:**
- `float` `amount`
- `boolean` `force`
- `boolean` `noUpdateMass`

**Returns:** `void`

### public int getContainerSeatNumber()

**Returns:** `int`

### public String getContainerCloseSound()

**Returns:** `String`

### public String getContainerOpenSound()

**Returns:** `String`

### public String getContainerPutSound()

**Returns:** `String`

### public String getContainerTakeSound()

**Returns:** `String`

### public boolean isSeat()

**Returns:** `boolean`

### public boolean isVehicleTrunk()

**Returns:** `boolean`

### public String getLuaFunction(String name)

**Parameters:**
- `String` `name`

**Returns:** `String`

### public void setModelVisible(String id,
boolean visible)

**Parameters:**
- `String` `id`
- `boolean` `visible`

**Returns:** `void`

### public VehiclePart getParent()

**Returns:** `VehiclePart`

### public void addChild(VehiclePart child)

**Parameters:**
- `VehiclePart` `child`

**Returns:** `void`

### public int getChildCount()

**Returns:** `int`

### public VehiclePart getChild(int index)

**Parameters:**
- `int` `index`

**Returns:** `VehiclePart`

### public VehicleDoor getDoor()

**Returns:** `VehicleDoor`

### public VehicleDoor getEnclosingDoor()

**Returns:** `VehicleDoor`

### public VehicleEngine getVehicleEngine()

**Returns:** `VehicleEngine`

### public VehicleWindow getWindow()

**Returns:** `VehicleWindow`

### public VehiclePart getChildWindow()

**Returns:** `VehiclePart`

### public VehicleWindow findWindow()

**Returns:** `VehicleWindow`

### public VehicleScript.Anim getAnimById(String id)

**Parameters:**
- `String` `id`

**Returns:** `VehicleScript.Anim`

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

### public int getWheelIndex()

**Returns:** `int`

### public void createSpotLight(float xOffset,
float yOffset,
float dist,
float intensity,
float dot,
int focusing)

**Parameters:**
- `float` `xOffset`
- `float` `yOffset`
- `float` `dist`
- `float` `intensity`
- `float` `dot`
- `int` `focusing`

**Returns:** `void`

### public void createSpotLightColor(float xOffset,
float yOffset,
float dist,
float intensity,
float dot,
int focusing,
float r,
float g,
float b)

**Parameters:**
- `float` `xOffset`
- `float` `yOffset`
- `float` `dist`
- `float` `intensity`
- `float` `dot`
- `int` `focusing`
- `float` `r`
- `float` `g`
- `float` `b`

**Returns:** `void`

### public VehicleLight getLight()

**Returns:** `VehicleLight`

### public float getLightDistance()

**Returns:** `float`

### public float getLightIntensity()

**Returns:** `float`

### public float getLightFocusing()

**Returns:** `float`

### public void setLightActive(boolean active)

**Parameters:**
- `boolean` `active`

**Returns:** `void`

### public DeviceData createSignalDevice()

**Returns:** `DeviceData`

### public boolean hasDevicePower()

**Returns:** `boolean`

### public DeviceData getDeviceData()

**Returns:** `DeviceData`

### public void setDeviceData(DeviceData data)

**Parameters:**
- `DeviceData` `data`

**Returns:** `void`

### public float getDelta()

**Returns:** `float`

### public void setDelta(float d)

**Parameters:**
- `float` `d`

**Returns:** `void`

### public float getX()

**Returns:** `float`

### public float getY()

**Returns:** `float`

### public float getZ()

**Returns:** `float`

### public IsoGridSquare getSquare()

**Returns:** `IsoGridSquare`

### public void AddDeviceText(String line,
float r,
float g,
float b,
String guid,
String codes,
int distance)

**Parameters:**
- `String` `line`
- `float` `r`
- `float` `g`
- `float` `b`
- `String` `guid`
- `String` `codes`
- `int` `distance`

**Returns:** `void`

### public boolean HasPlayerInRange()

**Returns:** `boolean`

### public void updateSignalDevice()

**Returns:** `void`

### public String getCategory()

**Returns:** `String`

### public void setCategory(String category)

**Parameters:**
- `String` `category`

**Returns:** `void`

### public int getCondition()

**Returns:** `int`

### public void setCondition(int condition)

**Parameters:**
- `int` `condition`

**Returns:** `void`

### public void damage(int amount)

**Parameters:**
- `int` `amount`

**Returns:** `void`

### public boolean isSpecificItem()

**Returns:** `boolean`

### public void setSpecificItem(boolean specificItem)

**Parameters:**
- `boolean` `specificItem`

**Returns:** `void`

### public float getWheelFriction()

**Returns:** `float`

### public void setWheelFriction(float wheelFriction)

**Parameters:**
- `float` `wheelFriction`

**Returns:** `void`

### public int getMechanicSkillInstaller()

**Returns:** `int`

### public void setMechanicSkillInstaller(int mechanicSkillInstaller)

**Parameters:**
- `int` `mechanicSkillInstaller`

**Returns:** `void`

### public float getSuspensionDamping()

**Returns:** `float`

### public void setSuspensionDamping(float suspensionDamping)

**Parameters:**
- `float` `suspensionDamping`

**Returns:** `void`

### public float getSuspensionCompression()

**Returns:** `float`

### public void setSuspensionCompression(float suspensionCompression)

**Parameters:**
- `float` `suspensionCompression`

**Returns:** `void`

### public float getEngineLoudness()

**Returns:** `float`

### public void setEngineLoudness(float engineLoudness)

**Parameters:**
- `float` `engineLoudness`

**Returns:** `void`

### public void repair()

**Returns:** `void`

### public ChatElement getChatElement()

**Returns:** `ChatElement`

### public GameEntityType getGameEntityType()

**Returns:** `GameEntityType`

### public boolean isEntityValid()

**Returns:** `boolean`

### public long getEntityNetID()

**Returns:** `long`

### public void setDurability(float durability)

**Parameters:**
- `float` `durability`

**Returns:** `void`

### public float getDurability()

**Returns:** `float`

### public String getMechanicArea()

**Returns:** `String`

### public void setFlag(short flag)

**Parameters:**
- `short` `flag`

**Returns:** `void`

### public boolean getFlag(short flag)

**Parameters:**
- `short` `flag`

**Returns:** `boolean`

### public void clearFlags()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\vehicles\VehiclePart.html`*
