---
title: se.krka.kahlua.integration.processor.LuaDebugDataProcessor
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: se.krka.kahlua.integration.processor
---

# se.krka.kahlua.integration.processor.LuaDebugDataProcessor

`public class LuaDebugDataProcessor extends Object implements Processor, ElementVisitor<Void,Void>`

**Kind:** class · **Package:** se.krka.kahlua.integration.processor

## Inheritance
- java.lang.Object
- se.krka.kahlua.integration.processor.LuaDebugDataProcessor

## Constructors

### public LuaDebugDataProcessor()

## Methods

### public Iterable<? extends Completion> getCompletions(Element var1,
AnnotationMirror var2,
ExecutableElement var3,
String var4)

**Parameters:**
- `Element` `var1`
- `AnnotationMirror` `var2`
- `ExecutableElement` `var3`
- `String` `var4`

**Returns:** `Iterable<? extends Completion>`

### public Set<String> getSupportedAnnotationTypes()

**Returns:** `Set<String>`

### public Set<String> getSupportedOptions()

**Returns:** `Set<String>`

### public SourceVersion getSupportedSourceVersion()

**Returns:** `SourceVersion`

### public void init(ProcessingEnvironment processingEnvironment)

**Parameters:**
- `ProcessingEnvironment` `processingEnvironment`

**Returns:** `void`

### public boolean process(Set<? extends TypeElement> set,
RoundEnvironment roundEnvironment)

**Parameters:**
- `Set<? extends TypeElement>` `set`
- `RoundEnvironment` `roundEnvironment`

**Returns:** `boolean`

### public Void visit(Element var1)

**Parameters:**
- `Element` `var1`

**Returns:** `Void`

### public Void visit(Element var1,
Void var2)

**Parameters:**
- `Element` `var1`
- `Void` `var2`

**Returns:** `Void`

### public Void visitExecutable(ExecutableElement executableElement,
Void var2)

**Parameters:**
- `ExecutableElement` `executableElement`
- `Void` `var2`

**Returns:** `Void`

### public Void visitPackage(PackageElement var1,
Void var2)

**Parameters:**
- `PackageElement` `var1`
- `Void` `var2`

**Returns:** `Void`

### public Void visitType(TypeElement var1,
Void var2)

**Parameters:**
- `TypeElement` `var1`
- `Void` `var2`

**Returns:** `Void`

### public Void visitVariable(VariableElement var1,
Void var2)

**Parameters:**
- `VariableElement` `var1`
- `Void` `var2`

**Returns:** `Void`

### public Void visitTypeParameter(TypeParameterElement var1,
Void var2)

**Parameters:**
- `TypeParameterElement` `var1`
- `Void` `var2`

**Returns:** `Void`

### public Void visitUnknown(Element var1,
Void var2)

**Parameters:**
- `Element` `var1`
- `Void` `var2`

**Returns:** `Void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\se\krka\kahlua\integration\processor\LuaDebugDataProcessor.html`*
