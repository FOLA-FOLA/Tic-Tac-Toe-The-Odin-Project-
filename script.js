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

//Function to show the gameboard
function showgame() {
    const gamebody = document.getElementById('gamebody')
    const instruction = document.getElementById('instruction')
    gamebody.classList.remove('hidden')
    instruction.classList.remove('hidden')
}

//Function to hide the game board
function hideGame() {
    const gamebody = document.getElementById('gamebody')
    const instruction = document.getElementById('instruction')
    gamebody.classList.add('hidden')
    instruction.classList.add('hidden')
}

formsubmitbtn.addEventListener('click', (e) => {
    console.log('Submit button clicked')
    e.preventDefault()
    
    const playerData = addPlayersToLibrary()
    console.log('Player data:', playerData)
    
    console.log('Hiding form...')
    entryform.classList.add('hidden')
    
    console.log('Showing game...')
    showgame();
    
    console.log('Form classes after hide:', entryform.classList)
    console.log('Game body element:', document.getElementById('gamebody'))
})

//Function to add move to the array
function addMove(slot, marker) {
    const moveData = {slot, marker};
    allMoves.push(moveData)
}

//Function to check winner
function checkWinning (marker) {
    const winArray = [[slot1, slot4, slot7], 
    [slot1, slot2, slot3], 
    [slot1, slot5, slot9], 
    [slot2, slot5, slot8], 
    [slot3, slot5, slot7], 
    [slot3, slot6, slot9], 
    [slot4, slot5, slot6], 
    [slot7, slot8, slot9]]
    const slotsPerMarker = allMoves.filter(m => m.marker === marker).map(m => m.slot)

    const hasWon = winArray.some(winCombo => {
        return winCombo.every(slot => slotsPerMarker.includes(slot));
    });
    if (hasWon) {
        const slota = document.getElementById(slotsPerMarker[0])
        const slotb = document.getElementById(slotsPerMarker[1])
        const slotc = document.getElementById(slotsPerMarker[2])

        slota.classList.add('winner')
        slotb.classList.add('winner')
        slotc.classList.add('winner')

        return true
    }
    return false
}


//Function to play move
function displayMove (s, m) {
    const slotbox = document.getElementById(s)
    slotbox.innerHTML = `<p>${m}</p>`
}
function showNextPlayer(marker) {
    const playerText = document.getElementById('playertext')

    playerText.innerHTML = ''
    if (marker == 'X'){
        playerText.innerHTML = `<p>It's ${players[0].playero}'s turn!</p>`
    } else {
        playerText.innerHTML = `<p>It's ${players[0].playerx}'s turn!</p>`
    }
}
tttboard.addEventListener('click', (event) => {
    if (event.target.classList.contains('slot')) {
        const exists = allMoves.some(move => move.slot === event.target.id);
        if (exists === false) {
            const slot = event.target.id
            const marker = (allMoves.length < 1 || allMoves.length % 2 === 0) ? 'X' : 'O'

            displayMove(slot, marker)
            addMove(slot, marker)
            checkWinning(marker)
        }
    }
});

const resetGame = document.getElementById('reset')
const startPage = document.getElementById('restart')

resetGame.addEventListener('click', (e) => {
    const slots = document.getElementsByClassName('slot')
    allMoves.splice(0, allMoves.length)
    Array.from(slots).forEach(slot => slot.innerHTML = '')
})

startPage.addEventListener('click', (e) => {
    hideGame()
})
