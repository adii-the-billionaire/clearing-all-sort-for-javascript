const Person = function(fistName,lastName,age,like=[]){
    this.fistName  = fistName,
    this.lastName = lastName,
    this.age = age,
    this.like = like,
    this.getBio = this.getBio.bind(this)
} 
//make prototype to calculate the wheather it's applicable or not to
Person.prototype.eligible = function(){
    if(this.age>2){
        return console.log('man is eligible')
    }else{
        return console.log('man is not eligible')
    }
}

Person.prototype.getBio = function(){
    let bio = `person firstname is ${this.fistName} nd person lastname is ${this.lastName} likes `
    this.like.forEach(function(el){
        bio+= ` ${this.fistName} likes ${el}`
    })
    return bio
}

Person.prototype.setName = function(fullName){
    const name = fullName.split('')
    this.fistName = name[0]
    this.lastName = name[1]
}

const person1 = new Person('Andrew','Mead',27,['play','code','improving carrer'])
console.log(person1)
person1.eligible()
person1.lastName = "tibia"
console.log(person1)
const person2 = new Person('adii','shukla',20)
console.log(person2)
console.log(person1.getBio())