

AOS.init();

const langArr = {
    "chip": {
        "ru": "Вы можете набрать больше очков с помощью MoreScore",
        "en": "You can score more with MoreScore",
        "ua": "Ви можете забити більше з MoreScore",
    }, 
    "chip-2": {
        "ru": "Футбол",
        "en": "Football",
        "ua": "Футбол",
    }, 
    "memory": {
        "ru": "Персонализируйте свою домашнюю страницу с любимыми игроками, командами и лигами и получите легкий доступ ко всем данным, необходимым для анализа ситуации на поле.",
        "en": "Personalise your homepage with your favourite players, teams and leagues and get easy access to all the data you need to analyze the situation on the field",
        "ua": "Персоналізуйте свою домашню сторінку своїми улюбленими гравцями, командами та лігами та отримайте легкий доступ до всіх даних, необхідних для аналізу ситуації на полі",
    }, 
    "memory-type": {
        "ru": "Получите бесплатный, быстрый и неограниченный доступ к данным матчей по 7 видам спорта",
        "en": "Get free, fast and unlimited access to match data of 7 sports",
        "ua": "Отримайте безкоштовний, швидкий і необмежений доступ до даних матчів із 7 видів спорту",
    }, 
    "memory-type-2": {
        "ru": "Скачать в App Store",
        "en": "Download on the App Store",
        "ua": "Завантажте в App Store",
    }, 
    "cool": {
        "ru": "Воспользуйтесь подробной статистикой матчей, H2H, составами и забивайте еще больше!",
        "en": "Take advantage of detailed match statistics, H2H, lineups, and score even more!",
        "ua": "Скористайтеся детальною статистикою матчу, H2H, складами та забивайте ще більше!",
    }, 
    "cool-2": {
        "ru": "Будьте в курсе последних новостей любимых видов спорта и делитесь своими впечатлениями с тысячами пользователей",
        "en": "Keep on top of the latest news of favourite sports and share your reactions with thousands of users",
        "ua": "Будьте в курсі останніх новин улюблених видів спорту та діліться своєю реакцією з тисячами користувачів",
    }, 
    "cool-3": {
        "ru": "Ознакомьтесь с последними объявлениями о трансферах",
        "en": "Check out the latest transfer announcements",
        "ua": "Перегляньте останні оголошення про трансфер",
    }, 
    "cool-4": {
        "ru": "Следите за своими любимыми командами, игроками, чемпионатами или лигами. Наслаждайтесь живыми счетами матчей, статистикой и результатами!",
        "en": " Follow your favorite teams, players, championships or leagues. Enjoy live match scores, stats, and results!",
        "ua": "Слідкуйте за улюбленими командами, гравцями, чемпіонатами чи лігами. Насолоджуйтесь рахунками матчів у прямому ефірі, статистикою та результатами!",
    }, 
    "more": {
        "ru": "Часто задаваемые вопросы",
        "en": "FAQ",
        "ua": "FAQ",
    }, 
    "more-2": {
        "ru": "Условия эксплуатации",
        "en": "Terms of Use",
        "ua": "Умови використання",
    }, 
    "more-3": {
        "ru": "Политика конфиденциальности",
        "en": "Privacy Policy",
        "ua": "Політика конфіденційності",
    }, 
}
const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];

document.querySelectorAll('.left-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    // document.querySelector('title').innerHTML = langArr['unit'][hash];
    document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage();

