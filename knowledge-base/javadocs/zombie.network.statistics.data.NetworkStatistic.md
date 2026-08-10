---
title: zombie.network.statistics.data.NetworkStatistic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network.statistics.data
---

# zombie.network.statistics.data.NetworkStatistic

`public class NetworkStatistic extends Statistic implements IStatistic`

**Kind:** class · **Package:** zombie.network.statistics.data

## Inheritance
- java.lang.Object
- zombie.network.statistics.data.Statistic
- zombie.network.statistics.data.NetworkStatistic

## Fields

### public final Counter packets

### public final Counter receivedPackets

### public final Counter receivedBytes

### public final Counter receivedBps

### public final Counter maxReceivedBps

### public final Counter sentPackets

### public final Counter sentBytes

### public final Counter sentBps

### public final Counter maxSentBps

### public final Counter lastUserMessageBytesPushed

### public final Counter lastUserMessageBytesSent

### public final Counter lastUserMessageBytesResent

### public final Counter lastUserMessageBytesReceivedProcessed

### public final Counter lastUserMessageBytesReceivedIgnored

### public final Counter lastActualBytesSent

### public final Counter lastActualBytesReceived

### public final Counter totalUserMessageBytesPushed

### public final Counter totalUserMessageBytesSent

### public final Counter totalUserMessageBytesResent

### public final Counter totalUserMessageBytesReceivedProcessed

### public final Counter totalUserMessageBytesReceivedIgnored

### public final Counter totalActualBytesSent

### public final Counter totalActualBytesReceived

### public final Counter connectionStartTime

### public final Counter bpsLimitByCongestionControl

### public final Counter bpsLimitByOutgoingBandwidthLimit

### public final Counter messageInSendBufferImmediate

### public final Counter messageInSendBufferHigh

### public final Counter messageInSendBufferMedium

### public final Counter messageInSendBufferLow

### public final Counter bytesInSendBufferImmediate

### public final Counter bytesInSendBufferHigh

### public final Counter bytesInSendBufferMedium

### public final Counter bytesInSendBufferLow

### public final Counter messagesInResendBuffer

### public final Counter bytesInResendBuffer

### public final Counter packetLossLastSecond

### public final Counter packetLossTotal

### public final Counter voipReceived

### public final Counter voipSent

## Constructors

### public NetworkStatistic(String application)

**Parameters:**
- `String` `application`

## Methods

### public static NetworkStatistic getInstance()

**Returns:** `NetworkStatistic`

### public void update()

**Returns:** `void`

### public void addIncomePacket(short id,
int size,
UdpConnection connection)

**Parameters:**
- `short` `id`
- `int` `size`
- `UdpConnection` `connection`

**Returns:** `void`

### public void addOutcomePacket(short id,
int size,
UdpConnection connection)

**Parameters:**
- `short` `id`
- `int` `size`
- `UdpConnection` `connection`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\statistics\data\NetworkStatistic.html`*
