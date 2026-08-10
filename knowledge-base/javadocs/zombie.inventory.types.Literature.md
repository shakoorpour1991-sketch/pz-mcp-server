---
title: zombie.inventory.types.Literature
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.inventory.types
---

# zombie.inventory.types.Literature

`public final class Literature extends InventoryItem`

**Kind:** class · **Package:** zombie.inventory.types

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.inventory.InventoryItem
- zombie.inventory.types.Literature

## Fields

### public boolean alreadyRead

### public String requireInHandOrInventory

### public String useOnConsume

## Constructors

### public Literature(String module,
String name,
String itemType,
String texName)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `String` `texName`

### public Literature(String module,
String name,
String itemType,
Item item)

**Parameters:**
- `String` `module`
- `String` `name`
- `String` `itemType`
- `Item` `item`

## Methods

### public boolean IsLiterature()

**Returns:** `boolean`

### public String getCategory()

**Returns:** `String`

### public void update()

**Returns:** `void`

### public boolean finishupdate()

**Returns:** `boolean`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean net)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `net`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public float getBoredomChange()

**Returns:** `float`

### public float getUnhappyChange()

**Returns:** `float`

### public float getStressChange()

**Returns:** `float`

### public int getNumberOfPages()

**Returns:** `int`

### public void setNumberOfPages(int numberOfPages)

**Parameters:**
- `int` `numberOfPages`

**Returns:** `void`

### public String getBookName()

**Returns:** `String`

### public void setBookName(String bookName)

**Parameters:**
- `String` `bookName`

**Returns:** `void`

### public int getLvlSkillTrained()

**Returns:** `int`

### public void setLvlSkillTrained(int lvlSkillTrained)

**Parameters:**
- `int` `lvlSkillTrained`

**Returns:** `void`

### public int getNumLevelsTrained()

**Returns:** `int`

### public void setNumLevelsTrained(int numLevelsTrained)

**Parameters:**
- `int` `numLevelsTrained`

**Returns:** `void`

### public int getMaxLevelTrained()

**Returns:** `int`

### public String getSkillTrained()

**Returns:** `String`

### public void setSkillTrained(String skillTrained)

**Parameters:**
- `String` `skillTrained`

**Returns:** `void`

### public int getAlreadyReadPages()

**Returns:** `int`

### public void setAlreadyReadPages(int alreadyReadPages)

**Parameters:**
- `int` `alreadyReadPages`

**Returns:** `void`

### public boolean canBeWrite()

**Returns:** `boolean`

### public void setCanBeWrite(boolean canBeWrite)

**Parameters:**
- `boolean` `canBeWrite`

**Returns:** `void`

### public HashMap<Integer,String> getCustomPages()

**Returns:** `HashMap<Integer,String>`

### public void setCustomPages(HashMap<Integer,String> customPages)

**Parameters:**
- `HashMap<Integer,String>` `customPages`

**Returns:** `void`

### public void addPage(Integer index,
String text)

**Parameters:**
- `Integer` `index`
- `String` `text`

**Returns:** `void`

### public String seePage(Integer index)

**Parameters:**
- `Integer` `index`

**Returns:** `String`

### public boolean isEmptyPages()

**Returns:** `boolean`

### public String getLockedBy()

**Returns:** `String`

### public void setLockedBy(String lockedBy)

**Parameters:**
- `String` `lockedBy`

**Returns:** `void`

### public int getPageToWrite()

**Returns:** `int`

### public void setPageToWrite(int pageToWrite)

**Parameters:**
- `int` `pageToWrite`

**Returns:** `void`

### public List<String> getLearnedRecipes()

**Returns:** `List<String>`

### public void setLearnedRecipes(List<String> learnedRecipes)

**Parameters:**
- `List<String>` `learnedRecipes`

**Returns:** `void`

### public String getReadType()

**Returns:** `String`

### public boolean hasRecipe(String recipe)

**Parameters:**
- `String` `recipe`

**Returns:** `boolean`

### public boolean containsKnownRecipe(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `boolean`

### public List<String> getKnownRecipes(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `List<String>`

### public boolean containsCraftRecipe()

**Returns:** `boolean`

### public boolean containsBuildRecipe()

**Returns:** `boolean`

### public boolean containsGrowingSeason()

**Returns:** `boolean`

### public boolean containsCraftOrBuildRecipe()

**Returns:** `boolean`

### public boolean containsMiscRecipe()

**Returns:** `boolean`

### public List<String> getKnownMiscRecipes(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `List<String>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\inventory\types\Literature.html`*
