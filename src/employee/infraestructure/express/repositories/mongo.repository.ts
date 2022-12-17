import { EmployeeEntity } from "../../../domain/employee.entity";
import { EmployeeRepository } from "../../../domain/employee.repository";
import EmployeeModel from "../models/employee.model";

export class MongoRepository implements EmployeeRepository {
  async getAll(): Promise<any> {
    const employeeList = await EmployeeModel.find();
    return employeeList;
  }
  async getOne(employeeId: string): Promise<any> {
    const employee = await EmployeeModel.findOne({ uuid: employeeId });
    return employee;
  }
  async register(employee: EmployeeEntity): Promise<any> {
    const newEmployee = await EmployeeModel.create(employee);
    return newEmployee;
  }
  async delete(employeeId: string): Promise<any> {
    const employee = await EmployeeModel.deleteOne({ uuid: employeeId });
    return employee;
  }
  async update(employeeId: string, employee: EmployeeEntity): Promise<any> {
    const employeeUpdate = await EmployeeModel.updateOne(
      {
        uuid: employeeId,
      },
      employee
    );
    return employeeUpdate;
  }
}
