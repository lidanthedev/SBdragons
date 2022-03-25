/// <reference types="../CTAutocomplete-2.0.4" />
/// <reference lib="es2015" />

import Settings from "./config";
import { drawBox } from "./features/betterGlowingEffect";
import { Color } from "Vigilance";
import FileUtilities from "../FileUtilities/main";
import RenderLib from "../RenderLib/index.js";
 //import {
	// Window,
	// UIContainer, UIBlock, UIRoundedRectangle, UICircle, UIPoint, UIShape, UIText, UIWrappedText, UITextInput, UIImage, ScrollComponent,
	// PixelConstraint, CenterConstraint, SiblingConstraint, CramSiblingConstraint,
	// RelativeConstraint, AspectConstraint, TextAspectConstraint, ImageAspectConstraint, FillConstraint, ChildBasedSizeConstraint, ChildBasedMaxSizeConstraint, ScaledTextConstraint,
	// AdditiveConstraint, SubtractiveConstraint, MinConstraint, MaxConstraint,
	// ConstantColorConstraint, RainbowColorConstraint,
	// ScissorEffect, StencilEffect,
	// Animations
 //} from "Elementa/index";
import TextBox from 'SBdragons/EGUI.js';
import PogObject from "PogData";
// import { registerForge, unregisterForge } from "../ForgeEvents/exports.js"
// import { registerForge, unregisterForge } from "../ForgeEvents/exports.js"

// The event should be a JavaClass that extends Forge's base Event
//const event = Java.type("net.minecraftforge.client.event.GuiOpenEvent");

//const callback = e => console.log("Event triggered");

//const inst = registerForge(event, callback);


const Saved = new PogObject("SBdragons", {
	ReplacerState: true,
	ReplacerArr: {},
	CilentCommandList: ["/sbdragons", "/neu", "/sba", "/dsm", "/sbc", "/sbe", "/dg", "/patcher", "/skytiles", "/ct load", "/ct delete", "/ct import", "/ct modules", "/ct console js", "/ct settings"],
	AutoWaypoints: {},
	RareDrops: {},
});
Saved.autosave(5);
const C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
const C14PacketTabComplete = Java.type("net.minecraft.network.play.client.C14PacketTabComplete");
const GuiChat = Java.type("net.minecraft.client.gui.GuiChat");
const MGUI = Java.type("net.minecraft.client.gui");
const ClientCommandHandler = Java.type("net.minecraftforge.client.ClientCommandHandler");
const GuiTextField = Java.type("net.minecraft.client.gui.GuiTextField");
const Minecraft = Java.type("net.minecraft.client.Minecraft");
const Mouse = Java.type('org.lwjgl.input.Mouse');
// const GlStateManager = Java.type("net.minecraft.client.renderer.GlStateManager");
// const GL11 = Java.type("org.lwjgl.opengl.GL11");
const MCTessellator = Java.type("net.minecraft.client.renderer.Tessellator");
const DefaultVertexFormats = Java.type("net.minecraft.client.renderer.vertex.DefaultVertexFormats");
const Toolkit = Java.type("java.awt.Toolkit");
const DataFlavor = Java.type("java.awt.datatransfer.DataFlavor");
const intType = Java.type("java.lang.Integer");
// const BlockPos = Java.type("net.minecraft.util.BlockPos");
const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
var displays = {};
// import com.chattriggers.ctjs.engine.module.ModuleManager;
//var esprima = require('esprima');
//var scamscam = 'const scamanswer = 42';
//esprima.tokenize(scamscam);
//esprima.parse(scamscam);
//console.log(`${scamanswer}`);
// const ModuleManager = Kotlin.type("com.chattriggers.ctjs.engine.module.ModuleManager");
// import { register } from "../SettingsManager/Settings";
// import * as Setting from "../SettingsManager/Settings";

// to open the config gui use the "openGUI" function
register("command", () => Settings.openGUI()).setName("sbdragons");
register("command", () => Settings.openGUI()).setName("sbd");

// to read/write config values, simply read/write them like normal js values
//Settings.myColor = Color.RED;
//console.log(Settings.textInput)

//var error = "";
var guilocedit = new Gui();
var moving = "";
var playeractionbar = [];
var playeractionbarxpgain = "";
var playeractionbarxpgaintimer = 0;

//gui.registerKeyTyped(myGuiKeyTypedFunction);
guilocedit.registerDraw(myGuiRenderFunction);
guilocedit.registerClicked(myGuiClickedFunction);
// gui.registerMouseDragged(myGuiDragFunction);

//var renderSquareX = 50;
//var renderSquareY = 50;

function myGuiRenderFunction(mouseX, mouseY, partialTicks) {
	// Renderer.drawPlayer(Player, 10, 50, true);
	Renderer.drawRect(0x40000000, 0, 0, Renderer.screen.getWidth(), Renderer.screen.getHeight());
	for (var property in displays) {
		var val = displays[property];
		if (val.getShouldRender) {
			Renderer.drawRect(Renderer.color(255, 255, 255, 100), val.getRenderX() - 1, val.getRenderY() - 1, displays[`${property}`].getWidth() + 2, 10 * val.getLines().length);
        }
		// val.ninput = val.input;
		//if (val.name != "chat" && val.show) {
		//	val.Draw()
		//}
	}

	//if (Settings.Lightahtoggle) {
	//	Renderer.drawRect(Renderer.color(255, 255, 255, 100), renderDisplayX - 1, renderDisplayY - 1, displays[`LightahDisplay`].getWidth() + 2, 20);
	//}
	//if (Settings.Actionbar1a) {
	//	Renderer.drawRect(Renderer.color(255, 255, 255, 100), Settings.Actionbar1x - 1, Settings.Actionbar1y - 1, displays[`actionbardisplays1`].getWidth() + 2, 10);
	//}
	//if (Settings.Actionbar2a) {
	//	Renderer.drawRect(Renderer.color(255, 255, 255, 100), Settings.Actionbar2x - 1, Settings.Actionbar2y - 1, displays[`actionbardisplays2`].getWidth() + 2, 10);
	//}
	//if (Settings.Actionbar3a) {
	//	Renderer.drawRect(Renderer.color(255, 255, 255, 100), Settings.Actionbar3x - 1, Settings.Actionbar3y - 1, displays[`actionbardisplays3`].getWidth() + 2, 10);
	//}
	//if (Settings.Actionbar4a) {
	//	Renderer.drawRect(Renderer.color(255, 255, 255, 100), Settings.Actionbar4x - 1, Settings.Actionbar4y - 1, displays[`actionbardisplays4`].getWidth() + 2, 10);
	//}
	//if (Settings.Actionbar5a) {
	//	Renderer.drawRect(Renderer.color(255, 255, 255, 100), Settings.Actionbar5x - 1, Settings.Actionbar5y - 1, displays[`actionbardisplays5`].getWidth() + 2, 10);
	//}
	//if (Settings.Actionbar6a) {
	//	Renderer.drawRect(Renderer.color(255, 255, 255, 100), Settings.Actionbar6x - 1, Settings.Actionbar6y - 1, displays[`actionbardisplays6`].getWidth() + 2, 10);
	//}
	//if (Settings.petda) {
	//	Renderer.drawRect(Renderer.color(255, 255, 255, 100), Settings.petdx - 1, Settings.petdy - 1, displays[`petdisplay`].getWidth() + 2, 10);
	//}
	
    // Renderer.scale(1.5, 1.5)
    // Renderer.drawString("CLICK FOR FREE MONEY", renderSquareX, renderSquareY + 50);
    // Renderer.scale(1, 1)
}

function myGuiClickedFunction(mouseX, mouseY, button) {
	moving = "";
	//ChatLib.chat("now moving from x:" + movingX + " y:" + movingY);
	if (Settings.Lightahtoggle) {
		if (mouseX > renderDisplayX && mouseX < renderDisplayX + displays[`LightahDisplay`].getWidth() && mouseY > renderDisplayY && mouseY < renderDisplayY + 20) {
			// ChatLib.chat(displays[`LightahDisplay`].getHeight())
			ChatLib.chat("now moving light ah display");
			moving = "displays[`LightahDisplay`]";
		}
	}
	if (Settings.Actionbar1a) {
		// ChatLib.chat("health display active " + Settings.Actionbar1x + " ");
		if (mouseX > Settings.Actionbar1x && mouseX < Settings.Actionbar1x + displays[`actionbardisplays1`].getWidth() && mouseY > Settings.Actionbar1y && mouseY < Settings.Actionbar1y + 10) {
			// ChatLib.chat(displays[`LightahDisplay`].getHeight())
			ChatLib.chat("now moving health display");
			moving = "healthdisplay";
		}
	}
	if (Settings.Actionbar2a) {
		// ChatLib.chat("health display active " + Settings.Actionbar2x + " ");
		if (mouseX > Settings.Actionbar2x && mouseX < Settings.Actionbar2x + displays[`actionbardisplays2`].getWidth() && mouseY > Settings.Actionbar2y && mouseY < Settings.Actionbar2y + 10) {
			// ChatLib.chat(displays[`LightahDisplay`].getHeight())
			ChatLib.chat("now moving defense display");
			moving = "defensedisplay";
		}
	}
	if (Settings.Actionbar3a) {
		// ChatLib.chat("health display active " + Settings.Actionbar3x + " ");
		if (mouseX > Settings.Actionbar3x && mouseX < Settings.Actionbar3x + displays[`actionbardisplays3`].getWidth() && mouseY > Settings.Actionbar3y && mouseY < Settings.Actionbar3y + 10) {
			// ChatLib.chat(displays[`LightahDisplay`].getHeight())
			ChatLib.chat("now moving defense display");
			moving = "manadisplay";
		}
	}
	if (Settings.Actionbar4a) {
		// ChatLib.chat("health display active " + Settings.Actionbar4x + " ");
		if (mouseX > Settings.Actionbar4x && mouseX < Settings.Actionbar4x + displays[`actionbardisplays4`].getWidth() && mouseY > Settings.Actionbar4y && mouseY < Settings.Actionbar4y + 10) {
			// ChatLib.chat(displays[`LightahDisplay`].getHeight())
			ChatLib.chat("now moving fsb display");
			moving = "fsbdisplay";
		}
	}
	if (Settings.Actionbar5a) {
		// ChatLib.chat("health display active " + Settings.Actionbar5x + " ");
		if (mouseX > Settings.Actionbar5x && mouseX < Settings.Actionbar5x + displays[`actionbardisplays5`].getWidth() && mouseY > Settings.Actionbar5y && mouseY < Settings.Actionbar5y + 10) {
			// ChatLib.chat(displays[`LightahDisplay`].getHeight())
			ChatLib.chat("now moving secrets display");
			moving = "secretdisplay";
		}
	}
	if (Settings.Actionbar6a) {
		// ChatLib.chat("health display active " + Settings.Actionbar6x + " ");
		if (mouseX > Settings.Actionbar6x && mouseX < Settings.Actionbar6x + displays[`actionbardisplays6`].getWidth() + 2 && mouseY > Settings.Actionbar6y && mouseY < Settings.Actionbar6y + 10) {
			// ChatLib.chat(displays[`LightahDisplay`].getHeight())
			ChatLib.chat("now moving skill display");
			moving = "skilldisplay";
		}
	}
	if (Settings.petda) {
		// ChatLib.chat("health display active " + Settings.Actionbar6x + " ");
		if (mouseX > Settings.petdx && mouseX < Settings.petdx + displays[`petdisplay`].getWidth() + 2 && mouseY > Settings.petdy && mouseY < Settings.petdy + 10) {
			// ChatLib.chat(displays[`LightahDisplay`].getHeight())
			ChatLib.chat("now moving pet display");
			moving = "displays[`petdisplay`]";
		}
	}
	if (Settings.dropda) {
		// ChatLib.chat("health display active " + Settings.Actionbar6x + " ");
		if (mouseX > Settings.dropdx && mouseX < Settings.dropdx + displays[`dropdisplay`].getWidth() + 2 && mouseY > Settings.dropdy && mouseY < Settings.dropdy + 10 * displays[`dropdisplay`].getLines().length) {
			// ChatLib.chat(displays[`LightahDisplay`].getHeight())
			ChatLib.chat("now moving drop display");
			moving = "dropdisplay";
		}
	}
	if (Settings.withershieldcd) {
		// ChatLib.chat("health display active " + Settings.Actionbar6x + " ");
		if (mouseX > Settings.withershieldx && mouseX < Settings.withershieldx + displays[`WitherShield`].getWidth() + 2 && mouseY > Settings.withershieldy && mouseY < Settings.withershieldy + 10 * displays[`WitherShield`].getLines().length) {
			// ChatLib.chat(displays[`LightahDisplay`].getHeight())
			ChatLib.chat("now moving wither shield display");
			moving = "withershield";
		}
	}
    //if (button == 0) {
	//renderDisplayX = mouseX;
	//renderDisplayY = mouseY;
	//displays[`LightahDisplay`].setRenderLoc(renderDisplayX, renderDisplayY);
    //}
}

//function myGuiDragFunction(dx, dy, x, y, button) {
//	if (moving == "displays[`LightahDisplay`]") {
//		ChatLib.chat("xy now mouse at x:" + x + " y:" + y);
//		ChatLib.chat("dxy mouse at dx:" + dx + " dy:" + dy);
//		renderDisplayX = dx;
//		renderDisplayY = dy;
//		//ERROR! ERROR! LIDAN IS NOW AFK AND WILL FIX THAT LATER [if he has power for that...]
//		ChatLib.chat("now moving to x:" + renderDisplayX + " y:" + renderDisplayY);
//		displays[`LightahDisplay`].setRenderLoc(renderDisplayX, renderDisplayY);
//    }
//}

register("dragged", function (dx, dy, x, y, button) {
	if (Settings.perf_dragged) {
		return;
    }
	if (!guilocedit.isOpen()) {
		return;
	}
	if (Settings.Lightahtoggle) {
		if (moving == "displays[`LightahDisplay`]") {
			renderDisplayX += dx;
			renderDisplayY += dy;
			displays[`LightahDisplay`].setRenderLoc(renderDisplayX, renderDisplayY);
		}
	}
	if (Settings.Actionbar1a) {
		if (moving == "healthdisplay") {
			Settings.Actionbar1x += dx;
			Settings.Actionbar1y += dy;
			displays[`actionbardisplays1`].setRenderLoc(Settings.Actionbar1x, Settings.Actionbar1y);
		}
	}
	if (Settings.Actionbar2a) {
		if (moving == "defensedisplay") {
			Settings.Actionbar2x += dx;
			Settings.Actionbar2y += dy;
			displays[`actionbardisplays2`].setRenderLoc(Settings.Actionbar2x, Settings.Actionbar2y);
		}
	}
	if (Settings.Actionbar3a) {
		if (moving == "manadisplay") {
			Settings.Actionbar3x += dx;
			Settings.Actionbar3y += dy;
			displays[`actionbardisplays3`].setRenderLoc(Settings.Actionbar3x, Settings.Actionbar3y);
		}
	}
	if (Settings.Actionbar4a) {
		if (moving == "fsbdisplay") {
			Settings.Actionbar4x += dx;
			Settings.Actionbar4y += dy;
			displays[`actionbardisplays4`].setRenderLoc(Settings.Actionbar4x, Settings.Actionbar4y);
		}
	}
	if (Settings.Actionbar5a) {
		if (moving == "secretdisplay") {
			Settings.Actionbar5x += dx;
			Settings.Actionbar5y += dy;
			displays[`actionbardisplays5`].setRenderLoc(Settings.Actionbar5x, Settings.Actionbar5y);
		}
	}
	if (Settings.Actionbar6a) {
		if (moving == "skilldisplay") {
			Settings.Actionbar6x += dx;
			Settings.Actionbar6y += dy;
			displays[`actionbardisplays6`].setRenderLoc(Settings.Actionbar6x, Settings.Actionbar6y);
		}
	}
	if (Settings.petda) {
		if (moving == "displays[`petdisplay`]") {
			Settings.petdx += dx;
			Settings.petdy += dy;
			displays[`petdisplay`].setRenderLoc(Settings.petdx, Settings.petdy);
		}
	}
	if (Settings.dropda) {
		if (moving == "dropdisplay") {
			Settings.dropdx += dx;
			Settings.dropdy += dy;
			displays[`dropdisplay`].setRenderLoc(Settings.dropdx, Settings.dropdy);
		}
	}
	if (Settings.withershieldcd) {
		if (moving == "withershield") {
			Settings.withershieldx += dx;
			Settings.withershieldy += dy;
			displays[`WitherShield`].setRenderLoc(Settings.withershieldx, Settings.withershieldy);
		}
	}
});


//function myGuiKeyTypedFunction(typedChar, keyCode) {
//    ChatLib.chat("You typed " + typedChar);
//    error = typedChar;
//}

//gui.open()
var tickc = 0;
var lightah = true;
var whenlightah = "";
var renderDisplayX = 20;
var renderDisplayY = 20;
var doalert = false;

displays[`LightahDisplay`] = new Display();
displays[`LightahDisplay`].setRenderLoc(renderDisplayX, renderDisplayY);
displays[`LightahDisplay`].setLine(0, "&eLight Auction + Wither:")
displays[`LightahDisplay`].setShouldRender(Settings.Lightahtoggle);

function infoserver() {
	if (Settings.perf_tick) {
		return;
	}
	displays[`LightahDisplay`].setLine(1, "" + whenlightah);
}
register("tick", infoserver);
register("tick", everytick);

function isonskyblock() {
	if (Settings.textInput == "alwaysskyblock") {
		return true;
    }
	if (Scoreboard.getScoreboardTitle().includes("Skyblock Dragons")) {
		return true;
	}
	return false;
}

function isonanyskyblock() {
	if (Settings.textInput == "alwaysanyskyblock") {
		return true;
	}
	if (Scoreboard.getScoreboardTitle().includes("Skyblock")) {
		return true;
	}
	return false;
}

function everytick() {
	if (Settings.perf_tick) {
		return;
	}
	tickc++;
	if (playeractionbarxpgaintimer > 0) {
		displays[`actionbardisplays6`].setShouldRender(true);
		playeractionbarxpgaintimer--;
	} else {
		displays[`actionbardisplays6`].setShouldRender(false);
		// playeractionbarxpgain = "";
	}
	// didaction = false;
	// ChatLib.chat(tickc)
	// displays[`LightahDisplay`].setBackground(Settings.Lightahbackground);
    if (!isonskyblock()) {
		playeractionbar[0] = "";
		playeractionbar[1] = "";
		playeractionbar[2] = "";
		playeractionbar[3] = "";
		playeractionbar[4] = "";
		playeractionbar[5] = "";
		playeractionbar[6] = "";
		displays[`petdisplay`].setLine(0, "");
		displays[`dropdisplay`].clearLines();
	}
	else {
		displays[`dropdisplay`].setRenderLoc(Settings.dropdx, Settings.dropdy);
		displays[`dropdisplay`].setShouldRender(Settings.dropda);
		if (Settings.dropdht) {
			displays[`dropdisplay`].setLine(0, `&r`);
		}
        else {
			displays[`dropdisplay`].setLine(0, `&bRARE DROPS!`);
        }
		var i = 1;
		for (var property in Saved.RareDrops) {
            if (Settings.dropdhn) {
				displays[`dropdisplay`].setLine(i, `${property} §6x${Saved.RareDrops[property]}`);
			}
            else {
				displays[`dropdisplay`].setLine(i, `${i} ${property} §6x${Saved.RareDrops[property]}`);
            }
			
			i++;
        }
    }

	if (Settings.Lightahbackground == 0) {
		displays[`LightahDisplay`].setBackground("none");
	} else if (Settings.Lightahbackground == 1) {
		displays[`LightahDisplay`].setBackground("per line");
	} else if (Settings.Lightahbackground == 2) {
		displays[`LightahDisplay`].setBackground("full");
	} 
	displays[`LightahDisplay`].setShouldRender(Settings.Lightahtoggle);
	displays[`petdisplay`].setRenderLoc(Settings.petdx, Settings.petdy);
	displays[`petdisplay`].setShouldRender(Settings.petda);
	displays[`petdisplay`].setLine(0, activepet);
	// console.log(activepet)

	displays[`actionbardisplays1`].setShouldRender(Settings.Actionbar1a);
	if (Settings.Actionbar1b == 0) {
		displays[`actionbardisplays1`].setBackground("none");
	} else if (Settings.Actionbar1b == 1) {
		displays[`actionbardisplays1`].setBackground("per line");
	} else if (Settings.Actionbar1b == 2) {
		displays[`actionbardisplays1`].setBackground("full");
	} 
	if (playeractionbar[0] != undefined) {
		displays[`actionbardisplays1`].setRenderLoc(Settings.Actionbar1x, Settings.Actionbar1y);
		displays[`actionbardisplays1`].setLine(0, playeractionbar[0])
	}

	displays[`actionbardisplays2`].setShouldRender(Settings.Actionbar2a);
	if (Settings.Actionbar2b == 0) {
		displays[`actionbardisplays2`].setBackground("none");
	} else if (Settings.Actionbar2b == 1) {
		displays[`actionbardisplays2`].setBackground("per line");
	} else if (Settings.Actionbar2b == 2) {
		displays[`actionbardisplays2`].setBackground("full");
	}
	if (playeractionbar[1] != undefined) {
		displays[`actionbardisplays2`].setRenderLoc(Settings.Actionbar2x, Settings.Actionbar2y);
		displays[`actionbardisplays2`].setLine(0, playeractionbar[1])
	}

	displays[`actionbardisplays3`].setShouldRender(Settings.Actionbar3a);
	if (Settings.Actionbar3b == 0) {
		displays[`actionbardisplays3`].setBackground("none");
	} else if (Settings.Actionbar3b == 1) {
		displays[`actionbardisplays3`].setBackground("per line");
	} else if (Settings.Actionbar3b == 3) {
		displays[`actionbardisplays3`].setBackground("full");
	}
	if (playeractionbar[2] != undefined) {
		displays[`actionbardisplays3`].setRenderLoc(Settings.Actionbar3x, Settings.Actionbar3y);
		displays[`actionbardisplays3`].setLine(0, playeractionbar[2])
	}

	displays[`actionbardisplays4`].setShouldRender(Settings.Actionbar4a);
	if (Settings.Actionbar4b == 0) {
		displays[`actionbardisplays4`].setBackground("none");
	} else if (Settings.Actionbar4b == 1) {
		displays[`actionbardisplays4`].setBackground("per line");
	} else if (Settings.Actionbar4b == 4) {
		displays[`actionbardisplays4`].setBackground("full");
	}
	if (playeractionbar[3] != undefined) {
		displays[`actionbardisplays4`].setRenderLoc(Settings.Actionbar4x, Settings.Actionbar4y);
		displays[`actionbardisplays4`].setLine(0, playeractionbar[3])
	}

	displays[`actionbardisplays5`].setShouldRender(Settings.Actionbar5a);
	if (Settings.Actionbar5b == 0) {
		displays[`actionbardisplays5`].setBackground("none");
	} else if (Settings.Actionbar5b == 1) {
		displays[`actionbardisplays5`].setBackground("per line");
	} else if (Settings.Actionbar5b == 5) {
		displays[`actionbardisplays5`].setBackground("full");
	}
	if (playeractionbar[4] != undefined) {
		displays[`actionbardisplays5`].setRenderLoc(Settings.Actionbar5x, Settings.Actionbar5y);
		displays[`actionbardisplays5`].setLine(0, playeractionbar[4] + " " + playeractionbar[5])
    } else {
		displays[`actionbardisplays5`].setLine(0, "")
	}

	if (playeractionbarxpgain != undefined && Settings.Actionbar6a) {
		displays[`actionbardisplays6`].setRenderLoc(Settings.Actionbar6x, Settings.Actionbar6y);
		displays[`actionbardisplays6`].setLine(0, playeractionbarxpgain)
	} else {
		displays[`actionbardisplays6`].setLine(0, "")
	}

	if (tickc == 100) {
		if (Settings.Lightahtoggle) {
			// displays[`LightahDisplay`].setShouldRender(true);
			if (isonskyblock()) {
				ChatLib.command("lightah")
            } else {
				whenlightah = "Must be on skyblock!";
            }
		}
		//else {
		//	displays[`LightahDisplay`].setShouldRender(false);
  //      }
	}
	if (tickc > 100) {
		tickc = 0;
	}
}

