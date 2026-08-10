---
title: org.joml.Quaternionf
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.joml
---

# org.joml.Quaternionf

`public class Quaternionf extends Object implements Externalizable, Quaternionfc`

**Kind:** class · **Package:** org.joml

## Inheritance
- java.lang.Object
- org.joml.Quaternionf

## Fields

### public float x

### public float y

### public float z

### public float w

## Constructors

### public Quaternionf()

### public Quaternionf(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

### public Quaternionf(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

### public Quaternionf(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

### public Quaternionf(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

### public Quaternionf(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

### public Quaternionf(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

## Methods

### public float x()

**Returns:** `float`

### public float y()

**Returns:** `float`

### public float z()

**Returns:** `float`

### public float w()

**Returns:** `float`

### public Quaternionf normalize()

**Returns:** `Quaternionf`

### public Quaternionf normalize(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf add(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf add(float arg0,
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

### public Quaternionf add(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf add(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public float dot(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `float`

### public float angle()

**Returns:** `float`

### public Matrix3f get(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### public Matrix3d get(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### public Matrix4f get(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

### public Matrix4d get(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### public Matrix4x3f get(Matrix4x3f arg0)

**Parameters:**
- `Matrix4x3f` `arg0`

**Returns:** `Matrix4x3f`

### public Matrix4x3d get(Matrix4x3d arg0)

**Parameters:**
- `Matrix4x3d` `arg0`

**Returns:** `Matrix4x3d`

### public AxisAngle4f get(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `AxisAngle4f`

### public AxisAngle4d get(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

**Returns:** `AxisAngle4d`

### public Quaterniond get(Quaterniond arg0)

**Parameters:**
- `Quaterniond` `arg0`

**Returns:** `Quaterniond`

### public Quaternionf get(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### public ByteBuffer getAsMatrix3f(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### public FloatBuffer getAsMatrix3f(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### public ByteBuffer getAsMatrix4f(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### public FloatBuffer getAsMatrix4f(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### public ByteBuffer getAsMatrix4x3f(ByteBuffer arg0)

**Parameters:**
- `ByteBuffer` `arg0`

**Returns:** `ByteBuffer`

### public FloatBuffer getAsMatrix4x3f(FloatBuffer arg0)

**Parameters:**
- `FloatBuffer` `arg0`

**Returns:** `FloatBuffer`

