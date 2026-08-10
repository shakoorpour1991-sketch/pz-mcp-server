---
title: "ROOT-MapInfo"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# ROOT-MapInfo

Soft Override  
Unknown

Is Root  
True

No comma  
True

Root patterns  
`media\/maps\/[\s\S]+\/map\.info$`

The `map.info` file is used to define the map's information. It is used
by the game to display the map in the map selection screen and to load
the map into the world. It needs to be located in:

``` 
📁 media
    📁maps
        📁 <map folder>
            📄 map.info
```

## ID

This block should have no ID.

## Parameters

#### demoVideo

Type  
Unknown

[Video file](https://pzwiki.net/wiki/File_formats#Video_format) used to
showcase the map when selecting it.

#### description

Type  
Unknown

Description of the map.

#### fixed2x

Type  
Unknown

Boolean which fixes rendering issues. Leave it as `true` if you are not
sure.

#### lots

Type  
Unknown

Refers to the world map the map will be loaded into. For a map which is
inside the vanilla world map, use `lots=Muldraugh, KY`.

#### title

Type  
Unknown

Title of the map.

#### zoomS

Type  
Unknown

Zoom parameter used to define the position of the camera on the world
map when chosing the map to spawn in.

#### zoomX

Type  
Unknown

Position parameter used to define the position of the camera on the
world map when chosing the map to spawn in.

#### zoomY

Type  
Unknown

Position parameter used to define the position of the camera on the
world map when chosing the map to spawn in.
