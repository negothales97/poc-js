// Ajax

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/negothales97');

// xhr.send(null);

// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }

// Promisse
// var minhaPromise = function () {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/negothales97');

//         xhr.send(null);

//         xhr.onreadystatechange = function () {
//             if (xhr.status === 200) {
//                 resolve(JSON.parse(xhr.responseText));
//             }else{
//                 reject('Erro na requisição');
//             }
//         }
//     });
// }

// axios.get('https://api.github.com/users/negothales97')
// .then(function(response){
//     console.log(response);
// })
// .catch(function(error){
//     console.log(error);
// });
