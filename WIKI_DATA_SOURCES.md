# Hypixel Wiki Data Sources

## Available Resources

Based on research, here are the locations where minion recipe data can be found:

### 1. Individual Minion Pages
Each minion has its own page with detailed recipe information:
- **Format**: `https://wiki.hypixel.net/{Minion_Name}_Minion`
- **Examples**:
  - Wheat Minion: https://wiki.hypixel.net/Wheat_Minion
  - Sugar Cane Minion: https://wiki.hypixel.net/Sugar_Cane_Minion
  - Zombie Minion: https://wiki.hypixel.net/Zombie_Minion
  - Iron Minion: https://wiki.hypixel.net/Iron_Minion

### 2. Minions Category Page
Main listing of all minions:
- **URL**: https://wiki.hypixel.net/Minions

### 3. MediaWiki API (Potential)
The wiki likely uses MediaWiki, which has an API:
- **API Base**: `https://wiki.hypixel.net/api.php`
- **Possible endpoints**:
  - `?action=query&prop=revisions&titles={Page_Name}&rvprop=content&format=json`
  - `?action=parse&page={Page_Name}&format=json`

### 4. Data Modules (If They Exist)
Some wikis use Lua modules to store structured data:
- **Possible locations**:
  - `https://wiki.hypixel.net/Module:Minion`
  - `https://wiki.hypixel.net/Module:Minions`
  - `https://wiki.hypixel.net/Module:Minion/Data`

## How to Access

### Option 1: Manual Verification
1. Visit individual minion pages
2. Check the "Crafting" or "Upgrade" sections
3. Note the exact amounts and materials

### Option 2: MediaWiki API
Try these API calls to get page content:

```javascript
// Get page content as JSON
const apiUrl = 'https://wiki.hypixel.net/api.php?action=parse&page=Wheat_Minion&format=json&prop=text';

// Or get raw wiki text
const apiUrl = 'https://wiki.hypixel.net/api.php?action=query&prop=revisions&titles=Wheat_Minion&rvprop=content&format=json';
```

### Option 3: Web Scraping
Parse HTML from minion pages to extract recipe data (requires parsing HTML structure).

## Next Steps

1. **Test MediaWiki API**: Try accessing the API endpoints above
2. **Check for Data Modules**: Look for Module:Minion pages
3. **Parse Individual Pages**: Extract recipe data from HTML/wiki text
4. **Create Parser**: Build a function to extract structured data from wiki pages

## Example API Test

You can test if the MediaWiki API works by trying:
```
https://wiki.hypixel.net/api.php?action=query&format=json&list=allpages&aplimit=10&apnamespace=0&apprefix=Minion
```

This should return a list of all pages starting with "Minion".

