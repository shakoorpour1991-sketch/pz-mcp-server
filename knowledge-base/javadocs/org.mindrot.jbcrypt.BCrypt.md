---
title: org.mindrot.jbcrypt.BCrypt
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.mindrot.jbcrypt
---

# org.mindrot.jbcrypt.BCrypt

`public class BCrypt extends Object`

**Kind:** class · **Package:** org.mindrot.jbcrypt

## Inheritance
- java.lang.Object
- org.mindrot.jbcrypt.BCrypt

## Constructors

### public BCrypt()

## Methods

### public byte[] crypt_raw(byte[] bytes1,
byte[] bytes0,
int int1,
int[] ints)

**Parameters:**
- `byte[]` `bytes1`
- `byte[]` `bytes0`
- `int` `int1`
- `int[]` `ints`

**Returns:** `byte[]`

### public static String hashpw(String string2,
String string0)

**Parameters:**
- `String` `string2`
- `String` `string0`

**Returns:** `String`

### public static String gensalt(int int0,
SecureRandom secureRandom)

**Parameters:**
- `int` `int0`
- `SecureRandom` `secureRandom`

**Returns:** `String`

### public static String gensalt(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `String`

### public static String gensalt()

**Returns:** `String`

### public static boolean checkpw(String string1,
String string2)

**Parameters:**
- `String` `string1`
- `String` `string2`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\mindrot\jbcrypt\BCrypt.html`*
