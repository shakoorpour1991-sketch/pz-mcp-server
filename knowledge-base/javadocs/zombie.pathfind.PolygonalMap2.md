---
title: zombie.pathfind.PolygonalMap2
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pathfind
---

# zombie.pathfind.PolygonalMap2

`public final class PolygonalMap2 extends Object`

**Kind:** class · **Package:** zombie.pathfind

## Inheritance
- java.lang.Object
- zombie.pathfind.PolygonalMap2

## Fields

### public static final PolygonalMap2 instance

### public static final float RADIUS

### public static final boolean CLOSE_TO_WALLS

### public static final boolean PATHS_UNDER_VEHICLES

### public static final boolean COLLIDE_CLIPPER

### public static final boolean COLLIDE_BEVEL

### public static final int CXN_FLAG_CAN_PATH

### public static final int CXN_FLAG_THUMP

### public static final int NODE_FLAG_CRAWL

### public static final int NODE_FLAG_CRAWL_INTERIOR

### public static final int NODE_FLAG_IN_CHUNK_DATA

### public static final int NODE_FLAG_PERIMETER

### public static final int NODE_FLAG_STAIR

### public static final int NODE_FLAG_KEEP

### public static final int LCC_ZERO

### public static final int LCC_IGNORE_DOORS

### public static final int LCC_CLOSE_TO_WALLS

### public static final int LCC_CHECK_COST

### public static final int LCC_RENDER

### public static final int LCC_ALLOW_ON_EDGE

### public static final float RADIUS_DIAGONAL

### public static final Vector2 temp

### public static final int SQUARES_PER_CHUNK

### public static final int LEVELS_PER_CHUNK

### public static final int GROUND_LEVEL

### public static final int CHUNKS_PER_CELL

### public static final int BIT_SOLID

### public static final int BIT_COLLIDE_W

### public static final int BIT_COLLIDE_N

### public static final int BIT_STAIR_TW

### public static final int BIT_STAIR_MW

### public static final int BIT_STAIR_BW

### public static final int BIT_STAIR_TN

### public static final int BIT_STAIR_MN

### public static final int BIT_STAIR_BN

### public static final int BIT_SOLID_FLOOR

### public static final int BIT_WINDOW_W

### public static final int BIT_WINDOW_N

### public static final int BIT_CAN_PATH_W

### public static final int BIT_CAN_PATH_N

### public static final int BIT_THUMP_W

### public static final int BIT_THUMP_N

### public static final int BIT_THUMPABLE

### public static final int BIT_DOOR_E

### public static final int BIT_DOOR_S

### public static final int BIT_WINDOW_W_UNBLOCKED

### public static final int BIT_WINDOW_N_UNBLOCKED

### public static final int BIT_DOOR_W_UNBLOCKED

### public static final int BIT_DOOR_N_UNBLOCKED

### public static final int BIT_HOPPABLE_N

### public static final int BIT_HOPPABLE_W

### public static final int ALL_STAIR_BITS

### public final Object renderLock

### public final zombie.pathfind.ClosestPointOnEdge closestPointOnEdge

### public final gnu.trove.map.hash.TIntObjectHashMap<Node> squareToNode

### public final ByteBuffer xyBufferThread

### public final ArrayList<zombie.pathfind.Vehicle> vehicles

### public final HashMap<BaseVehicle, zombie.pathfind.Vehicle> vehicleMap

### public final zombie.pathfind.RequestQueue requests

### public final CollideWithObstaclesPoly collideWithObstaclesPoly

### public Clipper clipperThread

### public boolean rebuild

## Constructors

### public PolygonalMap2()

## Methods

### public Node getNodeForSquare(Square square)

**Parameters:**
- `Square` `square`

**Returns:** `Node`

### public Node getExistingNodeForSquare(Square square)

**Parameters:**
- `Square` `square`

**Returns:** `Node`

### public VisibilityGraph getVisGraphAt(float x,
float y,
int z,
int expand)

