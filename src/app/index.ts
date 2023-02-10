import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { defaultRouter } from "./route/default.route";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.route();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
    this.app.use(bodyParser.json({ limit: "50mb" }));
  }

  route() {
    this.app.use("/", defaultRouter);
  }
}

export default new App().app;
