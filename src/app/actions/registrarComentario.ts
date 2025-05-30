"use server";
import { createPool } from "@vercel/postgres";

const URL = process.env.DATABASE_URL;

export async function registrarComentario(
    usuario: string,
    comentario: string
) {
  try {
    if (usuario.trim() === "" || comentario.trim() === "") {
        throw new Error("El usuario y el comentario no pueden estar vacíos");
    }

    const pool = createPool({
        connectionString: URL,
    });

    if (!pool) {
        throw new Error("La conexión a la base de datos no está inicializada")
    }

    const fecha = new Date().toISOString();
    const fechaCorta = fecha.slice(0, 10); // Formato YYYY-MM-DD

    await pool.sql`INSERT INTO comentarios (usuario, comentario, fecha) VALUES (${usuario}, ${comentario}, ${fechaCorta})`;
    await pool.end()

    console.log('Comentario registrado con éxito');

  } catch (error) {
    console.error("Error al registrar el comentario: ", error);
    throw error;
  }
}