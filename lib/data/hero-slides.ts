import { HeroSlide } from "@/lib/types/products";

export const heroSlides: HeroSlide[] = [
    {
        id: "slide-1",
        title: "Rocket Appartamento",
        subtitle: "Serie Premium",
        description:
            "Experimenta la perfección italiana en cada espresso. Diseño icónico con grupo E61 para una estabilidad térmica incomparable.",
        image: "https://casacafeina.com/cdn/shop/files/Appartamento_Front_3_4_Copper_1024x1024@2x.png",
        cta: {
            text: "Explorar Colección",
            href: "/maquinas",
        },
        secondaryCta: {
            text: "Ver Detalles",
            href: "/maquinas/rocket-appartamento-inox-white-copper",
        },
    },
    {
        id: "slide-2",
        title: "Appartamento TCA",
        subtitle: "La Evolución",
        description:
            "La nueva generación con características mejoradas. Rendimiento superior y estética moderna para los más exigentes.",
        image: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s1_CMF_02_0001_1024x1024@2x.png",
        cta: {
            text: "Descubre TCA",
            href: "/maquinas/rocket-appartamento-tca-inox-white-copper",
        },
        secondaryCta: {
            text: "Comparar Modelos",
            href: "/maquinas",
        },
    },
    {
        id: "slide-3",
        title: "Diseño Black Edition",
        subtitle: "Elegancia Absoluta",
        description:
            "Acabados en negro mate con detalles en cobre. Para quienes buscan un estilo audaz y sofisticado en su cocina.",
        image: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s1_CMF_05_0001_1024x1024@2x.png",
        cta: {
            text: "Ver Black Edition",
            href: "/maquinas/rocket-appartamento-tca-black",
        },
        secondaryCta: {
            text: "Contáctanos",
            href: "/contacto",
        },
    },
];
