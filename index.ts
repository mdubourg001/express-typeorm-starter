import "reflect-metadata";
import * as express from "express";
import * as cookies from "cookie-parser";
import * as morgan from "morgan";

import { SERVER_PORT } from "./constants";
import database from "./middlewares/database";
import authentication from "./middlewares/authentication";
import signIn from "./views/sign-in";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(database);
app.use(cookies());
app.use(authentication);

app.post("/sign-in", signIn);

app.listen(SERVER_PORT);
