import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-10 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">BuildStack</h1>
        <button className="px-5 py-2 rounded-lg bg-white text-black font-medium hover:scale-105 transition">
          Get Started
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center text-center mt-32 px-6">
        <h2 className="text-6xl font-bold leading-tight max-w-5xl">
          Build websites with AI in seconds
        </h2>

        <p className="text-gray-400 mt-6 text-lg max-w-2xl">
          Prompt your idea, generate stunning websites instantly, edit visually,
          and deploy live.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition">
            Start Building
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-zinc-900 transition">
            Watch Demo
          </button>
        </div>
      </section>
    </main>
  );
}