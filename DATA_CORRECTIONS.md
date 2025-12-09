# Recipe Data Corrections

## Current Situation

The minion recipe data is currently stored locally in `minionData.js` because:
- **No official Hypixel API** provides minion crafting recipes
- Community APIs don't reliably provide recipe data
- Recipes can change with game updates

## How to Verify and Correct Recipes

### Step 1: Verify in Game
1. Open Hypixel Skyblock
2. Go to the Crafting Table
3. Check the recipe for the minion and tier you want to verify
4. Note the exact amounts and materials required

### Step 2: Check the Wiki
- Visit: https://wiki.hypixel.net/Minions
- Find your minion's page
- Verify the recipe amounts listed

### Step 3: Update the Data
Edit `minionData.js` and find your minion. Update the recipe amounts:

```javascript
"Wheat Minion": {
    type: "farming",
    tool: "Wooden Hoe",
    recipes: {
        1: [{ item: "Wheat", amount: 128 }],  // Update this amount
        2: [{ item: "Wheat", amount: 256 }],  // Update this amount
        // ... etc
    },
    // ...
}
```

### Step 4: Common Recipe Patterns

**Tier I Recipes:**
- Most farming minions: 128 base items + tool
- Most mining minions: 80 base items + tool
- Most combat minions: 80 base items + tool

**Tier II-IV:**
- Usually 2x, 4x, 8x the Tier I amount

**Tier V+:**
- Usually uses Enchanted versions
- Tier V: 1-2 Enchanted items
- Tier VI: 2-4 Enchanted items
- And so on...

## Reporting Issues

If you find incorrect recipes:
1. Verify the correct amounts in-game or on the wiki
2. Update `minionData.js` with the correct values
3. Submit a pull request or issue on GitHub

## Future Improvements

We're working on:
- Automated recipe fetching from available sources
- Community-contributed recipe database
- Integration with wiki data scraping (if possible)

