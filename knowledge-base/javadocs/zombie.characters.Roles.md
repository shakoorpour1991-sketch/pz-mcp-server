---
title: zombie.characters.Roles
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.Roles

`public class Roles extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.Roles

## Fields

### public static final Role animal

## Constructors

### public Roles()

## Methods

### public static void init()

**Returns:** `void`

### public static void save()

**Returns:** `void`

### public static ArrayList<Role> getRoles()

**Returns:** `ArrayList<Role>`

### public static Role getDefaultForBanned()

**Returns:** `Role`

### public static Role getDefaultForNewUser()

**Returns:** `Role`

### public static Role getDefaultForUser()

**Returns:** `Role`

### public static Role getDefaultForPriorityUser()

**Returns:** `Role`

### public static Role getDefaultForObserver()

**Returns:** `Role`

### public static Role getDefaultForGM()

**Returns:** `Role`

### public static Role getDefaultForOverseer()

**Returns:** `Role`

### public static Role getDefaultForModerator()

**Returns:** `Role`

### public static Role getDefaultForAdmin()

**Returns:** `Role`

### public static void addRole(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public static void deleteRole(String name,
String adminName)

**Parameters:**
- `String` `name`
- `String` `adminName`

**Returns:** `void`

### public static void moveRole(byte dir,
String name)

**Parameters:**
- `byte` `dir`
- `String` `name`

**Returns:** `void`

### public static void setDefaultRoleFor(String defaultId,
String name)

**Parameters:**
- `String` `defaultId`
- `String` `name`

**Returns:** `void`

### public static void setupRole(String name,
String description,
Color color,
ArrayList<Capability> capabilities)

**Parameters:**
- `String` `name`
- `String` `description`
- `Color` `color`
- `ArrayList<Capability>` `capabilities`

**Returns:** `void`

### public static Role getRole(String name)

**Parameters:**
- `String` `name`

**Returns:** `Role`

### public static Role getOrDefault(String name)

**Parameters:**
- `String` `name`

**Returns:** `Role`

### public static void setRoles(ArrayList<Role> roles,
Role defaultForBanned,
Role defaultForNewUser,
Role defaultForUser,
Role defaultForPriorityUser,
Role defaultForObserver,
Role defaultForGM,
Role defaultForOverseer,
Role defaultForModerator,
Role defaultForAdmin)

**Parameters:**
- `ArrayList<Role>` `roles`
- `Role` `defaultForBanned`
- `Role` `defaultForNewUser`
- `Role` `defaultForUser`
- `Role` `defaultForPriorityUser`
- `Role` `defaultForObserver`
- `Role` `defaultForGM`
- `Role` `defaultForOverseer`
- `Role` `defaultForModerator`
- `Role` `defaultForAdmin`

**Returns:** `void`

### public static Role getRoleById(int id)

**Parameters:**
- `int` `id`

**Returns:** `Role`

### public static void addStatic()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\Roles.html`*
