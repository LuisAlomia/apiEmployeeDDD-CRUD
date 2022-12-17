import { Router } from "express";
import { CreateEmployeeUseCase } from "../../../aplication/createEmployee.usecase";
import { DeleteEmployeeUseCase } from "../../../aplication/deleteEmployee.usecase";
import { UpdateEmployeeUseCase } from "../../../aplication/updateEmployee.usecase";
import { MongoRepository } from "../repositories/mongo.repository";
import { EmployeeCtrl } from "./employee.controllers";

export const router = Router();

const employeeRepository = new MongoRepository();
const employeeCreateUseCase = new CreateEmployeeUseCase(employeeRepository);
const employeeUpdateUseCase = new UpdateEmployeeUseCase(employeeRepository);
const employeeDteleteUseCase = new DeleteEmployeeUseCase(employeeRepository);

const employeeController = new EmployeeCtrl(
  employeeCreateUseCase,
  employeeUpdateUseCase,
  employeeDteleteUseCase
);

router.post("/", employeeController.registerEmployeeCtrl);
router.put("/:employee_Id", employeeController.updateEmployeeCtrl);
router.delete("/:employee_Id", employeeController.deleteEmployeeCtrl);
