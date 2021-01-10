import { NextFunction } from "express";
import * as jwt from "jsonwebtoken";

import { IRequest, IJWTPayload } from "../types/internal";
import { JWT_SECRET } from "../constants";

// middleware for authentication
export default async function authentication(
  request: IRequest,
  _,
  next: NextFunction
) {
  const { json_web_token: jwtCookie } = request.cookies;

  if (!jwtCookie) next();

  try {
    const payload: IJWTPayload = jwt.verify(jwtCookie, JWT_SECRET);
    request.user = payload.user;
  } finally {
    next();
  }
}
