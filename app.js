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
    createGame();

    const gridItem = document.querySelectorAll('.game-grid');
    let playerChosenSquare;
    let arr = [];
  
    gridItem.forEach(item => {
      item.addEventListener('click', (e)=> {
        item.innerHTML = "X"
        playerChosenSquare = e.target;
        arr.push(playerChosenSquare);

        gameBoard();
      });
    });

    return {gridItem};
  }

  // Adds visibility to the mainGame element allowing you to interact with the game board
  function createGame() {
    const mainGame = document.getElementById('main-game');
    mainGame.classList.add('visible');
  }

  // grabs an array from the startWithAI function and logs it to console
  const gameBoard = () => {
    // console.log(nodeItem);
    const arr = [];
    // console.log(arr[0]);

    const x = startWithAI();
    const gridValues = Object.values(x);
    const testList = gridValues[0];

    testList.forEach(item => {
      // let testIf = item.outerText;

      if(item.textContent.includes('X','O')){
        console.log(item[0]);
      }
     
    });
    
  }

  

  addAI.addEventListener('click', ()=> {startWithAI();});
}



