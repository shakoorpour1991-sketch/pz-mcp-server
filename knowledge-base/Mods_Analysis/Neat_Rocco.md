---
title: "Neat_Rocco — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "Neat_Rocco"
mod_author: "ArtNod"
mod_version: "1.1.0"
date_analyzed: "2025-01-09"
tags: [pz, mod-analysis, ui-overhaul, client-side]
---

# Neat_Rocco — Mod Analysis

## Overview

Neat_Rocco is a **comprehensive UI overhaul mod** that redesigns vanilla in-game menus to match the NeatUI visual theme. It replaces ~15 different panel types with NeatUI-styled versions, providing consistent aesthetics across character info, livestock management, vehicle mechanics, farming, cooking, and more. The mod depends on `NeatUI_Framework` for core components and styling utilities.

**Why it's notable:** This mod demonstrates sophisticated understanding of PZ's UI inheritance patterns, implementing a systematic patching architecture that can selectively enable/disable individual window replacements via mod options. The codebase shows production-quality practices including compatibility patches for third-party mods (AutoCook, Animal Management System), per-window toggle callbacks, and a unified base panel class that eliminates boilerplate across 20+ panel implementations.

## What it Adds

### Panel Replacements (Vanilla → NeatUI)

The mod replaces these vanilla panels with NeatUI-styled versions:

**Character & Skills:**
- `ISCharacterInfoWindow` → `NR_CharInfoPanel` (C key character screen)
- `ISFitnessUI` → `NR_FitnessPanel` (fitness training interface)
- `ISGarmentUI` → `NR_GarmentPanel` (clothing insulation view)

**Livestock & Animals:**
- `ISAnimalZoneFirstInfo` → `NR_CheckZonePanel` / `NR_AddZonePanel`
- `ISFeedingTroughUI` → `NR_FeedingTroughPanel`
- `ISLivestockZoneUI` → `NR_LivestockZonePanel`
- `ISTrailerUI` → `NR_TrailerPanel`
- `ISHutchUI` → `NR_HutchPanel` (with nest/roost sub-panels)
- `ISButcherHookUI` → `NR_ButcherHookPanel`
- `ISAnimalUI` → `NR_AnimalUI`
- `ISAnimalTracksPanel` → `NR_AnimalTracksPanel`

**Crafting & Cooking:**
- `ISOvenUITimedAction` → `NR_OvenPanel` / `NR_MicrowavePanel`
- `ISBBQItemUI` → `NR_BBQPanel`
- `ISFarmingTendedGardenUI` → `NR_PlantPanel`

**Utilities & Systems:**
- `ISVehicleMechanics` → `NR_VehicleMechanicsPanel`
- `ISGeneratorManagerUI` → `NR_GeneratorPanel` + `NR_PowerRange` overlay
- `ISFluidContainerUI` → `NR_FluidContainerPanel` + `NR_FluidTransferPanel`
- `ISSearchContainer` → `NR_SearchPanel`
- `ISLiteratureUI` → `NR_LiteraturePanel`

**Dialog Overhauls:**
- `ISColorPicker` → `NR_ColorPicker`
- `ISTextBox` → `NR_TextBox`
- `ISModalRichText` → `NR_ModalRichText`
- `ISModalDialog` → `NR_ConfirmDialog`
- `ISBombTimerDialog` → `NR_BombTimerDialog`
- `ISAlarmClockDialog` → `NR_AlarmClockDialog`
- `ISDigitalCode` → `NR_DigitalCode`

### Utility Modules

- **NR_BasePanel** — Base class for all panels with shared rendering, joypad handling, collapse logic
- **NR_DrawBar** — Progress bar rendering with 3-patch scaling and color-coded percentages
- **NR_TabBar** — Custom tab button strip with tooltips
- **NR_ScrollingList** — Enhanced list widget
- **NR_CollapseUtils** — Auto-collapse behavior matching vanilla timing
- **NR_Header** — Consistent panel header with title and close button

