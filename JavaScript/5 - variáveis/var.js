//  ----- Hoisting - Içamento
// Ele pega as funções e declara a cima do código

teste();

function teste() {
    console.log('text');
}

// Declaração através de variáveis afeta o hoisting

// Não funciona corretamente
// text1();

var text1 = function () {
    console.log('teste de hoisting');
}


//  ----- VAR LET CONST

// - Var - presente em todos escopos

if (true) {
    var var2 = 10;
}

console.log(var2);

// Exceto as de funções

function teste() {
    var var1 = 10;
}

console.log(var1);

// - Let - se restringe a qualquer tipo de escopo
if (true) {
    let var3 = 10;
}

console.log(var3);

// - Const não sofre reatribuição
const x = 10;
x = 11;

//  ----- CONVENÇÕES

// _var = variável restrita a determinado escopo
// VAR = constante
// camelCase = Para palavras mistas

//  ----- 

// Objetos = Imutáveis, ele não sobrescreve seu valor na memória como é feito com um var por exemplo
// Y tem a referência mudada para outro lugar na memória
var y = 10;
y = 20;

// o valor número do objeto é atualizado
var obj = {numero: 10}
obj.numero = 20


//  Wrapper  -> não é mt usado
// Classe que representam objetos
new Boolean(true);

// JS tem problema com calculos de decimais, tenha cuidado
// floating poin math - caso queira pesquisar mais a fundo
// Decimal js - biblioteca que resolve esse problema

// Symbol - Objeto imutável único
// Symbol permite referênciar somente 1 lugar na memória

const a = Symbol('10');
const b = Symbol('10');

console.log(b === a);

// Serve para criar identificadores únicos

