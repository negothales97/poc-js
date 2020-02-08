var inputElement = document.querySelector('div#app input');
var listElement = document.querySelector('div#app ul');
var btnAdicionar = document.querySelector('div#app button');

var todos = [
    'Levantar',
    'Comer',
    'Dormir'
];
btnAdicionar.onclick = function () {
    adicionaItemLista();
}

function renderTodos() {
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

renderTodos();