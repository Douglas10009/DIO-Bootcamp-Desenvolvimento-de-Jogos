class Pessoa {
    constructor(name){
        this.name = name;
    }
}

const lista = [new Pessoa('Doug'), new Pessoa('Simária'),new Pessoa('Neize'),new Pessoa('Lucas')];

// Converter uma lista em outra
const listaNomes = lista.map((element)=> element.name)

console.log(listaNomes);