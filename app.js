
const displayController = () => {
  const mainScreen = document.getElementById('main-screen');
  const addAI = document.getElementById('add-ai');
  const addPlayers = document.getElementById('add-players');

  let clicked = false;
  let everyOtherClick = false;
  let gameBoard = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

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
      const gameContainer = document.createElement('game-container');
      gameContainer.className = 'game-container';
      document.body.appendChild(gameContainer);

      for(let i = 0; i < 9; i++) {
        const gameDivs = document.createElement('div');
        gameDivs.className = 'game-grid';
        gameDivs.setAttribute('id', 'game-grid');
        gameDivs.setAttribute('value', i);
        gameContainer.append(gameDivs);
      }
      playGame.playWithTwo();
    }
  
    return {divCreate};
  })();

  const playGame = (() => {
    const playWithTwo = () => {
      const grid = document.querySelectorAll('.game-grid');

      grid.forEach(item => {
        item.addEventListener('click', (e) => {
          if (everyOtherClick == false){
            item.textContent = 'X';
            console.log(e.path[0].attributes[2].value);
            everyOtherClick = true;
          }else if (everyOtherClick == true){
            item.textContent = 'O';
            everyOtherClick = false;
            console.log(item.value);
          }
        });
      });
    }

    return {playWithTwo};
  })();

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

  return {
    playerNames,
    addForm,
    createGame
  }
}

displayController();






