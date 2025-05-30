import "./presentacion.css";

export function Presentacion() {
  return (
    <article className="articlePresentacion">
      <h1>Instantes</h1>
      <div className="contenedor">
        <div className="vara"></div>
        <div className="circuloGrande"></div>
        <div className="circuloChico"></div>
        <span className="spanEslogan">¡Instantes hace tus sueños realidad!</span>
      </div>

      <p>
        Buscamos ofrecerte la experiencia cumbre en organización de eventos,
        donde cada detalle se cuida meticulosamente para que tu visión cobre
        vida sin contratiempos. Nuestro objetivo es superar tus expectativas,
        brindándote tranquilidad y permitiéndote disfrutar plenamente de cada
        momento, sabiendo que todo está en manos expertas. <span className="spanDescuento">¡Además si eres local obtienes un 10% de descuento!</span>
      </p>
    </article>
  );
}
