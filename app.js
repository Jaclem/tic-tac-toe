
const displayController = () => {
  const mainScreen = document.getElementById('main-screen');
  const addAI = document.getElementById('add-ai');
  const addPlayers = document.getElementById('add-players');
  
  let clicked = false;
  let everyOtherClick = false;
  
  const playerNames = (player1, player2) => {
    return({
      one: player1,
      two: player2
    })
  }

  const gameBoard = (() => {
    const winner = document.getElementById('winner');

    let scoreBoard = [
      '', '', '',
      '', '', '',
      '', '', ''
    ];

    const winConditions = [
      [0,1,2], 
      [3,4,5], 
      [6,7,8], 
      [0,3,6], 
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    const endGameDecision = (players) => {
      
      winConditions.forEach(arr => {
        if(
          scoreBoard[arr[0]] === 'X' &&
          scoreBoard[arr[1]] === 'X' &&
          scoreBoard[arr[2]] === 'X'
        ){
          winner.textContent = `${players.one} Wins!`;

        } else if(
          scoreBoard[arr[0]] === 'O' &&
          scoreBoard[arr[1]] === 'O' &&
          scoreBoard[arr[2]] === 'O'
        ) {
          winner.textContent = `${players.two} Wins!`;

        }
      });
    }


    return {
      scoreBoard,
      endGameDecision
    };
  
  })();
  
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
      form.remove();
      createGame.divCreate(players);
      clicked = false;
    })

    return {createForm};
  })();



  // module that creates the div game
  const createGame = (() => {
    const divCreate = (players) => {
      const main = document.getElementById('main');
      const grid = document.querySelectorAll('.grid');

      main.classList.add('game-container');

      grid.forEach(item => {
        item.classList.add('game-grid');
      })
      
      playWithTwo(players);
    }

    return {divCreate};
  })();

  function playWithTwo(players) {
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

        gameBoard.endGameDecision(players);
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






