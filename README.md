# Project Zomboid MCP Server

A Model Context Protocol (MCP) server for Project Zomboid mod development, providing script validation, generation, and contextual assistance through AI-enhanced tooling.

## 🚀 Features

### Smart Project Zomboid Integration
- **Auto-detection** of Steam, Epic Games, and GOG installations (basic path checking; Steam VDF parsing incomplete)
- **Cross-platform support** (Windows, Linux, macOS, WSL)
- **Build 42 compatibility** with modern mod structure support
- **Fallback system** with local script parsing

### Comprehensive Game Data Knowledge
- **Vanilla game indexing** with full-text search (FTS5; references table not yet populated during parsing)
- **Metadata extraction** for items, recipes, and basic properties (some PZ-specific fields like `MetalValue`, `Tags`, `AttachmentType` parsing is minimal)
- **Relationship mapping** between items, recipes, and dependencies (references table exists but `extractReferences` not integrated into parse flow)

### Intelligent Script Generation
- **Template-based generation** using real game patterns
- **Balance analysis** comparing custom items to vanilla equivalents (weapons only; no armor/clothing/food balance)
- **Reference validation** ensuring dependencies exist (database currently empty)
- **Multiple output formats**: items, recipes, fixing scripts, sounds — **evolvedrecipe and vehicle generation NOT implemented**

### Advanced Validation Engine
- **Real-time syntax validation** with detailed error reporting
- **Reference checking** for items, sounds, and sprites
- **Balance analysis** with gameplay impact assessment (limited to weapons)
- **Best practices suggestions** for mod development (basic warnings only)

### Mod Analysis (Implemented, Not Previously Documented)
- Mod structure validation (Build 42, common folder detection)
- Lua file syntax checking (parentheses, brackets balance)
- Deprecated Lua API detection
- Performance analysis (large file detection)
- Mod quality metrics (structure, syntax, balance, documentation)
- Steam library folder VDF parsing
- WSL path detection
- Mod template generation (mod.info + example script)

### Deployment
- **Cross-platform** Node.js deployment (STDIO MCP server)
- **SQLite Database** integration for persistent storage
- **Cloudflare Workers support removed** — HTTP API and edge deployment no longer available

## 🔧 Installation

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn package manager
- Visual Studio C++ Build Tools (Windows) for native dependencies

### Local Development
```bash
# Clone the repository
git clone https://github.com/minimax/pz-mcp-server.git
cd pz-mcp-server

# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode (requires successful build first)
npm run dev
```

## 📖 Usage

### With Claude Desktop (STDIO)

Add to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "pz-mcp-server": {
      "command": "node",
      "args": ["/path/to/pz-mcp-server/dist/index.js"]
    }
  }
}
```

> Requires successful `npm run build` first. The STDIO server entry point is `src/index.ts`.

## 🛠️ MCP Tools

### `search_vanilla`
Search vanilla Project Zomboid content with intelligent matching.

**Parameters:**
- `query` (string): Search query for game content
- `type` (string, optional): Filter by content type (`item`, `recipe`, `sound`, `vehicle`)
- `category` (string, optional): Filter by item category
- `limit` (number, optional): Maximum results (default: 20)

**Example:**
```typescript
await mcp.callTool('search_vanilla', {
  query: 'katana',
  type: 'item',
  category: 'Weapon'
});
```

### `generate_script`
Generate balanced Project Zomboid scripts using templates and game data.

**Parameters:**
- `type` (string): Script type (`item`, `recipe`, `fixing`, `sound`) — **`evolvedrecipe` and `vehicle` throw "not implemented"**
- `name` (string): Name of the item/recipe to generate
- `properties` (object): Properties and specifications
- `module` (string, optional): Module name (default: "Base")

**Example:**
```typescript
await mcp.callTool('generate_script', {
  type: 'item',
  name: 'SuperKatana',
  properties: {
    DisplayName: 'Super Katana',
    Type: 'Weapon',
    MaxDamage: 5.0,
    Weight: 2.0,
    Categories: 'LongBlade'
  }
});
```

### `validate_script`
Validate Project Zomboid script syntax and references with detailed error reporting.

**Parameters:**
- `content` (string): Script content to validate
- `type` (string, optional): Expected script type
- `strict` (boolean, optional): Enable strict validation mode

**Example:**
```typescript
await mcp.callTool('validate_script', {
  content: scriptContent,
  type: 'item',
  strict: true
});
```

### `check_references`
Validate item, sound, and sprite references against game database.

**Parameters:**
- `references` (string[]): List of references to validate
- `type` (string, optional): Type of references (`item`, `sound`, `sprite`, `all`)

**Example:**
```typescript
await mcp.callTool('check_references', {
  references: ['Base.Katana', 'Base.Apple'],
  type: 'item'
});
```

> Database currently empty — run `parse_game_files` first.

### `analyze_mod`
Comprehensive analysis of mod directory including balance, compatibility, and structure validation.

**Parameters:**
- `modPath` (string): Path to mod directory
- `checkBalance` (boolean, optional): Perform balance analysis
- `checkCompatibility` (boolean, optional): Check compatibility with vanilla
- `generateReport` (boolean, optional): Generate detailed analysis report

**Example:**
```typescript
await mcp.callTool('analyze_mod', {
  modPath: '/path/to/my-mod',
  checkBalance: true,
  checkCompatibility: true
});
```

### `parse_game_files`
Parse and index Project Zomboid game files to populate the database.

**Parameters:**
- `gamePath` (string, optional): Path to Project Zomboid installation (auto-detected if not provided)
- `forceReparse` (boolean, optional): Force re-parsing even if data exists

**Example:**
```typescript
await mcp.callTool('parse_game_files', {
  forceReparse: false
});
```

> Note: `extractReferences` is not called during parsing; references table stays empty.

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                MCP Server Core                      │
├─────────────────────────────────────────────────────┤
│  Path Manager  │  Enhanced Parser  │  Script Gen    │
├─────────────────────────────────────────────────────┤
│          SQLite Database Layer                      │
├─────────────────────────────────────────────────────┤
│  Game Data     │  Templates       │  Validation     │
│  (Vanilla PZ)  │  (JSON-based)   │  (Real-time)    │
└─────────────────────────────────────────────────────┘
```

