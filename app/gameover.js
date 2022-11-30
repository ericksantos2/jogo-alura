function telaGameOver() {
    document.body.innerHTML = `
        <h1>GAME OVER!</h1>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
    document.body.style = `
        transition: 0.5s;
        background-color: var(--gameover);
    `
}