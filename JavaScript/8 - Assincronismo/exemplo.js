const fs = require('fs');
const path = require('path');

const caminho = path.resolve(__dirname, 'tarefas.csv');


// Antigo
// fs.readFile

const promiseArquivo = fs.promises.readFile(caminho);

promiseArquivo
    .then((arquivo) => arquivo.toString('utf-8'))
    .then((textoArquivo) => textoArquivo.split('\n').slice(1)) //Slice define quantas linhas vamos ignorar
    .then((linhaSemOCabecalho) => linhaSemOCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';');
        return {
            nome, 
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaTarefas) => console.log(listaTarefas))
    .catch((error) => console.log('deu ruim bixo! ', error))