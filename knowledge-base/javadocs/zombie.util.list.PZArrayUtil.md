---
title: zombie.util.list.PZArrayUtil
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util.list
---

# zombie.util.list.PZArrayUtil

`public class PZArrayUtil extends Object`

**Kind:** class · **Package:** zombie.util.list

## Inheritance
- java.lang.Object
- zombie.util.list.PZArrayUtil

## Fields

### public static final int[] emptyIntArray

### public static final float[] emptyFloatArray

## Constructors

### public PZArrayUtil()

## Methods

### public static <E> E pickRandom(E[] collection,
RandInterface rnd)

**Returns:** `E`

### public static <E> E pickRandom(List<E> collection,
RandInterface rnd)

**Returns:** `E`

### public static <E> E pickRandom(Collection<E> collection,
RandInterface rnd)

**Returns:** `E`

### public static <E> E pickRandom(Iterable<E> collection,
RandInterface rnd)

**Returns:** `E`

### public static <E> E pickRandom(E[] collection)

**Returns:** `E`

### public static <E> E pickRandom(List<E> collection)

**Returns:** `E`

### public static <E> E pickRandom(Collection<E> collection)

**Returns:** `E`

### public static <E> E pickRandom(Iterable<E> collection)

**Returns:** `E`

### public static <From,To> To getClosest(From from,
List<To> toList,
DistanceFunc<From,To> distanceFunc)

**Returns:** `To`

### public static <E> int getSize(Iterable<E> collection)

**Returns:** `int`

### public static <E> E getElementAt(Iterable<E> collection,
int index)
throws ArrayIndexOutOfBoundsException

**Returns:** `E`

### public static <E> void copy(List<E> target,
List<E> source)

**Returns:** `void`

### public static <E> void move(List<E> target,
List<E> source)

**Returns:** `void`

### public static <E,S> void copy(List<E> target,
List<S> source,
ICloner<E,S> elementCloner)

**Returns:** `void`

### public static <E,S> void move(List<E> target,
List<S> source,
ICloner<E,S> elementCloner)

**Returns:** `void`

### public static <E,S> int indexOf(E[] collection,
S containsItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `int`

### public static <E,S> int indexOf(List<E> collection,
S containsItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `int`

### public static <E> int indexOf(E[] collection,
Predicate<E> predicate)

**Returns:** `int`

### public static <E> int indexOf(List<E> collection,
Predicate<E> predicate)

**Returns:** `int`

### public static <E> boolean any(E[] elements,
Predicate<E> predicate)

**Returns:** `boolean`

### public static <E,S> boolean any(E[] elements,
S compareElement,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `boolean`

### public static <E> boolean contains(E[] collection,
int count,
E e)

**Returns:** `boolean`

### public static <E,S> boolean contains(E[] collection,
S containsItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `boolean`

### public static <E,S> boolean contains(List<E> collection,
S containsItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `boolean`

### public static <E,S> boolean contains(Collection<E> it,
S containsItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `boolean`

### public static <E,S> boolean contains(Iterable<E> it,
S containsItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `boolean`

### public static <E> boolean contains(E[] collection,
Predicate<E> predicate)

**Returns:** `boolean`

### public static <E> boolean contains(List<E> collection,
Predicate<E> predicate)

**Returns:** `boolean`

### public static <E> boolean contains(Collection<E> it,
Predicate<E> predicate)

**Returns:** `boolean`

### public static <E> boolean contains(Iterable<E> it,
Predicate<E> predicate)

**Returns:** `boolean`

### public static <E> E find(E[] collection,
Predicate<E> predicate)

**Returns:** `E`

### public static <E,S> E find(E[] collection,
S comparisonItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `E`

### public static <E> E findOrDefault(E[] collection,
Predicate<E> predicate,
E defaultItem)

**Returns:** `E`

### public static <E,S> E findOrDefault(E[] collection,
S comparisonItem,
Predicates.Params1.ICallback<E,S> predicate,
E defaultItem)

**Returns:** `E`

### public static <E,S> E findOrDefault(Iterable<E> collection,
S comparisonItem,
Predicates.Params1.ICallback<E,S> predicate,
E defaultItem)

