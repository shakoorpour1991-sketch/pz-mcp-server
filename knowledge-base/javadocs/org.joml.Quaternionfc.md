---
title: org.joml.Quaternionfc
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: interface
package: org.joml
---

# org.joml.Quaternionfc

`public interface Quaternionfc`

**Kind:** interface · **Package:** org.joml

## Methods

### float x()

**Returns:** `float`

### float y()

**Returns:** `float`

### float z()

**Returns:** `float`

### float w()

**Returns:** `float`

### Quaternionf normalize(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### Quaternionf add(float arg0,
float arg1,
float arg2,
float arg3,
Quaternionf arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Quaternionf` `arg4`

**Returns:** `Quaternionf`

### Quaternionf add(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### float angle()

**Returns:** `float`

### Matrix3f get(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### Matrix3d get(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### Matrix4f get(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### Matrix4d get(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### Matrix4x3f get(Matrix4x3f arg0)

**Parameters:**
- `Matrix4x3f` `arg0`

**Returns:** `Matrix4x3f`

### Matrix4x3d get(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

### AxisAngle4f get(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `AxisAngle4f`

### AxisAngle4d get(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

**Returns:** `AxisAngle4d`

### Quaterniond get(Quaterniond arg0)

**Parameters:**
- `Quaterniond` `arg0`

**Returns:** `Quaterniond`

### Quaternionf get(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### ByteBuffer getAsMatrix3f(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### FloatBuffer getAsMatrix3f(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### ByteBuffer getAsMatrix4f(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### FloatBuffer getAsMatrix4f(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### ByteBuffer getAsMatrix4x3f(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### FloatBuffer getAsMatrix4x3f(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### Quaternionf mul(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf mul(float arg0,
float arg1,
float arg2,
float arg3,
Quaternionf arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Quaternionf` `arg4`

**Returns:** `Quaternionf`

### Quaternionf premul(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf premul(float arg0,
float arg1,
float arg2,
float arg3,
Quaternionf arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Quaternionf` `arg4`

**Returns:** `Quaternionf`

### Vector3f transform(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f transformInverse(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f transformUnit(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f transformPositiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector4f transformPositiveX(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector3f transformUnitPositiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector4f transformUnitPositiveX(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector3f transformPositiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector4f transformPositiveY(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector3f transformUnitPositiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector4f transformUnitPositiveY(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector3f transformPositiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector4f transformPositiveZ(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector3f transformUnitPositiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector4f transformUnitPositiveZ(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f transform(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f transformInverse(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector3f transform(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f transformInverse(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f transform(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3d transform(float arg0,
float arg1,
float arg2,
Vector3d arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector3f transformInverse(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3d transformInverse(float arg0,
float arg1,
float arg2,
Vector3d arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector3f transformInverseUnit(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f transformUnit(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f transformInverseUnit(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### Vector3f transformUnit(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3d transformUnit(float arg0,
float arg1,
float arg2,
Vector3d arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector3f transformInverseUnit(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### Vector3d transformInverseUnit(float arg0,
float arg1,
float arg2,
Vector3d arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector4f transform(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f transformInverse(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f transform(float arg0,
float arg1,
float arg2,
Vector4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### Vector4f transformInverse(float arg0,
float arg1,
float arg2,
Vector4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### Vector4f transformUnit(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f transformUnit(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f transformInverseUnit(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### Vector4f transformInverseUnit(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### Vector4f transformUnit(float arg0,
float arg1,
float arg2,
Vector4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### Vector4f transformInverseUnit(float arg0,
float arg1,
float arg2,
Vector4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### Vector3d transform(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d transformInverse(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector3d transformPositiveX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector4d transformPositiveX(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector3d transformUnitPositiveX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector4d transformUnitPositiveX(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector3d transformPositiveY(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector4d transformPositiveY(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector3d transformUnitPositiveY(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector4d transformUnitPositiveY(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector3d transformPositiveZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector4d transformPositiveZ(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector3d transformUnitPositiveZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### Vector4d transformUnitPositiveZ(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d transform(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d transformInverse(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector3d transform(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector3d transformInverse(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector3d transform(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector3d transformInverse(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector4d transform(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d transformInverse(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d transform(double arg0,
double arg1,
double arg2,
Vector4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4d` `arg3`

