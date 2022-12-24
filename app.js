
const gameBoard = () => {
  const mainScreen = document.getElementById('main-screen');
  const addAI = document.getElementById('add-ai');
  const addPlayers = document.getElementById('add-players');

  let clicked = false;

  addPlayers.addEventListener('click', () => {

    if(!clicked){
      addForm();
    }
    
    clicked = true;
  });
  
  function addForm() {
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

    form.append(frstHeader, frstPlayer, scndHeader, scndPlayer, addBtn);
    mainScreen.appendChild(form);

    return {form};
  }



}

gameBoard();






