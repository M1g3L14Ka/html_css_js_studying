const addBtn = document.querySelector('.todoAddBtn');
const inputText = document.querySelector('.todoInputText');
const todoList = document.querySelector('.todoList');

const tasks = [
    {text: 'Задание 1', done: true},
    {text: 'Задание 2', done: false},
    {text: 'Задание 3', done: false},
    {text: 'Задание 4', done: false},
    {text: 'Задание 5', done: false}
];

function addTaskToList(taskObject) {
    const listItem = document.createElement('li');

    const textSpan = document.createElement('span');
    textSpan.textContent = taskObject.text;

    if(taskObject.done) {
        listItem.classList.add('completed');
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


    deleteBtn.addEventListener('click', function(){
        deleteBtn.classList.add('hideBtn');
        confirmBtn.classList.add('visibleBtn');
        cancelBtn.classList.add('visibleBtn');        
    });

    confirmBtn.addEventListener('click', function() {
        listItem.remove();
    });

    cancelBtn.addEventListener('click', function() {
        deleteBtn.classList.remove('hideBtn');
        deleteBtn.classList.add('listBtn');

        confirmBtn.classList.remove('visibleBtn');
        confirmBtn.classList.add('hideBtn');
        
        cancelBtn.classList.remove('visibleBtn');     
        cancelBtn.classList.add('hideBtn');     
    });

    listItem.append(textSpan);
    listItem.append(deleteBtn);
    listItem.append(confirmBtn);
    listItem.append(cancelBtn);
    todoList.append(listItem);
}

tasks.forEach(function(task) {
    addTaskToList(task);
});

addBtn.addEventListener('click', function() {
    const newText = inputText.value.trim();

    if(newText !== ''){
        const newTaskObj = 
        {text: newText, done: false};
        addTaskToList(newTaskObj);

        inputText.value = '';
    }
});

todoList.addEventListener('click', function(event){
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});