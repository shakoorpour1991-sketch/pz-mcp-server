@echo off
rem Launch Glass Control Deck - starts bridge if needed, always opens browser
setlocal
if "%PZ_DECK_PORT%"=="" set PZ_DECK_PORT=8787
cd /d "%~dp0.."
netstat -ano | findstr ":%PZ_DECK_PORT%" | findstr "LISTENING" >nul 2>&1
if %errorlevel%==0 goto open
start "Glass Control Deck" cmd /c "npm run dashboard"
timeout /t 2 /nobreak >nul
:open
start "" http://localhost:%PZ_DECK_PORT%
endlocal
