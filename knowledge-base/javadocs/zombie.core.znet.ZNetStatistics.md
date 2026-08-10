---
title: zombie.core.znet.ZNetStatistics
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.znet
---

# zombie.core.znet.ZNetStatistics

`public class ZNetStatistics extends Object`

**Kind:** class · **Package:** zombie.core.znet

## Inheritance
- java.lang.Object
- zombie.core.znet.ZNetStatistics

## Fields

### public static final int LAST_USER_MESSAGE_BYTES_PUSHED

### public static final int LAST_USER_MESSAGE_BYTES_SENT

### public static final int LAST_USER_MESSAGE_BYTES_RESENT

### public static final int LAST_USER_MESSAGE_BYTES_RECEIVED_PROCESSED

### public static final int LAST_USER_MESSAGE_BYTES_RECEIVED_IGNORED

### public static final int LAST_ACTUAL_BYTES_SENT

### public static final int LAST_ACTUAL_BYTES_RECEIVED

### public static final int TOTAL_USER_MESSAGE_BYTES_PUSHED

### public static final int TOTAL_USER_MESSAGE_BYTES_SENT

### public static final int TOTAL_USER_MESSAGE_BYTES_RESENT

### public static final int TOTAL_USER_MESSAGE_BYTES_RECEIVED_PROCESSED

### public static final int TOTAL_USER_MESSAGE_BYTES_RECEIVED_IGNORED

### public static final int TOTAL_ACTUAL_BYTES_SENT

### public static final int TOTAL_ACTUAL_BYTES_RECEIVED

### public static final int CONNECTION_START_TIME

### public static final int IS_LIMITED_BY_CONGESTION_CONTROL

### public static final int BPS_LIMIT_BY_CONGESTION_CONTROL

### public static final int IS_LIMITED_BY_OUTGOING_BANDWIDTH_LIMIT

### public static final int BPS_LIMIT_BY_OUTGOING_BANDWIDTH_LIMIT

### public static final int MESSAGE_IN_SEND_BUFFER_IMMEDIATE

### public static final int MESSAGE_IN_SEND_BUFFER_HIGH

### public static final int MESSAGE_IN_SEND_BUFFER_MEDIUM

### public static final int MESSAGE_IN_SEND_BUFFER_LOW

### public static final int BYTES_IN_SEND_BUFFER_IMMEDIATE

### public static final int BYTES_IN_SEND_BUFFER_HIGH

### public static final int BYTES_IN_SEND_BUFFER_MEDIUM

### public static final int BYTES_IN_SEND_BUFFER_LOW

### public static final int MESSAGES_IN_RESEND_BUFFER

### public static final int BYTES_IN_RESEND_BUFFER

### public static final int PACKETLOSS_LAST_SECOND

### public static final int PACKETLOSS_TOTAL

### public long lastUserMessageBytesPushed

### public long lastUserMessageBytesSent

### public long lastUserMessageBytesResent

### public long lastUserMessageBytesReceivedProcessed

### public long lastUserMessageBytesReceivedIgnored

### public long lastActualBytesSent

### public long lastActualBytesReceived

### public long totalUserMessageBytesPushed

### public long totalUserMessageBytesSent

### public long totalUserMessageBytesResent

### public long totalUserMessageBytesReceivedProcessed

### public long totalUserMessageBytesReceivedIgnored

### public long totalActualBytesSent

### public long totalActualBytesReceived

### public long connectionStartTime

### public boolean isLimitedByCongestionControl

### public long bpsLimitByCongestionControl

### public boolean isLimitedByOutgoingBandwidthLimit

### public long bpsLimitByOutgoingBandwidthLimit

### public long messageInSendBufferImmediate

### public long messageInSendBufferHigh

### public long messageInSendBufferMedium

### public long messageInSendBufferLow

### public double bytesInSendBufferImmediate

### public double bytesInSendBufferHigh

### public double bytesInSendBufferMedium

### public double bytesInSendBufferLow

### public long messagesInResendBuffer

### public long bytesInResendBuffer

### public double packetlossLastSecond

### public double packetlossTotal

## Constructors

### public ZNetStatistics()

## Methods

### public void setField(int field,
boolean value)

**Parameters:**
- `int` `field`
- `boolean` `value`

**Returns:** `void`

### public void setField(int field,
double value)

**Parameters:**
- `int` `field`
- `double` `value`

**Returns:** `void`

### public void setField(int field,
long value)

**Parameters:**
- `int` `field`
- `long` `value`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\znet\ZNetStatistics.html`*
