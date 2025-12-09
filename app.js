// Hypixel Skyblock Minion Calculator - Main Application Logic

// DOM Elements
const minionSelect = document.getElementById('minion-select');
const tierSelect = document.getElementById('tier-select');
const timePeriodInput = document.getElementById('time-period');
const calculateBtn = document.getElementById('calculate-btn');
const craftingRecipeContent = document.getElementById('crafting-recipe-content');
const craftingCostContent = document.getElementById('crafting-cost-content');
const productionValueContent = document.getElementById('production-value-content');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');

// Price cache to avoid repeated API calls
const priceCache = new Map();
let bazaarDataCache = null;
let bazaarDataFetchTime = null;
const BAZAAR_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Convert display name to Hypixel API product ID format
function convertToProductID(itemName) {
    // Common mappings for items
    const mappings = {
        'Sugar Cane': 'SUGAR_CANE',
        'Enchanted Sugar Cane': 'ENCHANTED_SUGAR',
        'Enchanted Sugar Cane Block': 'ENCHANTED_SUGAR_CANE',
        'Potato': 'POTATO_ITEM',
        'Enchanted Potato': 'ENCHANTED_POTATO',
        'Enchanted Potato Block': 'ENCHANTED_POTATO',
        'Cobblestone': 'COBBLESTONE',
        'Enchanted Cobblestone': 'ENCHANTED_COBBLESTONE',
        'Enchanted Cobblestone Block': 'ENCHANTED_COBBLESTONE',
        'Bone': 'BONE',
        'Enchanted Bone': 'ENCHANTED_BONE',
        'Enchanted Bone Block': 'ENCHANTED_BONE',
        'Obsidian': 'OBSIDIAN',
        'Enchanted Obsidian': 'ENCHANTED_OBSIDIAN',
        'Enchanted Obsidian Block': 'ENCHANTED_OBSIDIAN',
        'Wheat': 'WHEAT',
        'Enchanted Hay Bale': 'ENCHANTED_HAY_BLOCK',
        'Enchanted Hay Bale Block': 'ENCHANTED_HAY_BLOCK',
        'Carrot': 'CARROT_ITEM',
        'Enchanted Carrot': 'ENCHANTED_CARROT',
        'Enchanted Carrot Block': 'ENCHANTED_CARROT',
        'Coal': 'COAL',
        'Enchanted Coal': 'ENCHANTED_COAL',
        'Enchanted Coal Block': 'ENCHANTED_COAL_BLOCK',
        'Iron Ingot': 'IRON_INGOT',
        'Enchanted Iron': 'ENCHANTED_IRON',
        'Enchanted Iron Block': 'ENCHANTED_IRON_BLOCK',
        'Gold Ingot': 'GOLD_INGOT',
        'Enchanted Gold': 'ENCHANTED_GOLD',
        'Enchanted Gold Block': 'ENCHANTED_GOLD_BLOCK',
        'Wooden Hoe': 'WOOD_HOE',
        'Wooden Pickaxe': 'WOOD_PICKAXE',
        'Wooden Sword': 'WOOD_SWORD',
        'Wooden Axe': 'WOOD_AXE',
        'Wooden Shovel': 'WOOD_SPADE',
        'Pumpkin': 'PUMPKIN',
        'Enchanted Pumpkin': 'ENCHANTED_PUMPKIN',
        'Enchanted Pumpkin Block': 'ENCHANTED_PUMPKIN',
        'Melon': 'MELON',
        'Enchanted Melon': 'ENCHANTED_MELON',
        'Enchanted Melon Block': 'ENCHANTED_MELON',
        'Mushroom': 'MUSHROOM',
        'Enchanted Mushroom': 'ENCHANTED_MUSHROOM',
        'Enchanted Mushroom Block': 'ENCHANTED_MUSHROOM',
        'Cocoa Beans': 'INK_SACK:3',
        'Enchanted Cocoa Bean': 'ENCHANTED_COCOA',
        'Enchanted Cocoa Bean Block': 'ENCHANTED_COCOA',
        'Cactus': 'CACTUS',
        'Enchanted Cactus Green': 'ENCHANTED_CACTUS_GREEN',
        'Enchanted Cactus Green Block': 'ENCHANTED_CACTUS_GREEN',
        'Nether Wart': 'NETHER_STALK',
        'Enchanted Nether Wart': 'ENCHANTED_NETHER_STALK',
        'Enchanted Nether Wart Block': 'ENCHANTED_NETHER_STALK',
        'Raw Beef': 'RAW_BEEF',
        'Enchanted Raw Beef': 'ENCHANTED_RAW_BEEF',
        'Enchanted Raw Beef Block': 'ENCHANTED_RAW_BEEF',
        'Raw Porkchop': 'PORK',
        'Enchanted Pork': 'ENCHANTED_PORK',
        'Enchanted Pork Block': 'ENCHANTED_PORK',
        'Raw Chicken': 'RAW_CHICKEN',
        'Enchanted Raw Chicken': 'ENCHANTED_RAW_CHICKEN',
        'Enchanted Raw Chicken Block': 'ENCHANTED_RAW_CHICKEN',
        'Mutton': 'MUTTON',
        'Enchanted Mutton': 'ENCHANTED_MUTTON',
        'Enchanted Mutton Block': 'ENCHANTED_MUTTON',
        'Raw Rabbit': 'RABBIT',
        'Enchanted Rabbit': 'ENCHANTED_RABBIT',
        'Enchanted Rabbit Block': 'ENCHANTED_RABBIT',
        'Diamond': 'DIAMOND',
        'Enchanted Diamond': 'ENCHANTED_DIAMOND',
        'Enchanted Diamond Block': 'ENCHANTED_DIAMOND_BLOCK',
        'Lapis Lazuli': 'INK_SACK:4',
        'Enchanted Lapis Lazuli': 'ENCHANTED_LAPIS_LAZULI',
        'Enchanted Lapis Lazuli Block': 'ENCHANTED_LAPIS_LAZULI_BLOCK',
        'Emerald': 'EMERALD',
        'Enchanted Emerald': 'ENCHANTED_EMERALD',
        'Enchanted Emerald Block': 'ENCHANTED_EMERALD_BLOCK',
        'Redstone': 'REDSTONE',
        'Enchanted Redstone': 'ENCHANTED_REDSTONE',
        'Enchanted Redstone Block': 'ENCHANTED_REDSTONE_BLOCK',
        'Nether Quartz': 'QUARTZ',
        'Enchanted Quartz': 'ENCHANTED_QUARTZ',
        'Enchanted Quartz Block': 'ENCHANTED_QUARTZ_BLOCK',
        'Glowstone Dust': 'GLOWSTONE_DUST',
        'Enchanted Glowstone Dust': 'ENCHANTED_GLOWSTONE_DUST',
        'Enchanted Glowstone Block': 'ENCHANTED_GLOWSTONE',
        'Gravel': 'GRAVEL',
        'Enchanted Flint': 'ENCHANTED_FLINT',
        'Enchanted Flint Block': 'ENCHANTED_FLINT',
        'Ice': 'ICE',
        'Enchanted Ice': 'ENCHANTED_ICE',
        'Enchanted Ice Block': 'ENCHANTED_ICE',
        'Sand': 'SAND',
        'Enchanted Sand': 'ENCHANTED_SAND',
        'Enchanted Sand Block': 'ENCHANTED_SAND',
        'Rotten Flesh': 'ROTTEN_FLESH',
        'Enchanted Rotten Flesh': 'ENCHANTED_ROTTEN_FLESH',
        'Enchanted Rotten Flesh Block': 'ENCHANTED_ROTTEN_FLESH',
        'String': 'STRING',
        'Enchanted String': 'ENCHANTED_STRING',
        'Enchanted String Block': 'ENCHANTED_STRING',
        'Gunpowder': 'SULPHUR',
        'Enchanted Gunpowder': 'ENCHANTED_GUNPOWDER',
        'Enchanted Gunpowder Block': 'ENCHANTED_GUNPOWDER',
        'Ender Pearl': 'ENDER_PEARL',
        'Enchanted Ender Pearl': 'ENCHANTED_ENDER_PEARL',
        'Enchanted Ender Pearl Block': 'ENCHANTED_ENDER_PEARL',
        'Ghast Tear': 'GHAST_TEAR',
        'Enchanted Ghast Tear': 'ENCHANTED_GHAST_TEAR',
        'Enchanted Ghast Tear Block': 'ENCHANTED_GHAST_TEAR',
        'Slimeball': 'SLIME_BALL',
        'Enchanted Slimeball': 'ENCHANTED_SLIME_BALL',
        'Enchanted Slimeball Block': 'ENCHANTED_SLIME_BLOCK',
        'Blaze Rod': 'BLAZE_ROD',
        'Enchanted Blaze Powder': 'ENCHANTED_BLAZE_POWDER',
        'Enchanted Blaze Powder Block': 'ENCHANTED_BLAZE_POWDER',
        'Magma Cream': 'MAGMA_CREAM',
        'Enchanted Magma Cream': 'ENCHANTED_MAGMA_CREAM',
        'Enchanted Magma Cream Block': 'ENCHANTED_MAGMA_CREAM',
        'Oak Wood': 'LOG',
        'Enchanted Oak Wood': 'ENCHANTED_OAK_LOG',
        'Enchanted Oak Wood Block': 'ENCHANTED_OAK_LOG',
        'Spruce Wood': 'LOG:1',
        'Enchanted Spruce Wood': 'ENCHANTED_SPRUCE_LOG',
        'Enchanted Spruce Wood Block': 'ENCHANTED_SPRUCE_LOG',
        'Birch Wood': 'LOG:2',
        'Enchanted Birch Wood': 'ENCHANTED_BIRCH_LOG',
        'Enchanted Birch Wood Block': 'ENCHANTED_BIRCH_LOG',
        'Dark Oak Wood': 'LOG_2:1',
        'Enchanted Dark Oak Wood': 'ENCHANTED_DARK_OAK_LOG',
        'Enchanted Dark Oak Wood Block': 'ENCHANTED_DARK_OAK_LOG',
        'Acacia Wood': 'LOG_2',
        'Enchanted Acacia Wood': 'ENCHANTED_ACACIA_LOG',
        'Enchanted Acacia Wood Block': 'ENCHANTED_ACACIA_LOG',
        'Jungle Wood': 'LOG:3',
        'Enchanted Jungle Wood': 'ENCHANTED_JUNGLE_LOG',
        'Enchanted Jungle Wood Block': 'ENCHANTED_JUNGLE_LOG',
        'Raw Fish': 'RAW_FISH',
        'Enchanted Raw Fish': 'ENCHANTED_RAW_FISH',
        'Enchanted Raw Fish Block': 'ENCHANTED_RAW_FISH',
        'Clay': 'CLAY_BALL',
        'Enchanted Clay': 'ENCHANTED_CLAY',
        'Enchanted Clay Block': 'ENCHANTED_CLAY',
        'Dandelion': 'YELLOW_FLOWER',
        'Enchanted Dandelion': 'ENCHANTED_DANDELION',
        'Enchanted Dandelion Block': 'ENCHANTED_DANDELION'
    };
    
    if (mappings[itemName]) {
        return mappings[itemName];
    }
    
    // Try to convert automatically: "Sugar Cane" -> "SUGAR_CANE"
    return itemName.toUpperCase().replace(/\s+/g, '_').replace(/[^A-Z0-9_]/g, '');
}

