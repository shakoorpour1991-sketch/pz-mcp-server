---
title: "mods"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# mods

Soft Override  
Unknown

A list of mods in the
[default.txt](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/root-default.html)
file. The [mod
ID](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/root-modinfo.html#root-modinfo-id)
should be used to reference the mods.

It should use the following syntax:

``` 
mods
{
  mod = mod1,
  mod = mod2,
  ...
}
```

## Hierarchy

This block can be a child of the following blocks:

- ROOT-Default

## ID

This block should have no ID.

## Parameters

#### mod

Type  
string

The mod ID of the mod to load, which can be found in the
[mod.info](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/root-modinfo.html)
file of the mod.
