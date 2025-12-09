# Recipe Verification Guide

## How to Find Correct Recipe Amounts

### Method 1: In-Game Verification
1. Open Hypixel Skyblock
2. Open your Collections menu (Nether Star)
3. Navigate to the relevant collection (Farming, Mining, Combat, etc.)
4. Find the minion you want to verify
5. Click on it to see the crafting recipe
6. Note the exact amounts for each tier

### Method 2: Hypixel Wiki
1. Visit: https://wiki.hypixel.net/Minions
2. Click on the specific minion page
3. Look for the "Crafting" or "Upgrades" section
4. Note the amounts for each tier

## Common Recipe Patterns (Verify These!)

### Farming Minions (Wheat, Carrot, Potato, etc.)
- **Tier I**: Usually 160 items (not 128!)
- **Tier II**: Usually 320 items
- **Tier III**: Usually 640 items
- **Tier IV**: Usually 1 Enchanted item
- **Tier V**: Usually 2 Enchanted items
- And so on...

### Mining Minions (Cobblestone, Coal, etc.)
- **Tier I**: Usually 80 items
- **Tier II**: Usually 160 items
- **Tier III**: Usually 320 items
- **Tier IV**: Usually 512 items
- **Tier V**: Usually 1 Enchanted item
- And so on...

### Combat Minions
- Similar to mining minions (80, 160, 320, 512, then enchanted)

## Current Issues to Fix

Based on user feedback, the amounts are incorrect. Please verify:

1. **Wheat Minion Tier I**: Currently shows 128, but might be 160?
2. **All Tier I farming minions**: Check if they should be 160 instead of 128
3. **Tier progression**: Verify the doubling pattern is correct

## How to Report Corrections

If you find incorrect amounts, please provide:
- Minion name
- Tier number
- Current (wrong) amount
- Correct amount
- Source (in-game or wiki link)

Example:
```
Wheat Minion, Tier I
Current: 128 Wheat
Correct: 160 Wheat
Source: https://wiki.hypixel.net/Wheat_Minion
```

## Quick Fix Template

To update a recipe in `minionData.js`, find the minion and update:

```javascript
"Wheat Minion": {
    recipes: {
        1: [{ item: "Wheat", amount: 160 }],  // Changed from 128
        2: [{ item: "Wheat", amount: 320 }],   // Verify this too
        // ... etc
    }
}
```

