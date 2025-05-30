import "./servicios.css";
import ObtenerServicios from "../actions/obtenerServicios";
import Image from "next/image";

export default function Servicios() {
    const servicios = ObtenerServicios();

    return (
        <section className="sectionServicios">
            {
                servicios.map((serv) => {
                    return (
                        <article key={serv.id}>
                            <h2>{serv.nombre}</h2>
                            <Image src={serv.url} alt={serv.alt} width={1000} height={1000} />
                            <p>{serv.descripcion}</p>
                        </article>
                    )
                })
            }
        </section>
    )
}