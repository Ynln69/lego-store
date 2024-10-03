// Отримуємо мову з localStorage або за замовчуванням "pl"
const savedLanguage = localStorage.getItem('language') || 'pl';

// Підключення i18next
i18next.use(i18nextXHRBackend).init(
  {
    lng: savedLanguage, // Використовуємо збережену мову під час ініціалізації
    fallbackLng: 'pl', // Запасна мова
    debug: true,
    backend: {
      loadPath: "./locales/{{lng}}.json", // Шлях до файлів з перекладами
    },
  },
  function (err, t) {
    updateContent(); // Оновлюємо контент після ініціалізації
    updateActiveLanguageButton(savedLanguage); // Оновлюємо активну кнопку
  }
);

// Функція для оновлення контенту
function updateContent() {
  document.querySelectorAll("[data-translate]").forEach(function (element) {
    const key = element.getAttribute("data-translate");
    element.textContent = i18next.t(key); // Перекладаємо контент на основі ключа
  });
}

// Функція для зміни мови та збереження в localStorage
function changeLanguage(language) {
  i18next.changeLanguage(language, () => {
    localStorage.setItem('language', language); // Зберігаємо вибрану мову в localStorage
    updateContent(); // Оновлюємо контент після зміни мови
    updateActiveLanguageButton(language); // Оновлюємо активну кнопку
  });
}

// Функція для оновлення активної кнопки мови
function updateActiveLanguageButton(language) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active'); // Видаляємо клас "active" з усіх кнопок
  });

  // Додаємо клас "active" до кнопки для поточної мови
  const activeButton = document.getElementById(`lang-${language}`);
  if (activeButton) {
    activeButton.classList.add('active');
  }
}

// Додаємо події для кнопок зміни мови
document.getElementById("lang-pl").addEventListener("click", function () {
  changeLanguage("pl"); // Зміна на польську мову
});

document.getElementById("lang-en").addEventListener("click", function () {
  changeLanguage("en"); // Зміна на англійську мову
});
