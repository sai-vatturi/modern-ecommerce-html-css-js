document.addEventListener("DOMContentLoaded", function () {
	let cartItems = [];
	let quantity = 1;
	const pricePerItem = 125.0;

	const minusButton = document.querySelectorAll(".quantity-button")[0];
	const plusButton = document.querySelectorAll(".quantity-button")[1];
	const quantityNumber = document.querySelector(".quantity-number");
	const addToCartButton = document.querySelector(".add-to-cart");
	const cartCountElement = document.getElementById("cart-count");
	const cartIcon = document.getElementById("cart");
	const cartDropdown = document.getElementById("cart-dropdown");
	const cartItemsContainer = document.getElementById("cart-items-container");
	const cartTotalPrice = document.getElementById("cart-total-price");

	plusButton.addEventListener("click", function () {
		quantity += 1;
		quantityNumber.textContent = quantity;
	});

	minusButton.addEventListener("click", function () {
		if (quantity > 1) {
			quantity -= 1;
			quantityNumber.textContent = quantity;
		}
	});

	addToCartButton.addEventListener("click", function () {
		const item = {
			name: "Autumn Limited Edition Sneakers",
			price: pricePerItem,
			quantity: quantity,
			image: "./images/image-product-1-thumbnail.jpg"
		};
		cartItems.push(item);
		updateCartCount();
		updateCartDropdown();
		quantity = 1;
		quantityNumber.textContent = quantity;
	});

	cartIcon.addEventListener("click", function () {
		if (cartDropdown.style.display === "none" || cartDropdown.style.display === "") {
			cartDropdown.style.display = "block";
		} else {
			cartDropdown.style.display = "none";
		}
	});

	function updateCartCount() {
		let totalQuantity = 0;
		cartItems.forEach((item) => {
			totalQuantity += item.quantity;
		});
		cartCountElement.style.display = totalQuantity > 0 ? "block" : "none";
		cartCountElement.textContent = totalQuantity;
	}

	function updateCartDropdown() {
		cartItemsContainer.innerHTML = "";

		let totalPrice = 0;
		cartItems.forEach((item) => {
			totalPrice += item.price * item.quantity;

			const cartItem = document.createElement("div");
			cartItem.classList.add("cart-item");

			cartItem.innerHTML = `
                <img src="${item.image}" alt="Product Image">
                <div class="cart-item-details">
                    <p>${item.name}</p>
                    <p style="margin-top:5px; font-size: 13px">$${item.price.toFixed(2)} x ${item.quantity} =  <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span></p>
                </div>
                <img src="./images/icon-delete.svg" alt="Delete" class="delete-icon">
            `;

			cartItemsContainer.appendChild(cartItem);

			const deleteIcon = cartItem.querySelector(".delete-icon");
			deleteIcon.addEventListener("click", function () {
				removeItemFromCart(item);
			});
		});

		cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
	}

	function removeItemFromCart(itemToRemove) {
		cartItems = cartItems.filter((item) => item !== itemToRemove);
		updateCartCount();
		updateCartDropdown();
	}
});
