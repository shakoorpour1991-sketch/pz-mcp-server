---
title: "Build 42 Cooking/Nutrition System Research"
build: "42.20"
source: "Project Zomboid Build 42 (v42.20.0) game scripts"
tags: [pz, modding, build42, cooking, nutrition]
---

# Build 42 Cooking/Nutrition System Research

> Source: Project Zomboid Build 42 (v42.20.0)
> Generated from game scripts in `media/scripts/generated/` and `media/lua/`

---

## 1. Core Recipe Files

| File | Path | Purpose |
|------|------|---------|
| `recipes_cooking.txt` | `generated/recipes/` | Main cooking recipes (1188 lines) |
| `recipes_baking.txt` | `generated/recipes/` | Baking, pastry, bread, dough (538 lines) |
| `recipes_cannedFood.txt` | `generated/recipes/` | Opening canned foods (205 lines) |
| `recipes_jarring.txt` | `generated/recipes/` | Jarring/preserving vegetables (72 lines) |
| `evolvedrecipes.txt` | `generated/` | Evolved/sandwich-style recipes (714 lines) |
| `recipes_camping.txt` | `generated/recipes/` | Camping/tent crafting |
| `recipes_fluids.txt` | `generated/recipes/` | Opening beverages (beer, wine, cans) |
| `food.txt` | `generated/items/` | All food item definitions (15525 lines, ~1425 items) |
| `entity_campfire.txt` | `generated/entities/outdoors/` | Campfire building |

---

## 2. Food Item Nutrition Properties

Every food item in `food.txt` uses these fields:

### Core Nutrition

```lua
item Potato
{
    HungerChange = -18.0,       -- Hunger satiation (higher = fills more)
    Calories = 70.0,            -- Energy content
    Carbohydrates = 15.0,       -- Carbs in grams
    Lipids = 0.15,              -- Fat in grams
    Proteins = 3.0,             -- Protein in grams
    ThirstChange = -7.0,        -- Thirst reduction
    BoredomChange = 0,          -- Boredom effect (negative = interesting)
    UnhappyChange = 5,          -- Unhappiness (positive = unhappy)
}
```

### Freshness & Spoilage

```lua
DaysFresh = 28,          -- Days before going stale
DaysTotallyRotten = 280, -- Days before completely rotten
```

Common patterns:
- **Fresh vegetables**: DaysFresh 2-7, DaysTotallyRotten 4-14
- **Potatoes**: DaysFresh 28, DaysTotallyRotten 280 (long shelf life)
- **Canned goods (jars)**: DaysFresh 30, DaysTotallyRotten 60
- **Meat**: DaysFresh 2-3, DaysTotallyRotten 4-6
- **Bread**: DaysFresh 3, DaysTotallyRotten 6
- **Cheese**: DaysFresh 14, DaysTotallyRotten 20
- **Eggs**: DaysFresh 14, DaysTotallyRotten 21

### Cooking-Related Properties

```lua
IsCookable = true,           -- Can be cooked/heated
MinutesToCook = 10,          -- Minutes to cook (from raw to cooked)
MinutesToBurn = 30,          -- Minutes from cooked to burned
ReplaceOnCooked = Base.Toast,-- Item to replace with when cooked (for bread→toast)
GoodHot = true,              -- Bonus happiness when eaten hot
BadCold = true,              -- Penalty when eaten cold
BadInMicrowave = true,       -- Cannot go in microwave (metal pots etc.)
DangerousUncooked = true,    -- Causes food poisoning if raw
CookingSound = FryingFood,   -- Sound played while cooking
RemoveUnhappinessWhenCooked = true, -- Cooking removes unhappiness
```

### Food Type Tagging

```lua
FoodType = Vegetables,  -- Used for evolved recipe matching
-- Types seen: Vegetables, Bacon, Beef, Poultry, Fish, Egg, Cheese,
--             Bread, Rice, Pasta, Fruit, Berry, Chocolate, Oil,
--             Stock, Thickener, Spice, NoExplicit, Seed
```