//register("chat", chatf).setCriteria("${message}");


//function chatf(message, event) {
//	// ChatLib.chat("it was: " + message)
//	var msg = removeColors(message)
//	if (msg.includes("The Light Auction is not active")) {
//		// ChatLib.chat("Light ah is scammer");
//		cancel(event)
//	}
//	if (msg.includes("Next Light Auction in:")) {
//		cancel(event)
//		whenlightah = msg.split(":")[1];
//		whenlightah = whenlightah.replace(" minutes", "m");
//		whenlightah = whenlightah.replace(" seconds", "s");
//		whenlightah = whenlightah.replace("and ", "");

		
//		var alertbeforah = whenlightah;
//		var alertbeforahtime = 0;
//        try {
//			alertbeforah = alertbeforah.split(" ");
//			// ChatLib.chat(alertbeforah[0]);
//			alertbeforah[0] = parseInt(alertbeforah[0].split("m")[0]);
//			// ChatLib.chat(alertbeforah[0]);
//			alertbeforah[1] = parseInt(alertbeforah[1].split("s")[0]);
//			alertbeforahtime = 60 * alertbeforah[0] + alertbeforah[1];
//			if (Settings.Lightahaleartbefor = 0) {
//				if (alertbeforahtime < 60) {
//					if (doalert != true) {
//						Client.showTitle("&e&l1m to Light Auction", "&7Remeber 1m also wither", 0, 50, 10);
//						doalert = true
//					}
//				}
//			}
//			else if (Settings.Lightahaleartbefor = 1) {
//				if (alertbeforahtime < 300) {
//					if (doalert != true) {
//						Client.showTitle("&e&l5m to Light Auction", "&7Remeber 5m also wither", 0, 50, 10);
//						doalert = true
//					}
//				}
//			}
//			else if (Settings.Lightahaleartbefor = 2) {
//				if (alertbeforahtime < 600) {
//					if (doalert != true) {
//						Client.showTitle("&e&l10m to Light Auction", "&7Remeber 10m also wither", 0, 50, 10);
//						doalert = true
//					}
//				}
//			}
//        } catch (e) {
//			// ChatLib.chat(`Weird error? ${e}`)
//        }


//		// ChatLib.chat(alertbeforahtime)
//	}
//}

//register("command", () => {
//	lightah = !lightah
//	ChatLib.chat("Light Auction is now " + lightah)
//}).setCommandName("togglelightah");

register("command", () => {
	// ChatLib.chat(Settings.Actionbar1b)
	ChatLib.chat("Drag the displays where you want to")
	guilocedit.open();
	// ChatLib.chat("Light Auction is now " + lightah)
}).setCommandName("sbdragonsgui");

register("actionbar", actionbar).setCriteria("${message}");
// var didaction = false;
var newmsg = "";
function actionbar(message, event) {
	if (Settings.perf_actionbar) {
		return;
	}
	// console.log(message);
	if (message.includes("+")) {
		if (Settings.Actionbar6a) {
			cancel(event);
			// ChatLib.actionBar("SCAM SCAM SCAM");
			playeractionbarxpgain = message;
			playeractionbarxpgaintimer = Settings.Actionbar6t;
		}
	}
	if (newmsg == message) {
		return;
	}
	var splitted = message.split(" ");
	if (message.includes("❇")) {
		// didaction = true;
		playeractionbar = message.split(" ")
		//ChatLib.chat("------CHANGED--------");
	}
	for (var property in splitted) {
		if (splitted[property].endsWith("❤")) {
			playeractionbar[0] = splitted[property];
		}
		if (splitted[property].endsWith("❇")) {
			playeractionbar[1] = splitted[property];
		}
		if (splitted[property].endsWith("✎")) {
			playeractionbar[2] = splitted[property];
		}
    }
    if (isonskyblock()) {
		cancel(event);
		newmsg = message;
		// ChatLib.chat(message);
		newmsg = newmsg + " "
		if (Settings.Actionbar1a) newmsg = newmsg.replace(playeractionbar[0] + " ", "");
		if (Settings.Actionbar2a) newmsg = newmsg.replace(playeractionbar[1] + " ", "");
		if (Settings.Actionbar3a || Settings.textInput == "HideAboz") newmsg = newmsg.replace(playeractionbar[2] + " ", "");
		if (Settings.Actionbar4a) newmsg = newmsg.replace(playeractionbar[3], "");
		if (Settings.Actionbar5a) newmsg = newmsg.replace(" " + playeractionbar[4] + " " + playeractionbar[5], "");
		// ChatLib.chat(newmsg);
		ChatLib.actionBar(newmsg);
    }
	// else {
	//	ChatLib.chat("--------------");
	//}
	//ChatLib.chat(playeractionbar[0]);
	//ChatLib.chat(playeractionbar[1]);
	//ChatLib.chat(playeractionbar[2]);
	//ChatLib.chat(playeractionbar[3]);
	//ChatLib.chat(playeractionbar[4]);
	//ChatLib.chat(playeractionbar[5]);
	// if (playeractionbar[5] == undefined) {
		// ChatLib.chat("NOT FOUND 5");
    // }
}

displays[`actionbardisplays1`] = new Display();
displays[`actionbardisplays2`] = new Display();
displays[`actionbardisplays3`] = new Display();
displays[`actionbardisplays4`] = new Display();
displays[`actionbardisplays5`] = new Display();
displays[`actionbardisplays6`] = new Display();
displays[`petdisplay`] = new Display();
displays[`slayerdisplay`] = new Display();
displays[`dropdisplay`] = new Display();

function myChat(message, event) {
	if (Settings.perf_chat) {
		return;
	}
	var line = message;
	line = removeColors(line);
	if (line.includes("Light Auction is starting very soon CLICK to warp there")) {
		if (Settings.Lightahnow) {
			Client.showTitle("&e&lNow Light Auction", "&7Remeber now have also wither", 0, 50, 10);
        }
		tickc = -6000;
		doalert = false;
	}
}

function antiMessage(message, event) {
	if (Settings.perf_chat) {
		return;
	}
	var line = message;
	line = removeColors(line);
	if (line.includes("Hey! Sorry, but you can't")) {
		cancel(event);
	}
}

register("chat", myChat)
	.setCriteria("${message}")

register("chat", antiMessage)
	.setCriteria("${message}")
var players = {};
register("step", function () {
	if (Settings.perf_step) {
		return;
	}
	players = {};
	players[Player.getName()] = Player;
}).setDelay(1);


register("renderWorld", () => {
	if (Settings.perf_renderWorld) {
		return;
	}
	// let blazes = {};
	// if (!Settings.rendermobname) return;
	let partialTicks = Tessellator.INSTANCE.getPartialTicks();
	let displaybackground = Settings.rendermobbackground;

	// GL11.glEnable(GL11.GL_DEPTH_TEST);
	//GL11.glBlendFunc(770, 771);
	//GL11.glEnable(GL11.GL_BLEND);
	// GL11.glLineWidth(3);
	// GL11.glDisable(GL11.GL_TEXTURE_2D);
	//GlStateManager.func_179094_E();

	if (Settings.rendermobname) {
		World.getAllEntities().forEach(entity => {
			if (entity.getClassName() != "EntityArmorStand" && entity.getClassName() != "EntityWither" && entity.getUUID() != Player.getUUID() && `${Player.lookingAt()}` != `${entity}` && (entity.getName().includes("-") || entity.getName().includes("/"))) {
				// ChatLib.chat(entity.getName());
				// ChatLib.chat(entity.getName().split(" ")[2].split("/")[1]);
				// let name = entity.getName().split(" ")[2].split("/")[1];
				// blazes[parseInt(name)] = entity;
				//GL11.glBlendFunc(770, 771);
				//GL11.glEnable(GL11.GL_BLEND);
				//GL11.glLineWidth(3);
				//GL11.glDisable(GL11.GL_TEXTURE_2D);
				//GlStateManager.func_179094_E();

				//console.log("scam")
				// drawString(text, x, y, z, color, renderBlackBox, scale, increase, throughWall)

				drawString(
					entity.getName(),
					entity.getLastX() + (entity.getX() - entity.getLastX()) * partialTicks,
					entity.getLastY() + (entity.getY() - entity.getLastY()) * partialTicks + entity.getEyeHeight() + 0.75,
					entity.getLastZ() + (entity.getZ() - entity.getLastZ()) * partialTicks,
					16711680, displaybackground, 0.025, false, false
				);


				//GlStateManager.func_179121_F();
				//GL11.glEnable(GL11.GL_TEXTURE_2D);
				//GL11.glDisable(GL11.GL_BLEND);
			}
		});
	}

	if (Settings.dungeonice) {
		if (getDistance(Player.getX(), Player.getY(), Player.getZ(), -975, 131, -1097) < 20) {
            try {
				drawLineSmall(-985.5, 131.5, -1091.5, -985.5, 131.5, -1093.5, 0, 200, 0);
				drawLineSmall(-985.5, 131.5, -1093.5, -986.5, 131.5, -1093.5, 0, 200, 0);
				drawLineSmall(-986.5, 131.5, -1093.5, -986.5, 131.5, -1101.5, 0, 200, 0);
				drawLineSmall(-986.5, 131.5, -1101.5, -970.5, 131.5, -1101.5, 0, 200, 0);
				drawLineSmall(-970.5, 131.5, -1101.5, -970.5, 131.5, - 1100.5, 0, 200, 0);
				drawLineSmall(-970.5, 131.5, -1100.5, -971.5, 131.5, -1100.5, 0, 200, 0);
				drawLineSmall(-971.5, 131.5, -1100.5, -971.5, 131.5, -1102.5, 0, 200, 0);
				drawLineSmall(-971.5, 131.5, -1100.5, -971.5, 131.5, -1102.5, 0, 200, 0);
				drawLineSmall(-971.5, 131.5, -1102.5, -980.5, 131.5, -1102.5, 0, 200, 0);
				drawLineSmall(-980.5, 131.5, -1102.5, -980.5, 131.5, -1095.5, 0, 200, 0);
				drawLineSmall(-980.5, 131.5, -1095.5, -970.5, 131.5, -1095.5, 0, 200, 0);
            } catch (e) {
				ChatLib.chat(`Error Solving Ice ${e}`);
            }
			
        }
		// console.log(getDistance(Player.getX(), Player.getY(), Player.getZ(), -975, 131 ,-1097));
	}
	if (Settings.griffinburrowesp || Settings.griffinburrowwaypoint) {
		if (world.toLowerCase().includes(`griffin`) && griffinloc[2] != undefined) {
			// console.log(`box at ${griffinloc}`);
			// drawBoxAtBlock(griffinloc[0], griffinloc[1], griffinloc[2], Settings.griffincolor.getRed(), Settings.griffincolor.getGreen(), Settings.griffincolor.getBlue());
			// RenderLib.drawEspBox(griffinloc[0], griffinloc[1], 1, 1, griffinloc[2], Settings.griffincolor.getRed(), Settings.griffincolor.getGreen(), Settings.griffincolor.getBlue(), 1, true);
			// console.log(`${Settings.griffincolor.getRed()} ${Settings.griffincolor.getGreen()} ${Settings.griffincolor.getBlue()}`)
			if (Settings.griffinwaypoint) {
				RenderLib.drawInnerEspBox(griffinloc[0] + 0.5, griffinloc[1], griffinloc[2] + 0.5, 0.5, 150, Settings.griffincolor.getRed() / 255, Settings.griffincolor.getGreen() / 255, Settings.griffincolor.getBlue() / 255, 1, false);
			}
			if (Settings.griffinespbox == 0) {
				RenderLib.drawEspBox(griffinloc[0] + 0.5, griffinloc[1], griffinloc[2] + 0.5, 1, 1, Settings.griffincolor.getRed() / 255, Settings.griffincolor.getGreen() / 255, Settings.griffincolor.getBlue() / 255, Settings.griffincolor.getAlpha() / 255, true);
			}
			else if (Settings.griffinespbox == 1) {
				RenderLib.drawInnerEspBox(griffinloc[0] + 0.5, griffinloc[1], griffinloc[2] + 0.5, 1.001, 1.001, Settings.griffincolor.getRed() / 255, Settings.griffincolor.getGreen() / 255, Settings.griffincolor.getBlue() / 255, Settings.griffincolor.getAlpha()/255, false);
			}
			else if (Settings.griffinespbox == 2) {
				RenderLib.drawBaritoneEspBox(griffinloc[0], griffinloc[1], griffinloc[2], 1, 1, Settings.griffincolor.getRed() / 255, Settings.griffincolor.getGreen() / 255, Settings.griffincolor.getBlue() / 255, Settings.griffincolor.getAlpha() / 255, true);
            }
            if (Settings.griffinburrowwaypoint) {
				drawString("Burrow", griffinloc[0] + 0.5, griffinloc[1] + 0.5, griffinloc[2] + 0.5, Renderer.color(Settings.griffincolor.getRed(), Settings.griffincolor.getGreen(), Settings.griffincolor.getBlue(), 255), true, 0.8, true, true);
            }
        }
	}
	// if (Settings.textInput == "tileentity") {
    if (Settings.esp_fairy_active) {
		blockespfairy.forEach(entity => {
			const eLoc = entity.func_174877_v();
			RenderLib.drawEspBox(eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p(), 1, 1, Settings.esp_fairy_color.getRed() / 255, Settings.esp_fairy_color.getGreen() / 255, Settings.esp_fairy_color.getBlue(), 1, true);
		})
    }
    if (Settings.esp_witheres_active) {
		blockespessence.forEach(entity => {
			const eLoc = entity.func_174877_v();
			RenderLib.drawEspBox(eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p(), 1, 1, Settings.esp_witheres_color.getRed() / 255, Settings.esp_witheres_color.getGreen() / 255, Settings.esp_witheres_color.getBlue(), 1, true);
			// RenderLib.drawEspBox(eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p(), 1, 1, 0, 0, 0, 1, true);
		})
    }
    if (Settings.esp_chest_active) {
		blockespchest.forEach(entity => {
			const eLoc = entity.func_174877_v();
			RenderLib.drawEspBox(eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p(), 1, 1, Settings.esp_chest_color.getRed() / 255, Settings.esp_chest_color.getGreen() / 255, Settings.esp_chest_color.getBlue(), 1, true);
			// RenderLib.drawEspBox(eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p(), 1, 1, 139 / 255, 94 / 255, 34 / 255, 1, true);
		})
    }
	// }
		//const TileEntitys = World.getWorld().field_147482_g
		//TileEntitys.forEach(entity => {
		//	const eNBT = `${entity.serializeNBT()}`;
		//	const eLoc = entity.func_174877_v();
		//	if (eNBT.includes(`54e5e1f2-282b-4d66-9f17-52f53e7a34d5`)) {
		//		// if (getDistance(Player.getX(), Player.getY(), Player.getZ(), eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p()) < 25) {
		//			RenderLib.drawEspBox(eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p(), 1, 1, 230 / 255, 10 / 255, 250 / 255, 1, true);
		//		// }
		//	}
		//	else if (eNBT.includes(`1862f254-bab8-4189-8c2b-7a92b74b7d71`)) {
		//		RenderLib.drawEspBox(eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p(), 1, 1, 230 / 255, 10 / 255, 250 / 255, 1, true);
		//	}
  //          else {
		//		// RenderLib.drawEspBox(entity.func_174877_v().func_177958_n(), entity.func_174877_v().func_177956_o(), entity.func_174877_v().func_177952_p(), 1, 1, Settings.griffincolor.getRed() / 255, Settings.griffincolor.getGreen() / 255, Settings.griffincolor.getBlue() / 255, 1, true);
  //          }
			
		//	// console.log(`${entity} ${entity.func_174877_v().func_177958_n()} ${entity.func_174877_v().func_177956_o()} ${entity.func_174877_v().func_177952_p()} ${entity.serializeNBT()}`);
		//	// drawBox(entity, 1, 1, 1, 2, 1, 1, partialTicks);
		//})
  //  }
	//GlStateManager.func_179121_F();
	//GL11.glEnable(GL11.GL_TEXTURE_2D);
	//GL11.glDisable(GL11.GL_BLEND);
	// GL11.glDisable(GL11.GL_DEPTH_TEST);
});
var blockespfairy = [];
var blockespessence = [];
var blockespchest = [];

register("step", () => {
	if (Settings.perf_step) {
		return;
	}
	blockespfairy = [];
	blockespessence = [];
	blockespchest = [];
	const TileEntitys = World.getWorld().field_147482_g
	TileEntitys.forEach(entity => {
		const eNBT = `${entity.serializeNBT()}`;
		const eLoc = entity.func_174877_v();
		if (eNBT.includes(`54e5e1f2-282b-4d66-9f17-52f53e7a34d5`)) {
			// if (getDistance(Player.getX(), Player.getY(), Player.getZ(), eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p()) < 25) {
			// RenderLib.drawEspBox(eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p(), 1, 1, 230 / 255, 10 / 255, 250 / 255, 1, true);
			// }
			blockespessence.push(entity);
		}
		else if (eNBT.includes(`1862f254-bab8-4189-8c2b-7a92b74b7d71`)) {
			// RenderLib.drawEspBox(eLoc.func_177958_n(), eLoc.func_177956_o(), eLoc.func_177952_p(), 1, 1, 230 / 255, 10 / 255, 250 / 255, 1, true);
			blockespfairy.push(entity);
		}
        else if (`${entity}`.includes(`Chest`)) {
			blockespchest.push(entity);
        }
		else {
			// RenderLib.drawEspBox(entity.func_174877_v().func_177958_n(), entity.func_174877_v().func_177956_o(), entity.func_174877_v().func_177952_p(), 1, 1, Settings.griffincolor.getRed() / 255, Settings.griffincolor.getGreen() / 255, Settings.griffincolor.getBlue() / 255, 1, true);
		}

		// console.log(`${entity} ${entity.func_174877_v().func_177958_n()} ${entity.func_174877_v().func_177956_o()} ${entity.func_174877_v().func_177952_p()} ${entity.serializeNBT()}`);
		// drawBox(entity, 1, 1, 1, 2, 1, 1, partialTicks);
	})

}).setDelay(1);
	//let entity = smallest;
	//if (typeof entity === "undefined") return;
	//drawBox(entity, 255, 0, 0, 2.0, 1, 2, partialTicks);
	//Tessellator.drawString(
	//	"Smallest",
	//	entity.getLastX() + (entity.getX() - entity.getLastX()) * partialTicks,
	//	entity.getLastY() + (entity.getY() - entity.getLastY()) * partialTicks,
	//	entity.getLastZ() + (entity.getZ() - entity.getLastZ()) * partialTicks,
	//	16711680, true, 0.04, false
	//);

	//entity = biggest;
	//drawBox(entity, 0, 255, 0, 2.0, 1, 2, partialTicks);
	//Tessellator.drawString(
	//	"Biggest",
	//	entity.getLastX() + (entity.getX() - entity.getLastX()) * partialTicks,
	//	entity.getLastY() + (entity.getY() - entity.getLastY()) * partialTicks,
	//	entity.getLastZ() + (entity.getZ() - entity.getLastZ()) * partialTicks,
	//	65280, true, 0.04, false


