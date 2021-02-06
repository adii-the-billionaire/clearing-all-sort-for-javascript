const getPuzzle = async (word)=>{
    const data = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${word}`)
    return data.json()
}


// const getPuzzle = (word)=>{

//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${word}`).then((response)=>{
//     if(response.status===200){
//         return response.json()
//     }
// }).then((data)=>{
//     return console.log(data.puzzle)
// }).catch((e)=>{
//     console.log(e)
// })
// }
// getPuzzle(3)


//  const getCountry = (code)=>{
//      return fetch('https://restcountries.eu/rest/v2/all').then((response)=>{
//          if(response.status===200){
//              return response.json()
//          }
//      }).then((data)=>{
//         const myData = data.filter((data)=>{
//             return data.alpha2Code === 'IN'
//         })
//         return console.log(myData[0].name)
//      }).catch((e)=>{
//          console.log('something proble')
//      })
//  }
 
 
 

//code modification here so let's start 

//  const getPuzzle1 = (word)=>{
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${word}`).then((response)=>{
//     if(response.status===200){
//         return response.json()
//     }else{
//         throw new Error('error error error')
//     }
// }).then((data)=>{
//     return console.log(data.puzzle)
// })
// }
// getPuzzle1(3).then((data)=>{
//     console.log(data)
// }).catch((e)=>{
//     console.log(e)
// })
