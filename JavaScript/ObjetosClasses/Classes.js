// E se eu quiser criar várias pessoas? -> Cria uma classe

// Classe - modelo de como deveria ser (Isso não seria interface?)
// Instância - Aplicação da classe (Ocorrência da classe)

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    // Construtor é o que vai definir quando a classe é instanciada
    // Chamadas de contratos
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
        const anoHoje = new Date;
        this.anoDeNascimento = anoHoje.getFullYear() - idade;
    }

    // Não se faz nescessário escrever function dentro de uma classe
    descrever (){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade e nasci no ano de ${this.anoDeNascimento}`);
    }
}

const douglas = new Pessoa('Douglas', 20);
douglas.descrever();

const lusca = new Pessoa('Lusca', 34);
lusca.descrever();

function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}`);
    } else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
}

compararPessoa(douglas, new Pessoa('Felca', 20));