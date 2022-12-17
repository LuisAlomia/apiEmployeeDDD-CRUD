import { EmployeeEntity } from "../domain/employee.entity";
import { EmployeeRepository } from "../domain/employee.repository";

export class GetAllEmployeeUseCase {
  private readonly _employeeRepository;

  constructor(employeeRepository: EmployeeRepository) {
    this._employeeRepository = employeeRepository;
  }

  async run(): Promise<EmployeeEntity[]> {
    const employeeList = await this._employeeRepository.getAll();
    return employeeList;
  }
}
