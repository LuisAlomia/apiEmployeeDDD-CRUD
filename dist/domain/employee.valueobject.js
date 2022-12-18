"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeValueObject = void 0;
const uuid_1 = require("uuid");
class employeeValueObject {
    constructor({ name, email, age, phone, position, branchOffice, branchCity, salary, }) {
        this.uuid = (0, uuid_1.v4)();
        this.name = name;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.position = position;
        this.branchOffice = branchOffice;
        this.branchCity = branchCity;
        this.salary = salary;
    }
}
exports.employeeValueObject = employeeValueObject;
