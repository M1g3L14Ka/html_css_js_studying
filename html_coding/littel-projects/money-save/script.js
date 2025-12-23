const mainTextInput = document.getElementById('main-text-input');
const addBtn = document.getElementById('add-money-btn');
const moneyList = document.querySelector('.money-list');

let moneyItems = [];

addBtn.addEventListener('click', function(){
    const textInput = mainTextInput.value;
    
    if(textInput === "") {
        alert('Вы не ввели данные!');
        return;
    }
    else {
        moneyItems.push(textInput);
        console.log(textInput);
        renderMoneyCount();
        mainTextInput.value = '';
    }
    saveData();
});

function renderMoneyCount() {
    moneyList.innerHTML = '';
    moneyItems.forEach(function(moneyItem) {
        const listItem = `<li>${moneyItem}</li>`;
        moneyList.insertAdjacentHTML('beforeend', listItem);
    });
}

function saveData() {
    localStorage.setItem('my-money-count-list', JSON.stringify(moneyItems));
    console.log("Сохранение!")
}

function loadListData() {
    const loadData = localStorage.getItem('my-money-count-list');

    if (loadData === null) return;

    moneyItems = JSON.parse(loadData);

    renderMoneyCount();

    console.log('Загрузка!');
}

loadListData();
