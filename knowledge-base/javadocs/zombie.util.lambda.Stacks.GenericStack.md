---
title: zombie.util.lambda.Stacks.GenericStack
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.lambda
---

# zombie.util.lambda.Stacks.GenericStack

`public abstract static class Stacks.GenericStack extends PooledObject`

**Kind:** class · **Package:** zombie.util.lambda

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.util.lambda.Stacks.GenericStack

## Constructors

### public GenericStack()

## Methods

### public abstract void invoke()

**Returns:** `void`

### public void invokeAndRelease()

**Returns:** `void`

### public void onReleased()

**Returns:** `void`

### public <E,T1> Predicate<E> predicate(T1 val1,
Predicates.Params1.ICallback<E,T1> predicate)

**Returns:** `Predicate<E>`

### public <E,T1,T2> Predicate<E> predicate(T1 val1,
T2 val2,
Predicates.Params2.ICallback<E,T1,T2> predicate)

**Returns:** `Predicate<E>`

### public <E,T1,T2,T3> Predicate<E> predicate(T1 val1,
T2 val2,
T3 val3,
Predicates.Params3.ICallback<E,T1,T2,T3> predicate)

**Returns:** `Predicate<E>`

### public <E,T1> Comparator<E> comparator(T1 val1,
Comparators.Params1.ICallback<E,T1> comparator)

**Returns:** `Comparator<E>`

### public <E,T1,T2> Comparator<E> comparator(T1 val1,
T2 val2,
Comparators.Params2.ICallback<E,T1,T2> comparator)

**Returns:** `Comparator<E>`

### public <E,T1> Consumer<E> consumer(T1 val1,
Consumers.Params1.ICallback<E,T1> consumer)

**Returns:** `Consumer<E>`

### public <E,T1,T2> Consumer<E> consumer(T1 val1,
T2 val2,
Consumers.Params2.ICallback<E,T1,T2> consumer)

**Returns:** `Consumer<E>`

### public <E,T1,T2,T3> Consumer<E> consumer(T1 val1,
T2 val2,
T3 val3,
Consumers.Params3.ICallback<E,T1,T2,T3> consumer)

**Returns:** `Consumer<E>`

### public <E,T1,T2,T3,T4> Consumer<E> consumer(T1 val1,
T2 val2,
T3 val3,
T4 val4,
Consumers.Params4.ICallback<E,T1,T2,T3,T4> consumer)

**Returns:** `Consumer<E>`

### public <T1> Runnable invoker(T1 val1,
Invokers.Params1.ICallback<T1> invoker)

**Returns:** `Runnable`

### public <T1,T2> Runnable invoker(T1 val1,
T2 val2,
Invokers.Params2.ICallback<T1,T2> invoker)

**Returns:** `Runnable`

### public <T1,T2,T3> Runnable invoker(T1 val1,
T2 val2,
T3 val3,
Invokers.Params3.ICallback<T1,T2,T3> invoker)

**Returns:** `Runnable`

### public <T1,T2,T3,T4> Runnable invoker(T1 val1,
T2 val2,
T3 val3,
T4 val4,
Invokers.Params4.ICallback<T1,T2,T3,T4> invoker)

**Returns:** `Runnable`

### public <T1,T2,T3,T4,T5> Runnable invoker(T1 val1,
T2 val2,
T3 val3,
T4 val4,
T5 val5,
Invokers.Params5.ICallback<T1,T2,T3,T4,T5> invoker)

**Returns:** `Runnable`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\lambda\Stacks.GenericStack.html`*
