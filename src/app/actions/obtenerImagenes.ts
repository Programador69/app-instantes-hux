export default function ObtenerImagenes() {
    const imagenes = [
        {
            id: 1,
            url: "/personalFestejada.jpeg",
            alt: "Festejada en su evento"
        },
        {
            id: 2,
            url: "/ceremonia2.jpeg",
            alt: "Ceremonia del evento"
        },
        {
            id: 3,
            url: "/cena.jpeg",
            alt: "Cena del evento"
        },
        {
            id: 4,
            url: "/carroDecorado.jpeg",
            alt: "Carro decorado"
        },
        {
            id: 5,
            url: "/carroGolosinas.jpeg",
            alt: "Carro de golosinas"
        },
        {
            id: 6,
            url: "/carroGolosinas2.jpeg",
            alt: "Carro de golosinas"
        },
        {
            id: 7,
            url: "/decoracion.jpeg",
            alt: "Decoración de mesa"
        },
        {
            id: 8,
            url: "/decoracion2.jpeg",
            alt: "Decoración de pasillo"
        },
        {
            id: 9,
            url: "/decoracion3.jpeg",
            alt: "Decoración de mesa"
        },
        {
            id: 10,
            url: "/decoracion4.jpeg",
            alt: "Decoración de pasillo"
        },
        {
            id: 11,
            url: "/decoracion5.jpeg",
            alt: "Decoración de pasillo"
        },
        {
            id: 12,
            url: "/decoracion7.jpeg",
            alt: "Decoración de cielo"
        },
        {
            id: 13,
            url: "/decoracion8.jpeg",
            alt: "Decoración de cielo"
        },
        {
            id: 14,
            url: "/decoracion9.jpeg",
            alt: "Decoración de cielo"
        },
        {
            id: 15,
            url: "/decoracion10.jpeg",
            alt: "Decoración de sillas"
        },
        {
            id: 16,
            url: "/mesasAeropuerto.jpeg",
            alt: "Decoración de mesas"
        },
        {
            id: 17,
            url: "/decoracion12.jpeg",
            alt: "Decoración para foto"
        },
        {
            id: 18,
            url: "/decoracion15.jpeg",
            alt: "Decoración de pasillo"
        },
        {
            id: 19,
            url: "/decoracion17.jpeg",
            alt: "Decoración de pasillo"
        },
        {
            id: 20,
            url: "/mesaDecorada.jpeg",
            alt: "Mesa decorada"
        },
        {
            id: 21,
            url: "/mesaBoda.jpeg",
            alt: "Mesa decorada"
        },
        {
            id: 22,
            url: "/mesa XV.jpeg",
            alt: "Mesa decorada"
        },
        {
            id: 23,
            url: "/personalDecoracion2.jpeg",
            alt: "Adorno XV"
        },
        {
            id: 24,
            url: "/sesionFotos.jpeg",
            alt: "Sesion de fotos"
        },
        {
            id: 25,
            url: "/personalInvitados.jpeg",
            alt: "Clientes satisfechos"
        },
        {
            id: 26,
            url: "/decoracion11.jpeg",
            alt: "Decoración de pasillo"
        },
        {
            id: 27,
            url: "/evento.jpg",
            alt: "Clientes felices"
        },
        {
            id: 28,
            url: "/evento2.jpg",
            alt: "Sesion de fotos"
        },
        {
            id: 29,
            url: "/baileXV.jpeg",
            alt: "Baile del evento"
        },
        {
            id: 30,
            url: "/xv 2.jpeg",
            alt: "XV años"
        },
        {
            id: 31,
            url: "/maquillaje.jpg",
            alt: "Maquillaje y peinado profesional"
        },
        {
            id: 32,
            url: "/mesaXV 2.jpeg",
            alt: "Mesa de XV decorada"
        },
        {
            id: 33,
            url: "/ceremonia.jpeg",
            alt: "Organizacion de mesas"
        },
        {
            id: 34,
            url: "/maestraCeremonia.jpg",
            alt: "Maestra de ceremonia"
        },
        {
            id: 35,
            url: "/decoracionXV2.jpg",
            alt: "Decoración de XV años"
        },
        {
            id: 36,
            url: "/muebleDecorativo.jpeg",
            alt: "Decoración"
        },
        {
            id: 37,
            url: "/arregloFloralMesa.jpeg",
            alt: "Arreglo floral de mesa"
        },
        {
            id: 38,
            url: "/decoracionMesas2.jpeg",
            alt: "Decoración de mesas"
        },
        {
            id: 39,
            url: "/decoracionMesas.jpeg",
            alt: "Decoración de mesas"
        },
        {
            id: 40,
            url: "/arregloFloral.jpeg",
            alt: "Arreglo floral"
        },
        {
            id: 41,
            url: "/decoracionBoda2.jpeg",
            alt: "Decoración de boda"
        },
        {
            id: 42,
            url: "/decoracionBoda.jpeg",
            alt: "Decoración de boda"
        },
        {
            id: 43,
            url: "/parejaBoda.jpeg",
            alt: "Pareja en su boda"
        },
        {
            id: 44,
            url: "/decoracionMesa3.jpeg",
            alt: "Decoración de mesa"
        },
        {
            id: 45,
            url: "/decoracionMesa4.jpeg",
            alt: "Decoración de mesa"
        },
        {
            id: 46,
            url: "/decoracionMesa5.jpeg",
            alt: "Decoración de mesa"
        },
        {
            id: 47,
            url: "/decoracionMesa6.jpeg",
            alt: "Decoración de mesa"
        },
        {
            id: 48,
            url: "/adornoPrincipalBoda.jpeg",
            alt: "Decoración principal"
        },
        {
            id: 49,
            url: "/videoBoda.mp4",
            alt: "Video de boda"
        },
        {
            id: 50,
            url: "/arregloBoda3.jpeg",
            alt: "Arreglo de bienvenida"
        },
        {
            id: 51,
            url: "/arregloMesa.jpeg",
            alt: "Arreglo de mesa"
        },
        {
            id: 52,
            url: "/arregloBoda2.jpeg",
            alt: "Arreglo de bienvenida"
        },
        {
            id: 53,
            url: "/arregloBoda.jpeg",
            alt: "Arreglo de bienvenida"
        },
        {
            id: 54,
            url: "/equipoConPareja.jpeg",
            alt: "Equipo de Instantes con la pareja"
        },
        {
            id: 55,
            url: "/mesaNovios.jpeg",
            alt: "Mesa de los novios"
        },
        {
            id: 56,
            url: "/arregloTerraza.jpeg",
            alt: "Arreglo en una terraza"
        },
        {
            id: 57,
            url: "/arregloEntrada.jpeg",
            alt: "Arreglo de bienvenida"
        },
        {
            id: 58,
            url: "/decoracion18anos.jpeg",
            alt: "Decoración fiesta 18 años"
        },
        {
            id: 59,
            url: "/decoracionPostres.jpeg",
            alt: "Decoración de mesa de postres"
        },
        {
            id: 60,
            url: "/decoracion57anos.jpeg",
            alt: "Decoración fiesta 57 años"
        },
        {
            id: 61,
            url: "/decoracionMesa7.jpeg",
            alt: "Decoración de mesa"
        },
        {
            id: 61,
            url: "/decoracionMesa8.jpeg",
            alt: "Decoración de mesa"
        },
        {
            id: 63,
            url: "/decoracionMesa9.jpeg",
            alt: "Decoración de mesa"
        }
    ];

    return imagenes;
} 