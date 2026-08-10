---
title: "option"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# option

Soft Override  
Unknown

Defines a custom sandbox option for a mod. You can find more information
about sandbox options [here](https://pzwiki.net/wiki/Sandbox_options).

## Hierarchy

This block can be a child of the following blocks:

- ROOT-SandboxOptions

## ID

This block can have an ID.

Optional  
False

Can have spaces  
False

## Parameters

#### default

Type  
Unknown

The default value of the option. The type of the value must match the
type of the option.

#### max

Type  
float

The maximum value the option can have. Only for integer and double
types.

#### min

Type  
float

The minimum value the option can have. Only for integer and double
types.

#### page

Type  
string

The sandbox option to add the option to. Can be a custom page.

#### translation

Type  
string

The translation key for the option's name. The translation key in the
[Sandbox](https://pz-wiki-modding.github.io/PZ-API-Docs/translations/translation_files.html#sandbox)
translation file should have the prefix `Sandbox_`.

For example, with the translation parameter as such:

``` java
translation = MyMod_MyOption
```

The translation key in the Sandbox translation file should be:

``` json
"Sandbox_MyMod_MyOption": "My Option"
```

#### type

Type  
string

Required  
True

Allowed values  
`boolean` \| `double` \| `enum` \| `integer` \| `string`

The type of the option.
