
# Goal create AI DevOps road map and get project experiance

# Git localtions 
https://github.com/DevOpsBandhala/AI-Learnings

# Install Docusauras & Run command 

Set-Location "D:\AI-Learnings\Codebase\AI-Learnings\docusaurus"
npm install
npm audit fix --force
npm start
npx docusaurus start
node -v
npm -v




# Step to create 
node -v
npm -v
npx create-@latest AI-DevOps-Learning classic
cd AI-DevOps-Learning
echo. > docs\About.md
npm start

# Build and Deploy to GitHub Pages

# 1. Build the site
npm run build

# 2. Deploy the site
$env:GIT_USER="DevOpsBandhala"
npm run deploy

