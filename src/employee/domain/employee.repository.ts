import { EmployeeEntity } from "./employee.entity";

export interface EmployeeRepository {
  register(employee: EmployeeEntity): Promise<EmployeeEntity>;
  delete(employeeId: string): Promise<void>;
  update(employee: EmployeeEntity): Promise<EmployeeEntity>;
}
