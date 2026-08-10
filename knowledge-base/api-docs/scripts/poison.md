---
title: "Poison"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# Poison

Soft Override  
Unknown

Defines poison properties for a fluid script.

## Hierarchy

This block can be a child of the following blocks:

- [fluid](./fluid.md)

## ID

This block should have no ID.

## Parameters

#### diluteRatio

Type  
float

The ratio at which the poison is diluted when mixed with other fluids.

#### maxEffect

Type  
string

Allowed values  
`Deadly` \| `Extreme` \| `Medium` \| `Mild` \| `None` \| `Severe`

Defines the strength of the poison.

#### minAmount

Type  
float

The minimum amount required to consume to poison the player.
