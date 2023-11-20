// A complexidade fica separada
const funcoes = require('./funcoes-auxiliares');

console.log(funcoes.gets());

// Object destruction
// Ajuda na gestão de armazenamento, ele não pega a classe toda, somente as funções requisitadas
const pessoa = {
    nome: 'Pessoa'
}

const {nome} = pessoa;
console.log(nome);

const {gets, print} = require('./funcoes-auxiliares');
print(gets());
