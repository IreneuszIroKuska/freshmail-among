class Game {
    constructor(rounds) {
        this.rounds = rounds;
        this.roundChecker = [];
        this.game = {};
    }

    generateGames = () => {
        const round = [];

        for(let i = 0; i < this.rounds; i ++) {
            this.roundChecker[i] = [];
            const generateRandomNumber = Math.floor((Math.random() * 16) + 1);

            if (i === 0) {
                round[i] = {
                    game: [generateRandomNumber],
                    isFinish: false,
                };
            } else { 
                const generated = generateRandomNumber;
                round[i] = {
                    game: [...round[i - 1].game, round[i - 1].game[i - 1] === generated ? generateRandomNumber : generated],
                    isFinish: false,
                };
            }
        }

        this.game = {
            ...this.game,
            round,
        }
    };


    getGameArea = () => {
        const area = document.getElementsByClassName('leftSide')[0].children[0];
        const playerArea = document.getElementsByClassName('rightSide')[0].children[0];

        return {
            area,
            playerArea,
        };
    }

    randomChooser = (area, playerArea) => {
        const areaChildren = Array.from(area.children);
        const playAreaChildren = Array.from(playerArea.children);
        const game = this.game;
        let x = 0;
        let isInitRun = true;
        let counter = 0;
        let valueArray = [];
        let isCompare = false;

        const timerMethod = () => {
            game.round[x].game.forEach((element, index) => {
                const timer = index + 1;
                setTimeout(() => {
                    areaChildren[element - 1].style.cssText = 'background: blue;';
                    setTimeout(() => {
                        areaChildren[element - 1].style.cssText = 'background: red;';
                    }, 500)
                }, timer * 500)
            });
        }

        if (isInitRun) {
            timerMethod()
        }

        playAreaChildren.forEach(element => {
            element.addEventListener('click', event => {
                valueArray.push(parseInt(event.target.getAttribute('value')));
                isCompare = JSON.stringify(game.round[x].game) === JSON.stringify(valueArray);
                counter++;
                if (counter === game.round[x].game.length && isCompare) {
                    isInitRun = false;
                    counter = 0;
                    x++;
                    valueArray = []
                    timerMethod()
                } 
                if (counter === game.round[x].game.length && !isCompare) {
                    valueArray = []
                    counter = 0;
                    isInitRun = false;
                    timerMethod()
                }
            })
        })
    }
    
    startGame = () => {
        this.generateGames();
        const { area, playerArea } = this.getGameArea();
        this.randomChooser(area, playerArea);
    };

    resetGame = () => {
        this.game = {};
        this.roundChecker = [];
    };
}

export default Game;
