function getString(endereco) {
    console.log('O usuário mora em ' + endereco.cidade +
        ' / ' + endereco.uf + ', no bairro ' + endereco.bairro +
        ', na rua "' + endereco.rua + '" com nº ' + endereco.numero + '.');
}

function getNumerosPares(x, y) {
    for (var i = x; i < y; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

function temHabilidade(skills) {
    return skills.indexOf("Javascript") !== -1 ? true : false;
}

function experiencia(anos) {
    if (anos <= 1) {
        return 'Inciante';
    } else if (anos <= 3) {
        return 'Intermediário';
    } else if (anos <= 7) {
        return 'Avançado';
    } else {
        return 'Jedi Master';
    }
}
function getFrase(usuarios) {
    for (usuario of usuarios) {
        console.log('O ' + usuario.nome + ' possui as habilidades: ' + usuario.habilidades.join(', '));
    }
}