**Returns:** `Vector4d`

### Vector4d transformInverse(double arg0,
double arg1,
double arg2,
Vector4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4d` `arg3`

**Returns:** `Vector4d`

### Vector4d transformUnit(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector4d transformInverseUnit(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### Vector3d transformUnit(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector3d transformInverseUnit(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### Vector3d transformUnit(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector3d transformInverseUnit(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### Vector4d transformUnit(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d transformInverseUnit(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### Vector4d transformUnit(double arg0,
double arg1,
double arg2,
Vector4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4d` `arg3`

**Returns:** `Vector4d`

### Vector4d transformInverseUnit(double arg0,
double arg1,
double arg2,
Vector4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4d` `arg3`

**Returns:** `Vector4d`

### Quaternionf invert(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### Quaternionf div(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf conjugate(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### Quaternionf rotateXYZ(float arg0,
float arg1,
float arg2,
Quaternionf arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Quaternionf` `arg3`

**Returns:** `Quaternionf`

### Quaternionf rotateZYX(float arg0,
float arg1,
float arg2,
Quaternionf arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Quaternionf` `arg3`

**Returns:** `Quaternionf`

### Quaternionf rotateYXZ(float arg0,
float arg1,
float arg2,
Quaternionf arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Quaternionf` `arg3`

**Returns:** `Quaternionf`

### Vector3f getEulerAnglesXYZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### float lengthSquared()

**Returns:** `float`

### Quaternionf slerp(Quaternionfc arg0,
float arg1,
Quaternionf arg2)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `Quaternionf` `arg2`

**Returns:** `Quaternionf`

### Quaternionf scale(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf integrate(float arg0,
float arg1,
float arg2,
float arg3,
Quaternionf arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Quaternionf` `arg4`

**Returns:** `Quaternionf`

### Quaternionf nlerp(Quaternionfc arg0,
float arg1,
Quaternionf arg2)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `Quaternionf` `arg2`

**Returns:** `Quaternionf`

### Quaternionf nlerpIterative(Quaternionfc arg0,
float arg1,
float arg2,
Quaternionf arg3)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Quaternionf` `arg3`

**Returns:** `Quaternionf`

### Quaternionf lookAlong(Vector3fc arg0,
Vector3fc arg1,
Quaternionf arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Quaternionf` `arg2`

**Returns:** `Quaternionf`

### Quaternionf lookAlong(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Quaternionf arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Quaternionf` `arg6`

**Returns:** `Quaternionf`

### Quaternionf rotateTo(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5,
Quaternionf arg6)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`
- `Quaternionf` `arg6`

**Returns:** `Quaternionf`

### Quaternionf rotateTo(Vector3fc arg0,
Vector3fc arg1,
Quaternionf arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Quaternionf` `arg2`

**Returns:** `Quaternionf`

### Quaternionf rotateX(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf rotateY(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf rotateZ(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf rotateLocalX(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf rotateLocalY(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf rotateLocalZ(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Quaternionf rotateAxis(float arg0,
float arg1,
float arg2,
float arg3,
Quaternionf arg4)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `Quaternionf` `arg4`

**Returns:** `Quaternionf`

### Quaternionf rotateAxis(float arg0,
Vector3fc arg1,
Quaternionf arg2)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`
- `Quaternionf` `arg2`

**Returns:** `Quaternionf`

### Quaternionf difference(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### Vector3f positiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f normalizedPositiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f positiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f normalizedPositiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f positiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Vector3f normalizedPositiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### Quaternionf conjugateBy(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### boolean isFinite()

**Returns:** `boolean`

### boolean equals(Quaternionfc arg0,
float arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### boolean equals(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Quaternionfc.html`*
