<https://pzwiki.net/wiki/Mods>
Title: Mods - PZwiki

URL Source: https://pzwiki.net/wiki/Mods

Published Time: Sat, 08 Aug 2026 11:28:10 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# Mods

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)



This page was last updated for an _older_ version of the current build (42.14.0).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

_This article is about created mods.For the details about creating mods, see Modding._
**Mods** are player created customized content. _Mod_ stands for _modification_, as it alters the original game content. Guidelines for creating your own Project Zomboid modded content can be found on the modding page. If you are not interested in making your own mods, player created mods can be found on the Official Project Zomboid Forum - Mods category or in the Spiffo's Workshop on Steam.

## Installing mods

### Steam Workshop

For this method, you must have purchased the game on Steam.

1.   Open Steam.
2.   Open your games library.
3.   Click on Project Zomboid.
4.   Click on the Workshop button on the game page.
5.   Select a mod, open mod page and click "Subscribe".
6.   If the game is running, turn it off. Mods can be downloaded with the game running but if you don't find the mod in the mod manager, then restart the game.
7.   Wait for the mod to install.
8.   You can now launch the game and enable the mod in the mod manager.



Downloaded mods are stored inside the workshop folder.

### Manual local installation

You can manually install mods by putting them inside the `mods` folder of the cache folder. Alternatively the `workshop` folder is used for mod development and required extra folders for a mod to be recognized there, see the mod structure page for more details on that.

To retrieve mods manually you can either:

*   Ask someone to send you the files of the mod. This means someone needs to own the game on Steam, locate the mod files in their workshop folder and send you the mod folder.
*   Use SteamCMD which needs a lot more setup but allows you to download mods without needing to own the game.

## Using mods

Mods are created by the community and can be version specific. Old mods for older versions of the game are likely to not work with new versions. If you are having problems when using mods, refer to the mod problem solving article.

### Mod manager



The mod manager is the in-game interface to manage mods which allows you to enable and disable mods, make presets, favorite them, and more. It can be accessed from the main menu by clicking "Mods". The screenshot shown here is of the mod manager with various bit informations indicated with the red numbers, which are as follows:

1.   Mod list with the mod icon, name and if it is enabled in green or not.
2.   The mod informations as defined inside the mod.info file of the mod. This lists the status (if enabled), version, author, homepage, mod link, mod ID, Workshop ID, the minimum and maximum game version, dependencies, incompatibilities.
3.   The mod preview.
4.   The mod description as defined inside the mod.info file of the mod.
5.   Search bar to easily find mods in the manager.
6.   Filters by mod type (map, vehicle, features, modpack).
7.   Activate preset of enabled mods, you can save your current mod activated list, delete it, or share your mod preset by copying it to the clipboard or adding one you copied and want to import.
8.   Map and mod order.
9.   Confirmation to load the current selection, which will reload the lua.

When launching a new save, it will use the currently active mod list.

### Changing mods in an existing world

You can change the currently active mods in a save but make sure to backup your save beforehand. To do so:

1.   Click the "Load" button in the main menu, which will list your current saves.
2.   Select the save, and click "More".
3.   Click "Choose Mods".
4.   This opens the mod manager for this save, which you can toggle on or off the mods you want to change.

### Changing mods in the main menu

You can change the currently active mods in the main menu.

Pros:

1.   This mod selection will be the default mod selection for every new game world from now on.
2.   Mods applying animations on animals may have the meatballing issue if the mod is not active when starting the game. (this is why it is sometimes mandatory)
3.   Some mods (mostly ModManager-like mods) need to be loaded in the main menu to apply their effects.

Cons:

1.   With every mod update, there is a risk that the game will not launch properly, if the mod is active in the main menu.
2.   With every game version update, there is a risk that the game will not launch properly for each mod active in the main menu.

To change mods in the main menu:

1.   Click the "Mods" button in the main menu, which will list your available mods.
2.   Select the mods you want to be active at the start of the game.
3.   Click "Accept".



The situation where the game does not launch properly is difficult to handle without serious knowledge of the game. This is why it is advised against activating most mods on main menu unless necessary.

### Setting mods for host



This section may be in need of improvement.

This was copy and pasted from the old Using mods page and not verified or tested. It might need rephrasing or additional information.

Editors are encouraged to add any missing information to the article, while verifying that the article's current content is correct. Edit (Create account)

1.   Open server host settings
2.   Select the item "Steam Workshop" in the menu on the left (If you run the server without Steam, go to step 4)
3.   Select Steam Workshop mods from the drop down list and click on them to add them. To remove - select the mod in the list on the right and click the "Remove" button
4.   Next, select "Mods" from the menu on the left
5.   Select mods from the drop-down list and click on them to add (if you added mods in step 3 - then maybe some mods are already added). To remove - select the mod in the list on the right and click the "Remove" button
6.   (Optional - map mods) - Select "Map" in the menu on the left and set the order for loading the map. Maps are loaded from top to bottom and if the map intersect - map will overwrite intersected zones of the previous maps.
7.   Click save

Ready! Now you can start the host server.

### Mod settings

Some mods can have settings in two different form:

*   Sandbox options - settings which are world specific and which should apply to every players, found in the world creation menu.
*   Mod options - user specific settings independent between players, which can be found in the game settings menu in the section "MODS".

## Commissions

Commissioning mods allows users to bring creative ideas into reality, but like any freelance or contract work, commissioning mods carries certain risks. The best way to reduce those risks is through education, clear communication, and well-documented agreements.

The following guidelines are community recommendations and do not constitute legal advice. Modding communities provide platforms where clients and modders can connect in a safer, moderated environment, with tools to support transparency, written agreements, and secure communication.

The PZ Modding Community has a dedicated commission/request section, geared towards security, transparency, and open communication.

### Writing a commission request

When creating a commission request:

*   **Do your research**: Ask around in the modding community if the mod you are interested in already exists and their advice on the project, if it is doable, and at a reasonable price.
*   **Be descriptive**: Clearly explain features, functionality, and scope.
*   **Provide references**: Include images, examples, or inspirations when possible.
*   **Clarify ownership**: State who will publish the mod if this is important to you. Follow-up support (updates) is usually not guaranteed outside of the agreed/initial mod.
*   **Set a budget**: Mention your budget or note if it is negotiable.

### Agreements and transactions

*   **Stage the work**: Break projects into phases (agreement, draft, delivery, payment). Touch base often to make sure everything is going as planned. This avoids misunderstandings and surprises.
*   **Confirm in writing**: Use permanent written records for prices, timelines, and deliverables.
*   **Use milestones**: For large projects, consider split payments, initial deposits, continued payments at mid-points, and upon completion.

### Safety recommendations

*   **Ask for a portfolio**. A modder capable of making Zomboid mods should have something related to Zomboid to show for it.
*   **Do not pay before proof** of work is provided.
*   **Do not deliver** the full mod **before payment** is received.
*   **Share or archive copies** through email, cloud storage, or workshop pages.
*   **Keep all agreements documented** in case of disputes.
*   **Ask around** about the modder you are about to hire. Some modders are well known in the community.

### Red flags

Exercise caution if a prospective client or modder:

*   Has **no history or visible presence** in the community.
*   **Refuses to provide a portfolio**, references, or past work.
*   **Insists** on private communication only. They are trying to avoid public scrutiny.
*   **Refuses to link** a relevant game profile or **verifiable identity**.

### Payment and trust

Use secure, well-documented payment services. Avoid sending money as a “gift” or “donation,” since this may limit refund options in cases of fraud. A well-known way to defraud is to rely on PayPal's "friends and family" fund transfer. Which does not carry refund protections.

Upfront payment should not be the default and is generally discouraged. Modders should generally expect upfront payment when:

*   They are proven and trusted in the community, with a very solid portfolio, past commissions, or a good reputation in the community.
*   The project is particularly large or time-intensive.

For most projects, milestone-based payments after work is demonstrated are safest.

### Final tips

Communicate expectations clearly and professionally. Be conservative when money is involved—better to walk away than risk a scam. Transparency protects both the commissioner and the modder, and helps maintain a healthy community.

## See also

*   Modding – explains the process of creating mods.
*   Resolving problems with mods – what to do if mods do not work well or break the game.
*   Uploading mods – how to upload mods to the Steam workshop.
*   Testing mods in multiplayer – guide about setting up the mod to work on the server.
*   Spiffo's Workshop – the Steam Workshop for Project Zomboid mods.
*   Completed mods – the forum section to share completed mods.
*   Work-in-Progress mods – the forum section to share Work-in-Progress mods.

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=Mods&oldid=1391047"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 Installing modsToggle Installing mods subsection
    *   1.1 Steam Workshop

    *   1.2 Manual local installation

*   2 Using modsToggle Using mods subsection
    *   2.1 Mod manager

    *   2.2 Changing mods in an existing world

    *   2.3 Changing mods in the main menu

    *   2.4 Setting mods for host

    *   2.5 Mod settings

*   3 CommissionsToggle Commissions subsection
    *   3.1 Writing a commission request

    *   3.2 Agreements and transactions

    *   3.3 Safety recommendations

    *   3.4 Red flags

    *   3.5 Payment and trust

    *   3.6 Final tips

*   4 See also

*   5 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.14.0
*   Pages with sections to fill
*   Articles in need of improvement

Last modified

 This page was last edited on 23 May 2026, at 03:17.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Mods From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Mods>

<https://pzwiki.net/wiki/Registries>
Title: Registries - PZwiki

URL Source: https://pzwiki.net/wiki/Registries

Published Time: Sat, 08 Aug 2026 11:28:16 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# Registries

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)



This page was last updated for an _older_ version of the current build (42.15.3).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

_This article is about the parameter used in item scripts "Item (scripts)") to assign tags to items..For a list of tags in the base game, see item tag._
**Registries** are a new system introduced in Build 42.13.0 to manage various script elements in a more structured way. They are used to define the following _identifiers_:

