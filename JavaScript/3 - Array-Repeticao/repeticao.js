// For para números 
const notas = []

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(3);
notas.push(8);

console.log(notas.length);

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    console.log(nota);
}

console.log('\n');


// For para strings
const nome = 'Douglas Éverton';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}