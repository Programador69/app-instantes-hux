import "./comentarios.css";
import ObtenerComentarios from "../../actions/obtenerComentarios";

export function Comentarios() {
    const comentarios = ObtenerComentarios();

    return (
        <article className="articleComentarios">
            {
                comentarios.map((com) => (
                    <div key={com.id} className="comentario">
                        <h3>{com.nombre}</h3>
                        <p>{com.comentario}. <span>{com.fecha}</span></p>
                    </div>
                ))
            }
        </article>
    )
}