*   CharacterTrait
*   CharacterProfession
*   ItemTag
*   Brochure
*   Flier
*   ItemBodyLocation
*   ItemType
*   MoodleType
*   WeaponCategory
*   Newspaper
*   AmmoType

Adding these identifiers is done in a file that should be located in `media/registries.lua` within a mod structure. This Lua file is loaded#Load_order "Lua (API)") before all Lua files and scripts.

📁 media
    📁 lua
        ...
    📁 scripts
        ...
    📄 registries.lua

This file doesn't clash with other mod files and must have this exact name to be recognized by the game.

## Accessing identifiers

When defining a new identifier, you may want or need to access it in the Lua API "Lua (API)"). Most registry functions return an identifier object that can be stored in a variable for future use. For example, you can create a new item tag and store its reference like this:

MyModName = {}

MyModName.ItemTag = {}
MyModName.ItemTag.MY_TAG = ItemTag.register("mymodname:my_tag")



In Scripts you still need to reference the string ID of the tag, not the variable.

You can then easily retrieve every items with that tag for example the following way:

local items = getScriptManager():getAllItems()
local itemsWithTag = {}

for i = 0, items:size() - 1 do
 local item = items:get(i)

 if item:hasTag(MyModName.ItemTag.MY_TAG) then
 itemsWithTag[#itemsWithTag + 1] = item
 end
end

## Example

CharacterTrait.register("testmod:nimblefingers")
CharacterProfession.register("testmod:thief")
ItemTag.register("testmod:bobbypin")
Brochure.register("testmod:Village")
Flier.register("testmod:BirdMilk")
ItemBodyLocation.register("testmod:MiddleFinger")
ItemType.register("testmod:gamedev")
MoodleType.register("testmod:Happy")
WeaponCategory.register("testmod:birb")
Newspaper.register("testmod:BirdNews", List.of("BirdKnews_July30",
"BirdKnews_July2"))

local item_key = ItemKey.new("bullets_666", ItemType.NORMAL)
AmmoType.register("testmod:duck_bullets", item_key)

Below are example uses of those identifiers in scripts:

character_trait_definition testmod:nimblefingers
{
 IsProfessionTrait = false,
 DisabledInMultiplayer = false,
 CharacterTrait = testmod:nimblefingers,
 Cost = 3,
 UIName = UI_trait_nimblefingers,
 UIDescription = UI_trait_nimblefingersDesc,
 XPBoosts = Lockpicking=2,
 GrantedRecipes =
 Lockpicking;AlarmCheck;CreateBobbyPin;CreateBobbyPin2,
}

craftRecipe CreateBobbyPin
{
 timedAction = Making,
 Time = 40,
 Tags = InHandCraft;CanBeDoneInDark,
 needTobeLearn = true,
 inputs
 {
 item 1 tags[base:screwdriver] mode:keep
 flags[MayDegradeLight;Prop1],
 item 1 [Base.Paperclip],
 }
 outputs
 {
 item 1 TestMod.HandmadeBobbyPin,
 }
}

character_profession_definition testmod:thief
{
 CharacterProfession = testmod:thief,
 Cost = 2,
 UIName = UI_prof_Thief,
 IconPathName = profession_burglar2,
 XPBoosts = Nimble=3;Sneak=2;Lightfoot=1;Lockpicking=2,
 GrantedTraits = testmod:nimblefingers,
}

item HandmadeBobbyPin
{
 Weight = 0.01,
 ItemType = base:normal,
 Icon = HandmadeBobbyPin,
 Tags = testmod:bobbypin,
 Tooltip = Tooltip_TestMod_BobbyPin,
 WorldStaticModel = Paperclip,
}



These examples were retrieved from the official guide provided by The Indie Stone for the registries system.

Retrieved from "https://pzwiki.net/w/index.php?title=Registries&oldid=1392729"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 Accessing identifiers

*   2 Example

Categories: 
*   Version 42.15.3")
*   Modding
*   Lua (API) "Category:Lua (API)")
*   Scripts

Hidden category: 
*   English

Last modified

 This page was last edited on 23 May 2026, at 03:59.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Registries From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Registries>

<https://pzwiki.net/wiki/Rendering>
Title: Rendering - PZwiki

URL Source: https://pzwiki.net/wiki/Rendering

Published Time: Sat, 08 Aug 2026 11:28:20 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# Rendering

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)

**Rendering** is the process of generating a 2D image from a 3D model by means of a 3D software. Blender is one of the most popular in the Project Zomboid community, but there are many others available. Rendering is indirectly linked to modding, as it is only used to create images to be used in your mod presentation, or inside various medias in-game such as fliers in Build 42.

The process usually involves getting the game assets in the 3D software, which is decently covered in File formats, but some game assets like tiles are only 2D sprites without actual 3D models. This involves a different process, where you recreate the 3D model shape and adjust the UV map to fit the 2D texture.

To get started, it is recommended that you follow the two part tutorial by SQz on the subject:

*   Part 1: How To Set Up a Character from Project Zomboid in Blender for Animation - a walkthrough guide on setting up a character for 3D rendering; also see Animation for available rigs for animating.
*   Part 2: How To Add Further Details to Your Project Zomboid Character in Blender - goes more in-depth on creating a 3D PZ like scene and adding more details.

You can find rigs to facilitate posing characters for rendering on the page Character rigs.

## See also

*   Creating a flier mod - a guide on creating a flier mod, which can utilize rendered images.
*   Animation - a guide on creating custom animations for the game, as well as available rigs.
*   Importing assets - a resource page on importing the 3D game assets into Blender.

External tutorials 
| Tutorial | Description | Author | Last updated |
| --- | --- | --- | --- |
| SQz rendering tutorial part 1 and part 2 | A two part tutorial on setting up a character for rendering in Blender, and adding more details to the scene. | SQz | 2023 September 2 |
| 2D Zomboid into 3D Blender | A tutorial on how to recreate a 3D model from a 2D sprite. | Darkmoriarti | 2026 July 6 |

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=Rendering&oldid=1440925"

 Last modified 

*   1 month ago

Contents

Back to top

Contents

*   1 See also

*   2 Navigation

Categories: 
*   Modding
*   Modding guides

Hidden category: 
*   English

Last modified

 This page was last edited on 26 June 2026, at 22:03.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Rendering From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Rendering>

<https://pzwiki.net/wiki/Scripts>
Title: Scripts - PZwiki

URL Source: https://pzwiki.net/wiki/Scripts

Published Time: Sat, 08 Aug 2026 11:28:25 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# Scripts

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)



This page was last updated for an _older_ version of the current build (42.17.0).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

**Scripts**, also referred to as _zedscripts_, are a format for modding in Project Zomboid which is used to implement new items, recipes, sounds, vehicles and more. Scripts do not follow a normalized typing format and are a fully custom syntax with rules of their own, even varying between the different types of scripts. The script files are usually located in the folder `media/scripts` in the game files or the mod folder.



Scripts are not a programming language, but mostly a custom format to define data for game elements which are parsed and cached inside the Java.

## Video guide

▶

PZ Modding Guides - Introduction to Scripts

External link ↗

## Folder structure

_Main article: Mod structure_
**Scripts** are put inside the `scripts` folder and are used to define items, models, vehicles etc. There is no specific organization of scripts compared to the Lua "Lua (API)"). The only rule is that the script files must end with the extension `.txt`. Various script blocks can be used and spread across multiple script files in different subfolders.

📁 media/
    📁 scripts/
        📁 subFolder/
            📄 anotherScript.txt
        📄 this_is_a_script.txt
        ...



It is preferable to put your script files inside a subfolder named after your mod to reduce clash issues with other mods.

## Scripts syntax

The files need to be saved with the `.txt` extension and follow a set of rules which should be the same for every script blocks as of Build 42. Script entries follow a block structure, similar to Lua tables#Tables "Lua (language)"), usually defined by the characters `{` and `}`.

Comments follow the Java multiline comment syntax, starting with `/*` and ending with `*/`. Comments can be placed anywhere in the script, even inside blocks. Single line `//` comments do not work and should not be used.

Key value pairs are used to define the parameters of the script elements, with the syntax `Key = Value,`. The comma at the end of each key value pair line is mandatory, even for the last line in a block. Some parameters do not need to be present for a script block to work.



Scripts can be inconsistent in some cases and some syntax rules which are present in this section may not apply to all script blocks. Refer to the specific script block documentation for more details.



Make sure to not forget commas at the end of each key value pair lines, as this will cause the script to not be parsed correctly.

### Module block

_Main article: module (scripts)&action=edit&redlink=1 "Module (scripts) (page does not exist)")_
A module block needs to be defined at the start of the script files, unless it is a sandbox options script. The base game module is `Base`, which means most entries will have the full ID `Base.ItemName`. It can be used for your own scripts:

module Base {
 ...
}

// alternative syntax
module Base
{
 ...
}

A custom module name can also be defined:

module MyModule {
 ...
}



If you use the vanilla module, make sure to use unique naming for your script entries to not clash with other mods. One trick is to add a prefix related to your mod name (`MyMod_MyItemID`).



The module block should not be used for sandbox options scripts.

To reference a script object, it is suggested to always use the module prefix, which is the module name followed by a dot. For example, if you define an item in the `MyModule` module, you can reference it as `MyModule.MyItem`. If you don't use the module prefix, the game will search in the following order:

*   The current module.
*   The imported modules.
*   The `Base` module.
*   Every other module.



This behavior is inconsistent in the various script types and as such it is recommended to always use the module prefix when referencing script objects. If you are having problems, try to put your script in the `Base` module instead of a custom one.

### Imports block

_Main article: imports (scripts)&action=edit&redlink=1 "Imports (scripts) (page does not exist)")_
By importing the Base module or any other module, you give your scripts direct access to the elements from these modules, and you can use item IDs directly without the module prefix (for example, you can use `Nails` instead of `Base.Nails`).

module MyModule {
 imports {
 Base
 OtherMod
 }
}



It is suggested to not use the imports blocks, but to directly use the module prefix when referencing script objects.

