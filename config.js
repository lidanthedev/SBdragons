/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @SelectorProperty, @SliderProperty, @PercentSliderProperty, @NumberProperty, Color } from '../Vigilance';

@Vigilant("SBdragons", "SBdragons")
class Settings {
    @TextProperty({
        name: "DevCode",
        description: "Some codes will do something",
        category: "General",
        subcategory: "Category",
        placeholder: "NORMAL"
    })
    textInput = "NORMAL";
    
    //@ColorProperty({
    //    name: "Color Picker",
    //    description: "Pick a color!",
    //    category: "General",
    //    subcategory: "Category"
    //})
    //myColor = Color.BLUE;

    @ButtonProperty({
        name: "Edit HUD loctions",
        description: "Allows you to move all things in your HUD",
        category: "General",
        subcategory: "Category",
        placeholder: "Edit"
    })
    myButtonAction() {
        // console.log("wow i have a button?!?");
        ChatLib.command("sbdragonsgui", true);
    }
    @SwitchProperty({
        name: "Light Auction Timer",
        description: "Only works in skyblock",
        category: "Auction",
        subcategory: "Category"
    })
    Lightahtoggle = false;

    @SelectorProperty({
        name: 'Background',
        description: 'Select an option',
        category: 'Auction',
        subcategory: 'Category',
        options: ['none', 'per line', 'full'],
    })
    Lightahbackground = 1;

    @SwitchProperty({
        name: "Light Auction Now",
        description: "Only works in skyblock",
        category: "Auction",
        subcategory: "Category"
    })
    Lightahnow = false;

    @SwitchProperty({
        name: "Active",
        description: "Move your health",
        category: "Action Bar",
        subcategory: "Health"
    })
    Actionbar1a = false;
    //@SelectorProperty({
    //    name: 'Background',
    //    description: 'Select an option',
    //    category: 'Action Bar',
    //    subcategory: 'Health',
    //    options: ['none', 'per line', 'full'],
    //})
    //Actionbar1b = 0; // Stores index of option

    @SliderProperty({
        name: "X",
        description: "X Postion",
        category: "Action Bar",
        subcategory: "Health",
        min: 0,
        max: Renderer.screen.getWidth(),
    })
    Actionbar1x = 50;

    @SliderProperty({
        name: "Y",
        description: "Y Postion",
        category: "Action Bar",
        subcategory: "Health",
        min: 0,
        max: Renderer.screen.getHeight(),
    })
    Actionbar1y = 50;

    // 2
    @SwitchProperty({
        name: "Active",
        description: "Move your Defense",
        category: "Action Bar",
        subcategory: "Defense"
    })
    Actionbar2a = false;
    //@SelectorProperty({
    //    name: 'Background',
    //    description: 'Select an option',
    //    category: 'Action Bar',
    //    subcategory: 'Defense',
    //    options: ['none', 'per line', 'full'],
    //})
    //Actionbar2b = 0; // Stores index of option

    @SliderProperty({
        name: "X",
        description: "X Postion",
        category: "Action Bar",
        subcategory: "Defense",
        min: 0,
        max: Renderer.screen.getWidth(),
    })
    Actionbar2x = 50;

    @SliderProperty({
        name: "Y",
        description: "Y Postion",
        category: "Action Bar",
        subcategory: "Defense",
        min: 0,
        max: Renderer.screen.getHeight(),
    })
    Actionbar2y = 50;

    // 3
    @SwitchProperty({
        name: "Active",
        description: "Move your Mana",
        category: "Action Bar",
        subcategory: "Mana"
    })
    Actionbar3a = false;
    //@SelectorProperty({
    //    name: 'Background',
    //    description: 'Select an option',
    //    category: 'Action Bar',
    //    subcategory: 'Mana',
    //    options: ['none', 'per line', 'full'],
    //})
    //Actionbar3b = 0; // Stores index of option

    @SliderProperty({
        name: "X",
        description: "X Postion",
        category: "Action Bar",
        subcategory: "Mana",
        min: 0,
        max: Renderer.screen.getWidth(),
    })
    Actionbar3x = 50;

    @SliderProperty({
        name: "Y",
        description: "Y Postion",
        category: "Action Bar",
        subcategory: "Mana",
        min: 0,
        max: Renderer.screen.getHeight(),
    })
    Actionbar3y = 50;

