import { addToCart } from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
  const productsPerPage = 6; 
  let currentPage = 1; 

  fetch("./products-data.json")
    .then((response) => response.json())
    .then((data) => {
      let productsData = data.products;  
      const productsList = document.getElementById("our-products");
      const paginationContainer = document.getElementById("pagination");

      if (!productsList) {
        return;
      }

      const isHomePage = window.location.pathname.includes("index.html");
      const productsToShow = isHomePage
        ? productsData.slice(0, 3)
        : productsData;

      function displayProducts(page) {
        productsList.innerHTML = "";
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        const productsToDisplay = productsToShow.slice(start, end);

        productsToDisplay.forEach((product, index) => {
          const li = document.createElement("li");
          li.classList.add("our-products-item");

          const translateKeyTitle = `towary.cardTitle${product.id}`; // Використовуємо id продукту замість index
          const translateKeyDesc = `towary.cardDesc${product.id}`;
          const translateKeyBtn = `towary.cardBtn`;

          li.innerHTML = `
            <a href="../product-page.html?id=${product.id}">
            <img src="${product.photo}" alt="${product.title}" class="products-item-img">
            <div class="products-item-thumb">
              <h3 class="products-item-title" data-translate="${translateKeyTitle}">${i18next.t(translateKeyTitle)}</h3>
              <p class="products-item-desk" data-translate="${translateKeyDesc}">${i18next.t(translateKeyDesc)}</p>
            </div>
            </a>
            <div class="products-item-wrapper">
              <p class="products-item-price">${product.price} PLN</p>
              <button type="button" class="basket-btn" data-id="${product.id}" data-translate="${translateKeyBtn}">
                ${i18next.t(translateKeyBtn)}
                <svg width="16" height="16">
                  <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
                </svg>
              </button>
            </div>
          `;
          productsList.appendChild(li);

          // Додаємо обробник події для кнопки "Додати до корзини"
          li.querySelector(".basket-btn").addEventListener("click", () => {
            addToCart({
              id: product.id,
              title: product.title,
              photo: product.photo,
              price: product.price,
              quantity: 1,
              type: 'product'  // Додаємо тип 'product'
            });
          });
        });
      }

      function setupPagination() {
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

      if (!isHomePage) {
        displayProducts(currentPage);
        setupPagination();
      } else {
        displayProducts(1);
      }

      i18next.on("languageChanged", function () {
        displayProducts(currentPage);  
      });
    })
    .catch((error) => console.error("Помилка при завантаженні JSON:", error));
});
