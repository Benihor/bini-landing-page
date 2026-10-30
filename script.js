const english = {
  available: "Available for projects",
  eyebrow: "LANDING PAGES FOR SMALL BUSINESSES",
  titleOne: "Simple.",
  titleTwo: "Stylish. Effective.",
  description: "A polished landing page that explains exactly what your business offers — and turns visitors into customers.",
  package: "Landing page package",
  oneTime: "One-time payment",
  from: "from",
  itemOne: "Custom design",
  itemTwo: "English + Hebrew",
  itemThree: "Mobile ready",
  cta: "Contact me on WhatsApp",
  footer: "Custom design • Direct service • Professional result"
};

const elements = document.querySelectorAll("[data-copy]");
const toggle = document.getElementById("languageToggle");
const whatsapp = document.querySelector(".whatsapp");
const displayedPrice = document.querySelector(".price strong");
const bilingualFeature = document.querySelector('[data-feature="bilingual"]');

const seo = {
  he: {
    title: "Bini — דפי נחיתה מעוצבים לעסקים קטנים",
    description: "עיצוב ובניית דפי נחיתה מקצועיים לעסקים קטנים, בעברית ובאנגלית, החל מ־600 ₪. מותאם למובייל וכולל חיבור לוואטסאפ.",
    locale: "he_IL"
  },
  en: {
    title: "Bini — Stylish Landing Pages for Small Businesses",
    description: "Professional landing page design for small businesses, starting at $200. Mobile-ready with WhatsApp integration.",
    locale: "en_US"
  }
};

elements.forEach((element) => {
  element.dataset.hebrew = element.innerHTML;
});

function setLanguage(language) {
  const isHebrew = language === "he";
  document.documentElement.lang = language;
  document.documentElement.dir = isHebrew ? "rtl" : "ltr";
  document.body.classList.toggle("he", isHebrew);
  const metadata = seo[language];
  document.title = metadata.title;
  document.getElementById("metaDescription").content = metadata.description;
  document.getElementById("ogTitle").content = metadata.title;
  document.getElementById("ogDescription").content = metadata.description;
  document.getElementById("ogLocale").content = metadata.locale;
  document.getElementById("twitterTitle").content = metadata.title;
  document.getElementById("twitterDescription").content = metadata.description;
  displayedPrice.textContent = isHebrew ? "₪600" : "$200";
  bilingualFeature.hidden = !isHebrew;

  elements.forEach((element) => {
    element.innerHTML = isHebrew ? element.dataset.hebrew : english[element.dataset.copy];
  });

  whatsapp.href = isHebrew
    ? "https://wa.me/972539237796?text=היי%20ביני%2C%20אני%20מעוניין%20בדף%20נחיתה"
    : "https://wa.me/972539237796?text=Hi%20Bini%2C%20I%27m%20interested%20in%20a%20landing%20page";
  toggle.innerHTML = isHebrew ? "EN / <b>עב</b>" : "<b>EN</b> / עב";
  toggle.setAttribute("aria-label", isHebrew ? "Switch to English" : "החלפה לעברית");
  localStorage.setItem("language", language);
}

toggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "he" ? "en" : "he");
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("language") === "en" ? "en" : "he");
