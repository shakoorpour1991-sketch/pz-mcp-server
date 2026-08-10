---
title: zombie.entity.components.combat.Durability
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.combat
---

# zombie.entity.components.combat.Durability

`public class Durability extends Component`

**Kind:** class · **Package:** zombie.entity.components.combat

## Inheritance
- java.lang.Object
- zombie.entity.Component
- zombie.entity.components.combat.Durability

## Methods

### public void save(ByteBuffer output)
throws IOException

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public MaterialType getMaterial()

**Returns:** `MaterialType`

### public void setMaterial(MaterialType material)

**Parameters:**
- `MaterialType` `material`

**Returns:** `void`

### public float getCurrentHitPoints()

**Returns:** `float`

### public void setCurrentHitPoints(float hitPoints)

**Parameters:**
- `float` `hitPoints`

**Returns:** `void`

### public void DoTooltip(ObjectTooltip tooltipUI,
ObjectTooltip.Layout layout)

**Parameters:**
- `ObjectTooltip` `tooltipUI`
- `ObjectTooltip.Layout` `layout`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\combat\Durability.html`*
