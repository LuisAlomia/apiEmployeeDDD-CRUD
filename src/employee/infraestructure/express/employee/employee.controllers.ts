import { Request, Response } from "express";
import { CreateEmployeeUseCase } from "../../../aplication/createEmployee.usecase";
import { DeleteEmployeeUseCase } from "../../../aplication/deleteEmployee.usecase";
import { GetAllEmployeeUseCase } from "../../../aplication/getAllEmployee.usecase";
import { GetOneEmployeeUseCase } from "../../../aplication/getOneEmployee.usecase";
import { UpdateEmployeeUseCase } from "../../../aplication/updateEmployee.usecase";

export class EmployeeCtrl {
  private readonly _getAllEmployeeUseCase;
  private readonly _getOneEmployeeUseCase;
  private readonly _createEmployeeUseCase;
  private readonly _updateEmployeeUseCase;
  private readonly _deleteEmployeeUseCase;

  constructor(
    getAllEmployeeUseCase: GetAllEmployeeUseCase,
    getOneEmployeeUseCase: GetOneEmployeeUseCase,
    createEmployeeUseCase: CreateEmployeeUseCase,
    updateEmployeeUseCase: UpdateEmployeeUseCase,
    deleteEmployeeUseCase: DeleteEmployeeUseCase
  ) {
    this._getAllEmployeeUseCase = getAllEmployeeUseCase;
    this._getOneEmployeeUseCase = getOneEmployeeUseCase;
    this._createEmployeeUseCase = createEmployeeUseCase;
    this._updateEmployeeUseCase = updateEmployeeUseCase;
    this._deleteEmployeeUseCase = deleteEmployeeUseCase;
  }

  getAllEmployeeCtrl = async (req: Request, resp: Response) => {
    try {
      const data = await this._getAllEmployeeUseCase.run();
      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };

  getOneEmployeeCtrl = async (req: Request, resp: Response) => {
    const { employee_Id } = req.params;
    try {
      const data = await this._getOneEmployeeUseCase.run(employee_Id);
      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };

  registerEmployeeCtrl = async (req: Request, resp: Response) => {
    const { body } = req;

    try {
      const data = await this._createEmployeeUseCase.run(body);
      resp.status(201).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };

  updateEmployeeCtrl = async (req: Request, resp: Response) => {
    const { body } = req;
    const { employee_Id } = req.params;

    try {
      const data = await this._updateEmployeeUseCase.run(employee_Id, body);
      resp.status(201).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };

  deleteEmployeeCtrl = async (req: Request, resp: Response) => {
    const { employee_Id } = req.params;
    try {
      const data = await this._deleteEmployeeUseCase.run(employee_Id);
      resp.status(204).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
