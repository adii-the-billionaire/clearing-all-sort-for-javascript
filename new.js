const array = ['sia','miya','tiya','diya']
const mi = array.includes('sia',0)
// console.log(mi)
 const ni = array.values()
// console.log(ni)
// ni.name = 'hi'
// console.log(ni)
//now using iteration properties 
for(const value of array){
    console.log(value)
    console.log(ni)
}
//now the iterator cycle is here 
for(const value of ni){
    console.log(value)
}
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();
iterator.next()
for (let letter of iterator) {
  console.log(letter);
}