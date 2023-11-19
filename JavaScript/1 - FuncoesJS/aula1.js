// Funções são objetos
function main() {
    return 'say my name';
}
console.log(main);

const main2 = main;
console.log(main2());

const princ = function() {
    console.error("pane no sistema");
}

princ();

// Funções invocadas imediatamente
(function () {
    console.log("SAY MY NAME");
})();


// Funções que não devolvem nada são chamadas de procedimentos
