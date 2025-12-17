"use client";

import { motion } from "framer-motion";
import { Award, Clock, Headphones, Heart, Shield, Truck } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Garantía Premium",
        description:
            "Todos nuestros productos cuentan con garantía oficial del fabricante y soporte técnico especializado.",
    },
    {
        icon: Truck,
        title: "Envío Seguro",
        description:
            "Entrega garantizada con embalaje especializado para proteger tu inversión en todo momento.",
    },
    {
        icon: Headphones,
        title: "Asesoría Experta",
        description:
            "Nuestros especialistas te guían en la elección perfecta según tus necesidades y preferencias.",
    },
    {
        icon: Award,
        title: "Calidad Certificada",
        description:
            "Productos auténticos directamente de fabricantes reconocidos mundialmente por su excelencia.",
    },
    {
        icon: Clock,
        title: "Servicio Post-Venta",
        description:
            "Mantenimiento, reparaciones y repuestos originales para mantener tu equipo en óptimas condiciones.",
    },
    {
        icon: Heart,
        title: "Pasión por el Café",
        description:
            "Compartimos tu amor por el café de calidad y te ayudamos a perfeccionar tu experiencia diaria.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function FeaturesSection() {
    return (
        <section className="section-spacing bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 2px 2px, #a67c52 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="container-custom relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                        ¿Por Qué Elegirnos?
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
                        Más que vender equipos, ofrecemos una experiencia
                        completa para los amantes del café de especialidad.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-premium transition-all duration-500 h-full border border-neutral-100 hover:border-primary-200">
                                    {/* Icon Container */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                                    >
                                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Decorative Element */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 p-8 md:p-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl shadow-premium"
                >
                    {[
                        { value: "100%", label: "Productos Auténticos" },
                        { value: "5★", label: "Calificación Promedio" },
                        { value: "24/7", label: "Soporte Disponible" },
                        { value: "500+", label: "Clientes Satisfechos" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center text-white">
                            <motion.p
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    type: "spring",
                                }}
                                className="font-display text-4xl md:text-5xl font-bold mb-2"
                            >
                                {stat.value}
                            </motion.p>
                            <p className="text-primary-100 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
