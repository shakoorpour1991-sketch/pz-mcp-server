---
title: "PZ Java - Build 42"
source: "PZwiki (cleaned)"
build: '42.20'
tags: [pz, modding, build42]
---

# Java - Build 42

*Source: PZwiki — https://pzwiki.net/wiki/Java*

**Java** modding consists in creating mods directly in Java, which provides way more liberties than Lua modding, but is also more complex and has its own limitations. The principal limitation is that Java mods cannot be directly loaded from Workshop mods, and requires a manual installation from the users. Another limitation is that any changes to the game code of the classes you modify will be overwritten by any game updates, and will thus require you to update your mod way more often than other mod types, which isn't ideal for long term support.

You can access the game code by decompiling it.

If you are new to modding, or programming in general, it is recommended to start with Lua modding first.

## Loading Java mods

Java mods are not loaded automatically by the game, and require at least one or more manual installation by the user at some point. What this means is either you distribute Java files inside your mod files that users will need to manually copy into their game files, or you use one of the Java mod loaders that were created that the users will need to manually install once, but be able to load automatically Java mods that use them.

The `ProjectZomboid64.json` file indicates to the JVM what path for the Java files is to be used, it indicates the `projectzomboid.jar` will be loaded and the root folder which containes this configuration file (`.`). Java files are usually placed in the `zombie` folder:

📁 ProjectZomboid -- on Linux, this is ProjectZomboid/projectzomboid
 📁 media
 ...
 📁 zombie
 📄 YourModClass.class
 📁 characters
 📄 IsoZombie.java -- a base game class overwrite
 📄 ProjectZomboid64.json
 ...

You can load any custom class files, but they will not interact with the game until you hook or overwrite an existing class at some point. This is where Java mod loaders come in handy, as they provide a way to hook into the game code without needing to rewrite the entire class, which means no incompatibilities with other Java mods. Another advantage of Java mod loaders is that they can make it easier for Java mods to not break after updates depending on how they are implemented.

Available Java mod loaders:

* ZombieBuddyRecommended is a Java agent that allows mods to inject custom code into any game method using simple `@Patch` annotations with `OnEnter`/`OnExit` hooks.
* Leaf provides a mod loader for Java mods and tools to not require a full rewrite of the classes you want to modify, without needing you to update your mod as often.
* Necroid is an external Java mod loader that compiles the mods on the fly, meaning as long as the API doesn't change, the mod will still work without needing an update.

## Installing Java

You can download the last version on Oracle's website, but other Java implementations such as OpenJDK will work too. Make sure to restart your terminal after downloading a new java version if you are decompiling from it.

## Recompiling the Java code

After decompiling the Java, it is possibly to modify it and recompile it to create Java mods. As of Build 42.13.0, Project Zomboid uses Java Version 25. To compile and run custom Java code for Project Zomboid, you must be using Java version 25.

To compile a .java file into a .class file, type this command into a suitable terminal such as Powershell or Command Prompt, replacing "GameFiles" with the path to your Project Zomboid game files, and "path/file.java" with the path to the file you want to compile.

javac -cp "GameFiles\projectzomboid.jar" "path/file.java"

You can then drag the class file into your game or server files (GameFiles/zombie/iso for example) and the class files should run.

Normally there is no "zombie" folder in your game files, but the game will still recognize the directory and will still run the class files placed in it. If you want to overwrite an existing vanilla class file, create a directory and file name that matches the location and name of the vanilla class file to be overridden.
