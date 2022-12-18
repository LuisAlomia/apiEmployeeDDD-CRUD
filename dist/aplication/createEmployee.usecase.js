"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeUseCase = void 0;
const employee_valueobject_1 = require("../domain/employee.valueobject");
class CreateEmployeeUseCase {
    constructor(employeeRepository) {
        this._employeeRepository = employeeRepository;
    }
    run(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = new employee_valueobject_1.employeeValueObject(body);
            const newEmployee = yield this._employeeRepository.register(employee);
            return newEmployee;
        });
    }
}
exports.CreateEmployeeUseCase = CreateEmployeeUseCase;
