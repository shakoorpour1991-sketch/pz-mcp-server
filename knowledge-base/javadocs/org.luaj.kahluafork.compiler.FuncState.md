---
title: org.luaj.kahluafork.compiler.FuncState
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.luaj.kahluafork.compiler
---

# org.luaj.kahluafork.compiler.FuncState

`public final class FuncState extends Object`

**Kind:** class · **Package:** org.luaj.kahluafork.compiler

## Inheritance
- java.lang.Object
- org.luaj.kahluafork.compiler.FuncState

## Fields

### public String[] locvars

### public String[] upvalues

### public int linedefined

### public int lastlinedefined

### public int isVararg

### public static String currentFile

### public static String currentfullFile

### public static final int MAXSTACK

### public static final int LUA_MULTRET

### public static final int VARARG_HASARG

### public static final int VARARG_ISVARARG

### public static final int VARARG_NEEDSARG

### public static final int iABC

### public static final int iABx

### public static final int iAsBx

### public static final int SIZE_C

### public static final int SIZE_B

### public static final int SIZE_Bx

### public static final int SIZE_A

### public static final int SIZE_OP

### public static final int POS_OP

### public static final int POS_A

### public static final int POS_C

### public static final int POS_B

### public static final int POS_Bx

### public static final int MAX_OP

### public static final int MAXARG_A

### public static final int MAXARG_B

### public static final int MAXARG_C

### public static final int MAXARG_Bx

### public static final int MAXARG_sBx

### public static final int MASK_OP

### public static final int MASK_A

### public static final int MASK_B

### public static final int MASK_C

### public static final int MASK_Bx

### public static final int MASK_NOT_OP

### public static final int MASK_NOT_A

### public static final int MASK_NOT_B

### public static final int MASK_NOT_C

### public static final int MASK_NOT_Bx

### public static final int BITRK

### public static final int MAXINDEXRK

### public static final int NO_REG

### public static final int OP_MOVE

### public static final int OP_LOADK

### public static final int OP_LOADBOOL

### public static final int OP_LOADNIL

### public static final int OP_GETUPVAL

### public static final int OP_GETGLOBAL

### public static final int OP_GETTABLE

### public static final int OP_SETGLOBAL

### public static final int OP_SETUPVAL

### public static final int OP_SETTABLE

### public static final int OP_NEWTABLE

### public static final int OP_SELF

### public static final int OP_ADD

### public static final int OP_SUB

### public static final int OP_MUL

### public static final int OP_DIV

### public static final int OP_MOD

### public static final int OP_POW

### public static final int OP_UNM

### public static final int OP_NOT

### public static final int OP_LEN

### public static final int OP_CONCAT

### public static final int OP_JMP

### public static final int OP_EQ

### public static final int OP_LT

### public static final int OP_LE

### public static final int OP_TEST

### public static final int OP_TESTSET

### public static final int OP_CALL

### public static final int OP_TAILCALL

### public static final int OP_RETURN

### public static final int OP_FORLOOP

### public static final int OP_FORPREP

### public static final int OP_TFORLOOP

### public static final int OP_SETLIST

### public static final int OP_CLOSE

### public static final int OP_CLOSURE

### public static final int OP_VARARG

### public static final int NUM_OPCODES

### public static final int[] luaP_opmodes

### public static final int LFIELDS_PER_FLUSH

## Methods

### public static int GET_OPCODE(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int GETARG_A(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int GETARG_B(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int GETARG_C(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int GETARG_Bx(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int GETARG_sBx(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static boolean ISK(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `boolean`

### public static int INDEXK(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int RKASK(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int getOpMode(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int getBMode(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static int getCMode(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `int`

### public static boolean testTMode(int int0)

**Parameters:**
- `int` `int0`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\luaj\kahluafork\compiler\FuncState.html`*
