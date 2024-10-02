// Підключення i18next
i18next.init(
  {
    lng: 'pl',
    debug: true,
    resources: {
      pl: {
        translation: {
          'hero.homeTitle': 'lego slot game shop',
          'hero.aboutTitle': 'o sklepie Lego Store',
          'hero.certificatesTitle': 'bony podarunkowe',
          'hero.thanksTitle': 'Dziękujemy za zakup!',

          'abouthome.title': 'Kreatywność i zabawa w stylu kasynowym!',
          'abouthome.description':
            'Jesteśmy sklepem specjalizującym się w unikalnych zestawach konstrukcyjnych inspirowanych światem gier kasynowych, automatów i slotów online. Nasze produkty łączą kreatywność z tematyką gier hazardowych, pozwalając na budowanie unikalnych projektów. Gwarantujemy wysoką jakość naszych zestawów, które zainspirują zarówno fanów gier, jak i osoby szukające innowacyjnych form zabawy.',

          'aboutPage.mainTitle': 'Analiza rynku i popularność gier kasynowych',
          'aboutPage.mainDesc':
            'Po szczegółowej analizie rynku zauważyliśmy, że tematy związane z grami hazardowymi, w tym slotami online oraz kasynami, zyskują ogromną popularność. Gry kasynowe i sloty online przyciągają coraz większą liczbę osób, co sprawia, że temat ten stał się istotnym trendem w branży rozrywkowej. Z tego powodu postanowiliśmy dostosować naszą ofertę, aby odpowiedzieć na rosnące zainteresowanie.',
          'aboutPage.secondTitle':
            'Unikalne zestawy konstrukcyjne inspirowane kasynami',
          'aboutPage.secondDesc':
            'W odpowiedzi na trendy rynkowe, wprowadziliśmy zestawy konstrukcyjne inspirowane światem gier kasynowych. Nasze produkty łączą kreatywność z motywami gier hazardowych, umożliwiając budowanie unikalnych projektów. Dbamy o wysoką jakość naszych zestawów, wierząc, że przypadną one do gustu zarówno fanom gier online, jak i osobom poszukującym innowacyjnych form rozrywki.',
          'aboutPage.therdTitle': 'Nowoczesne podejście do kreatywnej zabawy',
          'aboutPage.therdDesc':
            'Nasze zestawy konstrukcyjne to nie tylko inspiracja światem kasyn, ale także nowoczesna forma rozrywki, która pobudza wyobraźnię i kreatywność. Dzięki nim każdy może stworzyć unikalną konstrukcję, czerpiąc radość z budowania w oparciu o motywy gier hazardowych. To idealne połączenie zabawy i innowacyjności!',

          'certificates.title': 'Podaruj mini-kasyno na święta!',
          'certificates.description':
            'Zbliżają się święta, a Ty szukasz wyjątkowego prezentu? Nasze zestawy LEGO inspirowane światem kasyn i automatów do gier to idealny wybór! Podaruj swojemu przyjacielowi lub bliskiej osobie możliwość zbudowania własnego mini-kasyna, pełnego emocji i zabawy. To doskonały sposób na połączenie kreatywności z fascynującym światem gier hazardowych. Niezależnie czy to na Nowy Rok, urodziny czy inne okazje – nasza karta podarunkowa to gwarancja niezapomnianych chwil i świetnej rozrywki!',
          'buttons.toCatalog': 'do katalogu',
          'buttons.goHome': 'Na głównym',
        },
      },
      en: {
        translation: {
          'hero.homeTitle': 'LEGO Slot Game Shop',
          'hero.aboutTitle': 'about Lego Store',
          'hero.certificatesTitle': 'gift certificates',
          'hero.thanksTitle': 'Thank you for your purchase!',

          'abouthome.title': 'Casino style creativity and fun!',
          'abouthome.description':
            'We are a store specializing in unique construction sets inspired by the world of casino games, slot machines and online slots. Our products combine creativity with the theme of gambling games, allowing you to build unique projects. We guarantee the high quality of our sets, which will inspire both game fans and people looking for innovative forms of fun.',

          'aboutPage.mainTitle':
            'Market analysis and popularity of casino games',
          'aboutPage.mainDesc':
            'After a detailed market analysis, we noticed that topics related to gambling games, including online slots and casinos, are gaining enormous popularity. Casino games and online slots attract more and more people, which makes this topic an important trend in the entertainment industry. For this reason, we have decided to adapt our offer to respond to the growing interest.',
          'aboutPage.secondTitle':
            'Unique construction sets inspired by casinos',
          'aboutPage.secondDesc':
            'inspired by the world of casino games. Our products combine creativity with gambling themes, allowing you to build unique designs. We care about the high quality of our sets, believing that they will appeal to both fans of online games and people looking for innovative forms of entertainment.',
          'aboutPage.therdTitle': 'A modern approach to creative play',
          'aboutPage.therdDesc':
            'Our construction sets are not only inspired by the world of casinos, but also a modern form of entertainment that stimulates imagination and creativity. Thanks to them, everyone can create a unique structure, enjoying the joy of building based on gambling game themes. It is the perfect combination of fun and innovation!',

          'certificates.title':
            'Give the gift of a mini-casino for the holidays!',
          'certificates.description':
            'The holidays are approaching and you are looking for a unique gift?Our LEGO sets inspired by the world of casinos and slot machines are the perfect choice!Give your friend or loved one the opportunity to build their own mini-casino, full of excitement and fun.It is a great way to combine creativity with the fascinating world of gambling. Regardless of whether it is for the New Year, birthday or other occasions - our gift card is a guarantee of unforgettable moments and great entertainment!',
          'buttons.toCatalog': 'to catalog',
          'buttons.goHome': 'Go to homepage',
        },
      },
    },
  },
  function (err, t) {
    updateContent();
  }
);

function updateContent() {
  document.querySelectorAll('[data-translate]').forEach(function (element) {
    const key = element.getAttribute('data-translate');
    element.textContent = i18next.t(key);
  });
}

document.getElementById('lang-pl').addEventListener('click', function () {
  i18next.changeLanguage('pl', updateContent);
});

document.getElementById('lang-en').addEventListener('click', function () {
  i18next.changeLanguage('en', updateContent);
});
