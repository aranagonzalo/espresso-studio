"use client";

import { ReactNode } from "react";

import Footer from "./footer";
import Header from "./header";
import WhatsAppButton from "./whatsapp-button";

interface MainLayoutProps {
    children: ReactNode;
    whatsappNumber?: string;
    whatsappMessage?: string;
}

export default function MainLayout({
    children,
    whatsappNumber = "51946005554", // Cambiar por tu número real
    whatsappMessage,
}: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            {/* Main content with padding for fixed header */}
            <main className="flex-1 pt-20 md:pt-24">{children}</main>

            <Footer />

            <WhatsAppButton
                phoneNumber={whatsappNumber}
                message={whatsappMessage}
                position="bottom-right"
            />
        </div>
    );
}
