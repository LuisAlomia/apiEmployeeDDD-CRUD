import { EmployeeRepository } from "../domain/employee.repository";

export class DeleteEmployeeUseCase {
  private readonly _employeeRepository;

  constructor(employeeRepository: EmployeeRepository) {
    this._employeeRepository = employeeRepository;
  }

  async run(idEmployee: string): Promise<void> {
    const employee = await this._employeeRepository.delete(idEmployee);
    return employee;
  }
}
