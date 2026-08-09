<https://pzwiki.net/wiki/Animation>
Title: Animation - PZwiki

URL Source: https://pzwiki.net/wiki/Animation

Published Time: Sat, 08 Aug 2026 11:24:10 GMT

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

# Animation

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



This page was last updated for an _older_ version of the current build (42.15.0).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

**Animation** in Project Zomboid consist in the creation of custom animations and adding them to the game or replacing existing ones. The process involves both animating a skeleton of the character model, usually called a _rig_, exporting it to a format that the game can read (preferably GL Transmission Format `.glb`) and defining an AnimNode which will be used to play the animation in-game and define its properties.

You can find a list of available rigs for animating on the page Character rigs.

## Folder structure

_Main article: Mod structure_
The `anims_X` folder is used to store animation files. They can be put in subfolders for organization and can replace files with the same relative path. See the page file formats for more details.

**AnimSets** are put inside the `AnimSets` folder. An AnimSet is a collection of AnimStates and are usually associated to an entity such as the player, a zombie or an animal. AnimStates define a specific state the entity can be in, such as walking, running, or idle. For an AnimState, AnimNode are used to define the animations that can be played in that state, and for which conditions like the current speed of the entity playing a different animation, or the player being injured having a different stance.

In parallel, the game uses ActionGroups which are associated to an AnimSet, and are composed of ActionStates associated to a specific AnimState, to define transition conditions between the different states.



### Example

Below is the animation structure of the cow:

 This section contains source code from _Project Zomboid_

_**Retrieved**: Build 42.10.0_

media/
├── actiongroups/
│ └── cow/
│ ├── attack/
│ │ └── ...
│ ├── death/
│ │ └── ...
│ ├── eating/
│ │ └── ...
│ ├── falldown/
│ │ └── ...
│ ├── followwall/
│ │ └── ...
│ ├── hitreaction/
│ │ └── ...
│ ├── idle/
│ │ └── ...
│ ├── onground/
│ │ └── ...
│ ├── onhook/
│ │ └── ...
│ ├── pathfind/
│ │ └── ...
│ ├── trailer/
│ │ └── ...
│ ├── walk/
│ │ └── ...
│ └── zone/
│ └── ...
├── anims_X/
│ └── Cow/
│ └── ...
├── AnimSets/
│ └── cow/
│ ├── attack/
│ │ └── ...
│ ├── deadbody/
│ │ └── ...
│ ├── death/
│ │ └── ...
│ ├── eating/
│ │ └── ...
│ ├── falldown/
│ │ └── ...
│ ├── followwall/
│ │ └── ...
│ ├── hitreaction/
│ │ └── ...
│ ├── idle/
│ │ └── ...
│ ├── onground/
│ │ └── ...
│ ├── onhook/
│ │ └── ...
│ ├── pathfind/
│ │ └── ...
│ ├── trailer/
│ │ └── ...
│ ├── walk/
│ │ └── ...
│ └── zone/
│ └── ...
└── ...

## File types

The animation formats which can be used are:

Animation formats 
| Format | Description |
| --- | --- |
| Graphics Library Transmission Format (`.glb`) Recommended | Allows for substantially lighter file sizes in general when properly exported, but requires a specific rig setup (see Community rig). Can be hot reloaded. |
| Filmbox FBX (`.fbx`) | FBXs are more compatible with older rigs and have been the standard for animations for a while, but are extremely heavy in terms of file size. Can be hot reloaded. |
| DirectX (`.x`) Not recommended | The format used for most vanilla game assets, but is widely unsupported in modern animation software. It is highly recommended to not use this format for modding, as it can cause more issues than it solves, and there is no point to using it when the other formats are available and more widely supported. |

## See also

*   Creating custom animations – a step-by-step guide on how to create animations.
*   Game files – accessing game files, including animations.
*   Mod structure – explanation of the structure of a mod.
*   Importing assets - a guide on how to import in-game assets such as animations and models into Blender.

External tutorials 
| Tutorial | Description | Author | Last updated |
| --- | --- | --- | --- |
| How To Create an Animation | A guide on how to create an animation for Project Zomboid. | Dislaik | 2023 October 2 |

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

Retrieved from "https://pzwiki.net/w/index.php?title=Animation&oldid=1385283"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 Folder structureToggle Folder structure subsection
    *   1.1 Example

*   2 File types

*   3 See also

*   4 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.15.0
*   Version 42.10.0

Last modified

 This page was last edited on 23 May 2026, at 00:53.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Animation From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Animation>

<https://pzwiki.net/wiki/AnimZed>
Title: AnimZed - PZwiki

URL Source: https://pzwiki.net/wiki/AnimZed

Published Time: Sat, 08 Aug 2026 11:24:14 GMT

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

# AnimZed

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



This page was last updated for an _older_ version of the current build (42.19.0).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

AnimZed



Links

Tiddy Up Time



This is a future feature.

This is an unreleased tool that was mentioned by The Indie Stone in the blog post Tiddy Up Time. It was announced to be released during Build 42.

It has either been previewed or found in the game files and does not exist yet.

**AnimZed** is a tool used by The Indie Stone to create and edit animations for the game. Not a lot of informations are available about it for now, but the last informations given indicate a release during Build 42. The last blog post about it was Tiddy Up Time on August 29, 2024.

The tool is expected to allow easier managing of AnimNode, AnimStates and ActionStates. Hints in the game files indicate that AnimZed would be directly linked to the running game, notably to allow recording animations and to visually indicate how each animations played during the recording. The various plots visible in the blog post screenshot.

The Indie Stone stated in the NEXT STEPS 2") blog post that the mapping tools should be released after the stable release planned for Build 42.20") has received hotfixes and such:

“

After we hit Stable, once hot fixing and such is over, we will be releasing both our latest mapping tools (WorldZed, TileZed, etc.) and our in-house animation editor and integration tool, AnimZed. We believe that having greater control over animations will be of huge benefit to modders looking to unleash their creativity.

— The Indie Stonein the NEXT STEPS 2") blog post

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

Retrieved from "https://pzwiki.net/w/index.php?title=AnimZed&oldid=1443777"

 Last modified 

*   1 week ago

Contents

Back to top

Contents

*   1 Navigation

Categories: 
*   Future features
*   Modding

Hidden categories: 
*   English
*   Version 42.19.0

Last modified

 This page was last edited on 30 July 2026, at 14:43.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

AnimZed From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/AnimZed>

<https://pzwiki.net/wiki/App_ID>
Title: App ID - PZwiki

URL Source: https://pzwiki.net/wiki/App_ID

Published Time: Sat, 08 Aug 2026 11:24:25 GMT

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

# App ID

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

The `App ID` is a unique identifier for a game or application on the Steam platform. It is used to manage and reference the game within the Steam ecosystem, including for server management and modding purposes.

To find this ID, you can:

*   Check the URL of the game on the Steam store. The ID is the number in the URL. For example, for Project Zomboid, the URL is _https://store.steampowered.com/app/108600/Project\_Zomboid/_, and so the App ID is _108600_.

## See also

*   Workshop ID – the unique identifier for items on the Steam Workshop.
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

Retrieved from "https://pzwiki.net/w/index.php?title=App_ID&oldid=1385341"

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

 This page was last edited on 23 May 2026, at 00:54.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

App ID From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/App_ID>

<https://pzwiki.net/wiki/CartoZed>
Title: CartoZed - PZwiki

URL Source: https://pzwiki.net/wiki/CartoZed

Published Time: Sat, 08 Aug 2026 11:24:30 GMT

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

# CartoZed

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

**CartoZed** is a tool that can draw a top-down map from the game files, which should work with custom maps as well.

## External links

*   CartoZed - Mapping - The Indie Stone Forums

## See also

*   Project Zomboid Map Project

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

Retrieved from "https://pzwiki.net/w/index.php?title=CartoZed&oldid=1386867"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 External links

*   2 See also

*   3 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Pages with sections to fill
*   Articles in need of improvement

Last modified

 This page was last edited on 23 May 2026, at 01:32.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

CartoZed From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/CartoZed>

<https://pzwiki.net/wiki/Debug_mode>
Title: Debug mode - PZwiki

URL Source: https://pzwiki.net/wiki/Debug_mode

Published Time: Sat, 08 Aug 2026 11:24:48 GMT

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

# Debug mode

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



This page was last updated for an _older_ version of the current build (42.18.0).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

_For the previous version, see the archived page revision._



This article may be in need of improvement.

Editors are encouraged to add any missing information to the article, while verifying that the article's current content is correct. Edit (Create account)

**Debug mode** is a modified game state in Project Zomboid. In this mode, the player has access to multiple developer tools which can spawn items, enable various cheats, teleport the player to any destination, and more.

## Enabling



Entering `-debug` in the Steam's launch options

To enable debug mode, add `-debug` to the game's startup parameters prior to booting the game.

## Debug scenario



A list of debug scenarios

A list of debug scenarios can be found on the main menu, double-clicking will start the game in a predefined scenario.

Custom scenarios can be made by editing:

"DebugScenario.lua"

in the file folder:

"ProjectZomboid\media\lua\client\DebugUIs\Scenarios"

Or creating a new scenario.

## Debug Menu



Closed Debug Icon



Open Debug Icon

The Debug Menu is a user interface allowing the player to view/manipulate the game state.

While in a game, a gray bug icon on the left of the HUD will appear below the map icon when in debug mode. Clicking this, will make it turn green and display the debug menu.

## Main



The debug Main menu

Debug Menu -- Main

### General debuggers

A sub-menu with four additional menus: Game, Blood, Body, Search Mode

#### Game



General debuggers Game Menu

This option shows all general game options.

General Game Options | Option | Description | Variables |
| --- | --- | --- |
| GameSpeed | Adjust the game speed by moving the slider. Clicking the left and right arrows will increase/decrease the game speed by 0.1 increment at a time, or 1.0 if holding the sprint key (LShift by default). This value can range from 1 to 1000, with 0.1 increments. | default=1 fast-forward=5 fast-fast-forward=20 wait=40 |
| Get the choppah! | Spawns the helicopter event. | (button) |
| Remove the choppah! | Stops the helicopter event. | (button) |
| Stop current weather | Stops the current Weather event. | (button) |
| Disable radio/tv broadcasting | Disables radio and television broadcasts. | boolean |
| Disable media line registering |  | boolean |

#### Blood



Parts of the body for blood

Change the amount of blood _on the body_, randomize or zero all body parts.

#### Body



Player's Body and Status Menu

Player Stats and Body | Option | Description | Variables |
| --- | --- | --- |
| Hunger | Slider that affects the hunger moodle, increases to 1 naturally. | min=0 max=1 |
| Thirst | Slider that affects the thirst moodle, increases to 1 naturally. | min=0 max=1 |
| Fatigue | Slider that affects the tired moodle, increases to 1 naturally. | min=0 max=1 |
| Endurance | Slider that affects the endurance moodle, increases to 1 naturally. | min=0 max=1 |
| Fitness | Slider that affects the fitness skill. This is a dynamic skill that will increase and decrease depending on the player's actions in 0.2 increments (per level). | min=-1 max=1 |
| Drunkenness | Slider that affects the drunk moodle, decreases to 0 naturally. A full bottle of alcohol adds 0.41. A higher value will increase the fatigue moodle at a much higher rate. | min=0 max=100 |
| Anger | Slider that affects the angry moodle, decreases to 0 naturally. | min=0 max=1 |
| Fear | Slider that affects an unknown naturally static value. | min=0 max=1 |
| Pain | Slider that affects the pain moodle, decreases to 0 naturally. _Cannot be adjusted manually_ | min=0 max=100 |
| Panic | Slider that affects the panic moodle, decreases to 0 naturally. | min=0 max=100 |
| Morale | Slider that decreases to 0 naturally when stress is above 0.5. When stress is below 0.5, morale will instantly become 1.0. | min=0 max=1 |
| Stress | Slider that affects the stress moodle, decreases to 0 naturally. | min=0 max=1 |
| StressFromCigarettes | Slider that affects the stress moodle from cigarettes. | min=0 max=0.51 |
| TimeSinceLastSmoke | Slider that affects time since last cigarette was smoked. | min=0 max=10 |
| BoredomLevel | Slider that affects the bored moodle, decreases to 0 naturally. | min=0 max=100 |
| UnhappynessLevel (sic!) | Slider that affects the unhapiness. | min=0 max=100 |
| Sanity | Slider that can be adjusted when the BoredomLevel is above 50. | min=0 max=1 |
| Wetness | Slider that affects the wet moodle, decreases to 0 naturally. | min=0 max=100 |
| Temperature | Slider that affects the player's body temperature, affecting the hyperthermia and hypothermia moodles, decreases to 0 naturally. | min=20 max=40 |
| ColdDamageStage (hypo 4) | Slider that determines how much damage the player will take when the hypoermia moodle is at level 4. | min=0 max=1 |
| OverallBodyHealth | Slider that affects the player's overall health. | min=0 max=100 |
| CatchAColdStrength | Slider that affects the cold moodles, increaes to 100 naturally when above 1.0. | min=0 max=100 |
| Sickness | Slider that determines the sick moodle. Adjusts with InfectionLevel and FakeInfectionLevel _Cannot be adjusted manually_ | min=0 max=1 |
| InfectionLevel | Slider that affects the player's progress towards zombification, increasing rate of damage taken. | min=0 max=100 |
| FakeInfectionLevel | Slider that affects the player's sickness, naturally occurs with the hypochondriac trait. | min=0 max=100 |
| FoodSicknessLevel | Slider that affects the player's sickness, naturally occurs after eating bad food. | min=0 max=100 |
| Calories | Slider that affects the player's calories. | min=-2200 max=3700 |
| Weight | Slider that affects the player's weight. | min=35 max=130 |
| IsInfected | Checkbox that determines whether the player has the zombie infection. | boolean |
| IsFakeInfected | Checkbox that determines whether the player should have zombie infection symptoms without being infected. | boolean |
| IsOnFire | Checkbox that determines whether the player is on fire. | boolean |
| Ghost | Checkbox that determines whether the zombies can see the player, and zombies can be seen regardless of visibility. | boolean |
| God Mode | Checkbox that determines whether the player is in god mode. Gives the player invincibility, i.e., takes no damage, max hunger, thirst, etc. | boolean |
| Invisible | Checkbox that determines whether the player is in invisible. | boolean |

#### SearchMode



Debug Search Mode Menu

SearchMode Debug | Option | Description | Variables |
| --- | --- | --- |
| SearchMode Overlay | Activates the grey SearchMode overlay | boolean |
| SearchMode Activated | Activates Search Mode | boolean |
| Debug Icons | Display a text overlay for every foraging item on the ground. | boolean |
| Debug Icons Locations | Display direction arrows to foraging items | boolean |
| Debug Icons Extended Info | Display additional info for foraging items | boolean |
| Debug Icons Vision Info | Display Vision info | boolean |
| Debug Icons Vision Radius | Display visibility radius around foraging items | boolean |
| Debug Search Window Info | Display debug info in Search Mode window | boolean |
| Fade Time (Seconds) |  | min 0 max 5 |
| Target Radius (Exterior) |  | min max |
| Target Radius (Interior) |  | min max |
| Target Gradient Width (Exterior) |  | min max |
| Target Gradient Width (Interior) |  | min max |
| Target Blur (Exterior) |  | min max |

### Cheats



In game Debug Cheats Menu

| Option | Description | Variables |
| --- | --- | --- |
| Invisible | Checkbox that makes you invisible to zombies and players. | boolean |
| God Mode | Checkbox that makes you immune to all damage, environmental effects, and removes all status effects. | boolean |
| No Clip | Checkbox lets you move thru walls and collision iles. | boolean |
| Fast Move | Checkbox that makes you change vertical position instantly by pressing page up or down. | boolean |
| Timed Action Instant | Checkbox that determines whether your actions are done almost instantly. *NOTE: Not all actions do support this function* | boolean |
| Unlimited Carry | Checkbox that determines whether you can carry unlimited amount of items. | boolean |
| Unlimited Endurance | Checkbox that determines whether you can carry unlimited amount of [[endurance]]. | boolean |
| Unlimited Ammo | Checkbox that determines whether you have unlimited ammo. | boolean |
| Know All Recipes | Checkbox that determines whether you know all crafting and building recipes. | boolean |
| Build Cheat mode | Build anything without materials. | boolean |
| Agriculture Cheat mode | Enable debug menu for crop Skill. | boolean |
| Fishing Cheat mode | Enable cheat for Fishing. | boolean |
| Health panel Cheat mode | Get exact health statistics on the Health screen, and cure or create injuries. | boolean |
| Mechanics Cheat mode | Enable cheats related to Vehicle maintenance. | boolean |
| Moveable Cheat | Lets you move anything Moveable object regardless of tools or skills. | boolean |
| Can See Everyone | Can see all players on the map and in the world. | boolean |
| Can Hear Everyone | Can hear all players in the voice chat. | boolean |
| Zombies Don't Attack. | Zombies do not attack you. | boolean |
| Brush Tool | Place any tile that you want. | boolean |
| LootZed | Show distribution. | boolean |
| LootLog | Output all loot spawn in console.txt | boolean |
| Animal Cheat | Enable cheats for animals. | boolean |
| Animal Extra Values | Show extra values for animal testing. | boolean |

### Climate debuggers



This article may be outdated.

Editors are encouraged to update this article with new information. Edit (Create account)



The climate control panel

#### FX panel

This is opened by selecting "Other debuggers", then "WeatherFX Panel". Here you can play around with various values such as fog intensity, precipitation levels and precipitation type. Please note that to play around with these you will need to disable the ‘Climate’ manager or the simulated daily climate will overrule your changes.

_Please also note that fog enabled through this method is for testing fog masking around buildings, and won’t look as good/varied as the fog generated by the virtual climate system – as it won’t take into account color or desaturation._

#### Climate view panels

The debug climate control and climate values panels can be accessed by selecting "Other debuggers", then "Weather plotter" and "Daily values" respectively. These panels provide a stockmarket-type graph of the current/recent weather over hours (H1), days (D1) and months (M1)

To see what values are running under the bonnet use the legend/panel on the right, and values turned on will be green. The climate values panel, meanwhile, displays additional info about seasons, cloud cover, etc.

These panels are overall for the provision of information, but that said when you toggle "airMass" on, when it crosses the 0 middle line you will see weather generated when airmass switches from hot/cold.

#### Thunder panel

This panel can be opened by selecting "Other debuggers", then "Thunderbug", but is only useful if there is a storm active. A geographical indication of where the storm is over the PZ map can be seen, as well as lightning locations.

### Craft Recipes



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Entities



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Fluids



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Items List



Allows the spawning of any item in-game to the player's inventory.

### Player's Stats



Access to player traits and skills interface.

### Recipe Monitor



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Sandbox Settings



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Script Manager



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### XUI Debugger



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

## Dev



The debug Main menu

The Developer advanced tab of the debug menu.

### Anim monitor



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Animation Viewer

_Main article: Animation Viewer_
Allows to view game's animations using a man wearing only white underwear model or the various animals.

### Attachment Editor

_Main article: Attachment Editor_
Gives access to multiple tools to modify and adjust 3D model positions based on various bone attachment points on the character model and adjust them to be properly rotated, translated, or scaled per attachment bone.

### Audio



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Character Debugger



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Chunk Debugger



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Forget Recipes



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Global Mod Data



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Global Objects



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### isoRegions



The IsoRegions panel

This will display all buildings (including player-made) and can be used to detect when buildings are fully closed off from the PZ map – and as such will allow fog/precipitation to surround structures, but not appear within them. PLEASE NOTE: this is a real performance hog, so may well slow down the game when turned on.

### Map Editor



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### New UI



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Stash debuggers



Allows the debugging of "annotated map" house stashes.

### Unit Tests



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Vehicle Editor



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

Allows for editing in-game vehicles. After opening an empty scenery with vehicle model is shown, camera can be adjusted for views: Front, Rear, Side, From above, From below. On left side an menu for editing vehicle is given.

### World Flares



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Zombie Population



Shows all zombies as coloured squares on a map. An yellow square means an active zombie and red inactive one, green square is the player. This window also shows white square outline as the player cell affecting the zomboids' AI, huge white cells affecting zombies, a number of active and inactive zombies in each cell shown in top left corner of cell with zomboids, red cells which shows chunks that contain any buildings in, area of buildings (or just floor tiles, needs more testing), borders of each room of a building and blue shapes which are any furniture or building parts such as walls - both map and player-made. Opening this window for the first time since start-up centers on player, but unfortunately does not follow player, instead view stays in place. Holding RMB (Right Mouse Button, using LMB will move whole window instead) in area of the zombie population window and moving mouse allows to move the view, you can also use scroll to zoom in/out the view.

### Zomboid Radio



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

## Contextual menus



There are new contextual menus available in the debug mode available from right click menu. Debug related right click menu's and information are marked with the green bug icon.

### Main



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### UIs



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Objects

Available only when clicking some tiles.



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Zombies



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Brush Tool Manager



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Copy tile

This option allows to copy and then paste a tile that is right clicked. There is a submenu to select tile, handy if multiple tiles are present in the spot. A tile ID is also shown.

### Destroy tile

This option allows to destroy a tile that is right clicked, similar to the sledgehammer, except it works on any kind of tiles. There is a submenu to select tile, handy if multiple tiles are present in the spot. A tile ID is also shown.

### Item

#### Edit Item



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

#### Destroy Item

Allows to destroy item permanently, similar to trash cans.

## Map options



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

## Command console

Also known as **Lua Console** in options.



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

## Lua Debugger

The **Lua Debugger** can be accessed by pressing F11 by default (which can be rebound in options); breaking into debugger at the next available Lua (disambiguation) entry point. A list of all loaded Lua files are displayed on the right, with the currently selected file above the list. The line highlighted green is the entry point to the debugger, allowing for quick in-game debugging.

### Map Debugger

The map debugger is opened by clicking the "Map" button at the top. The player can teleport to the location of the cursor, by pressing T. There is no prompt to inform the user of the teleport; after closing the debugger, the player will have teleported.

### Options



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

Within the Lua Debugger menu there is an **options** menu with a long drop down, you can select from a variety of sources to help you find further information about your current session. Be careful with these options because some of them might cause your client to freeze and continuously crash upon launch. If this happens you can set the offending option to false in C:\Users\Username\Zomboid\debug-options.init.

### DebugLog



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Errors



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Current Coroutine



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Lua file browser



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Watch Window



This article may need more content.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

### Lua Files

You can use the in-game Lua file browser to search for the .lua file you're modifying and select it where it will be updated in the above window. If you make changes to the file, you can hit the "reload file" button and it will attempt to apply the changes you made in-game, though this is often an unreliable way to test recently updated code.

## Gallery

*    Finding items in debug mode Military Research Facility 
*    Finding items in debug mode Military Research Facility 
*    Finding items in debug mode Military Research Facility 
*    Finding items in debug mode Military Research Facility 
*    Finding items in debug mode Military Research Facility 
*    Finding items in debug mode Military Research Facility 

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

Retrieved from "https://pzwiki.net/w/index.php?title=Debug_mode&oldid=1442683"

 Last modified 

*   3 weeks ago

Contents

Back to top

Contents

*   1 Enabling

*   2 Debug scenario

*   3 Debug Menu

*   4 MainToggle Main subsection
    *   4.1 General debuggers
        *   4.1.1 Game

        *   4.1.2 Blood

        *   4.1.3 Body

        *   4.1.4 SearchMode

    *   4.2 Cheats

    *   4.3 Climate debuggers
        *   4.3.1 FX panel

        *   4.3.2 Climate view panels

        *   4.3.3 Thunder panel

    *   4.4 Craft Recipes

    *   4.5 Entities

    *   4.6 Fluids

    *   4.7 Items List

    *   4.8 Player's Stats

    *   4.9 Recipe Monitor

    *   4.10 Sandbox Settings

    *   4.11 Script Manager

    *   4.12 XUI Debugger

*   5 DevToggle Dev subsection
    *   5.1 Anim monitor

    *   5.2 Animation Viewer

    *   5.3 Attachment Editor

    *   5.4 Audio

    *   5.5 Character Debugger

    *   5.6 Chunk Debugger

    *   5.7 Forget Recipes

    *   5.8 Global Mod Data

    *   5.9 Global Objects

    *   5.10 isoRegions

    *   5.11 Map Editor

    *   5.12 New UI

    *   5.13 Stash debuggers

    *   5.14 Unit Tests

    *   5.15 Vehicle Editor

    *   5.16 World Flares

    *   5.17 Zombie Population

    *   5.18 Zomboid Radio

*   6 Contextual menusToggle Contextual menus subsection
    *   6.1 Main

    *   6.2 UIs

    *   6.3 Objects

    *   6.4 Zombies

    *   6.5 Brush Tool Manager

    *   6.6 Copy tile

    *   6.7 Destroy tile

    *   6.8 Item
        *   6.8.1 Edit Item

        *   6.8.2 Destroy Item

*   7 Map options

*   8 Command console

*   9 Lua DebuggerToggle Lua Debugger subsection
    *   9.1 Map Debugger

    *   9.2 Options

    *   9.3 DebugLog

    *   9.4 Errors

    *   9.5 Current Coroutine

    *   9.6 Lua file browser

    *   9.7 Watch Window

    *   9.8 Lua Files

*   10 Gallery

*   11 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.18.0
*   Pages with sections to fill
*   Articles in need of improvement
*   Outdated articles
*   Stub articles

Last modified

 This page was last edited on 19 July 2026, at 23:37.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Debug mode From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Debug_mode>

<https://pzwiki.net/wiki/Food_types>
Title: Food types - PZwiki

URL Source: https://pzwiki.net/wiki/Food_types

Published Time: Sat, 08 Aug 2026 11:24:54 GMT

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

# Food types

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



This page was last updated for an _older_ version (41.78.19).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

_For the previous version, see the archived page revision._

**Warning: Everything below has been programmatically generated - any changes made will be lost on the next update!** If you would like to generate this file please use the github repo found here. All item names have been modified for readability and linkability.

Project Zomboid uses food types to define food items. The following table shows the food types assigned to specific items.

## Food Types

| Tag | Items |
| --- | --- |
| Bean | Bowl of Beans, Black Beans, Black Beans (Dried), Chick Peas (Dried), Kidney Beans (Dried), White Beans (Dried), Canned Beans, Refried Beans |
| Beef | Beef Jerky, Canned Corned Beef, Beef Patty, Ground Beef, Steak |
| Beer | Beer Bottle, Beer Can |
| Berry | Berries (beautyberry), Berries, Berries, Berries, Berries, Berries, Berries, Berries, Berries, Berries (holly berry), Rose Hips, Berries (winterberry) |
| Bread | Baguette, Bread, Bread Slices |
| Candy | Licorice Allsorts, Candy Corn, Candied Fruit Slices, Gummy Bears, Gummy Worms, Hard Candies, Jellybeans, Jujubes, Licorice, Licorice, Rock Candy |
| Cheese | Cheese, Processed Cheese |
| Chocolate | Chocolate Chips |
| Citrus | Lemon, Lime |
| Cocoa | Cocoa Powder |
| Coffee | Coffee |
| Egg | Egg, Egg (Boiled), Omelette, Egg (Poached), Egg (Scrambled), Omelette, Wild Eggs |
| Fish | Canned Sardines, Fish Fillet, Fish (Fried), Salmon, Canned Tuna |
| Fruits | Apple, Banana, Canned Fruit Cocktail, Canned Peaches, Canned Pineapple, Cherry, Grapefruit, Grapes, Mango, Orange, Peach, Pear, Pineapple, Watermelon, Watermelon Slice, Watermelon Chunks |
| Game | Frog Meat, Rabbit Meat, Rodent Meat, Small Bird Meat |
| Greens | Dandelions, Lettuce |
| Herb | Basil, Black Sage, Chives, Cilantro, Common Mallow, Lemongrass, Nettles, Oregano, Parsley, Rosemary, Sage, Thistles, Thyme, Wild Garlic |
| HotPepper | Habanero, Jalapeno |
| Juice | Canned Fruit Beverage, Juice Box |
| Liquor | Bourbon |
| Meat | Canned Spaghetti Bolognese, Canned Chili, Canned Dog Food, Ham, Ham Slice, Hot Dog, Meat Dumpling, Mutton Chop, Pork Chop |
| Milk | Canned Evaporated Milk, Milk Carton |
| Mushroom | Canned Mushroom Soup, Mushrooms, Mushrooms, Mushrooms, Mushrooms, Mushrooms, Mushrooms, Mushrooms |
| NoExplicit | Biscuit, Fried Chicken, Chicken Nuggets, Milk Chocolate Bar, Chocolate-Covered Coffee Beans, Cornbread, Crackers, Fish Roe, Flour, Ginger (Pickled), Ginger Root, Ginseng, Gravy, Guacamole, Hot Sauce, Icing, Fruit Jam, Marmalade, Ketchup, Lard, Maple Syrup, Margarine, Marinara, Marshmallows, Mayonnaise, Mayonnaise "Bottle with Mayonnaise (Full)"), Mustard, Peanut Butter, Pepper, Pickle, Pumpkin, Rice Vinegar, Salt, Seaweed, Soy Sauce, Tomato Paste, Violets, Wasabi, Yogurt |
| Nut | Acorn, Peanuts |
| Oil | Olive Oil, Vegetable Oil |
| Pasta | Dry Ramen Noodles |
| Poultry | Chicken Leg |
| Rice | Rice (crafted pot), Rice (crafted pan) |
| Sausage | Baloney, Baloney Slices, Pepperoni, Salami, Salami Slices, Sausage |
| Seafood | Crayfish, Lobster, Oysters, Oysters (Fried), Shrimp, Shrimp Dumpling, Fried Shrimp, Fried Shrimp, Squid, Squid Calamari |
| Seed | Sunflower Seeds |
| SoftDrink | Diet Cola, Diet Cola, Diet Cola, Orange Soda |
| Stock | Bouillon Cube |
| Sugar | White Sugar, Brown Sugar, Sugar Packet |
| Tea | Tea Bag |
| Vegetables | Avocado, Bell Pepper, Broccoli, Canned Carrots, Canned Corn, Canned Peas, Canned Potato, Canned Tomato, Carrots, Corn, Packaged Corn, Daikon, Lentils (Dried), Split Peas (Dried), Edamame, Eggplant, Fried Onion Rings, Fried Onion Rings, Grape Leaves, Leek, Packaged Vegetables, Onion, Onion Slices, Packaged Peas, Canned Vegetable Soup, Tofu, Tofu (Fried), Zucchini |
| Wine | White Wine, Red Wine |

Retrieved from "https://pzwiki.net/w/index.php?title=Food_types&oldid=1368677"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 Food Types

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 41.78.19

Last modified

 This page was last edited on 22 May 2026, at 02:42.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Food types From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Food_types>

<https://pzwiki.net/wiki/GUID>
Title: GUID - PZwiki

URL Source: https://pzwiki.net/wiki/GUID

Published Time: Sat, 08 Aug 2026 11:24:58 GMT

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

# GUID

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

A GUID is a 128-bit number used to uniquely identify information in computer systems. In Project Zomboid, it is more commonly used in different systems such as the clothing and outfits.

These unique IDs generation relies on the principle that it is statistically improbable for the same number to be generated twice, which makes it suitable to add identifiers to objects without being aware of other existing identifiers. This principle is directly applicable to modding where different mods may add new clothing items or outfits without being dependent on each other.



Technically, Project Zomboid doesn't verify the GUIDs follow the format of a proper GUID, it only checks the number of characters. This means you can have a GUID with your own name, mod name etc to make it properly unique as long as it respects the character count.



In practice GUIDs aren't actually good nor useful in their current usage in Project Zomboid modding because items "Item (scripts)") and other various object definitions rely on simple text based identifiers chosen by modders, even clothing items themselves, so clashes can still happen easily if modders don't rely on technics to create identifiers for their objects.

## GUID generators

Various GUID generators are available online, here are some examples:

*   https://www.guidgenerator.com/
*   https://www.uuidgenerator.net/guid

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

Retrieved from "https://pzwiki.net/w/index.php?title=GUID&oldid=1301809"

 Last modified 

*   7 months ago

Contents

Back to top

Contents

*   1 GUID generators

*   2 Navigation

Category: 
*   Modding

Hidden category: 
*   English

Last modified

 This page was last edited on 26 December 2025, at 01:20.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

GUID From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/GUID>

<https://pzwiki.net/wiki/Hot_reloading>
Title: Hot reloading - PZwiki

URL Source: https://pzwiki.net/wiki/Hot_reloading

Published Time: Sat, 08 Aug 2026 11:25:02 GMT

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

# Hot reloading

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



This page was last updated for an _older_ version of the current build (42.14.0).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

**Hot reloading** is a process that allows modders to directly apply changes of their mod files in-game without having to reload the game. This is often used for Lua "Lua (API)"), Animations and Modeling but can also be used for Scripts.

This can be done via the Debug menu") (F11) but is easier to manage via the Community Debug Tools.

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

Retrieved from "https://pzwiki.net/w/index.php?title=Hot_reloading&oldid=1324301"

 Last modified 

*   6 months ago

Contents

Back to top

Contents

*   1 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.14.0

Last modified

 This page was last edited on 16 February 2026, at 22:40.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Hot reloading From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Hot_reloading>

<https://pzwiki.net/wiki/IntelliJ_IDEA>
Title: IntelliJ IDEA - PZwiki

URL Source: https://pzwiki.net/wiki/IntelliJ_IDEA

Published Time: Sat, 08 Aug 2026 11:25:07 GMT

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

# IntelliJ IDEA

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

IntelliJ IDEA



Links

IntelliJ IDEA website

IntelliJ IDEA download page

**IntelliJ IDEA** is an Integrated development environment (IDE) used by Project Zomboid modders. It is most useful to parse the Java files of the game.



Make sure to download the **Community Edition** of IntelliJ IDEA which is free compared to the **Ultimate Edition**.

## Tips and tricks

*   You can open an entire folder as a workspace, making it easier to navigate the files. Useful to search for specific elements in the game files. To search in an entire folder, press Ctrl+⇧ Shift+F and select the folder you want to search in.
*   You can search for Java classes by pressing Ctrl+N and typing the name of the class you want to find. This is useful for quickly navigating to specific classes in the decompiled code.
*   By holding Ctrl then left clicking on a used method or class, you can quickly navigate to its definition.
*   By holding Ctrl then left clicking on the definition of a method or class, you can see the various usages of that method or class in the code.

## Remote debugging

_Main article: Remote debugging_
To setup remote debugging with IntelliJ IDEA, you need to set up a remote debugging configuration. This allows you to connect to the game process and debug it remotely. Follow the steps below to set up remote debugging in IntelliJ IDEA:

*   Open IntelliJ IDEA and open the decompiled game code as a project.
*   Top right corner, click _"Current file"_ to open a dropdown menu. This might be something else if you used it already, it should be next to a play button, a green bug button and a three vertical dots button.
*   Open _"Edit Configurations..."_.
*   Click the _"+"_ button to add a new configuration (top left).
*   Select _"Remote JVM Debug"_ from the list.
*   In the _"Name"_ field, enter a name for the configuration (e.g. _"Project Zomboid Remote Debug"_ or _"Attach to PZ"_), this is just for your reference.
*   The other fields should already be set correctly. If you are having issues, check the following: 
    *   _Transport_ is set to _Socket_
    *   _Host_ is set to _localhost_
    *   _Port_ is set to _5005_

*   Click _"OK"_ to save the configuration.

To start remote debugging, you need to start the game with the remote debugging options enabled. You can do this by adding the following JVM argument to the game launch options:



Make sure to have remapped the game files first, see Zomboid Decompiler for more information.

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

Retrieved from "https://pzwiki.net/w/index.php?title=IntelliJ_IDEA&oldid=1389579"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 Tips and tricks

*   2 Remote debugging

*   3 Navigation

Category: 
*   Modding

Hidden category: 
*   English

Last modified

 This page was last edited on 23 May 2026, at 02:40.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

IntelliJ IDEA From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/IntelliJ_IDEA>

<https://pzwiki.net/wiki/Item_tag>
Title: item tag - PZwiki

URL Source: https://pzwiki.net/wiki/Item_tag

Published Time: Sat, 08 Aug 2026 11:25:12 GMT

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

# item tag

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

Item tag

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

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



This article was automatically generated.

Any changes to this page will be overwritten automatically.

Script source: pz-wiki_parser (GitHub)

Project Zomboid uses tags for various aspects of the game, such as in recipes. The following table shows what items count towards a specific tag.

## Tags