### VSCode syntax highlighting

To have syntax highlighting and diagnostics for Project Zomboid scripts in Visual Studio Code, which will help in reading and writing script files, you can install the extension ZedScripts.

## Properties



This is new and not every script blocks are fully documented yet both in the PZ Scripts Data and on the Wiki.

Script blocks can have specific sets of properties depending on their type. A property defines syntax rules and conditions for the script block as well as how the game should handle it.

### Parent blocks

Some script blocks need to be defined inside specific parent blocks, most commonly the `module` block.

#### Example

A craftRecipe block must be defined inside a `module` block and inputs "Inputs (scripts)") block must have a craftRecipe block as parent:

module MyModule { // parent of craftRecipe block
 craftRecipe MyRecipe { // parent of inputs block
 inputs {
 ...
 }
 }
}

### Children blocks

Some script blocks can contain other script blocks inside them, called children blocks. These children blocks can be mandatory or optional depending on the script type.

### ID

Some script blocks require an ID to be defined, usually mandatory, but sometimes optional based on the parent block. The ID is used to reference the script block in other scripts or in the Lua "Lua (API)"). For example, items "Item (scripts)") use what is called a _full type_ or full ID, which is composed of the module name and the item ID separated by a dot (`MyModule.MyItem`).

module MyModule {
 item MyItem {
 ...
 }
}

### File overrides

Naming a file with the same relative path as another will override all script definitions of the original file. This is usually not a good solution as most vanilla scripts are now in huge script files together, so you can't override a single script and have other mods also do it.

### Soft overrides

When defining a script block which already exists, such as an item "Item (scripts)") or a craftRecipe, based on the type of script, the game will either override the whole block, or merge the new definition with the existing one. This process is called a _soft override_. Script blocks which support soft overrides will be marked as such on their specific documentation page.

#### Example

Take an item definition with fake parameters as an example `Parameter1`, `Parameter2` and `Parameter3`:

module Base {
 item MyItem {
 Parameter1 = Value1,
 Parameter2 = Value2,
 Parameter3 = Value3,
 }
}

Item "Item (scripts)") scripts will support soft overrides, so if you define the same item again with only `Parameter2` changed, the other parameters will be kept and that specific parameter will be updated:

module MyMod {
 item MyItem {
 Parameter2 = NewValue2,
 }
}

## Script blocks



You can find a complete updated API reference for all the script blocks, their parameters and properties in the ScriptsDocs website.

Script blocks are the different kind of elements that can be defined in scripts. Each type has its own block structure name, and its own set of parameters.

List of Script blocks 
| Parameter name | Description |
| --- | --- |
| animation&action=edit&redlink=1 "Animation (scripts) (page does not exist)") |  This section may need more content. Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account) |
| character_profession_definition") | Used to define a new character profession. |
| character_trait_definition") | Used to define a new character trait. |
| craftRecipe | Used to define a recipe in Build 42. |
| energy&action=edit&redlink=1 "Energy (scripts) (page does not exist)") |  This section may need more content. Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account) |
| entity") | Used to define a buildable in Build 42, like walls, fences, furnitures and more. It is composed of different sub-blocks. |
| Evolved Recipe "Evolvedrecipe (scripts)") | Used to define recipes which can have a different set of ingredients and adapt the resulting item based on the ingredients used. Usually used for food recipes. |
| Fixing "Fixing (scripts)") | Used to define how items can be repaired or fixed. |
| Fluid "Fluid (scripts)") | Used to define a fluid in Build 42. |
| item "Item (scripts)") | Used to define items, such as weapons, clothing, food and more. |
| mannequin "Mannequin (scripts)") | Used to define a mannequin type, notably used in Mapping to create custom mannequins in the world. |
| model "Model (scripts)") | Used to define a model, such as its 3D model, texture, animations and more. These models can then be used in other scripts. |
| Multistage build "Multistagebuild (scripts)") | Used to define a multistage building in Build 41, which is a building that can be built in multiple stages, such as a wall or a fence. |
| perk&action=edit&redlink=1 "Perk (scripts) (page does not exist)") | Used to implement the basic of a new perk with its name, category and XP values. It needs to be defined inside a specific file in the Mod structure`media/perks.txt`. |
| physicsHitReaction") | Used to define the physics reaction a bullet or bomb imposes to objects. |
| ragdoll") | Used to define the ragdoll properties of a bone. |
| Recipe "Recipe (scripts)") | Used to define recipes in Build 41. |
| Sandbox options | Sandbox options are different from the other script blocks as they should not have a module block. They are used to define custom sandbox options which can be used in the Lua (API) "Lua (API)"). |
| Sound "Sound (scripts)") | Used to define sound parameters, such as volume, pitch and more. These sounds can then be used in other scripts or called from the Lua API "Lua (API)"). |
| template") | Used to create repeatable script definitions which can then be referenced to in script blocks of the same type. Currently only used to create vehicle scripts "Vehicle (scripts)") templates. |
| Vehicle "Vehicle (scripts)") | Used to define a vehicle, which consists of a complex set of different scripts. |

## Trivia

The reason scripts exist in the form they are in and not as json or other data formats is because they were originally created to be a scripting language, allowing modders to create more complex behaviors. It was then replaced by Lua "Lua (API)") but stayed as a data definition format. You can find early references of its scripting capabilities in this archived guide here (this guide is useless and outdated, do not follow it!).

## See also

*   ZedScripts
*   Zomboid Script Generator
*   PZ Data

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=Scripts&oldid=1442815"

 Last modified 

*   2 weeks ago

Contents

Back to top

Contents

*   1 Video guide

*   2 Folder structure

*   3 Scripts syntaxToggle Scripts syntax subsection
    *   3.1 Module block

    *   3.2 Imports block

    *   3.3 VSCode syntax highlighting

*   4 PropertiesToggle Properties subsection
    *   4.1 Parent blocks
        *   4.1.1 Example

    *   4.2 Children blocks

    *   4.3 ID

    *   4.4 File overrides

    *   4.5 Soft overrides
        *   4.5.1 Example

*   5 Script blocks

*   6 Trivia

*   7 See also

*   8 Navigation

Categories: 
*   Modding
*   Scripts

Hidden categories: 
*   English
*   Version 42.17.0
*   Stub articles

Last modified

 This page was last edited on 22 July 2026, at 18:02.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Scripts From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Scripts>

<https://pzwiki.net/wiki/Spawnpoints.lua>
Title: spawnpoints.lua - PZwiki

URL Source: https://pzwiki.net/wiki/Spawnpoints.lua

Published Time: Sat, 08 Aug 2026 11:28:31 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# spawnpoints.lua

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

Spawnpoints.lua

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)



This page was last updated for an _older_ version of the current build (42.13.1).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

`spawnpoints.lua` is a file located in the map folder of a map to define the various spawn points available for players. You notably define occupation specific spawn points. The file needs to contain a function `SpawnPoints` taking no arguments and returning a dictionary#Lookup_tables "Lua (language)") of occupations with an array#Tables "Lua (language)") of spawn points.

## Syntax

The function uses the following typings:

---@namespace YourMod

---@class SpawnPoint
---@field posX number -- Absolute world map X coordinate
---@field posY number -- Absolute world map Y coordinate
---@field posZ number -- Absolute world map Z coordinate
---@field worldX? number -- World map cell X coordinate (backwards compatibility with Build 41 spawnpoints)
---@field worldY? number -- World map cell Y coordinate (backwards compatibility with Build 41 spawnpoints)

---@return table<string, SpawnPoint[]>
function SpawnPoints()
 return {
 ...
 }
end

The tables defined as the class `SpawnPoint` needs to contain the following fields:

*   `posX`: The world map X coordinate of the spawn point.
*   `posY`: The world map Y coordinate of the spawn point.
*   `posZ`: The world map Z coordinate of the spawn point. (`0` for ground level)

The class also supports an alternative syntax for backwards compatibility with Build 41 spawnpoints where the fields `worldX` and `worldY` can be provided as the map cell coordinates which makes `posX` and `posY` calculated relatively to that cell coordinates. The cell is considered here to be a 300x300 area so the fields are now:

*   `worldX`: The world map cell X coordinate of the spawn point.
*   `worldY`: The world map cell Y coordinate of the spawn point.
*   `posX`: The X coordinate within the cell (0-299).
*   `posY`: The Y coordinate within the cell (0-299).
*   `posZ`: The world map Z coordinate of the spawn point. (`0` for ground level)

## Relative coordinates calculation

To calculate the absolute world map coordinates from the cell coordinates, the game uses the following code: **Source:**`ProjectZomboid/zombie\iso/SpawnPoints.java`

_**Retrieved**: Build 42.13.2_

Double worldX = Type.tryCastTo(point.rawget("worldX"), Double.class);
Double worldY = Type.tryCastTo(point.rawget("worldY"), Double.class);
Double posX = Type.tryCastTo(point.rawget("posX"), Double.class);
Double posY = Type.tryCastTo(point.rawget("posY"), Double.class);
Double posZ = Type.tryCastTo(point.rawget("posZ"), Double.class);
if (worldX == null || worldY == null || posX == null || posY == null) {
 return;
}

this.tempLocation.x = worldX.intValue() * 300 + posX.intValue();
this.tempLocation.y = worldY.intValue() * 300 + posY.intValue();
this.tempLocation.z = posZ == null ? 0 : posZ.intValue();

## Example

 This section contains source code from _Project Zomboid_

**Source:**`ProjectZomboid\media\scripts\media/maps/Muldraugh, KY/spawnpoints.lua`

_**Retrieved**: Build 42.13.2_

