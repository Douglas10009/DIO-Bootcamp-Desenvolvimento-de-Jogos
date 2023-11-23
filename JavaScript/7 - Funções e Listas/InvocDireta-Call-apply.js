const pessoa = {
    nome: 'lucas',
    idade: 30,
}

function gritar(prefixo) {
    console.log(prefixo, this.nome);
}

// --- Invocação direta
// Não funciona pois não tem o contexto da pessoa
gritar('Olaaaa'); //Olaaa undefined

// Mesmo o gritar não estando no contexto de Pesosessoa, ele é aplicado
gritar.apply(pessoa, ['Olaaaa']); 

// Mesmo q apply mas pode receber mais argumentos
gritar.call(pessoa, 'Olaaaa');

// --- New
// Passa um contexto para a função
