/* ==========================
   1. ДАННЫЕ (ВСЕ массивы и переменные тут)
   ========================== */

// Враги
const enemies = [
    { name: 'Гоблин', hp: 100, gold: 10, img: 'img/enemy/goblin.jpg' },
    { name: 'Орк', hp: 200, gold: 40, img: 'img/enemy/orc.jpg' },
    { name: 'Призрак', hp: 250, gold: 50, img: 'img/enemy/ghost.jpg' },
    { name: 'Дракон', hp: 500, gold: 1000, img: 'img/enemy/dragon.jpg' },
    { name: 'Финальный босс', hp: 5000, gold: 10000, img: 'img/enemy/demon.jpg' }
];

// Оружие (Перенесли наверх!)
const weapons = [
    { id: 1, name: 'Меч', img: 'img/weapon/sword.jpg', price: 100, damage: 35, isBought: false },
    { id: 2, name: 'Булава', img: 'img/weapon/mace.jpg', price: 250, damage: 50, isBought: false },
    { id: 3, name: 'Лук', img: 'img/weapon/bow.jpg', price: 500, damage: 75, isBought: false },
    { id: 4, name: 'Топор', img: 'img/weapon/axe.jpg', price: 1000, damage: 110, isBought: false },
    { id: 5, name: 'Копье', img: 'img/weapon/spear.jpg', price: 2000, damage: 150, isBought: false },
    { id: 6, name: 'Арбалет', img: 'img/weapon/crossbow.jpg', price: 5000, damage: 250, isBought: false }
];

// Состояние игры
let currentMonsterIndex = 0;
let currentMonsterHp = 0;
let playerMoney = 0;
let playerKills = 0;
let playerDamage = 20;


/* ==========================
   2. ПОИСК ЭЛЕМЕНТОВ (DOM)
   ========================== */
const monsterName = document.getElementById('monster-name');
const monsterImg = document.getElementById('monster-img');
const currentHpElem = document.getElementById('current-hp');
const maxHpElem = document.getElementById('max-hp');

const statGold = document.getElementById('stat-gold');
const statKills = document.getElementById('stat-kills');

const damageBtn = document.getElementById('damage-btn');
const nextMobBtn = document.getElementById('next-mob-btn');
const infoArea = document.querySelector('.info-area'); 

const market = document.querySelector('.market');
const marketOpenBtn = document.getElementById('market-open-btn');


/* ==========================
   3. ФУНКЦИИ (Логика)
   ========================== */

function spawnMonster() {
    if (currentMonsterIndex >= enemies.length) {
        alert("Поздравляю! Ты убил всех врагов!");
        currentMonsterIndex = 0;
    }

    const monster = enemies[currentMonsterIndex];
    currentMonsterHp = monster.hp;

    monsterName.innerText = monster.name;
    monsterImg.src = monster.img;       
    maxHpElem.innerText = monster.hp;
    updateHpText();

    nextMobBtn.style.display = 'none'; 
    damageBtn.style.display = 'inline-block';

    if (infoArea) infoArea.innerText = ""; 
}

function attackMonster() {
    if (currentMonsterHp <= 0) return;

    currentMonsterHp = currentMonsterHp - playerDamage;
    if (currentMonsterHp < 0) currentMonsterHp = 0;

    updateHpText();

    if (currentMonsterHp === 0) {
        victory();
    }
}

function victory() {
    const reward = enemies[currentMonsterIndex].gold;
    playerMoney = playerMoney + reward;
    playerKills = playerKills + 1;

    statGold.innerText = "Золото: " + playerMoney;
    statKills.innerText = "Врагов побеждено: " + playerKills;

    if (infoArea) {
        infoArea.innerText = "Победа! +" + reward + " золота!";
    }

    damageBtn.style.display = 'none';
    nextMobBtn.style.display = 'inline-block';
    
    saveData(); // Сохраняем прогресс
}

function nextLevel() {
    currentMonsterIndex++;
    spawnMonster();
    saveData(); // Сохраняем, что перешли на новый уровень
}

function updateHpText() {
    currentHpElem.innerText = currentMonsterHp;
}

// --- МАГАЗИН ---

