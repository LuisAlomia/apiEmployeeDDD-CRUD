import { Router } from "express";
import { GetAllEmployeeUseCase } from "../../../aplication/getAllEmployee.usecase";
import { GetOneEmployeeUseCase } from "../../../aplication/getOneEmployee.usecase";
import { CreateEmployeeUseCase } from "../../../aplication/createEmployee.usecase";
import { DeleteEmployeeUseCase } from "../../../aplication/deleteEmployee.usecase";
import { UpdateEmployeeUseCase } from "../../../aplication/updateEmployee.usecase";
import { MongoRepository } from "../repositories/mongo.repository";
import { EmployeeCtrl } from "./employee.controllers";

export const router = Router();

const employeeRepository = new MongoRepository();
const employeeGetAllUseCase = new GetAllEmployeeUseCase(employeeRepository);
const employeeGetOneUseCase = new GetOneEmployeeUseCase(employeeRepository);
const employeeCreateUseCase = new CreateEmployeeUseCase(employeeRepository);
const employeeUpdateUseCase = new UpdateEmployeeUseCase(employeeRepository);
const employeeDteleteUseCase = new DeleteEmployeeUseCase(employeeRepository);

const employeeController = new EmployeeCtrl(
  employeeGetAllUseCase,
  employeeGetOneUseCase,
  employeeCreateUseCase,
  employeeUpdateUseCase,
  employeeDteleteUseCase
);

router
  .route("/")
  .get(employeeController.getAllEmployeeCtrl)
  .post(employeeController.registerEmployeeCtrl);

router
  .route("/:employee_Id")
  .get(employeeController.getOneEmployeeCtrl)
  .put(employeeController.updateEmployeeCtrl)
  .delete(employeeController.deleteEmployeeCtrl);
