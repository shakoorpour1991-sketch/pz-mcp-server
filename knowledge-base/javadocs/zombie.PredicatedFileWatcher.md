---
title: zombie.PredicatedFileWatcher
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.PredicatedFileWatcher

`public final class PredicatedFileWatcher extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.PredicatedFileWatcher

## Description

PredicatedFileWatcher
An advanced form of the regular DebugFileWatcher

Includes the watched file path, a predicate callback, and a callback in case the predicate returns TRUE.

## Constructors

### public PredicatedFileWatcher(Predicate<String> predicate,
PredicatedFileWatcher.IPredicatedFileWatcherCallback callback)

**Parameters:**
- `Predicate<String>` `predicate`
- `PredicatedFileWatcher.IPredicatedFileWatcherCallback` `callback`

### public PredicatedFileWatcher(String path,
PredicatedFileWatcher.IPredicatedFileWatcherCallback callback)

**Parameters:**
- `String` `path`
- `PredicatedFileWatcher.IPredicatedFileWatcherCallback` `callback`

### public <T> PredicatedFileWatcher(String path,
Class<T> clazz,
PredicatedFileWatcher.IPredicatedDataPacketFileWatcherCallback<T> callback)

### public PredicatedFileWatcher(String path,
Predicate<String> predicate,
PredicatedFileWatcher.IPredicatedFileWatcherCallback callback)

**Parameters:**
- `String` `path`
- `Predicate<String>` `predicate`
- `PredicatedFileWatcher.IPredicatedFileWatcherCallback` `callback`

## Methods

### public String getPath()

**Returns:** `String`

### public void onModified(String entryKey)

**Parameters:**
- `String` `entryKey`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\PredicatedFileWatcher.html`*