function renderMarket() {
    market.innerHTML = '';
    
    weapons.forEach(function(weapon) {
        let actionButton = '';

        if (playerDamage === weapon.damage && weapon.isBought) {
            actionButton = `<button class="control-btn" style="background: grey; cursor: default;">Надето</button>`;
        } 
        else if (weapon.isBought) {
            actionButton = `<button class="control-btn choose-product-btn" data-id="${weapon.id}" style="background: blue;">Экипировать</button>`;
        } 
        else {
            actionButton = `<button class="control-btn buy-product-btn" data-id="${weapon.id}">Купить</button>`;
        }

        const cardHTML = `
            <div class="market-content">
                <div class="market-item-card">
                    <h2>${weapon.name}</h2>
                    <img class="cardImg" src="${weapon.img}" alt="${weapon.name}">
                    <span class="card-info">Цена: ${weapon.price} 💰</span>
                    <span class="card-info">Урон: ${weapon.damage} ⚔️</span>
                    <div class="controlBtns">
                        ${actionButton}
                    </div>
                </div>
            </div>
        `;
        market.insertAdjacentHTML('beforeend', cardHTML);
    });

    const closeBtn = `<button class="control-btn" id="market-close-btn" style="margin-top: 20px;">Выйти из магазина</button>`;
    market.insertAdjacentHTML('beforeend', closeBtn);
}

function buyWeapon(id) {
    const weapon = weapons.find(w => w.id === id);

    if (playerMoney >= weapon.price) {
        playerMoney -= weapon.price;
        statGold.innerText = "Золото: " + playerMoney;
        weapon.isBought = true;
        alert(`Вы купили ${weapon.name}!`);
        equipWeapon(id);
        renderMarket();
    } else {
        alert('Недостаточно средств!');
    }
    saveData();
}

function equipWeapon(id) {
    const weapon = weapons.find(w => w.id === id);
    playerDamage = weapon.damage;
    alert(`Вы взяли в руки ${weapon.name}. Урон: ${playerDamage}`);
    renderMarket();
    saveData();
}

// --- СОХРАНЕНИЕ / ЗАГРУЗКА ---

function saveData() {
    const gameData = {
        money: playerMoney,
        damage: playerDamage,
        kills: playerKills,
        weapon: weapons,
        currentLevel: currentMonsterIndex
    };
    localStorage.setItem('playerGameData', JSON.stringify(gameData));
    console.log('Игра сохранена!');
}

function loadGameData() {
    const loadData = localStorage.getItem('playerGameData');
    if(loadData === null) return;

    const gameData = JSON.parse(loadData);

    playerMoney = gameData.money;
    playerDamage = gameData.damage;
    playerKills = gameData.kills;

    // Восстанавливаем оружие
    if(gameData.weapon) {
        gameData.weapon.forEach((saveWeapon, index) => {
            if (weapons[index]) {
                weapons[index].isBought = saveWeapon.isBought;
            }
        });
    }

    // Восстанавливаем уровень
    if(gameData.currentLevel !== undefined) {
        currentMonsterIndex = gameData.currentLevel;
    }

    statGold.innerText = 'Золото: ' + playerMoney;
    statKills.innerText = 'Врагов побеждено: ' + playerKills;
    console.log('Игра загружена. Урон:', playerDamage);
};


/* ==========================
   4. СТАРТ (ЗАПУСК)
   Это должно быть В САМОМ НИЗУ
   ========================== */

// Слушатели событий
damageBtn.addEventListener('click', attackMonster);
nextMobBtn.addEventListener('click', nextLevel);

marketOpenBtn.addEventListener('click', function(){
    renderMarket(); 
    market.classList.add('isOpen');
});

market.addEventListener('click', function(e) {
    if(e.target === market || e.target.id === 'market-close-btn') {
        market.classList.remove('isOpen');
    }
    if(e.target.classList.contains('buy-product-btn')) {
        const weaponId = parseInt(e.target.dataset.id);
        buyWeapon(weaponId);      
    }
    if(e.target.classList.contains('choose-product-btn')) {
        const weaponId = parseInt(e.target.dataset.id);
        equipWeapon(weaponId);      
    }
});

// ПОРЯДОК ЗАПУСКА:
// 1. Сначала загружаем данные (теперь weapons уже существует, ошибок не будет!)
loadGameData(); 

// 2. Потом рисуем монстра и магазин на основе загруженных данных
spawnMonster();
renderMarket();

// 3. Удалили saveData() отсюда, чтобы не перезаписывать сохранение при старте