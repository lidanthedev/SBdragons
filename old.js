// import { register } from "../SettingsManager/Settings";
import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";
import { drawBox } from "./features/betterGlowingEffect";
let yes = 0;
var tickc = 0;

const settings = new SettingsObject(
	"SBdragons",
	[
		{
			name: "Hide",
			settings: [
				new Setting.Toggle("Hide All Players", false),
				new Setting.Toggle("Hide Zac", true)
			]
		},
		{
			name: "Glowing",
			settings: [
				new Setting.Toggle("Glowing Players And Guys", true),
				new Setting.Toggle("Glowing Items", true),
				new Setting.Toggle("Glowing Dragons", true)
			]
		},
		{
			name: "Dungeon",
			settings: [
				new Setting.Toggle("Blaze Solver", true),
				new Setting.Toggle("Health Notify", true)
			]
		}
	]
);
settings.setCommand("sbdragons").setSize(400, 200);
Setting.register(settings);

function isonskyblock() {
	if (Scoreboard.getScoreboardTitle().includes("Skyblock")) {
		return true;
	} 
	return false;
}

register("renderEntity", function (entity, position, ticks, event) {
	if (isonskyblock()) {
		switch (entity.getClassName()) {
			case ("EntityOtherPlayerMP"):
				if (settings.getSetting("Glowing", "Glowing Players And Guys")) {
					drawBox(entity, 255, 255, 255, 1.2, 0.8, 2, ticks);
				}
				if (settings.getSetting("Hide", "Hide All Players")) {
					cancel(event)
				}
				break;
		}
		if (entity.getClassName() === "EntityItem") {
			if (settings.getSetting("Glowing", "Glowing Items")) {
				drawBox(entity, 0, 100, 255, 1.5, 0.5, 0.5, ticks);
			}

		}
		if (entity.getClassName() === "EntityDragon") {
			if (settings.getSetting("Glowing", "Glowing Dragons")) {
				drawBox(entity, 255, 10, 10, 3, 10, 5, ticks);
			}
		}
	}
	// ChatLib.chat(entity.getClassName())
	if (entity.getClassName() === "EntityEnderman") {
		if (entity.getName().includes("ZAC")) {
			if (settings.getSetting("Hide", "Hide Zac")) {
				cancel(event)
			}
		}
	}
});

register("renderWorld", () => {
	let blazes = {};
	if (!settings.getSetting("Dungeon", "Blaze Solver")) return;

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

register("tick", () => {
	if (!settings.getSetting("Dungeon", "Health Notify")) return;
	Scoreboard.getLines(false).forEach(line => {
		let unformatted = line.toString();
		line = ChatLib.removeFormatting(line);
		if (line.endsWith("❤")) {
			line = line.split("❤")[0];
			let name = line.split(" ")[1];
			if (name.includes("-")) return;

			let unformattedHP = unformatted.split(" ")[2].split("§c❤")[0];
			if (unformattedHP.includes("§e") || (unformattedHP.includes("§c"))) {
				Client.showTitle(`&c${name} is low!`, unformattedHP + "❤", 0, 10, 10);
			}
		}
	});
});

//register("command", checkcmd()).setCommand("isskyblock");

//function checkcmd() {
//	ChatLib.chat(isonskyblock())
//}