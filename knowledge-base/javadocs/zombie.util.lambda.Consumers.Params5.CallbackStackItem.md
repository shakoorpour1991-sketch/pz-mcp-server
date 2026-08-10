---
title: zombie.util.lambda.Consumers.Params5.CallbackStackItem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.lambda
---

# zombie.util.lambda.Consumers.Params5.CallbackStackItem

`public static final class Consumers.Params5.CallbackStackItem<E,T1,T2,T3,T4,T5> extends PooledObject implements Consumer<E>`

**Kind:** class · **Package:** zombie.util.lambda

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.util.lambda.Consumers.Params5.CallbackStackItem<E,T1,T2,T3,T4,T5>

## Constructors

### public CallbackStackItem()

## Methods

### public void accept(E e)

**Parameters:**
- `E` `e`

**Returns:** `void`

### public static <E,T1,T2,T3,T4,T5>
Consumers.Params5.CallbackStackItem<E,T1,T2,T3,T4,T5> alloc(T1 val1,
T2 val2,
T3 val3,
T4 val4,
T5 val5,
Consumers.Params5.ICallback<E,T1,T2,T3,T4,T5> consumer)

**Returns:** `Consumers.Params5.CallbackStackItem<E,T1,T2,T3,T4,T5>`

### public void onReleased()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\lambda\Consumers.Params5.CallbackStackItem.html`*
