if (Settings.textInput == "F7AUTO" && ChatLib.removeFormatting(Player.getOpenedInventory().getName()).startsWith("Click On All ")) {
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