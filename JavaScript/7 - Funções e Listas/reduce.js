const lista = [1,2,3,4,5,6,7,8,9, 10]

// Se for 0, ele vai pegar e inicializar uma possível lista vazia, caso ela esteja vazia
const valorInicial = 10;

// Faz a soma dos itens da lista
const somaDosNum = lista.reduce((previus, current)=>{
    return previus + current;
}, valorInicial)