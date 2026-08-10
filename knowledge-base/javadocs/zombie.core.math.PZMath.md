---
title: zombie.core.math.PZMath
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.math
---

# zombie.core.math.PZMath

`public final class PZMath extends Object`

**Kind:** class · **Package:** zombie.core.math

## Inheritance
- java.lang.Object
- zombie.core.math.PZMath

## Fields

### public static final float PI

The double value that is closer than any other to
pi, the ratio of the circumference of a circle to its
diameter.

### public static final float PI2

### public static final float halfPI

### public static final float degToRads

Conversion ratios, Degrees to Radians and back

### public static final float radToDegs

### public static final long microsToNanos

### public static final long millisToMicros

### public static final long secondsToMillis

### public static long secondsToNanos

## Constructors

### public PZMath()

## Methods

### public static float almostUnitIdentity(float x)

Almost Unit Identity

This is a near-identiy function that maps the unit interval into itself. It is the cousin of smoothstep(), in
that it maps 0 to 0, 1 to 1, and has a 0 derivative at the origin, just like smoothstep. However, instead of
having a 0 derivative at 1, it has a derivative of 1 at that point. It's equivalent to the Almost Identiy above
with n=0 and m=1. Since it's a cubic just like smoothstep() it is very fast to evaluate.

https://iquilezles.org/www/articles/functions/functions.htm

**Parameters:**
- `float` `x` — value in [0..1]

**Returns:** `float`

### public static float almostIdentity(float x,
float m,
float n)

Almost Identity

Imagine you don't want to modify a signal unless it's drops to zero or close to it, in which case you want
to replace the value with a small possitive constant. Then, rather than clamping the value and introduce
a discontinuity, you can smoothly blend the signal into the desired clipped value. So, let m be the threshold
(anything above m stays unchanged), and n the value things will take when the signal is zero.
Then, the following function does the soft clipping (in a cubic fashion):

https://iquilezles.org/www/articles/functions/functions.htm

**Parameters:**
- `float` `x` — value in [0..1]
- `float` `m`
- `float` `n`

**Returns:** `float`

### public static float gain(float x,
float k)

Gain

Remapping the unit interval into the unit interval by expanding the sides and compressing the center, and
keeping 1/2 mapped to 1/2, that can be done with the gain() function. This was a common function in RSL tutorials
(the Renderman Shading Language). k=1 is the identity curve, kinvalid input: '<'1 produces the classic gain() shape, and k>1
produces "s" shaped curces. The curves are symmetric (and inverse) for k=a and k=1/a.

https://iquilezles.org/www/articles/functions/functions.htm

**Parameters:**
- `float` `x`
- `float` `k`

**Returns:** `float`

### public static float clamp(float val,
float min,
float max)

Result is clamped between min and max.

**Parameters:**
- `float` `val`
- `float` `min`
- `float` `max`

**Returns:** `float`

### public static long clamp(long val,
long min,
long max)

**Parameters:**
- `long` `val`
- `long` `min`
- `long` `max`

**Returns:** `long`

### public static int clamp(int val,
int min,
int max)

Result is clamped between min and max.

**Parameters:**
- `int` `val`
- `int` `min`
- `int` `max`

**Returns:** `int`

### public static double clamp(double val,
double min,
double max)

**Parameters:**
- `double` `val`
- `double` `min`
- `double` `max`

**Returns:** `double`

### public static float clampFloat(float val,
float min,
float max)

**Parameters:**
- `float` `val`
- `float` `min`
- `float` `max`

**Returns:** `float`

### public static float clamp_01(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static double clampDouble_01(double val)

**Parameters:**
- `double` `val`

**Returns:** `double`

### public static org.lwjgl.util.vector.Quaternion setFromAxisAngle(float ax,
float ay,
float az,
float angleRadians,
org.lwjgl.util.vector.Quaternion result)

**Parameters:**
- `float` `ax`
- `float` `ay`
- `float` `az`
- `float` `angleRadians`
- `org.lwjgl.util.vector.Quaternion` `result`

**Returns:** `org.lwjgl.util.vector.Quaternion`

### public static float lerp(float src,
float dest,
float alpha)

**Parameters:**
- `float` `src`
- `float` `dest`
- `float` `alpha`

**Returns:** `float`

### public static float lerp(float src,
float dest,
float alpha,
LerpType lerpType)

**Parameters:**
- `float` `src`
- `float` `dest`
- `float` `alpha`
- `LerpType` `lerpType`

**Returns:** `float`

### public static float lerpAngle(float src,
float dest,
float alpha)

**Parameters:**
- `float` `src`
- `float` `dest`
- `float` `alpha`

**Returns:** `float`

