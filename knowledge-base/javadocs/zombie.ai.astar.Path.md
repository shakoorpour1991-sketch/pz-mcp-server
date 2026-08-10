---
title: zombie.ai.astar.Path
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.ai.astar
---

# zombie.ai.astar.Path

`public class Path extends Object`

**Kind:** class · **Package:** zombie.ai.astar

## Inheritance
- java.lang.Object
- zombie.ai.astar.Path

## Description

A path determined by some path finding algorithm. A series of steps from
the starting location to the target location. This includes a step for the
initial location.

## Fields

### public float cost

### public static Stack<Path.Step> stepstore

## Constructors

### public Path()

## Methods

### public float costPerStep()

**Returns:** `float`

### public void appendStep(int x,
int y,
int z)

Append a step to the path.

**Parameters:**
- `int` `x` — The x coordinate of the new step
- `int` `y` — The y coordinate of the new step
- `int` `z`

**Returns:** `void`

### public boolean contains(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public int getLength()

get the length of the path, i.e. the number of steps

**Returns:** `int`

### public Path.Step getStep(int index)

get the step at a given index in the path

**Parameters:**
- `int` `index` — The index of the step to retrieve. Note this should
be >= 0 and invalid input: '<' getLength();

**Returns:** `Path.Step`

### public int getX(int index)

get the x coordinate for the step at the given index

**Parameters:**
- `int` `index` — The index of the step whose x coordinate should be retrieved

**Returns:** `int`

### public int getY(int index)

get the y coordinate for the step at the given index

**Parameters:**
- `int` `index` — The index of the step whose y coordinate should be retrieved

**Returns:** `int`

### public int getZ(int index)

**Parameters:**
- `int` `index`

**Returns:** `int`

### public static Path.Step createStep()

**Returns:** `Path.Step`

### public void prependStep(int x,
int y,
int z)

Prepend a step to the path.

**Parameters:**
- `int` `x` — The x coordinate of the new step
- `int` `y` — The y coordinate of the new step
- `int` `z`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ai\astar\Path.html`*
