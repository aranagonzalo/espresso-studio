import { CategoryCard, ProductCategory } from "@/lib/types/products";

export const categories: CategoryCard[] = [
    {
        id: ProductCategory.ESPRESSO_MACHINES,
        name: "Máquinas de Espresso",
        description:
            "Máquinas premium con tecnología italiana. Desde semi-automáticas hasta super-automáticas.",
        image: "https://casacafeina.com/cdn/shop/files/Appartamento_Front_3_4_Copper_1024x1024@2x.png",
        href: "/maquinas",
        productCount: 5,
    },
    {
        id: ProductCategory.GRINDERS,
        name: "Grinders Premium",
        description:
            "Molinos de precisión para un molido perfecto. Manuales, eléctricos y comerciales.",
        image: "https://images.unsplash.com/photo-1587049016823-69c1c8f44d02?w=800&q=80",
        href: "/grinders",
        productCount: 0, // Por actualizar cuando agregues grinders
    },
];
