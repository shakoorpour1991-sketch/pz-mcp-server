---
title: "PZ GUID - Build 42"
source: "PZwiki (cleaned)"
build: '42.20'
tags: [pz, modding, build42]
---

# GUID - Build 42

*Source: PZwiki — https://pzwiki.net/wiki/GUID*

A GUID is a 128-bit number used to uniquely identify information in computer systems. In Project Zomboid, it is more commonly used in different systems such as the clothing and outfits.

These unique IDs generation relies on the principle that it is statistically improbable for the same number to be generated twice, which makes it suitable to add identifiers to objects without being aware of other existing identifiers. This principle is directly applicable to modding where different mods may add new clothing items or outfits without being dependent on each other.

Technically, Project Zomboid doesn't verify the GUIDs follow the format of a proper GUID, it only checks the number of characters. This means you can have a GUID with your own name, mod name etc to make it properly unique as long as it respects the character count.

In practice GUIDs aren't actually good nor useful in their current usage in Project Zomboid modding because items and other various object definitions rely on simple text based identifiers chosen by modders, even clothing items themselves, so clashes can still happen easily if modders don't rely on technics to create identifiers for their objects.

## GUID generators

Various GUID generators are available online, here are some examples:

* https://www.guidgenerator.com/
* https://www.uuidgenerator.net/guid