### Nutritional Values for Common Food Groups

| Food Item | HungerChange | Calories | Carbs(g) | Lipids(g) | Proteins(g) |
|-----------|:---:|:---:|:---:|:---:|:---:|
| **Vegetables** | | | | | |
| Potato | -18 | 70 | 15 | 0.15 | 3 |
| Cabbage | -24 | 180 | 41 | 0.7 | 9 |
| Tomato | -12 | 14 | 3.5 | 0.2 | 1.3 |
| Carrots | -18 | 33 | 6.6 | 0.3 | 1.5 |
| Broccoli | -10 | 9 | 0.5 | 0.1 | 0.7 |
| Onion | -18 | 36 | 6 | 0.1 | 1.2 |
| **Grains** | | | | | |
| Rice (raw pkg 2.0) | -60 | 2880 | 648 | 0 | 72 |
| Pasta (raw pkg 2.0) | -60 | 2880 | 648 | 0 | 72 |
| Flour2 (pkg 2.0) | -60 | 50 | 21 | 0 | 5 |
| Bread (loaf) | -30 | 532 | 99 | 6.66 | 17.7 |
| **Proteins** | | | | | |
| Chicken | -33 | 230 | 0 | 9 | 38 |
| Chicken Fillet | -30 | 230 | 0 | 9 | 38 |
| Steak | -33 | 400 | 0 | 18 | 42 |
| MincedMeat | -40 | 300 | 0 | 30 | 46 |
| Bacon | -12 | 160 | 0 | 14 | 10 |
| Egg | -7 | 63 | 0.32 | 4.18 | 5.55 |
| **Dairy** | | | | | |
| Butter (0.3kg) | -24 | 3200 | 0 | 352 | 0 |
| Cheese | -15 | 113 | 0.87 | 9.33 | 6.4 |
| **Fats/Oils** | | | | | |
| OilVegetable | -30 | 2120 | 0 | 130 | 0 |
| OilOlive | -30 | 2480 | 0 | 150 | 0 |
| PeanutButter | -25 | 2660 | 128 | 224 | 84 |
| Mayonnaise | -30 | 3000 | 0 | 330 | 0 |
| **Prepared Meals** | | | | | |
| Salad | -60 | N/A | N/A | N/A | N/A |
| PanFriedVeg (forged) | -10 | 516 | 36 | 41.5 | 4.8 |
| SugarBeetPulpPot | -45 | 216 | 27 | 0 | 36 |
| RicePan (cooked) | -10 | 720 | 0 | 48 | 78 |

**Note**: HungerChange stacks with portion count. A salad at -60 hunger will nearly fill a character. Raw bulk goods (rice, pasta) are high-calorie but must be cooked into recipes first.

---

## 3. Cooking Appliances & Heat Sources

### 3.1 Built-in Appliances (IsoGameObjects, not items)

Cooking is performed on world-tile objects, NOT handheld items. The game uses `appliances_cooking_*` sprite overlays:

| Appliance | Type | Use |
|-----------|------|-----|
| **Electric Stove/Oven** | Furniture tile | Primary indoor cooking, uses electricity |
| **Microwave** | Furniture tile | Quick heating, marked with `cookablemicrowave` tag on vessels |
| **Propane BBQ** | Furniture tile | Outdoor cooking, runs on propane tanks |
| **Campfire** | Built entity | Outdoor cooking, fuel-based (wood, charcoal) |
| **Cooking Pit** | Built entity | Advanced stone campfire, requires Masonry 2 |

Key notes from `ApplianceOverlays.lua`:
```
appliances_cooking_01_* → mapping to stove/oven sprites
```

### 3.2 Tag-Based Vessel Compatibility

Vessels carry tags controlling which appliances accept them:

