import express, { Application } from "express";
import cors from "cors";

import { config } from "./config/env.config";
import dbInit from "./db/mongo";

class server {
  private readonly app: Application;
  private readonly port: string;

  constructor() {
    this.app = express();
    this.port = config.port;

    this.app.use(cors());
    this.app.use(express.json());

    this.database();
    this.listen();
  }

  database() {
    dbInit();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`SERVER RUM IN PORT ${this.port}`);
    });
  }
}

new server();
