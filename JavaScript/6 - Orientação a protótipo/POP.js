const pessoa = {
    tipo: "pessoa"
};

const doug = {
    nome: 'doug',
    __proto__:pessoa
};

console.log(doug.tipo);

// Doug herda todos os atributos do objeto pessoa 


function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é ${this.nome}`);
}


// Esses 2 Pessoa são equivalentes

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('doug', 20);
p1.falar();