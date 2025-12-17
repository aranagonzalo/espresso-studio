export default function Home() {
    return (
        <main>
            {/* HERO */}
            <section className="max-w-7xl mx-auto px-6 py-32">
                <h1 className="text-5xl font-semibold max-w-3xl">
                    Professional Coffee Equipment for High-Volume Businesses
                </h1>
                <p className="mt-6 text-neutral-400 max-w-xl">
                    Curated espresso machines and grinders for cafés, hotels and
                    specialty coffee operations.
                </p>
                <a
                    href="/contact"
                    className="
                                inline-flex items-center justify-center
                                px-6 py-3
                                bg-gold text-black
                                font-medium tracking-wide
                                hover:opacity-90
                                transition
                            "
                >
                    Request a quote
                </a>
            </section>

            {/* CATEGORIES */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    "Commercial Machines",
                    "Specialty Machines",
                    "Premium Grinders",
                ].map((item) => (
                    <div key={item} className="bg-surface p-8">
                        <h3 className="text-xl font-medium">{item}</h3>
                        <p className="text-neutral-400 mt-2">
                            Built for consistency and volume.
                        </p>
                    </div>
                ))}
            </section>
        </main>
    );
}
