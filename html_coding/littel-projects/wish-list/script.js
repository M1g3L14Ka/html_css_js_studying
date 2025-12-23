const inputWishList = document.getElementById('input-wish-list');
const addWishBtn = document.getElementById('wish-input-btn');
const wishList = document.querySelector('.wish-list');

let wishs = [];

addWishBtn.addEventListener('click', function(){
    const inputWish = inputWishList.value;

    if(inputWish === "") {
        alert('Введите текст желания!')
    } else {
        wishs.push(inputWish);
        console.log(wishs);
        inputWishList.value = '';
        renderWishList();
    }
    saveData();
});



function renderWishList() {
    wishList.innerHTML = '';
    wishs.forEach(function(wish) {
        const listItem = `<li>${wish}</li>`;
        wishList.insertAdjacentHTML('beforeend', listItem);
    });
}   

function saveData() {

    localStorage.setItem('my-wishs', JSON.stringify(wishs));
    console.log('Данные сохранены!');
}

function loadListData() {
    const loadData = localStorage.getItem('my-wishs');

    if(loadData === null) return;

    wishs = JSON.parse(loadData);

    renderWishList();

    console.log('Данные загруженны!');
}

loadListData();
