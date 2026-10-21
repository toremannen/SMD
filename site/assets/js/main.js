'use strict';

const english = {
  skip: 'Skip to content', home: 'Home', technology: 'Technology', about: 'About us', contact: 'Contact',
  homeLabel: 'SMD – Home', navigationLabel: 'Main navigation', languageLabel: 'Choose language',
  heroEyebrow: 'A new perspective', heroLineOne: 'Innovation.', heroLineTwo: 'In perspective.',
  heroDescription: 'Eyewear is our starting point. New possibilities are our focus. Get to know SMD.',
  explore: 'Explore our focus', contactUs: 'Contact us',
  illustrationTitle: 'Abstract concept illustration of eyewear, not an SMD product',
  concept: 'Concept illustration · placeholder, not a product photo',
  heroBottom: 'EYEWEAR · TECHNOLOGY · NEW PERSPECTIVES', scroll: 'Discover more',
  technologyEyebrow: '01 / Technology', focusNote: 'Our focus',
  technologyTitle: 'New perspectives begin with curiosity.',
  technologyDescription: 'We bring eyewear and innovation into the same perspective. We will share more about technology and products when information is ready for public release.',
  eyewear: 'Eyewear', eyewearDescription: 'The starting point for SMD’s work in development and sales.',
  innovation: 'Innovation', innovationDescription: 'A focus on new possibilities and perspectives in eyewear.',
  dialogue: 'Dialogue', dialogueDescription: 'Curious about SMD? Get in touch for a conversation.',
  aboutEyebrow: '02 / About us', aboutTitle: 'SMD.\nLooking ahead.',
  aboutDescription: 'SMD works with the development and sale of eyewear, with a focus on innovation. We welcome contact from those who want to learn more about the company.',
  getInTouch: 'Get to know us', contactEyebrow: '03 / Contact',
  contactTitle: 'Let’s start\na conversation.',
  contactDescription: 'Questions about SMD, eyewear or possibilities? We would like to hear from you.',
  email: 'Email', emailHint: 'This link opens your email application.',
  footer: 'Eyewear. Innovation. Perspective.', backToTop: 'Back to top',
  title: 'SMD – Innovation in perspective',
  description: 'SMD – development and sale of eyewear. Explore our focus on innovation and get in touch.'
};

const textElements = [...document.querySelectorAll('[data-i18n]')];
const labelElements = [...document.querySelectorAll('[data-label]')];
const languageButtons = [...document.querySelectorAll('[data-language]')];
const description = document.querySelector('meta[name="description"]');

// Keep the complete Norwegian page usable when JavaScript is unavailable.
const norwegian = Object.fromEntries([
  ...textElements.map(element => [element.dataset.i18n, element.innerText ?? element.textContent]),
  ...labelElements.map(element => [element.dataset.label, element.getAttribute('aria-label')]),
  ['title', document.title],
  ['description', description.content]
]);

function setLanguage(language) {
  const translations = language === 'en' ? english : norwegian;
  document.documentElement.lang = language;
  document.title = translations.title;
  description.content = translations.description;
  textElements.forEach(element => {
    element.textContent = translations[element.dataset.i18n];
  });
  labelElements.forEach(element => {
    element.setAttribute('aria-label', translations[element.dataset.label]);
  });
  languageButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
}

languageButtons.forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
