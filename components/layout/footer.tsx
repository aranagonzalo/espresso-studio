"use client";

import { motion } from "framer-motion";
import {
    Coffee,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
    productos: [
        { name: "Máquinas de Espresso", href: "/maquinas" },
        { name: "Grinders Premium", href: "/grinders" },
        { name: "Productos Destacados", href: "/#featured" },
    ],
    empresa: [
        { name: "Sobre Nosotros", href: "/sobre-nosotros" },
        { name: "Contacto", href: "/contacto" },
        { name: "Blog", href: "/blog" },
    ],
    soporte: [
        { name: "Preguntas Frecuentes", href: "/faq" },
        { name: "Garantía", href: "/garantia" },
        { name: "Envíos", href: "/envios" },
    ],
};

const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

const contactInfo = [
    { icon: Phone, text: "+51 999 999 999", href: "tel:+51999999999" },
    {
        icon: Mail,
        text: "info@premiumcoffee.pe",
        href: "mailto:info@premiumcoffee.pe",
    },
    { icon: MapPin, text: "Lima, Perú", href: "#" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-neutral-300">
            {/* Main Footer Content */}
            <div className="container-custom py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 group mb-6"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center"
                            >
                                <Coffee className="w-7 h-7 text-white" />
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-2xl text-white">
                                    Premium Coffee
                                </span>
                                <span className="text-xs tracking-wider text-primary-400">
                                    LUXURY MACHINES
                                </span>
                            </div>
                        </Link>

                        <p className="text-neutral-400 mb-6 max-w-sm leading-relaxed">
                            Ofrecemos las máquinas de espresso y grinders más
                            exclusivos del mercado. Calidad premium para
                            verdaderos amantes del café.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h3 className="font-display font-semibold text-white text-lg mb-4">
                            Productos
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.productos.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display font-semibold text-white text-lg mb-4">
                            Empresa
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display font-semibold text-white text-lg mb-4">
                            Soporte
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.soporte.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-12 pt-12 border-t border-neutral-800">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span>{info.text}</span>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
                        <p>
                            © {currentYear} Premium Coffee. Todos los derechos
                            reservados.
                        </p>
                        <div className="flex gap-6">
                            <Link
                                href="/privacidad"
                                className="hover:text-primary-400 transition-colors duration-200"
                            >
                                Política de Privacidad
                            </Link>
                            <Link
                                href="/terminos"
                                className="hover:text-primary-400 transition-colors duration-200"
                            >
                                Términos y Condiciones
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