| Tag | Items |
| --- | --- |
| base:2diamondjewellery "2diamondjewellery (tag)") | Dangly Earrings - Diamond |
| base:2emeraldjewellery "2emeraldjewellery (tag)") | Dangly Earrings - Emerald, Earrings - Emerald |
| base:2rubyjewellery "2rubyjewellery (tag)") | Dangly Earrings - Ruby, Earrings - Ruby |
| base:2sapphirejewellery "2sapphirejewellery (tag)") | Dangly Earrings - Sapphire Stone, Earrings - Sapphire Stone |
| base:aerosol "Aerosol (tag)") | Hair Spray, Insect Repellent |
| base:alcoholicbeverage "Alcoholicbeverage (tag)") | Base.HotDrinkCopper "Beverage (mug)"), Base.HotDrinkGold "Beverage (mug)"), Base.HotDrinkMetal "Beverage (mug)"), Base.HotDrinkSilver "Beverage (mug)"), Base.HotDrinkTumbler "Beverage (tumbler)"), Beverage (mug), Hot Drink, Hot Drink "Hot Teacup (ceramic)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)") |
| base:alreadybroken "Alreadybroken (tag)") | Broken Branch, Broken Branch with Nails, Broken Large Handle, Broken Large Handle with Nails, Broken Long Stick, Broken Plank, Broken Plank with Nails, Broken Table Leg, Broken Table Leg with Nails |
| base:alreadycooked "Alreadycooked (tag)") | Baguette, Pancakes, Toast |
| base:aluminum "Aluminum (tag)") | Aluminum Foil, Aluminum Fragments |
| base:alwayshasstuff "Alwayshasstuff (tag)") | First Aid Kit, First Aid Kit |
| base:amethystjewellery "Amethystjewellery (tag)") | Silver Belly Button Ring with Amethyst |
| base:ammo "Ammo (tag)") | .223 Round, 7.62x51mm Round, .38 Special Round, .44 Magnum Round, .45 ACP Round, 5.56x45mm Round, 9x19mm Round, 12g Round |
| base:ammocase "Ammocase (tag)") | Ammunition Box, Ammunition Box, Ammunition Box, Ammunition Box, Ammunition Box, Ammunition Box, Ammunition Box, Ammunition Box, Ammunition Box, Ammunition Box, Bulky Ammo Container, Bulky Ammo Container, Bulky Ammo Container, Bulky Ammo Container, Bulky Ammo Container, Bulky Ammo Container, Bulky Ammo Container, Bulky Ammo Container, Bulky Ammo Container, Bulky Ammo Container, Bullets Bandolier, Bullets Bandolier, Bullets Bandolier |
| base:animalbone "Animalbone (tag)") | Animal Bone, Large Animal Bone, Sharp Bone Fragment |
| base:animalbrain "Animalbrain (tag)") | Animal Brain, Small Animal Brain |
| base:animalcorpse "Animalcorpse (tag)") | Animal Corpse |
| base:animalhead "Animalhead (tag)") | Boar Head, Boar Head, Bull Head, Bull Head, Bull Head, Calf Head, Calf Head, Calf Head, Chick Head, Chicken Head, Chicken Head, Cow Head, Cow Head, Cow Head, Doe Head, Ewe Head, Ewe Head, Fawn Head, Lamb Head, Lamb Head, Piglet Head, Piglet Head, Rabbit Head, Rabbit Head, Rabbit Head, Rabbit Kitten Head, Rabbit Kitten Head, Rabbit Kitten Head, Raccoon Head, Raccoon Head, Raccoon Head, Ram Head, Ram Head, Rooster Head, Rooster Head, Sow Head, Sow Head, Stag Head, Turkey Head, Turkey Poult Head, Turkey Tom Head |
| base:animalskull "Animalskull (tag)") | Bull Skull, Bull Skull - Jawless, Calf Skull, Chick Skull, Chicken Skull, Cow Skull, Cow Skull - Jawless, Deer Skull, Deer Skull - Jawless, Fawn Skull, Lamb Skull, Pig Skull, Pig Skull - Jawless, Piglet Skull, Rabbit Kitten Skull, Rabbit Skull, Raccoon Skull, Ram Skull, Rooster Skull, Sheep Skull, Sheep Skull - Jawless, Stag Skull, Stag Skull - Jawless, Turkey Poult Skull, Turkey Skull |
| base:applyownername "Applyownername (tag)") | Badge, Business Card, Credit Card, Diary, Diary, Dog Tags, Dog Tags, Dog Tags, ID Card, ID Card, ID Card, Parking Ticket, Passport, Press Badge, Security Pass Key Ring, Speeding Ticket |
| base:awkwardgloves "Awkwardgloves (tag)") | Boxing Gloves, Boxing Gloves, Ice Hockey Gloves, Ice Hockey Gloves, Ice Hockey Gloves, Ice Hockey Gloves |
| base:awl "Awl (tag)") | Awl, Awl - Bone, Awl - Stone, Handiknife, Ice Pick, Multitool, Small Punch and Chisel Set |
| base:bagsfillexception "Bagsfillexception (tag)") | Book "Book (hollow)"), Book "Book (hollow handgun)"), Book "Book (hollow kids)"), Book "Book (hollow prison)"), Book "Book (hollow valuables)"), Book "Book (hollow whiskey)"), Bullets Bandolier, Bullets Bandolier, Bullets Bandolier, Bullets Bandolier, Cashbox, Chinese Takeout Container, Cigar Box, Cigar Box, Cigar Box, Cigar Box, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cookie Jar, Cookie Jar - Teddy Bear, Duffel Bag, First Aid Kit, First Aid Kit, First Aid Kit, First Aid Kit - Camping, First Aid Kit - Camping, First Aid Kit - Military, Fishing Basket, Golf Bag, Halloween Candy Bucket, Hatbox, Hide Wallet, Holster - Shoulder, Humidor, Jewelry Box, Jewelry Box, Key Ring, Key Ring, Key Ring - 12, Key Ring - 34, Key Ring - 58, Key Ring - American Eagle, Key Ring - Bass, Key Ring - Blue Fox, Key Ring - Bug, Key Ring - Eight Ball, Key Ring - Forged, Key Ring - Four-Leaf Clover, Key Ring - Gold, Key Ring - Hotdog, Key Ring - Kitty, Key Ring - Large, Key Ring - Nolan's Used Cars, Key Ring - Panther, Key Ring - Pine Tree, Key Ring - Praying Hands, Key Ring - Rabbit Foot, Key Ring - Rainbow Star, Key Ring - Rubber Duck, Key Ring - Sexy, Key Ring - Silver, Key Ring - Spiffos, Key Ring - Stinky Face, Key Ring - West Maple Country Club, Leatherbound Book "Leatherbound Book (hollow)"), Makeup Case, Pencil Case, Pencil Case, Photo Album, Photo Album, Pouch, Pouch, SWAT Duffel Bag, Security Pass Key Ring, Sewing Kit, Shells Bandolier, Shells Bandolier, Shoebox, Takeout Container, Tool Roll - Fabric, Tool Roll - Leather, Wallet, Wallet, Wallet |
| base:bakingfat "Bakingfat (tag)") | Butter, Lard, Margarine, Olive Oil, Vegetable Oil |
| base:ballpeenhammer "Ballpeenhammer (tag)") | Ball-peen Hammer, Ball-peen Hammer |
| base:barehands "Barehands (tag)") | Bare Hands |
| base:barstock "Barstock (tag)") | Iron Bar, Steel Bar |
| base:barstockhalf "Barstockhalf (tag)") | Iron Bar Half, Steel Bar Half |
| base:barstockquarter "Barstockquarter (tag)") | Iron Bar Quarter, Steel Bar Quarter |
| base:binding "Binding (tag)") | Denim Strips, Denim Strips (Dirty), Leather Strips, Leather Strips (Dirty), Rag, Rag (Dirty), Twine |
| base:birdskull "Birdskull (tag)") | Chick Skull, Chicken Skull, Rooster Skull, Turkey Poult Skull, Turkey Skull |
| base:blade "Blade (tag)") | Kitchen Knife Blade, Small Knife |
| base:block "Block (tag)") | Iron Block, Steel Block |
| base:blowerfan "Blowerfan (tag)") | Blower Fan |
| base:bluepen "Bluepen (tag)") | Crayons, Marker - Blue, Multi-Color Pen, Pen - Blue |
| base:boltcutters "Boltcutters (tag)") | Bolt Cutters |
| base:boostsflurecovery&action=edit&redlink=1 "Boostsflurecovery (tag) (page does not exist)") | Chamomile (Dried) "Chamomile (Dried)"), Honey, Mint (Dried) "Mint (Dried)") |
| base:bottleopener "Bottleopener (tag)") | Bottle Opener, Handiknife, Key Ring Bottle Opener, Multitool |
| base:bowl "Bowl (tag)") | Bowl, Bowl |
| base:braintan "Braintan (tag)") | Bowl of Brain Tan |
| base:brake "Brake (tag)") | Brake - Old (Heavy-Duty Vehicle) "Brake - Old (Heavy-Duty Vehicle)"), Brake - Old (Sports Vehicle) "Brake - Old (Sports Vehicle)"), Brake - Old (Standard Vehicle) "Brake - Old (Standard Vehicle)"), Brake - Performance (Heavy-Duty Vehicle) "Brake - Performance (Heavy-Duty Vehicle)"), Brake - Performance (Sports Vehicle) "Brake - Performance (Sports Vehicle)"), Brake - Performance (Standard Vehicle) "Brake - Performance (Standard Vehicle)"), Brake - Regular (Heavy-Duty Vehicle) "Brake - Regular (Heavy-Duty Vehicle)"), Brake - Regular (Sports Vehicle) "Brake - Regular (Sports Vehicle)"), Brake - Regular (Standard Vehicle) "Brake - Regular (Standard Vehicle)") |
| base:breakfiber "Breakfiber (tag)") | Medium Handle, Short Bat, Wooden Rod |
| base:breakonsmithing "Breakonsmithing (tag)") | Ceramic Bar Mold, Ceramic Ingot Mold, Kitchen Tongs, Simple Wooden Tongs |
| base:breakwhenwet "Breakwhenwet (tag)") | Magazine Body Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor |
| base:brokenglass "Brokenglass (tag)") | Broken Glass, Smashed Bottle |
| base:bucket "Bucket (tag)") | Bucket, Bucket, Bucket, Bucket, Bucket, Bucket, Large Bucket, Paint Bucket |
| base:buckle "Buckle (tag)") | Belt |
| base:buildingkey "Buildingkey (tag)") | Key |
| base:burlapbag "Burlapbag (tag)") | Sack, Sack, Sack, Sack, Sack, Sack, Sack |
| base:butcheranimal "Butcheranimal (tag)") | Butterfly Knife, Fighting Knife, Fillet Knife, Hand Axe, Hand Scythe, Hand Scythe, Handguard Dagger, Handiknife, Hatchet, Hatchet, Hunting Knife, Hunting Knife, Kitchen Knife, Kitchen Knife, Large Knife, Long Simple Metal Knife, Long Stone Knife, Machete, Machete, Machete Blade Knife, Meat Cleaver, Meat Cleaver, Multitool, Paring Knife, Pocket Knife, Railroad Spike Knife, Scrap Metal Chopper, Scrap Metal Cleaver, Scrap Metal Large Knife, Small Knife, Steak Knife, Stone Knife, Sushi Knife, Switchblade |
| base:button "Button (tag)") | Button, Large Bone Bead |
| base:camera "Camera (tag)") | Camera, Disposable Camera, High-end Camera |
| base:canbedividedinbowls "Canbedividedinbowls (tag)") | Pasta (crafted pot), Pasta (crafted pot), Rice (crafted pot), Rice (crafted pot), Copper Saucepan with Pasta, Copper Saucepan with Rice, Pasta "Pasta (crafted pan)"), Pasta, Pasta "Pasta (crafted pot)"), Pasta, Soup, Pot of Soup, Soup, Pot of Stew, Stew, Rice "Rice (crafted pan)"), Rice "Rice (crafted pot)"), Rice "Rice (crafted pot)"), Pasta (crafted pan), Rice (crafted pan) |
| base:canbedyed "Canbedyed (tag)") | Bandana - Tied, Baseball Cap, Baseball Cap, Beanie, Crop Top, Crop Top - Arms, Dress, Golf Cap, Hoodie, Hoodie, Jacket, Knee-length Dress, Knee-length Skirt, Long Dress, Long Skirt, Long Sleeve T-shirt, Long Sleeve T-shirt, Mini Skirt, Pants, Pants, Shell Suit Jacket, Shell Suit Pants, Shirt - Formal, Shirt - Formal, Shirt - Hawaiian, Shirt - Lumberjack, Short Dress, Short Skirt, Short Sleeve Shirt, Short Sleeve Shirt, Short Strapped Dress, Skirt, Strapless Dress, Strapped Dress, Suit Jacket, Suit Jacket, Suit Pants, Suit Pants, Sweater, Sweater Vest, Sweater Vest - V-neck, T-shirt, T-shirt, T-shirt, T-shirt - Polo, T-shirt - Striped Polo "T-shirt - Striped Polo (colored)"), Visor, Wool Hat, Yarn |
| base:canbewashed "Canbewashed (tag)") | Bandage (Dirty), Denim Strips (Dirty), Leather Strips (Dirty), Rag (Dirty) |
| base:caneat "Caneat (tag)") | Air Force Pilot Helmet, Balaclava, Balaclava - Open, Boxing Head Gear, Boxing Head Gear, Burlap Headwrap (Open Face) "Burlap Headwrap (Open Face)"), Cloth Headwrap (Open Face) "Cloth Headwrap (Open Face)") |
| base:canopener "Canopener (tag)") | Can Opener, Can Opener - Old-Fashioned, Handiknife, Multitool, P38 Can Opener, Sheet Metal Snips |
| base:cantcompost "Cantcompost (tag)") | Worm |
| base:carbattery "Carbattery (tag)") | Car Battery (Heavy-Duty Vehicle) "Car Battery (Heavy-Duty Vehicle)"), Car Battery (Sports Vehicle) "Car Battery (Sports Vehicle)"), Car Battery (Standard Vehicle) "Car Battery (Standard Vehicle)") |
| base:carkey "Carkey (tag)") | Vehicle Key |
| base:carpentrychisel "Carpentrychisel (tag)") | Carpentry Chisel, Stone Chisel |
| base:carvelongstick "Carvelongstick (tag)") | Ice Hockey Stick, Ice Hockey Stick with Barbed Wire, Sapling |
| base:charcoal "Charcoal (tag)") | Charcoal, Coke, Wood Charcoal |
| base:cheese "Cheese (tag)") | Cheese, Processed Cheese |
| base:chewingtobacco "Chewingtobacco (tag)") | Chewing Tobacco |
| base:choptree "Choptree (tag)") | Antique Table Leg with Sawblade, Axe "Axe (item)"), Baseball Bat with Sawblade, Crude Stone Axe, Firefighter Axe, Hand Axe, Hatchet, Hatchet, Large Handle with Sawblade, Large Stone Axe, Metal Baseball Bat with Sawblade, Plank with Sawblade, Sawblade Axe, Sawblade Hatchet, Scrap Metal Cleaver-Axe, Short Bat with Sawblade, Spade Head Scrap Metal Weapon, Wood Axe, Wood Axe |
| base:chunk "Chunk (tag)") | Iron Chunk, Steel Chunk |
| base:claytool "Claytool (tag)") | Clay Sculpting Tool, Wood Clay Sculpting Tool |
| base:cleanstains "Cleanstains (tag)") | Bath Towel, Broom, Dish Towel, Grill Brush, Mop, Sponge, Toilet Brush, Twig Broom |
| base:clearashes "Clearashes (tag)") | Broom, Entrenching Tool, Gardening Trowel, Shovel, Snow Shovel, Spade, Spade, Twig Broom, Wooden Spade |
| base:clubhammer "Clubhammer (tag)") | Block Mace, Club Hammer, Club Hammer |
| base:coffeemaker "Coffeemaker (tag)") | Copper Cup, Glass, Gold Cup, Metal Cup, Mug, Mug, Mug, Mug "Mug (ceramic)"), Silver Cup |
| base:comfrey "Comfrey (tag)") | Comfrey, Comfrey (Dried) "Comfrey (Dried)") |
| base:commonmallow "Commonmallow (tag)") | Common Mallow (Dried) "Common Mallow (Dried)") |
| base:compass "Compass (tag)") | Compass |
| base:compost "Compost (tag)") | Compost Bag |
| base:concrete "Concrete (tag)") | Bucket of Clay Cement, Bucket of Concrete, Carved Bucket of Clay Cement, Carved Bucket of Concrete |
| base:consumable "Consumable (tag)") | Antidepressants, Beta Blockers, Caffeine Pills, Chewing Tobacco, Cigarette Pack, Correction Fluid, Painkillers, Rat Poison, Sleeping Pills |
| base:consumeonread "Consumeonread (tag)") | Magazine: Crossword, Magazine: Wordsearch |
| base:cookable "Cookable (tag)") | Beer Can, Beer Can, Bucket, Bucket, Bucket, Bucket, Copper Kettle, Kettle, Paint Bucket, Pan, Pan, Pan, Pop Can, Pop Can, Pop Can, Pop Can, Pop Can, Pop Can, Pop Can, Pot, Pot, Saucepan, Saucepan, Tin Can, Tin Can |
| base:cookablemicrowave "Cookablemicrowave (tag)") | Hot Water Bottle, Mug, Mug, Mug, Plastic Bottle, Plastic Bottle, Plastic Bottle, Teacup, Teacup |
| base:copperore "Copperore (tag)") | Copper Ore |
| base:coppersource "Coppersource (tag)") | Copper Ore |
| base:corkscrew "Corkscrew (tag)") | Corkscrew, Handiknife |
| base:crowbar "Crowbar (tag)") | Crowbar, Crowbar |
| base:crude "Crude (tag)") | Awl - Bone, Awl - Stone, Improvised Whetstone, Simple Wooden Tongs, Stone Chisel, Stone Drill, Stone Hammer |
| base:crudeblade "Crudeblade (tag)") | Long Simple Metal Blade |
| base:crudechisel "Crudechisel (tag)") | Stone Chisel |
| base:crudesaw "Crudesaw (tag)") | Flint Saw |
| base:crudetongs "Crudetongs (tag)") | Kitchen Tongs, Simple Wooden Tongs |
| base:cutheadsack "Cutheadsack (tag)") | Hide Sack, Tarp Sack |
| base:cutplant "Cutplant (tag)") | Antique Table Leg with Sawblade, Axe "Axe (item)"), Baseball Bat with Sawblade, Butterfly Knife, Crude Stone Axe, Entrenching Tool, Fighting Knife, Firefighter Axe, Hand Axe, Hand Scythe, Hand Scythe, Handguard Dagger, Handiknife, Hatchet, Hatchet, Hunting Knife, Hunting Knife, Kitchen Knife, Kitchen Knife, Large Handle with Sawblade, Large Knife, Large Stone Axe, Long Simple Metal Knife, Machete, Machete, Machete Blade Knife, Metal Baseball Bat with Sawblade, Multitool, Paring Knife, Plank with Sawblade, Pocket Knife, Railroad Spike Knife, Sawblade Axe, Sawblade Hatchet, Scrap Metal Chopper, Scrap Metal Cleaver-Axe, Scrap Metal Large Knife, Short Bat with Sawblade, Small Knife, Spade Head Scrap Metal Weapon, Steak Knife, Stone-Blade Scythe, Sushi Knife, Switchblade, Wood Axe, Wood Axe |
| base:d00 "D00 (tag)") | Dice - Percentile |
| base:d10 "D10 (tag)") | Dice - 10-sided |
| base:d12 "D12 (tag)") | Dice - 12-sided |
| base:d20 "D20 (tag)") | Dice - 20-sided |
| base:d4 "D4 (tag)") | Dice - 4-sided |
| base:d6 "D6 (tag)") | Dice, Dice - 6-sided, Dice - Bone, Dice - Wood |
| base:d8 "D8 (tag)") | Dice - 8-sided |
| base:destructible "Destructible (tag)") | Ceramic Bar Mold, Ceramic Ingot Mold |
| base:diamondjewellery "Diamondjewellery (tag)") | Choker with Diamond, Gold Belly Button Ring with Diamond, Gold Belly Button Stud with Diamond, Gold Long Necklace with Diamond, Gold Necklace with Diamond, Gold Ring with Diamond, Gold Ring with Diamond, Gold Ring with Diamond, Gold Ring with Diamond, Silver Belly Button Dangle with Diamond, Silver Belly Button Ring with Diamond, Silver Belly Button Stud with Diamond, Silver Necklace with Diamond |
| base:diamondscrap "Diamondscrap (tag)") | Silver Long Necklace with Diamond, Silver Ring with Diamond, Silver Ring with Diamond, Silver Ring with Diamond, Silver Ring with Diamond |
| base:dice "Dice (tag)") | Dice, Dice - 10-sided, Dice - 12-sided, Dice - 20-sided, Dice - 4-sided, Dice - 6-sided, Dice - 8-sided, Dice - Bone, Dice - Percentile, Dice - Wood |
| base:diggrave "Diggrave (tag)") | Entrenching Tool, Shovel, Spade, Spade, Wooden Spade |
| base:digital "Digital (tag)") | Digital Watch, Digital Watch, Digital Watch, Digital Watch, Digital Watch - Metallic Dress Style, Digital Watch - Metallic Dress Style, Wrist Watch - Luthex, Wrist Watch - Luthex |
| base:digplow "Digplow (tag)") | Entrenching Tool, Garden Fork, Garden Fork, Garden Hoe, Garden Hoe, Gardening Trowel, Hand Fork, Pickaxe, Pickaxe, Shovel, Spade, Spade, Wooden Spade, Wooden Trowel |
| base:digworms "Digworms (tag)") | Garden Fork, Garden Fork, Gardening Trowel, Hand Fork, Wooden Trowel |
| base:dogtag "Dogtag (tag)") | Dog Tags, Dog Tags, Dog Tags |
| base:dohairdo "Dohairdo (tag)") | Hair Gel, Hair Spray |
| base:dontinheritcondition "Dontinheritcondition (tag)") | Base.FruitSaladClay, Bowl, Bowl of Beans, Bowl of Cereal, Bowl of Noodle Soup, Bowl of Oatmeal, Pasta (crafted pot), Pasta (crafted pot), Bowl of Ramen Noodles, Rice (crafted pot), Rice (crafted pot), Bowl of Soup, Bowl of Soup, Stew, Stew, Glazed Clay Plate (Unfired) "Glazed Clay Plate (Unfired)"), Plate, Salad |
| base:driedfood "Driedfood (tag)") | Basil (Dried) "Basil (Dried)"), Black Beans (Dried) "Black Beans (Dried)"), Bouillon Cube, Chick Peas (Dried) "Chick Peas (Dried)"), Chives (Dried)_(seasoning) "Chives (Dried) (seasoning)"), Cilantro (Dried) "Cilantro (Dried)"), Corn (Dried) "Corn (Dried)"), Dry Cat Food, Dry Dog Food, Dry Ramen Noodles, Garlic (Powdered) "Garlic (Powdered)"), Green Peas (Dried) "Green Peas (Dried)"), Kidney Beans (Dried) "Kidney Beans (Dried)"), Lentils (Dried) "Lentils (Dried)"), Macaroni, Onion (Powdered) "Onion (Powdered)"), Oregano (Dried) "Oregano (Dried)"), Parsley (Dried) "Parsley (Dried)"), Pasta, Rice, Rosemary (Dried) "Rosemary (Dried)"), Sage (Dried) "Sage (Dried)"), Seasoning Salt, Sesame Oil, Soybeans (Dried) "Soybeans (Dried)"), Split Peas (Dried) "Split Peas (Dried)"), Thyme (Dried) "Thyme (Dried)"), White Beans (Dried) "White Beans (Dried)") |
| base:drillmetal "Drillmetal (tag)") | Hand Drill |
| base:drillwood "Drillwood (tag)") | Hand Drill |
| base:drillwoodpoor "Drillwoodpoor (tag)") | Auger Drill, Hand Drill, Stone Drill |
| base:duffelbag "Duffelbag (tag)") | Duffel Bag, Police Duffel Bag, SWAT Duffel Bag, Sheriff Duffel Bag |
| base:dullknife "Dullknife (tag)") | Blunt Bone Knife, Bread Knife, Butter Knife, Gold Butter Knife, Long Sharp Bone, Plastic Knife, Silver Butter Knife |
| base:egg "Egg (tag)") | Egg, Turkey Egg, Wild Eggs |
| base:emeraldjewellery "Emeraldjewellery (tag)") | Silver Long Necklace with Emerald |
| base:emptycan "Emptycan (tag)") | Beer Can, Beer Can, Pop Can, Pop Can, Pop Can, Tin Can, Tin Can |
| base:epoxy "Epoxy (tag)") | Epoxy |
| base:equippable "Equippable (tag)") | Backpack Sprayer, Backpack Sprayer |
| base:eraser "Eraser (tag)") | Eraser, Pencil |
| base:fakespear "Fakespear (tag)") | Spear with Plunger |
| base:fakeweapon&action=edit&redlink=1 "Fakeweapon (tag) (page does not exist)") | Toy Cap Pistol, Toy Cap Rifle |
| base:fancybook "Fancybook (tag)") | Leatherbound Book "Leatherbound Book (hollow)"), Leatherbound Book "Leatherbound Book (classic)"), Leatherbound Book "Leatherbound Book (classic fiction)"), Leatherbound Book "Leatherbound Book (classic non-fiction)"), Leatherbound Book "Leatherbound Book (history)"), Leatherbound Book "Leatherbound Book (legal)"), Leatherbound Book "Leatherbound Book (medical)"), Leatherbound Book "Leatherbound Book (military history)"), Leatherbound Book "Leatherbound Book (occult)"), Leatherbound Book "Leatherbound Book (philosophy)"), Leatherbound Book "Leatherbound Book (politics)"), Leatherbound Book "Leatherbound Book (religion)"), Leatherbound Book: The Bible |
| base:farmingloot "Farmingloot (tag)") | Animal Feed Bag, Feeding Bottle, Grass Bag, Grass Cutting, Hay, Milk Powder, Shears, Shears, Shears - Electric |
| base:fastdraw "Fastdraw (tag)") | Butterfly Knife, Switchblade |
| base:fastread "Fastread (tag)") | Brochure, Doodle, Doodle, Empty Seed Packet - Barley, Empty Seed Packet - Basil, Empty Seed Packet - Bell Pepper, Empty Seed Packet - Black Sage, Empty Seed Packet - Broadleaf Plantain, Empty Seed Packet - Broccoli, Empty Seed Packet - Cabbage, Empty Seed Packet - Carrot, Empty Seed Packet - Cauliflower, Empty Seed Packet - Chamomile, Empty Seed Packet - Chives, Empty Seed Packet - Cilantro, Empty Seed Packet - Comfrey, Empty Seed Packet - Common Mallow, Empty Seed Packet - Corn, Empty Seed Packet - Cucumber, Empty Seed Packet - Flax, Empty Seed Packet - Garlic, Empty Seed Packet - Green Peas, Empty Seed Packet - Habanero, Empty Seed Packet - Hemp, Empty Seed Packet - Hops, Empty Seed Packet - Jalapeno, Empty Seed Packet - Kale, Empty Seed Packet - Lavender, Empty Seed Packet - Leek, Empty Seed Packet - Lemongrass, Empty Seed Packet - Lettuce, Empty Seed Packet - Marigold, Empty Seed Packet - Mint, Empty Seed Packet - Onion, Empty Seed Packet - Oregano, Empty Seed Packet - Parsley, Empty Seed Packet - Poppy, Empty Seed Packet - Potato, Empty Seed Packet - Pumpkin, Empty Seed Packet - Radish, Empty Seed Packet - Rose, Empty Seed Packet - Rosemary, Empty Seed Packet - Rye, Empty Seed Packet - Sage, Empty Seed Packet - Soybeans, Empty Seed Packet - Spinach, Empty Seed Packet - Strawberry, Empty Seed Packet - Sugar Beet, Empty Seed Packet - Sunflower, Empty Seed Packet - Sweet Potato, Empty Seed Packet - Thyme, Empty Seed Packet - Tobacco, Empty Seed Packet - Tomato, Empty Seed Packet - Turnip, Empty Seed Packet - Watermelon, Empty Seed Packet - Wheat, Empty Seed Packet - Wild Garlic, Empty Seed Packet - Zucchini, Flier, Flier: Nolan's Used Cars, Newspaper, Newspaper, Newspaper: Knox Knews, Newspaper: Louisville Sun Times, Newspaper: The Kentucky Herald, Newspaper: The National Dispatch, Old Photograph, Photograph, Photograph "Photograph (racy)"), Photograph "Photograph (secret)"), Photograph of Judge Matt Hass (Autographed) "Photograph of Judge Matt Hass (Autographed)"), Seed Packet - Barley, Seed Packet - Basil, Seed Packet - Bell Pepper, Seed Packet - Black Sage, Seed Packet - Broadleaf Plantain, Seed Packet - Broccoli, Seed Packet - Cabbage, Seed Packet - Carrot, Seed Packet - Cauliflower, Seed Packet - Chamomile, Seed Packet - Chives, Seed Packet - Cilantro, Seed Packet - Comfrey, Seed Packet - Common Mallow, Seed Packet - Corn, Seed Packet - Cucumber, Seed Packet - Flax, Seed Packet - Garlic, Seed Packet - Green Peas, Seed Packet - Habanero, Seed Packet - Hemp, Seed Packet - Hops, Seed Packet - Jalapeno, Seed Packet - Kale, Seed Packet - Lavender, Seed Packet - Leek, Seed Packet - Lemongrass, Seed Packet - Lettuce, Seed Packet - Marigold, Seed Packet - Mint, Seed Packet - Onion, Seed Packet - Oregano, Seed Packet - Parsley, Seed Packet - Poppy, Seed Packet - Potato, Seed Packet - Pumpkin, Seed Packet - Radish, Seed Packet - Rose, Seed Packet - Rosemary, Seed Packet - Rye, Seed Packet - Sage, Seed Packet - Soybeans, Seed Packet - Spinach, Seed Packet - Strawberry, Seed Packet - Sugar Beet, Seed Packet - Sunflower, Seed Packet - Sweet Potato, Seed Packet - Thyme, Seed Packet - Tobacco, Seed Packet - Tomato, Seed Packet - Turnip, Seed Packet - Watermelon, Seed Packet - Wheat, Seed Packet - Wild Garlic, Seed Packet - Zucchini |
| base:feather "Feather (tag)") | Chicken Feather, Turkey Feather |
| base:fertilizer "Fertilizer (tag)") | Fertilizer |
| base:fiberglasstape "Fiberglasstape (tag)") | Fiberglass Tape |
| base:file "File (tag)") | File, Small File Set |
| base:firearm "Firearm (tag)") | B-F Pistol, Double Barrel Shotgun, JS-2000 Shotgun, M1A Rifle, M16 Assault Rifle, M1911 Pistol, SN38 Revolver, Patrol Revolver, M9 Pistol, MSR700 Rifle, MSR788 Rifle, Magnum, Sawed-off Double Barrel Shotgun, Sawed-off JS-2000 Shotgun, Toy Cap Pistol |
| base:firearmloot "Firearmloot (tag)") | Bullets Bandolier, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Duct Tape Holster, Gun Case, Gun Case, Gun Case, Gun Case, Gun Case, Gun Case, Gun Case, Gun Case, Gun Case, Gun Case, Gun Case, Gun Case - Military, Gun Case - Military, Gun Case - Military, Handgun Case, Handgun Case, Handgun Case, Handgun Case, Handgun Case, Handgun Case, Hide Holster, Holster, Holster, Holster, Holster, Holster - Ankle, Holster - Double, Holster - Shoulder, Shells Bandolier, Shells Bandolier, Small Protective Case, Small Protective Case, Small Protective Case, Small Protective Case, Small Protective Case, Small Protective Case, Small Protective Case, Small Protective Case, Small Protective Case - Military |
| base:fishinghook "Fishinghook (tag)") | Bone Fishing Hook, Fishing Hook, Forged Fishing Hook, Nails, Paperclip |
| base:fishingline "Fishingline (tag)") | Fishing Line, Premium Fishing Line, Twine |
| base:fishingnet "Fishingnet (tag)") | Fishing Net |
| base:fishingrod "Fishingrod (tag)") | Fishing Rod, Makeshift Fishing Rod |
| base:fishingspear "Fishingspear (tag)") | Spear with Bone Head, Spear with Fighting Knife, Spear with Glass Head, Spear with Hand Fork, Spear with Hunting Knife, Spear with Kitchen Knife, Spear with Large Knife, Spear with Long Bone Head, Spear with Long Metal Head, Spear with Long Simple Metal Head, Spear with Long Stone Head, Spear with Metal Head, Spear with Scissors, Spear with Scrap Knife, Spear with Screwdriver, Spear with Simple Metal Head, Spear with Small Knife, Spear with Steak Knife, Spear with Stone Head, Wooden Spear "Wooden Spear (crafted)"), Wooden Spear (Fire Hardened) "Wooden Spear (Fire Hardened)") |
| base:fishmeat "Fishmeat (tag)") | Alligator Gar, Black Crappie, Blue Catfish, Bluegill, Channel Catfish, Fish Fillet, Flathead Catfish, Freshwater Drum, Green Sunfish, Largemouth Bass, Muskellunge, Paddlefish, Redear Sunfish, Salmon, Sauger, Smallmouth Bass, Spotted Bass, Striped Bass, Walleye, White Bass, White Crappie, Yellow Perch |
| base:fitskeyring "Fitskeyring (tag)") | Compass, Dog Tag, Dog Tag, Dog Tags, Dog Tags, Dog Tags, Handiknife, Key Ring Bottle Opener, P38 Can Opener, Pocketwatch, Whistle |
| base:fitstoaster "Fitstoaster (tag)") | Bagel, Biscuit, Bread Slices, Chocolate Chip Cookie, Chocolate Cookie, Chocolate Donut, Cornbread, Croissant, Donut, Frosted Donut, Gingerbread Man, Jelly Donut, Oatmeal Cookie, Plonkies, Poppy Bagel, Raspberry Shortbread Cookie, Sesame Bagel, Shortbread Cookie, Sugar Cookie, Toast, Waffles |
| base:fitswallet "Fitswallet (tag)") | Badge, Bandage - Adhesive, Bandana, Bandana, Bandana, Bandana, Bandana, Bandana, Blank Key, Bone Fishing Hook, Bone Needle, Brass Needle, Credit Card, Credit Card, Dog Tag, Dog Tag, Fishing Hook, Forged Fishing Hook, Forged Needle, Garter, Gold Coin, Guitar Pick, Key, Matchbook, Money, Needle, Padlock Key, Paper Napkins, Paperclip, Poker Chips, Rag, Rag (Dirty), Rag Bandana - Face, Rag Bandana - Head, Rolling Papers, Rubber Band, Silver Coin, Surgical Gloves, Surgical Mask, Suture Needle, Tissue, Toy Badge, Vehicle Key |
| base:flashlight "Flashlight (tag)") | Flashlight, Flashlight - Angle Headed, Flashlight - Angle Headed, Flashlight - Heavy Duty, Flashlight - Improvised, Gun Light, Improvised Electric Lantern, Penlight |
| base:flashlightpillar "Flashlightpillar (tag)") | Flashlight, Flashlight - Angle Headed, Flashlight - Angle Headed, Flashlight - Heavy Duty |
| base:fleshingtool "Fleshingtool (tag)") | Bone Fleshing Tool, Fleshing Tool |
| base:flintpiece "Flintpiece (tag)") | Sharp Flint Flake |
| base:flour "Flour (tag)") | Cornflour, Flour |
| base:forge_crude_blade "Forge crude blade (tag)") | Hunting Knife |
| base:fork "Fork (tag)") | Bone Fork, Forged Fork, Fork, Gold Fork, Plastic Fork, Plastic Spork, Silver Fork, Wooden Fork |
| base:fullblade "Fullblade (tag)") | Broken Simple Sword Blade, Broken Simple Sword Blade (No Tang) "Broken Simple Sword Blade (No Tang)"), Broken Sword Blade, Broken Sword Blade (No Tang) "Broken Sword Blade (No Tang)"), Katana, Machete Blade, Machete Blade (No Tang) "Machete Blade (No Tang)"), Shortsword Blade, Shortsword Blade (No Tang) "Shortsword Blade (No Tang)"), Simple Sword Blade, Simple Sword Blade (No Tang) "Simple Sword Blade (No Tang)"), Sword Blade, Sword Blade (No Tang) "Sword Blade (No Tang)") |
| base:garbagebag "Garbagebag (tag)") | Garbage Bag, Garbage Bag |
| base:gasmask "Gasmask (tag)") | Gas Mask, Improvised Gas Mask, Nuclear Biochemical Mask |
| base:gasmaskfilter "Gasmaskfilter (tag)") | Gas Mask Filter, Gas Mask Filter - Crafted |
| base:gasmasknofilter "Gasmasknofilter (tag)") | Gas Mask (No Filter) "Gas Mask (No Filter)"), Improvised Gas Mask "Improvised Gas Mask (No Filter)"), Nuclear Biochemical Mask (No Filter) "Nuclear Biochemical Mask (No Filter)") |
| base:generator "Generator (tag)") | Generator - Lectromax, Generator - Old, Generator - Premium Technologies, Generator - ValuTech |
| base:giveslongstick "Giveslongstick (tag)") | Broom, Broom with Barbed-Wire, Mop, Twig Broom |
| base:glass "Glass (tag)") | Beer Bottle, Beer Bottle, Bottle, Bottle, Front Window (Heavy-Duty Vehicle) "Front Window (Heavy-Duty Vehicle)"), Front Window (Sports Vehicle) "Front Window (Sports Vehicle)"), Front Window (Standard Vehicle) "Front Window (Standard Vehicle)"), Glass, Glass, Glass, Glass, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle "White Wine (Open)"), Glass Bottle "Red Wine (Open)"), Glass Bottle, Glass Bottle, Glass Pane, Jar, Jar, Rear Window (Heavy-Duty Vehicle) "Rear Window (Heavy-Duty Vehicle)"), Rear Window (Sports Vehicle) "Rear Window (Sports Vehicle)"), Rear Window (Standard Vehicle) "Rear Window (Standard Vehicle)"), Rear Windshield (Heavy-Duty Vehicle) "Rear Windshield (Heavy-Duty Vehicle)"), Rear Windshield (Sports Vehicle) "Rear Windshield (Sports Vehicle)"), Rear Windshield (Standard Vehicle) "Rear Windshield (Standard Vehicle)"), Smashed Bottle, Windshield (Heavy-Duty Vehicle) "Windshield (Heavy-Duty Vehicle)"), Windshield (Sports Vehicle) "Windshield (Sports Vehicle)"), Windshield (Standard Vehicle) "Windshield (Standard Vehicle)") |
| base:glassbottle "Glassbottle (tag)") | Beer Bottle, Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle, Glass Bottle "White Wine (Open)"), Glass Bottle "Red Wine (Open)"), Glass Bottle, Glass Bottle |
| base:glassbottlesmall "Glassbottlesmall (tag)") | Beer Bottle, Bottle |
| base:glue "Glue (tag)") | Glue, Wood Glue |
| base:goldscrap "Goldscrap (tag)") | Gold Cup, Gold Goblet, Gold Mask, Hurricane Lantern - Gold |
| base:goodfrozen "Goodfrozen (tag)") | Creamocle, Fudgee Pop, Ice Cream, Ice Cream Cone, Ice Cream Cone, Ice Cream Sandwich, Popsicle |
| base:grater "Grater (tag)") | Cheese Grater |
| base:greenpen "Greenpen (tag)") | Crayons, Marker - Green, Multi-Color Pen, Pen - Green |
| base:grilled "Grilled (tag)") | Sandwich "Sandwich (baguette)"), Sandwich "Sandwich (bread)") |
| base:hammer "Hammer (tag)") | Ball-peen Hammer, Ball-peen Hammer, Claw Hammer, Claw Hammer, Smithing Hammer, Stone Hammer |
| base:hammerstone "Hammerstone (tag)") | Stone, Stone Hammer |
| base:handguard "Handguard (tag)") | Handguard Dagger |
| base:handscythe "Handscythe (tag)") | Hand Scythe, Hand Scythe, Stone-Blade Scythe |
| base:hardcover "Hardcover (tag)") | Book, Book "Book (adventure non-fiction)"), Book "Book (art)"), Book "Book (baseball)"), Book "Book (biography)"), Book "Book (business)"), Book "Book (childs)"), Book "Book (cinema)"), Book "Book (classic)"), Book "Book (classic fiction)"), Book "Book (classic non-fiction)"), Book "Book (computer)"), Book "Book (crime fiction)"), Book "Book (fantasy)"), Book "Book (farming)"), Book "Book (fashion)"), Book "Book (fiction)"), Book "Book (general non-fiction)"), Book "Book (general reference)"), Book "Book (golf)"), Book "Book (history)"), Book "Book (horror)"), Book "Book (legal)"), Book "Book (literary fiction)"), Book "Book (medical)"), Book "Book (military)"), Book "Book (military history)"), Book "Book (music)"), Book "Book (nature)"), Book "Book (occult)"), Book "Book (philosophy)"), Book "Book (policing)"), Book "Book (politics)"), Book "Book (quackery)"), Book "Book (religion)"), Book "Book (rich)"), Book "Book (romance)"), Book "Book (sad non-fiction)"), Book "Book (school textbook)"), Book "Book (science)"), Book "Book (sci-fi)"), Book "Book (sports)"), Book "Book (thriller)"), Book "Book (travel)"), Book "Book (western)"), Book: The Bible |
| base:harmonica "Harmonica (tag)") | Harmonica |
| base:hasmetal "Hasmetal (tag)") | ALICE Belt and Suspenders, ALICE Belt and Suspenders, ALICE Belt and Suspenders, Aluminum Foil, Aluminum Fragments, Aluminum Scrap, Amplifier, Antique Table Leg - Chained, Antique Table Leg with Nails, Antique Table Leg with Sawblade, Articulated Metal Shin Armor, Articulated Metal Shin Armor, Articulated Metal Shoulder Armor - Left, Articulated Metal Shoulder Armor - Right, Articulated Metal Thigh Armor, Articulated Metal Thigh Armor, Assembled Blacksmith Anvil, Awl, Axe "Axe (item)"), Axe Head, Backpack Sprayer, Backpack Sprayer, Badge, Baking Tray with Chocolate Chip Cookies, Baking Tray with Chocolate Cookies, Oatmeal Cookie, Shortbread Cookie, Sugar Cookie, Ball Peen Hammer Head, Ball-peen Hammer, Ball-peen Hammer, Banjo, Barbecue Starter Fluid, Barbed Wire, Barbed Wire Bundle, Base.HotDrinkCopper "Beverage (mug)"), Base.HotDrinkGold "Beverage (mug)"), Base.HotDrinkSilver "Beverage (mug)"), Baseball Bat - Can-Reinforced, Baseball Bat - Sheet Metal Reinforced, Baseball Bat with Garden Fork Head, Baseball Bat with Nails, Baseball Bat with Railspike, Baseball Bat with Rake Spikes, Baseball Bat with Sawblade, Baseball Bat with Spikes, Battery, Beer Can, Beer Can, Belt, Bench Anvil, Bench Anvil (Untreated) "Bench Anvil (Untreated)"), Biscuits, Blacksmith Anvil, Blacksmith Anvil (Untreated) "Blacksmith Anvil (Untreated)"), Blank Key, Block Anvil, Block Anvil (Untreated) "Block Anvil (Untreated)"), Blower Fan, Bolt Cutters, Bone Club with Spikes, Bottle Opener, Bowling Pin with Nails, Box of Batteries, Box of Canned Beans, Box of Canned Carrots, Box of Canned Chili, Box of Canned Corn, Box of Canned Corned Beef, Box of Canned Dog Food, Box of Canned Evaporated Milk, Box of Canned Fruit Beverage, Box of Canned Fruit Cocktail, Box of Canned Mushroom Soup, Box of Canned Peaches, Box of Canned Peas, Box of Canned Pineapple, Box of Canned Potato, Box of Canned Sardines, Box of Canned Spaghetti Bolognese, Box of Canned Tomato, Box of Canned Tuna, Box of Canned Vegetable Soup, Box of Dented Unlabeled Cans of Food, Box of Light Bulbs, Box of Nails, Box of Red Wine, Box of Screws, Box of Suture Needles, Box of Unlabeled Cans of Food, Box of Water Ration Cans, Box of White Wine, Brake - Old (Heavy-Duty Vehicle) "Brake - Old (Heavy-Duty Vehicle)"), Brake - Old (Sports Vehicle) "Brake - Old (Sports Vehicle)"), Brake - Old (Standard Vehicle) "Brake - Old (Standard Vehicle)"), Brake - Performance (Heavy-Duty Vehicle) "Brake - Performance (Heavy-Duty Vehicle)"), Brake - Performance (Sports Vehicle) "Brake - Performance (Sports Vehicle)"), Brake - Performance (Standard Vehicle) "Brake - Performance (Standard Vehicle)"), Brake - Regular (Heavy-Duty Vehicle) "Brake - Regular (Heavy-Duty Vehicle)"), Brake - Regular (Sports Vehicle) "Brake - Regular (Sports Vehicle)"), Brake - Regular (Standard Vehicle) "Brake - Regular (Standard Vehicle)"), Brake Disc Scrap Metal Weapon, Brass Ingot, Brass Nameplate, Brass Scrap, Bread Knife, Broken Baseball Bat with Nails, Broken Branch with Nails, Broken Field Hockey Stick with Nails, Broken Iron Pipe, Broken Katana, Broken Katana Blade, Broken Large Handle with Nails, Broken Plank with Nails, Broken Scrap Metal Sword, Broken Simple Sword, Broken Simple Sword Blade, Broken Simple Sword Blade (No Tang) "Broken Simple Sword Blade (No Tang)"), Broken Stick with Nails, Broken Sword, Broken Sword Blade, Broken Sword Blade (No Tang) "Broken Sword Blade (No Tang)"), Broken Table Leg with Nails, Bronze Sports Medal, Broom with Barbed-Wire, Bucket, Bucket, Bucket, Bucket, Bucket, Bucket Maul - Metal Handle, Bucket Maul - Wood Handle, Bucket of Clay Cement, Bucket of Concrete, Bucket of Plaster, Bucket of Soup, Bucket of Stew, Bucket of Wallpaper Paste, Bullets Bandolier, Bullets Bandolier, Bullets Bandolier, Bullets Bandolier, Butterfly Knife, Cake "Cake (crafted)"), Cake Preparation, Calculator, Calipers, Camera, Can Opener, Can Opener - Old-Fashioned, Canned Beans, Canned Beans (Open), Canned Carrots, Canned Carrots (Open), Canned Chili, Canned Chili (Open), Canned Corn, Canned Corn (Open), Canned Corned Beef, Canned Corned Beef (Open), Canned Dog Food, Canned Dog Food (Open), Canned Evaporated Milk, Canned Evaporated Milk (Open), Canned Fruit Beverage, Canned Fruit Beverage (Open), Canned Fruit Cocktail, Canned Fruit Cocktail (Open), Canned Mushroom Soup, Canned Mushroom Soup (Open), Canned Peaches, Canned Peaches (Open), Canned Peas, Canned Peas (Open), Canned Pineapple, Canned Pineapple (Open), Canned Potato, Canned Potato (Open), Canned Sardines, Canned Sardines (Open), Canned Spaghetti Bolognese, Canned Spaghetti Bolognese (Open), Canned Tomato, Canned Tomato (Open), Canned Tuna, Canned Tuna (Open), Canned Vegetable Soup, Canned Vegetable Soup (Open), Canteen, Canteen, Canteen, Carpentry Chisel, Carton of .223 Rounds, Carton of 7.62x51mm Rounds, Carton of .38 Special Rounds, Carton of .44 Magnum Rounds, Carton of .45 ACP Rounds, Carton of 5.56x45mm Rounds, Carton of 9x19mm Rounds, Carton of Nails, Carton of Screws, Carton of 12g Rounds, Ceramic Crude Bench Vise Parts Mold, Chainmail Glove - Left, Chainmail Glove - Right, Cheese Grater, Circular Sawblade, Circular Sawblade Half, Claw Hammer, Claw Hammer, Clawhammer Head, Clay Crude Bench Vise Parts Mold (Unfired) "Clay Crude Bench Vise Parts Mold (Unfired)"), Clay Sculpting Tool, Club Hammer, Club Hammer, Club Hammer Head, Coat of Plates Body Armor, Compass, Pasta (crafted pot), Pasta (crafted pot), Rice (crafted pot), Rice (crafted pot), Copper Cup, Copper Ingot, Copper Kettle, Copper Mask, Copper Ore, Copper Saucepan with Pasta, Copper Saucepan with Rice, Copper Scrap, Cordless Phone, Corkscrew, Crash Helmet - Spiked, Crash Helmet - Spiked, Crowbar, Crowbar, Crude Bench Vise, Crude Bench Vise Parts, Crude Metal Helmet, Crude Scissors, Cudgel - Sheet Metal Reinforced, Cudgel with Brake Disc, Cudgel with Garden Fork Head, Cudgel with Nails, Cudgel with Railspikes, Cudgel with Sawblade, Cudgel with Spade Head, Cudgel with Spikes, B-F Magazine, B-F Pistol, Dangly Earrings - Diamond, Dangly Earrings - Emerald, Dangly Earrings - Pearl, Dangly Earrings - Ruby, Dangly Earrings - Sapphire Stone, Dented Unlabeled Can of Food, Digital Watch, Digital Watch, Digital Watch, Digital Watch, Digital Watch - Metallic Dress Style, Digital Watch - Metallic Dress Style, Dish, Disposable Camera, Dog Tag, Dog Tag, Dog Tags, Dog Tags, Dog Tags, Door Hinge, Doorknob, Double Barrel Shotgun, Draw Plate, Dumbbell, Earbuds, Earrings - Emerald, Earrings - Pearl, Earrings - Ruby, Earrings - Sapphire Stone, Electric Bass, Electric Guitar, Electrical Wire, Engine Parts Maul, Entrenching Tool, Field Hockey Stick with Nails, Field Hockey Stick with Sawblade, Fighting Knife, File, Fillet Knife, Fingerless Gloves - Metal, Fingerless Gloves - Scrap Metal, Firefighter Axe, Firefighter Axe Head, Fireplace Poker, Firewood with Nails, First Aid Kit, First Aid Kit, First Aid Kit, Flashlight - Improvised, Flask, Flute, Forged Fork, Forged Spoon, Frying Pan, Frying Pan, Full Chainmail Sleeve - Left, Full Chainmail Sleeve - Right, Full Metal Forearm Armor, Full Metal Forearm Armor, Garden Fork, Garden Fork, Garden Fork Head, Garden Fork Head, Garden Fork Scrap Metal Weapon, Garden Hoe, Garden Hoe, Garden Hoe Head, Gardening Trowel, Gas Mask Filter, Gas Mask Filter - Crafted, Generator - Lectromax, Generator - Old, Generator - Premium Technologies, Generator - ValuTech, Geometry Compass, Goblet, Gold Bangle, Gold Bangle, Gold Belly Button Dangle, Gold Belly Button Dangle with Ruby, Gold Belly Button Ring, Gold Belly Button Ring with Diamond, Gold Belly Button Ring with Ruby, Gold Belly Button Stud, Gold Belly Button Stud with Diamond, Gold Butter Knife, Gold Chain Bracelet, Gold Chain Bracelet, Gold Coin, Gold Cup, Gold Earrings - Large Looped, Gold Earrings - Medium Looped, Gold Earrings - Small Looped, Gold Earrings - Small Looped, Top, Gold Earrings - Stud, Gold Fork, Gold Fragments, Gold Goblet, Gold Ingot, Gold Long Necklace, Gold Long Necklace with Diamond, Gold Mask, Gold Necklace, Gold Necklace with Diamond, Gold Necklace with Ruby Stone, Gold Nose Ring, Gold Nose Stud, Gold Ring, Gold Ring, Gold Ring, Gold Ring, Gold Ring with Diamond, Gold Ring with Diamond, Gold Ring with Diamond, Gold Ring with Diamond, Gold Ring with Ruby, Gold Ring with Ruby, Gold Ring with Ruby, Gold Ring with Ruby, Gold Sheet, Gold Spoon, Gold Sports Medal, Golf Bag, Golf Bag, Golf Club, Griddle Pan, Hacksaw Blade, Hair Dryer, Hair Iron, Hair Spray, Hand Axe, Hand Fork, Hand Scythe, Hand Scythe, Hand Scythe Blade, Handguard Dagger, Handheld Game Console, Handiknife, Harmonica, Hatchet, Hatchet, Hatchet Head, Heading Tool, Headphones, Heavy Chain, Heavy Chain Link, Heavy Chain with Hook, Hide Holster, Hide Mask, High-end Camera, Holster - Double, Holster - Shoulder, Home Alarm, Hunting Knife, Hunting Knife, Hunting Knife Blade, Ice Hockey Stick with Barbed Wire, Ice Pick, Improvised Electric Lantern, Improvised Screwdriver, Insect Repellent, Iron Band, Iron Band - Small, Iron Bar, Iron Bar Half, Iron Bar Quarter, Iron Block, Iron Block (Pierced) "Iron Block (Pierced)"), Iron Bloom, Iron Chunk, Iron Chunk (Pierced) "Iron Chunk (Pierced)"), Iron Ingot, Iron Ingot (Pierced) "Iron Ingot (Pierced)"), Iron Ore, Iron Piece, Iron Pipe, Iron Pipe with Railspike, Iron Scrap, JS-2000 Shotgun, Jar Lid, Jar of Bell Peppers, Jar of Broccoli, Jar of Cabbage, Jar of Carrots, Jar of Eggplants, Jar of Fish Roe, Jar of Leeks, Jar of Potatoes, Jar of Radishes, Jar of Tomatoes, Jawbone Morningstar, Katana, Katana Blade, Katana Blade Shard, Katana Handle, Kettle, Kettle Maul - Metal Handle, Kettle Maul - Wood Handle, Key, Key Ring, Key Ring - Rabbit Foot, Key Ring Bottle Opener, Kitchen Knife, Kitchen Knife, Kitchen Knife Blade, Kitchen Tongs, Ladle, Large Bucket, Large Ceramic Crucible with Iron, Large Ceramic Crucible with Steel, Large Handle - Can-Reinforced, Large Handle with Brake Disc, Large Handle with Nails, Large Handle with Railspike, Large Handle with Rake Spikes, Large Handle with Sawblade, Large Hook, Large Knife, Large Knife Blade, Large Meteorite, Large Pack Frame, Latch, Lead Pipe, Leaf Rake, Leash, Letter Opener, Light Bulb, Light Bulb - Blue, Light Bulb - Cyan, Light Bulb - Green, Light Bulb - Magenta, Light Bulb - Orange, Light Bulb - Pink, Light Bulb - Purple, Light Bulb - Red, Light Bulb - Yellow, Lighter, Lighter - BBQ, Lighter - Disposable, Lighter - Improvised Battery, Lighter Fluid, Locket, Long Mace, Long Metal Spearhead, Long Simple Metal Blade, Long Simple Metal Knife, Long Spiked Club, Loupe, M1A Magazine, M1A Rifle, M16 Assault Rifle, M16 Magazine, M1911 Auto Magazine, M1911 Pistol, SN38 Revolver, Patrol Revolver, M9 Magazine, M9 Pistol, MSR700 Rifle, MSR788 Rifle, Mace, Mace Head, Machete, Machete, Machete Blade, Machete Blade (No Tang) "Machete Blade (No Tang)"), Machete Blade Knife, Magnesium Firestarter, Magnesium Shavings, Magnifying Glass, Magnum, Mason's Chisel, Mason's Trowel, Meat Cleaver, Meat Cleaver, Meat Cleaver Blade, Medium Handle - Can-Reinforced, Medium Handle with Nails, Megaphone, Metal Baseball Bat, Metal Baseball Bat with Bolts, Metal Baseball Bat with Sawblade, Metal Body Armor, Metal Codpiece, Metal Cup, Metal Forearm Armor, Metal Forearm Armor, Metal Mask, Metal Neck Guard, Metal Shin Armor, Metal Shin Armor, Metal Shoulder Armor, Metal Shoulder Armor, Metal Spearhead, Metal Thigh Armor, Metal Thigh Armor, Metalworking Chisel, Metalworking Pliers, Metalworking Punch, Microphone, Military Medal, Muffin Tray, Multitool, Nails, Necklace - Crucifix, Nuts and Bolts, Old Army Helmet, Omelette, Omelette, Opened Jar of Fish Roe, Oxygen Tank, P38 Can Opener, Pack Frame, Pack of Beer Cans, Padlock Key, Pager, Paint Bucket, Pan, Pan, Pan, Paring Knife, Pasta "Pasta (crafted pan)"), Pasta, Pasta "Pasta (crafted pot)"), Pasta, Pick Axe Head, Pickaxe, Pickaxe, Pie "Pie (savory)"), Pie "Pie (sweet)"), Pie Preparation, Pipe Wrench, Pizza Cutter, Plain Muffins, Plain Muffins, Plank with Brake Disc, Plank with Nails, Plank with Saw, Plank with Sawblade, Plastering Trowel, Plunger with Barbed Wire, Pocket Knife, Pocketwatch, Pop Can, Pop Can, Pop Can, Pop Can, Pop Can, Pop Can, Pop Can, Pot, Pot, Soup, Pot of Soup, Soup, Pot of Stew, Stew, Power Bar, Propane Tank, Railroad Spike, Railroad Spike Knife, Railroad Spike Puller, Rake, Rake Head, Rake-Head Scrap Metal Weapon, Ratchet Wrench, Razor, Rice "Rice (sugar beet)"), Rice "Rice (sugar beet)"), Rice "Rice (sugar beet)"), Rice "Rice (crafted pan)"), Rice "Rice (crafted pan)"), Rice "Rice (crafted pot)"), Rice "Rice (crafted pot)"), Roast, Saucepan, Saucepan, Pasta (crafted pan), Rice (crafted pan), Sawblade Axe, Sawed-off Double Barrel Shotgun, Sawed-off JS-2000 Shotgun, Saxophone, Scalpel, Scissors, Scrap Metal Blade Shard, Scrap Metal Body Armor, Scrap Metal Chopper, Scrap Metal Cleaver, Scrap Metal Cleaver-Axe, Scrap Metal Forearm Armor, Scrap Metal Forearm Armor, Scrap Metal Helmet, Scrap Metal Large Knife, Scrap Metal Mask, Scrap Metal Maul, Scrap Metal Morningstar, Scrap Metal Morningstar - Short, Scrap Metal Shin Armor, Scrap Metal Shin Armor, Scrap Metal Shortsword, Scrap Metal Shoulder Armor, Scrap Metal Shoulder Armor, Scrap Metal Sword, Scrap Metal Thigh Armor, Scrap Metal Thigh Armor, Screwdriver, Screwdriver, Screws, Scythe, Scythe, Scythe Blade, Sewing Kit, Shears, Shears, Shears - Electric, Sheet Metal Snips, Shells Bandolier, Shells Bandolier, Shiv, Short Bat - Can-Reinforced, Short Bat with Nails, Short Bat with Railspike, Short Bat with Rake Spikes, Short Bat with Sawblade, Short Bat with Spikes, Shortsword, Shortsword Blade, Shortsword Blade (No Tang) "Shortsword Blade (No Tang)"), Shovel, Signet Ring, Signet Ring, Signet Ring, Signet Ring, Silver Bangle, Silver Bangle, Silver Belly Button Dangle, Silver Belly Button Dangle with Diamond, Silver Belly Button Ring, Silver Belly Button Ring with Amethyst, Silver Belly Button Ring with Diamond, Silver Belly Button Ring with Ruby, Silver Belly Button Stud, Silver Belly Button Stud with Diamond, Silver Butter Knife, Silver Chain Bracelet, Silver Chain Bracelet, Silver Coin, Silver Cup, Silver Earrings - Large Looped, Silver Earrings - Medium Looped, Silver Earrings - Small Looped, Silver Earrings - Small Looped, Top, Silver Earrings - Stud, Silver Fork, Silver Fragments, Silver Goblet, Silver Ingot, Silver Long Necklace, Silver Long Necklace with Diamond, Silver Long Necklace with Emerald, Silver Long Necklace with Sapphire Stone, Silver Mask, Silver Necklace, Silver Necklace with Crucifix, Silver Necklace with Diamond, Silver Necklace with Sapphire Stone, Silver Nose Ring, Silver Nose Stud, Silver Ring, Silver Ring, Silver Ring, Silver Ring, Silver Ring with Diamond, Silver Ring with Diamond, Silver Ring with Diamond, Silver Ring with Diamond, Silver Sheet, Silver Spoon, Silver Sports Medal, Simple Metal Blade, Simple Metal Knife, Simple Shortsword, Simple Shortsword Blade, Simple Shortsword Blade (No Tang) "Simple Shortsword Blade (No Tang)"), Simple Sword, Simple Sword Blade, Simple Sword Blade (No Tang) "Simple Sword Blade (No Tang)"), Simple Sword Blade Shard, Simple Wood Saw, Sledgehammer, Sledgehammer, Sledgehammer Head, Small Ceramic Crucible with Iron, Small Ceramic Crucible with Steel, Small File Set, Small Gold Ingot, Small Hacksaw, Small Hacksaw Blade, Small Knife, Small Punch and Chisel Set, Small Silver Ingot, Smithing Hammer, Smithing Hammer Head, Spade, Spade, Spade Head, Spade Head, Spade Head Scrap Metal Weapon, Speaker, Spear with Fighting Knife, Spear with Hunting Knife, Spear with Kitchen Knife, Spear with Large Knife, Spear with Long Metal Head, Spear with Long Simple Metal Head, Spear with Metal Head, Spear with Scissors, Spear with Scrap Knife, Spear with Screwdriver, Spear with Simple Metal Head, Spear with Small Knife, Spear with Steak Knife, Specimen Case - Beetles, Specimen Case - Butterflies, Specimen Case - Insects, Specimen Case - Minerals, Specimen Jar - Brain, Specimen Jar - Centipedes, Specimen Jar - Fetal Calf, Specimen Jar - Fetal Lamb, Specimen Jar - Fetal Piglet, Specimen Jar - Monkey Head, Specimen Jar - Octopus, Specimen Jar - Tapeworm, Spiked Articulated Metal Shin Armor, Spiked Articulated Metal Shin Armor, Spiked Articulated Metal Shoulder Armor - Left, Spiked Articulated Metal Shoulder Armor - Right, Spiked Football Shoulderpad - Left, Spiked Football Shoulderpad - Right, Spiked Football Shoulderpads (On Top) "Spiked Football Shoulderpads (On Top)"), Spiked Leather Forearm Armor, Spiked Leather Forearm Armor, Spiked Metal Forearm Armor, Spiked Metal Forearm Armor, Spiked Metal Shin Armor, Spiked Metal Shin Armor, Spiked Metal Shoulder Armor, Spiked Metal Shoulder Armor, Spiked Metal Thigh Armor, Spiked Metal Thigh Armor, Spiked Scrap Metal Forearm Armor, Spiked Scrap Metal Forearm Armor, Spiked Scrap Metal Shin Armor, Spiked Scrap Metal Shin Armor, Spiked Scrap Metal Shoulder Armor, Spiked Scrap Metal Shoulder Armor, Spiked Scrap Metal Thigh Armor, Spiked Scrap Metal Thigh Armor, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Stapler, Staples, Steak Knife, Steel Bar, Steel Bar Half, Steel Bar Quarter, Steel Block, Steel Block (Pierced) "Steel Block (Pierced)"), Steel Chunk, Steel Chunk (Pierced) "Steel Chunk (Pierced)"), Steel Ingot, Steel Ingot (Pierced) "Steel Ingot (Pierced)"), Steel Piece, Steel Rod, Steel Rod Half, Steel Rod Quarter, Steel Scrap, Steel Sheet, Steel Sheet - Small, Steel Slug, Steel Wool, Stethoscope, Stir Fry (pan), Stir Fry "Stir Fry (griddle)"), Stir Fry "Stir Fry (pan)"), Straight Razor, Strainer, Sturdy Bone Club with Spikes, Sushi Knife, Switchblade, Sword, Sword Blade, Sword Blade (No Tang) "Sword Blade (No Tang)"), Sword Blade Shard, T-square, TV Remote, Thimble, Timer - Crafted, Tin Can, Tin Can, Tin of Caviar, Tire - Old (Heavy-Duty Vehicle) "Tire - Old (Heavy-Duty Vehicle)"), Tire - Old (Sports Vehicle) "Tire - Old (Sports Vehicle)"), Tire - Old (Standard Vehicle) "Tire - Old (Standard Vehicle)"), Tire - Performance (Heavy-Duty Vehicle) "Tire - Performance (Heavy-Duty Vehicle)"), Tire - Performance (Sports Vehicle) "Tire - Performance (Sports Vehicle)"), Tire - Performance (Standard Vehicle) "Tire - Performance (Standard Vehicle)"), Tire - Regular (Heavy-Duty Vehicle) "Tire - Regular (Heavy-Duty Vehicle)"), Tire - Regular (Sports Vehicle) "Tire - Regular (Sports Vehicle)"), Tire - Regular (Standard Vehicle) "Tire - Regular (Standard Vehicle)"), Tire Body Armor, Tire Forearm Armor, Tire Forearm Armor, Tire Iron, Tire Shin Armor, Tire Shin Armor, Tire Shoulder Armor - Left, Tire Shoulder Armor - Right, Tire Thigh Armor, Tire Thigh Armor, Tongs, Toolbox, Toolbox, Toolbox, Toolbox, Toolbox, Toolbox, Toy Badge, Toy Cap Pistol, Toy Cap Rifle, Toy Car, Toy Plane, Tree Branch - Can-Reinforced, Tree Branch with Nails, Tree Branch with Railspike, Trophy, Trophy, Trophy, Trumpet, Tuning Fork, US ARMY COMM. Manpack Radio, Unlabeled Can of Food, Vise Grips, Water Ration Can, Western Canteen, Whisk, Whistle, Wire, Wire Bundle, Wood Axe, Wood Axe Head, Wood Saw, Wooden Crude Bench Vise Parts Mold, Wooden Rod - Can-Reinforced, Wooden Rod with Nails, Wrench, Wrist Watch - Classic, Wrist Watch - Classic, Wrist Watch - Classic, Wrist Watch - Classic, Wrist Watch - Gold, Wrist Watch - Gold, Wrist Watch - Luthex, Wrist Watch - Luthex, Wrist Watch - Military, Wrist Watch - Military |
| base:hastoolhead "Hastoolhead (tag)") | Ball-peen Hammer, Ball-peen Hammer, Claw Hammer, Claw Hammer, Club Hammer, Club Hammer, Garden Hoe, Garden Hoe, Long Mace, Long Stone Mace, Mace, Pickaxe, Pickaxe, Sledgehammer, Sledgehammer, Sledgehammer, Smithing Hammer, Spade, Spade, Stone Mace, Stone Maul |
| base:hazmatsuit "Hazmatsuit (tag)") | Hazmat Suit |
| base:headingtool "Headingtool (tag)") | Heading Tool |
| base:heavyitem "Heavyitem (tag)") | Assembled Blacksmith Anvil, Bench Anvil, Bench Anvil (Untreated) "Bench Anvil (Untreated)"), Blacksmith Anvil, Blacksmith Anvil (Untreated) "Blacksmith Anvil (Untreated)"), Block Anvil, Block Anvil (Untreated) "Block Anvil (Untreated)"), Copper Ore, Corpse "Corpse (female)"), Corpse "Corpse (male)"), Generator - Lectromax, Generator - Old, Generator - Premium Technologies, Generator - ValuTech, Iron Bloom, Iron Ore, Large Meteorite, Large Plank, Large Stone, Railroad Track, Railroad Track Piece, Stone Anvil |
| base:heavythread "Heavythread (tag)") | Aramid Thread, Sinew Thread |
| base:herbaltea "Herbaltea (tag)") | Base.HotDrinkCopper "Beverage (mug)"), Base.HotDrinkGold "Beverage (mug)"), Base.HotDrinkMetal "Beverage (mug)"), Base.HotDrinkSilver "Beverage (mug)"), Base.HotDrinkTumbler "Beverage (tumbler)"), Black Sage, Black Sage (Dried) "Black Sage (Dried)"), Bouillon Cube, Chamomile, Chamomile (Dried) "Chamomile (Dried)"), Common Mallow, Common Mallow (Dried) "Common Mallow (Dried)"), Ginger Root, Ginseng, Honey, Beverage (mug), Hot Drink, Hot Drink "Hot Teacup (ceramic)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)"), Lavender, Lavender Petals (Dried) "Lavender Petals (Dried)"), Lemon, Lemongrass, Lime, Marigold, Marigold (Dried) "Marigold (Dried)"), Mint, Mint (Dried) "Mint (Dried)"), Rose Hips, Rose Petals (Dried) "Rose Petals (Dried)"), Roses, Wild Garlic, Wild Garlic (Dried) "Wild Garlic (Dried)") |
| base:hidecooked "Hidecooked (tag)") | Baguette, Bread Slices, Pancakes, Toast |
| base:hidehungerchange "Hidehungerchange (tag)") | Jar of Bell Peppers, Jar of Broccoli, Jar of Cabbage, Jar of Carrots, Jar of Eggplants, Jar of Fish Roe, Jar of Leeks, Jar of Potatoes, Jar of Radishes, Jar of Tomatoes |
| base:hideremaining "Hideremaining (tag)") | Insect Repellent, Megaphone, Staples |
| base:hideuncooked "Hideuncooked (tag)") | Avocado, Bagel, Baloney Slices, Bell Pepper, Broccoli, Cabbage, Canned Beans (Open), Canned Carrots (Open), Canned Chili (Open), Canned Corn, Canned Corn (Open), Canned Corned Beef (Open), Canned Dog Food (Open), Canned Mushroom Soup (Open), Canned Peas (Open), Canned Potato (Open), Canned Sardines (Open), Canned Spaghetti Bolognese (Open), Canned Tomato (Open), Canned Vegetable Soup (Open), Carrots, Cauliflower, Garlic, Green Peas, Habanero, Ham, Ham Slice, Jalapeno, Kale, Marshmallows, Mushrooms, Mushrooms, Mushrooms, Mushrooms, Mushrooms, Mushrooms, Mushrooms, Mushrooms, Onion, Poppy Bagel, Salami Slices, Sandwich "Sandwich (baguette)"), Sandwich "Sandwich (bread)"), Sesame Bagel, Smore, Spinach, Sugar Beet, Tofu, Tomato, Zucchini |
| base:holdcompost "Holdcompost (tag)") | Sack, Sack, Sack, Sack, Sack, Sack, Sack |
| base:holddirt "Holddirt (tag)") | Sack, Sack, Sack, Sack, Sack, Sack, Sack |
| base:hollowbook "Hollowbook (tag)") | Book "Book (hollow)"), Book "Book (hollow handgun)"), Book "Book (hollow kids)"), Book "Book (hollow prison)"), Book "Book (hollow valuables)"), Book "Book (hollow whiskey)"), Book, Book "Book (adventure non-fiction)"), Book "Book (art)"), Book "Book (baseball)"), Book "Book (biography)"), Book "Book (business)"), Book "Book (childs)"), Book "Book (cinema)"), Book "Book (classic)"), Book "Book (classic fiction)"), Book "Book (classic non-fiction)"), Book "Book (computer)"), Book "Book (crime fiction)"), Book "Book (fantasy)"), Book "Book (farming)"), Book "Book (fashion)"), Book "Book (fiction)"), Book "Book (general non-fiction)"), Book "Book (general reference)"), Book "Book (golf)"), Book "Book (history)"), Book "Book (horror)"), Book "Book (legal)"), Book "Book (literary fiction)"), Book "Book (medical)"), Book "Book (military)"), Book "Book (military history)"), Book "Book (music)"), Book "Book (nature)"), Book "Book (occult)"), Book "Book (philosophy)"), Book "Book (policing)"), Book "Book (politics)"), Book "Book (quackery)"), Book "Book (religion)"), Book "Book (rich)"), Book "Book (romance)"), Book "Book (sad non-fiction)"), Book "Book (school textbook)"), Book "Book (science)"), Book "Book (sci-fi)"), Book "Book (sports)"), Book "Book (thriller)"), Book "Book (travel)"), Book "Book (western)"), Book: The Bible |
| base:idcard "Idcard (tag)") | ID Card, ID Card, ID Card, ID Card |
| base:ignorezombiedensity "Ignorezombiedensity (tag)") | 3D Glasses, ALICE Belt and Suspenders, ALICE Belt and Suspenders, ALICE Belt and Suspenders, Amethyst, Animal Skull Necklace, Animal Skulls Necklace, Antler Boppers, Antler Headdress, Articulated Metal Shin Armor, Articulated Metal Shin Armor, Articulated Metal Shoulder Armor - Left, Articulated Metal Shoulder Armor - Right, Articulated Metal Thigh Armor, Articulated Metal Thigh Armor, Athletic Cup, Awl - Bone, Awl - Stone, Baseball Cap - Spiffo's, Baseball Cap - Spiffo's, Baseball Cap - Spiffo's Logo, Baseball Cap - Spiffo's Logo, Big Hiking Backpack, Big Spiffo, Bolt Cutters, Bone Body Armor, Bone Fingerless Gloves, Bone Forearm Armor, Bone Forearm Armor, Bone Mask, Bone Pectoral, Bone Shin Armor, Bone Shin Armor, Bone Shoulder Armor, Bone Shoulder Armor, Bone Thigh Armor, Bone Thigh Armor, Bone War Hatchet, Bone War Hatchet Head, Book "Book (hollow)"), Book "Book (hollow handgun)"), Book "Book (hollow kids)"), Book "Book (hollow prison)"), Book "Book (hollow valuables)"), Book "Book (hollow whiskey)"), Boonie Hat, Boonie Hat, Boonie Hat, Boris The Badger, Box of Adhesive Tape, Box of Antibiotics, Box of Bandages, Box of Batteries, Box of Candles, Box of Canned Beans, Box of Canned Carrots, Box of Canned Chili, Box of Canned Corn, Box of Canned Corned Beef, Box of Canned Dog Food, Box of Canned Evaporated Milk, Box of Canned Fruit Beverage, Box of Canned Fruit Cocktail, Box of Canned Mushroom Soup, Box of Canned Peaches, Box of Canned Peas, Box of Canned Pineapple, Box of Canned Potato, Box of Canned Sardines, Box of Canned Spaghetti Bolognese, Box of Canned Tomato, Box of Canned Tuna, Box of Canned Vegetable Soup, Box of Cold Packs, Box of Cotton Balls, Box of Dented Unlabeled Cans of Food, Box of Duct Tape, Box of Light Bulbs, Box of Mac and Cheese, Box of Red Wine, Box of Suture Needles, Box of Unlabeled Cans of Food, Box of Water Ration Cans, Box of White Wine, Boxers, Bra, Bra, Bra, Bra, Bra - Strapless, Bra - Strapless, Bra - Strapless, Bra - Strapless, Briefs, Broken Katana, Broken Scrap Metal Sword, Broken Simple Sword, Broken Sword, Bronze Sports Medal, Bucket Maul - Wood Handle, Bulletproof Vest Forearm Armor, Bulletproof Vest Forearm Armor, Bulletproof Vest Forearm Armor, Bulletproof Vest Forearm Armor, Bulletproof Vest Forearm Armor, Bulletproof Vest Forearm Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Thigh Armor, Bulletproof Vest Thigh Armor, Bulletproof Vest Thigh Armor, Bulletproof Vest Thigh Armor, Bulletproof Vest Thigh Armor, Bulletproof Vest Thigh Armor, Bunny Ears, Bunny Ears, Bunny Suit, Bunny Suit, Bunny Tail, Burlap Headsack, Burlap Headwrap (Fully Closed) "Burlap Headwrap (Fully Closed)"), Burlap Headwrap (Open Face) "Burlap Headwrap (Open Face)"), Carton of .223 Rounds, Carton of 7.62x51mm Rounds, Carton of .38 Special Rounds, Carton of .44 Magnum Rounds, Carton of .45 ACP Rounds, Carton of 5.56x45mm Rounds, Carton of 9x19mm Rounds, Carton of Nails, Carton of Screws, Carton of 12g Rounds, Cashbox, Catcher's Vest, Catcher's Vest, Catcher's Vest, Catcher's Vest, Chainmail Glove - Left, Chainmail Glove - Right, Chest Rig, Chewing Tobacco, Chicken Hat - Jay's, Cigar, Cigar Box, Cigar Box, Cigar Box, Cigar Box, Cigarette Carton, Cigarillo, Cloth Headwrap (Fully Closed) "Cloth Headwrap (Fully Closed)"), Cloth Headwrap (Open Face) "Cloth Headwrap (Open Face)"), Coat of Plates Body Armor, Cookie Jar, Cookie Jar - Teddy Bear, Copper Mask, Corset, Corset, Corset, Cosmetic Glasses, Cosmetic Monocle, Cosmetic Monocle, Cotton Headsack, Crafted Burlap Satchel, Crafted Cotton Satchel, Crafted Denim Satchel, Crafted Denim Satchel, Crafted Denim Satchel, Crafted Hide Satchel, Crash Helmet - Spiked, Crash Helmet - Spiked, Crude Metal Helmet, B-F Magazine, B-F Pistol, Diamond, Doctor Bag, Duct Tape Holster, Duffel Bag "Duffel Bag (military)"), Duffel Bag, Earrings - Bird Skulls, Earrings - Pig Tusk, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Elbow Pad, Emerald, Entrenching Tool, Eye of Cthulhu, Fingerless Gloves - Metal, Fingerless Gloves - Scrap Metal, First Aid Kit - Camping, First Aid Kit - Camping, First Aid Kit - Military, Fishing Satchel, Flashlight - Improvised, Flask, Fluffyfoot The Bunny, Football Shoulderpad - Left, Football Shoulderpad - Right, Football Shoulderpads, Football Shoulderpads, Freddy The Fox, Full Chainmail Sleeve - Left, Full Chainmail Sleeve - Right, Full Metal Forearm Armor, Full Metal Forearm Armor, Furbert The Squirrel, Furry Ears, Garbage Bag Headsack, Garter, Generator - Lectromax, Generator - Old, Generator - Premium Technologies, Generator - ValuTech, Gold Goblet, Gold Ingot, Gold Mask, Gold Sheet, Gold Sports Medal, Gold Star Boppers, Halloween Candy Bucket, Handiknife, Happy Face Pillow, Hatbox, Hazmat Suit, Head Mirror, Head Mirror, Heart Pillow, Hide Headsack, Hide Holster, Hide Mask, High-end Camera, Hiking Backpack, Hockey Goalie Shinpad, Hockey Goalie Shinpad, Hockey Goalie Shinpad, Hockey Goalie Shinpad, Hockey Goalie Shinpad, Hockey Goalie Shinpad, Hockey Goalie Shinpad, Hockey Goalie Shinpad, Hologram Skull Sunglasses, Holster - Ankle, Holster - Double, Holster - Shoulder, Hominid Skull Fossil, Hominid Skull Fossil Fragment, Humidor, Hydration Pack, Hydration Pack, Ice Hockey Gloves, Ice Hockey Gloves, Ice Hockey Gloves, Ice Hockey Gloves, Ice Hockey Neck Guard, Ice Hockey Shoulderpads, Ice Hockey Shoulderpads, Improvised Electric Lantern, Improvised Gas Mask, Improvised Gas Mask "Improvised Gas Mask (No Filter)"), Improvised Poncho, Improvised Poncho, Improvised Poncho, Improvised Poncho, Jacques The Beaver, Jawbone Club, Jawbone Morningstar, Jawbone War Axe, Jewelry Box, Jewelry Box, Joke Hat - Arrow, Joke Hat - Knife, Katana, Kettle Maul - Wood Handle, Key Ring - 12, Key Ring - 34, Key Ring - 58, Key Ring - American Eagle, Key Ring - Bass, Key Ring - Blue Fox, Key Ring - Bug, Key Ring - Eight Ball, Key Ring - Four-Leaf Clover, Key Ring - Hotdog, Key Ring - Kitty, Key Ring - Large, Key Ring - Nolan's Used Cars, Key Ring - Panther, Key Ring - Pine Tree, Key Ring - Praying Hands, Key Ring - Rabbit Foot, Key Ring - Rainbow Star, Key Ring - Rubber Duck, Key Ring - Sexy, Key Ring - Spiffos, Key Ring - Stinky Face, Key Ring - West Maple Country Club, Kneepad, Kneepad, Kneepad, Kneepad, Kneepad, Kneepad, Kneepad, Kneepad, Kneepad, Kneepad, Kneepad, Kneepad, Kneepad, Kneepad, Leather Codpiece, Leather Forearm Armor, Leather Forearm Armor, Leather Jacket - Barrel Dogs, Leather Jacket - Iron Rodent, Leather Jacket - Punk, Leather Jacket - Wild Racoons, Leather Vest - Barrel Dogs, Leather Vest - Iron Rodents, Leather Vest - Wild Raccoons, Leather Vest with Patches, Leather Vest with Patches, Leatherbound Book "Leatherbound Book (hollow)"), Long Animal Skull Necklace, Long Animal Skulls Necklace, Long Blade I: "Cool Swords!", Long Blade II: "Fencing: A History", Long Blade III: "Old Sword-Play" by Alfred Hutton, Long Blade IV: "The Zettels of Johannes Liechtenauer", Long Blade V: "Wear Analysis of Selected Medieval Swords", Long Mace, Long Small Animal Skull Necklace, Long Small Animal Skulls Necklace, Long Spiked Club, Long Stone Mace, Long Teeth Necklace, Lunchbox, Mace, Machete, Machete, Magazine Body Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine: HottieZ, Makeup Case, Map: Louisville Central, Map: Louisville East, Map: Louisville North, Map: Louisville Northeast, Map: Louisville Northwest, Map: Louisville South, Map: Louisville Southeast, Map: Louisville Southwest, Map: Louisville West, Map: March Ridge, Map: Muldraugh, Map: Riverside, Map: Rosewood, Map: West Point, Matchbox, Medical Satchel, Metal Body Armor, Metal Codpiece, Metal Forearm Armor, Metal Forearm Armor, Metal Mask, Metal Neck Guard, Metal Shin Armor, Metal Shin Armor, Metal Shoulder Armor, Metal Shoulder Armor, Metal Thigh Armor, Metal Thigh Armor, Military Backpack, Military Backpack, Military Backpack, Military Backpack, Military Bulletproof Vest Forearm Armor, Military Bulletproof Vest Forearm Armor, Military Bulletproof Vest Shin Armor, Military Bulletproof Vest Shin Armor, Military Bulletproof Vest Thigh Armor, Military Bulletproof Vest Thigh Armor, Military Jacket - Desert Camo, Military Jacket - Foreign Camo, Military Jacket - Tiger Stripe Camo, Military Medal, Military Pants - Desert Camo, Military Pants - Foreign Camo, Military Pants - Tiger Stripe Camo, Military Satchel, Military Shirt - Desert Camo, Military Shirt - Foreign Camo, Military Shirt - Tiger Stripe Camo, Military Shorts - Desert Camo, Military Shorts - Foreign Camo, Military Shorts - Tiger Stripe Camo, Military T-shirt - Desert Camo, Military T-shirt - Foreign Camo, Military T-shirt - Tiger Stripe Camo, Moley The Mole, Money Bundle, Mug, Multi-Color Pen, Multitool, New Wave Sunglasses, Novelty Glasses, Novelty X-ray Glasses, Old Photograph, Old Welding Goggles, Pack of Beer Bottles, Pack of Beer Cans, Padded Football Pants, Padded Football Pants, Padded Football Pants, Padded Football Pants, Padded Ice Hockey Pants, Padded Ice Hockey Pants, Padded Ice Hockey Pants, Padded Ice Hockey Pants, Padded Ice Hockey Pants, Pancake The Hedgehog, Pancho the Dog, Partial Hominid Skull Fossil, Passport, Pen - Spiffo, Pencil - Spiffo, Photograph "Photograph (racy)"), Photograph "Photograph (secret)"), Photograph of Judge Matt Hass (Autographed) "Photograph of Judge Matt Hass (Autographed)"), Picture of Bob, Picture of Casey-Jo, Picture of Chris Bailey, Picture of Dr. Cortman, Picture of Hank, Picture of James Garcia, Picture of Kate, Picture of Marianne Brown, Pilgrim Hat, Pirate Hat, Plank with Saw, Plumpabug the Aphid, Pocketwatch, Police Bulletproof Vest Forearm Armor, Police Bulletproof Vest Forearm Armor, Police Bulletproof Vest Shin Armor, Police Bulletproof Vest Shin Armor, Police Bulletproof Vest Thigh Armor, Police Bulletproof Vest Thigh Armor, Police Duffel Bag, Postcard, Pouch, Pouch, Pouch of Tobacco, Prescription Aviator Glasses, Prescription Monocle, Prescription Monocle, Prescription Reflective Sunglasses, Prescription Shooting Glasses, Prescription Sunglasses, Raccoon Hat, Rigid Shin Pad, Rigid Shin Pad, Ruby, SWAT Bulletproof Vest Forearm Armor, SWAT Bulletproof Vest Forearm Armor, SWAT Bulletproof Vest Shin Armor, SWAT Bulletproof Vest Shin Armor, SWAT Bulletproof Vest Thigh Armor, SWAT Bulletproof Vest Thigh Armor, SWAT Duffel Bag, Sapphire, Scrap Metal Body Armor, Scrap Metal Chopper, Scrap Metal Forearm Armor, Scrap Metal Forearm Armor, Scrap Metal Helmet, Scrap Metal Mask, Scrap Metal Shin Armor, Scrap Metal Shin Armor, Scrap Metal Shortsword, Scrap Metal Shoulder Armor, Scrap Metal Shoulder Armor, Scrap Metal Sword, Scrap Metal Thigh Armor, Scrap Metal Thigh Armor, Security Pass Key Ring, Server Hat - Spiffo's, Set of Aiming Books, Set of Animal Care Books, Set of Blacksmithing Books, Set of Butchering Books, Set of Carpentry Books, Set of Carving Books, Set of Cooking Books, Set of Electrical Books, Set of Farming Books, Set of First Aid Books, Set of Fishing Books, Set of Foraging Books, Set of Glassmaking Books, Set of Knapping Books, Set of Long Blade Books, Set of Maintenance Books, Set of Masonry Books, Set of Mechanics Books, Set of Pottery Books, Set of Reloading Books, Set of Tailoring Books, Set of Tracking Books, Set of Trapping Books, Set of Welding Books, Shemagh (Face Covering Scarf) "Shemagh (Face Covering Scarf)"), Shemagh (Face Covering Scarf) "Shemagh (Face Covering Scarf)"), Shemagh (Fully Closed) "Shemagh (Fully Closed)"), Shemagh (Fully Closed) "Shemagh (Fully Closed)"), Shemagh (Open Face) "Shemagh (Open Face)"), Shemagh (Open Face) "Shemagh (Open Face)"), Shemagh (Scarf) "Shemagh (Scarf)"), Shemagh (Scarf) "Shemagh (Scarf)"), Sheriff Duffel Bag, Shin Guard, Shin Guard, Shin Guard, Shin Guard, Shin Guard, Shin Guard, Shin Guard, Shin Guard, Shin Guard, Shin Guard, Short Bat with Spikes, Shortsword, Silver Goblet, Silver Ingot, Silver Mask, Silver Sheet, Silver Sports Medal, Simple Shortsword, Simple Sword, Small Animal Skull Necklace, Small Animal Skulls Necklace, Small Backpack, Small Backpack, Small Backpack, Small Gold Ingot, Small Protective Case, Small Silver Ingot, Soft Shin Pad, Soft Shin Pad, Soft Shin Pad, Soft Shin Pad, Soft Shin Pad, Soft Shin Pad, Specimen Case - Beetles, Specimen Case - Butterflies, Specimen Case - Insects, Specimen Case - Minerals, Specimen Jar - Brain, Specimen Jar - Centipedes, Specimen Jar - Fetal Calf, Specimen Jar - Fetal Lamb, Specimen Jar - Fetal Piglet, Specimen Jar - Monkey Head, Specimen Jar - Octopus, Specimen Jar - Tapeworm, Spiffo "Spiffo (item)"), Spiffo Sleeping Bag, Spiffo Sleeping Bag (Packed) "Sleeping Bag - Spiffo (Packed)"), Spiffo Suit, Spiffo Suit Head, Spiffo Suit Tail, Spiked Articulated Metal Shin Armor, Spiked Articulated Metal Shin Armor, Spiked Articulated Metal Shoulder Armor - Left, Spiked Articulated Metal Shoulder Armor - Right, Spiked Football Shoulderpad - Left, Spiked Football Shoulderpad - Right, Spiked Football Shoulderpads (On Top) "Spiked Football Shoulderpads (On Top)"), Spiked Leather Forearm Armor, Spiked Leather Forearm Armor, Spiked Metal Forearm Armor, Spiked Metal Forearm Armor, Spiked Metal Shin Armor, Spiked Metal Shin Armor, Spiked Metal Shoulder Armor, Spiked Metal Shoulder Armor, Spiked Metal Thigh Armor, Spiked Metal Thigh Armor, Spiked Scrap Metal Forearm Armor, Spiked Scrap Metal Forearm Armor, Spiked Scrap Metal Shin Armor, Spiked Scrap Metal Shin Armor, Spiked Scrap Metal Shoulder Armor, Spiked Scrap Metal Shoulder Armor, Spiked Scrap Metal Thigh Armor, Spiked Scrap Metal Thigh Armor, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Star Pillow, Stone Mace, Stovepipe Hat, Stovepipe Hat, Straw Hat, Summer Flower Hat, Sushi Knife, Suspicious Package, Sword, Tarp Chest Rig, Tarp Headsack, Teeth Necklace, Thigh Guard, Thigh Guard, Tights - Fishnet, Tire Body Armor, Tire Forearm Armor, Tire Forearm Armor, Tire Shin Armor, Tire Shin Armor, Tire Shoulder Armor - Left, Tire Shoulder Armor - Right, Tire Thigh Armor, Tire Thigh Armor, Tool Roll - Fabric, Tool Roll - Leather, Trash Goblin, Trauma Bag, Trophy, Trophy, Trophy, Tusk Necklace, Tusks Necklace, Uncle Sam Stovepipe Hat, Underpants, Underpants, Underpants, Underpants, VHS - Home, Western Boots - Embroidered, Western Boots - Snakeskin, Witch Hat, Wizard Hat, Wood Goblet, Wood Mask, Wooden Body Armor, Wooden Forearm Armor, Wooden Forearm Armor, Wooden Shin Armor, Wooden Shin Armor, Wooden Shoulder Armor, Wooden Shoulder Armor, Wooden Thigh Armor, Wooden Thigh Armor, Wrist Watch - Luthex, Wrist Watch - Luthex |
| base:inferiorbinding "Inferiorbinding (tag)") | Duct Tape, Zip Ties |
| base:ingot "Ingot (tag)") | Brass Ingot, Copper Ingot, Iron Ingot, Steel Ingot |
| base:ironmaterial "Ironmaterial (tag)") | Iron Bar, Iron Bar Half, Iron Bar Quarter, Iron Block, Iron Block (Pierced) "Iron Block (Pierced)"), Iron Chunk, Iron Chunk (Pierced) "Iron Chunk (Pierced)"), Iron Piece |
| base:ironore "Ironore (tag)") | Iron Ore, Large Meteorite |
| base:ironsource "Ironsource (tag)") | Iron Bloom, Iron Ore, Large Meteorite |
| base:isatomic "Isatomic (tag)") | Rubber Duck |
| base:iscompostable "Iscompostable (tag)") | Chicken Droppings, Cow Dung, Deer Droppings, Mouse Droppings, Pig Dung, Rabbit Droppings, Raccoon Dung, Rat Droppings, Sheep Dung, Turkey Dung |
| base:iscutting "Iscutting (tag)") | Basil, Chamomile, Chives, Cilantro, Ginger Root, Lemongrass, Marigold, Marigold (Dried) "Marigold (Dried)"), Mint, Oregano, Parsley, Rosemary, Sage, Thyme, Wild Garlic |
| base:isdisguise "Isdisguise (tag)") | Balaclava, Balaclava - Open, Burlap Headsack, Burlap Headwrap (Fully Closed) "Burlap Headwrap (Fully Closed)"), Burlap Headwrap (Open Face) "Burlap Headwrap (Open Face)"), Cloth Headwrap (Fully Closed) "Cloth Headwrap (Fully Closed)"), Cloth Headwrap (Open Face) "Cloth Headwrap (Open Face)"), Copper Mask, Cotton Headsack, Crude Metal Helmet, Garbage Bag Headsack, Gas Mask, Gas Mask (No Filter) "Gas Mask (No Filter)"), Gold Mask, Halloween Mask - Devil, Halloween Mask - Monster, Halloween Mask - Pumpkin, Halloween Mask - Skeleton, Halloween Mask - Vampire, Halloween Mask - Witch, Hide Headsack, Hide Mask, Hockey Mask, Improvised Gas Mask, Improvised Gas Mask "Improvised Gas Mask (No Filter)"), Metal Mask, Nuclear Biochemical Mask, Nuclear Biochemical Mask (No Filter) "Nuclear Biochemical Mask (No Filter)"), SCBA, SCBA (No Tank) "SCBA (No Tank)"), Scrap Metal Helmet, Scrap Metal Mask, Shemagh (Fully Closed) "Shemagh (Fully Closed)"), Shemagh (Fully Closed) "Shemagh (Fully Closed)"), Silver Mask, Spiffo Suit Head, Tarp Headsack, Welder Mask, Wood Mask |
| base:isfirefuel "Isfirefuel (tag)") | ALICE Belt and Suspenders, ALICE Belt and Suspenders, ALICE Belt and Suspenders, Acoustic Guitar, Antique Table Leg, Antique Table Leg with Nails, Antler Boppers, Army Beret, Badminton Racket, Balaclava, Balaclava - Open, Bandage, Bandage (Dirty), Banjo, Baseball Bat, Baseball Bat - Can-Reinforced, Baseball Bat with Nails, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap - 3N, Baseball Cap - 3N, Baseball Cap - American Eats, Baseball Cap - American Eats, Baseball Cap - American Tire, Baseball Cap - American Tire, Baseball Cap - Ameriglobe, Baseball Cap - Ameriglobe, Baseball Cap - Army, Baseball Cap - Army, Baseball Cap - Body Chisel, Baseball Cap - Body Chisel, Baseball Cap - Boxpop Brewery, Baseball Cap - Boxpop Brewery, Baseball Cap - Fancy Fossoil, Baseball Cap - Fancy Fossoil, Baseball Cap - Fire Department, Baseball Cap - Fire Department, Baseball Cap - Fossoil, Baseball Cap - Fossoil, Baseball Cap - Gas-2-Go, Baseball Cap - Gas-2-Go, Baseball Cap - Hunting Camo, Baseball Cap - Hunting Camo, Baseball Cap - Jay's Chicken, Baseball Cap - Jay's Chicken, Baseball Cap - KY Transit, Baseball Cap - KY Transit, Baseball Cap - Kentucky, Baseball Cap - Kentucky, Baseball Cap - Kentucky, Baseball Cap - Kentucky, Baseball Cap - Knox Distillery, Baseball Cap - Knox Distillery, Baseball Cap - LBMW Radio, Baseball Cap - LBMW Radio, Baseball Cap - LSU, Baseball Cap - LSU, Baseball Cap - Louisville Bruiser, Baseball Cap - Louisville Bruiser, Baseball Cap - Mass Genfac, Baseball Cap - Mass Genfac, Baseball Cap - Pizza Whirled, Baseball Cap - Pizza Whirled, Baseball Cap - Police, Baseball Cap - Police, Baseball Cap - SWAT, Baseball Cap - SWAT, Baseball Cap - Scarlet Oak, Baseball Cap - Scarlet Oak, Baseball Cap - Sheriff, Baseball Cap - Sheriff, Baseball Cap - Spiffo's, Baseball Cap - Spiffo's, Baseball Cap - Spiffo's Logo, Baseball Cap - Spiffo's Logo, Baseball Cap - United Shipping Logistics, Baseball Cap - United Shipping Logistics, Baseball Cap - West Maple Country Club, Baseball Cap - West Maple Country Club, Basket, Beanie, Beret, Big Hiking Backpack, Big Hiking Backpack, Big Spiffo, Book "Book (hollow)"), Book "Book (hollow handgun)"), Book "Book (hollow kids)"), Book "Book (hollow prison)"), Book "Book (hollow valuables)"), Book "Book (hollow whiskey)"), Boonie Hat, Boonie Hat, Boonie Hat, Boonie Hat, Boonie Hat, Boonie Hat, Boonie Hat, Boris The Badger, Bowling Pin, Bowling Pin with Nails, Bowtie, Bowtie, Bowtie, Box of Bandages, Box of Cotton Balls, Box of Tissues, Box of Tongue Depressors, Bra, Bra, Bra, Bra, Bra, Bra, Bra - Strapless, Bra - Strapless, Bra - Strapless, Bra - Strapless, Bra - Strapless, Bra - Strapless, Bra - Strapless, Broken Acoustic Guitar Neck, Broken Banjo Neck, Broken Baseball Bat, Broken Baseball Bat with Nails, Broken Branch, Broken Branch with Nails, Broken Canoe Paddle, Broken Electric Bass Neck, Broken Electric Guitar Neck, Broken Field Hockey Stick, Broken Field Hockey Stick with Nails, Broken Garden Tool Handle, Broken Large Handle, Broken Large Handle with Nails, Broken Long Stick, Broken Plank, Broken Plank with Nails, Broken Stick, Broken Stick with Nails, Broken Table Leg, Broken Table Leg with Nails, Broom, Bucket, Bucket Hat, Bunny Ears, Bunny Ears, Bunny Suit, Bunny Suit, Bunny Tail, Burlap Headsack, Burlap Headwrap (Fully Closed) "Burlap Headwrap (Fully Closed)"), Burlap Headwrap (Open Face) "Burlap Headwrap (Open Face)"), Canoe Paddle, Canoe Paddle - Double-bladed, Captain's Hat, Chair Leg, Chair Leg with Nails, Charcoal, Cheap Sleeping Bag, Cheap Sleeping Bag, Cheap Sleeping Bag, Cheap Sleeping Bag (Packed) "Sleeping Bag - Cheap (Packed)"), Cheap Sleeping Bag (Packed) "Sleeping Bag - Cheap (Packed)"), Cheap Sleeping Bag (Packed) "Sleeping Bag - Cheap (Packed)"), Chef's Hat, Chest Rig, Chicken Hat - Jay's, Chinese Takeout Container, Chopsticks, Cigar Box, Cigar Box, Cigar Box, Cigar Box, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cloth Headwrap (Fully Closed) "Cloth Headwrap (Fully Closed)"), Cloth Headwrap (Open Face) "Cloth Headwrap (Open Face)"), Coke, Corset, Corset, Corset, Corset, Cotton Balls, Cotton Headsack, Cowboy Hat, Cowboy Hat, Cowboy Hat, Cowboy Hat - Angus Cowhide, Cowboy Hat - Cowhide, Cowboy Hat - Holstein Cowhide, Cowboy Hat - Simmental Cowhide, Crafted Baseball Bat, Crafted Burlap Satchel, Crafted Burlap Teddy Bear, Crafted Cotton Satchel, Crafted Cotton Teddy Bear, Crafted Denim Satchel, Crafted Denim Satchel, Crafted Denim Satchel, Crafted Hide Satchel, Crafted Pillow, Crayons, Cudgel with Nails, Cutting Board, Cutting Board, Denim Strips, Denim Strips (Dirty), Dice - Wood, Doily, Doll, Drumstick, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag "Duffel Bag (military)"), Duffel Bag, Dust Mask, Ear Muffs, Eye of Cthulhu, Fanny Pack, Fanny Pack, Fedora, Fedora, Field Hockey Stick, Field Hockey Stick with Nails, Firewood, Firewood Bundle, Firewood with Nails, First Aid Kit - Camping, First Aid Kit - Camping, First Aid Kit - Military, Fisherman Hat, Fisherman Hat - Rain, Fishing Basket, Fishing Satchel, Fluffyfoot The Bunny, Framepack, Freddy The Fox, Furbert The Squirrel, Furry Ears, Garbage Bag, Garbage Bag, Garbage Bag Headsack, Garden Basket, Gavel, Gift - Extra Large, Gift - Extra Small, Gift - Large, Gift - Medium, Gift - Small, Gold Star Boppers, Golf Cap, Golf Cap, Gunny Sack, Halloween Candy Bucket, Halloween Mask - Devil, Halloween Mask - Monster, Halloween Mask - Pumpkin, Halloween Mask - Skeleton, Halloween Mask - Vampire, Halloween Mask - Witch, Happy Face Pillow, Hatbox, Hay, Heart Pillow, Hide Headsack, Hide Mask, High Quality Sleeping Bag, High Quality Sleeping Bag (Packed) "Sleeping Bag - High Quality (Packed)"), Hiking Backpack, Hiking Backpack, Hobby Horse, Humidor, Ice Hockey Stick, Improvised Tent Kit, Improvised Tent Kit (Packed) "Improvised Tent Kit (Packed)"), Jacques The Beaver, Jewelry Box, Jewelry Box, Joke Hat - Arrow, Joke Hat - Knife, Knitting Needles - Wood, Lacrosse Stick, Large Branch, Large Framepack, Large Handle, Large Handle with Nails, Laundry Bag, Laundry Bag, Laundry Bag, Leaf Rake, Leatherbound Book "Leatherbound Book (hollow)"), Log, Long Stick, Lunchbag, Magazine Body Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Mail Bag, Mail Satchel, Makeshift Fishing Rod, Makeup Case, Medical Satchel, Medium Handle, Medium Handle with Nails, Military Backpack, Military Backpack, Military Backpack, Military Backpack, Military Satchel, Moley The Mole, Money, Money Bundle, Mop, Newspaper Hat, Nightstick, Ouja Board, Oven Mitt, Pancake The Hedgehog, Pancho the Dog, Paper Bag, Paper Bag, Paper Bag, Paper Napkins, Parcel - Extra Large, Parcel - Extra Small, Parcel - Large, Parcel - Medium, Parcel - Small, Party Hat, Party Hat, Peaked Military Cap, Pencil, Pencil - Spiffo, Photo Album, Photo Album, Picnic Basket, Pilgrim Hat, Pillow, Pine Cone, Pirate Hat, Plank, Plank with Nails, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Cowboy Hat with Whistle, Plastic Tray, Playing Cards, Plumpabug the Aphid, Plunger, Police Duffel Bag, Police Hat - Deputy, Police Hat - Trooper, Pool Cue, Pouch, Pouch, Produce Box - Extra Large, Produce Box - Extra Small, Produce Box - Large, Produce Box - Medium, Produce Box - Small, Rag, Rag (Dirty), Ranger Hat, Rolling Pin, SWAT Duffel Bag, Sack, Sack, Sack, Sack, Sack, Sack, Santa Hat, Santa Hat - Green, Sapling, Satchel, Satchel, Scrap Wood, Server Hat - Fast Food, Server Hat - Ice Cream, Server Hat - Spiffo's, Sheet, Sheet Rope, Sheet Rope Bundle, Sheet Sling Bag, Shell Suit Jacket, Shell Suit Jacket, Shell Suit Jacket, Shell Suit Jacket, Shell Suit Jacket, Shell Suit Jacket, Shell Suit Pants, Shell Suit Pants, Shell Suit Pants, Shell Suit Pants, Shell Suit Pants, Shell Suit Pants, Shemagh (Face Covering Scarf) "Shemagh (Face Covering Scarf)"), Shemagh (Face Covering Scarf) "Shemagh (Face Covering Scarf)"), Shemagh (Fully Closed) "Shemagh (Fully Closed)"), Shemagh (Fully Closed) "Shemagh (Fully Closed)"), Shemagh (Open Face) "Shemagh (Open Face)"), Shemagh (Open Face) "Shemagh (Open Face)"), Shemagh (Scarf) "Shemagh (Scarf)"), Shemagh (Scarf) "Shemagh (Scarf)"), Sheriff Deputy Hat, Sheriff Duffel Bag, Shoebox, Short Bat, Short Bat with Nails, Shower Cap, Simple Framepack, Simple Framepack, Simple Wooden Tongs, Sleeping Bag, Sleeping Bag, Sleeping Bag, Sleeping Bag, Sleeping Bag, Sleeping Bag (Packed) "Sleeping Bag (Packed)"), Sleeping Bag (Packed) "Sleeping Bag (Packed)"), Sleeping Bag (Packed) "Sleeping Bag (Packed)"), Sleeping Bag (Packed) "Sleeping Bag (Packed)"), Sleeping Bag (Packed) "Sleeping Bag (Packed)"), Small Backpack, Small Backpack, Small Backpack, Small Backpack, Small Backpack, Small Handle, Small Simple Framepack, Small Simple Framepack, Spear with Glass Head, Spiffo "Spiffo (item)"), Spiffo Sleeping Bag, Spiffo Sleeping Bag (Packed) "Sleeping Bag - Spiffo (Packed)"), Spiffo Suit, Spiffo Suit Head, Spiffo Suit Tail, Sponge, Stake, Star Pillow, Stockings - Black, Stockings - Semi-Transparent, Stockings - Transparent, Stockings - White, Stovepipe Hat, Stovepipe Hat, Straw Hat, Summer Flower Hat, Summer Hat, Surgical Cap, Surgical Mask, Sweatband, Tacklebox, Takeout Container, Tarot Cards, Tarp, Tarp Chest Rig, Tarp Headsack, Tarp Piece, Tarp Sack, Tarp Sling Bag, Teddy Bear, Tennis Racket, Tent, Tent, Tent, Tent, Tent (Packed) "Tent (Packed)"), Tent (Packed) "Tent (Packed)"), Tent (Packed) "Tent (Packed)"), Tent (Packed) "Tent (Packed)"), Tent Kit, Tent Kit (Packed) "Tent Kit (Packed)"), Tights - Black, Tights - Fishnet, Tights - Semi-Transparent, Tights - Transparent, Tire - Old (Heavy-Duty Vehicle) "Tire - Old (Heavy-Duty Vehicle)"), Tire - Old (Sports Vehicle) "Tire - Old (Sports Vehicle)"), Tire - Old (Standard Vehicle) "Tire - Old (Standard Vehicle)"), Tire - Performance (Heavy-Duty Vehicle) "Tire - Performance (Heavy-Duty Vehicle)"), Tire - Performance (Sports Vehicle) "Tire - Performance (Sports Vehicle)"), Tire - Performance (Standard Vehicle) "Tire - Performance (Standard Vehicle)"), Tire - Regular (Heavy-Duty Vehicle) "Tire - Regular (Heavy-Duty Vehicle)"), Tire - Regular (Sports Vehicle) "Tire - Regular (Sports Vehicle)"), Tire - Regular (Standard Vehicle) "Tire - Regular (Standard Vehicle)"), Tire Piece, Tissue, Toilet Paper, Tongue Depressor, Tool Roll - Fabric, Tote Bag, Tote Bag, Tote Bag, Tote Bag, Trash Goblin, Trauma Bag, Tree Branch, Tree Branch with Nails, Twig Broom, Twigs, Twigs Bundle, Uncle Sam Stovepipe Hat, VHS - Home, VHS - Retail, Violin, Visor, Visor, Visor, Wedding Veil, Winter Hat, Winter Hat - Sheepskin, Witch Hat, Wizard Hat, Wood Charcoal, Wood Clay Sculpting Tool, Wood Goblet, Wood Splinters, Wooden Fork, Wooden Mallet, Wooden Rod, Wooden Rod with Nails, Wooden Skewers, Wooden Spear "Wooden Spear (crafted)"), Wooden Spear (Fire Hardened) "Wooden Spear (Fire Hardened)"), Wooden Spoon, Wooden Toolbox, Wool Hat, Yarn |
| base:isfirefuelsingleuse&action=edit&redlink=1 "Isfirefuelsingleuse (tag) (page does not exist)") | Tissue, Toilet Paper |
| base:isfiretinder "Isfiretinder (tag)") | Antler Boppers, Army Beret, Balaclava, Balaclava - Open, Bandage, Bandage (Dirty), Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap, Baseball Cap - 3N, Baseball Cap - 3N, Baseball Cap - American Eats, Baseball Cap - American Eats, Baseball Cap - American Tire, Baseball Cap - American Tire, Baseball Cap - Ameriglobe, Baseball Cap - Ameriglobe, Baseball Cap - Army, Baseball Cap - Army, Baseball Cap - Body Chisel, Baseball Cap - Body Chisel, Baseball Cap - Boxpop Brewery, Baseball Cap - Boxpop Brewery, Baseball Cap - Fancy Fossoil, Baseball Cap - Fancy Fossoil, Baseball Cap - Fire Department, Baseball Cap - Fire Department, Baseball Cap - Fossoil, Baseball Cap - Fossoil, Baseball Cap - Gas-2-Go, Baseball Cap - Gas-2-Go, Baseball Cap - Hunting Camo, Baseball Cap - Hunting Camo, Baseball Cap - Jay's Chicken, Baseball Cap - Jay's Chicken, Baseball Cap - KY Transit, Baseball Cap - KY Transit, Baseball Cap - Kentucky, Baseball Cap - Kentucky, Baseball Cap - Kentucky, Baseball Cap - Kentucky, Baseball Cap - Knox Distillery, Baseball Cap - Knox Distillery, Baseball Cap - LBMW Radio, Baseball Cap - LBMW Radio, Baseball Cap - LSU, Baseball Cap - LSU, Baseball Cap - Louisville Bruiser, Baseball Cap - Louisville Bruiser, Baseball Cap - Mass Genfac, Baseball Cap - Mass Genfac, Baseball Cap - Pizza Whirled, Baseball Cap - Pizza Whirled, Baseball Cap - Police, Baseball Cap - Police, Baseball Cap - SWAT, Baseball Cap - SWAT, Baseball Cap - Scarlet Oak, Baseball Cap - Scarlet Oak, Baseball Cap - Sheriff, Baseball Cap - Sheriff, Baseball Cap - Spiffo's, Baseball Cap - Spiffo's, Baseball Cap - Spiffo's Logo, Baseball Cap - Spiffo's Logo, Baseball Cap - United Shipping Logistics, Baseball Cap - United Shipping Logistics, Baseball Cap - West Maple Country Club, Baseball Cap - West Maple Country Club, Basket, Beanie, Beret, Big Hiking Backpack, Big Hiking Backpack, Big Spiffo, Book "Book (hollow)"), Book "Book (hollow handgun)"), Book "Book (hollow kids)"), Book "Book (hollow prison)"), Book "Book (hollow valuables)"), Book "Book (hollow whiskey)"), Boonie Hat, Boonie Hat, Boonie Hat, Boonie Hat, Boonie Hat, Boonie Hat, Boonie Hat, Boris The Badger, Bowtie, Bowtie, Bowtie, Bra, Bra, Bra, Bra, Bra, Bra, Bra - Strapless, Bra - Strapless, Bra - Strapless, Bra - Strapless, Bra - Strapless, Bra - Strapless, Bra - Strapless, Bucket Hat, Bunny Ears, Bunny Ears, Bunny Suit, Bunny Suit, Bunny Tail, Burlap Headsack, Burlap Headwrap (Fully Closed) "Burlap Headwrap (Fully Closed)"), Burlap Headwrap (Open Face) "Burlap Headwrap (Open Face)"), Captain's Hat, Cheap Sleeping Bag, Cheap Sleeping Bag, Cheap Sleeping Bag, Chef's Hat, Chest Rig, Chicken Hat - Jay's, Chinese Takeout Container, Chopsticks, Cigar Box, Cigar Box, Cigar Box, Cigar Box, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cloth Gun Case, Cloth Headwrap (Fully Closed) "Cloth Headwrap (Fully Closed)"), Cloth Headwrap (Open Face) "Cloth Headwrap (Open Face)"), Corset, Corset, Corset, Corset, Cotton Balls, Cotton Headsack, Cowboy Hat, Cowboy Hat, Cowboy Hat, Cowboy Hat - Angus Cowhide, Cowboy Hat - Cowhide, Cowboy Hat - Holstein Cowhide, Cowboy Hat - Simmental Cowhide, Crafted Burlap Satchel, Crafted Burlap Teddy Bear, Crafted Cotton Satchel, Crafted Cotton Teddy Bear, Crafted Denim Satchel, Crafted Denim Satchel, Crafted Denim Satchel, Crafted Hide Satchel, Crafted Pillow, Crayons, Denim Strips, Denim Strips (Dirty), Doily, Doll, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag "Duffel Bag (military)"), Duffel Bag, Dust Mask, Ear Muffs, Eye of Cthulhu, Fanny Pack, Fanny Pack, Fedora, Fedora, First Aid Kit - Camping, First Aid Kit - Camping, First Aid Kit - Military, Fisherman Hat, Fishing Basket, Fishing Satchel, Fluffyfoot The Bunny, Framepack, Freddy The Fox, Furbert The Squirrel, Furry Ears, Garbage Bag, Garbage Bag, Garbage Bag Headsack, Garden Basket, Gift - Extra Large, Gift - Extra Small, Gift - Large, Gift - Medium, Gift - Small, Gold Star Boppers, Golf Cap, Golf Cap, Gunny Sack, Halloween Candy Bucket, Halloween Mask - Devil, Halloween Mask - Monster, Halloween Mask - Pumpkin, Halloween Mask - Skeleton, Halloween Mask - Vampire, Halloween Mask - Witch, Happy Face Pillow, Hatbox, Hay, Heart Pillow, Hide Headsack, Hide Mask, High Quality Sleeping Bag, Hiking Backpack, Hiking Backpack, Humidor, Improvised Tent Kit, Jacques The Beaver, Jewelry Box, Jewelry Box, Joke Hat - Arrow, Joke Hat - Knife, Knitting Needles - Wood, Large Framepack, Laundry Bag, Laundry Bag, Laundry Bag, Leatherbound Book "Leatherbound Book (hollow)"), Lunchbag, Magazine Body Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magazine Limb Armor, Magnesium Shavings, Mail Bag, Mail Satchel, Makeup Case, Medical Satchel, Military Backpack, Military Backpack, Military Backpack, Military Backpack, Military Satchel, Moley The Mole, Money, Money Bundle, Newspaper Hat, Ouja Board, Oven Mitt, Pancake The Hedgehog, Pancho the Dog, Paper Bag, Paper Bag, Paper Bag, Paper Napkins, Parcel - Extra Large, Parcel - Extra Small, Parcel - Large, Parcel - Medium, Parcel - Small, Party Hat, Party Hat, Peaked Military Cap, Pencil, Pencil - Spiffo, Photo Album, Photo Album, Picnic Basket, Pilgrim Hat, Pillow, Pine Cone, Pirate Hat, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Cowboy Hat with Whistle, Playing Cards, Plumpabug the Aphid, Police Duffel Bag, Police Hat - Deputy, Police Hat - Trooper, Pouch, Pouch, Produce Box - Extra Large, Produce Box - Extra Small, Produce Box - Large, Produce Box - Medium, Produce Box - Small, Rag, Rag (Dirty), Ranger Hat, SWAT Duffel Bag, Sack, Sack, Sack, Sack, Sack, Sack, Santa Hat, Santa Hat - Green, Satchel, Satchel, Server Hat - Fast Food, Server Hat - Ice Cream, Server Hat - Spiffo's, Sheet, Sheet Rope, Sheet Sling Bag, Shell Suit Jacket, Shell Suit Jacket, Shell Suit Jacket, Shell Suit Jacket, Shell Suit Jacket, Shell Suit Jacket, Shell Suit Pants, Shell Suit Pants, Shell Suit Pants, Shell Suit Pants, Shell Suit Pants, Shell Suit Pants, Shemagh (Face Covering Scarf) "Shemagh (Face Covering Scarf)"), Shemagh (Face Covering Scarf) "Shemagh (Face Covering Scarf)"), Shemagh (Fully Closed) "Shemagh (Fully Closed)"), Shemagh (Fully Closed) "Shemagh (Fully Closed)"), Shemagh (Open Face) "Shemagh (Open Face)"), Shemagh (Open Face) "Shemagh (Open Face)"), Shemagh (Scarf) "Shemagh (Scarf)"), Shemagh (Scarf) "Shemagh (Scarf)"), Sheriff Deputy Hat, Sheriff Duffel Bag, Shoebox, Shower Cap, Simple Framepack, Simple Framepack, Simple Wooden Tongs, Sleeping Bag, Sleeping Bag, Sleeping Bag, Sleeping Bag, Sleeping Bag, Small Backpack, Small Backpack, Small Backpack, Small Backpack, Small Backpack, Small Simple Framepack, Small Simple Framepack, Spiffo "Spiffo (item)"), Spiffo Sleeping Bag, Spiffo Suit, Spiffo Suit Head, Spiffo Suit Tail, Sponge, Star Pillow, Steel Wool, Stockings - Black, Stockings - Semi-Transparent, Stockings - Transparent, Stockings - White, Stovepipe Hat, Stovepipe Hat, Straw Hat, Summer Flower Hat, Summer Hat, Surgical Cap, Surgical Mask, Sweatband, Takeout Container, Tarot Cards, Tarp, Tarp Chest Rig, Tarp Headsack, Tarp Piece, Tarp Sack, Tarp Sling Bag, Teddy Bear, Tent, Tent, Tent, Tent, Tent Kit, Tights - Black, Tights - Fishnet, Tights - Semi-Transparent, Tights - Transparent, Tissue, Toilet Paper, Tongue Depressor, Tool Roll - Fabric, Tote Bag, Tote Bag, Tote Bag, Tote Bag, Trash Goblin, Trauma Bag, Twigs, Twigs Bundle, Uncle Sam Stovepipe Hat, Visor, Visor, Visor, Wedding Veil, Winter Hat, Winter Hat - Sheepskin, Witch Hat, Wizard Hat, Wood Clay Sculpting Tool, Wood Splinters, Wooden Fork, Wooden Skewers, Wooden Spoon, Wool Hat, Yarn |
| base:islowerdisguise "Islowerdisguise (tag)") | Bandana, Bandana, Bandana, Half Mask Respirator, Half Mask Respirator (No Filters) "Half Mask Respirator (No Filters)"), Rag Bandana - Face, Shemagh (Face Covering Scarf) "Shemagh (Face Covering Scarf)"), Shemagh (Face Covering Scarf) "Shemagh (Face Covering Scarf)") |
| base:ismemento "Ismemento (tag)") | 3D Glasses, Amethyst, Antler Boppers, Apron, Baseball Cap - Spiffo's, Baseball Cap - Spiffo's, Baseball Cap - Spiffo's Logo, Baseball Cap - Spiffo's Logo, Big Hiking Backpack, Big Spiffo, Birthday Card, Boris The Badger, Brass Nameplate, Brick Toys, Bronze Sports Medal, Bunny Ears, Bunny Ears, Bunny Suit, Bunny Suit, Bunny Tail, Captain's Hat, Ceramic Pot Scrubber Frog, Chicken Hat - Jay's, Christmas Card, Christmas Garland, Christmas Ornament, Christmas Ornament, Christmas Ornament, Christmas Ornament, Christmas Ornament, Christmas Ornament, Christmas Ornament, Christmas Ornament, Christmas Ornament, Christmas Wreath, Cookie Jar - Teddy Bear, Cosmetic Monocle, Cosmetic Monocle, Crafted Burlap Teddy Bear, Crafted Cotton Teddy Bear, Crystal, Diamond, Dice - 10-sided, Dice - 12-sided, Dice - 20-sided, Dice - 4-sided, Dice - 6-sided, Dice - 8-sided, Dice - Percentile, Doctor Bag, Dog Chew Toy, Doll, Doodle, Doodle, Easter Card, Emerald, Eye of Cthulhu, Fisherman Hat, Fisherman Hat - Rain, Fishing Satchel, Flask, Fluffyfoot The Bunny, Fountain Pen, Freddy The Fox, Friendship Bracelet, Friendship Bracelet, Furbert The Squirrel, Furry Ears, Garter, Goblet, Gold Goblet, Gold Sports Medal, Gold Star Boppers, Halloween Candy Bucket, Halloween Card, Halloween Mask - Devil, Halloween Mask - Monster, Halloween Mask - Pumpkin, Halloween Mask - Skeleton, Halloween Mask - Vampire, Halloween Mask - Witch, Hanukkah Card, Happy Face Pillow, Harmonica, Heart Pillow, High-end Camera, Hiking Backpack, Hobby Horse, Hologram Skull Sunglasses, Holster - Double, Jacques The Beaver, Joke Hat - Arrow, Joke Hat - Knife, Key Ring - 12, Key Ring - 34, Key Ring - 58, Key Ring - American Eagle, Key Ring - Bass, Key Ring - Blue Fox, Key Ring - Bug, Key Ring - Eight Ball, Key Ring - Four-Leaf Clover, Key Ring - Hotdog, Key Ring - Kitty, Key Ring - Nolan's Used Cars, Key Ring - Panther, Key Ring - Pine Tree, Key Ring - Praying Hands, Key Ring - Rabbit Foot, Key Ring - Rainbow Star, Key Ring - Rubber Duck, Key Ring - Sexy, Key Ring - Spiffos, Key Ring - Stinky Face, Key Ring - West Maple Country Club, Large Crystal, Large Meteorite, Leather Jacket - Barrel Dogs, Leather Jacket - Iron Rodent, Leather Jacket - Wild Racoons, Leather Vest - Barrel Dogs, Leather Vest - Iron Rodents, Leather Vest - Wild Raccoons, Leather Vest with Patches, Leather Vest with Patches, Locket, Lunar New Year Card, Lunchbox, Military Medal, Moley The Mole, Mouse Toy, Mug, Multi-Color Pen, Novelty Glasses, Novelty X-ray Glasses, Old Army Helmet, Old Photograph, Old Welding Goggles, Ouja Board, Pancake The Hedgehog, Pancho the Dog, Paper Bag, Party Hat, Party Hat, Pen - Spiffo, Pencil - Spiffo, Photo Album, Photo Album, Photograph, Photograph "Photograph (racy)"), Photograph "Photograph (secret)"), Photograph of Judge Matt Hass (Autographed) "Photograph of Judge Matt Hass (Autographed)"), Pilgrim Hat, Pirate Hat, Plastic Cowboy Hat with Whistle, Plumpabug the Aphid, Pocketwatch, Postcard, Prescription Monocle, Prescription Monocle, Puzzle Cube, Raccoon Hat, Rat King (Dead) "Rat King (Dead)"), Rubber Duck, Rubber Spider, Ruby, Sapphire, Server Apron - Spiffo's, Server Hat - Spiffo's, Silver Goblet, Silver Sports Medal, Small Backpack, Small Backpack, Snow Globe, Specimen Case - Beetles, Specimen Case - Butterflies, Specimen Case - Insects, Specimen Case - Minerals, Specimen Jar - Brain, Specimen Jar - Centipedes, Specimen Jar - Fetal Calf, Specimen Jar - Fetal Lamb, Specimen Jar - Fetal Piglet, Specimen Jar - Monkey Head, Specimen Jar - Octopus, Specimen Jar - Tapeworm, Spiffo "Spiffo (item)"), Spiffo Sleeping Bag, Spiffo Sleeping Bag (Packed) "Sleeping Bag - Spiffo (Packed)"), Spiffo Suit, Spiffo Suit Head, Spiffo Suit Tail, Spiffo Tie, Spiffo Tie - Clip-on, St. Patrick's Day Card, Star Pillow, Straw Hat, Summer Flower Hat, Suspicious Package, Sympathy Card, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Spiffo, T-shirt - Spiffo, T-shirt - TIS, T-shirt - Tuxedo, Tarot Cards, Teddy Bear, Toy Badge, Toy Cap Pistol, Toy Cap Rifle, Toy Car, Toy Plane, Trash Goblin, Trophy, Trophy, Trophy, Uncle Sam Stovepipe Hat, Valentine's Card, Western Canteen, Witch Hat, Wizard Hat, Wrist Watch - Luthex, Wrist Watch - Luthex, Yoyo |
| base:isseed "Isseed (tag)") | Barley Seeds, Basil, Basil Seeds, Bell Pepper Seeds, Black Sage Seeds, Broadleaf Plantain Seeds, Broccoli Seeds, Cabbage Seeds, Carrot Seeds, Cauliflower Seeds, Chamomile, Chamomile Seeds, Chives, Chives Seeds, Cilantro, Cilantro Seeds, Comfrey Seeds, Common Mallow Seeds, Corn, Corn (Dried) "Corn (Dried)"), Cucumber Seeds, Flax Seeds, Garlic, Garlic Seeds, Ginger Root, Green Peas, Green Peas (Dried) "Green Peas (Dried)"), Habanero Seeds, Hemp, Hemp Seeds, Hops Seeds, Jalapeno Seeds, Kale Seeds, Lavender Seeds, Leek Seeds, Lemon Grass Seeds, Lemongrass, Lettuce Seeds, Marigold, Marigold (Dried) "Marigold (Dried)"), Marigold Seeds, Mint, Mint Seeds, Onion, Onion Seeds, Oregano, Oregano Seeds, Parsley, Parsley Seeds, Poppy Seeds, Potato, Potato Seeds, Pumpkin Seeds, Radish Seeds, Rose Seeds, Rosemary, Rosemary Seeds, Rye Seeds, Sage, Sage Seeds, Soybeans, Soybeans (Dried) "Soybeans (Dried)"), Spinach Seeds, Strawberry Seeds, Sugar Beet Seeds, Sunflower Seeds, Sweet Potato, Sweet Potato Seeds, Thyme, Thyme Seeds, Tobacco Seeds, Tomato Seeds, Turnip Seeds, Watermelon Seeds, Wheat Seeds, Wild Garlic, Wild Garlic Seeds, Zucchini Seeds |
| base:isupperdisguise "Isupperdisguise (tag)") | 3D Glasses, Aviator Glasses, Big Retro Prescription Sunglasses, Big Retro Sunglasses, Cat-Eye Prescription Sunglasses, Cat-Eye Sunglasses, Cheap Sunglasses, Fancy Reflective Sunglasses, Hologram Skull Sunglasses, New Wave Sunglasses, Novelty Glasses, Novelty X-ray Glasses, Old Welding Goggles, Prescription Aviator Glasses, Prescription Reflective Sunglasses, Prescription Shooting Glasses, Prescription Sunglasses, Reflective Sunglasses, Round Prescription Sunglasses, Round Sunglasses, Shooting Glasses, Ski Goggles, Sunglasses, Venetian Sunglasses |
| base:jar&action=edit&redlink=1 "Jar (tag) (page does not exist)") | Jar, Jar |
| base:keyring "Keyring (tag)") | Key Ring, Key Ring, Key Ring - 12, Key Ring - 34, Key Ring - 58, Key Ring - American Eagle, Key Ring - Bass, Key Ring - Blue Fox, Key Ring - Bug, Key Ring - Eight Ball, Key Ring - Forged, Key Ring - Four-Leaf Clover, Key Ring - Gold, Key Ring - Hotdog, Key Ring - Kitty, Key Ring - Large, Key Ring - Nolan's Used Cars, Key Ring - Panther, Key Ring - Pine Tree, Key Ring - Praying Hands, Key Ring - Rabbit Foot, Key Ring - Rainbow Star, Key Ring - Rubber Duck, Key Ring - Sexy, Key Ring - Silver, Key Ring - Spiffos, Key Ring - Stinky Face, Key Ring - West Maple Country Club, Security Pass Key Ring |
| base:killanimal "Killanimal (tag)") | Ball-peen Hammer, Ball-peen Hammer, Baseball Bat with Sawblade, Block Mace, Brake Disc Scrap Metal Weapon, Broken Iron Pipe, Claw Hammer, Claw Hammer, Club Hammer, Club Hammer, Crowbar, Crowbar, Crude Stone Axe, Fighting Knife, Firefighter Axe, Garden Fork Scrap Metal Weapon, Handguard Dagger, Hatchet, Hatchet, Hunting Knife, Hunting Knife, Ice Pick, Iron Pipe, Kitchen Knife, Kitchen Knife, Large Knife, Lead Pipe, Long Simple Metal Knife, Long Stone Knife, Machete Blade Knife, Meat Cleaver, Meat Cleaver, Metal Baseball Bat with Sawblade, Pickaxe, Pickaxe, Pipe Wrench, Railroad Spike Knife, Rake-Head Scrap Metal Weapon, Sawblade Hatchet, Scrap Metal Cleaver, Shovel, Small Knife, Smithing Hammer, Spade, Spade, Spade Head Scrap Metal Weapon, Steak Knife, Steel Rod, Stone Hammer, Stone Knife, Sushi Knife |
| base:knappingtool "Knappingtool (tag)") | Knapping Tool |
| base:knittingneedles "Knittingneedles (tag)") | Knitting Needles, Knitting Needles - Bone, Knitting Needles - Wood |
| base:largeanimalbone "Largeanimalbone (tag)") | Large Animal Bone |
| base:largeblade "Largeblade (tag)") | Hunting Knife Blade, Large Knife Blade, Meat Cleaver Blade, Simple Shortsword Blade, Simple Shortsword Blade (No Tang) "Simple Shortsword Blade (No Tang)") |
| base:largesack "Largesack (tag)") | Gunny Sack, Laundry Bag, Laundry Bag, Laundry Bag, Mail Bag |
| base:leathercrudelarge "Leathercrudelarge (tag)") | Large Hide (Crude) "Large Leather (Crude)") |
| base:leathercrudemedium "Leathercrudemedium (tag)") | Medium Hide (Crude) "Medium Leather (Crude)") |
| base:leathercrudesmall "Leathercrudesmall (tag)") | Small Hide (Crude) "Small Leather (Crude)") |
| base:leathercrudetannedlarge "Leathercrudetannedlarge (tag)") | Large Leather (Crude) "Large Leather (Tanned, Crude)") |
| base:leathercrudetannedmedium "Leathercrudetannedmedium (tag)") | Medium Leather (Crude) "Medium Leather (Tanned, Crude)") |
| base:leathercrudetannedsmall "Leathercrudetannedsmall (tag)") | Small Leather (Crude) "Small Leather (Tanned, Crude)") |
| base:leathercrudewetlarge "Leathercrudewetlarge (tag)") | Large Leather (Crude, Wet) "Large Leather (Tanned, Crude, Wet)") |
| base:leathercrudewetmedium "Leathercrudewetmedium (tag)") | Medium Leather (Crude, Wet) "Medium Leather (Tanned, Crude, Wet)") |
| base:leathercrudewetsmall "Leathercrudewetsmall (tag)") | Small Leather (Crude, Wet) "Small Leather (Tanned, Crude, Wet)") |
| base:leatherfulllarge "Leatherfulllarge (tag)") | Angus Hide (Unprocessed) "Angus Leather (Unprocessed)"), Holstein Hide (Unprocessed) "Holstein Leather (Unprocessed)"), Simmental Hide (Unprocessed) "Simmental Leather (Unprocessed)") |
| base:leatherfullmedium "Leatherfullmedium (tag)") | Black Pig Hide (Unprocessed) "Black Pig Leather (Unprocessed)"), Deer Hide (Unprocessed) "Deer Leather (Unprocessed)"), Landrace Pig Hide (Unprocessed) "Landrace Pig Leather (Unprocessed)"), Sheep Hide (Unprocessed) "Sheep Leather (Unprocessed)") |
| base:leatherfullsmall "Leatherfullsmall (tag)") | Angus Calf Hide (Unprocessed) "Angus Calf Leather (Unprocessed)"), Black Piglet Hide (Unprocessed) "Black Piglet Leather (Unprocessed)"), Fawn Hide (Unprocessed) "Fawn Leather (Unprocessed)"), Holstein Calf Hide (Unprocessed) "Holstein Calf Leather (Unprocessed)"), Lamb Hide (Unprocessed) "Lamb Leather (Unprocessed)"), Landrace Piglet Hide (Unprocessed) "Landrace Piglet Leather (Unprocessed)"), Rabbit Hide (Unprocessed) "Rabbit Leather (Unprocessed)"), Rabbit Hide (Unprocessed) "Rabbit Leather (Unprocessed)"), Raccoon Hide (Unprocessed) "Raccoon Leather (Unprocessed)"), Simmental Calf Hide (Unprocessed) "Simmental Calf Leather (Unprocessed)") |
| base:leatherfurlarge "Leatherfurlarge (tag)") | Angus Hide (Furred) "Angus Leather (Furred)"), Holstein Hide (Furred) "Holstein Leather (Furred)"), Simmental Hide (Furred) "Simmental Leather (Furred)") |
| base:leatherfurmedium "Leatherfurmedium (tag)") | Black Pig Hide (Furred) "Black Pig Leather (Furred)"), Deer Hide (Furred) "Deer Leather (Furred)"), Landrace Pig Hide (Furred) "Landrace Pig Leather (Furred)"), Sheep Hide (Furred) "Sheep Leather (Furred)") |
| base:leatherfursmall "Leatherfursmall (tag)") | Angus Calf Hide (Furred) "Angus Calf Leather (Furred)"), Black Piglet Hide (Furred) "Black Piglet Leather (Furred)"), Fawn Hide (Furred) "Fawn Leather (Furred)"), Holstein Calf Hide (Furred) "Holstein Calf Leather (Furred)"), Lamb Hide (Furred) "Lamb Leather (Furred)"), Landrace Piglet Hide (Furred) "Landrace Piglet Leather (Furred)"), Rabbit Hide (Furred) "Rabbit Leather (Furred)"), Rabbit Hide (Furred) "Rabbit Leather (Furred)"), Raccoon Hide (Furred) "Raccoon Leather (Furred)"), Simmental Calf Hide (Furred) "Simmental Calf Leather (Furred)") |
| base:leatherfurtannedlarge "Leatherfurtannedlarge (tag)") | Angus Leather (Furred) "Angus Leather (Tanned, Furred)"), Holstein Leather (Furred) "Holstein Leather (Tanned, Furred)"), Simmental Leather (Furred) "Simmental Leather (Tanned, Furred)") |
| base:leatherfurtannedmedium "Leatherfurtannedmedium (tag)") | Angus Leather Half (Furred) "Angus Leather Half (Tanned; Furred)"), Black Pig Leather (Furred) "Black Pig Leather (Tanned, Furred)"), Deer Leather (Furred) "Deer Leather (Tanned, Furred)"), Holstein Leather Half (Furred) "Holstein Leather Half (Tanned; Furred)"), Landrace Pig Leather (Furred) "Landrace Pig Leather (Tanned, Furred)"), Sheep Leather (Furred) "Sheep Leather (Tanned, Furred)"), Simmental Leather Half (Furred) "Simmental Leather Half (Tanned; Furred)") |
| base:leatherfurtannedsmall "Leatherfurtannedsmall (tag)") | Angus Calf Leather (Furred) "Angus Calf Leather (Tanned, Furred)"), Angus Leather Quarter (Furred) "Angus Leather Quarter (Tanned; Furred)"), Black Pig Leather Half (Furred) "Black Pig Leather Half (Tanned; Furred)"), Black Piglet Leather (Tanned, Furred) "Black Piglet Leather (Tanned, Furred)"), Deer Leather Half (Furred) "Deer Leather Half (Tanned; Furred)"), Fawn Leather (Furred) "Fawn Leather (Tanned, Furred)"), Holstein Calf Leather (Furred) "Holstein Calf Leather (Tanned, Furred)"), Holstein Leather Quarter (Furred) "Holstein Leather Quarter (Tanned; Furred)"), Lamb Leather (Furred) "Lamb Leather (Tanned, Furred)"), Landrace Pig Leather Half (Furred) "Landrace Pig Leather Half (Tanned; Furred)"), Landrace Piglet Leather (Tanned, Furred) "Landrace Piglet Leather (Tanned, Furred)"), Rabbit Leather (Furred) "Rabbit Leather (Tanned, Furred)"), Rabbit Leather (Furred) "Rabbit Leather (Tanned, Furred)"), Raccoon Leather (Furred) "Raccoon Leather (Tanned, Furred)"), Sheep Leather Half (Furred) "Sheep Leather Half (Tanned; Furred)"), Simmental Calf Leather (Furred) "Simmental Calf Leather (Tanned, Furred)"), Simmental Leather Quarter (Furred) "Simmental Leather Quarter (Tanned; Furred)") |
| base:leatherfurwetlarge "Leatherfurwetlarge (tag)") | Angus Leather (Furred, Wet) "Angus Leather (Tanned, Furred, Wet)"), Deer Leather (Furred, Wet) "Deer Leather (Tanned, Furred, Wet)"), Holstein Leather (Furred, Wet) "Holstein Leather (Tanned, Furred, Wet)"), Simmental Leather (Furred, Wet) "Simmental Leather (Tanned, Furred, Wet)") |
| base:leatherfurwetmedium "Leatherfurwetmedium (tag)") | Black Pig Leather (Furred, Wet) "Black Pig Leather (Tanned, Furred, Wet)"), Landrace Pig Leather (Furred, Wet) "Landrace Pig Leather (Tanned, Furred, Wet)"), Sheep Leather (Furred, Wet) "Sheep Leather (Tanned, Furred, Wet)") |
| base:leatherfurwetsmall "Leatherfurwetsmall (tag)") | Angus Calf Leather (Furred, Wet) "Angus Calf Leather (Tanned, Furred, Wet)"), Black Piglet Leather (Tanned, Furred, Wet) "Black Piglet Leather (Tanned, Furred, Wet)"), Fawn Leather (Furred, Wet) "Fawn Leather (Tanned, Furred, Wet)"), Holstein Calf Leather (Furred, Wet) "Holstein Calf Leather (Tanned, Furred, Wet)"), Lamb Leather (Furred, Wet) "Lamb Leather (Tanned, Furred, Wet)"), Landrace Piglet Leather (Tanned, Furred, Wet) "Landrace Piglet Leather (Tanned, Furred, Wet)"), Rabbit Leather (Furred, Wet) "Rabbit Leather (Tanned, Furred, Wet)"), Rabbit Leather (Furred, Wet) "Rabbit Leather (Tanned, Furred, Wet)"), Raccoon Leather (Furred, Wet) "Raccoon Leather (Tanned, Furred, Wet)"), Simmental Calf Leather (Furred, Wet) "Simmental Calf Leather (Tanned, Furred, Wet)") |
| base:lessfull "Lessfull (tag)") | Chewing Tobacco, Cigarette Pack, Lighter, Lighter - BBQ, Lighter - Disposable, Matchbook, Matchbox, Pouch of Tobacco, Rolling Papers |
| base:lightbar "Lightbar (tag)") | Lightbar - Blue, Lightbar - Red, Lightbar - Red and Blue, Lightbar - Yellow |
| base:lighter "Lighter (tag)") | Lighter, Lighter - BBQ, Lighter - Disposable, Lighter - Improvised Battery |
| base:lighterfluid "Lighterfluid (tag)") | Lighter Fluid |
| base:lightmetalsnips "Lightmetalsnips (tag)") | Medical Shears, Sheet Metal Snips |
| base:lightwhenattached "Lightwhenattached (tag)") | Canteen, Canteen, Canteen, Canteen, Cheap Sleeping Bag (Packed) "Sleeping Bag - Cheap (Packed)"), Cheap Sleeping Bag (Packed) "Sleeping Bag - Cheap (Packed)"), Cheap Sleeping Bag (Packed) "Sleeping Bag - Cheap (Packed)"), Hide Sleeping Bag (Packed) "Sleeping Bag - Hide (Packed)"), High Quality Sleeping Bag (Packed) "Sleeping Bag - High Quality (Packed)"), Improvised Tent Kit (Packed) "Improvised Tent Kit (Packed)"), Sleeping Bag (Packed) "Sleeping Bag (Packed)"), Sleeping Bag (Packed) "Sleeping Bag (Packed)"), Sleeping Bag (Packed) "Sleeping Bag (Packed)"), Sleeping Bag (Packed) "Sleeping Bag (Packed)"), Sleeping Bag (Packed) "Sleeping Bag (Packed)"), Spiffo Sleeping Bag (Packed) "Sleeping Bag - Spiffo (Packed)"), Tent (Packed) "Tent (Packed)"), Tent (Packed) "Tent (Packed)"), Tent (Packed) "Tent (Packed)"), Tent (Packed) "Tent (Packed)"), Tent Kit (Packed) "Tent Kit (Packed)") |
| base:limestone "Limestone (tag)") | Limestone |
| base:litlantern "Litlantern (tag)") | Hurricane Lantern (Lit), Hurricane Lantern (Lit), Hurricane Lantern - Copper (Lit), Hurricane Lantern - Gold (Lit), Hurricane Lantern - Silver (Lit) |
| base:lock "Lock (tag)") | Combination Padlock, Padlock |
| base:lockonwrite "Lockonwrite (tag)") | ID Card - Blank |
| base:log "Log (tag)") | Log |
| base:long_johns "Long johns (tag)") | Crafted Burlap Long Johns, Crafted Cotton Long Johns, Long Johns Bottoms |
| base:longstick "Longstick (tag)") | Long Stick, Sapling |
| base:lowalcohol "Lowalcohol (tag)") | Base.HotDrinkCopper "Beverage (mug)"), Base.HotDrinkGold "Beverage (mug)"), Base.HotDrinkMetal "Beverage (mug)"), Base.HotDrinkSilver "Beverage (mug)"), Base.HotDrinkTumbler "Beverage (tumbler)"), Beer Can, Beverage (mug), Hot Drink, Hot Drink "Hot Teacup (ceramic)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)"), Hot Drink "Beverage (mug)") |
| base:lugwrench "Lugwrench (tag)") | Lug Wrench, Tire Iron |
| base:magazine "Magazine (tag)") | Catalog, HottieZ, Magazine, Magazine "Magazine (art)"), Magazine "Magazine (business)"), Magazine "Magazine (car)"), Magazine "Magazine (child)"), Magazine "Magazine (cinema)"), Magazine "Magazine (crime)"), Magazine "Magazine (fashion)"), Magazine "Magazine (firearm)"), Magazine "Magazine (gaming)"), Magazine "Magazine (golf)"), Magazine "Magazine (health)"), Magazine "Magazine (hobby)"), Magazine "Magazine (horror)"), Magazine "Magazine (humor)"), Magazine "Magazine (military)"), Magazine "Magazine (music)"), Magazine "Magazine (outdoors)"), Magazine "Magazine (police)"), Magazine "Magazine (popular)"), Magazine "Magazine (rich)"), Magazine "Magazine (science)"), Magazine "Magazine (sports)"), Magazine "Magazine (tech)"), Magazine "Magazine (teens)"), Magazine, Magazine "Magazine (art)"), Magazine "Magazine (business)"), Magazine "Magazine (car)"), Magazine "Magazine (child)"), Magazine "Magazine (cinema)"), Magazine "Magazine (crime)"), Magazine "Magazine (fashion)"), Magazine "Magazine (firearm)"), Magazine "Magazine (gaming)"), Magazine "Magazine (golf)"), Magazine "Magazine (health)"), Magazine "Magazine (hobby)"), Magazine "Magazine (horror)"), Magazine "Magazine (humor)"), Magazine "Magazine (military)"), Magazine "Magazine (music)"), Magazine "Magazine (outdoors)"), Magazine "Magazine (police)"), Magazine "Magazine (popular)"), Magazine "Magazine (rich)"), Magazine "Magazine (science)"), Magazine "Magazine (sports)"), Magazine "Magazine (tech)"), Magazine "Magazine (teens)"), Magazine: Alpine Explorers, Magazine: American Bladecraft, Magazine: American Homesteading, Magazine: Ancient Tailoring, Magazine: Angler USA - June 1993, Magazine: Angler USA - May 1993, Magazine: Armor in the Iron Age, Magazine: Bloody Japanese Wrestling Deathmatch!, Magazine: Blooms and Blossoms, Magazine: Blunt Forge, Magazine: Bottle Making at Home, Magazine: Carlow Crystal Guide, Magazine: Cowboy Living, Magazine: Cropping for Cash, Magazine: Crossword, Magazine: Cultures of Prehistory, Magazine: Delicious Meals - June 1993, Magazine: Early Indigenous Armor - An In-Depth Study, Magazine: European Armor in the Late Medieval Era, Magazine: Everyday Smithing - April 1993, Magazine: Everyday Smithing - June 1993, Magazine: Everyday Smithing - May 1993, Magazine: FBI Incident Report: San Fernando Bank Robbery, Magazine: Fun in the Woods!, Magazine: Get Stuffed, Magazine: Good Cooking - June 1993, Magazine: Good Cooking - May 1993, Magazine: Grandma's Kitchen, Magazine: Growing Your Own, Magazine: Herbal Remedy Growing, Magazine: Home Security Monthly, Magazine: Homespun, Magazine: How to Use Generators, Magazine: Iron Age Blacksmithing, Magazine: Italian Delights, Magazine: Kentucky Farmer - June 1993, Magazine: Kentucky Farmer - May 1993, Magazine: Laines Commercial Auto Manual, Magazine: Laines Performance Auto Manual, Magazine: Laines Standard Auto Manual, Magazine: Leather Crafts, Magazine: Legalize It!, Magazine: Like Clockwork, Magazine: Medieval Armory - June 1993, Magazine: Medieval Armory - May 1993, Magazine: Medieval Blacksmithing, Magazine: Medieval Peasant Clothing, Magazine: Modern Blacksmithing at Home, Magazine: Murano Glass Manual, Magazine: No Man's Land, Magazine: Outdoor Gear, Done Right, Magazine: Outfit Apocalypse, Magazine: Pioneering Carvers, Magazine: Punk Fashion - From Trash to Thrash, Magazine: Real Gladiators, Magazine: Real Spy Secrets - June 1993, Magazine: Real Spy Secrets - May 1993, Magazine: Revolting Peasants, Magazine: Secrets of the Outback Outlaws, Magazine: Small Game Hunting, Magazine: Small-Scale Smithing, Magazine: Sparky's Lighting Guide, Magazine: Strange Histories - Siberian Bear Hunting, Magazine: TV Monthly, Magazine: TV Monthly, Magazine: The Cheapskate's John Spiral - Chemical Warfare, Magazine: The Cheapskate's John Spiral - Escaping Captivity, Magazine: The Cheapskate's John Spiral - Forging New Identities, Magazine: The Cheapskate's John Spiral - Homemade Explosives, Magazine: The Cheapskate's John Spiral - Prison Defense, Magazine: The Cheapskate's John Spiral - Street Violence, Magazine: The Farmers Guide, Magazine: The First Weapons, Magazine: The Hunter, Magazine: The Louisville Bruiser, Magazine: Thyme Time, Magazine: Tool Use of Early Man, Magazine: Welder Monthly - April 1993, Magazine: Welder Monthly - June 1993, Magazine: Welder Monthly - March 1993, Magazine: Welder Monthly - May 1993, Magazine: Wilderness Survival, Magazine: Wildlife Preserve, Magazine: Woolly Yarns - June 1993, Magazine: Woolly Yarns - May 1993, Magazine: Wordsearch, Magazine: World Cooking, Magazine: Zapper!, Notebook |
| base:magnifier "Magnifier (tag)") | Loupe, Magnifying Glass |
| base:makewoodcharcoallarge "Makewoodcharcoallarge (tag)") | Large Handle, Large Handle with Nails, Long Stick, Sapling, Tree Branch, Tree Branch with Nails, Wooden Spear "Wooden Spear (crafted)"), Wooden Spear (Fire Hardened) "Wooden Spear (Fire Hardened)") |
| base:makewoodcharcoalmedium "Makewoodcharcoalmedium (tag)") | Broken Branch, Broken Branch with Nails, Firewood, Firewood with Nails |
| base:makewoodcharcoalsmall "Makewoodcharcoalsmall (tag)") | Broken Large Handle, Broken Large Handle with Nails, Broken Plank, Broken Plank with Nails, Scrap Wood |
| base:mallet "Mallet (tag)") | Short Bat, Wooden Mallet |
| base:masonschisel "Masonschisel (tag)") | Mason's Chisel |
| base:masonstrowel "Masonstrowel (tag)") | Mason's Trowel, Wooden Trowel |
| base:meatcleaver "Meatcleaver (tag)") | Meat Cleaver, Meat Cleaver, Scrap Metal Cleaver |
| base:megaphone "Megaphone (tag)") | Megaphone |
| base:metalbucket "Metalbucket (tag)") | Bucket, Bucket, Bucket |
| base:metalpiece "Metalpiece (tag)") | Iron Piece, Steel Piece |
| base:metalsaw "Metalsaw (tag)") | Hacksaw |
| base:metalworkingchisel "Metalworkingchisel (tag)") | Metalworking Chisel |
| base:metalworkingpliers "Metalworkingpliers (tag)") | Metalworking Pliers, Vise Grips |
| base:metalworkingpunch "Metalworkingpunch (tag)") | Metalworking Punch |
| base:milk "Milk (tag)") | Canned Evaporated Milk (Open) |
| base:minoringredient "Minoringredient (tag)") | Butter, Cornflour, Cornmeal, Flour, Garlic (Powdered) "Garlic (Powdered)"), Jug of Vinegar, Margarine, Olive Oil, Onion (Powdered) "Onion (Powdered)"), Pepper, Salt, Seasoning Salt, Sesame Oil, Vegetable Oil, Vinegar |
| base:miscelectronic "Miscelectronic (tag)") | Calculator, Cordless Phone, Earbuds, Hair Dryer, Hair Iron, Handheld Game Console, Headphones, Megaphone, Microphone, Pager, Shears - Electric |
| base:mixingutensil "Mixingutensil (tag)") | Bone Fork, Bone Spoon, Forged Fork, Forged Spoon, Fork, Gold Fork, Gold Spoon, Plastic Fork, Plastic Spoon, Plastic Spork, Silver Fork, Silver Spoon, Spatula, Spoon, Whisk, Wooden Fork, Wooden Spoon, Wooden Trowel |
| base:monogramownername "Monogramownername (tag)") | Signet Ring, Signet Ring, Signet Ring, Signet Ring |
| base:morewhennozombies "Morewhennozombies (tag)") | Digital Watch, Digital Watch, Digital Watch, Digital Watch, Digital Watch - Metallic Dress Style, Digital Watch - Metallic Dress Style, Key, Key Ring, Key Ring - 12, Key Ring - 34, Key Ring - 58, Key Ring - American Eagle, Key Ring - Bass, Key Ring - Blue Fox, Key Ring - Bug, Key Ring - Eight Ball, Key Ring - Forged, Key Ring - Four-Leaf Clover, Key Ring - Gold, Key Ring - Hotdog, Key Ring - Kitty, Key Ring - Large, Key Ring - Nolan's Used Cars, Key Ring - Panther, Key Ring - Pine Tree, Key Ring - Praying Hands, Key Ring - Rainbow Star, Key Ring - Rubber Duck, Key Ring - Sexy, Key Ring - Silver, Key Ring - Spiffos, Key Ring - Stinky Face, Key Ring - West Maple Country Club, Security Pass Key Ring, Vehicle Key, Wrist Watch - Classic, Wrist Watch - Classic, Wrist Watch - Classic, Wrist Watch - Classic, Wrist Watch - Gold, Wrist Watch - Gold, Wrist Watch - Military, Wrist Watch - Military |
| base:mortarpestle "Mortarpestle (tag)") | Ceramic Mortar and Pestle, Mortar and Pestle |
| base:mufflesneeze "Mufflesneeze (tag)") | Paper Napkins, Tissue, Toilet Paper |
| base:neverempty "Neverempty (tag)") | Briefcase, Cashbox, Cigar Box, Cigar Box, Cigar Box, Cigar Box, Cookie Jar, Cookie Jar - Teddy Bear, Cooler, Cooler, Cooler, Cooler, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, Duffel Bag, First Aid Kit, First Aid Kit - Camping, First Aid Kit - Camping, First Aid Kit - Military, Garbage Bag, Gift - Extra Large, Gift - Extra Small, Gift - Large, Gift - Medium, Gift - Small, Handgun Case, Handgun Case, Handgun Case, Handgun Case, Handgun Case, Handgun Case, Hatbox, Humidor, Jewelry Box, Jewelry Box, Key Ring, Key Ring, Key Ring - 12, Key Ring - 34, Key Ring - 58, Key Ring - American Eagle, Key Ring - Bass, Key Ring - Blue Fox, Key Ring - Bug, Key Ring - Eight Ball, Key Ring - Forged, Key Ring - Four-Leaf Clover, Key Ring - Gold, Key Ring - Hotdog, Key Ring - Kitty, Key Ring - Large, Key Ring - Nolan's Used Cars, Key Ring - Panther, Key Ring - Pine Tree, Key Ring - Praying Hands, Key Ring - Rainbow Star, Key Ring - Rubber Duck, Key Ring - Sexy, Key Ring - Silver, Key Ring - Spiffos, Key Ring - Stinky Face, Key Ring - West Maple Country Club, Lunchbag, Makeup Case, Parcel - Extra Large, Parcel - Extra Small, Parcel - Large, Parcel - Medium, Parcel - Small, Pencil Case, Pencil Case, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Plastic Bag, Police Duffel Bag, Pouch, Pouch, Produce Box - Extra Large, Produce Box - Extra Small, Produce Box - Large, Produce Box - Medium, Produce Box - Small, SWAT Duffel Bag, Sack, Sack, Security Pass Key Ring, Sewing Kit, Sheriff Duffel Bag, Shoebox, Small Protective Case, Small Protective Case, Small Protective Case, Small Protective Case, Small Protective Case, Small Protective Case, Small Protective Case - Military, Tool Roll - Fabric, Tool Roll - Leather, Tote Bag, Tote Bag |
| base:new "New (tag)") | HottieZ, Magazine, Magazine "Magazine (art)"), Magazine "Magazine (business)"), Magazine "Magazine (car)"), Magazine "Magazine (child)"), Magazine "Magazine (cinema)"), Magazine "Magazine (crime)"), Magazine "Magazine (fashion)"), Magazine "Magazine (firearm)"), Magazine "Magazine (gaming)"), Magazine "Magazine (golf)"), Magazine "Magazine (health)"), Magazine "Magazine (hobby)"), Magazine "Magazine (horror)"), Magazine "Magazine (humor)"), Magazine "Magazine (military)"), Magazine "Magazine (music)"), Magazine "Magazine (outdoors)"), Magazine "Magazine (police)"), Magazine "Magazine (popular)"), Magazine "Magazine (rich)"), Magazine "Magazine (science)"), Magazine "Magazine (sports)"), Magazine "Magazine (tech)"), Magazine "Magazine (teens)"), Magazine: TV Monthly |
| base:newspaper "Newspaper (tag)") | Newspaper, Newspaper, Newspaper: Knox Knews, Newspaper: Louisville Sun Times, Newspaper: The Kentucky Herald, Newspaper: The National Dispatch, Old Newspaper |
| base:newspaper_new&action=edit&redlink=1 "Newspaper new (tag) (page does not exist)") | Newspaper |
| base:newspaperread "Newspaperread (tag)") | Armor Schematic, Cookware Schematic, Explosives Schematic, Melee Weapons Schematic, Old Newspaper, Recipe, Sewing Pattern, Survival Schematic, Tools Schematic |
| base:nocookingxp "Nocookingxp (tag)") | Caterpillar "Caterpillar (American lady)"), Caterpillar "Caterpillar (banded woolly bear)"), Caterpillar "Caterpillar (monarch)"), Caterpillar "Caterpillar (sawfly larva)"), Caterpillar "Caterpillar (silk moth)"), Caterpillar "Caterpillar (swallowtail)"), Centipede, Centipede, Cockroach, Cricket, Grasshopper, Maggots, Millipede, Millipede, Pillbug, Slug, Slug, Snail, Termites, Worm |
| base:nocriticals "Nocriticals (tag)") | Spear with Plunger |
| base:nofencestab "Nofencestab (tag)") | Spear with Plunger |
| base:nomaintenancexp "Nomaintenancexp (tag)") | Antique Table Leg, Bare Hands, Blunt Bone Knife, Bone Fork, Bone Spoon, Bowling Pin, Brass Nameplate, Bread Knife, Broken Branch, Broken Field Hockey Stick, Broken Iron Pipe, Broken Large Handle, Broken Long Stick, Broken Plank, Broken Stick, Broken Stick with Nails, Broken Table Leg, Broken Table Leg with Nails, Butter Knife, Chair Leg, Flint Nodule, Forged Fork, Forged Spoon, Fork, Fountain Pen, Frying Pan, Frying Pan, Gold Butter Knife, Gold Fork, Gold Spoon, Griddle Pan, Iron Bar, Iron Bar Half, Iron Pipe, Large Branch, Large Handle, Lead Pipe, Letter Opener, Long Stick, Medium Handle, Multi-Color Pen, Pen - Black, Pen - Blue, Pen - Green, Pen - Red, Pen - Spiffo, Pencil, Pencil - Spiffo, Plank, Plunger, Railroad Spike, Rolling Pin, Sapling, Saucepan, Saucepan, Scalpel, Silver Butter Knife, Silver Fork, Silver Spoon, Spoon, Steel Bar, Steel Bar Half, Steel Rod, Steel Rod Half, Stone, Tree Branch, Wooden Rod |
| base:nopour "Nopour (tag)") | Bandage, Bandage (Sterilized), Denim Strips, Denim Strips (Dirty), Leather Strips, Leather Strips (Dirty), Rag, Rag (Dirty), Rag (Sterilized) |
| base:noragdoll "Noragdoll (tag)") | Apron, Apron, Apron, Apron - Tight Fit, Black Robe, Crafted Burlap Knee-length Dress, Crafted Burlap Knee-length Skirt, Crafted Burlap Long Dress, Crafted Burlap Long Skirt, Crafted Cotton Knee-length Dress, Crafted Cotton Knee-length Skirt, Crafted Cotton Long Dress, Crafted Cotton Long Skirt, Crafted Denim Knee-length Dress, Crafted Denim Knee-length Dress, Crafted Denim Knee-length Dress, Crafted Denim Long Dress, Crafted Denim Long Dress, Crafted Denim Long Dress, Crafted Denim Long Skirt, Crafted Denim Long Skirt, Crafted Denim Long Skirt, Crafted Knee-length Denim Skirt, Crafted Knee-length Denim Skirt, Crafted Knee-length Denim Skirt, Crafted Strapless Deer Hide Dress, Crafted Strapless Hide Dress, Dress, Knee-length Dress, Knee-length Skirt, Knee-length Skirt - Deer Hide, Knee-length Skirt - Garbage Bag, Knee-length Skirt - Hide, Knee-length Skirt - Tarp, Knee-length Strapped Dress, Long Dress, Long Skirt, Long Skirt - Garbage Bag, Long Skirt - Hide, Long Skirt - Tarp, Long Strapped Dress, Mini Skirt, Satin Negligee, Server Apron - Ice Cream, Server Apron - Jay's Chicken, Server Apron - Pile o' Crepe, Server Apron - Pizza Whirled, Server Apron - Spiffo's, Short Dress, Short Skirt, Short Skirt - Fawn Hide, Short Skirt - Garbage Bag, Short Skirt - Hide, Short Skirt - Tarp, Short Strapped Dress, Short Strapped Dress, Skirt, Skirt - Garbage Bag, Skirt - Hide, Skirt - Tarp, Strapless Dress, Strapless Dress, Strapless Garbage Bag Dress, Strapless Tarp Dress, Strapped Dress, Wedding Dress |
| base:normalpillow "Normalpillow (tag)") | Crafted Pillow, Pillow |
| base:norope "Norope (tag)") | Bandana, Bandana, Bandana, Bandana, Bandana, Bandana, Bandana - Tied, Bandana - Tied, Bandana - Tied, Burlap Footwraps, Denim Footwraps, Leather Strip Footwraps, Leather Strip Headband, Legwarmers, Long Socks, Long Socks, Long Socks, Rag Bandana - Face, Rag Bandana - Head, Rag Bandana - Tied, Rag Footwraps, Socks, Socks, Socks, Socks - Heavy, Tarp Footwraps |
| base:oil "Oil (tag)") | Olive Oil, Vegetable Oil |
| base:omitemptyfromname "Omitemptyfromname (tag)") | Gas Tank - Big (Heavy-Duty Vehicle) "Gas Tank - Big (Heavy-Duty Vehicle)"), Gas Tank - Big (Sports Vehicle) "Gas Tank - Big (Sports Vehicle)"), Gas Tank - Big (Standard Vehicle) "Gas Tank - Big (Standard Vehicle)"), Gas Tank - Regular (Heavy-Duty Vehicle) "Gas Tank - Regular (Heavy-Duty Vehicle)"), Gas Tank - Regular (Sports Vehicle) "Gas Tank - Regular (Sports Vehicle)"), Gas Tank - Regular (Standard Vehicle) "Gas Tank - Regular (Standard Vehicle)"), Gas Tank - Small (Heavy-Duty Vehicle) "Gas Tank - Small (Heavy-Duty Vehicle)"), Gas Tank - Small (Sports Vehicle) "Gas Tank - Small (Sports Vehicle)"), Gas Tank - Small (Standard Vehicle) "Gas Tank - Small (Standard Vehicle)"), Goblet, Gold Goblet, Silver Goblet, Trophy, Trophy, Trophy, Wood Goblet |
| base:optics "Optics (tag)") | Red Dot Sight, x2 Scope, x4 Scope, x8 Scope |
| base:oxygentank "Oxygentank (tag)") | Oxygen Tank |
| base:packed "Packed (tag)") | Cigarette Pack |
| base:paint&action=edit&redlink=1 "Paint (tag) (page does not exist)") | Paint - Black, Paint - Blue, Paint - Brown, Paint - Cyan, Paint - Gray, Paint - Green, Paint - Light Blue, Paint - Light Brown, Paint - Orange, Paint - Pink, Paint - Purple, Paint - Red, Paint - Turquoise, Paint - White, Paint - Yellow |
| base:paintbrush "Paintbrush (tag)") | Crafted Paintbrush, Paintbrush |
| base:pasta "Pasta (tag)") | Macaroni, Pasta |
| base:pen "Pen (tag)") | Crayons, Fountain Pen, Marker - Black, Multi-Color Pen, Pen - Black, Pen - Spiffo |
| base:pencil "Pencil (tag)") | Crayons, Pencil, Pencil - Spiffo |
| base:petrol "Petrol (tag)") | Gas Can, Jerry Can |
| base:pickaramidthread "Pickaramidthread (tag)") | Bulletproof Vest - Civilian, Bulletproof Vest - Military, Bulletproof Vest - Military, Bulletproof Vest - Military, Bulletproof Vest - Military, Bulletproof Vest - Police, Bulletproof Vest - SWAT, Bulletproof Vest Forearm Armor, Bulletproof Vest Forearm Armor, Bulletproof Vest Forearm Armor, Bulletproof Vest Forearm Armor, Bulletproof Vest Forearm Armor, Bulletproof Vest Forearm Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Shin Armor, Bulletproof Vest Thigh Armor, Bulletproof Vest Thigh Armor, Bulletproof Vest Thigh Armor, Bulletproof Vest Thigh Armor, Bulletproof Vest Thigh Armor, Bulletproof Vest Thigh Armor, Firefighter Jacket, Firefighter Pants, Military Bulletproof Vest Forearm Armor, Military Bulletproof Vest Forearm Armor, Military Bulletproof Vest Shin Armor, Military Bulletproof Vest Shin Armor, Military Bulletproof Vest Thigh Armor, Military Bulletproof Vest Thigh Armor, Police Bulletproof Vest Forearm Armor, Police Bulletproof Vest Forearm Armor, Police Bulletproof Vest Shin Armor, Police Bulletproof Vest Shin Armor, Police Bulletproof Vest Thigh Armor, Police Bulletproof Vest Thigh Armor, SWAT Bulletproof Vest Forearm Armor, SWAT Bulletproof Vest Forearm Armor, SWAT Bulletproof Vest Shin Armor, SWAT Bulletproof Vest Shin Armor, SWAT Bulletproof Vest Thigh Armor, SWAT Bulletproof Vest Thigh Armor |
| base:pickaxe "Pickaxe (tag)") | Pickaxe, Pickaxe |
| base:picture "Picture (tag)") | Doodle, Doodle, Old Photograph, Photograph, Photograph "Photograph (racy)"), Photograph "Photograph (secret)"), Photograph of Judge Matt Hass (Autographed) "Photograph of Judge Matt Hass (Autographed)"), Postcard |
| base:picturebook "Picturebook (tag)") | Armor Schematic, Catalog, Comic Book, Comic Book "Comic Book (retail)"), Cookware Schematic, Explosives Schematic, HottieZ, Magazine: HottieZ, Melee Weapons Schematic, Photo Book, Picture Book, Survival Schematic, Tools Schematic |
| base:piercedblock "Piercedblock (tag)") | Iron Block (Pierced) "Iron Block (Pierced)"), Steel Block (Pierced) "Steel Block (Pierced)") |
| base:piercedchunk "Piercedchunk (tag)") | Iron Chunk (Pierced) "Iron Chunk (Pierced)"), Steel Chunk (Pierced) "Steel Chunk (Pierced)") |
| base:piercedingot "Piercedingot (tag)") | Iron Ingot (Pierced) "Iron Ingot (Pierced)"), Steel Ingot (Pierced) "Steel Ingot (Pierced)") |
| base:pillow "Pillow (tag)") | Crafted Pillow, Happy Face Pillow, Heart Pillow, Pillow, Star Pillow |
| base:pipewrench "Pipewrench (tag)") | Pipe Wrench |
| base:pistolmagazine "Pistolmagazine (tag)") | B-F Magazine, M1911 Auto Magazine, M9 Magazine |
| base:pizzacutter "Pizzacutter (tag)") | Pizza Cutter |
| base:pizzasauce "Pizzasauce (tag)") | Tomato Paste |
| base:plantain "Plantain (tag)") | Plantain, Plantain (Dried) "Plantain (Dried)") |
| base:plastertrowel "Plastertrowel (tag)") | Plastering Trowel, Wooden Trowel |
| base:pliers "Pliers (tag)") | Metalworking Pliers, Multitool, Pliers |
| base:preservedfood&action=edit&redlink=1 "Preservedfood (tag) (page does not exist)") | Jar of Bell Peppers, Jar of Broccoli, Jar of Cabbage, Jar of Carrots, Jar of Eggplants, Jar of Fish Roe, Jar of Leeks, Jar of Potatoes, Jar of Radishes, Jar of Tomatoes |
| base:prybar "Prybar (tag)") | Tire Iron |
| base:puppers "Puppers (tag)") | Plastic Spork |
| base:purifywater "Purifywater (tag)") | Water Purification Tablets |
| base:quarterbarstock "Quarterbarstock (tag)") | Kitchen Knife Blade |
| base:railroadspikepuller "Railroadspikepuller (tag)") | Railroad Spike Puller, Railroad Spike Puller |
| base:razor "Razor (tag)") | Razor, Straight Razor |
| base:redpen "Redpen (tag)") | Crayons, Marker - Red, Multi-Color Pen, Pen - Red |
| base:refillablelighter "Refillablelighter (tag)") | Lighter |
| base:regional "Regional (tag)") | Newspaper, Newspaper |
| base:reloadfastbullets "Reloadfastbullets (tag)") | Bullets Bandolier, Bullets Bandolier, Bullets Bandolier, Bullets Bandolier |
| base:reloadfastmagazines "Reloadfastmagazines (tag)") | ALICE Belt and Suspenders, ALICE Belt and Suspenders, ALICE Belt and Suspenders, Chest Rig, Tarp Chest Rig |
| base:reloadfastshells "Reloadfastshells (tag)") | Shells Bandolier, Shells Bandolier |
| base:removebarricade "Removebarricade (tag)") | Claw Hammer, Claw Hammer, Crowbar, Crowbar, Firefighter Axe, Tire Iron |
| base:removebullet "Removebullet (tag)") | Forceps, Forceps, Multitool, Pliers, Tweezers, Tweezers |
| base:removeglass "Removeglass (tag)") | Forceps, Forceps, Multitool, Pliers, Tweezers, Tweezers |
| base:repairablesawblade "Repairablesawblade (tag)") | Hacksaw Blade, Small Hacksaw Blade |
| base:repairwithepoxy "Repairwithepoxy (tag)") | Brake Disc Scrap Metal Weapon, Bucket Maul - Metal Handle, Engine Parts Maul, Garden Fork Scrap Metal Weapon, Kettle Maul - Metal Handle, Metal Baseball Bat, Metal Baseball Bat with Bolts, Rake-Head Scrap Metal Weapon, Sawblade Axe, Sawblade Hatchet, Scrap Metal Cleaver-Axe, Scrap Metal Maul, Scrap Metal Morningstar, Scrap Metal Morningstar - Short, Spade Head Scrap Metal Weapon |
| base:repairwithglue "Repairwithglue (tag)") | Animal Bone, Antique Table Leg, Antique Table Leg - Chained, Antique Table Leg with Nails, Antique Table Leg with Sawblade, Axe "Axe (item)"), Ball-peen Hammer, Ball-peen Hammer, Baseball Bat, Baseball Bat - Can-Reinforced, Baseball Bat - Sheet Metal Reinforced, Baseball Bat with Garden Fork Head, Baseball Bat with Nails, Baseball Bat with Railspike, Baseball Bat with Rake Spikes, Baseball Bat with Sawblade, Baseball Bat with Spikes, Bone Club, Bone Club with Spikes, Bone War Hatchet, Bowling Pin, Bowling Pin with Nails, Broken Baseball Bat, Broken Baseball Bat with Nails, Broken Branch, Broken Branch with Nails, Broken Canoe Paddle, Broken Field Hockey Stick, Broken Field Hockey Stick with Nails, Broken Garden Tool Handle, Broken Large Handle, Broken Large Handle with Nails, Broken Long Stick, Broken Plank, Broken Plank with Nails, Broken Stick, Broken Stick with Nails, Broken Table Leg, Broken Table Leg with Nails, Broom, Broom with Barbed-Wire, Bucket Maul - Wood Handle, Canoe Paddle, Canoe Paddle - Double-bladed, Chair Leg, Chair Leg with Nails, Claw Hammer, Claw Hammer, Club Hammer, Club Hammer, Crafted Baseball Bat, Crude Stone Axe, Cudgel - Sheet Metal Reinforced, Cudgel with Bone Spikes, Cudgel with Brake Disc, Cudgel with Garden Fork Head, Cudgel with Nails, Cudgel with Railspikes, Cudgel with Sawblade, Cudgel with Spade Head, Cudgel with Spikes, Field Hockey Stick, Field Hockey Stick with Nails, Field Hockey Stick with Sawblade, Firefighter Axe, Flint Saw, Gaff Hook, Garden Fork, Garden Fork, Garden Hoe, Garden Hoe, Hand Axe, Hatchet, Hatchet, Hobby Horse, Ice Hockey Stick, Ice Hockey Stick with Barbed Wire, Jawbone, Jawbone Club, Jawbone Morningstar, Jawbone War Axe, Kettle Maul - Wood Handle, Lacrosse Stick, Large Animal Bone, Large Branch, Large Handle, Large Handle - Can-Reinforced, Large Handle with Brake Disc, Large Handle with Nails, Large Handle with Railspike, Large Handle with Rake Spikes, Large Handle with Sawblade, Large Stone Axe, Leaf Rake, Long Mace, Long Spiked Club, Long Stick, Long Stone Mace, Mace, Medium Handle, Medium Handle - Can-Reinforced, Medium Handle with Nails, Mop, Nightstick, Pickaxe, Pickaxe, Plank, Plank with Brake Disc, Plank with Nails, Plank with Saw, Plank with Sawblade, Plunger, Plunger with Barbed Wire, Pool Cue, Rake, Rolling Pin, Sapling, Short Bat, Short Bat - Can-Reinforced, Short Bat with Nails, Short Bat with Railspike, Short Bat with Rake Spikes, Short Bat with Sawblade, Short Bat with Spikes, Shovel, Sledgehammer, Sledgehammer, Sledgehammer, Smithing Hammer, Snow Shovel, Spade, Spade, Spear with Bone Head, Spear with Fighting Knife, Spear with Glass Head, Spear with Hand Fork, Spear with Hunting Knife, Spear with Kitchen Knife, Spear with Large Knife, Spear with Long Bone Head, Spear with Long Metal Head, Spear with Long Simple Metal Head, Spear with Long Stone Head, Spear with Metal Head, Spear with Plunger, Spear with Scissors, Spear with Scrap Knife, Spear with Screwdriver, Spear with Simple Metal Head, Spear with Small Knife, Spear with Steak Knife, Spear with Stone Head, Stone Hammer, Stone Mace, Stone Maul, Stone-Blade Scythe, Sturdy Bone Club, Sturdy Bone Club with Spikes, Tree Branch, Tree Branch - Can-Reinforced, Tree Branch with Bone Spikes, Tree Branch with Nails, Tree Branch with Railspike, Twig Broom, Wood Axe, Wood Axe, Wooden Mallet, Wooden Rod, Wooden Rod - Can-Reinforced, Wooden Rod with Nails, Wooden Spade, Wooden Spear "Wooden Spear (crafted)"), Wooden Spear (Fire Hardened) "Wooden Spear (Fire Hardened)") |
| base:repairwithtape "Repairwithtape (tag)") | Acoustic Guitar, Animal Bone, Antique Table Leg, Antique Table Leg - Chained, Antique Table Leg with Nails, Antique Table Leg with Sawblade, Axe "Axe (item)"), Badminton Racket, Ball-peen Hammer, Ball-peen Hammer, Banjo, Baseball Bat, Baseball Bat - Can-Reinforced, Baseball Bat - Sheet Metal Reinforced, Baseball Bat with Garden Fork Head, Baseball Bat with Nails, Baseball Bat with Railspike, Baseball Bat with Rake Spikes, Baseball Bat with Sawblade, Baseball Bat with Spikes, Bone Club, Bone Club with Spikes, Bone War Hatchet, Bowling Pin, Bowling Pin with Nails, Broken Acoustic Guitar Neck, Broken Banjo Neck, Broken Baseball Bat, Broken Baseball Bat with Nails, Broken Branch, Broken Branch with Nails, Broken Canoe Paddle, Broken Electric Bass Neck, Broken Electric Guitar Neck, Broken Field Hockey Stick, Broken Field Hockey Stick with Nails, Broken Garden Tool Handle, Broken Large Handle, Broken Large Handle with Nails, Broken Long Stick, Broken Plank, Broken Plank with Nails, Broken Stick, Broken Stick with Nails, Broken Table Leg, Broken Table Leg with Nails, Broom, Broom with Barbed-Wire, Bucket Maul - Wood Handle, Canoe Paddle, Canoe Paddle - Double-bladed, Chair Leg, Chair Leg with Nails, Claw Hammer, Claw Hammer, Club Hammer, Club Hammer, Crafted Baseball Bat, Crude Stone Axe, Cudgel - Sheet Metal Reinforced, Cudgel with Bone Spikes, Cudgel with Brake Disc, Cudgel with Garden Fork Head, Cudgel with Nails, Cudgel with Railspikes, Cudgel with Sawblade, Cudgel with Spade Head, Cudgel with Spikes, Electric Bass, Electric Guitar, Field Hockey Stick, Field Hockey Stick with Nails, Field Hockey Stick with Sawblade, Firefighter Axe, Flint Saw, Gaff Hook, Garden Fork, Garden Fork, Garden Hoe, Garden Hoe, Golf Club, Hand Axe, Hatchet, Hatchet, Hobby Horse, Ice Hockey Stick, Ice Hockey Stick with Barbed Wire, Jawbone, Jawbone Club, Jawbone Morningstar, Jawbone War Axe, Kettle Maul - Wood Handle, Lacrosse Stick, Large Animal Bone, Large Branch, Large Handle, Large Handle - Can-Reinforced, Large Handle with Brake Disc, Large Handle with Nails, Large Handle with Railspike, Large Handle with Rake Spikes, Large Handle with Sawblade, Large Stone Axe, Leaf Rake, Long Mace, Long Spiked Club, Long Stick, Long Stone Mace, Mace, Medium Handle, Medium Handle - Can-Reinforced, Medium Handle with Nails, Mop, Nightstick, Pickaxe, Pickaxe, Plank, Plank with Brake Disc, Plank with Nails, Plank with Saw, Plank with Sawblade, Plunger, Plunger with Barbed Wire, Pool Cue, Rake, Sapling, Saxophone, Short Bat, Short Bat - Can-Reinforced, Short Bat with Nails, Short Bat with Railspike, Short Bat with Rake Spikes, Short Bat with Sawblade, Short Bat with Spikes, Shovel, Sledgehammer, Sledgehammer, Sledgehammer, Smithing Hammer, Snow Shovel, Spade, Spade, Spear with Bone Head, Spear with Fighting Knife, Spear with Glass Head, Spear with Hand Fork, Spear with Hunting Knife, Spear with Kitchen Knife, Spear with Large Knife, Spear with Long Bone Head, Spear with Long Metal Head, Spear with Long Simple Metal Head, Spear with Long Stone Head, Spear with Metal Head, Spear with Plunger, Spear with Scissors, Spear with Scrap Knife, Spear with Screwdriver, Spear with Simple Metal Head, Spear with Small Knife, Spear with Steak Knife, Spear with Stone Head, Stone Hammer, Stone Mace, Stone Maul, Stone-Blade Scythe, Sturdy Bone Club, Sturdy Bone Club with Spikes, Tennis Racket, Tree Branch, Tree Branch - Can-Reinforced, Tree Branch with Bone Spikes, Tree Branch with Nails, Tree Branch with Railspike, Trumpet, Twig Broom, Violin, Wood Axe, Wood Axe, Wooden Mallet, Wooden Rod, Wooden Rod - Can-Reinforced, Wooden Rod with Nails, Wooden Spade, Wooden Spear "Wooden Spear (crafted)"), Wooden Spear (Fire Hardened) "Wooden Spear (Fire Hardened)") |
| base:replaceprimary "Replaceprimary (tag)") | Backpack Sprayer |
| base:respirator&action=edit&redlink=1 "Respirator (tag) (page does not exist)") | Half Mask Respirator |
| base:respiratorfilter "Respiratorfilter (tag)") | Respirator Filters, Respirator Filters - Recharged |
| base:respiratornofilter&action=edit&redlink=1 "Respiratornofilter (tag) (page does not exist)") | Half Mask Respirator (No Filters) "Half Mask Respirator (No Filters)") |
| base:ricerecipe "Ricerecipe (tag)") | Rice (crafted pot), Rice (crafted pot), Copper Saucepan with Rice, Rice (crafted pan) |
| base:riflemagazine "Riflemagazine (tag)") | M1A Magazine, M16 Magazine |
| base:ripclothigcotton "Ripclothigcotton (tag)") | T-shirt - TIS |
| base:ripclothingcoton "Ripclothingcoton (tag)") | T-shirt - Music |
| base:ripclothingcotton "Ripclothingcotton (tag)") | Apron, Apron, Apron, Apron - Tight Fit, Bandeau, Bandeau - Small, Bathrobe, Black Football Jersey, Black Robe, Blue LSU Football Jersey, Bowling Shirt - Blue, Bowling Shirt - Brown, Bowling Shirt - Green, Bowling Shirt - Lime Green, Bowling Shirt - Pink, Bowling Shirt - White, Chef Pants, Coveralls, Coveralls, Coveralls, Coveralls, Coveralls - Air Force, Crafted Burlap Long Johns, Crafted Burlap Shirt, Crafted Cotton Knee-length Dress, Crafted Cotton Knee-length Skirt, Crafted Cotton Long Dress, Crafted Cotton Long Johns, Crafted Cotton Long Johns Bottoms, Crafted Cotton Long Skirt, Crafted Cotton Pants, Crafted Cotton Shirt, Crafted Cotton Shirt - Sleeveless, Crop Top, Crop Top - Arms, Dress, Formal Jacket, Foxes Ice Hockey Jersey, Hoodie, Hoodie, Hoodie - Hunting Camo, Hoodie - Hunting Camo, Hospital Gown, Ice Hockey Jersey, Jacket, Jacket - Chef, Jacket - Hunting Camo, Jacket - Navy Blue, Jacket - Varsity, Jets Ice Hockey Jersey, Jockey Silks - No. 1, Jockey Silks - No. 2, Jockey Silks - No. 3, Jockey Silks - No. 4, Jockey Silks - No. 5, Jockey Silks - No. 6, Jumpsuit - Prisoner, Jumpsuit - Prisoner, Knee-length Dress, Knee-length Skirt, Knee-length Strapped Dress, LSU Ice Hockey Jersey, Long Dress, Long Johns, Long Johns Bottoms, Long Shorts - Sport, Long Shorts - Sport, Long Skirt, Long Sleeve T-shirt, Long Sleeve T-shirt, Long Sleeve T-shirt, Long Sleeve T-shirt - Hunting Camo, Long Strapped Dress, Medical Coat, Medical Scrubs, Medical T-shirt, Military Jacket - Desert Camo, Military Jacket - Desert Camo, Military Jacket - Foreign Camo, Military Jacket - Green Camo, Military Jacket - Officer, Military Jacket - Olive Drab, Military Jacket - Tiger Stripe Camo, Military Jacket - Urban Camo, Military Pants, Military Pants - Desert Camo, Military Pants - Desert Camo, Military Pants - Foreign Camo, Military Pants - Green Camo, Military Pants - Olive Drab, Military Pants - Tiger Stripe Camo, Military Pants - Urban Camo, Military Shirt - Desert Camo, Military Shirt - Desert Camo, Military Shirt - Foreign Camo, Military Shirt - Green Camo, Military Shirt - Olive Drab, Military Shirt - Tiger Stripe Camo, Military Shirt - Urban Camo, Military Shorts - Desert Camo, Military Shorts - Foreign Camo, Military Shorts - Green Camo, Military Shorts - Olive Drab, Military Shorts - Tiger Stripe Camo, Military Shorts - Urban Camo, Military T-shirt, Military T-shirt - Desert Camo, Military T-shirt - Desert Camo, Military T-shirt - Foreign Camo, Military T-shirt - Green Camo, Military T-shirt - Olive Drab, Military T-shirt - Tiger Stripe Camo, Military T-shirt - Urban Camo, Mini Skirt, Pants, Pants, Pants, Pants, Pants, Pants, Pants - Black, Pants - Hunting Camo, Pants - Medical, Pants - Navy Blue, Pants - Prison Guard, Pants - Sheriff Deputy, Police Jacket, Police Pants - Deputy, Police Pants - Trooper, Police Shirt - Deputy, Police Shirt - Trooper, Police T-shirt - Deputy, Police T-shirt - Trooper, Priest Shirt, Rag Bandeau, Rag Footwraps, Rag Neck Guard, Ranger Jacket, Ranger Pants, Ranger Shirt, Santa Jacket, Santa Jacket - Green, Santa Suit Pants, Santa Suit Pants - Green, Satin Negligee, Scarf, Scarf, Scarf, Scarf, Server Apron - Ice Cream, Server Apron - Jay's Chicken, Server Apron - Pile o' Crepe, Server Apron - Pizza Whirled, Server Apron - Spiffo's, Sheriff Deputy Jacket, Sheriff Deputy Shirt, Shirt - Formal, Shirt - Formal, Shirt - Hawaiian, Shirt - Hawaiian, Shirt - Kentucky Baseball, Shirt - Lumberjack, Shirt - Lumberjack, Shirt - Lumberjack, Shirt - Police, Shirt - Prison Guard, Shirt - Riverside Rangers Baseball, Shirt - Z Hurricanes Baseball, Short Dress, Short Skirt, Short Sleeve Shirt, Short Sleeve Shirt, Short Sleeve Shirt - Ranger, Short Strapped Dress, Short Strapped Dress, Shorts, Shorts - Sport, Skirt, Sport Pants, Strapless Dress, Strapless Dress, Strapped Dress, Suit Jacket, Suit Jacket, Suit Jacket, Suit Pants, Suit Pants, Suit Pants, Suit Pants, Sweater, Sweater - Round Neck, Sweater - Turtleneck, Sweater - V-neck, Sweater Vest, Sweater Vest - V-neck, T-Shirt - Sheriff Deputy, T-shirt, T-shirt, T-shirt, T-shirt, T-shirt, T-shirt, T-shirt - Firefighter, T-shirt - Firefighter, T-shirt - Firefighter, T-shirt - Firefighter, T-shirt - Fossoil, T-shirt - Gas-2-Go, T-shirt - Hunting Camo, T-shirt - McCoy's, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Music, T-shirt - Pile o' Crepe, T-shirt - Pizza Whirled, T-shirt - Police, T-shirt - Police, T-shirt - Polo, T-shirt - Ranger "T-shirt - Ranger (green)"), T-shirt - Ranger "T-shirt - Ranger (green)"), T-shirt - Spiffo, T-shirt - Spiffo, T-shirt - Sports, T-shirt - Sports, T-shirt - Striped Polo "T-shirt - Striped Polo (colored)"), T-shirt - Thunder Gas, T-shirt - Tie Dye, T-shirt - Tuxedo, T-shirt - Valley Station, T-shirt - Veteran "T-shirt - Veteran (green)"), T-shirt - Veteran "T-shirt - Veteran (green)"), Tank Top, Tank Top, Waistcoat, Waistcoat, Waistcoat - GigaMart, Wedding Dress, White Football Jersey, Workman Shirt |
| base:ripclothingdenim "Ripclothingdenim (tag)") | Crafted Denim Knee-length Dress, Crafted Denim Knee-length Dress, Crafted Denim Knee-length Dress, Crafted Denim Long Dress, Crafted Denim Long Dress, Crafted Denim Long Dress, Crafted Denim Long Skirt, Crafted Denim Long Skirt, Crafted Denim Long Skirt, Crafted Denim Shirt, Crafted Denim Shirt, Crafted Denim Shirt, Crafted Denim Shirt, Crafted Denim Shirt - Sleeveless, Crafted Denim Shirt - Sleeveless, Crafted Denim Shirt - Sleeveless, Crafted Jeans, Crafted Jeans, Crafted Jeans, Crafted Jeans, Crafted Knee-length Denim Skirt, Crafted Knee-length Denim Skirt, Crafted Knee-length Denim Skirt, Denim Bandeau, Denim Footwraps, Denim Neck Guard, Jeans, Jeans, Jeans - Baggy, Jeans with Patches, Jeans with Patches - Baggy, Long Shorts - Denim, Long Shorts - Denim with Patches, Overalls, Overalls - Hunting Camo, Shirt - Denim, Shorts - Denim, Tarp Footwraps |
| base:ripclothingleather "Ripclothingleather (tag)") | Calfhide Coat, Calfhide Coat, Calfhide Coat, Calfhide Jacket, Calfhide Jacket, Calfhide Jacket, Cowhide Coat, Cowhide Coat, Cowhide Coat, Cowhide Coat, Cowhide Jacket, Cowhide Jacket, Cowhide Jacket, Cowhide Jacket, Cowhide Tank Top, Cowhide Tank Top, Cowhide Tank Top, Crafted Fawn Hide Pants, Crafted Leather Pants "Leather Pants (crafted)"), Crafted Strapless Deer Hide Dress, Crafted Strapless Hide Dress, Deer Hide Tank Top, Deerhide Jacket, Fawn Hide Bandeau, Fawn Hide Tank Top, Gaiter, Gaiter, Hide Apron, Hide Bandeau, Hide Coat, Hide Headsack, Hide Hoodie, Hide Hoodie, Hide Jacket, Hide Mask, Hide Robe, Hide Tank Top, Knee-length Skirt - Deer Hide, Knee-length Skirt - Hide, Leather Apron, Leather Coat, Leather Coat, Leather Jacket, Leather Jacket, Leather Jacket, Leather Jacket, Leather Jacket - Barrel Dogs, Leather Jacket - Iron Rodent, Leather Jacket - Punk, Leather Jacket - Wild Racoons, Leather Pants, Leather Pants - Skinny, Leather Vest, Leather Vest - Barrel Dogs, Leather Vest - Iron Rodents, Leather Vest - Wild Raccoons, Leather Vest with Patches, Leather Vest with Patches, Long Skirt - Hide, Sheepskin Coat, Sheepskin Jacket, Sheepskin Pants, Sheepskin Vest, Short Skirt - Fawn Hide, Short Skirt - Hide, Skirt - Hide |
| base:rollingpaper "Rollingpaper (tag)") | Rolling Papers |
| base:rollingpin "Rollingpin (tag)") | Rolling Pin |
| base:rope "Rope (tag)") | Rope, Sheet Rope |
| base:rubyjewellery "Rubyjewellery (tag)") | Gold Belly Button Dangle with Ruby, Gold Belly Button Ring with Ruby, Gold Necklace with Ruby Stone, Gold Ring with Ruby, Gold Ring with Ruby, Gold Ring with Ruby, Gold Ring with Ruby, Silver Belly Button Ring with Ruby |
| base:salt "Salt (tag)") | Salt |
| base:sapphirejewellery "Sapphirejewellery (tag)") | Choker with Sapphire Stone, Silver Long Necklace with Sapphire Stone, Silver Necklace with Sapphire Stone |
| base:saw "Saw (tag)") | Hacksaw, Simple Wood Saw, Wood Saw |
| base:sawblade "Sawblade (tag)") | Hacksaw Blade, Small Hacksaw Blade |
| base:scba "Scba (tag)") | Hazmat Suit, SCBA |
| base:scbanotank "Scbanotank (tag)") | SCBA (No Tank) "SCBA (No Tank)") |
| base:scissors "Scissors (tag)") | Crude Scissors, Medical Shears, Multitool, Safety Scissors, Scissors |
| base:scrapaluminum "Scrapaluminum (tag)") | Aluminum Scrap |
| base:scrapaluminumlarge "Scrapaluminumlarge (tag)") | Metal Baseball Bat, Metal Baseball Bat with Bolts, Metal Baseball Bat with Sawblade |
| base:scrapasbelt "Scrapasbelt (tag)") | Belt, Bullets Bandolier, Bullets Bandolier, Bullets Bandolier, Bullets Bandolier, Hide Holster, Holster - Double, Shells Bandolier, Shells Bandolier |
| base:scraplargecopper "Scraplargecopper (tag)") | Copper Kettle, Hurricane Lantern - Copper, Saucepan |
| base:scraplargesteel "Scraplargesteel (tag)") | Hurricane Lantern |
| base:scrapsmallcopper "Scrapsmallcopper (tag)") | Copper Cup, Copper Mask |
| base:screwdriver "Screwdriver (tag)") | Handiknife, Improvised Screwdriver, Multitool, Screwdriver, Screwdriver |
| base:scythe "Scythe (tag)") | Hand Scythe, Hand Scythe, Scythe, Scythe, Stone-Blade Scythe |
| base:sealedbeveragecan "Sealedbeveragecan (tag)") | Beer Can, Pop Can, Pop Can, Pop Can, Pop Can |
| base:sewingneedle "Sewingneedle (tag)") | Bone Needle, Brass Needle, Forged Needle, Needle |
| base:sharpenable "Sharpenable (tag)") | Antique Table Leg with Sawblade, Axe "Axe (item)"), Axe Head, Baseball Bat with Sawblade, Broken Scrap Metal Sword, Broken Simple Sword, Broken Simple Sword Blade, Broken Simple Sword Blade (No Tang) "Broken Simple Sword Blade (No Tang)"), Broken Sword, Broken Sword Blade, Broken Sword Blade (No Tang) "Broken Sword Blade (No Tang)"), Butterfly Knife, Crude Scissors, Fighting Knife, Fillet Knife, Firefighter Axe, Firefighter Axe Head, Garden Fork Scrap Metal Weapon, Hand Axe, Hand Scythe, Hand Scythe, Hand Scythe Blade, Handguard Dagger, Handiknife, Hatchet, Hatchet, Hatchet Head, Hunting Knife, Hunting Knife, Hunting Knife Blade, Ice Pick, Kitchen Knife, Kitchen Knife, Kitchen Knife Blade, Large Knife, Large Knife Blade, Long Metal Spearhead, Long Simple Metal Blade, Long Simple Metal Knife, Machete, Machete, Machete Blade, Machete Blade (No Tang) "Machete Blade (No Tang)"), Machete Blade Knife, Meat Cleaver, Meat Cleaver, Meat Cleaver Blade, Medical Shears, Metal Spearhead, Multitool, Paring Knife, Pocket Knife, Railroad Spike Knife, Safety Scissors, Scalpel, Scissors, Scrap Metal Chopper, Scrap Metal Cleaver, Scrap Metal Cleaver-Axe, Scrap Metal Large Knife, Scrap Metal Shortsword, Scrap Metal Sword, Scythe, Scythe, Scythe Blade, Shears, Shears, Shiv, Short Bat with Sawblade, Shortsword, Shortsword Blade, Shortsword Blade (No Tang) "Shortsword Blade (No Tang)"), Simple Metal Blade, Simple Metal Knife, Simple Shortsword, Simple Shortsword Blade, Simple Shortsword Blade (No Tang) "Simple Shortsword Blade (No Tang)"), Simple Sword, Simple Sword Blade, Simple Sword Blade (No Tang) "Simple Sword Blade (No Tang)"), Small Knife, Spade Head Scrap Metal Weapon, Spear with Fighting Knife, Spear with Hunting Knife, Spear with Kitchen Knife, Spear with Large Knife, Spear with Long Metal Head, Spear with Long Simple Metal Head, Spear with Metal Head, Spear with Scissors, Spear with Scrap Knife, Spear with Simple Metal Head, Spear with Small Knife, Spear with Steak Knife, Steak Knife, Straight Razor, Sushi Knife, Switchblade, Sword, Sword Blade, Sword Blade (No Tang) "Sword Blade (No Tang)"), Wood Axe, Wood Axe, Wood Axe Head |
| base:sharpknife "Sharpknife (tag)") | Butterfly Knife, Fighting Knife, Fillet Knife, Handguard Dagger, Handiknife, Hunting Knife, Hunting Knife, Kitchen Knife, Kitchen Knife, Large Knife, Long Simple Metal Knife, Long Stone Knife, Machete, Machete, Machete Blade Knife, Multitool, Paring Knife, Pocket Knife, Railroad Spike Knife, Scrap Metal Chopper, Scrap Metal Large Knife, Sharp Flint Flake, Simple Metal Knife, Small Knife, Steak Knife, Stone Knife, Straight Razor, Sushi Knife, Switchblade |
| base:shear "Shear (tag)") | Shears, Shears, Shears - Electric |
| base:sheet "Sheet (tag)") | Sheet |
| base:sheetmetalsnips "Sheetmetalsnips (tag)") | Sheet Metal Snips |
| base:shotgunshell "Shotgunshell (tag)") | 12g Round |
| base:showcondition "Showcondition (tag)") | Amplifier, Ball Peen Hammer Head, Broken Simple Sword Blade, Broken Simple Sword Blade (No Tang) "Broken Simple Sword Blade (No Tang)"), Broken Sword Blade, Broken Sword Blade (No Tang) "Broken Sword Blade (No Tang)"), Clawhammer Head, Club Hammer Head, Garden Hoe Head, Generator - Lectromax, Generator - Old, Generator - Premium Technologies, Generator - ValuTech, Hacksaw, Hand Scythe Blade, Home Alarm, Hunting Knife Blade, Improvised Whetstone, Jar Lid, Katana Blade Shard, Kitchen Knife Blade, Large Knife Blade, Large Stone Axe Head, Light Bulb, Light Bulb - Blue, Light Bulb - Cyan, Light Bulb - Green, Light Bulb - Magenta, Light Bulb - Orange, Light Bulb - Pink, Light Bulb - Purple, Light Bulb - Red, Light Bulb - Yellow, Long Stone Blade, Machete Blade, Machete Blade (No Tang) "Machete Blade (No Tang)"), Meat Cleaver Blade, Medical Shears, Pick Axe Head, Rake Head, Safety Scissors, Scrap Metal Blade Shard, Scythe Blade, Sharp Flint Flake, Shears, Shears, Shears - Electric, Shortsword Blade, Shortsword Blade (No Tang) "Shortsword Blade (No Tang)"), Simple Shortsword Blade, Simple Shortsword Blade (No Tang) "Simple Shortsword Blade (No Tang)"), Simple Sword Blade, Simple Sword Blade (No Tang) "Simple Sword Blade (No Tang)"), Simple Sword Blade Shard, Simple Wood Saw, Sledgehammer Head, Small File Set, Small Hacksaw, Small Punch and Chisel Set, Smithing Hammer Head, Speaker, Stone Blade, Stone Maul Head, Sword Blade, Sword Blade (No Tang) "Sword Blade (No Tang)"), Sword Blade Shard, Tongs, Whetstone, Wood Axe Head, Wood Saw, Wooden Trowel |
| base:showpoison "Showpoison (tag)") | Rat Poison |
| base:silverscrap "Silverscrap (tag)") | Hurricane Lantern - Silver, Silver Cup, Silver Goblet, Silver Mask |
| base:simpleweaponbinding "Simpleweaponbinding (tag)") | Burlap Piece, Denim Strips, Duct Tape, Leather Strips, Rag, Twine |
| base:siphongas "Siphongas (tag)") | Rubber Hose |
| base:sledgehammer "Sledgehammer (tag)") | Sledgehammer, Sledgehammer, Sledgehammer |
| base:smallanimalbone "Smallanimalbone (tag)") | Bone Pieces |
| base:smallergoldscrap "Smallergoldscrap (tag)") | Key Ring - Gold |
| base:smallersilverscrap "Smallersilverscrap (tag)") | Key Ring - Silver |
| base:smallestgoldscrap "Smallestgoldscrap (tag)") | Gold Coin |
| base:smallestsilverscrap "Smallestsilverscrap (tag)") | Silver Coin |
| base:smallfiles "Smallfiles (tag)") | Multitool, Small File Set |
| base:smallgoldscrap "Smallgoldscrap (tag)") | Gold Butter Knife, Gold Fork, Gold Spoon |
| base:smallpunch "Smallpunch (tag)") | Small Punch and Chisel Set |
| base:smallsaw "Smallsaw (tag)") | Small Hacksaw |
| base:smallsheetmetal "Smallsheetmetal (tag)") | Steel Sheet - Small |
| base:smallsilverscrap "Smallsilverscrap (tag)") | Silver Butter Knife, Silver Fork, Silver Spoon |
| base:smeltableironlarge "Smeltableironlarge (tag)") | Axe Head, Broken Scrap Metal Sword, Club Hammer Head, Iron Band, Iron Bar, Iron Block, Iron Block (Pierced) "Iron Block (Pierced)"), Iron Ingot (Pierced) "Iron Ingot (Pierced)"), Large Hook, Sawblade Axe, Sawblade Hatchet, Scrap Metal Chopper, Scrap Metal Cleaver, Scrap Metal Cleaver-Axe, Scrap Metal Morningstar, Scrap Metal Morningstar - Short, Scrap Metal Shortsword, Scrap Metal Sword, Simple Sword Blade, Simple Sword Blade (No Tang) "Simple Sword Blade (No Tang)") |
| base:smeltableironmedium "Smeltableironmedium (tag)") | Broken Iron Pipe, Carpentry Chisel, File, Fleshing Tool, Garden Hoe Head, Iron Bar Half, Large Handle with Railspike, Large Knife Blade, Long Simple Metal Blade, Mace Head, Mason's Chisel, Metalworking Chisel, Metalworking Punch, Rake Head, Scythe Blade, Shovel, Simple Wood Saw, Spade Head, Spade Head, Tongs |
| base:smeltableironmediumplus "Smeltableironmediumplus (tag)") | Broken Simple Sword Blade, Broken Simple Sword Blade (No Tang) "Broken Simple Sword Blade (No Tang)"), Iron Pipe, Simple Shortsword Blade, Simple Shortsword Blade (No Tang) "Simple Shortsword Blade (No Tang)") |
| base:smeltableironsmall "Smeltableironsmall (tag)") | Baseball Bat with Railspike, Baseball Bat with Sawblade, Bell, Butterfly Knife, Can Opener, Cheese Grater, Crude Scissors, Draw Plate, Dumbbell, Dumbbell, Extinguisher, Field Hockey Stick with Sawblade, Fireplace Poker, Geometry Compass, Hand Fork, Hand Scythe Blade, Heading Tool, Heavy Chain Link, Iron Band - Small, Iron Bar Quarter, Iron Chunk, Iron Chunk (Pierced) "Iron Chunk (Pierced)"), Iron Scrap, Kettle, Kettle Maul - Metal Handle, Latch, Leaf Rake, Letter Opener, Mason's Trowel, Metalworking Pliers, Oxygen Tank, Paring Knife, Pizza Cutter, Pocket Knife, Railroad Spike, Scalpel, Scrap Metal, Scrap Metal Blade Shard, Short Bat with Sawblade, Simple Metal Blade, Simple Sword Blade Shard, Small Knife, Smithing Hammer Head, Strainer |
| base:smeltablesteellarge "Smeltablesteellarge (tag)") | Brake - Old (Heavy-Duty Vehicle) "Brake - Old (Heavy-Duty Vehicle)"), Brake - Old (Sports Vehicle) "Brake - Old (Sports Vehicle)"), Brake - Old (Standard Vehicle) "Brake - Old (Standard Vehicle)"), Brake - Performance (Heavy-Duty Vehicle) "Brake - Performance (Heavy-Duty Vehicle)"), Brake - Performance (Sports Vehicle) "Brake - Performance (Sports Vehicle)"), Brake - Performance (Standard Vehicle) "Brake - Performance (Standard Vehicle)"), Brake - Regular (Heavy-Duty Vehicle) "Brake - Regular (Heavy-Duty Vehicle)"), Brake - Regular (Sports Vehicle) "Brake - Regular (Sports Vehicle)"), Brake - Regular (Standard Vehicle) "Brake - Regular (Standard Vehicle)"), Circular Sawblade, Coat of Plates Body Armor, Crowbar, Crowbar, Crude Metal Helmet, Firefighter Axe Head, Hurricane Lantern, Katana Blade, Machete Blade, Machete Blade (No Tang) "Machete Blade (No Tang)"), Metal Body Armor, Metal Mask, Pick Axe Head, Propane Tank, Scrap Metal Body Armor, Scrap Metal Helmet, Steel Bar, Steel Block, Steel Block (Pierced) "Steel Block (Pierced)"), Steel Sheet, Sword Blade, Sword Blade (No Tang) "Sword Blade (No Tang)"), Wood Axe Head |
| base:smeltablesteelmedium "Smeltablesteelmedium (tag)") | Articulated Metal Shoulder Armor - Left, Articulated Metal Shoulder Armor - Right, Articulated Metal Thigh Armor, Articulated Metal Thigh Armor, Bolt Cutters, Circular Sawblade Half, Fillet Knife, Full Metal Forearm Armor, Full Metal Forearm Armor, Garden Fork Head, Garden Fork Head, Handguard Dagger, Hunting Knife Blade, Large Handle with Sawblade, Long Metal Spearhead, Meat Cleaver Blade, Metal Codpiece, Metal Neck Guard, Pan, Pot, Pot, Ratchet Wrench, Sheet Metal Snips, Sledgehammer Head, Small File Set, Small Punch and Chisel Set, Steel Bar Half, Wrench |
| base:smeltablesteelmediumplus "Smeltablesteelmediumplus (tag)") | Articulated Metal Shin Armor, Articulated Metal Shin Armor, Broken Katana Blade, Broken Sword Blade, Broken Sword Blade (No Tang) "Broken Sword Blade (No Tang)"), Frying Pan, Frying Pan, Griddle Pan, Pipe Wrench, Shortsword Blade, Shortsword Blade (No Tang) "Shortsword Blade (No Tang)"), Spiked Articulated Metal Shin Armor, Spiked Articulated Metal Shin Armor, Steel Rod, Tire Iron |
| base:smeltablesteelsmall "Smeltablesteelsmall (tag)") | Ball Peen Hammer Head, Bread Knife, Clawhammer Head, Fingerless Gloves - Metal, Fingerless Gloves - Scrap Metal, Hacksaw Blade, Hatchet Head, Katana Blade Shard, Kitchen Knife Blade, Metal Cup, Metal Forearm Armor, Metal Forearm Armor, Metal Shin Armor, Metal Shin Armor, Metal Shoulder Armor, Metal Shoulder Armor, Metal Spearhead, Metal Thigh Armor, Metal Thigh Armor, Pan, Pan, Saucepan, Scissors, Scrap Metal Forearm Armor, Scrap Metal Forearm Armor, Scrap Metal Mask, Scrap Metal Shin Armor, Scrap Metal Shin Armor, Scrap Metal Shoulder Armor, Scrap Metal Shoulder Armor, Scrap Metal Thigh Armor, Scrap Metal Thigh Armor, Small Hacksaw, Small Hacksaw Blade, Spiked Metal Forearm Armor, Spiked Metal Forearm Armor, Spiked Metal Shin Armor, Spiked Metal Shin Armor, Spiked Metal Shoulder Armor, Spiked Metal Shoulder Armor, Spiked Metal Thigh Armor, Spiked Metal Thigh Armor, Spiked Scrap Metal Forearm Armor, Spiked Scrap Metal Forearm Armor, Spiked Scrap Metal Shin Armor, Spiked Scrap Metal Shin Armor, Spiked Scrap Metal Shoulder Armor, Spiked Scrap Metal Shoulder Armor, Spiked Scrap Metal Thigh Armor, Spiked Scrap Metal Thigh Armor, Steel Bar Quarter, Steel Chunk, Steel Chunk (Pierced) "Steel Chunk (Pierced)"), Steel Rod Half, Steel Scrap, Steel Sheet - Small, Sword Blade Shard, Vise Grips |
| base:smithinghammer "Smithinghammer (tag)") | Ball-peen Hammer, Ball-peen Hammer, Smithing Hammer |
| base:smokable "Smokable (tag)") | Cigar, Cigarette, Cigarette Pack, Cigarillo, Rolled Cigarette |
| base:softcover "Softcover (tag)") | Paperback, Paperback "Paperback (adventure non-fiction)"), Paperback "Paperback (art)"), Paperback "Paperback (baseball)"), Paperback "Paperback (biography)"), Paperback "Paperback (business)"), Paperback "Paperback (childs)"), Paperback "Paperback (cinema)"), Paperback "Paperback (classic)"), Paperback "Paperback (classic fiction)"), Paperback "Paperback (classic non-fiction)"), Paperback "Paperback (computer)"), Paperback "Paperback (conspiracy)"), Paperback "Paperback (crime fiction)"), Paperback "Paperback (diet)"), Paperback "Paperback (fantasy)"), Paperback "Paperback (fashion)"), Paperback "Paperback (fiction)"), Paperback "Paperback (golf)"), Paperback "Paperback (hass)"), Paperback "Paperback (history)"), Paperback "Paperback (horror)"), Paperback "Paperback (legal)"), Paperback "Paperback (literary fiction)"), Paperback "Paperback (medical)"), Paperback "Paperback (military)"), Paperback "Paperback (military history)"), Paperback "Paperback (music)"), Paperback "Paperback (nature)"), Paperback "Paperback (new-age)"), Paperback "Paperback (occult)"), Paperback "Paperback (philosophy)"), Paperback "Paperback (play)"), Paperback "Paperback (policing)"), Paperback "Paperback (politics)"), Paperback "Paperback (poor)"), Paperback "Paperback (quackery)"), Paperback "Paperback (quigley)"), Paperback "Paperback (relationship)"), Paperback "Paperback (religion)"), Paperback "Paperback (rich)"), Paperback "Paperback (romance)"), Paperback "Paperback (sad non-fiction)"), Paperback "Paperback (scary)"), Paperback "Paperback (science)"), Paperback "Paperback (sci-fi)"), Paperback "Paperback (self-help)"), Paperback "Paperback (sexy)"), Paperback "Paperback (sports)"), Paperback "Paperback (teens)"), Paperback "Paperback (thriller)"), Paperback "Paperback (travel)"), Paperback "Paperback (true crime)"), Paperback "Paperback (western)"), Paperback: The Bible |
| base:spawncooked "Spawncooked (tag)") | Cake Slice, Cherry Pie Slice, Jar of Bell Peppers, Jar of Broccoli, Jar of Cabbage, Jar of Carrots, Jar of Eggplants, Jar of Fish Roe, Jar of Leeks, Jar of Potatoes, Jar of Radishes, Jar of Tomatoes |
| base:spawnfullunlesslaundry "Spawnfullunlesslaundry (tag)") | Bath Towel, Dish Towel (Wet) |
| base:spearhead "Spearhead (tag)") | Long Stone Blade, Sharp Bone Fragment, Stone Blade |
| base:spiked "Spiked (tag)") | Crash Helmet - Spiked, Crash Helmet - Spiked, Spiked Articulated Metal Shin Armor, Spiked Articulated Metal Shin Armor, Spiked Articulated Metal Shoulder Armor - Left, Spiked Articulated Metal Shoulder Armor - Right, Spiked Football Shoulderpad - Left, Spiked Football Shoulderpad - Right, Spiked Football Shoulderpads (On Top) "Spiked Football Shoulderpads (On Top)"), Spiked Leather Forearm Armor, Spiked Leather Forearm Armor, Spiked Metal Forearm Armor, Spiked Metal Forearm Armor, Spiked Metal Shin Armor, Spiked Metal Shin Armor, Spiked Metal Shoulder Armor, Spiked Metal Shoulder Armor, Spiked Metal Thigh Armor, Spiked Metal Thigh Armor, Spiked Scrap Metal Forearm Armor, Spiked Scrap Metal Forearm Armor, Spiked Scrap Metal Shin Armor, Spiked Scrap Metal Shin Armor, Spiked Scrap Metal Shoulder Armor, Spiked Scrap Metal Shoulder Armor, Spiked Scrap Metal Thigh Armor, Spiked Scrap Metal Thigh Armor, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard, Spiked Shin Guard |
| base:spikedbehind "Spikedbehind (tag)") | Spiked Articulated Metal Shoulder Armor - Left, Spiked Articulated Metal Shoulder Armor - Right, Spiked Leather Forearm Armor, Spiked Leather Forearm Armor, Spiked Metal Forearm Armor, Spiked Metal Forearm Armor, Spiked Scrap Metal Forearm Armor, Spiked Scrap Metal Forearm Armor |
| base:spoon "Spoon (tag)") | Bone Spoon, Forged Spoon, Gold Spoon, Plastic Spoon, Plastic Spork, Silver Spoon, Spoon, Wooden Spoon |
| base:sprayer "Sprayer (tag)") | Backpack Sprayer, Backpack Sprayer |
| base:startfire "Startfire (tag)") | Lighter, Lighter - BBQ, Lighter - Disposable, Lighter - Improvised Battery, Lit Candle, Magnesium Firestarter, Matchbook, Matchbox |
| base:steelmaterial "Steelmaterial (tag)") | Steel Bar, Steel Bar Half, Steel Bar Quarter, Steel Block, Steel Block (Pierced) "Steel Block (Pierced)"), Steel Chunk, Steel Chunk (Pierced) "Steel Chunk (Pierced)"), Steel Ingot, Steel Ingot (Pierced) "Steel Ingot (Pierced)"), Steel Piece, Steel Rod Half, Steel Rod Quarter, Steel Slug |
| base:stone "Stone (tag)") | Flint Nodule, Limestone, Stone |
| base:stonemaul "Stonemaul (tag)") | Block Maul, Stone Maul |
| base:sugar "Sugar (tag)") | Brown Sugar, Rice "Rice (sugar beet)"), Sugar Cubes, Sugar Packet, White Sugar |
| base:takedirt "Takedirt (tag)") | Entrenching Tool, Gardening Trowel, Shovel, Spade, Spade, Wooden Spade |
| base:takedung "Takedung (tag)") | Leaf Rake, Rake, Shovel, Snow Shovel, Spade, Spade, Wooden Spade |
| base:tape "Tape (tag)") | Adhesive Tape, Duct Tape |
| base:tentbed "Tentbed (tag)") | Cheap Sleeping Bag, Cheap Sleeping Bag, Cheap Sleeping Bag, Gym Mat, Hide Sleeping Bag, High Quality Sleeping Bag, Mattress, Sleeping Bag, Sleeping Bag, Sleeping Bag, Sleeping Bag, Sleeping Bag, Spiffo Sleeping Bag |
| base:tentpeg "Tentpeg (tag)") | Stake |
| base:thimble "Thimble (tag)") | Thimble |
| base:thread "Thread (tag)") | Aramid Thread, Sinew Thread, Thread |
| base:tincan "Tincan (tag)") | Tin Can, Tin Can |
| base:tinygoldscrap "Tinygoldscrap (tag)") | Gold Bangle, Gold Bangle, Gold Belly Button Dangle, Gold Belly Button Dangle with Ruby, Gold Belly Button Ring, Gold Belly Button Ring with Diamond, Gold Belly Button Ring with Ruby, Gold Belly Button Stud, Gold Belly Button Stud with Diamond, Gold Chain Bracelet, Gold Chain Bracelet, Gold Earrings - Large Looped, Gold Earrings - Medium Looped, Gold Earrings - Small Looped, Gold Earrings - Small Looped, Top, Gold Earrings - Stud, Gold Long Necklace, Gold Long Necklace with Diamond, Gold Necklace, Gold Necklace with Diamond, Gold Necklace with Ruby Stone, Gold Nose Ring, Gold Nose Stud, Gold Ring, Gold Ring, Gold Ring, Gold Ring, Gold Ring with Diamond, Gold Ring with Diamond, Gold Ring with Diamond, Gold Ring with Diamond, Gold Ring with Ruby, Gold Ring with Ruby, Gold Ring with Ruby, Gold Ring with Ruby |
| base:tinysilverscrap "Tinysilverscrap (tag)") | Silver Bangle, Silver Bangle, Silver Belly Button Dangle, Silver Belly Button Dangle with Diamond, Silver Belly Button Ring, Silver Belly Button Ring with Amethyst, Silver Belly Button Ring with Diamond, Silver Belly Button Ring with Ruby, Silver Belly Button Stud, Silver Belly Button Stud with Diamond, Silver Chain Bracelet, Silver Chain Bracelet, Silver Earrings - Large Looped, Silver Earrings - Medium Looped, Silver Earrings - Small Looped, Silver Earrings - Small Looped, Top, Silver Earrings - Stud, Silver Long Necklace, Silver Long Necklace with Diamond, Silver Long Necklace with Emerald, Silver Long Necklace with Sapphire Stone, Silver Necklace, Silver Necklace with Crucifix, Silver Necklace with Diamond, Silver Necklace with Sapphire Stone, Silver Nose Ring, Silver Nose Stud, Silver Ring, Silver Ring, Silver Ring, Silver Ring, Silver Ring with Diamond, Silver Ring with Diamond, Silver Ring with Diamond, Silver Ring with Diamond |
| base:toastable "Toastable (tag)") | Bagel, Marshmallows, Poppy Bagel, Sesame Bagel, Smore, Tortilla Chips |
| base:tobacco "Tobacco (tag)") | Pouch of Tobacco |
| base:toiletbrush "Toiletbrush (tag)") | Toilet Brush |
| base:tongs "Tongs (tag)") | Tongs |
| base:toolhead "Toolhead (tag)") | Ball Peen Hammer Head, Clawhammer Head, Club Hammer Head, Garden Fork Head, Garden Hoe Head, Pick Axe Head, Sledgehammer Head, Spade Head |
| base:tvremote "Tvremote (tag)") | TV Remote |
| base:tweezers "Tweezers (tag)") | Tweezers, Tweezers |
| base:twine "Twine (tag)") | Twine |
| base:uncutfish "Uncutfish (tag)") | Alligator Gar, Black Crappie, Blue Catfish, Bluegill, Channel Catfish, Flathead Catfish, Freshwater Drum, Green Sunfish, Largemouth Bass, Muskellunge, Paddlefish, Redear Sunfish, Salmon, Sauger, Smallmouth Bass, Spotted Bass, Striped Bass, Walleye, White Bass, White Crappie, Yellow Perch |
| base:uninteresting "Uninteresting (tag)") | Business Card, Business Card, Business Card: Nolan's Used Cars, Document, Handwritten Letter, ID Card, ID Card, ID Card, ID Card, ID Card - Blank, Mail, Note, Old Newspaper, Paperwork, Parking Ticket, Passport, Phonebook, Press Badge, Receipt, Scratch Ticket, Scratch Ticket, Scratch Ticket - Loser, Speeding Ticket, Stock Certificate |
| base:unlitlantern "Unlitlantern (tag)") | Hurricane Lantern, Hurricane Lantern, Hurricane Lantern - Copper, Hurricane Lantern - Gold, Hurricane Lantern - Silver |
| base:useall "Useall (tag)") | Cigar, Cigarette, Cigarillo, Rolled Cigarette |
| base:usedisplayname "Usedisplayname (tag)") | Scarecrow |
| base:usesbattery "Usesbattery (tag)") | CD Player, Gun Light, Makeshift Ham Radio, Makeshift Radio, Makeshift Walkie Talkie, Premium Tech. Walkie Talkie, Premium Technologies Ham Radio, Premium Technologies Radio, Shears - Electric, Tactical Walkie Talkie, Toys-R-Mine Walkie Talkie, US ARMY COMM. Ham Radio, US ARMY COMM. Manpack Radio, US Army Walkie Talkie, ValuTech Radio, ValuTech Walkie Talkie |
| base:useworldstaticmodel "Useworldstaticmodel (tag)") | Butterfly Knife, Entrenching Tool, Handiknife, Multitool, Pocket Knife, Switchblade |
| base:vermin "Vermin (tag)") | Cockroach, Dead Mouse, Dead Rat, Maggots, Mouse Pups (Dead) "Mouse Pups (Dead)"), Rat Baby (Dead) "Rat Baby (Dead)"), Rat King (Dead) "Rat King (Dead)"), Skinned Mouse (Dead) "Skinned Mouse (Dead)"), Skinned Mouse Pups (Dead) "Skinned Mouse Pups (Dead)"), Skinned Rat (Dead) "Skinned Rat (Dead)"), Skinned Rat Baby (Dead) "Skinned Rat Baby (Dead)") |
| base:vinegar "Vinegar (tag)") | Jug of Vinegar, Vinegar |
| base:visegrips "Visegrips (tag)") | Vise Grips |
| base:wallpaper "Wallpaper (tag)") | Wallpaper - Beige Stripe, Wallpaper - Black Floral, Wallpaper - Blue Stripe, Wallpaper - Green Diamond, Wallpaper - Green Floral, Wallpaper - Pink Chevron, Wallpaper - Pink Floral |
| base:wallpaperpaste "Wallpaperpaste (tag)") | Bucket of Wallpaper Paste, Carved Bucket of Plaster, Carved Bucket of Wallpaper Paste |
| base:wearable "Wearable (tag)") | US ARMY COMM. Manpack Radio |
| base:weldingmask "Weldingmask (tag)") | Old Welding Goggles, Welder Mask |
| base:wetbeverageingredient&action=edit&redlink=1 "Wetbeverageingredient (tag) (page does not exist)") | Canned Evaporated Milk (Open), Honey |
| base:whetstone "Whetstone (tag)") | Improvised Whetstone, Whetstone |
| base:whistle "Whistle (tag)") | Bone Whistle, Plastic Cowboy Hat with Whistle, Whistle |
| base:wholetire "Wholetire (tag)") | Tire - Old (Heavy-Duty Vehicle) "Tire - Old (Heavy-Duty Vehicle)"), Tire - Old (Sports Vehicle) "Tire - Old (Sports Vehicle)"), Tire - Old (Standard Vehicle) "Tire - Old (Standard Vehicle)"), Tire - Performance (Heavy-Duty Vehicle) "Tire - Performance (Heavy-Duty Vehicle)"), Tire - Performance (Sports Vehicle) "Tire - Performance (Sports Vehicle)"), Tire - Performance (Standard Vehicle) "Tire - Performance (Standard Vehicle)"), Tire - Regular (Heavy-Duty Vehicle) "Tire - Regular (Heavy-Duty Vehicle)"), Tire - Regular (Sports Vehicle) "Tire - Regular (Sports Vehicle)"), Tire - Regular (Standard Vehicle) "Tire - Regular (Standard Vehicle)") |
| base:wildgarlic "Wildgarlic (tag)") | Wild Garlic, Wild Garlic (Dried) "Wild Garlic (Dried)") |
| base:wire "Wire (tag)") | Wire |
| base:woodhandle "Woodhandle (tag)") | Broken Branch, Broken Branch with Nails, Broken Field Hockey Stick, Broken Large Handle, Broken Large Handle with Nails, Broken Long Stick, Broken Stick with Nails, Broken Table Leg, Broken Table Leg with Nails, Large Handle, Long Stick, Medium Handle, Medium Handle with Nails, Sapling, Short Bat, Small Handle, Tree Branch, Wooden Rod |
| base:wrench "Wrench (tag)") | Ratchet Wrench, Wrench |
| base:write "Write (tag)") | Crayons, Fountain Pen, Marker - Black, Marker - Blue, Marker - Green, Marker - Red, Multi-Color Pen, Pen - Black, Pen - Blue, Pen - Green, Pen - Red, Pen - Spiffo, Pencil, Pencil - Spiffo |

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

