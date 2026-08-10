---
title: zombie.scripting.objects.Registry
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.Registry

`public class Registry<T> extends Object implements Iterable<T>`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.Registry<T>

## Constructors

### public Registry(String name)

**Parameters:**
- `String` `name`

## Methods

### public ResourceLocation getLocation(T t)

**Parameters:**
- `T` `t`

**Returns:** `ResourceLocation`

### public T register(ResourceLocation id,
T t)

**Parameters:**
- `ResourceLocation` `id`
- `T` `t`

**Returns:** `T`

### public T get(ResourceLocation id)

**Parameters:**
- `ResourceLocation` `id`

**Returns:** `T`

### public boolean contains(ResourceLocation id)

**Parameters:**
- `ResourceLocation` `id`

**Returns:** `boolean`

### public List<T> values()

**Returns:** `List<T>`

### public Set<ResourceLocation> keys()

**Returns:** `Set<ResourceLocation>`

### public Iterator<T> iterator()

**Returns:** `Iterator<T>`

### public String toString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\Registry.html`*
