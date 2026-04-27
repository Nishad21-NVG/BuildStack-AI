"use client";

import { useState } from "react";
import axios from "axios";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardPage() {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/projects/generate",
        { prompt }
      );

      localStorage.setItem("generatedHtml", res.data.html);
      window.location.href = "/preview";
    } catch {
      alert("Generation failed");
    }
  };

  return (
    <AuthGuard>
      <main className="min-h-screen bg-black text-white">
        <nav className="flex items-center justify-between px-10 py-6 border-b border-zinc-800">
          <h1 className="text-2xl font-bold">BuildStack Dashboard</h1>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="px-5 py-2 rounded-lg bg-white text-black font-medium"
          >
            Logout
          </button>
        </nav>

        <section className="max-w-5xl mx-auto mt-20 px-6">
          <h2 className="text-5xl font-bold mb-4">
            What do you want to build?
          </h2>

          <p className="text-zinc-400 mb-10">
            Describe your website idea and BuildStack AI will generate it.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Portfolio website for software engineer..."
              className="w-full h-40 bg-zinc-800 rounded-xl p-4 outline-none resize-none"
            />

            <button
              onClick={handleGenerate}
              className="mt-5 px-6 py-3 rounded-xl bg-white text-black font-semibold"
            >
              Generate Website
            </button>
          </div>
        </section>
      </main>
    </AuthGuard>
  );
}