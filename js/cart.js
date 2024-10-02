export function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find(item => item.id === product.id);

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

  localStorage.setItem('cart', JSON.stringify(cart)); 
  alert(`${product.title} було додано до корзини!`);
}

export function renderCartItems() {
  const cartList = document.getElementById('cart-list');
  
  if (!cartList) {
    return;
  }

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartList.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('cart-item');

    const photoMarkup = item.photo ? `<img src="${item.photo}" alt="${item.title}" class="cart-img">` : '';

    li.innerHTML = `
        ${photoMarkup}
        <div>
          <h3 class="cart-title">${item.title}</h3>
          <p>Кількість: ${item.quantity}</p>
          <p>Ціна: ${item.price}</p>
        </div>
      `;
    cartList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderCartItems();
});
