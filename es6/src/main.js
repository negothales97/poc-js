// import { somatorio } from './funcoes';
// import sub from './sub';
// import axios from 'axios';
import api from './api';
// console.log(somatorio(1,2));

// // conceito classe
// class TodoList {
//     constructor() {
//         this.todos = [];
//     }

//     addTodo() {
//         this.todos.push('Novo Todo');
//         console.log(this.todos);
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.addTodo();
// }
// //Funções array e arrow function
// const arr = [1, 3, 4, 5, 8, 9];

// const newArr = arr.map(function (item) {
//     return item * 2;
// });

// const sum = arr.reduce(function (total, next) {
//     return total + next;
// });
// const filter = arr.filter(function (item) {
//     return item % 2 === 0;
// });
// const find = arr.find(function (item) {
//     return item === 4;
// });

// const arrowFunction = arr.map(item => item * 2);
// console.log(arrowFunction);
// console.log(arr);
// console.log(sum);''
// console.log(find);
// console.log(filter);
// console.log(newArr);


// // Desestruturação
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco: {
//         cidade: 'Rio do sul',
//         estado: 'SC',
//     }
// }

// const {nome, idade, endereco: {cidade}} = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);

// // REST
// function soma(a,b, ...params) {
//     return params;
// }
// console.log(soma(1,3,4,5,6,7));

// // SPREAD

// const usuario1 = {
//     nome: 'Thales',
//     idade: '22'
// }

// const usuario2 = {...usuario1, nome: 'Bianca'};

// console.table(usuario1);
// console.table(usuario2);

// // Template Literals
// console.log(`meu nome é ${usuario1.nome}`);

// // Object Short Syntax
// const nomeUser = 'Thales';
// const idadeUser = 22;
// const newUser = {
//     nomeUser,
//     idadeUser,
//     empresaUser: 'Imaxinformatica',
// }
// console.log(newUser);
// console.log(sub(2,1));


// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);
// });

// async function executaPromise() {
//     const response = await minhaPromise();
//     console.log(response);
// } 
// minhaPromise().then(response => {
//     console.log(response);
// });

// class Api {
//     static async getUserInfo(username) {
//         try{
//             const response = await axios.get(`https://api.github.com/users/${username}`); 
//             console.log(response);
//         }catch {
//             console.warn('Erro no API');
//         }
//     }
// }

// Api.getUserInfo('negothaales97');
class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }
    async addRepository(e) {
        e.preventDefault();
        const repoInput = this.inputEl.value;
        if (repoInput.length === 0)
            return;

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);
            console.log(response.data);
            const { name, description, html_url, owner: { avatar_url } } = response.data;
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            this.inputEl.value = '';
    
            this.render();
            
        }catch (err){
            alert('O repositório não existe');
        }
        this.setLoading(false);
    }

    setLoading(loading = true) {
        if(loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando..'));
            loadingEl.setAttribute('id', 'loading');
            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }
    }
    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);


        });
    }
}

new App();