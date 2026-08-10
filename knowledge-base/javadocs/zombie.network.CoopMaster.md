---
title: zombie.network.CoopMaster
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.CoopMaster

`public class CoopMaster extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.CoopMaster

## Fields

### public static final CoopMaster instance

## Methods

### public int getServerPort()

**Returns:** `int`

### public void launchServer(String serverName,
String username,
int memory)
throws IOException

**Parameters:**
- `String` `serverName`
- `String` `username`
- `int` `memory`

**Returns:** `void`

### public void softreset(String serverName,
String username,
int memory)
throws IOException

**Parameters:**
- `String` `serverName`
- `String` `username`
- `int` `memory`

**Returns:** `void`

### public void abortServer()

**Returns:** `void`

### public boolean isRunning()

**Returns:** `boolean`

### public CoopMaster.TerminationReason terminationReason()

**Returns:** `CoopMaster.TerminationReason`

### public void sendMessage(String tag,
String cookie,
String payload)

**Parameters:**
- `String` `tag`
- `String` `cookie`
- `String` `payload`

**Returns:** `void`

### public void sendMessage(String tag,
String payload)

**Parameters:**
- `String` `tag`
- `String` `payload`

**Returns:** `void`

### public void invokeServer(String tag,
String payload,
ICoopServerMessageListener responseHandler)

**Parameters:**
- `String` `tag`
- `String` `payload`
- `ICoopServerMessageListener` `responseHandler`

**Returns:** `void`

### public String getMessage()

**Returns:** `String`

### public void update()

**Returns:** `void`

### public void register(se.krka.kahlua.vm.Platform platform,
se.krka.kahlua.vm.KahluaTable environment)

**Parameters:**
- `se.krka.kahlua.vm.Platform` `platform`
- `se.krka.kahlua.vm.KahluaTable` `environment`

**Returns:** `void`

### public void addListener(ICoopServerMessageListener listener,
CoopMaster.ListenerOptions options)

**Parameters:**
- `ICoopServerMessageListener` `listener`
- `CoopMaster.ListenerOptions` `options`

**Returns:** `void`

### public void addListener(ICoopServerMessageListener listener)

**Parameters:**
- `ICoopServerMessageListener` `listener`

**Returns:** `void`

### public void removeListener(ICoopServerMessageListener listener)

**Parameters:**
- `ICoopServerMessageListener` `listener`

**Returns:** `void`

### public String getServerName()

**Returns:** `String`

### public String getServerSaveFolder(String serverName)

**Parameters:**
- `String` `serverName`

**Returns:** `String`

### public String getPlayerSaveFolder(String serverName)

**Parameters:**
- `String` `serverName`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\CoopMaster.html`*
