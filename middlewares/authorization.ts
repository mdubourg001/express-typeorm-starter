import { NextFunction, Response } from "express";

import { IRequest } from "../types/internal";

// middleware for authorization by role
export function authorizeRoles(allowedRoles: string | string[]) {
  return (request: IRequest, response: Response, next: NextFunction) => {
    const { user } = request;
    const allowed =
      typeof allowedRoles === "string" ? [allowedRoles] : allowedRoles;

    // @ts-ignore
    if (user && allowed.includes(user.role)) {
      next();
    } else {
      response.status(403).json({ error: "Forbidden" });
    }
  };
}

// middleware to allow only authenticated users
export function authorizeAuthenticated(
  request: IRequest,
  response: Response,
  next: NextFunction
) {
  const { user } = request;

  if (!user) {
    response.status(403).json({ error: "Forbidden" });
  } else {
    next();
  }
}
