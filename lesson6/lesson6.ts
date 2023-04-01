interface User {
    name: string;
    age: number;
    email: string;
    isAdmin: boolean;
  }
  
  interface UserManager {
    getUsers(): User[];
    getUserById(id: string): User | undefined;
    addUser(user: User): void;
    removeUserById(id: string): void;
  }
  
  class UserDatabase implements UserManager {
    private users: User[] = [];
  
    getUsers(): User[] {
      return this.users;
    }
  
    getUserById(id: string): User | undefined {
      return this.users.find(user => user.email === id);
    }
  
    addUser(user: User): void {
      this.users.push(user);
    }
  
    removeUserById(id: string): void {
      this.users = this.users.filter(user => user.email !== id);
    }
  }
  
  const database = new UserDatabase();
  
  const user1: User = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    isAdmin: false
  };
  
  database.addUser(user1);
  
  console.log(database.getUsers());
  // Output: [{name: "John Doe", age: 30, email: "johndoe@example.com", isAdmin: false}]
  
  const user2: User = {
    name: "Jane Doe",
    age: 25,
    email: "janedoe@example.com",
    isAdmin: true
  };
  
  database.addUser(user2);
  
  console.log(database.getUsers());
  // Output: [{name: "John Doe", age: 30, email: "johndoe@example.com", isAdmin: false},
  //          {name: "Jane Doe", age: 25, email: "janedoe@example.com", isAdmin: true}]
  