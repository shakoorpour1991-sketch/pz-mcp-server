---
title: "PZ Animation - Build 42"
source: "PZwiki (cleaned)"
build: '42.20'
tags: [pz, modding, build42]
---

# Animation - Build 42

*Source: PZwiki — https://pzwiki.net/wiki/Animation*

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

* Creating custom animations – a step-by-step guide on how to create animations.
* Game files – accessing game files, including animations.
* Mod structure – explanation of the structure of a mod.
* Importing assets - a guide on how to import in-game assets such as animations and models into Blender.

External tutorials 
| Tutorial | Description | Author | Last updated |
| --- | --- | --- | --- |
| How To Create an Animation | A guide on how to create an animation for Project Zomboid. | Dislaik | 2023 October 2 |
