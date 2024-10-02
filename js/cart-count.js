import { renderCartItems } from "./cart.js";
// Функція для оновлення кількості товарів у корзині
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0); // Рахуємо загальну кількість товарів
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = totalCount;
}

// Оновлюємо кількість товарів при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCartItems();
});

// Оновлюємо функцію додавання товару до корзини
export function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      photo: product.photo,
      price: product.price,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} було додано до корзини!`);

  updateCartCount();
}
