import { Router, text } from "express";
import { connection } from "../database/db.js";
import { test_connection_DB } from "../controllers/index.controllers.js";

const routing  = Router();

routing.get('/pingDB', test_connection_DB);


export default routing;