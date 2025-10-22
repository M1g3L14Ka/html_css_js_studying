const mainBtn = document.querySelector('.mainBtn');
const logInput = document.querySelector('.loginInput');
const passInput = document.querySelector('.passwordInput')

mainBtn.addEventListener('click', function () {
    const passValue = passInput.value;
    const loginValue = logInput.value;

    if (passValue === loginValue) {
        if (passValue => 8) {
            console.log('Успех!');
        }
        else {
            console.log('Пароль совпал, но он слишком короткий(');
        }
    }
    else {
        console.log('Не верный пароль!');
    }
});


const taskList = document.querySelector('.todo-list');

const tasks = [
    {text: 'Изучить js', done: false},
    {text: 'Повторить задание', done: true},
    {text: 'Повторить массивы', done: true},
    {text: 'Просто что-то сделать', done: true}
];

tasks.forEach(function(task) {
    const listItem = document.createElement('li');
    listItem.textContent = task.text;

    if (task.done) {
        listItem.classList.add('completed');
    }
    
    taskList.append(listItem);
});