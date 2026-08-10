---
title: zombie.core.znet.SteamWorkshop
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.znet
---

# zombie.core.znet.SteamWorkshop

`public class SteamWorkshop extends Object implements ISteamWorkshopCallback`

**Kind:** class · **Package:** zombie.core.znet

## Inheritance
- java.lang.Object
- zombie.core.znet.SteamWorkshop

## Fields

### public static final SteamWorkshop instance

## Constructors

### public SteamWorkshop()

## Methods

### public static void init()

**Returns:** `void`

### public static void shutdown()

**Returns:** `void`

### public ArrayList<SteamWorkshopItem> loadStagedItems()

**Returns:** `ArrayList<SteamWorkshopItem>`

### public String getWorkshopFolder()

**Returns:** `String`

### public ArrayList<String> getStageFolders()

**Returns:** `ArrayList<String>`

### public boolean CreateWorkshopItem(SteamWorkshopItem item)

**Parameters:**
- `SteamWorkshopItem` `item`

**Returns:** `boolean`

### public boolean SubmitWorkshopItem(SteamWorkshopItem item)

**Parameters:**
- `SteamWorkshopItem` `item`

**Returns:** `boolean`

### public boolean GetItemUpdateProgress(long[] progress)

**Parameters:**
- `long[]` `progress`

**Returns:** `boolean`

### public String[] GetInstalledItemFolders()

**Returns:** `String[]`

### public long GetItemState(long itemID)

**Parameters:**
- `long` `itemID`

**Returns:** `long`

### public String GetItemInstallFolder(long itemID)

**Parameters:**
- `long` `itemID`

**Returns:** `String`

### public long GetItemInstallTimeStamp(long itemID)

**Parameters:**
- `long` `itemID`

**Returns:** `long`

### public boolean SubscribeItem(long itemID,
ISteamWorkshopCallback callback)

**Parameters:**
- `long` `itemID`
- `ISteamWorkshopCallback` `callback`

**Returns:** `boolean`

### public boolean DownloadItem(long itemID,
boolean bHighPriority,
ISteamWorkshopCallback callback)

**Parameters:**
- `long` `itemID`
- `boolean` `bHighPriority`
- `ISteamWorkshopCallback` `callback`

**Returns:** `boolean`

### public boolean GetItemDownloadInfo(long itemID,
long[] progress)

**Parameters:**
- `long` `itemID`
- `long[]` `progress`

**Returns:** `boolean`

### public long CreateQueryUGCDetailsRequest(long[] itemIDs,
ISteamWorkshopCallback callback)

**Parameters:**
- `long[]` `itemIDs`
- `ISteamWorkshopCallback` `callback`

**Returns:** `long`

### public SteamUGCDetails GetQueryUGCResult(long handle,
int index)

**Parameters:**
- `long` `handle`
- `int` `index`

**Returns:** `SteamUGCDetails`

### public long[] GetQueryUGCChildren(long handle,
int index)

**Parameters:**
- `long` `handle`
- `int` `index`

**Returns:** `long[]`

### public boolean ReleaseQueryUGCRequest(long handle)

**Parameters:**
- `long` `handle`

**Returns:** `boolean`

### public void RemoveCallback(ISteamWorkshopCallback callback)

**Parameters:**
- `ISteamWorkshopCallback` `callback`

**Returns:** `void`

### public String getIDFromItemInstallFolder(String dir)

**Parameters:**
- `String` `dir`

**Returns:** `String`

### public void onItemCreated(long itemID,
boolean bUserNeedsToAcceptWorkshopLegalAgreement)

**Parameters:**
- `long` `itemID`
- `boolean` `bUserNeedsToAcceptWorkshopLegalAgreement`

**Returns:** `void`

### public void onItemNotCreated(int result)

**Parameters:**
- `int` `result`

**Returns:** `void`

### public void onItemUpdated(boolean bUserNeedsToAcceptWorkshopLegalAgreement)

**Parameters:**
- `boolean` `bUserNeedsToAcceptWorkshopLegalAgreement`

**Returns:** `void`

### public void onItemNotUpdated(int result)

**Parameters:**
- `int` `result`

**Returns:** `void`

### public void onItemSubscribed(long itemID)

**Parameters:**
- `long` `itemID`

**Returns:** `void`

### public void onItemNotSubscribed(long itemID,
int result)

**Parameters:**
- `long` `itemID`
- `int` `result`

**Returns:** `void`

### public void onItemDownloaded(long itemID)

**Parameters:**
- `long` `itemID`

**Returns:** `void`

### public void onItemNotDownloaded(long itemID,
int result)

**Parameters:**
- `long` `itemID`
- `int` `result`

**Returns:** `void`

### public void onItemQueryCompleted(long handle,
int numResults)

**Parameters:**
- `long` `handle`
- `int` `numResults`

**Returns:** `void`

### public void onItemQueryNotCompleted(long handle,
int result)

**Parameters:**
- `long` `handle`
- `int` `result`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\znet\SteamWorkshop.html`*