| Tag | Meaning |
|-----|---------|
| `base:cookable` | Can be placed in stove/oven |
| `base:cookablemicrowave` | Can be placed in microwave |
| `base:hasmetal` | Rejected by microwave (BadInMicrowave=true) |
| `base:coffeemaker` | Compatible with coffee maker |
| `base:fitstoaster` | Can go in toaster (bread, biscuits) |

### 3.3 Campfire System (`camping_fuel.lua`)

**Fuel values** (hours of burn time per item):
| Item | Hours |
|------|-------|
| Log | 6.0 |
| Plank | 2.0 |
| TreeBranch | 1.0 |
| Charcoal | 0.5 |
| WoodenStick | 0.25 |
| Twigs | 0.25 |
| RippedSheets | ~0.083 (5 min) |
| ToiletPaper | 0.2 |
| BBQStarterFluid | ~0.25 (15 min) |

**Mechanics**:
- `IsFireFuel` tag + weight-based procedural fuel calculation (weight × 2/3 default)
- `IsFireTinder` tag for fire-starting materials
- `FireFuelRatio` custom multiplier override on items

---

## 4. Cooking Skill

Skill level is referenced in recipes via:

```lua
AutoLearnAny = Cooking:6,  -- Auto-learn at Cooking level 6
xpAward = Cooking:3,       -- XP awarded for completing recipe
```

Key learning thresholds (from recipe data):
| Skill Level | Unlocks |
|:---:|---|
| 0 | Basic mixing, bowl-making, slicing |
| 6 | MakeCabbageRolls, MakePizza, FriedShrimp, FriedOnionRings, Guacamole, Sushi, Maki, Onigiri |
| 7 | Baking: CakeBatter, PieDough, BreadDough, BaguetteDough, Biscuits, Cookies, Muffins |
| 8 | Jarring/Preserving (MakeJar) |

**XP Awards**: Most simple cooking -> Cooking:3. Complex recipes -> Cooking:10. Cutting whole chicken -> Cooking:20.

---

## 5. Evolved Recipes System

The evolved recipe system (`evolvedrecipes.txt`) creates multi-ingredient "sandwich-style" foods by adding items to a base container.

### 5.1 Templates

| Template | Output Examples | Base Container | Max Items |
|----------|----------------|----------------|:---------:|
| Soup | PotOfSoup, BucketOfSoup | Pot, Bucket | 4-6 |
| Stew | PotOfStew, BucketOfStew | Pot, Bucket | 4-6 |
| Stir fry | PanFriedVegetables | Pan, GridlePan, RoastingPan | 4-6 |
| Sandwich | Sandwich, BaguetteSandwich | BreadSlices, Baguette | 4 |
| Burger | BurgerRecipe | BunsHamburger_single, Burger | 2-4 |
| Salad | Salad, SaladClay | Bowl, ClayBowl | 6 |
| FruitSalad | FruitSalad, FruitSaladClay | Bowl, ClayBowl | 6 |
| Pie | PieWholeRaw | PiePrep | 4 |
| Cake | CakeRaw | CakePrep | 4 |
| Pizza | PizzaRecipe | PizzaRecipe, PizzaWhole | 0-6 |
| Pasta | PastaPan, PastaPot | WaterSaucepanPasta, WaterPotPasta | 4-5 |
| Rice | RicePan, RicePot | WaterSaucepanRice, WaterPotRice | 4-5 |
| HotDrink | HotDrink, variants | Mug, Teacup, various cups | 3 |
| Taco | TacoRecipe | TacoShell, Taco | 2-5 |
| Burrito | BurritoRecipe | Tortilla, Burrito | 0-5 |
| Omelette | OmeletteRecipe | OmeletteRecipe (pan-based) | 3 |
| Pancakes | PancakesRecipe | Pancakes | 3 |
| Waffles | WafflesRecipe | Waffles | 3 |
| Muffin | Muffin recipe | BakingTray_Muffin | 1 |
| Hotdog | Hotdog | Hotdog | 2 |
| Toast | Toast | Toast | 3 |
| Oatmeal | Oatmeal | Oatmeal | 3 |
| Bread | BreadDough | BreadDough | 2 |
| ConeIcecream | ConeIcecreamToppings | ConeIcecream | 3 |
| Bagel | Bagel variants | BagelPlain/Poppy/Sesame | 3 |

