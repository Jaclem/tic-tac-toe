function transitionStage(){
  const mainScreen = document.getElementById('main-modal');
  const startBtn = document.getElementById('start-btn');

  mainScreen.classList.add('smooth-transition');
  startBtn.remove();

  const addAI = document.createElement('button');
  const addPlayers = document.createElement('button');

  mainScreen.appendChild(addAI);
  mainScreen.appendChild(addPlayers);

  addAI.classList.add('button-pop');
  addPlayers.classList.add('button-pop');

  addAI.innerHTML = "AI Bot";
  addPlayers.innerHTML = "Two Players";
}

function startGame() {
  transitionStage();
  

  // gameBoard();
}

const gameBoard = () => {

}