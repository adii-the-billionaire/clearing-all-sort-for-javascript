///0112356
//using of for loop
//i just want to solve this 
function main(num) {
    let result = [0, 1]
    for (let i = 2; i < num; i++) {
        result[i] = result[i - 1] + result[i - 2]
    }
    return result
}
console.log(main(78))