// Initialize minion dropdown
function initializeMinionSelect() {
    const minionNames = getMinionNames();
    minionNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        minionSelect.appendChild(option);
    });
}

// Format large numbers with commas
function formatNumber(num) {
    return num.toLocaleString('en-US');
}

// Format coin values
function formatCoins(coins) {
    if (coins >= 1000000) {
        return (coins / 1000000).toFixed(2) + 'M';
    } else if (coins >= 1000) {
        return (coins / 1000).toFixed(2) + 'K';
    }
    return formatNumber(Math.round(coins));
}

// Fetch bazaar data from Hypixel API
async function fetchBazaarData() {
    // Check if we have recent cached data
    if (bazaarDataCache && bazaarDataFetchTime && 
        (Date.now() - bazaarDataFetchTime) < BAZAAR_CACHE_DURATION) {
        return bazaarDataCache;
    }

    try {
        const apiUrl = 'https://api.hypixel.net/skyblock/bazaar';
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success && data.products) {
            bazaarDataCache = data.products;
            bazaarDataFetchTime = Date.now();
            return bazaarDataCache;
        } else {
            throw new Error('Invalid API response format');
        }
    } catch (error) {
        console.error('Error fetching bazaar data:', error);
        return null;
    }
}

// Fetch price from Hypixel Bazaar API
async function fetchItemPrice(itemName) {
    // Check cache first
    if (priceCache.has(itemName)) {
        return priceCache.get(itemName);
    }

    try {
        // Get bazaar data
        const bazaarData = await fetchBazaarData();
        if (!bazaarData) {
            throw new Error('Could not fetch bazaar data');
        }

        // Convert item name to product ID
        const productID = convertToProductID(itemName);
        
        // Look up the product in bazaar data
        const product = bazaarData[productID];
        if (!product) {
            console.warn(`Product not found in bazaar: ${itemName} (${productID})`);
            priceCache.set(itemName, null);
            return null;
        }

        // Get the instant buy price (or sell price if buy not available)
        // The API structure: product.quick_status.buyPrice or product.buy_summary[0].pricePerUnit
        let price = 0;
        
        if (product.quick_status && product.quick_status.buyPrice) {
            price = product.quick_status.buyPrice;
        } else if (product.buy_summary && product.buy_summary.length > 0) {
            price = product.buy_summary[0].pricePerUnit;
        } else if (product.sell_summary && product.sell_summary.length > 0) {
            // Fallback to sell price if buy price not available
            price = product.sell_summary[0].pricePerUnit;
        } else if (product.quick_status && product.quick_status.sellPrice) {
            price = product.quick_status.sellPrice;
        }

        // Cache the price
        priceCache.set(itemName, price);
        return price;
    } catch (error) {
        console.error(`Error fetching price for ${itemName}:`, error);
        // Cache null to indicate failure
        priceCache.set(itemName, null);
        return null;
    }
}

