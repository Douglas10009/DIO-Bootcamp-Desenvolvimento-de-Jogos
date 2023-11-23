// As funções são:
// Fist Class Functions
// Higher Order Funcions

// Você só precisa de uma referência da função

function falarNome() {
    console.log('Meu nome é Lucas');
}

const nome = falarNome;

nome()

// O nome das funções são meramente demonstrativas


function falarMeuNome() {
    console.log('Meu nome é Lucas');
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome();
    console.log('Neto');
    // Ainda é possível retornar a variáveis
    return falarMeuNome;
}

falarMeuNomeCompleto(falarMeuNome)();


// --- Function declaration e Function expression
// Function declaration
function nomeDaFuncao() {
    console.log('nome da função');
}

// Function expression 
const nomeDeOutraFuncao = function () {
    console.log('nome doutra função');
}

// --- A diferências entre elas é o Içamento
// No início do programa os códigos são reorganizados, para o topo do código

// Início
// Na declaração, toda a função é içada para o início do código
function nomeDaFuncao2() {
    console.log('nome da função');
}

// O que não ocorre no expression
// const nomeDeOutraFuncao2;
//Início

// Meio 
nomeDeOutraFuncao2 = function () {
    console.log('nome doutra função');
}
// Meio

// --- Arrow Function
// Não existe contexto na arrow function

function funcao1() {
    console.log(this);
}
const funcao2 = () => {
    console.log(this);
}

const renan = {
    nome: 'Renan',
    funcao1,
    funcao2
}


renan.funcao1(); // { nome: 'Renan', funcao1(), funcao2() }
renan.funcao2(); // {}


// --- Cloasure ou Fechamento
// As funções se lembram do contexto em que foi criada

function soma(x) {
    return function (y) {
        return x + y;
    }
}

const somaParcial = soma(10);

console.log(soma(10)(20)); //30
console.log(somaParcial(20)); // 30
console.log(somaParcial(40)); // 50
console.log(somaParcial(50)); // 60