---
title: zombie.util.Lambda
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.Lambda

`public final class Lambda extends Object`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- zombie.util.Lambda

## Constructors

### public Lambda()

## Methods

### public static <E,T1> Predicate<E> predicate(T1 val1,
Predicates.Params1.ICallback<E,T1> predicate)

**Returns:** `Predicate<E>`

### public static <E,T1,T2> Predicate<E> predicate(T1 val1,
T2 val2,
Predicates.Params2.ICallback<E,T1,T2> predicate)

**Returns:** `Predicate<E>`

### public static <E,T1,T2,T3> Predicate<E> predicate(T1 val1,
T2 val2,
T3 val3,
Predicates.Params3.ICallback<E,T1,T2,T3> predicate)

**Returns:** `Predicate<E>`

### public static <E,T1> Comparator<E> comparator(T1 val1,
Comparators.Params1.ICallback<E,T1> comparator)

**Returns:** `Comparator<E>`

### public static <E,T1,T2> Comparator<E> comparator(T1 val1,
T2 val2,
Comparators.Params2.ICallback<E,T1,T2> comparator)

**Returns:** `Comparator<E>`

### public static <E,T1> Consumer<E> consumer(T1 val1,
Consumers.Params1.ICallback<E,T1> consumer)

**Returns:** `Consumer<E>`

### public static <E,T1,T2> Consumer<E> consumer(T1 val1,
T2 val2,
Consumers.Params2.ICallback<E,T1,T2> consumer)

**Returns:** `Consumer<E>`

### public static <E,T1,T2,T3> Consumer<E> consumer(T1 val1,
T2 val2,
T3 val3,
Consumers.Params3.ICallback<E,T1,T2,T3> consumer)

**Returns:** `Consumer<E>`

### public static <E,T1,T2,T3,T4> Consumer<E> consumer(T1 val1,
T2 val2,
T3 val3,
T4 val4,
Consumers.Params4.ICallback<E,T1,T2,T3,T4> consumer)

**Returns:** `Consumer<E>`

### public static <E,T1,T2,T3,T4,T5> Consumer<E> consumer(T1 val1,
T2 val2,
T3 val3,
T4 val4,
T5 val5,
Consumers.Params5.ICallback<E,T1,T2,T3,T4,T5> consumer)

**Returns:** `Consumer<E>`

### public static Invokers.Params0.Boolean.CallbackStackItem invokerBoolean(Invokers.Params0.Boolean.ICallback invoker)

**Parameters:**
- `Invokers.Params0.Boolean.ICallback` `invoker`

**Returns:** `Invokers.Params0.Boolean.CallbackStackItem`

### public static <T1> Runnable invoker(T1 val1,
Invokers.Params1.ICallback<T1> invoker)

**Returns:** `Runnable`

### public static <T1,T2> Runnable invoker(T1 val1,
T2 val2,
Invokers.Params2.ICallback<T1,T2> invoker)

**Returns:** `Runnable`

### public static <T1,T2,T3> Runnable invoker(T1 val1,
T2 val2,
T3 val3,
Invokers.Params3.ICallback<T1,T2,T3> invoker)

**Returns:** `Runnable`

### public static <T1,T2,T3,T4> Runnable invoker(T1 val1,
T2 val2,
T3 val3,
T4 val4,
Invokers.Params4.ICallback<T1,T2,T3,T4> invoker)

**Returns:** `Runnable`

### public static <T1,T2,T3,T4,T5> Runnable invoker(T1 val1,
T2 val2,
T3 val3,
T4 val4,
T5 val5,
Invokers.Params5.ICallback<T1,T2,T3,T4,T5> invoker)

**Returns:** `Runnable`

### public static <T1> void capture(T1 val1,
Stacks.Params1.ICallback<T1> captureConsumer)

**Returns:** `void`

### public static <T1,T2> void capture(T1 val1,
T2 val2,
Stacks.Params2.ICallback<T1,T2> captureConsumer)

**Returns:** `void`

### public static <T1,T2,T3> void capture(T1 val1,
T2 val2,
T3 val3,
Stacks.Params3.ICallback<T1,T2,T3> captureConsumer)

**Returns:** `void`

### public static <T1,T2,T3,T4> void capture(T1 val1,
T2 val2,
T3 val3,
T4 val4,
Stacks.Params4.ICallback<T1,T2,T3,T4> captureConsumer)

**Returns:** `void`

