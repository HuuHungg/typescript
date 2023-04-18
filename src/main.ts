type One = string
type Two = string | number
type Three = 'hello'

// Convert to more or less specific

let a: One = "hello"
let b = a as Two // less specific
let c = a as Three

let d = <One> 'world'
let e = <string | number> 'world'

const addOrrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === "add") return a + b
    return '' + a + b
}

let myVal: string = addOrrConcat(2,2, 'concat') as string

let nextVal: number =  addOrrConcat(2,2, 'concat') as number

// The DOM

const img = document.querySelector('img') as HTMLImageElement
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')

img.src
myImg.src 


