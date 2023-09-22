import { Router } from "express";

import {getEmployees, getEmployee, post_employees, put_employees, delete_employees} from '../controllers/employees.controllers.js'

const routing = Router();

routing.get('/employees', getEmployees);
routing.get('/employees/:id', getEmployee);

routing.post('/employees', post_employees);

routing.put('/employees/:id', put_employees); 

routing.delete('/employees/:id', delete_employees);

export default routing;