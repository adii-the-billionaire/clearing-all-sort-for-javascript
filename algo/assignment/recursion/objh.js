const array = [1, 2, 3, 4]
let obj = {}
for (let val of array) {
    obj[val] = 0
}
console.log(obj)
for (let val in obj) {
    console.log(val)
}
//so here what is simple difference btween array nd object
//array is iterator functionn
//but obj is non iterator functionmm