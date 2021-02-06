const mia = document.querySelector('#sia')
const nip = document.querySelector('#nip')
const sia = document.querySelector('#mia')

let game1 



window.addEventListener('keypress',(e)=>{
    // console.log(e)
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess = guess
    console.log(game1.getPuzzle())
    console.log(game1.remainingGuesses)
    render()
})

getPuzzle(2).then((data)=>{
    console.log(data.puzzle)
}).catch((e)=>{
    console.log(e)
})

const generate = async()=>{
    const word = await getPuzzle(2)
    console.log(word)
    game1= new Hangman(word.puzzle,5)
    render()
}
 
generate()

const render = ()=>{
    sia.textContent = game1.getStatusMessage
    nip.textContent = ` your remaining guess is ${game1.remainingGuesses}`
    mia.textContent = game1.getPuzzle()
}



document.querySelector('#jia').addEventListener('click',generate)

// getPuzzle.then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//     console.log(e)
// })

// getCountry.then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//     console.log(e)
// })

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     console.log(response)
//     return response.json()
// }).then((data)=>{
//     console.log(typeof data)
//     console.log(data)
//        console.log(data.puzzle)
// }).catch((e)=>{
//     console.log(e)
// })

//here is we are using arguement as function that become callback so let's start the 
// const getLocation = ()=>{
//     return fetch('http://ipinfo.io/json?token=ce6d62364d5c83').then((response)=>{
//         if(response.status===200){
//             return response.json()
//         }else{
//             throw new Error('error is error')
//         }
//     })
// }
// getLocation().then((data)=>{
//     console.log(data)
//     console.log(data.country)
//     getCountry(`${data.country}`)
// }).catch((e)=>{
//     console.log(e)
// })
