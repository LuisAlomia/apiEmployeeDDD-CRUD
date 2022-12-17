import { EmployeeEntity } from "./employee.entity";

export interface EmployeeRepository {
  register(employee: EmployeeEntity): Promise<EmployeeEntity>;
  delete(employeeId: string): Promise<void>;
  update(employeeId: string, employee: EmployeeEntity): Promise<EmployeeEntity>;
}