**Returns:** `E`

### public static <E> E find(List<E> collection,
Predicate<E> predicate)

**Returns:** `E`

### public static <E> E find(Iterable<E> collection,
Predicate<E> predicate)

**Returns:** `E`

### public static <E,S> E find(List<E> collection,
S comparisonItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `E`

### public static <E,S> E find(Iterable<E> collection,
S comparisonItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `E`

### public static <E,S> List<E> listConvert(List<S> source,
Function<S,E> converter)

**Returns:** `List<E>`

### public static <E,S> Iterable<E> itConvert(Iterable<S> source,
Function<S,E> converter)

**Returns:** `Iterable<E>`

### public static <E,S> List<E> listConvert(List<S> source,
List<E> dest,
Function<S,E> converter)

**Returns:** `List<E>`

### public static <E> int lengthOf(E[] array)

**Returns:** `int`

### public static int lengthOf(int[] array)

**Parameters:**
- `int[]` `array`

**Returns:** `int`

### public static int lengthOf(float[] array)

**Parameters:**
- `float[]` `array`

**Returns:** `int`

### public static <T extends Enum<T>> Map<String,T> generateNameToEnumLookUpTable(Class<T> enumClass,
Function<T,String> nameProvider)

**Returns:** `Map<String,T>`

### public static <E> int count(E[] array,
E element)

**Returns:** `int`

### public static <E,S> int count(E[] array,
S comparisonItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `int`

### public static <E> int count(E[] array,
Predicate<E> predicate)

**Returns:** `int`

### public static <E> int count(E[] array,
int maxCount,
Predicate<E> predicate)

**Returns:** `int`

### public static <E,S> int count(E[] array,
int maxCount,
S comparisonItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `int`

### public static <E> E[] trimRight(E[] array,
int trimAmount)

**Returns:** `E[]`

### public static <E> E[] trimLeft(E[] array,
int trimAmount)

**Returns:** `E[]`

### public static <E> E[] sub(E[] array,
int idxStart,
int idxEnd)

**Returns:** `E[]`

### public static <E,S,T1> List<E> listConvert(List<S> source,
List<E> dest,
T1 v1,
PZArrayUtil.IListConverter1Param<S,E,T1> converter)

**Returns:** `List<E>`

### public static String arrayToString(float[] list)

**Parameters:**
- `float[]` `list`

**Returns:** `String`

### public static String arrayToString(float[] list,
String prefix,
String suffix,
String delimiter)

**Parameters:**
- `float[]` `list`
- `String` `prefix`
- `String` `suffix`
- `String` `delimiter`

**Returns:** `String`

### public static <E> String arrayToString(E[] list)

**Returns:** `String`

### public static <E> String arrayToString(E[] list,
String prefix,
String suffix,
String delimiter)

**Returns:** `String`

### public static <E> String arrayToString(E[] list,
Function<E,String> toString,
String prefix,
String suffix,
String delimiter)

**Returns:** `String`

### public static <E> String arrayToString(Iterable<E> list,
Function<E,String> toString)

**Returns:** `String`

### public static <E> String arrayToString(Iterable<E> list)

**Returns:** `String`

### public static <E> String arrayToString(Iterable<E> list,
String prefix,
String suffix,
String delimiter)

**Returns:** `String`

### public static <E> String arrayToString(Iterable<E> list,
Function<E,String> toString,
String prefix,
String suffix,
String delimiter)

**Returns:** `String`

### public static <E> E[] newInstance(Class<?> componentType,
int length)

**Returns:** `E[]`

### public static <E> E[] newInstance(Class<?> componentType,
int length,
Supplier<E> allocator)

**Returns:** `E[]`

### public static <E> E[] newInstance(Class<?> componentType,
E[] reusableArray,
int newLength)

**Returns:** `E[]`

### public static <E> E[] newInstance(Class<?> componentType,
E[] reusableArray,
int newLength,
boolean growOnly)

**Returns:** `E[]`

### public static <E> E[] newInstance(Class<?> componentType,
E[] reusableArray,
int newLength,
Supplier<E> newAllocator)

**Returns:** `E[]`

