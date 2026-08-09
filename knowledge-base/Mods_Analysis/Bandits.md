---
title: "Bandits — Mod Analysis"
source: "PZ community mod analysis"
build: "42.20"
mod_id: "Bandits"
mod_author: "Hydromancerx"
mod_version: "1.2.5"
date_analyzed: "2026-05-22"
tags: [pz, mod-analysis, bandits, ai, npc, combat, complex-systems]
---
# Bandits — Mod Analysis
## Overview
Bandits is a comprehensive AI overhaul mod that introduces hostile human NPC factions into the Project Zomboid world. Unlike static loot zones or simple zombie spawns, this mod implements dynamic squads of bandits that patrol territories, raid player bases, interact with each other, and exhibit complex tactical behaviors (flanking, taking cover, retreating). It transforms the PvP-like tension of human encounters into a PvE experience, adding a layer of psychological horror and strategic depth beyond the zombie threat.
## What it adds
NPC Entities: Distinct Bandit character models with varied clothing, weapons, and names.
Faction System: Multiple bandit groups (e.g., "Marauders", "Highwaymen") with unique territories and reputation logic.
AI Behaviors: Squad-based tactics, base building/occupying, looting runs, ambushes, and interrogation mechanics.
Dynamic Events: Randomized raid triggers, patrol sightings, and hostage situations.
Items: Specific bandit loot tables, radios for coordination, and makeshift armor.
## Systems:
Squad Manager: Handles group cohesion, formation, and command hierarchy.
Behavior Tree: Custom AI decision-making framework replacing simple zombie "see/run" logic.
Reputation System: Tracks player interactions (kills, theft) affecting aggression levels.
Base Occupation: Allows bandits to claim and defend buildings over time.
## Structure & architecture
The mod utilizes a heavy Server-Authoritative design for AI logic to prevent cheating and ensure consistent world state, with Client-side handling for rendering and dialogue.

Dependencies: None (Standalone AI system).
## Key Split:
Server: Runs the Behavior Tree, calculates LOS, manages inventory/combat outcomes, and controls spawning.
Client: Displays dialogue trees, renders nametags/factions colors, and plays voice lines.
Shared: Defines the stats (health, accuracy) and loot tables used by both sides.
## Key techniques
1. Custom Behavior Tree Implementation
Instead of simple state machines, Bandits uses a hierarchical behavior tree for nuanced decision making.
File: lua/server/AI/BanditBehaviorTree.lua
Technique: Nodes represent tasks (Move, Attack, Hide) with priorities. The tree is ticked every few seconds, allowing for interruptible actions based on changing stimuli (e.g., seeing a player overrides patrolling).

2. Squad Cohesion and Formation
Bandits move in groups, not individuals.
File: lua/server/AI/SquadManager.lua
Technique: A "Leader" entity is designated. Followers calculate target positions relative to the leader's vector, maintaining spacing while navigating around obstacles.

3. Tactical Cover System
AI actively seeks cover during firefights.
File: lua/server/AI/TacticalCoverSystem.lua
Technique: Raycasting from the bandit to the target to identify obstructing objects (walls, crates). The AI prioritizes moving to cells where the "exposure score" is minimized.

4. Dynamic Raid Event Generator
Raids are not scripted at specific times but generated based on player activity and noise.
File: lua/server/World/RaidEventGenerator.lua
Technique: Monitors global "chaos" metrics (shots fired, screams, player location). When a threshold is crossed, a raid is instantiated with difficulty scaled to player gear.

5. Reputation and Memory System
Bandits "remember" player actions.
File: lua/server/Database/BanditProfiles.lua
Technique: A persistent table stores player IDs and associated reputation scores per faction. Killing a bandit lowers rep, increasing future aggression.

6. Contextual Dialogue System
Dialogue is triggered by AI state, not just proximity.
File: lua/client/UI/BanditDialoguePanel.lua
Technique: The server sends a dialogue ID based on the current situation (Ambush, Looting, Taunting). The client renders the appropriate text options.

7. Base Occupation Logic
Bandits can claim buildings.
File: lua/server/World/BanditBaseManager.lua
Technique: Tracks which buildings are "controlled." Spawns loot and beds in these zones. Players entering trigger an immediate defense response.