**Parameters:**
- `float` `x`
- `float` `y`
- `int` `z`
- `int` `expand`

**Returns:** `VisibilityGraph`

### public VisibilityGraph getVisGraphForSquare(Square square)

**Parameters:**
- `Square` `square`

**Returns:** `VisibilityGraph`

### public void getVisibilityGraphsOverlappingChunk(Chunk chunk,
int level,
ArrayList<VisibilityGraph> graphs)

**Parameters:**
- `Chunk` `chunk`
- `int` `level`
- `ArrayList<VisibilityGraph>` `graphs`

**Returns:** `void`

### public void getVisibilityGraphsAdjacentToChunk(Chunk chunk,
int level,
ArrayList<VisibilityGraph> graphs)

**Parameters:**
- `Chunk` `chunk`
- `int` `level`
- `ArrayList<VisibilityGraph>` `graphs`

**Returns:** `void`

### public Connection connectTwoNodes(Node node1,
Node node2,
int flags)

**Parameters:**
- `Node` `node1`
- `Node` `node2`
- `int` `flags`

**Returns:** `Connection`

### public Connection connectTwoNodes(Node node1,
Node node2)

**Parameters:**
- `Node` `node1`
- `Node` `node2`

**Returns:** `Connection`

### public void breakConnection(Connection cxn)

**Parameters:**
- `Connection` `cxn`

**Returns:** `void`

### public void breakConnection(Node node1,
Node node2)

**Parameters:**
- `Node` `node1`
- `Node` `node2`

**Returns:** `void`

### public Node getPointOutsideObjects(Square square,
float targetX,
float targetY)

**Parameters:**
- `Square` `square`
- `float` `targetX`
- `float` `targetY`

**Returns:** `Node`

### public float getApparentZ(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `float`

### public void render()

**Returns:** `void`

### public void squareChanged(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `void`

### public void addChunkToWorld(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void removeChunkFromWorld(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void addVehicleToWorld(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void updateVehicle(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public void removeVehicleFromWorld(BaseVehicle vehicle)

**Parameters:**
- `BaseVehicle` `vehicle`

**Returns:** `void`

### public zombie.pathfind.Cell getCellFromChunkPos(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `zombie.pathfind.Cell`

### public Chunk allocChunkIfNeeded(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `Chunk`

### public Chunk getChunkFromChunkPos(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `Chunk`

### public Chunk getChunkFromSquarePos(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `Chunk`

### public Square getSquare(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `Square`

### public Square getSquareRawZ(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `Square`

### public boolean isBlockedInAllDirections(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public boolean canMoveBetween(PMMover mover,
int x1,
int y1,
int z1,
int x2,
int y2,
int z2)

**Parameters:**
- `PMMover` `mover`
- `int` `x1`
- `int` `y1`
- `int` `z1`
- `int` `x2`
- `int` `y2`
- `int` `z2`

**Returns:** `boolean`

### public boolean canNotMoveBetween(PMMover mover,
int x1,
int y1,
int z1,
int x2,
int y2,
int z2)

**Parameters:**
- `PMMover` `mover`
- `int` `x1`
- `int` `y1`
- `int` `z1`
- `int` `x2`
- `int` `y2`
- `int` `z2`

**Returns:** `boolean`

### public void init(IsoMetaGrid metaGrid)

**Parameters:**
- `IsoMetaGrid` `metaGrid`

**Returns:** `void`

### public void stop()

**Returns:** `void`

### public void updateMain()

**Returns:** `void`

### public void updateThread()

**Returns:** `void`

### public zombie.pathfind.PathFindRequest addRequest(IPathfinder pathfinder,
Mover mover,
float startX,
float startY,
float startZ,
float targetX,
float targetY,
float targetZ)

**Parameters:**
- `IPathfinder` `pathfinder`
- `Mover` `mover`
- `float` `startX`
- `float` `startY`
- `float` `startZ`
- `float` `targetX`
- `float` `targetY`
- `float` `targetZ`

