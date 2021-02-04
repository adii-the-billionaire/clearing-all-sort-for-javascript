const mia = document.querySelector('#sia')
const nip = document.querySelector('#nip')
const sia = document.querySelector('#mia')

const game1 = new Hangman('cia',2)

sia.textContent = game1.getStatusMessage()
nip.textContent = ` your remaining guess is ${game1.remainingGuesses}`
mia.textContent = game1.getPuzzle()

window.addEventListener('keypress',(e)=>{
    // console.log(e)
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
    mia.textContent = game1.getPuzzle()
    nip.textContent = ` your remaining guess is ${game1.remainingGuesses}`
    sia.textContent = game1.getStatusMessage()
})