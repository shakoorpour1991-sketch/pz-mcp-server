---
title: "NeatUI_Framework — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "NeatUI_Framework"
mod_author: "Rocco, Afyrmo"
mod_version: "1.0.8"
date_analyzed: "2025-01-09"
tags: [pz, mod-analysis, ui-framework, client-side]
---

# NeatUI_Framework — Mod Analysis

## Overview

NeatUI_Framework is a **client-side UI framework** that provides reusable interface components, styling utilities, and compatibility support for the Neat ecosystem of mods. It serves as the foundational dependency for Neat_Rocco and potentially other UI-focused mods, offering a consistent visual language and interaction patterns across multiple panel types.

**Why it's notable:** This framework demonstrates sophisticated understanding of PZ's UI lifecycle, build-to-build API drift management, and provides production-ready scroll view implementations with smooth scrolling, auto-hiding scrollbars, and virtual scrolling for performance. The framework's compatibility layer for `ISUIElement` API changes between Build 42 versions shows defensive programming practices essential for maintaining mods across game updates.

## What it Adds

### UI Components
- **NI_SquareButton** — Icon-based square button with active/inactive states, hover/pressed feedback, and customizable active color
- **NIScrollView** — Full-featured scrollable container with vertical/horizontal scrolling, smooth scrolling animation, and auto-hiding scrollbars
- **NIScrollBar** — Custom scrollbar implementation (referenced by NIScrollView)
- **NIGridVirtualScrollView** — Virtualized grid view for rendering large item sets efficiently
- **NIVirtualScrollView** — Virtual scrolling implementation for performance with large content

### Utility Modules (NeatTool namespace)
- **NinePatch rendering** — Android-style 9-patch scalable border rendering for UI panels
- **3Patch rendering** — Simplified 3-patch scaling for simpler UI elements
- **Text rendering helpers** — Truncation, percentage display formatting
- **Texture management** — Lazy texture loading with retry logic

### Compatibility Layer
- **ISUIElement API polyfills** — Backwards-compatible implementations for `getCentreX/Y`, `getCenterX/Y`, `getAbsoluteCenterX/Y`, `setCenterX/Y` methods that were renamed/added in Build 42.19

### Media Placeholders
- Empty AnimSets and actiongroups directories with placeholder `.txt` files to prevent MP/server media scan errors (per mod.info description)

## Structure & Architecture

```
temp_mod_research/NeatUI_Framework/
├── mod.info                          # Version 1.0.8, supports B42.0.2 to B42.20.2+
├── common/
│   ├── common.txt                    # Shared directory marker
│   └── media/
│       ├── AnimSets/
│       │   └── NeatUI_Framework_no_animsets.txt
│       └── actiongroups/
│           └── NeatUI_Framework_no_actiongroups.txt
└── 42/
    └── media/lua/client/neatui_framework/
        ├── compat/
        │   └── nui_isuielement_compat.lua      # API polyfills for B42 version drift
        ├── neattool/
        │   ├── neattool_3patch.lua             # 3-patch rendering utility
        │   ├── neattool_9patch.lua             # 9-patch rendering utility
        │   ├── neattool_drawpercentage.lua     # Percentage bar drawing
        │   ├── neattool_textrender.lua         # Text truncation helpers
        │   └── neattool_truncatetext.lua       # Text truncation logic
        ├── scrollview/
        │   ├── nigridvirtualscrollview.lua     # Virtualized grid rendering
        │   ├── niscrollbar.lua                 # Scrollbar component
        │   ├── niscrollview.lua                # Main scrollable container
        │   └── nivirtualscrollview.lua         # Virtual scrolling base
        └── ui/
            └── ni_squarebutton.lua             # Reusable button component
```

**Code organization:**
- **Client-only:** All 11 Lua files are in `media/lua/client/` — no server or shared code
- **No dependencies:** Framework is self-contained, does not require StarlitLibrary or other mods
- **Modular namespaces:** Components use prefix naming (`NI_`, `NeatTool.`) to avoid global pollution
- **Build-specific folder:** Code lives in `42/` folder, indicating Build 42 targeting

## Key Techniques

### 1. **API Compatibility Polyfills for Build Drift**

The framework detects missing methods on `ISUIElement` and defines them only if absent, preserving vanilla behavior when the game provides them natively.

