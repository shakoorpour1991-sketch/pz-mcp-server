---
title: "fileGuidTable"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, xml]
---

# fileGuidTable

Associate
[clothingItem](https://pz-wiki-modding.github.io/PZ-API-Docs/xml/clothingItem.html)
files to a GUID for access in the
[clothing](https://pz-wiki-modding.github.io/PZ-API-Docs/xml/clothing.html)
file. Whenever you want to use vanilla clothing in your clothing.xml
file, you have to redefine them in your own mod's fileGuidTable.xml
file, otherwise the game will not recognize them.

An example file would look like this:

``` xml
<?xml version="1.0" encoding="utf-8"?>
<fileGuidTable>
  <files>
    <path>media/clothing/clothingItems/MyClothingItem.xml</path>
    <guid>YOUR_RANDOM_CLOTHING_ITEM_GUID_HERE</guid>
  </files>
  <files>
    <path>media/clothing/clothingItems/MyOtherClothingItem.xml</path>
    <guid>YOUR_OTHER_RANDOM_CLOTHING_ITEM_GUID_HERE</guid>
  </files>
</fileGuidTable>
```

## File Patterns

The following file patterns are used to determine what the valid path
for the XML file can be, relative to the
[media](https://pzwiki.net/wiki/Mod_structure#Media_folder) folder.

- `**/media/fileGuidTable.xml`

## Root Details

Element  
fileGuidTable

The root element is the top-level XML element that contains all other
elements in the XML file.

Composition  
all

### Elements

#### files

Minimum occurence  
0

Maximum occurence  
unbounded

Type  
type_fileGuidTable_files

Define a
[clothingItem](https://pz-wiki-modding.github.io/PZ-API-Docs/xml/clothingItem.html)
file and GUID association.

For example for a clothingItem with the following file structure:

``` 
📁 media
  📁 clothing
    📁 clothingItems
      📄 MyClothingItem.xml
```

You should have the following parameters:

``` xml
<files>
  <path>media/clothing/clothingItems/MyClothingItem.xml</path>
  <guid>YOUR_RANDOM_CLOTHING_ITEM_GUID_HERE</guid>
</files>
```

## type_fileGuidTable_files

Composition  
all

### Elements

#### path

Minimum occurence  
1

Maximum occurence  
1

Type  
`xs:string`

The path to the
[clothingItem](https://pz-wiki-modding.github.io/PZ-API-Docs/xml/clothingItem.html)
file. This path is relative to the upper folder of `media`, for example
for the following structure:

``` 
📁 MyMod
  📁 media
    📁 clothing
      📁 clothingItems
        📄 MyClothingItem.xml
```

You need the following parameter:

``` xml
<path>media/clothing/clothingItems/MyClothingItem.xml</path>
```

#### guid

Minimum occurence  
1

Maximum occurence  
1

Type  
`xs:string`

The [GUID](https://pzwiki.net/wiki/GUID) of the clothing item. This
needs to be the same as the one inside the
[clothingItem](https://pz-wiki-modding.github.io/PZ-API-Docs/xml/clothingItem.html#m-guid)
file for the clothing item to be recognized by the game.
