@echo off
echo.
echo ========================================
echo  RiKU Ceramics - Starting Admin Panel
echo ========================================
echo.

echo Starting development server...
echo.
echo Admin Panel will open at: http://localhost:3000/admin
echo Website will be at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

timeout /t 3 >nul

start "" "http://localhost:3000/admin"

npm run dev 