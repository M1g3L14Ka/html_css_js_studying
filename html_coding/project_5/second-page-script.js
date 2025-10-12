//Кнопка возврата из бургер-меню
const backBtn = document.querySelector('.back');
backBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});


const darkthemeBtn = document.querySelector('.darkthemeBtn');
const bodyElement = document.body;
if (darkthemeBtn) {
   darkthemeBtn.addEventListener('click', function() {
    bodyElement.classList.toggle('dark-theme');
    console.log('Выбрана темная тема');
}); 
}