    // 4
    @SwitchProperty({
        name: "Active",
        description: "Move your Mana",
        category: "Action Bar",
        subcategory: "FSB"
    })
    Actionbar4a = false;
    //@SelectorProperty({
    //    name: 'Background',
    //    description: 'Select an option',
    //    category: 'Action Bar',
    //    subcategory: 'FSB',
    //    options: ['none', 'per line', 'full'],
    //})
    Actionbar4b = 0; // Stores index of option

    @SliderProperty({
        name: "X",
        description: "X Postion",
        category: "Action Bar",
        subcategory: "FSB",
        min: 0,
        max: Renderer.screen.getWidth(),
    })
    Actionbar4x = 50;

    @SliderProperty({
        name: "Y",
        description: "Y Postion",
        category: "Action Bar",
        subcategory: "FSB",
        min: 0,
        max: Renderer.screen.getHeight(),
    })
    Actionbar4y = 50;

    // 5
    @SwitchProperty({
        name: "Active",
        description: "Move your Mana",
        category: "Action Bar",
        subcategory: "Secrets"
    })
    Actionbar5a = false;
    //@SelectorProperty({
    //    name: 'Background',
    //    description: 'Select an option',
    //    category: 'Action Bar',
    //    subcategory: 'Secrets',
    //    options: ['none', 'per line', 'full'],
    //})
    //Actionbar5b = 0; // Stores index of option

    @SliderProperty({
        name: "X",
        description: "X Postion",
        category: "Action Bar",
        subcategory: "Secrets",
        min: 0,
        max: Renderer.screen.getWidth(),
    })
    Actionbar5x = 50;

    @SliderProperty({
        name: "Y",
        description: "Y Postion",
        category: "Action Bar",
        subcategory: "Secrets",
        min: 0,
        max: Renderer.screen.getHeight(),
    })
    Actionbar5y = 50;

    // 6
    @SwitchProperty({
        name: "Active",
        description: "Move your Xp Gain",
        category: "Action Bar",
        subcategory: "Xp Gain"
    })
    Actionbar6a = false;

    @SliderProperty({
        name: "X",
        description: "X Postion",
        category: "Action Bar",
        subcategory: "Xp Gain",
        min: 0,
        max: Renderer.screen.getWidth(),
    })
    Actionbar6x = 60;

    @SliderProperty({
        name: "Y",
        description: "Y Postion",
        category: "Action Bar",
        subcategory: "Xp Gain",
        min: 0,
        max: Renderer.screen.getHeight(),
    })
    Actionbar6y = 100;

    //@SliderProperty({
    //    name: "Y",
    //    description: "Y Postion",
    //    category: "Action Bar",
    //    subcategory: "Xp Gain",
    //    min: 0,
    //    max: 1000,
    //})
    //Actionbar6y = 100;

    @SliderProperty({
        name: "Time",
        description: "Time it stays on your screen in ticks [tick = 50ms]",
        category: "Action Bar",
        subcategory: "Xp Gain",
        min: 1,
        max: 100,
    })
    Actionbar6t = 100;

    @SwitchProperty({
        name: "Active",
        description: "Move your Pet",
        category: "QOL",
        subcategory: "Pets"
    })
    petda = false;

    @SliderProperty({
        name: "X",
        description: "X Postion",
        category: "QOL",
        subcategory: "Pets",
        min: 0,
        max: Renderer.screen.getWidth(),
    })
    petdx = 50;

    @SliderProperty({
        name: "Y",
        description: "Y Postion",
        category: "QOL",
        subcategory: "Pets",
        min: 0,
        max: Renderer.screen.getHeight(),
    })
    petdy = 50;

    @SwitchProperty({
        name: "Active",
        description: "Display Your Rare Drops",
        category: "LOOT",
        subcategory: "Display"
    })
    dropda = false;

    @SliderProperty({
        name: "X",
        description: "X Postion",
        category: "LOOT",
        subcategory: "Display",
        min: 0,
        max: Renderer.screen.getWidth(),
    })
    dropdx = 50;

    @SliderProperty({
        name: "Y",
        description: "Y Postion",
        category: "LOOT",
        subcategory: "Display",
        min: 0,
        max: Renderer.screen.getHeight()
    })
    dropdy = 50;

