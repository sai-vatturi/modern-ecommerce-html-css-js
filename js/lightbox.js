document.addEventListener("DOMContentLoaded", function () {
	const lightbox = document.querySelector(".lightbox");
	const closeBtn = document.querySelector(".close");
	const thumbnails = document.querySelectorAll(".thumbnail-image-lightbox");
	const lightboxImage = document.querySelector(".lightbox-image");
	const prevBtn = document.querySelector(".prev");
	const nextBtn = document.querySelector(".next");
	const productImage = document.querySelector(".product-image");

	let currentIndex = 0;
	const images = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"];

	function openLightbox(index) {
		currentIndex = index;
		lightboxImage.src = images[currentIndex];
		lightbox.style.display = "flex";
		updateActiveThumbnail();
	}

	function closeLightbox() {
		lightbox.style.display = "none";
	}

	function updateActiveThumbnail() {
		thumbnails.forEach((thumb, index) => {
			thumb.classList.toggle("active", index === currentIndex);
		});
	}

	function showNextImage() {
		currentIndex = (currentIndex + 1) % images.length;
		lightboxImage.src = images[currentIndex];
		updateActiveThumbnail();
	}

	function showPrevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		lightboxImage.src = images[currentIndex];
		updateActiveThumbnail();
	}

	productImage.addEventListener("click", function () {
		openLightbox(0);
	});

	thumbnails.forEach((thumbnail, index) => {
		thumbnail.addEventListener("click", function () {
			openLightbox(index);
		});
	});

	nextBtn.addEventListener("click", showNextImage);
	prevBtn.addEventListener("click", showPrevImage);

	closeBtn.addEventListener("click", closeLightbox);

	lightbox.addEventListener("click", function (e) {
		if (e.target === lightbox) {
			closeLightbox();
		}
	});
});
