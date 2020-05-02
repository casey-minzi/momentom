const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODO_LS = 'toDos';
let toDos = [];

function deleteToDo(e) {
    const li = e.target.parentNode;
    toDoList.removeChild(li);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.innerText = '✔';
    delBtn.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDoObj = { text, id : newId };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(e) {
    e.preventDefault();
    const toDo = toDoInput.value;
    paintToDo(toDo);
    toDoInput.value = '';
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if (loadedToDos) {
        const parsedtoDo = JSON.parse(loadedToDos);
        parsedtoDo.forEach(toDo => paintToDo(toDo.text));
    }
}

function init() {
    toDoForm.addEventListener('submit', handleSubmit);
    loadToDos();
}

init();