Retrieved from "https://pzwiki.net/w/index.php?title=Item_tag&oldid=1445185"

 Last modified 

*   7 days ago

Contents

Back to top

Contents

*   1 Tags

*   2 Navigation

Categories: 
*   Autogenerated articles
*   Item tags
*   Modding

Hidden categories: 
*   English
*   Version 42.20.0

Last modified

 This page was last edited on 2 August 2026, at 01:41.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

item tag From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Item_tag>

<https://pzwiki.net/wiki/ItemZed>
Title: ItemZed - PZwiki

URL Source: https://pzwiki.net/wiki/ItemZed

Published Time: Sat, 08 Aug 2026 11:25:36 GMT

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

# ItemZed

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

**ItemZed** was a tool used to browse items in Project Zomboid, created by TurboTuTone. It stopped working starting with Build 41.

## External links

*   ItemZed (updated 1.1b) - Tutorials & Resources - The Indie Stone Forums

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

Retrieved from "https://pzwiki.net/w/index.php?title=ItemZed&oldid=1389669"

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

 This page was last edited on 23 May 2026, at 02:42.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

ItemZed From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/ItemZed>

<https://pzwiki.net/wiki/Java>
Title: Java - PZwiki

URL Source: https://pzwiki.net/wiki/Java

Published Time: Sat, 08 Aug 2026 11:25:45 GMT

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

