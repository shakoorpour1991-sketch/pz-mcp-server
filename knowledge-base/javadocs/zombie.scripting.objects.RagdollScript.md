---
title: zombie.scripting.objects.RagdollScript
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.scripting.objects
---

# zombie.scripting.objects.RagdollScript

`public final class RagdollScript extends BaseScriptObject`

**Kind:** class · **Package:** zombie.scripting.objects

## Inheritance
- java.lang.Object
- zombie.scripting.objects.BaseScriptObject
- zombie.scripting.objects.RagdollScript

## Fields

### public static final int NumberOfRagdollBodyDynamics

## Constructors

### public RagdollScript()

## Methods

### public static ArrayList<RagdollConstraint> getRagdollConstraintList()

**Returns:** `ArrayList<RagdollConstraint>`

### public static ArrayList<RagdollAnchor> getRagdollAnchorList()

**Returns:** `ArrayList<RagdollAnchor>`

### public static ArrayList<RagdollBodyPartInfo> getRagdollBodyPartInfoList()

**Returns:** `ArrayList<RagdollBodyPartInfo>`

### public static ArrayList<RagdollBodyDynamics> getRagdollBodyDynamicsList()

**Returns:** `ArrayList<RagdollBodyDynamics>`

### public void InitLoadPP(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static void toBullet(boolean liveUpdate)

**Parameters:**
- `boolean` `liveUpdate`

**Returns:** `void`

### public void Load(String name,
String totalFile)
throws Exception

**Parameters:**
- `String` `name`
- `String` `totalFile`

**Returns:** `void`

### public static void resetConstraintsToDefaultValues()

**Returns:** `void`

### public static void resetAnchorsToDefaultValues()

**Returns:** `void`

### public static void resetBodyPartInfoToDefaultValues()

**Returns:** `void`

### public static void resetBodyDynamicsToDefaultValues()

**Returns:** `void`

### public void loadBodyDynamics(ScriptParser.Block block)

**Parameters:**
- `ScriptParser.Block` `block`

**Returns:** `void`

### public static void uploadConstraints(boolean liveUpdate)

**Parameters:**
- `boolean` `liveUpdate`

**Returns:** `void`

### public static void uploadBodyPartInfo(boolean liveUpdate)

**Parameters:**
- `boolean` `liveUpdate`

**Returns:** `void`

### public static void uploadAnchors(boolean liveUpdate)

**Parameters:**
- `boolean` `liveUpdate`

**Returns:** `void`

### public static void uploadBodyDynamics(boolean liveUpdate)

**Parameters:**
- `boolean` `liveUpdate`

**Returns:** `void`

### public static void writeConstraintsToFile()

**Returns:** `void`

### public static void writeAnchorsToFile()

**Returns:** `void`

### public static void writeBodyPartInfoToFile()

**Returns:** `void`

### public static void writeBodyDynamicsToFile()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\scripting\objects\RagdollScript.html`*
