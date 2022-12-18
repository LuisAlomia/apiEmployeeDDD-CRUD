"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeCtrl = void 0;
class EmployeeCtrl {
    constructor(getAllEmployeeUseCase, getOneEmployeeUseCase, createEmployeeUseCase, updateEmployeeUseCase, deleteEmployeeUseCase) {
        this.getAllEmployeeCtrl = (req, resp) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this._getAllEmployeeUseCase.run();
                resp.status(200).json(data);
            }
            catch (err) {
                resp.status(400).json({ message: err.message });
            }
        });
        this.getOneEmployeeCtrl = (req, resp) => __awaiter(this, void 0, void 0, function* () {
            const { employee_Id } = req.params;
            try {
                const data = yield this._getOneEmployeeUseCase.run(employee_Id);
                resp.status(200).json(data);
            }
            catch (err) {
                resp.status(400).json({ message: err.message });
            }
        });
        this.registerEmployeeCtrl = (req, resp) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                const data = yield this._createEmployeeUseCase.run(body);
                resp.status(201).json(data);
            }
            catch (err) {
                resp.status(400).json({ message: err.message });
            }
        });
        this.updateEmployeeCtrl = (req, resp) => __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const { employee_Id } = req.params;
            try {
                const data = yield this._updateEmployeeUseCase.run(employee_Id, body);
                resp.status(201).json(data);
            }
            catch (err) {
                resp.status(400).json({ message: err.message });
            }
        });
        this.deleteEmployeeCtrl = (req, resp) => __awaiter(this, void 0, void 0, function* () {
            const { employee_Id } = req.params;
            try {
                const data = yield this._deleteEmployeeUseCase.run(employee_Id);
                resp.status(204).json(data);
            }
            catch (err) {
                resp.status(400).json({ message: err.message });
            }
        });
        this._getAllEmployeeUseCase = getAllEmployeeUseCase;
        this._getOneEmployeeUseCase = getOneEmployeeUseCase;
        this._createEmployeeUseCase = createEmployeeUseCase;
        this._updateEmployeeUseCase = updateEmployeeUseCase;
        this._deleteEmployeeUseCase = deleteEmployeeUseCase;
    }
}
exports.EmployeeCtrl = EmployeeCtrl;
