import { NextFunction } from "express";
import { createConnection, Connection } from "typeorm";
import { IRequest } from "../types/internal";

class ConnectionSingleton {
  private static _instance: Connection;

  public static async getInstance() {
    if (typeof this._instance !== "undefined") return this._instance;

    this._instance = await createConnection("default");
    return this._instance;
  }
}

// middleware for database misc
export default async function database(
  request: IRequest,
  _,
  next: NextFunction
) {
  request.database = {
    init: async () => ConnectionSingleton.getInstance(),
  };

  next();
}
