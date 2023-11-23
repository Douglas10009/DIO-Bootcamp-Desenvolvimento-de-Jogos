// --- For Each - Forma de percorrer uma lista
const lista = [1,2,3,4,5,6,7,8,9,10]

// demora mais que o for normal, principalmente com listas grandes
lista.forEach((valor, i, listRef) => {
    console.log(valor, i, listRef);
})  


// --- Filter
// Cria uma nova lista a partir de uma regra
// A lista anterior não sofre alterações
const listaNumPares = lista.filter((valor) => {
    // Ela recebe uma função que retorna um boolean, que determina quem vai ficar e quem fica
    return valor % 2 === 0;
})

console.log(listaNumPares);

