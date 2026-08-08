# Build Instructions for PZ MCP Server Desktop App

## Important: Disk Space Requirements

Building the Electron app requires significant disk space (~500MB+). If you encounter "no space left on device" errors, you'll need to free up space first.

## Prerequisites

1. **Node.js >= 22.5.0** - Check with `node --version`
2. **Main project built** - Run `npm install && npm run build` in the parent directory first

## Installation Steps

### Step 1: Build the Main Project (Required)

```bash
cd /workspace
npm install
npm run build
```

This creates the `dist/` folder and installs all dependencies needed by the desktop app.

### Step 2: Install Desktop App Dependencies

```bash
cd Desktop_qwen
npm install
```

Note: This downloads Electron (~300MB) and electron-builder. Ensure you have enough disk space.

## Building the EXE

### For Windows (on Windows machine):

```bash
npm run build:win
```

Output: `Desktop_qwen/dist/PZ MCP Server Setup x.x.x.exe`

### For macOS (on Mac machine):

```bash
npm run build:mac
```

Output: `Desktop_qwen/dist/PZ MCP Server-x.x.x.dmg`

### For Linux (on Linux machine):

```bash
npm run build:linux
```

Output: `Desktop_qwen/dist/PZ MCP Server-x.x.x.AppImage` or `.deb`/`.rpm` depending on configuration

## Running in Development Mode

To test without building:

```bash
cd Desktop_qwen
npm start
```

This launches the Electron app immediately.

## Troubleshooting

### "No space left on device" error

1. Clean up unnecessary files
2. Remove node_modules if present: `rm -rf node_modules`
3. Try installing with fewer dependencies

### Bridge server doesn't start

1. Ensure main project is built: `cd .. && npm run build`
2. Check if port 8787 is available
3. Verify Node.js is installed and in PATH

### Build fails on Linux/Mac for Windows target

You can only build native executables for the platform you're on without additional setup:
- Windows builds require Windows or Wine
- macOS builds require a Mac
- Linux builds work on Linux

For cross-platform builds, consider using CI/CD services like GitHub Actions.

## Files Created

After successful build, you'll find:

```
Desktop_qwen/
├── main.js          # Electron main process
├── preload.js       # Security bridge for renderer
├── package.json     # Desktop app config
├── README.md        # User documentation
└── dist/            # Built executables (after build)
    └── PZ MCP Server Setup *.exe  (Windows)
```

## What Gets Packaged

The EXE includes:
- Electron runtime
- Your main.js and preload.js scripts
- The admin/ folder (dashboard UI)
- The dist/ folder (compiled TypeScript)
- All node_modules from the parent project
