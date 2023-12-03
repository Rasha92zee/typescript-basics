// Number
let num: number = 42;

// String
let str: string = "Hello, TypeScript!";

// Boolean
let isTrue: boolean = true;

// Array
let numbers: number[] = [1, 2, 3, 4, 5];

// Tuple
let tuple: [string, number] = ["Alice", 30];

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let selectedColor: Color = Color.Red;

// Any
let dynamicValue: any = 42;
dynamicValue = "Hello, TypeScript!";

// Void
function logMessage(message: string): void {
    console.log(message);
}
// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Object
let person: { name: string; age: number } = {
    name: "Alice",
    age: 30
};

// Function
let add: (x: number, y: number) => number = function (x, y) {
    return x + y;
};
// Classes
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let alice: Person = new Person("Alice", 30);

console.log(num);
console.log(str);
console.log(isTrue);
console.log(numbers);
console.log(tuple);
console.log(selectedColor);
console.log(dynamicValue);
logMessage("Logging a message.");
console.log(nullValue);
console.log(undefinedValue);
console.log(person);
console.log(add(5, 7));

console.log(alice);

