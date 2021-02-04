class Hangman {
    constructor(word,remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = [ ]
        this.status = 'playing'
    }

    get getStatusMessage(){
        if(this.status ==='playing'){
            return `Guesses left: ${this.remainingGuesses}`
        }else if(this.status==='failed'){
            return `Nice try ! The word was ""${this.word.join('')}"" `
        }else{
            return `Great work ! You  guessed the word`
        }
    }

    calculateStatus(){
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

    getPuzzle(){
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
            
    set makeGuess(guess){
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

}