function SpawnPoints()
return {
 chef = {
 { posX = 10606, posY = 9474, posZ = 0 },
 { posX = 10624, posY = 10533, posZ = 0 },
 { posX = 10629, posY = 9658, posZ = 0 },
 { posX = 10863, posY = 10247, posZ = 0 },
 { posX = 10916, posY = 10133, posZ = 0 },
 { posX = 10803, posY = 10073, posZ = 0 },
 { posX = 10919, posY = 10131, posZ = 0 },
 { posX = 10942, posY = 9373, posZ = 0 },
 { posX = 10951, posY = 9490, posZ = 0 }
 },
 constructionworker = {
 { posX = 10863, posY = 10247, posZ = 0 },
 { posX = 10916, posY = 10133, posZ = 0 },
 { posX = 10803, posY = 10073, posZ = 0 },
 { posX = 10919, posY = 10131, posZ = 0 },
 { posX = 10942, posY = 9373, posZ = 0 },
 { posX = 10951, posY = 9490, posZ = 0 },
 { posX = 10872, posY = 9489, posZ = 0 },
 { posX = 10976, posY = 9785, posZ = 0 },
 { posX = 10851, posY = 9846, posZ = 0 },
 { posX = 10854, posY = 9894, posZ = 0 },
 { posX = 10908, posY = 9994, posZ = 0 },
 { posX = 10884, posY = 10159, posZ = 0 },
 { posX = 10917, posY = 10093, posZ = 0 }
 },
 doctor = {
 { posX = 10878, posY = 10028, posZ = 0 },
 { posX = 10863, posY = 10247, posZ = 0 },
 { posX = 10916, posY = 10133, posZ = 0 },
 { posX = 10803, posY = 10073, posZ = 0 },
 { posX = 10919, posY = 10131, posZ = 0 },
 { posX = 10942, posY = 9373, posZ = 0 }
 },
 fireofficer = {
 { posX = 10863, posY = 10247, posZ = 0 },
 { posX = 10916, posY = 10133, posZ = 0 },
 { posX = 10803, posY = 10073, posZ = 0 },
 { posX = 10919, posY = 10131, posZ = 0 },
 { posX = 10942, posY = 9373, posZ = 0 },
 { posX = 10951, posY = 9490, posZ = 0 },
 { posX = 10872, posY = 9489, posZ = 0 },
 { posX = 10976, posY = 9785, posZ = 0 },
 { posX = 10851, posY = 9846, posZ = 0 },
 { posX = 10854, posY = 9894, posZ = 0 },
 { posX = 10908, posY = 9994, posZ = 0 },
 { posX = 10884, posY = 10159, posZ = 0 },
 { posX = 10917, posY = 10093, posZ = 0 }
 },
 nurse = {
 { posX = 10878, posY = 10028, posZ = 0 },
 { posX = 10863, posY = 10247, posZ = 0 },
 { posX = 10916, posY = 10133, posZ = 0 },
 { posX = 10803, posY = 10073, posZ = 0 },
 { posX = 10919, posY = 10131, posZ = 0 },
 { posX = 10942, posY = 9373, posZ = 0 }
 },
 parkranger = {
 { posX = 10942, posY = 9373, posZ = 0 },
 { posX = 10863, posY = 10247, posZ = 0 },
 { posX = 10916, posY = 10133, posZ = 0 },
 { posX = 10803, posY = 10073, posZ = 0 },
 { posX = 10919, posY = 10131, posZ = 0 },
 { posX = 10942, posY = 9373, posZ = 0 },
 { posX = 10951, posY = 9490, posZ = 0 },
 { posX = 10872, posY = 9489, posZ = 0 },
 { posX = 10976, posY = 9785, posZ = 0 },
 { posX = 10851, posY = 9846, posZ = 0 },
 { posX = 10854, posY = 9894, posZ = 0 },
 { posX = 10908, posY = 9994, posZ = 0 },
 { posX = 10884, posY = 10159, posZ = 0 },
 { posX = 10917, posY = 10093, posZ = 0 }
 },
 policeofficer = {
 { posX = 10863, posY = 10247, posZ = 0 },
 { posX = 10916, posY = 10133, posZ = 0 },
 { posX = 10803, posY = 10073, posZ = 0 },
 { posX = 10919, posY = 10131, posZ = 0 },
 { posX = 10942, posY = 9373, posZ = 0 },
 { posX = 10951, posY = 9490, posZ = 0 },
 { posX = 10872, posY = 9489, posZ = 0 },
 { posX = 10976, posY = 9785, posZ = 0 },
 { posX = 10851, posY = 9846, posZ = 0 },
 { posX = 10854, posY = 9894, posZ = 0 },
 { posX = 10908, posY = 9994, posZ = 0 },
 { posX = 10884, posY = 10159, posZ = 0 },
 { posX = 10917, posY = 10093, posZ = 0 }
 },
 repairman = {
 { posX = 10863, posY = 10247, posZ = 0 },
 { posX = 10916, posY = 10133, posZ = 0 },
 { posX = 10803, posY = 10073, posZ = 0 },
 { posX = 10919, posY = 10131, posZ = 0 },
 { posX = 10942, posY = 9373, posZ = 0 },
 { posX = 10951, posY = 9490, posZ = 0 },
 { posX = 10872, posY = 9489, posZ = 0 },
 { posX = 10976, posY = 9785, posZ = 0 },
 { posX = 10851, posY = 9846, posZ = 0 },
 { posX = 10854, posY = 9894, posZ = 0 },
 { posX = 10908, posY = 9994, posZ = 0 },
 { posX = 10884, posY = 10159, posZ = 0 },
 { posX = 10917, posY = 10093, posZ = 0 }
 },
 securityguard = {
 { posX = 10839, posY = 9537, posZ = 0 },
 { posX = 10863, posY = 10247, posZ = 0 },
 { posX = 10916, posY = 10133, posZ = 0 },
 { posX = 10803, posY = 10073, posZ = 0 },
 { posX = 10919, posY = 10131, posZ = 0 },
 { posX = 10942, posY = 9373, posZ = 0 },
 { posX = 10951, posY = 9490, posZ = 0 },
 { posX = 10872, posY = 9489, posZ = 0 },
 { posX = 10976, posY = 9785, posZ = 0 },
 { posX = 10851, posY = 9846, posZ = 0 },
 { posX = 10854, posY = 9894, posZ = 0 },
 { posX = 10908, posY = 9994, posZ = 0 },
 { posX = 10884, posY = 10159, posZ = 0 },
 { posX = 10917, posY = 10093, posZ = 0 }
 },
 unemployed = {
 { posX = 10916, posY = 10133, posZ = 0 },
 { posX = 10803, posY = 10073, posZ = 0 },
 { posX = 10919, posY = 10132, posZ = 0 },
 { posX = 10944, posY = 9374, posZ = 0 },
 { posX = 10951, posY = 9490, posZ = 0 },
 { posX = 10872, posY = 9489, posZ = 0 },
 { posX = 10976, posY = 9785, posZ = 0 },
 { posX = 10851, posY = 9846, posZ = 0 },
 { posX = 10854, posY = 9894, posZ = 0 },
 { posX = 10908, posY = 9994, posZ = 0 },
 { posX = 10884, posY = 10159, posZ = 0 },
 { posX = 10917, posY = 10093, posZ = 0 }
 },
}
end

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=Spawnpoints.lua&oldid=1316065"

 Last modified 

*   7 months ago

Contents

Back to top

Contents

*   1 Syntax

*   2 Relative coordinates calculation

*   3 Example

*   4 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.13.1
*   Version 42.13.2

Last modified

 This page was last edited on 19 January 2026, at 20:17.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

spawnpoints.lua From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Spawnpoints.lua>

<https://pzwiki.net/wiki/Spiffo%27s_Workshop>
Title: Spiffo's Workshop - PZwiki

URL Source: https://pzwiki.net/wiki/Spiffo's_Workshop

Published Time: Sat, 08 Aug 2026 11:28:36 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# Spiffo's Workshop

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)



This page was last updated for an _older_ version of the current build (42.11.0).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

Spiffo's Workshop





Links

Spiffo's Workshop

Forum's mod sharing section

Forum's mod showcase section

**Spiffo's Workshop** is the home of Project Zomboid mods on Steam, more generally known as the Steam Workshop. It serves as a platform for modders to share their creations and for players to discover and install mods for the game. It provides a central hub where you can see the trending mods, access your own mods, downloaded mods, and favorites, as well as list mods based on search terms and categories via the use of tags or filters.

Currently the Workshop page features items as well as collections of mods created by the community. The trending mods section showcases a total of 9 of the most popular mods in the past week or two. Mods can be upvoted and downvoted, providing a rating score via 5 stars. This rating score calculation is a bit special and unclear, as the number of stars for a mod is limited by the number of votes it has received and not by its rating of positive and negative votes.

Individual mod pages can hold mod previews, descriptions, comment and discussion sections, and a change note section. They can indicate other necessary mods for their mod to work, as well as add contributors to the list of creators of the mod. You can also award a mod with badges via the use of Steam points and favorite mods to easily find them later or add them in a collection.

## Installation folder

The game files are located inside a subfolder named `steamapps/common`, this `steamapps` folder also holds the content downloaded on the Steam Workshop, located inside the `steamapps/workshop` subfolder. Inside this subfolder, different numbers called App ID are associated to their respective game, with Project Zomboid having the app ID `108600`. Each workshop content downloaded have an associated Workshop ID as identifier.

Steam/
└── steamapps/
    ├── common/
    │   └── ProjectZomboid/
    │       └── ... <-- game files
    └── workshop/
        └── 108600/
            └── ... <-- workshop IDs



Local mods should not be put inside this folder. For that, see the Mods page.

## Rating system

The Steam Workshop features a review system where players can give an upvote or a downvote to a mod. A star rating system comes along, allowing mods to be rated from 1 to 5 stars. In theory, 1 to 5 stars could be shown but in practice this is actually impossible and only a minimum of 3 stars can be achieved, up to 5 stars.

Based on a study by the PZ Modding Community[1], it was determined that the number of stars requires a set specific amount of upvotes and downvotes to reach a certain star rating, **not based on the ratio of upvotes to downvotes**. Below are some of the results of the study for the amount of upvotes for no downvotes to reach each star rating:

