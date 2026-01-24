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
            id: 62,
            url: "/decoracionMesa8.jpeg",
            alt: "Decoración de mesa"
        },
        {
            id: 63,
            url: "/decoracionMesa9.jpeg",
            alt: "Decoración de mesa"
        },
        {
            id: 64,
            url: "/festejadaXV.jpeg",
            alt: "Festejada en su evento"
        },
        {
            id: 65,
            url: "/baileFestejadaXV.jpeg",
            alt: "Baile de la festejada"
        },
        {
            id: 66,
            url: "/balsXV2.jpeg",
            alt: "Baile de la festejada"
        },
        {
            id: 67,
            url: "/adornoXV.jpeg",
            alt: "Adorno de XV años"
        },
        {
            id: 68,
            url: "/equipoAdornoXV.jpeg",
            alt: "Equipo de Instantes con adorno de XV años"
        },
        {
            id: 69,
            url: "/videoXV.mp4",
            alt: "Video de XV años"
        },
        {
            id: 70,
            url: "/adornoXV2.jpeg",
            alt: "Adorno de XV años"
        },
        {
            id: 71,
            url: "/adornoMesaPrincipal.jpeg",
            alt: "Adorno de mesa principal"
        },
        {
            id: 72,
            url: "/adornoVistaMar.jpeg",
            alt: "Adorno con vista al mar"
        },
        {
            id: 73,
            url: "/adornoVistaMar2.jpeg",
            alt: "Adorno con vista al mar"
        },
        {
            id: 74,
            url: "/equipoTrabajando.jpeg",
            alt: "Equipo de Instantes trabajando"
        },
        {
            id: 75,
            url: "/adornoMesa.jpeg",
            alt: "Adorno de mesa principal"
        },
        {
            id: 76,
            url: "/adornoMesa2.jpeg",
            alt: "Adorno de mesa principal"
        },
        {
            id: 77,
            url: "/adornoFiesta.jpeg",
            alt: "Decoraciión bienvenida de boda"
        },
        {
            id: 78,
            url: "/festejadosYAdorno.jpeg",
            alt: "Festejados con adorno"
        },
        {
            id: 79,
            url: '/instantesHux (1).jpeg',
            alt: 'Decoración Navideña'
        },
        {
            id: 80,
            url: '/instantesHux (2).jpeg',
            alt: 'Decoración Navideña'
        },
        {
            id: 81,
            url: '/instantesHux (3).jpeg',
            alt: 'Decoración Navideña'
        },
        {
            id: 82,
            url: '/instantesHux (4).jpeg',
            alt: 'Decoración Posada'
        },
        {
            id: 83,
            url: '/instantesHux (5).jpeg',
            alt: 'Convivio Posada'
        },
        {
            id: 84,
            url: '/instantesHux (6).jpeg',
            alt: 'Carro de comida'
        },
        {
            id: 85,
            url: '/instantesHux (7).jpeg',
            alt: 'Posada Instantes'
        },
        {
            id: 86,
            url: '/instantesHux (8).jpeg',
            alt: 'Trompo de comida'
        },
        {
            id: 87,
            url: '/instantesHux (9).jpeg',
            alt: 'Decoración Navideña'
        },
        {
            id: 88,
            url: '/instantesHux (10).jpeg',
            alt: 'Decoración Navideña'
        },
        {
            id: 89,
            url: '/instantesHux (11).jpeg',
            alt: 'Decoración Navideña'
        },
        {
            id: 90,
            url: '/instantesHux (12).jpeg',
            alt: 'Fotografia y fotos instantaneas'
        },
        {
            id: 91,
            url: '/instantesHux (13).jpeg',
            alt: 'Fotografia y fotos instantaneas'
        },
        {
            id: 92,
            url: '/instantesHux (14).jpeg',
            alt: 'Parrillada'
        },
        {
            id: 93,
            url: '/instantesHux (15).jpeg',
            alt: 'Parrillada'
        },
        {
            id: 94,
            url: '/instantesHux (16).jpeg',
            alt: 'Parrillada'
        },
        {
            id: 95,
            url: '/instantesHux (16).jpeg',
            alt: 'Decoración Navideña'
        },
        {
            id: 96,
            url: '/instantesHux (17).jpeg',
            alt: 'Decoración Navideña'
        },
        {
            id: 97,
            url: '/instantesHux (18).jpeg',
            alt: 'Decoración Navideña'
        },
        {
            id: 98,
            url: '/instantesHux (19).jpeg',
            alt: 'Menú Navideño'
        },
        {
            id: 99,
            url: '/instantesHux (20).jpeg',
            alt: 'Decoración Navideña'
        },
        {
            id: 100,
            url: '/instantesHux (21).jpeg',
            alt: 'Animación de eventos'
        },
        {
            id: 101,
            url: '/instantesHux (22).jpeg',
            alt: 'Fotografia de bodas'
        },
        {
            id: 102,
            url: '/instantesHux (23).jpeg',
            alt: 'Fotografia de bodas'
        },
        {
            id: 103,
            url: '/instantesHux (24).jpeg',
            alt: 'Fotografia de bodas'
        },
        {
            id: 104,
            url: '/instantesHux (25).jpeg',
            alt: 'Fotografia de bodas'
        },
        {
            id: 105,
            url: '/instantesHux (26).jpeg',
            alt: 'Fotografia de bodas'
        },
        {
            id: 106,
            url: '/videoInstantesHux (1).mp4',
            alt: 'Posada Instantes Hux'
        },
        {
            id: 107,
            url: '/videoInstantesHux (2).mp4',
            alt: 'Animación de Evento'
        },
        {
            id: 108,
            url: '/videoInstantesHux (3).mp4',
            alt: 'Entrada de los novios'
        },
        {
            id: 109,
            url: '/videoInstantesHux (4).mp4',
            alt: 'Primer baile de los novios'
        },
        {
            id: 110,
            url: '/videoInstantesHux (5).mp4',
            alt: 'Baile XV años'
        },
        {
            id: 111,
            url: '/videoInstantesHux (6).mp4',
            alt: 'Baile XV años'
        },
        {
            id: 112,
            url: '/videoInstantesHux (7).mp4',
            alt: 'Baile XV años'
        },
        {
            id: 113,
            url: '/instantesHux (27).jpeg',
            alt: 'XVañera'
        },
        {
            id: 114,
            url: '/instantesHux (28).jpeg',
            alt: 'XVañera en su evento'
        },
        {
            id: 115,
            url: '/videoInstantesHux.mp4',
            alt: 'Coreografia XV años'
        }
    ];

    return imagenes;
} 