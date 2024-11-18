console.log("home.js loaded");
//Burgermenu
document.addEventListener("DOMContentLoaded", function () {
	const burgerMenu = document.getElementById("burger-menu");
	const nav = document.querySelector("nav");

	burgerMenu.addEventListener("click", function () {
		nav.classList.toggle("open"); // Zeigt/versteckt die Navigation
		console.log("Burger-Button geklickt!");
		burgerMenu.classList.toggle("open"); // Animiert das Burger-Menü
		console.log(nav.classList);
	});
});
