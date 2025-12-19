/*Overlay links секция*/
const linksBtn = document.querySelector('#linksBtn'); 
const linksOverlay = document.querySelector('.linksOverlay');
const overlayLinksCloseBtn = document.querySelector('#overlayLinksCloseBtn');

linksBtn.addEventListener('click', function() {
    linksOverlay.classList.add('isOpen');
});

overlayLinksCloseBtn.addEventListener('click', function() {
    linksOverlay.classList.remove('isOpen');
});

linksOverlay.addEventListener('click', function(event) {
    if(event.target === linksOverlay) {
        linksOverlay.classList.remove('isOpen');
    }
});

/*Overlay contact us секция*/
const contactUsBtn = document.querySelector('#contactUsBtn');
const contactUsOverlay = document.querySelector('.contactUsOverlay');
const overlayContactUsCloseBtn = document.querySelector('#overlayContactUsCloseBtn');

contactUsBtn.addEventListener('click', function() {
    contactUsOverlay.classList.add('isOpen');
});

overlayContactUsCloseBtn.addEventListener('click', function() {
    contactUsOverlay.classList.remove('isOpen');
});

contactUsOverlay.addEventListener('click', function(event){
    if(event.target === contactUsOverlay) {
        contactUsOverlay.classList.remove('isOpen');
    }
});


/*Ссылки для работы кнопок в секции Overlay links*/
const vkBtn = document.querySelector('#vkBtn');
const tgBtn = document.querySelector('#tgBtn');
const wtBtn = document.querySelector('#wtBtn');
const gitBtn = document.querySelector('#gitBtn');

vkBtn.addEventListener('click', function() {
    window.location.href = 'https://vk.com/mi4aejl';
});

tgBtn.addEventListener('click', function() {
    window.location.href = 'https://t.me/M1g3L14Ka';
});

wtBtn.addEventListener('click', function() {
    window.location.href = 'https://wa.me/79212340095';
});

gitBtn.addEventListener('click', function() {
    window.location.href = 'https://github.com/M1g3L14Ka';
});


/*Конвеер карточек*/
const productContainer = document.querySelector('.productGrid');

const products = [
    {id:1, 
    name:'наушники',
    img:'img/card1.jpg',
    description:'портативные наушники',
    category:'портативная техника'},

    {id:2, 
    name:'маска для лица',
    img:'img/card2.jpg',
    description:'пувлажняющая маска для лица',
    category:'средство для ухода за телом'},

    {id:3, 
    name:'дизайн карточки',
    img:'img/card3.jpg',
    description:'создадим дизайнерскую карточку по вашему заказу',
    category:'заказ клиента'},

    {id:4, 
    name:'наушники',
    img:'img/card4.jpg',
    description:'портативные наушники',
    category:'портативная техника'},

    {id:5, 
    name:'наушники',
    img:'img/card5.jpg',
    description:'портативные наушники',
    category:'портативная техника'},

    {id:6, 
    name:'мебель',
    img:'img/card6.jpg',
    description:'декаративный стул для дома',
    category:'мебель'}
];

function renderProducts(productsToRender) {
    productContainer.innerHTML = '';

    productsToRender.forEach(function(product) {
        const productHTML =
        `
            <div class="productCard">
                <h2>${product.name}</h2>
                <img class="productImg" src="${product.img}" alt="${product.name}">
                <p>${product.description}</p>
            </div>
        `;

        productContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}

renderProducts(products);



/*Раздел фильтра поиска по сайту */
const portblTexBtn = document.querySelector('#portblTexBtn');
const maskFilterBtn = document.querySelector('#maskFilterBtn');
const furnuturFilterBtn = document.querySelector('#furnuturFilterBtn');
const orderFilterBtn = document.querySelector('#orderFilterBtn');  
const clearFilterBtn = document.querySelector('#clearFilterBtn');  
 

function isPortableTex(product) {
    if(product.category === 'портативная техника') {
        return true;
    }
    else {
        return false;
    }
}

function isMask(product) {
    if(product.category === 'средство для ухода за телом') {
        return true;
    }
    else {
        return false;
    }
}

function isFurnutur(product) {
    if(product.category === 'мебель') {
        return true;
    }
    else {
        return false;
    }
}

function isOrder(product) {
    if(product.category === 'заказ клиента') {
        return true;
    }
    else {
        return false;
    }
}

portblTexBtn.addEventListener('click', function() {
    const filterPortable = products.filter(isPortableTex);

    renderProducts(filterPortable);
});

maskFilterBtn.addEventListener('click', function() {
    const filerMask = products.filter(isMask);

    renderProducts(filerMask);
});

furnuturFilterBtn.addEventListener('click', function() {
    const filterFurnitur = products.filter(isFurnutur);

    renderProducts(filterFurnitur);
});

orderFilterBtn.addEventListener('click', function() {
    const filterOrder = products.filter(isOrder);

    renderProducts(filterOrder);
});

clearFilterBtn.addEventListener('click', function() {
    
    renderProducts(products);
});

