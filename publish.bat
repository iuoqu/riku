@echo off
echo.
echo ========================================
echo  RiKU Ceramics - Publishing Changes
echo ========================================
echo.

echo [1/3] Adding all changes to git...
git add .

echo.
echo [2/3] Committing changes...
set /p message="Enter commit message (or press Enter for default): "
if "%message%"=="" set message=Update website content

git commit -m "%message%"

echo.
echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo  ✓ Publishing Complete!
echo  Your website will be live in 1-2 minutes
echo  Check: https://your-site.vercel.app
echo ========================================
echo.
pause 