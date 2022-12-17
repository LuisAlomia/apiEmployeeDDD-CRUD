export interface EmployeeEntity {
  uuid: string;
  name: string;
  email: string;
  age: number;
  phone: string;
  position: string;
  branchOffice: BranchOffice;
  branchCity: BranchCity;
  salary: string;
}

export enum BranchOffice {
  "BranchOne",
  "BranchTwo",
  "BranchTree",
}

export enum BranchCity {
  "CityOne",
  "CityTwo",
}
