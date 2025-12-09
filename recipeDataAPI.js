// Recipe Data API - Attempts to fetch minion recipes from available sources
// Falls back to local data if APIs are unavailable

let recipeDataCache = new Map();
const RECIPE_CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Convert minion name to various API formats
function normalizeMinionName(minionName) {
    // Remove " Minion" suffix
    let name = minionName.replace(' Minion', '');
    
    // Convert to various formats that APIs might use
    return {
        display: minionName,
        short: name,
        snake: name.replace(/\s+/g, '_').toLowerCase(),
        camel: name.replace(/\s+(.)/g, (_, c) => c.toUpperCase()).replace(/\s/g, ''),
        upper: name.toUpperCase().replace(/\s+/g, '_')
    };
}

// Try to fetch recipe from MinionAH API (if it provides recipe data)
async function fetchRecipeFromMinionAH(minionName, tier) {
    try {
        const formats = normalizeMinionName(minionName);
        // Try different name formats
        const nameVariants = [
            formats.display,
            formats.short,
            formats.snake,
            formats.upper
        ];
        
        for (const nameVariant of nameVariants) {
            try {
                const encodedName = encodeURIComponent(nameVariant);
                const apiUrl = `https://minionah.com/api/craftcost/${encodedName}`;
                
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    const data = await response.json();
                    // Check if response contains recipe information
                    if (data.recipe || data.materials || data.ingredients) {
                        return parseRecipeData(data, tier);
                    }
                }
            } catch (e) {
                // Try next variant
                continue;
            }
        }
    } catch (error) {
        console.log('MinionAH API not available for recipes:', error);
    }
    return null;
}

// Parse recipe data from API response
function parseRecipeData(apiData, tier) {
    // This would need to be customized based on actual API response format
    // Placeholder for now
    if (apiData.recipe && apiData.recipe[tier]) {
        return apiData.recipe[tier];
    }
    return null;
}

// Main function to get recipe data (with fallback)
async function getRecipeData(minionName, tier) {
    const cacheKey = `${minionName}_${tier}`;
    
    // Check cache first
    if (recipeDataCache.has(cacheKey)) {
        const cached = recipeDataCache.get(cacheKey);
        if (Date.now() - cached.timestamp < RECIPE_CACHE_DURATION) {
            return cached.data;
        }
    }
    
    // Try to fetch from API
    let recipeData = await fetchRecipeFromMinionAH(minionName, tier);
    
    // Fallback to local data
    if (!recipeData) {
        const localData = getMinionData(minionName);
        if (localData && localData.recipes && localData.recipes[tier]) {
            recipeData = localData.recipes[tier];
            // Mark as fallback data
            recipeData._isFallback = true;
        }
    }
    
    // Cache the result
    if (recipeData) {
        recipeDataCache.set(cacheKey, {
            data: recipeData,
            timestamp: Date.now()
        });
    }
    
    return recipeData;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getRecipeData, normalizeMinionName };
}