    @SwitchProperty({
        name: "Hide Title",
        description: "Hide The RARE DROPS! title",
        category: "LOOT",
        subcategory: "Display"
    })
    dropdht = false;

    @SwitchProperty({
        name: "Hide Numbers",
        description: "Hide The id numbers [Warning! if you do that you will have a hard time using the /sbdragonsdrops command]",
        category: "LOOT",
        subcategory: "Display"
    })
    dropdhn = false;

    //@SwitchProperty({
    //    name: "Active",
    //    description: "Display Your Rare Drops",
    //    category: "Griffin",
    //    subcategory: "Hp Display"
    //})
    //griffina = false;

    //@SliderProperty({
    //    name: "X",
    //    description: "X Postion",
    //    category: "Griffin",
    //    subcategory: "Hp Display",
    //    min: 0,
    //    max: Renderer.screen.getWidth(),
    //})
    //griffinx = 50;

    //@SliderProperty({
    //    name: "Y",
    //    description: "Y Postion",
    //    category: "Griffin",
    //    subcategory: "Hp Display",
    //    min: 0,
    //    max: Renderer.screen.getHeight()
    //})
    //griffiny = 50;

    @SwitchProperty({
        name: "Glowing Block",
        description: "Makes the block you need to break glow",
        category: "Griffin",
        subcategory: "Burrow"
    })
    griffinburrowesp = false;

    @SwitchProperty({
        name: "Name Waypoint",
        description: "Makes a waypoint at the block you need to break",
        category: "Griffin",
        subcategory: "Burrow"
    })
    griffinburrowwaypoint = false;

    @SwitchProperty({
        name: "Beacon Waypoint",
        description: "Makes a beacon waypoint at the block you need to break",
        category: "Griffin",
        subcategory: "Burrow"
    })
    griffinwaypoint = false;

    @SwitchProperty({
        name: "Glowing",
        description: "Makes the griffin mobs glow in yellow",
        category: "Griffin",
        subcategory: "Mobs"
    })
    griffinmobglowing = false;

    @ColorProperty({
        name: "Glowing Color",
        description: "Pick a color!",
        category: "Griffin",
        subcategory: "Mobs"
    })
    griffinmobcolor = Color.YELLOW;

    @ColorProperty({
        name: "Glowing Block Color",
        description: "Pick a color!",
        category: "Griffin",
        subcategory: "Burrow"
    })
    griffincolor = Color.YELLOW;

    @SelectorProperty({
        name: 'Glowing Block Style',
        description: 'Requires Glowing Block to be active',
        category: "Griffin",
        subcategory: "Burrow",
        options: ['Outline', 'Full', 'Baritone'],
    })
    griffinespbox = 0;

    //@PercentSliderProperty({
    //    name: 'Percent Slider',
    //    description: 'Select a percent',
    //    category: 'General',
    //    subcategory: 'eeeeee',
    //})
    //percentSlider = 0.0;

    @SelectorProperty({
        name: 'Alert before Light Action',
        description: 'Requires Light Auction Timer to be active',
        category: 'Auction',
        subcategory: 'Category',
        options: ['1m', '5m', '10m', "none"],
    })
    Lightahaleartbefor = 1;

