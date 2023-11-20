const num = 2;

// Tabuada de um certo número
for (let i = 0; i <= 10; i++) {
    // console.log(`${num} * ${i} = ${num * i}`);
}

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10 ; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log(' ');
}