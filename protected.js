var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, employeeId) {
        var _this = _super.call(this, name) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.getDetails = function () {
        return "employee name : ".concat(this.name, ", employee id : ").concat(this.employeeId);
    };
    return Employee;
}(User));
var employee1 = new Employee("Raj", 212);
console.log(employee1.getDetails());
// console.log(employee1.name)
// Property 'name' is protected and only accessible within class 'User' and its subclasses