# Java

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



This page was last updated for an _older_ version of the current build (42.19.0).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

Java



Links

Oracle's JDK download

OpenJDK download

Relevant pages

Decompiling game code

Startup parameters

**Java** modding consists in creating mods directly in Java, which provides way more liberties than Lua modding "Lua (API)"), but is also more complex and has its own limitations. The principal limitation is that Java mods cannot be directly loaded from Workshop mods, and requires a manual installation from the users. Another limitation is that any changes to the game code of the classes you modify will be overwritten by any game updates, and will thus require you to update your mod way more often than other mod types, which isn't ideal for long term support.

You can access the game code by decompiling it.



If you are new to modding, or programming in general, it is recommended to start with Lua modding "Lua (API)") first.

## Loading Java mods

Java mods are not loaded automatically by the game, and require at least one or more manual installation by the user at some point. What this means is either you distribute Java files inside your mod files that users will need to manually copy into their game files, or you use one of the Java mod loaders that were created that the users will need to manually install once, but be able to load automatically Java mods that use them.

The `ProjectZomboid64.json` file indicates to the JVM what path for the Java files is to be used, it indicates the `projectzomboid.jar` will be loaded and the root folder which containes this configuration file (`.`). Java files are usually placed in the `zombie` folder:

📁 ProjectZomboid -- on Linux, this is ProjectZomboid/projectzomboid
 📁 media
 ...
 📁 zombie
 📄 YourModClass.class
 📁 characters
 📄 IsoZombie.java -- a base game class overwrite
 📄 ProjectZomboid64.json
 ...

