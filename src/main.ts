type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]


interface Guitarist {
    name ?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserId = stringOrNumber

// literal types

let myName: "Dave"

let UserName: "Dave" | "John" | "Amy"
UserName = "Amy"

// function 
const add = (a: number,b:number): number => {
    return a + b
}

console.log(add(10,20))

const logMsg = (message: any):void => {
    console.log(message)
}

logMsg("Hello!")


let subtract = function (c: number, d: number): number {
    return c - d
}

// type mathFunction = (a: number, b: number) => number

interface mathFunction {
    (a: number, b: number): number
}

let multiply: mathFunction = function (c,d) {
    return c * d
}

logMsg(multiply(20,20))


// optional parameter
const addAll = (a: number, b: number, c?: number):number => {
    if( typeof c !== "undefined") {
        return a + b + c 
    }   
    return a + b
}


const sumAll = (a: number = 20, b: number, c: number = 10): number => {
    return a + b + c
}


logMsg(addAll(2,2,2))
logMsg(add(2,2))
logMsg(sumAll(2,2))
logMsg(sumAll(undefined, 3))

console.log("===========")

// Rest Parameter
const total = (a:number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10,2,3,4,5))


const isNumber = (value: any):boolean => {
    return typeof value === 'number'
        ? true: false
}

const numberOrString = (value: number | string) => {
    if(typeof value === 'string') {
        return "This is the string"
    }   
    if(typeof value === 'number') {
        return "This is the number"
    }
}

