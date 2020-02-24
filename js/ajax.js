// Ajax

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/negothales97');

xhr.send(null);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}

function checaIdade(idade) {
    return new Promise((resolve, reject) => {
        if (idade > 18) {
            resolve("Maior que 18");
        } else {
            reject("Menor que 18");
        }
    });
}

var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/negothales97');

        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject('Erro na requisição');
            }
        }
    });
}

checaIdade(20)
    .then(response => console.log(response))
    .catch(reject => console.log(reject));

axios.get('https://api.github.com/users/negothales97')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