```lua
-- File: media/lua/client/neatui_framework/compat/nui_isuielement_compat.lua
if ISUIElement then
    if not ISUIElement.getCentreX then
        function ISUIElement:getCentreX()
            return self:getWidth() / 2.0
        end
    end
    -- ... similar guards for getCentreY, getSelfCenterX/Y, getCenterX/Y, 
    -- getAbsoluteCenterX/Y, setCenterX/Y
end
```

This pattern prevents double-definition errors on newer builds while providing backwards compatibility for older builds. The comment explicitly notes "Build 42.19 renamed the old getCentreX/getCentreY helpers."

### 2. **Lazy Texture Loading with Retry Logic**

Components defensively re-check texture availability at render time to handle cases where UI trees instantiate before textures are loaded.

```lua
-- File: media/lua/client/neatui_framework/ui/ni_squarebutton.lua
function NI_SquareButton:ensureTextures()
    -- Some UI trees may instantiate before the texture lookups are ready.
    -- Retry lazily so a transient nil lookup does not become permanent.
    if not self.buttonBgTexture then
        self.buttonBgTexture = getTexture("media/ui/NeatUI/Button/Background.png")
    end
    if not self.buttonBorderTexture then
        self.buttonBorderTexture = getTexture("media/ui/NeatUI/Button/Boarder.png")
    end
end

function NI_SquareButton:render()
    self:ensureTextures()  -- Called every frame
    -- ... rendering logic
end
```

This prevents permanent nil texture references from bricking a button if the initial `new()` call happens during asset loading.

### 3. **State-Driven Button Rendering with Active/Normal Modes**

The button component tracks an `isActive` boolean and renders different color schemes based on state + interaction (hover/pressed).

```lua
-- File: media/lua/client/neatui_framework/ui/ni_squarebutton.lua
function NI_SquareButton:render()
    self:ensureTextures()
    if self.isActive then
        -- [Active] mode uses custom activeColor
        if self.pressed then
            self:drawTextureScaled(self.buttonBgTexture, ..., 0.8, 
                self.activeColor.r * 0.8, self.activeColor.g * 0.8, self.activeColor.b * 0.8)
        elseif self:isMouseOver() then
            self:drawTextureScaled(self.buttonBgTexture, ..., 0.8, 
                math.min(self.activeColor.r * 1.2, 1), ...)
        else
            self:drawTextureScaled(self.buttonBgTexture, ..., 0.8, 
                self.activeColor.r, self.activeColor.g, self.activeColor.b)
        end
    else
        -- [Normal] mode uses grayscale
        if self.pressed then
            self:drawTextureScaled(self.buttonBgTexture, ..., 0.8, 0.1, 0.1, 0.1)
        -- ...
    end
end
```

Default `activeColor = {r=0.95, g=0.5, b=0.1}` gives an orange accent for active state.

### 4. **Smooth Scrolling with Frame-Rate Compensation**

The scroll view implements animated scrolling that adjusts movement based on actual frame time, preventing speed variations on different refresh rates.

```lua
-- File: media/lua/client/neatui_framework/scrollview/niscrollview.lua
function NIScrollView:updateSmoothScrolling()
    local frameRateFrac = UIManager.getMillisSinceLastRender() / 33.3  -- Normalize to 30 FPS
    
    if self.smoothScrollTargetY then
        if not self.smoothScrollY then 
            self.smoothScrollY = self:getYScroll()
        end
        
        local dy = self.smoothScrollTargetY - self.smoothScrollY
        local moveAmount = dy * math.min(0.5, 0.25 * frameRateFrac)
        
        -- Accelerate on high frame rates
        if frameRateFrac > 1 then
            moveAmount = dy * math.min(1.0, math.min(0.5, 0.25 * frameRateFrac) * frameRateFrac)
        end
        
        local targetY = self.smoothScrollY + moveAmount
        
        if math.abs(targetY - self.smoothScrollY) > 0.1 then
            self:setYScroll(targetY)
            self.smoothScrollY = targetY
        else
            self:setYScroll(self.smoothScrollTargetY)  -- Snap to target
            self.smoothScrollTargetY = nil
            self.smoothScrollY = nil
        end
    end
    -- ... X axis handled similarly
end
```

The easing factor `0.25 * frameRateFrac` creates a smooth deceleration curve as the scroll approaches its target.

