import { Inter, Playfair_Display } from "next/font/google";

// Fuente Sans-Serif principal (Inter)
export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

// Fuente Display para títulos (Playfair Display)
export const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
});

// Exportar clases CSS para usar en el layout
export const fontVariables = `${inter.variable} ${playfair.variable}`;
