"use client";
import "./formulario.css";
import { useState } from "react";
import { registrarComentario } from "../../actions/registrarComentario";

export function Formulario() {
    const [usuario, setUsuario] = useState("");
    const [comentario, setComentario] = useState("");

    const subirComentario = async () => {
        await registrarComentario(usuario, comentario);
    }

    return (
        <article className="articleFormulario">
            <h2>Deja tu comentario 😊</h2>
            <form className="formulario">
                <label htmlFor="nombre" className="labelNombre">
                <input type="text" id="nombre" placeholder="" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                <span className="spanNombre">Escribe tu nombre</span>
                </label>

                <label htmlFor="comentario" className="labelComentario">
                <textarea id="comentario" placeholder="" value={comentario} onChange={(e) => setComentario(e.target.value)} required></textarea>
                <span className="spanComentario">Escribe tu comentario</span>
                </label>

                <button type="submit" onSubmit={subirComentario}>Comentar</button>
            </form>
        </article>
    )
}