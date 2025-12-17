export default function Contact() {
    return (
        <main className="max-w-xl mx-auto px-6 py-24">
            <h1 className="text-3xl font-semibold mb-8">Contact</h1>
            <form className="space-y-4">
                <input className="w-full p-3 bg-surface" placeholder="Name" />
                <input
                    className="w-full p-3 bg-surface"
                    placeholder="Company"
                />
                <input className="w-full p-3 bg-surface" placeholder="Email" />
                <button className="w-full bg-gold text-black py-3 font-medium">
                    Send request
                </button>
            </form>
        </main>
    );
}
