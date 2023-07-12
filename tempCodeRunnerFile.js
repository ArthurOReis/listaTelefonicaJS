function pegaTelefone(nome) {
    const listaDeTelefones = {
        'Arthur Reis': '(47) 98211-3186',
        'José Fernandes': '(51) 91581-6587',
        'Pedro Henrique': '(47) 91547-7768',
        'Felipe Castro': '(47) 92211-5231',
        'João Pedro': '(51) 96211-2290',
    };

    for (const usuario in listaDeTelefones) {
        if (nome == usuario) {
            console.log(listaDeTelefones[usuario]);
        }
    }
}

const nome = 'Arthur Reis';
pegaTelefone(nome);