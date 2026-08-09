---
title: "PZ Startup Parameters - Build 42"
source: "PZwiki (cleaned)"
build: '42.18'
tags: [pz, modding, build42]
---

# Startup Parameters - Build 42

*Cleaned from PZwiki. Original: pzwiki-net-wiki-Startup-parameters.md*

The official [Project Zomboid Map Project](https://pzwiki.net/wiki/Project_Zomboid_Map_Project "Project Zomboid Map Project") has been updated to support [Build 42](https://pzwiki.net/wiki/Build_42 "Build 42").

PZwiki pages are getting updated to [Build 42](https://pzwiki.net/wiki/Build_42 "Build 42"). We appreciate your patience during the updates.

Help us by contributing to the [Project Build 42 Update](https://pzwiki.net/wiki/PZwiki:Project_Build_42_Update "PZwiki:Project Build 42 Update").


[Modding](https://pzwiki.net/wiki/Modding "Modding")

Give your feedback on the Modding Wiki [here](https://docs.google.com/forms/d/e/1FAIpQLSdxBWwKUcNP_KbzmmWo1eNc2QkpWk5dTj4PMhuNLY9_dc4IEw/viewform?usp=header)!

* * *


* * *

July Modding News

- Upcoming [Build 42.20.0](https://pzwiki.net/wiki/Build_42.20.0 "Build 42.20.0") is the a candidate for stable release, expecting less modding breaking changes to the modding API.
- [JavaDocs](https://pzwiki.net/wiki/JavaDocs "JavaDocs") for B42 moved to new link: [here](https://albion.codeberg.page/PZ-JavaDocs/).

[](https://pzwiki.net/wiki/Template:Page_version "Template:Page version")

This page has been updated to an _unstable_ beta version ( [42.17.0](https://pzwiki.net/wiki/Build_42.17.0 "Build 42.17.0")).

_For the Build 41 page, [please see this archived version](https://pzwiki.net/wiki/Special:PermanentLink/791137 "Special:PermanentLink/791137")._

There may be additional features that are not in the stable version ( [41.78.19](https://pzwiki.net/wiki/Build_41.78.19 "Build 41.78.19")).

Help get this page updated to the current unstable version ( [42.19.0](https://pzwiki.net/wiki/Build_42.19.0 "Build 42.19.0")). [Edit](https://pzwiki.net/w/index.php?title=Startup_parameters&veaction=edit) ( [Create account](https://pzwiki.net/w/index.php?title=Special%3ACreateAccount&returnto=Startup+parameters))

Project Zomboid has customizable **startup parameters** that are used to override the default options of the launcher, JVM, and game. JVM arguments must be provided first and end with `--` even if there are no game arguments. Game arguments can be passed to the launcher because they are forwarded to the game itself.

## Usage

### From the [Steam](https://pzwiki.net/wiki/Steam "Steam") application

1. Right-click the game in the _Steam Library_, a menu will pop up.
2. Click _Properties_. A new modal window will appear.
3. By default the 'general' tab in the modal window should be opened, but if not, click it.
4. Look under _Launch Options_ → _Selected Launch Option_. Add a parameter from the table below, e.g., `-debug` to the field.
5. Close window and launch the game.

#### Example

```
-Xmx8192m -Xms8192m -- -debug
```

### From a game shortcut

1. Navigate to the game folder via right-clicking _Project Zomboid_ in the _Steam Library_ → _Manage_ → _Browse local files_.
2. Create a shortcut of the game launcher `ProjectZomboid<32/64>.exe`.
3. Add the arguments to the _Target_ field.

#### Example

```
"C:\ProjectZomboid64.exe" -Xmx8192m -Xms8192m -- -debug
```

### From the StartServer64.bat parameters

This method is only for dedicated servers.

1. Open the `StartServer64.bat` script with a text editor.
2. Add any JVM arguments after the `-Xmx` line in the script.
3. Add any game parameters after the `%1 %2` text inside the script, which is at the end of the file before PAUSE.

[](https://pzwiki.net/wiki/Template:Note "Template:Note")

Here the `--` is not needed because the script already separates the JVM and game arguments.

#### Example

```
-Xmx16g -Duser.home=C:\Zomboid
```

```
%1 %2 -nosteam -servername MySecondServer -adminpassword Password123
```

## Common use cases

### Increasing allocated memory

To increase the maximum allocated memory to 8 GB and the minimum to 8 GB, add the following to the launch options:

```
-Xmx8192m -Xms8192m --
```

### Opening the game in debug mode

To open the game in debug mode, add the following to the launch options:

```
-debug
```

### Disabling Steam integration

To disable Steam integration, add the following to the launch options:

```
-nosteam
```

## Game arguments

### Client & server

| Arguments | Description | Example |
| --- | --- | --- |
| `-console_dot_txt_size_kb={int size}` | Sets the maximum console.txt file size in kilobytes. | `-console_dot_txt_size_kb=512000` |
| `-cachedir={str path}` | Sets the absolute path for the game's cache directory. | `-cachedir="C:\Zomboid"` |
| `-nosteam` | This is equal to using the `-Dzomboid.steam` JVM property. |  |

### Client

| Arguments | Description | Example |
| --- | --- | --- |
| `-safemode` | Launches the game with reduced resolution, texture compression, 1x tile scale, and 1x texture scale. Disables the [WeatherShader](https://projectzomboid.com/modding/zombie/iso/weather/WeatherShader.html) and [FBO](https://www.khronos.org/opengl/wiki/Framebuffer_Object) support. No FBO means that offscreen rendering will not work! The game will enable safe mode if it fails to create a framebuffer object. |  |
| `-nosound` | Disables the game audio. This has the side effect of disabling some aspects of the voice chat. |  |
| `-aitest` | Enables the AI testing mode. It has been neglected and isn't used anywhere but to set [IsoGameCharacter.isNPC](https://projectzomboid.com/modding/zombie/characters/IsoGameCharacter.html#isNPC()). |  |
| `-novoip` | Disables the [VoiceManager](https://projectzomboid.com/modding/zombie/core/raknet/VoiceManager.html) from starting, which controls in-game voice chat. |  |
| `-debug` | Launches the game in [debug mode](https://pzwiki.net/wiki/Debug_mode "Debug mode"). Makes the [CoopMaster](https://projectzomboid.com/modding/zombie/network/CoopMaster.html) coop server use debug mode. |  |
| `-debuglog={DebugType[] types}` | Enables certain filters in the console log. Takes in a comma-separated list of [DebugType](https://projectzomboid.com/modding/zombie/debug/DebugType.html) values. Since the client doesn't have `-disablelog`, this allows us to specify whether to enable or disable the filter. | `-debuglog=All`<br>`-debuglog=Network,-Sound` |
| `+connect {str ip}:{str port}` | This is equivalent to using the `-Dargs.server.connect` JVM property. | `+connect 127.0.0.1:16261` |
| `+password {str password}` | This is equivalent to using the `-Dargs.server.password` JVM property. | `+password ServersPassword` |
| `-debugtranslation` | Enables the debug mode for the [Translator](https://projectzomboid.com/modding/zombie/core/Translator.html) class. Writes possible translation issues to `cachedir/translationProblems.txt` and allows for reloading translation files while holding F12 in-game. |  |
| `-modfolders {Folder[] folders}` | Controls where mods load from and their load order. There are only 3 possible folders. Any folder can be unspecified to disable the game from loading mods in that directory, and rearranged to change the load order of the mods. | `-modfolders workshop,steam,mods`<br>`-modfolders workshop,steam` |
| `-imgui` | Launches the game in [debug mode](https://pzwiki.net/wiki/Debug_mode "Debug mode") with [Imgui](https://pzwiki.net/wiki/Imgui "Imgui") enabled. |  |
| `-imguidebugviewports` | Launches the game in [debug mode](https://pzwiki.net/wiki/Debug_mode "Debug mode") with [Imgui](https://pzwiki.net/wiki/Imgui "Imgui") enabled in a separate window. |  |

### Server

| Arguments | Description | Example |
| --- | --- | --- |
| `-coop` | Runs a coop server instead of a dedicated server. Disables the default admin from being accessible. |  |
| `-disablelog={DebugType[] types}` | Disables certain filters in the console log. Takes in a comma-separated list of [DebugType](https://projectzomboid.com/modding/zombie/debug/DebugType.html) values. | `-disablelog=All`<br>`-disablelog=Network,Sound` |
| `-debuglog={DebugType[] types}` | Enables certain filters in the console log. Takes in a comma-separated list of [DebugType](https://projectzomboid.com/modding/zombie/debug/DebugType.html) values. | `-debuglog=All`<br>`-debuglog=Network,Sound` |
| `-adminusername {str name}` | Uses a different username for the default admin user when creating a server. It doesn't remove the previous default admin user if there is one. | `-adminusername BobTheAdmin75` |
| `-adminpassword {str pass}` | Set the default admin user's password automatically, bypassing the prompt if the default admin user is not found. | `-adminpassword ReallySecurePassword` |
| `-ip {str ip}` | Forces the server to bind to a specific IP address. | `-ip 123.45.678.9` |
| `-gui` | Launches the server GUI alongside the console. Another neglected argument that is unfinished, doesn't render properly, causes lots of exceptions, and uses extra memory. |  |
| `-statistic {int period}` | Enables multiplayer statistics monitoring. The period is measured in seconds. Monitored statistics are saved in the `cachedir/Statistic` directory. | `-statistic 10` |
| `-port {int port}` | Overrides the DefaultPort config option in the INI file. | `-port 16261` |
| `-udpport {int port}` | Overrides the UDPPort config option in the INI file. | `-udpport 16261` |
| `-steamvac {bool enabled}` | Enables or disables [Valve Anti-Cheat](https://en.wikipedia.org/wiki/Valve_Anti-Cheat "wikipedia:Valve Anti-Cheat") on the server. Overrides the option in the server INI config. | `-steamvac true` |
| `-servername {str name}` | Sets the internal servername to use. It affects the name of the save files that are loaded/saved. | `-servername AnotherWorldSave` |

## JVM arguments

[](https://pzwiki.net/wiki/Template:Note "Template:Note")

JVM arguments must be provided first before client/server arguments and ending with `--` even if there are no game arguments. `--` must be included at the ending if Java arguments are used.

### Client & server

| Arguments | Description | Example |
| --- | --- | --- |
| `-Xms{int size}{char unit}` | The minimum amount of memory to allocate to the JVM. The game will not start if there is not enough memory available on the system to allocate. The unit can be `g` or `m`. | `-Xms8192m` |
| `-Xmx{int size}{char unit}` | The maximum amount of memory to allocate to the JVM. Setting this above the physical RAM amount of the system will end up using virtual memory. The unit can be `g` or `m`. | `-Xmx8192m` |
| `-XX:+AlwaysPreTouch` | Requests the VM to touch every page on the Java heap after requesting it from the operating system and before handing memory out to the application. If you are using ZGC it is officially recommended that one enables this option as of Java 21. [\[1\]](https://pzwiki.net/wiki/Startup_parameters#cite_note-1) |  |
| `-Dzomboid.ConsoleDotTxtSizeKB={int size}` | Sets the maximum console.txt file size in kilobytes. | `-Dzomboid.ConsoleDotTxtSizeKB=512000` |
| `-Dzomboid.steam={int enabled}` | Disables the game's Steam API integration, which prevents joining Steam servers or accessing Workshop content. | `-Dzomboid.steam=1` |
| `-Ddeployment.user.cachedir={str path}` | Sets the game's cache directory. The same as setting `-cachedir`. Only works on Linux. | `-Ddeployment.user.cachedir="/home/user/zomboid_server"` |
| `-Dsoftreset` | Forces the game to perform a soft reset. This does not work as of 41.78.19. The issue was reported and could be fixed in [future versions](https://pzwiki.net/wiki/Build_42 "Build 42")[\[2\]](https://pzwiki.net/wiki/Startup_parameters#cite_note-2). |  |
| `-Ddebug` | Launches the game in [debug mode](https://pzwiki.net/wiki/Debug_mode "Debug mode"). Makes the [CoopMaster](https://projectzomboid.com/modding/zombie/network/CoopMaster.html) coop server use debug mode if enabled. |  |

### Client

| Arguments | Description | Example |
| --- | --- | --- |
| `-Dargs.server.connect={str ip}:{str port}` | Connects to the server specified without needing to use the server browser. | `-Dargs.server.connect="123.4.567.89:16261"` |
| `-Dargs.server.password={str pass}` | Provides the server being connected to a password without needing to use the server browser. | `-Dargs.server.password="DinoNuggetsTasteGood!!"` |

## Launcher arguments

### Client

| Arguments | Description | Example |
| --- | --- | --- |
| `-pzexeconfig {str config}` | Overrides the default launcher config `ProjectZomboid64.json`. An alternative to specifying args in the bat or in launch options. | `-pzexeconfig ProjectZomboid64Custom.json` |
| `-pzexelog {str logfile}` | Stores the logging output of the launcher `ProjectZomboid64.exe`. It is only useful for debugging purposes. | `-pzexelog ProjectZomboid64.log` |

## References

1. [↑](https://pzwiki.net/wiki/Startup_parameters#cite_ref-1 "Jump up")[HotSpot Virtual Machine Garbage Collection Tuning Guide](https://docs.oracle.com/en/java/javase/25/gctuning/z-garbage-collector.html)
2. [↑](https://pzwiki.net/wiki/Startup_parameters#cite_ref-2 "Jump up")[Dedicated Server Soft Reset :: Project Zomboid General Discussions](https://steamcommunity.com/app/108600/discussions/0/3191367619812018387/)