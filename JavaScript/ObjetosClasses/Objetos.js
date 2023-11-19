// Alusão a um map

// Função dentro de um objeto = método
const pessoa = {
    nome: 'Douglas',
    idade: 20,

    // Pq não posso utilizar função anonima?
    // Pois função anônima só herda os própios atributos, ou seja, ele não reconhece o 'nome' da função anterior
    // Poderia ser utilizado caso as variáveis fossem usadas no escopo da arrow function.
    descrever : () => console.log(`Seu nome é ${this.nome} e sua idade é ${this.idade}`)
};

// -- Adicionando valores
// pessoa.altura = 1.90;
// console.log(pessoa);

// -- Deletando valores
// delete pessoa.nome;
// console.log(pessoa);

// -- Chamando métodos
// pessoa.descrever();

// -- Acessar dinamicamente os atributos
// console.log(pessoa['nome']);
// pessoa['nome'] = 'Lusca';
// console.log(pessoa['nome']);
// A outra forma é estática.