// Fetch prices for multiple items
async function fetchPricesForItems(items) {
    const pricePromises = items.map(item => fetchItemPrice(item));
    const prices = await Promise.all(pricePromises);
    
    const priceMap = {};
    items.forEach((item, index) => {
        priceMap[item] = prices[index];
    });
    
    return priceMap;
}

// Calculate crafting costs
async function calculateCraftingCosts(minionName, tier) {
    const minion = getMinionData(minionName);
    if (!minion) return null;

    // Get cumulative materials needed
    const materials = getCumulativeMaterials(minionName, parseInt(tier));
    if (!materials) return null;

    // Get unique item names for price fetching
    const itemNames = Object.keys(materials);
    
    // Also add the tool to the list
    itemNames.push(minion.tool);

    // Fetch prices
    const prices = await fetchPricesForItems(itemNames);

    // Calculate costs
    let totalCost = 0;
    const materialCosts = [];

    // Add tool cost (tools are not on bazaar, use NPC price or skip)
    // Basic tools are typically very cheap from NPCs (1-10 coins)
    // We'll note this but not include in total since they're negligible
    const toolPrice = prices[minion.tool] || 0;
    if (toolPrice) {
        materialCosts.push({
            item: minion.tool,
            amount: 1,
            price: toolPrice,
            total: toolPrice
        });
        totalCost += toolPrice;
    } else {
        // Tools aren't on bazaar - they're NPC items (usually 1-10 coins)
        // Add a note but don't include in cost calculation
        materialCosts.push({
            item: minion.tool,
            amount: 1,
            price: 0,
            total: 0,
            note: "NPC item (not on Bazaar)"
        });
    }

    // Add material costs
    Object.entries(materials).forEach(([item, amount]) => {
        const price = prices[item] || 0;
        const itemTotal = price * amount;
        
        materialCosts.push({
            item: item,
            amount: amount,
            price: price,
            total: itemTotal
        });
        
        if (price) {
            totalCost += itemTotal;
        }
    });

    return {
        materials: materialCosts,
        totalCost: totalCost,
        prices: prices
    };
}

