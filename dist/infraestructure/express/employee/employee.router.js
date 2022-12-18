"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const getAllEmployee_usecase_1 = require("../../../aplication/getAllEmployee.usecase");
const getOneEmployee_usecase_1 = require("../../../aplication/getOneEmployee.usecase");
const createEmployee_usecase_1 = require("../../../aplication/createEmployee.usecase");
const deleteEmployee_usecase_1 = require("../../../aplication/deleteEmployee.usecase");
const updateEmployee_usecase_1 = require("../../../aplication/updateEmployee.usecase");
const mongo_repository_1 = require("../repositories/mongo.repository");
const employee_controllers_1 = require("./employee.controllers");
exports.router = (0, express_1.Router)();
const employeeRepository = new mongo_repository_1.MongoRepository();
const employeeGetAllUseCase = new getAllEmployee_usecase_1.GetAllEmployeeUseCase(employeeRepository);
const employeeGetOneUseCase = new getOneEmployee_usecase_1.GetOneEmployeeUseCase(employeeRepository);
const employeeCreateUseCase = new createEmployee_usecase_1.CreateEmployeeUseCase(employeeRepository);
const employeeUpdateUseCase = new updateEmployee_usecase_1.UpdateEmployeeUseCase(employeeRepository);
const employeeDteleteUseCase = new deleteEmployee_usecase_1.DeleteEmployeeUseCase(employeeRepository);
const employeeController = new employee_controllers_1.EmployeeCtrl(employeeGetAllUseCase, employeeGetOneUseCase, employeeCreateUseCase, employeeUpdateUseCase, employeeDteleteUseCase);
exports.router
    .route("/")
    .get(employeeController.getAllEmployeeCtrl)
    .post(employeeController.registerEmployeeCtrl);
exports.router
    .route("/:employee_Id")
    .get(employeeController.getOneEmployeeCtrl)
    .put(employeeController.updateEmployeeCtrl)
    .delete(employeeController.deleteEmployeeCtrl);
