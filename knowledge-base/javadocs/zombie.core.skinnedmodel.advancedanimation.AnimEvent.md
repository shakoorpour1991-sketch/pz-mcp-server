---
title: zombie.core.skinnedmodel.advancedanimation.AnimEvent
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.advancedanimation
---

# zombie.core.skinnedmodel.advancedanimation.AnimEvent

`public class AnimEvent extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.advancedanimation

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.advancedanimation.AnimEvent

## Description

class AnimEvent
Used to set a game variable from an animation node.

eg. Set a sword's collision box to Active during a swing animation,
then Inactive once swing is done.

Holds a time, name, and value
The time is measured as a fraction of the animation's time.
This means that scaling an animation's speed scales the Events as well.

## Fields

### public String eventName

### public AnimEvent.AnimEventTime time

### public float timePc

### public String parameterValue

### public AnimNode parentAnimNode

## Constructors

### public AnimEvent()

### public AnimEvent(AnimEvent src)

**Parameters:**
- `AnimEvent` `src`

## Methods

### public String toString()

**Returns:** `String`

### public String toDetailsString()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\advancedanimation\AnimEvent.html`*