**Returns:** `zombie.pathfind.PathFindRequest`

### public void cancelRequest(Mover mover)

**Parameters:**
- `Mover` `mover`

**Returns:** `void`

### public ArrayList<Point> getPointInLine(float fromX,
float fromY,
float toX,
float toY,
int z)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`
- `int` `z`

**Returns:** `ArrayList<Point>`

### public void supercover(float x0,
float y0,
float x1,
float y1,
int z,
zombie.pathfind.PointPool pointPool,
ArrayList<Point> pts)

**Parameters:**
- `float` `x0`
- `float` `y0`
- `float` `x1`
- `float` `y1`
- `int` `z`
- `zombie.pathfind.PointPool` `pointPool`
- `ArrayList<Point>` `pts`

**Returns:** `void`

### public boolean lineClearCollide(float fromX,
float fromY,
float toX,
float toY,
int z)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`
- `int` `z`

**Returns:** `boolean`

### public boolean lineClearCollide(float fromX,
float fromY,
float toX,
float toY,
int z,
IsoMovingObject ignoreVehicle)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`
- `int` `z`
- `IsoMovingObject` `ignoreVehicle`

**Returns:** `boolean`

### public boolean lineClearCollide(float fromX,
float fromY,
float toX,
float toY,
int z,
IsoMovingObject ignoreVehicle,
boolean ignoreDoors,
boolean closeToWalls)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`
- `int` `z`
- `IsoMovingObject` `ignoreVehicle`
- `boolean` `ignoreDoors`
- `boolean` `closeToWalls`

**Returns:** `boolean`

### public boolean lineClearCollide(float fromX,
float fromY,
float toX,
float toY,
int z,
IsoMovingObject ignoreVehicle,
int flags)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`
- `int` `z`
- `IsoMovingObject` `ignoreVehicle`
- `int` `flags`

**Returns:** `boolean`

### public Vector2 getCollidepoint(float fromX,
float fromY,
float toX,
float toY,
int z,
IsoMovingObject ignoreVehicle,
int flags)

**Parameters:**
- `float` `fromX`
- `float` `fromY`
- `float` `toX`
- `float` `toY`
- `int` `z`
- `IsoMovingObject` `ignoreVehicle`
- `int` `flags`

**Returns:** `Vector2`

### public boolean canStandAt(float x,
float y,
int z,
IsoMovingObject ignoreVehicle,
boolean ignoreDoors,
boolean closeToWalls)

**Parameters:**
- `float` `x`
- `float` `y`
- `int` `z`
- `IsoMovingObject` `ignoreVehicle`
- `boolean` `ignoreDoors`
- `boolean` `closeToWalls`

**Returns:** `boolean`

### public boolean canStandAt(float x,
float y,
int z,
BaseVehicle ignoreVehicle,
int flags)

**Parameters:**
- `float` `x`
- `float` `y`
- `int` `z`
- `BaseVehicle` `ignoreVehicle`
- `int` `flags`

**Returns:** `boolean`

### public boolean intersectLineWithVehicle(float x1,
float y1,
float x2,
float y2,
BaseVehicle vehicle,
Vector2 out)

**Parameters:**
- `float` `x1`
- `float` `y1`
- `float` `x2`
- `float` `y2`
- `BaseVehicle` `vehicle`
- `Vector2` `out`

**Returns:** `boolean`

### public org.joml.Vector2f resolveCollision(IsoGameCharacter chr,
float nx,
float ny,
org.joml.Vector2f finalPos)

**Parameters:**
- `IsoGameCharacter` `chr`
- `float` `nx`
- `float` `ny`
- `org.joml.Vector2f` `finalPos`

**Returns:** `org.joml.Vector2f`

### public boolean resolveCollision(IsoGameCharacter chr,
float radius,
org.joml.Vector2f finalPos)

**Parameters:**
- `IsoGameCharacter` `chr`
- `float` `radius`
- `org.joml.Vector2f` `finalPos`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\PolygonalMap2.html`*
