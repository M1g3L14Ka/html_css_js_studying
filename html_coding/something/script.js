const footerLinks = document.querySelector('.footerLinks');

let links = [
    {
        id: 1,
        name: 'Vkontakte',
        url: 'https://vk.com/mi4aejl'
    },
        {
        id: 2,
        name: 'Telegram',
        url: 'https://t.me/M1g3l14Ka'
    },
        {
        id: 3,
        name: 'WhatSapp',
        url: 'https://wa.me/+79212340095'
    },
        {
        id: 4,
        name: 'GitHub',
        url: 'https://github.com/M1g3L14Ka'
    }
];

function footerLinksRender(){
    links.forEach(function(link){
        const linkBtn = document.createElement('a');
        linkBtn.classList.add('link');
        linkBtn.id = link.id;
        linkBtn.textContent = link.name;
        linkBtn.href = link.url;
        linkBtn.target = '_blank';

        footerLinks.append(linkBtn);
    });
};

footerLinksRender(links);


const filmsGrid = document.querySelector('.filmsGrid');

let films = [
    {
        id: 1,
        name: 'Аватар', 
        img: 'img/avatar.png',
        description: 'Ну.. это фильм!',
        tag: 'для всей семьи, приключение, боевик'
    },
    {
        id: 2,
        name: 'Я Легенда', 
        img: 'img/iAmLegend.jpg',
        description: 'Ну.. это фильм!',
        tag:'выживание, апокалипсис, боевик'
    },
    {
        id: 3,
        name: 'Джон Уик', 
        img: 'img/johnWick.jpg',
        description: 'Ну.. это фильм!',
        tag:'боевик, жестокость, приключение, триллер'
    },
    {
        id: 4,
        name: 'Шрек', 
        img: 'img/shrek.png',
        description: 'Ну.. это фильм!',
        tag: 'для всей семьи, приключение, боевик, комедия'
    },
    {
        id: 5,
        name: 'Кот в сапогах', 
        img: 'img/pussInBoots.png',
        description: 'Ну.. это фильм!',
        tag: 'приключение, боевик, комедия, для всей семьи'
    },
    {
        id: 6,
        name: 'Война миров Z', 
        img: 'img/worldWarZ.png',
        description: 'Ну.. это фильм!',
        tag: 'выживание, триллер, боевик'
    }
];

function filmRender(filmList) {
    filmsGrid.innerHTML = '';
    filmList.forEach(function(film) {
        const filmContent = 
        `
            <div class="filmCard" data-id="${film.id}">
                <h2>${film.name}</h2>
                <button class="addToFavotireListBtn">❤</button>
                <img class="filmImg" src="${film.img}" alt="${film.name}">
            </div>
        `;
        filmsGrid.insertAdjacentHTML('beforeend', filmContent);
    });
};

filmRender(films);

filmsGrid.addEventListener('click', function(e) {
    if(e.target.classList.contains('addToFavotireListBtn')) {
        e.target.classList.toggle('isPress');
    }
});

const filterList = document.querySelector('.filterList');

let filters = [
    {
        id: 1,
        tag: 'Для всей семьи'
    },
    {
        id: 2,
        tag:'Боевик'
    },
    {
        id: 3,
        tag:'Приключение'
    },
    {
        id: 4,
        tag: 'Комедия'
    },
    {
        id: 5,
        tag: 'Триллер'
    },
    {
        id: 6,
        tag: 'Ужастик'
    },
    {
        id: 999,
        tag: 'Сбросить'
    }
];

function filterRender(listToRender) {
    filterList.innerHTML = '';
    listToRender.forEach(function(film) {
        const filterBtn = 
        `
            <div class="filterBtns">
                <button class="filterBtn" data-id="${film.id}">${film.tag}</button>
            </div>
        `;
        filterList.insertAdjacentHTML('beforeend', filterBtn);    
    });
};

filterRender(filters);


const filmCount = document.querySelector('.filmCount');
filterList.addEventListener('click', function(e) {
    if (e.target.classList.contains('filterBtn')) {
        
        // 1. Получаем текст с кнопки и сразу делаем маленькими буквами
        const tag = e.target.textContent.toLowerCase().trim();

        // 2. ПРОВЕРКА: ЭТО СБРОС?
        if (tag === 'сбросить') {
            // Если нажали "сбросить" - рисуем ВСЕ фильмы
            // ВНИМАНИЕ: filmRender, а не filterRender! Мы рисуем фильмы!
            filmRender(films); 
        } 
        else {
            // ИНАЧЕ - работаем как раньше (фильтруем)
            const filteredTag = films.filter((film) => {
                return film.tag.includes(tag);
            });

            if(filteredTag.length === 0) {
                filmCount.textContent = 'В такой категории нет фильмов😶';
            }
            else {
                filmCount.textContent = 'Найдено фильмов: ' + filteredTag.length;
                filmRender(filteredTag);
            }
        }
    }
});

const searchInput = document.getElementById('filmNameInput');

function filmSearch(event){
    const filmQuery = event.target.value.toLowerCase().trim();
    
    // 1. Фильтруем
    const filteredFilm = films.filter((film) => {
        const title = film.name.toLowerCase();
        return title.includes(filmQuery);
    });

    // 2. Проверяем, нашли ли что-то (Точно так же, как ты сделал в кнопках)
    if (filteredFilm.length === 0) {
        // Если пусто
        filmCount.textContent = 'Ничего не найдено 😶';
        filmsGrid.innerHTML = '<h2 style="color: white; text-align: center; grid-column: 1/-1;">Увы, такого фильма нет</h2>';
    } else {
        // Если есть результат
        filmCount.textContent = 'Найдено фильмов: ' + filteredFilm.length;
        filmRender(filteredFilm); 
    }
};
searchInput.addEventListener('input', filmSearch);

