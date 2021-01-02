class Game {
    constructor(rounds) {
        this.rounds = rounds;
        this.roundChecker = [];
        this.game = {};
        this.x = 0;
        this.isInitRun = true;
        this.counter = 0;
        this.valueArray = [];
        this.isCompare = false;
        this.innerTimeout = null;
        this.outerTimeout = null;
    }

    generateGames = () => {
        const round = [];

        for(let i = 0; i < this.rounds; i ++) {
            this.roundChecker[i] = [];
            const generateRandomNumber = Math.floor((Math.random() * 16) + 1);

            if (i === 0) {
                round[i] = {
                    game: [generateRandomNumber],
                };
            } else { 
                const generated = generateRandomNumber;
                round[i] = {
                    game: [...round[i - 1].game, round[i - 1].game[i - 1] === generated ?
                        generateRandomNumber : generated
                    ],
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

    timerMethod = (game, areaChildren) => {
        if (game.round[this.x]) {
            game.round[this.x].game.forEach((element, index) => {
                const currentElementStyle = areaChildren[element - 1].style;
                const timer = index + 1;
                this.outerTimeout = setTimeout(() => {
                    currentElementStyle.cssText = 'background: blue;';
                    this.innerTimeout = setTimeout(() => {
                        currentElementStyle.cssText = 'background: red;';
                    }, 500)
                }, timer * 500)
            });
        }
    }

    handleCurrentGame = (currentGame, className = 'scoreLeft') => {
        const scoreLeft = document.getElementsByClassName(className);
        const scoreLeftChildren = Array.from(scoreLeft[0].children);

        scoreLeftChildren.forEach((element, index) => {
            if ( index <= currentGame) {
                element.style.cssText = 'background: green;';
            }
        });
    }

    callbackMethod = (event, game, areaChildren) => {
        const currentGame = game.round[this.x].game.length;
        this.valueArray.push(parseInt(event.target.getAttribute('value')));
        this.isCompare = JSON.stringify(game.round[this.x].game) === JSON.stringify(this.valueArray);
        this.counter++;
        const isMoreGames = this.x < game.round.length;
        if (this.counter === currentGame && this.isCompare) {
            this.isInitRun = false;
            this.counter = 0;
            this.handleCurrentGame(this.x, 'scoreRight');
            if (isMoreGames) {
                this.x++;
                this.valueArray = [];
                this.timerMethod(game, areaChildren);
            }
            this.handleCurrentGame(this.x);
        } 
        if (this.x < game.round.length && (this.counter === currentGame && !this.isCompare)) {
            this.valueArray = [];
            this.counter = 0;
            this.isInitRun = false;
            this.timerMethod(game, areaChildren);
        }
    }

    randomChooser = (area, playerArea) => {
        const areaChildren = Array.from(area.children);
        const playAreaChildren = Array.from(playerArea.children);
        const game = this.game;

        if (this.isInitRun) {
            this.timerMethod(game, areaChildren);
        }

        playAreaChildren.forEach(element => {
            element.onclick = (event) => this.callbackMethod(event, game, areaChildren);
        });
    }
    
    startGame = () => {
        this.generateGames();
        const { area, playerArea } = this.getGameArea();
        this.randomChooser(area, playerArea);
        this.handleCurrentGame(0);
    };

    resetGame = () => {
        const { playerArea } = this.getGameArea();
        const playAreaChildren = Array.from(playerArea.children);
        this.game = {};
        this.roundChecker = [];
        this.x = 0;
        this.isInitRun = true;
        this.counter = 0;
        this.valueArray = [];
        this.isCompare = false;
        playAreaChildren.forEach(element => {
            element.onclick = null;
        })
        clearTimeout(this.innerTimeout);
        clearTimeout(this.outerTimeout);
    };
}

export default Game;