### 5.2 Evolved Recipe Properties

```lua
evolvedrecipe Soup
{
    BaseItem = Base.Pot,              -- Container item to add ingredients to
    MaxItems = 6,                      -- Max ingredient slots
    ResultItem = Base.PotOfSoupRecipe, -- Output item
    Cookable = true,                   -- Must be cooked after assembly
    MinimumWater = 0.9,                -- Minimum water required in container
    Name = "Prepare Soup",             -- UI name
    Template = Soup,                   -- Template (determines ingredient matching)
    CanAddSpicesEmpty = true,          -- Can add spices even with 0 ingredients
    AddIngredientIfCooked = true,      -- Only add if ingredient is cooked
}
```

### 5.3 Ingredient Matching via `EvolvedRecipe` field

Food items declare which evolved recipes they fit in, with a "weight" value:

```lua
EvolvedRecipe = Pizza:12;Omelette:6;Soup:12;Stew:12;Pie:12;Stir fry:12;
                Sandwich:6;Burger:6;Hotdog:6;Salad:6;Rice:12;Pasta:12;
                Taco:6;Burrito:6,
```

Format: `RecipeName:Weight` — higher weight = more contribution to the dish.

Some items have conditional matching:
```lua
EvolvedRecipe = Sandwich:4|Cooked;Burger:4|Cooked  -- Only if cooked
EvolvedRecipe = Salad:9|Cooked  -- Must be cooked first
```

### 5.4 `Spice` Flag Items

Items with `Spice = true` (like Mayonnaise, Butter, Oil, Salt, Pepper, Ketchup, BaconBits) are considered condiments — they contribute to evolved recipes even in small quantities and don't count against MaxItems in the same way.

---

## 6. Food Decay / Perish System

### 6.1 Freshness Fields

```lua
DaysFresh = 3,             -- Days until "Fresh" -> "Stale"
DaysTotallyRotten = 6,     -- Days until completely rotten/inedible
```

### 6.2 Preservation

| Method | How | Effect |
|--------|-----|--------|
| **Refrigeration** | Fridge (world object) | Slows decay rate significantly |
| **Freezing** | Freezer | Halts decay entirely |
| **Canning (Jars)** | `MakeJar` recipe | DaysFresh = 30, needs Cooking 8 |
| **Dried Food** | `driedfood` tag | Non-perishable (no DaysFresh needed) |
| **Pickling** | Vinegar + salt + water + jar | Preserves vegetables |

### 6.3 Food State Flags

```lua
AllowRottenItem  -- Recipe can accept rotten ingredients
AllowFrozenItem  -- Recipe can accept frozen ingredients
InheritFoodAge   -- Output inherits the fresh/rotten state from input
InheritFood      -- Output inherits the combined food state
```

### 6.4 Canned Food Opening

Two methods:
1. **Can opener** (`canopener` tag) — faster, tool degrades
2. **Sharp knife** (`sharpknife` tag) — slower, tool dulls

Cans open into `*_Open` variants (e.g., `TinnedBeans` → `OpenBeans`).
Mystery cans (Unlabeled/Dented) have randomized contents via `RecipeCodeOnCreate`.

---

## 7. Cooking Process

### 7.1 Timing

```lua
timedAction = Making,          -- Animation type
time = 80,                     -- Craft time in "units" (roughly 1 = 1 second real-time)
```

Common timedActions:
| Action | Used for |
|--------|----------|
| MixingBowl | Combining ingredients in bowl |
| Making | Simple hand crafting |
| SliceMeat | Cutting meat |
| SliceFood_Surface | Slicing on a surface |
| OpenTinCan | Opening canned food |
| OpenTinCanWithKnife | Opening cans with knife |
| BuildCampfire | Building a campfire |

