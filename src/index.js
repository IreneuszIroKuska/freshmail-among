import InitStructure from './class/InitStructure';

const createElement = (element) => document.createElement(element);

const createPanel = (structure) => {
    const panelContainer = document.createElement('div');

}

const gameContainer = (structure) => {
    if (typeof structure === 'object') {
        const gameContainer = document.createElement('div');
        const leftSide = structure.createGameArea('leftSide');
        const rightSide = structure.createGameArea('rightSide');   
    }

    return new Error('error !');
}

window.addEventListener('load', () => {
    const root = document.getElementById('root');
    const gameContainer = document.createElement('div');
    const panelContainer = document.createElement('div');
    const rootContainer = document.createElement('div');
    const initStructure = new InitStructure();
    console.info(typeof initStructure);
    const leftSide = initStructure.createGameArea('leftSide');
    const rightSide = initStructure.createGameArea('rightSide');    
    const select = initStructure.createSelectStructure();

    panelContainer.classList.add('panel')

    gameContainer.classList.add('gameContainer');
    gameContainer.appendChild(leftSide);
    gameContainer.appendChild(rightSide);

    panelContainer.appendChild(select);

    rootContainer.appendChild(panelContainer)    
    rootContainer.appendChild(gameContainer)
    root.appendChild(rootContainer);
});