import { EmployeeEntity } from "../domain/employee.entity";
import { EmployeeRepository } from "../domain/employee.repository";
import { employeeValueObject } from "../domain/employee.valueobject";

export class CreateEmployeeUseCase {
  private readonly _employeeRepository;

  constructor(employeeRepository: EmployeeRepository) {
    this._employeeRepository = employeeRepository;
  }

  async run(body: EmployeeEntity): Promise<EmployeeEntity> {
    const employee = new employeeValueObject(body);
    const newEmployee = await this._employeeRepository.register(employee);
    return newEmployee;
  }
}
