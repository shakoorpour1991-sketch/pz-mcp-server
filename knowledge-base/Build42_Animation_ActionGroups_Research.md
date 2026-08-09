---
title: "Project Zomboid Build 42 Animation & Action Groups Research"
build: "42.20"
tags: [pz, modding, build42, animation, actiongroups]
---

# Project Zomboid Build 42 — Animation & Action Groups Research

> **Scope:** Build 42.20 (stable). This document covers the animation/action system: the action-group XML format (`media/actiongroups/`), how actions map to animation states, the AnimSet/animation-node layer (`media/AnimSets/`), the `CharacterActionAnims` binding surface, and how timed actions drive animations from Lua. Every claim was verified against the game files on disk or the shipped Java classes (`projectzomboid.jar`). All paths are relative to the Project Zomboid install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Action Group File Format](#3-action-group-file-format)
4. [Actions & Transitions](#4-actions--transitions)
5. [AnimSets Structure](#5-animsets-structure)
6. [The Player AnimSet](#6-the-player-animset)
7. [Binding: Timed Actions → Animations](#7-binding-timed-actions--animations)
8. [Other Action Groups](#8-other-action-groups)
9. [Pitfalls](#9-pitfalls)
10. [Modding Opportunities](#10-modding-opportunities)

---

## 1. Overview

Project Zomboid's character animation is a layered system of three cooperating layers (all verified on disk):

- **Action groups** (`media/actiongroups/<entity>/`) — per-entity XML state machines. Each group declares its **initial state**, a set of **states** (action/anim states such as `idle`, `hitreaction`, `grappleGrab`), and **transitions** between them guarded by *conditions* over anim variables.
- **AnimSets** (`media/AnimSets/`) — the animation-node layer. `animSet` files select which animation-library folders apply (`Bob_*`/`Kate_*` for players, `Zombie_*` for zombies); each state is backed by an `animNode` XML that names a concrete animation (e.g. `Bob_Shove`), sets blend/priority/looping, declares boolean/other **conditions**, fires **events** (sounds, collision checks, flags), and defines **transitions** to other nodes.
- **CharacterActionAnims** — a Java enum of built-in action-anim names (`Eat`, `Drink`, `Build`, `Craft`, `Chop_tree`, `Pour`, `Bandage`, …) that Lua timed actions pass to the animation system via `setActionAnim()`.

The glue between gameplay and animation is the Lua timed-action layer: `ISBaseTimedAction:setActionAnim(_action, _displayItemModels)` and `ISBaseTimedAction:setAnimVariable(_key, _val)` forward to the underlying Java `action` object.

## 2. Core Files

### Action groups (`media/actiongroups/`)

| Entry | Purpose |
|-------|---------|
| `player/` | The full player action group: `actionGroup.xml`, `defaultTransitions.xml`, `actions/` (state + transition XMLs) |
| `zombie/`, `zombie-crawler/` | Zombie action groups |
| `buck/ chick/ cockerel/ cow/ cowcalf/ deerdead/ doe/ ewe/ fawn/ hen/ lamb/ mouse/ pig/ piglet/ rabbit/ rabkitten/ raccoon/ ram/ rat/ turkey/ turkeypoult/` | Per-animal action groups |
| `player-vehicle/`, `player-avatar/` | Vehicle and avatar variants of the player group |
| `player-editor/`, `animal-editor/` | Editor variants (`animal-editor` = `actionGroup.xml` + `idle/` + `runtime/`) |

### AnimSets (`media/AnimSets/`)

| File/Folder | Purpose |
|-------------|---------|
| `player.xml`, `zombie.xml`, `zombie-crawler.xml`, `mannequin.xml`, `cow.xml`, `player-vehicle.xml`, `player-avatar.xml`, `player-editor.xml`, `animal-editor.xml` | Per-entity `animSet` files (animation-library filters) |
| `base.xml`, `Defaults.xml` | Shared defaults (e.g. `MotionScale 1.6`, `RotationScale 1.1`) |
| `Master_Variables.xml` | Authoring catalog of anim variables (`KeyPairs`) |
| `Master_Bones.xml` | Authoring catalog of bone names (`KeyPairs`) |
| `player/`, `zombie/`, `mannequin/`, `cow/`, … | Per-entity animation-node folders (see §6) |

- **Bindings:** `media/lua/shared/TimedActions/ISBaseTimedAction.lua` forwards `setActionAnim`/`setAnimVariable` to the Java `action`; `zombie/characters/CharacterActionAnims.class` holds the action-anim enum (§7).

## 3. Action Group File Format

`media/actiongroups/player/actionGroup.xml` (abridged — full file is ~27 comment blocks):

```xml
<?xml version="1.0" encoding="utf-8"?>
<actiongroup>
	<initial>idle</initial>
	<commentBlock>
		<name>Actions</name>
		<bounds x="25,500.0000" y="24,120.0000" width="990.0000" height="690.0000" />
	</commentBlock>
	<commentBlock>
		<name>Combat</name>
		<bounds x="26,805.0000" y="25,350.0000" width="900.0000" height="1,140.0000" />
	</commentBlock>
	...
	<commentBlock>
		<name>GrabCorpseFromContainer</name>
		<bounds x="27,495.0000" y="26,655.0000" width="600.0000" height="435.0000" />
	</commentBlock>
</actiongroup>
```

Structure:

- `<initial>idle</initial>` — the state the group starts in (must exist as a state).
- `<commentBlock>` entries (`name` + `bounds`) are **editor-only layout** of the visual state-graph editor; they carry no runtime meaning (verified: they only group names like `Actions`, `Combat`, `Movement`, `Grappling`, `HitReaction`, `DraggingCorpse`).

The group's **states** live in subfolders/files of the group directory: `player/actions/` contains `actions.xml`, `childTags.xml`, `tags.xml`, `transitionOut.xml`, and one `to_<state>.xml` transition file per state (`to_idle`, `to_falldown`, `to_grappleGrab`, `to_hitreaction`, `to_hitreactionpvp`, `to_knockeddown`, `to_milkanimal`, `to_onground`, `to_petanimal`, `to_pickUpBody`, `to_shearanimal`, `to_slowidleblend`, `to_grabCorpseFromContainer`). The `animal-editor` group shows the minimal layout: `actionGroup.xml` + `idle/idle.xml` + `runtime/runtime.xml`.

## 4. Actions & Transitions

### Transition XML — `player/actions/to_grabCorpseFromContainer.xml`

```xml
<?xml version="1.0" encoding="utf-8"?>
<transition>
	<transitionTo>grabCorpseFromContainer</transitionTo>
	<conditions>
		<isTrue>bIsGrappling</isTrue>
		<compare op="==" a="sharedGrappleType" b="PickUpCorpseItem" />
	</conditions>
</transition>
```

Condition element vocabulary (verified in the shipped files):

- `<isTrue>var</isTrue>` / `<isFalse>var</isFalse>` — boolean anim-variable checks (`bIsGrappling`, `bknockeddown`, `bDead`, `bOnFloor`, `hashitreaction`, `hitpvp`, `shearanimal`).
- `<eventOccurred>name</eventOccurred>` — fires on a named event (e.g. `washitpvp`).
- `<compare op="==" a="var" b="value" />` — value comparison (`sharedGrappleType == PickUpCorpseItem`).
- `<asSubstate>true</asSubstate>` — enters the target as a masked substate (used for hit reactions).

### Default transitions — `player/defaultTransitions.xml`

A `<transitions>` wrapper of `<transition>` blocks applied globally to every state:

```xml
<transitions>
    <transition>
        <transitionTo>hitreaction</transitionTo>
        <conditions>
            <isTrue>hashitreaction</isTrue>
            <isFalse>hitpvp</isFalse>
        </conditions>
    </transition>
    <transition>
        <transitionTo>hitreactionpvp</transitionTo>
        <asSubstate>true</asSubstate>
        <conditions>
            <eventOccurred>washitpvp</eventOccurred>
            <isFalse>bknockeddown</isFalse>
        </conditions>
    </transition>
    <transition>
        <transitionTo>falldown</transitionTo>
        <conditions>
            <isTrue>bDead</isTrue>
            <isFalse>bOnFloor</isFalse>
        </conditions>
    </transition>
    ...
</transitions>
```

So states are entered two ways: **explicit transitions** (`to_<state>.xml`) and the **global defaults** in `defaultTransitions.xml`.

## 5. AnimSets Structure

### `animSet` files select the animation library

`AnimSets/player.xml`:

```xml
<animSet>
	<animNodeFilter>
		<folderPrefixes>Bob</folderPrefixes>
		<folderPrefixes>Kate</folderPrefixes>
		<namePrefixes>Bob_</namePrefixes>
		<namePrefixes>Kate_</namePrefixes>
	</animNodeFilter>
</animSet>
```

`AnimSets/zombie.xml` filters `Bob`, `Bob_`, `Zombie`, `Zombie_` — i.e. the animation library (the `media/anims_X`, `media/animsold` folders) is organized by prefix; the filter selects which library folders/names a character can play. Animation-node XMLs then reference concrete animations by name, e.g. `Bob_Shove`.

### Animation-node anatomy — `AnimSets/player/grappleGrab.xml` (abridged)

```xml
<animNode>
	<m_Name>grappleGrab</m_Name>
	<m_Priority>4</m_Priority>
	<m_AnimName>Bob_Shove</m_AnimName>
	<m_Looped>false</m_Looped>
	<m_BlendTime>0.20</m_BlendTime>
	<m_SpeedScale>0.80</m_SpeedScale>
	<m_SyncTrackingEnabled>false</m_SyncTrackingEnabled>
	<m_Conditions>
		<m_Name>bDoGrapple</m_Name>
		<m_Type>BOOL</m_Type>
		<m_Value>true</m_Value>
	</m_Conditions>
	<m_Events>
		<m_EventName>FlagWhileAlive</m_EventName>
		<m_Time>Start</m_Time>
		<m_ParameterValue>GrappleGrabAnim</m_ParameterValue>
	</m_Events>
	<m_Events>
		<m_EventName>SetMeleeDelay</m_EventName>
		<m_Time>End</m_Time>
		<m_ParameterValue>8</m_ParameterValue>
	</m_Events>
	<m_Transitions>
		<m_Target>GrappleBwdDragIdle</m_Target>
		<m_blendInTime>0.1</m_blendInTime>
	</m_Transitions>
	<m_SubStateBoneWeights>
		<boneName>Bip01_Spine1</boneName>
	</m_SubStateBoneWeights>
	<m_SubStateBoneWeights>
		<boneName>Bip01_Neck</boneName>
	</m_SubStateBoneWeights>
</animNode>
```

Key fields: `m_Name` (state name), `m_Priority`, `m_AnimName` (library animation), `m_Looped`, `m_BlendTime`, `m_SpeedScale`, `m_Conditions` (typed: `BOOL`), `m_Events` (with `m_Time` Start/End or `m_TimePc` fraction, and `m_ParameterValue`), `m_Transitions` (target + `blendInTime`), `m_SubStateBoneWeights` (bones blended in as a substate). The full vanilla file carries two further events — `PlayerVoiceSound(MeleeShove)` at `Start` and `GrappleGrabCollisionCheck(BwdDrag)` at `TimePc 0.1` — omitted from the example above.

### Authoring catalogs

- `AnimSets/Master_Variables.xml` — `<KeyPairs><Key variable="Aim" tooltip="Is aiming."/>…` with `Aim`, `Weapon`, `ipx`, `turndelta`, `ipy`, `ismoving`, `deltax`, `deltay`, `movedelta`, `ang`.
- `AnimSets/Master_Bones.xml` — `<KeyPairs><Key bone="Bip01" tooltip=""/>…` with the biped bones (`Bip01`, `Bip01_Pelvis`, `Bip01_Spine`, `Bip01_Spine1`, `Bip01_Neck`, `Bip01_Head`, `Bip01_L_Clavicle`, `Bip01_L_UpperArm`, `Bip01_L_Forearm`, `Bip01_L_Hand`, `Dummy01`, …).
- `AnimSets/Defaults.xml` — `<Defaults><MotionScale>1.6</MotionScale><RotationScale>1.1</RotationScale></Defaults>`.

## 6. The Player AnimSet

`AnimSets/player/` holds the player's animation nodes (~90 entries). Verified state folders/files include: `aim`(+`-sneak`/`-strafe`), `bumped`(+`-bump`), `climb*` (`climbdownrope`, `climbfence`, `climbrope`, `climbwall`, `climbwindow`), `closewindow`, `collide`, `deadbody`, `death`, `draggingBody-*`/`layDownBody-*`/`pickUpBody-*`/`throwBodyIntoContainer-*`/`throwBodyOutWindow-*`/`throwBodyOverFence-*` (each `-HeadEnd`/`-LegsEnd` × `-onBack`/`-onFront`), `dropBodyAndRun`, `emote`, `ext`, `falldown`, `falling`, `fishing`, `fitness`, `getup`, `grabCorpseFromContainer-HeadEnd-onBack`, `grappleGrab` (+`grappleGrab.xml`), `headlook`, `hitreaction`(+`-bite`, `-biteGeneric`, `-crawlerBite`, `-endDeath`, `-hit`, `-shot`, `pvp`), `idle` (+`idle.xml`), `knockeddown`, `maskingleft`/`maskingright`, `melee`, `milkanimal`, `movement`, `onbed`, `onground`, `openwindow`, `petanimal`, `ranged`, `run` (+`run.xml`), `shearanimal`, `shove`(+`Aim`, `WithFirearm`, `WithHandgun`), `sitext`, `sitonfurniture`, `sitonground`(+`-sitting`, `-sitting-warmhands`), `slowidleblend`, `smashwindow`, `sprint`, `stomp`, `strafe`, `turning`(+`Aim180`, `Idle180`, `Movement180`), `walk` (+`walk.xml`).

The **state names here are the same vocabulary used by the action-group transitions** — e.g. the state `grappleGrab` exists in both `AnimSets/player/` (as the animation node) and the action group (`to_grappleGrab.xml` transitions into it).

## 7. Binding: Timed Actions → Animations

### Lua forwarding (`ISBaseTimedAction.lua`)

```lua
function ISBaseTimedAction:setActionAnim(_action, _displayItemModels)
    if _displayItemModels then
        self.action:setActionAnim(_action, _displayItemModels);
    else
        self.action:setActionAnim(_action);
    end
end

function ISBaseTimedAction:setAnimVariable(_key, _val)
    self.action:setAnimVariable(_key, _val);
end
```

### Verified call sites

`setActionAnim(CharacterActionAnims.X)` with a constant:

- `ISApplyBandage.lua:57` — `self:setActionAnim(CharacterActionAnims.Bandage)`
- `ISChopTreeAction.lua:38` — `self:setActionAnim(CharacterActionAnims.Chop_tree)`
- `ISCraftAction.lua:55` — `self:setActionAnim(CharacterActionAnims.Craft)`
- `ISAddCompost.lua:31`, `ISBBQLightFromPetrol.lua:28`, `ISBurnCorpseAction.lua:37` — `CharacterActionAnims.Pour`

`setActionAnim("<string>")` with a state name:

- `TimedActions/Animals/ISAttachAnimalToPlayer.lua:19`, `ISButcherAnimal.lua:26`, `ISGatherBloodFromAnimal.lua:98`, `ISHutchCleanFloor.lua:83`, … — `self:setActionAnim("Loot")`
- `ISFeedAnimalFromHand.lua:15`, `ISGiveWaterToAnimal.lua:49` — `self:setActionAnim(self.animal:getFeedByHandAnim())`

`setAnimVariable` drives node conditions (the `bDoGrapple`, `BandageType`-style variables from §5):

- `ISAddFluidFromItemAction.lua:57` — `self:setAnimVariable("PourType", self.itemFrom:getPourType())`
- `ISApplyBandage.lua:58`, `ISCleanBurn.lua:32` — `self:setAnimVariable("BandageType", ISHealthPanel.getBandageType(self.bodyPart))`

### `CharacterActionAnims` enum constants

Extracted from `zombie/characters/CharacterActionAnims.class`: `Bandage, Build, BuildLow, Chop_tree, Craft, Destroy, Dig, DigHoe, DigPickAxe, DigShovel, DigTrowel, Disassemble, Drink, Eat, InsertBullets, None, Paint, Pour, Read, Reload, RemoveBullets, Shave, TakePills` (plus `UsedFromLua`, a marker for Lua-exposed constants). `None` is the no-animation fallback.

### The full loop

1. A timed action calls `setActionAnim(...)` (constant or state name) and `setAnimVariable(...)` for condition inputs.
2. The Java `action` picks the matching **state** in the action group; the action group's transitions (global defaults + `to_<state>`) evaluate anim variables (`bIsGrappling`, `bknockeddown`, …).
3. The matching **AnimSet node** plays the concrete library animation (`Bob_Shove`) with its priority/blend/looping, fires events (sounds via `PlayerVoiceSound`, collision checks, `SetMeleeDelay`, `FlagWhileAlive`), and blends to the next node via `m_Transitions`.

## 8. Other Action Groups

- **Animals** — 20 groups: `buck chick cockerel cow cowcalf deerdead doe ewe fawn hen lamb mouse pig piglet rabbit rabkitten raccoon ram rat turkey turkeypoult`. Animal timed actions drive them with `setActionAnim("Loot")` / `getFeedByHandAnim()`.
- **Zombies** — `zombie` and `zombie-crawler` groups; the zombie AnimSet reuses the `Bob` library plus `Zombie`-prefixed animations.
- **Player variants** — `player-vehicle`, `player-avatar` (and editor groups `player-editor`, `animal-editor`). `animal-editor` shows the minimal group layout (`actionGroup.xml` + `idle/` + `runtime/`).
- Each group directory has its own `actionGroup.xml` (initial state + editor comment blocks) and its own states/transitions; groups are loaded from `media/actiongroups/` by the Java action system (`zombie.characters.action`).

## 9. Pitfalls

- **XML files may start with a BOM** — `AnimSets/player/grappleGrab.xml` begins with a UTF-8 BOM (`\uFEFF`); naive parsers (or `head`-style tooling) will choke. The engine handles it.
- **`<commentBlock>` is editor-only** — `actionGroup.xml`'s `name`/`bounds` layout has no runtime meaning; don't design logic around it.
- **`<initial>` must name an existing state** — `player/actionGroup.xml` starts at `idle`, which must exist as a state.
- **Transition condition variables must match anim variables exactly** — `bIsGrappling`, `sharedGrappleType`, `bDoGrapple`, `bDead`, `bOnFloor`, `bknockeddown`, `hashitreaction`, `shearanimal` are case-sensitive; a typo silently never fires.
- **`defaultTransitions.xml` applies to every state** — conditions there (e.g. `bDead` → `falldown`/`onground`) are global; adding a state means inheriting those defaults.
- **`m_AnimName` must exist in the library selected by the animSet filter** — `grappleGrab.xml` plays `Bob_Shove` because `player.xml` filters `Bob_*`/`Kate_*`; a node referencing an unselected prefix plays nothing.
- **Events fire at `Start`/`End` or a `TimePc` fraction** — `SetMeleeDelay` at `End`, `GrappleGrabCollisionCheck` at `TimePc 0.1`; timing bugs (e.g. damage before the swing) come from mismatching these.
- **`setAnimVariable` must be called before the condition is evaluated** — vanilla pairs them immediately (`setActionAnim(CharacterActionAnims.Bandage)` then `setAnimVariable("BandageType", …)` in the same action).
- **`CharacterActionAnims` constants are a fixed enum** — custom anims need a state name (string) in your own action group, not a new enum value.
- **`MotionScale`/`RotationScale` in `Defaults.xml` affect playback feel** — overriding them changes the whole game's motion, not just one animation (they are global defaults).

## 10. Modding Opportunities

All hooks below are verified extension points in B42.20.

1. **Define your own action group.** Add `media/actiongroups/<YourName>/actionGroup.xml` (with `<initial>` naming your first state) plus state/transition XMLs — mirror the `animal-editor` minimal layout (`idle/`, `runtime/`). The engine enumerates `media/actiongroups/`.
2. **New states via transitions.** In a group's `actions/` folder, add `to_<state>.xml` with `<transitionTo>` and `<conditions>` (`isTrue`/`isFalse`/`compare`/`eventOccurred`, optionally `<asSubstate>true</asSubstate>`); add the matching `<animNode>` under `AnimSets/<entity>/`.
3. **Reuse the vanilla animation library.** Reference existing animations (`Bob_Shove`, `Bob_*`) via `m_AnimName` in new nodes, or drive existing states from Lua with `setActionAnim("<state>")` / `setActionAnim(CharacterActionAnims.X)`.
4. **Parameterize nodes.** Set `setAnimVariable("MyVar", value)` from a timed action and gate your node with a `<m_Conditions>` entry (like `bDoGrapple`), with typed conditions and `m_Value`.
5. **Add events.** Use the `m_Events` vocabulary (`PlayerVoiceSound` for audio, `SetMeleeDelay`, `FlagWhileAlive`, collision checks) with `m_Time`/`m_TimePc` and `m_ParameterValue` to hook sound/gameplay at animation timestamps.
6. **Substate blending.** Use `m_SubStateBoneWeights` (e.g. `Bip01_Spine1`, `Bip01_Neck`) to mask upper-body actions over movement — the mechanism behind aiming while walking.
7. **Editor catalogs.** Add your variables/bones to `Master_Variables.xml` / `Master_Bones.xml` `<KeyPairs>` so they appear in the animation editor tooltips.
8. **Custom animations** require new animation assets in the library folders selected by your `animSet` filter — the asset format itself was not part of this doc's scope.

---