### Mod Options Menu

Full configuration via Options > Mods > "Neat Rocco's UI":
- Global enable/disable toggle
- Background alpha slider (0.1–1.0)
- Collapse threshold selector (10/20/60/90 frames)
- Per-window toggles (CharInfo, Fitness, Livestock, Hutch, Bake, etc.)
- Generator-specific options (convert to RT, per-generator overlay, union overlay)
- Color pickers for generator overlay colors

## Structure & Architecture

```
temp_mod_research/Neat_Rocco/
├── mod.info                          # v1.1.0, requires NeatUI_Framework
├── common/                           # Shared code (client-only in practice)
│   └── media/lua/client/NeatRocco/
│       ├── NR_Config.lua             # Centralized config (colors, dimensions)
│       ├── NR_ModOptions.lua         # Options menu registration
│       ├── NR_Patch.lua              # Master patch orchestrator
│       ├── NR_Patches/               # Per-feature patch modules (14 files)
│       │   ├── NR_Patch_Bake.lua
│       │   ├── NR_Patch_Livestock.lua
│       │   ├── NR_Patch_Mech.lua
│       │   └── ... (11 more)
│       └── NeatRocco/                # Panel implementations (~25 files)
│           ├── NR_Bake/
│           │   ├── NR_OvenPanel.lua
│           │   └── NR_MicrowavePanel.lua
│           ├── NR_CharInfo/
│           │   ├── NR_CharInfoPanel.lua
│           │   ├── NR_HealthPanel.lua
│           │   └── compat/NR_CharInfo_AMSCompat.lua
│           ├── NR_Livestock/
│           │   ├── NR_AddZonePanel.lua
│           │   ├── NR_CheckZonePanel.lua
│           │   ├── NR_FeedingTroughPanel.lua
│           │   └── NR_TrailerPanel.lua
│           ├── NR_Utils/
│           │   ├── NR_BasePanel.lua
│           │   ├── NR_DrawBar.lua
│           │   ├── NR_TabBar.lua
│           │   └── ... (7 more)
│           └── ... (other feature folders)
└── 42.20/
    └── media/lua/client/NeatRocco/
        └── NR_Literature/
            └── NR_LiteraturePanel.lua     # Build 42.20 specific
        └── NR_Livestock/
            └── NR_LivestockZonePanel.lua  # Build 42.20 specific
```

**Code organization:**
- **Total Lua files:** 64
- **Lines of code:** ~12,000
- **Client-only:** All code in `media/lua/client/` — no server or shared logic
- **Dependency:** Requires `NeatUI_Framework` (per mod.info `require=\NeatUI_Framework`)
- **Incompatible with:** Old standalone Neat mods (`\Neat_Livestock`, `\Neat_ButcherHook`, etc.)

**Patch architecture:**
1. `NR_Patch.lua` is loaded on game boot
2. Registers generic class replacement patches via `NR_MakePatch()` for dialogs
3. Requires per-feature patch modules that monkey-patch specific timed actions or UI constructors
4. Each patch module registers callbacks via `NR_RegisterWindowToggleCallback(windowId, cb)`
5. When user toggles a window in options, only that window's callback fires

## Key Techniques

### 1. **Generic Class Replacement Helper**

The `NR_MakePatch()` function provides a reusable pattern for replacing vanilla classes while preserving subclass behavior.

```lua
-- File: common/media/lua/client/NeatRocco/NR_Patch.lua
local function NR_MakePatch(VanillaClass, ReplacementClass, windowId)
    VanillaClass._NR_old_new = VanillaClass._NR_old_new or VanillaClass.new
    
    local function patched(self, ...)
        if self == VanillaClass then
            return VanillaClass._NR_old_new(ReplacementClass, ...)
        end
        return VanillaClass._NR_old_new(self, ...)  -- Subclass calls pass through
    end
    
    local function apply(enabled)
        VanillaClass.new = enabled and patched or VanillaClass._NR_old_new
    end
    
    if windowId then
        NR_RegisterWindowToggleCallback(windowId, apply)
    else
        NR_RegisterToggleCallback(apply)
    end
end

-- Usage:
NR_MakePatch(ISColorPicker, NR_ColorPicker, "Dialogs")
NR_MakePatch(ISFitnessUI, NR_FitnessPanel, "Fitness")
```

