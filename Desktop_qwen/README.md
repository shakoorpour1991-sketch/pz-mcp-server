# PZ MCP Server - Desktop Application

This is a standalone desktop application wrapper for the PZ MCP Server project using Electron.

## Prerequisites

- Node.js >= 22.5.0
- npm or yarn

## Installation

1. First, build the main project:
```bash
cd ..
npm install
npm run build
```

2. Install desktop app dependencies:
```bash
cd Desktop_qwen
npm install
```

## Running the Desktop App (Development)

```bash
npm start
```

This will launch the Electron application with the Control Deck dashboard.

## Building the EXE (Windows)

To build a Windows executable (.exe):

```bash
npm run build:win
```

The output will be in the `dist` folder.

## Building for Other Platforms

### macOS
```bash
npm run build:mac
```

### Linux
```bash
npm run build:linux
```

## Output

After building, you'll find:
- Windows: `dist/PZ MCP Server Setup x.x.x.exe` (installer) or portable exe
- macOS: `dist/PZ MCP Server-x.x.x.dmg`
- Linux: `dist/PZ MCP Server-x.x.x.AppImage` or other formats

## Features

- Standalone desktop application
- Integrated Control Dashboard UI
- Automatic bridge server management
- System tray support (can be added)
- Auto-start on login (can be configured)

## Troubleshooting

If the bridge server fails to start:
1. Ensure Node.js is installed and in PATH
2. Check that the main project is built (`npm run build` in parent directory)
3. Verify port 8787 is not in use by another application