// Calculate production value
async function calculateProductionValue(minionName, tier, hours) {
    const minion = getMinionData(minionName);
    if (!minion) return null;

    // Calculate production rate based on tier
    // Higher tiers have faster action times
    // Formula: time reduction per tier is approximately 5-7%
    // Tier I: 100%, Tier II: ~93%, Tier III: ~87%, etc.
    const baseTime = minion.production.timeBetweenActions;
    const tierMultiplier = Math.pow(0.94, tier - 1); // ~6% reduction per tier
    const adjustedTime = Math.max(baseTime * tierMultiplier, baseTime * 0.5); // Cap at 50% of base time

    // Calculate items produced
    const secondsPerHour = 3600;
    const actionsPerHour = secondsPerHour / adjustedTime;
    const itemsPerHour = actionsPerHour * minion.production.itemsPerAction;
    const totalItems = itemsPerHour * hours;

    // Fetch price for produced item
    const itemPrice = await fetchItemPrice(minion.production.itemProduced);
    const totalValue = itemPrice ? totalItems * itemPrice : 0;

    return {
        itemsProduced: totalItems,
        itemsPerHour: itemsPerHour,
        itemPrice: itemPrice,
        totalValue: totalValue,
        itemName: minion.production.itemProduced
    };
}

// Display crafting recipe
async function displayCraftingRecipe(minionName, tier) {
    const recipeContent = document.getElementById('crafting-recipe-content');
    const minion = getMinionData(minionName);
    
    if (!minion || !tier) {
        recipeContent.innerHTML = '<p class="placeholder">Select a minion and tier to see the crafting recipe</p>';
        return;
    }

    // Get recipe from local data (MinionAH API doesn't provide recipe data - returns 404)
    const recipe = minion.recipes[parseInt(tier)];
    const isFallback = true; // Always using local data since no API available
    
    if (!recipe) {
        recipeContent.innerHTML = '<p class="placeholder">Recipe not available for this tier</p>';
        return;
    }

    // Create recipe grid (3x3)
    let html = '<div class="crafting-recipe-container">';
    html += '<div class="crafting-grid">';

    // For Tier I, show tool in center with materials around
    // For Tier II+, show previous tier minion + materials
    const isTier1 = parseInt(tier) === 1;
    const grid = Array(9).fill(null); // 3x3 grid
    
    if (isTier1) {
        // Tier I: Tool in center (position 4), materials fill surrounding 8 slots
        grid[4] = { item: minion.tool, amount: 1, isTool: true };
        
        // Fill surrounding slots with materials
        // Most recipes use 8 slots around the tool, so divide material amount by 8
        const material = recipe[0]; // Usually one material type for Tier I
        const itemsPerSlot = Math.floor(material.amount / 8);
        const remainder = material.amount % 8;
        
        // Fill 8 surrounding slots (indices 0,1,2,3,5,6,7,8)
        const surroundingSlots = [0, 1, 2, 3, 5, 6, 7, 8];
        surroundingSlots.forEach((slotIndex, idx) => {
            const amount = itemsPerSlot + (idx < remainder ? 1 : 0);
            grid[slotIndex] = { 
                item: material.item, 
                amount: amount,
                totalAmount: material.amount,
                isMaterial: true
            };
        });
    } else {
        // Tier II+: Previous tier minion in center, materials around
        const prevTier = parseInt(tier) - 1;
        const tierRoman = getRomanNumeral(prevTier);
        grid[4] = { 
            item: minionName.replace(' Minion', ''), 
            amount: 1, 
            tier: tierRoman,
            isMinion: true 
        };
        
        // Fill surrounding slots with materials
        const material = recipe[0]; // Usually one material type per tier
        
        // For small amounts (1-8), place them in specific slots
        // For larger amounts, distribute evenly across all 8 slots
        if (material.amount <= 8) {
            // Place items in specific slots (top row, then left, then right, then bottom)
            const placementOrder = [1, 3, 5, 7, 0, 2, 6, 8]; // Center positions first, then corners
            for (let i = 0; i < material.amount && i < 8; i++) {
                grid[placementOrder[i]] = { 
                    item: material.item, 
                    amount: 1,
                    totalAmount: material.amount,
                    isMaterial: true
                };
            }
        } else {
            // For larger amounts, distribute evenly
            const itemsPerSlot = Math.floor(material.amount / 8);
            const remainder = material.amount % 8;
            
            const surroundingSlots = [0, 1, 2, 3, 5, 6, 7, 8];
            surroundingSlots.forEach((slotIndex, idx) => {
                const amount = itemsPerSlot + (idx < remainder ? 1 : 0);
                grid[slotIndex] = { 
                    item: material.item, 
                    amount: amount,
                    totalAmount: material.amount,
                    isMaterial: true
                };
            });
        }
    }

    // Render the grid
    for (let i = 0; i < 9; i++) {
        const slot = grid[i];
        if (slot) {
            let displayName = slot.item;
            if (slot.tier) {
                displayName = `${slot.item} T${slot.tier}`;
            }
            // Truncate long names
            if (displayName.length > 15) {
                displayName = displayName.substring(0, 12) + '...';
            }
            
            // Show amount per slot if it's a material slot
            let amountDisplay = '';
            if (slot.isMaterial) {
                if (slot.amount && slot.amount > 0) {
                    // Show amount per slot (for distributed items)
                    amountDisplay = `<div class="item-amount">${formatNumber(slot.amount)}</div>`;
                } else if (slot.totalAmount && slot.totalAmount <= 8 && slot.totalAmount > 1) {
                    // For small amounts (2-8), show total in tooltip, amount per slot in display
                    // Each slot gets 1 item when total is small
                    amountDisplay = `<div class="item-amount">1</div>`;
                }
            }
            
            html += `<div class="crafting-slot has-item" title="${slot.item}${slot.totalAmount ? ' (' + formatNumber(slot.totalAmount) + ' total)' : ''}">
                <div class="item-name">${displayName}</div>
                ${amountDisplay}
            </div>`;
        } else {
            html += '<div class="crafting-slot empty"></div>';
        }
    }

    html += '</div>'; // Close crafting-grid
    
    // Add arrow and result
    html += '<div class="recipe-arrow">→</div>';
    html += '<div class="result-slot">';
    html += `<div class="item-name">${minionName.replace(' Minion', '')}</div>`;
    html += `<div class="item-amount">Tier ${getRomanNumeral(parseInt(tier))}</div>`;
    html += '</div>';

    // Add recipe info
    html += '<div class="recipe-info">';
    if (isTier1) {
        const itemsPerSlot = Math.floor(recipe[0].amount / 8);
        html += `<p><strong>Crafting:</strong> Place ${minion.tool} in center, surround with ${recipe[0].amount}x ${recipe[0].item} (${itemsPerSlot} per slot)</p>`;
    } else {
        const prevTier = parseInt(tier) - 1;
        if (recipe[0].amount <= 8) {
            html += `<p><strong>Upgrade:</strong> Place Tier ${getRomanNumeral(prevTier)} minion in center, add ${recipe[0].amount}x ${recipe[0].item}</p>`;
        } else {
            const itemsPerSlot = Math.floor(recipe[0].amount / 8);
            html += `<p><strong>Upgrade:</strong> Place Tier ${getRomanNumeral(prevTier)} minion in center, add ${recipe[0].amount}x ${recipe[0].item} (${itemsPerSlot} per slot)</p>`;
        }
    }
    
    // Add warning if using fallback data
    if (isFallback) {
        html += '<p style="margin-top: 10px; color: #e74c3c; font-size: 0.85em;"><strong>⚠ Note:</strong> Using local recipe data. If amounts seem incorrect, recipes may need updating. Please verify in-game or on the Hypixel Wiki.</p>';
    }
    
    html += '</div>';

    html += '</div>'; // Close crafting-recipe-container
    recipeContent.innerHTML = html;
}

