import { v4 as uuid } from "uuid";
import { BranchCity, BranchOffice, EmployeeEntity } from "./employee.entity";

export class employeeValueObject implements EmployeeEntity {
  readonly uuid: string;
  readonly name: string;
  readonly email: string;
  readonly age: number;
  readonly phone: string;
  readonly position: string;
  readonly branchOffice: BranchOffice;
  readonly branchCity: BranchCity;
  readonly salary: string;

  constructor({
    name,
    email,
    age,
    phone,
    position,
    branchOffice,
    branchCity,
    salary,
  }: {
    name: string;
    email: string;
    age: number;
    phone: string;
    position: string;
    branchOffice: BranchOffice;
    branchCity: BranchCity;
    salary: string;
  }) {
    this.uuid = uuid();
    this.name = name;
    this.email = email;
    this.age = age;
    this.phone = phone;
    this.position = position;
    this.branchOffice = branchOffice;
    this.branchCity = branchCity;
    this.salary = salary;
  }
}
