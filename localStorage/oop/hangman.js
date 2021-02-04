const Hangman = function(word,remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = [ ]
    this.status = 'playing'
}

Hangman.prototype.getStatusMessage = function(){
    if(this.status ==='playing'){
        return `Guesses left: ${this.remainingGuesses}`
    }else if(this.status==='failed'){
        return `Nice try ! The word was ""${this.word.join('')}"" `
    }else{
        return `Great work ! You  guessed the word`
    }
}

Hangman.prototype.calculateStatus = function(){
    const finished = this.word.every((letter)=>{
        return this.guessedLetters.includes(letter)|| letter===' '
    })
    // const lettersUnguessed = this.word.filter((letter)=>{
    //     return !this.guessedLetters.includes(letter)
    // })
    // const finished = lettersUnguessed.lenght==='0'
    // let finished = true
    // this.word.forEach((letter)=>{
    //     if(this.guessedLetters.includes(letter)){
    //         finished = true
    //     }else{
    //         finished = false
    //     }
    // })
    if(this.remainingGuesses===0){
        this.status = 'failed'
    }else if(finished){
        this.status = 'finished'
    }else{
        this.status ='playing'
    }
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''
    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter)||letter===' '){
             puzzle+=letter
        }else{
            puzzle+='*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase()
    
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if(this.status!=='playing'){
        return
    }
    if(isUnique){
        this.guessedLetters.push(guess)
    }
    if(isUnique && isBadGuess ){
        this.remainingGuesses>0?this.remainingGuesses-- :this.remainingGuesses=" over"
    }
    this.calculateStatus()
}



const game1 = new Hangman('cia',2)
console.log(game1.getPuzzle())
// game1.makeGuess('s')
// game1.makeGuess('p')
//console.log(game1.remainingGuesses)
//understanding of key pressing in windows so let's begin now


const mia = document.querySelector('#sia')
const nip = document.querySelector('#nip')
const sia = document.querySelector('#mia')
sia.textContent = game1.getStatusMessage()
nip.textContent = ` your remaining guess is ${game1.remainingGuesses}`
mia.textContent = game1.getPuzzle()
console.log(game1.status)
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