// Helper function to convert number to Roman numeral
function getRomanNumeral(num) {
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    return romanNumerals[num - 1] || num.toString();
}

// Display crafting costs
function displayCraftingCosts(costData) {
    if (!costData || !costData.materials) {
        craftingCostContent.innerHTML = '<p class="placeholder">Unable to calculate crafting costs</p>';
        return;
    }

    let html = '<table class="materials-table">';
    html += '<thead><tr><th>Material</th><th>Amount</th><th>Price Each</th><th>Total</th></tr></thead>';
    html += '<tbody>';

    let hasUnavailablePrices = false;
    costData.materials.forEach(material => {
        let priceDisplay = material.price ? formatCoins(material.price) + ' coins' : 'Price unavailable';
        let totalDisplay = material.total ? formatCoins(material.total) + ' coins' : 'N/A';
        
        // Handle NPC items (tools)
        if (material.note) {
            priceDisplay = material.note;
            totalDisplay = '~1-10 coins (NPC)';
        }
        
        if (!material.price && !material.note) {
            hasUnavailablePrices = true;
        }
        
        html += `<tr>
            <td>${material.item}</td>
            <td>${formatNumber(material.amount)}</td>
            <td>${priceDisplay}</td>
            <td class="coin-value">${totalDisplay}</td>
        </tr>`;
    });

    html += `<tr class="total-row">
        <td colspan="3"><strong>Total Cost</strong></td>
        <td class="coin-value"><strong>${formatCoins(costData.totalCost)} coins</strong></td>
    </tr>`;
    html += '</tbody></table>';

    if (hasUnavailablePrices) {
        html += '<p style="margin-top: 15px; color: var(--text-secondary); font-size: 0.9em; font-style: italic;">Note: Some prices could not be fetched. This may be due to CORS restrictions. Check the browser console for details.</p>';
    }

    craftingCostContent.innerHTML = html;
}

