const transitionStage = () => {
  const startBtn = document.getElementById('start-btn');
  const hiddenBtns = document.getElementById('hidden-buttons');
  const mainScreen = document.getElementById('main-modal');
  const addAI = document.getElementById('add-ai');
  const addPlayers = document.getElementById('add-players');

  // Adds a smooth transition to the main screen when "Start Game" button is clicked
  mainScreen.classList.add('smooth-transition');
  startBtn.remove();
  hiddenBtns.classList.add('visible');

  // user clicks AI Bot button to add a bot that plays them in Tic Tac Toe
  function startWithAI() {
    const gridItem = document.querySelectorAll('.game-grid');
    createGame();
  
    gridItem.forEach(item => {
      item.addEventListener('click', ()=> {
        item.innerHTML = "X"
      });
    });
  }

  // Adds visibility to the mainGame element allowing you to interact with the game board
  function createGame() {
    const mainGame = document.getElementById('main-game');
    mainGame.classList.add('visible');
  }

  // Does nothing yet
  const gameBoard = () => {

  }

  addAI.addEventListener('click', ()=> {startWithAI();});
}