*   3 stars: 25 upvotes
*   4 stars: 26 upvotes
*   5 stars: 150 upvotes

The exact impact of downvotes is unclear, but it seems as a rule of thumb that one downvote adds 2 upvotes to the required amount to reach the next star rating. This theory doesn't seem to work for the 3 stars rating and in some cases of large amounts of downvotes.

## See also

*   https://thejaviertc.github.io/steam-workshop-stats/user - a tool to check the stats of items from Steam modders.

## References

1.   ↑Science for Steam - Chuckleberry Finn

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=Spiffo%27s_Workshop&oldid=1393671"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 Installation folder

*   2 Rating system

*   3 See also

*   4 References

*   5 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.11.0

Last modified

 This page was last edited on 23 May 2026, at 04:23.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Spiffo's Workshop From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Spiffo%27s_Workshop>

<https://pzwiki.net/wiki/SteamCMD>
Title: SteamCMD - PZwiki

URL Source: https://pzwiki.net/wiki/SteamCMD

Published Time: Sat, 08 Aug 2026 11:28:40 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# SteamCMD

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)

SteamCMD



Links

Valve documentation: Setting up SteamCMD

Workshop item build configuration file

**SteamCMD** is a command-line version of the Steam client, designed for installing and updating dedicated servers for games. It can be used to download and manage game files without the need for a graphical interface, as well as installing or uploading Workshop mods. Regular users do not need to use SteamCMD, and it is primarily intended for server administrators and modders.

The official Valve documentation provides detailed instructions on how to setup SteamCMD. However, the documentation regarding details on how to use it is lacking.

## Connecting to SteamCMD



This article may have claims which require verification.

How long does the cache credential lasts and can it be changed?

After installing SteamCMD, you can connect to it by running the command `steamcmd` in a terminal or command prompt. This will start the SteamCMD client and display a custom command prompt where you can enter commands. Actions which do not require an account like download a Workshop item can be done anonymously, while actions that require an account, such as uploading a Workshop item, will require you to log in.

To login anonymously, use the command `login anonymous`. To login with your Steam account, use the command `login username` then enter your password. Your credentials will be cached for some time, allowing you to login back in without giving your password.

## Uploading Workshop items

To upload or create a new workshop item, you need to create a build configuration file. SteamCMD uses this file to get the informations about the workshop item you want to upload. Such a file needs to follow a specific format:

"workshopitem"
{
	"appid"		"108600"
	"publishedfileid"		"3525515977"
	"contentfolder"		"<path to content to upload>"
	"previewfile"		"<path to preview image file>"
	"visibility"		"0"
	"title"		"Test SteamCMD upload"
	"description"		"Test SteamCMD upload"
	"changenote"		"Test SteamCMD upload: This is a test"
}

The format of the file doesn't matter but these files are usually referred to as VDF files (Valve Data File). To upload the item using the newly created build configuration file, use the command:

steamcmd.exe +login myLogin myPassword +workshop_build_item path/to/build/file.vdf +quit

List of parameters | Parameter name | Description |
| --- | --- |
| `appid` | The App ID of the game for which you are uploading the workshop item. For Project Zomboid, this is always `108600`. |
| `publishedfileid` | The unique identifier for the workshop item. This number can easily be found for an existing Workshop item in the URL of the item page, but it is also automatically added to the description when using the in-game uploader.  To create a new workshop item, simply set this to `0` or remove the `publishedfileid` line. SteamCMD will create a new item with a new ID and replace or add this value with the new ID in the build file after the upload for future uploads. |
| `contentfolder` | The path to the folder containing the content of the workshop item. This folder should contain all the files that you want to include in the workshop item. For Project Zomboid, this folder should be `Workshop/<mod folder>/Contents/mods/` if you take the default mod structure. |
| `previewfile` | The path to the preview image file for the workshop item. This file will be displayed as the thumbnail for the item in the Workshop. It can be a PNG, JPG, or GIF file. |
| `visibility` | The visibility of the workshop item. It can be set to: * `0` for public visibility (default), * `1` for friends-only visibility, * `2` for private (hidden) visibility. * `3` for unlisted visibility. |
| `title` | The title of the workshop item. This is the name that will be displayed in the Workshop. |
| `description` | The description of the workshop item. This can be a multiline text in the configuration file, for example: "workshopitem" { "appid" "108600" "publishedfileid" "3525515977" "contentfolder" "<path to content to upload>" "previewfile" "<path to preview image file>" "visibility" "0" "title" "Test SteamCMD upload" "description" "Test SteamCMD upload This is a multiline description Hello world" "changenote" "Test SteamCMD upload: Added build file to content" } |
| `changenote` | The change note for the workshop item. Like for the description, this can be a multiline text in the configuration file. |

You can find a simple workshop item example uploaded with this method here. In this example, a gif was uploaded as the preview image, which isn't possible with the in-game uploader.



The description and patch note use Steam BBCode.

## Retrieving a workshop item information

You can retrieve a Workshop item informations by using a POST request "wikipedia:POST (HTTP)") from the Steam API:

curl -X POST "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/" -H "Content-Type: application/x-www-form-urlencoded" -d "itemcount=1" -d "publishedfileids[0]=<publishedfileid>"

_This method was retrieved from this Steam forum post._

## See also

*   Uploading mods - a page explaining how to upload a mod.
*   Steam Uploader - a tool for uploading mods which utilizes the Steamworks SDK.

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=SteamCMD&oldid=1393761"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 Connecting to SteamCMD

*   2 Uploading Workshop items

*   3 Retrieving a workshop item information

*   4 See also

*   5 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Articles requiring verification

Last modified

 This page was last edited on 23 May 2026, at 04:25.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

SteamCMD From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/SteamCMD>

<https://pzwiki.net/wiki/Translation>
Title: Translation - PZwiki

URL Source: https://pzwiki.net/wiki/Translation

Published Time: Sat, 08 Aug 2026 11:28:45 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# Translation

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)



This page has been revised for the current _stable_ version (42.20.0).

Help by adding any missing content. Edit (Create account)

Parts of this page may have been automatically updated to the latest build (42.20.2). 

_For the previous version, see the archived page revision._

_This article is about translating the game or a mod.For a guide to translating the wiki, see Help:Translations._
**Translations** a modding field that involves translating the game or a mod to a different language. This can be done by creating translation files for the game or mod, which are then read by the game which automatically retrieves the text via keys associated to translation values. It is also possible to create a new translation language for the game.

## Translation types

Different translation types exist, used for different purposes. A translation type is associated to a specific file which needs to hold the translations for that type, sometimes requiring a prefix for the keys.

As of Build 42.15.0, the translation files are `.json` files and should no longer have the language code in their name.

List of translation types Hide| Translation type | Filename | Key prefix | Function | Notes |
| --- | --- | --- | --- | --- |
| Attributes | `Attributes` |  | `getText` |  |
| BodyParts | `BodyParts` |  | `getText` |  |
| Challenge | `Challenge` | `Challenge_` | `getText` |  |
| ContextMenu | `ContextMenu` | `ContextMenu_` | `getText` | Translations used in the context menus of the game. |
| DynamicRadio | `DynamicRadio` | `AEBS_` | `getRadioText` | Dynamic radio translations. |
| Entity | `Entity` | `EC_` | `getText` | Translations for entity scripts. |
| EvolvedRecipeName | `EvolvedRecipeName` |  | `Translator.getItemEvolvedRecipeName` | Translations for evolved recipe scripts. |
| Farming | `Farming` | `Farming_` | `getText` | Translations for farming menus. |
| Fluids | `Fluids` | `Fluid_Name_` | `getText` | Translations for fluid related UI elements and fluid containers. |
| GameSound | `GameSound` | `GameSound_` | `getText` | Game sounds and categories translations. |
| IGUI | `IG_UI` | `IGUI_` | `getText` | Translations for in-game user interface elements. |
| ItemName | `ItemName` |  | `getItemNameFromFullType` | Translations for item scripts. The key needs to be the full type of the item. |
| Location_Generic |  |  |  | A translation file for the map. The filename needs to refer the file "map.info" in the mod's media folder. |
| MakeUp | `MakeUp` |  | `getText` | Translations for make up. |
| MapLabel | `MapLabel` | `MapLabel_` | `getText` |  |
| Mod | `Mod` |  |  | Translations for the mod.info file. Possible keys are "name" and "description". |
| Moodles | `Moodles` | `Moodles_` | `getText` | Moodles status and descriptions translations |
| Moveables | `Moveables` |  | `Translator.getMoveableDisplayName` | Moveable tiles as items translations. |
| MultiStageBuild | `MultiStageBuild` | `MultiStageBuild_` | `Translator.getMultiStageBuild` | Translations for multi stage build. |
| Print_Media | `Print_Media` | `Print_Media_` | `getText` | Text content for media items such as newspapers, describing their content. |
| Print_Text | `Print_Text` | `Print_Text_` | `getText` | Raw text content for media items such as newspapers, describing their content. |
| RadioData | `RadioData` | `RD_` | `getText` | Radio translations with the key being a GUID of the radio text. |
| RecipeGroups | `RecipeGroups` | `RecipeGroup_` | `Translator.getRecipeGroupName` |  |
| Recipes | `Recipes` |  | `getRecipeDisplayName` | Translations for the craftRecipe scripts. The key needs to be the ID of the craftRecipe block. |
| Recorded_Media | `Recorded_Media` | `RM_` | `getText` | Recorded media translations with the key being a GUID of the media text. |
| Sandbox | `Sandbox` | `Sandbox_` | `getText` | Sandbox options translations. |
| Stash | `Stash` | `Stash_` | `getText` | Survivor maps translations. |
| SurvivalGuide | `SurvivalGuide` | `SurvivalGuide_` | `getText` | Survival guide translations. |
| SurvivorNames | `SurvivorNames` |  | `getText` | All possible automatic character names. Used for random name generation of the player character or for zombies. |
| Tooltip | `Tooltip` | `Tooltip_` | `getText` | Tooltips used for UIs. |
| UI | `UI` | `UI_` | `getText` | Translation file for user interface elements. |