### public static <E> E[] newInstance(Class<?> componentType,
E[] reusableArray,
int newLength,
boolean growOnly,
Supplier<E> newAllocator)

**Returns:** `E[]`

### public static float[] add(float[] array,
float val)

**Parameters:**
- `float[]` `array`
- `float` `val`

**Returns:** `float[]`

### public static int[] add(int[] array,
int val)

**Parameters:**
- `int[]` `array`
- `int` `val`

**Returns:** `int[]`

### public static <E> E[] add(E[] array,
E val)

**Returns:** `E[]`

### public static <E> E[] concat(E[] arrayA,
E[] arrayB)

**Returns:** `E[]`

### public static <E, S extends E> E[] arrayCopy(E[] to,
S[] from,
int startIdx,
int endIdx)

**Returns:** `E[]`

### public static <E, S extends E> E[] arrayCopy(E[] to,
S[] from,
int startIdx,
int endIdx,
Supplier<E> allocator,
Invokers.Params2.ICallback<E,S> copier)

**Returns:** `E[]`

### public static float[] arrayCopy(float[] to,
float[] from,
int startIdx,
int endIdx)

**Parameters:**
- `float[]` `to`
- `float[]` `from`
- `int` `startIdx`
- `int` `endIdx`

**Returns:** `float[]`

### public static int[] arrayCopy(int[] to,
int[] from,
int startIdx,
int endIdx)

**Parameters:**
- `int[]` `to`
- `int[]` `from`
- `int` `startIdx`
- `int` `endIdx`

**Returns:** `int[]`

### public static <L extends List<E>, E> L arrayCopy(L to,
List<? extends E> from)

**Returns:** `L`

### public static <E> E[] arrayCopy(E[] to,
List<? extends E> from)

**Returns:** `E[]`

### public static <E, S extends E> E[] arrayCopy(E[] to,
S[] from)

**Returns:** `E[]`

### public static <E> E[] arrayCopyFiltered(E[] to,
E[] from,
Predicate<E> filterPredicate)

**Returns:** `E[]`

### public static <E,S> E[] arrayCopyFiltered(E[] to,
E[] from,
S comparisonItem,
Predicates.Params1.ICallback<E,S> filterPredicate)

**Returns:** `E[]`

### public static <E> E[] filtered(E[] from,
Predicate<E> predicate)

**Returns:** `E[]`

### public static <E> E[] filtered(E[] from,
int maxCount,
Predicate<E> predicate)

**Returns:** `E[]`

### public static <E,S> E[] filtered(E[] from,
S comparisonItem,
Predicates.Params1.ICallback<E,S> predicate)

**Returns:** `E[]`

### public static <L extends List<E>, E, S> L arrayConvert(L to,
List<S> from,
Function<S,E> converter)

**Returns:** `L`

### public static <E,S> E[] arrayConvert(E[] to,
S[] from,
Function<S,E> converter)

**Returns:** `E[]`

### public static float[] clone(float[] src)

**Parameters:**
- `float[]` `src`

**Returns:** `float[]`

### public static <E> E[] clone(E[] src,
Supplier<E> allocator,
Invokers.Params2.ICallback<E,E> copier)

**Returns:** `E[]`

### public static <E> E[] shallowClone(E[] src)

**Returns:** `E[]`

### public static <E> boolean isNullOrEmpty(E[] array)

**Returns:** `boolean`

### public static boolean isNullOrEmpty(int[] array)

**Parameters:**
- `int[]` `array`

**Returns:** `boolean`

### public static boolean isNullOrEmpty(float[] array)

**Parameters:**
- `float[]` `array`

**Returns:** `boolean`

### public static <E> boolean isNullOrEmpty(List<E> list)

**Returns:** `boolean`

### public static <E> boolean isNullOrEmpty(Iterable<E> it)

**Returns:** `boolean`

### public static <E> E getOrDefault(List<E> list,
int i)

**Returns:** `E`

### public static <E> E getOrDefault(List<E> list,
int i,
E defaultVal)

**Returns:** `E`

### public static <E> E getOrDefault(E[] list,
int i,
E defaultVal)

**Returns:** `E`

### public static float getOrDefault(float[] list,
int i,
float defaultVal)