register("renderEntity", function (entity, position, ticks, event) {
	if (Settings.perf_renderEntity) {
		return;
	}
	if (Settings.textInput == "NORENDER") {
		cancel(event);
	}
	if (entity.getClassName() == "EntityOtherPlayerMP") {
		players[entity.getName()] = entity;
	}
	// else if (Settings.rendermobname && entity.getClassName() != "EntityArmorStand" && entity.getClassName() != "EntityWither") {
		//console.log(entity.getClassName());
		//const lastX = new Entity(Player.getPlayer()).getLastX();
		//const lastY = new Entity(Player.getPlayer()).getLastY();
		//const lastZ = new Entity(Player.getPlayer()).getLastZ();

		//const currentX = Player.getX();
		//const currentY = Player.getY();
		//const currentZ = Player.getZ();

		// Tessellator.bindTexture(img);
		//Tessellator.begin()
		//	.translate(
		//		lastX + (currentX - lastX) * partialTicks,
		//		lastY + (currentY - lastY) * partialTicks,
		//		lastZ + (currentZ - lastZ) * partialTicks
		//	)
		//	.pos(-0.5, 0.5, -0.5).tex(0, 0)
		//	.pos(-0.5, 0.5, 0.5).tex(0, 1)
		//	.pos(0.5, 0.5, 0.5).tex(1, 1)
		//	.pos(0.5, 0.5, -0.5).tex(1, 0)
		//	// .draw();

		//let partialTicks = Tessellator.INSTANCE.getPartialTicks();
		//Tessellator.drawString(
		//	entity.getName(),
		//	entity.getLastX() + (entity.getX() - entity.getLastX()) * partialTicks,
		//	entity.getLastY() + (entity.getY() - entity.getLastY()) * partialTicks + entity.getEyeHeight() + 0.5,
		//	entity.getLastZ() + (entity.getZ() - entity.getLastZ()) * partialTicks,
		//	16711680, true, 0.04, false
		//);

		//const lastX = new Entity(entity.getEntity()).getLastX();
		//const lastY = new Entity(entity.getEntity()).getLastY();
		//const lastZ = new Entity(entity.getEntity()).getLastZ();

		//const currentX = entity.getX();
		//const currentY = entity.getY();
		//const currentZ = entity.getZ();

		//const DrawX = lastX + (currentX - lastX) * ticks;
		//const DrawY = lastY + (currentY - lastY) * ticks;
		//const DrawZ = lastZ + (currentZ - lastZ) * ticks;

		//Tessellator.drawString(entity.getName(), DrawX, DrawY + entity.getEyeHeight() + 0.5, DrawZ, Renderer.color(255, 255, 255, 255), true, 0.02, false);
	// }
});

//function myWorldRender(partialTicks) {
//	const lastX = new Entity(Player.getPlayer()).getLastX();
//	const lastY = new Entity(Player.getPlayer()).getLastY();
//	const lastZ = new Entity(Player.getPlayer()).getLastZ();

//	const currentX = Player.getX();
//	const currentY = Player.getY();
//	const currentZ = Player.getZ();

//	// Tessellator.bindTexture(img);
//	Tessellator.begin()
//		.translate(
//			lastX + (currentX - lastX) * partialTicks,
//			lastY + (currentY - lastY) * partialTicks,
//			lastZ + (currentZ - lastZ) * partialTicks
//		)
//		.pos(-0.5, 0.5, -0.5).tex(0, 0)
//		.pos(-0.5, 0.5, 0.5).tex(0, 1)
//		.pos(0.5, 0.5, 0.5).tex(1, 1)
//		.pos(0.5, 0.5, -0.5).tex(1, 0)
//		.draw();
//}

