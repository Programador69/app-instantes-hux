import "./contacto.css";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram, IoLocation } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export function Contacto() {
    return (
        <article className="articleContacto">
            <h3>Contacto</h3>
            <ul>
                <li><a href="https://wa.me/529581035264" target="_BLANK" rel="noreferrer"><FaWhatsapp /> WhatsApp</a></li>
                <li><a href="https://www.instagram.com/instantes_hux/" target="_BLANK" rel="noreferrer"><IoLogoInstagram /> instantes_hux</a></li>
                <li><a href="https://www.facebook.com/share/165RVUvdXA/" target="_BLANK" rel="noreferrer"><CiFacebook /> Instantes</a></li>
                <li><a href="tel:+529581035264" target="_BLANK" rel="noreferrer"><MdOutlinePhoneInTalk /> 958 103 5264</a></li>
                <li><a href="https://maps.app.goo.gl/r8rSkYoTqUn96UKd8" target="_BLANK" rel="noreferrer"><IoLocation /> Dirección</a></li>
            </ul>
        </article>
    )
}