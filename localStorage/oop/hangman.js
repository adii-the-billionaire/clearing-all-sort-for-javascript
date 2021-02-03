const Hangman = function(word,remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c','e']
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''
    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter)||letter===' '){
            puzzle = puzzle  + letter
        }else{
            puzzle = puzzle + '*'
        }
    })
    return puzzle
}

const game1 = new Hangman('Cat',2)
console.log(game1.getPuzzle())

