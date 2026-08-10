---
title: generation.builders.EntityCraftRecipeBuilder
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: generation.builders
---

# generation.builders.EntityCraftRecipeBuilder

`public class EntityCraftRecipeBuilder extends AbstractDynamicOrderPropertyBuilder implements ComponentBuilder`

**Kind:** class · **Package:** generation.builders

## Inheritance
- java.lang.Object
- generation.builders.AbstractPropertyBuilder
- generation.builders.AbstractDynamicOrderPropertyBuilder
- generation.builders.EntityCraftRecipeBuilder

## Constructors

### public EntityCraftRecipeBuilder()

## Methods

### public String getType()

**Returns:** `String`

### public EntityCraftRecipeBuilder onAddToMenu(String string)

**Parameters:**
- `String` `string`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder category(EntityCategory... entityCategorys)

**Parameters:**
- `EntityCategory...` `entityCategorys`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder allowBatchCraft(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder autoLearnAll(PerkNumber... perkNumbers)

**Parameters:**
- `PerkNumber...` `perkNumbers`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder autoLearnAny(PerkNumber... perkNumbers)

**Parameters:**
- `PerkNumber...` `perkNumbers`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder icon(String string)

**Parameters:**
- `String` `string`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder metaRecipe(MetaRecipe metaRecipex)

**Parameters:**
- `MetaRecipe` `metaRecipex`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder needToBeLearn(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder onCreate(String string)

**Parameters:**
- `String` `string`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder onTest(String string)

**Parameters:**
- `String` `string`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder researchAny(PerkFactory.Perk... perks)

**Parameters:**
- `PerkFactory.Perk...` `perks`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder researchSkillLevel(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder skillRequired(PerkNumber... perkNumbers)

**Parameters:**
- `PerkNumber...` `perkNumbers`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder tags(CraftRecipeTag... craftRecipeTags)

**Parameters:**
- `CraftRecipeTag...` `craftRecipeTags`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder tooltip(String string)

**Parameters:**
- `String` `string`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder needTobeLearn(boolean boolean0)

**Parameters:**
- `boolean` `boolean0`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder time(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder timedAction(TimedActionKey timedActionKey)

**Parameters:**
- `TimedActionKey` `timedActionKey`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder xpAward(PerkNumber... perkNumbers)

**Parameters:**
- `PerkNumber...` `perkNumbers`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder itemMappers(String string,
RecipeMapperBuilder... recipeMapperBuilders)

**Parameters:**
- `String` `string`
- `RecipeMapperBuilder...` `recipeMapperBuilders`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder inputs(RecipeElement... recipeElements)

**Parameters:**
- `RecipeElement...` `recipeElements`

**Returns:** `EntityCraftRecipeBuilder`

### public EntityCraftRecipeBuilder outputs(RecipeElement... recipeElements)

**Parameters:**
- `RecipeElement...` `recipeElements`

**Returns:** `EntityCraftRecipeBuilder`

### public void write(Writer writer,
int int0,
String string)
throws IOException

**Parameters:**
- `Writer` `writer`
- `int` `int0`
- `String` `string`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\generation\builders\EntityCraftRecipeBuilder.html`*
