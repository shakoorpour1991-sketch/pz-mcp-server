---
title: org.lwjglx.util.glu.GLU
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.util.glu
---

# org.lwjglx.util.glu.GLU

`public class GLU extends Object`

**Kind:** class · **Package:** org.lwjglx.util.glu

## Inheritance
- java.lang.Object
- org.lwjglx.util.glu.GLU

## Fields

### public static final int GLU_INVALID_ENUM

### public static final int GLU_INVALID_VALUE

### public static final int GLU_OUT_OF_MEMORY

### public static final int GLU_INCOMPATIBLE_GL_VERSION

### public static final int GLU_VERSION

### public static final int GLU_EXTENSIONS

### public static final boolean GLU_TRUE

### public static final boolean GLU_FALSE

### public static final int GLU_SMOOTH

### public static final int GLU_FLAT

### public static final int GLU_NONE

### public static final int GLU_POINT

### public static final int GLU_LINE

### public static final int GLU_FILL

### public static final int GLU_SILHOUETTE

### public static final int GLU_OUTSIDE

### public static final int GLU_INSIDE

### public static final double GLU_TESS_MAX_COORD

### public static final double TESS_MAX_COORD

### public static final int GLU_TESS_WINDING_RULE

### public static final int GLU_TESS_BOUNDARY_ONLY

### public static final int GLU_TESS_TOLERANCE

### public static final int GLU_TESS_WINDING_ODD

### public static final int GLU_TESS_WINDING_NONZERO

### public static final int GLU_TESS_WINDING_POSITIVE

### public static final int GLU_TESS_WINDING_NEGATIVE

### public static final int GLU_TESS_WINDING_ABS_GEQ_TWO

### public static final int GLU_TESS_BEGIN

### public static final int GLU_TESS_VERTEX

### public static final int GLU_TESS_END

### public static final int GLU_TESS_ERROR

### public static final int GLU_TESS_EDGE_FLAG

### public static final int GLU_TESS_COMBINE

### public static final int GLU_TESS_BEGIN_DATA

### public static final int GLU_TESS_VERTEX_DATA

### public static final int GLU_TESS_END_DATA

### public static final int GLU_TESS_ERROR_DATA

### public static final int GLU_TESS_EDGE_FLAG_DATA

### public static final int GLU_TESS_COMBINE_DATA

### public static final int GLU_TESS_ERROR1

### public static final int GLU_TESS_ERROR2

### public static final int GLU_TESS_ERROR3

### public static final int GLU_TESS_ERROR4

### public static final int GLU_TESS_ERROR5

### public static final int GLU_TESS_ERROR6

### public static final int GLU_TESS_ERROR7

### public static final int GLU_TESS_ERROR8

### public static final int GLU_TESS_MISSING_BEGIN_POLYGON

### public static final int GLU_TESS_MISSING_BEGIN_CONTOUR

### public static final int GLU_TESS_MISSING_END_POLYGON

### public static final int GLU_TESS_MISSING_END_CONTOUR

### public static final int GLU_TESS_COORD_TOO_LARGE

### public static final int GLU_TESS_NEED_COMBINE_CALLBACK

### public static final int GLU_AUTO_LOAD_MATRIX

### public static final int GLU_CULLING

### public static final int GLU_SAMPLING_TOLERANCE

### public static final int GLU_DISPLAY_MODE

### public static final int GLU_PARAMETRIC_TOLERANCE

### public static final int GLU_SAMPLING_METHOD

### public static final int GLU_U_STEP

### public static final int GLU_V_STEP

### public static final int GLU_PATH_LENGTH

### public static final int GLU_PARAMETRIC_ERROR

### public static final int GLU_DOMAIN_DISTANCE

### public static final int GLU_MAP1_TRIM_2

### public static final int GLU_MAP1_TRIM_3

### public static final int GLU_OUTLINE_POLYGON

### public static final int GLU_OUTLINE_PATCH

### public static final int GLU_NURBS_ERROR1

### public static final int GLU_NURBS_ERROR2

### public static final int GLU_NURBS_ERROR3

### public static final int GLU_NURBS_ERROR4

### public static final int GLU_NURBS_ERROR5

### public static final int GLU_NURBS_ERROR6

### public static final int GLU_NURBS_ERROR7

### public static final int GLU_NURBS_ERROR8

### public static final int GLU_NURBS_ERROR9

### public static final int GLU_NURBS_ERROR10

### public static final int GLU_NURBS_ERROR11

### public static final int GLU_NURBS_ERROR12

### public static final int GLU_NURBS_ERROR13

