//myPerson==Person.prototype==Object.prototype==null

class PersonClass{
    constructor(firstName,lastName,age,like=[]){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.like = like
    }
    getBio(){
         let bio = `${this.firstName} is ${this.age}`
         this.like.forEach((like)=>{
             bio = bio + `${this.firstName} likes ${this.like}`
         })
         return bio
    }
    setName(name){
         const names = name.split(' ')
        this.firstName= names[0]
        this.lastName = names[1]
    }
}

//structuring of subclass
class Employee extends PersonClass{
     //if we define nothing it's just fall to the parent 
     constructor(firstName,lastName,age,position,likes){
         super(firstName,lastName,age,likes)
         this.position = position//that makes this employee class unique     }
   }
   getBio(){
       //employees version of get bio
       return `${this.firstName} ${this.lastName} is a ${this.position}`
   }
}

const myperson1  =new Employee('sia','tia',90,'hacker',['ride','bike'])
console.log(myperson1)
console.log(myperson1.getBio())
myperson1.setName('Adii Shukla')
console.log(myperson1.getBio())
// const myPerson = new PersonClass('adii','shukla',323,['running','bike riding'])
// console.log(myPerson)
// console.log(myPerson.getBio())
// myPerson.setName('sia sia')
// console.log(myPerson.getBio())

//show person class set up with no instances property
//how to create subclass using prototype inheritance
   