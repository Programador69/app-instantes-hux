"use client";
import "./comentarios.css";
import ObtenerComentarios from "../../actions/obtenerComentarios";
import { useEffect, useState } from "react";
import { QueryResultRow } from "@vercel/postgres";

export function Comentarios() {
    const [comentarios, setComentarios] = useState<QueryResultRow[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const info: QueryResultRow[] | undefined = await ObtenerComentarios();
            if (info) {
                setComentarios(info);
            }
        };

        fetchData();
    }, []);

    return (
        <article className="articleComentarios">
            {
                comentarios.map((com) => (
                    <div key={com.id} className="comentario">
                        <h3>{com.usuario}</h3>
                        <p>{com.comentario}. <span>{com.fecha.toLocaleDateString()}</span></p>
                    </div>
                ))
            }
        </article>
    )
}