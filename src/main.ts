// Example 1
function convert<T,U> (input: T, converter:(input: T) => U):U {
    return converter(input);
}

const str = '123'
const num = convert(str, Number); // num = 123

console.log(num)

// Example 2

function sort<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
    return array.sort(compareFn)
}

const numbers = [3,1,4,1,5,9,2,6,5,3,5]
const sorted = sort(numbers,(a,b) => a - b)
console.log(sorted)

// Generics
const echo = <T>(arg: T):T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !==null)
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1,2,3]))
console.log(isObj({name: 'John'}))
console.log(isObj(null))


const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {arg, is:false}
    }
    return {arg, is: !!arg}
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))



interface BoolCheck<T> {
    value: T,
    is: boolean,
}

const checkBoolValue  = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length) {
        return {value: arg, is: false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length) {
        return {value: arg, is:false}
    }
    return {value:arg, is: !!arg}
}

interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    return user
}

console.log(processUser({id: 1, name: "Dave"}))

const getUsersProperty = <T extends HasID, K extends keyof T> (users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}



function generic<M>(arg: M):M {
    return arg;
}

let output1 = generic<string>("I am learning")
let output2 = generic<boolean>(true)
let output3 = generic<number> (145)
let output4 = generic<string> ("毎日ITを勉強してる頑張りましょう")

console.log(output1)
console.log(output2)
console.log(output3)
console.log(output4)

console.log("====")

class Queue<T> {
    private data: T[] = []
    
    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}

let q = new Queue<string>()

q.push("日本")
q.push("英語")

console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());

console.log("=====")

interface Pair <C,H,> {
    firstName: C;
    Age: H
    Addrest: C
}

let pair1: Pair<string,number> = {firstName: "Yushing", Age: 21, Addrest:"ITを勉強してる"}
let pair2: Pair<string,boolean> = {firstName: "Guen", Age: false, Addrest: "Vn"}

console.log(pair1)
console.log(pair2)

console.log("====")

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length);
}

logLength("頑張ってください")
logLength([1,2,4,5,6])