### 5. **Auto-Hiding Scrollbars with Activity Timeout**

Scrollbars fade out after a configurable delay when not interacted with, reducing visual clutter.

```lua
-- File: media/lua/client/neatui_framework/scrollview/niscrollview.lua
function NIScrollView:updateScrollbarAlpha()
    if not self.autoHideScrollbar then return end
    
    local currentTime = getTimestampMs()
    local mouseOver = false
    
    if self.vscroll and self.vscroll:isVisible() then
        mouseOver = mouseOver or self.vscroll:isMouseOver()
    end
    if self.hscroll and self.hscroll:isVisible() then
        mouseOver = mouseOver or self.hscroll:isMouseOver()
    end
    
    -- Reset timer on mouse over or active scrolling
    if mouseOver or self.smoothScrollTargetY or self.smoothScrollTargetX then
        self.scrollbarAlpha = 1.0
        self.scrollbarLastActiveTime = currentTime
    elseif currentTime - self.scrollbarLastActiveTime > self.hideDelay then
        self.scrollbarAlpha = math.max(0, self.scrollbarAlpha - 0.05)  -- Fade out
    end
    
    if self.vscroll then self.vscroll.alpha = self.scrollbarAlpha end
    if self.hscroll then self.hscroll.alpha = self.scrollbarAlpha end
end
```

Configurable properties: `hideDelay = 1500` (ms), fade step `0.05` per frame.

### 6. **9-Patch Scalable Border Rendering**

Implements Android-style 9-patch scaling for UI panels, allowing borders to scale without distortion while corners remain fixed size.

```lua
-- File: media/lua/client/neatui_framework/neattool/neattool_9patch.lua
function NeatTool.NinePatch.draw(panel, x, y, width, height, textures, alpha, r, g, b)
    x = math.floor(x); y = math.floor(y); width = math.floor(width); height = math.floor(height)
    
    -- Get four corner sizes
    local cornerTopLeftWidth = textures.topLeft:getWidth()
    local cornerTopLeftHeight = textures.topLeft:getHeight()
    -- ... get all 9 texture dimensions
    
    -- Calculate minimum size (sum of corner widths/heights)
    local minWidth = cornerTopLeftWidth + cornerTopRightWidth
    local minHeight = cornerTopLeftHeight + cornerBottomLeftHeight
    
    -- Scale down if panel is smaller than minimum
    local scale = 1.0
    if width < minWidth then
        scale = width / minWidth
    end
    if height < minHeight and (height / minHeight) < scale then
        scale = height / minHeight
    end
    
    -- Draw 9 sections: 4 corners, 4 edges, 1 middle
    panel:drawTextureScaled(textures.topLeft, x, y, actualCornerTopLeftWidth, actualCornerTopLeftHeight, alpha, r, g, b)
    panel:drawTextureScaled(textures.topRight, x + width - actualCornerTopRightWidth, y, ...)
    -- ... draw remaining 7 sections
end
```

Requires 9 separate textures: `topLeft`, `topRight`, `bottomLeft`, `bottomRight`, `top`, `bottom`, `left`, `right`, `middle`.

### 7. **Scroll Boundary Clamping**

Prevents scrolling beyond content bounds by calculating maximum negative scroll offset.

```lua
-- File: media/lua/client/neatui_framework/scrollview/niscrollview.lua
function NIScrollView:updateScroll()
    -- ...
    if scrollAreaHeight > self.height then
        if yScroll > 0 then yScroll = 0 end
        local maxNegativeScroll = -(scrollAreaHeight - self.height)
        if yScroll < maxNegativeScroll then
            yScroll = maxNegativeScroll
        end
        self:setYScroll(yScroll)
    else
        self:setYScroll(0)  -- No scrolling needed
    end
    -- ...
end
```

The formula `-(scrollAreaHeight - self.height)` calculates exactly how far content can move before its bottom edge aligns with the viewport bottom.

### 8. **Child Position Sync During Scroll**

Moves all child elements by the scroll delta rather than redrawing them, maintaining their relative positions.

```lua
-- File: media/lua/client/neatui_framework/scrollview/niscrollview.lua
function NIScrollView:updateScroll()
    local deltaX = self:getXScroll() - self.lastX
    local deltaY = self:getYScroll() - self.lastY
    
    for _, child in pairs(self.scrollChildren) do
        child:setX(child:getX() + deltaX)
        child:setY(child:getY() + deltaY)
    end
    
    self.lastX = self:getXScroll()
    self.lastY = self:getYScroll()
end
```

