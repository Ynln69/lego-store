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
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} został dodany do koszyka!`);
}

export function renderCartItems() {
  const cartList = document.getElementById("cart-list");

  if (!cartList) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartList.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("cart-item");
    const translateKeyTitle = `towary.cardTitle${index + 1}`;

    const photoMarkup = item.photo
      ? `<img src="${item.photo}" alt="${item.title}" class="cart-img">`
      : "";

    li.innerHTML = `
        ${photoMarkup}
        <div class="cart-wrapper">
          <h3 class="cart-title" data-translate="${translateKeyTitle}">${item.title}</h3>
          <p>Numer: ${item.quantity}</p>
          <p>Cena: ${item.price}</p>
        </div>
      `;
    cartList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();
});
