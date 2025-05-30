import "./galeria.css";
import ObtenerImagenes from "../../actions/obtenerImagenes";
import Image from "next/image";

export function Galeria () {
    const imagenes = ObtenerImagenes();

    return (
        <article>
            <h2>Galeria</h2>

            <section className="carrusel">
                {
                    imagenes.map((imagen) => {
                        return (
                            <figure key={imagen.id}>
                                <Image src={imagen.url} alt={imagen.alt} width={1000} height={1000} />
                                <figcaption>
                                    {imagen.alt}
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </section>
        </article>
    )
}