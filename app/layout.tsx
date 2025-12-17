import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <header className="border-b border-white/10 bg-background">
                    <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        <span className="font-semibold tracking-wide">
                            Espresso Studio
                        </span>
                        <div className="flex gap-6 text-sm text-neutral-400">
                            <a href="/machines" className="hover:text-gold">
                                Machines
                            </a>
                            <a href="/grinders" className="hover:text-gold">
                                Grinders
                            </a>
                            <a href="/contact" className="hover:text-gold">
                                Contact
                            </a>
                        </div>
                    </nav>
                </header>

                {children}
                <footer className="border-t border-white/10 mt-24">
                    <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-neutral-400">
                        © Espresso Studio
                    </div>
                </footer>
            </body>
        </html>
    );
}
