const alunos = ['doug', 'lusca', 'pedro'];

// -- Mostrar itens ao array

console.log(alunos[1]);


// -- Adicionando itens ao array

// - Dinâmicamente ao final da lista (Ou no início, caso seja uma pilha(outra forma de estrutura))
alunos.push('Renan');

// - Diretamente 
alunos[4] = 'Vinícius';
// - Também é possível 'atualizar' valores
// 'doug' não está mais referênciado  e 'gusta' ficou no lugar
alunos[0] = 'gusta';


//  -- Removendo dados

// - Removendo o ultimo item
console.log(alunos.pop());

// - Removendo o primeiro item
console.log(alunos.shift());