---
title: zombie.ZomboidFileSystem
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.ZomboidFileSystem

`public final class ZomboidFileSystem extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.ZomboidFileSystem

## Fields

### public static final ZomboidFileSystem instance

### public final HashMap<String,String> activeFileMap

### public final ZomboidFileSystem.PZFolder base

### public final ThreadLocal<Boolean> ignoreActiveFileMap

## Methods

### public void init()
throws IOException

**Returns:** `void`

### public File getCanonicalFile(File parent,
String child)

**Parameters:**
- `File` `parent`
- `String` `child`

**Returns:** `File`

### public String getGameModeCacheDir()

**Returns:** `String`

### public String getCurrentSaveDir()

**Returns:** `String`

### public String getFileNameInCurrentSave(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `String`

### public String getFileNameInCurrentSave(String subDir,
String fileName)

**Parameters:**
- `String` `subDir`
- `String` `fileName`

**Returns:** `String`

### public String getFileNameInCurrentSave(String subDir1,
String subDir2,
String fileName)

**Parameters:**
- `String` `subDir1`
- `String` `subDir2`
- `String` `fileName`

**Returns:** `String`

### public File getFileInCurrentSave(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `File`

### public File getFileInCurrentSave(String subDir,
String fileName)

**Parameters:**
- `String` `subDir`
- `String` `fileName`

**Returns:** `File`

### public File getFileInCurrentSave(String subDir1,
String subDir2,
String fileName)

**Parameters:**
- `String` `subDir1`
- `String` `subDir2`
- `String` `fileName`

**Returns:** `File`

### public String getSaveDir()

**Returns:** `String`

### public String getSaveDirSub(String subPath)

**Parameters:**
- `String` `subPath`

**Returns:** `String`

### public String getScreenshotDir()

**Returns:** `String`

### public String getScreenshotDirSub(String subPath)

**Parameters:**
- `String` `subPath`

**Returns:** `String`

### public void setCacheDir(String dir)

**Parameters:**
- `String` `dir`

**Returns:** `void`

### public String getCacheDir()

**Returns:** `String`

### public String getCacheDirSub(String subPath)

**Parameters:**
- `String` `subPath`

**Returns:** `String`

### public String getMessagingDir()

**Returns:** `String`

### public String getMessagingDirSub(String subPath)

**Parameters:**
- `String` `subPath`

**Returns:** `String`

### public URI getMediaLowercaseURI()

**Returns:** `URI`

### public File getMediaRootFile()

**Returns:** `File`

### public String getMediaRootPath()

**Returns:** `String`

### public File getMediaFile(String subPath)

**Parameters:**
- `String` `subPath`

**Returns:** `File`

### public String getMediaPath(String subPath)

**Parameters:**
- `String` `subPath`

**Returns:** `String`

### public String getAbsoluteWorkDir()

**Returns:** `String`

### public String getLocalWorkDir()

**Returns:** `String`

### public String getLocalWorkDirSub(String subPath)

**Parameters:**
- `String` `subPath`

**Returns:** `String`

### public File getAnimsXFile()

**Returns:** `File`

### public String getAnimSetsPath()

**Returns:** `String`

### public String getActionGroupsPath()

**Returns:** `String`

### public static boolean ensureFolderExists(String path)

**Parameters:**
- `String` `path`

**Returns:** `boolean`

### public static boolean ensureFolderExists(File directory)

**Parameters:**
- `File` `directory`

**Returns:** `boolean`

### public void searchFolders(File fo)

**Parameters:**
- `File` `fo`

**Returns:** `void`

### public Object[] getAllPathsContaining(String str)

**Parameters:**
- `String` `str`

**Returns:** `Object[]`

### public Object[] getAllPathsContaining(String str,
String str2)

**Parameters:**
- `String` `str`
- `String` `str2`

**Returns:** `Object[]`

### public String getString(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

### public String getDirectoryString(String str)

**Parameters:**
- `String` `str`

**Returns:** `String`

### public boolean isKnownFile(String str)

**Parameters:**
- `String` `str`

**Returns:** `boolean`

### public String getAbsolutePath(String rel)

**Parameters:**
- `String` `rel`

**Returns:** `String`

### public void Reset()

**Returns:** `void`

### public File getCanonicalFile(File file)

**Parameters:**
- `File` `file`

**Returns:** `File`

### public File getCanonicalFile(String path)

**Parameters:**
- `String` `path`

**Returns:** `File`

### public String getCanonicalPath(File file)

**Parameters:**
- `File` `file`

**Returns:** `String`

### public String getCanonicalPath(String path)

**Parameters:**
- `String` `path`

**Returns:** `String`

### public URI getCanonicalURI(String path)

**Parameters:**
- `String` `path`

**Returns:** `URI`

### public void resetModFolders()

**Returns:** `void`

### public void getInstalledItemModsFolders(ArrayList<String> out)

**Parameters:**
- `ArrayList<String>` `out`

**Returns:** `void`

### public void getStagedItemModsFolders(ArrayList<String> out)

**Parameters:**
- `ArrayList<String>` `out`

**Returns:** `void`

### public String getModVersionDirName(Path modDir)

**Parameters:**
- `Path` `modDir`

**Returns:** `String`

### public void setModFoldersOrder(String s)

**Parameters:**
- `String` `s`

**Returns:** `void`

### public void getAllModFolders(List<String> out)

**Parameters:**
- `List<String>` `out`

**Returns:** `void`

### public int getGameVersionIntFromName(String name)

**Parameters:**
- `String` `name`

**Returns:** `int`

### public ArrayList<ChooseGameInfo.Mod> getWorkshopItemMods(long itemID)

**Parameters:**
- `long` `itemID`

**Returns:** `ArrayList<ChooseGameInfo.Mod>`

### public void setModIdToDir(String id,
String dir)

**Parameters:**
- `String` `id`
- `String` `dir`

**Returns:** `void`

### public ChooseGameInfo.Mod searchForModInfo(File path,
String modSearched,
ArrayList<ChooseGameInfo.Mod> mods)

**Parameters:**
- `File` `path`
- `String` `modSearched`
- `ArrayList<ChooseGameInfo.Mod>` `mods`

**Returns:** `ChooseGameInfo.Mod`

### public void loadMod(String modId)

**Parameters:**
- `String` `modId`

**Returns:** `void`

### public void loadMods(String activeMods)

**Parameters:**
- `String` `activeMods`

**Returns:** `void`

### public String loadModsAux(ArrayList<String> toLoad,
ArrayList<String> ordered)

**Parameters:**
- `ArrayList<String>` `toLoad`
- `ArrayList<String>` `ordered`

**Returns:** `String`

### public void loadMods(ArrayList<String> toLoad)

**Parameters:**
- `ArrayList<String>` `toLoad`

**Returns:** `void`

### public ArrayList<String> getModIDs()

**Returns:** `ArrayList<String>`

### public String getModDir(String modId)

**Parameters:**
- `String` `modId`

**Returns:** `String`

### public ChooseGameInfo.Mod getModInfoForDir(String modDir)

**Parameters:**
- `String` `modDir`

**Returns:** `ChooseGameInfo.Mod`

### public ChunkGenerationStatus isModded(String path)

**Parameters:**
- `String` `path`

**Returns:** `ChunkGenerationStatus`

### public String getRelativeFile(File file)

**Parameters:**
- `File` `file`

**Returns:** `String`

### public String getRelativeFile(String string)

**Parameters:**
- `String` `string`

**Returns:** `String`

### public String getRelativeFile(URI root,
File file)

**Parameters:**
- `URI` `root`
- `File` `file`

**Returns:** `String`

### public String getRelativeFile(URI root,
String string)

**Parameters:**
- `URI` `root`
- `String` `string`

**Returns:** `String`

### public String getAnimName(URI mediaURI,
File file)

**Parameters:**
- `URI` `mediaURI`
- `File` `file`

**Returns:** `String`

### public String resolveRelativePath(String srcFilePath,
String relativePath)

**Parameters:**
- `String` `srcFilePath`
- `String` `relativePath`

**Returns:** `String`

### public void saveModsFile()

**Returns:** `void`

### public void loadModPackFiles()

**Returns:** `void`

### public void loadModTileDefs()

**Returns:** `void`

### public void loadModTileDefPropertyStrings()

**Returns:** `void`

### public void loadFileGuidTable()

**Returns:** `void`

### public FileGuidTable getFileGuidTable()

**Returns:** `FileGuidTable`

### public String getFilePathFromGuid(String guid)

**Parameters:**
- `String` `guid`

**Returns:** `String`

### public String getGuidFromFilePath(String path)

**Parameters:**
- `String` `path`

**Returns:** `String`

### public String resolveFileOrGUID(String source)

**Parameters:**
- `String` `source`

**Returns:** `String`

### public boolean isValidFilePathGuid(String source)

**Parameters:**
- `String` `source`

**Returns:** `boolean`

### public static File[] listAllDirectories(String rootPath,
FileFilter filter,
boolean recursive)

**Parameters:**
- `String` `rootPath`
- `FileFilter` `filter`
- `boolean` `recursive`

**Returns:** `File[]`

### public static File[] listAllDirectories(File root,
FileFilter filter,
boolean recursive)

**Parameters:**
- `File` `root`
- `FileFilter` `filter`
- `boolean` `recursive`

**Returns:** `File[]`

### public static File[] listAllFiles(String folderPath,
FileFilter filter,
boolean recursive)

**Parameters:**
- `String` `folderPath`
- `FileFilter` `filter`
- `boolean` `recursive`

**Returns:** `File[]`

### public static File[] listAllFiles(File folder,
FileFilter filter,
boolean recursive)

**Parameters:**
- `File` `folder`
- `FileFilter` `filter`
- `boolean` `recursive`

**Returns:** `File[]`

### public static File[] listAllFiles(File folder)

**Parameters:**
- `File` `folder`

**Returns:** `File[]`

### public void walkGameAndModFiles(String relPath,
boolean recursive,
ZomboidFileSystem.IWalkFilesVisitor consumer)

**Parameters:**
- `String` `relPath`
- `boolean` `recursive`
- `ZomboidFileSystem.IWalkFilesVisitor` `consumer`

**Returns:** `void`

### public String[] resolveAllDirectories(String relPath,
FileFilter filter,
boolean recursive)

**Parameters:**
- `String` `relPath`
- `FileFilter` `filter`
- `boolean` `recursive`

**Returns:** `String[]`

### public String[] resolveAllFiles(String relPath,
FileFilter filter,
boolean recursive)

**Parameters:**
- `String` `relPath`
- `FileFilter` `filter`
- `boolean` `recursive`

**Returns:** `String[]`

### public String normalizeFolderPath(String path)

**Parameters:**
- `String` `path`

**Returns:** `String`

### public static String processFilePath(String filePath,
char separatorChar)

**Parameters:**
- `String` `filePath`
- `char` `separatorChar`

**Returns:** `String`

### public boolean tryDeleteFile(String filePath)

**Parameters:**
- `String` `filePath`

**Returns:** `boolean`

### public static boolean deleteDirectory(String dirPath)

**Parameters:**
- `String` `dirPath`

**Returns:** `boolean`

### public boolean deleteFile(String filePath)
throws IOException

**Parameters:**
- `String` `filePath`

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public void cleanMultiplayerSaves()

**Returns:** `void`

### public void resetDefaultModsForNewRelease(String versionStr)

**Parameters:**
- `String` `versionStr`

**Returns:** `void`

### public static String getStartupTimeStamp()

**Returns:** `String`

### public static String getDateTimeStampStringNow()

**Returns:** `String`

### public static String getDateTimeStampString(Date time)

**Parameters:**
- `Date` `time`

**Returns:** `String`

### public static String getDateStampString(Date time)

**Parameters:**
- `Date` `time`

**Returns:** `String`

### public static String getTimeStampString(Date time,
SimpleDateFormat format)

**Parameters:**
- `Date` `time`
- `SimpleDateFormat` `format`

**Returns:** `String`

### public static String getTimeStampStringNow(SimpleDateFormat format)

**Parameters:**
- `SimpleDateFormat` `format`

**Returns:** `String`

### public static String getFileExtension(String path)

**Parameters:**
- `String` `path`

**Returns:** `String`

### public void validatePrefix(String input)

**Parameters:**
- `String` `input`

**Returns:** `void`

### public static String getFileName(String filePath)

**Parameters:**
- `String` `filePath`

**Returns:** `String`

### public static String getFileNameNoExtension(String filePath)

**Parameters:**
- `String` `filePath`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\ZomboidFileSystem.html`*
