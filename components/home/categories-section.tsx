"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/data/categories";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function CategoriesSection() {
    return (
        <section className="section-spacing bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <Badge
                        variant="outline"
                        className="mb-4 text-primary-600 border-primary-300"
                    >
                        Explora Nuestras Categorías
                    </Badge>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                        Encuentra Tu Equipo Perfecto
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                        Seleccionamos los mejores equipos premium del mercado
                        para llevar tu experiencia de café al siguiente nivel.
                    </p>
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-8 lg:gap-12"
                >
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={itemVariants}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href={category.href} className="group block">
                                <div className="relative overflow-hidden rounded-2xl bg-neutral-50 hover:shadow-premium transition-all duration-500">
                                    {/* Image Container */}
                                    <div className="relative h-80 md:h-96 bg-gradient-to-br from-primary-50 to-neutral-100 overflow-hidden">
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-5">
                                            <div
                                                className="absolute inset-0"
                                                style={{
                                                    backgroundImage:
                                                        "radial-gradient(circle, #000 1px, transparent 1px)",
                                                    backgroundSize: "20px 20px",
                                                }}
                                            />
                                        </div>

                                        {/* Product Image */}
                                        <div className="relative w-full h-full flex items-center justify-center p-8">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.4 }}
                                                className="relative w-full h-full"
                                            >
                                                <Image
                                                    src={category.image}
                                                    alt={category.name}
                                                    fill
                                                    className="object-contain drop-shadow-2xl"
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Product Count Badge */}
                                        {category.productCount !== undefined &&
                                            category.productCount > 0 && (
                                                <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center gap-2">
                                                    <Package className="w-4 h-4 text-primary-600" />
                                                    <span className="text-sm font-semibold text-neutral-900">
                                                        {category.productCount}{" "}
                                                        {category.productCount ===
                                                        1
                                                            ? "Producto"
                                                            : "Productos"}
                                                    </span>
                                                </div>
                                            )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-neutral-600 mb-6 leading-relaxed">
                                            {category.description}
                                        </p>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all">
                                            <span>Explorar Categoría</span>
                                            <motion.div
                                                animate={{ x: [0, 4, 0] }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                }}
                                            >
                                                <ArrowRight className="w-5 h-5" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Hover Effect Border */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