8. Advanced Line-of-Sight (LOS) Checks
More robust than vanilla zombie vision.
File: lua/server/AI/BanditBehaviorTree.lua
Technique: Uses IsoWorld.instance.CurrentCell:lineOfSight() with specific height and transparency checks to determine if a target is truly visible (e.g., through windows vs. open doors).
9. Loadout Generation
Bandits spawn with era-appropriate and faction-specific gear.
File: lua/shared/Data/BanditLootTables.lua
Technique: Weighted random tables ensure leaders have better gear than grunts, and factions have thematic equipment (e.g., highwaymen have more guns).
10. Sandbox Customization
Deep configuration for server admins.
File: media/scripts/Bandits_sandbox_options.txt
Technique: Options for spawn rate, aggression level, raid frequency, and even specific faction enable/disable toggles.
## Notable engineering
Behavior Tree Flexibility: The custom BT implementation allows for emergent gameplay. Bandits feel "smart" because they can interrupt a reload to take cover if shot at, a nuance simple state machines struggle with.
Squad Coordination: The separation of SquadManager from individual AI logic ensures that bandits act as a unit, flanking and suppressing, which creates a much higher difficulty ceiling than solo enemies.
Persistent Reputation: Storing reputation persistently means the world reacts to the player's history, creating a narrative of escalation without scripted events.
Performance Optimization: By ticking behavior trees on a staggered schedule (not all bandits every frame) and using distance culling for AI updates, the mod maintains performance despite complex logic.
## Weaknesses & risks
CPU Intensity: The cover calculation (raycasting) and behavior tree ticks are expensive. Large raids or multiple active squads could cause server lag spikes.
Evidence: TacticalCoverSystem:findBestCover iterates nearby objects and performs raycasts per bandit per decision cycle.
Pathfinding Conflicts: Squad formation logic might conflict with the vanilla pathfinding grid, causing bandits to clump up or get stuck on complex geometry (stairs/fences).
Desync in Combat: If the server's LOS check differs slightly from the client's visual perspective (due to lag), players may feel they were shot through walls unfairly.
Save File Growth: Storing reputation data and base occupation states for every building could bloat save files over long-term playthroughs.
Balance Fragility: The damage output of bandits vs. player armor is delicate. A slight tweak in BanditProfiles could make them either trivial or instantly lethal.
## Lessons for modders
Behavior Trees > State Machines: For complex AI, behavior trees offer superior modularity and allow for interruptible, priority-driven actions that feel more organic.
Group Logic Abstraction: Manage groups (squads) as a distinct entity from individuals. This simplifies coordination logic (flanking, retreating) significantly.
Contextual Awareness: AI should react to the context (noise, player gear, time of day), not just presence. This creates dynamic difficulty scaling.
Staggered Updates: Never update all AI entities in the same frame. Distribute logic ticks over several frames to平滑 (smooth out) CPU usage.
Data-Driven Design: Use external tables (Lua files) for loot, stats, and dialogue. This makes balancing and adding new content easier without touching core logic.
Persistent World State: Remembering player actions (reputation) adds immense depth. Simple boolean flags or integer counters stored in the world save can create emergent narratives.
## 🤖 AI Agent Easy Access
## 🔌 Entry Points:
lua/server/AI/SquadManager.lua: Global list of active squads and their states.
lua/server/Database/BanditProfiles.lua: Player reputation and faction data.
lua/server/World/RaidEventGenerator.lua: Trigger logic for dynamic events.
## ⚡ Key Public Functions:
SquadManager:GetNearestSquad(position): Returns closest hostile group.
BanditProfiles:GetReputation(playerId, factionId): Returns integer score (-100 to 100).
RaidEventGenerator:InitiateRaid(player, intensity): Forces a raid event (for testing/triggers).
BanditBehaviorTree:GetCurrentTask(banditId): Returns current AI action state.
## 📦 Data Models:
Squad Object: { id, members=[banditId], leaderId, state=PATROL|COMBAT|RETREAT, targetPos }
Bandit Profile: { id, factionId, reputationScore, status=NEUTRAL|HOSTILE, lastSeenTimestamp }
Raid Event: { targetPlayerId, difficultyTier, squadComposition, spawnPoint }
## 📡 Event Subscription:
Events.OnZombieUpdate (Repurposed): Some AI ticks may hook here or a custom Events.OnBanditTick.
OnPlayerDamage: Check if source is a bandit to trigger reputation loss.
OnLoadGame: Initialize reputation tables.
## ⚠️ Integration Warnings:
Server Authority: Do not attempt to spawn bandits or change reputation on the client. All state changes must go through server RPC.
Performance: Avoid calling GetNearestSquad every frame. Cache results or use event-driven updates.
Conflict: Be cautious of other mods that modify zombie/NPC pathfinding, as Bandits relies on specific grid behaviors.
## Version Analyzed
Mod Version: 1.2.5 (Build 42.20)
Date: 2026-05-22
Note: Analysis based on code-only repository (textures/models/sounds stripped). Logic and architecture verified against source files.
