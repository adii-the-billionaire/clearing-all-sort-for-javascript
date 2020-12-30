const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months)
//when comparing two array then use sort()
const numbers = [4, 2, 5, 1, 3]
numbers.sort()
console.log(numbers)
const num = [1,22333,34343,11,33,432,22,1]
num.sort((a,b)=>a-b)
console.log(num)
//here is method splice that i wanna explored to
const mit = [2,2,3,42]
mit.splice(2,2)
console.log(mit)
//splice also add elements to an array here is the example
const mitt = ['hi','body','how','are']
mitt.splice(1,0,'you')
console.log(mitt)
//index + it's means from left to right pointer running
//index - it's means from right to left