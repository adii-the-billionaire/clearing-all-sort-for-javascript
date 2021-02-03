const Hangman = function(word,remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = [ ]
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''
    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter)){
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
    if(isUnique){
        this.guessedLetters.push(guess)
    }
    if(isUnique && isBadGuess ){
        this.remainingGuesses>0?this.remainingGuesses-- :this.remainingGuesses="ur value is just over"
    }
}

const game1 = new Hangman('cccc',2)
console.log(game1.getPuzzle())
// game1.makeGuess('s')
// game1.makeGuess('p')
//console.log(game1.remainingGuesses)
//understanding of key pressing in windows so let's begin now
window.addEventListener('keypress',(e)=>{
    // console.log(e)
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
})