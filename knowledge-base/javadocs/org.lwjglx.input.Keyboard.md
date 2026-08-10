---
title: org.lwjglx.input.Keyboard
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: org.lwjglx.input
---

# org.lwjglx.input.Keyboard

`public class Keyboard extends Object`

**Kind:** class · **Package:** org.lwjglx.input

## Inheritance
- java.lang.Object
- org.lwjglx.input.Keyboard

## Fields

### public static final int CHAR_NONE

### public static final int KEY_NONE

### public static final int KEY_ESCAPE

### public static final int KEY_1

### public static final int KEY_2

### public static final int KEY_3

### public static final int KEY_4

### public static final int KEY_5

### public static final int KEY_6

### public static final int KEY_7

### public static final int KEY_8

### public static final int KEY_9

### public static final int KEY_0

### public static final int KEY_MINUS

### public static final int KEY_EQUALS

### public static final int KEY_BACK

### public static final int KEY_TAB

### public static final int KEY_Q

### public static final int KEY_W

### public static final int KEY_E

### public static final int KEY_R

### public static final int KEY_T

### public static final int KEY_Y

### public static final int KEY_U

### public static final int KEY_I

### public static final int KEY_O

### public static final int KEY_P

### public static final int KEY_LBRACKET

### public static final int KEY_RBRACKET

### public static final int KEY_RETURN

### public static final int KEY_LCONTROL

### public static final int KEY_A

### public static final int KEY_S

### public static final int KEY_D

### public static final int KEY_F

### public static final int KEY_G

### public static final int KEY_H

### public static final int KEY_J

### public static final int KEY_K

### public static final int KEY_L

### public static final int KEY_SEMICOLON

### public static final int KEY_APOSTROPHE

### public static final int KEY_GRAVE

### public static final int KEY_LSHIFT

### public static final int KEY_BACKSLASH

### public static final int KEY_Z

### public static final int KEY_X

### public static final int KEY_C

### public static final int KEY_V

### public static final int KEY_B

### public static final int KEY_N

### public static final int KEY_M

### public static final int KEY_COMMA

### public static final int KEY_PERIOD

### public static final int KEY_SLASH

### public static final int KEY_RSHIFT

### public static final int KEY_MULTIPLY

### public static final int KEY_LMENU

### public static final int KEY_SPACE

### public static final int KEY_CAPITAL

### public static final int KEY_F1

### public static final int KEY_F2

### public static final int KEY_F3

### public static final int KEY_F4

### public static final int KEY_F5

### public static final int KEY_F6

### public static final int KEY_F7

### public static final int KEY_F8

### public static final int KEY_F9

### public static final int KEY_F10

### public static final int KEY_NUMLOCK

### public static final int KEY_SCROLL

### public static final int KEY_NUMPAD7

### public static final int KEY_NUMPAD8

### public static final int KEY_NUMPAD9

### public static final int KEY_SUBTRACT

### public static final int KEY_NUMPAD4

### public static final int KEY_NUMPAD5

### public static final int KEY_NUMPAD6

### public static final int KEY_ADD

### public static final int KEY_NUMPAD1

### public static final int KEY_NUMPAD2

### public static final int KEY_NUMPAD3

### public static final int KEY_NUMPAD0

### public static final int KEY_DECIMAL

### public static final int KEY_F11

### public static final int KEY_F12

### public static final int KEY_F13

### public static final int KEY_F14

### public static final int KEY_F15

### public static final int KEY_F16

### public static final int KEY_F17

### public static final int KEY_F18

### public static final int KEY_KANA

### public static final int KEY_F19

### public static final int KEY_CONVERT

### public static final int KEY_NOCONVERT

### public static final int KEY_YEN

### public static final int KEY_NUMPADEQUALS

### public static final int KEY_CIRCUMFLEX

### public static final int KEY_AT

### public static final int KEY_COLON

### public static final int KEY_UNDERLINE

### public static final int KEY_KANJI

### public static final int KEY_STOP

### public static final int KEY_AX

### public static final int KEY_UNLABELED

### public static final int KEY_NUMPADENTER

### public static final int KEY_RCONTROL

### public static final int KEY_SECTION

### public static final int KEY_NUMPADCOMMA

### public static final int KEY_DIVIDE

### public static final int KEY_SYSRQ

### public static final int KEY_RMENU

### public static final int KEY_FUNCTION

### public static final int KEY_PAUSE

### public static final int KEY_HOME

### public static final int KEY_UP

### public static final int KEY_PRIOR

### public static final int KEY_LEFT

### public static final int KEY_RIGHT

### public static final int KEY_END

### public static final int KEY_DOWN

### public static final int KEY_NEXT

### public static final int KEY_INSERT

### public static final int KEY_DELETE

### public static final int KEY_CLEAR

### public static final int KEY_LMETA

### public static final int KEY_LWIN

### public static final int KEY_RMETA

### public static final int KEY_RWIN

### public static final int KEY_APPS

### public static final int KEY_POWER

### public static final int KEY_SLEEP

### public static final int KEYBOARD_SIZE

## Constructors

### public Keyboard()

## Methods

### public static void addKeyEvent(int arg0,
int arg1)

**Parameters:**
- `int` `arg0`
- `int` `arg1`

**Returns:** `void`

### public static void addCharEvent(char arg0)

**Parameters:**
- `char` `arg0`

**Returns:** `void`

### public static void create()

**Returns:** `void`

### public static void initKeyNames()

**Returns:** `void`

### public static boolean isKeyDown(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `boolean`

### public static void poll()

**Returns:** `void`

### public static void enableRepeatEvents(boolean arg0)

**Parameters:**
- `boolean` `arg0`

**Returns:** `void`

### public static boolean areRepeatEventsEnabled()

**Returns:** `boolean`

### public static boolean isRepeatEvent()

**Returns:** `boolean`

### public static boolean next()

**Returns:** `boolean`

### public static int getEventKey()

**Returns:** `int`

### public static char getEventCharacter()

**Returns:** `char`

### public static boolean getEventKeyState()

**Returns:** `boolean`

### public static long getEventNanoseconds()

**Returns:** `long`

### public static String getKeyName(int arg0)

**Parameters:**
- `int` `arg0`

**Returns:** `String`

### public static int getKeyIndex(String arg0)

**Parameters:**
- `String` `arg0`

**Returns:** `int`

### public static boolean isCreated()

**Returns:** `boolean`

### public static void destroy()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\org\lwjglx\input\Keyboard.html`*