This approach is more efficient than recalculating absolute positions each frame.

### 9. **Dynamic Scrollbar Recreation on Direction Change**

When switching between horizontal and vertical scrolling, the framework removes old scrollbars and creates new ones appropriate for the direction.

```lua
-- File: media/lua/client/neatui_framework/scrollview/niscrollview.lua
function NIScrollView:setScrollDirection(direction)
    if direction == "horizontal" or direction == "vertical" then
        local oldDirection = self.scrollDirection
        self.scrollDirection = direction
        
        if oldDirection ~= direction and (self.vscroll or self.hscroll) then
            self:recreateScrollBars()
        end
    end
end

function NIScrollView:recreateScrollBars()
    if self.vscroll then
        self:removeChild(self.vscroll)
        self.vscroll = nil
    end
    if self.hscroll then
        self:removeChild(self.hscroll)
        self.hscroll = nil
    end
    self:addCustomScrollBars()  -- Creates appropriate scrollbar for new direction
end
```

### 10. **Stencil Rect for Content Clipping**

Uses stencil rectangles to clip scrolling content to the viewport bounds, preventing children from drawing outside the scroll area.

```lua
-- File: media/lua/client/neatui_framework/scrollview/niscrollview.lua
function NIScrollView:prerender()
    self:updateSmoothScrolling()
    self:updateScrollbarAlpha()
    self:setStencilRect(0, 0, self.width, self.height)  -- Clip to viewport
    self:updateScrollbars()
    self:updateScroll()
end

function NIScrollView:render()
    self:clearStencilRect()  -- Remove clipping after rendering
end
```

The `prerender()` / `render()` pair ensures children are clipped during drawing but the stencil doesn't affect subsequent UI elements.

## Notable Engineering

### 1. **Defensive Compatibility Layer Design**

The `nui_isuielement_compat.lua` file is a masterclass in defensive modding. Instead of blindly overriding methods, it checks `if not ISUIElement.getCentreX then` before defining each function. This means:
- On B42.0–42.18: Framework provides missing methods
- On B42.19+: Vanilla methods exist, framework skips definition
- Zero risk of conflicts or double-definition errors

### 2. **Frame-Rate Independent Animation**

The smooth scrolling implementation normalizes delta time against a 30 FPS baseline (`33.3ms`), then applies acceleration factors for higher frame rates. This ensures consistent scroll "feel" whether running at 30 FPS or 144 FPS.

### 3. **Virtual Scrolling for Performance**

The presence of `NIVirtualScrollView` and `NIGridVirtualScrollView` indicates the framework supports rendering only visible items from large datasets. While we can't see the full implementation in this code-only repo, the filenames suggest row virtualization patterns that prevent performance degradation with hundreds/thousands of list items.

### 4. **Empty Media Folder Strategy**

The mod.info explicitly states: *"B42.20.2 MP/server animation media scan compatibility: empty animation media folders are provided because this framework does not ship custom animation files."* The placeholder `.txt` files in `AnimSets/` and `actiongroups/` prevent server log spam about missing directories during media scans.

### 5. **Namespace Isolation**

All components use prefixes (`NI_` for classes, `NeatTool.` for utilities) to avoid polluting the global namespace. This reduces collision risk with other mods and makes it clear which module owns each function.

## Weaknesses & Risks

### 1. **Client-Side Only Limitation**

All 11 Lua files are in `media/lua/client/` — there's no server-side code. This means:
- Framework cannot be used for server-authoritative UI logic
- Multiplayer clients must all have the mod installed for consistent behavior
- Not suitable for mods requiring server validation of UI actions

### 2. **Per-Frame Texture Lookups in render()**

While `ensureTextures()` has retry logic, calling it every frame (`NI_SquareButton:render()` line 70) means checking `if not self.buttonBgTexture` on every render. A more optimized approach would cache a boolean flag like `self.texturesLoaded` to skip the check after success.

**Location:** `media/lua/client/neatui_framework/ui/ni_squarebutton.lua:70`

### 3. **Hardcoded Texture Paths**

