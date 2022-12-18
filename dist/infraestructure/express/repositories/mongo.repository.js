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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRepository = void 0;
const employee_model_1 = __importDefault(require("../models/employee.model"));
class MongoRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeList = yield employee_model_1.default.find();
            return employeeList;
        });
    }
    getOne(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield employee_model_1.default.findOne({ uuid: employeeId });
            return employee;
        });
    }
    register(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEmployee = yield employee_model_1.default.create(employee);
            return newEmployee;
        });
    }
    delete(employeeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield employee_model_1.default.deleteOne({ uuid: employeeId });
            return employee;
        });
    }
    update(employeeId, employee) {
        return __awaiter(this, void 0, void 0, function* () {
            const employeeUpdate = yield employee_model_1.default.updateOne({
                uuid: employeeId,
            }, employee);
            return employeeUpdate;
        });
    }
}
exports.MongoRepository = MongoRepository;
