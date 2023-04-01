let count2: number 

count2 = 10

console.log("Check code", count2)

let name2 : string[] = ["Javascript", "PHP" , "Ruby"]

name2.push("HTML&CSS")

console.log(name2)

let myVar : string | number = "Hello"


console.log(myVar)

let num :number = 10;
let str: string = "Hello"

function add(num1: number, num2: number) {
    return num1 + num2
}

let result = add(10,20)

console.log(result)

interface Person {
    name: string
    age: number
}

const viblo : Person = {
    name: "毎日ITを勉強してる頑張りましょう",
    age : 21
}

console.log(viblo)