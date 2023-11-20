const { gets, print } = require('./funcoes');



// Caso você saiba a quantidade de itens na lista.

// Obs: isso só vai funcionar caso o primeiro valor também seja a quantidade de itens na lista
const qntAlunos = gets();
let maiorNumero = 0;
for (let i = 0; i < qntAlunos; i++) {
    // Como o gets foi iniado no qntAlunos, o primeiro número é ignorado
    const numero = gets();
    if (numero > maiorNumero) {
        maiorNumero = numero
    }
}
print(maiorNumero);



// -- Para fazer caso você não saiba a quantidade de itens na lista
// let maiorValor = 0;
// let get = gets();
// while (get != undefined) {
//     if (get >= maiorValor) {
//         maiorValor = get;
//     }
//     get = gets();
// }
// print(maiorValor);