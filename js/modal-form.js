const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];
const orderForm = document.getElementById('orderForm');
const thankYouMessage = document.getElementById('thankYouMessage');
const orderNumberSpan = document.getElementById('orderNumber');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Обробка сабміту форми
orderForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const deliveryMethod = document.getElementById('delivery').value;
  const comment = document.getElementById('comment').value;
  const orderNumber = Math.floor(Math.random() * 1000000);

  const orderData = {
    orderNumber: orderNumber,
    fullName: fullName,
    email: email,
    phone: phone,
    deliveryMethod: deliveryMethod,
    comment: comment,
  };

  localStorage.setItem('orderData', JSON.stringify(orderData));

  window.location.href = `thank-you-page.html?orderNumber=${orderNumber}`;
});
