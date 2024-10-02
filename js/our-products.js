import { addToCart } from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
  const productsPerPage = 6; // Кількість товарів на сторінці
  let currentPage = 1; // Поточна сторінка

  // Завантажуємо продукти і додаємо логіку для кнопок "Додати до корзини"
  fetch("./products-data.json")
    .then((response) => response.json())
    .then((data) => {
      const productsList = document.getElementById("our-products");
      const paginationContainer = document.getElementById("pagination");

      // Перевіряємо, чи елемент продуктів існує
      if (!productsList) {
        return;
      }

      // Перевіряємо, на якій сторінці ми знаходимось
      const isHomePage = window.location.pathname.includes("index.html");
      const productsToShow = isHomePage
        ? data.products.slice(0, 3)
        : data.products;

      // Функція для відображення товарів на поточній сторінці
      function displayProducts(page) {
        productsList.innerHTML = "";
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        const productsToDisplay = productsToShow.slice(start, end);

        productsToDisplay.forEach((product, index) => {
          const li = document.createElement("li");
          li.classList.add("our-products-item");

          const translateKeyTitle = `towary.cardTitle${index + 1}`;
          const translateKeyDesc = `towary.cardDesc${index + 1}`;
          const translateKeyBtn = `towary.cardBtn`;

          li.innerHTML = `
            <a href="../product-page.html?id=${product.id}">
            <img src="${product.photo}" alt="${product.title}" class="products-item-img">
            <div class="products-item-thumb">
              <h3 class="products-item-title" data-translate="${translateKeyTitle}">${product.title}</h3>
              <p class="products-item-desk" data-translate="${translateKeyDesc}">${product.description}</p>
            </div>
            </a>
            <div class="products-item-wrapper">
              <p class="products-item-price">${product.price} PLN</p>
              <button type="button" class="basket-btn" data-id="${product.id}" data-translate="${translateKeyBtn}">${product.button}
                <svg width="16" height="16">
                  <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
                </svg>
              </button>
            </div>
          `;
          productsList.appendChild(li);

          // Додаємо обробник події для кнопки "Додати до корзини"
          li.querySelector(".basket-btn").addEventListener("click", () => {
            addToCart(product);
          });
        });
      }

      // Функція для відображення кнопок пагінації
      function setupPagination() {
        // Перевіряємо, чи існує елемент пагінації
        if (!paginationContainer) {
          return;
        }
        paginationContainer.innerHTML = "";
        const pageCount = Math.ceil(productsToShow.length / productsPerPage);

        for (let i = 1; i <= pageCount; i++) {
          const button = document.createElement("button");
          button.innerText = i;
          button.classList.add("pagination-button");
          if (i === currentPage) {
            button.classList.add("active");
          }

          button.addEventListener("click", () => {
            currentPage = i;
            displayProducts(currentPage);
            setupPagination();
          });

          paginationContainer.appendChild(button);
        }
      }

      // Якщо не головна сторінка, додаємо пагінацію
      if (!isHomePage) {
        displayProducts(currentPage);
        setupPagination();
      } else {
        displayProducts(1); // Для головної сторінки просто показуємо перші 3 товари
      }
    })
    .catch((error) => console.error("Помилка при завантаженні JSON:", error));
});
