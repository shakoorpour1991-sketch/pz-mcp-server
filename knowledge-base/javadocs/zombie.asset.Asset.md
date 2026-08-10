---
title: zombie.asset.Asset
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.asset
---

# zombie.asset.Asset

`public abstract class Asset extends Object`

**Kind:** class · **Package:** zombie.asset

## Inheritance
- java.lang.Object
- zombie.asset.Asset

## Methods

### public abstract AssetType getType()

**Returns:** `AssetType`

### public Asset.State getState()

**Returns:** `Asset.State`

### public boolean isEmpty()

**Returns:** `boolean`

### public boolean isReady()

**Returns:** `boolean`

### public boolean isFailure()

**Returns:** `boolean`

### public void onCreated(Asset.State state)

**Parameters:**
- `Asset.State` `state`

**Returns:** `void`

### public int getRefCount()

**Returns:** `int`

### public Asset.ObserverCallback getObserverCb()

**Returns:** `Asset.ObserverCallback`

### public AssetPath getPath()

**Returns:** `AssetPath`

### public AssetManager getAssetManager()

**Returns:** `AssetManager`

### public void addDependency(Asset dependentAsset)

**Parameters:**
- `Asset` `dependentAsset`

**Returns:** `void`

### public void removeDependency(Asset dependentAsset)

**Parameters:**
- `Asset` `dependentAsset`

**Returns:** `void`

### public void setAssetParams(AssetManager.AssetParams params)

**Parameters:**
- `AssetManager.AssetParams` `params`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\asset\Asset.html`*
