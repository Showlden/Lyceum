const langArr = {
    en: {
        about_us: 'ABOUT US',
        activities: 'ACTIVITIES',
        contacts: 'CONTACTS',
        faq: 'FAQ'
    },

    ru: {
        about_us: 'О НАС',
        activities: 'НАПРАВЛЕНИЯ',
        contacts: 'КОНТАКТЫ',
        faq: 'FAQ'
    }
};

const langSelector = document.querySelector('#lang-selector');

langSelector.addEventListener('change', function() {
    const selectedLang = langSelector.value;
    setLang(selectedLang);
});

function setLang(lang) {
    if (!langArr.hasOwnProperty(lang)) return;
    if (window.hasOwnProperty('localStorage'))
        window.localStorage.setItem('lang', lang);
    for (let key in langArr[lang]) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[lang][key];
        }
    }
}

let lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang')) || 'ru';
setLang(lang);
