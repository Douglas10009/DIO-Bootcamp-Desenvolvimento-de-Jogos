// --- Como funciona o new por baixo dos panos? 
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`);
}

// const renan = new Pessoa('renan', 40);
// renan.falar();
// console.log(renan);

// --- Com o call vai chamar um objeto e interagir com ele, e usar este como base   

const renan = {
    genero: 'Masculino'
}

Pessoa.call(renan, 'nome', 30);
console.log(renan);

// Deixa de ser um objeto Pessoa

// Brincando com prototype

// Não é legal fazer em uma estutura básica, exemplo puramente prático
// Para perceber que string é um objeto e que dá pra usar prototype
String.prototype.toPLang = function () {
    return `P${this}`;
}

console.log('teste'.toPLang());