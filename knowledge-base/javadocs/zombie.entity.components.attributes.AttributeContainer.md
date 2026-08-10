---
title: zombie.entity.components.attributes.AttributeContainer
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.attributes
---

# zombie.entity.components.attributes.AttributeContainer

`public class AttributeContainer extends Component`

**Kind:** class · **Package:** zombie.entity.components.attributes

## Inheritance
- java.lang.Object
- zombie.entity.Component
- zombie.entity.components.attributes.AttributeContainer

## Fields

### public static final short STORAGE_SIZE

## Methods

### public String toString()

**Returns:** `String`

### public int size()

**Returns:** `int`

### public void forEach(BiConsumer<AttributeType, AttributeInstance> action)

**Parameters:**
- `BiConsumer<AttributeType, AttributeInstance>` `action`

**Returns:** `void`

### public boolean contains(AttributeType type)

**Parameters:**
- `AttributeType` `type`

**Returns:** `boolean`

### public void remove(AttributeType type)

**Parameters:**
- `AttributeType` `type`

**Returns:** `void`

### public boolean add(AttributeType type)

**Parameters:**
- `AttributeType` `type`

**Returns:** `boolean`

### public final boolean putFromScript(AttributeType type,
String scriptVal)

**Parameters:**
- `AttributeType` `type`
- `String` `scriptVal`

**Returns:** `boolean`

### public final <E extends Enum<E> & IOEnum> void put(AttributeType.Enum<E> type,
E value)

**Returns:** `void`

### public final <E extends Enum<E> & IOEnum> void set(AttributeType.Enum<E> type,
E value)

**Returns:** `void`

### public final <E extends Enum<E> & IOEnum> E get(AttributeType.Enum<E> type)

**Returns:** `E`

### public final <E extends Enum<E> & IOEnum> E get(AttributeType.Enum<E> type,
E defaultTo)

**Returns:** `E`

### public final <E extends Enum<E> & IOEnum> void put(AttributeType.EnumSet<E> type,
EnumSet<E> value)

**Returns:** `void`

### public final <E extends Enum<E> & IOEnum> void set(AttributeType.EnumSet<E> type,
EnumSet<E> value)

**Returns:** `void`

### public final <E extends Enum<E> & IOEnum>
EnumSet<E> get(AttributeType.EnumSet<E> type)

**Returns:** `EnumSet<E>`

### public final <E extends Enum<E> & IOEnum> void put(AttributeType.EnumStringSet<E> type,
EnumStringObj<E> value)

**Returns:** `void`

### public final <E extends Enum<E> & IOEnum> void set(AttributeType.EnumStringSet<E> type,
EnumStringObj<E> value)

**Returns:** `void`

### public final <E extends Enum<E> & IOEnum>
EnumStringObj<E> get(AttributeType.EnumStringSet<E> type)

**Returns:** `EnumStringObj<E>`

### public final void put(AttributeType.String type,
String value)

**Parameters:**
- `AttributeType.String` `type`
- `String` `value`

**Returns:** `void`

### public final void set(AttributeType.String type,
String value)

**Parameters:**
- `AttributeType.String` `type`
- `String` `value`

**Returns:** `void`

### public final String get(AttributeType.String type)

**Parameters:**
- `AttributeType.String` `type`

**Returns:** `String`

### public final String get(AttributeType.String type,
String defaultTo)

**Parameters:**
- `AttributeType.String` `type`
- `String` `defaultTo`

**Returns:** `String`

### public final void put(AttributeType.Bool type,
boolean value)

**Parameters:**
- `AttributeType.Bool` `type`
- `boolean` `value`

**Returns:** `void`

### public final void set(AttributeType.Bool type,
boolean value)

**Parameters:**
- `AttributeType.Bool` `type`
- `boolean` `value`

**Returns:** `void`

### public final boolean get(AttributeType.Bool type)

**Parameters:**
- `AttributeType.Bool` `type`

**Returns:** `boolean`

### public final boolean get(AttributeType.Bool type,
boolean defaultTo)

**Parameters:**
- `AttributeType.Bool` `type`
- `boolean` `defaultTo`

**Returns:** `boolean`

### public final void putFloatValue(AttributeType.Numeric type,
float value)

**Parameters:**
- `AttributeType.Numeric` `type`
- `float` `value`

**Returns:** `void`

### public final void setFloatValue(AttributeType.Numeric type,
float value)

**Parameters:**
- `AttributeType.Numeric` `type`
- `float` `value`

**Returns:** `void`

### public final float getFloatValue(AttributeType.Numeric type)

**Parameters:**
- `AttributeType.Numeric` `type`

**Returns:** `float`

### public final float getFloatValue(AttributeType.Numeric type,
float defaultTo)

**Parameters:**
- `AttributeType.Numeric` `type`
- `float` `defaultTo`

