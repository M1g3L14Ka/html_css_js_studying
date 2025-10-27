const sidebarTextInput = document.querySelector('.sidebarTextInput');
const sidebarAddBtn = document.querySelector('.sidebarAddBtn');
const checkListUl = document.querySelector('.checkList');
const resultText = document.querySelector('.resultText');
const getNewtext = document.querySelector('.getNewtext');

const texts = [
    {
        text: "Самый большой риск — не рисковать...",
        author: "Марк Цукерберг"
    },
    {
        text: "Оставайтесь голодными. Оставайтесь безрассудными.",
        author: "Стив Джобс"
    },
    {
        text: "Прав не тот, кто прав, а тот, кто прав",
        author: "Джейсон Стэйтем"
    },
    {
        text: "Я не опаздываю. Я просто прихожу позже, потому что так надо",
        author: "Джейсон Стэйтем"
    },
    {
        text: "У меня нет плана Б. План А слишком хорош",
        author: "Джейсон Стэйтем"
    },
    {
        text: "Думай не о том, что я сказал, а о том, о чём решил промолчать",
        author: "Джейсон Стэйтем"
    },
    {
        text: "Если я мою посуду — значит, тарелки будут вымыты до смерти",
        author: "Джейсон Стэйтем"
    },
    {
        text: "Не ищите лёгких путей. Ищите меня — я всё усложняю",
        author: "Джейсон Стэйтем"
    },
];

function getRandomText () {
    const randomIndex = Math.floor(Math.random() * texts.length);
    const randomText = texts[randomIndex];
    resultText.innerHTML = `"${randomText.text}"<br><i>— ${randomText.author}</i>`;
}

getRandomText();

getNewtext.addEventListener('click', getRandomText)

const tasks = [
    {text: 'Прочитать первую цитатку', done: false},
    {text: 'Прочитать пятую цитатку', done: false},
    {text: 'Подумать почему вы тратите свое время в пустую на цитатки', done: false},
    {text: 'Прочитать все цитатки', done: false},
    {text: 'Стать мастером цитаток', done: false}
];

function addItemToList(listObject) {
    const textSpan = document.createElement('span');
    const listItem = document.createElement('li');
    
    textSpan.textContent = listObject.text;

    if(listObject.done) {
        listItem.classList.add('completed')
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.classList.add('listBtn');

    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Да';
    confirmBtn.classList.add('hideBtn');

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Нет';
    cancelBtn.classList.add('hideBtn');

    // Обработчик для кнопки Удалить
    deleteBtn.addEventListener('click', function() {
        deleteBtn.classList.add('hideBtn');
        confirmBtn.classList.remove('hideBtn');
        confirmBtn.classList.add('listBtn');
        cancelBtn.classList.remove('hideBtn');
        cancelBtn.classList.add('listBtn');
    });

    // Обработчик для кнопки подтверждения
    confirmBtn.addEventListener('click', function() {
        listItem.remove();
    });

    // Обработчик для кнопки отмены
    cancelBtn.addEventListener('click', function() {
        deleteBtn.classList.remove('hideBtn');
        deleteBtn.classList.add('visibleBtn');
        confirmBtn.classList.remove('visibleBtn');
        confirmBtn.classList.add('hideBtn');
        cancelBtn.classList.remove('visibleBtn');
        cancelBtn.classList.add('hideBtn');
    });

    listItem.append(textSpan);
    listItem.append(deleteBtn);
    listItem.append(confirmBtn);
    listItem.append(cancelBtn);
    checkListUl.append(listItem);
}

tasks.forEach(function(checkItems){
    addItemToList(checkItems);
});

sidebarAddBtn.addEventListener('click', function() {
    const newText = sidebarTextInput.value.trim();

    if(newText !== ''){
        const newItem = {text: newText, done: false};
        addItemToList(newItem);

        sidebarTextInput.value = '';
    }
});

checkListUl.addEventListener('click', function(event) {

    const listItem = event.target.closest('li')

    if(event.target.tagName === 'SPAN'){
        listItem.classList.toggle('completed');
    }
});