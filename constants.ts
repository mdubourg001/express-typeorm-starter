import * as dotenv from "dotenv";

// ----- parse and verify -----

dotenv.config();

const REQUIRED_ENV_VARS = ["JWT_SECRET"];

for (const key of REQUIRED_ENV_VARS) {
  if (!(key in process.env)) throw `Missing environment variable: ${key}`;
}

// ----- exports -----

export const SERVER_PORT = 3000;

export const JWT_COOKIE_NAME = "json_web_token";
export const JWT_SECRET = process.env.JWT_SECRET;
