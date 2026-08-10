---
title: zombie.core.textures.TexturePackPage
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.textures
---

# zombie.core.textures.TexturePackPage

`public final class TexturePackPage extends Object`

**Kind:** class · **Package:** zombie.core.textures

## Inheritance
- java.lang.Object
- zombie.core.textures.TexturePackPage

## Fields

### public static HashMap<String, Stack<String>> foundTextures

### public static final HashMap<String,Texture> subTextureMap

### public static final HashMap<String,Texture> subTextureMap2

### public static final HashMap<String, TexturePackPage> texturePackPageMap

### public static final HashMap<String,String> TexturePackPageNameMap

### public final HashMap<String,Texture> subTextures

### public Texture tex

### public static int chl1

### public static int chl2

### public static int chl3

### public static int chl4

### public static ArrayList<TexturePackPage.SubTextureInfo> tempSubTextureInfo

### public static ArrayList<String> tempFilenameCheck

### public static boolean ignoreWorldItemTextures

## Constructors

### public TexturePackPage()

## Methods

### public static void LoadDir(String path)
throws URISyntaxException

**Parameters:**
- `String` `path`

**Returns:** `void`

### public static void searchFolders(File fo)

**Parameters:**
- `File` `fo`

**Returns:** `void`

### public static Texture getTexture(String tex)

**Parameters:**
- `String` `tex`

**Returns:** `Texture`

### public static int readInt(InputStream in)
throws EOFException,
IOException

**Parameters:**
- `InputStream` `in`

**Returns:** `int`

### public static int readInt(ByteBuffer in)
throws EOFException,
IOException

**Parameters:**
- `ByteBuffer` `in`

**Returns:** `int`

### public static int readIntByte(InputStream in)
throws EOFException,
IOException

**Parameters:**
- `InputStream` `in`

**Returns:** `int`

### public static String ReadString(InputStream input)
throws IOException

**Parameters:**
- `InputStream` `input`

**Returns:** `String`

### public void loadFromPackFile(BufferedInputStream input)
throws Exception

**Parameters:**
- `BufferedInputStream` `input`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\textures\TexturePackPage.html`*
