---
title: zombie.util.lambda.QuadConsumer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: interface
package: zombie.util.lambda
---

# zombie.util.lambda.QuadConsumer

`@FunctionalInterface public interface QuadConsumer<T,U,V,W>`

**Kind:** interface · **Package:** zombie.util.lambda

## Methods

### void accept(T var1,
U var2,
V var3,
W var4)

**Parameters:**
- `T` `var1`
- `U` `var2`
- `V` `var3`
- `W` `var4`

**Returns:** `void`

### default QuadConsumer<T,U,V,W> andThen(QuadConsumer<? super T, ? super U, ? super V, ? super W> after)

**Parameters:**
- `QuadConsumer<? super T, ? super U, ? super V, ? super W>` `after`

**Returns:** `QuadConsumer<T,U,V,W>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\lambda\QuadConsumer.html`*
