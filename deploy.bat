@echo off
echo Starting deployment...

REM Save current branch name
for /f "tokens=* USEBACKQ" %%F in (`git rev-parse --abbrev-ref HEAD`) do set current_branch=%%F

REM Switch to production branch
git checkout production || exit /b

REM Build project
npm run build || exit /b

REM Remove old files and add new ones
git rm -r --cached . || exit /b
git add dist/ || exit /b

REM Commit and push
git commit -m "Update production build %date%" || exit /b
git push origin production || exit /b

REM Return to original branch
git checkout %current_branch% || exit /b

echo Deployment complete!