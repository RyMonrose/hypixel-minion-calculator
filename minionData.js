// Hypixel Skyblock Minion Data
// Contains recipes, upgrade costs, and production rates for various minions

const minionData = {
    "Sugar Cane Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Sugar Cane", amount: 80 }],
            2: [{ item: "Sugar Cane", amount: 160 }],
            3: [{ item: "Sugar Cane", amount: 320 }],
            4: [{ item: "Sugar Cane", amount: 512 }],
            5: [{ item: "Enchanted Sugar Cane", amount: 8 }],
            6: [{ item: "Enchanted Sugar Cane", amount: 24 }],
            7: [{ item: "Enchanted Sugar Cane", amount: 64 }],
            8: [{ item: "Enchanted Sugar Cane", amount: 128 }],
            9: [{ item: "Enchanted Sugar Cane", amount: 256 }],
            10: [{ item: "Enchanted Sugar Cane", amount: 512 }],
            11: [{ item: "Enchanted Sugar Cane Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 22, // seconds
            itemsPerAction: 1,
            itemProduced: "Sugar Cane"
        }
    },
    "Potato Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Potato", amount: 80 }],
            2: [{ item: "Potato", amount: 160 }],
            3: [{ item: "Potato", amount: 320 }],
            4: [{ item: "Potato", amount: 512 }],
            5: [{ item: "Enchanted Potato", amount: 8 }],
            6: [{ item: "Enchanted Potato", amount: 24 }],
            7: [{ item: "Enchanted Potato", amount: 64 }],
            8: [{ item: "Enchanted Potato", amount: 128 }],
            9: [{ item: "Enchanted Potato", amount: 256 }],
            10: [{ item: "Enchanted Potato", amount: 512 }],
            11: [{ item: "Enchanted Potato Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 20, // seconds
            itemsPerAction: 1,
            itemProduced: "Potato"
        }
    },
    "Cobblestone Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Cobblestone", amount: 80 }],
            2: [{ item: "Cobblestone", amount: 160 }],
            3: [{ item: "Cobblestone", amount: 320 }],
            4: [{ item: "Cobblestone", amount: 512 }],
            5: [{ item: "Enchanted Cobblestone", amount: 8 }],
            6: [{ item: "Enchanted Cobblestone", amount: 24 }],
            7: [{ item: "Enchanted Cobblestone", amount: 64 }],
            8: [{ item: "Enchanted Cobblestone", amount: 128 }],
            9: [{ item: "Enchanted Cobblestone", amount: 256 }],
            10: [{ item: "Enchanted Cobblestone", amount: 512 }],
            11: [{ item: "Enchanted Cobblestone Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 14, // seconds
            itemsPerAction: 1,
            itemProduced: "Cobblestone"
        }
    },
    "Skeleton Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Bone", amount: 80 }],
            2: [{ item: "Bone", amount: 160 }],
            3: [{ item: "Bone", amount: 320 }],
            4: [{ item: "Bone", amount: 512 }],
            5: [{ item: "Enchanted Bone", amount: 8 }],
            6: [{ item: "Enchanted Bone", amount: 24 }],
            7: [{ item: "Enchanted Bone", amount: 64 }],
            8: [{ item: "Enchanted Bone", amount: 128 }],
            9: [{ item: "Enchanted Bone", amount: 256 }],
            10: [{ item: "Enchanted Bone", amount: 512 }],
            11: [{ item: "Enchanted Bone Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 26, // seconds
            itemsPerAction: 1,
            itemProduced: "Bone"
        }
    },
    "Obsidian Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Obsidian", amount: 80 }],
            2: [{ item: "Obsidian", amount: 160 }],
            3: [{ item: "Obsidian", amount: 320 }],
            4: [{ item: "Obsidian", amount: 512 }],
            5: [{ item: "Enchanted Obsidian", amount: 8 }],
            6: [{ item: "Enchanted Obsidian", amount: 24 }],
            7: [{ item: "Enchanted Obsidian", amount: 64 }],
            8: [{ item: "Enchanted Obsidian", amount: 128 }],
            9: [{ item: "Enchanted Obsidian", amount: 256 }],
            10: [{ item: "Enchanted Obsidian", amount: 512 }],
            11: [{ item: "Enchanted Obsidian Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 19, // seconds
            itemsPerAction: 1,
            itemProduced: "Obsidian"
        }
    },
    "Wheat Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Wheat", amount: 80 }],
            2: [{ item: "Wheat", amount: 160 }],
            3: [{ item: "Wheat", amount: 320 }],
            4: [{ item: "Wheat", amount: 512 }],
            5: [{ item: "Enchanted Hay Bale", amount: 8 }],
            6: [{ item: "Enchanted Hay Bale", amount: 24 }],
            7: [{ item: "Enchanted Hay Bale", amount: 64 }],
            8: [{ item: "Enchanted Hay Bale", amount: 128 }],
            9: [{ item: "Enchanted Hay Bale", amount: 256 }],
            10: [{ item: "Enchanted Hay Bale", amount: 512 }],
            11: [{ item: "Enchanted Hay Bale Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 23, // seconds
            itemsPerAction: 1,
            itemProduced: "Wheat"
        }
    },
    "Carrot Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Carrot", amount: 80 }],
            2: [{ item: "Carrot", amount: 160 }],
            3: [{ item: "Carrot", amount: 320 }],
            4: [{ item: "Carrot", amount: 512 }],
            5: [{ item: "Enchanted Carrot", amount: 8 }],
            6: [{ item: "Enchanted Carrot", amount: 24 }],
            7: [{ item: "Enchanted Carrot", amount: 64 }],
            8: [{ item: "Enchanted Carrot", amount: 128 }],
            9: [{ item: "Enchanted Carrot", amount: 256 }],
            10: [{ item: "Enchanted Carrot", amount: 512 }],
            11: [{ item: "Enchanted Carrot Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 21, // seconds
            itemsPerAction: 1,
            itemProduced: "Carrot"
        }
    },
    "Coal Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Coal", amount: 80 }],
            2: [{ item: "Coal", amount: 160 }],
            3: [{ item: "Coal", amount: 320 }],
            4: [{ item: "Coal", amount: 512 }],
            5: [{ item: "Enchanted Coal", amount: 8 }],
            6: [{ item: "Enchanted Coal", amount: 24 }],
            7: [{ item: "Enchanted Coal", amount: 64 }],
            8: [{ item: "Enchanted Coal", amount: 128 }],
            9: [{ item: "Enchanted Coal", amount: 256 }],
            10: [{ item: "Enchanted Coal", amount: 512 }],
            11: [{ item: "Enchanted Coal Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 13, // seconds
            itemsPerAction: 1,
            itemProduced: "Coal"
        }
    },
    "Iron Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Iron Ingot", amount: 80 }],
            2: [{ item: "Iron Ingot", amount: 160 }],
            3: [{ item: "Iron Ingot", amount: 320 }],
            4: [{ item: "Iron Ingot", amount: 512 }],
            5: [{ item: "Enchanted Iron", amount: 8 }],
            6: [{ item: "Enchanted Iron", amount: 24 }],
            7: [{ item: "Enchanted Iron", amount: 64 }],
            8: [{ item: "Enchanted Iron", amount: 128 }],
            9: [{ item: "Enchanted Iron", amount: 256 }],
            10: [{ item: "Enchanted Iron", amount: 512 }],
            11: [{ item: "Enchanted Iron Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 15, // seconds
            itemsPerAction: 1,
            itemProduced: "Iron Ingot"
        }
    },
    "Gold Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Gold Ingot", amount: 80 }],
            2: [{ item: "Gold Ingot", amount: 160 }],
            3: [{ item: "Gold Ingot", amount: 320 }],
            4: [{ item: "Gold Ingot", amount: 512 }],
            5: [{ item: "Enchanted Gold", amount: 8 }],
            6: [{ item: "Enchanted Gold", amount: 24 }],
            7: [{ item: "Enchanted Gold", amount: 64 }],
            8: [{ item: "Enchanted Gold", amount: 128 }],
            9: [{ item: "Enchanted Gold", amount: 256 }],
            10: [{ item: "Enchanted Gold", amount: 512 }],
            11: [{ item: "Enchanted Gold Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 16, // seconds
            itemsPerAction: 1,
            itemProduced: "Gold Ingot"
        }
    },
    // Additional Farming Minions
    "Pumpkin Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Pumpkin", amount: 80 }],
            2: [{ item: "Pumpkin", amount: 160 }],
            3: [{ item: "Pumpkin", amount: 320 }],
            4: [{ item: "Pumpkin", amount: 512 }],
            5: [{ item: "Enchanted Pumpkin", amount: 8 }],
            6: [{ item: "Enchanted Pumpkin", amount: 24 }],
            7: [{ item: "Enchanted Pumpkin", amount: 64 }],
            8: [{ item: "Enchanted Pumpkin", amount: 128 }],
            9: [{ item: "Enchanted Pumpkin", amount: 256 }],
            10: [{ item: "Enchanted Pumpkin", amount: 512 }],
            11: [{ item: "Enchanted Pumpkin Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 24, // seconds
            itemsPerAction: 1,
            itemProduced: "Pumpkin"
        }
    },
    "Melon Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Melon", amount: 80 }],
            2: [{ item: "Melon", amount: 160 }],
            3: [{ item: "Melon", amount: 320 }],
            4: [{ item: "Melon", amount: 512 }],
            5: [{ item: "Enchanted Melon", amount: 8 }],
            6: [{ item: "Enchanted Melon", amount: 24 }],
            7: [{ item: "Enchanted Melon", amount: 64 }],
            8: [{ item: "Enchanted Melon", amount: 128 }],
            9: [{ item: "Enchanted Melon", amount: 256 }],
            10: [{ item: "Enchanted Melon", amount: 512 }],
            11: [{ item: "Enchanted Melon Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 25, // seconds
            itemsPerAction: 1,
            itemProduced: "Melon"
        }
    },
    "Mushroom Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Mushroom", amount: 80 }],
            2: [{ item: "Mushroom", amount: 160 }],
            3: [{ item: "Mushroom", amount: 320 }],
            4: [{ item: "Mushroom", amount: 512 }],
            5: [{ item: "Enchanted Mushroom", amount: 8 }],
            6: [{ item: "Enchanted Mushroom", amount: 24 }],
            7: [{ item: "Enchanted Mushroom", amount: 64 }],
            8: [{ item: "Enchanted Mushroom", amount: 128 }],
            9: [{ item: "Enchanted Mushroom", amount: 256 }],
            10: [{ item: "Enchanted Mushroom", amount: 512 }],
            11: [{ item: "Enchanted Mushroom Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 26, // seconds
            itemsPerAction: 1,
            itemProduced: "Mushroom"
        }
    },
    "Cocoa Beans Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Cocoa Beans", amount: 80 }],
            2: [{ item: "Cocoa Beans", amount: 160 }],
            3: [{ item: "Cocoa Beans", amount: 320 }],
            4: [{ item: "Cocoa Beans", amount: 512 }],
            5: [{ item: "Enchanted Cocoa Bean", amount: 8 }],
            6: [{ item: "Enchanted Cocoa Bean", amount: 24 }],
            7: [{ item: "Enchanted Cocoa Bean", amount: 64 }],
            8: [{ item: "Enchanted Cocoa Bean", amount: 128 }],
            9: [{ item: "Enchanted Cocoa Bean", amount: 256 }],
            10: [{ item: "Enchanted Cocoa Bean", amount: 512 }],
            11: [{ item: "Enchanted Cocoa Bean Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 27, // seconds
            itemsPerAction: 1,
            itemProduced: "Cocoa Beans"
        }
    },
    "Cactus Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Cactus", amount: 80 }],
            2: [{ item: "Cactus", amount: 160 }],
            3: [{ item: "Cactus", amount: 320 }],
            4: [{ item: "Cactus", amount: 512 }],
            5: [{ item: "Enchanted Cactus Green", amount: 8 }],
            6: [{ item: "Enchanted Cactus Green", amount: 24 }],
            7: [{ item: "Enchanted Cactus Green", amount: 64 }],
            8: [{ item: "Enchanted Cactus Green", amount: 128 }],
            9: [{ item: "Enchanted Cactus Green", amount: 256 }],
            10: [{ item: "Enchanted Cactus Green", amount: 512 }],
            11: [{ item: "Enchanted Cactus Green Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 18, // seconds
            itemsPerAction: 1,
            itemProduced: "Cactus"
        }
    },
    "Nether Wart Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Nether Wart", amount: 80 }],
            2: [{ item: "Nether Wart", amount: 160 }],
            3: [{ item: "Nether Wart", amount: 320 }],
            4: [{ item: "Nether Wart", amount: 512 }],
            5: [{ item: "Enchanted Nether Wart", amount: 8 }],
            6: [{ item: "Enchanted Nether Wart", amount: 24 }],
            7: [{ item: "Enchanted Nether Wart", amount: 64 }],
            8: [{ item: "Enchanted Nether Wart", amount: 128 }],
            9: [{ item: "Enchanted Nether Wart", amount: 256 }],
            10: [{ item: "Enchanted Nether Wart", amount: 512 }],
            11: [{ item: "Enchanted Nether Wart Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 19, // seconds
            itemsPerAction: 1,
            itemProduced: "Nether Wart"
        }
    },
    "Cow Minion": {
        type: "farming",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Raw Beef", amount: 80 }],
            2: [{ item: "Raw Beef", amount: 160 }],
            3: [{ item: "Raw Beef", amount: 320 }],
            4: [{ item: "Raw Beef", amount: 512 }],
            5: [{ item: "Enchanted Raw Beef", amount: 8 }],
            6: [{ item: "Enchanted Raw Beef", amount: 24 }],
            7: [{ item: "Enchanted Raw Beef", amount: 64 }],
            8: [{ item: "Enchanted Raw Beef", amount: 128 }],
            9: [{ item: "Enchanted Raw Beef", amount: 256 }],
            10: [{ item: "Enchanted Raw Beef", amount: 512 }],
            11: [{ item: "Enchanted Raw Beef Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 28, // seconds
            itemsPerAction: 1,
            itemProduced: "Raw Beef"
        }
    },
    "Pig Minion": {
        type: "farming",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Raw Porkchop", amount: 80 }],
            2: [{ item: "Raw Porkchop", amount: 160 }],
            3: [{ item: "Raw Porkchop", amount: 320 }],
            4: [{ item: "Raw Porkchop", amount: 512 }],
            5: [{ item: "Enchanted Pork", amount: 8 }],
            6: [{ item: "Enchanted Pork", amount: 24 }],
            7: [{ item: "Enchanted Pork", amount: 64 }],
            8: [{ item: "Enchanted Pork", amount: 128 }],
            9: [{ item: "Enchanted Pork", amount: 256 }],
            10: [{ item: "Enchanted Pork", amount: 512 }],
            11: [{ item: "Enchanted Pork Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 27, // seconds
            itemsPerAction: 1,
            itemProduced: "Raw Porkchop"
        }
    },
    "Chicken Minion": {
        type: "farming",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Raw Chicken", amount: 80 }],
            2: [{ item: "Raw Chicken", amount: 160 }],
            3: [{ item: "Raw Chicken", amount: 320 }],
            4: [{ item: "Raw Chicken", amount: 512 }],
            5: [{ item: "Enchanted Raw Chicken", amount: 8 }],
            6: [{ item: "Enchanted Raw Chicken", amount: 24 }],
            7: [{ item: "Enchanted Raw Chicken", amount: 64 }],
            8: [{ item: "Enchanted Raw Chicken", amount: 128 }],
            9: [{ item: "Enchanted Raw Chicken", amount: 256 }],
            10: [{ item: "Enchanted Raw Chicken", amount: 512 }],
            11: [{ item: "Enchanted Raw Chicken Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 25, // seconds
            itemsPerAction: 1,
            itemProduced: "Raw Chicken"
        }
    },
    "Sheep Minion": {
        type: "farming",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Mutton", amount: 80 }],
            2: [{ item: "Mutton", amount: 160 }],
            3: [{ item: "Mutton", amount: 320 }],
            4: [{ item: "Mutton", amount: 512 }],
            5: [{ item: "Enchanted Mutton", amount: 8 }],
            6: [{ item: "Enchanted Mutton", amount: 24 }],
            7: [{ item: "Enchanted Mutton", amount: 64 }],
            8: [{ item: "Enchanted Mutton", amount: 128 }],
            9: [{ item: "Enchanted Mutton", amount: 256 }],
            10: [{ item: "Enchanted Mutton", amount: 512 }],
            11: [{ item: "Enchanted Mutton Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 26, // seconds
            itemsPerAction: 1,
            itemProduced: "Mutton"
        }
    },
    "Rabbit Minion": {
        type: "farming",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Raw Rabbit", amount: 80 }],
            2: [{ item: "Raw Rabbit", amount: 160 }],
            3: [{ item: "Raw Rabbit", amount: 320 }],
            4: [{ item: "Raw Rabbit", amount: 512 }],
            5: [{ item: "Enchanted Rabbit", amount: 8 }],
            6: [{ item: "Enchanted Rabbit", amount: 24 }],
            7: [{ item: "Enchanted Rabbit", amount: 64 }],
            8: [{ item: "Enchanted Rabbit", amount: 128 }],
            9: [{ item: "Enchanted Rabbit", amount: 256 }],
            10: [{ item: "Enchanted Rabbit", amount: 512 }],
            11: [{ item: "Enchanted Rabbit Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 29, // seconds
            itemsPerAction: 1,
            itemProduced: "Raw Rabbit"
        }
    },
    // Additional Mining Minions
    "Diamond Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Diamond", amount: 80 }],
            2: [{ item: "Diamond", amount: 160 }],
            3: [{ item: "Diamond", amount: 320 }],
            4: [{ item: "Diamond", amount: 512 }],
            5: [{ item: "Enchanted Diamond", amount: 8 }],
            6: [{ item: "Enchanted Diamond", amount: 24 }],
            7: [{ item: "Enchanted Diamond", amount: 64 }],
            8: [{ item: "Enchanted Diamond", amount: 128 }],
            9: [{ item: "Enchanted Diamond", amount: 256 }],
            10: [{ item: "Enchanted Diamond", amount: 512 }],
            11: [{ item: "Enchanted Diamond Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 17, // seconds
            itemsPerAction: 1,
            itemProduced: "Diamond"
        }
    },
    "Lapis Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Lapis Lazuli", amount: 80 }],
            2: [{ item: "Lapis Lazuli", amount: 160 }],
            3: [{ item: "Lapis Lazuli", amount: 320 }],
            4: [{ item: "Lapis Lazuli", amount: 512 }],
            5: [{ item: "Enchanted Lapis Lazuli", amount: 8 }],
            6: [{ item: "Enchanted Lapis Lazuli", amount: 24 }],
            7: [{ item: "Enchanted Lapis Lazuli", amount: 64 }],
            8: [{ item: "Enchanted Lapis Lazuli", amount: 128 }],
            9: [{ item: "Enchanted Lapis Lazuli", amount: 256 }],
            10: [{ item: "Enchanted Lapis Lazuli", amount: 512 }],
            11: [{ item: "Enchanted Lapis Lazuli Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 18, // seconds
            itemsPerAction: 1,
            itemProduced: "Lapis Lazuli"
        }
    },
    "Emerald Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Emerald", amount: 80 }],
            2: [{ item: "Emerald", amount: 160 }],
            3: [{ item: "Emerald", amount: 320 }],
            4: [{ item: "Emerald", amount: 512 }],
            5: [{ item: "Enchanted Emerald", amount: 8 }],
            6: [{ item: "Enchanted Emerald", amount: 24 }],
            7: [{ item: "Enchanted Emerald", amount: 64 }],
            8: [{ item: "Enchanted Emerald", amount: 128 }],
            9: [{ item: "Enchanted Emerald", amount: 256 }],
            10: [{ item: "Enchanted Emerald", amount: 512 }],
            11: [{ item: "Enchanted Emerald Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 20, // seconds
            itemsPerAction: 1,
            itemProduced: "Emerald"
        }
    },
    "Redstone Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Redstone", amount: 80 }],
            2: [{ item: "Redstone", amount: 160 }],
            3: [{ item: "Redstone", amount: 320 }],
            4: [{ item: "Redstone", amount: 512 }],
            5: [{ item: "Enchanted Redstone", amount: 8 }],
            6: [{ item: "Enchanted Redstone", amount: 24 }],
            7: [{ item: "Enchanted Redstone", amount: 64 }],
            8: [{ item: "Enchanted Redstone", amount: 128 }],
            9: [{ item: "Enchanted Redstone", amount: 256 }],
            10: [{ item: "Enchanted Redstone", amount: 512 }],
            11: [{ item: "Enchanted Redstone Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 12, // seconds
            itemsPerAction: 1,
            itemProduced: "Redstone"
        }
    },
    "Quartz Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Nether Quartz", amount: 80 }],
            2: [{ item: "Nether Quartz", amount: 160 }],
            3: [{ item: "Nether Quartz", amount: 320 }],
            4: [{ item: "Nether Quartz", amount: 512 }],
            5: [{ item: "Enchanted Quartz", amount: 8 }],
            6: [{ item: "Enchanted Quartz", amount: 24 }],
            7: [{ item: "Enchanted Quartz", amount: 64 }],
            8: [{ item: "Enchanted Quartz", amount: 128 }],
            9: [{ item: "Enchanted Quartz", amount: 256 }],
            10: [{ item: "Enchanted Quartz", amount: 512 }],
            11: [{ item: "Enchanted Quartz Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 21, // seconds
            itemsPerAction: 1,
            itemProduced: "Nether Quartz"
        }
    },
    "Glowstone Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Glowstone Dust", amount: 80 }],
            2: [{ item: "Glowstone Dust", amount: 160 }],
            3: [{ item: "Glowstone Dust", amount: 320 }],
            4: [{ item: "Glowstone Dust", amount: 512 }],
            5: [{ item: "Enchanted Glowstone Dust", amount: 8 }],
            6: [{ item: "Enchanted Glowstone Dust", amount: 24 }],
            7: [{ item: "Enchanted Glowstone Dust", amount: 64 }],
            8: [{ item: "Enchanted Glowstone Dust", amount: 128 }],
            9: [{ item: "Enchanted Glowstone Dust", amount: 256 }],
            10: [{ item: "Enchanted Glowstone Dust", amount: 512 }],
            11: [{ item: "Enchanted Glowstone Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 22, // seconds
            itemsPerAction: 1,
            itemProduced: "Glowstone Dust"
        }
    },
    "Gravel Minion": {
        type: "mining",
        tool: "Wooden Shovel",
        recipes: {
            1: [{ item: "Gravel", amount: 80 }],
            2: [{ item: "Gravel", amount: 160 }],
            3: [{ item: "Gravel", amount: 320 }],
            4: [{ item: "Gravel", amount: 512 }],
            5: [{ item: "Enchanted Flint", amount: 8 }],
            6: [{ item: "Enchanted Flint", amount: 24 }],
            7: [{ item: "Enchanted Flint", amount: 64 }],
            8: [{ item: "Enchanted Flint", amount: 128 }],
            9: [{ item: "Enchanted Flint", amount: 256 }],
            10: [{ item: "Enchanted Flint", amount: 512 }],
            11: [{ item: "Enchanted Flint Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 15, // seconds
            itemsPerAction: 1,
            itemProduced: "Gravel"
        }
    },
    "Ice Minion": {
        type: "mining",
        tool: "Wooden Pickaxe",
        recipes: {
            1: [{ item: "Ice", amount: 80 }],
            2: [{ item: "Ice", amount: 160 }],
            3: [{ item: "Ice", amount: 320 }],
            4: [{ item: "Ice", amount: 512 }],
            5: [{ item: "Enchanted Ice", amount: 8 }],
            6: [{ item: "Enchanted Ice", amount: 24 }],
            7: [{ item: "Enchanted Ice", amount: 64 }],
            8: [{ item: "Enchanted Ice", amount: 128 }],
            9: [{ item: "Enchanted Ice", amount: 256 }],
            10: [{ item: "Enchanted Ice", amount: 512 }],
            11: [{ item: "Enchanted Ice Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 16, // seconds
            itemsPerAction: 1,
            itemProduced: "Ice"
        }
    },
    "Sand Minion": {
        type: "mining",
        tool: "Wooden Shovel",
        recipes: {
            1: [{ item: "Sand", amount: 80 }],
            2: [{ item: "Sand", amount: 160 }],
            3: [{ item: "Sand", amount: 320 }],
            4: [{ item: "Sand", amount: 512 }],
            5: [{ item: "Enchanted Sand", amount: 8 }],
            6: [{ item: "Enchanted Sand", amount: 24 }],
            7: [{ item: "Enchanted Sand", amount: 64 }],
            8: [{ item: "Enchanted Sand", amount: 128 }],
            9: [{ item: "Enchanted Sand", amount: 256 }],
            10: [{ item: "Enchanted Sand", amount: 512 }],
            11: [{ item: "Enchanted Sand Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 14, // seconds
            itemsPerAction: 1,
            itemProduced: "Sand"
        }
    },
    // Combat Minions
    "Zombie Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Rotten Flesh", amount: 80 }],
            2: [{ item: "Rotten Flesh", amount: 160 }],
            3: [{ item: "Rotten Flesh", amount: 320 }],
            4: [{ item: "Rotten Flesh", amount: 512 }],
            5: [{ item: "Enchanted Rotten Flesh", amount: 8 }],
            6: [{ item: "Enchanted Rotten Flesh", amount: 24 }],
            7: [{ item: "Enchanted Rotten Flesh", amount: 64 }],
            8: [{ item: "Enchanted Rotten Flesh", amount: 128 }],
            9: [{ item: "Enchanted Rotten Flesh", amount: 256 }],
            10: [{ item: "Enchanted Rotten Flesh", amount: 512 }],
            11: [{ item: "Enchanted Rotten Flesh Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 25, // seconds
            itemsPerAction: 1,
            itemProduced: "Rotten Flesh"
        }
    },
    "Spider Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "String", amount: 80 }],
            2: [{ item: "String", amount: 160 }],
            3: [{ item: "String", amount: 320 }],
            4: [{ item: "String", amount: 512 }],
            5: [{ item: "Enchanted String", amount: 8 }],
            6: [{ item: "Enchanted String", amount: 24 }],
            7: [{ item: "Enchanted String", amount: 64 }],
            8: [{ item: "Enchanted String", amount: 128 }],
            9: [{ item: "Enchanted String", amount: 256 }],
            10: [{ item: "Enchanted String", amount: 512 }],
            11: [{ item: "Enchanted String Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 24, // seconds
            itemsPerAction: 1,
            itemProduced: "String"
        }
    },
    "Cave Spider Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "String", amount: 80 }],
            2: [{ item: "String", amount: 160 }],
            3: [{ item: "String", amount: 320 }],
            4: [{ item: "String", amount: 512 }],
            5: [{ item: "Enchanted String", amount: 8 }],
            6: [{ item: "Enchanted String", amount: 24 }],
            7: [{ item: "Enchanted String", amount: 64 }],
            8: [{ item: "Enchanted String", amount: 128 }],
            9: [{ item: "Enchanted String", amount: 256 }],
            10: [{ item: "Enchanted String", amount: 512 }],
            11: [{ item: "Enchanted String Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 23, // seconds
            itemsPerAction: 1,
            itemProduced: "String"
        }
    },
    "Creeper Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Gunpowder", amount: 80 }],
            2: [{ item: "Gunpowder", amount: 160 }],
            3: [{ item: "Gunpowder", amount: 320 }],
            4: [{ item: "Gunpowder", amount: 512 }],
            5: [{ item: "Enchanted Gunpowder", amount: 8 }],
            6: [{ item: "Enchanted Gunpowder", amount: 24 }],
            7: [{ item: "Enchanted Gunpowder", amount: 64 }],
            8: [{ item: "Enchanted Gunpowder", amount: 128 }],
            9: [{ item: "Enchanted Gunpowder", amount: 256 }],
            10: [{ item: "Enchanted Gunpowder", amount: 512 }],
            11: [{ item: "Enchanted Gunpowder Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 27, // seconds
            itemsPerAction: 1,
            itemProduced: "Gunpowder"
        }
    },
    "Enderman Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Ender Pearl", amount: 80 }],
            2: [{ item: "Ender Pearl", amount: 160 }],
            3: [{ item: "Ender Pearl", amount: 320 }],
            4: [{ item: "Ender Pearl", amount: 512 }],
            5: [{ item: "Enchanted Ender Pearl", amount: 8 }],
            6: [{ item: "Enchanted Ender Pearl", amount: 24 }],
            7: [{ item: "Enchanted Ender Pearl", amount: 64 }],
            8: [{ item: "Enchanted Ender Pearl", amount: 128 }],
            9: [{ item: "Enchanted Ender Pearl", amount: 256 }],
            10: [{ item: "Enchanted Ender Pearl", amount: 512 }],
            11: [{ item: "Enchanted Ender Pearl Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 30, // seconds
            itemsPerAction: 1,
            itemProduced: "Ender Pearl"
        }
    },
    "Ghast Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Ghast Tear", amount: 80 }],
            2: [{ item: "Ghast Tear", amount: 160 }],
            3: [{ item: "Ghast Tear", amount: 320 }],
            4: [{ item: "Ghast Tear", amount: 512 }],
            5: [{ item: "Enchanted Ghast Tear", amount: 8 }],
            6: [{ item: "Enchanted Ghast Tear", amount: 24 }],
            7: [{ item: "Enchanted Ghast Tear", amount: 64 }],
            8: [{ item: "Enchanted Ghast Tear", amount: 128 }],
            9: [{ item: "Enchanted Ghast Tear", amount: 256 }],
            10: [{ item: "Enchanted Ghast Tear", amount: 512 }],
            11: [{ item: "Enchanted Ghast Tear Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 32, // seconds
            itemsPerAction: 1,
            itemProduced: "Ghast Tear"
        }
    },
    "Slime Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Slimeball", amount: 80 }],
            2: [{ item: "Slimeball", amount: 160 }],
            3: [{ item: "Slimeball", amount: 320 }],
            4: [{ item: "Slimeball", amount: 512 }],
            5: [{ item: "Enchanted Slimeball", amount: 8 }],
            6: [{ item: "Enchanted Slimeball", amount: 24 }],
            7: [{ item: "Enchanted Slimeball", amount: 64 }],
            8: [{ item: "Enchanted Slimeball", amount: 128 }],
            9: [{ item: "Enchanted Slimeball", amount: 256 }],
            10: [{ item: "Enchanted Slimeball", amount: 512 }],
            11: [{ item: "Enchanted Slimeball Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 28, // seconds
            itemsPerAction: 1,
            itemProduced: "Slimeball"
        }
    },
    "Blaze Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Blaze Rod", amount: 80 }],
            2: [{ item: "Blaze Rod", amount: 160 }],
            3: [{ item: "Blaze Rod", amount: 320 }],
            4: [{ item: "Blaze Rod", amount: 512 }],
            5: [{ item: "Enchanted Blaze Powder", amount: 8 }],
            6: [{ item: "Enchanted Blaze Powder", amount: 24 }],
            7: [{ item: "Enchanted Blaze Powder", amount: 64 }],
            8: [{ item: "Enchanted Blaze Powder", amount: 128 }],
            9: [{ item: "Enchanted Blaze Powder", amount: 256 }],
            10: [{ item: "Enchanted Blaze Powder", amount: 512 }],
            11: [{ item: "Enchanted Blaze Powder Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 31, // seconds
            itemsPerAction: 1,
            itemProduced: "Blaze Rod"
        }
    },
    "Magma Cube Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Magma Cream", amount: 80 }],
            2: [{ item: "Magma Cream", amount: 160 }],
            3: [{ item: "Magma Cream", amount: 320 }],
            4: [{ item: "Magma Cream", amount: 512 }],
            5: [{ item: "Enchanted Magma Cream", amount: 8 }],
            6: [{ item: "Enchanted Magma Cream", amount: 24 }],
            7: [{ item: "Enchanted Magma Cream", amount: 64 }],
            8: [{ item: "Enchanted Magma Cream", amount: 128 }],
            9: [{ item: "Enchanted Magma Cream", amount: 256 }],
            10: [{ item: "Enchanted Magma Cream", amount: 512 }],
            11: [{ item: "Enchanted Magma Cream Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 29, // seconds
            itemsPerAction: 1,
            itemProduced: "Magma Cream"
        }
    },
    // Foraging Minions
    "Oak Minion": {
        type: "foraging",
        tool: "Wooden Axe",
        recipes: {
            1: [{ item: "Oak Wood", amount: 80 }],
            2: [{ item: "Oak Wood", amount: 160 }],
            3: [{ item: "Oak Wood", amount: 320 }],
            4: [{ item: "Oak Wood", amount: 512 }],
            5: [{ item: "Enchanted Oak Wood", amount: 8 }],
            6: [{ item: "Enchanted Oak Wood", amount: 24 }],
            7: [{ item: "Enchanted Oak Wood", amount: 64 }],
            8: [{ item: "Enchanted Oak Wood", amount: 128 }],
            9: [{ item: "Enchanted Oak Wood", amount: 256 }],
            10: [{ item: "Enchanted Oak Wood", amount: 512 }],
            11: [{ item: "Enchanted Oak Wood Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 24, // seconds
            itemsPerAction: 1,
            itemProduced: "Oak Wood"
        }
    },
    "Spruce Minion": {
        type: "foraging",
        tool: "Wooden Axe",
        recipes: {
            1: [{ item: "Spruce Wood", amount: 80 }],
            2: [{ item: "Spruce Wood", amount: 160 }],
            3: [{ item: "Spruce Wood", amount: 320 }],
            4: [{ item: "Spruce Wood", amount: 512 }],
            5: [{ item: "Enchanted Spruce Wood", amount: 8 }],
            6: [{ item: "Enchanted Spruce Wood", amount: 24 }],
            7: [{ item: "Enchanted Spruce Wood", amount: 64 }],
            8: [{ item: "Enchanted Spruce Wood", amount: 128 }],
            9: [{ item: "Enchanted Spruce Wood", amount: 256 }],
            10: [{ item: "Enchanted Spruce Wood", amount: 512 }],
            11: [{ item: "Enchanted Spruce Wood Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 25, // seconds
            itemsPerAction: 1,
            itemProduced: "Spruce Wood"
        }
    },
    "Birch Minion": {
        type: "foraging",
        tool: "Wooden Axe",
        recipes: {
            1: [{ item: "Birch Wood", amount: 80 }],
            2: [{ item: "Birch Wood", amount: 160 }],
            3: [{ item: "Birch Wood", amount: 320 }],
            4: [{ item: "Birch Wood", amount: 512 }],
            5: [{ item: "Enchanted Birch Wood", amount: 8 }],
            6: [{ item: "Enchanted Birch Wood", amount: 24 }],
            7: [{ item: "Enchanted Birch Wood", amount: 64 }],
            8: [{ item: "Enchanted Birch Wood", amount: 128 }],
            9: [{ item: "Enchanted Birch Wood", amount: 256 }],
            10: [{ item: "Enchanted Birch Wood", amount: 512 }],
            11: [{ item: "Enchanted Birch Wood Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 23, // seconds
            itemsPerAction: 1,
            itemProduced: "Birch Wood"
        }
    },
    "Dark Oak Minion": {
        type: "foraging",
        tool: "Wooden Axe",
        recipes: {
            1: [{ item: "Dark Oak Wood", amount: 80 }],
            2: [{ item: "Dark Oak Wood", amount: 160 }],
            3: [{ item: "Dark Oak Wood", amount: 320 }],
            4: [{ item: "Dark Oak Wood", amount: 512 }],
            5: [{ item: "Enchanted Dark Oak Wood", amount: 8 }],
            6: [{ item: "Enchanted Dark Oak Wood", amount: 24 }],
            7: [{ item: "Enchanted Dark Oak Wood", amount: 64 }],
            8: [{ item: "Enchanted Dark Oak Wood", amount: 128 }],
            9: [{ item: "Enchanted Dark Oak Wood", amount: 256 }],
            10: [{ item: "Enchanted Dark Oak Wood", amount: 512 }],
            11: [{ item: "Enchanted Dark Oak Wood Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 26, // seconds
            itemsPerAction: 1,
            itemProduced: "Dark Oak Wood"
        }
    },
    "Acacia Minion": {
        type: "foraging",
        tool: "Wooden Axe",
        recipes: {
            1: [{ item: "Acacia Wood", amount: 80 }],
            2: [{ item: "Acacia Wood", amount: 160 }],
            3: [{ item: "Acacia Wood", amount: 320 }],
            4: [{ item: "Acacia Wood", amount: 512 }],
            5: [{ item: "Enchanted Acacia Wood", amount: 8 }],
            6: [{ item: "Enchanted Acacia Wood", amount: 24 }],
            7: [{ item: "Enchanted Acacia Wood", amount: 64 }],
            8: [{ item: "Enchanted Acacia Wood", amount: 128 }],
            9: [{ item: "Enchanted Acacia Wood", amount: 256 }],
            10: [{ item: "Enchanted Acacia Wood", amount: 512 }],
            11: [{ item: "Enchanted Acacia Wood Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 24, // seconds
            itemsPerAction: 1,
            itemProduced: "Acacia Wood"
        }
    },
    "Jungle Minion": {
        type: "foraging",
        tool: "Wooden Axe",
        recipes: {
            1: [{ item: "Jungle Wood", amount: 80 }],
            2: [{ item: "Jungle Wood", amount: 160 }],
            3: [{ item: "Jungle Wood", amount: 320 }],
            4: [{ item: "Jungle Wood", amount: 512 }],
            5: [{ item: "Enchanted Jungle Wood", amount: 8 }],
            6: [{ item: "Enchanted Jungle Wood", amount: 24 }],
            7: [{ item: "Enchanted Jungle Wood", amount: 64 }],
            8: [{ item: "Enchanted Jungle Wood", amount: 128 }],
            9: [{ item: "Enchanted Jungle Wood", amount: 256 }],
            10: [{ item: "Enchanted Jungle Wood", amount: 512 }],
            11: [{ item: "Enchanted Jungle Wood Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 25, // seconds
            itemsPerAction: 1,
            itemProduced: "Jungle Wood"
        }
    },
    // Fishing Minions
    "Fishing Minion": {
        type: "fishing",
        tool: "Wooden Shovel",
        recipes: {
            1: [{ item: "Raw Fish", amount: 80 }],
            2: [{ item: "Raw Fish", amount: 160 }],
            3: [{ item: "Raw Fish", amount: 320 }],
            4: [{ item: "Raw Fish", amount: 512 }],
            5: [{ item: "Enchanted Raw Fish", amount: 8 }],
            6: [{ item: "Enchanted Raw Fish", amount: 24 }],
            7: [{ item: "Enchanted Raw Fish", amount: 64 }],
            8: [{ item: "Enchanted Raw Fish", amount: 128 }],
            9: [{ item: "Enchanted Raw Fish", amount: 256 }],
            10: [{ item: "Enchanted Raw Fish", amount: 512 }],
            11: [{ item: "Enchanted Raw Fish Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 33, // seconds
            itemsPerAction: 1,
            itemProduced: "Raw Fish"
        }
    },
    "Clay Minion": {
        type: "fishing",
        tool: "Wooden Shovel",
        recipes: {
            1: [{ item: "Clay", amount: 80 }],
            2: [{ item: "Clay", amount: 160 }],
            3: [{ item: "Clay", amount: 320 }],
            4: [{ item: "Clay", amount: 512 }],
            5: [{ item: "Enchanted Clay", amount: 8 }],
            6: [{ item: "Enchanted Clay", amount: 24 }],
            7: [{ item: "Enchanted Clay", amount: 64 }],
            8: [{ item: "Enchanted Clay", amount: 128 }],
            9: [{ item: "Enchanted Clay", amount: 256 }],
            10: [{ item: "Enchanted Clay", amount: 512 }],
            11: [{ item: "Enchanted Clay Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 20, // seconds
            itemsPerAction: 1,
            itemProduced: "Clay"
        }
    },
    // Slayer Minions
    "Revenant Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "Rotten Flesh", amount: 80 }],
            2: [{ item: "Rotten Flesh", amount: 160 }],
            3: [{ item: "Rotten Flesh", amount: 320 }],
            4: [{ item: "Rotten Flesh", amount: 512 }],
            5: [{ item: "Enchanted Rotten Flesh", amount: 8 }],
            6: [{ item: "Enchanted Rotten Flesh", amount: 24 }],
            7: [{ item: "Enchanted Rotten Flesh", amount: 64 }],
            8: [{ item: "Enchanted Rotten Flesh", amount: 128 }],
            9: [{ item: "Enchanted Rotten Flesh", amount: 256 }],
            10: [{ item: "Enchanted Rotten Flesh", amount: 512 }],
            11: [{ item: "Enchanted Rotten Flesh Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 35, // seconds
            itemsPerAction: 1,
            itemProduced: "Rotten Flesh"
        }
    },
    "Tarantula Minion": {
        type: "combat",
        tool: "Wooden Sword",
        recipes: {
            1: [{ item: "String", amount: 80 }],
            2: [{ item: "String", amount: 160 }],
            3: [{ item: "String", amount: 320 }],
            4: [{ item: "String", amount: 512 }],
            5: [{ item: "Enchanted String", amount: 8 }],
            6: [{ item: "Enchanted String", amount: 24 }],
            7: [{ item: "Enchanted String", amount: 64 }],
            8: [{ item: "Enchanted String", amount: 128 }],
            9: [{ item: "Enchanted String", amount: 256 }],
            10: [{ item: "Enchanted String", amount: 512 }],
            11: [{ item: "Enchanted String Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 34, // seconds
            itemsPerAction: 1,
            itemProduced: "String"
        }
    },
    // Special Minions
    "Flower Minion": {
        type: "farming",
        tool: "Wooden Hoe",
        recipes: {
            1: [{ item: "Dandelion", amount: 80 }],
            2: [{ item: "Dandelion", amount: 160 }],
            3: [{ item: "Dandelion", amount: 320 }],
            4: [{ item: "Dandelion", amount: 512 }],
            5: [{ item: "Enchanted Dandelion", amount: 8 }],
            6: [{ item: "Enchanted Dandelion", amount: 24 }],
            7: [{ item: "Enchanted Dandelion", amount: 64 }],
            8: [{ item: "Enchanted Dandelion", amount: 128 }],
            9: [{ item: "Enchanted Dandelion", amount: 256 }],
            10: [{ item: "Enchanted Dandelion", amount: 512 }],
            11: [{ item: "Enchanted Dandelion Block", amount: 8 }]
        },
        production: {
            timeBetweenActions: 30, // seconds
            itemsPerAction: 1,
            itemProduced: "Dandelion"
        }
    }
};

// Helper function to get all minion names
function getMinionNames() {
    return Object.keys(minionData);
}

// Helper function to get minion data
function getMinionData(minionName) {
    return minionData[minionName];
}

// Helper function to calculate cumulative materials needed to reach a tier
function getCumulativeMaterials(minionName, targetTier) {
    const minion = minionData[minionName];
    if (!minion) return null;

    const materials = {};
    
    for (let tier = 1; tier <= targetTier; tier++) {
        const recipe = minion.recipes[tier];
        if (recipe) {
            recipe.forEach(material => {
                if (!materials[material.item]) {
                    materials[material.item] = 0;
                }
                materials[material.item] += material.amount;
            });
        }
    }
    
    return materials;
}