You can load any custom class files, but they will not interact with the game until you hook or overwrite an existing class at some point. This is where Java mod loaders come in handy, as they provide a way to hook into the game code without needing to rewrite the entire class, which means no incompatibilities with other Java mods. Another advantage of Java mod loaders is that they can make it easier for Java mods to not break after updates depending on how they are implemented.

Available Java mod loaders:

*   ZombieBuddyRecommended is a Java agent that allows mods to inject custom code into any game method using simple `@Patch` annotations with `OnEnter`/`OnExit` hooks.
*   Leaf provides a mod loader for Java mods and tools to not require a full rewrite of the classes you want to modify, without needing you to update your mod as often.
*   Necroid is an external Java mod loader that compiles the mods on the fly, meaning as long as the API doesn't change, the mod will still work without needing an update.

## Installing Java

You can download the last version on Oracle's website, but other Java implementations such as OpenJDK will work too. Make sure to restart your terminal after downloading a new java version if you are decompiling from it.

## Recompiling the Java code

After decompiling the Java, it is possibly to modify it and recompile it to create Java mods. As of Build 42.13.0, Project Zomboid uses Java Version 25. To compile and run custom Java code for Project Zomboid, you must be using Java version 25.

To compile a .java file into a .class file, type this command into a suitable terminal such as Powershell or Command Prompt, replacing "GameFiles" with the path to your Project Zomboid game files, and "path/file.java" with the path to the file you want to compile.