This pattern:
- Caches the original `new()` method in `_NR_old_new`
- Redirects direct `VanillaClass:new()` calls to `ReplacementClass:new()`
- Allows subclasses calling `VanillaClass.new(self, ...)` to work unchanged
- Binds the patch to a per-window toggle if `windowId` is provided

### 2. **Per-Window Toggle Callback System**

Each feature module registers a callback that receives the combined (global AND per-window) enabled state.

```lua
-- File: common/media/lua/client/NeatRocco/NR_Patches/NR_Patch_Bake.lua
local function NR_applyBakeToggle(enabled)
    if enabled then
        ISOvenUITimedAction.perform = NR_performBake
    else
        ISOvenUITimedAction.perform = ISOvenUITimedAction._NR_old_perform
        -- Close any open NR panels
        for i = 1, 4 do
            local inst = NR_OvenPanel.instance[i]
            if inst then inst:close() end
            inst = NR_MicrowavePanel.instance[i]
            if inst then inst:close() end
        end
    end
end

NR_RegisterWindowToggleCallback("Bake", NR_applyBakeToggle)
```

The callback registry in `NR_ModOptions.lua` computes the combined state:
```lua
function NR_isWindowEnabled(windowId)
    if not NR_isEnabled() then return false end  -- Global must be on
    local opts = PZAPI.ModOptions:getOptions(MOD_ID)
    local o = opts:getOption("use" .. windowId)
    if not o then return true end
    return _NR_to_bool(o:getValue())
end
```

### 3. **Timed Action Override Pattern**

For panels triggered by timed actions (oven baking), the mod caches the original `perform()` method and replaces it.

```lua
-- File: common/media/lua/client/NeatRocco/NR_Patches/NR_Patch_Bake.lua
ISOvenUITimedAction._NR_old_perform = ISOvenUITimedAction._NR_old_perform or ISOvenUITimedAction.perform

local function NR_performBake(self)
    -- Must be called first, like vanilla (removes action from queue)
    ISBaseTimedAction.perform(self)
    
    local player = self.character:getPlayerNum()
    
    if self.mcwave then
        -- Microwave: use NR_MicrowavePanel
        if NR_MicrowavePanel.instance and NR_MicrowavePanel.instance[player + 1] then
            NR_MicrowavePanel.instance[player + 1]:close()
        end
        local _pad = NR_Config.padding
        local _tex1 = getTexture("media/ui/Knobs/KnobBGMicrowaveTemp.png")
        local _tex2 = getTexture("media/ui/Knobs/KnobBGMicrowaveTimer.png")
        local _w = _pad + _tex1:getWidthOrig() + _pad + _tex2:getWidthOrig() + _pad
        local ui = NR_MicrowavePanel:new(0, 0, _w, 300, self.mcwave, self.character)
        ui:initialise()
        ui:addToUIManager()
        if JoypadState.players[player + 1] then
            ui.prevFocus = JoypadState.players[player + 1].focus
            setJoypadFocus(player, ui)
        end
        return
    end
    
    -- Oven: similar logic with NR_OvenPanel
end
```

Key points:
- Calls `ISBaseTimedAction.perform(self)` first to remove from queue (vanilla behavior)
- Closes existing panel instance before creating new one (prevents duplicates)
- Calculates dynamic width based on texture sizes
- Sets up joypad focus for controller support

### 4. **Base Panel with Shared Boilerplate**

All NR panels derive from `NR_BasePanel` which provides common initialization, rendering, and input handling.