### JSON Schemas

JSON schemas are used to validate the format of JSON files, ensuring they meet the required structure. For translations, those were made to validate the key prefixes and required fields for each translation type.

To use those schemas, you have different methods, the one described in this guide bases itself on the widely used Visual Studio Code in the modding community.

The schemas are provided in the PZ Data repository for download or direct cloning but the best way is to directly link to their online version from the repository, which will allow you to always have the last updated versions.

To use the online schemas, you need to add a new trusted domain to your Visual Studio Code setting `json.schemaDownload.trustedDomains`, either in your global settings or workspace settings:

**Source:**`.vscode\settings.json`

{
 "json.schemaDownload.trustedDomains": {
 "https://raw.githubusercontent.com/pz-wiki-modding/pz-translation-data": true
 }
}



Alternatively, you can use local schemas by downloading them from PZ Data releases, then using the path to the schema instead of the online link.

#### Linking to schemas via Visual Studio Code settings

You can link to the schemas via the Visual Studio Code setting `json.schemas`, either in your global settings or workspace settings. For example, linking to the Moveables schema will be as follows: **Source:**`.vscode\settings.json`

{
 "json.schemas": [
 {
 "fileMatch": [
 "**/media/lua/shared/Translate/*/Moveables.json"
 ],
 "url": "https://raw.githubusercontent.com/pz-wiki-modding/pz-translation-data/refs/heads/main/PZ_Translation_Schemas/Moveables.schema.json",
 "name": "PZ Moveables translation schema"
 }
 ]
}

You can find a full configuration file in the PZ Data repository, which you can either download in the releases or download from the repository.



The map schemas (`Location_Generic`) are not available for Visual Studio Code settings due to no specific pattern being usable to target them, so you will need to link to them manually in the translation files as explained in the next section.

#### Manually linking to the schemas in the translation files

You can directly refer to the schemas with a custom key `$schema` as follows inside your translation files:

{
 "$schema": "link/to/schema.json",
 ...
}

The `link/to/schema.json` needs to link to the schema for the specific translation type schema which follows the link format `https://raw.githubusercontent.com/pz-wiki-modding/pz-translation-data/refs/heads/main/PZ_Translation_Schemas/<translationType>.schema.json`. You need to replace `<translationType>` with the translation type listed in the table above, for example `Moveables` will be `https://raw.githubusercontent.com/pz-wiki-modding/pz-translation-data/refs/heads/main/PZ_Translation_Schemas/Moveables.schema.json`.

For example, the setup for a schema will be as follows: **Source:**`media\lua\shared\Translate\EN\UI.json`

{
 "$schema": "https://raw.githubusercontent.com/pz-wiki-modding/pz-translation-data/refs/heads/main/PZ_Translation_Schemas/UI.schema.json",
 ...
}

### Map information

Map translations use the following files:

📁 media
    📁 maps
        📁 <map folder>/
            📄 map.info
            ...
    📁 lua
        📁 shared
            📁 Translate
                📁 <language code>
                    📄 <map>.json

The file needs to have a title and description field, and alternatively a JSON schema field can be added for validation:

{
 "$schema": "https://raw.githubusercontent.com/pz-wiki-modding/pz-translation-data/refs/heads/main/PZ_Translation_Schemas/Location_Generic.schema.json",
 "title": "Your map name",
 "description": "Your map description"
}

Example Riverside description: **Source:**`Translate\EN\Riverside, KY.json`

_**Retrieved**: Build 42.15.0_

{
 "title": "Riverside, KY",
 "description": "<CENTRE> <SIZE:medium> RIVERSIDE <LINE> <LINE><LEFT> <SIZE:small> A colorful town tightly hugging the banks of the mighty Ohio: exploring Riverside is a rich and diverse experience! To the west you'll find the older parts of town, while out east is where wealthier residents work, rest, and play. <LINE> <LINE>If you're considering a stay with us, why not check out the nearby West Maple Country Club? The ultimate in comfort and relaxation, members have access to an 18-hole golf course, tennis courts, swimming pool, and fantastic bars and lounges. Come join today!"
}

## Languages

The game uses languages added to the `media/lua/shared/Translate` folder, information about the language is stored in the `language.txt` file of each language directory.

For Build 41, most language use different encodings. Since Build 42.15.0, all languages use UTF-8 encoding.

Languages in game Hide
| Code | Language | Build 41 encoding | Pre Build 42.15.0 encoding | Post Build 42.15.0 encoding |
| --- | --- | --- | --- | --- |
| AR | Espanol (AR) - Argentina Spanish | Cp1252 | Cp1252 | UTF-8 |
| CA | Catalan | ISO-8859-15 | ISO-8859-15 | UTF-8 |
| CH | Traditional Chinese | UTF-8 | UTF-8 | UTF-8 |
| CN | Simplified Chinese | UTF-8 | UTF-8 | UTF-8 |
| CS | Czech | Cp1250 | Cp1250 | UTF-8 |
| DA | Danish | Cp1252 | UTF-8 | UTF-8 |
| DE | Deutsch - German | Cp1252 | UTF-8 | UTF-8 |
| EN | English | UTF-8 | UTF-8 | UTF-8 |
| ES | Espanol (ES) - Spanish | Cp1252 | UTF-8 | UTF-8 |
| FI | Finnish | Cp1252 | UTF-8 | UTF-8 |
| FR | Francais - French | Cp1252 | UTF-8 | UTF-8 |
| HU | Hungarian | Cp1250 | UTF-8 | UTF-8 |
| ID | Indonesia | UTF-8 | UTF-8 | UTF-8 |
| IT | Italiano | Cp1252 | UTF-8 | UTF-8 |
| JP | Japanese | UTF-8 | UTF-8 | UTF-8 |
| KO | Korean | UTF-16 | UTF-8 | UTF-8 |
| NL | Nederlands - Dutch | Cp1252 | UTF-8 | UTF-8 |
| NO | Norsk - Norwegian | Cp1252 | UTF-8 | UTF-8 |
| PH | Tagalog - Filipino | UTF-8 | UTF-8 | UTF-8 |
| PL | Polish | Cp1250 | UTF-8 | UTF-8 |
| PT | Portuguese | Cp1252 | UTF-8 | UTF-8 |
| PTBR | Brazilian Portuguese | Cp1252 | UTF-8 | UTF-8 |
| RO | Romanian | UTF-8 | UTF-8 | UTF-8 |
| RU | Russian | Cp1251 | UTF-8 | UTF-8 |
| TH | Thai | UTF-8 | UTF-8 | UTF-8 |
| TR | Turkish | Cp1254 | UTF-8 | UTF-8 |
| UA | Ukrainian | Cp1251 | UTF-8 | UTF-8 |

### Adding new languages



This section may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

*   Create a new folder with the id of the language
*   Add the language.txt file
*   Add fonts if necessary
*   Add translations

## Example

Examples were provided in the official documentation.

**Source:**`media/lua/shared/Translate/EN\UI.json`

{
 "UI_mainscreen_continue": "CONTINUE (Duck ¼)",
 "UI_mainscreen_tutorial": "TUTORIAL (Duck ½)",
 "UI_mainscreen_solo": "SOLO (Duck ¾)",
 "UI_mainscreen_mods": "MODS (Duck ¿)"
}

## Trivia

Official translations used to be done on ProjectZomboidTranslations GitHub, however starting with Build 42 a professional studio was hired for translations.

## See also

*   GitHub repository for the game translations (outdated)
*   Releases of TranslationZed tool
*   Steam guide by _**Matrioshka**_, _**Riko Prushka**_
*   PZ Translator (original) - a tool to translate the game and mods automatically, bases itself on Google Translate. (outdated)
*   PZ Translator (forked) - a tool to translate the game and mods automatically, bases itself on Google Translate. (outdated)

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=Translation&oldid=1446935"

 Last modified 

*   5 days ago

Contents

Back to top

Contents

*   1 Translation typesToggle Translation types subsection
    *   1.1 JSON Schemas
        *   1.1.1 Linking to schemas via Visual Studio Code settings

        *   1.1.2 Manually linking to the schemas in the translation files

    *   1.2 Map information

*   2 LanguagesToggle Languages subsection
    *   2.1 Adding new languages

*   3 Example

*   4 Trivia

*   5 See also

*   6 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.20.0
*   Version 42.15.0
*   Stub articles

Last modified

 This page was last edited on 3 August 2026, at 16:35.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Translation From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Translation>

<https://pzwiki.net/wiki/TranslationZed>
Title: TranslationZed - PZwiki

URL Source: https://pzwiki.net/wiki/TranslationZed

Published Time: Sat, 08 Aug 2026 11:28:50 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# TranslationZed

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)



This article may be in need of improvement.

Add image of the software.

Editors are encouraged to add any missing information to the article, while verifying that the article's current content is correct. Edit (Create account)

**TranslationZed** was a GUI software that aimed for helping to translate Project Zomboid, created by Connall and then maintained by nasKo briefly, before stopping receiving updates.

It was hosted on a GitHub repository used to host translations, but its source code is not available publicly.

## External links

*   TranslationZed releases on GitHub

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=TranslationZed&oldid=1394483"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 External links

*   2 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Pages with sections to fill
*   Articles in need of improvement

Last modified

 This page was last edited on 23 May 2026, at 04:44.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

TranslationZed From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/TranslationZed>

<https://pzwiki.net/wiki/User_Interface>
Title: User Interface - PZwiki

URL Source: https://pzwiki.net/wiki/User_Interface

Published Time: Sat, 08 Aug 2026 11:28:55 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# User Interface

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)



This page was last updated for an _older_ version of the current build (42.14.1).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