### Core Components
- **DatabaseManager**: SQLite database with full-text search capabilities
- **ProjectZomboidParser**: Parse vanilla game files and mod directories
- **ScriptGenerator**: Generate balanced scripts using templates and game data
- **ValidationEngine**: Real-time syntax and reference validation
- **ModAnalyzer**: Comprehensive mod analysis and quality metrics
- **PathManager**: Auto-detection of Project Zomboid installations

## 📋 Development Workflow

### Setting Up for Mod Development

1. **Initialize Database**:
   ```bash
   npm run dev
   # Server will auto-detect Project Zomboid installation
   ```

2. **Parse Game Files**:
   ```typescript
   await mcp.callTool('parse_game_files', {});
   ```

3. **Start Development**:
   ```typescript
   // Search for existing items
   const results = await mcp.callTool('search_vanilla', {
     query: 'weapon damage > 3'
   });

   // Generate new item
   const script = await mcp.callTool('generate_script', {
     type: 'item',
     name: 'MyWeapon',
     properties: { /* ... */ }
   });

   // Validate before use
   const validation = await mcp.callTool('validate_script', {
     content: script
   });
   ```

### Supported File Formats
- **mod.info**: Mod metadata and configuration
- **Script Files (.txt)**: Items, recipes, fixing scripts, sounds
- **Lua Files (.lua)**: Game logic and event handlers
- **Assets**: Textures, sounds, models, and maps

## 🔍 Examples

### Creating a Custom Weapon

```typescript
// 1. Search for similar weapons
const similarWeapons = await mcp.callTool('search_vanilla', {
  query: 'katana sword blade',
  type: 'item'
});

// 2. Generate balanced weapon
const weaponScript = await mcp.callTool('generate_script', {
  type: 'item',
  name: 'EliteKatana',
  properties: {
    DisplayName: 'Elite Katana',
    Type: 'Weapon',
    Weight: 2.5,
    MaxDamage: 4.5,
    MinDamage: 3.5,
    Categories: 'LongBlade',
    Icon: 'Katana',
    SwingSound: 'KatanaSwing'
  }
});

// 3. Validate the script
const validation = await mcp.callTool('validate_script', {
  content: weaponScript,
  strict: true
});

// 4. Check references exist
await mcp.callTool('check_references', {
  references: ['Katana', 'KatanaSwing'],
  type: 'all'
});
```

### Analyzing Mod Quality

```typescript
const analysis = await mcp.callTool('analyze_mod', {
  modPath: '/path/to/my-zombie-mod',
  checkBalance: true,
  checkCompatibility: true,
  generateReport: true
});

console.log(`Mod Quality Score: ${analysis.quality.overall}/100`);
console.log(`Issues Found: ${analysis.issues.length}`);
console.log(`Recommendations: ${analysis.recommendations.join(', ')}`);
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **GitHub Issues**: Bug reports and feature requests
- **Documentation**: Comprehensive guides and API references

## 🔮 Roadmap

### v1.1.0 - Core Completeness
- Fix TypeScript build errors
- Implement `evolvedrecipe` and `vehicle` generation
- Populate references table during parsing (`extractReferences`)
- Add comprehensive balance analysis (armor, clothing, food)

### v1.2.0 - MCP Protocol & Testing
- Full MCP JSON-RPC compliance
- Integration tests for all MCP tools
- CI/CD pipeline

### v2.0.0 - Platform Features
- Vehicle script parsing and generation
- Lua script validation beyond syntax
- Steam registry detection on Windows

---

**Built for the Project Zomboid modding community**