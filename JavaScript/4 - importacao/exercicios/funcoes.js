// The fist number indicates the amount of itens in the array.
const entradas = [5,10,50,98,23]

let i = 0;
function gets() {
    const valor = entradas[i];
    i ++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};