**Returns:** `float`

### public final void put(AttributeType.Float type,
float value)

**Parameters:**
- `AttributeType.Float` `type`
- `float` `value`

**Returns:** `void`

### public final void set(AttributeType.Float type,
float value)

**Parameters:**
- `AttributeType.Float` `type`
- `float` `value`

**Returns:** `void`

### public final float get(AttributeType.Float type)

**Parameters:**
- `AttributeType.Float` `type`

**Returns:** `float`

### public final float get(AttributeType.Float type,
float defaultTo)

**Parameters:**
- `AttributeType.Float` `type`
- `float` `defaultTo`

**Returns:** `float`

### public final void put(AttributeType.Double type,
double value)

**Parameters:**
- `AttributeType.Double` `type`
- `double` `value`

**Returns:** `void`

### public final void set(AttributeType.Double type,
double value)

**Parameters:**
- `AttributeType.Double` `type`
- `double` `value`

**Returns:** `void`

### public final double get(AttributeType.Double type)

**Parameters:**
- `AttributeType.Double` `type`

**Returns:** `double`

### public final double get(AttributeType.Double type,
double defaultTo)

**Parameters:**
- `AttributeType.Double` `type`
- `double` `defaultTo`

**Returns:** `double`

### public final void put(AttributeType.Byte type,
byte value)

**Parameters:**
- `AttributeType.Byte` `type`
- `byte` `value`

**Returns:** `void`

### public final void set(AttributeType.Byte type,
byte value)

**Parameters:**
- `AttributeType.Byte` `type`
- `byte` `value`

**Returns:** `void`

### public final byte get(AttributeType.Byte type)

**Parameters:**
- `AttributeType.Byte` `type`

**Returns:** `byte`

### public final byte get(AttributeType.Byte type,
byte defaultTo)

**Parameters:**
- `AttributeType.Byte` `type`
- `byte` `defaultTo`

**Returns:** `byte`

### public final void put(AttributeType.Short type,
short value)

**Parameters:**
- `AttributeType.Short` `type`
- `short` `value`

**Returns:** `void`

### public final void set(AttributeType.Short type,
short value)

**Parameters:**
- `AttributeType.Short` `type`
- `short` `value`

**Returns:** `void`

### public final short get(AttributeType.Short type)

**Parameters:**
- `AttributeType.Short` `type`

**Returns:** `short`

### public final short get(AttributeType.Short type,
short defaultTo)

**Parameters:**
- `AttributeType.Short` `type`
- `short` `defaultTo`

**Returns:** `short`

### public final void put(AttributeType.Int type,
int value)

**Parameters:**
- `AttributeType.Int` `type`
- `int` `value`

**Returns:** `void`

### public final void set(AttributeType.Int type,
int value)

**Parameters:**
- `AttributeType.Int` `type`
- `int` `value`

**Returns:** `void`

### public final int get(AttributeType.Int type)

**Parameters:**
- `AttributeType.Int` `type`

**Returns:** `int`

### public final int get(AttributeType.Int type,
int defaultTo)

**Parameters:**
- `AttributeType.Int` `type`
- `int` `defaultTo`

**Returns:** `int`

### public final void put(AttributeType.Long type,
long value)

**Parameters:**
- `AttributeType.Long` `type`
- `long` `value`

**Returns:** `void`

### public final void set(AttributeType.Long type,
long value)

**Parameters:**
- `AttributeType.Long` `type`
- `long` `value`

**Returns:** `void`

### public final long get(AttributeType.Long type)

**Parameters:**
- `AttributeType.Long` `type`

**Returns:** `long`

### public final long get(AttributeType.Long type,
long defaultTo)

**Parameters:**
- `AttributeType.Long` `type`
- `long` `defaultTo`

**Returns:** `long`

### public AttributeType getKey(int index)

**Parameters:**
- `int` `index`

**Returns:** `AttributeType`

### public AttributeInstance getAttribute(int index)

**Parameters:**
- `int` `index`

**Returns:** `AttributeInstance`

### public AttributeInstance getAttribute(AttributeType type)

**Parameters:**
- `AttributeType` `type`

**Returns:** `AttributeInstance`

### public void clear()

**Returns:** `void`

### public static void Copy(AttributeContainer source,
AttributeContainer target)

**Parameters:**
- `AttributeContainer` `source`
- `AttributeContainer` `target`

**Returns:** `void`

### public static void Merge(AttributeContainer source,
AttributeContainer target)

**Parameters:**
- `AttributeContainer` `source`
- `AttributeContainer` `target`

**Returns:** `void`

### public AttributeContainer copy()

**Returns:** `AttributeContainer`

### public boolean isIdenticalTo(AttributeContainer other)

**Parameters:**
- `AttributeContainer` `other`

**Returns:** `boolean`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\attributes\AttributeContainer.html`*
