---
title: zombie.core.skinnedmodel.DeadBodyAtlas.BodyParams
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel
---

# zombie.core.skinnedmodel.DeadBodyAtlas.BodyParams

`public static final class DeadBodyAtlas.BodyParams extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.DeadBodyAtlas.BodyParams

## Fields

### public BaseVisual baseVisual

### public final ItemVisuals itemVisuals

### public IsoDirections dir

### public float angle

### public boolean female

### public boolean zombie

### public boolean skeleton

### public String animSetName

### public String stateName

### public final HashMap<String,String> variables

### public boolean standing

### public String primaryHandItem

### public String secondaryHandItem

### public final AttachedModelNames attachedModelNames

### public float x

### public float y

### public float z

### public float trackTime

### public boolean outside

### public boolean room

### public final ColorInfo ambient

### public boolean fallOnFront

### public boolean killedByFall

### public final IsoGridSquare.ResultLight[] lights

### public IGrappleable grappleable

### public TwistableBoneTransform[] diedBoneTransforms

## Constructors

### public BodyParams()

## Methods

### public void init(DeadBodyAtlas.BodyParams body)

**Parameters:**
- `DeadBodyAtlas.BodyParams` `body`

**Returns:** `void`

### public void init(IsoDeadBody body)

**Parameters:**
- `IsoDeadBody` `body`

**Returns:** `void`

### public void init(IsoZombie body)

**Parameters:**
- `IsoZombie` `body`

**Returns:** `void`

### public void init(IsoMannequin body)

**Parameters:**
- `IsoMannequin` `body`

**Returns:** `void`

### public void init(IHumanVisual iHumanVisual,
IsoDirections dir,
String animSet,
String stateName,
float trackTime)

**Parameters:**
- `IHumanVisual` `iHumanVisual`
- `IsoDirections` `dir`
- `String` `animSet`
- `String` `stateName`
- `float` `trackTime`

**Returns:** `void`

### public void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\DeadBodyAtlas.BodyParams.html`*
