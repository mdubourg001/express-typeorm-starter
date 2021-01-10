import { Response } from "express";
import * as jwt from "jsonwebtoken";

import { IRequest } from "../types/internal";
import User from "../entity/User";
import { userFormatter } from "../formatters/user";
import { hash } from "../helpers/passwords";
import { JWT_COOKIE_NAME, JWT_SECRET } from "../constants";
import { forgePayload } from "../helpers/jwt";

export default async function signIn(req: IRequest, res: Response) {
  if (req.user) {
    return res.status(200).json();
  } else {
    await req.database.init();
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide both an email and a password" });
    }

    const user = await User.findOne({ email, password: hash(password) });

    if (!user) {
      return res
        .status(401)
        .json({ error: "No user found for given credentials" });
    }

    const jwtCookie = jwt.sign(forgePayload(user), JWT_SECRET);

    res.cookie(JWT_COOKIE_NAME, jwtCookie);
    return res.json(userFormatter(user));
  }
}
