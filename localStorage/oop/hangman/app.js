const product = {
    name:'influence'
}
Object.prototype.hasOwnProperty = ()=>'this is new function'
console.log(product.hasOwnProperty())
console.log(product)
//hm jo bhi code likhte hai vo instances of object smje vidoo
Object.prototype.jagrati = ()=>'hellow jagrati' 
console.log(product.jagrati())
console.log(product)
//different way to create object lllll if you don't want to use new operator then use literal syntax
const product1 = new Object({
    name:'addii',
    age:'shi'
})
console.log(product1)
const product2 = new Object()
product2.name = "riya"
product2.class = 'djhff'
console.log(product2)
//excess a method