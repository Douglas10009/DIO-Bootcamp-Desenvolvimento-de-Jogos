// Nada mais é do que uma forma mais bonita de fazer uma promisse

const fs = require('fs');
const path =  require('path');

const filePath = path.resolve(__dirname, 'tarefas.csv');

// Abstrai a forma promisse de uma forma procedural
async function buscarArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath); //.then((arquivo) => console.log(arquivo.tostring('utf-8')))  //COmo se ele tivesse fazendo isso
        const textoArquivo = arquivo.toString('utf-8');
        console.log(textoArquivo);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('ya boy');
    }
}

buscarArquivo();