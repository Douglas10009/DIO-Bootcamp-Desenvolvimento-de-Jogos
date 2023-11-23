const pessoa = {
    idade: 10
}

const renan = {
    nome: 'Renan',
    // Shadowing - variável com mesmo nome, mas com outro valor
    idade: 30,
    __proto__:pessoa
}

// Ele procura por nível, primeiro em renan e dps em pessoa
console.log(renan.idade);

// -- criação literal de Objetos
const doug = Object.create(pessoa)

doug.nome = 'doug';

console.log(doug.nome);

// Para funções construtoras, utilizar pessoa.prototype
// Para objetos instanciados utilizar pessoa.__proto__
// Strings também tem prototípos