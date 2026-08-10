---
title: zombie.util.lambda.Consumers.Params2.CallbackStackItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.lambda
---

# zombie.util.lambda.Consumers.Params2.CallbackStackItem

`public static final class Consumers.Params2.CallbackStackItem<E,T1,T2> extends PooledObject implements Consumer<E>`

**Kind:** class · **Package:** zombie.util.lambda

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.util.lambda.Consumers.Params2.CallbackStackItem<E,T1,T2>

## Constructors

### public CallbackStackItem()

## Methods

### public void accept(E e)

**Parameters:**
- `E` `e`

**Returns:** `void`

### public static <E,T1,T2>
Consumers.Params2.CallbackStackItem<E,T1,T2> alloc(T1 val1,
T2 val2,
Consumers.Params2.ICallback<E,T1,T2> consumer)

**Returns:** `Consumers.Params2.CallbackStackItem<E,T1,T2>`

### public void onReleased()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\lambda\Consumers.Params2.CallbackStackItem.html`*
