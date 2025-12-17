"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { EspressoMachine } from "@/lib/types/products";

interface ProductCardProps {
    product: EspressoMachine;
    index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
    const primaryImage =
        product.images.find((img) => img.isPrimary) || product.images[0];
    const secondaryImage = product.images[1] || product.images[0];

    const formattedPrice = new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: product.currency,
        minimumFractionDigits: 0,
    }).format(product.price);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-premium transition-all duration-500 h-full flex flex-col">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {product.isNew && (
                        <Badge className="bg-primary-600 text-white hover:bg-primary-700">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Nuevo
                        </Badge>
                    )}
                    {product.isPremium && (
                        <Badge
                            variant="outline"
                            className="bg-white/90 backdrop-blur-sm border-primary-300 text-primary-700"
                        >
                            <Flame className="w-3 h-3 mr-1" />
                            Premium
                        </Badge>
                    )}
                </div>

                {/* Image Container with Hover Effect */}
                <Link
                    href={`/maquinas/${product.slug}`}
                    className="relative block"
                >
                    <div className="relative aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden">
                        {/* Primary Image */}
                        <motion.div
                            className="absolute inset-0 p-8"
                            initial={{ opacity: 1 }}
                            whileHover={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={primaryImage.url}
                                alt={primaryImage.alt}
                                fill
                                className="object-contain drop-shadow-xl"
                            />
                        </motion.div>

                        {/* Secondary Image (Hover) */}
                        <motion.div
                            className="absolute inset-0 p-8"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={secondaryImage.url}
                                alt={secondaryImage.alt}
                                fill
                                className="object-contain drop-shadow-xl"
                            />
                        </motion.div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    {/* Brand */}
                    <p className="text-sm font-medium text-primary-600 mb-2 tracking-wide">
                        {product.brand}
                    </p>

                    {/* Title */}
                    <Link href={`/maquinas/${product.slug}`}>
                        <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {product.name}
                        </h3>
                    </Link>

                    {/* Description */}
                    {product.shortDescription && (
                        <p className="text-neutral-600 text-sm mb-4 line-clamp-2 flex-1">
                            {product.shortDescription}
                        </p>
                    )}

                    {/* Features (Limited) */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 2).map((feature, idx) => (
                            <div
                                key={idx}
                                className="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded-md"
                            >
                                {feature.title}
                            </div>
                        ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                        <div>
                            {product.priceLabel && (
                                <p className="text-xs text-neutral-500 mb-1">
                                    {product.priceLabel}
                                </p>
                            )}
                            <p className="font-display text-2xl font-bold text-neutral-900">
                                {formattedPrice}
                            </p>
                        </div>

                        <Button
                            asChild
                            size="sm"
                            className="bg-primary-600 hover:bg-primary-700 text-white group/btn"
                        >
                            <Link href={`/maquinas/${product.slug}`}>
                                Ver Más
                                <motion.div
                                    className="inline-block ml-1"
                                    animate={{ x: [0, 3, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </motion.div>
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
        </motion.div>
    );
}
