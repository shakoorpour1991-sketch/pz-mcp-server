---
title: zombie.core.raknet.VoiceManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.raknet
---

# zombie.core.raknet.VoiceManager

`public class VoiceManager extends Object`

**Kind:** class · **Package:** zombie.core.raknet

## Inheritance
- java.lang.Object
- zombie.core.raknet.VoiceManager

## Fields

### public static final int modePPT

### public static final int modeVAD

### public static final int modeMute

### public static final int VADModeQuality

### public static final int VADModeLowBitrate

### public static final int VADModeAggressive

### public static final int VADModeVeryAggressive

### public static final int AGCModeAdaptiveAnalog

### public static final int AGCModeAdaptiveDigital

### public static final int AGCModeFixedDigital

### public static boolean voipDisabled

### public static VoiceManager instance

## Constructors

### public VoiceManager()

## Methods

### public static VoiceManager getInstance()

**Returns:** `VoiceManager`

### public void DeinitRecSound()

**Returns:** `void`

### public void ResetRecSound()

**Returns:** `void`

### public void VoiceRestartClient(boolean isEnable)

**Parameters:**
- `boolean` `isEnable`

**Returns:** `void`

### public void VoiceConnectReq(long uuid)

**Parameters:**
- `long` `uuid`

**Returns:** `void`

### public void VoiceConnectClose(long uuid)

**Parameters:**
- `long` `uuid`

**Returns:** `void`

### public void setMode(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### public void setVADMode(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### public void setAGCMode(int mode)

**Parameters:**
- `int` `mode`

**Returns:** `void`

### public void setVolumePlayers(int volume)

**Parameters:**
- `int` `volume`

**Returns:** `void`

### public void setVolumeMic(int volume)

**Parameters:**
- `int` `volume`

**Returns:** `void`

### public static void playerSetMute(String username)

**Parameters:**
- `String` `username`

**Returns:** `void`

### public static boolean playerGetMute(String username)

**Parameters:**
- `String` `username`

**Returns:** `boolean`

### public void LuaRegister(se.krka.kahlua.vm.Platform platform,
se.krka.kahlua.vm.KahluaTable environment)

**Parameters:**
- `se.krka.kahlua.vm.Platform` `platform`
- `se.krka.kahlua.vm.KahluaTable` `environment`

**Returns:** `void`

### public void InitVMClient()

**Returns:** `void`

### public void loadConfig()

**Returns:** `void`

### public void UpdateRecordDevice()

**Returns:** `void`

### public void DeinitVMClient()

**Returns:** `void`

### public void setTestingMicrophone(boolean testing)

**Parameters:**
- `boolean` `testing`

**Returns:** `void`

### public void notifyThread()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void UpdateChannelsRoaming(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public int getMicVolumeIndicator()

**Returns:** `int`

### public boolean getMicVolumeError()

**Returns:** `boolean`

### public boolean getServerVOIPEnable()

**Returns:** `boolean`

### public void VMServerBan(short playerId,
boolean isBan)

**Parameters:**
- `short` `playerId`
- `boolean` `isBan`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\raknet\VoiceManager.html`*
