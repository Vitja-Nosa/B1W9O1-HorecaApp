function klantsBestelling() {
	var drankjeBestelling = prompt("Welke bestelling wilt u toevoegen? U kunt kiezen uit: fris, bier, wijn of snack.");
	if (drankjeBestelling == "stop") {
		document.write(hoeveelDrankjeBestelling + "x " + drankjeBestelling);
	}
	else if (drankjeBestelling !== "fris" && drankjeBestelling !== "bier" && drankjeBestelling !== "wijn") {
		alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
		klantsBestelling();
	}
	else {
		var hoeveelDrankjeBestelling = prompt("Hoeveel " + drankjeBestelling + " drankje wilt u toevoegen aan uw bestelling.");
		klantsBestelling();
	}
}