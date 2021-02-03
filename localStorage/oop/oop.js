const Person = function(fistName,lastName,age,like=[]){
    this.fistName  = fistName,
    this.lastName = lastName,
    this.age = age
    this.like = like
    this.likee = this.likee.bind(this)
} 
//make prototype to calculate the wheather it's applicable or not to
Person.prototype.eligible = function(){
    if(this.age>2){
        return console.log('man is eligible')
    }else{
        return console.log('man is not eligible')
    }
}


const person1 = new Person('Andrew','Mead',27)
console.log(person1)
person1.eligible()
person1.lastName = "tibia"
console.log(person1)
const person2 = new Person('adii','shukla',20)
console.log(person2)