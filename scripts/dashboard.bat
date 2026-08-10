@echo off
rem =====================================================================
rem  Glass Control Deck launcher
rem    dashboard.bat            launch deck (starts bridge if needed) and open browser
rem    dashboard.bat /?         print the quick-use guide (how to use / close)
rem =====================================================================
setlocal
if "%PZ_DECK_PORT%"=="" set PZ_DECK_PORT=8787
if /i "%~1"=="/?" goto guide
if /i "%~1"=="help" goto guide
cd /d "%~dp0.."
netstat -ano | findstr ":%PZ_DECK_PORT%" | findstr "LISTENING" >nul 2>&1
if %errorlevel%==0 goto open
start "Glass Control Deck" cmd /c "npm run dashboard"
timeout /t 2 /nobreak >nul
:open
start "" http://localhost:%PZ_DECK_PORT%
echo.
echo  Deck: http://localhost:%PZ_DECK_PORT%   (keep the "Glass Control Deck" window open)
echo  Done? Click the red Shut down button in the deck (top-right), or press
echo  Ctrl+C in that window - or run:  dashboard.bat /?
echo.
endlocal
exit /b 0

:guide
echo.
echo  ================= Glass Control Deck - Quick Use Guide =================
echo.
echo  WHAT IT IS
echo    The Control Deck is the web UI for pz-mcp-server (bridge on port 8787).
echo    This script starts the bridge if it is not already running, then opens
echo    your browser. The bridge window ("Glass Control Deck") also hosts the
echo    MCP server child process - as long as that window is open, the deck
echo    works.
echo.
echo  HOW TO USE
echo    1. Double-click dashboard.bat (or run it from a terminal).
echo    2. Your browser opens at http://localhost:%PZ_DECK_PORT%
echo    3. Keep the "Glass Control Deck" console window open. Closing the
echo       browser tab does NOT stop the deck - it keeps running in the
echo       background until you close it properly (below).
echo    4. Run dashboard.bat again any time to re-open the deck - it detects
echo       the bridge is already up and just opens the browser (no duplicates).
echo.
echo  HOW TO PROPERLY CLOSE IT  (no rogue processes left behind)
echo    Option A - recommended, from the deck: open http://localhost:%PZ_DECK_PORT%
echo       and click the red Shut down button (top-right of the page, or
echo       Settings - Server - Shut down). It stops the bridge, the MCP server
echo       and every running task, then the console window closes - nothing
echo       is left running.
echo    Option B - clean, recommended: in the "Glass Control Deck" console
echo       window, press Ctrl+C. This stops the bridge, which also kills the
echo       MCP server child it spawned - both processes exit together.
echo    Option C - Task Manager: end the node.exe whose Command Line contains
echo       "bridge.mjs" (or the PID listening on 8787).
echo    Option D - emergency, if the console window is gone but port 8787 is
echo       still open (orphaned process). In a terminal run:
echo         netstat -ano ^| findstr ":8787"
echo       note the PID on the LISTENING line, then:
echo         taskkill /PID ^<PID^> /T /F
echo       The /T flag kills the whole process tree (bridge + MCP child), so
echo       nothing keeps running in the background afterwards.
echo.
echo  TIP: if the deck page is blank, the bridge window is probably showing an
echo  error - check it, then press Ctrl+C and start again.
echo  ========================================================================
pause
endlocal
exit /b 0
