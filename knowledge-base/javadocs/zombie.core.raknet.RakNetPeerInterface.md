---
title: zombie.core.raknet.RakNetPeerInterface
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.raknet
---

# zombie.core.raknet.RakNetPeerInterface

`public class RakNetPeerInterface extends Object`

**Kind:** class · **Package:** zombie.core.raknet

## Inheritance
- java.lang.Object
- zombie.core.raknet.RakNetPeerInterface

## Description

Created by LEMMYPC on 10/01/14.

## Fields

### public static final int ID_NEW_INCOMING_CONNECTION

### public static final int ID_DISCONNECTION_NOTIFICATION

### public static final int ID_INCOMPATIBLE_PROTOCOL_VERSION

### public static final int ID_CONNECTED_PING

### public static final int ID_UNCONNECTED_PING

### public static final int ID_CONNECTION_LOST

### public static final int ID_ALREADY_CONNECTED

### public static final int ID_REMOTE_DISCONNECTION_NOTIFICATION

### public static final int ID_REMOTE_CONNECTION_LOST

### public static final int ID_REMOTE_NEW_INCOMING_CONNECTION

### public static final int ID_CONNECTION_BANNED

### public static final int ID_CONNECTION_ATTEMPT_FAILED

### public static final int ID_NO_FREE_INCOMING_CONNECTIONS

### public static final int ID_CONNECTION_REQUEST_ACCEPTED

### public static final int ID_INVALID_PASSWORD

### public static final int ID_PING

### public static final int ID_RAKVOICE_OPEN_CHANNEL_REQUEST

### public static final int ID_RAKVOICE_OPEN_CHANNEL_REPLY

### public static final int ID_RAKVOICE_CLOSE_CHANNEL

### public static final int ID_USER_PACKET_ENUM

### public static final int PacketPriority_IMMEDIATE

### public static final int PacketPriority_HIGH

### public static final int PacketPriority_MEDIUM

### public static final int PacketPriority_LOW

### public static final int PacketReliability_UNRELIABLE

### public static final int PacketReliability_UNRELIABLE_SEQUENCED

### public static final int PacketReliability_RELIABLE

### public static final int PacketReliability_RELIABLE_ORDERED

### public static final int PacketReliability_RELIABLE_SEQUENCED

### public static final int PacketReliability_UNRELIABLE_WITH_ACK_RECEIPT

### public static final int PacketReliability_RELIABLE_WITH_ACK_RECEIPT

### public static final int PacketReliability_RELIABLE_ORDERED_WITH_ACK_RECEIPT

### public static final byte ConnectionType_Disconnected

### public static final byte ConnectionType_UDPRakNet

### public static final byte ConnectionType_Steam

## Constructors

### public RakNetPeerInterface()

## Methods

### public static void init()

**Returns:** `void`

### public void Init(boolean steamMode)

**Parameters:**
- `boolean` `steamMode`

**Returns:** `void`

### public int Startup(int maxConnections)

**Parameters:**
- `int` `maxConnections`

**Returns:** `int`

### public void Shutdown()

**Returns:** `void`

### public void SetServerIP(String ip)

**Parameters:**
- `String` `ip`

**Returns:** `void`

### public void SetServerPort(int port,
int UDPPort)

**Parameters:**
- `int` `port`
- `int` `UDPPort`

**Returns:** `void`

### public void SetClientPort(int port)

**Parameters:**
- `int` `port`

**Returns:** `void`

### public int Connect(String arg0,
int arg1,
String arg2,
boolean arg3)

**Parameters:**
- `String` `arg0`
- `int` `arg1`
- `String` `arg2`
- `boolean` `arg3`

**Returns:** `int`

### public int ConnectToSteamServer(long arg0,
String arg1,
boolean arg2)

**Parameters:**
- `long` `arg0`
- `String` `arg1`
- `boolean` `arg2`

**Returns:** `int`

### public String GetServerIP()

**Returns:** `String`

### public long GetClientSteamID(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `long`

### public long GetClientOwnerSteamID(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `long`

### public void SetIncomingPassword(String password)

**Parameters:**
- `String` `password`

**Returns:** `void`

### public void SetTimeoutTime(int time)

**Parameters:**
- `int` `time`

**Returns:** `void`

### public void SetMaximumIncomingConnections(int num)

**Parameters:**
- `int` `num`

**Returns:** `void`

### public void SetOccasionalPing(boolean bPing)

**Parameters:**
- `boolean` `bPing`

**Returns:** `void`

### public void SetUnreliableTimeout(int timeout)

**Parameters:**
- `int` `timeout`

**Returns:** `void`

### public boolean Receive(ByteBuffer buffer)

**Parameters:**
- `ByteBuffer` `buffer`

**Returns:** `boolean`

### public int Send(ByteBuffer data,
int packetPriority,
int packetReliability,
byte orderingChannel,
long guid,
boolean broadcast)

**Parameters:**
- `ByteBuffer` `data`
- `int` `packetPriority`
- `int` `packetReliability`
- `byte` `orderingChannel`
- `long` `guid`
- `boolean` `broadcast`

**Returns:** `int`

### public int SendRaw(ByteBuffer data,
int packetPriority,
int packetReliability,
byte orderingChannel,
long guid,
boolean broadcast)

**Parameters:**
- `ByteBuffer` `data`
- `int` `packetPriority`
- `int` `packetReliability`
- `byte` `orderingChannel`
- `long` `guid`
- `boolean` `broadcast`

**Returns:** `int`

### public long getGuidFromIndex(int id)

**Parameters:**
- `int` `id`

**Returns:** `long`

### public long getGuidOfPacket()

**Returns:** `long`

### public String getIPFromGUID(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `String`

### public void disconnect(long connectedGUID,
String message)

**Parameters:**
- `long` `connectedGUID`
- `String` `message`

**Returns:** `void`

### public ZNetStatistics GetNetStatistics(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `ZNetStatistics`

### public int GetAveragePing(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `int`

### public int GetLastPing(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `int`

### public int GetLowestPing(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `int`

### public int GetMTUSize(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `int`

### public int GetConnectionsNumber()

**Returns:** `int`

### public byte GetConnectionType(long guid)

**Parameters:**
- `long` `guid`

**Returns:** `byte`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\raknet\RakNetPeerInterface.html`*
