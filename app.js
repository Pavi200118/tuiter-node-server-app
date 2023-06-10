import express from 'express';
import session from "express-session";
import cors from 'cors';
import AuthController from "./users/auth-controller.js";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();

app.use(
cors({
   credentials: true,
   origin: "http://localhost:3000",

})
);
app.use(express.json());

app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
);

TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);

app.listen(4000);

