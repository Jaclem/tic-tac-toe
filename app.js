
const displayController = () => {
  const mainScreen = document.getElementById('main-screen');
  const addAI = document.getElementById('add-ai');
  const addPlayers = document.getElementById('add-players');

  let clicked = false;
  let everyOtherClick = false;

  const gameBoard = (() => {
    endGame: false;

    let scoreBoard = [
      '', '', '',
      '', '', '',
      '', '', ''
    ];

    const winConditions = [
      [0,1,2], // top row
      [3,4,5], // middle row
      [6,7,8], // bottom row
      [0,3,6], // left column
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    // console.log(testArr);

    const endGameDecision = () => {
      for (let i = 0; i < winConditions.length; i++) {
        console.log(scoreBoard[i]);
      } 
    }


    return {
      scoreBoard,
      endGameDecision
    };
  
  })();


  const playerNames = (player1, player2) => {
    player1,
    player2

    return {
      test() {
        console.log(`${player1} ${player2}`);
      }
      
    }
  }
  
  const addForm = (() => {
    const form = document.createElement('form');
    const frstHeader = document.createElement('label');
    const scndHeader = document.createElement('label');
    const frstPlayer = document.createElement('input');
    const scndPlayer = document.createElement('input');
    const addBtn = document.createElement('button');

    let players;

    form.className = 'player-form';
    frstHeader.className = 'name-label';
    scndHeader.className = 'name-label';
    frstPlayer.className = 'player-input';
    scndPlayer.className = 'player-input';
    addBtn.className = 'add-players';

    frstHeader.textContent = 'Player 1 - X';
    scndHeader.textContent = 'Player 2 - O';
    addBtn.textContent = 'Add';
    
    addBtn.setAttribute('id', 'add-names');

    // appends all the elements that were created to the form
    const createForm = () => {
      form.append(frstHeader, frstPlayer, scndHeader, scndPlayer, addBtn);
      mainScreen.appendChild(form);
    }

    // adds the user input to the playerNames factory function and closes modal
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      players = playerNames(frstPlayer.value, scndPlayer.value);
      players.test();
      form.remove();
      createGame.divCreate();
      clicked = false;
    })

    return {createForm};
  })();

  // module that creates the div game
  const createGame = (() => {
    const divCreate = () => {
      const main = document.getElementById('main');
      const grid = document.querySelectorAll('.grid');

      main.classList.add('game-container');

      grid.forEach(item => {
        item.classList.add('game-grid');
      })
      
      playWithTwo();
    }

    return {divCreate};
  })();

  function playWithTwo() {
    const grid = document.querySelectorAll('.game-grid');
    let arr = [];

    grid.forEach(item => {
      item.addEventListener('click', (e) => {
        let pathValue = e.path[0].attributes[1].textContent;
        let parsedValue = parseInt(pathValue);
       
        if (everyOtherClick == false && !arr.includes(parsedValue)){
          item.textContent = 'X';
          gameBoard.scoreBoard[parsedValue] = 'X';
          arr.push(parsedValue);
          everyOtherClick = true;

        } else if (everyOtherClick == true && !arr.includes(parsedValue)){
          item.textContent = 'O';
          gameBoard.scoreBoard[parsedValue] = 'O';
          arr.push(parsedValue);
          everyOtherClick = false;
        }

        console.log(gameBoard.scoreBoard);
        gameBoard.endGameDecision();
      });
    });
  }

  // Event Listeners //

  // checks if the button has been clicked and if not it adds the form
  // if it has been clicked it removes the form
  addPlayers.addEventListener('click', () => {
    const form = document.querySelector('.player-form');
    const container = document.querySelector('.game-container');


    if(!clicked){
      addForm.createForm();
      clicked = true;
    } else if(clicked) {
      form.remove();
      clicked = false;
    }
    
    if(Boolean(container) == true){
      container.remove();
    }
  });
}

displayController();






