# Hypixel Skyblock Minion Calculator

A web application that calculates both the crafting costs (materials needed to craft/upgrade minions) and production value (items produced over time and their market value) for Hypixel Skyblock minions.

## Features

- **Crafting Cost Calculator**: Shows all materials needed to craft and upgrade minions to a specific tier, along with current market prices
- **Production Value Calculator**: Calculates how many items a minion will produce over a given time period and their total market value
- **ROI Calculation**: Displays return on investment when both crafting costs and production values are available
- **Real-time Prices**: Fetches current item prices from MinionAH RCC API

## Usage

1. Open `index.html` in a web browser
2. Select a minion type from the dropdown
3. Select the desired tier (I-XI)
4. Enter the time period in hours for production calculations (default: 24 hours)
5. Click "Calculate" to see results

## Supported Minions

The calculator supports **60+ minions** across all categories:

**Farming Minions (15):**
- Sugar Cane, Potato, Wheat, Carrot, Pumpkin, Melon, Mushroom, Cocoa Beans, Cactus, Nether Wart
- Cow, Pig, Chicken, Sheep, Rabbit

**Mining Minions (14):**
- Cobblestone, Coal, Iron, Gold, Diamond, Lapis, Emerald, Redstone, Quartz, Obsidian, Glowstone, Gravel, Ice, Sand

**Combat Minions (11):**
- Skeleton, Zombie, Spider, Cave Spider, Creeper, Enderman, Ghast, Slime, Blaze, Magma Cube
- Revenant, Tarantula (Slayer minions)

**Foraging Minions (6):**
- Oak, Spruce, Birch, Dark Oak, Acacia, Jungle

**Fishing Minions (2):**
- Fishing, Clay

**Special Minions (1):**
- Flower

## API Notes

### Price Data
The application uses the official Hypixel Bazaar API (`https://api.hypixel.net/skyblock/bazaar`) to fetch item prices. This API:
- Does not require an API key
- Provides real-time Bazaar prices for all items
- Is publicly accessible and supports CORS
- Caches data for 5 minutes to reduce API calls

**Note**: If prices show as "Price unavailable":
- The item might not be available on the Bazaar
- Check the browser console (F12) for detailed error messages
- Some items may need to be looked up by their exact product ID

### Recipe Data
**Important**: Minion recipe data is currently stored locally because:
- **No official Hypixel API** provides minion crafting recipes
- Community APIs don't reliably provide complete recipe data
- Recipes may change with game updates

The application attempts to fetch recipe data from available sources but falls back to local data. If you notice incorrect recipe amounts:
1. Verify the correct amounts in-game or on the [Hypixel Wiki](https://wiki.hypixel.net/Minions)
2. See `DATA_CORRECTIONS.md` for instructions on updating recipes
3. Consider contributing corrections to help improve accuracy

## File Structure

- `index.html` - Main application page
- `styles.css` - Styling and layout
- `app.js` - Main application logic and calculations
- `minionData.js` - Minion recipes, upgrade costs, and production rates

## How It Works

### Crafting Costs
The calculator sums all materials needed from Tier I up to the selected tier, including:
- Base materials (e.g., Sugar Cane, Cobblestone)
- Enchanted materials (for higher tiers)
- Required tools (e.g., Wooden Hoe, Wooden Pickaxe)

### Production Value
The calculator:
1. Determines the minion's production rate based on tier (higher tiers = faster production)
2. Calculates items produced over the specified time period
3. Fetches current market prices for the produced items
4. Calculates total value

## Browser Compatibility

Works in all modern browsers that support:
- ES6 JavaScript (async/await, arrow functions)
- Fetch API
- CSS Grid and Flexbox

## Deployment / Hosting on GitHub

### Option 1: GitHub Pages (Recommended - Free Hosting)

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right → "New repository"
   - Name it (e.g., `hypixel-minion-calculator`)
   - Choose Public (required for free GitHub Pages)
   - **Don't** initialize with README (you already have one)
   - Click "Create repository"

2. **Upload Your Files:**
   ```bash
   # Navigate to your project folder
   cd "F:\1. VS CODE FILES\Hypixel Minon Material cost caculator"
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit files
   git commit -m "Initial commit: Hypixel Minion Calculator"
   
   # Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/hypixel-minion-calculator.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

   **Or use GitHub Desktop:**
   - Download [GitHub Desktop](https://desktop.github.com/)
   - File → Add Local Repository → Select your project folder
   - Publish repository to GitHub

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be live at: `https://YOUR_USERNAME.github.io/hypixel-minion-calculator/`

### Option 2: Other Hosting Services

- **Netlify**: Drag and drop your folder to [netlify.com](https://www.netlify.com)
- **Vercel**: Connect your GitHub repo to [vercel.com](https://vercel.com)
- **GitHub Pages**: (See Option 1 above)

### Quick Setup Commands

If you have Git installed, run these commands in your project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## Future Enhancements

Potential improvements:
- Add more minion types
- Support for minion fuels and upgrades
- Historical price tracking
- Export results to CSV
- Comparison between multiple minions