### public static org.lwjgl.util.vector.Vector3f lerp(org.lwjgl.util.vector.Vector3f out,
org.lwjgl.util.vector.Vector3f a,
org.lwjgl.util.vector.Vector3f b,
float t)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `out`
- `org.lwjgl.util.vector.Vector3f` `a`
- `org.lwjgl.util.vector.Vector3f` `b`
- `float` `t`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static Vector3 lerp(Vector3 out,
Vector3 a,
Vector3 b,
float t)

**Parameters:**
- `Vector3` `out`
- `Vector3` `a`
- `Vector3` `b`
- `float` `t`

**Returns:** `Vector3`

### public static Vector2 lerp(Vector2 out,
Vector2 a,
Vector2 b,
float t)

**Parameters:**
- `Vector2` `out`
- `Vector2` `a`
- `Vector2` `b`
- `float` `t`

**Returns:** `Vector2`

### public static float c_lerp(float src,
float dest,
float alpha)

**Parameters:**
- `float` `src`
- `float` `dest`
- `float` `alpha`

**Returns:** `float`

### public static org.lwjgl.util.vector.Quaternion slerp(org.lwjgl.util.vector.Quaternion result,
org.lwjgl.util.vector.Quaternion from,
org.lwjgl.util.vector.Quaternion to,
float alpha)

**Parameters:**
- `org.lwjgl.util.vector.Quaternion` `result`
- `org.lwjgl.util.vector.Quaternion` `from`
- `org.lwjgl.util.vector.Quaternion` `to`
- `float` `alpha`

**Returns:** `org.lwjgl.util.vector.Quaternion`

### public static float sqrt(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static float lerpFunc_EaseOutQuad(float x)

**Parameters:**
- `float` `x`

**Returns:** `float`

### public static float lerpFunc_EaseInQuad(float x)

**Parameters:**
- `float` `x`

**Returns:** `float`

### public static float lerpFunc_EaseOutInQuad(float x)

**Parameters:**
- `float` `x`

**Returns:** `float`

### public static double tryParseDouble(String varStr,
double defaultVal)

**Parameters:**
- `String` `varStr`
- `double` `defaultVal`

**Returns:** `double`

### public static float tryParseFloat(String varStr,
float defaultVal)

**Parameters:**
- `String` `varStr`
- `float` `defaultVal`

**Returns:** `float`

### public static boolean canParseFloat(String varStr)

**Parameters:**
- `String` `varStr`

**Returns:** `boolean`

### public static int tryParseInt(String varStr,
int defaultVal)

**Parameters:**
- `String` `varStr`
- `int` `defaultVal`

**Returns:** `int`

### public static float pow(float a,
float b)

**Parameters:**
- `float` `a`
- `float` `b`

**Returns:** `float`

### public static float squared(float a)

**Parameters:**
- `float` `a`

**Returns:** `float`

### public static float degToRad(float degrees)

**Parameters:**
- `float` `degrees`

**Returns:** `float`

### public static float radToDeg(float radians)

**Parameters:**
- `float` `radians`

**Returns:** `float`

### public static float getClosestAngle(float radsA,
float radsB)

**Parameters:**
- `float` `radsA`
- `float` `radsB`

**Returns:** `float`

### public static float getClosestAngleDegrees(float degsA,
float degsB)

**Parameters:**
- `float` `degsA`
- `float` `degsB`

**Returns:** `float`

### public static int sign(float val)

**Parameters:**
- `float` `val`

**Returns:** `int`

### public static int fastfloor(double val)

**Parameters:**
- `double` `val`

**Returns:** `int`

### public static int fastfloor(float val)

**Parameters:**
- `float` `val`

**Returns:** `int`

### public static int coorddivision(int value,
int divisor)

**Parameters:**
- `int` `value`
- `int` `divisor`

**Returns:** `int`

### public static int coordmodulo(int value,
int divisor)

**Parameters:**
- `int` `value`
- `int` `divisor`

**Returns:** `int`

### public static float coordmodulof(float value,
int divisor)

**Parameters:**
- `float` `value`
- `int` `divisor`

**Returns:** `float`

### public static float floor(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static double floor(double val)

**Parameters:**
- `double` `val`

**Returns:** `double`

### public static float ceil(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static float frac(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static float wrap(float val,
float range)

**Parameters:**
- `float` `val`
- `float` `range`

**Returns:** `float`

### public static float wrap(float val,
float min,
float max)

**Parameters:**
- `float` `val`
- `float` `min`
- `float` `max`

**Returns:** `float`

### public static float max(float a,
float b)

**Parameters:**
- `float` `a`
- `float` `b`

**Returns:** `float`

