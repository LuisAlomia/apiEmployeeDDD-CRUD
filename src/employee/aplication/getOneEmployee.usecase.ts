import { EmployeeEntity } from "../domain/employee.entity";
import { EmployeeRepository } from "../domain/employee.repository";

export class GetOneEmployeeUseCase {
  private readonly _employeeRepository;

  constructor(emplyeeRepository: EmployeeRepository) {
    this._employeeRepository = emplyeeRepository;
  }

  async run(employeeId: string): Promise<EmployeeEntity> {
    const employee = await this._employeeRepository.getOne(employeeId);
    return employee;
  }
}
