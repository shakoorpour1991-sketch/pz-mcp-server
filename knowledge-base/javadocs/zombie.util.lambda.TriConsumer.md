---
title: zombie.util.lambda.TriConsumer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.util.lambda
---

# zombie.util.lambda.TriConsumer

`@FunctionalInterface public interface TriConsumer<T,U,V>`

**Kind:** interface · **Package:** zombie.util.lambda

## Methods

### void accept(T var1,
U var2,
V var3)

**Parameters:**
- `T` `var1`
- `U` `var2`
- `V` `var3`

**Returns:** `void`

### default TriConsumer<T,U,V> andThen(TriConsumer<? super T, ? super U, ? super V> after)

**Parameters:**
- `TriConsumer<? super T, ? super U, ? super V>` `after`

**Returns:** `TriConsumer<T,U,V>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\lambda\TriConsumer.html`*
