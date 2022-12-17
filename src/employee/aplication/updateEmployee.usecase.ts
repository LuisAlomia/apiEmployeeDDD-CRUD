import { EmployeeEntity } from "../domain/employee.entity";
import { EmployeeRepository } from "../domain/employee.repository";

export class UpdateEmployeeUseCase {
  private readonly _employeeRepository;

  constructor(employeeRepository: EmployeeRepository) {
    this._employeeRepository = employeeRepository;
  }

  async run(
    employeeId: string,
    employee: EmployeeEntity
  ): Promise<EmployeeEntity> {
    const updateEmployee: EmployeeEntity =
      await this._employeeRepository.update(employeeId, employee);
    return updateEmployee;
  }
}