```lua
-- File: common/media/lua/client/NeatRocco/NR_Utils/NR_BasePanel.lua
NR_BasePanel = ISPanelJoypad:derive("NR_BasePanel")

function NR_BasePanel.initBase(o)
    NR_DrawBar.initTextures(o)
    o.drawFrame = false
    o.background = false
    o:setWantKeyEvents(true)
end

function NR_BasePanel:prerender()
    NR_DrawUtils.prerenderPanelBody(self, NR_Config.headerHeight)
end

function NR_BasePanel:onKeyRelease(key)
    if key == Keyboard.KEY_ESCAPE then self:close(); return true end
end

function NR_BasePanel:closeBase()
    self:setVisible(false)
    self:removeFromUIManager()
    if JoypadState.players[self.playerNum + 1] then
        if isJoypadFocusOnElementOrDescendant(self.playerNum, self) then
            setJoypadFocus(self.playerNum, nil)
        end
    end
end
```

Usage in a panel:
```lua
-- File: common/media/lua/client/NeatRocco/NR_CharInfo/NR_CharInfoPanel.lua
function NR_CharInfoPanel:new(x, y, width, height, playerNum)
    local o = ISCollapsableWindow:new(x, y, width, height)
    setmetatable(o, self)
    self.__index = self
    
    o.playerNum = playerNum
    o.pin = true  -- Disable vanilla auto-collapse
    
    NR_CollapseUtils.init(o)
    NR_BasePanel.initBase(o)  -- Initialize textures and flags
    return o
end
```

### 5. **Three-Patch Progress Bar Rendering**

Uses NeatUI's 3-patch system for scalable progress bars with separate left/middle/right textures.

```lua
-- File: common/media/lua/client/NeatRocco/NR_Utils/NR_DrawBar.lua
function NR_DrawBar.drawBar(panel, x, y, w, h, pct, fr, fg, fb)
    -- Draw background (gray)
    NeatTool.ThreePatch.drawHorizontal(panel, x, y, w, h,
        panel.progressBGTextures.left, panel.progressBGTextures.middle, panel.progressBGTextures.right,
        0.8, 0.4, 0.4, 0.4)
    
    -- Draw fill with stencil clipping
    local fillW = math.floor(w * math.max(0, math.min(pct, 1)))
    if fillW > 0 then
        panel:setStencilRect(x, y, fillW, h)
        NeatTool.ThreePatch.drawHorizontal(panel, x, y, w, h,
            panel.progressFillTextures.left, panel.progressFillTextures.middle, panel.progressFillTextures.right,
            1.0, fr, fg, fb)
        panel:clearStencilRect()
    end
end

function NR_DrawBar.getBarColor(pct)
    if pct > 0.5 then return 0.2, 0.8, 0.3      -- Green
    elseif pct > 0.25 then return 0.9, 0.5, 0.1  -- Orange
    else return 0.85, 0.2, 0.2                   -- Red
    end
end
```

The stencil rect ensures the fill doesn't draw outside the percentage width.

### 6. **Dynamic Panel Width Calculation from Textures**

Panels calculate their width at runtime based on the actual sizes of knob/background textures.

```lua
-- File: common/media/lua/client/NeatRocco/NR_Patches/NR_Patch_Bake.lua
local _pad = NR_Config.padding
local _tex1 = getTexture("media/ui/Knobs/KnobBGFarhenOvenTemp.png")
local _tex2 = getTexture("media/ui/Knobs/KnobBGOvenTimer.png")
local _w = _pad + _tex1:getWidthOrig() + _pad + _tex2:getWidthOrig() + _pad
local ui = NR_OvenPanel:new(0, 0, _w, 400, self.stove, self.character)
```

This ensures panels are always correctly sized even if texture assets change.

### 7. **Mod Compatibility Hooks for Third-Party Tabs**

The character info panel provides a hook system for compatibility patches without polluting the main file.

