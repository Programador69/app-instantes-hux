import "./somos.css";
import Image from "next/image";

export function Somos() {
  return (
    <article className="articleSomos">
      <h2>¿Quiénes somos?</h2>
      <Image src="/personalInvitados.jpeg" alt="Decoración final del evento" width={1000} height={1000} />
      <p>
        Somos un equipo apasionado por transformar ideas en celebraciones
        memorables. Nos dedicamos a escuchar tu visión y a plasmarla en cada
        detalle, desde la concepción hasta la ejecución impecable. Con una
        atención meticulosa y un toque creativo, buscamos superar tus
        expectativas, creando experiencias únicas y sin estrés para ti y tus
        invitados. Nuestra mayor satisfacción es ver tus momentos especiales
        brillar.
      </p>
    </article>
  );
}
