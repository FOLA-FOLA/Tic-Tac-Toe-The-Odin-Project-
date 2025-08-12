const players = []
const allMoves = []

const formsubmitbtn = document.getElementById('formsubmitbtn')
const entryform = document.getElementById('gameform')
const tttboard = document.getElementById('tttboard')

//Function to get player name from form and add to array
function addPlayersToLibrary() {
    const formdeets = new FormData(entryform);
    const playerData = {
        playerx: formdeets.get('playerxname'),
        playero: formdeets.get('playeroname')
    };
    players.push(playerData);
    return playerData;
}
function showCurrentPlayer(marker) {
    const playerText = document.getElementById('playertext')
    playerText.innerHTML = ''
    if (marker == 'X'){
        playerText.innerHTML = `<p>It's ${players[0].playero}'s turn!</p>`
    } else {
        playerText.innerHTML = `<p>It's ${players[0].playerx}'s turn!</p>`
    }
}
function showWinner(marker) {
    const playerText = document.getElementById('playertext');
    const winnerName = marker === 'X' ? players[0].playerx : players[0].playero;
    playerText.innerHTML = ''
    playerText.innerHTML = `<p>${winnerName} (${marker}) wins!</p>`;
}
//Function to show the gameboard
function showgame() {
    const gamebody = document.getElementById('gamebody')
    const instruction = document.getElementById('playertext')
    gamebody.classList.remove('hidden')
    instruction.classList.remove('hidden')
    entryform.classList.add('hidden')
}

//Function to hide the game board
function hideGame() {
    const gamebody = document.getElementById('gamebody')
    const instruction = document.getElementById('playertext')
    gamebody.classList.add('hidden')
    instruction.classList.add('hidden')
    entryform.classList.remove('hidden')
}

formsubmitbtn.addEventListener('click', (e) => {
    e.preventDefault()
    addPlayersToLibrary()
    showgame();
    showCurrentPlayer('O')
    entryform.reset()
})

//Function to add move to the array
function addMove(slot, marker) {
    const moveData = {slot, marker};
    allMoves.push(moveData)
}

//Function to check winner
function checkWinning (marker) {
    const winArray = [['slot1', 'slot4', 'slot7'], 
    ['slot1', 'slot2', 'slot3'], 
    ['slot1', 'slot5', 'slot9'], 
    ['slot2', 'slot5', 'slot8'], 
    ['slot3', 'slot5', 'slot7'], 
    ['slot3', 'slot6', 'slot9'], 
    ['slot4', 'slot5', 'slot6'], 
    ['slot7', 'slot8', 'slot9']]
    const slotsPerMarker = allMoves.filter(m => m.marker === marker).map(m => m.slot)

    const hasWon = winArray.some(winCombo => {
        return winCombo.every(slot => slotsPerMarker.includes(slot));
    });
    if (hasWon) {
        const slota = document.getElementById(slotsPerMarker[0])
        const slotb = document.getElementById(slotsPerMarker[1])
        const slotc = document.getElementById(slotsPerMarker[2])

        slota.style.backgroundColor = "aquamarine"
        slotb.style.backgroundColor = "aquamarine"
        slotc.style.backgroundColor = "aquamarine"

        return true
    }
    return false
}


//Function to play move
function displayMove (s, m) {
    const slotbox = document.getElementById(s)
    slotbox.innerHTML = `<p>${m}</p>`
}

// Check for draw
function checkDraw() {
    if (allMoves.length === 9) {
        const playerText = document.getElementById('playertext');
        playerText.innerHTML = `<p>It's a draw!</p>`;
        return true;
    }
    return false;
}
tttboard.addEventListener('click', (event) => {
    if (event.target.classList.contains('slot')) {
        const exists = allMoves.some(move => move.slot === event.target.id);
        if (!exists && !checkWinning('X') && !checkWinning('O') && !checkDraw()) {
            const slot = event.target.id;
            const marker = (allMoves.length % 2 === 0) ? 'X' : 'O';

            displayMove(slot, marker);
            addMove(slot, marker);
            
            if (!checkWinning(marker)) {
                if (!checkDraw()) {
                    showCurrentPlayer(marker);
                }
            } else {
                showWinner(marker);
            }
        }
    }
});

const resetGame = document.getElementById('reset')
const startPage = document.getElementById('restart')

const resetgme = 

resetGame.addEventListener('click', (e) => {
    const slots = document.getElementsByClassName('slot')
    allMoves.splice(0, allMoves.length)
    Array.from(slots).forEach(slot => {
        slot.innerHTML = '';
        slot.style.backgroundColor = "rgb(155, 56, 255)"
        showCurrentPlayer('O')
    });
})

startPage.addEventListener('click', (e) => {
    hideGame()
    const slots = document.getElementsByClassName('slot')
    allMoves.splice(0, allMoves.length)
    Array.from(slots).forEach(slot => {
        slot.innerHTML = '';
        slot.style.backgroundColor = "rgb(155, 56, 255)"
        showCurrentPlayer('O')
    });
})
