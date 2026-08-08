@echo off
rem Launch Glass Control Deck - starts bridge if needed, always opens browser
setlocal
cd /d "%~dp0.."
netstat -ano | findstr ":8787" | findstr "LISTENING" >nul 2>&1
if %errorlevel%==0 goto open
start "Glass Control Deck" cmd /c "npm run dashboard"
timeout /t 2 /nobreak >nul
:open
start "" http://localhost:8787
endlocal