// Display production value
function displayProductionValue(productionData) {
    if (!productionData) {
        productionValueContent.innerHTML = '<p class="placeholder">Unable to calculate production value</p>';
        return;
    }

    let html = '<div class="production-stats">';
    html += `<div class="stat-item">
        <div class="stat-label">Items Produced</div>
        <div class="stat-value">${formatNumber(Math.round(productionData.itemsProduced))}</div>
    </div>`;
    html += `<div class="stat-item">
        <div class="stat-label">Items Per Hour</div>
        <div class="stat-value">${formatNumber(Math.round(productionData.itemsPerHour))}</div>
    </div>`;
    html += `<div class="stat-item">
        <div class="stat-label">Item Price</div>
        <div class="stat-value">${productionData.itemPrice ? formatCoins(productionData.itemPrice) + ' coins' : 'N/A'}</div>
    </div>`;
    html += `<div class="stat-item">
        <div class="stat-label">Total Value</div>
        <div class="stat-value coin-value">${formatCoins(productionData.totalValue)} coins</div>
    </div>`;
    html += '</div>';

    if (!productionData.itemPrice) {
        html += '<p style="margin-top: 15px; color: var(--text-secondary); font-size: 0.9em; font-style: italic;">Note: Item price could not be fetched. This may be due to CORS restrictions. Check the browser console for details.</p>';
    }

    // Add ROI if we have both crafting cost and production value
    if (productionData.craftingCost && productionData.totalValue && productionData.itemPrice) {
        const roi = ((productionData.totalValue - productionData.craftingCost) / productionData.craftingCost) * 100;
        const roiClass = roi >= 0 ? 'roi-positive' : 'roi-negative';
        html += `<div class="roi-section">
            <div class="stat-label">Return on Investment</div>
            <div class="stat-value ${roiClass}">${roi >= 0 ? '+' : ''}${roi.toFixed(2)}%</div>
        </div>`;
    }

    productionValueContent.innerHTML = html;
}

