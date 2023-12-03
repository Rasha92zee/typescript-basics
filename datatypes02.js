// Number
var num = 42;
// String
var str = "Hello, TypeScript!";
// Boolean
var isTrue = true;
// Array
var numbers = [1, 2, 3, 4, 5];
// Tuple
var tuple = ["Alice", 30];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var selectedColor = Color.Red;
// Any
var dynamicValue = 42;
dynamicValue = "Hello, TypeScript!";
// Void
function logMessage(message) {
    console.log(message);
}
// Null and Undefined
var nullValue = null;
var undefinedValue = undefined;
// Object
var person = {
    name: "Alice",
    age: 30
};
// Function
var add = function (x, y) {
    return x + y;
};
// Classes
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var alice = new Person("Alice", 30);
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
