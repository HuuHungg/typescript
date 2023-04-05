// Boolean
let skils : (string|number)[] = ["Hoi dan IT", 25]
console.log(skils)

// Tuple: dataType/size/order
let myTubple: [string, number, boolean] = ["Hello", 123, true]
console.log(myTubple)

function getName() : [string, number] {
    return ["毎日ITを勉強してるがんばりましょう", 20 ]
}

let [content, age] = getName()

console.log(content)
console.log(age)

function printNameAndAge(name: string, age: number): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
  }
  
  let myTuple: [string, number] = ["John", 30];
  printNameAndAge(...myTuple); // sử dụng spread operator để truyền các phần tử trong Tuple Type vào hàm

  
function printNameAndAge2(content: string, what: string): void {
    console.log(`Name: ${content}`);
    console.log(`What: ${what}`)
}

let myTubple2: [string,string] = ["日本語が難しいですか", "毎日勉強しましょう"]
printNameAndAge2(...myTubple2)