function EscrevaMeuNome(nome) {
    return 'Olá! ' + nome;
}

EscrevaMeuNome("Douglas");

// Função sobre função
function serMaior(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

serMaior(10);


// Misto
function cumprimentos(nome, idade) {
    console.log(EscrevaMeuNome(nome) + ' você é ' + serMaior(idade));
}

cumprimentos("Douglas", 18);

// Calcular preço
function precoEtiqueta(formaPagamento, preco) {
    switch (formaPagamento) {
        case 1:
            return preco - (preco * 0.1);
        case 2:
            return preco - (preco * 0.15);
        case 3:
            return preco;
        case 4:
            return preco + (preco * 0.1);
        default:
            return undefined;
    }
}

function formaPagamento(formaPagamento) {
    switch (formaPagamento){
        case 1:
            return "Débito";
        case 2:
            return "Dinheiro/Pix";
        case 3:
            return "Dividido em 2 vezes";
        case 4:
            return "Dividido em mais de 2 vezes";
        default:
            return undefined;
    }
}

const formPgmt = 5;
const preco = 10;

console.log("Pagando através do " + formaPagamento(formPgmt, preco) + " com o produto por R$" + preco);
console.log("O preço fica R$" + precoEtiqueta(formPgmt, preco));