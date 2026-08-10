---
title: zombie.network.ServerWorldDatabase
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.ServerWorldDatabase

`public class ServerWorldDatabase extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.ServerWorldDatabase

## Fields

### public static final int AUTH_TYPE_USERNAME_PASSWORD

### public static final int AUTH_TYPE_GOOGLE_AUTH

### public static final int AUTH_TYPE_TWO_FACTOR

### public static ServerWorldDatabase instance

### public String commandLineAdminUsername

### public String commandLineAdminPassword

### public boolean doAdmin

## Constructors

### public ServerWorldDatabase()

## Methods

### public void getWhitelistUsers(HashMap<String, NetworkUser> users)

**Parameters:**
- `HashMap<String, NetworkUser>` `users`

**Returns:** `void`

### public void getUserlogUsers(HashMap<String, NetworkUser> users)

**Parameters:**
- `HashMap<String, NetworkUser>` `users`

**Returns:** `void`

### public void updateUserCounters(Collection<NetworkUser> users)

**Parameters:**
- `Collection<NetworkUser>` `users`

**Returns:** `void`

### public boolean containsUser(String user,
String world)

**Parameters:**
- `String` `user`
- `String` `world`

**Returns:** `boolean`

### public boolean containsUser(String user)

**Parameters:**
- `String` `user`

**Returns:** `boolean`

### public boolean containsCaseinsensitiveUser(String user)

**Parameters:**
- `String` `user`

**Returns:** `boolean`

### public String changeUsername(String user,
String newUsername)
throws SQLException

**Parameters:**
- `String` `user`
- `String` `newUsername`

**Returns:** `String`

### public boolean isSteamIDinWhitelist(String steamID)
throws SQLException

**Parameters:**
- `String` `steamID`

**Returns:** `boolean`

### public boolean isSteamIDAllowed(String steamID)
throws SQLException

**Parameters:**
- `String` `steamID`

**Returns:** `boolean`

### public String addSteamID(String steamID)
throws SQLException

**Parameters:**
- `String` `steamID`

**Returns:** `String`

### public String removeSteamID(String steamID)
throws SQLException

**Parameters:**
- `String` `steamID`

**Returns:** `String`

### public String getTOTPCode(String secretKey)

**Parameters:**
- `String` `secretKey`

**Returns:** `String`

### public String addUser(String user,
String pass)
throws SQLException

**Parameters:**
- `String` `user`
- `String` `pass`

**Returns:** `String`

### public String addUser(String user,
String pass,
int authType)
throws SQLException

**Parameters:**
- `String` `user`
- `String` `pass`
- `int` `authType`

**Returns:** `String`

### public void updateDisplayName(String user,
String displayName)

**Parameters:**
- `String` `user`
- `String` `displayName`

**Returns:** `void`

### public String getDisplayName(String username)

**Parameters:**
- `String` `username`

**Returns:** `String`

### public String removeUser(String username,
String world)
throws SQLException

**Parameters:**
- `String` `username`
- `String` `world`

**Returns:** `String`

### public String removeUser(String username)
throws SQLException

**Parameters:**
- `String` `username`

**Returns:** `String`

### public void removeWholeUserLog(String username)
throws SQLException

**Parameters:**
- `String` `username`

**Returns:** `void`

### public void removeUserLog(String username,
String type,
String text)
throws SQLException

**Parameters:**
- `String` `username`
- `String` `type`
- `String` `text`

**Returns:** `void`

### public void connect()

**Returns:** `void`

### public void create()
throws SQLException,
ClassNotFoundException

**Returns:** `void`

### public void close()

**Returns:** `void`

### public static boolean isValidUserName(String user)

**Parameters:**
- `String` `user`

**Returns:** `boolean`

### public void saveRole(Role role)

**Parameters:**
- `Role` `role`

**Returns:** `void`

### public void removeRole(Role role,
Role newRoleInsteadExist)

**Parameters:**
- `Role` `role`
- `Role` `newRoleInsteadExist`

**Returns:** `void`

### public void saveDefaultRole(Role role,
String name)

**Parameters:**
- `Role` `role`
- `String` `name`

**Returns:** `void`

### public int getDefaultRoleId(String name)

**Parameters:**
- `String` `name`

**Returns:** `int`

### public void saveRoleCapabilities(Role role)

**Parameters:**
- `Role` `role`

**Returns:** `void`

### public void loadRoles(ArrayList<Role> roles)

**Parameters:**
- `ArrayList<Role>` `roles`

**Returns:** `void`

### public ServerWorldDatabase.LogonResult googleAuthClient(String user,
String code)

**Parameters:**
- `String` `user`
- `String` `code`

**Returns:** `ServerWorldDatabase.LogonResult`

### public ServerWorldDatabase.LogonResult authClient(String user,
String pass,
String ip,
long steamID,
int authType)

**Parameters:**
- `String` `user`
- `String` `pass`
- `String` `ip`
- `long` `steamID`
- `int` `authType`

**Returns:** `ServerWorldDatabase.LogonResult`

### public ServerWorldDatabase.LogonResult authClient(long steamID)

**Parameters:**
- `long` `steamID`

**Returns:** `ServerWorldDatabase.LogonResult`

### public ServerWorldDatabase.LogonResult authOwner(long steamID,
long ownerID)

**Parameters:**
- `long` `steamID`
- `long` `ownerID`

**Returns:** `ServerWorldDatabase.LogonResult`

### public static String encrypt(String previousPwd)

**Parameters:**
- `String` `previousPwd`

**Returns:** `String`

### public String changePassword(String username,
String newPwd)
throws SQLException

**Parameters:**
- `String` `username`
- `String` `newPwd`

**Returns:** `String`

### public String changePwd(String username,
String previousPwd,
String newPwd)
throws SQLException

**Parameters:**
- `String` `username`
- `String` `previousPwd`
- `String` `newPwd`

**Returns:** `String`

### public String setRole(String username,
Role role)
throws SQLException

**Parameters:**
- `String` `username`
- `Role` `role`

**Returns:** `String`

### public ArrayList<Userlog> getUserlog(String username)

**Parameters:**
- `String` `username`

**Returns:** `ArrayList<Userlog>`

### public void addUserlog(String username,
Userlog.UserlogType type,
String text,
String issuedBy,
int amount)

**Parameters:**
- `String` `username`
- `Userlog.UserlogType` `type`
- `String` `text`
- `String` `issuedBy`
- `int` `amount`

**Returns:** `void`

### public Role getUserRoleNameByUsername(String username)

**Parameters:**
- `String` `username`

**Returns:** `Role`

### public String banUser(String username,
boolean ban)
throws SQLException

**Parameters:**
- `String` `username`
- `boolean` `ban`

**Returns:** `String`

### public String getFirstBannedIPForUser(String username)

**Parameters:**
- `String` `username`

**Returns:** `String`

### public String banIp(String ip,
String username,
String reason,
boolean ban)
throws SQLException

**Parameters:**
- `String` `ip`
- `String` `username`
- `String` `reason`
- `boolean` `ban`

**Returns:** `String`

### public String isSteamIdBanned(String steamId)

**Parameters:**
- `String` `steamId`

**Returns:** `String`

### public String banSteamID(String steamID,
String reason,
boolean ban)
throws SQLException

**Parameters:**
- `String` `steamID`
- `String` `reason`
- `boolean` `ban`

**Returns:** `String`

### public String setUserSteamID(String user,
String steamID)

**Parameters:**
- `String` `user`
- `String` `steamID`

**Returns:** `String`

### public void setPassword(String username,
String encryptedPwd)
throws SQLException

**Parameters:**
- `String` `username`
- `String` `encryptedPwd`

**Returns:** `void`

### public String getUserGoogleKey(String username)
throws SQLException

**Parameters:**
- `String` `username`

**Returns:** `String`

### public boolean setUserGoogleKey(String username,
String key)
throws SQLException

**Parameters:**
- `String` `username`
- `String` `key`

**Returns:** `boolean`

### public void resetUserGoogleKey(String username)
throws SQLException

**Parameters:**
- `String` `username`

**Returns:** `void`

### public void updateLastConnectionDate(String u,
String p)

**Parameters:**
- `String` `u`
- `String` `p`

**Returns:** `void`

### public String addWarningPoint(String username,
String reason,
int amount,
String issuedBy)
throws SQLException

**Parameters:**
- `String` `username`
- `String` `reason`
- `int` `amount`
- `String` `issuedBy`

**Returns:** `String`

### public void addTicket(String author,
String message,
int ticketID)
throws SQLException

**Parameters:**
- `String` `author`
- `String` `message`
- `int` `ticketID`

**Returns:** `void`

### public void viewedTicket(int ticketID,
boolean viewed)
throws SQLException

**Parameters:**
- `int` `ticketID`
- `boolean` `viewed`

**Returns:** `void`

### public ArrayList<DBBannedIP> getBannedIPs()
throws SQLException

**Returns:** `ArrayList<DBBannedIP>`

### public ArrayList<DBBannedSteamID> getBannedSteamIDs()
throws SQLException

**Returns:** `ArrayList<DBBannedSteamID>`

### public ArrayList<DBTicket> getTickets(String playerName)
throws SQLException

**Parameters:**
- `String` `playerName`

**Returns:** `ArrayList<DBTicket>`

### public void removeTicket(int ticketID)
throws SQLException

**Parameters:**
- `int` `ticketID`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\ServerWorldDatabase.html`*
