---
title: zombie.radio.devices.DeviceData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.radio.devices
---

# zombie.radio.devices.DeviceData

`public final class DeviceData extends Object implements Cloneable, fmod.fmod.IFMODParameterUpdater`

**Kind:** class · **Package:** zombie.radio.devices

## Inheritance
- java.lang.Object
- zombie.radio.devices.DeviceData

## Description

Turbo
Stores shared data for devices (used in iso and item)

## Constructors

### public DeviceData()

### public DeviceData(WaveSignalDevice parent)

**Parameters:**
- `WaveSignalDevice` `parent`

## Methods

### public void generatePresets()

**Returns:** `void`

### public DeviceData getClone()

**Returns:** `DeviceData`

### public WaveSignalDevice getParent()

**Returns:** `WaveSignalDevice`

### public void setParent(WaveSignalDevice p)

**Parameters:**
- `WaveSignalDevice` `p`

**Returns:** `void`

### public DevicePresets getDevicePresets()

**Returns:** `DevicePresets`

### public void setDevicePresets(DevicePresets p)

**Parameters:**
- `DevicePresets` `p`

**Returns:** `void`

### public void cloneDevicePresets(DevicePresets p)
throws CloneNotSupportedException

**Parameters:**
- `DevicePresets` `p`

**Returns:** `void`

### public int getMinChannelRange()

**Returns:** `int`

### public void setMinChannelRange(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public int getMaxChannelRange()

**Returns:** `int`

### public void setMaxChannelRange(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public boolean getIsHighTier()

**Returns:** `boolean`

### public void setIsHighTier(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getIsBatteryPowered()

**Returns:** `boolean`

### public void setIsBatteryPowered(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getHasBattery()

**Returns:** `boolean`

### public void setHasBattery(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void addBattery(DrainableComboItem bat)

**Parameters:**
- `DrainableComboItem` `bat`

**Returns:** `void`

### public void getBattery(ItemContainer inventory)

**Parameters:**
- `ItemContainer` `inventory`

**Returns:** `void`

### public void transmitBatteryChange()

**Returns:** `void`

### public void transmitBatteryChangeServer()

**Returns:** `void`

### public void addHeadphones(InventoryItem headphones)

**Parameters:**
- `InventoryItem` `headphones`

**Returns:** `void`

### public InventoryItem getHeadphones(ItemContainer inventory)

**Parameters:**
- `ItemContainer` `inventory`

**Returns:** `InventoryItem`

### public int getMicRange()

**Returns:** `int`

### public void setMicRange(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public boolean getMicIsMuted()

**Returns:** `boolean`

### public void setMicIsMuted(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public int getHeadphoneType()

**Returns:** `int`

### public void setHeadphoneType(int i)

**Parameters:**
- `int` `i`

**Returns:** `void`

### public float getBaseVolumeRange()

**Returns:** `float`

### public void setBaseVolumeRange(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public float getDeviceVolume()

**Returns:** `float`

### public void setDeviceVolume(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public void setDeviceVolumeRaw(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public boolean getIsTelevision()

**Returns:** `boolean`

### public boolean isTelevision()

**Returns:** `boolean`

### public void setIsTelevision(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean canPlayerRemoteInteract(IsoGameCharacter character)

**Parameters:**
- `IsoGameCharacter` `character`

**Returns:** `boolean`

### public String getDeviceName()

**Returns:** `String`

### public void setDeviceName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public boolean getIsTwoWay()

**Returns:** `boolean`

### public void setIsTwoWay(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public int getTransmitRange()

**Returns:** `int`

### public void setTransmitRange(int range)

**Parameters:**
- `int` `range`

**Returns:** `void`

### public boolean getIsPortable()

**Returns:** `boolean`

### public void setIsPortable(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean getIsTurnedOn()

**Returns:** `boolean`

### public void setIsTurnedOn(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public void setTurnedOnRaw(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public boolean canBePoweredHere()

**Returns:** `boolean`

### public void setRandomChannel()

**Returns:** `void`

### public int getChannel()

**Returns:** `int`

### public void setChannel(int c)

**Parameters:**
- `int` `c`

**Returns:** `void`

### public void setChannel(int chan,
boolean setislistening)

**Parameters:**
- `int` `chan`
- `boolean` `setislistening`

**Returns:** `void`

### public void setChannelRaw(int chan)

**Parameters:**
- `int` `chan`

**Returns:** `void`

### public float getUseDelta()

**Returns:** `float`

### public void setUseDelta(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public float getPower()

**Returns:** `float`

### public void setPower(float p)

**Parameters:**
- `float` `p`

