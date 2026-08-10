---
title: se.krka.kahlua.integration.processor.ClassParameterInformation
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.integration.processor
---

# se.krka.kahlua.integration.processor.ClassParameterInformation

`public class ClassParameterInformation extends Object implements Serializable`

**Kind:** class · **Package:** se.krka.kahlua.integration.processor

## Inheritance
- java.lang.Object
- se.krka.kahlua.integration.processor.ClassParameterInformation

## Fields

### public Map<String,MethodParameterInformation> methods

## Constructors

### public ClassParameterInformation(String string0,
String string1)

**Parameters:**
- `String` `string0`
- `String` `string1`

### public ClassParameterInformation(Class<?> clazz)

**Parameters:**
- `Class<?>` `clazz`

## Methods

### public String getPackageName()

**Returns:** `String`

### public String getSimpleClassName()

**Returns:** `String`

### public String getFullClassName()

**Returns:** `String`

### public static ClassParameterInformation getFromStream(Class<?> clazz)
throws IOException,
ClassNotFoundException

**Parameters:**
- `Class<?>` `clazz`

**Returns:** `ClassParameterInformation`

### public void saveToStream(OutputStream outputStream)
throws IOException

**Parameters:**
- `OutputStream` `outputStream`

**Returns:** `void`

### public String getFileName()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\integration\processor\ClassParameterInformation.html`*
