import { Request } from "express";

import User from "../entity/User";

// ---- express -----

interface IDatabaseMisc {
  init: () => void;
}

export interface IRequest extends Request {
  database?: IDatabaseMisc;
  user?: User;
}

// ----- jwt -----

export interface IJWTPayload {
  user: User;
  iat: number;
}
