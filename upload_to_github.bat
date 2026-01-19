@echo off
echo ===================================================
echo   Updating Stock Memo App and Uploading to GitHub
echo ===================================================
echo.

:: 1. Add all changes
echo [1/3] Adding changes...
git add .

:: 2. Commit changes with a timestamp
echo [2/3] Committing changes...
set "timestamp=%date% %time%"
git commit -m "Update: %timestamp%"

:: 3. Push to GitHub
echo [3/3] Uploading (Pushing) to GitHub...
git push origin main

echo.
echo ===================================================
echo   Success! Your changes are live.
echo   Wait 1-2 minutes for the website to update.
echo ===================================================
echo.
pause
