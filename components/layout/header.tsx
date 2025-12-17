"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Coffee, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Máquinas", href: "/maquinas" },
    { name: "Grinders", href: "/grinders" },
    { name: "Contacto", href: "/contacto" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerrar menú móvil al cambiar de tamaño
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md shadow-md"
                        : "bg-transparent"
                }`}
            >
                <nav className="container-custom">
                    <div className="flex items-center justify-between h-20 md:h-24">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors ${
                                    isScrolled
                                        ? "bg-primary-500 text-white"
                                        : "bg-white/90 text-primary-600"
                                }`}
                            >
                                <Coffee className="w-6 h-6 md:w-7 md:h-7" />
                            </motion.div>
                            <div className="flex flex-col">
                                <span
                                    className={`font-display font-bold text-xl md:text-2xl transition-colors ${
                                        isScrolled
                                            ? "text-neutral-900"
                                            : "text-white"
                                    }`}
                                >
                                    Premium Coffee
                                </span>
                                <span
                                    className={`text-xs tracking-wider transition-colors ${
                                        isScrolled
                                            ? "text-neutral-600"
                                            : "text-white/80"
                                    }`}
                                >
                                    LUXURY MACHINES
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative group"
                                >
                                    <span
                                        className={`text-base font-medium transition-colors ${
                                            isScrolled
                                                ? "text-neutral-700 hover:text-primary-600"
                                                : "text-white hover:text-primary-200"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                    <motion.span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 ${
                                            !isScrolled && "bg-white"
                                        }`}
                                        initial={{ width: 0 }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button Desktop */}
                        <div className="hidden md:block">
                            <Button
                                asChild
                                className={`transition-all duration-300 ${
                                    isScrolled
                                        ? "bg-primary-600 hover:bg-primary-700 text-white"
                                        : "bg-white hover:bg-white/90 text-primary-600"
                                }`}
                            >
                                <Link href="/contacto">Contáctanos</Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className={`md:hidden p-2 rounded-lg transition-colors ${
                                isScrolled
                                    ? "text-neutral-900 hover:bg-neutral-100"
                                    : "text-white hover:bg-white/10"
                            }`}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 200,
                            }}
                            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white z-40 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                                            <Coffee className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="font-display font-bold text-lg text-neutral-900">
                                            Premium Coffee
                                        </span>
                                    </div>
                                    <button
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className="p-2 rounded-lg text-neutral-600 hover:bg-neutral-100"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Mobile Navigation Links */}
                                <nav className="flex-1 overflow-y-auto p-6">
                                    <ul className="space-y-2">
                                        {navigation.map((item, index) => (
                                            <motion.li
                                                key={item.name}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() =>
                                                        setIsMobileMenuOpen(
                                                            false
                                                        )
                                                    }
                                                    className="block px-4 py-3 text-lg font-medium text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </nav>

                                {/* Mobile CTA */}
                                <div className="p-6 border-t border-neutral-200">
                                    <Button
                                        asChild
                                        className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                                        size="lg"
                                    >
                                        <Link
                                            href="/contacto"
                                            onClick={() =>
                                                setIsMobileMenuOpen(false)
                                            }
                                        >
                                            Contáctanos
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Prevent body scroll when mobile menu is open */}
            {isMobileMenuOpen && (
                <style jsx global>{`
                    body {
                        overflow: hidden;
                    }
                `}</style>
            )}
        </>
    );
}
