---
title: se.krka.kahlua.integration.doc.ApiDocumentationExporter
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.integration.doc
---

# se.krka.kahlua.integration.doc.ApiDocumentationExporter

`public class ApiDocumentationExporter extends Object implements ApiInformation`

**Kind:** class · **Package:** se.krka.kahlua.integration.doc

## Inheritance
- java.lang.Object
- se.krka.kahlua.integration.doc.ApiDocumentationExporter

## Constructors

### public ApiDocumentationExporter(Map<Class<?>,ClassDebugInformation> map)

**Parameters:**
- `Map<Class<?>,ClassDebugInformation>` `map`

## Methods

### public void setupHierarchy()

**Returns:** `void`

### public List<Class<?>> getAllClasses()

**Returns:** `List<Class<?>>`

### public List<Class<?>> getChildrenForClass(Class<?> clazz)

**Parameters:**
- `Class<?>` `clazz`

**Returns:** `List<Class<?>>`

### public List<Class<?>> getRootClasses()

**Returns:** `List<Class<?>>`

### public List<MethodDebugInformation> getFunctionsForClass(Class<?> clazz)

**Parameters:**
- `Class<?>` `clazz`

**Returns:** `List<MethodDebugInformation>`

### public List<MethodDebugInformation> getMethodsForClass(Class<?> clazz)

**Parameters:**
- `Class<?>` `clazz`

**Returns:** `List<MethodDebugInformation>`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\integration\doc\ApiDocumentationExporter.html`*
