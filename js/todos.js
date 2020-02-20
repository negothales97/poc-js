var inputTodo = document.querySelector('div#app input');
var listTodo = document.querySelector('div#app ul');
var btnAdicionar = document.querySelector('div#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
btnAdicionar.onclick = function () {
    addTodo();
}

function renderTodos() {
    listTodo.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkTodo = document.createElement('a');
        var linkText = document.createTextNode(' Excluir');

        var pos = todos.indexOf(todo);

        linkTodo.setAttribute('onclick', 'deleteTodo('+pos+')');

        linkTodo.setAttribute('href', '#');
        linkTodo.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkTodo);
        listTodo.appendChild(todoElement);

    }
}

function addTodo(){
    var todoText = inputTodo.value;
    todos.push(todoText);
    inputTodo.value = '';
    renderTodos();
    saveToStorage();
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

renderTodos();
