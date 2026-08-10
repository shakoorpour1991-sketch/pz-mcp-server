---
title: zombie.asset.AssetManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.asset
---

# zombie.asset.AssetManager

`public abstract class AssetManager extends Object implements AssetStateObserver`

**Kind:** class · **Package:** zombie.asset

## Inheritance
- java.lang.Object
- zombie.asset.AssetManager

## Constructors

### public AssetManager()

## Methods

### public void create(AssetType type,
AssetManagers owner)

**Parameters:**
- `AssetType` `type`
- `AssetManagers` `owner`

**Returns:** `void`

### public void destroy()

**Returns:** `void`

### public void removeUnreferenced()

**Returns:** `void`

### public Asset load(AssetPath path)

**Parameters:**
- `AssetPath` `path`

**Returns:** `Asset`

### public Asset load(AssetPath path,
AssetManager.AssetParams params)

**Parameters:**
- `AssetPath` `path`
- `AssetManager.AssetParams` `params`

**Returns:** `Asset`

### public void load(Asset asset)

**Parameters:**
- `Asset` `asset`

**Returns:** `void`

### public void unload(AssetPath path)

**Parameters:**
- `AssetPath` `path`

**Returns:** `void`

### public void unload(Asset asset)

**Parameters:**
- `Asset` `asset`

**Returns:** `void`

### public void unloadWithoutDeref(Asset asset)

**Parameters:**
- `Asset` `asset`

**Returns:** `void`

### public void onDataReloaded(Asset asset)

**Parameters:**
- `Asset` `asset`

**Returns:** `void`

### public void reload(AssetPath path)

**Parameters:**
- `AssetPath` `path`

**Returns:** `void`

### public void reload(Asset asset)

**Parameters:**
- `Asset` `asset`

**Returns:** `void`

### public void reload(Asset asset,
AssetManager.AssetParams params)

**Parameters:**
- `Asset` `asset`
- `AssetManager.AssetParams` `params`

**Returns:** `void`

### public void enableUnload(boolean enable)

**Parameters:**
- `boolean` `enable`

**Returns:** `void`

### public void onStateChanged(Asset.State oldState,
Asset.State newState,
Asset asset)

**Parameters:**
- `Asset.State` `oldState`
- `Asset.State` `newState`
- `Asset` `asset`

**Returns:** `void`

### public AssetManager.AssetTable getAssetTable()

**Returns:** `AssetManager.AssetTable`

### public AssetManagers getOwner()

**Returns:** `AssetManagers`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\asset\AssetManager.html`*
