var data = { name: "Alice", age: 30 };
var person = data; // Type assertion to a custom interface
console.log(person.name); // Output: "Alice"
console.log(person.age); // Output: 30
// let value: any = "Hello, TypeScript!";
// let length: number = (value as string).length; // Using the 'as' keyword to assert the type
// console.log(length); // Output: 18
