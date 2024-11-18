console.log("main.js loaded");

data.forEach((animal) => {
	console.log(animal.name);
});

$(document).ready(function () {
	// Funktion zur Generierung der Bild-URL basierend auf der Gruppe und der Gruppennummer
	function getImageUrl(group, groupNumber) {
		const basePath = "images/";
		const imageName =
			group.toLowerCase() +
			"_" +
			groupNumber.toString().toLowerCase() +
			".png";
		return basePath + imageName;
	}

	// Funktion zur Erstellung einer Tierkarte
	function createCard(animal) {
		// Bestimme die Klasse basierend auf der group_number
		let cardContentClass =
			animal.group_number === "A"
				? "card-content special"
				: "card-content";

		// Bestimme die Klasse basierend auf dem group-Wert
		let cardCodeClass, cardTitleClass;
		switch (animal.group) {
			case "A":
				cardCodeClass = "card-code group-a";
				cardTitleClass = "card-title group-a";
				break;
			case "B":
				cardCodeClass = "card-code group-b";
				cardTitleClass = "card-title group-b";
				break;
			case "C":
				cardCodeClass = "card-code group-c";
				cardTitleClass = "card-title group-c";
				break;
			case "D":
				cardCodeClass = "card-code group-d";
				cardTitleClass = "card-title group-d";
				break;
			case "E":
				cardCodeClass = "card-code group-e";
				cardTitleClass = "card-title group-e";
				break;
			case "F":
				cardCodeClass = "card-code group-f";
				cardTitleClass = "card-title group-f";
				break;
			case "G":
				cardCodeClass = "card-code group-g";
				cardTitleClass = "card-title group-g";
				break;
			case "H":
				cardCodeClass = "card-code group-h";
				cardTitleClass = "card-title group-h";
				break;
			default:
				cardCodeClass = "card-code";
				cardTitleClass = "card-title";
		}

		// HTML für die Tierkarte erstellen
		let divBox = $(`<div class="card-wrapper">
            <div class="${cardContentClass}">
                <div class="${cardCodeClass}">${animal.group} ${
			animal.group_number
		}</div>
		 <div class="${cardTitleClass}"> ${animal.name_german}</div>
    
                <img src="${getImageUrl(
					animal.group,
					animal.group_number
				)}" alt="${
			animal.name_german
		}" class="card-img" id="Titelbild" />
                <div class="card-description">${animal.trivia_german}</div>
                <div class="card-stats-container">
                    <div class="card-stats">
                        <div class="stat-icon">
                            <img src="images/Icons/scale.png" alt="scale" />
                        </div>
                        <div class="stat-value">${animal.max_weight}kg</div>
                    </div>
                    <div class="card-stats">
                        <div class="stat-icon">
                            <img src="images/Icons/ruler.png" alt="ruler" />
                        </div>
                        <div class="stat-value">${animal.max_length}cm</div>
                    </div>
                    <div class="card-stats">
                        <div class="stat-icon">
                            <img src="images/Icons/hourglass.png" alt="hourglass" />
                        </div>
                        <div class="stat-value">${animal.max_age} Jahre</div>
                    </div>
                    <div class="card-stats">
                        <div class="stat-icon">
                            <img src="images/Icons/clock.png" alt="clock" />
                        </div>
                        <div class="stat-value">${animal.top_speed}m/s</div>
                    </div>
                    <div class="card-stats">
                        <div class="stat-icon">
                            <img src="images/Icons/milk-bottle.png" alt="milk-bottle" />
                        </div>
                        <div class="stat-value">${animal.litter_size}</div>
                    </div>
                    <div class="card-stats">
                        <div class="stat-icon">
                            <img src="images/Icons/skull.png" alt="skull" />
                        </div>
                        <div class="stat-value">${animal.deaths}</div>
                    </div>
                </div>
            </div>
        </div>`);
		return divBox;
	}

	// Funktion zur Darstellung der Karten
	function renderCards(filterGroup) {
		const $wrapper = $("#wrapper");
		$wrapper.empty();

		const filteredData =
			filterGroup === "all"
				? data
				: data.filter((animal) => animal.group === filterGroup);

		filteredData.forEach((animal) => {
			const card = createCard(animal);
			$wrapper.append(card);
		});
	}

	// Initiales Rendern aller Karten
	renderCards("all");

	// Filterlogik für Dropdown-Menü
	$("#animal-filter").on("change", function () {
		const selectedGroup = $(this).val();
		renderCards(selectedGroup);
	});

	// Highlight für Navigation
	$("nav ul li").on("click", function () {
		const group = $(this).data("group");
		renderCards(group);

		$("nav ul li").removeClass("active");
		$(this).addClass("active");

		// Dropdown zurücksetzen
		$("#animal-filter").val("all");
	});
});

//Burgermenu
$(document).ready(function () {
	const $burgerMenu = $("#burger-menu");
	const $nav = $("nav");

	$burgerMenu.on("click", function () {
		const isExpanded = $(this).attr("aria-expanded") === "true";
		$(this).attr("aria-expanded", !isExpanded);
		$(this).toggleClass("open");
		$nav.toggleClass("open");
	});
});
