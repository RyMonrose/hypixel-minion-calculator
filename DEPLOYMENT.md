# Deployment Guide - Hypixel Minion Calculator

This guide will help you host this application on GitHub Pages so others can use it.

## Prerequisites

- A GitHub account (free)
- Git installed on your computer (optional, but recommended)
  - Download: https://git-scm.com/downloads
  - Or use GitHub Desktop: https://desktop.github.com/

## Step-by-Step Instructions

### Method 1: Using GitHub Desktop (Easiest)

1. **Download GitHub Desktop**
   - Go to https://desktop.github.com/
   - Download and install GitHub Desktop

2. **Create Repository on GitHub**
   - Go to https://github.com/new
   - Repository name: `hypixel-minion-calculator` (or any name you like)
   - Description: "Calculator for Hypixel Skyblock minion costs and production"
   - Choose **Public** (required for free GitHub Pages)
   - **Don't** check "Initialize with README"
   - Click "Create repository"

3. **Publish from GitHub Desktop**
   - Open GitHub Desktop
   - Click "File" → "Add Local Repository"
   - Click "Choose..." and select your project folder:
     `F:\1. VS CODE FILES\Hypixel Minon Material cost caculator`
   - Click "Publish repository"
   - Make sure "Keep this code private" is **unchecked**
   - Click "Publish repository"

4. **Enable GitHub Pages**
   - Go to your repository on GitHub.com
   - Click the "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Branch: `main`, Folder: `/ (root)`
   - Click "Save"
   - Wait 1-2 minutes, then visit: `https://YOUR_USERNAME.github.io/hypixel-minion-calculator/`

### Method 2: Using Command Line

1. **Open Terminal/Command Prompt**
   - Windows: Press `Win + R`, type `cmd`, press Enter
   - Or use PowerShell

2. **Navigate to Your Project**
   ```bash
   cd "F:\1. VS CODE FILES\Hypixel Minon Material cost caculator"
   ```

3. **Initialize Git**
   ```bash
   git init
   ```

4. **Add All Files**
   ```bash
   git add .
   ```

5. **Create First Commit**
   ```bash
   git commit -m "Initial commit: Hypixel Minion Calculator"
   ```

6. **Create Repository on GitHub**
   - Go to https://github.com/new
   - Name it (e.g., `hypixel-minion-calculator`)
   - Make it **Public**
   - **Don't** initialize with README
   - Click "Create repository"

7. **Connect and Push**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hypixel-minion-calculator.git
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

8. **Enable GitHub Pages**
   - Go to repository → Settings → Pages
   - Source: `main` branch, `/ (root)` folder
   - Click "Save"

### Method 3: Direct Upload (No Git Required)

1. **Create Repository on GitHub**
   - Go to https://github.com/new
   - Name it and make it **Public**
   - **Do** check "Initialize with README" this time
   - Click "Create repository"

2. **Upload Files**
   - Click "uploading an existing file"
   - Drag and drop all your files:
     - `index.html`
     - `styles.css`
     - `app.js`
     - `minionData.js`
     - `README.md`
     - `.gitignore`
   - Scroll down, add commit message: "Add calculator files"
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Settings → Pages
   - Source: `main` branch, `/ (root)` folder
   - Save

## Your Live URL

Once GitHub Pages is enabled, your site will be available at:
```
https://YOUR_USERNAME.github.io/REPOSITORY_NAME/
```

For example:
```
https://johndoe.github.io/hypixel-minion-calculator/
```

## Updating Your Site

### Using GitHub Desktop:
1. Make changes to your files
2. Open GitHub Desktop
3. You'll see your changes listed
4. Add a commit message
5. Click "Commit to main"
6. Click "Push origin"
7. Changes go live in 1-2 minutes

### Using Command Line:
```bash
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

**Site not loading?**
- Wait 2-3 minutes after enabling Pages
- Check repository Settings → Pages shows "Your site is live at..."
- Make sure repository is **Public** (not Private)

**Changes not showing?**
- Clear browser cache (Ctrl+F5)
- Wait a few minutes for GitHub to update
- Check if you pushed the changes

**Need help?**
- GitHub Pages docs: https://docs.github.com/en/pages
- GitHub Community: https://github.community/

## Sharing Your Site

Once live, you can share the URL with anyone! They can:
- Use the calculator directly in their browser
- No installation needed
- Works on mobile devices too

