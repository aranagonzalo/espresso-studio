// Categorías de Productos
export enum ProductCategory {
    ESPRESSO_MACHINES = "espresso-machines",
    COFFEE_MAKERS = "coffee-makers",
    GRINDERS = "grinders",
}

// Subcategorías de Máquinas de Café
export enum EspressoMachineType {
    MANUAL = "manual",
    SEMI_AUTOMATIC = "semi-automatic",
    AUTOMATIC = "automatic",
    SUPER_AUTOMATIC = "super-automatic",
}

// Subcategorías de Grinders
export enum GrinderType {
    MANUAL = "manual",
    ELECTRIC = "electric",
    COMMERCIAL = "commercial",
}

// Características del Producto
export interface ProductFeature {
    icon?: string; // Nombre del icono de Lucide
    title: string;
    description: string;
}

// Especificaciones Técnicas
export interface TechnicalSpec {
    label: string;
    value: string;
    unit?: string;
}

// Imagen del Producto
export interface ProductImage {
    url: string;
    alt: string;
    isPrimary?: boolean;
}

// Producto Base
export interface Product {
    id: string;
    slug: string;
    name: string;
    brand: string;
    category: ProductCategory;
    subcategory?: EspressoMachineType | GrinderType;

    // Información General
    tagline?: string;
    description: string;
    shortDescription?: string;

    // Precio
    price: number;
    currency: string;
    priceLabel?: string; // Ej: "Desde", "A partir de"

    // Imágenes
    images: ProductImage[];
    thumbnail?: string;

    // Características
    features: ProductFeature[];

    // Especificaciones Técnicas
    technicalSpecs: TechnicalSpec[];

    // Metadata
    isNew?: boolean;
    isFeatured?: boolean;
    isPremium?: boolean;
    inStock?: boolean;

    // SEO
    metaDescription?: string;
    keywords?: string[];

    // Fechas
    createdAt: Date;
    updatedAt: Date;
}

// Máquina de Espresso (extiende Product)
export interface EspressoMachine extends Product {
    category: ProductCategory.ESPRESSO_MACHINES;
    subcategory: EspressoMachineType;

    // Especificaciones específicas
    boilerType?: "single" | "dual" | "heat-exchanger";
    groupHeads?: number;
    waterTankCapacity?: number;
    pumpPressure?: number;
    powerWattage?: number;

    // Características de Espresso
    hasProgrammableShots?: boolean;
    hasPIDControl?: boolean;
    hasPreInfusion?: boolean;
    hasSteamWand?: boolean;
    hasHotWater?: boolean;
}

// Grinder (extiende Product)
export interface Grinder extends Product {
    category: ProductCategory.GRINDERS;
    subcategory: GrinderType;

    // Especificaciones específicas
    burrType?: "flat" | "conical" | "ceramic";
    burrSize?: number; // en mm
    hopperCapacity?: number; // en gramos
    grindSettings?: number;
    powerWattage?: number;

    // Características de Grinder
    hasTimerDosing?: boolean;
    hasWeightDosing?: boolean;
    hasSteplessGrind?: boolean;
    isQuiet?: boolean;
}

// Tipos de Unión para facilitar manejo
export type AnyProduct = EspressoMachine | Grinder;

// Filtros para Productos
export interface ProductFilters {
    category?: ProductCategory;
    subcategory?: EspressoMachineType | GrinderType;
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    isNew?: boolean;
    isFeatured?: boolean;
    inStock?: boolean;
}

// Resultado de Búsqueda/Filtrado
export interface ProductSearchResult {
    products: AnyProduct[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}

// Categoría para UI
export interface CategoryCard {
    id: ProductCategory;
    name: string;
    description: string;
    image: string;
    href: string;
    productCount?: number;
}

// Hero Slider Item
export interface HeroSlide {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image: string;
    cta?: {
        text: string;
        href: string;
    };
    secondaryCta?: {
        text: string;
        href: string;
    };
}
