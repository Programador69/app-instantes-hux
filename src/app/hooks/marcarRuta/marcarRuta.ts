export const UseMarcarRuta = (ruta: string) => {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        if (link.getAttribute("href") === ruta) {
            link.classList.add("activo");
        } else {
            link.classList.remove("activo");
        }
    });
}