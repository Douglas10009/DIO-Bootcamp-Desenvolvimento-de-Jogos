const lista = [1, 2, 3];

// Junta uma lista com o determinado operador que está entre parênteses
console.log(lista.join(';')); //1;2;3


const pessoas = [{ nome: 'Doug' }, { nome: 'Simária' }, { nome: 'Neize' }, { nome: 'Lucas' }, {nome: 'Adriele'}, {nome: 'Adriana'}];

const filtro = pessoas.map(e=> e.nome)
.filter((e) => e.startsWith('A'))
.join('; ')

console.log(filtro);

const filtoHtml = pessoas
.filter((e) => e.nome.startsWith('A'))
.map(e => `<li>${e.nome}</li>`)
.join('<br>');

console.log(filtoHtml);