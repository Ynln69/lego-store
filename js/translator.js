// Підключення i18next
i18next.use(i18nextXHRBackend).init(
  {
    lng: "pl",
    fallbackLng: 'pl',
    debug: true,
    backend: {
      loadPath: "./locales/{{lng}}.json",
    },
  },
  function (err, t) {
    updateContent();
  }
);

function updateContent() {
  document.querySelectorAll("[data-translate]").forEach(function (element) {
    const key = element.getAttribute("data-translate");
    element.textContent = i18next.t(key);
  });
}

document.getElementById("lang-pl").addEventListener("click", function () {
  i18next.changeLanguage("pl", updateContent);
});

document.getElementById("lang-en").addEventListener("click", function () {
  i18next.changeLanguage("en", updateContent);
});
