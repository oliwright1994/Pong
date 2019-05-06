import './styles/game.css';
import Game from './partials/Game';



// create a game instance
const game = new Game('game', 512*1.5 , 512);


(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
//  game.render()

