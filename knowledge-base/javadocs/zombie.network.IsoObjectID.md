---
title: zombie.network.IsoObjectID
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.IsoObjectID

`public class IsoObjectID<T> extends Object implements Iterable<T>`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.IsoObjectID<T>

## Fields

### public static final short incorrect

## Constructors

### public IsoObjectID(Class<T> cls)

**Parameters:**
- `Class<T>` `cls`

## Methods

### public void put(short id,
T obj)

**Parameters:**
- `short` `id`
- `T` `obj`

**Returns:** `void`

### public void remove(short id)

**Parameters:**
- `short` `id`

**Returns:** `void`

### public void remove(T obj)

**Parameters:**
- `T` `obj`

**Returns:** `void`

### public T get(short id)

**Parameters:**
- `short` `id`

**Returns:** `T`

### public int size()

**Returns:** `int`

### public void clear()

**Returns:** `void`

### public short allocateID()

**Returns:** `short`

### public Iterator<T> iterator()

**Returns:** `Iterator<T>`

### public void getObjects(Collection<T> out)

**Parameters:**
- `Collection<T>` `out`

**Returns:** `void`

### public ArrayList<T> asList()

**Returns:** `ArrayList<T>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\IsoObjectID.html`*
