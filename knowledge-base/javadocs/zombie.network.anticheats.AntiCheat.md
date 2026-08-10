---
title: zombie.network.anticheats.AntiCheat
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.network.anticheats
---

# zombie.network.anticheats.AntiCheat

`public enum AntiCheat extends Enum<AntiCheat>`

**Kind:** enum · **Package:** zombie.network.anticheats

## Inheritance
- java.lang.Object
- java.lang.Enum<AntiCheat>
- zombie.network.anticheats.AntiCheat

## Fields

### public static final AntiCheat Safety

### public static final AntiCheat HitDamage

### public static final AntiCheat HitVehicle

### public static final AntiCheat HitLongDistance

### public static final AntiCheat HitShortDistance

### public static final AntiCheat HitWeapon

### public static final AntiCheat PacketRakNet

### public static final AntiCheat PacketException

### public static final AntiCheat PacketType

### public static final AntiCheat XPUpdate

### public static final AntiCheat ChecksumUpdate

### public static final AntiCheat Target

### public static final AntiCheat Player

### public static final AntiCheat PlayerUpdate

### public static final AntiCheat Power

### public static final AntiCheat Capability

### public static final AntiCheat SafeHouseOwner

### public static final AntiCheat SafeHouseMember

### public static final AntiCheat SafeHousePlayer

### public static final AntiCheat Speed

### public static final AntiCheat NoClip

### public static final AntiCheat None

### public static final String REASON_UNKNOWN_RAKNET_PACKET

### public static final String REASON_UNKNOWN_ZED_PACKET

### public static final String REASON_EXCEPTION_OCCURRED

### public static final String REASON_INCORRECT_CHECKSUM

### public static final String REASON_NO_CAPABILITY

### public static final String REASON_UPDATE_FAILED

### public static final String REASON_COOLDOWN

### public static final String REASON_SKIP

### public final AbstractAntiCheat anticheat

### public final ServerOptions.EnumServerOption option

### public final int maxSuspiciousCounter

## Methods

### public static AntiCheat[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `AntiCheat[]`

### public static AntiCheat valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `AntiCheat`

### public boolean isEnabled()

**Returns:** `boolean`

### public boolean isValid(UdpConnection connection,
INetworkPacket packet)

**Parameters:**
- `UdpConnection` `connection`
- `INetworkPacket` `packet`

**Returns:** `boolean`

### public static void update(UdpConnection connection)

**Parameters:**
- `UdpConnection` `connection`

**Returns:** `void`

### public static void log(UdpConnection connection,
String message)

**Parameters:**
- `UdpConnection` `connection`
- `String` `message`

**Returns:** `void`

### public static void log(UdpConnection connection,
AntiCheat antiCheat,
int counter,
String text)

**Parameters:**
- `UdpConnection` `connection`
- `AntiCheat` `antiCheat`
- `int` `counter`
- `String` `text`

**Returns:** `void`

### public void act(UdpConnection connection,
String text)

**Parameters:**
- `UdpConnection` `connection`
- `String` `text`

**Returns:** `void`

### public static void doLogUser(UdpConnection connection,
String issuedBy,
String text)

**Parameters:**
- `UdpConnection` `connection`
- `String` `issuedBy`
- `String` `text`

**Returns:** `void`

### public static void doKickUser(UdpConnection connection,
String issuedBy,
String text)

**Parameters:**
- `UdpConnection` `connection`
- `String` `issuedBy`
- `String` `text`

**Returns:** `void`

### public static void doBanUser(UdpConnection connection,
String issuedBy,
String text)

**Parameters:**
- `UdpConnection` `connection`
- `String` `issuedBy`
- `String` `text`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\anticheats\AntiCheat.html`*
