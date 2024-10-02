document.addEventListener("DOMContentLoaded", () => {
	const hamburgerIcon = document.querySelector(".hamburger-icon");
	const menuIcon = document.querySelector(".menu-icon");
	const closeIcon = document.querySelector(".close-icon");
	const mobileNav = document.querySelector(".mobile-nav");
	const overlay = document.createElement("div");

	overlay.classList.add("overlay");
	document.body.appendChild(overlay);

	const toggleMobileNav = () => {
		const isOpen = mobileNav.classList.contains("open");

		if (isOpen) {
			mobileNav.classList.remove("open");
			overlay.classList.remove("active");
			menuIcon.style.display = "block";
			closeIcon.style.display = "none";
			document.body.style.overflow = "";
		} else {
			mobileNav.classList.add("open");
			overlay.classList.add("active");
			menuIcon.style.display = "none";
			closeIcon.style.display = "block";
			document.body.style.overflow = "hidden";
		}
	};

	hamburgerIcon.addEventListener("click", (e) => {
		e.preventDefault();
		toggleMobileNav();
	});

	overlay.addEventListener("click", () => {
		toggleMobileNav();
	});

	const mobileNavLinks = mobileNav.querySelectorAll("a");
	mobileNavLinks.forEach((link) => {
		link.addEventListener("click", () => {
			toggleMobileNav();
		});
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 950 && mobileNav.classList.contains("open")) {
			toggleMobileNav();
		}
	});
});
