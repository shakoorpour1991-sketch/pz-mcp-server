---
title: zombie.network.Server
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.Server

`public class Server extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.Server

## Constructors

### public Server()

## Methods

### public int getID()

**Returns:** `int`

### public void setID(int id)

**Parameters:**
- `int` `id`

**Returns:** `void`

### public boolean getNeedSave()

**Returns:** `boolean`

### public void setNeedSave(boolean needSave)

**Parameters:**
- `boolean` `needSave`

**Returns:** `void`

### public int getPort()

**Returns:** `int`

### public void setPort(int port)

**Parameters:**
- `int` `port`

**Returns:** `void`

### public String getIp2()

**Returns:** `String`

### public String getIp()

**Returns:** `String`

### public void setIp(String ip)

**Parameters:**
- `String` `ip`

**Returns:** `void`

### public String getDisplayAddress()

**Returns:** `String`

### public String getDisplayIp()

**Returns:** `String`

### public String getDisplayPort()

**Returns:** `String`

### public String getLocalIP()

**Returns:** `String`

### public void setLocalIP(String ip)

**Parameters:**
- `String` `ip`

**Returns:** `void`

### public String getServerPassword()

**Returns:** `String`

### public void setServerPassword(String pwd)

**Parameters:**
- `String` `pwd`

**Returns:** `void`

### public String getDescription()

**Returns:** `String`

### public void setDescription(String description)

**Parameters:**
- `String` `description`

**Returns:** `void`

### public LocalDateTime getLastOnline()

**Returns:** `LocalDateTime`

### public void setLastOnline(LocalDateTime lastOnline)

**Parameters:**
- `LocalDateTime` `lastOnline`

**Returns:** `void`

### public void setLastOnlineNow()

**Returns:** `void`

### public LocalDateTime getLastDataUpdate()

**Returns:** `LocalDateTime`

### public void setLastDataUpdate(LocalDateTime lastDataUpdate)

**Parameters:**
- `LocalDateTime` `lastDataUpdate`

**Returns:** `void`

### public void setLastDataUpdateNow()

**Returns:** `void`

### public ArrayList<Account> getAccounts()

**Returns:** `ArrayList<Account>`

### public void addAccount(Account account)

**Parameters:**
- `Account` `account`

**Returns:** `void`

### public void addAccount(String username,
String password,
boolean savePwd,
boolean userSteamRelay,
int authType)

**Parameters:**
- `String` `username`
- `String` `password`
- `boolean` `savePwd`
- `boolean` `userSteamRelay`
- `int` `authType`

**Returns:** `void`

### public void removeAccount(Account account)

**Parameters:**
- `Account` `account`

**Returns:** `void`

### @Deprecated
public String getUserName()

> ⚠️ **Deprecated**

**Returns:** `String`

### @Deprecated
public void setUserName(String userName)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `userName`

**Returns:** `void`

### @Deprecated
public String getPwd()

> ⚠️ **Deprecated**

**Returns:** `String`

### @Deprecated
public void setPwd(String pwd)

> ⚠️ **Deprecated**

**Parameters:**
- `String` `pwd`

**Returns:** `void`

### public void setPwd(String pwd,
boolean hashed)

**Parameters:**
- `String` `pwd`
- `boolean` `hashed`

**Returns:** `void`

### @Deprecated
public boolean getUseSteamRelay()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public void setUseSteamRelay(boolean useSteamRelay)

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `useSteamRelay`

**Returns:** `void`

### public int getLastUpdate()

**Returns:** `int`

### public void setLastUpdate(int lastUpdate)

**Parameters:**
- `int` `lastUpdate`

**Returns:** `void`

### public String getPlayers()

**Returns:** `String`

### public void setPlayers(String players)

**Parameters:**
- `String` `players`

**Returns:** `void`

### public boolean isOpen()

**Returns:** `boolean`

### public void setOpen(boolean open)

**Parameters:**
- `boolean` `open`

**Returns:** `void`

### public boolean isPublic()

**Returns:** `boolean`

### public void setPublic(boolean bPublic)

**Parameters:**
- `boolean` `bPublic`

**Returns:** `void`

### public String getVersion()

**Returns:** `String`

### public void setVersion(String version)

**Parameters:**
- `String` `version`

**Returns:** `void`

### public String getMaxPlayers()

**Returns:** `String`

### public void setMaxPlayers(String maxPlayers)

**Parameters:**
- `String` `maxPlayers`

**Returns:** `void`

### public String getMods()

**Returns:** `String`

### public void setMods(String mods)

**Parameters:**
- `String` `mods`

**Returns:** `void`

### public String getName()

**Returns:** `String`

### public void setName(String name)

**Parameters:**
- `String` `name`

**Returns:** `void`

### public String getPing()

**Returns:** `String`

### public void setPing(String ping)

**Parameters:**
- `String` `ping`

**Returns:** `void`

### public boolean isPasswordProtected()

**Returns:** `boolean`

### public void setPasswordProtected(boolean pp)

**Parameters:**
- `boolean` `pp`

**Returns:** `void`

### public String getSteamId()

**Returns:** `String`

### public void setSteamId(String steamId)

**Parameters:**
- `String` `steamId`

**Returns:** `void`

### public boolean isHosted()

**Returns:** `boolean`

### public void setHosted(boolean hosted)

**Parameters:**
- `boolean` `hosted`

**Returns:** `void`

### @Deprecated
public boolean isSavePwd()

> ⚠️ **Deprecated**

**Returns:** `boolean`

### @Deprecated
public void setSavePwd(boolean savePwd)

> ⚠️ **Deprecated**

**Parameters:**
- `boolean` `savePwd`

**Returns:** `void`

### @Deprecated
public int getAuthType()

> ⚠️ **Deprecated**

**Returns:** `int`

### @Deprecated
public void setAuthType(int authType)

> ⚠️ **Deprecated**

**Parameters:**
- `int` `authType`

**Returns:** `void`

### public void setServerIcon(Texture serverIcon)

**Parameters:**
- `Texture` `serverIcon`

**Returns:** `void`

### public void setServerLoadingScreen(Texture serverLoadingScreen)

**Parameters:**
- `Texture` `serverLoadingScreen`

**Returns:** `void`

### public void setServerLoginScreen(Texture serverLoginScreen)

**Parameters:**
- `Texture` `serverLoginScreen`

**Returns:** `void`

### public String getMapName()

**Returns:** `String`

### public void setMapName(String mapName)

**Parameters:**
- `String` `mapName`

**Returns:** `void`

### public Texture getServerIcon()

**Returns:** `Texture`

### public Texture getServerLoadingScreen()

**Returns:** `Texture`

### public Texture getServerLoginScreen()

**Returns:** `Texture`

### public int getServerCustomizationLastUpdate()

**Returns:** `int`

### public int getTimeFromServerCustomizationLastUpdate()

**Returns:** `int`

### public void setServerCustomizationLastUpdate(int serverCustomizationLastUpdate)

**Parameters:**
- `int` `serverCustomizationLastUpdate`

**Returns:** `void`

### public void updateServerCustomizationLastUpdate()

**Returns:** `void`

### public boolean isFeatured()

**Returns:** `boolean`

### public void setFeatured(boolean featured)

**Parameters:**
- `boolean` `featured`

**Returns:** `void`

### public boolean isResponded()

**Returns:** `boolean`

### public void setResponded(boolean responded)

**Parameters:**
- `boolean` `responded`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\Server.html`*
