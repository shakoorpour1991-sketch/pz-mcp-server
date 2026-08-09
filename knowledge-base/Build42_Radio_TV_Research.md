# Build 42 — Radio, TV & Broadcast System Research

**Game:** Project Zomboid Build 42.18+  
**Source:** `D:\Games\ProjectZomboid\ProjectZomboid\media\`  
**Last Updated:** 2026-07-30

---

## 1. Hardware — Radio & TV Items

All radio/TV items use `ItemType = base:radio` internally (a unified Java class). They are defined in `media/scripts/generated/items/radio.txt`.

### 1.1 Walkie-Talkies (Portable, Two-Way)

| Item ID | Weight | Range | Freq Min | Freq Max | Battery Drain | Notes |
|---|---|---|---|---|---|---|
| WalkieTalkie1 (Budget) | 1.0 | 750 | 75000 | 150000 | 0.007 | Toy-grade |
| WalkieTalkie2 (Civilian) | 1.0 | 2000 | 50000 | 200000 | 0.008 | |
| WalkieTalkie3 (Civilian2) | 1.0 | 4000 | 25000 | 300000 | 0.009 | |
| WalkieTalkie4 (Police) | 1.25 | 8000 | 10000 | 500000 | 0.01 | |
| WalkieTalkie5 (Military) | 1.5 | 16000 | 200 | 1000000 | 0.014 | IsHighTier=true |
| WalkieTalkieMakeShift | 1.0 | 1000 | 75000 | 150000 | 0.007 | Crafted |

All walkies: `TwoWay=true`, `IsPortable=true`, `AttachmentType=Walkie`, `UsesBattery=true`, `UseWhileEquipped=false`.

### 1.2 Man-Pack Radio (Backpack Mobile Radio)

- **ManPackRadio**: Weight 15, Range 20000, Freq 200–1000000, Drain 0.014, IsHighTier=true
- Equipped on the back (`CanBeEquipped=Back`, `ClothingItem=Bag_ManPackRadio`)
- RunSpeedModifier 0.97 (slight slow), has ConditionMax 100
- `AttachmentReplacement=Bag`, `Tags=base:usesbattery;base:wearable;base:hasmetal`

### 1.3 Ham Radios (Stationary, Two-Way)

| Item ID | Weight | Range | Freq Min | Freq Max | Drain | Notes |
|---|---|---|---|---|---|---|
| HamRadio1 (Civilian) | 15.0 | 7500 | 10000 | 500000 | 0.01 | |
| HamRadio2 (Military) | 15.0 | 20000 | 200 | 1000000 | 0.014 | IsHighTier=true |
| HamRadioMakeShift | 15.0 | 6000 | 10000 | 500000 | 0.01 | Crafted |

All ham: `IsPortable=false`, `TwoWay=true`, `UsesBattery=true`, `ConditionMax=100`.

### 1.4 Consumer Radios (Receive-Only, Portable)

| Item ID | Weight | Range | Freq Min | Freq Max | Drain | Notes |
|---|---|---|---|---|---|---|
| RadioBlack | 1.5 | 0 | 88000 | 108000 | 0.007 | TwoWay=false, NoTransmit implied |
| RadioRed | 1.5 | 0 | 88000 | 108000 | 0.009 | AcceptMediaType=0 (CDs) |
| RadioMakeShift | 1.5 | 0 | 88000 | 108000 | 0.007 | Crafted |
| CDplayer | 0.8 | 0 | 88000 | 108000 | 0.009 | AcceptMediaType=0, NoTransmit=true |

Consumer radios: `TwoWay=false`, `TransmitRange=0`, receive-only. CDplayer only plays CDs.

### 1.5 Televisions (Stationary, Receive-Only)

| Item ID | Weight | Volume | Freq Min | Freq Max | Drain | Notes |
|---|---|---|---|---|---|---|
| TvAntique | 10.0 | 10 | 200 | 1000000 | 0.014 | `UsesBattery=false`, power-only |
| TvBlack | 10.0 | 12 | 200 | 1000000 | 0.009 | AcceptMediaType=1 (VHS tapes) |
| TvWideScreen | 10.0 | 15 | 200 | 1000000 | 0.007 | AcceptMediaType=1 (VHS tapes) |

All TVs: `IsTelevision=true`, `IsPortable=false`, `TwoWay=false`, `TransmitRange=0`. TVs do NOT use batteries in Build 42.

### 1.6 Key Item Properties Summary

- `MinChannel`/`MaxChannel` — Frequency range in Hz (e.g., 88000 = 88.0 kHz / FM band)
- `BaseVolumeRange` — How far the sound travels (audible radius)
- `TransmitRange` — How far the device can transmit (0 = receive-only)
- `MicRange` — Range for voice capture (usually 5)
- `UseDelta` — Battery drain modifier per tick
- `UsesBattery` — Whether it draws from batteries
- `IsTelevision` — Whether it receives TV channels (vs radio)
- `TwoWay` — Can transmit/receive vs receive-only
- `NoTransmit` — Explicit flag for receive-only transceivers (CDplayer)
- `AcceptMediaType` — 0=CDs, 1=VHS (for recorded media playback)

---

## 2. Frequencies & Channels

Frequencies are stored as integers in Hz. Common bands:

| Band | Min Hz | Max Hz | Used By |
|---|---|---|---|
| Consumer FM radio | 88000 | 108000 | RadioBlack, RadioRed, RadioMakeShift, CDplayer |
| Walkie low | 75000 | 150000 | WalkieTalkie1, WalkieTalkieMakeShift |
| Walkie mid | 50000 | 200000 | WalkieTalkie2 |
| Walkie high | 25000 | 300000 | WalkieTalkie3 |
| Police/Ham low | 10000 | 500000 | WalkieTalkie4, HamRadio1, HamRadioMakeShift |
| Military / Full range | 200 | 1000000 | WalkieTalkie5, ManPackRadio, HamRadio2, all TVs |

**Note:** Wider frequency range = more channels the device can access. Military gear (200–1,000,000 Hz) covers nearly everything.

**AEBS Channel:** UUID `EMRG-711984`, name "Automated Emergency Broadcast System", frequency randomized between **88000–108000** (FM band) per save. Category: Emergency.

---

## 3. Broadcast System Architecture

### 3.1 RadioData.xml (`media/radio/RadioData.xml`)

The master broadcast script. Contains:

- **<RootInfo>** — Source file GUID and version
- **<Voices>** — 11 voice colour entries (RGB tints used for speaker differentiation in text)
- **<Adverts>** / **<ScriptEntry>** — Pre-written broadcast scripts. Two main scripts:
  - **"Tv"** (ID `5b86d977...`) — TV adverts and programming
  - **"Radio"** (ID `8a4c8f31...`) — Radio adverts and programming
- Each ScriptEntry contains **<BroadcastEntry>** segments with **<LineEntry>** elements referencing translation IDs in `RadioData.json`
- Each LineEntry has RGB colour values for text display

**15,455 lines** of pre-written broadcast content covering ~40+ commercial adverts, movie trailers, PSAs, and radio jingles.

### 3.2 Radio Translation Data (`Translate/EN/RadioData.json`)

~12KB of pre-scripted broadcast lines for brands:
- Pizza Whirled, Churns-R-Us (ice cream and cones), Seahorse Coffee (Caramel Flan Latte), Orange-Lite Pop soda, Greene's Grocery, Fossoil gas stations, PAWS: The Movie (Spiffo), FashionaBelle clothing, ValuInsurance, Wok and Rolls restaurant, The Forgotten Element film, Dr. Oids film, Pharmahug pharmacy, Incontileve medication, Tooks Bear toy, Ivanov golf clubs, Pile o' Crepe restaurant, political ads (Fairweather/Mahoney), Jolly Good Fish and Chips, Havisham Suites hotel, Pleistocene Land film, Return of the NightPorter film, Fun X-Treme arcade, Chevalier Cossette car, Franklin vehicles, Shady Oaks nursing home, Redfont Vitamins, Amnesia perfume by Pato Rabrenne, Citr-8 Wave energy drink, The Exquisite Pearl jewelry, Grand Ohio mall, Home Sweet Gnome gnomes, Messy's Warehouse storage, Finnegan Research, Hawkswood furniture, Knox Country Pony Roam-O, Crossroads Mall, Irvington Gun Club, Star-E-Plex theater, Barg-N-Clothes, Spiffo's Double XL Bacon, Taco del Pancho, Zippee Market / Slurp Burp, Gas-2-Go, Brandenburg Relief Fund, Louisville Boat Club, Howie Zitron attorney

Each line entry references a GUID mapped to English text with inline markup: `[img=music]`, `[img=*sound effects*]`, and dialogue text.

### 3.3 DynamicRadio System (`ISDynamicRadio.lua`)

Server-side system that manages dynamic (procedural) radio channels.

**Channel Categories (enum):**
```
Undefined, Radio, Television, Military, Amateur, Bandit, Emergency, Other
```

**Channel registration:** Named `DynamicRadioChannel` objects are registered in the script manager. Each channel has:
- `name` — Display name
- `freq` — Static number or `{min, max}` for randomized frequencies
- `category` — One of the above categories
- `uuid` — Stable GUID for save persistence
- `register` — true = create new, false = look up existing
- `airCounterMultiplier` — Speed multiplier for the air-time counter display

**Save persistence:** Radio frequencies that are randomized on new game are persisted in `GameTime:getModData()["dynamicRadio"]`, and survive reloads.

**Events:**
- `OnLoadRadioScripts` — Populates channel list
- `EveryHours` — Invokes `OnEveryHour` on each registered script

### 3.4 ISWeatherChannel.lua — The AEBS Weather Channel

UUID: `EMRG-711984` (the only stock dynamic channel).

**Hourly Broadcast Generation:**
- Generates a new `RadioBroadCast` every in-game hour (for `hour < 120`, i.e., first 5 days)
- Broadcast structure:
  1. `AEBS_Intro` — "Fiver Zero Two... Automated Broadcast System"
  2. Sporadic fuzz (`<bzzt>`, `<fzzt>`, `<wzzt>`)
  3. Power outage countdown (3 stages based on sandbox power shutoff)
  4. Random military/emergency text (25% chance, from pool of ~14 templates)
  5. More fuzz
  6. Weather forecast (today + tomorrow)
  7. Fuzz
  8. Random text again
  9. Helicopter event day warning ("Air Activity detected" on the helicopter day)
  10. More fuzz

**Forecast data:**
- Temperature (mean, min, max, humidity %)
- Wind (mean/max speed, direction converted to localized zone names)
- Cloud cover (clear / medium / heavy / periodical heavy)
- Fog (light / thick / very thick)
- Weather events: heavy rain, thunderstorm, tropical storm, blizzard, snowfall
- Extreme weather warnings for days 2–5 out

**Random AEBS military text pool:** 14 strings ranging from anomalous/suspicious activity reports to frantic distress calls and Operation Artemis references.

**Zone system:** 9 geographic zones with 4 sectors each, referenced in AEBS broadcasts.

---

## 4. Recorded Media System

### 4.1 Media Registration (`ISRecordedMedia.lua`)

Recorded media (CDs, VHS tapes) are registered via:
```lua
_rc:register(category, id, itemDisplayName, spawning)
```
- `category` = "CDs" or "VHS" (only CDs exist in stock Build 42)
- `spawning` = 0 (rare), 1 (common), 2 (very common)
- Each media item has: title, subtitle, author, extra (publisher info), and lines

### 4.2 CD Content (`recorded_media.lua`)

**16 CDs** in stock game, all with `BOR-1` codes (reduces boredom by 1 point per line):

| CD Title | Artist | Year | Label |
|---|---|---|---|
| Your Smile. Your Kiss. | Every Reason | 1993 | Potassium Records |
| Over | Steamship Hurricane | 1993 | Universalis Sounds |
| You're Gone | Steamship Hurricane | 1992 | Universalis Sounds |
| Hidden | The Question | 1992 | Potassium Records |
| Let's Make Love | Errol Costello | 1983 | Growtone Music |
| The Depth of Your Love | Donny Mason | 1983 | The Hitlist Manufactuary |
| You Love Me Too | Maria Dionne | 1989 | Potassium Records |
| Dying Strike Official Soundtrack | Maria Dionne | — | Universalis Sounds |
| Our Love Goes On | Maria Dionne | 1988 | Potassium Records |
| Loretta | Chuck Halfpenny | 1976 | Countryfile Recordings |
| A Boy from Kentucky | Hank Gilman | 1978 | Countryfile Recordings |
| Got Me Thinkin' | Old Billy Shanklin | 1969 | Texas Sound |
| Freddy's Big Balloon | The Bojangles | 1962 | Londinium Records |
| Best of the Bojangles | The Bojangles | 1984 | Londinium Records |
| Where is Everybody? | Jerry Jones | 1982 | Londinium Records |
| Moon Madness | Jerry Jones | 1969 | Londinium Records |
| Rosewood Prison (live) | Old Billy Shanklin | 1973 | Texas Sound |
| Heading for the Heat | Old Billy Shanklin | 1971 | Texas Sound |
| Buck's Plum Outta Luck (live) | Bucky Brooks | 1981 | Countryfile Recordings |
| Uncle Billy's Kentucky Moonshine | — | 1985 | Countryfile Recordings |
| My Boy Asked Me... | Jack Dimestore | 1981 | Dimestore Legend Sounds |
| A Truck Full of Love | — | 1983 | Dimestore Legend Sounds |
| Cries of the Damned | Sinsilla | 1987 | Universalis Sounds |
| Rock Gods | — | 1989 | Universalis Sounds |
| Hell Has Opened | — | 1991 | Universalis Sounds |
| Who's Better? | Toni Williams | 1992 | Universalis Sounds |
| Sarcastic | — | — | — |
| I'll Look After You | Hooter and the Crayfish | 1993 | Major Brothers Productions |
| I Swear | — | 1978 | Countryfile Productions |
| Running on Fumes | Will Bill Groovy | 1988 | Major Brothers Productions |
| Raps for Christ | Lazarus and the Disciples | 1993 | Universalis Sounds |
| Can of Tomatoes | Gangsta-Z | 1992 | Universalis Sounds |
| Time for Love | Frankie Monro | 1964 | Crooner Records |
| Get Your Feet Wet | Llewelyn Hopkins | 1969 | Londinium Records |

### 4.3 Media Playback Devices

| Device | AcceptMediaType | Plays |
|---|---|---|
| RadioRed | 0 | CDs |
| CDplayer | 0 | CDs |
| TvBlack | 1 | VHS |
| TvWideScreen | 1 | VHS |
| TvAntique | (none) | — (no media slot) |

### 4.4 Interaction Codes (ISRadioInteractions.lua)

Each media line can carry comma-separated interaction codes that trigger stat/skill changes:

**Stats (prefix + operator + value):**
| Code | Stat | Example |
|---|---|---|
| ANG | Anger | `ANG+1` (increase) |
| BOR | Boredom | `BOR-1` (reduce, most common) |
| END | Endurance | |
| FAT | Fatigue | |
| FIT | Fitness | |
| HUN | Hunger | |
| MOR | Morale | |
| STS | Stress | |
| PAN | Panic | |
| SAN | Sanity | |
| SIC | Sickness | |
| PAI | Pain | |
| DRU | Intoxication | |
| THI | Thirst | |
| UHP | Unhappiness | |
| RCP | Recipe learn | `RCP=Base.CraftMakeshiftRadio` |

**Skill XP (prefix + amount):**
| Code | Skill | 
|---|---|
| SPR | Sprinting |
| LFT | Lightfooted |
| NIM | Nimble |
| SNE | Sneaking |
| BAA | Axe |
| BUA | Blunt |
| CRP | Carpentry |
| COO | Cooking |
| FRM | Farming |
| DOC | Doctor (First Aid) |
| ELC | Electricity |
| MTL | Metal Welding |
| FKN | Flint Knapping |
| CRV | Carving |
| AIM | Aiming |
| REL | Reloading |
| FIS | Fishing |
| TRA | Trapping |
| FOR | Foraging |
| TAI | Tailoring |
| MEC | Mechanics |
| CMB | Combat |
| SPE | Spear |
| SBU | Small Blunt |
| LBA | Long Blade |
| SBA | Small Blade |
| MAS | Masonry |
| POT | Pottery |
| BLA | Blacksmith |
| GLA | Glassmaking |
| HUS | Husbandry |
| BUT | Butchering |
| TRK | Tracking |

**Operator semantics:**
- `+` — Additive modifier
- `-` — Subtractive modifier  
- `=` — Set directly (for stat moodles)

All interactions have a **30-tick cooldown** per stat per player. The `BOR-1` code on every CD line is what lets listening to music reduce boredom.

---

## 5. Crafting & Components

### 5.1 Scavenged Components

Component items used in radio crafting (found through `DismantleElectronicsDevice` on radio/TV items):
- **ElectronicsScrap** — Base material from dismantling
- **Amplifier** — Required for all radio crafts
- **RadioReceiver** — Required for all radio crafts
- **RadioTransmitter** — Required for HAM and WalkieTalkie (not consumer radio)
- **ElectricWire** — Wiring material
- **LightBulb** / **LightBulbGreen** — Visual indicator components

### 5.2 Crafting Recipes

| Recipe | Skill Req | Auto-Learn | Inputs | Output |
|---|---|---|---|---|
| CraftMakeshiftRadio | Electricity 1 | Elec 6 | 2 Scrap + Amp + Bulb + Receiver + Wire + 2 Aluminum + Screwdriver | RadioMakeShift |
| CraftMakeshiftWalkieTalkie | Electricity 2 | Elec 7 | 3 Scrap + Amp + Bulb + GreenBulb + Receiver + Transmitter + 2 Wire + 3 Aluminum + Screwdriver | WalkieTalkieMakeShift |
| CraftMakeshiftHAMRadio | Electricity 3 | Elec 8 | 4 Scrap + Amp + Bulb + GreenBulb + Receiver + Transmitter + 3 Wire + 4 Aluminum + Screwdriver | HamRadioMakeShift |

### 5.3 Dismantling

`DismantleElectronicsDevice` (Electricity 0, 60s): Destroys any radio/TV item for 1 ElectronicsScrap.

---

## 6. Vehicle Radios

Two vehicle radio templates in `media/scripts/generated/vehicles/`:

### 6.1 template_radio.txt
- Accepts: `RadioBlack`, `RadioRed`, `RadioMakeShift`
- Receive-only consumer radios installed in the Engine mechanic area
- Install: screwdriver, 100 ticks
- Callbacks: `Vehicles.Create.Radio`, `Vehicles.Update.Radio`

### 6.2 template_radio_HAM.txt
- Accepts: `HamRadio1`, `HamRadio2`, `HamRadioMakeShift`
- Two-way HAM radio for vehicles
- Same install mechanics as standard radio
- Callbacks: `Vehicles.Create.Radio_HAM`, `Vehicles.Update.Radio`

---

## 7. Sounds

Defined in `media/scripts/generated/sounds/objects/sounds_object_radio.txt`:

| Sound ID | Event Path | Distance Max |
|---|---|---|
| RadioButton | `Object/Radio/Toggle` | (default) |
| RadioStatic | `Object/Radio/Static` | 100 |
| RadioTalk | `Object/Radio/Program` | 100 |
| RadioZap | `Object/Radio/Zap` | 100 |
| TuneIn | `Object/Radio/TuneIn` | (default) |

All under `category = Object`.

---

## 8. Battery Usage Mechanics

- `UseDelta` controls battery drain rate per game tick while the device is on
- Higher `UseDelta` = faster drain
- WalkieTalkie5 (military): 0.014 (fastest)
- Consumer radios (RadioBlack, RadioMakeShift): 0.007 (most efficient)
- TVs: `UsesBattery = false` — no battery drain, require mains power
- All portable radios tagged `base:usesbattery`

---

## 9. UI & Interaction Files

| File | Purpose |
|---|---|
| `client/ISUI/ISRadioAndTvMenu.lua` | Main radio/TV context menu |
| `client/ISUI/ISRadioButtons.lua` | Button rendering for radio UI |
| `client/ISUI/ISRadioOption.lua` | Radio option rendering |
| `client/RadioCom/ISRadioAction.lua` | Radio action processing |
| `client/RadioCom/ISRadioWindow.lua` | Radio window UI |
| `client/RadioCom/RadioWindowModules/RWMChannelTV.lua` | TV channel display module |
| `client/RadioCom/RadioWindowModules/RWMMedia.lua` | Recorded media playback UI |
| `client/RecordedMedia/ISMediaInfo.lua` | Media info display |
| `shared/RadioCom/ISRadioInteractions.lua` | Stat/skill effects from media lines |
| `shared/TimedActions/ISDeviceMediaAction.lua` | Media device interaction timed action |

---

## 10. Modding Notes

- **Adding a dynamic channel:** Add an entry to `DynamicRadio.channels` table in `ISDynamicRadio.lua`, then write an `OnEveryHour` handler that generates `RadioBroadCast` objects via `RadioLine.new(text, r, g, b)`.
- **Adding adverts:** Add entries to `RadioData.xml` with unique GUIDs, then add translations in `RadioData.json`.
- **New recorded media:** Add entry to `recorded_media.lua` with a new GUID, category ("CDs" or "VHS"), and a `spawning` rarity value.
- **New radio items:** Create item definitions inheriting from `Base.Radio` in item scripts.
- **Interaction codes:** Append codes like `BOR-1` or `ELC+1` to media lines to trigger stat/skill changes.
- **Radio component reuse:** `RadioReceiver`, `RadioTransmitter`, `Amplifier`, `ElectricWire`, `LightBulb`, `LightBulbGreen`, `ElectronicsScrap` are all reuseable crafting components.

---

*End of research document.*
