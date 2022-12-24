
const gameBoard = () => {
  const mainScreen = document.getElementById('main-screen');
  const addAI = document.getElementById('add-ai');
  const addPlayers = document.getElementById('add-players');
  const addBtn = document.getElementById('add-names');

  let clicked = false;

  const playerNames = (player1, player2) => {
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


    form.className = 'player-form';
    frstHeader.className = 'name-label';
    scndHeader.className = 'name-label';
    frstPlayer.className = 'player-input';
    scndPlayer.className = 'player-input';
    addBtn.className = 'add-players';

    frstHeader.textContent = 'Player 1';
    scndHeader.textContent = 'Player 2';
    addBtn.textContent = 'Add';
    
    addBtn.setAttribute('id', 'add-names');

    // appends all the elements that were created to the form
    const createForm = () => {
      form.append(frstHeader, frstPlayer, scndHeader, scndPlayer, addBtn);
      mainScreen.appendChild(form);
    }

    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const players = playerNames(frstPlayer.value, scndPlayer.value);
      players.test();
      form.remove();
      clicked = false;
    })

    return {createForm};
  })();

  // Event Listeners //

  // checks if the button has been clicked and if not it adds the form
  // if it has been clicked it removes the form
  addPlayers.addEventListener('click', () => {
    const form = document.querySelector('.player-form');

    if(!clicked){
      addForm.createForm();
      clicked = true;
    } else {
      form.remove();
      clicked = false;
    }
  });



  // addBtn.addEventListener('click', (e) => {
  //   console.log()
  // })

}

gameBoard();






