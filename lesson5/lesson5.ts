const fullCourse = "ITが難しいですがでも毎日頑張り勉強しるつもりですでも明日新しいの日頑張ってくだい"

console.log("Check TypeScript", fullCourse.length)
console.log("Check TypeScript", fullCourse.toLowerCase())
console.log("Check TypeScript", fullCourse.toUpperCase())

// Number in TypeScript

let num1: number = 10
let num2: number = 3.14
console.log(num1,num2)

// String in Type Script

let str1 : string = "日本語が難しいですが頑張りましょう"
let str2 : string = "毎日八時間ぐらい勉強するつもりです"

console.log(str1, str2)

// Array in TypeScript
let number: number[]=[1,2,3,4,5,6,7]
let names: string[]=["日本語","英語","ベトナム語"]
let course: [string, number] = ["Course Javascript", 150]
let writeContent: string[]=["今朝6時に起いたそして顔を洗いました。7時に格好へ行きました"]

console.log(number)
console.log(names)
console.log(course)
console.log(writeContent)

// Object in TypeScript

let person: object = {name : "GuanFurn", age:21}
let car: {brand: string, model: string, year: number} = {brand: "お腹", model: "2時間ぐらい働く",year:3}

console.log(person)
console.log(car)

// Forloop in Golang 

for (let i = 0; i < 5; i++) {
    console.log("勉強さなければなりません",i)
}

// While

let a = 0 
while (a < 5) {
    console.log("がんばってください",a)
    a++
}

// do while 

let e = 0
do {
    console.log("勉強しなさい",e)
    e++
}while(e < 4)