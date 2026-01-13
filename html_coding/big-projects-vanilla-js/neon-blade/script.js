const vkBtn = document.querySelector('.vkBtn');
const tgBtn = document.querySelector('.tgBtn');
const wtBtn = document.querySelector('.wtBtn');
const ghBtn = document.querySelector('.ghBtn');
const header = document.querySelector('.header');
const headerBurgerMenu = document.querySelector('.headerBurderMenu');
const heroBtn = document.querySelector('.heroBtn');
const modalTextinput = document.querySelector('.modalTextinput');
const modalEmailInput = document.querySelector('.modalEmailInput');
const modalMessageBox = document.querySelector('.modalMessageBox');
const modalSubmitBtn = document.querySelector('.modalSubmitBtn');
const modalOpenBtn = document.querySelector('.modalOpenBtn');
const modalOverlay = document.querySelector('.modalOverlay');
const modalCloseBtn = document.querySelector('.modalCloseBtn');
const modalContent = document.querySelector('.modalContent form');

//Логика работы кнопок header
headerBurgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');

    header.classList.toggle('openMenu');
});

/*Логика работы кнопок модального окна для отправки сообщений с сайта
Откртие формы и закрытие*/
modalOpenBtn.addEventListener('click', function() {
    modalOverlay.classList.add('isOpen');
});

modalCloseBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('isOpen');
});

modalOverlay.addEventListener('click', function(event) {
    if(event.target === modalOverlay) {
        modalOverlay.classList.remove('isOpen');
    }
});

//Логика формы отправки сообщений

modalContent.addEventListener('submit', function(event) {
    event.preventDefault();

    const modalTextinput = document.querySelector('.modalTextinput');
    const modalEmailInput = document.querySelector('.modalEmailInput');
    const modalMessageBox = document.querySelector('.modalMessageBox');

    const name = modalTextinput.value;
    const email = modalEmailInput.value;
    const message = modalMessageBox.value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Пожалуйста, заполните все поля!'); // Простое сообщение об ошибке
        return; // Прерываем выполнение функции
    }

    console.log('Форма отправлена!');
    console.log('Имя', name);
    console.log('Почта', email);
    console.log('Сообщение', message);

    modalOverlay.classList.remove('isOpen');

});


//Логика кнопок footer, для связи с автором
heroBtn.addEventListener('click', function() {
    window.location.href = '#products';
});

vkBtn.addEventListener('click', function() {
    window.location.href ='https://vk.com/mi4aejl';
});

tgBtn.addEventListener('click', function() {
    window.location.href = 'https://t.me/M1g3L14Ka';
});

wtBtn.addEventListener('click', function() {
    window.location.href = 'https://wa.me/79212340095';
});

ghBtn.addEventListener('click', function() {
    window.location.href = 'https://github.com/M1g3L14Ka';
});