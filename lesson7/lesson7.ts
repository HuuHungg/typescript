let numbers : number[] = [1,2,3,4,5]
console.log(numbers)

interface Person {
    name: string;
    age: number;
}

let people: Person[] = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35}
]

console.log(people[1].name)

let totalAge = 0;
for(let person of people) {
    totalAge += person.age
}

console.log(totalAge)

let matrix: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9,10,11,12]
];
console.log(matrix[2])

for (let row of matrix) {
    for(let cell of row) {
        console.log(cell)
    }
}

let totals: number[] = [1,2,3,4,5];

let sum = 0;
for(let num of totals) {
    sum += num
}
console.log(sum)
    
let everNumbers = numbers.filter( num => num%2 === 0);
console.log(everNumbers)


let fullCourse : (string | number)[] = [
    "Javascript", "PHP", "Ruby"
]

fullCourse.push("ReactJS", "NodeJS")
fullCourse.push(26,28,8)

console.log(fullCourse)

let myArray4: Array<string> = ["apple", "banana","orange"]
myArray4.push("fine", "oke")

console.log(myArray4)

let myTuple: [string, number] = ["hello",123];
console.log(myTuple[0]);
console.log(myTuple[1]);


let myTuples: [string, number][] = [
    ["apple", 1],
    ["banana", 2],
    ["orange", 3],
] 

console.log(myTuples[0][0])
console.log(myTuples[1][1])

let myOptionalTuple: [string, number?] = ["hello", 1];
console.log(myOptionalTuple[0])
console.log(myOptionalTuple[1])


let myRestTyple2: [string, ...number[]] = ["hello",4,5,6,7,8,9,0]
console.log(myRestTyple2)

function getTuple(): [string, number] {
    return["Hello lets get status", 123]
}

let myTuple3: [string, number] = getTuple();
console.log(myTuple3[0])
console.log(myTuple3[1])