javac -cp "GameFiles\projectzomboid.jar" "path/file.java"

You can then drag the class file into your game or server files (GameFiles/zombie/iso for example) and the class files should run.

Normally there is no "zombie" folder in your game files, but the game will still recognize the directory and will still run the class files placed in it. If you want to overwrite an existing vanilla class file, create a directory and file name that matches the location and name of the vanilla class file to be overridden.

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

Retrieved from "https://pzwiki.net/w/index.php?title=Java&oldid=1441029"

 Last modified 

*   1 month ago

Contents

Back to top

Contents

*   1 Loading Java mods

*   2 Installing Java

*   3 Recompiling the Java code

*   4 Navigation

Categories: 
*   Modding
*   Modding guides

Hidden categories: 
*   English
*   Version 42.19.0

Last modified

 This page was last edited on 2 July 2026, at 23:11.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Java From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Java>

<https://pzwiki.net/wiki/Language.txt>
Title: language.txt - PZwiki

URL Source: https://pzwiki.net/wiki/Language.txt

Published Time: Wed, 29 Jul 2026 06:06:14 GMT

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

# language.txt

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

Language.txt

English • čeština") • Deutsch") • español") • français") • italiano") • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский") • ไทย") • Türkçe") • українська") • Tiếng Việt") • 中文（简体）") • 中文（繁體）")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API) "Lua (API)") • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

