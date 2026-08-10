---
title: zombie.entity.components.resources.Resources
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.entity.components.resources
---

# zombie.entity.components.resources.Resources

`public class Resources extends Component`

**Kind:** class · **Package:** zombie.entity.components.resources

## Inheritance
- java.lang.Object
- zombie.entity.Component
- zombie.entity.components.resources.Resources

## Fields

### public static final String defaultGroup

## Methods

### public List<Resource> getResources()

**Returns:** `List<Resource>`

### public ResourceGroup getResourceGroup(String name)

**Parameters:**
- `String` `name`

**Returns:** `ResourceGroup`

### public List<Resource> getResourcesForGroup(String name)

**Parameters:**
- `String` `name`

**Returns:** `List<Resource>`

### public void createResourceFromSerial(String blueprintSerial)

**Parameters:**
- `String` `blueprintSerial`

**Returns:** `void`

### public void createResourceFromSerial(String groupName,
String blueprintSerial)

**Parameters:**
- `String` `groupName`
- `String` `blueprintSerial`

**Returns:** `void`

### public void createResource(ResourceBlueprint blueprint)

**Parameters:**
- `ResourceBlueprint` `blueprint`

**Returns:** `void`

### public void createResource(String groupName,
ResourceBlueprint blueprint)

**Parameters:**
- `String` `groupName`
- `ResourceBlueprint` `blueprint`

**Returns:** `void`

### public void removeResourceGroup(String groupName)

**Parameters:**
- `String` `groupName`

**Returns:** `void`

### public void removeResourceGroup(ResourceGroup group)

**Parameters:**
- `ResourceGroup` `group`

**Returns:** `void`

### public void removeResource(String resourceID)

**Parameters:**
- `String` `resourceID`

**Returns:** `void`

### public void removeResource(Resource resource)

**Parameters:**
- `Resource` `resource`

**Returns:** `void`

### public Resource getResource(String nameId)

**Parameters:**
- `String` `nameId`

**Returns:** `Resource`

### public Resource getResource(int index)

**Parameters:**
- `int` `index`

**Returns:** `Resource`

### public int getResourceIndex(Resource resource)

**Parameters:**
- `Resource` `resource`

**Returns:** `int`

### public int getResourceCount()

**Returns:** `int`

### public List<Resource> getResources(List<Resource> list,
ResourceIO io)

**Parameters:**
- `List<Resource>` `list`
- `ResourceIO` `io`

**Returns:** `List<Resource>`

### public List<Resource> getResources(List<Resource> list,
ResourceType type)

**Parameters:**
- `List<Resource>` `list`
- `ResourceType` `type`

**Returns:** `List<Resource>`

### public List<Resource> getResources(List<Resource> list,
ResourceIO io,
ResourceChannel channel)

**Parameters:**
- `List<Resource>` `list`
- `ResourceIO` `io`
- `ResourceChannel` `channel`

**Returns:** `List<Resource>`

### public List<Resource> getResources(List<Resource> list,
ResourceChannel channel)

**Parameters:**
- `List<Resource>` `list`
- `ResourceChannel` `channel`

**Returns:** `List<Resource>`

### public List<Resource> getResources(List<Resource> list,
ResourceIO io,
ResourceType type)

**Parameters:**
- `List<Resource>` `list`
- `ResourceIO` `io`
- `ResourceType` `type`

**Returns:** `List<Resource>`

### public List<Resource> getResourcesFromGroup(String group,
List<Resource> list,
ResourceIO io)

**Parameters:**
- `String` `group`
- `List<Resource>` `list`
- `ResourceIO` `io`

**Returns:** `List<Resource>`

### public List<Resource> getResourcesFromGroup(String group,
List<Resource> list,
ResourceType type)

**Parameters:**
- `String` `group`
- `List<Resource>` `list`
- `ResourceType` `type`

**Returns:** `List<Resource>`

### public List<Resource> getResourcesFromGroup(String group,
List<Resource> list,
ResourceIO io,
ResourceChannel channel)

**Parameters:**
- `String` `group`
- `List<Resource>` `list`
- `ResourceIO` `io`
- `ResourceChannel` `channel`

**Returns:** `List<Resource>`

### public List<Resource> getResourcesFromGroup(String group,
List<Resource> list,
ResourceChannel channel)

**Parameters:**
- `String` `group`
- `List<Resource>` `list`
- `ResourceChannel` `channel`

**Returns:** `List<Resource>`

### public List<Resource> getResourcesFromGroup(String group,
List<Resource> list,
ResourceIO io,
ResourceType type)

**Parameters:**
- `String` `group`
- `List<Resource>` `list`
- `ResourceIO` `io`
- `ResourceType` `type`

**Returns:** `List<Resource>`

### public void dumpContentsInSquare()

**Returns:** `void`

### public boolean isNoContainerOrEmpty()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\entity\components\resources\Resources.html`*