### 7.2 Cooking & Burning

For `IsCookable = true` items:

```lua
MinutesToCook = 10,   -- Cooked after this many in-game minutes
MinutesToBurn = 30,   -- Burned after this many beyond cooking time
```

**Note**: Cooking time is per-item on the cooking appliance. Items don't track individual cook time in most cases — the appliance applies heat.

### 7.3 Temperature Flags

```lua
GoodHot = true,    -- +UnhappyChange (mood bonus) when eaten hot
BadCold = true,    -- -UnhappyChange (mood penalty) when eaten cold
```

### 7.4 Food Poisoning

`DangerousUncooked = true` — consuming raw causes severe food poisoning.
Common on: meat, poultry, wild eggs, bacon, minced meat, TV dinners.

---

## 8. Kitchen Utensils & Tools

### Tool Tags in Recipes

| Tag | Items | Purpose |
|-----|-------|---------|
| `sharpknife` | Kitchen knife, Hunting knife | Slicing, butchery |
| `dullknife` | Butter knife, dull blades | Light slicing |
| `meatcleaver` | Cleaver | Heavy butchery |
| `saw` | Hand saw | Cutting pumpkins/melons |
| `crudesaw` | Crude stone saw | Primitive cutting |
| `hammer` | Hammer, Sledgehammer | Smashing |
| `canopener` | Can opener | Opening cans |
| `rollingpin` | Rolling pin | Dough rolling |
| `mixingutensil` | Fork, Spoon, Whisk | Mixing |
| `bowl` | Bowl, ClayBowl | Mixing container |
| `spoon` | Spoon | Scooping |
| `bottleopener` | Bottle opener | Opening bottles |
| `corkscrew` | Corkscrew | Opening wine |
| `pizzacutter` | Pizza cutter | Pizza slicing |
| `fork` | Fork | Mixing alternative |
| `saucepan` | Saucepan | Boiling water/pasta/rice |
| `pot` | Cooking Pot | Soups, stews, bulk cooking |
| `pan` | Frying Pan | Stir-fry, omelettes |
| `griddlepan` | Griddle Pan | Large surface frying |
| `roastingpan` | Roasting Pan | Oven roasting |
| `bakingpan` | Baking Pan | Cakes, pies |
| `bakingtray` | Baking Tray | Cookies |
| `muffintray` | Muffin Tray | Muffins, biscuits |

### Tool Degradation Flags

```lua
MayDegrade          -- Light wear on use
MayDegradeVeryLight -- Very light wear
MayDegradeLight     -- Moderate wear
SharpnessCheck      -- Must be sharp enough to use
IsNotDull           -- Fails if tool is dull
```

---

## 9. Canning / Food Preservation

**Recipe**: `MakeJar` in `recipes_jarring.txt`
- Requires: Sharp knife, Jar, JarLid, vegetables, vinegar, salt, water
- **Cooking Skill**: Auto-learns at **Cooking 8**
- **XP**: Cooking:10 per craft
- Output: Preserved jarred vegetables

Supported vegetables for jarring:
| Item | Quantity per jar |
|------|:----------------:|
| BellPepper | 6 |
| Broccoli | 5 |
| Cabbage | 2 |
| Carrots | 5 |
| Eggplant | 3 |
| Leek | 4 |
| Potato | 3 |
| RedRadish | 15 |
| Tomato | 4 |
| FishRoe | 1 |

**Jarred items**: DaysFresh = 30, DaysTotallyRotten = 60 (vs. 2-28 days fresh)

---

## 10. Recipe Tags & Categories

### Common Tags
```lua
Tags = InHandCraft;Cooking;CanBeDoneInDark,
```

