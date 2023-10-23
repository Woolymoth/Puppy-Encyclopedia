import mysql from "mysql2/promise"

export async function query({ query, values = []}){
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port : process.env.DB_PORT
    });

    try{
        const [data] = await connection.execute(query, values);
        connection.end();
        return data;
    }catch (error) {
        console.log(error)
    }
}