    @SwitchProperty({
        name: "Players",
        description: "Make a box around Players",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingplayers = false;

    @ColorProperty({
        name: "Players Color",
        description: "Pick a color!",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingplayerscolor = Color.WHITE;

    @SwitchProperty({
        name: "NPCS",
        description: "Make a box around NPCS",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingnpcs = false;

    @ColorProperty({
        name: "NPCs Color",
        description: "Pick a color!",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingnpcscolor = Color.WHITE;

    @SwitchProperty({
        name: "Items",
        description: "Make a box around Items",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingitems = false;

    @ColorProperty({
        name: "Items Color",
        description: "Pick a color!",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingitemscolor = Color.CYAN;
    
    @SwitchProperty({
        name: "Dragons",
        description: "Make a box around Dragons",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingdragons = false;

    @ColorProperty({
        name: "Dragons Color",
        description: "Pick a color!",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingdragonscolor = Color.WHITE;

    @SwitchProperty({
        name: "Withers",
        description: "Make a box around Withers",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingwithers = false;

    @ColorProperty({
        name: "Withers Color",
        description: "Pick a color!",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingwitherscolor = Color.WHITE;

    @SwitchProperty({
        name: "Very Ancient Skeleton",
        description: "Make a box around Very Ancient Skeleton",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingveryancient = false;

    @ColorProperty({
        name: "Very Ancient Skeletons Color",
        description: "Pick a color!",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingveryancientcolor = Color.RED;

    @SwitchProperty({
        name: "Iron Golem",
        description: "Make a box around Iron Golem",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingirongolem = false;

    @ColorProperty({
        name: "Iron Golems Color",
        description: "Pick a color!",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingirongolemcolor = Color.WHITE;

    @SwitchProperty({
        name: "Ender Gaurds",
        description: "Make a box around Ender Guards",
        category: "Glowing",
        subcategory: "Entities"
    })
    colorenderguards = false;

    @ColorProperty({
        name: "Ender Guards Color",
        description: "Pick a color!",
        category: "Glowing",
        subcategory: "Entities"
    })
    enderguardscolor = Color.MAGENTA;

    @SwitchProperty({
        name: "Guys",
        description: "Make a box around Guys in dungeons",
        category: "Glowing",
        subcategory: "Entities"
    })
    glowingguys = false;

    @SwitchProperty({
        name: "Hide Players",
        description: "Hides only all players will keep npcs",
        category: "Glowing",
        subcategory: "Entities"
    })
    hideplayers = false;

    //@ButtonProperty({
    //    name: "Toggle Hide Players?",
    //    description: "Hides only all players will keep npcs",
    //    category: "Glowing",
    //    subcategory: "Entities",
    //    placeholder: "Toggle"
    //})
    //hideplayersbutton() {
    //    // console.log("wow i have a button?!?");
    //    ChatLib.command("hideplayers", true);
    //}

    @SwitchProperty({
        name: "Blaze",
        description: "Slove the blaze puzzle and show what you need to hit",
        category: "Dungeons",
        subcategory: "Solvers"
    })
    dungeonsolverblaze = false;

    @SwitchProperty({
        name: "Terminals",
        description: "Slove the Terminals in dungeon f7",
        category: "Dungeons",
        subcategory: "Solvers"
    })
    dungeonsolverf7 = false;

    @SwitchProperty({
        name: "Health Notify",
        description: "Notifies when someone is low so the healer can use revive ability to fully heal them",
        category: "Dungeons",
        subcategory: "Helpers"
    })
    dungeonhealthnotify = false;

    @SwitchProperty({
        name: "Secret Counter",
        description: "Counts how many secrets each player got in the end of the dungeon",
        category: "Dungeons",
        subcategory: "Helpers"
    })
    dungeonsecretcounter = false;

    @SwitchProperty({
        name: "Death Counter",
        description: "Counts how many deaths each player got",
        category: "Dungeons",
        subcategory: "Helpers"
    })
    dungeondeathcounter = false;

    @SwitchProperty({
        name: "Waypoints",
        description: "Waypoints",
        category: "Dungeons",
        subcategory: "Helpers"
    })
    dungeonwaypoints = false;

    @SwitchProperty({
        name: "Auto Secret Waypoints [BETA]",
        description: "Automatically puts waypoints near secrets you or your teammates found",
        category: "Dungeons",
        subcategory: "Helpers"
    })
    AutoWaypoints = false;

    @SwitchProperty({
        name: "Watcher Ready",
        description: "When Watcher Ready",
        category: "Dungeons",
        subcategory: "Helpers"
    })
    dungeonwatcher = false;

    @SwitchProperty({
        name: "Teleport Names",
        description: "Show name below head",
        category: "Dungeons",
        subcategory: "Helpers"
    })
    dungeontpnames = false;

    @SwitchProperty({
        name: "Revive Stone Names",
        description: "Show name below head",
        category: "Dungeons",
        subcategory: "Helpers"
    })
    dungeonrevstone = false;

    @SwitchProperty({
        name: "3 Scammers",
        description: "Solve the 3 Scammers puzzle and show who has the buff",
        category: "Dungeons",
        subcategory: "Solvers"
    })
    dungeonsolverscammers = false;

    @SwitchProperty({
        name: "3 Scammers",
        description: "Solve the 3 Scammers puzzle and show who has the buff",
        category: "Dungeons",
        subcategory: "Solvers"
    })
    dungeonsolverscammers = false;

    @SwitchProperty({
        name: "Ice Puzzle",
        description: "Solve Ice Puzzle with endermite",
        category: "Dungeons",
        subcategory: "Solvers"
    })
    dungeonice = false;

    @SwitchProperty({
        name: "No Sword Block",
        description: "Disables the sword block animation and doesn't slow you [only works on tryhard]",
        category: "QOL",
        subcategory: "Backport"
    })
    antiswordblock = false

    @SwitchProperty({
        name: "NEW tabcomplete in normal chat",
        description: "Backports the tabcomplete from 1.13 to 1.8",
        category: "QOL",
        subcategory: "Chat"
    })
    chattabnormal = false;

    @SwitchProperty({
        name: "Chat Inv",
        description: "Chat in your inventory [may be banable in other servers]",
        category: "QOL",
        subcategory: "Chat"
    })
    chatinv = false;

    @SwitchProperty({
        name: "Chat Inv Anywhere",
        description: "Puts the chat box in any GUI and not just inventories [not recommended]",
        category: "QOL",
        subcategory: "Chat"
    })
    chatinvany = false;

    @SwitchProperty({
        name: "NEW tabcomplete in Chat Inv",
        description: "Backports the tabcomplete from 1.13 to 1.8",
        category: "QOL",
        subcategory: "Chat"
    })
    chattabinv = false;

    @SwitchProperty({
        name: "Clear Chat inv",
        description: "Clears Chat inv when opening gui",
        category: "QOL",
        subcategory: "Chat"
    })
    chatinvclear = false;

    @SwitchProperty({
        name: "Chat Inv Connect",
        description: "Run the chatinv command when you login to the server",
        category: "QOL",
        subcategory: "Chat"
    })
    chatinvconnect = false

    @SwitchProperty({
        name: "Render Mob Names",
        description: "Render Mob Name",
        category: "QOL",
        subcategory: "Render Mob"
    })
    rendermobname = false;

    @SwitchProperty({
        name: "Render Mob Names Background",
        description: "Render Mob Name with Background",
        category: "QOL",
        subcategory: "Render Mob"
    })
    rendermobbackground = false;

    //@SwitchProperty({
    //    name: "Show Enchant Level",
    //    description: "Shows Enchant Level of a book in item stack",
    //    category: "QOL",
    //    subcategory: "Stack"
    //})
    //enchantitemstack = false;

    @SwitchProperty({
        name: "Burp Counter",
        description: "Shows How much you clicked the Burp guys in Deeper Mines",
        category: "QOL",
        subcategory: "Burp"
    })
    burpcount = false;

    @SwitchProperty({
        name: "Item Rarity [BETA]",
        description: "Show item rarity in background [WARNING ITS VERY ERRORY]",
        category: "QOL",
        subcategory: "Item Rarity"
    })
    itemrarity = false;

    @SliderProperty({
        name: "Item Rarity Opacity",
        description: "set the item rarity Opacity",
        category: "QOL",
        subcategory: "Item Rarity",
        min: 0,
        max: 255,
    })
    itemrarityalpha = 100;

    @SwitchProperty({
        name: "Wither Shield Cooldown",
        description: "Show Wither Shield Cooldown",
        category: "QOL",
        subcategory: "Wither Shield"
    })
    withershieldcd = false;

    @SliderProperty({
        name: "X",
        description: "X Postion",
        category: "QOL",
        subcategory: "Wither Shield",
        min: 0,
        max: Renderer.screen.getWidth(),
    })
    withershieldx = 50;

    @SliderProperty({
        name: "Y",
        description: "Y Postion",
        category: "QOL",
        subcategory: "Wither Shield",
        min: 0,
        max: Renderer.screen.getHeight()
    })
    withershieldy = 50;

    @SwitchProperty({
        name: "Wither Shield Ready",
        description: "Show If Wither Shield Ready",
        category: "QOL",
        subcategory: "Wither Shield"
    })
    withershieldready = false;

    @SwitchProperty({
        name: "Glowing Boss",
        description: "Makes your slayer glow",
        category: "Slayer",
        subcategory: "Glow"
    })
    slayerglowboss = false;

    @ColorProperty({
        name: "Glowing Boss Color",
        description: "Pick a color!",
        category: "Slayer",
        subcategory: "Glow"
    })
    slayerglowbosscolor = Color.RED;

    @SwitchProperty({
        name: "Glowing MiniBoss",
        description: "Makes Miniboss glow",
        category: "Slayer",
        subcategory: "Glow"
    })
    slayerglowminiboss = false;

    @ColorProperty({
        name: "Glowing MiniBoss Color",
        description: "Pick a color!",
        category: "Slayer",
        subcategory: "Glow"
    })
    slayerglowminibosscolor = Color.RED;

    @SwitchProperty({
        name: "Alert when boss killed",
        description: "",
        category: "Slayer",
        subcategory: "Alert"
    })
    slayeralertslain = false;

    @SwitchProperty({
        name: "Alert when boss spawns",
        description: "",
        category: "Slayer",
        subcategory: "Alert"
    })
    slayeralertspawn = false;

    @SwitchProperty({
        name: "Alert when miniboss alive",
        description: "",
        category: "Slayer",
        subcategory: "Alert"
    })
    slayeralertminiboss = false;

    @SwitchProperty({
        name: "Auto open maddox when slain",
        description: "Automaticly clicks maddox batphone if its in your hotbar",
        category: "Slayer",
        subcategory: "Auto"
    })
    slayerautomaddox = false;

    @SwitchProperty({
        name: "Shortbow fix",
        description: "Fixes Some visual bugs with Terminator and Juju",
        category: "Slayer",
        subcategory: "Fix"
    })
    slayerfixshortbow = false;

    @SwitchProperty({
        name: "Replacer",
        description: "Replaces stuff in chat messages do /replacer",
        category: "QOL",
        subcategory: "Chat"
    })
    replacer = false;

    @SwitchProperty({
        name: "Fairy Souls",
        description: "Makes a Box Around Fairy Souls",
        category: "ESP",
        subcategory: "Fairy Souls"
    })
    esp_fairy_active = false;

    @ColorProperty({
        name: "Color",
        description: "Pick a color!",
        category: "ESP",
        subcategory: "Fairy Souls"
    })
    esp_fairy_color = Color.MAGENTA;

    @SwitchProperty({
        name: "Wither Essence",
        description: "Makes a Box Around Wither Essence",
        category: "ESP",
        subcategory: "Wither Essence"
    })
    esp_witheres_active = false;

    @ColorProperty({
        name: "Color",
        description: "Pick a color!",
        category: "ESP",
        subcategory: "Wither Essence"
    })
    esp_witheres_color = Color.BLACK;

    @SwitchProperty({
        name: "Chests",
        description: "Makes a Box Around Chests in dungeons",
        category: "ESP",
        subcategory: "Chests"
    })
    esp_chest_active = false;

    @ColorProperty({
        name: "Color",
        description: "Pick a color!",
        category: "ESP",
        subcategory: "Chests"
    })
    esp_chest_color = Color.ORANGE;

    //@SwitchProperty({
    //    name: "Update 0.0.1",
    //    description: "Blaze Solver, Health notify, glowing",
    //    category: "Updates",
    //    subcategory: "Disable"
    //})
    //disableupdate001 = false;

    //@SwitchProperty({
    //    name: "Update 0.0.2",
    //    description: "Light ah, action bar, solvers, counters",
    //    category: "Updates",
    //    subcategory: "Disable"
    //})
    //disableupdate002 = false;

    //@SwitchProperty({
    //    name: "Update 0.0.3",
    //    description: "QOL, chatinv, backported tab, waypoints",
    //    category: "Updates",
    //    subcategory: "Disable"
    //})
    //disableupdate003 = false;

    @SwitchProperty({
        name: "Auto Updater [BETA]",
        description: "Automaticly Updates The Mod For You Using Pastebin",
        category: "Updates",
        subcategory: "Auto"
    })
    autoupdater = true;

    @SwitchProperty({
        name: "Auto Updater Reload [BETA]",
        description: "Automaticly Reloads The Mod After Updating",
        category: "Updates",
        subcategory: "Auto"
    })
    autoupdaterreload = true;

    waypointsloc = [];

    @SwitchProperty({
        name: "dragged",
        description: "Disables dragged listener",
        category: "Performance",
        subcategory: "5"
    })
    perf_dragged = false;

    @SwitchProperty({
        name: "tick",
        description: "Disables tick listener",
        category: "Performance",
        subcategory: "2"
    })
    perf_tick = false;

    @SwitchProperty({
        name: "actionbar",
        description: "Disables actionbar listener",
        category: "Performance",
        subcategory: "4"
    })
    perf_actionbar = false;

    @SwitchProperty({
        name: "chat",
        description: "Disables chat listener",
        category: "Performance",
        subcategory: "3"
    })
    perf_chat = false;

    @SwitchProperty({
        name: "step",
        description: "Disables step listener",
        category: "Performance",
        subcategory: "5"
    })
    perf_step = false;

    @SwitchProperty({
        name: "renderWorld",
        description: "Disables renderWorld listener",
        category: "Performance",
        subcategory: "1"
    })
    perf_renderWorld = false;

    @SwitchProperty({
        name: "renderEntity",
        description: "Disables renderEntity listener",
        category: "Performance",
        subcategory: "1"
    })
    perf_renderEntity = false;

    @SwitchProperty({
        name: "postGuiRender",
        description: "Disables postGuiRender listener",
        category: "Performance",
        subcategory: "3"
    })
    perf_postGuiRender = false;

    @SwitchProperty({
        name: "renderOverlay",
        description: "Disables renderOverlay listener [displays doesn't count]",
        category: "Performance",
        subcategory: "3"
    })
    perf_renderOverlay = false;

    @SwitchProperty({
        name: "PlayerInteract",
        description: "Disables PlayerInteract listener",
        category: "Performance",
        subcategory: "3"
    })
    perf_PlayerInteract = false;

    @SwitchProperty({
        name: "packetSent",
        description: "Disables packetSent listener",
        category: "Performance",
        subcategory: "3"
    })
    perf_packetSent = false;

    @SwitchProperty({
        name: "PacketReceived",
        description: "Disables PacketReceived listener",
        category: "Performance",
        subcategory: "3"
    })
    perf_PacketReceived = false;

    @SwitchProperty({
        name: "guiKey",
        description: "Disables guiKey listener",
        category: "Performance",
        subcategory: "3"
    })
    perf_guiKey = false;

    @SwitchProperty({
        name: "GuiMouseClick",
        description: "Disables GuiMouseClick listener",
        category: "Performance",
        subcategory: "4"
    })
    perf_GuiMouseClick = false;

    @SwitchProperty({
        name: "guiOpened",
        description: "Disables guiOpened listener",
        category: "Performance",
        subcategory: "4"
    })
    perf_guiOpened = false;

    @SwitchProperty({
        name: "soundPlay",
        description: "Disables soundPlay listener",
        category: "Performance",
        subcategory: "4"
    })
    perf_soundPlay = false;

    constructor() {
        this.initialize(this);
        // this.registerListener("textInput", newText => {
        //     console.log(`Text changed to ${newText}`);
        //     //if (newText == "HIDELOC") {
        //     //    console.log(`hide!`);
        //     //    this.hideProperty("myButtonAction");
        //     //}
        //     //else {
        //     //    console.log(`show!`);
        //     //    this.showProperty("myButtonAction");
        //     //}
        // });
        this.setCategoryDescription("General", "The Skyblock Dragons Mod")
        this.setCategoryDescription("Performance", "This Menu Allows to disable some listeners and may improve Performance \n This is advanced features only and bugs with them will NOT get fixed \n The Numbers mean how much your Performance will go up low number means more boost if you disable")
        this.setSubcategoryDescription("Updates", "Auto", "Auto Updater [BETA]")
        this.setSubcategoryDescription("General", "Category", "Move HUD Locations")
        //this.registerListener("chatinv", value => {
        //    console.log(`Disable Update ${value}`);
        //    if (!value) {
        //        console.log(`Disable Update Turned to ${value}`);
        //        this.hideProperty("chatinvany");
        //    }
        //});
        // this.addDependency("chatinvany", "chatinv");
        // this.hideProperty("textInput");
        

    }
}

export default new Settings;