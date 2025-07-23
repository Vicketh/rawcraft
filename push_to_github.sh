#!/bin/bash

# Script to push changes to GitHub for BLACK STUDIOS project
# This handles the directory name with spaces properly

echo "🚀 Starting GitHub push process..."

# Navigate to the project directory
cd "/home/vickmbui/Documents/BLACK STUDIOS"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Display current status
echo "📊 Current git status:"
git status

# Add the changed files
echo "📁 Adding modified files..."
git add index.html
git add deploy/index.html

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "✅ No changes to commit - everything is up to date"
    exit 0
fi

# Commit the changes
echo "💾 Committing changes..."
git commit -m "Update gold colors for titles to better match logo

- Changed gold gradient from bright yellows to more refined, muted tones
- Updated from #ffd700, #e6c200 to #cfb53b, #d4af37 for more sophisticated look
- Modified both main index.html and deploy/index.html for consistency
- Gold colors now use classic gold (#d4af37) and old gold (#cfb53b) tones
- Updated text shadows and SVG gradients to match new palette"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
echo "⚠️  You may be prompted for your GitHub credentials:"
echo "   Username: Vicketh"
echo "   Password: Use your Personal Access Token (not your GitHub password)"
echo ""

git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Successfully pushed to GitHub!"
    echo "✅ Your gold color changes are now live on the repository"
    echo ""
    echo "🔗 Check your changes at: https://github.com/Vicketh/black-studios"
    echo ""
    echo "📝 Next steps:"
    echo "   - Verify changes on GitHub"
    echo "   - Deploy updated files to your live website"
    echo "   - Test the new gold colors match your logo better"
else
    echo ""
    echo "❌ Push failed. Please check your credentials and try again."
    echo "💡 Make sure you're using your Personal Access Token as password"
    exit 1
fi
