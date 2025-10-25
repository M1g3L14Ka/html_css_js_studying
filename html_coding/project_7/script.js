const projectBtn = document.querySelector('.headerBtnProjects');
projectBtn.addEventListener('click',  function() {
    window.location.href = 'https://github.com/M1g3L14Ka';
});

const linksBtn = document.querySelector('.headerBtnLinks');
linksBtn.addEventListener('click', function() {
    window.location.href = 'secondPage.html';
});


const taskList = document.querySelector('.todoList');

const tasks = [
    {text: 'Закрыть весь список', done: false},
    {text: 'Изучить Js', done: false},
    {text: 'Доделать сайт', done: false},
    {text: 'Доделать карточки', done: false},
    {text: 'Просто пятый пункт', done: true}
];

tasks.forEach(function(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task.text;

    if (task.done) {
        listItem.classList.add('completed');
    }

    taskList.append(listItem);
});


const sidebarTextInput = document.querySelector('.sidebarTextInput');
const sidebarAddBtn = document.querySelector('.sidebarAddBtn');

sidebarAddBtn.addEventListener('click', function() {
    const newTask = sidebarTextInput.value.trim();

    if (newTask !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = newTask;

        taskList.append(newItem);

        sidebarTextInput.value = '';
    }
});