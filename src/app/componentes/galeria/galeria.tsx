import "./galeria.css";
import ObtenerImagenes from "../../actions/obtenerImagenes";
import Image from "next/image";

export function Galeria () {
    const imagenes = ObtenerImagenes();

    const imagenesRevueltas = imagenes.sort(() => Math.random() - 0.5);

    return (
        <article>
            <h2>Galeria</h2>

            <section className="carrusel">
                {
                    imagenesRevueltas.map((imagen) => {
                        return (
                            <figure key={imagen.id}>
                                {
                                    imagen.url.includes("video") ? (
                                        <video width="1000" height="1000" controls>
                                            <source src={imagen.url} type="video/mp4"/>
                                            </video>
                                    ) : <Image src={imagen.url} alt={imagen.alt} width={1000} height={1000} />
                                }
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