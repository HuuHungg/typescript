interface Person {
    name: string;
    age: number;
    email : string;
}


function printPerson(person: Person)

console.log(`Name: ${person.name}, Age: ${person.age} `)
if (person.email) {
    console.log(`Email: ${person.email}`)
}


const john: Person = {name: 'John', age:30}
printPerson(john)

const sarah: Person = {name: 'Sarah', age: 35, email:'huuhungnguyen2002@gmail.com'}
printPerson(sarah)