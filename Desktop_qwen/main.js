const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');

let mainWindow;
let bridgeProcess = null;
const ADMIN_PORT = 8787;

// Get the correct paths depending on whether we're packed or unpacked
const getAppRoot = () => {
  if (app.isPackaged) {
    // Running as a packaged app - extraResources are copied into resourcesPath
    return process.resourcesPath;
  }
  // Running in development - use parent directory
  return path.join(__dirname, '..');
};

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
    title: 'PZ MCP Server - Control Deck',
  });

  // Load the dashboard UI
  mainWindow.loadURL(`http://localhost:${ADMIN_PORT}`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function startBridgeServer() {
  const appRoot = getAppRoot();
  const bridgePath = path.join(appRoot, 'admin', 'bridge.mjs');

  console.log('Starting bridge server from:', bridgePath);
  console.log('App root:', appRoot);

  bridgeProcess = spawn('node', [bridgePath], {
    cwd: appRoot,
    env: { 
      ...process.env,
      PZ_DECK_PORT: String(ADMIN_PORT)
    },
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  bridgeProcess.stdout.on('data', (data) => {
    console.log(`[Bridge] ${data.toString()}`);
  });

  bridgeProcess.stderr.on('data', (data) => {
    console.error(`[Bridge Error] ${data.toString()}`);
  });

  bridgeProcess.on('close', (code) => {
    console.log(`Bridge process exited with code ${code}`);
  });
}

app.whenReady().then(() => {
  // Start the bridge server first
  startBridgeServer();
  
  // Wait a moment for the server to start, then create window
  setTimeout(() => {
    createWindow();
  }, 2000);
});

app.on('window-all-closed', () => {
  if (bridgeProcess) {
    bridgeProcess.kill();
  }
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('before-quit', () => {
  if (bridgeProcess) {
    bridgeProcess.kill();
  }
});

// IPC handlers for renderer communication
ipcMain.handle('get-app-version', () => {
  return app.getVersion();
});

ipcMain.handle('restart-bridge', () => {
  if (bridgeProcess) {
    bridgeProcess.kill();
    setTimeout(startBridgeServer, 500);
  }
});
