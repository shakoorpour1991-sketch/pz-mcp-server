---
title: zombie.characters.NetworkCharacter
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.NetworkCharacter

`public class NetworkCharacter extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.NetworkCharacter

## Fields

### public final NetworkCharacter.Transform transform

## Constructors

### public NetworkCharacter()

## Methods

### public void updateTransform(float px,
float py,
float rx,
float ry)

**Parameters:**
- `float` `px`
- `float` `py`
- `float` `rx`
- `float` `ry`

**Returns:** `void`

### public void updateInterpolationPoint(int t,
float px,
float py,
float rx,
float ry)

**Parameters:**
- `int` `t`
- `float` `px`
- `float` `py`
- `float` `rx`
- `float` `ry`

**Returns:** `void`

### public void updatePointInternal(float px,
float py,
float rx,
float ry)

**Parameters:**
- `float` `px`
- `float` `py`
- `float` `rx`
- `float` `ry`

**Returns:** `void`

### public void updateExtrapolationPoint(int t,
float px,
float py,
float rx,
float ry)

**Parameters:**
- `int` `t`
- `float` `px`
- `float` `py`
- `float` `rx`
- `float` `ry`

**Returns:** `void`

### public NetworkCharacter.Transform predict(int dt,
int t,
float px,
float py,
float rx,
float ry)

**Parameters:**
- `int` `dt`
- `int` `t`
- `float` `px`
- `float` `py`
- `float` `rx`
- `float` `ry`

**Returns:** `NetworkCharacter.Transform`

### public NetworkCharacter.Transform reconstruct(int t,
float px,
float py,
float rx,
float ry)

**Parameters:**
- `int` `t`
- `float` `px`
- `float` `py`
- `float` `rx`
- `float` `ry`

**Returns:** `NetworkCharacter.Transform`

### public void checkReset(int t)

**Parameters:**
- `int` `t`

**Returns:** `void`

### public void checkResetPlayer(int t)

**Parameters:**
- `int` `t`

**Returns:** `void`

### public void reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\NetworkCharacter.html`*
