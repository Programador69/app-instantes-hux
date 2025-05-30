import "./page.css";
import {Presentacion, Galeria} from "./componentes"

export default function Home() {
  return (
    <section>
      <Presentacion/>
      <Galeria/>      
    </section>
  );
}
