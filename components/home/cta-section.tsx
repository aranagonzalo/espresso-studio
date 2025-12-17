"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section className="section-spacing bg-neutral-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(45deg, #a67c52 25%, transparent 25%, transparent 75%, #a67c52 75%, #a67c52), linear-gradient(45deg, #a67c52 25%, transparent 25%, transparent 75%, #a67c52 75%, #a67c52)",
                        backgroundSize: "60px 60px",
                        backgroundPosition: "0 0, 30px 30px",
                    }}
                />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600 rounded-full blur-3xl opacity-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-10" />

            <div className="container-custom relative">
                <div className="max-w-4xl mx-auto">
                    {/* Main CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <div className="w-20 h-20 mx-auto rounded-full bg-primary-500/20 flex items-center justify-center backdrop-blur-sm border border-primary-500/30">
                                <MessageCircle className="w-10 h-10 text-primary-400" />
                            </div>
                        </motion.div>

                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            ¿Listo para Mejorar Tu{" "}
                            <span className="text-gradient-premium bg-gradient-to-r from-primary-400 to-primary-600">
                                Experiencia de Café?
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Contáctanos y descubre cómo nuestras máquinas
                            premium pueden transformar tu rutina diaria en un
                            momento extraordinario.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary-600 hover:bg-primary-700 text-white text-lg px-8 py-6 shadow-premium hover:shadow-2xl transition-all group"
                            >
                                <Link href="/contacto">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Contáctanos
                                    <motion.div
                                        className="inline-block ml-2"
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.div>
                                </Link>
                            </Button>

                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-8 py-6"
                            >
                                <Link href="/maquinas">
                                    Ver Catálogo Completo
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {/* WhatsApp Card */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-green-700 p-8 hover:shadow-premium transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                            <div className="relative">
                                <MessageCircle className="w-10 h-10 text-white mb-4" />
                                <h3 className="font-display text-2xl font-bold text-white mb-2">
                                    Chat en WhatsApp
                                </h3>
                                <p className="text-green-100 mb-4">
                                    Respuesta inmediata a tus consultas
                                </p>
                                <span className="text-white font-semibold group-hover:underline">
                                    +51 999 999 999
                                </span>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-8 hover:shadow-premium transition-all duration-300">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                            <div className="relative">
                                <Mail className="w-10 h-10 text-white mb-4" />
                                <h3 className="font-display text-2xl font-bold text-white mb-2">
                                    Escríbenos
                                </h3>
                                <p className="text-primary-100 mb-4">
                                    Información detallada por correo
                                </p>
                                <span className="text-white font-semibold group-hover:underline">
                                    info@premiumcoffee.pe
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
