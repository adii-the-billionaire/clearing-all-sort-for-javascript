class Student{
    constructor(firstName,lastName,age,grade,likes=[]){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.grade = grade
        this.likes = likes
    }
    updateGrade(change){
        this.grade+=change
    }
    getBio(){
        const status = this.grade>=20?'passing':'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Student('adii','shukla',20,88,['riding','singing'])
console.log(me)