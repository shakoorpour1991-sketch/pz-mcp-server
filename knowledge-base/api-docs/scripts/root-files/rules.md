---
title: "ROOT-Rules"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# ROOT-Rules

Soft Override  
Unknown

Is Root  
True

Root patterns  
`Rules\.txt$`

The `Rules.txt` file is used in the [mapping
tools](https://pzwiki.net/wiki/Mapping#Mapping_tools) to define new [BMP
to TMX](https://pzwiki.net/wiki/BMP_to_TMX) conversion rules. You can
store this file anywhere on your computer and you need to reference it
in the BMP Tool settings.

A reference image containing the exact pixel colors you need to use for
your BMP can be found
[here](https://github.com/Unofficial-PZ-Mapping-Discord/B42-Colors/tree/main).

## Hierarchy

This block can have the following child blocks:

- [rule](../rule.md)
- [alias](../alias.md)

## ID

This block should have no ID.

## Parameters

#### version

Type  
integer

Version of the rules file. Should be 1 for now.