```lua
-- File: common/media/lua/client/NeatRocco/NR_CharInfo/NR_CharInfoPanel.lua
-- Hooks called by shim.addView(view, name) for every tab added (vanilla or mod).
-- Used by NR_CharInfo/compat/* files to apply mod-specific fixes.
NR_CharInfoPanel.addViewHooks = NR_CharInfoPanel.addViewHooks or {}
```

Example compatibility patch:
```lua
-- File: common/media/lua/client/NeatRocco/NR_CharInfo/compat/NR_CharInfo_AMSCompat.lua
-- Animal Management System compatibility
table.insert(NR_CharInfoPanel.addViewHooks, function(view, name)
    if name == "AMS_Tab" then
        -- Apply AMS-specific styling fixes
    end
end)
```

### 8. **Centralized Configuration Table**

All dimensions, colors, and thresholds live in `NR_Config.lua` for easy tweaking.

```lua
-- File: common/media/lua/client/NeatRocco/NR_Config.lua
NR_Config = {
    barHeight = math.floor(FONT_HGT_SMALL * 1.2),
    bgAlpha = 1.0,
    buttonSize = math.floor(FONT_HGT_MEDIUM),
    headerHeight = math.floor(FONT_HGT_MEDIUM * 1.5),
    itemHeight = math.floor(FONT_HGT_SMALL * 2.0),
    padding = math.floor(FONT_HGT_SMALL * 0.4),
    
    -- Theme colors
    headerBg = 0.08,
    panelBg = 0.15,
    separatorColor = { a = 0.6, r = 0.4, g = 0.4, b = 0.4 },
    selectionColor = { a = 0.15, r = 0.3, g = 0.7, b = 0.35 },
    
    -- Collapse threshold (frames at 60fps, vanilla uses 20)
    collapseThreshold = 20,
}

-- Derived calculations
NR_Config.actionBarHeight = NR_Config.buttonSize + NR_Config.padding * 2
NR_Config.minWindowHeight = NR_Config.headerHeight + NR_Config.minListHeight + 
                            NR_Config.actionBarHeight + NR_Config.warningAreaHeight + 
                            NR_Config.padding * 3
```

### 9. **Instance Tracking for Cleanup**

Panels track instances in a static table indexed by player number for cleanup on toggle disable.

```lua
-- File: common/media/lua/client/NeatRocco/NR_Patches/NR_Patch_Bake.lua
if NR_MicrowavePanel.instance and NR_MicrowavePanel.instance[player + 1] then
    NR_MicrowavePanel.instance[player + 1]:close()
end
```

Pattern in panel constructor:
```lua
function NR_OvenPanel:new(...)
    local o = ISOvenUI:new(...)
    setmetatable(o, self)
    self.__index = self
    
    NR_OvenPanel.instance = NR_OvenPanel.instance or {}
    NR_OvenPanel.instance[playerNum + 1] = o  -- Track instance
    return o
end
```

### 10. **Pin Flag to Disable Vanilla Auto-Collapse**

Sets `o.pin = true` to prevent vanilla `ISCollapsableWindow` from auto-closing when mouse moves outside.

```lua
-- File: common/media/lua/client/NeatRocco/NR_CharInfo/NR_CharInfoPanel.lua
function NR_CharInfoPanel:new(x, y, width, height, playerNum)
    local o = ISCollapsableWindow:new(x, y, width, height)
    -- ...
    o.pin = true  -- pin=true : neutralise l'auto-collapse vanilla 
                  -- (onMouseMoveOutside ne s'active pas)
    NR_CollapseUtils.init(o)  -- Use custom collapse logic instead
    return o
end
```

Custom collapse logic in `NR_CollapseUtils` respects the configured `collapseThreshold` frames.

## Notable Engineering

### 1. **Systematic Patch Orchestration**

The `NR_Patch.lua` file serves as a central orchestrator that:
- Registers 9 generic class replacements via `NR_MakePatch()` (dialogs, fitness, garment)
- Requires 14 per-feature patch modules that each handle their own monkey-patching
- Ensures patches load in correct order (generic dialogs before feature-specific)

