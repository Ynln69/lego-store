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
            <h2 class="product-info-title" data-translate="towary.cardTitle${product.id}">${product.title}</h2>
            <p class="product-info-price">${product.price} PLN</p>
            <p class="product-info-description" data-translate="towary.cardDesc${product.id}">${product.description}</p>
            <button type="button" class="basket-btn" data-id="${product.id}" data-translate="towary.cardBtn">${product.button}
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

      updateTranslations();
    } else {
      console.error("Продукт не знайдено");
    }
  })
  .catch((error) => console.error("Помилка при завантаженні JSON:", error));

function updateTranslations() {
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const key = element.getAttribute('data-translate');
    element.textContent = i18next.t(key); 
  });
}
