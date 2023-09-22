import { connection } from "../database/db.js";

export const test_connection_DB = async (req, res) => {
    const result = await connection.query("SELECT 'Pong from DB' AS RESULT");
    res.json(result[0]);
}