**Returns:** `void`

### public void setInitialPower()

**Returns:** `void`

### public void TriggerPlayerListening(boolean listening)

**Parameters:**
- `boolean` `listening`

**Returns:** `void`

### public void playSoundSend(String soundname,
boolean useDeviceVolume)

**Parameters:**
- `String` `soundname`
- `boolean` `useDeviceVolume`

**Returns:** `void`

### public void playSoundLocal(String soundname,
boolean useDeviceVolume)

**Parameters:**
- `String` `soundname`
- `boolean` `useDeviceVolume`

**Returns:** `void`

### public void playSound(String soundname,
float volume,
boolean transmit)

**Parameters:**
- `String` `soundname`
- `float` `volume`
- `boolean` `transmit`

**Returns:** `void`

### public void stopOrTriggerSoundByName(String soundName)

**Parameters:**
- `String` `soundName`

**Returns:** `void`

### public void cleanSoundsAndEmitter()

**Returns:** `void`

### public IsoObject getIsoObject()

**Returns:** `IsoObject`

### public BaseSoundEmitter getEmitter()

**Returns:** `BaseSoundEmitter`

### public void update(boolean isIso,
boolean playerInRange)

**Parameters:**
- `boolean` `isIso`
- `boolean` `playerInRange`

**Returns:** `void`

### public void updateSimple()

**Returns:** `void`

### public int getDeviceVolumeRange()

**Returns:** `int`

### public int getDeviceSoundVolumeRange()

**Returns:** `int`

### public void doReceiveSignal(int distance)

**Parameters:**
- `int` `distance`

**Returns:** `void`

### public void doReceiveMPSignal(float distance)

**Parameters:**
- `float` `distance`

**Returns:** `void`

### public boolean isReceivingSignal()

**Returns:** `boolean`

### public int getLastRecordedDistance()

**Returns:** `int`

### public boolean isIsoDevice()

**Returns:** `boolean`

### public boolean isInventoryDevice()

**Returns:** `boolean`

### public boolean isVehicleDevice()

**Returns:** `boolean`

### public void transmitPresets()

**Returns:** `void`

### public void receiveDeviceDataStatePacket(ByteBufferReader bb,
UdpConnection ignoreConnection)
throws IOException

**Parameters:**
- `ByteBufferReader` `bb`
- `UdpConnection` `ignoreConnection`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `net`

**Returns:** `void`

### public boolean hasMedia()

**Returns:** `boolean`

### public short getMediaIndex()

**Returns:** `short`

### public void setMediaIndex(short mediaIndex)

**Parameters:**
- `short` `mediaIndex`

**Returns:** `void`

### public byte getMediaType()

**Returns:** `byte`

### public void setMediaType(byte mediaType)

**Parameters:**
- `byte` `mediaType`

**Returns:** `void`

### public void addMediaItem(InventoryItem media)

**Parameters:**
- `InventoryItem` `media`

**Returns:** `void`

### public void removeMediaItem(ItemContainer inventory)

**Parameters:**
- `ItemContainer` `inventory`

**Returns:** `void`

### public boolean isPlayingMedia()

**Returns:** `boolean`

### public void StartPlayMedia()

**Returns:** `void`

### public void StopPlayMedia()

**Returns:** `void`

### public void updateMediaPlaying()

**Returns:** `void`

### public MediaData getMediaData()

**Returns:** `MediaData`

### public boolean isNoTransmit()

**Returns:** `boolean`

### public void setNoTransmit(boolean noTransmit)

**Parameters:**
- `boolean` `noTransmit`

**Returns:** `void`

### public boolean isEmergencyBroadcast()

**Returns:** `boolean`

### public FMODParameterList getFMODParameters()

**Returns:** `FMODParameterList`

### public void startEvent(long eventInstance,
GameSoundClip clip,
boolean remote,
BitSet parameterSet)

**Parameters:**
- `long` `eventInstance`
- `GameSoundClip` `clip`
- `boolean` `remote`
- `BitSet` `parameterSet`

**Returns:** `void`

### public void updateEvent(long eventInstance,
GameSoundClip clip)

**Parameters:**
- `long` `eventInstance`
- `GameSoundClip` `clip`

**Returns:** `void`

### public void stopEvent(long eventInstance,
GameSoundClip clip,
boolean remote,
BitSet parameterSet)

**Parameters:**
- `long` `eventInstance`
- `GameSoundClip` `clip`
- `boolean` `remote`
- `BitSet` `parameterSet`

**Returns:** `void`

### public void addEmergencyChannel()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\radio\devices\DeviceData.html`*
