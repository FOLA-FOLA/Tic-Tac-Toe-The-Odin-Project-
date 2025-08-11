const players = []
const gamemarkers = []

const formsubmitbtn = document.getElementById('formsubmitbtn')
const entryform = document.getElementById('gameform')

function addPlayersToLibrary() {
    const formdeets = new FormData(entryform);
    const players = {
        playerx: formdeets.get('playerxname'),
        playero: formdeets.get('playeroname')
    };
    players.push(players);
    return players;
}
function showgame() {
    const gamebody = document.getElementsById('gamebody')
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
    showgame();
})