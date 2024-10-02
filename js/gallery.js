const mainImage = document.querySelector(".product-main-image img");
const thumbnails = document.querySelectorAll(".product-thumbnails img");

thumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener("click", () => {
		thumbnails.forEach((thumb) => thumb.classList.remove("active"));
		thumbnail.classList.add("active");
		mainImage.classList.add("fade-out");

		setTimeout(() => {
			mainImage.src = thumbnail.src.replace("-thumbnail", "");
			mainImage.classList.remove("fade-out");
			mainImage.classList.add("fade-in");
		}, 300);

		setTimeout(() => {
			mainImage.classList.remove("fade-in");
		}, 600);
	});
});
