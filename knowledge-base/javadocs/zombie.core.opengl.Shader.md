---
title: zombie.core.opengl.Shader
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.opengl
---

# zombie.core.opengl.Shader

`public class Shader extends Object implements IShaderProgramListener`

**Kind:** class · **Package:** zombie.core.opengl

## Inheritance
- java.lang.Object
- zombie.core.opengl.Shader

## Fields

### public static final HashMap<Integer,Shader> ShaderMap

## Constructors

### public Shader(String name)

**Parameters:**
- `String` `name`

## Methods

### public String getName()

**Returns:** `String`

### public boolean GetRequiresSkinning()

**Returns:** `boolean`

### public void Activate()

**Returns:** `void`

### public void SetupInstancedData()

**Returns:** `void`

### public void SetupBones(ModelMesh mesh)

**Parameters:**
- `ModelMesh` `mesh`

**Returns:** `void`

### public void setTexture(Texture tex)

**Parameters:**
- `Texture` `tex`

**Returns:** `void`

### public int getID()

**Returns:** `int`

### public void Start()

**Returns:** `void`

### public void End()

**Returns:** `void`

### public void destroy()

**Returns:** `void`

### public void startMainThread(TextureDraw texd,
int playerIndex)

**Parameters:**
- `TextureDraw` `texd`
- `int` `playerIndex`

**Returns:** `void`

### public void startRenderThread(TextureDraw tex)

**Parameters:**
- `TextureDraw` `tex`

**Returns:** `void`

### public void postRender(TextureDraw texd)

**Parameters:**
- `TextureDraw` `texd`

**Returns:** `void`

### public boolean isCompiled()

**Returns:** `boolean`

### public void callback(ShaderProgram sender)

**Parameters:**
- `ShaderProgram` `sender`

**Returns:** `void`

### public ShaderProgram getProgram()

**Returns:** `ShaderProgram`

### public ShaderProgram getShaderProgram()

**Returns:** `ShaderProgram`

### public int getWidth()

**Returns:** `int`

### public int getHeight()

**Returns:** `int`

### public void setWidth(int newWidth)

**Parameters:**
- `int` `newWidth`

**Returns:** `void`

### public void setHeight(int newHeight)

**Parameters:**
- `int` `newHeight`

**Returns:** `void`

### public boolean getRequiresSkinning()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\opengl\Shader.html`*
