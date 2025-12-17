"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import ProductCard from "@/components/products/product-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/data/products";

export default function FeaturedProducts() {
    const featuredProducts = getFeaturedProducts();

    return (
        <section className="section-spacing bg-neutral-50">
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
                        Selección Premium
                    </Badge>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                        Productos Destacados
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
                        Descubre nuestra colección exclusiva de máquinas Rocket
                        Espresso. Perfección italiana en cada detalle.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                        />
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="bg-white hover:bg-primary-50 border-2 border-primary-300 text-primary-700 hover:text-primary-800 px-8"
                    >
                        <Link href="/maquinas" className="group">
                            Ver Toda la Colección
                            <motion.div
                                className="inline-block ml-2"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
