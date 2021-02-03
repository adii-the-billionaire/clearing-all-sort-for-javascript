const Person = function(fistName,lastName,age){
    this.fistName  = fistName,
    this.lastName = lastName,
    this.age = age
} 
const person1 = new Person('Andrew','Mead',27)
console.log(person1)
person1.lastName = "tibia"
console.log(person1)
const person2 = new Person('adii','shukla',20)
console.log(person2)
//here we are making constructor function