July Modding News

*   Upcoming Build 42.20.0 is the a candidate for stable release, expecting less modding breaking changes to the modding API.
*   JavaDocs for B42 moved to new link: here.



This page has been updated to an _unstable_ beta version (42.7.0).

There may be additional features that are not in the stable version (41.78.19).

Help get this page updated to the current unstable version (42.19.0). Edit (Create account)

The `language.txt` file is used to define a language for the game and is used for custom translations.

## Parameters

List of parameters | Parameter name | Description | Example |
| --- | --- | --- |
| `VERSION` | Used to define the parser version. | VERSION=1, |
| `text` | Name of the language. | text=English, |
| `charset` | Encoding used by the language. | charset=UTF-8, |
| `azerty` | Boolean, set to `true` if the language uses the AZERTY keyboard layout. | azerty=true, |
| `base` | Not used, might have limited support. | base=PT, |

## See also

*   Translation
*   Game files
*   mod.info
*   map.info
*   workshop.txt

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

Retrieved from "https://pzwiki.net/w/index.php?title=Language.txt&oldid=1390075"

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
*   Version 42.7.0

Last modified

 This page was last edited on 23 May 2026, at 02:53.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

language.txt From PZwiki

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
</https://pzwiki.net/wiki/Language.txt>

<https://pzwiki.net/wiki/Lua_(API)>
Title: Lua (API) - PZwiki

URL Source: https://pzwiki.net/wiki/Lua_(API)

Published Time: Sat, 08 Aug 2026 11:25:53 GMT

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

# Lua (API)

From PZwiki

Share this page

 Views 

*   Read)
*   View source&action=edit "This page is protected.
You can view its source [alt-shift-e]")
*   View history&action=history "Past revisions of this page [alt-shift-h]")

 associated-pages 

*   Page "View the content page [alt-shift-c]")
*   Discussion&action=edit&redlink=1 "Discussion about the content page (page does not exist) [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j "A list of all wiki pages that link here [alt-shift-j]")
*   Related changes alt ⇧ k "Recent changes in pages linked from this page [alt-shift-k]")
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link&oldid=1390433 "Permanent link to this revision of this page")
*   Page information&action=info "More information about this page")
*   Expand all# "Expand all collapsible elements on the current page")

English) • čeština/cs&action=edit&redlink=1 "Lua (API)/cs (page does not exist)") • Deutsch/de&action=edit&redlink=1 "Lua (API)/de (page does not exist)") • español/es&action=edit&redlink=1 "Lua (API)/es (page does not exist)") • français/fr&action=edit&redlink=1 "Lua (API)/fr (page does not exist)") • italiano/it&action=edit&redlink=1 "Lua (API)/it (page does not exist)") • 日本語/ja&action=edit&redlink=1 "Lua (API)/ja (page does not exist)") • 한국어/ko&action=edit&redlink=1 "Lua (API)/ko (page does not exist)") • polski/pl&action=edit&redlink=1 "Lua (API)/pl (page does not exist)") • português/pt&action=edit&redlink=1 "Lua (API)/pt (page does not exist)") • português do Brasil/pt-br&action=edit&redlink=1 "Lua (API)/pt-br (page does not exist)") • русский/ru&action=edit&redlink=1 "Lua (API)/ru (page does not exist)") • ไทย/th&action=edit&redlink=1 "Lua (API)/th (page does not exist)") • Türkçe/tr&action=edit&redlink=1 "Lua (API)/tr (page does not exist)") • українська/uk&action=edit&redlink=1 "Lua (API)/uk (page does not exist)") • Tiếng Việt/vi&action=edit&redlink=1 "Lua (API)/vi (page does not exist)") • 中文（简体）/zh-hans&action=edit&redlink=1 "Lua (API)/zh-hans (page does not exist)") • 中文（繁體）/zh-hant&action=edit&redlink=1 "Lua (API)/zh-hant (page does not exist)")

Modding

Give your feedback on the Modding Wiki here!

* * *

Category:Modding • Scripts • Lua (API)) • Java • User Interface • Modeling • Animation • Texturing") • Mapping • Rendering • Translation • Modding projects

* * *

Build 42.20.0 Modding News

*   New language code: STREW (joke language), ES_CL, ES_MX
*   New translation files: mostly for the game, not modding related
*   `language.txt` files changed to JSON based format `language.json`, see here.
*   Lots of new world generation files for the Lua) in `media/lua/server/WorldGen`
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

_This article is about the Lua API.For a guide to learn how to code with Lua, see Lua (language) "Lua (language)")._
Project Zomboid allows modders to program functionalities via a Java implementation of **Lua "Lua (language)")** called Kahlua, which enables Lua scripts to run within Java programs. It bases itself on Lua 5.1 with a few differences and allows the use of exposed Java class and methods from Lua scripts.

It is highly suggested to take note of the JavaDocs and possibly decompiling the game code to make your life easier when it comes to finding functions and understanding their inner working to more easily manipulate the game's Lua. Alternatively, an unofficial project called LuaDocs acts like a JavaDocs but for the Lua API.

Java modding also exists and is a more powerful way to mod the game, by reducing the limitations to the minimum. However, it is more complex and has its own major drawbacks.

## Video guide

▶

PZ Modding Guides - Lua API, Java-Lua interface

External link ↗

## How do Java classes work in the Lua API

Lua acts as a bridge to the Java, thanks to Project Zomboid's API. Every time you try to run functions on a Java object from Lua, there are more operations happening than simply running a Lua function on a Lua object, which is also the source of performance impacts (see Mod optimization).

There are many ways to access the various class objects in the game, sometimes easy and sometimes not so easy. The usual way is to utilize Lua events which will output the various class objects they refer to. Take for example OnZombieUpdate which runs for every single zombies and every zombie update tick:

local function OnZombieUpdate(zombie)
-- Your code here
end

Events.OnZombieUpdate.Add(OnZombieUpdate)

In this case, the variable `zombie` is an IsoZombie with various methods that can be used on it. Sometimes it involves creating one yourself with a #Constructor#Constructor) or directly retrieving the list of objects. Most classes can have multiple instances, like in the case of IsoZombie.

### Parent and subclasses

All Java classes are a subclass to another class, and might also be the parent to subclasses. For example, if we continue on the example of IsoZombie, its parent classes are:

java.lang.Object
└── zombie.entity.GameEntity
    └── zombie.iso.IsoObject
        └── zombie.iso.IsoMovingObject
            └── zombie.characters.IsoGameCharacter
                └── zombie.characters.IsoZombie

As such, IsoZombie will inherit all of the fields and methods from its parent classes.

### Nested classes

A subclass inherits another class, while a **nested class** is defined directly in a class and as such has access to even private methods and fields from its original class. In the JavaDocs, nested classes are listed in the “Nested Class Summary” section of the class page. Nested classes are written as `ClassName.NestedClassName`.



This principle is not too important to understand to work with the Lua API and mostly a technical detail, however there are some notable nested classes which are often used, such as the PerkFactory.Perks for example.

### Instance and static

Java classes can have two types of methods and fields: instance methods and static methods. To run, instance methods require an instance of the class, while static methods can be run without an instance.

### Access Modifiers

Java class members have an access modifier (public, protected, package, private) which determines where they are accessible. Only public members are exposed to Lua.

### Methods and fields

Java classes can have methods and fields which are respectively functions and variables associated to the class if private or unique to an instance of the class.

## Exposed elements

Not all the Java classes and methods are exposed to the Lua API. In the JavaDocs, there is no indication of which classes are exposed but for the classes that are exposed, it shows only the methods that are exposed. To call a static method, you need to use the syntax `ClassName.methodName(args...)`, while for instance methods, you need to use the syntax `instance:methodName(args...)`. This directly refers to the Lua syntax for calling Lua object methods with the colon `:` operator passing `self` (the instance here) as the first argument, while the dot `.` operator is used for static methods.

For example `getLocalPlayerByOnlineID(ID)`) can be ran without an instance of IsoPlayer (`IsoPlayer.getLocalPlayerByOnlineID(ID)`), while `getForname()`) needs an instance of IsoPlayer to be ran (`player:getForname()`).

LuaManager.GlobalObject defines global methods which are exposed in peculiar way, not following the usual way to use them described above. Static methods listed in the JavaDocs page for LuaManager.GlobalObject are called simply by like global Lua functions, such as `getPlayer()`) or `getCell()`).



Class objects from the Java are not the same as Lua object! They are not tables, but rather direct links to the Java classes. As such, they cannot be used as Lua objects and do not have the same properties as Lua objects.

### Accessing fields

Public static fields of exposed classes are exposed to Lua in a global table of the same name as the class.

local DEATH_MUSIC_NAME = IsoPlayer.DEATH_MUSIC_NAME

Fields are different as they are not directly exposed but can be accessed by using reflection. It involves a fairly complex set of operations:

local function getJavaField(object, field) -- (IsoZombie instance, "strength")
 local offset = string.len(field)
 for i = 0, getNumClassFields(object) - 1 do
 local m = getClassField(object, i)
 if string.sub(tostring(m), -offset) == field then
 return getClassFieldVal(object, m)
 end
 end
 return nil -- no field found
end

This can access any field declared by the class, regardless of whether it is private or public.

Alternatively, Starlit Library "Starlit Library (Modding project)") is a library which simplifies the access of fields on Java object. Thanks to this library, accessing fields can simply be done in the following way:

-- with <object> an instance of a Java class
-- and <field> the field you want to access
local fieldValue = <object>.<field>

Accessing fields this way is also much less expensive than the above method due to the library's heavy usage of caching.



Accessing the inherited fields of a class from one of its subclass is not possible currently.

### Constructor

Constructors are used to instantiate a Java class. This is done with the following way:

ClassName.new(args...)

The `ClassName` of course needs to be the name of the Java class, so for example IsoZombie, while the arguments `args` are specific to the Java class.

If you want to instantiate an IsoZombie, you can use its associated <init>(zombie.iso.IsoCell) constructor.

-- create the IsoZombie instance
local isoZombie = IsoZombie.new(getCell())

Something very important to take note of is that this will not create an actual zombie, but simply an instance of IsoZombie which can be used for different operations which require an IsoZombie instance. This is the usual usage of the constructor, and creating entities is mostly done with different kinds of methods.

This IsoZombie instance can be used to create a corpse, for example with the following method for Build 41:

-- square is an IsoGridSquare
square:addCorpse(IsoDeadBody.new(zombie), false) -- note the use of IsoDeadBody constructor here

### Example

--- INSTANCE METHOD EXAMPLE ---
-- retrieve the client IsoPlayer instance
local player = getPlayer() -- a LuaManager.GlobalObject method

-- retrieve the IsoPlayer instance move speed
local moveSpeed = player:getMoveSpeed() -- instance method, notice the ":"

--- STATIC METHOD EXAMPLE ---
-- retrieve the list of IsoPlayers
local players = IsoPlayer.getPlayers() -- static method, notice the "."

### Hooking to Java methods

It is possible to hook to Java methods, which means to run Lua code when a specific Java method **is called Lua side**. This has the disadvantage that your hook will not be called if the method is called Java side, but it can have niche uses in some cases:

local index = __classmetatables[ClassName.class].__index

local old_method = index.method
function index:method(...)
 old_method(self, ...)
end



You cannot hook to Java methods which are called Java side!

## Lua objects

Lua objects are widely used in the Lua API and natively defined in it. They utilize the ISBaseObject class and derive from it to define new classes which can themselves be derived from. They are usually global and can be accessed from anywhere but in some cases where they are locked behind a local scope to a file, you can utilize the DOME library to access them.

Timed Action (Lua) use Lua objects to easily instantiate them and derive directly from Timed Action (Lua). UI elements also use Lua objects.

## Where to start

To setup a programming environment, see the getting started page.

Programming with the Lua (API) can be done in many ways, but in most cases it will involve using a Lua event to run your code at specific moments of the game. As such, it's suggested to check out the events which are available to see where you can get started.

When this didn't do much for you, another thing you might be interested to is to either check the vanilla code or for a mod which does something similar and see how they achieve it. With experience, you can learn to understand the game code and create your own functionalities more easily without needing to use examples.

Alternatively, various guides available on the Wiki will explain how to do certain actions.

### Community libraries

