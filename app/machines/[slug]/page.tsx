import { machines } from "@/lib/machines";

export default function MachineDetail({
    params,
}: {
    params: { slug: string };
}) {
    const machine = machines.find((m) => m.slug === params.slug);
    if (!machine) return null;

    return (
        <main className="max-w-5xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-semibold">{machine.name}</h1>
            <ul className="mt-6 space-y-2 text-neutral-300">
                {machine.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                ))}
            </ul>
            <a
                href="/contact"
                className="inline-block mt-12 px-6 py-3 bg-gold text-black font-medium"
            >
                Request quote
            </a>
        </main>
    );
}
