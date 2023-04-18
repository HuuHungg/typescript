let stringArr = ['one', 'hey', 'Dave']

let guitar = ['Start', 'Les Paul', 5250]

let mixedData = ['EVH', 1980, true]

stringArr[0] = 'John'
stringArr.push('hey')


guitar[0] = 1984
guitar.unshift('Jim')

let test = []
let bands: string[] = []
bands.push('Van Halen')



let myTuple: [string, number, boolean] = ['Dave', 42, true]
let mixed = ['John', 1, false]
myTuple[1] = 82

let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

exampleObj.prop1 = 'John'

interface Guitarist {
    name ?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, 'asddd']
}

let JP: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['JH','Name']
}

const greetGuitarist =(guitarist: Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name?.toUpperCase()}!`
    }
    return 'Hello!'
}

console.log(greetGuitarist(JP))

// Enums 

enum Grade {
    U = "Huu Hung Nguyen",
    D = 1,
    C = "Face"
}

console.log(Grade.C)

