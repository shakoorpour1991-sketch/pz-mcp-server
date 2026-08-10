---
title: org.joml.Quaterniond
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.joml
---

# org.joml.Quaterniond

`public class Quaterniond extends Object implements Externalizable, Quaterniondc`

**Kind:** class · **Package:** org.joml

## Inheritance
- java.lang.Object
- org.joml.Quaterniond

## Fields

### public double x

### public double y

### public double z

### public double w

## Constructors

### public Quaterniond()

### public Quaterniond(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

### public Quaterniond(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

### public Quaterniond(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

### public Quaterniond(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

### public Quaterniond(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

## Methods

### public double x()

**Returns:** `double`

### public double y()

**Returns:** `double`

### public double z()

**Returns:** `double`

### public double w()

**Returns:** `double`

### public Quaterniond normalize()

**Returns:** `Quaterniond`

### public Quaterniond normalize(Quaterniond arg0)

**Parameters:**
- `Quaterniond` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond add(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond add(double arg0,
double arg1,
double arg2,
double arg3,
Quaterniond arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Quaterniond` `arg4`

**Returns:** `Quaterniond`

### public Quaterniond add(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond add(Quaterniondc arg0,
Quaterniond arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public double dot(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `double`

### public double angle()

**Returns:** `double`

### public Matrix3d get(Matrix3d arg0)

**Parameters:**
- `Matrix3d` `arg0`

**Returns:** `Matrix3d`

### public Matrix3f get(Matrix3f arg0)

**Parameters:**
- `Matrix3f` `arg0`

**Returns:** `Matrix3f`

### public Matrix4d get(Matrix4d arg0)

**Parameters:**
- `Matrix4d` `arg0`

**Returns:** `Matrix4d`

### public Matrix4f get(Matrix4f arg0)

**Parameters:**
- `Matrix4f` `arg0`

**Returns:** `Matrix4f`

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

### public Quaterniond set(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond set(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond set(Quaternionfc arg0)

**Parameters:**
- `Quaternionfc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond set(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond set(AxisAngle4d arg0)

**Parameters:**
- `AxisAngle4d` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setAngleAxis(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond setAngleAxis(double arg0,
Vector3dc arg1)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond setFromUnnormalized(Matrix4fc arg0)

**Parameters:**
- `Matrix4fc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromUnnormalized(Matrix4x3fc arg0)

**Parameters:**
- `Matrix4x3fc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromUnnormalized(Matrix4x3dc arg0)

**Parameters:**
- `Matrix4x3dc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromNormalized(Matrix4fc arg0)

**Parameters:**
- `Matrix4fc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromNormalized(Matrix4x3fc arg0)

**Parameters:**
- `Matrix4x3fc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromNormalized(Matrix4x3dc arg0)

**Parameters:**
- `Matrix4x3dc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromUnnormalized(Matrix4dc arg0)

**Parameters:**
- `Matrix4dc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromNormalized(Matrix4dc arg0)

**Parameters:**
- `Matrix4dc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromUnnormalized(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromNormalized(Matrix3fc arg0)

**Parameters:**
- `Matrix3fc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromUnnormalized(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond setFromNormalized(Matrix3dc arg0)

**Parameters:**
- `Matrix3dc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond fromAxisAngleRad(Vector3dc arg0,
double arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `double` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond fromAxisAngleRad(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond fromAxisAngleDeg(Vector3dc arg0,
double arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `double` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond fromAxisAngleDeg(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond mul(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond mul(Quaterniondc arg0,
Quaterniond arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond mul(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond mul(double arg0,
double arg1,
double arg2,
double arg3,
Quaterniond arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Quaterniond` `arg4`

**Returns:** `Quaterniond`

### public Quaterniond premul(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond premul(Quaterniondc arg0,
Quaterniond arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond premul(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond premul(double arg0,
double arg1,
double arg2,
double arg3,
Quaterniond arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Quaterniond` `arg4`

**Returns:** `Quaterniond`

### public Vector3d transform(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d transformInverse(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d transformUnit(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d transformInverseUnit(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

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

### public Vector3f transform(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f transformInverse(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

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

### public Vector3f transformUnit(Vector3f arg0)

**Parameters:**
- `Vector3f` `arg0`

**Returns:** `Vector3f`

### public Vector3f transformInverseUnit(Vector3f arg0)

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

### public Vector3f transform(double arg0,
double arg1,
double arg2,
Vector3f arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### public Vector3f transformInverse(double arg0,
double arg1,
double arg2,
Vector3f arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
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

### public Vector4f transform(double arg0,
double arg1,
double arg2,
Vector4f arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### public Vector4f transformInverse(double arg0,
double arg1,
double arg2,
Vector4f arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### public Vector4f transformUnit(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

### public Vector4f transformInverseUnit(Vector4f arg0)

**Parameters:**
- `Vector4f` `arg0`

**Returns:** `Vector4f`

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

### public Vector3f transformUnit(double arg0,
double arg1,
double arg2,
Vector3f arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

### public Vector3f transformInverseUnit(double arg0,
double arg1,
double arg2,
Vector3f arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector3f` `arg3`

**Returns:** `Vector3f`

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

### public Vector4f transformUnit(double arg0,
double arg1,
double arg2,
Vector4f arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### public Vector4f transformInverseUnit(double arg0,
double arg1,
double arg2,
Vector4f arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Vector4f` `arg3`

**Returns:** `Vector4f`

### public Quaterniond invert(Quaterniond arg0)

**Parameters:**
- `Quaterniond` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond invert()

**Returns:** `Quaterniond`

### public Quaterniond div(Quaterniondc arg0,
Quaterniond arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond div(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond conjugate()

**Returns:** `Quaterniond`

### public Quaterniond conjugate(Quaterniond arg0)

**Parameters:**
- `Quaterniond` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond identity()

**Returns:** `Quaterniond`

### public double lengthSquared()

**Returns:** `double`

### public Quaterniond rotationXYZ(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Quaterniond`

### public Quaterniond rotationZYX(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Quaterniond`

### public Quaterniond rotationYXZ(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Quaterniond`

### public Quaterniond slerp(Quaterniondc arg0,
double arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond slerp(Quaterniondc arg0,
double arg1,
Quaterniond arg2)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`
- `Quaterniond` `arg2`

**Returns:** `Quaterniond`

### public static Quaterniondc slerp(Quaterniond[] quaternionds,
double[] doubles,
Quaterniond quaterniond)

**Parameters:**
- `Quaterniond[]` `quaternionds`
- `double[]` `doubles`
- `Quaterniond` `quaterniond`

**Returns:** `Quaterniondc`

### public Quaterniond scale(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond scale(double arg0,
Quaterniond arg1)

**Parameters:**
- `double` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond scaling(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond integrate(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond integrate(double arg0,
double arg1,
double arg2,
double arg3,
Quaterniond arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Quaterniond` `arg4`

**Returns:** `Quaterniond`

### public Quaterniond nlerp(Quaterniondc arg0,
double arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond nlerp(Quaterniondc arg0,
double arg1,
Quaterniond arg2)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`
- `Quaterniond` `arg2`

**Returns:** `Quaterniond`

### public static Quaterniondc nlerp(Quaterniond[] quaternionds,
double[] doubles,
Quaterniond quaterniond)

**Parameters:**
- `Quaterniond[]` `quaternionds`
- `double[]` `doubles`
- `Quaterniond` `quaterniond`

**Returns:** `Quaterniondc`

### public Quaterniond nlerpIterative(Quaterniondc arg0,
double arg1,
double arg2,
Quaterniond arg3)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Quaterniond` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond nlerpIterative(Quaterniondc arg0,
double arg1,
double arg2)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Quaterniond`

### public static Quaterniond nlerpIterative(Quaterniondc[] quaterniondcs,
double[] doubles,
double double3,
Quaterniond quaterniond)

**Parameters:**
- `Quaterniondc[]` `quaterniondcs`
- `double[]` `doubles`
- `double` `double3`
- `Quaterniond` `quaterniond`

**Returns:** `Quaterniond`

### public Quaterniond lookAlong(Vector3dc arg0,
Vector3dc arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond lookAlong(Vector3dc arg0,
Vector3dc arg1,
Quaterniond arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Quaterniond` `arg2`

**Returns:** `Quaterniond`

### public Quaterniond lookAlong(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`

**Returns:** `Quaterniond`

### public Quaterniond lookAlong(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Quaterniond arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Quaterniond` `arg6`

**Returns:** `Quaterniond`

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

### public Quaterniond difference(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond difference(Quaterniondc arg0,
Quaterniond arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond rotationTo(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`

**Returns:** `Quaterniond`

### public Quaterniond rotationTo(Vector3dc arg0,
Vector3dc arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond rotateTo(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5,
Quaterniond arg6)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`
- `Quaterniond` `arg6`

**Returns:** `Quaterniond`

### public Quaterniond rotationAxis(AxisAngle4f arg0)

**Parameters:**
- `AxisAngle4f` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond rotationAxis(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond rotationX(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond rotationY(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond rotationZ(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond rotateTo(double arg0,
double arg1,
double arg2,
double arg3,
double arg4,
double arg5)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `double` `arg4`
- `double` `arg5`

**Returns:** `Quaterniond`

### public Quaterniond rotateTo(Vector3dc arg0,
Vector3dc arg1,
Quaterniond arg2)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`
- `Quaterniond` `arg2`

**Returns:** `Quaterniond`

### public Quaterniond rotateTo(Vector3dc arg0,
Vector3dc arg1)

**Parameters:**
- `Vector3dc` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond rotateX(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond rotateX(double arg0,
Quaterniond arg1)

**Parameters:**
- `double` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond rotateY(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond rotateY(double arg0,
Quaterniond arg1)

**Parameters:**
- `double` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond rotateZ(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond rotateZ(double arg0,
Quaterniond arg1)

**Parameters:**
- `double` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond rotateLocalX(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond rotateLocalX(double arg0,
Quaterniond arg1)

**Parameters:**
- `double` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond rotateLocalY(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond rotateLocalY(double arg0,
Quaterniond arg1)

**Parameters:**
- `double` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond rotateLocalZ(double arg0)

**Parameters:**
- `double` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond rotateLocalZ(double arg0,
Quaterniond arg1)

**Parameters:**
- `double` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond rotateXYZ(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Quaterniond`

### public Quaterniond rotateXYZ(double arg0,
double arg1,
double arg2,
Quaterniond arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Quaterniond` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond rotateZYX(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Quaterniond`

### public Quaterniond rotateZYX(double arg0,
double arg1,
double arg2,
Quaterniond arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Quaterniond` `arg3`

**Returns:** `Quaterniond`

### public Quaterniond rotateYXZ(double arg0,
double arg1,
double arg2)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`

**Returns:** `Quaterniond`

### public Quaterniond rotateYXZ(double arg0,
double arg1,
double arg2,
Quaterniond arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `Quaterniond` `arg3`

**Returns:** `Quaterniond`

### public Vector3d getEulerAnglesXYZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Quaterniond rotateAxis(double arg0,
double arg1,
double arg2,
double arg3,
Quaterniond arg4)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`
- `Quaterniond` `arg4`

**Returns:** `Quaterniond`

### public Quaterniond rotateAxis(double arg0,
Vector3dc arg1,
Quaterniond arg2)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`
- `Quaterniond` `arg2`

**Returns:** `Quaterniond`

### public Quaterniond rotateAxis(double arg0,
Vector3dc arg1)

**Parameters:**
- `double` `arg0`
- `Vector3dc` `arg1`

**Returns:** `Quaterniond`

### public Quaterniond rotateAxis(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `Quaterniond`

### public Vector3d positiveX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d normalizedPositiveX(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d positiveY(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d normalizedPositiveY(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d positiveZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Vector3d normalizedPositiveZ(Vector3d arg0)

**Parameters:**
- `Vector3d` `arg0`

**Returns:** `Vector3d`

### public Quaterniond conjugateBy(Quaterniondc arg0)

**Parameters:**
- `Quaterniondc` `arg0`

**Returns:** `Quaterniond`

### public Quaterniond conjugateBy(Quaterniondc arg0,
Quaterniond arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `Quaterniond` `arg1`

**Returns:** `Quaterniond`

### public boolean isFinite()

**Returns:** `boolean`

### public boolean equals(Quaterniondc arg0,
double arg1)

**Parameters:**
- `Quaterniondc` `arg0`
- `double` `arg1`

**Returns:** `boolean`

### public boolean equals(double arg0,
double arg1,
double arg2,
double arg3)

**Parameters:**
- `double` `arg0`
- `double` `arg1`
- `double` `arg2`
- `double` `arg3`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\joml\Quaterniond.html`*