### public static float max(float a,
float b,
float c)

**Parameters:**
- `float` `a`
- `float` `b`
- `float` `c`

**Returns:** `float`

### public static float max(float a,
float b,
float c,
float d)

**Parameters:**
- `float` `a`
- `float` `b`
- `float` `c`
- `float` `d`

**Returns:** `float`

### public static float max(float a,
float b,
float c,
float d,
float e)

**Parameters:**
- `float` `a`
- `float` `b`
- `float` `c`
- `float` `d`
- `float` `e`

**Returns:** `float`

### public static int max(int a,
int b)

**Parameters:**
- `int` `a`
- `int` `b`

**Returns:** `int`

### public static int max(int a,
int b,
int c)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `int`

### public static int max(int a,
int b,
int c,
int d)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`
- `int` `d`

**Returns:** `int`

### public static int max(int a,
int b,
int c,
int d,
int e)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`
- `int` `d`
- `int` `e`

**Returns:** `int`

### public static float min(float a,
float b)

**Parameters:**
- `float` `a`
- `float` `b`

**Returns:** `float`

### public static float min(float a,
float b,
float c)

**Parameters:**
- `float` `a`
- `float` `b`
- `float` `c`

**Returns:** `float`

### public static float min(float a,
float b,
float c,
float d)

**Parameters:**
- `float` `a`
- `float` `b`
- `float` `c`
- `float` `d`

**Returns:** `float`

### public static float min(float a,
float b,
float c,
float d,
float e)

**Parameters:**
- `float` `a`
- `float` `b`
- `float` `c`
- `float` `d`
- `float` `e`

**Returns:** `float`

### public static int min(int a,
int b)

**Parameters:**
- `int` `a`
- `int` `b`

**Returns:** `int`

### public static int min(int a,
int b,
int c)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`

**Returns:** `int`

### public static int min(int a,
int b,
int c,
int d)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`
- `int` `d`

**Returns:** `int`

### public static int min(int a,
int b,
int c,
int d,
int e)

**Parameters:**
- `int` `a`
- `int` `b`
- `int` `c`
- `int` `d`
- `int` `e`

**Returns:** `int`

### public static float abs(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static int abs(int val)

**Parameters:**
- `int` `val`

**Returns:** `int`

### public static boolean equal(float a,
float b)

**Parameters:**
- `float` `a`
- `float` `b`

**Returns:** `boolean`

### public static boolean equal(float a,
float b,
float delta)

**Parameters:**
- `float` `a`
- `float` `b`
- `float` `delta`

**Returns:** `boolean`

### public static org.lwjgl.util.vector.Matrix4f convertMatrix(org.joml.Matrix4f src,
org.lwjgl.util.vector.Matrix4f dst)

**Parameters:**
- `org.joml.Matrix4f` `src`
- `org.lwjgl.util.vector.Matrix4f` `dst`

**Returns:** `org.lwjgl.util.vector.Matrix4f`

### public static org.joml.Matrix4f convertMatrix(org.lwjgl.util.vector.Matrix4f src,
org.joml.Matrix4f dst)

**Parameters:**
- `org.lwjgl.util.vector.Matrix4f` `src`
- `org.joml.Matrix4f` `dst`

**Returns:** `org.joml.Matrix4f`

### public static float step(float from,
float to,
float delta)

**Parameters:**
- `float` `from`
- `float` `to`
- `float` `delta`

**Returns:** `float`

### public static float angleBetween(Vector2 va,
Vector2 vb)

**Parameters:**
- `Vector2` `va`
- `Vector2` `vb`

**Returns:** `float`

### public static float angleBetween(float ax,
float ay,
float bx,
float by)

**Parameters:**
- `float` `ax`
- `float` `ay`
- `float` `bx`
- `float` `by`

**Returns:** `float`

### public static float angleBetweenNormalized(float ax,
float bx,
float ay,
float by)

**Parameters:**
- `float` `ax`
- `float` `bx`
- `float` `ay`
- `float` `by`

**Returns:** `float`

### public static float acosf(float a)

**Parameters:**
- `float` `a`

**Returns:** `float`

### public static float calculateBearing(Vector3 fromPosition,
Vector2 fromForward,
Vector3 toPosition)

**Parameters:**
- `Vector3` `fromPosition`
- `Vector2` `fromForward`
- `Vector3` `toPosition`

**Returns:** `float`

### public static org.lwjgl.util.vector.Vector3f rotateVector(org.lwjgl.util.vector.Vector3f vector,
org.lwjgl.util.vector.Quaternion quaternion,
org.lwjgl.util.vector.Vector3f result)

