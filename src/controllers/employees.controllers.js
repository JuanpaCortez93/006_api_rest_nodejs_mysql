import { connection } from "../database/db.js";

export const getEmployees = async (req, res) => {
    const [rows] = await connection.query('SELECT * FROM employee;');
    res.json(rows);   
}

export const getEmployee = async (req, res) => {
    
    try{
        const {id} = req.params;
        const [rows] = await connection.query('SELECT * FROM employee WHERE id = ?', [id]);

        if(rows.length <= 0) {
            res.status(400).json({message: 'Employee not found'});
        }else{
            res.status(200).json({name: rows[0].name, salary: rows[0].salary});
        }
        
    }catch(error){
        res.status(500).json({message: 'Operation failed'})
    }
}

export const post_employees = async (req, res) => {

    try {
        const {name, salary} = req.body;
        const [rows] = await connection.query('INSERT INTO employee (name, salary) VALUES (IFNULL(?, name), IFNULL(?, salary))', [name, salary]);

        if(rows.affectedRows <= 0){
            res.status(400).json({message: 'Employee not created'});
        }else{
            res.status(201).json({id: rows.insertId, name, salary});
        }
    }catch(error){
        res.status(500).json({message: "Operation failed", error});
    }

}

export const put_employees = async (req, res) => {
    
    try{
        const {id} = req.params;
        const {name, salary} = req.body;

        const [result] = await connection.query('UPDATE employee SET name = ?, salary = ? WHERE id = ? ', [name, salary, id])

        if(name!==null && name!=="" && salary>=425.00){
            if(result.affectedRows > 0) {
                const [rows] = await connection.query('SELECT * FROM employee WHERE id = ?', [id]);
                console.log();
                res.status(200).json({result: result.info, message: rows[0]});
            }else{
                res.status(400).json({message: "ID not found. Employee not found."});
            }
        }else{
            res.status(400).json({message: "Name or salary not well defined."});
        }

    }catch(error){
        res.status(500).json({message: "Operation failed", error});
    }
}

export const delete_employees = async (req, res) => {
    
    try {
        const {id} = req.params;
        const [rows] = await connection.query('DELETE FROM employee WHERE id = ?', [id]);

        if(rows.affectedRows <= 0){
        res.status(400).json({message: 'ID not found. Employee not deleted'}); 
        }else{
            res.sendStatus(204);
        }
    }catch(error){
        res.status(500).json({message: "Operation failed", error});
    }
}