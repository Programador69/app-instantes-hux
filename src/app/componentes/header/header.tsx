"use client";
import "./header.css";
import { useEffect } from "react";
import Image from "next/image";
import { UseMarcarRuta } from "../../hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const ruta = usePathname();

    useEffect(() => {
        UseMarcarRuta(ruta);
    }, [ruta]);

    return (
            <header>
                <Link href="/" rel="noreferrer">
                    <figure>
                        <Image src="/logo.png" alt="Logo Instantes Hux" width={100} height={100} />
                    </figure>
                </Link>
                <nav>
                    <ul>
                        <li><Link href="/servicios" rel="noreferrer">Servicios</Link></li>
                        <li><Link href="/nosotros" rel="noreferrer">Nosotros</Link></li>
                        <li><Link href="/resenas" rel="noreferrer">Reseñas</Link></li>
                    </ul>
                </nav>
            </header>
    )
}