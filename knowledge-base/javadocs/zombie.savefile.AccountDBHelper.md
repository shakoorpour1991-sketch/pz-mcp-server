---
title: zombie.savefile.AccountDBHelper
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.savefile
---

# zombie.savefile.AccountDBHelper

`public class AccountDBHelper extends Object`

**Kind:** class · **Package:** zombie.savefile

## Inheritance
- java.lang.Object
- zombie.savefile.AccountDBHelper

## Fields

### public static final DateTimeFormatter formatter

## Constructors

### public AccountDBHelper()

## Methods

### public static AccountDBHelper getInstance()

**Returns:** `AccountDBHelper`

### public Connection create()

**Returns:** `Connection`

### public ArrayList<Server> getServerList()

**Returns:** `ArrayList<Server>`

### public int saveNewServer(Server server)

**Parameters:**
- `Server` `server`

**Returns:** `int`

### public boolean updateServer(Server server)

**Parameters:**
- `Server` `server`

**Returns:** `boolean`

### public boolean deleteServer(Server server)

**Parameters:**
- `Server` `server`

**Returns:** `boolean`

### public int saveNewAccount(Server server,
Account account)

**Parameters:**
- `Server` `server`
- `Account` `account`

**Returns:** `int`

### public boolean updateAccount(Account account)

**Parameters:**
- `Account` `account`

**Returns:** `boolean`

### public boolean deleteAccount(Account account)

**Parameters:**
- `Account` `account`

**Returns:** `boolean`

### public void setupLastSave()

**Returns:** `void`

### public boolean updateAccountIconAndData(String serverAddress,
int port,
String username,
ByteBuffer icon)

**Parameters:**
- `String` `serverAddress`
- `int` `port`
- `String` `username`
- `ByteBuffer` `icon`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\savefile\AccountDBHelper.html`*
