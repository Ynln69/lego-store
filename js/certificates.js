// Функція для завантаження даних з JSON
fetch('./certificates-data.json')
  .then(response => response.json())
  .then(data => {
    const productsList = document.getElementById('certificates-list');

    data.certificates.forEach(certificate => {
      const li = document.createElement('li');
      li.classList.add('certificates-item');
      li.innerHTML = `
      <h3 class="certificates-item-title">${certificate.title}</h3>
        <div class="certificates-item-thumb">
          <p class="certificates-item-price">${certificate.price}</p>
          <p class="certificates-item-desk">${certificate.description}</p>
        </div>
        <button type="button" class="basket-btn">${certificate.button}
            <svg width="16" height="16">
                <use href="../img/icon/icon-defs.svg#icon-shopping-cart"></use>
            </svg>
        </button>
      `;
      productsList.appendChild(li);
    });
  })
  .catch(error => console.error('Помилка при завантаженні JSON:', error));
