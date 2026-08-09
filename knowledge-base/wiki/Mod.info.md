---
title: "PZ mod.info - Build 42"
source: "PZwiki (cleaned)"
build: '42.20'
tags: [pz, modding, build42]
---

# mod.info - Build 42

*Source: PZwiki — https://pzwiki.net/wiki/mod.info*

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

* Game files
* Mod structure
* workshop.txt