### public static <T1,T2,T3,T4,T5> void capture(T1 val1,
T2 val2,
T3 val3,
T4 val4,
T5 val5,
Stacks.Params5.ICallback<T1,T2,T3,T4,T5> captureConsumer)

**Returns:** `void`

### public static <T1,T2,T3,T4,T5,T6> void capture(T1 val1,
T2 val2,
T3 val3,
T4 val4,
T5 val5,
T6 val6,
Stacks.Params6.ICallback<T1,T2,T3,T4,T5,T6> captureConsumer)

**Returns:** `void`

### public static <T1,T2,T3,T4,T5,T6,T7> void capture(T1 val1,
T2 val2,
T3 val3,
T4 val4,
T5 val5,
T6 val6,
T7 val7,
Stacks.Params7.ICallback<T1,T2,T3,T4,T5,T6,T7> captureConsumer)

**Returns:** `void`

### public static <E,T1> void forEach(Consumer<Consumer<E>> forEachFunction,
T1 captureVal1,
Consumers.Params1.ICallback<E,T1> lambdaFunc)

**Returns:** `void`

### public static <E,T1,T2> void forEach(Consumer<Consumer<E>> forEachFunction,
T1 captureVal1,
T2 captureVal2,
Consumers.Params2.ICallback<E,T1,T2> lambdaFunc)

**Returns:** `void`

### public static <E,T1> void forEachFrom(BiConsumer<List<E>, Consumer<E>> forEachFunction,
List<E> from,
T1 captureVal1,
Consumers.Params1.ICallback<E,T1> lambdaFunc)

**Returns:** `void`

### public static <E,T1,T2> void forEachFrom(BiConsumer<List<E>, Consumer<E>> forEachFunction,
List<E> from,
T1 captureVal1,
T2 captureVal2,
Consumers.Params2.ICallback<E,T1,T2> lambdaFunc)

**Returns:** `void`

### public static <E,F,T1> void forEachFrom(BiConsumer<F, Consumer<E>> forEachFunction,
F from,
T1 captureVal1,
Consumers.Params1.ICallback<E,T1> lambdaFunc)

**Returns:** `void`

### public static <E,F,T1,T2> void forEachFrom(BiConsumer<F, Consumer<E>> forEachFunction,
F from,
T1 captureVal1,
T2 captureVal2,
Consumers.Params2.ICallback<E,T1,T2> lambdaFunc)

**Returns:** `void`

### public static <E,F,T1,T2,T3> void forEachFrom(BiConsumer<F, Consumer<E>> forEachFunction,
F from,
T1 captureVal1,
T2 captureVal2,
T3 captureVal3,
Consumers.Params3.ICallback<E,T1,T2,T3> lambdaFunc)

**Returns:** `void`

### public static <E,F,T1,T2,T3,T4> void forEachFrom(BiConsumer<F, Consumer<E>> forEachFunction,
F from,
T1 captureVal1,
T2 captureVal2,
T3 captureVal3,
T4 captureVal4,
Consumers.Params4.ICallback<E,T1,T2,T3,T4> lambdaFunc)

**Returns:** `void`

### public static <E,T1,R> R find(Function<Predicate<E>, R> findFunction,
T1 captureVal1,
Predicates.Params1.ICallback<E,T1> lambdaFunc)

**Returns:** `R`

### public static <E,T1> int indexOf(IntSupplierFunction<Predicate<E>> findFunction,
T1 captureVal1,
Predicates.Params1.ICallback<E,T1> lambdaFunc)

**Returns:** `int`

### public static <E,T1> boolean contains(Predicate<Predicate<E>> findFunction,
T1 captureVal1,
Predicates.Params1.ICallback<E,T1> lambdaFunc)

**Returns:** `boolean`

### public static <E, F extends Iterable<E>, T1>
boolean containsFrom(BiPredicate<F, Predicate<E>> findFunction,
F from,
T1 captureVal1,
Predicates.Params1.ICallback<E,T1> lambdaFunc)

**Returns:** `boolean`

### public static <T1> void invoke(Consumer<Runnable> runFunction,
T1 captureVal1,
Invokers.Params1.ICallback<T1> lambdaFunc)

**Returns:** `void`

### public static <T1,T2> void invoke(Consumer<Runnable> runFunction,
T1 captureVal1,
T2 captureVal2,
Invokers.Params2.ICallback<T1,T2> lambdaFunc)

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\Lambda.html`*