There are various community libraries which can help you with your Lua modding. For a full list, see the Modding projects in the libraries category.

## Folder structure

_Main article: Mod structure_
**Lua** scripts, with the file extension `.lua` need to be inside three subfolders inside the `media/lua` folder, and are used to determine the loading of files in singleplayer and multiplayer:

📁 media
    📁 lua
        📁 client
            📄 yourFile.lua
            ...
        📁 server
            📄 yourOtherFile.lua
            ...
        📁 shared
            📄 thisIsALuaScript.lua
            ...

The only time one of these folder is not loaded is for multiplayer server side:

Which folders are loaded in which game mode | Folder | Singleplayer | Multiplayer: client side | Multiplayer: server side |
| --- | --- | --- | --- |
| `client` |  |  |  |
| `server` |  |  |  |
| `shared` |  |  |  |

Organization inside the client, server and shared folders is free and subfolders can be created with files named in any way. Files with the same relative path to the `lua` as vanilla files will overwrite them, so make sure to use unique names and relative paths. This applies to other mod files too and is impacted by the load order between mods.



A good trick to not have your Lua files clash with other mods or vanilla files is to put your Lua files inside subfolders named after your mod. This will make it unlikely for your mod to clash with other mods.

### Load order

Lua files are loaded when launching the game, and when exiting a save, or when manually triggered in debug mode in the main menu, in the following order:

1.   Shared - vanilla files
2.   Shared - mod files
3.   Client - vanilla files
4.   Client - mod files

The server subfolder is actually loaded only when launching a save, so anytime Lua is loaded or reloaded the server files are unloaded until a save is loaded. The order for the server subfolder files is:

1.    Server - vanilla files 
2.    Server - mod files 



Translation files are also put inside the `lua` folder but are not Lua files. See the Translation page for more detail.



It is not recommended to overwrite existing files if not needed for compatibility reasons. Instead, overwrite specific functions or hook#Decoration "Lua (language)") them when possible.

## See also

*   Java - explains things related to
*   Lua (language) "Lua (language)") - the programming language used in Project Zomboid.
*   Lua object - classes defined in the Lua.
*   Lua event - events which can be used to run Lua code at specific moments of the game.
*   LuaDocs - an unofficial project which acts like a JavaDocs but for the Lua API.
*   ModOptions - the native mod options API introduced in Build 42.
*   User Interface - explains how to make a UI via the Lua API.

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

Lua (API))

Decompiling game code • Game time • Java object • JavaDocs • Keyboard • LuaDocs • Lua event • Lua object • Mod data • PersistentOutfitID • Procedural distributions • Remote debugging • Umbrella "Umbrella (modding)")

Mapping

Adding new tiles • BuildingEd • map.info • Room definitions and item spawns • Tile properties • Tiledefs used by mods • TileZed • Vehicle zones • WorldEd

Animation

AnimNode • Dislaik rig • Mystery rig • Community rig • Throttlekitty rig • PerformingAction

Modding tools

Animation Viewer • Attachment Editor • BuildingEd • CartoZed • Imgui • IntelliJ IDEA • ItemZedOutdated • LootZed • Mapping tools (official) • Remote debugging • TileZed • TranslationZedOutdated • Visual Studio Code • WordZed

Modding projects

Azakaela's Modding Tools • B42 Map • Background Framework • Beautiful Java • BeeArr tools • Community Modding Projects • DebugMenu • Dislaik rig • Doggy's Library • DOME • Easy Distributions API • Elyon Lib • Events Plus API • FrameworkZ • JB ASSUtils • JB Max Capacity Override • KATTAJ1 Clothes Core • Leaf • Location Identifier Framework • LuaDocs • Magazine API • Map Mover • Mod Update and Alert System • Modix • Moodle Framework • Moodles in lua • Mystery rig • Community rig • pq tools • Project Zomboid Community Modding template • Project Zomboid Loot Analyzer • Project Zomboid Script Support • Pythoid • PZ AI agent • PZEventDoc • PZEventStubs • pzmap2dzi • PZTools • Real Life Map • Starlit Library • Steam Uploader • TchernoLib • Throttlekitty rig • Umbrella "Umbrella (modding)") • Unofficial JavaDocs (Build 41) "Unofficial JavaDocs (Build 41)") • Unofficial JavaDocs (Build 42) "Unofficial JavaDocs (Build 42)") • Mapping tools (Alree) • Vanilla Map Export • Wiki That! • Wiki Tools • Zed Script • Zombie Layer Replacer • Zomboid Decompiler • ZomboidAssetConverter • Zomdroid • ZBundler

Retrieved from "https://pzwiki.net/w/index.php?title=Lua_(API)&oldid=1390433&oldid=1390433)"

 Last modified 

*   3 months ago&diff= "This page was last edited on 23 May 2026, at 03:02.")

Contents

Back to top#top)

Contents

*   1 Video guide#Video_guide)

*   2 How do Java classes work in the Lua API#How_do_Java_classes_work_in_the_Lua_API)Toggle How do Java classes work in the Lua API subsection
    *   2.1 Parent and subclasses#Parent_and_subclasses)

    *   2.2 Nested classes#Nested_classes)

    *   2.3 Instance and static#Instance_and_static)

    *   2.4 Access Modifiers#Access_Modifiers)

    *   2.5 Methods and fields#Methods_and_fields)

*   3 Exposed elements#Exposed_elements)Toggle Exposed elements subsection
    *   3.1 Accessing fields#Accessing_fields)

    *   3.2 Constructor#Constructor)

    *   3.3 Example#Example)

    *   3.4 Hooking to Java methods#Hooking_to_Java_methods)

*   4 Lua objects#Lua_objects)

*   5 Where to start#Where_to_start)Toggle Where to start subsection
    *   5.1 Community libraries#Community_libraries)

*   6 Folder structure#Folder_structure)Toggle Folder structure subsection
    *   6.1 Load order#Load_order)

*   7 See also#See_also)

*   8 Navigation#Navigation)

Categories: 
*   Modding
*   Modding guides

Hidden categories: 
*   English
*   Version 42.17.0

Last modified

 This page was last edited on 23 May 2026, at 03:02.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Lua (API) From PZwiki#top "Back to top")

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j "A list of all wiki pages that link here [alt-shift-j]")
*   Related changes alt ⇧ k "Recent changes in pages linked from this page [alt-shift-k]")
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link&oldid=1390433 "Permanent link to this revision of this page")
*   Page information&action=info "More information about this page")
</https://pzwiki.net/wiki/Lua_(API)>

<https://pzwiki.net/wiki/Mapping>
Title: Mapping - PZwiki

URL Source: https://pzwiki.net/wiki/Mapping

Published Time: Sat, 08 Aug 2026 11:25:57 GMT

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

# Mapping

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion

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

**Mapping** in Project Zomboid consist of creating new maps which are either standalone to the vanilla Knox Country or directly inserted inside it. This is done by creating a new map cell, which is a 300x300 tile area in Build 41 and 256x256 in Build 42 (see #Cells for more information). Replacing an existing cell is done by overriding the existing one, which means that the entire cell must be replaced, including its terrain data and any structures within it. This means it is not possible to simply place a single building in an existing cell without remaking all the surrounding buildings as well.

You can access a full view render of the Knox Country map via the Project Zomboid Map Project.

## Mapping tools

No releases of the official mapping tools "Mapping tools (official)") have been made for Build 42 but these tools are a public project on GitHub which can be compiled by anyone and are fully usable to make maps. The best is to use one of the available community made tools which are based more or less on the official Build 42 mapping tools:

*   Mapping tools (Alree) "Mapping tools (Alree)") - Created by Alree, they are a fork of the Build 41 official mapping tools and implemented changes from the official Build 42 tools.
*   Mapping tools (Community Edition) "Mapping tools (Community Edition)") - Created by Crater, it is a direct fork of the Build 42 official tools and merges some elements from Alree's tools while also adding improvements on top of that.



While the official mapping tools for Build 42 are not yet released, the community tools still provide a reliable way to create maps for Build 42, without any serious problems that should arise from moving to the official tools in the future.

The Indie Stone stated in the NEXT STEPS 2") blog post that the mapping tools should be released after the stable release planned for Build 42.20.0 has received hotfixes and such:

“

After we hit Stable, once hot fixing and such is over, we will be releasing both our latest mapping tools (WorldZed, TileZed, etc.) and our in-house animation editor and integration tool, AnimZed. We believe that having greater control over animations will be of huge benefit to modders looking to unleash their creativity.

— The Indie Stonein the NEXT STEPS 2") blog post



## Folder structure

_Main article: Mod structure_

The `maps` folder in `media` is used to store map files. It's subfolder will correspond to a map and its associated files which are obtained by exporting a map from the mapping tools.

📁 media
    📁 maps
        📁 MyMap
            📁 maps
                ...
            📄 X_Y.lotheader
            📄 chunkdata_X_Y.bin
            📄 map.info
            📄 objects.lua
            📄 spawnpoints.lua
            📄 thumb.png
            📄 worldmap-forest.xml
            📄 worldmap.xml
            📄 world_X_Y.lotpack
            ...

`MyMap` will need to be a unique name associated with your map but the map informations are mostly defined the map.info file. Other files are used to define spawnpoints as well as the biomes, chunks, streetnames etc.



This section may need more content.

The table below is incomplete and needs more detail.

Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account)

Files in the maps folder 
| File | Description |
| --- | --- |
| `.lotheader` files | Defines the location/cell of your map. |
| `chunkdata.bin` |  This section may need more content. Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account) |
| map.info | Contains the informations about your map, such as its name, description, location... |
| `objects.lua` | Defines car spawns and navigation meshes. |
| spawnpoints.lua | Defines the spawnpoints XYZ coordinates for specific occupations for your map. |
| `thumb.png` | Image used as a thumbnail for the spawnpoints of your map. |
| `worldmap-forest.xml` |  This section may need more content. Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account) |
| `worldmap.xml` |  This section may need more content. Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account) |
| `world.lotpack` |  This section may need more content. Editors are encouraged to add new material to the page while expanding upon current topics. Edit (Create account) |

## Cells

The cells are the main building blocks of a map, as you will fill those with buildings, roads, vegetation and other map elements. Previously in Build 41, cells were 300x300 tiles big, but in Build 42 they are now 256x256 tiles big. However when you create your map, you still work with 300x300 cells, but the mapping tools will export them as 256x256 cells, which means that the exported map will have some empty tiles around the borders of the exported cells.

The following image shows the difference of the cell sizes with in yellow the 300x300 cells and in magenta the 256x256 cells:



If we create a map for the Build 41 cell ID (31, 23) in cyan on the image below, the exported cells from the mapping tools will be (36, 26), (37, 26), (36, 27), (37, 27), (36, 28) and (37, 28) in Build 42 cell IDs, which are shown in green:



The resulting exported cells will have active and inactive areas as shown in the image below with the green area corresponding to the 300x300 cell which contains your map elements, and in red the area which is empty in the exported map:



The active areas will replace the vanilla map, but the inactive areas will use the vanilla map. When it comes to other mod maps however, those that share the same adjacent 256x256 cells will clash together and one will not be loaded in. This was the conclusion from a test which you can find more information on in the talk page.



## Building pools

The Indie Stone and the community have created several building pools, which are collections of buildings that can be used in custom maps. These pools can be used as a reference or directly in your own maps, as long as you credit the original authors when asked for credit. Below is the list of available building pools:

*   Building Pool (official) "Building Pool (official)")
*   Building Pool (Blackbeard) "Building Pool (Blackbeard)")
*   Building Pool (okkydoo) "Building Pool (okkydoo)")
*   Building Pool (Dylan) "Building Pool (Dylan)")
*   Community Architect
*   B42 Vanilla Map Building Exports

## Tile packs

Below is a list containing references to tilepacks which are available for the mappers to use directly in their map mods. Those usually come in the form of Spiffo's Workshop items that you can directly use as an addon to your map mod.

*   Azakaela's Mountain Tiles
*   Asian Style Builds
*   Community Tile Pack
*   Tile pack (BigZombieMonkeys) "Tile pack (BigZombieMonkeys)")
*   Tile pack (Daddy Dirkie Dirks) "Tile pack (Daddy Dirkie Dirks)")
*   Tile pack (Dylan) "Tile pack (Dylan)")
*   Tile pack (ExtraNoise's Newburbs) "Tile pack (ExtraNoise's Newburbs)")
*   Tile pack (Fear's Funky) "Tile pack (Fear's Funky)")
*   Tile pack (Ivery) "Tile pack (Ivery)")
*   Tile pack (Loolie) "Tile pack (Loolie)")
*   Tile pack (Pertominus)&action=edit&redlink=1 "Tile pack (Pertominus) (page does not exist)")
*   Tile pack (Simon MDs)&action=edit&redlink=1 "Tile pack (Simon MDs) (page does not exist)")
*   Tile pack (Skizot)&action=edit&redlink=1 "Tile pack (Skizot) (page does not exist)")
*   Tile pack (throttlekitty)&action=edit&redlink=1 "Tile pack (throttlekitty) (page does not exist)")
*   Tile pack (TryHonesty)&action=edit&redlink=1 "Tile pack (TryHonesty) (page does not exist)")
*   Tile pack (Melos)&action=edit&redlink=1 "Tile pack (Melos) (page does not exist)")

## Public maps

Some maps created by the community had their files made public for other mappers to use or study. Below is a list of public maps, their authors as well as how they can be used:

Public maps 
| Map | Author | Files | Permissions | Last updated |
| --- | --- | --- | --- | --- |
| Dirkerdam | Daddy Dirkie Dirk  daddydirkiedirk | Download | No restrictions, but credit the author. (source) | 2023-07-21 (Last Workshop item update) |
| Knox Country unofficial export | The Indie Stone, map files exported by Unjammer:  alree_unjammer Alree Unjammer | See the modding project Vanilla Map Export | No direct details on permissions since it is an unofficial export. | 2023-01-31 Build 41.78.16 (last Build 41 update) |

## See also

*   The Indie Stone forum post with the latest mapping tools
*   Room definitions and item spawns
*   Vehicle zones
*   Defining generator spawns
*   Unofficial PZ Mapping Discord

External tutorials 
| Tutorial | Description | Author | Last updated |
| --- | --- | --- | --- |
| Project Zomboid - Depthmap Tutorial B42+ | A full guide on adding depthmaps to your custom tiles for Build 42. | Crater | 2025 January 19 |
| How To Make Sittable Chairs In Build 42 I Project Zomboid Modding | A video tutorial on how to make sittable chairs in Build 42. | PentyT | 2025 January 5 |
| Zomboid Map Making Quick Guide(recommended) | A playlist of video tutorials regarding mapping like Daddy Dirkie Dirk's tutorials which goes in detail. | DystopianOutcasts_Rax | 2024 December 17 |
| Daddy Dirkie Dirks zomboid mapping tutorials(recommended) | A playlist of tutorial videos to mapping Project Zomboid, which is often the main tutorial source for new and veteran mappers. Mappers are usually redirected to watching this video serie to learn mapping properly. It was made for Build 41 mapping, but is still very relevant to Build 42 mapping (confirmed as of 2025-10). | Daddy Dirkie dirk | 2022-09 |
| Official TIS Mapping guides | A set of official guides by The Indie Stone on how to create maps and mod maps. | RingoD123 (The Indie Stone) | 2021 to 2022 |
| How to make a map in Project Zomboid Build 41 | A video tutorial on how to make a map in Project Zomboid Build 41. Also noted as valid for Build 40 by the author. | BlackBeard | 2019 November 20 |
| Card's Tutorial for Terrain Generation | A guide to vegetation maps. | Cardenaglo | 2017 February 22 |
| Video Tutorials mapping | A series of spanish video tutorials for using TileZed and WorldEd. | Atoxwarrior | 2016 June 26 |
| Custom texture packs and tile definitions | Explains the texture pack and tile pack process. An image in the guide is not longer available, but the rest should be fairly up to date. | EasyPickins | 2014 June 4 |

External resources 
| Resource | Description | Author | Last updated |
| --- | --- | --- | --- |
| Zomboid Map Cleaner | A tool to clean up the map of saves from Build 41 by resetting specific cells. | LordIkol | 2022 March 29 |
| Build 41 base and vegetation maps | Base and vegetation image maps for Build 41. | Unknown | 2022 March 14 |
| New Room Definitions (41.65+) | List of the new room definitions available in Build 41.65. | RingoD123 (The Indie Stone) | 2021-12-30 (source) |
| Build 40 vegetation map Build 40 base map | Base and vegetation image maps for Build 40. Originally posted on the Project Zomboid forum. | Okamikurainya | 2019 August 24 |

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

Retrieved from "https://pzwiki.net/w/index.php?title=Mapping&oldid=1443845"

 Last modified 

*   1 week ago

Contents

Back to top

Contents

*   1 Mapping tools

*   2 Folder structure

*   3 Cells

*   4 Building pools

*   5 Tile packs

*   6 Public maps

*   7 See also

*   8 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.20.0
*   Stub articles

Last modified

 This page was last edited on 31 July 2026, at 12:01.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Mapping From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Mapping>

<https://pzwiki.net/wiki/Mapping_tools_(official)>
Title: Mapping tools (official) - PZwiki

URL Source: https://pzwiki.net/wiki/Mapping_tools_(official)

Published Time: Sat, 08 Aug 2026 11:26:02 GMT

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

# Mapping tools (official)

From PZwiki

Share this page

 Views 

*   Read)
*   View source&action=edit "This page is protected.
You can view its source [alt-shift-e]")
*   View history&action=history "Past revisions of this page [alt-shift-h]")

 associated-pages 

*   Page "View the content page [alt-shift-c]")
*   Discussion&action=edit&redlink=1 "Discussion about the content page (page does not exist) [alt-shift-t]")

More actions

 More 

 Tools 

*   What links here alt ⇧ j "A list of all wiki pages that link here [alt-shift-j]")
*   Related changes alt ⇧ k "Recent changes in pages linked from this page [alt-shift-k]")
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link&oldid=1390645 "Permanent link to this revision of this page")
*   Page information&action=info "More information about this page")
*   Expand all# "Expand all collapsible elements on the current page")

English) • čeština/cs&action=edit&redlink=1 "Mapping tools (official)/cs (page does not exist)") • Deutsch/de&action=edit&redlink=1 "Mapping tools (official)/de (page does not exist)") • español/es&action=edit&redlink=1 "Mapping tools (official)/es (page does not exist)") • français/fr&action=edit&redlink=1 "Mapping tools (official)/fr (page does not exist)") • italiano/it&action=edit&redlink=1 "Mapping tools (official)/it (page does not exist)") • 日本語/ja&action=edit&redlink=1 "Mapping tools (official)/ja (page does not exist)") • 한국어/ko&action=edit&redlink=1 "Mapping tools (official)/ko (page does not exist)") • polski/pl&action=edit&redlink=1 "Mapping tools (official)/pl (page does not exist)") • português/pt&action=edit&redlink=1 "Mapping tools (official)/pt (page does not exist)") • português do Brasil/pt-br&action=edit&redlink=1 "Mapping tools (official)/pt-br (page does not exist)") • русский/ru&action=edit&redlink=1 "Mapping tools (official)/ru (page does not exist)") • ไทย/th&action=edit&redlink=1 "Mapping tools (official)/th (page does not exist)") • Türkçe/tr&action=edit&redlink=1 "Mapping tools (official)/tr (page does not exist)") • українська/uk&action=edit&redlink=1 "Mapping tools (official)/uk (page does not exist)") • Tiếng Việt/vi&action=edit&redlink=1 "Mapping tools (official)/vi (page does not exist)") • 中文（简体）/zh-hans&action=edit&redlink=1 "Mapping tools (official)/zh-hans (page does not exist)") • 中文（繁體）/zh-hant&action=edit&redlink=1 "Mapping tools (official)/zh-hant (page does not exist)")

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



This page was last updated for an _older_ version (41.78.19).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

Mapping tools (official)



Links

SteamDB entry

Repository

The **Mapping tools** are the official tools released by The Indie Stone to create maps for Project Zomboid. They are distributed for free on the forums. On Steam, an outdated version of the tools can be accessed by searching for _Project Zomboid Modding Tools_ in the library when owning Project Zomboid.

The mapping tools currently include two tools:

*   TileZed
*   WorldEd

as well as tiles in the PNG format, required for TileZed to run properly. Other officially released tools are not available with this package.

## See also

*   Mapping tools (Alree) "Mapping tools (Alree)")
*   Mapping tools (Community Edition) "Mapping tools (Crater)")

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

Retrieved from "https://pzwiki.net/w/index.php?title=Mapping_tools_(official)&oldid=1390645&oldid=1390645)"

 Last modified 

*   3 months ago&diff= "This page was last edited on 23 May 2026, at 03:07.")

Contents

Back to top#top)

Contents

*   1 See also#See_also)

*   2 Navigation#Navigation)

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 41.78.19

Last modified

 This page was last edited on 23 May 2026, at 03:07.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Mapping tools (official) From PZwiki#top "Back to top")

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j "A list of all wiki pages that link here [alt-shift-j]")
*   Related changes alt ⇧ k "Recent changes in pages linked from this page [alt-shift-k]")
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link&oldid=1390645 "Permanent link to this revision of this page")
*   Page information&action=info "More information about this page")
</https://pzwiki.net/wiki/Mapping_tools_(official)>

<https://pzwiki.net/wiki/Mod.info>
Title: mod.info - PZwiki

URL Source: https://pzwiki.net/wiki/Mod.info

Published Time: Sat, 08 Aug 2026 11:26:19 GMT

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

# mod.info

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

Mod.info

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



This page was last updated for an _older_ version of the current build (42.17.0).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

This page explains the `mod.info` file which is used to get mods to be recognized by the game and its properties. The file needs to be placed in the mod folder and is a simple text file with the `.info` file extension. It is the root of your mod and you can edit it with any text editor.

This file, while working in both the common and versioning folders, is best kept only in the versioning folders for ease of use and organization between different game versions, whenever you add new requirements. Technically, all of the parameters are optional, but excluding some of these might just break your mod, make it not available to run or other problems. The necessary parameters should at least be the `ID` and `name`.



Make sure to name the file in full lowercase for Linux and macOS compatibility.



Make sure that you don't have a hidden `.txt` extension on your file. To verify that it isn't the case, you can find a setting to show file extensions in your file explorer.

## Parameters

You can find a full list of parameters in the ScriptsDocs.

## Example

name=My amazing mod !
id=myAmazingModID
author=an amazing modder!
description=Hello World !
poster=preview.png
icon=icon.png
require=otherModID,anotherModID

## See also

*   Game files
*   Mod structure
*   workshop.txt

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

Retrieved from "https://pzwiki.net/w/index.php?title=Mod.info&oldid=1363935"

 Last modified 

*   3 months ago

Contents

Back to top

Contents

*   1 Parameters

*   2 Example

*   3 See also

*   4 Navigation

Category: 
*   Modding

Hidden categories: 
*   English
*   Version 42.17.0

Last modified

 This page was last edited on 9 May 2026, at 00:45.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

mod.info From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Mod.info>

<https://pzwiki.net/wiki/Modding>
Title: Modding - PZwiki

URL Source: https://pzwiki.net/wiki/Modding

Published Time: Sat, 08 Aug 2026 11:26:24 GMT

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

# Modding

From PZwiki

Share this page

 Views 

*   Read
*   View source
*   View history

 associated-pages 

*   Page
*   Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
*   Expand all

English • čeština") • Deutsch") • español • français") • italiano • 日本語") • 한국어") • polski") • português") • português do Brasil") • русский • ไทย") • Türkçe") • українська") • Tiếng Việt • 中文（简体） • 中文（繁體）")

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



This page has been revised for the current _stable_ version (42.20.2).

Help by adding any missing content. Edit (Create account)

Parts of this page may have been automatically updated to the latest build (42.20.2).

_This article is about an overview about modding.For PZwiki project, see PZwiki:Project Modding._

Spiffo's Workshop is the home of Project Zomboid mods on Steam

Modding is the process of creating new content by creating mods for a game. For Project Zomboid, modding is a natively integrated part of the game with a mod manager and an API to allow modders to create a various quantity of content, from simple items to complex systems. Mods are usually uploaded to the Spiffo's Workshop which serves as the official method for sharing mods with the community.

## Latest information on MP unstable release

_Main article: TIS Modding Guides_
_Last updated: 11th of December 2025_

The Indie Stone has recently released an _unstable_ version of Project Zomboid which adds back multiplayer in the game. They provided the modding community with modding instructions to applying the new networking changes to existing mods that you can find here. If you don't have a TIS Forum account to download them, you find copies of these files here.

## Terms & Conditions

By playing Project Zomboid, you agree to the **Terms & Conditions**.

By modding Project Zomboid, you also agree with the **Modding Policy**.

### Key restrictions

*   The Indie Stone reserves the right to implement any features in the game, irrespective of whether mods exist that accomplish the same goal.
*   Modders are solely responsible for their mod, including (but not limited to) compliance with any hosting platforms (such as Steam Workshop). They are also responsible for obtaining third party consents for any third party materials in the mod. Legally, we have to ask that modders to ‘represent and warrant’ (i.e., promise legally) that their mod is their own original work and any third party contents are fully and properly licensed by the modder.
*   Creation of mods is subject to our modding policy, which may be updated from time to time with any technical requirements regarding how PZ mods must work.
*   Project Zomboid modders are free to receive monetary/gift donations from the players who use their releases, and appreciate the time and effort put into them. However, having mods created exclusively for those who choose to donate (or separate ‘in-mod’ content and bonuses) is not allowed. Mod creators cannot sell modifications to Project Zomboid.

## Commissions

Modders may choose to provide their skills and services through commissions, but with that comes a lot of responsibility.

If you're instead looking to commission work (have a mod made), and need advice, see Commissioning Mods.

As per the official Terms & Conditions (Section 2.4. Commercialisation) modders are in fact allowed to sell their services / create commissioned work, provided access to the mod and its content is not sold on an individual basis.

The advice below is not part of the TOS, nor legal advice, merely points to consider before going forward as a modder-for-hire:

*   You should learn the ins and outs of modding before offering your services. The Zomboid API is fairly unique/niche.
*   Have a portfolio ready to show. This can be as simple as your workshop page, and help build trust.
*   Maintain transparency with pricing, timelines, and deliverables. Miscommunications cost time.
*   Requesting payment upfront might appear to safeguard your time but it also comes with a lot more responsibility.

## Communities

Different communities exist to get help with modding, be it installing or debugging mod problems or creating mods, maps, tiles, etc.:

*   Official Discord – check out the **Workshop** category to get help on installing mods, problems with mods, or developing mods.
*   PZ Modding Community – provides help on coding, modeling, animating and more.
*   Unofficial PZ Mapping Discord – provides help on mapping and tile making.
*   Unofficial PZ Cinematic Animation Discord - provides help on cinematic animations and renders.

### Modding Projects

_Main article: Modding projects_
Various projects are created and handled by the community in relation to Project Zomboid modding. It varies from APIs, debug tools, to complete software development. Communities were also created to focus on modding Project Zomboid. You can contribute to some of these projects or communities directly or indirectly.

## How to get started

You can learn more in detail how to get started with modding in the getting started with modding page, which will also teach you about various tools for different modding fields. Depending on the type of modding you are interested in, the #Modding fields will provide you with the necessary resources to get started as well as links to some important pages per modding fields.

## Modding fields

Modding is split in different fields, each with their own tools and creation process. For a few general resources on modding that you will need to know regardless of the field you are working on:

*   Mod structure - Explains a mod files structure.
*   Game files - Explains Project Zomboid's file structure.
*   File formats - Documentation of file formats used by the game.
*   Debug mode - Explanations of how to run the game in the debug (developer) mode and how to use it.
*   Startup parameters - Startup parameters to launch the game with.
*   Mod optimization - Learn various tips, tricks and good habits that will improve your mods performances.
*   Procedural distributions - List and explanations of procedural distributions.
*   PZ API Documentation - An in-depth documentation of different API elements for modding such as Scripts, Lua (API) "Lua (API)"), Mapping, Translation etc.

Below is a list of all the modding fields with a brief description of what they involve and links to the relevant pages:

Modding fields 
| Field | Description | Important pages |
| --- | --- | --- |
| Scripts (Category:Scripts) | Allow to add items in the game with simple parameters which can be edited in any text editor. No programming knowledge is needed. | * ZedScripts - a VSCode extension to help working with scripts. * PZ API Documentation - provided an in-depth ScriptsDocs. |
| Lua API "Lua (API)") (Category:Lua (API) "Category:Lua (API)")) | Allows modders to program functionalities via a Java implementation of Lua called Kahlua which enables Lua scripts to run within Java programs. It bases itself on Lua 5.1 with a few differences and allows the use of exposed Java class and methods from Lua scripts. | * Visual Studio Code and Umbrella "Umbrella (modding)") - the perfect tools to work with Lua programming for Project Zomboid. * Lua (language) "Lua (language)") to learn how to code with the Lua programming language. * Lua object – a list of available Lua Objects to be used by modders. * Lua event – a full list of available Events to hook on. * Java object – a list of informations about some Java objects which can be used with the Lua API. * JavaDocs - a list of external links to the Java documentation of game. * Decompiling game code - a guide to decompiling the Java to better understand how the game works. * LuaDocs |
| Java (Category:Java) | Involves modifying the Java game code directly and the manual installation of the Java files to modify deep game functionalities. It is not recommended for beginners as it requires a good knowledge of Java and programming in general. | * Decompiling game code - a guide to decompiling the Java to better understand how the game works. * IntelliJ IDEA - IntelliJ IDEA is an IDE specialized for Java development. |
| Modeling | Creating 3D models to be used in item making, vehicle making or renders. | * Creating custom animations * Creating a hair mod * Creating a clothing mod |
| Texturing") | Creating textures to be applied on 3D models or to create 2D tiles. |  |
| Rendering | Creating 2D images from 3D models to be used in various medias in-game such as fliers. | * Character rigs - character rigs which can be used to create renders of characters in various poses. |
| Animation (Category:Animation) | Used to create new animations for characters to visually do certain actions. It involves knowledge of 3D softwares for animating but also a small bit of XML programming required to get your animation in-game. | * Character rigs - character rigs which can be used to create animations of characters. |
| Mapping (Category:Mapping) | Create new locations, buildings and general environments in the form of a map for users to play on. | * map.info - Definition of the file used to define the map informations. * Tiledefs used by mods - List of tiledef IDs which are already used by other mods. * Adding new tiles - Guide to adding new tiles. * Tile properties - Explanation of tile properties. * Room definitions and item spawns - Explanation of room definitions, used mainly for loot distribution. * Vehicle zones - Explanation of vehicle zones. |
| Translation | Translating the game or mods to various languages. | * PZ API Documentation - provides an in-depth documentation of the available language codes and translation files. |

## Modding guides

Each #Modding fields will contain links to their respective appropriate guides, but there are also some more general guides which are too general to be linked in a specific field, which will be listed below. You can also find internal wiki guides in the category Modding guides category.

Unlisted external guides are listed below:

External tutorials 
| Tutorial | Type | Description | Author | Last updated |
| --- | --- | --- | --- | --- |
| PZ Modding Video Guides | General guide | Video guides for modding Project Zomboid, covering various aspects of modding. | SimKDT | 2025 November 19 |
| PZ Modding Guides | General guide | A collection of guides and documentation for modding Project Zomboid. | Albion") | 2025 May 18 |
| Project Zomboid B42 - How to Create a Mod | Item creation | A short video tutorial explaining how to create an item mod for Project Zomboid. | Rainmaker | 2025 April 23 |
| How to create Custom Firearm with working muzzle/attachments | Item creation | A guide on how to create a custom firearm with working muzzle and attachments. | Nik | 2024 June 29 |
| How to change Zomboid's in-game music and sound effects | Sound | A guide on how to change the in-game music and sound effects of Project Zomboid. | Sokolov | 2024 April 2 |
| PZ Mod Documentation | General guide | A collection of guides and documentation for modding Project Zomboid. | MrBounty") | 2023 August 25 |
| FWolfe's Modding Guide (WIP) | General guide | A comprehensive guide to modding Project Zomboid, covering various aspects of modding. However a lot of the information is outdated or better explained by the official wiki. Good pratices are notably way more up-to-date than the wiki. The guide is incomplete on a lot of aspects and now inactive. | Fenris Wolf | 2023 January 22 |
| Full Project Zomboid Mod Tutorial - Start to Finish | Item creation | A 2 hour and a half long step-by-step video tutorial on how to add a new item to Project Zomboid, including creating an icon, adding it to the game, testing it and uploading it to the Steam Workshop. | W. Patrick | 2022 December 13 |
| Complete Vehicle Modding Tutorial | Vehicle making | A forum post which details how to create vehicles. While a bit outdated, it still covers various aspects of vehicle making well. | tubetarakan | 2020 May 4 |

## External resources

External resources 
| Resource | Description | Author | Last updated |
| --- | --- | --- | --- |
| Mod Resources (Official Discord - Thread The Under Mod Development Channel) | A thread on the official Discord server that contains a list of resources for modding Project Zomboid, including links to resources, tools, and other useful information. | Glytch3r and more | 2025 July 4 |

### General additional modding resources

*   Photoshop Masks used for making and editing tile sprites, a link to a post on TIS Discord with the file
*   A flow chart for the timed actions
*   SpawnerAPI: Allows for pending the spawns of vehicles, items, zombies in order to spawn things anywhere in the world. Upon loading the cell in question the item becomes spawned in
*   How to spawn loot on specific zombie outfit corpses: a link to a post on TIS Discord explaining how
*   WordZed tutorial on YouTube
*   Complete Vehicle Modding Tutorial on TIS forum
*   isoRangeScan: This is a utility function meant for large-scale scans of isoGridSquares around a given IsoObject. The scans are done fractally – that is to say, from a center (or centers) outward to fill a larger area.

## Navigation

Modding

Modding#Communities community

The Indie Stone Discord • Modding projects • Unofficial PZ Mapping Discord • PZ Modding Community

Modding#Modding guides guides

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

Retrieved from "https://pzwiki.net/w/index.php?title=Modding&oldid=1455193"

 Last modified 

*   3 days ago

Contents

Back to top

Contents

*   1 Latest information on MP unstable release

*   2 Terms & ConditionsToggle Terms & Conditions subsection
    *   2.1 Key restrictions

*   3 Commissions

*   4 CommunitiesToggle Communities subsection
    *   4.1 Modding Projects

*   5 How to get started

*   6 Modding fields

*   7 Modding guides

*   8 External resourcesToggle External resources subsection
    *   8.1 General additional modding resources

*   9 Navigation

Categories: 
*   Version 42.20.2")
*   Modding

Hidden category: 
*   English

Last modified

 This page was last edited on 6 August 2026, at 00:54.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Modding From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Modding>

<https://pzwiki.net/wiki/Modding_projects>
Title: Modding projects - PZwiki

URL Source: https://pzwiki.net/wiki/Modding_projects

Published Time: Sat, 08 Aug 2026 11:26:30 GMT

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

# Modding projects

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

_This article is about projects related to Project Zomboid modding.For PZwiki project, see PZwiki:Project Modding._
**Modding projects** documents different projects created for other modders such as mods, applications, tools etc but should not document _content_ mods that do not serve a utility to other modders. A modding project page explains what it is about and links to the project outside the wiki. If you are working on a modding project, feel free to create a page about it. If you are looking for a project to contribute to or you are searching for specific tools or projects developed by the community, refer to the modding projects category.

## Rules

Below are rules and guidelines when creating or editing modding project pages. These rules are in addition to the general wiki rules and guidelines (PZwiki:Rules, Help:Contents, Help:Editing for beginners, and Help:Style guide).

*   Modding project pages **must not** be used for advertising. Content should remain neutral, factual, and informative.
*   Pages should follow a consistent format. Refer to existing modding project pages for examples. General style guidelines: 
    *   Place images that are not suitable for inline use in the Template:Infobox/image. Use the project icon (if available) as the first image to serve as the page thumbnail.
    *   Add links to the project using Template:Infobox/socials for a consistent appearance and automatic logo linking (Discord, Steam, GitHub...). Additional logos can be requested for the template if needed.
    *   Begin with a concise summary describing the project, its purpose, and its main features.
    *   Use sections to provide further details or cover specific aspects of the project.

*   Detailed guides, technical documentation, and tutorials should be hosted externally (e.g., GitHub wikis or dedicated project websites), not on the modding project page itself. Short guides are acceptable if not too long. A rule of thumb is that if the guide requires multiple sections, it should be hosted externally.

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

Retrieved from "https://pzwiki.net/w/index.php?title=Modding_projects&oldid=1446693"

 Last modified 

*   6 days ago

Contents

Back to top

Contents

*   1 Rules

*   2 Navigation

Category: 
*   Modding

Hidden category: 
*   English

Last modified

 This page was last edited on 2 August 2026, at 13:22.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Modding projects From PZwiki

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
</https://pzwiki.net/wiki/Modding_projects>

<https://pzwiki.net/wiki/Modeling>
Title: Modeling - PZwiki

URL Source: https://pzwiki.net/wiki/Modeling

Published Time: Sat, 08 Aug 2026 11:26:35 GMT

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

# Modeling

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



This page was last updated for an _older_ version of the current build (42.14.0).

The current stable version is 42.20.2, so information on this page may be inaccurate.

Help get this page updated by adding any missing content. Edit (Create account)

**Modeling** is the process of creating 3D models using specialized software, to directly implement in-game in the form of items or vehicles, or to create renders. The most common software in the Project Zomboid community for any 3D work is Blender, but there are many others available.

It is possible to import game assets to use in your own project, see Importing assets.

## File types

The modeling formats which can be used are:

Modeling formats 
| Format | Description |
| --- | --- |
| Filmbox FBX (`.fbx`) | The most commonly used format for animations and models, and can be hot-reloaded in-game automatically when the file is updated. |
| Graphics Library Transmission Format (`.glb`) | A format which allows for animations to be stored in the model file, which can be useful for niche applications to animate clothing or tiles. |
| DirectX (`.x`) Not recommended | The format used for most vanilla game assets, but is widely unsupported in modern 3D software. It is highly recommended to not use this format for modding, as it can cause more issues than it solves, and there is no point to using it when the other formats are available and more widely supported. |

## See also

*   Animation - a guide on creating custom animations for the game.
*   Scripts - a guide on creating scripts to add new items, vehicles etc.
*   Importing assets - a guide on how to import in-game assets such as animations and models into Blender.

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

Retrieved from "https://pzwiki.net/w/index.php?title=Modeling&oldid=1443189"

 Last modified 

*   2 weeks ago

Contents

Back to top

Contents

*   1 File types

*   2 See also

*   3 Navigation

Categories: 
*   Modding
*   Modding guides

Hidden categories: 
*   English
*   Version 42.14.0

Last modified

 This page was last edited on 27 July 2026, at 22:08.

PZwiki

PZwiki is the official wiki dedicated to sharing information about Project Zomboid. It covers all content relating to its gameplay, lore, and development. This is an official site of The Indie Stone, and is maintained by volunteers.

Want to contribute? Start on the community portal. For copyright information, please see copyrights.

*   About PZwiki
*   Disclaimers
*   Terms & Conditions
*   Privacy Policy



*   

Modeling From PZwiki

Share this page Read View history View source Discussion

More actions

 More 

 Tools 

*   What links here alt ⇧ j
*   Related changes alt ⇧ k
*   Printable version alt ⇧ p; "Printable version of this page [alt-shift-p]")
*   Permanent link
*   Page information
</https://pzwiki.net/wiki/Modeling>