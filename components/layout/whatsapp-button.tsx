"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

interface WhatsAppButtonProps {
    phoneNumber: string; // Formato: 51999999999 (código país + número)
    message?: string;
    position?: "bottom-right" | "bottom-left";
}

export default function WhatsAppButton({
    phoneNumber,
    message = "¡Hola! Me interesa conocer más sobre sus productos premium.",
    position = "bottom-right",
}: WhatsAppButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    const positionClasses = {
        "bottom-right": "bottom-6 right-6 md:bottom-8 md:right-8",
        "bottom-left": "bottom-6 left-6 md:bottom-8 md:left-8",
    };

    return (
        <motion.div
            className={`fixed ${positionClasses[position]} z-50 group`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5,
            }}
        >
            {/* Tooltip */}
            <motion.div
                initial={{
                    opacity: 0,
                    x: position === "bottom-right" ? 20 : -20,
                }}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : position === "bottom-right" ? 20 : -20,
                }}
                transition={{ duration: 0.2 }}
                className={`absolute ${
                    position === "bottom-right" ? "right-20" : "left-20"
                } top-1/2 -translate-y-1/2 pointer-events-none`}
            >
                <div className="bg-neutral-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
                    ¿Necesitas ayuda?
                    <div
                        className={`absolute top-1/2 -translate-y-1/2 ${
                            position === "bottom-right" ? "-right-1" : "-left-1"
                        } w-2 h-2 bg-neutral-900 rotate-45`}
                    />
                </div>
            </motion.div>

            {/* Ripple Effect */}
            <motion.div
                className="absolute inset-0 rounded-full bg-green-500"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Main Button */}
            <motion.button
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-premium flex items-center justify-center text-white hover:shadow-2xl transition-shadow duration-300"
                aria-label="Contactar por WhatsApp"
            >
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 relative z-10" />

                {/* Notification badge (opcional) */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
                >
                    <span className="text-white text-xs font-bold">1</span>
                </motion.div>
            </motion.button>

            {/* Pulse animation on hover */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 rounded-full bg-green-500"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                />
            )}
        </motion.div>
    );
}
