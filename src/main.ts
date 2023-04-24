// Partial<Type>
// Utility Type Partial<Type> cho phép bạn tạo ra một phiên bản mới của một interface hoặc một kiểu dữ liệu nào đó, nhưng tất cả các thuộc tính của nó đều có thể bị thiếu.

interface Todo {
    title: string;
    fullName: string;
    myPhone: number
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate}
}

const todo1 = {
    title: "organize desk",
    fullName: "Yushing",
    myPhone: 1
}

const todo2 = updateTodo(todo1, {
    fullName: "Guenfufun",
    myPhone: 2
})

console.log(todo2)


interface User {
    name: string;
    email: string;
    phone: string;
}

type PartialUser = Partial<User>;

const user: PartialUser = {
    name: "Yushing",
    email: "huuhungnguyen2002@gmail.com"
}
console.log(user)

// Required<Type>
// Utility Type Required<Type> cho phép bạn tạo ra một phiên bản mới của một interface hoặc một kiểu dữ liệu nào đó, nhưng tất cả các thuộc tính của nó đều phải được cung cấp.

interface User2 {
    name?: string;
    email?: string;
    phone?: string;
}

type RequiredUser = Required<User>

const user2: RequiredUser = {
    name: "John Doe",
    email: 'yushing02@gmail.com',
    phone: "09123312332"
}

console.log(user2)

// ReadOnly Không thể gán lại
// Utility Type Readonly<Type> cho phép bạn tạo ra một phiên bản mới của một interface hoặc một kiểu dữ liệu nào đó, nhưng tất cả các thuộc tính của nó đều là thuộc tính chỉ đọc.

interface Only {
    readonly name: string;
    readonly address: string;
    readonly email: string;
}


const only: Only = {
    name: "John Doe",
    address: 'Yushing',
    email: "huuhungnguyen2002@gmail.com",
}

// only.name = "yshing" Lỗi: Thuộc tính "name" không thể được gán lại

console.log(only)

// Record
// Utility Type Record<KeyType, ValueType> cho phép bạn tạo ra một kiểu dữ liệu mới, trong đó các thuộc tính được xác định bởi các giá trị của KeyType, và các giá trị của các thuộc tính đó được xác định bởi ValueType.


interface CarInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | 'boris' | 'mordred';

const cats: Record<CatName, CarInfo> = {
    miffy: {age: 10, breed: "Yushing Name"},
    boris: {age: 20, breed: "Face"},
    mordred: {age: 60, breed: "Fonme"}
    
}

console.log(cats)

