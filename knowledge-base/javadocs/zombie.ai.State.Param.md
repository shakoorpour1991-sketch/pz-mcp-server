---
title: zombie.ai.State.Param
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai
---

# zombie.ai.State.Param

`public static class State.Param<T> extends Object`

**Kind:** class · **Package:** zombie.ai

## Inheritance
- java.lang.Object
- zombie.ai.State.Param<T>

## Methods

### public static State.Param<Integer> ofInt(String name,
int defaultValue)

**Parameters:**
- `String` `name`
- `int` `defaultValue`

**Returns:** `State.Param<Integer>`

### public static State.Param<Long> ofLong(String name,
long defaultValue)

**Parameters:**
- `String` `name`
- `long` `defaultValue`

**Returns:** `State.Param<Long>`

### public static State.Param<Float> ofFloat(String name,
float defaultValue)

**Parameters:**
- `String` `name`
- `float` `defaultValue`

**Returns:** `State.Param<Float>`

### public static State.Param<String> ofString(String name,
@Nullable String defaultValue)

**Parameters:**
- `String` `name`
- `@Nullable String` `defaultValue`

**Returns:** `State.Param<String>`

### public static State.Param<Boolean> ofBool(String name,
boolean defaultValue)

**Parameters:**
- `String` `name`
- `boolean` `defaultValue`

**Returns:** `State.Param<Boolean>`

### public static <R> State.Param<R> of(String name,
Class<R> clazz)

**Returns:** `State.Param<R>`

### public static <R> State.Param<R> of(String name,
Class<R> clazz,
R defaultValue)

**Returns:** `State.Param<R>`

### public static <R> State.Param<R> ofSupplier(String name,
Class<R> clazz,
Supplier<R> defaultSupplier)

**Returns:** `State.Param<R>`

### public String getName()

**Returns:** `String`

### public T get(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `T`

### public T get(IsoGameCharacter owner,
Supplier<T> defaultSupplier)

**Parameters:**
- `IsoGameCharacter` `owner`
- `Supplier<T>` `defaultSupplier`

**Returns:** `T`

### public void set(IsoGameCharacter owner,
T newT)

**Parameters:**
- `IsoGameCharacter` `owner`
- `T` `newT`

**Returns:** `void`

### public T remove(IsoGameCharacter owner)

**Parameters:**
- `IsoGameCharacter` `owner`

**Returns:** `T`

### public Class<?> getStateClass()

**Returns:** `Class<?>`

### public T fromDelegate(Map<Object,Object> delegate)

**Parameters:**
- `Map<Object,Object>` `delegate`

**Returns:** `T`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\State.Param.html`*
