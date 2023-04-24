interface Person {
    name: string;
    age: number;
    address: string;
}

type PartialPerson = Partial<Person>;

const Person: PartialPerson = {name: "John", age: 21, address: "毎日ITを勉強してる頑張ってください"}
console.log(Person)


interface Person2 {
    name2 ?: string;
    age2 ?: number;
    address2 ?: string;
}

type RequiredPerson = Required<Person2>;
const person2 : RequiredPerson = { name2: "Yushing", age2: 22, address2: "毎日ITを勉強してる"}

console.log(person2)

console.log("===========")
// NonNullable
interface User {
    fistName: string;
    lastName: string;
    age ?: number;
    address ?: string | null;
}

type NonNullableUser = NonNullable<User>

const user: NonNullableUser = {
    fistName: "John",
    lastName: "Doe",
    address: "HN, VN",
    id: 0,
    name: "",
    username: "",
    email: ""
}

console.log(user)

console.log("======")

function add(a: number, b: number): number {
    return a + b
}

type AddReturnType = ReturnType<typeof add>
const result: AddReturnType = 20

console.log(result)

// Utility Type
console.log("=====")

// Partial cho phép bạn tạo một phiên bản mới của một kiểu dữ liệu với tất cả các thuộc tính đều là optional:

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified ?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Projesct", 
    grade: 0,
    verified : false,
}

const assignGraded : Assignment = updateAssignment(assign1, { grade: 95})
console.log(assignGraded)


// Required and ReadOnly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

recordAssignment({...assignGraded, verified: true})

// Record
const hexColorMap: Record<string, string> = {
    red: "FF000",
    green: "00FF00",
    blue:"000FF"
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U" 

const LetterGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
        Sara: {assign1: 85, assign2: 93},
        Kelly: {assign1: 76, assign2: 15},
}

console.log(gradeData)

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

console.log(score)

type AssigPreview = Omit<Assignment, "grade" | "verified">

const priview: AssigPreview = {
    studentId: "k123",
    title: "Final Project"
}

console.log(priview)

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">


type hightGrades = Extract<LetterGrades, "A" | "B">

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined

type NamesOnly = NonNullable<AllPossibleGrades>

// ReturnType

//type newAssign = {title: string, points: number}

const createNewAssign = (title: string, points: number, fullCourse: string, address: string) => {
    return {title, points, fullCourse, address}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("ITを勉強してる頑張りましょう", 100, "2 triệu", "ITが難しいです")
console.log(tsAssign)

// Parameter

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = [ "Generics", 200, "4tr", "日本語を勉強して英語を勉強してる"]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us width the ReturnType of a Promise 

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUser = async(): Promise<User[]> => {
    const data = await fetch (
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if(err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUser>>

fetchUser().then(users => console.log(users))