Texture paths like `"media/ui/NeatUI/Button/Background.png"` are hardcoded strings. If the mod author reorganizes folders, these break silently (texture returns nil). A config table at module top would centralize path management.

**Location:** `media/lua/client/neatui_framework/ui/ni_squarebutton.lua:21-22`

### 4. **No Error Handling for Missing Textures**

If a texture fails to load (wrong path, corrupted file), the code continues with `nil` textures. The `if self.buttonBgTexture then` checks prevent crashes, but users get invisible buttons with no error message.

### 5. **Scroll Children Array Not Weak**

The `scrollChildren` table uses strong references (`table.insert(self.scrollChildren, child)`). If a child is removed from the UI hierarchy but not via `removeScrollChild()`, it could leak memory. Using weak references or periodic cleanup would be safer.

**Location:** `media/lua/client/neatui_framework/scrollview/niscrollview.lua:63`

### 6. **Magic Numbers in Easing Calculation**

The smooth scrolling uses constants like `0.25`, `0.5`, `1.0` without explanation. These should be named constants (e.g., `SCROLL_EASE_FACTOR = 0.25`) for maintainability.

**Location:** `media/lua/client/neatui_framework/scrollview/niscrollview.lua:171-174`

### 7. **No Support for Diagonal Scrolling**

The `scrollDirection` property accepts only `"horizontal"` or `"vertical"`. Some UI designs benefit from free diagonal scrolling (e.g., infinite canvas views). The architecture would need significant changes to support this.

### 8. **Auto-Hide Delay Hardcoded**

The hide delay `o.hideDelay = 1500` is set in `new()` with no setter method. Users cannot customize this without modifying source.

**Location:** `media/lua/client/neatui_framework/scrollview/niscrollview.lua:37`

## Lessons for Modders

### 1. **Guard Against API Drift with Conditional Definitions**

When targeting multiple game versions, check `if not Class.method then` before defining compatibility shims. This lets your mod work on old and new builds without conflicts.

### 2. **Lazy-Load Textures with Retry Logic**

UI elements may instantiate before assets finish loading. Check for `nil` textures in `render()` and retry `getTexture()` calls instead of failing permanently.

### 3. **Normalize Animation Delta Time**

Use `UIManager.getMillisSinceLastRender() / 33.3` to normalize frame time against a baseline. Multiply easing factors by this ratio to ensure consistent animation speed across different refresh rates.

### 4. **Use Stencil Rects for Clipping Scrollable Content**

Call `setStencilRect(0, 0, width, height)` in `prerender()` and `clearStencilRect()` in `render()` to clip children to viewport bounds. This is more efficient than manually checking bounds for each child.

### 5. **Provide Placeholder Files for Empty Media Folders**

If your mod has empty `AnimSets/` or `actiongroups/` folders, add a `.txt` file with an explanatory comment. This prevents MP servers from logging "missing directory" errors during media scans.

### 6. **Prefix Your Classes and Utilities**

Use `NI_` or `ModName_` prefixes for all classes and tables to avoid global namespace collisions. This is critical for framework mods used by multiple dependent mods.

### 7. **Separate Concerns into Submodules**

Organize utilities into logical modules (`neattool/`, `scrollview/`, `ui/`, `compat/`). This makes the codebase easier to navigate and allows dependent mods to require only what they need.

### 8. **Implement Auto-Hide for Optional UI Elements**

For scrollbars, tooltips, or overlays, track last activity time with `getTimestampMs()` and fade out after a delay. Reset the timer on mouseover or interaction.

### 9. **Track Scroll State with Last Known Positions**

Store `lastX` and `lastY` to calculate deltas for moving children. This is more efficient than recalculating absolute positions from scratch each frame.

### 10. **Document Build Support Explicitly**

The mod.info clearly states: *"Build Support: B42.0.2 to B42.20.2+"* and explains Linux server compatibility measures. This transparency helps users understand what versions are tested and why certain design choices were made.

## Version Information

- **Mod ID:** `NeatUI_Framework`
- **Version Analyzed:** `1.0.8`
- **Build Target:** `42.20` (code in `42/` folder)
- **Supported Builds:** B42.0.2 to B42.20.2+ (per mod.info)
- **Authors:** Rocco, Afyrmo
- **Date Analyzed:** 2025-01-09
- **Total Lua Files:** 11 (all client-side)
- **Lines of Code:** ~1,100 (estimated from file sizes)
