// script.js
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const hamburgerIcon = document.querySelector(".hamburger i");

hamburger.addEventListener("click", () => {
	navMenu.classList.toggle("active");

	// Toggle between hamburger and 'X' icon
	if (hamburgerIcon.classList.contains("fa-bars")) {
		hamburgerIcon.classList.remove("fa-bars");
		hamburgerIcon.classList.add("fa-times");
	} else {
		hamburgerIcon.classList.remove("fa-times");
		hamburgerIcon.classList.add("fa-bars");
	}
});
