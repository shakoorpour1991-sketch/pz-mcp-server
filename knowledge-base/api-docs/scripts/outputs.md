---
title: "outputs"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# outputs

Soft Override  
False

The `outputs` block defines the items that will be created when the
recipe is finished. Outputs are listed one after the other and follow
the format below:

``` cpp
outputs
{

    /* simple item output */
    item quantity item,

    /* using mappers */
    item quantity mapper:mapperID,

    ...
}
```

For example:

``` cpp
outputs
{
    item 1 Base.Tissue,
    item 1 Base.ScratchTicket,
}
```

## Hierarchy

This block can be a child of the following blocks:

- [craftRecipe](./craftrecipe.md)

## ID

This block should have no ID.

## Parameters

This block has no parameters.