**Parameters:**
- `org.lwjgl.util.vector.Vector3f` `vector`
- `org.lwjgl.util.vector.Quaternion` `quaternion`
- `org.lwjgl.util.vector.Vector3f` `result`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static org.lwjgl.util.vector.Vector3f rotateVector(float vx,
float vy,
float vz,
float qx,
float qy,
float qz,
float qw,
org.lwjgl.util.vector.Vector3f result)

**Parameters:**
- `float` `vx`
- `float` `vy`
- `float` `vz`
- `float` `qx`
- `float` `qy`
- `float` `qz`
- `float` `qw`
- `org.lwjgl.util.vector.Vector3f` `result`

**Returns:** `org.lwjgl.util.vector.Vector3f`

### public static Vector2 rotateVector(float vx,
float vy,
float qx,
float qy,
float qz,
float qw,
Vector2 result)

**Parameters:**
- `float` `vx`
- `float` `vy`
- `float` `qx`
- `float` `qy`
- `float` `qz`
- `float` `qw`
- `Vector2` `result`

**Returns:** `Vector2`

### public static Vector3 cross(Vector3 a,
Vector3 b,
Vector3 out)

**Parameters:**
- `Vector3` `a`
- `Vector3` `b`
- `Vector3` `out`

**Returns:** `Vector3`

### public static float getLength(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `float`

### public static float getLengthSq(float x,
float y)

**Parameters:**
- `float` `x`
- `float` `y`

**Returns:** `float`

### public static boolean isBetween(float value,
float min,
float max)

**Parameters:**
- `float` `value`
- `float` `min`
- `float` `max`

**Returns:** `boolean`

### public static boolean isNullOrZero(Vector2 vec)

**Parameters:**
- `Vector2` `vec`

**Returns:** `boolean`

### public static PZMath.SideOfLine testSideOfLine(float x1,
float y1,
float x2,
float y2,
float px,
float py)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `px`
- `float` `py`

**Returns:** `PZMath.SideOfLine`

### public static <E> void normalize(List<E> list,
PZMath.FloatGet<E> floatGet,
PZMath.FloatSet<E> floatSet)

**Returns:** `void`

### public static <E> void normalize(E[] list,
PZMath.FloatGet<E> floatGet,
PZMath.FloatSet<E> floatSet)

**Returns:** `void`

### public static float[] normalize(float[] weights)

**Parameters:**
- `float[]` `weights`

**Returns:** `float[]`

### public static ArrayList<Double> normalize(ArrayList<Double> list)

**Parameters:**
- `ArrayList<Double>` `list`

**Returns:** `ArrayList<Double>`

### public static float roundFloatPos(float number,
int scale)

**Parameters:**
- `float` `number`
- `int` `scale`

**Returns:** `float`

### public static float roundFloat(float value,
int scale)

**Parameters:**
- `float` `value`
- `int` `scale`

**Returns:** `float`

### public static int nextPowerOfTwo(int value)

**Parameters:**
- `int` `value`

**Returns:** `int`

### public static float roundToNearest(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static int roundToInt(float val)

**Parameters:**
- `float` `val`

**Returns:** `int`

### public static float roundToIntPlus05(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static float roundFromEdges(float val)

**Parameters:**
- `float` `val`

**Returns:** `float`

### public static Vector3 closestVector3(float lx0,
float ly0,
float lz0,
float lx1,
float ly1,
float lz1,
float x,
float y,
float z)

**Parameters:**
- `float` `lx0`
- `float` `ly0`
- `float` `lz0`
- `float` `lx1`
- `float` `ly1`
- `float` `lz1`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `Vector3`

### public static float isLeft(float x0,
float y0,
float x1,
float y1,
float x2,
float y2)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`

**Returns:** `float`

### public static boolean intersectLineSegments(float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
float x4,
float y4,
org.joml.Vector2f intersection)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `float` `x4`
- `float` `y4`
- `org.joml.Vector2f` `intersection`

**Returns:** `boolean`

### public static double closestPointOnLineSegment(float x1,
float y1,
float x2,
float y2,
float px,
float py,
double endpointSnapEpsilon,
org.joml.Vector2f out)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `px`
- `float` `py`
- `double` `endpointSnapEpsilon`
- `org.joml.Vector2f` `out`

**Returns:** `double`

### public static double closestPointsOnLineSegments(float x1,
float y1,
float x2,
float y2,
float x3,
float y3,
float x4,
float y4,
org.joml.Vector2f p1,
org.joml.Vector2f p2)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `float` `x3`
- `float` `y3`
- `float` `x4`
- `float` `y4`
- `org.joml.Vector2f` `p1`
- `org.joml.Vector2f` `p2`

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\math\PZMath.html`*
