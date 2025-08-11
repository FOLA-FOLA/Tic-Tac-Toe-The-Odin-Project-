const players = []
const gamemarkers = []

const formsubmitbtn = document.getElementById('formsubmitbtn')
const entryform = document.getElementById('gameform')
const tttboard = document.getElementById('tttboard')

function addPlayersToLibrary() {
    const formdeets = new FormData(entryform);
    const playerData = {
        playerx: formdeets.get('playerxname'),
        playero: formdeets.get('playeroname')
    };
    players.push(playerData);
    return playerData;
}
function showgame() {
    const gamebody = document.getElementById('gamebody')
    const instruction = document.getElementById('instruction')
    gamebody.classList.remove('hidden')
    instruction.classList.remove('hidden')
}

function hidegame() {
    const gamebody = document.getElementById('gamebody')
    const instruction = document.getElementById('instruction')
    gamebody.classList.add('hidden')
    instruction.classList.add('hidden')
}

formsubmitbtn.addEventListener('click', (e) => {
    e.preventDefault()
    addPlayersToLibrary()
    entryform.classList.add('hidden')
    showgame();
})
function addmove() {
    const formdeets = new FormData(entryform);
    const playerData = {
        playerx: formdeets.get('playerxname'),
        playero: formdeets.get('playeroname')
    };
    players.push(playerData);
    return playerData;
}
tttboard.addEventListener('click', (event) => {
    if (event.target.classList === 'slot') {
        
    }
});