### public Quaternionf set(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf set(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf set(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf set(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf set(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setAngleAxis(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf setAngleAxis(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf rotationAxis(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf rotationAxis(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf rotationAxis(float arg0,
Vector3fc arg1)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf rotationX(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf rotationY(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf rotationZ(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromUnnormalized(Matrix4fc arg0)

**Parameters:**
- `Matrix4fc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromUnnormalized(Matrix4x3fc arg0)

**Parameters:**
- `Matrix4x3fc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromUnnormalized(Matrix4x3dc arg0)

**Parameters:**
- `Matrix4x3dc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromNormalized(Matrix4fc arg0)

**Parameters:**
- `Matrix4fc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromNormalized(Matrix4x3fc arg0)

**Parameters:**
- `Matrix4x3fc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromNormalized(Matrix4x3dc arg0)

**Parameters:**
- `Matrix4x3dc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromUnnormalized(Matrix4dc arg0)

**Parameters:**
- `Matrix4dc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromNormalized(Matrix4dc arg0)

**Parameters:**
- `Matrix4dc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromUnnormalized(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromNormalized(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromUnnormalized(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf setFromNormalized(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf fromAxisAngleRad(Vector3fc arg0,
float arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `float` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf fromAxisAngleRad(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf fromAxisAngleDeg(Vector3fc arg0,
float arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `float` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf fromAxisAngleDeg(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf mul(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf mul(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf mul(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf mul(float arg0,
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

### public Quaternionf premul(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf premul(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf premul(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf premul(float arg0,
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

### public Vector3f transform(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f transformInverse(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f transformPositiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector4f transformPositiveX(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector3f transformUnitPositiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector4f transformUnitPositiveX(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector3f transformPositiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector4f transformPositiveY(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector4f transformUnitPositiveY(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector3f transformUnitPositiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f transformPositiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector4f transformPositiveZ(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector4f transformUnitPositiveZ(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector3f transformUnitPositiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector4f transform(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector4f transformInverse(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector3f transform(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### public Vector3f transformInverse(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### public Vector3f transform(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### public Vector3f transformInverse(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### public Vector3f transformUnit(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f transformInverseUnit(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f transformUnit(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### public Vector3f transformInverseUnit(Vector3fc arg0,
Vector3f arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3f` `arg1`

**Returns:** `Vector3f`

### public Vector3f transformUnit(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### public Vector3f transformInverseUnit(float arg0,
float arg1,
float arg2,
Vector3f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### public Vector4f transform(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### public Vector4f transformInverse(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### public Vector4f transform(float arg0,
float arg1,
float arg2,
Vector4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### public Vector4f transformInverse(float arg0,
float arg1,
float arg2,
Vector4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### public Vector3d transform(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d transformInverse(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector4f transformUnit(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector4f transformInverseUnit(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector4f transformUnit(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### public Vector4f transformInverseUnit(Vector4fc arg0,
Vector4f arg1)

**Parameters:**
- `Vector4fc` `arg0`
- `Vector4f` `arg1`

**Returns:** `Vector4f`

### public Vector4f transformUnit(float arg0,
float arg1,
float arg2,
Vector4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### public Vector4f transformInverseUnit(float arg0,
float arg1,
float arg2,
Vector4f arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### public Vector3d transformPositiveX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector4d transformPositiveX(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### public Vector3d transformUnitPositiveX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector4d transformUnitPositiveX(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### public Vector3d transformPositiveY(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector4d transformPositiveY(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### public Vector4d transformUnitPositiveY(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### public Vector3d transformUnitPositiveY(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d transformPositiveZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector4d transformPositiveZ(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### public Vector4d transformUnitPositiveZ(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### public Vector3d transformUnitPositiveZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector4d transform(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### public Vector4d transformInverse(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### public Vector3d transform(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### public Vector3d transformInverse(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### public Vector3d transform(float arg0,
float arg1,
float arg2,
Vector3d arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### public Vector3d transformInverse(float arg0,
float arg1,
float arg2,
Vector3d arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### public Vector3d transform(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### public Vector3d transformInverse(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### public Vector4d transform(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### public Vector4d transformInverse(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### public Vector4d transform(double arg0,
double arg1,
double arg2,
Vector4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4d` `arg3`

**Returns:** `Vector4d`

### public Vector4d transformInverse(double arg0,
double arg1,
double arg2,
Vector4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4d` `arg3`

**Returns:** `Vector4d`

### public Vector4d transformUnit(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### public Vector4d transformInverseUnit(Vector4d arg0)

**Parameters:**
- `Vector4d` `arg0`

**Returns:** `Vector4d`

### public Vector3d transformUnit(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### public Vector3d transformInverseUnit(Vector3dc arg0,
Vector3d arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3d` `arg1`

**Returns:** `Vector3d`

### public Vector3d transformUnit(float arg0,
float arg1,
float arg2,
Vector3d arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### public Vector3d transformInverseUnit(float arg0,
float arg1,
float arg2,
Vector3d arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### public Vector3d transformUnit(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### public Vector3d transformInverseUnit(double arg0,
double arg1,
double arg2,
Vector3d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3d` `arg3`

**Returns:** `Vector3d`

### public Vector4d transformUnit(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### public Vector4d transformInverseUnit(Vector4dc arg0,
Vector4d arg1)

**Parameters:**
- `Vector4dc` `arg0`
- `Vector4d` `arg1`

**Returns:** `Vector4d`

### public Vector4d transformUnit(double arg0,
double arg1,
double arg2,
Vector4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4d` `arg3`

**Returns:** `Vector4d`

### public Vector4d transformInverseUnit(double arg0,
double arg1,
double arg2,
Vector4d arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4d` `arg3`

**Returns:** `Vector4d`

### public Quaternionf invert(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf invert()

**Returns:** `Quaternionf`

### public Quaternionf div(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf div(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf conjugate()

**Returns:** `Quaternionf`

### public Quaternionf conjugate(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf identity()

**Returns:** `Quaternionf`

### public Quaternionf rotateXYZ(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Quaternionf`

### public Quaternionf rotateXYZ(float arg0,
float arg1,
float arg2,
Quaternionf arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Quaternionf` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf rotateZYX(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Quaternionf`

### public Quaternionf rotateZYX(float arg0,
float arg1,
float arg2,
Quaternionf arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Quaternionf` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf rotateYXZ(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Quaternionf`

### public Quaternionf rotateYXZ(float arg0,
float arg1,
float arg2,
Quaternionf arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Quaternionf` `arg3`

**Returns:** `Quaternionf`

### public Vector3f getEulerAnglesXYZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public float lengthSquared()

**Returns:** `float`

### public Quaternionf rotationXYZ(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Quaternionf`

### public Quaternionf rotationZYX(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Quaternionf`

### public Quaternionf rotationYXZ(float arg0,
float arg1,
float arg2)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Quaternionf`

### public Quaternionf slerp(Quaternionfc arg0,
float arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf slerp(Quaternionfc arg0,
float arg1,
Quaternionf arg2)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `Quaternionf` `arg2`

**Returns:** `Quaternionf`

### public static Quaternionfc slerp(Quaternionf[] quaternionfs,
float[] floats,
Quaternionf quaternionf)

**Parameters:**
- `Quaternionf[]` `quaternionfs`
- `float[]` `floats`
- `Quaternionf` `quaternionf`

**Returns:** `Quaternionfc`

### public Quaternionf scale(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf scale(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf scaling(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf integrate(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf integrate(float arg0,
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

### public Quaternionf nlerp(Quaternionfc arg0,
float arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf nlerp(Quaternionfc arg0,
float arg1,
Quaternionf arg2)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `Quaternionf` `arg2`

**Returns:** `Quaternionf`

### public static Quaternionfc nlerp(Quaternionfc[] quaternionfcs,
float[] floats,
Quaternionf quaternionf)

**Parameters:**
- `Quaternionfc[]` `quaternionfcs`
- `float[]` `floats`
- `Quaternionf` `quaternionf`

**Returns:** `Quaternionfc`

### public Quaternionf nlerpIterative(Quaternionfc arg0,
float arg1,
float arg2,
Quaternionf arg3)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `float` `arg2`
- `Quaternionf` `arg3`

**Returns:** `Quaternionf`

### public Quaternionf nlerpIterative(Quaternionfc arg0,
float arg1,
float arg2)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`
- `float` `arg2`

**Returns:** `Quaternionf`

### public static Quaternionfc nlerpIterative(Quaternionf[] quaternionfs,
float[] floats,
float float3,
Quaternionf quaternionf)

**Parameters:**
- `Quaternionf[]` `quaternionfs`
- `float[]` `floats`
- `float` `float3`
- `Quaternionf` `quaternionf`

**Returns:** `Quaternionfc`

### public Quaternionf lookAlong(Vector3fc arg0,
Vector3fc arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf lookAlong(Vector3fc arg0,
Vector3fc arg1,
Quaternionf arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Quaternionf` `arg2`

**Returns:** `Quaternionf`

### public Quaternionf lookAlong(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`

**Returns:** `Quaternionf`

### public Quaternionf lookAlong(float arg0,
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

### public Quaternionf rotationTo(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`

**Returns:** `Quaternionf`

### public Quaternionf rotationTo(Vector3fc arg0,
Vector3fc arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf rotateTo(float arg0,
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

### public Quaternionf rotateTo(float arg0,
float arg1,
float arg2,
float arg3,
float arg4,
float arg5)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`
- `float` `arg4`
- `float` `arg5`

**Returns:** `Quaternionf`

### public Quaternionf rotateTo(Vector3fc arg0,
Vector3fc arg1,
Quaternionf arg2)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`
- `Quaternionf` `arg2`

**Returns:** `Quaternionf`

### public Quaternionf rotateTo(Vector3fc arg0,
Vector3fc arg1)

**Parameters:**
- `Vector3fc` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf rotateX(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf rotateX(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf rotateY(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf rotateY(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf rotateZ(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf rotateZ(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf rotateLocalX(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf rotateLocalX(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf rotateLocalY(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf rotateLocalY(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf rotateLocalZ(float arg0)

**Parameters:**
- `float` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf rotateLocalZ(float arg0,
Quaternionf arg1)

**Parameters:**
- `float` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf rotateAxis(float arg0,
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

### public Quaternionf rotateAxis(float arg0,
Vector3fc arg1,
Quaternionf arg2)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`
- `Quaternionf` `arg2`

**Returns:** `Quaternionf`

### public Quaternionf rotateAxis(float arg0,
Vector3fc arg1)

**Parameters:**
- `float` `arg0`
- `Vector3fc` `arg1`

**Returns:** `Quaternionf`

### public Quaternionf rotateAxis(float arg0,
float arg1,
float arg2,
float arg3)

**Parameters:**
- `float` `arg0`
- `float` `arg1`
- `float` `arg2`
- `float` `arg3`

**Returns:** `Quaternionf`

### public String toString()

**Returns:** `String`

### public String toString(NumberFormat numberFormat)

**Parameters:**
- `NumberFormat` `numberFormat`

**Returns:** `String`

### public void writeExternal(ObjectOutput arg0)
throws IOException

**Parameters:**
- `ObjectOutput` `arg0`

**Returns:** `void`

### public void readExternal(ObjectInput arg0)
throws IOException,
ClassNotFoundException

**Parameters:**
- `ObjectInput` `arg0`

**Returns:** `void`

### public int hashCode()

**Returns:** `int`

### public boolean equals(Object arg0)

**Parameters:**
- `Object` `arg0`

**Returns:** `boolean`

### public Quaternionf difference(Quaternionf arg0)

**Parameters:**
- `Quaternionf` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf difference(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public Vector3f positiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f normalizedPositiveX(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f positiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f normalizedPositiveY(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f positiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f normalizedPositiveZ(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Quaternionf conjugateBy(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Quaternionf`

### public Quaternionf conjugateBy(Quaternionfc arg0,
Quaternionf arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `Quaternionf` `arg1`

**Returns:** `Quaternionf`

### public boolean isFinite()

**Returns:** `boolean`

### public boolean equals(Quaternionfc arg0,
float arg1)

**Parameters:**
- `Quaternionfc` `arg0`
- `float` `arg1`

**Returns:** `boolean`

### public boolean equals(float arg0,
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
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Quaternionf.html`*
