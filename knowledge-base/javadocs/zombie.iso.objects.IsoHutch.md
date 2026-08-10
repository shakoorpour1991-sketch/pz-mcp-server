---
title: zombie.iso.objects.IsoHutch
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.objects
---

# zombie.iso.objects.IsoHutch

`public class IsoHutch extends IsoObject`

**Kind:** class · **Package:** zombie.iso.objects

## Inheritance
- java.lang.Object
- zombie.entity.GameEntity
- zombie.iso.IsoObject
- zombie.iso.objects.IsoHutch

## Fields

### public int savedX

### public int savedY

### public int savedZ

### public HashMap<Integer, IsoAnimal> animalInside

### public HashMap<Integer, IsoDeadBody> deadBodiesInside

### public ArrayList<IsoAnimal> animalOutside

### public String type

### public int lastHourCheck

## Constructors

### public IsoHutch(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

### public IsoHutch(IsoGridSquare sq,
boolean north,
String mainSprite,
se.krka.kahlua.j2se.KahluaTableImpl def,
IsoGridSquare linkedSq)

**Parameters:**
- `IsoGridSquare` `sq`
- `boolean` `north`
- `String` `mainSprite`
- `se.krka.kahlua.j2se.KahluaTableImpl` `def`
- `IsoGridSquare` `linkedSq`

## Methods

### public IsoHutch getHutch()

**Returns:** `IsoHutch`

### public static IsoHutch getHutch(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoHutch`

### public void transmitCompleteItemToClients()

**Returns:** `void`

### public void syncIsoObjectSend(ByteBufferWriter b)

**Parameters:**
- `ByteBufferWriter` `b`

**Returns:** `void`

### public void syncIsoObjectReceive(ByteBufferReader bb)

**Parameters:**
- `ByteBufferReader` `bb`

**Returns:** `void`

### public boolean haveRoomForNewEggs()

**Returns:** `boolean`

### public void update()

**Returns:** `void`

### public void doMeta(int hours)

**Parameters:**
- `int` `hours`

**Returns:** `void`

### public void killAnimal(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void removeAnimal(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void tryFindAndRemoveAnimalFromNestBox(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public boolean addAnimalInNestBox(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `boolean`

### public void addEgg(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void toggleEggHatchDoor()

**Returns:** `void`

### public void reforceUpdate()

**Returns:** `void`

### public void toggleDoor()

**Returns:** `void`

### public boolean isOpen()

**Returns:** `boolean`

### public boolean addAnimalInside(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `boolean`

### public boolean addAnimalInside(IsoAnimal animal,
boolean bSync)

**Parameters:**
- `IsoAnimal` `animal`
- `boolean` `bSync`

**Returns:** `boolean`

### public void addAnimalOutside(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`
- `boolean` `isDebugSave`

**Returns:** `void`

### public void save(ByteBuffer output,
boolean isDebugSave)
throws IOException

**Parameters:**
- `ByteBuffer` `output`
- `boolean` `isDebugSave`

**Returns:** `void`

### public boolean addMetaEgg(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `boolean`

### public boolean isSlave()

**Returns:** `boolean`

### public String getObjectName()

**Returns:** `String`

### public void addToWorld()

**Returns:** `void`

### public void removeHutch()

**Returns:** `void`

### public void removeHutchObject(IsoHutch hutch)

**Parameters:**
- `IsoHutch` `hutch`

**Returns:** `void`

### public List<IsoHutch> getAllHutchObjects()

**Returns:** `List<IsoHutch>`

### public void removeFromWorld()

**Returns:** `void`

### public void dropAllEggs()

**Returns:** `void`

### public void releaseAllAnimals()

**Returns:** `void`

### public HashMap<Integer, IsoAnimal> getAnimalInside()

**Returns:** `HashMap<Integer, IsoAnimal>`

### public IsoAnimal getAnimal(Integer index)

**Parameters:**
- `Integer` `index`

**Returns:** `IsoAnimal`

### public IsoDeadBody getDeadBody(Integer index)

**Parameters:**
- `Integer` `index`

**Returns:** `IsoDeadBody`

### public int getMaxAnimals()

**Returns:** `int`

### public int getMaxNestBox()

**Returns:** `int`

### public int getEnterSpotX()

**Returns:** `int`

### public int getEnterSpotY()

**Returns:** `int`

### public boolean haveEggHatchDoor()

**Returns:** `boolean`

### public boolean isEggHatchDoorOpen()

**Returns:** `boolean`

### public boolean isEggHatchDoorClosed()

**Returns:** `boolean`

### public IsoGridSquare getEntrySq()

**Returns:** `IsoGridSquare`

### public IsoAnimal getAnimalInNestBox(Integer index)

**Parameters:**
- `Integer` `index`

**Returns:** `IsoAnimal`

### public IsoHutch.NestBox getNestBox(Integer index)

**Parameters:**
- `Integer` `index`

**Returns:** `IsoHutch.NestBox`

### public float getHutchDirt()

**Returns:** `float`

### public void setHutchDirt(float hutchDirt)

**Parameters:**
- `float` `hutchDirt`

**Returns:** `void`

### public float getNestBoxDirt()

**Returns:** `float`

### public void setNestBoxDirt(float nestBoxDirt)

**Parameters:**
- `float` `nestBoxDirt`

**Returns:** `void`

### public boolean isDoorClosed()

**Returns:** `boolean`

### public boolean isAllDoorClosed()

**Returns:** `boolean`

### public boolean isOwner()

**Returns:** `boolean`

### public void tryRemoveAnimalFromWorld(IsoAnimal animal)

**Parameters:**
- `IsoAnimal` `animal`

**Returns:** `void`

### public void handleBurning()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\objects\IsoHutch.html`*
