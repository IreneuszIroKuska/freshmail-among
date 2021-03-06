import { config } from '../config/config';

class InitStructure {
    constructor(){}

    createElement = (element) => {
        return document.createElement(element);
    };

    createSelectStructure = () => {
        const select = this.createElement('select');
        select.setAttribute('name', 'gameCounts')
        const maxGames = config.maxGames;

        // for increase speed
        for (let i = 0; i < maxGames; i++) {
            const option = this.createElement('option')
            option.setAttribute('value', `${i + 1}`);
            option.innerText = `${i + 1}`
            if (i == 4) {
                option.setAttribute('selected', 'selected')
            }
            select.appendChild(option);
        }
        
        return select;
    }

    createSquares = (className) => {
        const elementsCount = config.blocks;
        const div = this.createElement('div');
        div.classList.add(className);
        
        // for increase speed
        for (let i = 0; i < elementsCount; i++) {
            const childDiv = this.createElement('div');
            childDiv.classList.add('element');
            childDiv.setAttribute('value', `${i + 1}`)
            div.appendChild(childDiv)
        }

        return div;
    };

    createScore = (className, count) => {
        const classNames = className || "panel" 
        const div = this.createElement('div');
        div.classList.add(classNames);
    
        for (let i = 0; i < count; i++) {
            const element = this.createElement('div');
            element.classList.add('scoreCheck');
            div.appendChild(element);
        }
    
        return div;
    }

    createGameButton = (className = 'button', text = 'text') => {
        const button = this.createElement('button');
        button.classList.add(className);
        button.innerText = text;

        return button;
    }

    createGameArea = (className) => {
        const div = this.createElement('div');
        const squares = this.createSquares('playArenaContainer');
        div.classList.add(className);
        div.appendChild(squares);

        return div;
    }
}

export default InitStructure;
