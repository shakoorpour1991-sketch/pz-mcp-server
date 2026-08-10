---
title: zombie.core.SurvivalGuideEntry
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core
---

# zombie.core.SurvivalGuideEntry

`public class SurvivalGuideEntry extends Object`

**Kind:** class · **Package:** zombie.core

## Inheritance
- java.lang.Object
- zombie.core.SurvivalGuideEntry

## Fields

### public static final SurvivalGuideEntry MOVEMENT

### public static final SurvivalGuideEntry MOVEMENT_WALKING_RUNNING

### public static final SurvivalGuideEntry MOVEMENT_CLIMBING

### public static final SurvivalGuideEntry MOVEMENT_VAULTING

### public static final SurvivalGuideEntry MOVEMENT_AIMING

### public static final SurvivalGuideEntry MOVEMENT_STRAFING

### public static final SurvivalGuideEntry MOVEMENT_SNEAK_FENCE

### public static final SurvivalGuideEntry INVENTORY

### public static final SurvivalGuideEntry INVENTORY_BACKPACKS

### public static final SurvivalGuideEntry INVENTORY_DOUBLE_CLICK

### public static final SurvivalGuideEntry INVENTORY_WEIGHT

### public static final SurvivalGuideEntry INTERACTABLE

### public static final SurvivalGuideEntry RIGHT_CLICK_INTERACT

### public static final SurvivalGuideEntry DOORS

### public static final SurvivalGuideEntry WINDOWS

### public static final SurvivalGuideEntry CURTAINS

### public static final SurvivalGuideEntry LIGHTS

### public static final SurvivalGuideEntry MAP

### public static final SurvivalGuideEntry TELEVISION

### public static final SurvivalGuideEntry BAD_GASES

### public static final SurvivalGuideEntry COMBAT

### public static final SurvivalGuideEntry COMBAT_EQUIP_PRIMARY

### public static final SurvivalGuideEntry COMBAT_MELEE_ATTACK

### public static final SurvivalGuideEntry COMBAT_SHOVE

### public static final SurvivalGuideEntry STEALTH_KILL

### public static final SurvivalGuideEntry COMBAT_SHOOTING

### public static final SurvivalGuideEntry RELOAD

### public static final SurvivalGuideEntry ZOMBIE_ATTACKS

### public static final SurvivalGuideEntry SHOUTING

### public static final SurvivalGuideEntry HOTBAR

### public static final SurvivalGuideEntry FENCE_DEFENSE

### public static final SurvivalGuideEntry FOOD_AND_WATER

### public static final SurvivalGuideEntry OPEN_CANS

### public static final SurvivalGuideEntry FOOD_PREPARATION

### public static final SurvivalGuideEntry COOKING

### public static final SurvivalGuideEntry LIQUID

### public static final SurvivalGuideEntry TREAT_WATER

### public static final SurvivalGuideEntry CHARACTER

### public static final SurvivalGuideEntry MOODLES

### public static final SurvivalGuideEntry EATING_DRINKING

### public static final SurvivalGuideEntry FIRST_AID

### public static final SurvivalGuideEntry REST

### public static final SurvivalGuideEntry EXERCISE

### public static final SurvivalGuideEntry SKILL_BOOKS

### public static final SurvivalGuideEntry BAD_SMELLS

### public static final SurvivalGuideEntry CRAFTING

### public static final SurvivalGuideEntry CRAFTING_MENU

### public static final SurvivalGuideEntry CRAFTING_INVENTORY

### public static final SurvivalGuideEntry CRAFT_ON_SURFACE

### public static final SurvivalGuideEntry SHEET_ROPES

### public static final SurvivalGuideEntry BUILD_MENU

### public static final SurvivalGuideEntry BARRICADES

### public static final SurvivalGuideEntry BUILD_WALLS

### public static final SurvivalGuideEntry CRAFTING_STATION

### public static final SurvivalGuideEntry VEHICLES

### public static final SurvivalGuideEntry START_VEHICLE

### public static final SurvivalGuideEntry VEHICLE_RADIAL_MENU

### public static final SurvivalGuideEntry GAS_REFILL

### public static final SurvivalGuideEntry MECHANICS_MENU

### public static final SurvivalGuideEntry TRAILERS

### public static final SurvivalGuideEntry VEHICLE_STORAGE

### public static final SurvivalGuideEntry WEATHER

### public static final SurvivalGuideEntry SEASONS_AND_WEATHER

### public static final SurvivalGuideEntry TEMPERATURE

### public static final SurvivalGuideEntry FORAGING_MINING

### public static final SurvivalGuideEntry FORAGING

### public static final SurvivalGuideEntry MINING

### public static final SurvivalGuideEntry FARMING

### public static final SurvivalGuideEntry OPEN_SEEDS

### public static final SurvivalGuideEntry DIG_FURROW

### public static final SurvivalGuideEntry SOW_SEEDS

### public static final SurvivalGuideEntry HARVESTING

### public static final SurvivalGuideEntry RANCHING

### public static final SurvivalGuideEntry ANIMAL_ZONE

### public static final SurvivalGuideEntry ANIMAL_MENU

### public static final SurvivalGuideEntry ANIMAL_UPKEEP

### public static final SurvivalGuideEntry ANIMAL_STRESS

### public static final SurvivalGuideEntry ANIMAL_ROPE

### public static final SurvivalGuideEntry ANIMAL_HUTCH

### public static final SurvivalGuideEntry BUTCHERING

### public static final SurvivalGuideEntry PETTING

### public static final SurvivalGuideEntry FISHING

### public static final SurvivalGuideEntry FISHING_ZONE

### public static final SurvivalGuideEntry ADD_BAIT

### public static final SurvivalGuideEntry CAST_AND_CATCH

### public static final SurvivalGuideEntry TRAPPING

### public static final SurvivalGuideEntry CLEANING

### public static final SurvivalGuideEntry BURN_CORPSES

### public static final SurvivalGuideEntry CLEANING_AREA

### public static final SurvivalGuideEntry CLEAN_SELF

### public static final SurvivalGuideEntry LAUNDRY

### public static final SurvivalGuideEntry MULTIPLAYER

### public static final SurvivalGuideEntry ACTIVATE_PVP

### public static final SurvivalGuideEntry FACTION_MENU

### public static final SurvivalGuideEntry MULTIPLAYER_CHAT

### public static final SurvivalGuideEntry MEDICAL_CHECK

## Methods

### public static SurvivalGuideEntry get(ResourceLocation id)

**Parameters:**
- `ResourceLocation` `id`

**Returns:** `SurvivalGuideEntry`

### public static List<SurvivalGuideEntry> getAll()

**Returns:** `List<SurvivalGuideEntry>`

### public String getTitle()

**Returns:** `String`

### public String getDescription()

**Returns:** `String`

### public String getThumbnail()

**Returns:** `String`

### public String getVideo()

**Returns:** `String`

### public String getSubCategory()

**Returns:** `String`

### public List<String> getKeys()

**Returns:** `List<String>`

### public List<String> getJoypadKeys()

**Returns:** `List<String>`

### public String toString()

**Returns:** `String`

### public static SurvivalGuideEntry register(String id,
String subCategory,
List<String> keys,
List<String> joypadKeys)

**Parameters:**
- `String` `id`
- `String` `subCategory`
- `List<String>` `keys`
- `List<String>` `joypadKeys`

**Returns:** `SurvivalGuideEntry`

### public String getCategoryImage()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\SurvivalGuideEntry.html`*
