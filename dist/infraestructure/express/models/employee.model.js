"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Empployee = new mongoose_1.Schema({
    uuid: { type: String },
    name: { type: String },
    email: { type: String, unique: true },
    age: { type: Number },
    phone: { type: String },
    position: { type: String },
    branchOffice: {
        type: String,
        enum: ["BranchOne", "BranchTwo", "BranchTree"],
    },
    branchCity: { type: String, enum: ["CityOne", "CityTwo"] },
    salary: { type: String },
});
const EmployeeModel = (0, mongoose_1.model)("empployee", Empployee);
exports.default = EmployeeModel;