This separation of concerns makes it easy to add new panel types without modifying existing code.

### 2. **Two-Level Toggle System**

The mod options implement a sophisticated two-level toggle:
- **Global toggle:** Enables/disables entire mod
- **Per-window toggles:** Enable/disable individual panel types

The callback system computes `combined = global AND perWindow` and only fires callbacks for affected windows. This allows users to keep the mod enabled but disable problematic panels without uninstalling.

### 3. **Compatibility-First Design**

The mod includes dedicated compatibility folders:
- `NR_CharInfo/compat/NR_CharInfo_AMSCompat.lua` — Animal Management System
- Multiple `NR_Patch_*` files that preserve vanilla behavior when disabled

The `addViewHooks` system allows third-party mod authors to register fixes without modifying Neat_Rocco source.

### 4. **Consistent Visual Language**

Every panel uses the same:
- Header height (`NR_Config.headerHeight`)
- Padding (`NR_Config.padding`)
- Color scheme (`headerBg`, `panelBg`, `separatorColor`)
- Progress bar style (3-patch with color-coded percentages)

This consistency creates a cohesive UI experience across disparate game systems.

### 5. **Joypad Support Throughout**

Every panel properly handles joypad focus:
- Stores `prevFocus` before taking focus
- Calls `setJoypadFocus(player, ui)` on open
- Restores focus or clears it on close via `closeBase()`

This ensures controller users can navigate all NeatUI panels seamlessly.

## Weaknesses & Risks

### 1. **Monkey-Patching Fragility**

The mod extensively monkey-patches vanilla methods (`ISOvenUITimedAction.perform`, `ISCharacterInfoWindow.new`, etc.). If TFP updates these methods' signatures or internal logic, patches may break silently or cause crashes.

**Location:** `common/media/lua/client/NeatRocco/NR_Patches/*.lua` (all 14 files)

**Risk mitigation:** The mod caches originals (`_NR_old_perform`), but there's no version checking to detect incompatible game updates.

### 2. **No Server-Side Code**

All 64 Lua files are client-side only. This means:
- Multiplayer requires all clients to have the mod installed
- Cannot validate UI actions server-side
- Desync possible if clients have different mod versions

### 3. **Hardcoded Texture Paths**

Texture paths like `"media/ui/NeatRocco/Progress/Background_L.png"` are hardcoded strings throughout. If assets are reorganized, these break silently.

**Location:** `common/media/lua/client/NeatRocco/NR_Utils/NR_DrawBar.lua:13-20`

### 4. **Instance Table Memory Leak Risk**

Panel instances are tracked in static tables (`NR_OvenPanel.instance[player + 1]`), but there's no cleanup when players disconnect or panels are closed unexpectedly.

**Location:** Multiple panel constructors

**Risk:** Over long play sessions with many panel opens/closes, orphaned references could accumulate.

### 5. **French Comments Only**

Some comments are in French (e.g., `"pin=true : neutralise l'auto-collapse vanilla (onMouseMoveOutside ne s'active pas)"`). While not a functional issue, this reduces accessibility for non-French speakers contributing to the mod.

**Location:** `common/media/lua/client/NeatRocco/NR_CharInfo/NR_CharInfoPanel.lua:62`

### 6. **Magic Numbers in Config**

While many values are derived from font heights, some constants like `scrollBarMinHeight = 20` appear without explanation. These should have comments explaining their significance.

**Location:** `common/media/lua/client/NeatRocco/NR_Config.lua:17`

### 7. **No Fallback for Missing Textures**

If a texture fails to load, the code continues with `nil` textures. The 3-patch drawing functions would crash on `nil:left`.

**Location:** `common/media/lua/client/NeatRocco/NR_Utils/NR_DrawBar.lua:12-21`

### 8. **Incompatible with Old Standalone Mods**

The mod.info explicitly lists incompatibilities:
```
incompatible=\Neat_Livestock,\Neat_ButcherHook,\Neat_Hutch,\Neat_Generator,\NeatBake
```