// Show/hide loading state
function setLoading(loading) {
    if (loading) {
        loadingDiv.classList.remove('hidden');
        calculateBtn.disabled = true;
    } else {
        loadingDiv.classList.add('hidden');
        calculateBtn.disabled = false;
    }
}

// Show error message
function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    setTimeout(() => {
        errorDiv.classList.add('hidden');
    }, 5000);
}

// Main calculate function
async function performCalculation() {
    const minionName = minionSelect.value;
    const tier = tierSelect.value;
    const hours = parseFloat(timePeriodInput.value) || 24;

    if (!minionName || !tier) {
        showError('Please select both a minion type and tier');
        return;
    }

    setLoading(true);
    errorDiv.classList.add('hidden');

    try {
        // Display crafting recipe (may fetch from API)
        await displayCraftingRecipe(minionName, tier);

        // Calculate both crafting costs and production value
        const [craftingCosts, productionValue] = await Promise.all([
            calculateCraftingCosts(minionName, tier),
            calculateProductionValue(minionName, tier, hours)
        ]);

        // Display results
        displayCraftingCosts(craftingCosts);
        
        // Add crafting cost to production data for ROI calculation
        if (craftingCosts) {
            productionValue.craftingCost = craftingCosts.totalCost;
        }
        displayProductionValue(productionValue);

    } catch (error) {
        console.error('Calculation error:', error);
        showError('An error occurred while calculating. Please try again.');
    } finally {
        setLoading(false);
    }
}

// Event listeners
calculateBtn.addEventListener('click', performCalculation);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeMinionSelect();
});

