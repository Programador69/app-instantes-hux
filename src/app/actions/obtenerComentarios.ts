"use server";
import { createPool } from "@vercel/postgres";

const URL = process.env.DATABASE_URL;

export default async function ObtenerComentarios() {
    try {
        const pool = createPool({
            connectionString: URL,
        });
    
        if (!pool) {
            throw new Error("La conexión a la base de datos no está inicializada")
        }
    
        const {rows} = await pool.sql`SELECT * FROM comentarios ORDER BY fecha DESC`;
        await pool.end()
    
        console.log('Comentarios obtenidos con éxito');
        return rows;
    
      } catch (error) {
        console.error("Error al registrar el comentario: ", error);
        throw error;
      }
}