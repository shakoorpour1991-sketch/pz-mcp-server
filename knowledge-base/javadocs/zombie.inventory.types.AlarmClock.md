---
title: zombie.inventory.types.AlarmClock
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.AlarmClock

`public final class AlarmClock extends InventoryItem implements IAlarmClock`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.AlarmClock

## Constructors

### public AlarmClock(String module,
String name,
String itemType,
String texName)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `String` `texName`

### public AlarmClock(String module,
String name,
String itemType,
Item item)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `Item` `item`

## Methods

### public IsoGridSquare getAlarmSquare()

**Returns:** `IsoGridSquare`

### public boolean shouldUpdateInWorld()

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public void updateSound(BaseSoundEmitter emitter)

**Parameters:**
- `BaseSoundEmitter` `emitter`

**Returns:** `void`

### public void stopSoundOnPlayer()

**Returns:** `void`

### public boolean isRinging()

**Returns:** `boolean`

### public boolean finishupdate()

**Returns:** `boolean`

### public boolean isDigital()

**Returns:** `boolean`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldversion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldversion`

**Returns:** `void`

### public String getCategory()

**Returns:** `String`

### public void setAlarmSet(boolean alarmSet)

**Parameters:**
- `boolean` `alarmSet`

**Returns:** `void`

### public boolean isAlarmSet()

**Returns:** `boolean`

### public void setHour(int hour)

**Parameters:**
- `int` `hour`

**Returns:** `void`

### public void setMinute(int min)

**Parameters:**
- `int` `min`

**Returns:** `void`

### public void setForceDontRing(int min)

**Parameters:**
- `int` `min`

**Returns:** `void`

### public int getHour()

**Returns:** `int`

### public int getMinute()

**Returns:** `int`

### public void syncAlarmClock()

**Returns:** `void`

### public void syncAlarmClock_Player(IsoPlayer player)

**Parameters:**
- `IsoPlayer` `player`

**Returns:** `void`

### public void syncAlarmClock_World()

**Returns:** `void`

### public void syncStopRinging()

**Returns:** `void`

### public void stopRinging()

**Returns:** `void`

### public String getAlarmSound()

**Returns:** `String`

### public void setAlarmSound(String alarmSound)

**Parameters:**
- `String` `alarmSound`

**Returns:** `void`

### public int getSoundRadius()

**Returns:** `int`

### public void setSoundRadius(int soundRadius)

**Parameters:**
- `int` `soundRadius`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\AlarmClock.html`*
