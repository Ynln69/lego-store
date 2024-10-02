import { addToCart } from "./cart.js";

// Функція для завантаження даних з JSON
fetch("./certificates-data.json")
  .then((response) => response.json())
  .then((data) => {
    const certificatesList = document.getElementById("certificates-list");

    data.certificates.forEach((certificate) => {
      const li = document.createElement("li");
      li.classList.add("certificates-item");
      li.innerHTML = `
        <h3 class="certificates-item-title">${certificate.title}</h3>
        <div class="certificates-item-thumb">
          <p class="certificates-item-price">${certificate.price} PLN</p>
          <p class="certificates-item-desk">${certificate.description}</p>
        </div>
        <button type="button" class="basket-btn">${certificate.button}
          <svg width="16" height="16">
            <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
          </svg>
        </button>
      `;

      certificatesList.appendChild(li);

      const addToCartBtn = li.querySelector(".basket-btn");
      addToCartBtn.addEventListener("click", () => {
        addToCart({
          id: certificate.id,
          title: certificate.title,
          price: certificate.price,
          quantity: 1,
        });
      });
    });
  })
  .catch((error) => console.error("Помилка при завантаженні JSON:", error));
