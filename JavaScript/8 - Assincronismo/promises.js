// Esperar uma ação terminar para chamar outra

// Não precisa nescessáriamente ser um objeto assincrono
const promessaN = new Promise((resolve, reject) => {
    const n = parseInt(Math.random() * 100);
    // faça as coisas 
    resolve(n)
    // Caso dê errado
    reject()
});

try {
    // Ele tenta fazer algo
} catch (error) {
    // Roda aqui caso dê problema
} finally {
    // Roda independente dos resultados
}

promessaN
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Finalizou!');
    })

const promessa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 5000)
})

console.log('vai fi!');

promessa1
    .then((value) => {
        console.log(value);
        return value + 10;
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Finalizou!');
    })