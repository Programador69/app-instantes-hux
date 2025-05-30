import "./formulario.css";

export function Formulario() {
    return (
        <article className="articleFormulario">
            <h2>Deja tu comentario 😊</h2>
            <form className="formulario">
                <label htmlFor="nombre" className="labelNombre">
                <input type="text" id="nombre" placeholder="" required />
                <span className="spanNombre">Escribe tu nombre</span>
                </label>

                <label htmlFor="comentario" className="labelComentario">
                <textarea id="comentario" placeholder="" required></textarea>
                <span className="spanComentario">Escribe tu comentario</span>
                </label>

                <button type="submit">Comentar</button>
            </form>
        </article>
    )
}