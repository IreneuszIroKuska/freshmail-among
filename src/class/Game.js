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
        const playAreaChildren = Array.from(playerArea.children);
        const game = this.game;
        let x = 0;
        let isInitRun = true;

        for (let i = 0; i < game.round.length; i++) {
            game.round[i].game.forEach(element => {
                setTimeout(() => {
                    areaChildren[element].style.cssText = 'background: blue;';
                }, i * 500)
            });
        } 

        // while(game.round[x]) {

        // }

        // for (let item in game.round) {
        //     console.log(item, 'item');
        //     for(let games in game.round[item].game) {
        //         console.log(games, 'game');
        //         // elt.style.cssText
        //         areaChildren[games].style.cssText = 'background: blue;';
        //     }
        // }

        // for (let i = 1; i <= 3; i++) {
        //     (function(index) {
        //         setTimeout(function() { 
        //             console.log(index); 
        //         }, i * 500);
        //     })(i);
        // }

        playAreaChildren.forEach(element => {
            element.addEventListener('click', event => {
                console.log(element, 'element');
                console.log(event.target.getAttribute('value'), 'event target');
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

        console.log(this.game, this.roundChecker, 'reset');
    };
}

export default Game;
