---
title: zombie.util.lambda.PZOptional
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.lambda
---

# zombie.util.lambda.PZOptional

`public class PZOptional extends Object`

**Kind:** class · **Package:** zombie.util.lambda

## Inheritance
- java.lang.Object
- zombie.util.lambda.PZOptional

## Constructors

### public PZOptional()

## Methods

### public static <T> void ifPresent(T x,
Consumer<T> ifPresentCall)

**Returns:** `void`

### public static <T,P1> void ifPresent(T x,
BiConsumer<T,P1> ifPresentCall,
P1 param1)

**Returns:** `void`

### public static <T> boolean ifPresent(T x,
Predicate<T> ifPresentPredicate)

**Returns:** `boolean`

### public static <T,R> R ifPresent(T x,
R defaultIfNull,
Function<T,R> ifPresent)

**Returns:** `R`

### public static <T,R,P1> R ifPresent(T x,
R defaultIfNull,
BiFunction<T,P1,R> ifPresent,
P1 param1)

**Returns:** `R`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\lambda\PZOptional.html`*
