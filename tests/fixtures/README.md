# Test fixture corpus (audit: real-world PZ fixtures)

A curated, shared corpus of representative Project Zomboid Build 42 scripts
used by parser/generator/validator tests. Each file is deliberately small and
namespaced (`Fixture*`) so fixtures can be parsed together without id
collisions.

## scripts/

| File | Content |
|---|---|
| `items.txt` | 2 items (weapon + clothing) with tags, metal value, icon, sound ref |
| `recipes.txt` | Legacy B41 recipe: module-qualified refs, `keep [...]` tool, skill req |
| `b42_craftrecipes.txt` | Build 42 `craftRecipe` with `inputs`/`outputs` sections + tag tool |
| `evolvedrecipes.txt` | Evolved recipe with `BaseItem` + `Ingredients` |
| `fixing.txt` | Fixing block with dotted material prefix + skill requirement |
| `sounds.txt` | Sound block |
| `vehicles.txt` | Vehicle block |
| `multiline_nested.txt` | Container-type block (`model`) that must NOT leak as an item |
| `malformed.txt` | Intentionally broken script — must not crash the parser |

## mods/example_mod/

A realistic minimal mod: `mod.info` + `media/scripts/mod_items.txt` with its
own module, a vanilla-module reference, and a recipe.

## Using the corpus

Tests copy the files they need into a temp mod layout (mod.info + media/scripts)
and run them through `ProjectZomboidParser.parseModDirectory` (see
`tests/fixtures.unit.test.js`). Add a new fixture here when covering a new
script shape — do not inline long scripts into test files.