**User Interface**, often shortened to _UI_, is the means by which a player interacts with the game. It includes elements such as menus, buttons, and other visual components that allow players to navigate and control the game. The process of making user interfaces for mods is supported natively by the game via the Lua API "Lua (API)") and the use of UI elements which are derived from a central UI element class called ISUIElement"). Any ISUIElement subclass can be used to create a standalone UI, but can also be added as a child to another ISUIElement, allowing for the creation of complex UIs with multiple layers and components.

More advanced UI drawing functions exist without being dependent on this central UI class system but the majority of UIs are built using it and **should** be using it to ensure compatibility with the game and other mods.



UI making involves calling a lot of different Lua functions, UI elements and modify different aspects of classes. As such, it is recommended to use the LuaDocs to find the functions and classes definitions and content. `ISUIElement` for example has a lot of utility functions to do specific things in your UI.

## Folder structure

UIs are only useful client side, and as such it is recommended to place them in the client folder of your mod. They follow the same rules as any other Lua files#Folder_structure "Lua (API)"), which means they can clash with other mods or vanilla files if they have the same relative paths.

📁 media
    📁 lua
        📁 client
            📁 YourMod       <--- used to reduce file clashes
                📄 yourUIClassFile.lua
            ...
        📁 server
            ...
        📁 shared
            ...

It is prefered to keep one file for one UI class to make it easier to organize things. This is also best so you can keep your UI elements as modules#Modules "Lua (language)") to access and not clash with any other module or global variables#Local_and_global "Lua (language)").

## Creating a simple UI



Making a simple UI involves creating a class#Lua_objects "Lua (API)") with the needed required functions to work properly. It is best to derive either `ISUIElement` or subclasses of it such as `ISPanel`.

In the following example, we create a very simple UI using `ISPanel` as a base, which is one of the most basic UI elements, and we draw a simple "Hello world" text on it.

---@class YourCustomUI: ISPanel
local YourCustomUI = ISPanel:derive("YourCustomUI")

--- initialize the UI, notably used to add child elements
function YourCustomUI:initialise()
 ISPanel.initialise(self)
end

--- called before the render function, notably used to precalculate data and cache
function YourCustomUI:prerender()
 ISPanel.prerender(self)
end

-- use to render text and draw elements every render ticks
function YourCustomUI:render()
 --- draw a simple hello world
 self:drawText("Hello world",0,0,1,1,1,1, UIFont.Small)
end

-- this is used to create a new instance of the UI
function YourCustomUI:new(x, y, width, height)
 local o = ISPanel.new(self, x, y, width, height)
 return o
end

return YourCustomUI

To display and close the UI, simply create a new instance and add it to the UI manager or remove it. In the example below, we make the UI when pressing the key X:

local YourCustomUI = require("YourMod/YourCustomUI")

local yourCustomUI
Events.OnKeyPressed.Add(function(key)
 -- verify the key X is pressed
 if key ~= Keyboard.KEY_X then return end

 -- if the UI exists, we close it
 if yourCustomUI then
 yourCustomUI:setVisible(false)
 yourCustomUI:removeFromUIManager()
 yourCustomUI = nil

 -- else we create a new instance of that UI
 else
 yourCustomUI = YourCustomUI:new(100, 100, 200, 200)
 yourCustomUI:initialise()
 yourCustomUI:addToUIManager()
 end
end)



`setVisible` can hide the UI without removing it from the UI manager, allowing you to show it again later without needing to recreate it and re-add it to the UI manager.



If you lose the reference to your UI instance, you won't be able to close it unless you have a close button directly on the UI itself, or something internal to the UI is closing it.

## Adding a child element



As seen in the example provided in #Creating a simple UI, it is possible to draw text in the render function, but this is a very inefficient way of doing it which will make managing those drawing functions annoying. Instead, it is best to use **children UI elements**, which are simply UIs in themselves, linked to the UI you are creating to add specific elements.

While in most cases it is to add for example a health panel UI to another UI, it is best used to add children of low level UI elements such as `ISButton`, `ISLabel` etc. Those UIs each have their own render, create, initialise functions which will handle all the necessary parts to add such UI elements. This makes it easy to add a button or text on a UI without having to manually draw the button and the text every render tick or handle its behavior in your UI.

Take our previous `YourCustomUI` example, we add a text label and a button to it:

function YourCustomUI:initialise()
 local textLabel = ISLabel:new(0, 20, 20, "Oh hi Mark!", 1, 1, 1, 1, UIFont.Small, true)
 self:addChild(textLabel)

 local button = ISButton:new(0, 40, 50, 20, "Click me!", self, function(parent)
 print("Hello world!")
 parent:close()
 end)
 self:addChild(button)

 ISPanel.initialise(self)
end

When clicking the button, it will close the UI and print "Hello world!" in the console.



The children UIs are stored in a table called `children`, but they are also usually stored in a variable in the parent UI for easy access when needed.

## Changing the UI appearance



The UI elements derived from `ISPanel` will all have two tables used to color the UI:

*   `backgroundColor` (default is `{r=0, g=0, b=0, a=0.5}`)
*   `borderColor` (default is `{r=0.4, g=0.4, b=0.4, a=1}`)

You can freely modify the color values of these to change the appearance of the UI. For example, to make the background fully red and the border fully green, you can do:

function YourCustomUI:new(x, y, width, height)
 local o = ISPanel.new(self, x, y, width, height)
 o.backgroundColor = {r=1, g=0, b=0, a=1}
 o.borderColor = {r=0, g=1, b=0, a=1}
 return o
end



More advanced UI appearance customization can be done by directly rendering the UI differently, drawing textures in it etc. This is way more complex however, and can often lead to a UI not looking like the vanilla ones. If you are new to UI making, it is recommended to stick to the default vanilla ISPanel equivalents.

## ISPanel alternatives

While `ISPanel` is the most basic and commonly used UI element to create custom UI panels, there are some alternatives that can be used as a base for your UI which often give more default tools and functions to work with. Here is a non-exhaustive list of alternatives:

*   `ISPanelJoypad` - used to handle gamepad inputs directly in the UI.
*   `ISCollapsableWindow`

## Utility functions

Lots of utility functions exist to retrieve UI related data, for example:

*   `getCore():getScreenWidth()`
*   `getCore():getScreenHeight()`
*   `getMouseX()`
*   `getMouseY()`
*   `isShiftKeyDown()`
*   `isCtrlKeyDown()`

## ISUIElement drawing functions

Below is a non-exhaustive list of drawing functions natively implemented in the `ISUIElement` class:

*   `drawText`
*   `drawRect`
*   `drawRectBorder`
*   `drawTextureScaled`
*   `drawTextureScaledUniform`
*   `drawTextureScaledAspect`
*   `drawTexture`
*   `drawTextureTiled`
*   `drawTextureStatic`
*   `drawItemIcon`
*   `drawScriptItemIcon`
*   `drawLine2`
*   `drawPolygon`
*   `drawProgressBar`

## See also

*   Make a custom UI by MrBounty
*   ISContextMenu - UI element for context menus.
*   Imgui - a debugging tool notably used to view the UI elements hierarchy.

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=User_Interface&oldid=1394655"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 Folder structure

*   2 Creating a simple UI

*   3 Adding a child element

*   4 Changing the UI appearance

*   5 ISPanel alternatives

*   6 Utility functions

*   7 ISUIElement drawing functions

*   8 See also

*   9 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.14.1

Last modified

 This page was last edited on 23 May 2026, at 04:48.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

User Interface From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/User_Interface>

<https://pzwiki.net/wiki/Visual_Studio_Code>
Title: Visual Studio Code - PZwiki

URL Source: https://pzwiki.net/wiki/Visual_Studio_Code

Published Time: Sat, 08 Aug 2026 11:29:00 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# Visual Studio Code

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)

Visual Studio Code



Links

Visual Studio Code website

Getting started with the interface

Getting started with workspaces

**Visual Studio Code**, commonly abbreviated to _VSCode_, is an Integrated development environment (IDE) used by many Project Zomboid modders. It is often used alongside Umbrella "Umbrella (modding)") for modding.

## Workspace

A workspace in Visual Studio Code is a folder or a set of folders that you can open to work on, helping with managing multiple files in a project. This is particularly useful when it comes to coding but also overall managing a mod content.

*   Single-folder workspaces: simply open a single folder in VSCode, which will be the workspace. To do that, go in "File" > "Open Folder..." and select the folder you want to open.
*   Multi-root workspaces: open an empty VSCode window, then go in "File" > "Add Folder to Workspace..." and select the folders you want to add. This will open multiple independent folders in the same workspace window. You can save this workspace by going in "File" > "Save Workspace As..." and saving it as a `.code-workspace` file.

This allows you to easily navigate through the files via the explorer in the left activty sidebar, and search through the files in the workspace using the search tool.

## Searching content

The left activity sidebar of VSCode has a search tool which allows you to search through the files content of the workspace. To do so, you can simply open the search tool and search for a term. You can also replace the term with a different one. You can do strict search for exact match for cases or whole words. For example, searching the term "zombie" with those two activated will find "This is a **zombie**" but not "This is a **Z**ombie" nor "These are zombie**s**".

By clicking on the "..." button, you can access more options such as searching in specific files or folders, excluding files or folders, and more. By right clicking a folder in the explorer view, you can select "Find in Folder" which will open the search tool with the folder already selected, allowing you to search only in that folder.

## Extensions

VSCode can have extensions installed to enhance its functionality. These extensions can help with modding by providing syntax highlighting, code completion, and other features. Below are extensions which can be useful for modding:

*   Umbrella (modding) "Umbrella (modding)") – a collection of Lua type stubs for Project Zomboid's modding API "Lua (API)") (formatting, autocomplete...).
*   ZedScripts - the most up-to-date extension for scripts syntax highlight and diagnostics.
*   Project Zomboid Script Support – an extension for Visual Studio Code that provides syntax highlighting for scripts.
*   Zed Script – an extension for Visual Studio Code that provides syntax highlighting for scripts.

### Lua

Two extensions are available to help with Lua programming for modding:

*   EmmyLua
*   LuaLs

