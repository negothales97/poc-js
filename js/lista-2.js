
let button = document.querySelector('#exercicio button');


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.onclick = function () {
    criaBox();
}

function criaBox(){
    let divElement = document.createElement('div');
    divElement.style.width = '100px';
    divElement.style.height = '100px';
    divElement.style.backgroundColor = 'red';
    let bodyElement = document.querySelector('#exercicio');
    bodyElement.appendChild(divElement);
    let newColor = getRandomColor();
    divElement.onmouseover = function () {
        divElement.style.backgroundColor = newColor;
    }
}



var listElement = document.querySelector('div#lista ul');

let nomes = ["Diego", "Gabriel", "Lucas"];

for (nome of nomes) {
    criaElemento(nome);
}

function criaElemento(nome) {
    var nomeElement = document.createElement('li');
    var nomeText = document.createTextNode(nome);
    nomeElement.appendChild(nomeText);
    listElement.appendChild(nomeElement);
}

function adicionar() {
    var inputElement = document.querySelector('#lista input');
    criaElemento(inputElement.value);
    inputElement.value = '';

}