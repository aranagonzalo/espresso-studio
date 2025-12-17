import type { Metadata } from "next";
import "./globals.css";

import { fontVariables } from "./fonts";

export const metadata: Metadata = {
    title: {
        default: "Premium Coffee | Máquinas de Espresso de Lujo",
        template: "%s | Premium Coffee",
    },
    description:
        "Descubre nuestra selección exclusiva de máquinas de espresso premium y grinders de alta gama. Productos luxury para verdaderos amantes del café.",
    keywords: [
        "máquinas de café",
        "espresso premium",
        "rocket espresso",
        "grinders",
        "café de especialidad",
        "lima",
        "perú",
    ],
    authors: [{ name: "Premium Coffee" }],
    openGraph: {
        type: "website",
        locale: "es_PE",
        url: "https://premiumcoffee.pe",
        siteName: "Premium Coffee",
        title: "Premium Coffee | Máquinas de Espresso de Lujo",
        description:
            "Máquinas de espresso y grinders premium para verdaderos amantes del café.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={fontVariables}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
