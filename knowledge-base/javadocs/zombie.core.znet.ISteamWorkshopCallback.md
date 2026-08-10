---
title: zombie.core.znet.ISteamWorkshopCallback
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.core.znet
---

# zombie.core.znet.ISteamWorkshopCallback

`public interface ISteamWorkshopCallback`

**Kind:** interface · **Package:** zombie.core.znet

## Methods

### void onItemCreated(long itemID,
boolean bUserNeedsToAcceptWorkshopLegalAgreement)

**Parameters:**
- `long` `itemID`
- `boolean` `bUserNeedsToAcceptWorkshopLegalAgreement`

**Returns:** `void`

### void onItemNotCreated(int result)

**Parameters:**
- `int` `result`

**Returns:** `void`

### void onItemUpdated(boolean bUserNeedsToAcceptWorkshopLegalAgreement)

**Parameters:**
- `boolean` `bUserNeedsToAcceptWorkshopLegalAgreement`

**Returns:** `void`

### void onItemNotUpdated(int result)

**Parameters:**
- `int` `result`

**Returns:** `void`

### void onItemSubscribed(long itemID)

**Parameters:**
- `long` `itemID`

**Returns:** `void`

### void onItemNotSubscribed(long itemID,
int result)

**Parameters:**
- `long` `itemID`
- `int` `result`

**Returns:** `void`

### void onItemDownloaded(long itemID)

**Parameters:**
- `long` `itemID`

**Returns:** `void`

### void onItemNotDownloaded(long itemID,
int result)

**Parameters:**
- `long` `itemID`
- `int` `result`

**Returns:** `void`

### void onItemQueryCompleted(long handle,
int numResults)

**Parameters:**
- `long` `handle`
- `int` `numResults`

**Returns:** `void`

### void onItemQueryNotCompleted(long handle,
int result)

**Parameters:**
- `long` `handle`
- `int` `result`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\znet\ISteamWorkshopCallback.html`*
