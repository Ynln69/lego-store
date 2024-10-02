import { addToCart } from "./cart.js";

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

fetch("./products-data.json")
  .then((response) => response.json())
  .then((data) => {
    const product = data.products.find((p) => p.id == productId);
    
    if (product) {
      const productMarkup = `
          <div>
            <img src="${product.photo}" alt="${product.title}" class="product-image" />
          </div>
          <div class="product-info">
            <h2 class="product-info-title">${product.title}</h2>
            <p class="product-info-price">${product.price} PLN</p>
            <p class="product-info-description">${product.description}</p>
            <button type="button" class="basket-btn" data-id="${product.id}">${product.button}
              <svg width="16" height="16">
                  <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
              </svg>
            </button>
          </div>
      `;

      document.getElementById("product-container").innerHTML = productMarkup;

      const addToCartBtn = document.querySelector(".basket-btn");
      addToCartBtn.addEventListener("click", () => {
        addToCart(product);
      });
    } else {
      console.error("Продукт не знайдено");
    }
  })
  .catch((error) => console.error("Помилка при завантаженні JSON:", error));
