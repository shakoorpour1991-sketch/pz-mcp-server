---
title: zombie.network.PlayerDownloadServer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.PlayerDownloadServer

`public final class PlayerDownloadServer extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.PlayerDownloadServer

## Fields

### public PlayerDownloadServer.WorkerThread workerThread

### public final List<ClientChunkRequest> ccrWaiting

## Constructors

### public PlayerDownloadServer(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

## Methods

### public void destroy()

**Returns:** `void`

### public ClientChunkRequest getClientChunkRequest(boolean isLargeArea)

**Parameters:**
- `boolean` `isLargeArea`

**Returns:** `ClientChunkRequest`

### public final int getWaitingRequests()

**Returns:** `int`

### public void update()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\PlayerDownloadServer.html`*
