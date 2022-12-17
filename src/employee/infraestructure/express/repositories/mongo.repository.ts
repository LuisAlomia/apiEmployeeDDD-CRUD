import { EmployeeEntity } from "../../../domain/employee.entity";
import { EmployeeRepository } from "../../../domain/employee.repository";
import EmployeeModel from "../models/employee.model";

export class MongoRepository implements EmployeeRepository {
  async register(employee: EmployeeEntity): Promise<any> {
    const newEmployee = await EmployeeModel.create(employee);
    return newEmployee;
  }
  async delete(employeeId: string): Promise<any> {
    const employee = await EmployeeModel.deleteOne({ employeeId });
    return employee;
  }
  async update(employeeId: string, employee: EmployeeEntity): Promise<any> {
    const employeeUpdate = await EmployeeModel.updateOne(employee, {
      employeeId,
    });
    return employeeUpdate;
  }
}