EmmyLua is the suggested extension for creating Lua mods "Lua (API)").

### Wikitext

For editing wikitext files, you can install the Wikitext extension. This extension provides syntax highlighting and preview of pages directly in VSCode. This will highlight with wikitext files which have the custom extension `.wt`.

To set it up for the Project Zomboid wiki, you need to change some settings of the extension:

*   `Wikitext:Host` - Set it to `pzwiki.net`.
*   `Wikitext:Auto Login` - Set it to `Never` since there is no need for it in our case. When previewing pages, this will give you a warning that you are not logged in, but you can ignore it, it still properly previews the pages.
*   For better previews, toggle `Wikitext:Enable JavaScript` and `Wikitext:Get CSS`.

If you want even better syntax highlights, you can install the extra extension WikiParser then in the settings of the WikiParser extension, set `Wikiparser: Article Path` to `https://pzwiki.net/wiki/`. This allows you to open individual pages that you directly link in your wikitext files, such as the templates or direct links to other pages. This however doesn't seem to properly work when linking to Wikipedia pages directly.



## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=Visual_Studio_Code&oldid=1439187"

 Last modified 

*   2 months ago

Contents

Back to top

Contents

*   1 Workspace

*   2 Searching content

*   3 ExtensionsToggle Extensions subsection
    *   3.1 Lua

    *   3.2 Wikitext

*   4 Navigation

Category: 
*   Modding

Hidden category: 
*   English

Last modified

 This page was last edited on 7 June 2026, at 11:37.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Visual Studio Code From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Visual_Studio_Code>

<https://pzwiki.net/wiki/WordZed>
Title: WordZed - PZwiki

URL Source: https://pzwiki.net/wiki/WordZed

Published Time: Sat, 08 Aug 2026 11:29:08 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# WordZed

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)



This article may be in need of improvement.

Add image of the software.

Editors are encouraged to add any missing information to the article, while verifying that the article's current content is correct. Edit (Create account)

**WordZed** is a tool created by TurboTuTone to add custom radio data to the game via a mod.

## External links

*   WordZed - Tutorials & Resources - The Indie Stone Forums

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=WordZed&oldid=1395223"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 External links

*   2 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Pages with sections to fill
*   Articles in need of improvement

Last modified

 This page was last edited on 23 May 2026, at 05:02.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

WordZed From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all
</https://pzwiki.net/wiki/WordZed>

<https://pzwiki.net/wiki/Workshop_ID>
Title: Workshop ID - PZwiki

URL Source: https://pzwiki.net/wiki/Workshop_ID

Published Time: Sat, 08 Aug 2026 11:29:13 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.9K

783.3K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

Limited chance to buy a Project Zomboid Collection with unique Spiffo merchandise!

Chef Spiffo Plushie, Spiffo's Restaurant Pin Collection, and Spiffo's Keychain Plushie are available to order until August 28, 2026 with all of The Indie Stone's proceeds from the sale to be donated to Mary's Meals.

# Workshop ID

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua "Lua (API)") in `media/lua/server/WorldGen`
*   New function `LuaTableUtil:insertAllUniqueElementsFromJavaList(list, array)` to insert elements of ArrayLists into a Lua table
*   Some new Procedural distributions and rooms, added to PZ API Docs
*   A bunch of new getters and setters for Java have been added, if you have requests for more, please ask in the #mod_portal channel of the official Discord server.
*   New drawTextWithBackground) method for UI making.
*   Vehicles seem to have had a lot of logic and organization changes, possibly more tools for modders to play with.
*   Newly exposed classes are: 
    *   `CraftRecipe.XpAward`
    *   `StreetPoints`
    *   `Transform`
    *   `VirtualVehicle`
    *   `WorldMapStreet`

*   getFileWriter) now is limited to writing files with specific extensions: 
    *   `ini`
    *   `cfg`
    *   `txt`
    *   `log`
    *   Interestingly enough, getModFileWriter) didn't get any limitations.

*   New sync methods were added: 
    *   sendHitZombie) (interestingly, instantly marked as deprecated?)
    *   Faction related methods: 
        *   acceptFactionInvite)
        *   sendFactionChangeOwner)
        *   sendFactionChangeTag)
        *   sendFactionChangeTitle)
        *   sendFactionCreate)
        *   sendFactionDisband)
        *   sendFactionRemoveMember)

    *   Foraging related methods: 
        *   sendForageRequestZone)
        *   sendForagePool)
        *   sendForageSpot)

*   Two new Lua events: 
    *   RequestMedicalCheck
    *   AcceptedMedicalCheck

*   Vector2 class got a new multiplier method)
*   Signs seem to point to ActionGroup now finally supporting modding, with modded files getting loaded by the game. This should notably allow for modders to use GrappleZed without any manual installation, but also do advanced animation.

Build 42.20.1 Modding News

*   `json` extension is now allowed for getFileWriter) (alongside `ini`, `cfg`, `txt`, `log`)
*   `%` characters now need to be escaped in the translations (e.g. `%%` for a single `%` when resolved)

The `Workshop ID` is a unique identifier for a mod on the Steam Workshop. It is used to manage and reference a mod within the game and on the Steam platform. It is essential for publishing a mod and ensuring that it can be found and downloaded by other players (mods) or servers (SteamCMD).

To find this ID, you can:

*   Check the URL of your mod on the Steam Workshop. The ID is the number at the end of the URL.
*   Find it at the bottom of the mod's page if it was uploaded from the in-game uploader.

## See also

*   App ID – the unique identifier for a game or application on the Steam platform.
*   Game files – the files and assets that make up a game.

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=Workshop_ID&oldid=1395231"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 See also

*   2 Navigation

Category: 
*   Modding

Hidden category: 
*   English

Last modified

 This page was last edited on 23 May 2026, at 05:03.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Workshop ID From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Workshop_ID>

<https://pzwiki.net/wiki/Workshop.txt>
Title: workshop.txt - PZwiki

URL Source: https://pzwiki.net/wiki/Workshop.txt

Published Time: Mon, 27 Jul 2026 21:30:45 GMT

Markdown Content:


Toggle search

Toggle menu



12.2K

19.8K

6.8K

777.1K

PZwiki

 Project Zomboid Wiki 

*   Main page alt ⇧ z
*   Community portal
*   Wiki tasks
*   Wiki rules
*   Editing help
*   Style guide
*   Recent changes alt ⇧ r
*   Random page alt ⇧ x
*   Affiliates
*   Switch to old look")
*   Special pages alt ⇧ q
*   Upload file alt ⇧ u

 Project Zomboid 

*   Website
*   Forums
*   Bug reports
*   Build history
*   Map
*   Discord

Toggle preferences menu

Couldn't load preferences. Check your connection and try again.

 Retry 

Toggle personal menu

Not logged in

Please log in or create an account to make contributions.

 user-interface-preferences 

 Personal tools 

*   Create account
*   Log in alt ⇧ o

The official Project Zomboid Map Project has been updated to support Build 42.

 PZwiki pages are getting updated to Build 42. We appreciate your patience during the updates.

 Help us by contributing to the Project Build 42 Update.

# workshop.txt

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

Workshop.txt

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

July Modding News

*   Upcoming Build 42.20.0 is the a candidate for stable release, expecting less modding breaking changes to the modding API.
*   JavaDocs for B42 moved to new link: here.



This page has been updated to an _unstable_ beta version (42.5.1).

There may be additional features that are not in the stable version (41.78.19).

Help get this page updated to the current unstable version (42.19.0). Edit (Create account)

This page explains the `workshop.txt` which is used to define various informations for your mod to be uploaded on the Steam Workshop.



This file doesn't need to be created by hand as it will be generated by the game from the in-game uploader.

## Parameters

List of parameters | Parameter name | Description |
| --- | --- |
| `version` | used to define the version of reader of the file. This should be kept at 1. |
| `id` | the Workshop ID of the mod. If you want to upload to a specific Workshop ID (which you own or are a contributor to), simply add it to this field. Remove the field if you want to create a new Workshop item. |
| `title` | Steam Workshop page title. |
| `description` | Steam Workshop page description. Each new lines need to use the parameter again. Quite unpratical and suggested to use the in-game description editor directly. |
| `tags` | Tags for the Steam Workshop page. Predefined by Project Zomboid Workshop. |
| `visibility` | Visibility of the mod. * `0` for public visibility (default), * `1` for friends-only visibility, * `2` for private (hidden) visibility. * `3` for unlisted visibility. |



Any modification to your Steam description will be overwritten by the game uploader with the informations from the `workshop.txt` file. **Make sure to make copies of your Steam descriptions after modifying them directly in Steam.**

## See also

*   Game files
*   mod.info

## Navigation

Modding

Modding community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding guides

Common modding issues • Creating a clothing mod • Creating a flier mod • Creating a hair mod • Creating a trait mod • Creating custom animations • Creating custom voices • Creating dynamic radio channels • Decompiling game code • File formats • Game files • Getting started with modding • Java • Lua "Lua (language)") • Mod optimization • Mod structure • Modeling • Mods • Rendering • Resolving problems with mods • Testing mods in multiplayer • Uploading mods

Modding resources

App ID • Animation • BBCode • Food types • item tag • mod.info • Networking • Startup parameters • Translation • workshop.txt • Workshop ID

Scripts

craftRecipe • Evolvedrecipe "Evolvedrecipe (scripts)") • Fixing "Fixing (scripts)") • Fluid "Fluid (scripts)") • Item "Item (scripts)") • Model "Model (scripts)") • Multistagebuild "Multistagebuild (scripts)") • Recipe "Recipe (scripts)") • Sandbox options • Sound "Sound (scripts)") • TimedAction "TimedAction (scripts)") • Vehicle "Vehicle (scripts)")

Lua (API) "Lua (API)")

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=Workshop.txt&oldid=1395233"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 Parameters

*   2 See also

*   3 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.5.1

Last modified

 This page was last edited on 23 May 2026, at 05:03.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

workshop.txt From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Workshop.txt>