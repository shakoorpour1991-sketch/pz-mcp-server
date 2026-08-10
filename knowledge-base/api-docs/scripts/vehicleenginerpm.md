---
title: "vehicleEngineRPM"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# vehicleEngineRPM

Soft Override  
Unknown

Unclear how the definition of this block works.

Here's the jeep example from the base game:

``` cpp
module Base 
{
  vehicleEngineRPM jeep
  {
      VERSION = 1,
      data
      {
          gearChange = 3000,
          afterGearChange = 2000,
      }
      data
      {
          gearChange = 3500,
          afterGearChange = 2000,
      }
      data
      {
          gearChange = 4000,
          afterGearChange = 2500,
      }
      data
      {
          gearChange = 4500,
          afterGearChange = 2800,
      }
      data
      {
          gearChange = 6000,
          afterGearChange = 4500,
      }
  }
}
```

## Hierarchy

This block can be a child of the following blocks:

- [module](./module.md)

This block can have the following child blocks:

- [data](./data.md)

## ID

This block can have an ID.

Optional  
False

Can have spaces  
False

## Parameters

#### VERSION

Type  
integer

Unclear what this does, preferably keep it at 1.