### public static final int GLU_NURBS_ERROR14

### public static final int GLU_NURBS_ERROR15

### public static final int GLU_NURBS_ERROR16

### public static final int GLU_NURBS_ERROR17

### public static final int GLU_NURBS_ERROR18

### public static final int GLU_NURBS_ERROR19

### public static final int GLU_NURBS_ERROR20

### public static final int GLU_NURBS_ERROR21

### public static final int GLU_NURBS_ERROR22

### public static final int GLU_NURBS_ERROR23

### public static final int GLU_NURBS_ERROR24

### public static final int GLU_NURBS_ERROR25

### public static final int GLU_NURBS_ERROR26

### public static final int GLU_NURBS_ERROR27

### public static final int GLU_NURBS_ERROR28

### public static final int GLU_NURBS_ERROR29

### public static final int GLU_NURBS_ERROR30

### public static final int GLU_NURBS_ERROR31

### public static final int GLU_NURBS_ERROR32

### public static final int GLU_NURBS_ERROR33

### public static final int GLU_NURBS_ERROR34

### public static final int GLU_NURBS_ERROR35

### public static final int GLU_NURBS_ERROR36

### public static final int GLU_NURBS_ERROR37

### public static final int GLU_CW

### public static final int GLU_CCW

### public static final int GLU_INTERIOR

### public static final int GLU_EXTERIOR

### public static final int GLU_UNKNOWN

### public static final int GLU_BEGIN

### public static final int GLU_VERTEX

### public static final int GLU_END

### public static final int GLU_ERROR

### public static final int GLU_EDGE_FLAG

## Constructors

### public GLU()

## Methods

### public static void gluLookAt(float float0,
float float1,
float float2,
float float3,
float float4,
float float5,
float float6,
float float7,
float float8)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`
- `float` `float4`
- `float` `float5`
- `float` `float6`
- `float` `float7`
- `float` `float8`

**Returns:** `void`

### public static void gluOrtho2D(float float0,
float float1,
float float2,
float float3)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`

**Returns:** `void`

### public static void gluPerspective(float float0,
float float1,
float float2,
float float3)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`

**Returns:** `void`

### public static boolean gluProject(float float0,
float float1,
float float2,
FloatBuffer floatBuffer0,
FloatBuffer floatBuffer1,
IntBuffer intBuffer,
FloatBuffer floatBuffer2)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `FloatBuffer` `floatBuffer0`
- `FloatBuffer` `floatBuffer1`
- `IntBuffer` `intBuffer`
- `FloatBuffer` `floatBuffer2`

**Returns:** `boolean`

### public static boolean gluUnProject(float float0,
float float1,
float float2,
FloatBuffer floatBuffer0,
FloatBuffer floatBuffer1,
IntBuffer intBuffer,
FloatBuffer floatBuffer2)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `FloatBuffer` `floatBuffer0`
- `FloatBuffer` `floatBuffer1`
- `IntBuffer` `intBuffer`
- `FloatBuffer` `floatBuffer2`

**Returns:** `boolean`

### public static void gluPickMatrix(float float0,
float float1,
float float2,
float float3,
IntBuffer intBuffer)

**Parameters:**
- `float` `float0`
- `float` `float1`
- `float` `float2`
- `float` `float3`
- `IntBuffer` `intBuffer`

**Returns:** `void`

### public static String gluGetString(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `String`

### public static boolean gluCheckExtension(String string0,
String string1)

**Parameters:**
- `String` `string0`
- `String` `string1`

**Returns:** `boolean`

### public static int gluBuild2DMipmaps(int int0,
int int1,
int int2,
int int3,
int int4,
int int5,
ByteBuffer byteBuffer)

**Parameters:**
- `int` `int0`
- `int` `int1`
- `int` `int2`
- `int` `int3`
- `int` `int4`
- `int` `int5`
- `ByteBuffer` `byteBuffer`

**Returns:** `int`

### public static int gluScaleImage(int int0,
int int1,
int int2,
int int3,
ByteBuffer byteBuffer0,
int int4,
int int5,
int int6,
ByteBuffer byteBuffer1)

**Parameters:**
- `int` `int0`
- `int` `int1`
- `int` `int2`
- `int` `int3`
- `ByteBuffer` `byteBuffer0`
- `int` `int4`
- `int` `int5`
- `int` `int6`
- `ByteBuffer` `byteBuffer1`

**Returns:** `int`

### public static String gluErrorString(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `String`

### public static GLUtessellator gluNewTess()

**Returns:** `GLUtessellator`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\util\glu\GLU.html`*
