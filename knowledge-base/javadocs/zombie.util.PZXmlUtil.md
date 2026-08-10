---
title: zombie.util.PZXmlUtil
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.util
---

# zombie.util.PZXmlUtil

`public final class PZXmlUtil extends Object`

**Kind:** class · **Package:** zombie.util

## Inheritance
- java.lang.Object
- zombie.util.PZXmlUtil

## Constructors

### public PZXmlUtil()

## Methods

### public static Element parseXml(String source)
throws PZXmlParserException

**Parameters:**
- `String` `source`

**Returns:** `Element`

### public static String elementToPrettyStringSafe(Element node)

**Parameters:**
- `Element` `node`

**Returns:** `String`

### public static String elementToPrettyString(Element node)
throws TransformerException

**Parameters:**
- `Element` `node`

**Returns:** `String`

### public static Document createNewDocument()

**Returns:** `Document`

### public static void forEachElement(Element root,
Consumer<Element> consumer)

**Parameters:**
- `Element` `root`
- `Consumer<Element>` `consumer`

**Returns:** `void`

### public static <T> T parse(Class<T> type,
String source)
throws PZXmlParserException

**Returns:** `T`

### public static <T> T unmarshall(Class<T> type,
Element root)
throws PZXmlParserException

**Returns:** `T`

### public static <T> void write(T data,
File outFile)
throws TransformerException,
IOException,
javax.xml.bind.JAXBException

**Returns:** `void`

### public static void write(Document doc,
File outFile)
throws TransformerException,
IOException

**Parameters:**
- `Document` `doc`
- `File` `outFile`

**Returns:** `void`

### public static <T> boolean tryWrite(T data,
File outFile)

**Returns:** `boolean`

### public static boolean tryWrite(Document doc,
File outFile)

**Parameters:**
- `Document` `doc`
- `File` `outFile`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\util\PZXmlUtil.html`*