**Parameters:**
- `float[]` `list`
- `int` `i`
- `float` `defaultVal`

**Returns:** `float`

### public static int getOrDefault(int[] list,
int i,
int defaultVal)

**Parameters:**
- `int[]` `list`
- `int` `i`
- `int` `defaultVal`

**Returns:** `int`

### public static int[] arraySet(int[] arr,
int val)

**Parameters:**
- `int[]` `arr`
- `int` `val`

**Returns:** `int[]`

### public static float[] arraySet(float[] arr,
float val)

**Parameters:**
- `float[]` `arr`
- `float` `val`

**Returns:** `float[]`

### public static <E> E[] arraySet(E[] arr,
E val)

**Returns:** `E[]`

### public static <E> E[] arrayPopulate(E[] arr,
Supplier<E> supplier)

**Returns:** `E[]`

### public static <E> E[] arrayPopulate(E[] arr,
Supplier<E> supplier,
int startIdx,
int endIdx)

**Returns:** `E[]`

### public static int[] insertAt(int[] arr,
int insertAt,
int val)

**Parameters:**
- `int[]` `arr`
- `int` `insertAt`
- `int` `val`

**Returns:** `int[]`

### public static float[] insertAt(float[] arr,
int insertAt,
float val)

**Parameters:**
- `float[]` `arr`
- `int` `insertAt`
- `float` `val`

**Returns:** `float[]`

### public static <E> E[] insertAt(E[] arr,
int insertAt,
E val)

**Returns:** `E[]`

### public static <E> E[] toArray(List<E> list)

**Returns:** `E[]`

### public static <E> int indexOf(E[] arr,
int count,
E val)

**Returns:** `int`

### public static int indexOf(float[] arr,
int count,
float val)

**Parameters:**
- `float[]` `arr`
- `int` `count`
- `float` `val`

**Returns:** `int`

### public static boolean contains(float[] arr,
int count,
float val)

**Parameters:**
- `float[]` `arr`
- `int` `count`
- `float` `val`

**Returns:** `boolean`

### public static int indexOf(int[] arr,
int count,
int val)

**Parameters:**
- `int[]` `arr`
- `int` `count`
- `int` `val`

**Returns:** `int`

### public static boolean contains(int[] arr,
int count,
int val)

**Parameters:**
- `int[]` `arr`
- `int` `count`
- `int` `val`

**Returns:** `boolean`

### public static <E> void forEach(List<E> list,
Consumer<? super E> consumer)

**Returns:** `void`

### public static <E> void forEach(Iterable<E> it,
Consumer<? super E> consumer)

**Returns:** `void`

### public static <E> void forEach(E[] elements,
Consumer<? super E> consumer)

**Returns:** `void`

### public static <E,Param> void forEach(E[] elements,
Param param,
BiConsumer<? super E, Param> consumer)

**Returns:** `void`

### public static <E> void forEachReplace(List<E> list,
Function<? super E, ? super E> replacer)

**Returns:** `void`

### public static <K,V> V getOrCreate(HashMap<K,V> map,
K key,
Supplier<V> allocator)

**Returns:** `V`

### public static <E> void sort(Stack<E> stack,
Comparator<E> comparator)

**Returns:** `void`

### public static <E> void sort(List<E> list,
Comparator<E> comparator)

**Returns:** `void`

### public static <E> boolean sequenceEqual(E[] a,
List<? extends E> b)

**Returns:** `boolean`

### public static <E> boolean sequenceEqual(E[] a,
List<? extends E> b,
Comparator<E> comparator)

**Returns:** `boolean`

### public static <E> boolean sequenceEqual(List<? extends E> a,
List<? extends E> b)

**Returns:** `boolean`

### public static <E> boolean sequenceEqual(List<? extends E> a,
List<? extends E> b,
Comparator<E> comparator)

**Returns:** `boolean`

### public static int[] arrayAdd(int[] a,
int[] b)

**Parameters:**
- `int[]` `a`
- `int[]` `b`

**Returns:** `int[]`

### public static <E> void addAll(ArrayList<E> dest,
List<E> src)

**Returns:** `void`

### public static <E> void addAll(PZArrayList<E> dest,
List<E> src)

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\list\PZArrayUtil.html`*
