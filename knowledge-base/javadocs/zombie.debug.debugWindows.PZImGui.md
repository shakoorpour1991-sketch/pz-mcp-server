---
title: zombie.debug.debugWindows.PZImGui
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.debug.debugWindows
---

# zombie.debug.debugWindows.PZImGui

`public class PZImGui extends Object`

**Kind:** class · **Package:** zombie.debug.debugWindows

## Inheritance
- java.lang.Object
- zombie.debug.debugWindows.PZImGui

## Constructors

### public PZImGui()

## Methods

### public static float sliderFloat(String label,
float value,
float min,
float max)

**Parameters:**
- `String` `label`
- `float` `value`
- `float` `min`
- `float` `max`

**Returns:** `float`

### public static boolean button(String s)

**Parameters:**
- `String` `s`

**Returns:** `boolean`

### public static boolean combo(String label,
imgui.type.ImInt currentItem,
String[] items)

**Parameters:**
- `String` `label`
- `imgui.type.ImInt` `currentItem`
- `String[]` `items`

**Returns:** `boolean`

### public static boolean collapsingHeader(String s)

**Parameters:**
- `String` `s`

**Returns:** `boolean`

### public static boolean begin(String title,
imgui.type.ImBoolean pOpen,
int imGuiWindowFlags)

**Parameters:**
- `String` `title`
- `imgui.type.ImBoolean` `pOpen`
- `int` `imGuiWindowFlags`

**Returns:** `boolean`

### public static boolean checkboxWithDefaultValueHighlight(String label,
Supplier<Boolean> getter,
Consumer<Boolean> setter,
boolean defaultValue,
int color)

**Parameters:**
- `String` `label`
- `Supplier<Boolean>` `getter`
- `Consumer<Boolean>` `setter`
- `boolean` `defaultValue`
- `int` `color`

**Returns:** `boolean`

### public static boolean checkbox(String label,
Supplier<Boolean> getter,
Consumer<Boolean> setter)

**Parameters:**
- `String` `label`
- `Supplier<Boolean>` `getter`
- `Consumer<Boolean>` `setter`

**Returns:** `boolean`

### public static int sliderInt(String label,
int value,
int min,
int max)

**Parameters:**
- `String` `label`
- `int` `value`
- `int` `min`
- `int` `max`

**Returns:** `int`

### public static int sliderIntShowRange(String label,
int value,
int min,
int max)

**Parameters:**
- `String` `label`
- `int` `value`
- `int` `min`
- `int` `max`

**Returns:** `int`

### public static int sliderInt(String label,
int min,
int max,
Supplier<Integer> getter,
Consumer<Integer> setter)

**Parameters:**
- `String` `label`
- `int` `min`
- `int` `max`
- `Supplier<Integer>` `getter`
- `Consumer<Integer>` `setter`

**Returns:** `int`

### public static <T> int sliderInt(String label,
int min,
int max,
zombie.debug.debugWindows.Wrappers.SupplyConsumer<T,Integer> getter,
BiConsumer<T,Integer> setter,
T supplyArg)

**Returns:** `int`

### public static float sliderFloatShowRange(String label,
float value,
float min,
float max)

**Parameters:**
- `String` `label`
- `float` `value`
- `float` `min`
- `float` `max`

**Returns:** `float`

### public static float sliderFloat(String label,
float min,
float max,
Supplier<Float> getter,
Consumer<Float> setter)

**Parameters:**
- `String` `label`
- `float` `min`
- `float` `max`
- `Supplier<Float>` `getter`
- `Consumer<Float>` `setter`

**Returns:** `float`

### public static float sliderFloat(String label,
float min,
float max,
int scale,
Supplier<Float> getter,
Consumer<Float> setter)

**Parameters:**
- `String` `label`
- `float` `min`
- `float` `max`
- `int` `scale`
- `Supplier<Float>` `getter`
- `Consumer<Float>` `setter`

**Returns:** `float`

### public static void sliderDouble(String label,
double min,
double max,
Supplier<Double> getter,
Consumer<Double> setter)

**Parameters:**
- `String` `label`
- `double` `min`
- `double` `max`
- `Supplier<Double>` `getter`
- `Consumer<Double>` `setter`

**Returns:** `void`

### public static float dragFloat(String label,
float min,
float max,
float step,
Supplier<Float> getter,
Consumer<Float> setter)

**Parameters:**
- `String` `label`
- `float` `min`
- `float` `max`
- `float` `step`
- `Supplier<Float>` `getter`
- `Consumer<Float>` `setter`

**Returns:** `float`

### public static float dragFloat(String label,
float value,
float min,
float max,
float step)

**Parameters:**
- `String` `label`
- `float` `value`
- `float` `min`
- `float` `max`
- `float` `step`

**Returns:** `float`

### public static boolean checkbox(String label,
boolean value)

**Parameters:**
- `String` `label`
- `boolean` `value`

**Returns:** `boolean`

### public static <T> boolean checkbox(String label,
zombie.debug.debugWindows.Wrappers.SupplyConsumer<T,Boolean> getter,
BiConsumer<T,Boolean> setter,
T supplyArg)

**Returns:** `boolean`

### public static boolean selectable(String label,
boolean value)

**Parameters:**
- `String` `label`
- `boolean` `value`

**Returns:** `boolean`

### public static void clearValueChanged()

**Returns:** `void`

### public static boolean didValuesChange()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\debug\debugWindows\PZImGui.html`*