register("renderEntity", function (entity, position, ticks, event) {
	if (Settings.perf_renderEntity) {
		return;
	}
	if (isonskyblock()) {
		//switch (entity.getClassName()) {
		//	case ("EntityOtherPlayerMP"):
		//		if (Settings.glowingnpcs) {
		//			drawBox(entity, 255, 255, 255, 1.2, 0.8, 2, ticks);
		//		}
		//		break;
		//}
		if (entity.getClassName() === "EntityItem") {
			if (Settings.textInput == "testglow") {
				GlowEntity(entity, ticks);
            }
			if (Settings.glowingitems) {
				drawBox(entity, 0, 100, 255, 1.5, 0.5, 0.5, ticks);
			}
		}
		else if (removeColors(entity.getName()).includes(`[Level`)) {
			if (Settings.griffinmobglowing) {
				if (entity.getClassName() == ("EntityArmorStand")) {
					// drawBox(entity, Settings.griffinmobcolor.getRed(), Settings.griffinmobcolor.getGreen(), Settings.griffinmobcolor.getBlue(), 1.2, 0.8, 2, ticks);
					RenderLib.drawEspBox(entity.getX() - 0.5, entity.getY() - 2.5, entity.getZ() - 0.5, 0, 0, Settings.griffinmobcolor.getRed() / 255, Settings.griffinmobcolor.getGreen() / 255, Settings.griffinmobcolor.getBlue() / 255, 1, true);
                }
                else {
					drawBox(entity, Settings.griffinmobcolor.getRed() / 255, Settings.griffinmobcolor.getGreen() / 255, Settings.griffinmobcolor.getBlue() / 255, 2, 0, 0, ticks);
                }
			}
		}
		else if (removeColors(entity.getName()).includes(`Old`)) { // else if (entity.getClassName() === "EntityDragon") {
			if (entity.getClassName() == ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 255, 255, 0, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (removeColors(entity.getName()).includes(`Protector`)) {
			if (entity.getClassName() == ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 0.9, 0.9, 0.9, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (removeColors(entity.getName()).includes(`Wise`)) {
			if (entity.getClassName() == ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 0, 255, 255, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (removeColors(entity.getName()).includes(`Unstable`)) {
			if (entity.getClassName() == ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 150, 10, 150, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (removeColors(entity.getName()).includes(`Young`)) {
			if (entity.getClassName() == ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 0, 255, 0, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (removeColors(entity.getName()).includes(`Strong`)) {
			if (entity.getClassName() == ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 255, 0, 0, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (removeColors(entity.getName()).includes(`Superior`)) {
			if (entity.getClassName() == ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 200, 150, 0, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (removeColors(entity.getName()).includes(`wizard`)) {
			if (entity.getClassName() == ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 0, 0, 1, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (removeColors(entity.getName()).includes(`Shadow`)) {
			if (entity.getClassName() == ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 0, 0, 0, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (removeColors(entity.getName()).includes(`Frozen`)) {
			if (entity.getClassName() == ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 255, 255, 255, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (removeColors(entity.getName()).includes(`Heavy`)) {
			if (entity.getClassName() != ("EntityArmorStand")) {
				if (Settings.glowingguys && entity.getName().includes(`guy`)) {
					drawBox(entity, 0.4, 0.4, 0.4, 5, 1, -2.5, ticks);
				}
			}
		}
		else if (entity.getClassName() === "EntityDragon") {
			if (Settings.glowingdragons) {
				drawBox(entity, Settings.glowingdragonscolor.getRed() / 255, Settings.glowingdragonscolor.getGreen() / 255, Settings.glowingdragonscolor.getBlue() / 255, 2, 5, 10, ticks);
			}
		}
		else if (entity.getClassName() === "EntityWither") {
			if (Settings.glowingwithers) {
				drawBox(entity, Settings.glowingwitherscolor.getRed() / 255, Settings.glowingwitherscolor.getGreen() / 255, Settings.glowingwitherscolor.getBlue() / 255, 2, 3, 3, ticks);
			}
		}
		else if (entity.getClassName() === "EntityIronGolem") {
			if (Settings.glowingirongolem) {
				drawBox(entity, Settings.glowingirongolemcolor.getRed() / 255, Settings.glowingirongolemcolor.getGreen() / 255, Settings.glowingirongolemcolor.getBlue() / 255, 2, 0.8, entity.getEyeHeight() + 0.5, ticks);
			}
		}
		else if (removeColors(entity.getName()).includes(`☠ ${Player.getName()}`) && Settings.slayerglowboss) {
			if (Settings.slayerglowboss) {
				drawBox(entity, Settings.slayerglowbosscolor.getRed() / 255, Settings.slayerglowbosscolor.getGreen() / 255, Settings.slayerglowbosscolor.getBlue() / 255, 2, 0.8, entity.getEyeHeight() + 0.5, ticks);
			}
		}
		else if (removeColors(entity.getName()).includes(`Miniboss`)) {
			if (Settings.slayeralertminiboss) {
				Client.showTitle(`&cMiniboss!`, "Found Miniboss near you!", 0, 10, 10);
			}
			if (Settings.slayerglowminiboss) {
				drawBox(entity, Settings.slayerglowminibosscolor.getRed() / 255, Settings.slayerglowminibosscolor.getGreen() / 255, Settings.slayerglowminibosscolor.getBlue() / 255, 2, 0.8, entity.getEyeHeight() + 0.5, ticks);
            }
		}
		else if (removeColors(entity.getName()).includes(`Very Ancient Skeleton`)) {
			if (Settings.glowingveryancient) {
				drawBox(entity, Settings.glowingveryancientcolor.getRed() / 255, Settings.glowingveryancientcolor.getGreen() / 255, Settings.glowingveryancientcolor.getBlue() / 255, 2, 0.8, entity.getEyeHeight() + 0.5, ticks);
			}
		}
		else if (entity.getClassName() == ("EntityOtherPlayerMP")) {
			if (Settings.glowingnpcs) {
				drawBox(entity, Settings.glowingnpcscolor.getRed() / 255, Settings.glowingnpcscolor.getGreen() / 255, Settings.glowingnpcscolor.getBlue() / 255, 2, 0.8, 2, ticks);
			}
		}
		else if (removeColors(entity.getName()).includes(`Ender Guard`)) {
			if (Settings.colorenderguards) {
				drawBox(entity, Settings.enderguardscolor.getRed() / 255, Settings.enderguardscolor.getGreen() / 255, Settings.enderguardscolor.getBlue() / 255, 2, 1, entity.getEyeHeight() + 0.5, ticks);
			}
		}
	}
	// ChatLib.chat(entity.getClassName())
	//if (entity.getClassName() === "EntityEnderman") {
	//	if (entity.getName().includes("ZAC")) {
	//		if (settings.getSetting("Hide", "Hide Zac")) {
	//			cancel(event)
	//		}
	//	}
	//}
});

register("renderWorld", () => {
	if (Settings.perf_renderWorld) {
		return;
	}
	let blazes = {};
	if (!Settings.dungeonsolverblaze) return;

	World.getAllEntities().forEach(entity => {
		if (entity.getName().includes("Blaze ")) {
			// ChatLib.chat(entity.getName());
			// ChatLib.chat(entity.getName().split(" ")[2].split("/")[1]);
			let name = entity.getName().split(" ")[2].split("/")[1];
			blazes[parseInt(name)] = entity;
		}
	}
	);

	let smallest = Math.min.apply(Math, Object.keys(blazes));
	smallest = blazes[smallest];
	let biggest = Math.max.apply(Math, Object.keys(blazes));
	biggest = blazes[biggest];

	let partialTicks = Tessellator.INSTANCE.getPartialTicks();

	let entity = smallest;
	if (typeof entity === "undefined") return;
	drawBox(entity, 255, 0, 0, 2.0, 1, 2, partialTicks);
	Tessellator.drawString(
		"Smallest",
		entity.getLastX() + (entity.getX() - entity.getLastX()) * partialTicks,
		entity.getLastY() + (entity.getY() - entity.getLastY()) * partialTicks,
		entity.getLastZ() + (entity.getZ() - entity.getLastZ()) * partialTicks,
		16711680, true, 0.04, false
	);

	entity = biggest;
	drawBox(entity, 0, 255, 0, 2.0, 1, 2, partialTicks);
	Tessellator.drawString(
		"Biggest",
		entity.getLastX() + (entity.getX() - entity.getLastX()) * partialTicks,
		entity.getLastY() + (entity.getY() - entity.getLastY()) * partialTicks,
		entity.getLastZ() + (entity.getZ() - entity.getLastZ()) * partialTicks,
		65280, true, 0.04, false
	);
});

var world = "";
register("tick", () => {
	if (Settings.perf_tick) {
		return;
	}
	world = "";
	// Scoreboard.setShouldRender(false);
	var scorei = 0;
	Scoreboard.getLines(true).forEach(line => {
		
		let unformatted = line.toString();
		line = removeColors(line.toString());
		if (Settings.textInput == "debugscoreboard") console.log(`${scorei} ${unformatted}`);
		if (Settings.replacer) {
			for (var property in Saved.ReplacerArr) {
				unformatted = unformatted.replace(property, Saved.ReplacerArr[property])
				Scoreboard.setLine(scorei, unformatted, true)
			}
			
        }
		if (Settings.dungeonhealthnotify) {
			if (line.endsWith("❤")) {
				line = line.split("❤")[0];
				let name = line.split(" ")[1];
				if (name.includes("-")) return;

				let unformattedHP = unformatted.split(" ")[2].split("§c❤")[0];
				if (unformattedHP.includes("§e") || (unformattedHP.includes("§c"))) {
					Client.showTitle(`&c${name} is low!`, unformattedHP + "❤", 0, 10, 10);
				}
			}
		}
		if (line.includes("World:")) {
			world = line.replace("World: ", "")
			// console.log(`Your World is ${world}`);
			// console.log("Cleared dungeon death and secerts");
			dungeondeaths = {};
			dungeonsecrets = {};
		}
		scorei++;
	});
	// Scoreboard.setShouldRender(true);
});


var dungeondeaths = {};
var dungeonsecrets = {};
register("chat", function (message, event) {
	// ChatLib.chat(message);
	if (Settings.perf_chat) {
		return;
	}
	msg = removeColors(message);
	if (!message.includes(">") || !message.includes("[")) {
		if (message.includes("Died in the dungeon")){
			var name = msg.split(" Died in the dungeon")[0]
			if (dungeondeaths[`${name}`] == undefined || dungeondeaths[`${name}`] == NaN) {
				dungeondeaths[`${name}`] = 0
            }
			dungeondeaths[`${name}`] += 1;
			if (Settings.dungeondeathcounter) {
				ChatLib.chat(`&cDungeon Deaths:`);
				for (var property in dungeondeaths) {
					ChatLib.chat(`&c${property}: ${dungeondeaths[property]}`);
				}
            }
		}
		if (msg.toLowerCase().includes("found a")) {
			var name = msg.removeColors().toLowerCase().split(" found a")[0]
			name = name.replace(`dungeon buff! `,`&a`);
			// name = name.split(" ")[0]
			if (players[name] != undefined) {
				// ChatLib.chat(`${players[name].getName()} at ${players[name].getX().toFixed(0)} ${players[name].getY().toFixed(0)} ${players[name].getZ().toFixed(0)}`);
				findsecretnear(players[name], 5);
            }
			if (dungeonsecrets[`${name}`] == undefined || dungeondeaths[`${name}`] == NaN) {
				dungeonsecrets[`${name}`] = 0
			}
			if (!name.includes(" ")) {
				dungeonsecrets[`${name}`] += 1;
            }
			if (Settings.dungeonsecretcounter) {
				ChatLib.chat(`&aDungeon Secrets: +${dungeonsecrets[name]} ${name}`);
				for (var property in dungeonsecrets) {
					ChatLib.chat(`&a${property}: ${dungeonsecrets[property]}`);
				}
            }
		}
		if (Settings.dungeonsolverscammers) {
			if (msg.includes("Liam:The reward is not in my chest!")) {
				ChatLib.chat(`&aThe BUFF is in Liam's chest`);
			}
			if (msg.includes("Noah:At least one of them is lying, and the reward is not in william's chest.")) {
				ChatLib.chat(`&aThe BUFF is in Noah's chest`);
			}
			if (msg.includes("Noah:My chest doesn't have the reward we are all telling the truth.")) {
				ChatLib.chat(`&aThe BUFF is in Noah's chest`);
			}
			if (msg.includes("Liam:My chest has the reward and I'm telling the truth!")) {
				ChatLib.chat(`&aThe BUFF is in Liam's chest`);
			}
			if (msg.includes("Liam:The reward isn't in any of our chests.")) {
				ChatLib.chat(`&aThe BUFF is in Liam's chest`);
			}
			if (msg.includes("William:Both of them are telling the truth. Also, Liam has the reward in their chest.")) {
				ChatLib.chat(`&aThe BUFF is in William's chest`);
			}
        }
		

		
    }
	
	

}).setCriteria("${message}");


var whitelist = [];
// var toggled = false
var user = "";

register('command', togglehideplayer).setCommandName('hideplayers');
function togglehideplayer() {
	// ChatLib.chat(`Setting? ${Settings.hideplayersnew} User? ${user}`);
	if (Settings.hideplayers) {
		Settings.hideplayers = false;
		ChatLib.chat("&r&6[Hide Players] &r&cPLAYERS ARE BACK!");
	} else {
		Settings.hideplayers = true;
		ChatLib.chat("&r&6[Hide Players] &r&ePLAYERS ARE NOW HIDDEN!");
	}
}

const EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer");
register("renderEntity", (entity, pos, ticks, event) => {
	if (Settings.perf_renderEntity) {
		return;
	}
	if (isonskyblock()) {
		if (entity.getEntity() instanceof EntityPlayer) {
			let ign = entity.getName();
			// if (user == "") {
				// user = Player.getDisplayName().getText().removeColors();
            // }
			if ((entity.getClassName() == "EntityOtherPlayerMP")) {
				// ChatLib.chat(event)
				TabList.getUnformattedNames().forEach(playername => {

					if (playername.includes(ign) && (whitelist.includes(ign) == false)) {

						if (Settings.hideplayers) cancel(event);
						if (Settings.glowingplayers) drawBox(entity, Settings.glowingplayerscolor.getRed() / 255, Settings.glowingplayerscolor.getGreen() / 255, Settings.glowingplayerscolor.getBlue() / 255, 2, 0.8, 2, ticks);

					}
				})
			}
		}
	}
});

var AllItems = [];
var AllItemsinv = [];
var itemsHighlight = [];
var itemsHighlight2 = [];
var NameBelow = [];

register("tick", () => {
	if (Settings.perf_tick) {
		return;
	}
	AllItems = [];
	AllItemsinv = [];
	itemsHighlight = [];
	itemsHighlight2 = [];
	NameBelow = [];
	if (Player.getOpenedInventory() !== null) {
		if (Settings.dungeonsolverf7) {
			if (removeColors(Player.getOpenedInventory().getName()).startsWith("Click On All item start ")) {
				let letter = removeColors(Player.getOpenedInventory().getName()).replace("Click On All item start ", "").toLowerCase();
				// ChatLib.chat(letter);
				let i = 0;
				Player.getOpenedInventory().getItems().forEach((item) => {
					if (removeColors(item.getName()).toLowerCase().startsWith(letter) && !item.isEnchanted()) {
						// console.log(i);
						itemsHighlight.push(i);
					}
					i++;
				})
			}
			if (removeColors(Player.getOpenedInventory().getName()).startsWith("Click On All item color ")) {
				let letter = removeColors(Player.getOpenedInventory().getName()).replace("Click On All item color ", "").toLowerCase();
				let i = 0;//silver -> light grey die, white -> wool--
				Player.getOpenedInventory().getItems().forEach((item) => {
					if (removeColors(item.getName()).toLowerCase().startsWith(letter) && !item.isEnchanted()) {
						itemsHighlight.push(i)
					}
					i++
				})
			}
		}
		if ((Settings.dungeontpnames && Player.getOpenedInventory().getName().includes(`Teleport to teammate`)) || (Settings.dungeonrevstone && Player.getOpenedInventory().getName().includes(`Revive a ghost`))) {
			let i = 0;
			Player.getOpenedInventory().getItems().forEach((item) => {
				if (i < (Player.getOpenedInventory().getSize() - Player.getInventory().getSize())) {
					if (item != undefined && item.getUnlocalizedName() == `item.skull`) {
						// console.log(`Item ${item.getUnlocalizedName()} at slot ${i}`);
						NameBelow.push(i)
					}
                }
				// console.log(`Item ${item.getUnlocalizedName()} at slot ${i}`);
				i++
			})
		}
		if (Settings.itemrarity) {
			try {
				var i = 0;
				Player.getOpenedInventory().getItems().forEach((item) => {
					var itemname = item.getName().replaceFormatting();
					if (i < (Player.getOpenedInventory().getSize() - Player.getInventory().getSize() + 4) && itemname.includes(`&`) && Player.getOpenedInventory().getName() != "container") {
						// console.log(`Item ${item.getUnlocalizedName()} at slot ${i}`);
						AllItems.push(i);
					}
					// console.log(`pushed ${i}`);
					// console.log(`Item ${item.getUnlocalizedName()} at slot ${i}`);
					i++
				})
				var i = 0;
				Player.getInventory().getItems().forEach((item) => {
					var itemname = item.getName().replaceFormatting();
					if (Player.getOpenedInventory().getName() == "container" && itemname.includes(`&`)) {
						// console.log(`Item ${item.getUnlocalizedName()} at slot ${i}`);
						AllItemsinv.push(i);
					}
					// console.log(`pushed ${i}`);
					// console.log(`Item ${item.getUnlocalizedName()} at slot ${i}`);
					i++
				})
            } catch (e) {
				console.log(`${e}`)
            }
        }
	}
});


//const GlStateManager = Java.type("net.minecraft.client.renderer.GlStateManager");
//const GL11 = Java.type("org.lwjgl.opengl.GL11");
register("postGuiRender", (gui, mouseX, mouseY) => {
	if (Settings.perf_postGuiRender) {
		return;
	}
	// startFunctionPerformanceAnalize("Post gui render event")
	//render code from ExperimentationTable because mine wouldent work 50% of the time

	let inventory;
	try {
		inventory = Player.getOpenedInventory();
	} catch (e) {
		return;
	}
	GlStateManager.func_179094_E(); // push
	// GlStateManager.func_179140_f(); // disableLighting
	// GlStateManager.func_179097_i(); // disableDepth
	//GlStateManager.func_179126_j(); // enableDepth
	//GlStateManager.func_179147_l(); // enableBlend
	//GlStateManager.func_179141_d(); // enableAlpha
	itemsHighlight.forEach((slot) => {
		if (slot < 36) {
			const x = slot % 9;
			const y = Math.floor(slot / 9);
			const renderX = Renderer.screen.getWidth() / 2 + ((x - 4) * 18);
			const renderY = (Renderer.screen.getHeight() + 10) / 2 + ((y - inventory.getSize() / 18) * 18);
			if (Settings.dungeonsolverf7) {
				Renderer.translate(0, 0, 260);
				Renderer.drawRect(Renderer.color(0, 255, 0, 120), renderX - 8, renderY - 8, 16, 16);
            }
        }
	})

	NameBelow.forEach((slot) => {
		if (slot < 36) {
			const x = slot % 9;
			const y = Math.floor(slot / 9);
			const renderX = Renderer.screen.getWidth() / 2.2 + ((x - 4) * 18);
			const renderY = (Renderer.screen.getHeight() + 10) / 2 + ((y - inventory.getSize() / 18) * 18) + 10;
			if (Settings.dungeontpnames || Settings.dungeonrevstone) {
				Renderer.translate(0, 0, 260);
				// Renderer.drawRect(Renderer.color(0, 255, 0, 120), renderX - 8, renderY - 8, 16, 16);
				Renderer.drawString(`${Player.getOpenedInventory().getStackInSlot(slot).getName()}`, renderX, renderY)
			}
		}
	})

	AllItems.forEach((slot) => {
		// console.log(`${slot}`);
		const x = slot % 9;
		const y = Math.floor(slot / 9);
		const renderX = Renderer.screen.getWidth() / 2 + ((x - 4) * 18) + 8;
		const renderY = (Renderer.screen.getHeight() + 10) / 2 + ((y - inventory.getSize() / 18) * 18) + 8;
		if (Settings.itemrarity && opengui.includes(`inventory`)) {
			Renderer.translate(0, 0, 260);
			// Renderer.drawRect(Renderer.color(0, 255, 0, 120), renderX - 8, renderY - 8, 16, 16);
			// console.log(`${Player.getOpenedInventory().getStackInSlot(slot).getName()}`);
			Renderer.drawCircle(getcolorfromcode(Player.getOpenedInventory().getStackInSlot(slot).getName()), renderX - 8, renderY - 8, 7.5, 360,1)

			//Renderer.drawRect(getcolorfromcode(Player.getOpenedInventory().getStackInSlot(slot).getName()), renderX - 8, renderY - 8, 16, 15);


			// Renderer.drawString(`${Player.getOpenedInventory().getStackInSlot(slot).getName()}`, renderX, renderY)
			// renderRarity(renderX, renderY, "error");
		}
	})
	
	AllItems.forEach((slot) => {
		// console.log(`${slot}`);
		const x = slot % 9;
		const y = Math.floor(slot / 9);
		const renderX = Renderer.screen.getWidth() / 2 + ((x - 4) * 18) + 8;
		const renderY = (Renderer.screen.getHeight() + 10) / 2 + ((y - inventory.getSize() / 18) * 18) + 8;
		if (Settings.itemrarity && opengui.includes(`inventory`)) {
			Renderer.translate(0, 0, 260);
			// Renderer.drawRect(Renderer.color(0, 255, 0, 120), renderX - 8, renderY - 8, 16, 16);
			// console.log(`${Player.getOpenedInventory().getStackInSlot(slot).getName()}`);
			Renderer.drawCircle(getcolorfromcode(Player.getOpenedInventory().getStackInSlot(slot).getName()), renderX - 8, renderY - 8, 7.5, 360, 1)

			//Renderer.drawRect(getcolorfromcode(Player.getOpenedInventory().getStackInSlot(slot).getName()), renderX - 8, renderY - 8, 16, 15);


			// Renderer.drawString(`${Player.getOpenedInventory().getStackInSlot(slot).getName()}`, renderX, renderY)
			// renderRarity(renderX, renderY, "error");
		}
	})

	AllItemsinv.forEach((slot) => {
		// console.log(`${slot}`);
		var x = slot % 9;
		var y = Math.floor(slot / 9);

		var renderY;
		if (slot >= 36 && slot <= 39) {
			if (slot == 36) {
				var rslot = 39;
			}
			if (slot == 37) {
				var rslot = 38;
			}
			if (slot == 38) {
				var rslot = 37;
			}
			if (slot == 39) {
				var rslot = 36;
			}
			y = rslot % 9;
			renderY = (Renderer.screen.getHeight() + 9.5) / 2 + ((y - inventory.getSize() / 18) * 18) - 19;
			x = 0;
		}
		else if (slot < 9) {
			// console.log(`${slot} ${Player.getInventory().getStackInSlot(slot)}`);
			renderY = (Renderer.screen.getHeight() + 4.5) / 1.42 + ((y - inventory.getSize() / 18) * 18) + 8;
		}
		else {
			renderY = (Renderer.screen.getHeight() + 10) / 1.79 + ((y - inventory.getSize() / 18) * 18) + 8;
		}
		const renderX = Renderer.screen.getWidth() / 2 + ((x - 4) * 18) + 8;
		//console.log(`${Player.getOpenedInventory().getContainer()}`);
		//const renderX = Player.getOpenedInventory().getContainer().func_75139_a(slot).field_75223_e;
		//const renderY = Player.getOpenedInventory().getContainer().func_75139_a(slot).field_75221_f;
		// console.log(`${opengui}`);
		if (Settings.itemrarity && opengui.includes(`inventory`)) {
			Renderer.translate(0, 0, 260);
			// Renderer.drawRect(Renderer.color(0, 255, 0, 120), renderX - 8, renderY - 8, 16, 16);
			// console.log(`${slot}`);
			// console.log(`${slot} ${Player.getInventory().getStackInSlot(slot)}`);
			var color = getcolorfromcode(Player.getInventory().getStackInSlot(slot).getName());
			Renderer.drawCircle(color, renderX - 8, renderY - 9, 7.5, 100, 3)

			// Renderer.drawRect(getcolorfromcode(Player.getOpenedInventory().getStackInSlot(slot).getName()), renderX - 8, renderY - 8, 16, 15);

			// Renderer.drawString(`${Player.getOpenedInventory().getStackInSlot(slot).getName()}`, renderX, renderY)
			// renderRarity(renderX, renderY, "error");
		}
	})

	// GlStateManager.func_179145_e(); //enableLighting
	// GlStateManager.func_179126_j(); //enableDepth
	//GlStateManager.func_179084_k(); // disableBlend 
	//GlStateManager.func_179118_c(); // disableAlpha 
	GlStateManager.func_179121_F(); // pop


	// endFunctionPerformanceAnalize("Post gui render event")
})

var WitherShieldcd = 0;
displays[`WitherShield`] = new Display();

register("renderOverlay", dooverlay);
function dooverlay(event) {
	if (Settings.perf_renderOverlay) {
		return;
	}
	for (var i = 0; i < 9; i++) {
		var renderX = Renderer.screen.getWidth() / 2.12 + ((0 - 4) * 16);
		var renderY = Renderer.screen.getHeight() - 21;
		// Renderer.drawCircle(getcolorfromcode(`4`), renderX - 8, renderY - 8, 7.5, 360, 1)
		loopitem = Player.getInventory().getStackInSlot(i);
		if(loopitem != null){
			var color = getcolorfromcode(loopitem.getName());
			// console.log(`${i} ${color} ${Renderer.color(255, 255, 255, Settings.itemrarityalpha)}`)
			// Renderer.drawRect(getcolorfromcode(loopitem.getName()), renderX + 1 + i*20, renderY, 20, 20);
			if (color != Renderer.color(255, 255, 255, Settings.itemrarityalpha) && Settings.itemrarity) {
				Renderer.drawCircle(color, renderX + 11.6 + i * 20, renderY + 10.5, 7.5, 50, 3)
			}
		}
	}
    if (Settings.withershieldcd) {
		// console.log(`ws 1`);
		if (isonskyblock()) {
			// console.log(`ws 2`);
			
			displays[`WitherShield`].setRenderLoc(Settings.withershieldx, Settings.withershieldy);
			// console.log(`${Date.now() - WitherShieldcd}`);
			if (Date.now() - WitherShieldcd < 5200) {
				displays[`WitherShield`].setShouldRender(true);
				// console.log(`ws 3`);
				var dbw = (5.2 - (Date.now() - WitherShieldcd) / 1000).toFixed(3);
				// console.log(`${dbw}`);
				var dbw = parseFloat(dbw);
				displays[`WitherShield`].setLine(0, `&6Shield: &a${dbw}s`);
			}
			else if (Settings.withershieldready) {
				displays[`WitherShield`].setShouldRender(true);
				displays[`WitherShield`].setLine(0, `&6Shield: &aReady`);
			}
            else {
				displays[`WitherShield`].setShouldRender(false);
				displays[`WitherShield`].setLine(0, `&6Shield: &aReady`);
            }
		}
        else {
			displays[`WitherShield`].setShouldRender(false);
        }
    }
	// Renderer.drawRect(Renderer.color(255, 255, 255, 100), 0, 0, 100, 100);
}

register("renderWorld", waypointsrender);

function waypointsrender() {
	if (Settings.perf_renderWorld) {
		return;
	}
	if (Settings.dungeonwaypoints == true) {
		for (var property in Saved.AutoWaypoints) {
			var waypoint = Saved.AutoWaypoints[property].split(" ");
			var n = waypoint[0];
			var x = waypoint[1];
			var y = waypoint[2];
			var z = waypoint[3];
			if (waypoint[4] == "ON") {
				Tessellator.drawString(n, x, y, z);
			}
		}
	}

	if (Settings.textInput == "F7wp") {
		Tessellator.drawString("S", -1054.36, 155.38 - 2, -1232.3);
		Tessellator.drawString("S", -1051.75, 155.0 - 2, -1249.61);
		Tessellator.drawString("S", -1056.7, 145.5 - 2, -1245.86);
		Tessellator.drawString("S", -1052.33, 156.0 - 2, -1254.24);
		Tessellator.drawString("S", -1046.7, 121.0 - 2, -1246.7);
		Tessellator.drawString("S", -1054.49, 134.0 - 2, -1251.3);
		Tessellator.drawString("S", -1043.26, 136.0 - 2, -1270.7);
		Tessellator.drawString("S", -1033.76, 150.0 - 2, -1202.31);
		Tessellator.drawString("S", -1030.49, 154.0 - 2, -1160.61);
		Tessellator.drawString("S", -1041.37, 125.88 - 2, -1152.48);
		Tessellator.drawString("S", -1041.62, 125.88 - 2, -1157.75);
		Tessellator.drawString("S", -1024.43, 153.88 - 2, -1234.09);
		Tessellator.drawString("S", -1002.3, 153.0 - 2, -1182.3);
		Tessellator.drawString("S", -998.38, 136.81 - 2, -1172.7);
		Tessellator.drawString("S", -972.7, 135.88 - 2, -1170.7);
		Tessellator.drawString("S", -941.79, 151.88 - 2, -1169.31);
		Tessellator.drawString("S", -898.99, 135.88 - 2, -1138.62);
		Tessellator.drawString("S", -916.43, 174.0 - 2, -1103.24);
		Tessellator.drawString("S", -916.61, 174.0 - 2, -1115.76);
		Tessellator.drawString("S", -883.64, 151.0 - 2, -1130.59);
		Tessellator.drawString("S", -918.3, 153.5 - 2, -1139.7);
		Tessellator.drawString("S", -919.33, 163.88 - 2, -1136.11);
		Tessellator.drawString("S", -871.7, 157.5 - 2, -1104.7);
		Tessellator.drawString("S", -1055.55, 134.88 - 2, -1126.7);
		Tessellator.drawString("S", -1043.48, 135.88 - 2, -1128.67);
		Tessellator.drawString("S", -1038.24, 156.0 - 2, -1091.39);
		Tessellator.drawString("S", -1032.7, 156.88 - 2, -1097.0);
		Tessellator.drawString("S", -1055.7, 145.0 - 2, -1093.3);
		Tessellator.drawString("S", -1055.3, 153.0 - 2, -1109.69);
		Tessellator.drawString("S", -1036.3, 147.0 - 2, -1108.16);
		Tessellator.drawString("S", -1021.5, 133.88 - 2, -1120.7);
		Tessellator.drawString("S", -1010.76, 153.94 - 2, -1086.51);
		Tessellator.drawString("S", -996.11, 117.0 - 2, -1128.7);
		Tessellator.drawString("S", -1007.3, 149.0 - 2, -1135.54);
		Tessellator.drawString("S", -973.7, 154.0 - 2, -1115.24);
		Tessellator.drawString("S", -971.05, 155.0 - 2, -1114.3);
		Tessellator.drawString("S", -954.47, 135.0 - 2, -1135.76);
		Tessellator.drawString("S", -935.7, 138.0 - 2, -1140.95);
		Tessellator.drawString("S", -936.3, 141.0 - 2, -1118.7);
		Tessellator.drawString("S", -960.95, 142.0 - 2, -1115.3);
		Tessellator.drawString("S", -966.93, 140.5 - 2, -1096.62);
		Tessellator.drawString("S", -1032.3, 135.0 - 2, -1128.55);
		Tessellator.drawString("S", -991.7, 134.88 - 2, -1220.3);
		Tessellator.drawString("S", -982.49, 138.88 - 2, -1219.22);
		Tessellator.drawString("S", -991.3, 136.5 - 2, -1198.3);
		Tessellator.drawString("S", -969.7, 148.0 - 2, -1204.76);
		Tessellator.drawString("S", -945.35, 136.88 - 2, -1192.3);
		Tessellator.drawString("S", -961.7, 138.0 - 2, -1199.3);
		Tessellator.drawString("S", -927.68, 136.0 - 2, -1210.3);
		Tessellator.drawString("S", -915.3, 155.5 - 2, -1224.58);
		Tessellator.drawString("S", -959.76, 147.36 - 2, -1223.92);
		Tessellator.drawString("S", -943.5, 155.0 - 2, -1237.5);
		Tessellator.drawString("S", -906.0, 152.0 - 2, -1211.3);
		Tessellator.drawString("S", -917.76, 152.0 - 2, -1213.35);
		Tessellator.drawString("S", -948.76, 126.0 - 2, -1224.47);
		Tessellator.drawString("S", -976.3, 137.0 - 2, -1262.78);
		Tessellator.drawString("S", -980.51, 151.0 - 2, -1257.7);
		Tessellator.drawString("S", -984.5, 135.0 - 2, -1268.5);
		Tessellator.drawString("S", -934.3, 143.0 - 2, -1154.95);
		Tessellator.drawString("S", -938.62, 149.0 - 2, -1151.3);
		Tessellator.drawString("S", -956.76, 125.0 - 2, -1256.3);
		Tessellator.drawString("S", -937.38, 143.0 - 2, -1268.76);
		Tessellator.drawString("S", -961.7, 132.5 - 2, -1253.3);
		Tessellator.drawString("S", -879.51, 135.0 - 2, -1237.24);
		Tessellator.drawString("S", -880.66, 154.06 - 2, -1234.09);
		Tessellator.drawString("S", -871.65, 135.5 - 2, -1179.58);
		Tessellator.drawString("S", -883.7, 153.5 - 2, -1205.7);
		Tessellator.drawString("S", -888.95, 144.0 - 2, -1269.64);
		Tessellator.drawString("S", -894.7, 134.0 - 2, -1209.58);
		Tessellator.drawString("S", -893.53, 133.5 - 2, -1085.53);
		Tessellator.drawString("S", -883.55, 136.88 - 2, -1142.4);
		Tessellator.drawString("S", -1012.76, 124.0 - 2, -1231.65);
		Tessellator.drawString("S", -1010.24, 124.0 - 2, -1231.91);
		Tessellator.drawString("S", -1014.24, 117.0 - 2, -1208.71);
		Tessellator.drawString("S", -958.5, 132.5 - 2, -1202.5);
		Tessellator.drawString("TNT", -1011.63, 124.0 - 2, -1179.3);
		Tessellator.drawString("l1", -1011.28, 123.0 - 2, -1179.84);
		Tessellator.drawString("l2", -1011.21, 124.0 - 2, -1193.7);
		Tessellator.drawString("l3", -998.3, 124.0 - 2, -1189.3);
		Tessellator.drawString("l4", -1011.58, 124.0 - 2, -1197.3);
		Tessellator.drawString("l5", -1001.07, 128.0 - 2, -1234.04);
		Tessellator.drawString("S", -870.7, 135.0 - 2, -1166.65);
		Tessellator.drawString("S", -895.7, 138.0 - 2, -1164.53);
		Tessellator.drawString("S", -1052.3, 139.0 - 2, -1102.3);
		Tessellator.drawString("S", -1055.7, 135.0 - 2, -1109.7);
		Tessellator.drawString("S", -1032.39, 144.0 - 2, -1099.7);
		Tessellator.drawString("S", -1046.56, 158.0 - 2, -1085.3);
		Tessellator.drawString("S", -979, 142, -1114);
		Tessellator.drawString("S", -1013, 141, -1180);
	}
}

var Griffincd = 0;
register("PlayerInteract", sbclickevent);
function sbclickevent(e1, e2, e3) {
	if (Settings.perf_PlayerInteract) {
		return;
	}
    if (!isonskyblock()) {
		return;
	}
	// console.log(`sbclick ${e1} ${e2} ${e3}`);
	if (Player.getHeldItem().getName().includes(`Spade`) && (Settings.griffinburrowwaypoint || Settings.griffinburrowesp)) {
		if (Date.now() - Griffincd > 2000) {
			ChatLib.command(`whereismygriffin`);
			Griffincd = Date.now();
        }
    }
}
register("packetSent", hitblcokevent);
function hitblcokevent(e1, e2, e3) {
	if (Settings.perf_packetSent) {
		return;
	}
	if (`${e1}`.includes(`C07`)) {
		if (Settings.griffinburrowwaypoint || Settings.griffinburrowesp) {
			let block = Player.lookingAt();
			// console.log(`blockloc ${block.getX()} ${block.getY()} ${block.getZ()}`)
			// console.log(`grifloc ${griffinloc}`)
			if (block.getX() == griffinloc[0] && block.getY() == griffinloc[1] && block.getZ() == griffinloc[2]) {
				if (Date.now() - Griffincd > 2000) {
					new Thread(() => {
						Thread.sleep(100);
						ChatLib.command(`whereismygriffin`);
						Griffincd = Date.now();
					}).start();
					
				}
			}
		}
    }
	// console.log(`${e1} ${e2} ${e3}`);
}

register("PlayerInteract", cancelme);



function cancelme(e1, e2, e3, e4, e5, e6) {
	if (Settings.perf_PlayerInteract) {
		return;
	}
    try {
		itemrn = Player.getHeldItem().getRegistryName();
    } catch (e) {
		return;
	}
	if (!isonskyblock() && !(Settings.textInput == "blockswordanyway")) {
		// console.log(`maxi get ban`);
		return;
	}
	if ((itemrn.includes("sword") && Settings.antiswordblock) || (Player.getHeldItem().getName().includes(`Terminator`) || Player.getHeldItem().getName().includes(`Juju`) && Settings.slayerfixshortbow)) {
		if (Player.lookingAt() instanceof Block) {
			// ChatLib.chat("work 1");
			if (Player.lookingAt().getRegistryName().includes("chest")) {
				// ChatLib.chat("work 2");
				return;
			}
			//else {
			//	var t1 = float(5);
			//	Client.sendPacket(new C08PacketPlayerBlockPlacement(Player.lookingAt().getBlockPos(), Player.getHeldItem().getItemStack(), t1, t1, t1));
   //         }
		}
		if (`${e1}` == "RIGHT_CLICK_BLOCK") {
			return;
		}
		cancel(e3)
		// console.log(`${e1} ${e2} ${e3} ${e4} ${e5} ${e6}`);
		Client.sendPacket(new C08PacketPlayerBlockPlacement(Player.getHeldItem().getItemStack()));
    }
	// ChatLib.chat("clicked? ");
}

	// if (packet instanceof C08PacketPlayerBlockPlacement) console.log(`C08! ${packet}`);
	// console.log(packett);
	
//register("PlayerInteract", () => {
//	let e = Player.getHeldItem().getName();
//	var a = World.getBlockAt(-669, 9, -275);
//	e.includes("Summoning Eye") && ("End Portal" === a.getName() ? (ChatLib.command("is"), ChatLib.chat("&c&lGAMBLING PREVENTION TRIGGERED. &r&eYou have been warped to your private island!")) : (ChatLib.command("bz"), ChatLib.chat("&c&lGAMBLING PREVENTION TRIGGERED. &r&ePlease sell the eye!")))
//});

register("chat", watcheral).setCriteria("${message}");
function watcheral(message, event) {
	if (Settings.perf_chat) {
		return;
	}
	var msg = removeColors(message);
	if (msg.includes("The Watcher: Thats it for now") && Settings.dungeonwatcher) {
		Client.showTitle("&c&lWATCHER READY", "", 0, 50, 10);
	}
}

register("chat", watcherall).setCriteria("${message}");
function watcherall(message, event) {
	if (Settings.perf_chat) {
		return;
	}
	var msg = removeColors(message);
	if (msg.includes("The Watcher: I can watch you.") && Settings.dungeonwatcher) {
		Client.showTitle("&c&lWATCHER READY IN 20 SECONDS", "", 0, 50, 10);
	}
}
// var chat = new GuiChat();

// Chat anywhere
// console.log(`${Client.getMinecraft()}`);
// var inputText = new GuiTextField(0, Client.getMinecraft().fontRendererObj,
// 0, 0, 0, 0);
var textinputs = [];
var opengui = "";
var chatinput = new TextBox();
var nval = new TextBox();
//var errorgadol = new TextBox(10,10,100,10);
//errorgadol.show = true;
chatinput.name = "chat";
textinputs.push(chatinput)
//textinputs.push(errorgadol)
chatinput.inputText = new Text("", 0, 0);
chatinput.input  = "";
chatinput.inputlist = [];
var inputBox = new Rectangle(Renderer.color(0, 0, 0, 65), 0, 0, 0, 0).setOutline(Renderer.color(0, 0, 0, 45), 1);
var autocompletebox = new Rectangle(Renderer.color(0, 0, 0, 100), 0, 0, 0, 0).setOutline(Renderer.color(0, 0, 0, 100), 0);
var autocompletebuttons = {};
var autocompletetext = new Text("", 0, 0);;
chatinput.chatfo = false;
var autocompletelist = [];
var tabstate = "none";
var tabwhat = "";
var tabnow = "";
var nninput = "";
var ninput = "";
chatinput.cursor = "";
chatinput.cursorindex = 0;
var tabindex = 0;

register("PacketReceived", packetfun);

function packetfun(packet, event) {
	if (Settings.perf_PacketReceived) {
		return;
	}
	var packett = `${packet}`;
	//if (!packett.includes(`CustomPayload`)) {
	//	console.log(packett);
	//}
	//if (packett.includes(`SetSlot`)) {
	//	cancel(event);
 //   }
	
	if (packett.includes("PacketTabComplete")) {
		if (Settings.textInput == "debugtab") console.log(`${packet}`);
		autocompletelist = [];
		var autocompletelistcilent = Saved.CilentCommandList;
		var autocompletelistt = packet.func_149630_c();
		tabstate = "got";
		if (chatinput.chatfo == true) {
			if (Settings.textInput == "debugtab") console.log(`Tabs ${typeof autocompletelist}: ${autocompletelist}`);
		}
		for (var property in autocompletelistt) {
			// console.log(`${property}`);
			autocompletelist[property] = autocompletelistt[property];
		}
		if (Settings.textInput == "debugtab") console.log(`${autocompletelist}`)
		for (var property in autocompletelistcilent) {
			var loopvalue = autocompletelistcilent[property].split(" ");
			var inputsplit = chatinput.input .split(" ");
			// console.log(`${inputsplit.length - 1}`);
			if (loopvalue[inputsplit.length - 1] != undefined && loopvalue[inputsplit.length - 1].startsWith(inputsplit[inputsplit.length - 1]) && inputsplit[inputsplit.length - 2] == loopvalue[inputsplit.length - 2] && inputsplit[0].startsWith(loopvalue[0][0])) {
				// loopvalue = loopvalue.replace(input, "");
				// console.log(`ClientCMD! work! ${loopvalue}`);
				if (!autocompletelist.includes(loopvalue[inputsplit.length - 1])) {
					autocompletelist[autocompletelist.length] = loopvalue[inputsplit.length - 1];
                }
				
            }
		}
		for (var property in ClientCommandHandler.instance.latestAutoComplete) {
			try {
				var unlv = removeColors(ClientCommandHandler.instance.latestAutoComplete[property])
				var loopvalue = unlv.split(" ");
				var inputsplit = chatinput.input.split(" ");
				// console.log(`${loopvalue}`);
				if (loopvalue[inputsplit.length - 1] != undefined && loopvalue[inputsplit.length - 1].startsWith(inputsplit[inputsplit.length - 1]) && inputsplit[inputsplit.length - 2] == loopvalue[inputsplit.length - 2] && inputsplit[0].startsWith(loopvalue[0][0])) {
					// loopvalue = loopvalue.replace(input, "");
					// console.log(`ClientCMD! work! ${loopvalue}`);
					if (!autocompletelist.includes(loopvalue[inputsplit.length - 1])) {
						autocompletelist[autocompletelist.length] = loopvalue[inputsplit.length - 1];
					}

				}
            } catch (e) {
				console.log(`Error Happend while trying to client tab ${e}`)
            }	
		}
		tabnow = autocompletelist[0];

	}
}

function sendautocompletereq(leftOfCursor, full) {
	tabstate = "req";
	//var _x = new intType(Player.getX());
	//var _y = new intType(Player.getY());
	//var _z = new intType(Player.getZ());
	//var _blockpos = new BlockPos(_x, _y, _z);
	if (leftOfCursor[0] != undefined) {
		// console.log(`${leftOfCursor[0]}`)
		ClientCommandHandler.instance.autoComplete(leftOfCursor, full);
    }
	if (leftOfCursor != undefined || leftOfCursor != null) {
        try {
			Client.sendPacket(new C14PacketTabComplete(leftOfCursor, null));
        } catch (e) {
			console.log(`Cannot req autocomplete ${e}`)
        }
		
	}
	// console.log(`req ${ClientCommandHandler.instance.latestAutoComplete}`);
}
var TestText = new Text("");
function checkKey(key) {
	return (
		(key >= 2 && key <= 13) ||
		(key >= 16 && key <= 27) ||
		(key >= 30 && key <= 41) ||
		(key >= 43 && key <= 53) ||
		(key >= 73 && key <= 83) ||
		(key === 55) || (key === 181) || (key === 57)
	);
}

register("worldLoad", () => {
	// console.log(`load?`);
	for (var property in textinputs) {
		var val = textinputs[property];
		if (val.name == `chat` && Settings.chatinvconnect) {
			setTimeout(() => {
				if (val.input != "") {
					runcmd(val.input);
					console.log(`execute join command ${val.input}`);
					val.input = "";
				}
			},100);
            
        }
    }
})

var rancommands = [];
var rancommandi = 0;
register("guiKey", guikey);
function guikey(char, key, gui, event) {
	if (Settings.perf_guiKey) {
		return;
	}
	//if (opengui.includes("Chat"))
	//	return;
	//strgui = `${Player.getOpenedInventory()}`
	//if (strgui.includes("ContainerPlayer"))
	//	return;
	// backspace
	// console.log(`errorman 1`);
	if (Settings.disableupdate003) {
		return;
	}
	// console.log(`errorman 2`);
	try {

		if (tabnow != "") {
			if (key === 1) {
				cancel(event);
				tabnow = "";
			}
		}
		for (var property in textinputs) {
			var val = textinputs[property];
			// console.log(`texts ${property} ${textinputs[property].name}`)
			if (opengui.includes("Chat") && val.name == "chat") {
				val.input = Client.getCurrentChatMessage();
				if (!Settings.chattabnormal && key == 28) {
					if (!rancommands.includes(`${val.input}`)) {
						rancommands.push(`${val.input}`)
						// Client.getChatGUI().func_146403_a(`${val.input}`)
					}
					// rancommands.push(val.input)
					val.input = "";
                }
			}
			if (val.chatfo == true || (opengui.includes("Chat") && Settings.chattabnormal)) {
                if (val.chatfo == true) {
					// console.log(`cancel from ${property}`);
                }
				if (val.chatfo == true && !opengui.includes("Chat"))
					cancel(event);
				// var which = event.which;
				if (Settings.textInput == "debuganychat") console.log(`[anychatb] typed ${key} / ${char} at ${val.cursorindex} / ${val.input.charAt(val.cursorindex)} / ${val.input}`);

				//if (tabnow != "" && val.ninput != undefined && key == 57 && val.input == tabwhat && tabstate == "got" && nninput.toLowerCase().includes(val.input.toLowerCase())) {
				//	if (Settings.textInput == "debugtab") console.log("tab complete with space");
				//	tabnow = "";
				//	chatinput.input = removeColors(nninput);
				//	ninput = removeColors(nninput);
				//	nninput = removeColors(nninput);
				//	if (opengui.includes("Chat") && Settings.chattabnormal) {
				//		Client.setCurrentChatMessage(nninput);
				//	}
				//	chatinput.cursorindex = chatinput.input.length;
				//	tabnow = "";
				//	//if (Settings.textInput == "debugtab") console.log("tab complete with space");
				//	//nval = val;
				//	//val.input = removeColors(nval.ninput);
				//	//val.ninput = removeColors(nval.ninput);
				//	//nval.ninput = removeColors(nval.ninput);
				//	//val.cursorindex = val.input.length;
				//	//tabnow = "";
				//	//if (opengui.includes("Chat")) {
				//	//	Client.setCurrentChatMessage(nval.ninput);
				//	//}
				//}
				val.inputlist = val.ninput.split("");
				if (char == "") {
					continue;
				}
				if (Keyboard.isKeyDown(29)) { // ctrl
					var inputlisttemp = val.ninput.split(" ");
                    if (key === 47) { // v
						const transferable = Toolkit.getDefaultToolkit().getSystemClipboard().getContents(null);
						if (transferable != null && transferable.isDataFlavorSupported(DataFlavor.stringFlavor)) {
							var paste = transferable.getTransferData(DataFlavor.stringFlavor);
							var oldinput = val.input;
							val.inputlist = val.ninput.split("");
							// console.log(`${val.ninput} ${val.inputlist}`);
							val.inputlist.splice(val.cursorindex, 0, paste)
							val.input = removeColors(val.inputlist.join(""));
							val.cursorindex += paste.length;
						}
					}
					if (key === 46) { // c
						ChatLib.command(`ct copy ${val.input}`,true);
						// const transferable = Toolkit.getDefaultToolkit().getSystemClipboard().getContents(null);
						//if (transferable != null && transferable.isDataFlavorSupported(DataFlavor.stringFlavor)) {
						//	var paste = transferable.getTransferData(DataFlavor.stringFlavor);
						//	var oldinput = val.input;
						//	val.inputlist = val.ninput.split("");
						//	// console.log(`${val.ninput} ${val.inputlist}`);
						//	val.inputlist.splice(val.cursorindex, 0, paste)
						//	val.input = removeColors(val.inputlist.join(""));
						//	val.cursorindex += paste.length;
						//}
					}
					if (key === 30) { // a
						// ChatLib.command(`ct copy ${val.input}`);
						val.input = "";
						val.cursorindex = 0;
					}

				}
				if (key === 199) {
					val.cursorindex = 0;
				}
				if (key === 207) {
					val.cursorindex = val.input.length;
				}
				if (key === 14 && !opengui.includes("Chat")) { //backspace
					if (val.cursorindex < 0) {
						val.cursorindex = 0;
					}
					if (val.cursorindex == 0) {
						continue;
					}
					if (val.cursorindex > val.input.length) {
						val.cursorindex = val.input.length;
					}
					if (Keyboard.isKeyDown(29)) {
						val.inputlist = val.ninput.split(" ");
						var worddel = "";
						var worddeli = -1;
						var worddelii = 0;
						var index = 0;
						var indexw = 0;
						val.inputlist.forEach(val => {
							// console.log(`${indexscam} ${tjing}`)
							var valval = `${val}`;
							index += valval.length;
							if (index >= val.cursorindex && worddeli == -1) {
								worddeli = indexw;
								worddelii = index;
								worddel = valval;
								// console.log(`${valval} need del`);
							}

							index++;
							indexw++;
						});
						val.cursorindex -= worddel.length;
						val.inputlist.splice(worddeli, 1)
						val.input = removeColors(val.inputlist.join(" "));
					}
					else {
						val.cursorindex -= 1;
						// console.log(`cursor in ${cursorindex}`)
						val.inputlist = val.ninput.split("");
						var deleted = val.inputlist.splice(val.cursorindex, 1)
						val.ninput = val.inputlist.join("");
						// console.log(`Deleted ${deleted} at ${inputlist} it has ${inputlist[cursorindex]}`);
						//if (val.inputlist[val.cursorindex] != undefined) {
						//	var deleted = val.inputlist.splice(val.cursorindex, 1)
						//}
						val.input = removeColors(val.inputlist.join(""));
					}

					// input = input.slice(0, -1);

					if (val.cursorindex < 0) {
						val.cursorindex = 0;
					}
					if (val.cursorindex > val.input.length) {
						val.cursorindex = val.input.length;
					}
				}
				else if (key === 211 && !opengui.includes("Chat")) { //del
					if (val.cursorindex < 0) {
						val.cursorindex = 0;
					}
					if (val.cursorindex > val.input.length) {
						val.cursorindex = val.input.length;
					}
					if (Keyboard.isKeyDown(29)) {
						val.inputlist = val.ninput.split(" ");
						var worddel = "";
						var worddeli = -1;
						var worddelii = 0;
						var index = 0;
						var indexw = 0;
						val.inputlist.forEach(val => {
							// console.log(`${indexscam} ${tjing}`)
							var valval = `${val}`;
							index += valval.length;
							if (index >= val.cursorindex && worddeli == -1) {
								worddeli = indexw;
								worddelii = index;
								worddel = valval;
								// console.log(`${valval} need del`);
							}

							index++;
							indexw++;
						});
						val.cursorindex += worddel.length;
						val.inputlist.splice(worddeli, 1)
						val.input = removeColors(val.inputlist.join(" "));
					}
					else {
						// val.cursorindex -= 1;
						// console.log(`cursor in ${cursorindex}`)
						val.inputlist = val.ninput.split("");
						var deleted = val.inputlist.splice(val.cursorindex, 1)
						// console.log(`Deleted ${deleted} at ${inputlist} it has ${inputlist[cursorindex]}`);
						//if (val.inputlist[val.cursorindex] != undefined) {
						//	var deleted = val.inputlist.splice(val.cursorindex, 1)
						//}
						val.ninput = val.inputlist.join("");
						val.input = removeColors(val.inputlist.join(""));
					}

					// input = input.slice(0, -1);

					if (val.cursorindex < 0) {
						val.cursorindex = 0;
					}
					if (val.cursorindex > val.input.length) {
						val.cursorindex = val.input.length;
					}
				}

				else if (key === 203 && !opengui.includes("Chat")) { // arrow left
					if (Keyboard.isKeyDown(29)) {
						val.cursorindex -= inputlisttemp[inputlisttemp.length - 1].length - 1;
					}
					val.cursorindex -= 1;
					if (val.cursorindex < 0) {
						val.cursorindex = 0;
					}
					if (val.cursorindex > val.input.length) {
						val.cursorindex = val.input.length;
					}
				}
				else if (key === 205 && !opengui.includes("Chat")) { // arrow right
					if (Keyboard.isKeyDown(29)) {
						val.cursorindex += inputlisttemp[inputlisttemp.length - 1].length - 1;
					}
					val.cursorindex += 1;
					if (val.cursorindex < 0) {
						val.cursorindex = 0;
					}
					if (val.cursorindex > val.input.length) {
						val.cursorindex = val.input.length;
					}
					chatinput.UpdateCursor();
				}
				else if (key === 28 &&  val.name == "chat") { // enter
					if (val.input != "") {
						// console.log(`added ${val.input} to ran commands`)
						if (!rancommands.includes(`${val.input}`)) {
							rancommands.push(`${val.input}`)
							// Client.getChatGUI().getSentMessages()
                        }
						
                    }
					if (!opengui.includes("Chat")) {
						if (val.input.startsWith("/")) {
							val.ninput = val.input.slice(1, val.input.length)
							// console.log(`command ${input}`);
							if (val.input == "/ct load") {
								ChatTriggers.loadCT()
								continue;
							}
							if (val.input == "/ct reload") {
								ChatTriggers.loadCT()
								continue;
							}
							if (val.input == "/sbd") {
								val.input = "";
								Settings.openGUI()
								continue;
							}
							// ChatLib.command(val.ninput, false);
						}
						if (val.input != "") {
							runcmd(val.input);
							val.input = "";
							val.cursorindex = 0;
							tabstate = "none";
							tabnow = "";
							autocompletelist = [];
						}
						val.UpdateCursor();

                    }
				}
				else if (key === 208 && val.name == "chat") { // arrow up
                    if (tabnow != "") {
						if (opengui.includes("Chat")) {
							cancel(event);
						}
						tabindex++;
						if (autocompletelist[tabindex] == undefined) {
							tabindex = 0;
							// tabnow = autocompletelist[0];
						}
						tabnow = autocompletelist[tabindex];
					}
					else {
						rancommandi += 1;
						var textnowscam = rancommands[rancommandi];
						// console.log(`${rancommandi} ${textnowscam} ${rancommands.length}`);
						if (textnowscam != undefined) {
							val.input = textnowscam;
							val.cursorindex = val.input.length;
						}
                        else {
							val.input = "";
							val.cursorindex = 0;
                        }
						if (rancommandi >= rancommands.length) {
							rancommandi = rancommands.length;
                        }
                    }
				}
				else if (key === 200 && val.name == "chat") { // arrow down
					if (tabnow != "") {
						if (opengui.includes("Chat")) {
							cancel(event);
						}
						tabindex--;
						if (tabindex < 0) {
							// console.log(`lliron get ban!`);
							tabindex = autocompletelist.length - 1;
							// tabnow = autocompletelist[0];
						}
						if (autocompletelist[tabindex] == undefined) {
							tabindex = 0;
							// tabnow = autocompletelist[0];
						}
						tabnow = autocompletelist[tabindex];
					}
                    else {
						rancommandi -= 1;
						var textnowscam = rancommands[rancommandi];
						// console.log(`${rancommandi} ${textnowscam}`);
						if (textnowscam != undefined) {
							val.input = textnowscam;
							val.cursorindex = val.input.length;
                        }
						if (rancommandi <= 0) {
							rancommandi = 0;
						}
                    }
				}
				else if (key === 15 && val.name == "chat") { // tab
					if (val.input != "")
						if (opengui.includes("Chat"))
							cancel(event);
					//if (val.input != tabwhat && val.name == "chat") {
					//	if (Settings.textInput == "debugtab") console.log(`Request to tab`);
					//	tabwhat = val.input;
					//	// tabindex = 0;
					//	sendautocompletereq(val.input, val.input);
					//	// tabnow = " ";
					//}
					if (tabstate == "got") {
						if (Settings.textInput == "debugtab") console.log(`Tabs: ${autocompletelist}`);

						tabnow = autocompletelist[tabindex];
						tabindex++;
						if (autocompletelist[tabindex] == undefined) {
							tabindex = 0;
							// tabnow = autocompletelist[0];
						}

						if (Settings.textInput == "debugtab") console.log(`Tabbing to next ${tabnow}`);
						if (Settings.textInput == "debugtab") console.log("tab complete with space");
						// tabnow = "";
						new Thread(() => {
							Thread.sleep(50)
                            if (tabnow != "") {
								chatinput.input = removeColors(nninput);
								ninput = removeColors(nninput);
								nninput = removeColors(nninput);
								if (opengui.includes("Chat") && Settings.chattabnormal) {
									Client.setCurrentChatMessage(nninput);
								}
								chatinput.cursorindex = chatinput.input.length;
                            }
						}).start();
						
						//tabnow = "";
						continue;
					}
                    else {
						if (Settings.textInput == "debugtab") console.log(`Request to tab`);
						tabwhat = val.input;
						// tabindex = 0;
						sendautocompletereq(val.input, val.input);
						// tabnow = " ";
                    }

				}
				else if (key === 1) {
					val.chatfo = false
					// console.log(`unfo on ${property}`);
				}
				//else if (Keyboard.isKeyDown(29)) {
				//	continue;
				//}
				else if (checkKey(key) && !Keyboard.isKeyDown(29)) {
					var oldinput = val.input;
					val.inputlist = val.ninput.split("");
					// console.log(`${val.ninput} ${val.inputlist}`);
					val.inputlist.splice(val.cursorindex, 0, char)
					val.input = removeColors(val.inputlist.join(""));
					// console.log(`${oldinput} ${val.input}`);
					// TestText.setString(val.input); STACKOVERFLOW???
					// console.log(`[anychattypeIF] typed ${key} / ${char} at ${val.cursorindex} / ${val.input.charAt(val.cursorindex)} / ${val.input}`);
					// TestText.setMaxWidth(val.inputText.getWidth());
					// TestText.setMaxLines(1);
					// if (TestText.exceedsMaxLines()) {
					// 	val.cursor = `§c|§r`;
					// 	val.input = oldinput;
					// }
					// else {
					// 	val.cursorindex += 1;
					// }
					val.cursorindex += 1;
					// input = input + char;
					if (val.cursorindex < 0) {
						val.cursorindex = 0;
					}
					if (val.cursorindex > val.input.length) {
						val.cursorindex = val.input.length;
					}
					// console.log(`[anychattype] typed ${key} / ${char} at ${val.cursorindex} / ${val.input.charAt(val.cursorindex)} / ${val.input}`);
					// throw Error(`MAXI ERROR! ${cursorindex}`);
				}
			}
			if (Settings.textInput == "debuganychat") console.log(`[anychata] typed ${key} / ${char} at ${val.cursorindex} / ${val.input.charAt(val.cursorindex)} / ${val.input}`);
			if (((Settings.chattabnormal && opengui.includes("Chat")) || (Settings.chattabinv && !opengui.includes("Chat") && chatinput.chatfo == true)) && key != 208 && key != 200 && key != 1 && key != 56 && val.name == "chat" && (checkKey(key) || key == 14)) {
				var nowval = val;
				tabstate = "req";
				tabnow = "";
				autocompletelist = [];
				new Thread(() => {
					Thread.sleep(5)
					if (Settings.textInput == "debugtab") console.log(`Request to auto tab ${nowval.input}`);
					tabwhat = nowval.input;
					tabindex = 0;
					sendautocompletereq(nowval.input, nowval.input);
					if (autocompletelist[0] != undefined) {
						tabnow = autocompletelist[0];
                    }
				}).start();
			}
		}
	}
	catch(e) {
		console.log("ERROR HAPPEND? " + e)
    }
	// if (input == tabwhat) tabnow = "";
	return;
}

register("GuiMouseClick", clicked);
function clicked(x, y, c, gui, event) {
	if (Settings.perf_GuiMouseClick) {
		return;
	}
	for (var property in textinputs) {
		var val = textinputs[property];
		val.chatfo = false;
		if (val.name != "chat" && val.show && x >= val.inputBox.getX() && x <= val.inputBox.getX() + val.inputBox.getWidth() && y >= val.inputBox.getY() && y <= val.inputBox.getY() + val.inputBox.getHeight()) {
			// console.log(`fo on ${property}`);
			val.cursorindex = val.input.length;
			val.chatfo = true;
		}
	}
	if (y > Renderer.screen.getHeight() - 220 && y < Renderer.screen.getHeight() - 20 && x >= 2 && x <= 202 && tabnow != "") {
		cancel(event)
		if (Settings.textInput == "debugtab") console.log("tab complete with click");
		chatinput.input  = removeColors(nninput);
		ninput = removeColors(nninput);
		nninput = removeColors(nninput);
		if (opengui.includes("Chat") && Settings.chattabnormal) {
			Client.setCurrentChatMessage(nninput);
		}
		chatinput.cursorindex = chatinput.input .length;
		tabnow = "";
		chatinput.chatfo = true;
		return;
	}
	//if (opengui.includes("Chat"))
	//	return;
	//if (!Settings.chatinv) {
	//	return;
	//}
	//strgui = `${Player.getOpenedInventory()}`
	//if (strgui.includes("ContainerPlayer"))
	//	return;
	chatinput.chatfo = false;
	if (y >= Renderer.screen.getHeight() - 15) {
		chatinput.chatfo = true;
	}
	for (var property in textinputs) {
		var val = textinputs[property];
		val.UpdateCursor();
	}
	// console.log(`[anychat] focus ${chatfo}`);
}
var displayinput = "";
var movex = 0;
var movey = 0;
register("PostGuiRender", renderchat).setPriority(Priority.LOWEST);
function renderchat(gui, x, y, s4) {
	if (Settings.perf_postGuiRender) {
		return;
	}
	if (opengui != `${gui}`) {
		chatinput.chatfo = false;
		tabnow = "";
	}
	guix = x;
	guiy = y;
	opengui = `${gui}`;
    if (Settings.textInput == "debuggui") {
		console.log(opengui);
    }
	if (Settings.disableupdate003) {
		return;
	}
	if (!Settings.chatinvany && !opengui.includes("inventory") && !opengui.includes("Chat")) {
		// console.log(`anywhere cancel ${opengui.includes("inventory")} ${opengui.includes("Chat")} ${opengui}`)
		return;
    }
	// console.log(opengui);
	chatinput.inputText.setString(chatinput.input )
	if (opengui.includes("Chat")) {
		if (!Settings.chattabnormal) {
			return;
		}
	}
	// console.log(`Overlay?`);
	if (chatinput.chatfo == true || opengui.includes("Chat")) {
		ninput = chatinput.input;
		displayinput = chatinput.input;
		if (!autocompletelist.includes(tabnow) && tabnow != "" && tabnow != undefined) {
			if (Settings.textInput == "debugtab") console.log(`Fixed auto complete`);
			tabnow = autocompletelist[0];
		}
		if (tabnow == undefined) {
			tabnow = "";
		}
		if (tabnow != "") {
			linput = chatinput.input.split(" ");
			// console.log(ninput.length);
			var indexscam = 0;
			linput.forEach(tjing => {
				// console.log(`${indexscam} ${tjing}`)
				if (tjing == "") {
					linput.splice(indexscam, 1);
				}
				indexscam++;
			});
			if (linput[indexscam - 1] == undefined) {
				linput[indexscam - 1] = "";
			}
			var tabnownow = tabnow;
			tabnownow = ChatLib.addColor(`${linput[indexscam - 1]}&7${tabnownow.slice(linput[indexscam - 1].length, tabnownow.length)}`);
			linput[indexscam - 1] = tabnownow;
			// linput[0] = "BANBAN";
			// console.log(`${ninput} | ${linput} | ${ninput.length} | ${tabnow}`);

			ninput = `§f${linput.join(" ")}`;
			// displayinput = ninput + chatinput.cursor;
			if (Settings.chattabnormal || Settings.chattabinv) {
				var newautocompletelist = [];
				var igotscam = 0;
				if (WheelMove != 0) {
					// console.log(`S ${WheelMove}`);
					var WheelMovet = WheelMove / 100
					tabindex -= Math.round(WheelMovet);
				}
				//if (WheelMove > 0) {
				//	console.log(`S -1`);
				//	tabindex -= 1;
				//}
				//if (WheelMove < 0) {
				//	console.log(`S +1`);
				//	tabindex += 1;
				//}
				if (tabindex < 0) {
					// console.log(`S <0`);
					tabindex = autocompletelist.length - 1;
				}
				if (tabindex >= autocompletelist.length) {
					// console.log(`S >L`);
					tabindex = 0;
				}
				//if (WheelMove != 0) {
				//	tabnow = autocompletelist[tabindex];
				//            }
				for (var property in autocompletelist) {
					var iproperty = parseInt(property);
					var iierror = iproperty;
					// console.log(`${Renderer.screen.getHeight() - 220} | ${guiy} | ${Renderer.screen.getHeight() - 220 + iproperty * 9} | ${Renderer.screen.getHeight() - 220 + (iproperty + 1) * 9} | ${iproperty}`);
					// ChatLib.chat(`&a${property}: ${dungeonsecrets[property]}`);
					if (autocompletelist.length > 21 && iproperty < tabindex - 20) {
						continue;
					}
					if (newautocompletelist.length > 21) {
						// console.log(`very long tab.`)
						break;
					}
					// if you can fix this
					// console.log(`${Renderer.screen.getHeight() - 220} | ${guiy} | ${Renderer.screen.getHeight() - 220 + iproperty * 9} | ${Renderer.screen.getHeight() - 220 + (iproperty + 1) * 9} | ${iproperty}`);
					if (guiy > Renderer.screen.getHeight() - 220 + igotscam * 9 && guiy < Renderer.screen.getHeight() - 220 + (igotscam + 1) * 9 && guix >= 2 && guix <= 202 && movey != guiy && WheelMove == 0) {
						movex = guix;
						movey = guiy;
						tabnow = autocompletelist[property];
						if (autocompletelist.length < 21) {
							tabindex = iproperty;
						}
					}

					if (tabnow == autocompletelist[property]) {
						tabnow = autocompletelist[property];
						newautocompletelist.push(`§e${autocompletelist[property]}`);
					} else {
						newautocompletelist.push(`§7${autocompletelist[property]}`);
					}
					igotscam++;
				}
			}
			WheelMove = 0;
			if (opengui.includes("Chat") && Settings.chattabnormal) {
				// GlStateManager.func_179094_E(); // push
				autocompletebox
					.setX(2)
					.setY(Renderer.screen.getHeight() - 220)
					.setWidth(200)
					.setHeight(200)
					.draw();
				autocompletetext.setString(newautocompletelist.join("\n"))
				autocompletetext
					.setX(3)
					.setY(Renderer.screen.getHeight() - 220)
					.setMaxWidth(Renderer.screen.getWidth())
					.draw();

				// GlStateManager.func_179121_F(); // pop
				// console.log(`${autocompletetext.getString()}`);
			}
			else if (Settings.chattabinv) {
				autocompletetext.setString(newautocompletelist.join("\n"))
				autocompletetext
					.setX(3)
					.setY(Renderer.screen.getHeight() - 220)
					.setMaxWidth(Renderer.screen.getWidth())
					.draw();
			}
			nninput = ninput;
			ninput = chatinput.input;



		} // else {
		var listscam = chatinput.input.split(" ")
		chatinput.inputlist = ninput.split("");
		var nninputlist = nninput.split(" ")
		nninputlist[nninputlist.length - 1] = tabnow;
		nninput = nninputlist.join(" ")
		var tabnownowlist = tabnow.split("")
		// console.log(`${tabnownowlist}`);
		for (var property in tabnownowlist) {
			var iproperty = parseInt(property);
			//console.log(`${listscam[listscam.length - 1].length}`);
			//if (iproperty >= listscam[listscam.length - 1].length) {
			//	if (iproperty == listscam[listscam.length - 1].length) chatinput.inputlist.push("§");
			//	if (iproperty == listscam[listscam.length - 1].length) chatinput.inputlist.push("7");
			//	chatinput.inputlist.push(tabnownowlist[iproperty]);
			//}
			if (iproperty >= listscam[listscam.length - 1].length) {
				if (iproperty == listscam[listscam.length - 1].length) chatinput.inputlist.push("§");
				if (iproperty == listscam[listscam.length - 1].length) chatinput.inputlist.push("7");
				chatinput.inputlist.push(tabnownowlist[iproperty]);
			}
		}
		// chatinput.inputlist.push(tabnownowlist);
		chatinput.inputlist.splice(chatinput.cursorindex, 0, chatinput.cursor)
		displayinput = chatinput.inputlist.join("");
		// }
		//var displayinputlist = displayinput.split("");
		//if (opengui.includes("Chat")) {
		//	for (var property in displayinputlist) {
		//		var iproperty = parseInt(property);
		//		if (iproperty <= input.length + 1) {
		//			// console.log(`${property} ${displayinput[property]}`);
		//			displayinputlist[property] = "";
		//              }

		//	}
		//	displayinput = displayinputlist.join("");
		//	inputText
		//		.setX(input.length * 6 + 3)
		//      }
		chatinput.inputText.setString(displayinput)
	}
	// if (!Settings.chatinv) return;
	if (true) {
		var scamx = 2;
		if (!Settings.chatinv) {
			scamx = 10000;
        }
		// console.log("postrender autocompletext");
		chatinput.inputText
			.setX(scamx + 2)
			.setY(Renderer.screen.getHeight() - 12)
			.setMaxWidth(Renderer.screen.getWidth())
			.draw();
		if (opengui.includes("Chat"))
			return;
		inputBox
			.setX(scamx)
			.setY(Renderer.screen.getHeight() - 15)
			.setWidth(Renderer.screen.getWidth())
			.setHeight(12)
			.draw();
	}
}
	//for (var property in dungeonsecrets) {
	//ChatLib.chat(`&a${property}: ${dungeonsecrets[property]}`);
	//}


	// Client.setCurrentChatMessage("/");
	// var chat = Client.getChatGUI();
	// console.log(`${chat}`);

	// console.log(`${s1} ${s2} ${s3} ${s4}`);
	// var no = s1.inventorySlots;
	// console.log(`${s1} ${no}`);
	// console.log(`1. ${Client.currentGui.get()}`);
	// console.log(`2. ${s1}`);
	// Client.currentGui.close()
	// console.log(`${s3.mc.ingameGUI.getChatGUI()}`);
	//let inventory;
	//try {
	//	inventory = Player.getOpenedInventory();
	//} catch (e) {
	//	return;
	//}
	// console.log(`${inventory.inventorySlots()}`);
var ticked = 0;
var f7autocd = 0;
register("tick", togglecursor);
function togglecursor() {
	if (Settings.perf_tick) {
		return;
	}
	ticked++;
	if (ticked >= 12) {
		ticked = 0;
		for (var property in textinputs) {
			var val = textinputs[property];
			val.UpdateCursor();
		}
		//if (chatinput.cursorindex > chatinput.input.length) {
		//	chatinput.cursorindex = chatinput.input.length;
  //      }
		//if (chatinput.cursorindex == chatinput.input .length) {
		//	if (chatinput.cursor == " ") {
		//		chatinput.cursor = "_";
		//	}
		//	else {
		//		chatinput.cursor = " ";
		//	}
  //      } else {
		//	if (chatinput.cursor == "") {
		//		chatinput.cursor = `${chatinput.cursorindex}`;
		//	}
		//	else {
		//		chatinput.cursor = "";
		//	}
  //      }
		
	}
	if (opengui.includes("Chat") && Settings.chattabnormal) {
		chatinput.input  = Client.getCurrentChatMessage();
		chatinput.cursor = "";
	}	
	if (Settings.textInput == "F7AUTO" && removeColors(Player.getOpenedInventory().getName()).startsWith("Click On All ")) {
		f7autocd++;
		if (f7autocd >= 20) {
			f7autocd = 0;
			let clickitem = itemsHighlight.pop();
			if (clickitem != undefined) {
				let clickslot = clickitem;
				while (!(clickslot >= 0 && clickslot < 36)) {
					console.log(`[F7AUTO] scam? ${clickslot}`);
					clickitem = itemsHighlight.pop();
				}
				Player.getOpenedInventory().click(clickslot);
				console.log(`[F7AUTO] clicked slot ${clickslot}`);
			}
			else {
				console.log(`[F7AUTO] no item to click`);
			}
		}
	}
}

register("command", (...args) => {
	if (args[0] === undefined) {
		ChatLib.chat("Replacer:");
		for (var property in Saved.ReplacerArr) {
			//textm = textm.replace(property, Saved.ReplacerArr[property])
			// message.setText(message.getText().replace(property, Saved.ReplacerArr[property]))
			ChatLib.chat(`${property} ${Saved.ReplacerArr[property]}`)
		}
		ChatLib.chat("Add with: /replacer <text> <text>");
		if (!Settings.replacer) ChatLib.chat("&cWARNING! REPLACER NOT ACTIVE! do /sbdragons and active it");
		return;
	}
	if (args[1] === undefined) {
		ChatLib.chat(`[Replacer] Removed replace for ${args[0]}`);
		delete Saved.ReplacerArr[args[0]];
		return;
	}

	Saved.ReplacerArr[args[0]] = args[1];
	ChatLib.chat(`[Replacer] set replace for ${args[0]} to ${args[1]}`);
}).setName("replacer");

register("command", (...args) => {
	var errorcmd = "";
	for (var property in args) {
		iproperty = parseInt(property);
		if (iproperty > 0) {
			errorcmd += args[property];
			if (iproperty < args.length) {
				errorcmd += " ";
            }
        }
	}
	console.log(`scam ${errorcmd}`);
	if (args[0] == "add" && args[1] != undefined) {
		ChatLib.chat(`[BP TAB] added tab for ${args[1]}`);
		Saved.CilentCommandList.push(args[1]);
		return;
	}
	if (args[0] == "remove" && args[1] != undefined) {
		// ChatLib.chat(`[BP TAB] Removed tab for ${args[0]}`);
		for (var property in Saved.CilentCommandList) {
			iproperty = parseInt(property);
			//textm = textm.replace(property, Saved.ReplacerArr[property])
			// message.setText(message.getText().replace(property, Saved.ReplacerArr[property]))
			if (args[1] === Saved.CilentCommandList[property]) {
				ChatLib.chat(`[BP TAB] Removed tab for ${Saved.CilentCommandList[property]}`)
				Saved.CilentCommandList.splice(iproperty, 1);
				// delete Saved.CilentCommandList[property];
			}	
		}
		return;
	}
	// Saved.CilentCommandList[args[0]] = args[1];
	// ChatLib.chat(`[BP TAB] set tab for ${args[0]} to ${args[1]}`);
	// if (args[0] === undefined) {
	// console.log(`${args}`);
	ChatLib.chat("Tabs:");

	// if arg error
	for (var property in Saved.CilentCommandList) {
		//textm = textm.replace(property, Saved.ReplacerArr[property])
		// message.setText(message.getText().replace(property, Saved.ReplacerArr[property]))
		iproperty = parseInt(property);
		ChatLib.chat(`${property} ${Saved.CilentCommandList[property]}`)
		if (Saved.CilentCommandList[property] == undefined) {
			ChatLib.chat(`BROKEN TAB AT ${property}`)
			Saved.CilentCommandList.splice(iproperty, 1);
			// delete Saved.CilentCommandList[property];
        }
	}
	ChatLib.chat("Add with: /sbdragonstab add/remove <text>");
	return;
}).setName("sbdragonstab");

function makeplayerrightclick() {
	var _x = new intType(Player.getX());
	var _y = new intType(Player.getY() - 1);
	var _z = new intType(Player.getZ());
	if (Player.lookingAt() instanceof Block) {
		_x = new intType(Player.lookingAt().getX());
		_y = new intType(Player.lookingAt().getY());
		_z = new intType(Player.lookingAt().getZ());
    }
	var _d = new intType(0);
	var _blockpos = new BlockPos(_x, _y, _z);
	Client.sendPacket(new C08PacketPlayerBlockPlacement(Player.getHeldItem().getItemStack()));
	Client.sendPacket(new C08PacketPlayerBlockPlacement(_blockpos, 0, Player.getHeldItem().getItemStack(), new intType(0), new intType(0), new intType(0)));
}

var griffinloc = [];
var activepet = "&r &r &r &r &r &r";
register("chat", chatreplace);
function chatreplace(event) {
	//  if (!Settings.replacer) {
	//return;
	//  }
	//if (event instanceof CancellableEvent && event.isCancelled()) {
	//	return;
	//   }
	if (Settings.perf_chat) {
		return;
	}
	var imessage = EventLib.getMessage(event);
	var message = new TextComponent(imessage);
	var copym = new TextComponent(imessage);
	// console.log(imessage.toString())

	// message = message.setText(message.getText());
	// console.log(message.toString())
	if (imessage.toString().includes("clickEvent=ClickEvent") || imessage.toString().includes("hoverEvent=HoverEvent")) {
		if (Settings.textInput == "debugreplacer") console.log("Skipping JSON message");
		return;
	}
	// var clicka = message.getClickValue();
	// console.log(clicka);
	var textm = message.getText();
	var textr = textm.replaceFormatting();
	var textn = textm.removeColors();
	if (isonskyblock) {
		if (textm.includes(`You selected your `)) {
			activepet = textm.replace("You selected your ", "");
		}
		if (textm.includes(`DROP!`)) {
			var scamgadol = textm.replaceFormatting();
			// console.log(`SCAM DROP 1! ${scamgadol}`);
			var scam = scamgadol.split(` &r&d(+`)[0];
			var scam = scam.split(`DROP! `)[1];
			var scam = scam.addColor();
			// ChatLib.chat(`SCAM DROP 2! ${scam}`);
			var scam = scam.replace(`(`, "");
			// ChatLib.chat(`SCAM DROP 3! ${scam}`);
			var scam = scam.replace(`)`, "");
			if (scam.includes(`Summoning Eye`)) {
				scam = `Summoning Eye`;
			}
			// ChatLib.chat(`SCAM DROP! ${scam}`);
			if (Saved.RareDrops[`${scam}`] == NaN || Saved.RareDrops[`${scam}`] == undefined) {
				Saved.RareDrops[`${scam}`] = 0;
			}
			Saved.RareDrops[`${scam}`] += 1;
		}
		if (textm.includes(`griffin at `)) {
			if (Settings.griffinburrowesp || Settings.griffinburrowwaypoint) {
				cancel(event);
				var scamgadol = textn.split(`: `);
				scamgadol[1] = scamgadol[1].replace(", y", "");
				scamgadol[2] = scamgadol[2].replace(", z", "");
				scamgadol[3] = scamgadol[3].replace(", z", "");
				griffinloc[0] = parseFloat(scamgadol[1]);
				griffinloc[0] = parseInt(Math.floor(griffinloc[0]));
				griffinloc[1] = parseFloat(scamgadol[2]);
				griffinloc[1] = parseInt(Math.floor(griffinloc[1]));
				griffinloc[2] = parseFloat(scamgadol[3]);
				griffinloc[2] = parseInt(Math.floor(griffinloc[2]));
				return;
				// console.log(`${griffinloc}`);
			}
			//griffin at x|-114.5, y|64.5, z|45.5
		}
		if (Settings.burpcount) {
			if (textr.includes(`&8[&r&eLarry&r&8]`)) {
				cancel(event);
				ChatLib.command(`howmuchclick Larry`)
				return;
			}

			if (textr.includes(`&8[&r&eAlex&r&8]`)) {
				cancel(event);
				ChatLib.command(`howmuchclick Alex`)
				return;
			}

			if (textr.includes(`&8[&r&eGeorge&r&8]`)) {
				cancel(event);
				ChatLib.command(`howmuchclick George`)
				return;
			}

			if (textr.includes(`&8[&r&eMichael&r&8]`)) {
				cancel(event);
				ChatLib.command(`howmuchclick Michael`)
				return;
			}
		}

		if (textm.includes(`Deselected The Pet`)) {
			activepet = "";
		}
		if (textm.includes(`Slayer boss spawned near you!`) && Settings.slayeralertspawn) {
			Client.showTitle("&a&lBOSS SPAWNED", "&aNEAR YOU", 0, 40, 0);
		}
		if (textm.includes(`NICE! SLAYER BOSS SLAIN!`)) {
			if (Settings.slayeralertslain) {
				Client.showTitle("&a&lBOSS KILLED", "&aSTART ANOTHER SLAYER!!!", 0, 100, 0);
			}
			if (Settings.slayerautomaddox) {
				var oldslot = Player.getHeldItemIndex();
				var maddoxi = 0;
				for (var i = 0; i < 9; i++) {
					loopitem = Player.getInventory().getStackInSlot(i);
					// console.log(`${loopitem.getName()}`)
					if (loopitem.getName().includes(`Maddox Batphone`)) {
						maddoxi = i;
					}
				}
				new Thread(() => {
					Player.setHeldItemIndex(maddoxi);
					// ChatLib.chat(`DON'T LOOK AT A BLOCK OR IT ERRORS!`);
					for (var i = 0; i < 10; i++) {
						Player.setHeldItemIndex(maddoxi);
						Thread.sleep(10);
					}
					ChatLib.chat(`Auto Maddox opens your maddox batphone!`);
					makeplayerrightclick();

					// ChatLib.chat(`If it doesn't ring click yourself!`);
					Thread.sleep(2000);
					Player.setHeldItemIndex(oldslot);
				}).start();
			}
		}
	}
	var msg = textn;
	if (msg.includes("The Light Auction is not active")) {
		// ChatLib.chat("Light ah is scammer");
		cancel(event)
		return;
	}
	if (msg.includes("Next Light Auction in:")) {
		cancel(event)
		whenlightah = msg.split(":")[1];
		whenlightah = whenlightah.replace(" minutes", "m");
		whenlightah = whenlightah.replace(" seconds", "s");
		whenlightah = whenlightah.replace("and ", "");


		var alertbeforah = whenlightah;
		var alertbeforahtime = 0;
		try {
			alertbeforah = alertbeforah.split(" ");
			// ChatLib.chat(alertbeforah[0]);
			alertbeforah[0] = parseInt(alertbeforah[0].split("m")[0]);
			// ChatLib.chat(alertbeforah[0]);
			alertbeforah[1] = parseInt(alertbeforah[1].split("s")[0]);
			alertbeforahtime = 60 * alertbeforah[0] + alertbeforah[1];
			if (Settings.Lightahaleartbefor = 0) {
				if (alertbeforahtime < 60) {
					if (doalert != true) {
						Client.showTitle("&e&l1m to Light Auction", "&7Remeber 1m also wither", 0, 50, 10);
						doalert = true
					}
				}
			}
			else if (Settings.Lightahaleartbefor = 1) {
				if (alertbeforahtime < 300) {
					if (doalert != true) {
						Client.showTitle("&e&l5m to Light Auction", "&7Remeber 5m also wither", 0, 50, 10);
						doalert = true
					}
				}
			}
			else if (Settings.Lightahaleartbefor = 2) {
				if (alertbeforahtime < 600) {
					if (doalert != true) {
						Client.showTitle("&e&l10m to Light Auction", "&7Remeber 10m also wither", 0, 50, 10);
						doalert = true
					}
				}
			}
			return;
		} catch (e) {
			// ChatLib.chat(`Weird error? ${e}`)
		}
	}
	if (!Settings.replacer) {

		return;
	}
	//if (Settings.Lightahtoggle) {
	//	ChatLib.chat(`&cWarning! you cannot use replacer with lightah toggle!! replacer disabled!`)
	//	return;
	//}
	// ChatLib.chat(ChatLib.replaceFormatting(message));
	for (var property in Saved.ReplacerArr) {
		//textm = textm.replace(property, Saved.ReplacerArr[property])
		if (Settings.replacer) {
			message.setText(message.getText().replace(property, Saved.ReplacerArr[property]))
		}
		// console.log(`${property} ${Saved.ReplacerArr[property]}`)
	}
	// message = message.setText(message.getText());
	cancel(event);
	ChatLib.chat(message);
	// console.log(message.toString());
	// ChatLib.chat(typeof message);
}
// scam to use later Player.getPlayer().getDistanceTo(x, y, z)
function findsecretnear(entity, num) {
    if (!Settings.AutoWaypoints) {
		return;
    }
	var loopedblocks = [];
	var done = false;
	new Thread(() => {
		for (let x = -num; x < num; x++)
			for (let y = -num; y < num; y++)
				for (let z = -num; z < num; z++) {
					var loopedblock = World.getBlockAt(entity.getX() + x, entity.getY() + y, entity.getZ() + z);
					var blockloc = `${loopedblock.getX()} ${loopedblock.getY()} ${loopedblock.getZ()}`;
					// console.log(`${loopedblock}`);
					if (loopedblock.getRegistryName().includes("chest")) {
						ChatLib.chat(`Found Chest at ${blockloc}`);
						// ChatLib.chat(`${Saved.AutoWaypoints[blockloc]}`);
						blockloc = "C " + blockloc + " ON";
						if (Saved.AutoWaypoints[blockloc] == undefined) {
							
							ChatLib.chat(`Oh! Thats a new one!`);
							Saved.AutoWaypoints[blockloc] = blockloc;
                        }
					}
					if (loopedblock.getRegistryName().includes("skull")) {
						ChatLib.chat(`Found Skull at ${blockloc}`);
						console.log(`Found Skull at ${blockloc}`);
						blockloc = "S " + blockloc;
						if (Saved.AutoWaypoints[blockloc] == undefined) {
							
							ChatLib.chat(`Oh! Thats a new one!`);
							Saved.AutoWaypoints[blockloc] = blockloc;
						}
						return;
					}
					if (loopedblock.getRegistryName().includes("lever")) {
						ChatLib.chat(`Found Lever at ${blockloc}`);
						// ChatLib.chat(`${Saved.AutoWaypoints[blockloc]}`);
						blockloc = "L " + blockloc;
						if (Saved.AutoWaypoints[blockloc] == undefined) {
							
							ChatLib.chat(`Oh! Thats a new one!`);
							Saved.AutoWaypoints[blockloc] = blockloc;
						}
					}
					// loopedblocks.push(loopedblock);
				}
		// console.log(`Looped blocks ${num} ${loopedblocks}`);
	}).start();
}

//register("renderWorld", () => {
//	drawBoxAtBlockNotVisThruWalls(69, 190, -57, 100, 100, 100)
//})

register("command", () => {
	//var rnd1 = Math.floor(Math.random() * 1000);
	//var rnd2 = Math.floor(Math.random() * 1000);
	//var rnd3 = Math.floor(Math.random() * 1000);
	//var blockloc = `RND ${rnd1} ${rnd2} ${rnd3} ON`;
	//Saved.AutoWaypoints[blockloc] = blockloc;
	// findsecretnear(Player,5);
	makeplayerrightclick();
	// console.log(`${Player.lookingAt()} ${Player.lookingAt() instanceof Block}`)

}).setCommandName("sbdragonsdevtest");

register("command", (...args) => {
    if (args[0] == "clear") {
		for (var property in Saved.RareDrops) {
			delete Saved.RareDrops[property];
		}
		ChatLib.chat("Cleared Drops")
	}
	else if (args[0] == "remove") {
        if (args[1] == undefined) {
			ChatLib.chat(`ERROR! use /sbdragonsdrops remove <number>`)
			return;
		}
		var removei = parseInt(args[1])
		var removedi = 0
		var removed = "";
		var i = 1;
		for (var property in Saved.RareDrops) {
			// `${i} ${property} §6x${Saved.RareDrops[property]}`
			if (i == removei) {
				removed = property;
            }
			i++;
		}
		delete Saved.RareDrops[removed];
		ChatLib.chat(`Removed ${removed}`)
	}
	else if (args[0] == "add") {
		if (args[1] == undefined || args[2] == undefined) {
			ChatLib.chat(`ERROR! use /sbdragonsdrops add <id> <number>`)
			return;
		}
		var addnum = parseInt(args[2])
		var removei = parseInt(args[1])
		var removedi = 0
		var removed = "";
		var i = 1;
		for (var property in Saved.RareDrops) {
			// `${i} ${property} §6x${Saved.RareDrops[property]}`
			if (i == removei) {
				removed = property;
			}
			i++;
		}
		// delete Saved.RareDrops[removed];
		Saved.RareDrops[removed] += addnum;
		ChatLib.chat(`added ${addnum} to ${removed}`)
	}
	else if (args[0] == "set") {
		if (args[1] == undefined || args[2] == undefined) {
			ChatLib.chat(`ERROR! use /sbdragonsdrops set <id> <number>`)
			return;
		}
		var addnum = parseInt(args[2])
		var removei = parseInt(args[1])
		var removedi = 0
		var removed = "";
		var i = 1;
		for (var property in Saved.RareDrops) {
			// `${i} ${property} §6x${Saved.RareDrops[property]}`
			if (i == removei) {
				removed = property;
			}
			i++;
		}
		// delete Saved.RareDrops[removed];
		Saved.RareDrops[removed] = addnum;
		ChatLib.chat(`set ${removed} to ${addnum}`)
	}
    else {
		ChatLib.chat(`ERROR! use /sbdragonsdrops clear/remove/add/set`);
    }
	displays[`dropdisplay`].clearLines();
}).setCommandName("sbdragonsdrops");

var WheelMove = 0;
function scrollWheelSupportGui() {
	if (Settings.perf_tick) {
		return;
	}
	var dWheel = Mouse.getDWheel();
	if (dWheel == 0) return;
	WheelMove = dWheel;
	// if (dWheel > 0) {
		// console.log(`Wheel Up`);
		// Scroll up
		// scrollingData.offsetY += scrollingData.mouseOffsetter;
	// } else {
		// console.log(`Wheel Down`);
		// Scroll down
		// scrollingData.offsetY -= scrollingData.mouseOffsetter;
	// }
}
register('tick', scrollWheelSupportGui);

var guiwaypoints = new Gui();
var guiwaypointsy = 0;
var waypointsguibuttons = {};

register("command", () => {
	// ChatLib.chat(Settings.Actionbar1b)
	ChatLib.chat("Waypoints");
	guiwaypointsy = Renderer.screen.getWidth() / 8 / 2;
	guiwaypoints.open();
	// ChatLib.chat("Light Auction is now " + lightah)
}).setCommandName("sbdragonswaypoints");

register("postGuiRender", guiwaypointsrender);
guiwaypoints.registerClicked(guiwaypointsclicked);
function guiwaypointsrender(s1,s2,s3,s4) {
	if (Settings.perf_postGuiRender) {
		return;
	}
	if (guiwaypoints.isOpen()) Renderer.drawRect(0x40000000, 0, 0, Renderer.screen.getWidth(), Renderer.screen.getHeight());
	if (WheelMove != 0 && (guiwaypoints.isOpen())) {
		var WheelMovet = WheelMove / 100
		guiwaypointsy += Math.round(WheelMovet);
		WheelMove = 0;
		console.log(`Waypoint Wheel Moving ${WheelMovet} ${guiwaypointsy}`);
	}
	scamrect = new Rectangle(Renderer.color(0, 0, 0, 100), 0, 0, Renderer.screen.getWidth(), Renderer.screen.getHeight() / 8);
	scamrect2 = new Rectangle(Renderer.color(0, 0, 0, 100), 0, Renderer.screen.getHeight() - Renderer.screen.getHeight() / 8, Renderer.screen.getWidth(), Renderer.screen.getHeight() / 8);
	var wayi = 0;
	for (var property in Saved.AutoWaypoints) {
		wayi++;
		var waypoint = Saved.AutoWaypoints[property].split(" ");
		// console.log(`${waypoint}`);
		if (waypointsguibuttons[property] == undefined) {
			waypointsguibuttons[property] = new TextBox(Renderer.screen.getWidth() / 4, guiwaypointsy + wayi * 20, 50, 10)
			waypointsguibuttons[property].input = waypoint[0];
			textinputs.push(waypointsguibuttons[property]);

			waypointsguibuttons[property + " X"] = new TextBox(Renderer.screen.getWidth() / 4 + 100, guiwaypointsy + wayi * 20, 50, 10)
			waypointsguibuttons[property + " X"].input = waypoint[1];
			textinputs.push(waypointsguibuttons[property + " X"]);

			waypointsguibuttons[property + " Y"] = new TextBox(Renderer.screen.getWidth() / 4 + 200, guiwaypointsy + wayi * 20, 50, 10)
			waypointsguibuttons[property + " Y"].input = waypoint[2];
			textinputs.push(waypointsguibuttons[property + " Y"]);

			waypointsguibuttons[property + " Z"] = new TextBox(Renderer.screen.getWidth() / 4 + 300, guiwaypointsy + wayi * 20, 50, 10)
			waypointsguibuttons[property + " Z"].input = waypoint[3];
			textinputs.push(waypointsguibuttons[property + " Z"]);
			if (waypoint[4] == undefined) {
				waypoint[4] = "ON";
			}
			waypointsguibuttons[property + " T1"] = new Text(waypoint[4], Renderer.screen.getWidth() / 4 + 400, guiwaypointsy + wayi * 20);
			waypointsguibuttons[property + " T2"] = new Rectangle(Renderer.color(0, 0, 0, 65), Renderer.screen.getWidth() / 4 + 400, guiwaypointsy + wayi * 20, 20, 10)

			waypointsguibuttons[property + " D1"] = new Text("DEL", Renderer.screen.getWidth() / 4 + 500, guiwaypointsy + wayi * 20);
			waypointsguibuttons[property + " D2"] = new Rectangle(Renderer.color(0, 0, 0, 65), Renderer.screen.getWidth() / 4 + 500, guiwaypointsy + wayi * 20, 20, 10)

		}
		waypointsguibuttons[property].show = false;
		waypointsguibuttons[property + " X"].show = false;
		waypointsguibuttons[property + " Y"].show = false;
		waypointsguibuttons[property + " Z"].show = false;
		// console.log(`${guiwaypointsy + wayi * 20} ${Renderer.screen.getHeight() - Renderer.screen.getHeight() / 8}`);
		var drawy = guiwaypointsy + wayi * 20
		if (drawy >= scamrect.getHeight() && drawy <= scamrect2.getY()) {
			waypointsguibuttons[property].SetY(guiwaypointsy + wayi * 20);
			if (guiwaypoints.isOpen()) waypointsguibuttons[property].show = true;
			waypoint[0] = waypointsguibuttons[property].input;
			waypointsguibuttons[property + " X"].SetY(guiwaypointsy + wayi * 20);
			if (guiwaypoints.isOpen()) waypointsguibuttons[property + " X"].show = true;
			waypoint[1] = waypointsguibuttons[property + " X"].input;

			waypointsguibuttons[property + " Y"].SetY(guiwaypointsy + wayi * 20);
			if (guiwaypoints.isOpen()) waypointsguibuttons[property + " Y"].show = true;
			waypoint[2] = waypointsguibuttons[property + " Y"].input;

			waypointsguibuttons[property + " Z"].SetY(guiwaypointsy + wayi * 20);
			if (guiwaypoints.isOpen()) waypointsguibuttons[property + " Z"].show = true;
			waypoint[3] = waypointsguibuttons[property + " Z"].input;

			waypointsguibuttons[property + " T1"].setY(guiwaypointsy + wayi * 20)
			if (guiwaypoints.isOpen()) waypointsguibuttons[property + " T1"].draw();
			waypointsguibuttons[property + " T2"].setY(guiwaypointsy + wayi * 20);
			if (guiwaypoints.isOpen()) waypointsguibuttons[property + " T2"].draw();

			waypointsguibuttons[property + " D1"].setY(guiwaypointsy + wayi * 20)
			if (guiwaypoints.isOpen()) waypointsguibuttons[property + " D1"].draw();
			waypointsguibuttons[property + " D2"].setY(guiwaypointsy + wayi * 20);
			if (guiwaypoints.isOpen()) waypointsguibuttons[property + " D2"].draw();
		}
		Saved.AutoWaypoints[property] = waypoint.join(" ");
	}
	if (guiwaypoints.isOpen()) {
		scamrect.draw();
		scamrect2.draw();
    }
}
function guiwaypointsclicked(x, y, m) {
	// console.log(`${x} ${y} ${m} ${g}`);
	var wayi = 0;
	for (var property in Saved.AutoWaypoints) {
		wayi++;
		var waypoint = Saved.AutoWaypoints[property].split(" ");
		if (y >= guiwaypointsy + wayi * 20 && y <= guiwaypointsy + wayi * 20 + 10) {
			console.log(`clicked at ${property}`);
			if (x >= Renderer.screen.getWidth() / 4 + 400 && x <= Renderer.screen.getWidth() / 4 + 420) {
				console.log(`TOGGLE ${property}`);
				if (waypointsguibuttons[property + " T1"].getString() == "ON") {
					waypointsguibuttons[property + " T1"].setString("OFF");
				}
                else {
					waypointsguibuttons[property + " T1"].setString("ON");
                }
			}
			if (x >= Renderer.screen.getWidth() / 4 + 500 && x <= Renderer.screen.getWidth() / 4 + 520) {
				console.log(`TOGGLE ${property}`);
				if (waypointsguibuttons[property + " D1"].getString() == "DEL") {
					waypointsguibuttons[property + " D1"].setString("§cDEL");
				}
				else if (waypointsguibuttons[property + " D1"].getString() == "§cDEL") {
					delete Saved.AutoWaypoints[property];
					waypointsguibuttons[property].show = false;
					delete waypointsguibuttons[property];
					waypointsguibuttons[property + " X"].show = false;;
					delete waypointsguibuttons[property + " X"];
					waypointsguibuttons[property + " Y"].show = false;;
					delete waypointsguibuttons[property + " Y"];
					waypointsguibuttons[property + " Z"].show = false;;
					delete waypointsguibuttons[property + " Z"];
				}
			}
        }
	}
}
register("postGuiRender", () => {
	if (Settings.perf_postGuiRender) {
		return;
	}
	for (var property in textinputs) {
		var val = textinputs[property];
		val.ninput = val.input;
		if (val.name != "chat" && val.show) {
			val.Draw()
		}
	}
}).setPriority(Priority.LOWEST);
// console.log(`[SBdragons] Finished Loading!`);
register("guiOpened", guiopened);
function guiopened() {
	if (Settings.perf_guiOpened) {
		return;
	}
	tabstate = "opened";
	tabindex = 0;
	tabnow = "";
	if (Settings.chatinvclear) {
		chatinput.input = "";
	}
	rancommandi = rancommands.length;
	chatinput.chatfo = false;
	for (var property in textinputs) {
		var val = textinputs[property];
		val.chatfo = false;
	}
}

register("soundPlay", SoundPlayscam);
function SoundPlayscam(pos, name, vol, pitch, cata, event) {
	if (Settings.perf_soundPlay) {
		return;
	}
	if (`${name}`.includes("mob.zombie.remedy")) {
		// console.log(`Wither Shield ACTIVE!`);
		WitherShieldcd = Date.now();
    }
	if (name == "random.levelup") {
		WitherShieldcd = 0;
    }
	if (Settings.textInput == "scamsound") {
		console.log(`N=${name} V=${vol} P=${pitch} C=${cata}`);
    }
}

//function GlowEntity(entity, partialTicks) {
//	var mc = Client.getMinecraft();
//	var renderGlobal = mc.renderGlobal;

//	mc.theWorld.theProfiler.endStartSection("entityOutlines");
//	renderGlobal.entityOutlineFramebuffer.framebufferClear();

//	GlStateManager.depthFunc(519);
//	GlStateManager.disableFog();
//	renderGlobal.entityOutlineFramebuffer.bindFramebuffer(false);
//	RenderHelper.disableStandardItemLighting();
//	mc.getRenderManager().setRenderOutlines(true);

//	GlStateManager.enableColorMaterial();
//	enableOutlineMode(Renderer.color(0,200,10,100));
//	mc.getRenderManager().renderEntitySimple(entity, partialTicks);
//	disableOutlineMode();
//	GlStateManager.disableColorMaterial();

//	mc.getRenderManager().setRenderOutlines(false);
//	RenderHelper.enableStandardItemLighting();
//	GlStateManager.depthMask(false);
//	renderGlobal.entityOutlineShader.loadShaderGroup(partialTicks);
//	GlStateManager.enableLighting();
//	GlStateManager.depthMask(true);
//	GlStateManager.enableFog();
//	GlStateManager.enableBlend();
//	GlStateManager.enableColorMaterial();
//	GlStateManager.depthFunc(515);
//	GlStateManager.enableDepth();
//	GlStateManager.enableAlpha();

//	mc.getFramebuffer().bindFramebuffer(false);
//}

function drawString(text, x, y, z, color, renderBlackBox, scale, increase, throughWall) {
	if (throughWall) {
		Tessellator.drawString(text, x, y, z, color, renderBlackBox, scale, increase);
	} else {
		let lScale = scale;

		const renderManager = Renderer.getRenderManager();
		const fontRenderer = Renderer.getFontRenderer();

		const tessellator = MCTessellator.func_178181_a(); // getInstance()
		const worldRenderer = tessellator.func_178180_c(); // getRenderer()

		const renderPos = Tessellator.getRenderPos(x, y, z);

		if (increase) {
			const distance = Math.sqrt(renderPos.x * renderPos.x + renderPos.y * renderPos.y + renderPos.z * renderPos.z);
			const multiplier = distance / 120; // mobs only render ~120 blocks away
			lScale *= 0.45 * multiplier;
		}

		GL11.glColor4f(1, 1, 1, 0.5);
		GL11.glPushMatrix();
		GL11.glTranslatef(renderPos.x, renderPos.y, renderPos.z);
		GL11.glRotatef(-renderManager.field_78735_i, 0.0, 1.0, 0.0); // playerViewY
		GL11.glRotatef(renderManager.field_78732_j, 1.0, 0.0, 0.0); // playerViewX
		GL11.glScalef(-lScale, -lScale, lScale);
		GL11.glDisable(GL11.GL_LIGHTING);
		GL11.glDepthMask(false);
		GL11.glEnable(GL11.GL_BLEND);
		GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);

		const textWidth = fontRenderer.func_78256_a(text); // getStringWidth()

		if (renderBlackBox) {
			let j = textWidth / 2;
			GlStateManager.func_179090_x(); // disableTexture2D()
			worldRenderer.func_181668_a(7, DefaultVertexFormats.field_181706_f); // begin() | POSITION_COLOR
			worldRenderer.func_181662_b(-j - 1, -1, 0.0).func_181666_a(0.0, 0.0, 0.0, 0.25).func_181675_d(); // pos() | color() | endVertex()
			worldRenderer.func_181662_b(-j - 1, 8, 0.0).func_181666_a(0.0, 0.0, 0.0, 0.25).func_181675_d(); // pos() | color() | endVertex()
			worldRenderer.func_181662_b(j + 1, 8, 0.0).func_181666_a(0.0, 0.0, 0.0, 0.25).func_181675_d(); // pos() | color() | endVertex()
			worldRenderer.func_181662_b(j + 1, -1, 0.0).func_181666_a(0.0, 0.0, 0.0, 0.25).func_181675_d(); // pos() | color() | endVertex()
			tessellator.func_78381_a(); // draw()
			GlStateManager.func_179098_w(); // enableTexture2D()
		}

		fontRenderer.func_78276_b(text, -textWidth / 2, 0, color); // drawString()

		GL11.glColor4f(1.0, 1.0, 1.0, 1.0);
		GL11.glDepthMask(true);
		GL11.glPopMatrix();
	}
}
function getDistance(x1, y1, z1, x2, y2, z2) {
	// console.log(`${x1} ${x2}`)
	// console.log(`${Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2)}`)
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) + Math.pow(z1 - z2, 2));
}
function drawLineSmall(x, y, z, x2, y2, z2, r, g, b) {
	GL11.glLineWidth(3);

	Tessellator.begin(3).colorize(r, g, b);

	Tessellator.pos(x, y, z).tex(0, 0);
	Tessellator.pos(x2, y2, z2).tex(0, 0);

	Tessellator.draw();
}
function renderRarity(xPos, yPos, rarity) {
	// console.log(`Function RenderRarity Called.`);
	GlStateManager.func_179140_f(); // disableLighting
	GlStateManager.func_179097_i(); // disableDepth
	GlStateManager.func_179147_l(); // enableBlend
	GlStateManager.func_179141_d(); // enableAlpha
	// Minecraft.getMinecraft().getTextureManager().bindTexture(RARITY);
	// GlStateManager.func_179131_c(new intType(255), new intType(1), new intType(1), new intType(0.5)); // color
	GlStateManager.func_179112_b(770, 771); // blendFunc
	// GL11.glTexEnvi(GL11.GL_TEXTURE_ENV, GL11.GL_TEXTURE_ENV_MODE, GL11.GL_BLEND);
	Renderer.drawRect(Renderer.color(0, 255, 0, 120), xPos - 8, yPos - 8, 16, 16);
	// MGUI.func_146110_a(xPos, yPos, 0, 0, 16, 16, 16, 16);
	// GL11.glTexEnvi(GL11.GL_TEXTURE_ENV, GL11.GL_TEXTURE_ENV_MODE, GL11.GL_MODULATE);
	GlStateManager.func_179145_e(); //enableLighting
	GlStateManager.func_179126_j(); //enableDepth
	GlStateManager.func_179084_k(); // disableBlend 
	GlStateManager.func_179118_c(); // disableAlpha 
}

function getcolorfromcode(name) {
	var letter = name.replaceFormatting();
	if (name.length > 1) {
		try {
			name = name.replaceFormatting();
			names = name.split(`&`);
			// console.log(`${names[1][0]}`)
			if (names[1][0] != `4` && names[1][0] != `c`) {
				letter = names[1][0];
				// console.log(`DO IT`);
			}
			else {
				letter = names[2][0];
			}
		} catch (e) {
			return Renderer.color(255, 255, 255, Settings.itemrarityalpha);
		}

		// letter = name[1];
	}
	// console.log(`colorfromcode ${letter}`);
	if (letter == `0`) {
		return Renderer.color(0, 0, 0, Settings.itemrarityalpha);
	}
	if (letter == `1`) {
		return Renderer.color(0, 0, 170, Settings.itemrarityalpha);
	}
	if (letter == `2`) {
		return Renderer.color(0, 150, 0, Settings.itemrarityalpha);
	}
	if (letter == `3`) {
		return Renderer.color(0, 150, 150, Settings.itemrarityalpha);
	}
	if (letter == `4`) {
		return Renderer.color(170, 0, 0, Settings.itemrarityalpha);
	}
	if (letter == `5`) {
		return Renderer.color(150, 10, 150, Settings.itemrarityalpha);
	}
	if (letter == `6`) {
		return Renderer.color(200, 150, 0, Settings.itemrarityalpha);
	}
	if (letter == `7`) {
		return Renderer.color(150, 150, 150, Settings.itemrarityalpha);
	}
	if (letter == `8`) {
		return Renderer.color(100, 100, 100, Settings.itemrarityalpha);
	}
	if (letter == `9`) {
		return Renderer.color(70, 70, 240, Settings.itemrarityalpha);
	}
	if (letter == `a`) {
		return Renderer.color(50, 180, 50, Settings.itemrarityalpha);
	}
	if (letter == `b`) {
		return Renderer.color(85, 255, 255, Settings.itemrarityalpha);
	}
	if (letter == `c`) {
		return Renderer.color(255, 85, 85, Settings.itemrarityalpha);
	}
	if (letter == `d`) {
		return Renderer.color(255, 85, 255, Settings.itemrarityalpha);
	}
	if (letter == `e`) {
		return Renderer.color(255, 255, 85, Settings.itemrarityalpha);
	}
	if (letter == `f`) {
		return Renderer.color(250, 250, 250, Settings.itemrarityalpha);
	}
	if (letter == `r`) {
		return Renderer.color(250, 250, 250, Settings.itemrarityalpha);
	}
	return Renderer.color(255, 255, 255, Settings.itemrarityalpha);
}
function drawBoxAtBlockNotVisThruWalls(x, y, z, colorR, colorG, colorB) {
	GL11.glBlendFunc(770, 771);
	GL11.glEnable(GL11.GL_BLEND);
	GL11.glLineWidth(3);
	GL11.glDisable(GL11.GL_TEXTURE_2D);
	GlStateManager.func_179094_E();


	Tessellator.begin(3).colorize(colorR, colorG, colorB);

	Tessellator.pos(x + 1, y + 1, z + 1).tex(0, 0);
	Tessellator.pos(x + 1, y + 1, z).tex(0, 0);
	Tessellator.pos(x, y + 1, z).tex(0, 0);
	Tessellator.pos(x, y + 1, z + 1).tex(0, 0);
	Tessellator.pos(x + 1, y + 1, z + 1).tex(0, 0);
	Tessellator.pos(x + 1, y, z + 1).tex(0, 0);
	Tessellator.pos(x + 1, y, z).tex(0, 0);
	Tessellator.pos(x, y, z).tex(0, 0);
	Tessellator.pos(x, y, z + 1).tex(0, 0);
	Tessellator.pos(x, y, z).tex(0, 0);
	Tessellator.pos(x, y + 1, z).tex(0, 0);
	Tessellator.pos(x, y, z).tex(0, 0);
	Tessellator.pos(x + 1, y, z).tex(0, 0);
	Tessellator.pos(x + 1, y + 1, z).tex(0, 0);
	Tessellator.pos(x + 1, y, z).tex(0, 0);
	Tessellator.pos(x + 1, y, z + 1).tex(0, 0);
	Tessellator.pos(x, y, z + 1).tex(0, 0);
	Tessellator.pos(x, y + 1, z + 1).tex(0, 0);
	Tessellator.pos(x + 1, y + 1, z + 1).tex(0, 0);

	Tessellator.draw();

	GlStateManager.func_179121_F();
	GL11.glEnable(GL11.GL_TEXTURE_2D);
	GL11.glDisable(GL11.GL_BLEND);
}
function drawBoxAtBlock(x, y, z, colorR, colorG, colorB) {

	GL11.glBlendFunc(770, 771);
	GL11.glEnable(GL11.GL_BLEND);
	GL11.glLineWidth(3);
	GL11.glDisable(GL11.GL_TEXTURE_2D);
	GL11.glDisable(GL11.GL_DEPTH_TEST);
	GL11.glDepthMask(false);
	GlStateManager.func_179094_E();

	Tessellator.begin(3).colorize(colorR, colorG, colorB);

	Tessellator.pos(x + 1, y + 1, z + 1).tex(0, 0);
	Tessellator.pos(x + 1, y + 1, z).tex(0, 0);
	Tessellator.pos(x, y + 1, z).tex(0, 0);
	Tessellator.pos(x, y + 1, z + 1).tex(0, 0);
	Tessellator.pos(x + 1, y + 1, z + 1).tex(0, 0);
	Tessellator.pos(x + 1, y, z + 1).tex(0, 0);
	Tessellator.pos(x + 1, y, z).tex(0, 0);
	Tessellator.pos(x, y, z).tex(0, 0);
	Tessellator.pos(x, y, z + 1).tex(0, 0);
	Tessellator.pos(x, y, z).tex(0, 0);
	Tessellator.pos(x, y + 1, z).tex(0, 0);
	Tessellator.pos(x, y, z).tex(0, 0);
	Tessellator.pos(x + 1, y, z).tex(0, 0);
	Tessellator.pos(x + 1, y + 1, z).tex(0, 0);
	Tessellator.pos(x + 1, y, z).tex(0, 0);
	Tessellator.pos(x + 1, y, z + 1).tex(0, 0);
	Tessellator.pos(x, y, z + 1).tex(0, 0);
	Tessellator.pos(x, y + 1, z + 1).tex(0, 0);
	Tessellator.pos(x + 1, y + 1, z + 1).tex(0, 0);

	Tessellator.draw();

	GlStateManager.func_179121_F();
	GL11.glEnable(GL11.GL_TEXTURE_2D);
	GL11.glEnable(GL11.GL_DEPTH_TEST);
	GL11.glDepthMask(true);
	GL11.glDisable(GL11.GL_BLEND);
}

function drawEspBox(x, y, z, w, h, red, green, blue, alpha, phase) {
	GL11.glDisable(GL11.GL_CULL_FACE);
	if (phase) {
		GL11.glBlendFunc(770, 771);
		GL11.glEnable(GL11.GL_BLEND);
		GL11.glLineWidth(2.0);
		GL11.glDisable(GL11.GL_TEXTURE_2D);
		GL11.glDisable(GL11.GL_DEPTH_TEST);
		GL11.glDepthMask(false);
		GlStateManager.func_179094_E();
	} else {
		GL11.glDisable(GL11.GL_TEXTURE_2D);
		GL11.glBlendFunc(770, 771);
		GL11.glEnable(GL11.GL_BLEND);
		GL11.glLineWidth(2.0);
		GL11.glDepthMask(false);
		GlStateManager.func_179094_E();
	}

	const locations = [
		//    x, y, z    x, y, z
		[
			[0, 0, 0],
			[w, 0, 0],
		],
		[
			[0, 0, 0],
			[0, 0, w],
		],
		[
			[w, 0, w],
			[w, 0, 0],
		],
		[
			[w, 0, w],
			[0, 0, w],
		],

		[
			[0, h, 0],
			[w, h, 0],
		],
		[
			[0, h, 0],
			[0, h, w],
		],
		[
			[w, h, w],
			[w, h, 0],
		],
		[
			[w, h, w],
			[0, h, w],
		],

		[
			[0, 0, 0],
			[0, h, 0],
		],
		[
			[w, 0, 0],
			[w, h, 0],
		],
		[
			[0, 0, w],
			[0, h, w],
		],
		[
			[w, 0, w],
			[w, h, w],
		],
	];

	locations.forEach((loc) => {
		Tessellator.begin(3).colorize(red, green, blue, alpha);

		Tessellator.pos(x + loc[0][0], y + loc[0][1], z + loc[0][2]).tex(0, 0);

		Tessellator.pos(x + loc[1][0], y + loc[1][1], z + loc[1][2]).tex(0, 0);

		Tessellator.draw();
	});

	GL11.glEnable(GL11.GL_CULL_FACE);
	if (phase) {
		GlStateManager.func_179121_F();
		GL11.glEnable(GL11.GL_TEXTURE_2D);
		GL11.glEnable(GL11.GL_DEPTH_TEST);
		GL11.glDepthMask(true);
		GL11.glDisable(GL11.GL_BLEND);
	} else {
		GL11.glEnable(GL11.GL_TEXTURE_2D);
		GlStateManager.func_179121_F();
		GL11.glDepthMask(true);
		GL11.glDisable(GL11.GL_BLEND);
	}
};
//register("GuiRender", () => {
//	if (Settings.enchantitemstack) {
//		if (Player.getOpenedInventory() !== null) {
//			let i = 0;
//			Player.getOpenedInventory().getItems().forEach((item) => {
//				console.log(`${i} ${item.getName()}`);
//				// if (removeColors(item.getName()).toLowerCase().startsWith(letter) && !item.isEnchanted()) {

//				// itemsHighlight.push(i);
//				// }
//				item.setStackSize(10);
//				i++;
//			})
//		}
//	}
//})
let metadata = FileLib.read("SBdragons", "metadata.json");
metadata = JSON.parse(metadata)
// console.log(`Loaded SBdragons V${metadata.version}`)

if (Settings.autoupdater) {
	try {

		new Thread(() => {
			var doupdate = false;
			let pmetadata = FileLib.getUrlContent("https://pastebin.com/raw/UpUuGFNZ");
			let pastebinmetadata = JSON.parse(pmetadata);
			// console.log(`Pastebin ver ${pastebinmetadata.version}`);
			var nowver = metadata.version.split(`.`);
			var pasver = pastebinmetadata.version.split(`.`);
			for (var property in nowver) {
				var nver = parseInt(nowver[property])
				var pver = parseInt(pasver[property])
				if (nver < pver) {
					ChatLib.chat(`&e[SBdragons] Update Available! Preparing to install...`);
					doupdate = true;
					break;
				}
			}
			if (doupdate == true) {
				var oldfolder = "./config/ChatTriggers/modules/SBdragons/SBdragons.old";
				FileUtilities.newDirectory(oldfolder);
				ChatLib.chat(`&e[SBdragons] Backuping Your Version...`);
				//if (!FileUtilities.exists("./SBdragons.old")) {
				//	FileUtilities.newDirectory("./SBdragons.old");
				//      }

				FileLib.write("SBdragons", "SBdragons.old/metadata.json", FileLib.read("SBdragons", "metadata.json"));
				FileLib.write("SBdragons", "SBdragons.old/index.js", FileLib.read("SBdragons", "index.js"));
				FileLib.write("SBdragons", "SBdragons.old/config.js", FileLib.read("SBdragons", "config.js"));

				ChatLib.chat(`&e[SBdragons] Updating to ${pastebinmetadata.version}... [from ${metadata.version}]`);
				let pastebinindex = FileLib.getUrlContent("https://pastebin.com/raw/1GwKjDLt");
				let pastebinconfig = FileLib.getUrlContent("https://pastebin.com/raw/C8sFTHdq");

				FileLib.write("SBdragons", "metadata.json", pmetadata);
				FileLib.write("SBdragons", "index.js", pastebinindex);
				FileLib.write("SBdragons", "config.js", pastebinconfig);


				if (Settings.autoupdaterreload) {
					ChatLib.chat(`&e[SBdragons] Update Finished! Reloading...`);
					ChatTriggers.loadCT()
				}
				else {
					ChatLib.chat(`&e[SBdragons] Update Finished! reload to apply!`);
				}
			}
			return;
		}).start()
	}
	catch(e) {
		console.log(`Auto Updater Failed due to ${e}`);
    }
}

// console.log(removeColors(`error &e §eERROR`));
function removeColors(text) {
	const regex = /[\\§7][0 - 9a-fklmnor]/g
	var textn = "";
	//var whatclass = "";
	//try {
	//	whatclass = text.getClass()
	//} catch (e) {
	//	whatclass = typeof text
	//}
	//if (!whatclass.includes(`string`)) {
	//	// var textp = `${text}`
		
	//	console.log(`removecolors not text ${whatclass}`);
	//	// text = `${text}`;
	//	return ChatLib.removeFormatting(text);
 //   }
    try {
		if (Settings.textInput == "removecolors1") {
			textlist = text.split("");
			for (var i in textlist) {
				iv = parseInt(i);
				if (textlist[iv] == `§`) {
					// console.log(`scammed ${textlist[iv]} ${textlist[iv + 1]}`);
					textlist[iv] = `♣`;
					textlist[iv + 1] = `♣`;

				}
				// console.log(`${i} ${textlist[i]}`);

			}
			textn = textlist.join("")
			// console.log(`${typeof textn}`)
			while (textn.includes(`♣`)) {
				textn = textn.replace("♣", "")
			}
		}
		else if (Settings.textInput == "removecolors2") {
			textn = text;
			while (textn.includes("§")) {
				textn = textn.replace(`§0`);
				textn = textn.replace(`§1`);
				textn = textn.replace(`§2`);
				textn = textn.replace(`§3`);
				textn = textn.replace(`§4`);
				textn = textn.replace(`§5`);
				textn = textn.replace(`§6`);
				textn = textn.replace(`§7`);
				textn = textn.replace(`§8`);
				textn = textn.replace(`§9`);
				textn = textn.replace(`§a`);
				textn = textn.replace(`§b`);
				textn = textn.replace(`§c`);
				textn = textn.replace(`§d`);
				textn = textn.replace(`§e`);
				textn = textn.replace(`§f`);
				textn = textn.replace(`§k`);
				textn = textn.replace(`§l`);
				textn = textn.replace(`§m`);
				textn = textn.replace(`§n`);
				textn = textn.replace(`§o`);
				textn = textn.replace(`§r`);
			}
		}
		//else if (Settings.textInput == "removecolors3") {
		//	textn = text;
		//	while (textn.includes(`§`)) {
		//		textn.replace(regex, "");
		//	}
		//}
		else {
			textn = ChatLib.removeFormatting(text);
		}
	} catch (e) {
		textn = ChatLib.removeFormatting(text);
    }
	// console.log(`${textn}`);
	return textn;
}
String.prototype.removeColors = function () {
	return removeColors(this);
};

function runcmd(cmd) {
	if (cmd.startsWith(`/`)) {
		var result = ClientCommandHandler.instance.func_71556_a(Player.getPlayer(), cmd)
		console.log(`runcmd ${cmd} ${result}`);
		if (result == 1) {
			return;
		}
	}
	ChatLib.say(cmd)
	return;
}