| Tag | Meaning |
|-----|---------|
| `InHandCraft` | Can be crafted from inventory (no surface needed) |
| `AnySurfaceCraft` | Can be crafted on any surface |
| `Cooking` | Belongs to Cooking category |
| `CanBeDoneInDark` | Works without light |
| `CanBeDoneFromFloor` | Can pick up floor items during craft |

### Category Field
```lua
category = Cooking,   -- Organizes in crafting UI
-- Other categories seen: Farming, Outdoors, Masonry, Miscellaneous, Butchering
```

---

## 11. Butchering Integration (Build 42)

Cooking overlaps with Butchering via head-slicing and small-animal processing:

- `SliceHead` — Animal head → skull (Cooking XP)
- `ButcherSmallAnimal` — Dead birds, rabbits, rats → meat (Butchering XP)
- `CutChicken` / `CutTurkey` — Whole bird → portions (Cooking:20 XP)
- `SliceFillet` / `HalveFillet` — Fish processing (Butchering XP)

---

## 12. Baking Subsystem

Baking is a cooking sub-category in `recipes_baking.txt`.

### Dough Types
| Dough | Base Recipe | Skills |
|-------|-------------|:------:|
| Bread Dough | Flour + Salt + Yeast + Water | Cooking 7 |
| Baguette Dough | Same as bread + rolling pin | Cooking 7 |
| Pie Dough | Flour + Butter/Lard + Salt + Water | Cooking 7 |
| Cake Batter | Flour + BakingFat + Sugar + Egg + Milk + Yeast | Cooking 7 |
| Cookie variants | Flour + Sugar + BakingFat + Egg + extras | Cooking 7 |
| Muffins | Flour + Sugar + BakingFat + Egg + Milk | Cooking 7 |
| Biscuits | Flour + BakingSoda + BakingFat + Salt | Cooking 7 |

### Baking Process
1. Dough prep (MixingBowl action)
2. Place in baking pan/tray
3. Add evolved recipe ingredients (optional)
4. Cook in oven → transforms into finished item
5. Slice or remove from tray

Example: Cake path:
```
CakeBatter → PlaceCakeInBakingPan → CakePrep → (evolved recipe with ingredients)
→ CakeRaw → Cook in oven → (evolved recipe toppings) → SliceCakeOrPie
```

---

## 13. Modding Reference — Key Script Snippets

### Adding Evolved Recipe Support to a New Item
```lua
EvolvedRecipe = Soup:12;Stew:12;Stir fry:12;Salad:6,
EvolvedRecipeName = MyIngredient,  -- Display name in recipe UI
FoodType = Vegetables,             -- Must match template food type
```

### Adding a New Cooking Appliance
```lua
Tags = base:cookable,         -- For oven/stove
Tags = base:cookablemicrowave, -- For microwave
```

### Custom OnCreate Logic
```lua
OnCreate = RecipeCodeOnCreate.makeJar,
```
Lua functions in `BuildRecipeCode/buildRecipeCode.lua` or inline handlers.

---

## 14. Key Observations for Modders

1. **Evolved Recipe Weights** matter — higher weight (Tomato:12 vs Radish:3) means the ingredient contributes more to the final dish's stats.
2. **FoodType** is used for evolved recipe template matching — items must share a template-relevant FoodType to contribute.
3. **`Spice = true`** items bypass MaxItems limit in evolved recipes.
4. **`DangerousUncooked = true`** only applies when eating raw — cooking removes the danger flag.
5. **Canned food** uses `RecipeCodeOnCreate.openCan` etc. — the Lua code determines what comes out.
6. **`InheritFoodAge`** on recipe outputs is critical — without it, fresh ingredients make non-spoiling food.
7. **`CantEat = true`** items (raw rice, flour, pasta) must be processed through cooking first.
8. **Fuel system** is procedurally calculated (weight × 0.66) — defining `FireFuelRatio` overrides this.
9. **Cooking Pit** requires Masonry 2 to build (not Cooking skill) — uses stone blocks.
10. **Portioning**: Many recipes output multiple items (Soup → 4+ bowls via Make2Bowls).
