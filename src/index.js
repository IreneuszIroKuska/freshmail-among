import InitStructure from './class/InitStructure';
import Game from './class/Game';
import { config } from './config/config';

window.addEventListener('load', () => {
    const root = document.getElementById('root');
    const gameContainer = document.createElement('div');
    const panelContainer = document.createElement('div');
    const rootContainer = document.createElement('div');
    const initStructure = new InitStructure();
    const leftSide = initStructure.createGameArea('leftSide');
    const rightSide = initStructure.createGameArea('rightSide');    
    const select = initStructure.createSelectStructure();
    const startButton = initStructure.createGameButton('startButton', 'start');
    const resetButton = initStructure.createGameButton('resetButton', 'reset');
    resetButton.setAttribute('disabled', 'disabled');

    let scoreLeft = initStructure.createScore('scoreLeft', 5);
    let scoreRight = initStructure.createScore('scoreRight', 5);
    let game = new Game(config.defaultGames);    

    select.addEventListener('change', (event) => {
        leftSide.removeChild(scoreLeft)
        rightSide.removeChild(scoreRight)
        scoreLeft = initStructure.createScore('scoreLeft', parseInt(event.target.value));
        scoreRight = initStructure.createScore('scoreRight', parseInt(event.target.value));
        game = new Game(event.target.value);
        leftSide.appendChild(scoreLeft);
        rightSide.appendChild(scoreRight);
    })

    startButton.addEventListener('click', () => {
        startButton.setAttribute('disabled', 'disabled');
        select.setAttribute('disabled', 'disabled');
        resetButton.removeAttribute('disabled');
        game.startGame();

        console.log('start button');
    });

    resetButton.addEventListener('click', () => {
        startButton.removeAttribute('disabled');
        select.removeAttribute('disabled');
        resetButton.setAttribute('disabled', 'disabled');
        game.resetGame();

        leftSide.removeChild(scoreLeft);
        rightSide.removeChild(scoreRight);
        scoreLeft = initStructure.createScore('scoreLeft', parseInt(config.defaultGames));
        scoreRight = initStructure.createScore('scoreRight', parseInt(config.defaultGames));
        leftSide.appendChild(scoreLeft);
        rightSide.appendChild(scoreRight);
    });

    panelContainer.classList.add('panel')

    leftSide.appendChild(scoreLeft);
    rightSide.appendChild(scoreRight);

    gameContainer.classList.add('gameContainer');
    gameContainer.appendChild(leftSide);
    gameContainer.appendChild(rightSide);

    panelContainer.appendChild(startButton);
    panelContainer.appendChild(select);
    panelContainer.appendChild(resetButton);

    rootContainer.appendChild(panelContainer)    
    rootContainer.appendChild(gameContainer)
    root.appendChild(rootContainer);
});
