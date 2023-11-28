// View e Values
// View - somente variáveis que resultam em algo visual
// Values - somente variáveis que resultam em algo não visual

// Declarando as variáveis assim, fica mais fácil para visualização
const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('#time-left'),
        score: document.querySelector('#score')
    },
    values: {
        timerId: null,
        gameVelocity: 700,
        dificultLevel: 10,
    }
}

// Adicionar um quadrado aleatório que vai adicionar o enimigo
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add('enemy');
}

// Move o enimigo pelo quadro
function moveEnemy() {
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
    console.log('moveEnemy:' + state.values.gameVelocity);
    addListenerHitBox();
}

// Adiciona um listener (quem espera um evento) para verificar se o ralph foi clicado
function addListenerHitBox() {
    state.view.squares.forEach((square) => {

        // Por que usar o mouse down ao invés do clique?
        square.addEventListener('mousedown', () => { 
            if (square.classList.contains('enemy')) {
                state.view.score.innerText ++;
                state.values.result = state.values.innerText;
                square.classList.remove('enemy')

                // TODO - Aumentar o nível de dificuldade do jogo, diminuindo o tempo em que ele vai ficar parado, mas n funciona
                // if (state.view.score.innerText >= state.values.dificultLevel) {
                //     state.values.gameVelocity -= 50;
                //     state.values.dificultLevel += 10;

                //     // A cada 10 pontos feitos, ele reduz o tempo do ralph ficar parado em 50ms
                //     console.log(state.values.gameVelocity);
                //     console.log(state.values.dificultLevel);
                // }
            }
        });

    })
}

// Função principal
function main() {
    moveEnemy();
}

main();