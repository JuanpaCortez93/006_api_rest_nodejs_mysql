import express from "express";

import index_routing from './routes/index.routes.js';
import employees_routing from './routes/employees.routes.js';

const app = express();

app.use(express.json());

app.use('/api', index_routing);
app.use('/api', employees_routing);
app.use((req, res, next) => {
    res.status(404).json({message: "Route not found"});
});

export default app;