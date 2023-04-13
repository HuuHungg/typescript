let myName: string
let meaningOfLife: number
let isLoading: boolean
let album: number | string

myName = "John"
meaningOfLife = 42 
isLoading =true
album = "毎日ITを勉強してる頑張りましょう"


console.log(myName, meaningOfLife, isLoading, album)
const sum = (a: number, b: string) => {
    return a + b
}

console.log(sum( 122 , "I am learning English with my Friend"))

let postId: string | number = "日本語が難しですが頑張ってください"
let isActive: number | boolean = false

console.log(postId)