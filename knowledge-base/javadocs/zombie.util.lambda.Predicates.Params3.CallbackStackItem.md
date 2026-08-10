---
title: zombie.util.lambda.Predicates.Params3.CallbackStackItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.lambda
---

# zombie.util.lambda.Predicates.Params3.CallbackStackItem

`public static final class Predicates.Params3.CallbackStackItem<E,T1,T2,T3> extends PooledObject implements Predicate<E>`

**Kind:** class · **Package:** zombie.util.lambda

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.util.lambda.Predicates.Params3.CallbackStackItem<E,T1,T2,T3>

## Constructors

### public CallbackStackItem()

## Methods

### public boolean test(E e)

**Parameters:**
- `E` `e`

**Returns:** `boolean`

### public static <E,T1,T2,T3>
Predicates.Params3.CallbackStackItem<E,T1,T2,T3> alloc(T1 val1,
T2 val2,
T3 val3,
Predicates.Params3.ICallback<E,T1,T2,T3> predicate)

**Returns:** `Predicates.Params3.CallbackStackItem<E,T1,T2,T3>`

### public void onReleased()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\lambda\Predicates.Params3.CallbackStackItem.html`*
