const mainScreen = document.getElementById('main-modal');
const addAI = document.getElementById('add-ai');
const addPlayers = document.getElementById('add-players');

const transitionStage = () => {
  const startBtn = document.getElementById('start-btn');
  const hiddenBtns = document.getElementById('hidden-buttons');

  mainScreen.classList.add('smooth-transition');
  startBtn.remove();
  hiddenBtns.classList.add('visible');
}


function startWithAI() {
  createGame();

}

function createGame() {
  const mainGame = document.getElementById('main-game');
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('game-container');
  mainGame.classList.add('visible');

  mainGame.appendChild(gameContainer);

  for(let i = 0; i <= 8; i++){
    const divs = document.createElement('div');
    divs.classList.add('game-grid');
    gameContainer.appendChild(divs);
  }
}

const gameBoard = () => {

}

addAI.addEventListener('click', ()=> {startWithAI();});