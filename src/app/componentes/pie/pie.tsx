"use client";

import "./pie.css";
import { useState } from "react";

export function Pie() {
    const [terminos, setTerminos] = useState(false);

    return (
        <footer>
            <h3>Todos los derechos reservados</h3>
            <h4>Página creada por Tecnologia Hux</h4>
            <button onClick={() => setTerminos(true)}>Terminos y condiciones</button>

            {
                terminos ? (
                    <div className="terminos">
                        <h5>Terminos y condiciones</h5>
                        <ul>
                            <li>1. Al utilizar este sitio web, aceptas nuestros términos y condiciones.</li>
                            <li>2. No se permite la reproducción total o parcial del contenido sin autorización.</li>
                            <li>3. Nos reservamos el derecho de modificar estos términos en cualquier momento.</li>
                            <li>4. El sitio es unica y exclusivamente para uso informativo</li>
                        </ul>
                        <button onClick={() => setTerminos(false)}>Cerrar</button>
                    </div>
                ) : null
            }

        </footer>
    )
}