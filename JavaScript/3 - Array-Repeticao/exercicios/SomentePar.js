const numeros = [];

numeros.push(10);
numeros.push(6);
numeros.push(8);
numeros.push(89);
numeros.push(5);
numeros.push(2);
numeros.push(11);

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero % 2 == 0) {
        console.log(numero);
    }
}

const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

numerosPares.forEach(element => {
    console.log(element);
});