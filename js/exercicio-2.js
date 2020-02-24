let btnEl = document.getElementById('btn');
let inputEl = document.querySelector("input[name=user]");

btnEl.onclick = function () {
    let user = inputEl.value;
    let promiseUser = getUserData(user);

    promiseUser
        .then(response => console.log(response))
        .catch(reject => console.log(reject));

}

function getUserData(user) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/${user}/repos`);

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