Users must manually unsubscribe from old standalone Neat mods, or face conflicts. No runtime detection/warning is implemented.

### 9. **Collapse Threshold Frame-Based**

The `collapseThreshold = 20` is documented as "frames at 60fps". On systems running at different frame rates, the actual time before collapse varies.

**Location:** `common/media/lua/client/NeatRocco/NR_Config.lua:33`

**Better approach:** Use milliseconds via `getTimestampMs()` for consistent timing.

### 10. **No Error Boundaries on Patches**

Patch application has no `pcall()` wrappers. If a patch fails during registration (e.g., missing vanilla class), the entire mod could fail to load.

**Location:** `common/media/lua/client/NeatRocco/NR_Patch.lua:49-57`

## Lessons for Modders

### 1. **Use a Generic Patch Helper for Class Replacements**

Instead of writing custom replacement logic for each class, create a helper like `NR_MakePatch()` that handles caching, redirection, and toggle binding uniformly.

### 2. **Implement Per-Feature Toggles for User Control**

Register callbacks with a central options system so users can disable problematic features without uninstalling the entire mod. Compute combined (global AND per-window) state before firing callbacks.

### 3. **Cache Original Methods Before Overriding**

Always save `VanillaClass._NR_old_method = VanillaClass.method` before replacing. This allows:
- Clean restoration when mod is disabled
- Forward compatibility if vanilla changes

### 4. **Derive Dimensions from Font Heights**

Calculate UI dimensions relative to `getTextManager():getFontHeight(UIFont.Small)` instead of hardcoding pixels. This ensures proper scaling if font sizes change.

```lua
NR_Config.headerHeight = math.floor(FONT_HGT_MEDIUM * 1.5)
NR_Config.padding = math.floor(FONT_HGT_SMALL * 0.4)
```

### 5. **Track Panel Instances for Cleanup**

Maintain a static table indexed by player number to track active panel instances. This enables:
- Closing duplicate panels before opening new ones
- Bulk cleanup when mod is disabled
- Preventing memory leaks from orphaned panels

### 6. **Provide Compatibility Hook Points**

Expose tables like `addViewHooks = {}` that compatibility patches can extend. This keeps main code clean while allowing targeted fixes for third-party mods.

### 7. **Use Stencil Rects for Clipping Progress Fills**

When drawing progress bars, use `setStencilRect()` to clip the fill texture to the exact percentage width. This avoids needing separate textures for each fill level.

### 8. **Calculate Panel Sizes from Asset Dimensions**

Instead of hardcoding panel widths, measure texture sizes at runtime:
```lua
local _w = _pad + _tex1:getWidthOrig() + _pad + _tex2:getWidthOrig() + _pad
```

This ensures panels adapt automatically if assets change.

### 9. **Disable Vanilla Behaviors Before Adding Custom Logic**

Set `o.pin = true` to disable vanilla auto-collapse, then implement custom collapse with `NR_CollapseUtils.init(o)`. This prevents conflicts between two collapse systems.

### 10. **Document Incompatibilities Explicitly in mod.info**

List conflicting mods in the `incompatible=` field so users see warnings before subscribing. Example:
```
incompatible=\Neat_Livestock,\Neat_ButcherHook,\Neat_Hutch
```

## Version Information

- **Mod ID:** `Neat_Rocco`
- **Version Analyzed:** `1.1.0`
- **Build Target:** `42.20` (code in `42.20/` and `common/` folders)
- **Author:** ArtNod
- **Date Analyzed:** 2025-01-09
- **Total Lua Files:** 64
- **Lines of Code:** ~12,000
- **Dependencies:** Requires `NeatUI_Framework`
- **Incompatible With:** `\Neat_Livestock`, `\Neat_ButcherHook`, `\Neat_Hutch`, `\Neat_Generator`, `\NeatBake`
- **Panel Types Replaced:** ~25 (dialogs, character info, livestock, mechanics, farming, etc.)
