import {somatorio} from './funcoes';
import sub from './sub';
console.log(somatorio(1,2));

// conceito classe
class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.addTodo();
}
//Funções array e arrow function
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function (item) {
    return item * 2;
});

const sum = arr.reduce(function (total, next) {
    return total + next;
});
const filter = arr.filter(function (item) {
    return item % 2 === 0;
});
const find = arr.find(function (item) {
    return item === 4;
});

const arrowFunction = arr.map(item => item * 2);
console.log(arrowFunction);
console.log(arr);
console.log(sum);''
console.log(find);
console.log(filter);
console.log(newArr);


// Desestruturação
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do sul',
        estado: 'SC',
    }
}

const {nome, idade, endereco: {cidade}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

// REST
function soma(a,b, ...params) {
    return params;
}
console.log(soma(1,3,4,5,6,7));

// SPREAD

const usuario1 = {
    nome: 'Thales',
    idade: '22'
}

const usuario2 = {...usuario1, nome: 'Bianca'};

console.table(usuario1);
console.table(usuario2);

// Template Literals
console.log(`meu nome é ${usuario1.nome}`);

// Object Short Syntax
const nomeUser = 'Thales';
const idadeUser = 22;
const newUser = {
    nomeUser,
    idadeUser,
    empresaUser: 'Imaxinformatica',
}
console.log(newUser);
console.log(sub(2,1));
