const contactNameInput = document.getElementById('name-input'); // находим строку ввода имени нового контакта
const contactPhoneNumberInput = document.getElementById('phone-input'); // находим строку ввода номера телефона нового контакта
const addContactBtn = document.getElementById('add-btn'); // находим кнопку добавления нового контакта
const contactList = document.getElementById('contact-list'); // находим список контактов

let contacts = []; // массив, куда записываются контакты

/*Функция, кнопка добавления контакта
contactName - имя контакта, contactPhoneNumber - номер контакта*/
addContactBtn.addEventListener('click', function() { 
    let contactName = contactNameInput.value;
    let contactPhoneNumber = contactPhoneNumberInput.value;

    //проверка на заполненность полей ввода имени и номера нового контакта
    if (contactName === "" || contactPhoneNumber === "") {
        alert('Имя или номер телефона не заполнены!');
        return;
    }
    //создание и запись нового контакта в массив contacts[]
    else {
        const newContact = {name: contactName, phoneNumber: contactPhoneNumber};
        contacts.push(newContact);
        // отрисовка нового контакта в списке контактов
        renderNewContact();
        //сохранение данных
        saveData();
    }
});

//Отрисовка всех контактов
function renderNewContact() {
    //очищаем список от лишнего
    contactList.innerHTML = '';
    //проходим по всему списку контактов и записываем новые, если есть
    contacts.forEach(function(contact) {
        const listItem = 
        `
            <li>
                <span>Имя: ${contact.name}</span>
                <span>Номер телефона: ${contact.phoneNumber}</span>    
            </li>
        `;
        //добавляем новый контакт в список
        contactList.insertAdjacentHTML('beforeend', listItem);
    });
}

//Сохранение данных
function saveData() {
    localStorage.setItem('my-contact-list', JSON.stringify(contacts));
    console.log('Сохранение!');
}

//Проверка наличия сохраненных данных, их загрузка и отрисовка 
function loadListData() {
    const loadData = localStorage.getItem('my-contact-list');

    if(loadData === null) return;
    contacts = JSON.parse(loadData);
    renderNewContact();
    console.log('Данные загруженны');
}

//Загрузка данных
loadListData();