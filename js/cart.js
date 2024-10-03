export function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      photo: product.photo || null,
      price: product.price,
      quantity: 1,
      type: product.type, // Додаємо тип для розділення (product або certificate)
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} został dodany do koszyka!`);
}

export function renderCartItems() {
  const cartListProducts = document.getElementById("cart-list-products");
  const cartListCertificates = document.getElementById(
    "cart-list-certificates"
  );

  if (!cartListProducts || !cartListCertificates) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartListProducts.innerHTML = "";
  cartListCertificates.innerHTML = "";

  cart.forEach((item, index) => {
    const photoMarkup = item.photo
      ? `<img src="${item.photo}" alt="${item.title}" class="cart-img">`
      : "";

    // Рендеримо картки товарів
    if (item.type === "product") {
      const liProduct = document.createElement("li");
      liProduct.classList.add("cart-item");

      const translateKeyTitle = `towary.cardTitle${item.id}`;

      liProduct.innerHTML = `
        ${photoMarkup}
        <div class="cart-wrapper">
          <h3 class="cart-title" data-translate="${translateKeyTitle}">${item.title}</h3>
          <p>Numer: ${item.quantity}</p>
          <p>Cena: ${item.price}PLN</p>
        </div>
      `;

      cartListProducts.appendChild(liProduct);

      // Рендеримо сертифікати
    } else if (item.type === "certificate") {
      const liCertificate = document.createElement("li");
      liCertificate.classList.add("cart-item");

      const translateKeyTitle = `certificatesCard.title${item.id}`;

      liCertificate.innerHTML = `
        ${photoMarkup}
        <div class="cart-wrapper">
          <h3 class="cart-title" data-translate="${translateKeyTitle}">${item.title}</h3>
          <p>Numer: ${item.quantity}</p>
          <p>Cena: ${item.price}PLN</p>
        </div>
      `;

      cartListCertificates.appendChild(liCertificate);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();
});
