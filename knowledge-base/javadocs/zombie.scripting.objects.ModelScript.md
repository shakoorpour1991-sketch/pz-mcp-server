---
title: zombie.scripting.objects.ModelScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.ModelScript

`public final class ModelScript extends BaseScriptObject implements IModelAttachmentOwner`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.objects.ModelScript

## Fields

### public static final String DEFAULT_SHADER_NAME

### public String fileName

### public String name

### public String meshName

### public String textureName

### public String shaderName

### public boolean isStatic

### public float scale

### public final ArrayList<ModelAttachment> attachments

### public HashMap<String, ModelAttachment> attachmentById

### public boolean invertX

### public String postProcess

### public Model loadedModel

### public final ArrayList<AnimBoneWeight> boneWeights

### public String animationsMesh

### public int cullFace

## Constructors

### public ModelScript()

## Methods

### public void InitLoadPP(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public void Load(String name,
String totalFile)
throws Exception

**Parameters:**
- `String` `name`
- `String` `totalFile`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public String getFullType()

**Returns:** `String`

### public String getMeshName()

**Returns:** `String`

### public String getTextureName()

**Returns:** `String`

### public String getTextureName(boolean allowNull)

**Parameters:**
- `boolean` `allowNull`

**Returns:** `String`

### public String getShaderName()

**Returns:** `String`

### public String getModelManagerKey()

**Returns:** `String`

### public void setModelManagerKey(String modelManagerKey)

**Parameters:**
- `String` `modelManagerKey`

**Returns:** `void`

### public String getFileName()

**Returns:** `String`

### public int getAttachmentCount()

**Returns:** `int`

### public ModelAttachment getAttachment(int index)

**Parameters:**
- `int` `index`

**Returns:** `ModelAttachment`

### public ModelAttachment getAttachmentById(ModelAttachmentId id)

**Parameters:**
- `ModelAttachmentId` `id`

**Returns:** `ModelAttachment`

### public ModelAttachment getAttachmentById(String id)

**Parameters:**
- `String` `id`

**Returns:** `ModelAttachment`

### public ModelAttachment addAttachment(ModelAttachment attach)

**Parameters:**
- `ModelAttachment` `attach`

**Returns:** `ModelAttachment`

### public ModelAttachment removeAttachment(ModelAttachment attach)

**Parameters:**
- `ModelAttachment` `attach`

**Returns:** `ModelAttachment`

### public ModelAttachment addAttachmentAt(int index,
ModelAttachment attach)

**Parameters:**
- `int` `index`
- `ModelAttachment` `attach`

**Returns:** `ModelAttachment`

### public ModelAttachment removeAttachment(int index)

**Parameters:**
- `int` `index`

**Returns:** `ModelAttachment`

### public void scaleAttachmentOffset(float scale)

**Parameters:**
- `float` `scale`

**Returns:** `void`

### public void beforeRenameAttachment(ModelAttachment attachment)

**Parameters:**
- `ModelAttachment` `attachment`

**Returns:** `void`

### public void afterRenameAttachment(ModelAttachment attachment)

**Parameters:**
- `ModelAttachment` `attachment`

**Returns:** `void`

### public boolean isStatic()

**Returns:** `boolean`

### public void reset()

**Returns:** `void`

### public static void ScriptsLoaded()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\ModelScript.html`*
