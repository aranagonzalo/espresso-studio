import { machines } from "@/lib/machines";

export default function Machines() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-semibold mb-12">Machines</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {machines.map((m, i) => (
                    <a
                        key={i}
                        href={`/machines/${m.slug}`}
                        className="
                                        bg-surface p-6
                                        border border-white/10
                                        hover:border-gold
                                        transition
                                    "
                    >
                        <h3 className="text-lg font-medium">{m.name}</h3>
                        <p className="text-sm text-neutral-400 mt-2">
                            Ideal for {m.cupsPerDay} cups/day
                        </p>
                    </a>
                ))}
            </div>
        </main>
    );
}
