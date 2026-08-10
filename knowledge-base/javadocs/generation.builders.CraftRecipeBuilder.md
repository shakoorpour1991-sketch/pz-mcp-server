---
title: generation.builders.CraftRecipeBuilder
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: generation.builders
---

# generation.builders.CraftRecipeBuilder

`public class CraftRecipeBuilder extends AbstractScriptTypeBuilder`

**Kind:** class · **Package:** generation.builders

## Inheritance
- java.lang.Object
- generation.builders.AbstractPropertyBuilder
- generation.builders.AbstractDynamicOrderPropertyBuilder
- generation.builders.AbstractScriptTypeBuilder
- generation.builders.CraftRecipeBuilder

## Methods

### public static CraftRecipeBuilder withId(CraftRecipeKey craftRecipeKey)

**Parameters:**
- `CraftRecipeKey` `craftRecipeKey`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder category(CraftRecipeCategory... craftRecipeCategorys)

**Parameters:**
- `CraftRecipeCategory...` `craftRecipeCategorys`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder overlayStyle(String string)

**Parameters:**
- `String` `string`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder overlayMapper(RecipeOverlayMapperBuilder... recipeOverlayMapperBuilders)

**Parameters:**
- `RecipeOverlayMapperBuilder...` `recipeOverlayMapperBuilders`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder allowBatchCraft(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder autoLearnAll(PerkNumber... perkNumbers)

**Parameters:**
- `PerkNumber...` `perkNumbers`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder autoLearnAny(PerkNumber... perkNumbers)

**Parameters:**
- `PerkNumber...` `perkNumbers`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder icon(String string)

**Parameters:**
- `String` `string`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder metaRecipe(MetaRecipe metaRecipex)

**Parameters:**
- `MetaRecipe` `metaRecipex`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder needToBeLearn(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder onCreate(String string)

**Parameters:**
- `String` `string`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder onCreate(SerializableMethod.Consumer2<CraftRecipeData,IsoGameCharacter> consumer2)

**Parameters:**
- `SerializableMethod.Consumer2<CraftRecipeData,IsoGameCharacter>` `consumer2`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder onTest(String string)

**Parameters:**
- `String` `string`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder onTest(SerializableMethod.Function<InventoryItem,Boolean> function)

**Parameters:**
- `SerializableMethod.Function<InventoryItem,Boolean>` `function`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder researchAny(PerkFactory.Perk... perks)

**Parameters:**
- `PerkFactory.Perk...` `perks`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder researchSkillLevel(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder skillRequired(PerkNumber... perkNumbers)

**Parameters:**
- `PerkNumber...` `perkNumbers`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder tags(CraftRecipeTag... craftRecipeTags)

**Parameters:**
- `CraftRecipeTag...` `craftRecipeTags`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder tooltip(String string)

**Parameters:**
- `String` `string`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder needTobeLearn(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder time(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder timedAction(TimedActionKey timedActionKey)

**Parameters:**
- `TimedActionKey` `timedActionKey`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder xpAward(PerkNumber... perkNumbers)

**Parameters:**
- `PerkNumber...` `perkNumbers`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder itemMappers(String string,
RecipeMapperBuilder... recipeMapperBuilders)

**Parameters:**
- `String` `string`
- `RecipeMapperBuilder...` `recipeMapperBuilders`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder inputs(RecipeElement... recipeElements)

**Parameters:**
- `RecipeElement...` `recipeElements`

**Returns:** `CraftRecipeBuilder`

### public CraftRecipeBuilder outputs(RecipeElement... recipeElements)

**Parameters:**
- `RecipeElement...` `recipeElements`

**Returns:** `CraftRecipeBuilder`

### public void write(Writer writer,
int int0,
String string)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `String` `string`

**Returns:** `void`

### public static void validateItemMappers(String string,
Writeable.ListProperty<ItemMapper> listProperty0,
Writeable.ListProperty<RecipeElement> listProperty1,
Writeable.ListProperty<RecipeElement> listProperty2)

**Parameters:**
- `String` `string`
- `Writeable.ListProperty<ItemMapper>` `listProperty0`
- `Writeable.ListProperty<RecipeElement>` `listProperty1`
- `Writeable.ListProperty<RecipeElement>` `listProperty2`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\CraftRecipeBuilder.html`*
