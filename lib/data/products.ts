import {
    EspressoMachine,
    EspressoMachineType,
    ProductCategory,
} from "@/lib/types/products";

// Productos Rocket Espresso Appartamento
export const products: EspressoMachine[] = [
    {
        id: "rocket-appartamento-inox-white-copper",
        slug: "rocket-appartamento-inox-white-copper",
        name: "Rocket Appartamento Serie Inox White/Copper",
        brand: "Rocket Espresso",
        category: ProductCategory.ESPRESSO_MACHINES,
        subcategory: EspressoMachineType.SEMI_AUTOMATIC,

        tagline: "Elegancia italiana en tu cocina",
        description:
            "Appartamento es una máquina de espresso compacta diseñada con mucho estilo y elegancia para lucirse en tu casa. Los ingenieros de Rocket optimizaron el chasis y el diseño de los componentes internos sin comprometer la calidad y las características que esperas de Rocket Espresso. Su sistema de erogación es a través de un grupo E61 el cual garantiza una estabilidad térmica sin precedentes y está fabricada en acero inoxidable tipo espejo.",
        shortDescription:
            "Máquina de espresso compacta con grupo E61 y acabado en acero inoxidable con detalles en cobre.",

        price: 9200,
        currency: "PEN",
        priceLabel: "Oferta",

        images: [
            {
                url: "https://casacafeina.com/cdn/shop/files/Appartamento_Front_3_4_Copper_1024x1024@2x.png",
                alt: "Rocket Appartamento Copper - Vista frontal",
                isPrimary: true,
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/Appartamento_Side_Copper_1024x1024@2x.png",
                alt: "Rocket Appartamento Copper - Vista lateral",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/Appartamento_Front_3_4_White_1024x1024@2x.png",
                alt: "Rocket Appartamento White - Vista frontal",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/Appartamento_Rear_3_4_White_1024x1024@2x.png",
                alt: "Rocket Appartamento White - Vista posterior",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/Appartamento_Side_White_1024x1024@2x.png",
                alt: "Rocket Appartamento White - Vista lateral",
            },
        ],

        features: [
            {
                icon: "Flame",
                title: "Grupo E61",
                description:
                    "Sistema de erogación con estabilidad térmica superior",
            },
            {
                icon: "Droplets",
                title: "Caldera de 1.8 L",
                description: "Capacidad ideal para uso doméstico continuo",
            },
            {
                icon: "Container",
                title: "Tanque de 2.5 L",
                description: "Depósito de agua extraíble para fácil llenado",
            },
            {
                icon: "Zap",
                title: "Bomba Vibradora",
                description: "Presión constante para extracciones perfectas",
            },
            {
                icon: "Award",
                title: "Fabricado en Italia",
                description: "Calidad y artesanía italiana",
            },
        ],

        technicalSpecs: [
            { label: "Capacidad de caldera", value: "1.8", unit: "L" },
            { label: "Capacidad tanque agua", value: "2.5", unit: "L" },
            { label: "Tipo de bomba", value: "Vibradora" },
            { label: "Potencia", value: "1350", unit: "W" },
            { label: "Peso", value: "20", unit: "kg" },
            { label: "Material", value: "Acero inoxidable tipo espejo" },
            { label: "País de origen", value: "Italia" },
        ],

        boilerType: "single",
        groupHeads: 1,
        waterTankCapacity: 2.5,
        powerWattage: 1350,
        hasSteamWand: true,
        hasHotWater: true,

        isFeatured: true,
        isPremium: true,
        inStock: true,

        metaDescription:
            "Rocket Appartamento Serie Inox con acabados White/Copper. Máquina de espresso italiana premium con grupo E61.",
        keywords: [
            "rocket espresso",
            "appartamento",
            "máquina de café",
            "grupo e61",
            "espresso italiano",
        ],

        createdAt: new Date("2024-03-10"),
        updatedAt: new Date("2024-03-10"),
    },
    {
        id: "rocket-appartamento-black-copper",
        slug: "rocket-appartamento-black-copper",
        name: "Rocket Appartamento Serie Black White/Copper",
        brand: "Rocket Espresso",
        category: ProductCategory.ESPRESSO_MACHINES,
        subcategory: EspressoMachineType.SEMI_AUTOMATIC,

        tagline: "Diseño audaz y elegante",
        description:
            "Appartamento es una máquina de espresso compacta diseñada con mucho estilo y elegancia para lucirse en tu casa. Los ingenieros de Rocket optimizaron el chasis y el diseño de los componentes internos sin comprometer la calidad y las características que esperas de Rocket Espresso. Su sistema de erogación es a través de un grupo E61 el cual garantiza una estabilidad térmica sin precedentes y está fabricada en acero inoxidable con laterales en negro mate y círculos en cobre.",
        shortDescription:
            "Máquina de espresso con acabado negro mate, detalles en cobre y grupo E61.",

        price: 9590,
        currency: "PEN",
        priceLabel: "Oferta",

        images: [
            {
                url: "https://casacafeina.com/cdn/shop/files/APPARTAMENTOnera-bianca_tre4_1024x1024@2x.jpg",
                alt: "Rocket Appartamento Black White - Vista frontal",
                isPrimary: true,
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/APPARTAMENTO_coppia_1024x1024@2x.jpg",
                alt: "Rocket Appartamento - Par de máquinas",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/APPARTAMENTOnera-rame_tre4_1024x1024@2x.jpg",
                alt: "Rocket Appartamento Copper - Vista frontal",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/APPARTAMENTOnera-rame_BACK_1024x1024@2x.jpg",
                alt: "Rocket Appartamento - Vista posterior",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/APPARTAMENTOnera-rame_SIDE_1024x1024@2x.jpg",
                alt: "Rocket Appartamento - Vista lateral",
            },
        ],

        features: [
            {
                icon: "Flame",
                title: "Grupo E61",
                description:
                    "Sistema de erogación con estabilidad térmica superior",
            },
            {
                icon: "Palette",
                title: "Acabado Black Mate",
                description: "Laterales en negro mate con círculos en cobre",
            },
            {
                icon: "Droplets",
                title: "Caldera de 1.8 L",
                description: "Capacidad ideal para uso doméstico continuo",
            },
            {
                icon: "Container",
                title: "Tanque de 2.5 L",
                description: "Depósito de agua extraíble para fácil llenado",
            },
            {
                icon: "Award",
                title: "Fabricado en Italia",
                description: "Calidad y artesanía italiana",
            },
        ],

        technicalSpecs: [
            { label: "Capacidad de caldera", value: "1.8", unit: "L" },
            { label: "Capacidad tanque agua", value: "2.5", unit: "L" },
            { label: "Tipo de bomba", value: "Vibradora" },
            { label: "Potencia", value: "1350", unit: "W" },
            { label: "Peso", value: "20", unit: "kg" },
            { label: "Material", value: "Acero inoxidable con negro mate" },
            { label: "País de origen", value: "Italia" },
        ],

        boilerType: "single",
        groupHeads: 1,
        waterTankCapacity: 2.5,
        powerWattage: 1350,
        hasSteamWand: true,
        hasHotWater: true,

        isFeatured: true,
        isPremium: true,
        inStock: true,

        metaDescription:
            "Rocket Appartamento Serie Black con acabados mate y detalles en cobre. Diseño audaz con grupo E61.",
        keywords: [
            "rocket espresso",
            "appartamento black",
            "máquina de café",
            "grupo e61",
            "negro mate",
        ],

        createdAt: new Date("2024-03-10"),
        updatedAt: new Date("2024-03-10"),
    },
    {
        id: "rocket-appartamento-tca-black-copper",
        slug: "rocket-appartamento-tca-black-copper",
        name: "Rocket Appartamento TCA CE Black/Copper",
        brand: "Rocket Espresso",
        category: ProductCategory.ESPRESSO_MACHINES,
        subcategory: EspressoMachineType.SEMI_AUTOMATIC,

        tagline: "La evolución del icónico Appartamento",
        description:
            "La Rocket Appartamento TCA es la evolución de nuestra icónica máquina de espresso Appartamento con una estética moderna y características que llevan el Appartamento a un nivel superior. Las funciones y mejoras recientemente desarrolladas de la máquina brindan una experiencia de café aún mejor en el hogar, elevando el punto de referencia de rendimiento en esta categoría de máquina de café expreso doméstica premium.",
        shortDescription:
            "Evolución del Appartamento con características mejoradas y estética moderna en negro mate.",

        price: 10300,
        currency: "PEN",
        priceLabel: "Oferta",

        images: [
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s1_CMF_04_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA Black Copper - Vista frontal",
                isPrimary: true,
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s2_CMF_04_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA - Vista lateral",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s3_CMF_04_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA - Vista posterior",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s12_CMF_04_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA - Detalle superior",
            },
        ],

        features: [
            {
                icon: "TrendingUp",
                title: "Versión TCA Mejorada",
                description:
                    "Evolución con características y rendimiento superiores",
            },
            {
                icon: "Flame",
                title: "Grupo E61",
                description:
                    "Sistema de erogación con estabilidad térmica superior",
            },
            {
                icon: "Settings",
                title: "Patas Regulables",
                description: "Ajuste perfecto en cualquier superficie",
            },
            {
                icon: "Droplets",
                title: "Caldera de 1.8 L",
                description: "Capacidad optimizada para uso doméstico",
            },
            {
                icon: "Award",
                title: "Fabricado en Italia",
                description: "Calidad y artesanía italiana premium",
            },
        ],

        technicalSpecs: [
            { label: "Capacidad de caldera", value: "1.8", unit: "L" },
            { label: "Capacidad tanque agua", value: "1.9", unit: "L" },
            { label: "Tipo de bomba", value: "Vibradora" },
            { label: "Potencia", value: "1200", unit: "W" },
            { label: "Peso", value: "22", unit: "kg" },
            { label: "Material", value: "Acero inoxidable" },
            { label: "Características", value: "Patas regulables" },
            { label: "País de origen", value: "Italia" },
        ],

        boilerType: "single",
        groupHeads: 1,
        waterTankCapacity: 1.9,
        powerWattage: 1200,
        hasSteamWand: true,
        hasHotWater: true,

        isNew: true,
        isFeatured: true,
        isPremium: true,
        inStock: true,

        metaDescription:
            "Rocket Appartamento TCA CE en Black/Copper. La evolución del icónico Appartamento con mejoras premium.",
        keywords: [
            "rocket espresso",
            "appartamento tca",
            "máquina de café",
            "grupo e61",
            "tca black",
        ],

        createdAt: new Date("2024-03-09"),
        updatedAt: new Date("2024-03-09"),
    },
    {
        id: "rocket-appartamento-tca-inox-white-copper",
        slug: "rocket-appartamento-tca-inox-white-copper",
        name: "Rocket Appartamento TCA CE Inox White/Copper",
        brand: "Rocket Espresso",
        category: ProductCategory.ESPRESSO_MACHINES,
        subcategory: EspressoMachineType.SEMI_AUTOMATIC,

        tagline: "Elegancia mejorada con versatilidad de colores",
        description:
            "La Rocket Appartamento TCA es la evolución de nuestra icónica máquina de espresso Appartamento con una estética moderna y características que llevan el Appartamento a un nivel superior. Las funciones y mejoras recientemente desarrolladas de la máquina brindan una experiencia de café aún mejor en el hogar, elevando el punto de referencia de rendimiento en esta categoría de máquina de café expreso doméstica premium.",
        shortDescription:
            "Versión TCA del Appartamento con opciones de color Inox, White y Copper.",

        price: 10100,
        currency: "PEN",
        priceLabel: "Oferta",

        images: [
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s1_CMF_02_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA Inox - Vista frontal",
                isPrimary: true,
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s1_CMF_01_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA White - Vista frontal",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s1_CMF_03_0001_3ae5332c-60e5-4dc5-9d60-582cf2e6f997_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA Copper - Vista frontal",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s2_CMF_02_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA - Vista lateral",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s3_CMF_02_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA - Vista posterior",
            },
        ],

        features: [
            {
                icon: "TrendingUp",
                title: "Versión TCA Mejorada",
                description:
                    "Evolución con características y rendimiento superiores",
            },
            {
                icon: "Palette",
                title: "Tres Acabados Premium",
                description: "Disponible en Inox, White y Copper",
            },
            {
                icon: "Flame",
                title: "Grupo E61",
                description:
                    "Sistema de erogación con estabilidad térmica superior",
            },
            {
                icon: "Settings",
                title: "Patas Regulables",
                description: "Ajuste perfecto en cualquier superficie",
            },
            {
                icon: "Award",
                title: "Fabricado en Italia",
                description: "Calidad y artesanía italiana premium",
            },
        ],

        technicalSpecs: [
            { label: "Capacidad de caldera", value: "1.8", unit: "L" },
            { label: "Capacidad tanque agua", value: "1.9", unit: "L" },
            { label: "Tipo de bomba", value: "Vibradora" },
            { label: "Potencia", value: "1200", unit: "W" },
            { label: "Peso", value: "22", unit: "kg" },
            { label: "Material", value: "Acero inoxidable" },
            { label: "Características", value: "Patas regulables" },
            { label: "País de origen", value: "Italia" },
        ],

        boilerType: "single",
        groupHeads: 1,
        waterTankCapacity: 1.9,
        powerWattage: 1200,
        hasSteamWand: true,
        hasHotWater: true,

        isNew: true,
        isFeatured: true,
        isPremium: true,
        inStock: true,

        metaDescription:
            "Rocket Appartamento TCA CE Inox con opciones White y Copper. Versión mejorada con múltiples acabados.",
        keywords: [
            "rocket espresso",
            "appartamento tca",
            "máquina de café",
            "grupo e61",
            "tca inox",
        ],

        createdAt: new Date("2024-03-10"),
        updatedAt: new Date("2024-03-10"),
    },
    {
        id: "rocket-appartamento-tca-black",
        slug: "rocket-appartamento-tca-black",
        name: "Rocket Appartamento TCA CE Black",
        brand: "Rocket Espresso",
        category: ProductCategory.ESPRESSO_MACHINES,
        subcategory: EspressoMachineType.SEMI_AUTOMATIC,

        tagline: "Sofisticación en negro absoluto",
        description:
            "La Rocket Appartamento TCA es la evolución de nuestra icónica máquina de espresso Appartamento con una estética moderna y características que llevan el Appartamento a un nivel superior. Las funciones y mejoras recientemente desarrolladas de la máquina brindan una experiencia de café aún mejor en el hogar, elevando el punto de referencia de rendimiento en esta categoría de máquina de café expreso doméstica premium.",
        shortDescription:
            "Appartamento TCA en acabado completamente negro para un estilo audaz y moderno.",

        price: 10400,
        currency: "PEN",
        priceLabel: "Oferta",

        images: [
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s1_CMF_05_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA Black - Vista frontal",
                isPrimary: true,
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s2_CMF_05_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA Black - Vista lateral",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s6_CMF_04_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA Black - Detalle",
            },
            {
                url: "https://casacafeina.com/cdn/shop/files/roc_appartamento_2023_s3_CMF_05_0001_1024x1024@2x.png",
                alt: "Rocket Appartamento TCA Black - Vista posterior",
            },
        ],

        features: [
            {
                icon: "TrendingUp",
                title: "Versión TCA Mejorada",
                description:
                    "Evolución con características y rendimiento superiores",
            },
            {
                icon: "Palette",
                title: "Acabado Black Premium",
                description: "Diseño completamente negro para un estilo audaz",
            },
            {
                icon: "Flame",
                title: "Grupo E61",
                description:
                    "Sistema de erogación con estabilidad térmica superior",
            },
            {
                icon: "Settings",
                title: "Patas Regulables",
                description: "Ajuste perfecto en cualquier superficie",
            },
            {
                icon: "Award",
                title: "Fabricado en Italia",
                description: "Calidad y artesanía italiana premium",
            },
        ],

        technicalSpecs: [
            { label: "Capacidad de caldera", value: "1.8", unit: "L" },
            { label: "Capacidad tanque agua", value: "1.9", unit: "L" },
            { label: "Tipo de bomba", value: "Vibradora" },
            { label: "Potencia", value: "1200", unit: "W" },
            { label: "Peso", value: "22", unit: "kg" },
            { label: "Material", value: "Acero inoxidable" },
            { label: "Características", value: "Patas regulables" },
            { label: "País de origen", value: "Italia" },
        ],

        boilerType: "single",
        groupHeads: 1,
        waterTankCapacity: 1.9,
        powerWattage: 1200,
        hasSteamWand: true,
        hasHotWater: true,

        isNew: true,
        isFeatured: true,
        isPremium: true,
        inStock: true,

        metaDescription:
            "Rocket Appartamento TCA CE Black. Versión premium en negro absoluto para amantes del diseño audaz.",
        keywords: [
            "rocket espresso",
            "appartamento tca",
            "máquina de café black",
            "grupo e61",
            "tca negro",
        ],

        createdAt: new Date("2024-03-10"),
        updatedAt: new Date("2024-03-10"),
    },
];

// Función helper para obtener productos destacados
export function getFeaturedProducts(): EspressoMachine[] {
    return products.filter((p) => p.isFeatured);
}

// Función helper para obtener productos nuevos
export function getNewProducts(): EspressoMachine[] {
    return products.filter((p) => p.isNew);
}

// Función helper para obtener producto por slug
export function getProductBySlug(slug: string): EspressoMachine | undefined {
    return products.find((p) => p.slug === slug);
}

// Función helper para obtener producto por ID
export function getProductById(id: string): EspressoMachine | undefined {
    return products.find((p) => p.id === id);
}
