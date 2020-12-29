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

            if (i === 0) {
                round[i] = {
                    game: [Math.floor((Math.random() * 16) + 1)],
                    isFinish: false,
                };
            } else { 
                round[i] = {
                    game: [...round[i - 1].game, Math.floor((Math.random() * 16) + 1)],
                    isFinish: false,
                };
            }
        }

        this.game = {
            ...this.game,
            round,
        }

        console.log(this.game, this.roundChecker, 'rounds');
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
        const game = this.game;

        console.log(game, 'game');

        for (let i = 0; i < game.round.length; i++) {
            game.round[i].game.forEach(element => {
                console.log(element, 'element');
                areaChildren[element].style.cssText = 'background: blue;';
            });
        } 

        // for (let item in game.round) {
        //     console.log(item, 'item');
        //     for(let games in game.round[item].game) {
        //         console.log(games, 'game');
        //         // elt.style.cssText
        //         areaChildren[games].style.cssText = 'background: blue;';
        //     }
        // }

        for (let i = 1; i <= 3; i++) {
            (function(index) {
                setTimeout(function() { 
                    console.log(index); 
                }, i * 500);
            })(i);
        }
    }
    
    startGame = () => {
        this.generateGames();
        const { area, playerArea } = this.getGameArea();
        this.randomChooser(area, playerArea);
    };

    resetGame = () => {
        this.game = {};
        this.roundChecker = [];

        console.log(this.game, this.roundChecker, 'reset');
    };
}

export default Game;
