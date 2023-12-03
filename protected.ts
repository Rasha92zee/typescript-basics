class User {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends User {
    private employeeId: number;

    constructor(name: string, employeeId: number) {
        super(name);
        this.employeeId = employeeId;
    }

    getDetails(): string {
        return `employee name : ${this.name}, employee id : ${this.employeeId}`
    }
}

const employee1 = new Employee("Raj",212);

console.log(employee1.getDetails());
// console.log(employee1.name)
// Property 'name' is protected and only accessible within class 'User' and its subclasses