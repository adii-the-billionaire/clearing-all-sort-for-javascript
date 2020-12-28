const myBook = {
    name: 'sia',
    author: 'sia',
    paperCount:3838
}
const sia = ( book ) => {
    return console.log(`${book.name} writer is ${book.author} nd the pages is ${book.paperCount}`)
}
sia( myBook )
///written object from the function

const obj = {
    name: 'Ram',
    age: 'wave',
    book: 'ramayan',
    author:'valmiki ji'
}

const fun = ( obj ) => {
    return {
        nana: `the god is ${obj.name} describe in ${obj.book}`,
        summary:`the origin of ${obj.book} is ${obj.author}`
    }
}
const info1 = fun( obj )
console.log(info1.summary)
console.log(info1.nana)