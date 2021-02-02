// //here is dealing with date
// const now = new Date()
// console.log(now.getFullYear())
// const timestamp = now.getTime()
// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())
// console.log(`Year :${now.getFullYear()}`)
// console.log(`Month ${now.getMonth()}`)
// console.log(`Day of Month ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute ${now.getMinutes()}`)
// console.log(`Seconds ${now.getSeconds()}`)
// console.log(`day : ${now.getDay()}`)
// const dateOne = new Date('March 1 2017 12:00:00')
// const dateTwo = new Date()
// console.log(dateTwo.toString())
// console.log(dateTwo.toTimeString())
// console.log(dateTwo.toUTCString())
// const dateOneTimestamp = dateOne.getTime()
// const dateTwoTimestamp = dateTwo.getTime()
// if(dateOneTimestamp<dateTwoTimestamp){
//     console.log(dateOne.toString())
// }else if(dateOneTimestamp>dateTwoTimestamp){
//     console.log(dateTwo.toString())
// }

//here is learning Moment 
const now  = moment()
console.log(now.toString())
console.log(now.minute())
///moment allows to handle with addition just like that
now.add(1,'year').subtract(20,'days')
console.log(now.toString())
//formating or display
console.log(now.format('MMM Do,YYYY'))
const nowTimestamp = now.valueOf()
console.log(nowTimestamp)
console.log(now.fromNow())
//here is timestamp
const nowTimestamp1 =now.valueOf()
console.log(moment(nowTimestamp1).toString())
//here is formatting our birthday so let's begin
const birthday = moment()
birthday.year(2001).month(12).date(12)
console.log(birthday.format('MMM D, YYYY'))
console.log(birthday.fromNow().format('MMM D,YYYY'))