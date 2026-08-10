---
title: "mannequin"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# mannequin

Soft Override  
Unknown

Used to define [mannequins](https://pzwiki.net/wiki/Mannequin), which
can be used in [mapping](https://pzwiki.net/wiki/Mapping) to create
mannequins in the world.

To get a list of available mannequins, see
[this](https://pzwiki.net/wiki/Mannequin_(scripts)\#Available_mannequins).

## Hierarchy

This block can be a child of the following blocks:

- [module](./module.md)

## ID

This block can have an ID.

Optional  
False

Can have spaces  
False

## Parameters

#### animSet

Type  
string

[animSet](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/model.html#mannequin-animset)
defines the [AnimSet](https://pzwiki.net/wiki/AnimSet) used by the
mannequin, which you probably should keep as `mannequin`.
[animState](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/model.html#mannequin-animstate)
will set the [AnimState](https://pzwiki.net/wiki/AnimState) used in the
provided animSet. The
[pose](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/model.html#mannequin-pose)
parameter will set the [AnimNode](https://pzwiki.net/wiki/AnimNode) used
by the mannequin, so the file inside the animState.

For example, take the vanilla mannequin AnimSets:

``` 
📁 media
  📁 AnimSets
    📁 mannequin
      📁 female
        📄 pose01.xml
        📄 pose02.xml
        📄 pose03.xml
      📁 male
        📄 pose01.xml
        📄 pose02.xml
        📄 pose03.xml
      📁 scarecrow
        📄 pose01.xml
      📁 skeleton
        📄 pose01.xml
```

If we want to use the AnimState `female` and AnimNode `pose01.xml`, we
need the following parameter combination:

``` cpp
animNode=mannequin,
animState=female,
pose=pose01,
```

#### animState

Type  
string

See parameter animSet.

#### female

Type  
boolean

Default  
`True`

Set to `true` to mark the mannequin as female, which wil change its body
type.

#### model

Type  
block (block: [model](./model.md))

The
[model](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/model.html)
used by the mannequin. Some of the models available are:

- FemaleBody
- MaleBody
- Mannequin_Scarecrow
- Mannequin_Skeleton

By combining it with the
[texture](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/model.html#mannequin-texture)
parameter, you can create a variety of mannequin appearances.

#### outfit

Type  
string

Can be empty  
True

The outfit used by the mannequin.

#### pose

Type  
string

See parameter animSet.

#### texture

Type  
string

Used to chose the texture that will be rendered on the mannequin model.
The texture needs to be in the `media/textures/body` folder.
