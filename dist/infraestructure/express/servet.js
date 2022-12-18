"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const env_config_1 = require("./config/env.config");
const employee_router_1 = require("./employee/employee.router");
const mongo_1 = __importDefault(require("./db/mongo"));
class server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = env_config_1.config.port;
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use("/api/v1/employee", employee_router_1.router);
        this.database();
        this.listen();
    }
    database() {
        (0, mongo_1.default)();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`SERVER RUM IN PORT ${this.port}`);
        });
    }
}
new server();
